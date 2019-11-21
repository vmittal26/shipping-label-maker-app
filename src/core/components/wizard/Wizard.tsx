import React from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Formik, Form } from "formik";
import StepSenderAdress from "../step-sender-address/StepSenderAdress";
import StepReceiverAddress from "../step-receiver-address/StepReceiverAddress";
import WizardWrapper, { StepperStyled } from "./WizardJss";
import { StylesProvider } from "@material-ui/core";
import WizardContextType from "../../../model/WizardContextType";



function getSteps() {
  return [
    "Step 1 Enter Sender's Address",
    "Step 2 Enter Reciver's Address"
    // "Step 3 Enter Shipping Weight",
    // "Step 4 Enter Shipping Option"
  ];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <StepSenderAdress />;
    case 1:
      return <StepReceiverAddress />;
    // case 2:
    //   return <GetShippingOption />;
    // case 3:
    //   return <GetWeight />;
    default:
      return "Unknown stepIndex";
  }
}


type WizardPropsType= {
  // ... props interface
  wizardContext:WizardContextType 
}
const Wizard:React.FC<WizardPropsType>= (props:WizardPropsType)=> {

  const {wizardContext} = props;
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StylesProvider injectFirst>
      <WizardWrapper>
        <Formik
          enableReinitialize
          initialValues={wizardContext}
          onSubmit={values => {
            console.log(values);
          }}
          children={
            <Form>
              <StepperStyled activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </StepperStyled>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                    <div>
                      {getStepContent(activeStep)}
                      <div>
                        <Button disabled={activeStep === 0} onClick={handleBack}>
                          Back
                    </Button>
                        <Button
                          type={
                            activeStep === steps.length - 1 ? "submit" : "button"
                          }
                          size="large"
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
              </div>
            </Form>
          }
        />
      </WizardWrapper>
    </StylesProvider>
  );
}

export default Wizard;
