import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const FormWizardStepper = ({
  formSteps,
  activeFormStep,
  setActiveFormStep,
  clickable,
  alt,
}) => {
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 20,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg ,  #2566e8 0%, #235685 50%, #1c456a8c 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg ,  #2566e8 0%, #235685 50%, #1c456a8c 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const useStyles = makeStyles({
    customLabelStyle: {
      fontSize: ".7rem",
      marginTop: alt ? "8px !important" : "0px",
    },
  });

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg,  #2566e8 0%, #235685 50%, #1c456a8c 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg,  #2566e8 0%, #235685 50%, #1c456a8c 100%)",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const stepIcon = formSteps[props.icon - 1]?.icon;
    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {stepIcon}
      </ColorlibStepIconRoot>
    );
  }

  const handleStepClick = (step) => {
    setActiveFormStep(step);
  };
  const classes = useStyles();
  return (
    <Stepper
      // sx={{ paddingBottom: "20px" }}
      activeStep={activeFormStep - 1}
      alternativeLabel={alt ? true : false}
      connector={<ColorlibConnector />}
    >
      {formSteps.map((step, index) => (
        <Step
          onClick={() => handleStepClick(index + 1)}
          sx={{ cursor: clickable ? "pointer" : "cursor" }}
          // sx={{ width: "90px", height: "90px", cursor: "pointer" }}
          key={step.stepName}
          connector={<ColorlibConnector />}
        >
          <StepLabel
            // sx={{ fontSize: ".5rem" }}
            classes={{ label: classes.customLabelStyle }}
            StepIconComponent={ColorlibStepIcon}
          >
            {step.stepName}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default FormWizardStepper;
