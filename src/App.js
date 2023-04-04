import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./assets/global.css";
import DashboardEmailBuilder from "./pages/DashboardEmailBuilder";
import BorrowerView from "./views/BorrowerView/BorrowerView";
const App = () => {
  return <BorrowerView />;
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      {/* <Route path="/email-builder" element={<DashboardEmailBuilder />} /> */}
      {/* <Route path="/fundraising" element={<DashboardEmailBuilder />} /> */}
      {/* <Route path="/email-builder" element={<DashboardEmailBuilder />} /> */}
    </Routes>
  );
};

export default App;
