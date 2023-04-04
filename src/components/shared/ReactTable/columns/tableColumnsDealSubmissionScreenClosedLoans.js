import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { parseISOToString } from "../../../../helpers/parseISOToString";

export const tableColumnsDealSubmissionScreenClosedLoans = [
  // {
  //   Header: "ID",
  //   accessor: (d) => String(d._id).substring(0, 4),
  // },
  // {
  //   Header: "Name",
  //   accessor: (d) => d.loanName,
  // },
  {
    Header: "ID",
    accessor: "ironId",
  },
  {
    Header: "Closed Loan ID",
    accessor: (d) =>
      d.frcClosedLoanId === undefined || d.frcClosedLoanId === null
        ? "—"
        : d.frcClosedLoanId,
  },
  {
    Header: "Name",
    accessor: "loanSubjectName",
  },
  {
    Header: "Product",
    accessor: "loanProductType",
  },
  {
    Header: "Purpose",
    accessor: "loanPurpose",
  },
  {
    Header: "Amount",
    accessor: (d) =>
      d.requestedLoanAmount === undefined
        ? "-"
        : `$${formFormatDollar(d.requestedLoanAmount)}`,
  },

  {
    Header: "Status",
    accessor: "loanStatus",
  },

  {
    Header: "Closing Date",
    accessor: (d) => parseISOToString(d.closingDate),
  },

  {
    Header: "Submitted",
    accessor: (d) => parseISOToString(d.submittedTimestamp),
  },
];
