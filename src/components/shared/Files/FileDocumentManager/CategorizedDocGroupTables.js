import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tableColumnsLoanFilesUW } from "../../ReactTable/columns/tableColumnsLoanFilesUW";
import GeneralDocumentUpload from "../GeneralDocumentUpload";
import FileDocGroupTableCard from "./FileDocGroupTableCard";

const CategorizedDocGroupTables = (props) => {
  const [docGroups, setDocGroups] = useState([]);
  const [activeDocGroup, setActiveDocGroup] = useState(null);
  const formData = useSelector((state) => state.formData);
  const columns = React.useMemo(() => tableColumnsLoanFilesUW, []);

  useEffect(() => {
    let groups = [];
    props.documents.forEach((d) => groups.push(d.docGroup));
    let unique = [...new Set(groups)];
    console.log(
      "🚀 ~ file: CategorizedDocGroupTables.js ~ line 20 ~ useEffect ~ unique",
      unique
    );
    let sorted = unique.sort((a, b) => a.localeCompare(b));
    setDocGroups(sorted);
    setActiveDocGroup(sorted[0]);
  }, [props.documents]);

  const emptyContent = (
    <Box textAlign={"center"} padding={"45px 0"}>
      There are no documents uploaded yet.
    </Box>
  );
  console.log("---------------------------------------");
  const table = (
    <div className="doc-group-tables-container">
      <GeneralDocumentUpload dealId={formData._id} />
      <Stack spacing={1.5} direction={"column"}>
        {docGroups.length >= 1
          ? docGroups.map((dg, i) => (
              <FileDocGroupTableCard
                key={i}
                docGroup={dg}
                documents={props.documents.filter((d) => d.docGroup === dg)}
                // documents={props.documents}
                // activeDocGroup={activeDocGroup}
                // setActiveDocGroup={setActiveDocGroup}
              />
            ))
          : emptyContent}
      </Stack>
    </div>
  );
  return (
    <>
      {/* {nav} */}
      {table}
    </>
  );
};

export default CategorizedDocGroupTables;
