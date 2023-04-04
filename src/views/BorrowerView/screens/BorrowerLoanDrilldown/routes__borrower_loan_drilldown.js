import { Route, Routes } from "react-router-dom";
import BorrowerLoanBorrowersTab from "./components/LoanDetailsCard/Tabs/BorrowerLoanBorrowersTab";
import BorrowerLoanDetailsTab from "./components/LoanDetailsCard/Tabs/BorrowerLoanDetailsTab";
import BorrowerLoanFilesTab from "./components/LoanDetailsCard/Tabs/BorrowerLoanFilesTab";
import BorrowerLoanOverviewTab from "./components/LoanDetailsCard/Tabs/BorrowerLoanOverviewTab";
import BorrowerLoanPropertiesTab from "./components/LoanDetailsCard/Tabs/BorrowerLoanPropertiesTab";
import LoanHeaderOverview from "./components/LoanHeaderOverview";
import { DUMMY_LOAN_APP } from "./tests/DUMMY_LOAN_APP";

export const routes__borrower_loan_drilldown = (
  <Routes>
    <Route path="/*" index element={<BorrowerLoanOverviewTab />} />

    <Route
      path="/*"
      index
      element={<BorrowerLoanOverviewTab loanData={DUMMY_LOAN_APP} />}
    />
    <Route
      path="/files"
      element={<BorrowerLoanFilesTab loanData={DUMMY_LOAN_APP} />}
    />
    <Route
      path="/borrowers"
      index
      element={<BorrowerLoanBorrowersTab loanData={DUMMY_LOAN_APP} />}
    />
    <Route
      path="/properties"
      index
      element={<BorrowerLoanPropertiesTab loanData={DUMMY_LOAN_APP} />}
    />
    <Route
      path="/properties"
      index
      element={<BorrowerLoanDetailsTab loanData={DUMMY_LOAN_APP} />}
    />

    {/* <Route path="/loan-detail" index element={<LoanDetailsTab />} />
    <Route path="/pay-history" index element={<PayHistoryTab />} />
    <Route path="/draw-history" index element={<DrawHistoryTab />} />
    <Route path="/multi-draw" index element={<MultiDrawTab />} />

    <Route
      path="/protective-advances"
      index
      element={<ProtectiveAdvancesTab />}
    />
    <Route path="/files" index element={<ServicingFilesTab />} />
    <Route path="/payoff-letter" index element={<PayoffLetterTab />} />
    <Route
      path="/statememt-template"
      index
      element={<StatementTemplateTab />}
    />
    <Route path="/chain-of-title" index element={<ChainOfTitleTab />} /> */}
    {/* <Route
      path="/finalized-budget"
      index
      element={<FinalizedBudgetTab />}
    /> */}
  </Routes>
);

export const BorrowerLoanDrilldownScreenTabsList = [
  {
    label: "Loan Detail",
    to: "loan-detail",
  },
  {
    label: "Borrowers",
    to: "borrowers",
  },
  {
    label: "Properties",
    to: "properties",
  },

  {
    label: "Files",
    to: "files",
  },
];
