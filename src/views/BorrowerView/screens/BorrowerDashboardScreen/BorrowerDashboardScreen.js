import React, { useState } from "react";

import { Box, Stack } from "@mui/material";

import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";

import SubmittedLoanApplicationWidget from "./borrowerDashboardWidgets/SubmittedLoanApplicationWidget";

import PrimaryWidget from "../../../../components/shared/Widgets/PrimaryWidget";
import { apiDomains } from "../../../../global/api/apiDomains";
import "./BorrowerDashboard.css";

import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import {
  CreditAuthorizationWidget,
  LoanApplicationWidget,
  LoanScenariosWidget,
  MessagesWidget,
} from "./borrowerDashboardWidgets";
import {
  ActiveLoans,
  BorrowerProfile,
  CreditAuthStatus,
  MoneyBorrowed,
} from "./borrowerDashboardWidgets/secondaryWidgets";

const BorrowerDashboardScreen = (props) => {
  const [creditAuthModalIsActive, setCreditAuthModalIsActive] = useState(false);
  const [loanAppModalIsActive, setLoanAppModalIsActive] = useState(false);
  const handleLoanAppClick = () => {
    setLoanAppModalIsActive(true);
  };

  const handleCreditAuthClick = () => {
    setCreditAuthModalIsActive(true);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexGrow: 1, height: "100%" }}>
        <DashboardBody
          handleCreditAuthClick={handleCreditAuthClick}
          handleLoanAppClick={handleLoanAppClick}
        />
        {/* <MessagesWidget /> */}
      </Box>
    </>
  );
};

const DashboardBody = ({ handleLoanAppClick, handleCreditAuthClick }) => {
  const [token, setToken] = useState(null);
  // const { open, ready } = usePlaidLink({
  //   token: token,
  //   env: "sandbox",
  //   onSuccess: (public_token, metadata) => {
  //     console.log("Success");
  //   },
  // });

  const handleLinkAccount = (event) => {
    console.log("Link");
    // open();
  };

  React.useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch(`${apiDomains}/link_initiate`, {
        method: "POST",
      });
      const { link_token } = await response.json();
      setToken(link_token);
    };
    createLinkToken();
  }, []);

  const widgets__secondary = (
    <MuiGrid sx={{ paddingTop: "10px" }} spacing={2}>
      <GridItem size={12 / 5}>
        <ActiveLoans />
      </GridItem>
      <GridItem size={12 / 5}>
        <MoneyBorrowed />
      </GridItem>
      <GridItem size={12 / 5}>
        <BorrowerProfile onClick={handleLoanAppClick} />
      </GridItem>
      <GridItem size={12 / 5}>
        <CreditAuthStatus onClick={handleCreditAuthClick} />
      </GridItem>
      <GridItem size={12 / 5}>
        {/* <BankAccount ready={ready} onClick={handleLinkAccount} /> */}
      </GridItem>
    </MuiGrid>
  );

  return (
    <Stack sx={{ flexGrow: 1 }}>
      <ScreenSubTitleSection>Welcome back, Jimmy Oliva</ScreenSubTitleSection>

      <ScreenBody sx={{ overflowY: "auto", flexGrow: 1, height: "100%" }}>
        <Stack
          direction={"row"}
          spacing={2}
          // padding={"14px 0"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack flexGrow={1} spacing={2}>
            <MuiGrid spacing={2}>
              <GridItem size={4}>
                <LoanScenariosWidget actionButtonOnClick={handleLoanAppClick} />
              </GridItem>
              <GridItem size={4}>
                <LoanApplicationWidget
                  actionButtonOnClick={handleLoanAppClick}
                />
              </GridItem>
              <GridItem size={4}>
                <CreditAuthorizationWidget
                  actionButtonOnClick={handleCreditAuthClick}
                />
              </GridItem>
            </MuiGrid>
            <PrimaryWidget title="My Loan Applications">
              <SubmittedLoanApplicationWidget />
            </PrimaryWidget>
          </Stack>
          <MessagesWidget />
        </Stack>
      </ScreenBody>
    </Stack>
  );
};

export default BorrowerDashboardScreen;
