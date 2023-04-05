import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import BorderCard from "../../../../components/shared/BorderCard";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import SubmittedLoanApplicationWidget from "../BorrowerDashboardScreen/borrowerDashboardWidgets/SubmittedLoanApplicationWidget";
import DisplayTable from "../../../../components/shared/DisplayTable";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightRounded } from "@mui/icons-material";
import DrilldownCard from "../../../../components/Drilldown/DrilldownCard";
import DisplayDataFieldItem from "../../../../components/shared/DisplayDataFieldItem";
import { isArray, isNil, isObject } from "lodash";
import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { Field, useFormState } from "react-final-form";
import { getTodaysDate } from "../../../../helpers/getTodaysDate";
import { parseISOToDate } from "../../../../helpers/parseISOToDate";
import FlatIronLogo from "../../../../components/shared/FlatIronLogo";
import FormGroup from "../../../../components/form/components/shared/FormGroup/FormGroup";
import FinalFormTextField from "../../../../components/form/Fields/FinalFormTextField";
import ReactFinalForm from "../../../../components/form/ReactFinalForm";
import LoanServicingDrilldownScreenTab from "./LoanServicingDrilldownScreenTab";
import TabSwitcher from "../../../../components/shared/TabSwitcher";
import FinalFormSelectField from "../../../../components/form/Fields/FinalFormSelectField";
import { TextareaFieldComponent } from "../../../../components/form/components/inputs/finalFormComponents/TextareaFieldComponent";
import { DatePickerTextFieldComponent } from "../../../../components/form/components/inputs/finalFormComponents/DatePickerTextFieldComponent";
import FileUploadField from "../../../../components/form/components/inputs/generic/FileUploadField/FileUploadField";
import { LoadingButton } from "@mui/lab";
import { StackRowEnd } from "../../../../components/shared/MuiStack";
import { db } from "../../../../database/db";
import { arrayProtector } from "../../../../helpers/arrayProtector";

const FundraisingCreateScreen = (props) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const handleClick = (id) => {
    navigate(`fundraising/${"1234"}`);
  };

  return (
    <Stack
      sx={{
        height: "100%",
        flexGrow: 1,
        form: {
          height: "100%",
        },
      }}
    >
      {/* <ScreenSubTitleSection>My Loan Applications</ScreenSubTitleSection> */}

      {/* <ScreenBody>
        <MuiGrid spacing={4}>
          <GridItem size={12}>
            <BorderCard type="bar">
              <DisplayTable noBorder columns={cols} data={DUMMY} />
            </BorderCard>
          </GridItem>
        </MuiGrid>
      </ScreenBody> */}
      <ReactFinalForm
        hideButton
        submitButtonText={"Create Fundraisor"}
        subscription={{ submitting: true, pristine: true }}
      >
        <ScreenBody sx={{ height: "100%" }}>
          <MuiGrid sx={{ height: "100%" }} spacing={3}>
            <GridItem size={7}>
              <DrilldownCard sx={{ height: "unset", flexGrow: 1 }}>
                <LoanServicingDrilldownScreenTab
                  // headerContent={UI_EL__TAB_HEADER}
                  // noPadding
                  title="Fundraisor Creator"
                >
                  {/* <DisplayDataFieldItem
                    label="Next Payment Date:"
                    value={"1/2/2023"}
                    row
                  /> */}

                  <FormContent />
                </LoanServicingDrilldownScreenTab>
              </DrilldownCard>
            </GridItem>
            <GridItem size={5}>
              <PreviewCard showForm={showForm} />
            </GridItem>
          </MuiGrid>
        </ScreenBody>
      </ReactFinalForm>
    </Stack>
  );
};

const FormContent = (props) => {
  const catsList = db.cats;
  const catsSelectList = catsList.map(function (cat) {
    return cat["name"];
  });
  return (
    <>
      <FormGroup noMargin label="Campaign Information">
        <MuiGrid>
          <GridItem size={6}>
            <FinalFormTextField label="Campaign Title" name={"campaignTitle"} />
          </GridItem>

          <GridItem size={6}>
            <FinalFormSelectField
              name={`campaignType`}
              label="Select Campaign Type"
              items={["Goal Driven", "50 / 50", "Raffle", "Custom"]}
            />
          </GridItem>
          <GridItem size={12}>
            <FinalFormSelectField
              name={`selectedPet`}
              label="Select Pet"
              items={catsSelectList}
            />
          </GridItem>
        </MuiGrid>
      </FormGroup>
      <FormGroup label="Campaign Description">
        <MuiGrid>
          <GridItem size={12}>
            <Field
              name={"campaignDescription"}
              noMargin
              component={TextareaFieldComponent}
            />
          </GridItem>
        </MuiGrid>
      </FormGroup>
      <FormGroup label="Upload Pet Files">
        <MuiGrid>
          <GridItem size={12}>
            <FileUploadField noMargin name={"files"} />
          </GridItem>
        </MuiGrid>
      </FormGroup>
      <FormGroup label="Date Range">
        <MuiGrid>
          <GridItem size={6}>
            <Field
              label="Start Date"
              name={"startDate"}
              component={DatePickerTextFieldComponent}
            />
          </GridItem>
          <GridItem size={6}>
            <Field
              label="End Date"
              name={"endDate"}
              component={DatePickerTextFieldComponent}
            />
          </GridItem>
        </MuiGrid>
      </FormGroup>
      <StackRowEnd sx={{ marginTop: "15px" }}>
        <LoadingButton type="submit" variant="contained">
          Create Fundraisor
        </LoadingButton>
      </StackRowEnd>
    </>
  );
};

