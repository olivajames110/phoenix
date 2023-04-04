import React from "react";
import TabSwitcher from "../../../../../../components/shared/TabSwitcher";

const BorrowerLoanTabSwitcher = ({ value, setValue }) => {
  const borrowerLoanTabs = [
    {
      label: "Overview",
      to: "loan-details",
    },
    {
      label: "Loan Application Details",
      to: "loan-details",
    },
    {
      label: "Credit Authorization",
      to: "credit-authorzation",
    },
    {
      label: "Files & Documents",
      to: "files",
    },
    {
      label: "Borrowers & Guarantors",
      to: "borrowers",
    },

    {
      label: "Properties",
      to: "properties",
    },
    // {
    //   label: "Submissions",
    //   to: "submissions",
    // },
    // {
    //   label: "Messages",
    //   to: "messages",
    // },
  ];
  return (
    <TabSwitcher
      id="primary"
      value={value}
      link
      noBorder
      setValue={setValue}
      tabs={borrowerLoanTabs}
    />
  );
};

export default BorrowerLoanTabSwitcher;
