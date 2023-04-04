import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { parseISOToString } from "../../../../helpers/parseISOToString";
import { stringProtector } from "../../../../helpers/stringProtector";

export const tableColumnsDealSubmissionScreen = [
  {
    Header: "ID",
    accessor: "ironId",
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
        ? "—"
        : `$${formFormatDollar(d.requestedLoanAmount)}`,
  },

  {
    Header: "Salesperson",
    accessor: (d) =>
      d.loanSalesperson === typeof "string " ||
      d.loanSalesperson === null ||
      d.loanSalesperson === undefined
        ? d.loanSalesperson
        : d.loanSalesperson.fullName, //loanSalesperson
  },

  {
    Header: "Status",
    accessor: (d) => stringProtector(d["loanStatus"]),
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
