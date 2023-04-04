import React from "react";
import { checkFilenameType } from "../../../../helpers/checkFilenameType";
import { getDocumentGroupName } from "../../../../helpers/getDocumentGroupName";
import { getDocumentGroupType } from "../../../../helpers/getDocumentGroupType";
import { getFileExtensionFromString } from "../../../../helpers/getFileExtensionFromString";
import { parseISOToDateTime } from "../../../../helpers/parseISOToDateTime";
import { removeEmailAddressFromString } from "../../../../helpers/removeEmailAddressFromString";
import { removeFileExtensionFromString } from "../../../../helpers/removeFileExtensionFromString";
import FileActionsPopover from "../../Files/FileActionsPopover";

export const tableColumnsLoanFilesUW = [
  {
    Header: "File Name",
    accessor: (f) => checkFilenameType(f),
  },
  {
    Header: "Document Group",
    // accessor: "docGroup",
    // accessor: (d) => fileDocumentSchema[d.docGroup].label,
    accessor: (d) => getDocumentGroupName(d.docGroup),
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

  // {
  //   Header: "Upload Date",
  //   accessor: (d) => ,
  // },
  // {
  //   Header: "Size",
  //   accessor: (d) => convertFileSizeToMB(d.size),
  // },
  {
    Header: " ",

    accessor: (d) => <FileActionsPopover file={d} />,
  },
];
