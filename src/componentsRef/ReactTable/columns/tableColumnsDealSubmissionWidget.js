import { Link } from "react-router-dom";
import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";

export const tableColumnsDealSubmissionWidget = [
  // {
  //   Header: "Name",
  //   accessor: "address",
  // },
  {
    Header: "Product",
    accessor: "loanProductType",
  },
  {
    Header: "Loan Purpose",
    accessor: "loanPurpose",
  },
  {
    Header: "Requested Loan Amount",
    accessor: (d) => formFormatDollar(d.requestedLoanAmount),
  },

  {
    Header: " ",
    accessor: (d) => (
      <Link className="action-button" to={`/deals/pipeline/deal/${d.ironId}`}>
        View
      </Link>
    ),
  },
];
