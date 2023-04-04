import React from "react";
import { useSelector } from "react-redux";
import { tableColumnsLoanFilesAll } from "../../ReactTable/columns/tableColumnsLoanFilesAll";
import { tableColumnsLoanFilesUW } from "../../ReactTable/columns/tableColumnsLoanFilesUW";
import GeneralDocumentUpload from "../GeneralDocumentUpload";
import FileDocGroupTableCard from "./FileDocGroupTableCard";
import FileDocumentTable from "./FileDocumentTable";

const AllFilesTable = (props) => {
  const columns = React.useMemo(() => tableColumnsLoanFilesAll, []);
  const formData = useSelector((state) => state.formData);
  const showUpload = props.documents !== undefined && !props.hideUpload;
  return (
    <>
      {showUpload && <GeneralDocumentUpload dealId={formData._id} />}
      {/* <FileDocGroupTableCard documents={props.documents} columns={columns} /> */}
      <FileDocGroupTableCard
        style={props.style}
        columns={columns}
        title={props.title}
        documents={props.documents}
      />
      {/* <article id="all-files-table">
        <FileDocumentTable columns={columns} data={props.documents} />
      </article> */}
    </>
  );
};

export default AllFilesTable;
