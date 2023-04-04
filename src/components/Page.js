import { Box } from "@mui/material";
import React from "react";

const Page = ({ children }) => {
  return <Box sx={{ display: "flex" }}>{children}</Box>;
};

export default Page;
