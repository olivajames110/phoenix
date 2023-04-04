import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DashboardScreen from "../../../../components/layout/DashboardScreen";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import ScreenSubTitle from "../../../../components/layout/Screen/ScreenSubTitle";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import BorderCard from "../../../../components/shared/BorderCard";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import SubmittedLoanApplicationWidget from "../BorrowerDashboardScreen/borrowerDashboardWidgets/SubmittedLoanApplicationWidget";

const BorrowerLoansScreen = (props) => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <ScreenSubTitleSection>My Loan Applications</ScreenSubTitleSection>

      <ScreenBody>
        <MuiGrid spacing={4}>
          <GridItem size={12}>
            <BorderCard type="bar">
              <SubmittedLoanApplicationWidget />
            </BorderCard>
          </GridItem>
        </MuiGrid>
      </ScreenBody>
    </Stack>
  );
};

const LoanItem = (props) => {
  return (
    <Box
      border={"var(--border)"}
      padding="10px"
      sx={{
        background: "#ffffff",
      }}
    >
      <Typography variant="h4">Title Item</Typography>
      <Typography variant="body1">Messages</Typography>
    </Box>
  );
};

export default BorrowerLoansScreen;
