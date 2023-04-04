import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import BorderCard from "../../../../components/shared/BorderCard";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import SubmittedLoanApplicationWidget from "../BorrowerDashboardScreen/borrowerDashboardWidgets/SubmittedLoanApplicationWidget";

const BorrowerCreditAuthScreen = (props) => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <ScreenSubTitleSection>
        Submitted Credit Authorizations
      </ScreenSubTitleSection>

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

export default BorrowerCreditAuthScreen;
