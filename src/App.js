import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { inputTheme } from "./assets/styles/MuiStyles";
import "./assets/styles/global.css";

import { useSelector } from "react-redux";

import { isEmpty, isNil } from "lodash";
import { Navigate, Route, Routes } from "react-router-dom";
import UserView from "./components/layout/UserView";
import VerticalNavLayout from "./components/layout/VerticalNavLayout";
import { db } from "./database/db";
import WebsiteFundraiserScreen from "./external/WebsiteFundraiserScreen";
import { globalAlertClose } from "./redux/actions/globalAlertActions";
import { setGlobalData } from "./redux/actions/globalDataActions";
import BorrowerView from "./views/BorrowerView/BorrowerView";
import BorrowerDashboardScreen from "./views/BorrowerView/screens/BorrowerDashboardScreen/BorrowerDashboardScreen";
import FundraisingCreateScreen from "./views/BorrowerView/screens/FundraisingCreateScreen/FundraisingCreateScreen";
import FundraisingScreen from "./views/BorrowerView/screens/FundraisingScreen/FundraisingScreen";

const App = () => {
  const globalAlert = useSelector((state) => state.globalAlert);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const globalData = useSelector((state) => state.globalData);
  const handleCloseSnackbar = () => {
    dispatch(globalAlertClose());
  };

  React.useEffect(() => {
    if (isNil(globalData) || isEmpty(globalData)) {
      dispatch(setGlobalData(db));
      // dispatch(
      //   setFormData(
      //     getCatFromDb({
      //       animalName: "Inky",
      //     })
      //   )
      // );
    }
  }, []);

  return (
    <ThemeProvider theme={inputTheme}>
      {/* {isExternal ? externalRoutes : internalRoutes} */}
      <Routes>
        <Route path={"/help/:id"} element={<WebsiteFundraiserScreen />} />
        <Route path={"/"} element={<BorrowerDashboardScreen />} />
        <Route path={"/dashboard"} element={<BorrowerDashboardScreen />} />
        <Route path={"/fundraising/"}>
          <Route index element={<FundraisingScreen />} />
          {/* <Route path={":id/"} element={<BorrowerLoanDrilldown />} /> */}
          <Route path={"create"} element={<FundraisingCreateScreen />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
