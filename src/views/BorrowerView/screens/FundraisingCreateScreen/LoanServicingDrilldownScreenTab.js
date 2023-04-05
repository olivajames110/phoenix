import React from "react";

import { Box } from "@mui/material";
import DrilldownCardTabHeader from "../../../../components/Drilldown/DrilldownCardTabHeader";
import DrilldownCardTabBody from "../../../../components/Drilldown/DrilldownCardTabBody";

const LoanServicingDrilldownScreenTab = ({
  title,
  headerContent,
  headerBodyContent,
  noPadding,
  noBodyPadding,
  noBodySidePadding,
  noHeaderPadding,
  id,
  children,
  sx,
}) => {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflowX: "auto",
        ...sx,
      }}
      p={noPadding ? 0 : "4px"}
    >
      {title ? (
        <DrilldownCardTabHeader
          headerContent={headerContent}
          headerBodyContent={headerBodyContent}
          noPadding={noPadding || noHeaderPadding}
        >
          {title}
        </DrilldownCardTabHeader>
      ) : null}
      <DrilldownCardTabBody
        noPadding={noPadding || noBodyPadding}
        noBodySidePadding={noBodySidePadding}
      >
        {children}
      </DrilldownCardTabBody>
    </Box>
  );
};

export default LoanServicingDrilldownScreenTab;
