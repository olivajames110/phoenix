import { ChevronRightRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DisplayTable from "../../../../../components/shared/DisplayTable";
import FileDocumentTable from "../../../../../components/shared/Files/FileDocumentManager/FileDocumentTable";
import PrimaryWidget from "../../../../../components/shared/Widgets/PrimaryWidget";

const SubmittedLoanApplicationWidget = (props) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`my-loans/${"1234"}`);
  };
  const cols = [
    // {
    //   Header: "Name",
    //   accessor: "address",
    // },
    {
      Header: "Created Date",
      accessor: "createdDate",
    },
    {
      Header: "Loan Product Type",
      accessor: "loanProductType",
    },
    {
      Header: "Loan Purpose",
      accessor: "loanPurpose",
    },
    {
      Header: "Requested Loan Amount",
      accessor: "amount",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },
    {
      Header: "Loan Status",
      accessor: "status",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },

    {
      Header: " ",
      accessor: (d) => (
        // <Link className="action-button" to={`/my-loans/${"1234"}`}>
        //   View
        // </Link>
        <IconButton
          onClick={handleClick}
          color="primary"
          sx={{ background: "#39679112", marginLeft: "10px" }}
        >
          <ChevronRightRounded />
        </IconButton>
      ),
    },
  ];

  const DUMMY = [
    {
      createdDate: "12/10/2022",
      amount: "$300,000",
      loanProductType: "Stabalized Bridge",
      loanPurpose: "Purchase",
      loanSalesperson: "Jimmy Oliva",
      status: "Approved",
    },
    {
      createdDate: "12/10/2022",
      amount: "$300,000",
      loanProductType: "Stabalized Bridge",
      loanPurpose: "Purchase",
      loanSalesperson: "Jimmy Oliva",
      status: "In Progress",
    },
    {
      createdDate: "12/10/2022",
      amount: "$300,000",
      loanProductType: "Stabalized Bridge",
      loanPurpose: "Purchase",
      loanSalesperson: "Jimmy Oliva",
      status: "In Progress",
    },
  ];
  const columns = React.useMemo(() => cols, []);
  return <DisplayTable noBorder columns={columns} data={DUMMY} />;
};

export default SubmittedLoanApplicationWidget;
