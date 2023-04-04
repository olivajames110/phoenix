import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import React from "react";

import BorderCard from "../../../../../../components/shared/BorderCard";
import { StackColumn } from "../../../../../../components/shared/MuiStack";

const LoanHeaderOverview = (props) => {
  return (
    <BorderCard id="borrower-loan-overview-header" className="drilldown-card">
      <Box
        spacing={5}
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        flexWrap="wrap"
        padding={"5px"}
      >
        <StackColumn sx={{ paddingLeft: "6px" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              paddingBottom: "3px",
              fontWeight: "700",
              color: "var(--blue)",
            }}
            variant="h1"
          >
            125 Carley Ave, Huntington NY 11743
          </Typography>
          <Stack direction={"row"}>
            <Typography sx={{ fontSize: ".75rem" }}>Loan Status:</Typography>
            <Typography
              sx={{ marginLeft: "5px", fontSize: ".75rem", fontWeight: "600" }}
            >
              Requiring Documents
            </Typography>
          </Stack>
        </StackColumn>
      </Box>
    </BorderCard>
  );
};

export default LoanHeaderOverview;
