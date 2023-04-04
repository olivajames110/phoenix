import { FolderZipOutlined } from "@mui/icons-material";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { logDOM } from "@testing-library/react";
import { isArray, isEmpty, isNil } from "lodash";
import React from "react";
import {
  button_small_icon_styles,
  button_small_styles,
} from "../../../../assets/styles/globalInlineStyles";
import { fileDocumentSchema } from "../../../../forms/_formQuestions/_formSchema/fileDocumentSchema";
import { checkFilenameType } from "../../../../helpers/checkFilenameType";
import { checkFileStorageNameType } from "../../../../helpers/checkFileStorageNameType";
import { parseISOToDate } from "../../../../helpers/parseISOToDate";
import DisplayTable from "../../DisplayTable";
import FileButton from "../../FileButton";
import Loader from "../../Loader/Loader";
import PseudoFlatironTable from "../../PseudoFlatironTable";
import { DragAndDropFileUpload } from "../DragAndDropFileUpload";

const PreviewableFileTable = ({ title, data, docGroup, upload, sx }) => {
  const handleGroupDownload = () => {
    console.log(data);
  };

  const tableData = isNil(data) || !isArray(data) ? [] : data;

  const table_rowStyles = {
    padding: "6px 10px  !important",
    // paddingLeft: "4px !important",
  };
  const table_tdStyles = {
    fontSize: ".7rem",
    color: "#000000de",
  };
  return (
    <PseudoFlatironTable
      noMargin
      style={sx}
      noPadding
      title={title}
      headerContent={
        <Tooltip
          placement="top"
          title={`Download All Files to Zip Folder`}
          arrow
        >
          <Button
            sx={button_small_styles}
            startIcon={<FolderZipOutlined sx={button_small_icon_styles} />}
            onClick={handleGroupDownload}
          >
            Download ZIP
          </Button>
        </Tooltip>
      }
    >
      {upload ? (
        <Box padding={"8px"}>
          <DragAndDropFileUpload
            docGroup={docGroup}
            height={"70px"}
            message={"Click or Drag & Drop"}
            // docType={props.docType}
            // result={result}
            // setResult={setResult}
            // name={props.docType}
            // // isLoading={isLoading}
            onUpload={handleGroupDownload}
          />
        </Box>
      ) : null}
      {tableData.length === 0 ? (
        <Stack
          sx={table_rowStyles}
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography sx={table_tdStyles} variant="body1">
            No files found
          </Typography>
        </Stack>
      ) : (
        tableData.map((d, i) => {
          return (
            <Stack
              alignItems={"center"}
              key={checkFileStorageNameType(d)}
              sx={{
                borderBottom:
                  i === tableData.length - 1 ? "none" : "var(--border)",
                ...table_rowStyles,
              }}
              direction={"row"}
              justifyContent="space-between"
            >
              <FileButton
                sx={{ padding: 0 }}
                defaultStyles={table_tdStyles}
                label={checkFilenameType(d)}
                filename={checkFileStorageNameType(d)}
              />
              <Typography sx={table_tdStyles} variant="body1">
                {parseISOToDate(d?.uploadDate)}
              </Typography>
            </Stack>
          );
        })
      )}
    </PseudoFlatironTable>
  );
};

export default PreviewableFileTable;
