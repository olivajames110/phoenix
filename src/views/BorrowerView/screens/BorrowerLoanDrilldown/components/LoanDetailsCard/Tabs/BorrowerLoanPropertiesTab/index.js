import { Box } from "@mui/material";
import React from "react";
import DrilldownScreenTab from "../../../../../../../../components/Drilldown/DrilldownScreenTab";
import DisplayDataFieldItem from "../../../../../../../../components/shared/DisplayDataFieldItem";
import MuiGrid from "../../../../../../../../components/shared/MuiGrid";
import GridItem from "../../../../../../../../components/shared/MuiGrid/GridItem";
import PseudoFlatironTable from "../../../../../../../../components/shared/PseudoFlatironTable";
import { DUMMY_LOAN_APP } from "../../../../tests/DUMMY_LOAN_APP";
// import "./BorrowerLoanPropertiesTab.css";

const BorrowerLoanPropertiesTab = (props) => {
  return (
    <DrilldownScreenTab title={"Loan Properties"}>
      {/* <DrilldownHeader h3>Your Information</DrilldownHeader> */}
      <PseudoFlatironTable title="Details and Contact Info">
        <MuiGrid spacing={3}>
          <GridItem size={3}>
            <DisplayDataFieldItem
              label="Borrower Full Name:"
              value={`${DUMMY_LOAN_APP.firstName} ${DUMMY_LOAN_APP.lastName}`}
            />
          </GridItem>
          <GridItem size={3}>
            <DisplayDataFieldItem
              label="Email Address:"
              value={DUMMY_LOAN_APP.emailAddress}
            />
          </GridItem>
          <GridItem size={3}>
            <DisplayDataFieldItem
              label="Phone Number:"
              value={DUMMY_LOAN_APP.phoneNumber}
            />
          </GridItem>
          <GridItem size={3}>
            <DisplayDataFieldItem
              label="Primary Address:"
              value={DUMMY_LOAN_APP.primaryAddress.address.fullAddress}
            />
          </GridItem>
        </MuiGrid>
      </PseudoFlatironTable>
      <Box mt={"30px"}>
        <PseudoFlatironTable title="Experience">
          <MuiGrid spacing={3}>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Borrower Full Name:"
                value={`${DUMMY_LOAN_APP.firstName} ${DUMMY_LOAN_APP.lastName}`}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Email Address:"
                value={DUMMY_LOAN_APP.emailAddress}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Phone Number:"
                value={DUMMY_LOAN_APP.phoneNumber}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Primary Address:"
                value={DUMMY_LOAN_APP.primaryAddress.address.fullAddress}
              />
            </GridItem>
          </MuiGrid>
        </PseudoFlatironTable>
      </Box>
      <Box mt={"30px"}>
        <PseudoFlatironTable title="Liquidity">
          <MuiGrid spacing={3}>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Borrower Full Name:"
                value={`${DUMMY_LOAN_APP.firstName} ${DUMMY_LOAN_APP.lastName}`}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Email Address:"
                value={DUMMY_LOAN_APP.emailAddress}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Phone Number:"
                value={DUMMY_LOAN_APP.phoneNumber}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Primary Address:"
                value={DUMMY_LOAN_APP.primaryAddress.address.fullAddress}
              />
            </GridItem>
          </MuiGrid>
        </PseudoFlatironTable>
      </Box>
      <Box mt={"30px"}>
        <PseudoFlatironTable title="Background">
          <MuiGrid spacing={3}>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Borrower Full Name:"
                value={`${DUMMY_LOAN_APP.firstName} ${DUMMY_LOAN_APP.lastName}`}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Email Address:"
                value={DUMMY_LOAN_APP.emailAddress}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Phone Number:"
                value={DUMMY_LOAN_APP.phoneNumber}
              />
            </GridItem>
            <GridItem size={3}>
              <DisplayDataFieldItem
                label="Primary Address:"
                value={DUMMY_LOAN_APP.primaryAddress.address.fullAddress}
              />
            </GridItem>
          </MuiGrid>
        </PseudoFlatironTable>
      </Box>
    </DrilldownScreenTab>
  );
};

export default BorrowerLoanPropertiesTab;