const PreviewCard = (props) => {
  const { values } = useFormState();
  const [selectedPet, setSelectedPet] = useState({});

  useEffect(() => {
    if (isNil(values.selectedPet)) {
      setSelectedPet({});
      return;
    }

    const filteredCat = db.cats.filter((c) => c.name === values.selectedPet);
    console.log("filteredCat[0]", filteredCat[0]);
    setSelectedPet(filteredCat[0]);
  }, [values]);

  const additionalPetImages = useMemo(
    () =>
      arrayProtector(selectedPet.images).length < 1 ? [] : selectedPet.images,
    [selectedPet]
  );

  return (
    <DrilldownCard
      sx={{
        overflowY: "auto",
        // boxShadow: "var(--bs)",
        // margin: "10px",
      }}
    >
      <Stack>
        <TabSwitcher
          tabs={[
            "Email Preview",
            "Facebook Preview",
            "Instagram Preview",
            "Web Preview",
          ]}
        />
        <Box sx={{ padding: "25px", width: "100%" }}>
          <Stack
            direction={"row"}
            flexWrap="wrap"
            // justifyContent="space-between"
            width={"100%"}
          >
            <Stack
              spacing={6}
              direction={"row"}
              flexGrow={1}
              flexWrap="nowrap"
              justifyContent={"space-between"}
            >
              <Box sx={{ marginTop: "10px" }} id="description">
                <Typography fontWeight={700} fontSize="2rem" variant="h1">
                  {values.campaignTitle}
                </Typography>
                <Typography
                  sx={{ marginTop: "20px" }}
                  fontSize={".7rem"}
                  fontWeight="500"
                  variant="body1"
                >
                  {values?.campaignDescription
                    ? values?.campaignDescription
                    : selectedPet?.description}
                </Typography>
              </Box>

              {!isArray(selectedPet.images) ? null : (
                <Box
                  sx={{
                    // width: "100%",
                    // height: "auto",
                    flexBasis: "210px",
                    flexShrink: 0,
                  }}
                  id="image-preview"
                >
                  <img
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                    src={selectedPet.images[0]}
                  />
                </Box>
              )}
            </Stack>
          </Stack>

          <Section>
            <ImageList
              sx={{ width: "100%", height: "auto", overflowY: "unset" }}
              cols={3}
              rowHeight={164}
            >
              {additionalPetImages.map((item, i) => (
                <ImageListItem key={item}>
                  <img
                    key={i}
                    style={{ height: "160px" }}
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    // loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Section>

          {/* <Section>
            <Typography fontSize={".7rem"} fontWeight="500" variant="body1">
              Please have wired to the lender pursuant to the following wiring
              instructions:
            </Typography>
            <Stack marginTop="10px" direction={"row"}>
              <Box>
                <Typography fontSize=".7rem" variant="body1">
                  Funds are to be wired to:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  For credit to:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  Account number:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  ABA routing number:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  Reference:
                </Typography>
              </Box>
              <Box ml={"40px"}>
                <Typography fontSize=".7rem" variant="body1">
                  JP Morgan Chase Bank
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  Flatiron Realty Capital LLC
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  378060120
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  021000021
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  {values.loanId} Payoff
                </Typography>
              </Box>
            </Stack>
          </Section> */}
        </Box>
      </Stack>
    </DrilldownCard>
  );
};

const Section = (props) => {
  return <Box marginTop="50px">{props.children}</Box>;
};

const SectionRow = ({ label, value, valueBold, labelBold, title }) => {
  const checkIfValid = (val, dollar) => {
    if (title) {
      return val;
    }
    if (isNil(val) || val === "" || isArray(val) || isObject(val)) {
      return "-";
    }
    if (dollar) {
      let valNum = Number(val);
      return `$${formFormatDollar(valNum)}`;
    }
    return val;
  };
  return (
    <Stack
      direction={"row"}
      padding="1px 6px"
      spacing={2}
      // justifyContent="space-between"
      alignItems={"center"}
    >
      <Typography
        flexBasis={"40%"}
        fontSize=".7rem"
        textAlign={"right"}
        fontWeight={labelBold ? 700 : 500}
        variant="body1"
      >
        {labelBold ? checkIfValid(labelBold, true) : checkIfValid(label, true)}
      </Typography>
      <Typography
        flexBasis={"60%"}
        fontSize=".7rem"
        textAlign={"left"}
        fontWeight={valueBold ? 700 : 500}
        variant="body1"
      >
        {valueBold ? checkIfValid(valueBold) : checkIfValid(value)}
      </Typography>
    </Stack>
  );
};

export default FundraisingCreateScreen;
