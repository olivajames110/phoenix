import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Field, useForm, useFormState } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DrilldownCard from "../../../../components/Drilldown/DrilldownCard";
import FinalFormSelectField from "../../../../components/form/Fields/FinalFormSelectField";
import FinalFormTextField from "../../../../components/form/Fields/FinalFormTextField";
import ReactFinalForm from "../../../../components/form/ReactFinalForm";
import { DatePickerTextFieldComponent } from "../../../../components/form/components/inputs/finalFormComponents/DatePickerTextFieldComponent";
import FileUploadField from "../../../../components/form/components/inputs/generic/FileUploadField/FileUploadField";
import FormGroup from "../../../../components/form/components/shared/FormGroup/FormGroup";
import DashboardScreen from "../../../../components/layout/DashboardScreen";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import DraftJsTextEditor from "../../../../components/shared/DraftJsTextEditor";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import { StackRowEnd } from "../../../../components/shared/MuiStack";
import { db } from "../../../../database/db";
import { getCatFromDb } from "../../../../helpers/getCatFromDb";
import { setFormData } from "../../../../redux/actions/formDataActions";
import BorrowerDashboardHeader from "../../BorrowerDashboardHeader/BorrowerDashboardHeader";
import FundraisorCreatePreviewCard from "./FundraisorCreatePreviewCard";
import LoanServicingDrilldownScreenTab from "./LoanServicingDrilldownScreenTab";
import { addFundraisors } from "../../../../redux/actions/fundraisorsActions";
import SuccessContent from "../../../../components/shared/SuccessContent";
import {
  EmailOutlined,
  Facebook,
  FacebookOutlined,
  Instagram,
  LanguageOutlined,
} from "@mui/icons-material";
import { isNil } from "lodash";

const FundraisingCreateScreen = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(true);
  const formData = useSelector((state) => state.formData);
  const handleSubmitForm = (formData) => {
    console.log("formData", formData);

    dispatch(addFundraisors(formData));
    setShowForm(false);
  };

  const handleGoToWebpage = () => {
    setShowForm(true);
    navigate(`/help/${formData.pathname}`);

    // dispatch(setFormData(formData));
    // dispatch(
    //   setFormData(
    //     getCatFromDb({
    //       animalName: "Inky",
    //     })
    //   )
    // );
  };

  if (!showForm) {
    return (
      <DashboardScreen>
        {/* <BorrowerDashboardHeader /> */}
        <DrilldownCard
          sx={{
            width: "max-content",
            height: "auto",
            margin: "30px auto",
            padding: "0 30px 30px",
          }}
        >
          <Stack alignItems={"center"}>
            <SuccessContent />
            <Typography fontWeight={700} fontSize="2rem" variant="h1">
              Fundraisor Created!
            </Typography>
            <Typography fontWeight={500} marginTop="10px">
              Your campaign Help Blinky Is scheduled to begin on 4/1/2023
            </Typography>
            <Box
              sx={{
                margin: "20px 0",
                maxWidth: "400px",
                overflowY: "auto",
                maxHeight: "300px",
                border: "var(--border)",
              }}
            >
              <DraftJsTextEditor readOnly data={formData.campaignDescription} />
            </Box>

            <Stack>
              <Button
                onClick={handleGoToWebpage}
                startIcon={<LanguageOutlined />}
              >
                Preview Webpage
              </Button>
              <Button startIcon={<Instagram />}>Preview Instagram</Button>
              <Button startIcon={<FacebookOutlined />}>Preview Facebook</Button>
              <Button startIcon={<EmailOutlined />}>
                Preview Email Camgpaign
              </Button>
              <Divider sx={{ margin: "30px 0" }} />
              <Button onClick={() => setShowForm(true)} variant="outlined">
                Create Another Fundraisor
              </Button>
            </Stack>
          </Stack>
        </DrilldownCard>
      </DashboardScreen>
    );
  }

  return (
    <DashboardScreen hideSidenav>
      <BorrowerDashboardHeader />
      <Stack
        sx={{
          height: "100%",
          flexGrow: 1,
          form: {
            height: "100%",
          },
        }}
      >
        <ReactFinalForm
          hideButton
          onSubmit={handleSubmitForm}
          submitButtonText={"Create Fundraisor"}
          subscription={{ submitting: true, pristine: true }}
        >
          <ScreenBody sx={{ height: "100%" }}>
            <MuiGrid sx={{ height: "100%" }} spacing={3}>
              <GridItem size={4}>
                <DrilldownCard sx={{ height: "unset", flexGrow: 1 }}>
                  <LoanServicingDrilldownScreenTab title="Fundraisor Creator">
                    <FormContent />
                  </LoanServicingDrilldownScreenTab>
                </DrilldownCard>
              </GridItem>
              <GridItem size={8}>
                <FundraisorCreatePreviewCard />
              </GridItem>
            </MuiGrid>
          </ScreenBody>
        </ReactFinalForm>
      </Stack>
    </DashboardScreen>
  );
};

const FormContent = (props) => {
  const catsList = db.cats;
  const dispatch = useDispatch();
  const { values } = useFormState();
  const catsSelectList = catsList.map(function (cat) {
    return cat["name"];
  });

  useEffect(() => {
    dispatch(setFormData(values));
  }, [values]);
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
          <GridItem size={12}>
            <FinalFormTextField
              label="Website Url Name"
              name={"pathname"}
              helperText={`www.feraltofamily.com/help/${
                isNil(values?.pathname) ? "example-url-name" : values?.pathname
              }`}
            />
          </GridItem>
        </MuiGrid>
      </FormGroup>
      <FormGroup label="Campaign Description">
        <MuiGrid>
          <GridItem size={12}>
            {/* <Field
              name={"campaignDescription"}
              noMargin
              component={TextareaFieldComponent}
            /> */}
            <DraftJsTextarea />
          </GridItem>
        </MuiGrid>
      </FormGroup>
      <FormGroup label="Upload Pet Files">
        <MuiGrid>
          <GridItem size={12}>
            <FileUploadField noMargin name={"files"} />
            <Stack padding="5px" direction={"row"} spacing={0.5}>
              {values?.documents?.map((doc) => (
                <Image
                  src={doc.file.preview}
                  maxWidth="50px"
                  maxHeight="50px"
                  borderRadius="4px"
                />
              ))}
            </Stack>
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

const Image = ({ src, maxWidth, maxHeight, borderRadius }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        borderRadius: borderRadius ? borderRadius : "16px",
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

const DraftJsTextarea = ({ readOnly, data }) => {
  const { change } = useForm();
  const handleOnChange = (passedData) => {
    change("campaignDescription", passedData);
  };

  return <DraftJsTextEditor onChange={handleOnChange} />;
};

export default FundraisingCreateScreen;
