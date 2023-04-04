import { Button } from "@mui/material";
import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { parseISOToString } from "../../../../helpers/parseISOToString";

export const tableColumnsBorrowerSubmissionsScreen = [
  // {
  //   Header: "ID",
  //   accessor: (d) => String(d._id).substring(0, 4),
  // },
  // {
  //   Header: "Name",
  //   accessor: (d) => d.loanName,
  // },
  {
    Header: "Submitted",
    accessor: (d) => parseISOToString(d.submittedTimestamp),
  },
  {
    Header: "Borrower Name",
    accessor: (d) => "John Smith",
  },
  {
    Header: "Address",
    accessor: (d) => "150 Great Neck Road, Great Neck NY, 11743",
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
    Header: "Action",
    accessor: (d) => <Button variant="outlined">Assign</Button>,
  },
];
