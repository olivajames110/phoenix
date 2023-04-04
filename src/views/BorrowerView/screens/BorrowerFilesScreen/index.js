import React from "react";
import DrilldownCardTabSection from "../../../../components/Drilldown/DrilldownCardTabSection";
import DashboardScreen from "../../../../components/layout/DashboardScreen";
import ScreenTitle from "../../../../components/layout/Screen/ScreenTitle";
import DrilldownSection from "../../../../components/shared/Drilldown/DrilldownSection";
import PreviewableFileTable from "../../../../components/shared/Files/PreviewableFileTable";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import { BORROWER_DUMMY_DOCS } from "../../tests/BORROWER_DUMMY_DOCS";
import { Stack } from "@mui/material";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import BorderCard from "../../../../components/shared/BorderCard";

const BorrowerFilesScreen = (props) => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <ScreenSubTitleSection>Upload Files</ScreenSubTitleSection>

      <ScreenBody>
        <MuiGrid
          spacing={{ xs: 2, md: 2 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {BORROWER_DUMMY_DOCS.map((d) => (
            <GridItem
              // md={4}
              // lg={6}
              // xl={12}
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
            >
              <PreviewableFileTable
                title={d.title}
                description={d.description}
                docGroup={d.docGroup}
                docType={d.docType}
                status={d.status}
                // setFiles={setFiles}
              />
            </GridItem>
          ))}
        </MuiGrid>
      </ScreenBody>
    </Stack>
  );
};

export default BorrowerFilesScreen;
