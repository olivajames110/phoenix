import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import BorderCard from "../../../../components/shared/BorderCard";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import SubmittedLoanApplicationWidget from "../BorrowerDashboardScreen/borrowerDashboardWidgets/SubmittedLoanApplicationWidget";
import DisplayTable from "../../../../components/shared/DisplayTable";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRightRounded,
  MonetizationOnOutlined,
  MonetizationOnRounded,
} from "@mui/icons-material";

const FundraisingScreen = (props) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/fundraising/create`);
  };
  const cols = [
    {
      Header: "Campaign Name",
      accessor: "campaignName",
    },
    {
      Header: "Type",
      accessor: "campaignType",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "Start Date",
      accessor: "endDate",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },
    {
      Header: "Status",
      accessor: "status",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },
    {
      Header: "Amount Raised",
      accessor: "amountRaised",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },

    {
      Header: " ",
      accessor: (d) => (
        <Link
          style={{ textDecoration: "underline" }}
          className="action-button"
          to={`/fundraising/${"1234"}`}
        >
          View Details
        </Link>
      ),
    },
  ];

  const DUMMY = [
    {
      campaignName: "Campaign 1",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Open",
      amountRaised: "$1700",
    },
    {
      campaignName: "Campaign 2",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Open",
      amountRaised: "$1700",
    },
    {
      campaignName: "Campaign 3",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Complete",
      amountRaised: "$1700",
    },
    {
      campaignName: "Campaign 4",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Draft",
      amountRaised: "$1700",
    },
  ];
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Box
        p={"10px 0"}
        sx={{
          background: "#ffffff",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Container maxWidth={false}>
          <Stack
            sx={{
              background: "#ffffff",
            }}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack alignItems={"center"} spacing={1}>
              <Box gap="5px" display={"flex"} alignItems={"center"}>
                <Typography variant="h3" fontSize={"1rem"}>
                  Total Raised:
                </Typography>
                <Typography variant="h3" fontSize={"1rem"} fontWeight={700}>
                  $34,400
                </Typography>
              </Box>
              {/* <Typography
                variant="body1"
                fontSize={".8rem"}
                sx={{ opacity: 0.7 }}
              >
                Date Range:
              </Typography> */}
            </Stack>
            <Button
              onClick={handleClick}
              // color="primary"
              variant="outlined"
              endIcon={<MonetizationOnOutlined />}
              // sx={{ background: "#39679112", marginLeft: "10px" }}
            >
              Create Fundraisor
            </Button>
          </Stack>
        </Container>
      </Box>
      <Divider flexItem />
      <ScreenSubTitleSection>My Recent Fundraisors</ScreenSubTitleSection>

      <ScreenBody>
        <MuiGrid spacing={4}>
          <GridItem size={12}>
            <BorderCard type="bar">
              <DisplayTable noBorder columns={cols} data={DUMMY} />
            </BorderCard>
          </GridItem>
        </MuiGrid>
      </ScreenBody>
    </Stack>
  );
};

const LoanItem = (props) => {
  return (
    <Box
      border={"var(--border)"}
      padding="10px"
      sx={{
        background: "#ffffff",
      }}
    >
      <Typography variant="h4">Title Item</Typography>
      <Typography variant="body1">Messages</Typography>
    </Box>
  );
};

export default FundraisingScreen;
