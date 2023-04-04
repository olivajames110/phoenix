import { EditRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import DrilldownScreenTab from "../../../../../../../../components/Drilldown/DrilldownScreenTab";
import DisplayDataFieldGridItem from "../../../../../../../../components/shared/DisplayDataFieldGridItem";
import DisplayDataFieldItem from "../../../../../../../../components/shared/DisplayDataFieldItem";
import DrilldownTab from "../../../../../../../../components/shared/Drilldown/DrilldownTab";
import MuiGrid from "../../../../../../../../components/shared/MuiGrid";
import GridItem from "../../../../../../../../components/shared/MuiGrid/GridItem";
import PseudoFlatironTable from "../../../../../../../../components/shared/PseudoFlatironTable";
import TabSwitcher from "../../../../../../../../components/shared/TabSwitcher";
import TabPanel from "../../../../../../../../components/shared/TabSwitcher/TabPanel";
// import "./BorrowerLoanBorrowersTab.css";
const _ = require("lodash");

const BorrowerLoanBorrowersTab = (props) => {
  const loanData = props.loanData;
  const [value, setValue] = React.useState(0);
  return (
    <DrilldownScreenTab title={"Borrowers & Guarantors"}>
      {/* <DrilldownHeader h3>Your Information</DrilldownHeader> */}
      {_.isNil(props.loanData.guarantors) ||
      !_.isArray(props.loanData.guarantors) ? null : (
        <TabSwitcher
          sub
          // addNewOnClick={handleAddBorrower}
          setValue={setValue}
          tabs={["Your Information", "Additional Guarantors"]}
        />
      )}
      <TabPanel padding value={value} index={0}>
        <MuiGrid spacing={3}>
          <GridItem size={12}>
            <PseudoFlatironTable
              headerContent={
                <IconButton variant="text">
                  <EditRounded />
                </IconButton>
              }
              title="Details and Contact Info"
            >
              <MuiGrid spacing={3}>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Borrower Full Name:"
                    value={`${loanData.firstName} ${loanData.lastName}`}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Email Address:"
                    value={loanData.emailAddress}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Phone Number:"
                    value={loanData.phoneNumber}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Date of Birth:"
                    value={`${loanData.dobMonth} ${loanData.dobDay}, ${loanData.dobYear}`}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Citizenship Status:"
                    value={loanData.citizenshipStatus}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Marriage Status:"
                    value={loanData.isMarried}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Estimated Credit Score:"
                    value={loanData.estimatedCreditScore}
                  />
                </GridItem>
                <GridItem size={3}>
                  <DisplayDataFieldItem
                    label="Primary Address:"
                    value={loanData.primaryAddress.address.fullAddress}
                  />
                </GridItem>
              </MuiGrid>
            </PseudoFlatironTable>
          </GridItem>
          <GridItem size={12}>
            <MuiGrid spacing={3}>
              <GridItem size={6}>
                <PseudoFlatironTable
                  headerContent={
                    <IconButton variant="text">
                      <EditRounded />
                    </IconButton>
                  }
                  title="Experience"
                >
                  <MuiGrid spacing={3}>
                    <DisplayDataFieldGridItem
                      size={12}
                      row
                      label="Experience with managing income producing properties:"
                      value={loanData.yearsExperienceProducingProperties}
                    />

                    <DisplayDataFieldGridItem
                      size={12}
                      row
                      label="Properties Owned"
                      value={loanData.numberOfPropertiesOwnedInLastThreeYears}
                    />
                    <DisplayDataFieldGridItem
                      size={12}
                      row
                      label="Experience with ground up or fix-and-flip properties within the last three years."
                      value={loanData.flipsInLastThreeYears}
                    />
                    <DisplayDataFieldGridItem
                      size={12}
                      row
                      label="Ground Up Construction Projects Completed"
                      value={
                        loanData.groundUpConstructionProjectsInLastThreeYears
                      }
                    />
                  </MuiGrid>
                </PseudoFlatironTable>

                <GridItem size={12}>
                  <Box mt={"15px"}>
                    <PseudoFlatironTable
                      headerContent={
                        <IconButton variant="text">
                          <EditRounded />
                        </IconButton>
                      }
                      title="Liquidity"
                    >
                      <MuiGrid spacing={3}>
                        <DisplayDataFieldGridItem
                          size={12}
                          row
                          label="Personal Bank Accounts:"
                          value={loanData.liquidityPersonalBankAccounts}
                        />

                        <DisplayDataFieldGridItem
                          size={12}
                          row
                          label="Where borrower is a member/manager of the entity"
                          value={loanData.liquidityBusinessBankAccounts}
                        />
                        <DisplayDataFieldGridItem
                          size={12}
                          row
                          label="401k / IRA / Brokerage Accounts"
                          value={loanData.liquidityIraBrokerageAccounts}
                        />
                        <DisplayDataFieldGridItem
                          size={12}
                          row
                          label="Cash value of a life insurance or annuity policy"
                          value={loanData.liquidityCashValueOfLifeInsurance}
                        />
                        <DisplayDataFieldGridItem
                          size={12}
                          row
                          label="Other liquidity value"
                          value={loanData.liquidityOther}
                        />
                      </MuiGrid>
                    </PseudoFlatironTable>
                  </Box>
                </GridItem>
              </GridItem>

              <GridItem size={6}>
                <PseudoFlatironTable
                  headerContent={
                    <IconButton variant="text">
                      <EditRounded />
                    </IconButton>
                  }
                  title="Backgound"
                >
                  <MuiGrid spacing={3}>
                    <DisplayDataFieldGridItem
                      size={12}
                      label="Do you have any derogatory housing events such as foreclosure, deed-in-lieu or short sale or entered into a forbearance plan or bankruptcy in the past 4 years?"
                      value={
                        loanData.hasDerogatoryHousingEvents === "true"
                          ? "Yes"
                          : "No"
                      }
                    />

                    <DisplayDataFieldGridItem
                      size={12}
                      row
                      label="Derogatory Housing Events Description"
                      value={loanData.hasDerogatoryHousingEventsDescription}
                    />
                    <DisplayDataFieldGridItem
                      size={12}
                      label="Have you ever been convicted of a felony or have you been convicted of a misdemeanor involving fraud or embezzlement?"
                      value={
                        loanData.hasBeenConvictedOfFelony === "true"
                          ? "Yes"
                          : "No"
                      }
                    />
                    <DisplayDataFieldGridItem
                      size={12}
                      row
                      label="Convicted Felony Housing Events Description"
                      value={loanData.hasBeenConvictedOfFelonyDescription}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Do you have Tax Liens?"
                      value={loanData.hasTaxLiens}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Tax Lien Amount"
                      value={loanData.hasTaxLienAmount}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Tax Liens Payment Plan"
                      value={loanData.hasTaxLiensPaymentPlan}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Do you have Judgements?"
                      value={loanData.hasJudgements}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Judgements Amount"
                      value={loanData.hasJudgementsAmount}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Judgements Payment Plan"
                      value={loanData.hasJudgementsPaymentPlan}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Do you have Charge Offs"
                      value={loanData.hasChargeOffs}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Charge Offs Amount"
                      value={loanData.hasChargeOffsAmount}
                    />
                    <DisplayDataFieldGridItem
                      size={4}
                      label="Charge Offs Payment Plan"
                      value={loanData.hasChargeOffsPaymentPlan}
                    />
                  </MuiGrid>
                </PseudoFlatironTable>
              </GridItem>
            </MuiGrid>
          </GridItem>
        </MuiGrid>
      </TabPanel>
      <TabPanel padding value={value} index={1}>
        <MuiGrid spacing={3}>
          {props.loanData.guarantors.map((g) => (
            <GridItem size={12}>
              <PseudoFlatironTable
                headerContent={
                  <IconButton variant="text">
                    <EditRounded />
                  </IconButton>
                }
                title={`${g.firstName} ${g.lastName}`}
              >
                <MuiGrid spacing={3}>
                  <GridItem size={12 / 5}>
                    <DisplayDataFieldItem
                      label="Borrower Full Name:"
                      value={`${g.firstName} ${g.lastName}`}
                    />
                  </GridItem>
                  <GridItem size={12 / 5}>
                    <DisplayDataFieldItem
                      label="Email Address:"
                      value={g.emailAddress}
                    />
                  </GridItem>
                  <GridItem size={12 / 5}>
                    <DisplayDataFieldItem
                      label="Phone Number:"
                      value={g.phoneNumber}
                    />
                  </GridItem>
                  <GridItem size={12 / 5}>
                    <DisplayDataFieldItem
                      label="Percentage Equity Ownership:"
                      value={g.percentageEntityOwnership}
                    />
                  </GridItem>

                  <GridItem size={12 / 5}>
                    <DisplayDataFieldItem
                      label="Estimated Credit Score:"
                      value={g.estimatedCreditScore}
                    />
                  </GridItem>
                </MuiGrid>
              </PseudoFlatironTable>
            </GridItem>
          ))}
        </MuiGrid>
      </TabPanel>
    </DrilldownScreenTab>
  );
};

export default BorrowerLoanBorrowersTab;
