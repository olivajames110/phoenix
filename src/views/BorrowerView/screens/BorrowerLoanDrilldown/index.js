import React from "react";
import DrilldownCard from "../../../../components/Drilldown/DrilldownCard";
import DrilldownCardTabBody from "../../../../components/Drilldown/DrilldownCardTabBody";
import DrilldownCardTabHeader from "../../../../components/Drilldown/DrilldownCardTabHeader";
import DashboardScreen from "../../../../components/layout/DashboardScreen";
import DraftJsTextEditor from "../../../../components/shared/DraftJsTextEditor";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import TabSwitcher from "../../../../components/shared/TabSwitcher";

import "./BorrowerLoanDrilldown.css";
import BorrowerLoanDrilldownScreenHeader from "./components/BorrowerLoanDrilldownScreenHeader";
import {
  BorrowerLoanDrilldownScreenTabsList,
  routes__borrower_loan_drilldown,
} from "./routes__borrower_loan_drilldown";

const BorrowerLoanDrilldown = (props) => {
  return (
    <DashboardScreen
      id="loan-servicing-drilldown-screen"
      noPadding
      headerContent={<BorrowerLoanDrilldownScreenHeader />}
    >
      <>
        {/* <Form id={"update-deal"} initialValues={{}} hideButton> */}
        <MuiGrid sx={{ minHeight: "550px" }} spacing={2}>
          <GridItem size={9}>
            <DrilldownCard sx={{ height: "unset" }}>
              <TabSwitcher link tabs={BorrowerLoanDrilldownScreenTabsList} />
            </DrilldownCard>
            <DrilldownCard>{routes__borrower_loan_drilldown}</DrilldownCard>
          </GridItem>

          <GridItem
            sx={{
              flexGrow: "1 !important",
            }}
            size={"auto"}
          >
            <DrilldownCard
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                flexGrow: 1,
              }}
            >
              <DrilldownCardTabHeader>Loan Notes</DrilldownCardTabHeader>
              <DrilldownCardTabBody noPadding sx={{ height: "100%" }}>
                <DraftJsTextEditor
                  id="primary"
                  deal={props.deal}
                  primaryTextEditor
                  isEditing={true}
                />
              </DrilldownCardTabBody>
            </DrilldownCard>
          </GridItem>
        </MuiGrid>
        {/* </Form> */}
      </>
    </DashboardScreen>
  );
  // return (
  //   <>
  //     <DashboardScreen id="deal-submission-drilldown-screen">
  //       <LoanHeaderOverview />
  //       <MuiGrid sx={{ marginTop: "0px" }} spacing={1}>
  //         <GridItem sx={{ marginBottom: "30px" }} size={12}>
  //           <BorderCard borderWidth={1}>
  //             <BorrowerTabSwitcher />
  //           </BorderCard>
  //         </GridItem>
  //         <GridItem size={12}>
  //           <Routes>
  //             <Route
  //               path="/*"
  //               index
  //               element={<BorrowerLoanOverviewTab loanData={DUMMY_LOAN_APP} />}
  //             />
  //             <Route
  //               path="/files"
  //               element={<BorrowerLoanFilesTab loanData={DUMMY_LOAN_APP} />}
  //             />
  //             <Route
  //               path="/borrowers"
  //               index
  //               element={<BorrowerLoanBorrowersTab loanData={DUMMY_LOAN_APP} />}
  //             />
  //             <Route
  //               path="/properties"
  //               index
  //               element={
  //                 <BorrowerLoanPropertiesTab loanData={DUMMY_LOAN_APP} />
  //               }
  //             />
  //             <Route
  //               path="/properties"
  //               index
  //               element={<BorrowerLoanDetailsTab loanData={DUMMY_LOAN_APP} />}
  //             />
  //           </Routes>
  //         </GridItem>
  //       </MuiGrid>
  //     </DashboardScreen>
  //   </>
  // );
};

export default BorrowerLoanDrilldown;
