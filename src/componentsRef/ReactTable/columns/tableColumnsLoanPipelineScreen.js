import React from "react";
import { Link } from "react-router-dom";
import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { parseISOToString } from "../../../../helpers/parseISOToString";

export const tableColumnsLoanPipelineScreen = [
  {
    Header: "Loan Product Type",
    accessor: "loanProductType",
  },
  {
    Header: "Loan Purpose",
    accessor: "loanPurpose",
  },
  {
    Header: "Assigned To",
    accessor: "loanAssignedTo",
  },
  {
    Header: "Loan Status",
    accessor: "loanStatus",
  },
  {
    Header: "Created By",
    accessor: "createdBy",
  },
  {
    Header: "Closing Date",
    accessor: (d) => parseISOToString(d.closingDate),
  },
  // {
  //   Header: "Salesperson",
  //   accessor: (d) => console.log(d.loanSalesPerson), //loanSalesPerson
  // },
  // {
  //   Header: "Assigned",
  //   accessor: (d) =>
  //     console.log(typeof d.loanAssignedTo === "object" ? d : null), //loanAssignedTo
  // },
  {
    Header: "Requested Loan Amount",
    accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
  },

  {
    Header: "Submission Date",
    accessor: (d) => parseISOToString(d.submittedTimestamp),
  },

  {
    Header: " ",
    accessor: (d) => (
      <Link className="action-button" to={`/deals/pipeline/deal/${d._id}`}>
        View
      </Link>
    ),
  },
];
