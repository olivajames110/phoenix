import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  linearProgressClasses,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import {
  Menu,
  MonetizationOnOutlined,
  SavingsOutlined,
  ShareRounded,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { arrayProtector } from "../helpers/arrayProtector";
import { useNavigate, useParams } from "react-router-dom";
import { isArray, isNil } from "lodash";
import DraftJsTextEditor from "../components/shared/DraftJsTextEditor";

const styles = {
  flexCenterAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const WebsiteFundraiserScreen = ({ isPreview }) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("id", params.id);
  return (
    <Stack>
      <Header />
      <Container
        maxWidth={false}
        sx={{ maxWidth: "1400px", padding: "45px 0" }}
      >
        <Stack spacing={4}>
          <BodyContent />
        </Stack>
      </Container>
      <Box
        sx={{
          background: "#145a7f",
          padding: "80px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => navigate("/dashboard")}
          sx={{ color: "#ffffff" }}
        >
          Dashboard
        </Button>
      </Box>
    </Stack>
  );
};

const Header = () => {
  const isMobile = useMediaQuery("(max-width:1600px)");
  const pages = [
    "Home",
    "Available Cats",
    "Foster",
    " Our Mission",
    "Adopting Kittens",
    "FIV+ Cats",
    "About Us",
    "Available",
  ];
  const ui_logo = (
    <Box id="logo">
      <img
        width="94px"
        alt=""
        src="https://www.feraltofamily.com/uploads/b/f0d8703c746f8693f2c80b79b91f9dfb51cfd5f990158ab52d26e91549ad8068/image605642_1648740232.png?width=400"
      />
    </Box>
  );
  const ui_navLinks = (
    <List
      sx={{
        display: "flex",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {pages.map((item) => (
        <ListItem key={item}>
          <ListItemText
            sx={{
              whiteSpace: "nowrap",
              ".MuiTypography-root": {
                color: "#195b7fd1",
                fontWeight: "600 !important",
              },
            }}
            primary={item}
          />
        </ListItem>
      ))}
    </List>
  );
  return (
    <Box sx={{ background: "#eff3f5", padding: "10px 0" }}>
      <Container maxWidth={false}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {ui_logo}
          {isMobile ? null : ui_navLinks}

          <Stack justifyContent={"center"}>
            {isMobile ? (
              <Menu sx={{ color: "#195b7f", width: "24px", height: "24px" }} />
            ) : (
              <Button
                endIcon={<SavingsOutlined />}
                sx={{ background: "#195b7f" }}
                variant="contained"
              >
                Donate
              </Button>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

const BodyContent = () => {
  const formData = useSelector((state) => state.formData);
  // const { name, images, description } = formData; //animal
  const { campaignTitle, images, description, documents } = formData; //campaign

  const getFormDataImage = (index) => {
    if (!isArray(documents)) {
      return;
    }
    if (isNil(documents[index])) {
      return;
    }
    const image = arrayProtector(documents)[index].file.preview;
    return image;
  };
  return (
    <Row spacing={3} sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      <Stack spacing={4} flexBasis={"550px"} flexGrow={1}>
        <Stack spacing={1}>
          <Typography
            variant="h1"
            sx={{ fontSize: "36px", fontWeight: 700, lineHeight: "3rem" }}
          >
            {campaignTitle}
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontSize: ".9rem",
              fontWeight: 500,
              color: "#928d8d",
              marginBottom: "25px !important",
            }}
          >
            Organized on 4/12/2023
          </Typography>
          <Typography paragraph>{description}</Typography>
          <Typography paragraph>
            <DraftJsTextEditor
              readOnly
              data={formData.campaignDescription}
              name="campaignDescriptionReadOnlyWebsite"
            />
          </Typography>
          {/* <Typography paragraph>
            Unfortunately, shortly after being adopted Inky became one of
            several cats that we are treating with FIP & also began having
            seizures.
          </Typography>
          <Typography paragraph>
            After time spent in West Hills Animal Hospital, Inky is currently
            being treated with FIP medication, as well as seizure medication.
          </Typography> */}
        </Stack>
        <Image maxHeight={"320px"} src={getFormDataImage(0)} />
        <Row spacing={2}>
          {documents?.map((f, i) => {
            if (i === 0) {
              return;
            }
            return <Image maxHeight={"300px"} src={getFormDataImage(i)} />;
          })}
        </Row>
      </Stack>

      <DonationCard />
    </Row>
  );
};

const DonationCard = () => {
  return (
    <Card
      sx={{
        flexShrink: 1,
        padding: "30px 20px",
        display: "flex",
        flexGrow: 0,
        flexBasis: "360px",
        height: "100%",
        boxShadow: "0 0.3125rem 1rem -0.1875rem rgba(0,0,0,.2)",
        maxHeight: "80vh",
      }}
    >
      <Stack width="100%" alignItems={"flex-start"}>
        <Typography variant="h1" sx={{ fontWeight: 600, lineHeight: "2.4rem" }}>
          Amount Raised: $7,800
        </Typography>
        <Typography
          variant="body"
          sx={{ fontSize: ".9rem", fontWeight: 500, color: "#928d8d" }}
        >
          Target goal of $15,000
        </Typography>
        <ThermometerMeter />

        <Row sx={{ marginTop: "45px" }} between>
          <Typography
            sx={{ fontWeight: 600 }}
            variant="body2"
            color="text.secondary"
          >
            Our Top Donars
          </Typography>
          <Typography
            sx={{ fontWeight: 500 }}
            variant="body2"
            color="text.secondary"
          >
            of 24 donations
          </Typography>
        </Row>
        <Stack
          id="donation-list"
          flexGrow={1}
          width={"100%"}
          sx={{
            border: "var(--border)",
            borderRadius: "4px",
            overflowY: "auto",
          }}
        >
          <DonationItem />
          <DonationItem />
          <DonationItem noBorder />
        </Stack>
        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Button sx={{ textDecoration: "underline", fontWeight: 500 }}>
            View All Donars
          </Button>
        </Box>
        <Stack
          // padding={"10px"}
          sx={{ marginTop: "40px", width: "100%" }}
          spacing={1}
          direction={"row"}
        >
          <Button
            endIcon={<ShareRounded />}
            sx={{ width: "100%", padding: "8px" }}
            variant="outlined"
          >
            Share
          </Button>
          <Button
            endIcon={<MonetizationOnOutlined />}
            sx={{ width: "100%", padding: "8px" }}
            variant="contained"
          >
            Donate
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

const ThermometerMeter = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 28,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 100,
      backgroundColor: "#195b7f",

      // backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "100%",
        marginTop: "30px",
        width: "calc(100% - 20px)",

        marginLeft: "20px",
      }}
    >
      <Box
        sx={{
          zIndex: 11111111,
          width: "42px",
          height: "42px",
          background: "#195b7f",
          // background: "#1a90ff",
          borderRadius: "100px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          fontSize: ".7rem",
          left: "-20px",
        }}
      >
        54%
      </Box>
      <BorderLinearProgress
        variant="determinate"
        value={34}
        color="secondary"
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

const DonationItem = ({ name, amount, noBorder }) => {
  return (
    <>
      <Box sx={{ p: 2, gap: "10px", display: "flex" }}>
        <Avatar
          sx={{ borderRadius: "50px" }}
          variant="rounded"
          src="avatar1.jpg"
        />
        <Stack width={"100%"} spacing={0.5}>
          <Row between>
            <Typography fontWeight={700}>John Smith</Typography>
            <Typography fontWeight={500}>$100</Typography>
          </Row>
          <Typography variant="body2" color="text.secondary">
            Good luck and feel better!
          </Typography>
        </Stack>
      </Box>
      {noBorder ? null : <Divider />}
    </>
  );
};

const Row = ({ children, spacing, between, sx }) => {
  const spacingAmount = spacing * 10;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: `${spacingAmount}px`,
        justifyContent: between ? "space-between" : "flex-start",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
const Image = ({ src, maxWidth, maxHeight }) => {
  if (isNil(src)) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={src}
        alt=""
      />
    </Box>
  );
};

export default WebsiteFundraiserScreen;
