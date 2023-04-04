import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { parseISOToString } from "../../../../helpers/parseISOToString";

export const tableColumnsAssetTrackerScreen = [
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
    Header: "Name",
    accessor: "loanSubjectName",
    // accessor: "address",
    // accessor: (d) => (
    //   <Link className="action-button" to={`/deals/pipeline/deal/${d._id}`}>
    //     {d.address}
    //   </Link>
    // ),
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
    Header: "Created By",
    accessor: (d) =>
      d.createdByFirstName === undefined || d.createdByLastName === undefined
        ? "Unknown"
        : `${d.createdByFirstName} ${d.createdByLastName}`,
  },
  // {
  //   Header: "Salesperson",
  //   accessor: (d) =>
  //     d.loanSalesPerson.fullName === undefined ||
  //     d.loanSalesPerson.fullName === null
  //       ? "—"
  //       : d.loanSalesPerson.fullName, //loanSalesPerson
  // },
  {
    Header: "Assigned",
    accessor: (d) =>
      d.loanAssignedTo === typeof "string " ||
      d.loanAssignedTo === null ||
      d.loanAssignedTo === undefined
        ? d.loanAssignedTo
        : d.loanAssignedTo.fullName, //loanAssignedTo
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
