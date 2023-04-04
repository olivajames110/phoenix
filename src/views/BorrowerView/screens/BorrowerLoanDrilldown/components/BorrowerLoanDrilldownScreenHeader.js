import { AttachMoney } from "@mui/icons-material";
import { FormControlLabel, Switch } from "@mui/material";
import { Stack } from "@mui/system";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DrilldownHeader from "../../../../../components/Drilldown/DrilldownHeader";

import DrilldownHeaderRow from "../../../../../components/Drilldown/DrilldownHeaderRow";
import DrilldownOverviewBox from "../../../../../components/Drilldown/DrilldownOverviewBox";
import DrilldownOverviewItem from "../../../../../components/Drilldown/DrilldownOverviewItem";
import DrilldownTitleButton from "../../../../../components/Drilldown/DrilldownTitleButton";
import { cookieTypes } from "../../../../../global/cookieTypes";

const BorrowerLoanDrilldownScreenHeader = (props) => {
  const dropdownButtons = [
    {
      label: "Example 1",
      icon: <AttachMoney fontSize="large" />,
      onClick: () => console.log("CLICK"),
    },
    {
      label: "Example 1",
      icon: <AttachMoney fontSize="large" />,
      onClick: () => console.log("CLICK 2"),
    },
    {
      label: "Example 1",
      icon: <AttachMoney fontSize="large" />,
      onClick: () => console.log("CLICK 3"),
    },
  ];

  const toggleShowNotes = (e) => {
    let checkedCookie = Cookies.get(cookieTypes.loanServicing.SHOW_NOTES);
    console.log("TOGGLE : checkedCookie", checkedCookie);

    if (checkedCookie) {
      console.log("SET FALSE");
      Cookies.remove(cookieTypes.loanServicing.SHOW_NOTES);
    }

    if (checkedCookie === undefined) {
      console.log("SET TRUE");
      Cookies.set(cookieTypes.loanServicing.SHOW_NOTES, "true");
    }

    props.setShowNotes((s) => !s);
  };

  // useEffect(() => {
  //   if (Cookies.get(cookieTypes.categorizedFiles) === "true") {
  //     props.setShowNotes(true);
  //   }
  // }, []);
  const formData = useSelector((state) => state.formData);
  return (
    <DrilldownHeader>
      {/* <DrilldownHeaderRow>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
          width="100%"
        >
          <DrilldownTitleButton
            isLoading={props.isLoading}
            onClick={() => console.log("click")}
          >
            Example title
          </DrilldownTitleButton>
        </Stack>
      </DrilldownHeaderRow> */}
      <DrilldownHeaderRow borderTop>
        <Stack spacing={2} direction="row">
          <DrilldownOverviewBox>
            <DrilldownOverviewItem label="Loan Id:" value={formData?.loanId} />
            <DrilldownOverviewItem
              label="Current Note Holder:"
              value={formData?.currentNoteHolder}
            />
            <DrilldownOverviewItem label="Loan Purpose:" value={"Example"} />
            <DrilldownOverviewItem label="Closing Date:" value={"Example"} />
            <DrilldownOverviewItem label="Interest Rate:" value={"Example"} />
          </DrilldownOverviewBox>
          <DrilldownOverviewBox>
            <DrilldownOverviewItem
              label="Requested Amount:"
              value={"Example"}
            />
            <DrilldownOverviewItem label="Loan Product:" value={"Example"} />
            <DrilldownOverviewItem label="Loan Purpose:" value={"Example"} />
          </DrilldownOverviewBox>
        </Stack>
      </DrilldownHeaderRow>
    </DrilldownHeader>
  );
};

export default BorrowerLoanDrilldownScreenHeader;
