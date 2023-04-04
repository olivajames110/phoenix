import { FolderZipOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getDocumentGroupName } from "../../../../../helpers/getDocumentGroupName";
import GeneralDocumentUpload from "../../GeneralDocumentUpload";
import FileDocumentTable from "../FileDocumentTable";

import { isNil } from "lodash";
import { arrayProtector } from "../../../../../helpers/arrayProtector";
import { useFilesHook } from "../../../../../hooks/useFilesHook";
import Loader from "../../../Loader/Loader";
import { tableColumnsLoanFilesAll } from "../../../ReactTable/columns/tableColumnsLoanFilesAll";
import "./FileDocGroupTableCard.css";

const FileDocGroupTableCard = (props) => {
  const [uploadIsActive, setUploadIsActive] = useState(false);

  const formData = useSelector((state) => state.formData);

  const { filesGetIsLoading, downloadFilesAsZip } = useFilesHook();
  const showAllFiles = isNil(props?.docGroup);
  //Downloads zip file of all deal files
  const getDocGroupsZip = async () => {
    const params = {
      dealId: formData._id,
      docGroup: props?.docGroup,
      downloadName: showAllFiles
        ? `Loan ${formData.ironId} - All Files`
        : `Loan ${formData.ironId} - ${getDocumentGroupName(props.docGroup)}`,
    };
    await downloadFilesAsZip(params);
  };

  const allFilesColumns = React.useMemo(() => tableColumnsLoanFilesAll, []);

  const tableTitle = props.title
    ? props.title
    : `${
        showAllFiles ? "All Loan Files" : getDocumentGroupName(props.docGroup)
      } (${arrayProtector(props.documents)?.length})`;

  // console.log("TABLE COMPONENT PROPS", props);
  return (
    <div
      id={props.docGroup}
      style={props.style}
      className={`doc-group-table-card-outer-wrapper`}
    >
      <article className="doc-group-table-card">
        <div className="doc-group-table-card__header">
          <h2>{tableTitle}</h2>
          <div className="header-buttons-container">
            {showAllFiles ? null : (
              <Tooltip
                placement="top"
                title={`Upload Files To ${getDocumentGroupName(
                  props.docGroup
                )} Group`}
                arrow
              >
                <button
                  className={` ${uploadIsActive ? "active" : ""}`}
                  type="button"
                  id="upload"
                  onClick={() => setUploadIsActive((s) => !s)}
                >
                  <UploadFileOutlined />
                  <span>Upload</span>
                </button>
              </Tooltip>
            )}
            {showAllFiles ? (
              <Tooltip
                placement="top"
                title={`Download All Files to Zip Folder`}
                arrow
              >
                <button onClick={getDocGroupsZip} type="button" id="download">
                  <FolderZipOutlined />
                  <span>Download ZIP</span>
                  {filesGetIsLoading ? (
                    <div
                      id="right"
                      style={{ marginLeft: "4px" }}
                      className="icon-wrapper"
                    >
                      <Loader block size={"14px"} />
                    </div>
                  ) : null}
                </button>
              </Tooltip>
            ) : (
              <Tooltip
                placement="top"
                title={`Download ${getDocumentGroupName(props.docGroup)} Files`}
                arrow
              >
                <button onClick={getDocGroupsZip} type="button" id="download">
                  <FolderZipOutlined />
                  <span>ZIP</span>
                  {filesGetIsLoading ? (
                    <div
                      id="right"
                      style={{ marginLeft: "4px" }}
                      className="icon-wrapper"
                    >
                      <Loader block size={"14px"} />
                    </div>
                  ) : null}
                </button>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="doc-group-table-card__body">
          {uploadIsActive && (
            <div className="doc-group-file-upload">
              <GeneralDocumentUpload
                dealId={formData._id}
                onSuccess={() => setUploadIsActive(false)}
                docGroup={props.docGroup}
              />
            </div>
          )}

          <FileDocumentTable
            columns={allFilesColumns}
            data={props.documents}
            // data={filteredFiles}
            //  data={docGroupFiles}
          />
        </div>
      </article>
    </div>
  );
};

export default FileDocGroupTableCard;
