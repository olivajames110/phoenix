import {
  ChevronRightRounded,
  RadioButtonUncheckedRounded,
  TaskAltRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import DrilldownCardTabSection from "../../../../../../../../components/Drilldown/DrilldownCardTabSection";
import DrilldownScreenTab from "../../../../../../../../components/Drilldown/DrilldownScreenTab";
import DisplayDataFieldItem from "../../../../../../../../components/shared/DisplayDataFieldItem";
import DrilldownSection from "../../../../../../../../components/shared/Drilldown/DrilldownSection";
import MuiGrid from "../../../../../../../../components/shared/MuiGrid";
import GridItem from "../../../../../../../../components/shared/MuiGrid/GridItem";
import {
  StackBetween,
  StackColumn,
} from "../../../../../../../../components/shared/MuiStack";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 2,
}));

const iconStyles = {
  width: "1.6rem",
  height: "1.6rem",
  marginRight: "12px",
};
const viewMoreIconStyles = {
  width: "1.2rem",
  height: "1.2rem",
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  // marginRight: "10px",
};
const iconStylesCompleted = {
  color: "var(--green)",
};

const buttonStyles = {
  fontWeight: 600,
  borderRadius: 0,
  fontSize: ".9rem",
  justifyContent: "flex-start",
  padding: "15px 0",
  color: "#17262b",
  borderBottom: "1px solid #e3e4e5",
};
const completedStyles = {
  color: "#c4c7c8",
  textDecorationLine: "line-through",
};
const lastButtonStyle = {
  borderWidth: 0,
};

const BorrowerLoanOverviewTab = (props) => {
  return (
    <DrilldownScreenTab title="Loan Overview">
      <DrilldownSection h4 id="subject-borrower-drilldown">
        <MuiGrid spacing={0}>
          <GridItem size={4}>
            <DrilldownCardTabSection h3 title={"Loan Progress"}>
              <StackColumn>
                <Stack
                  paddingTop={"5px"}
                  spacing={3}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography>1 / 5 steps are completed</Typography>
                  <BorderLinearProgress
                    sx={{ display: "flex", flexGrow: 1 }}
                    variant="determinate"
                    value={5}
                  />
                </Stack>
              </StackColumn>
              <Box mt={"25px"}>
                <Stack direction={"column"} alignItems={"center"}>
                  <Button
                    sx={{ ...buttonStyles, ...completedStyles }}
                    fullWidth
                    fon
                    variant="text"
                    startIcon={
                      <TaskAltRounded
                        sx={{ ...iconStyles, ...iconStylesCompleted }}
                      />
                    }
                  >
                    Submit Loan Application
                  </Button>
                  <Button
                    sx={buttonStyles}
                    fullWidth
                    fon
                    variant="text"
                    startIcon={<RadioButtonUncheckedRounded sx={iconStyles} />}
                    endIcon={<ChevronRightRounded sx={viewMoreIconStyles} />}
                  >
                    Submit Credit Authorization
                  </Button>
                  <Button
                    sx={buttonStyles}
                    fullWidth
                    fon
                    variant="text"
                    startIcon={<RadioButtonUncheckedRounded sx={iconStyles} />}
                    endIcon={<ChevronRightRounded sx={viewMoreIconStyles} />}
                  >
                    Submit Money-In
                  </Button>
                  <Button
                    sx={buttonStyles}
                    fullWidth
                    fon
                    variant="text"
                    startIcon={<RadioButtonUncheckedRounded sx={iconStyles} />}
                    endIcon={<ChevronRightRounded sx={viewMoreIconStyles} />}
                  >
                    Appraisal Completed
                  </Button>
                  <Button
                    sx={{ ...buttonStyles, ...lastButtonStyle }}
                    fullWidth
                    fon
                    variant="text"
                    startIcon={<RadioButtonUncheckedRounded sx={iconStyles} />}
                    endIcon={<ChevronRightRounded sx={viewMoreIconStyles} />}
                  >
                    Upload Required Files
                  </Button>
                </Stack>
              </Box>
            </DrilldownCardTabSection>
          </GridItem>
          <GridItem size={1}>
            <Divider orientation="vertical" />
          </GridItem>
          <GridItem size={7}>
            <DrilldownCardTabSection
              h3
              title={"Property Inspection For Appraisal"}
            >
              <StackBetween sx={{ marginTop: "20px" }}>
                <DisplayDataFieldItem
                  label="Property Address"
                  value={"125 Carley Avenue, Huntington NY, 11743"}
                />
                <DisplayDataFieldItem
                  label="Inspection Date"
                  value={"12/21/2022"}
                />
                <DisplayDataFieldItem
                  label="Inspection Time"
                  value={"4:30pm EST"}
                />
              </StackBetween>
            </DrilldownCardTabSection>
          </GridItem>
        </MuiGrid>
      </DrilldownSection>
    </DrilldownScreenTab>
  );
};

export default BorrowerLoanOverviewTab;
