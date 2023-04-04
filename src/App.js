import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { inputTheme } from "./assets/styles/MuiStyles";
import "./assets/styles/global.css";

import { useSelector } from "react-redux";

import { globalAlertClose } from "./redux/actions/globalAlertActions";
import BorrowerView from "./views/BorrowerView/BorrowerView";

const App = () => {
  const globalAlert = useSelector((state) => state.globalAlert);
  const dispatch = useDispatch();

  const handleCloseSnackbar = () => {
    dispatch(globalAlertClose());
  };

  return (
    <ThemeProvider theme={inputTheme}>
      {/* <PortalWorkspace /> */}
      <BorrowerView />
      {/* <SnackbarAlert
        open={globalAlert.show}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={globalAlert.message}
        sx={{ bottom: "40px !important", zIndex: 11111111111 }}
        anchorPosition="left"
        variant="filled"
        isGlobal
        type={globalAlert.type}
      /> */}
    </ThemeProvider>
  );
};

export default App;
