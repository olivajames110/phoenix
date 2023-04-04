import React from "react";
import { Link } from "react-router-dom";
import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { parseISOToString } from "../../../../helpers/parseISOToString";
import FormattedAddress from "../../../form/components/inputs/generic/AddressAutofillField/components/FormattedAddress";

export const tableColumnsDealApplicationsScreen = [
  // {
  //   Header: "ID",
  //   accessor: (d) => String(d._id).substring(0, 4),
  // },
  // {
  //   Header: "Name",
  //   accessor: (d) => d.loanName,
  // },

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
    Header: "Amount",
    accessor: (d) =>
      d.requestedLoanAmount === undefined
        ? "-"
        : `$${formFormatDollar(d.requestedLoanAmount)}`,
    // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
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
    Header: "Name",
    accessor: (d) => `${d.createdByFirstName} ${d.createdByLastName}`,
  },

  {
    Header: "Salesperson",
    accessor: "loanSalesperson",
  },

  {
    Header: "Submission Date",
    accessor: (d) => parseISOToString(d.submittedTimestamp),
  },

  // {
  //   Header: " ",
  //   accessor: (d) => (
  //     <Link className="action-button" to={`/deals/pipeline/deal/${d._id}`}>
  //       View
  //     </Link>
  //   ),
  // },
];
// 2022-08-04T04:00:00.000Z
// 2022-08-19T16:02:54.408
