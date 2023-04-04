import { Check, VisibilityOffOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { checkFilenameType } from "../../../../helpers/checkFilenameType";
import { getDocumentGroupName } from "../../../../helpers/getDocumentGroupName";
import { getDocumentGroupType } from "../../../../helpers/getDocumentGroupType";
import { getFileExtensionFromString } from "../../../../helpers/getFileExtensionFromString";
import { parseISOToDateTime } from "../../../../helpers/parseISOToDateTime";
import { removeEmailAddressFromString } from "../../../../helpers/removeEmailAddressFromString";
import { removeFileExtensionFromString } from "../../../../helpers/removeFileExtensionFromString";
import FileActionsPopover from "../../Files/FileActionsPopover";

const checkFileStatus = (file) => {
  let val = checkFilenameType(file);

  let valFinal = (
    <div id="final" className="icon-table-cell">
      <Check />
      <Tooltip arrow placement="top" title="Final">
        <span>{checkFilenameType(file)}</span>
      </Tooltip>
    </div>
  );

  let valHidden = (
    <div id="hidden" className="icon-table-cell">
      <VisibilityOffOutlined />
      <Tooltip arrow placement="top" title="Hidden">
        <span>{checkFilenameType(file)}</span>
      </Tooltip>
    </div>
  );

  let iconVal = file.isFinal && !file.isHidden ? valFinal : valHidden;
  return file.isFinal || file.isHidden ? iconVal : val;
};

export const tableColumnsLoanFilesCategorized = [
  {
    Header: "File Name",
    accessor: (f) => checkFileStatus(f),
  },

  {
    Header: "Document Type",
    accessor: (d) => getDocumentGroupType(d.docType),
    // accessor: "docType",
  },
  {
    Header: "Uploaded By",
    accessor: (d) =>
      `${removeEmailAddressFromString(
        d.uploadedBy
      ).toUpperCase()} on ${parseISOToDateTime(d.uploadDate)}`,
    // accessor: "uploadedBy",
  },

  {
    Header: " ",

    accessor: (d) => <FileActionsPopover file={d} />,
  },
];
