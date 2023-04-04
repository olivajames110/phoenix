import React from "react";

import { Box } from "@mui/material";
import DrilldownCardTabHeader from "./DrilldownCardTabHeader";
import DrilldownCardTabBody from "./DrilldownCardTabBody";

const DrilldownScreenTab = ({
  title,
  headerContent,
  headerBodyContent,
  noPadding,
  noBodyPadding,
  noBodySidePadding,
  noHeaderPadding,
  id,
  children,
}) => {
  return (
    <Box id={id} style={{ flexGrow: 1 }} p={noPadding ? 0 : "4px"}>
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

export default DrilldownScreenTab;
