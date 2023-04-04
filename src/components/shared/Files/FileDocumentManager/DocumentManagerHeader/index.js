import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import "./DocumentManagerHeader.css";
import { cookieTypes } from "../../../../../global/cookieTypes";
import FileDocumentGroupModal from "../../../../form/components/modals/FileDocumentGroupModal";

const DocumentManagerHeader = (props) => {
  const [numOfHiddenFiles, setNumOfHiddenFiles] = useState([]);
  const [numOfFinalFiles, setNumOfFinalFiles] = useState([]);
  const formData = useSelector((state) => state.formData);
  let checkedCookie = Cookies.get(cookieTypes.categorizedFiles);
  useEffect(() => {
    let hidden = formData.documents.filter((d) => d.isHidden === true);

    let final = formData.documents.filter((d) => d.isFinal === true);

    setNumOfHiddenFiles(hidden);
    setNumOfFinalFiles(final);
  }, [formData]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
      className="document-manager-header"
    >
      <FileDocumentGroupModal />

      <div className="document-manager-header__actions">
        <div className="document-manager-header-action-item">
          <FormControlLabel
            className={`${!props.showFinal ? "show" : null}`}
            control={
              <Switch
                size="small"
                checked={props.showFinal}
                onChange={props.handleFinalFiles}
                name="final"
              />
            }
            label={`Show Only Final ${
              numOfFinalFiles.length >= 1 ? `(${numOfFinalFiles.length})` : ""
            }`}
          />
        </div>
        <div className="document-manager-header-action-item">
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={props.showHidden}
                onChange={props.toggleHiddenFiles}
                name="hidden"
              />
            }
            label={`Show Hidden (${
              numOfHiddenFiles.length >= 1 ? numOfHiddenFiles.length : 0
            })`}
          />
        </div>
        <div className="document-manager-header-action-item">
          <FormControlLabel
            control={
              <Switch
                size="small"
                defaultChecked={checkedCookie === "true"}
                onChange={props.toggleCategorizeDocuments}
                name="categorize"
              />
            }
            label={`Categorize`}
          />
        </div>
      </div>
    </Box>
  );
};

export default DocumentManagerHeader;
