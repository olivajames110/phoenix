import { Box } from "@mui/material";
import React from "react";
import DrilldownScreenTab from "../../../../../../../../components/Drilldown/DrilldownScreenTab";
import DisplayDataFieldGridItem from "../../../../../../../../components/shared/DisplayDataFieldGridItem";
import DisplayDataFieldItemValue from "../../../../../../../../components/shared/DisplayDataFieldItemValue/DisplayDataFieldItemValue";
import DrilldownTab from "../../../../../../../../components/shared/Drilldown/DrilldownTab";
import MuiGrid from "../../../../../../../../components/shared/MuiGrid";
import PseudoFlatironTable from "../../../../../../../../components/shared/PseudoFlatironTable";
// import "./BorrowerLoanDetailsTab.css";

const BorrowerLoanDetailsTab = (props) => {
  const loanData = props.loanData;
  return (
    <DrilldownScreenTab title={"Loan Product & Details"}>
      {/* PRODUCT  */}
      <PseudoFlatironTable title="Product">
        <MuiGrid spacing={3}>
          <DisplayDataFieldGridItem
            label="Requested Loan Amounts:"
            value={loanData.initialLoanAmount}
          />

          <DisplayDataFieldGridItem
            label="Product Type:"
            value={loanData.loanProductType}
          />

          <DisplayDataFieldGridItem
            label="Loan Purpose:"
            value={loanData.loanPurpose}
          />
          <DisplayDataFieldGridItem
            label="Requested Loan Term:"
            value={loanData.requestedLoanTerm}
          />
        </MuiGrid>
      </PseudoFlatironTable>

      {/* LOAN  */}
      <Box mt={"30px"}>
        <PseudoFlatironTable title="Loan">
          <MuiGrid spacing={3}>
            <DisplayDataFieldGridItem
              label="Total Financed Budget:"
              value={loanData.totalFinancedBudget}
            />

            <DisplayDataFieldGridItem
              label="Requested Loan Term:"
              value={loanData.requestedLoanTerm}
            />

            <DisplayDataFieldGridItem
              label="Loan Exit Strategy:"
              value={loanData.loanExitStrategy}
            />

            <DisplayDataFieldGridItem
              label="Business Plan Description:"
              // size={6}
              value={loanData.businessPlanDescription}
            />

            <DisplayDataFieldGridItem label="Rehab Work:" value={"hide"}>
              <ul>
                {loanData?.rehabWorkRequiredIsLightAdditionalInfo?.map((d) => (
                  <li>
                    <DisplayDataFieldItemValue>- {d}</DisplayDataFieldItemValue>
                  </li>
                ))}
              </ul>
            </DisplayDataFieldGridItem>

            <DisplayDataFieldGridItem
              label="Are Rehab Plans Approved?"
              value={loanData.rehabPlansAreApproved}
            />

            <DisplayDataFieldGridItem
              label="Is borrower requesting to finance 100% of the construction budget?"
              value={loanData.borrowerIsRequestingFullConstructionBudget}
            />

            <DisplayDataFieldGridItem
              label="Do you plan to finance 100% of the renovation budget?"
              value={loanData.doesPlanToFinanceFullRenovationCost}
            />

            <DisplayDataFieldGridItem
              label="Do you plan to finance the full renovation cost?"
              value={loanData.doesPlanToFinanceFullRenovationCost}
            />

            <DisplayDataFieldGridItem
              label="Will plans for the property result in a change of use for the property?"
              value={loanData.plansForPropertyWillResultInChangeOfUse}
            />

            <DisplayDataFieldGridItem
              label="Are there any known environmental conditions at the property that could impact renovation:"
              value={loanData.knownEnviornmentalConditionsDoExist}
            />

            <DisplayDataFieldGridItem
              label="Are there any outstanding construction permits or building code violations?:"
              value={loanData.outstandingPermitsOrViolationsDoExist}
            />

            <DisplayDataFieldGridItem
              label="What is the purchase date of the land?:"
              value={loanData.purchaseDateOfLand}
            />

            <DisplayDataFieldGridItem
              label="Is the property vacant land?:"
              value={loanData.propertyLandIsVacant}
            />

            <DisplayDataFieldGridItem
              label="Will borrower be contracting a General Contractor for the project?:"
              value={loanData.borrowerIsContractingGeneralContractor}
            />

            <DisplayDataFieldGridItem
              label="Has contract been finalized?:"
              value={loanData.contractIsFinalized}
            />

            <DisplayDataFieldGridItem
              label="Has any construction for the project been started?:"
              value={loanData.projectConstructionIsStarted}
            />

            <DisplayDataFieldGridItem
              label="What is the current outstanding principal balance of the existing loan?:"
              value={loanData.valueOfOutstandingPrincipalBalanceOnExistingLoan}
            />

            <DisplayDataFieldGridItem
              label="LoIs there unfinished renovations from prior financing?"
              value={loanData.hasUnfinishedRenovationsPriorToFinancing}
            />

            <DisplayDataFieldGridItem
              label="Were all renovation and/or construction funds drawn?"
              value={loanData.allRenovationConstructionFundsWereDrawn}
            />

            <DisplayDataFieldGridItem
              label="What is the name of the current lender?"
              value={loanData.nameOfCurrentLender}
            />

            <DisplayDataFieldGridItem
              label="What is the maturity of the current loan?:"
              value={loanData.maturityDateOfCurrentLoan}
            />
          </MuiGrid>
        </PseudoFlatironTable>
      </Box>
    </DrilldownScreenTab>
  );
};

export default BorrowerLoanDetailsTab;
