import { Delete } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TableHeader from "../../../../../shared/Table/components/TableHeader";

// import TableHeader from "../../../../../shared/Table/components/TableHeader";
import InputTable from "../../../../../shared/Table/InputTable/InputTable";

// import InputTable from "../../../../../shared/Table/InputTable/InputTable";
import FileUploadSelectedFileRow from "./FileUploadSelectedFileRow";

const FileUploadSelectedFiles = (props) => {
  const useStyles = makeStyles(() => ({
    chipCustom: {
      "& .MuiChip-label": {
        fontSize: ".75rem",

        // color: "#ffffff",
        fontWeight: "400 !important",
      }, // sub-selector
    },
  }));
  const customChipClass = useStyles();
  return (
    <div className="file-thumbail-container">
      {props.showDocOptions ? (
        <InputTable styled>
          {props.showDocOptions && (
            <TableHeader
              tableHeader={
                props.docGroup
                  ? ["File Name", "Doc Type", ""]
                  : ["File Name", "Doc Group", "Doc Type", ""]
              }
            />
          )}
          {/* <TableHeader tableHeader={["Fee Name", "Value"]} /> */}
          <tbody>
            {props.selectedFiles.map((f, i) => {
              // console.log(`file ${i}:`, f);

              return (
                <FileUploadSelectedFileRow
                  selectedFile={f}
                  index={i}
                  onUpdate={props.onUpdate}
                  onDelete={props.onDelete}
                  showDocOptions={props.showDocOptions}
                  docGroup={props.docGroup}
                  allFiles={props.selectedFiles}
                  // {...props}
                />
              );
            })}
          </tbody>
        </InputTable>
      ) : (
        <Stack p={"10px 5px"} direction="row" spacing={1}>
          {props.selectedFiles.map((f) => (
            // <div className="file-thumbnail-path">
            //   <span>{f.file.path}</span>
            //   <button type="button" onClick={() => props.onDelete(f.id)}>
            //     <Delete />
            //   </button>
            // </div>
            <Chip
              key={f.file.path}
              onDelete={() => props.onDelete(f.id)}
              className={customChipClass.chipCustom}
              size="small"
              color="secondary"
              variant="outlined"
              label={f.file.path}
              deleteIcon={<Delete />}
            />
          ))}
        </Stack>
      )}
    </div>
  );
};

export default FileUploadSelectedFiles;
