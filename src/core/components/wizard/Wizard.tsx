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
import WizardContextType from "../../../model/WizardContextType";
import StepGetShippingOption from "../step-get-shipping-option/StepGetShippingOption";
import * as Yup from "yup";
import StepGetWeight from "../step-get-weight/StepGetWeight";
import StepCompletionDialogue from "../step-completion-dialogue/StepCompletionDialogue";



function getSteps() {
  return [
    "Step 1 Enter Sender's Address",
    "Step 2 Enter Reciver's Address",
    "Step 3 Enter Shipping Option",
    "Step 4 Enter Shipping Weight",
    "Step 5 Confirm"
    // "Step 3 Enter Shipping Weight",
    // "Step 4 Enter Shipping Option"
  ];
}

function getStepContent(stepIndex: number, props: any) {
  switch (stepIndex) {
    case 0:
      return <StepSenderAdress {...props} />;
    case 1:
      return <StepReceiverAddress {...props} />;
    case 2:
      return <StepGetShippingOption {...props} />;
    case 3:
      return <StepGetWeight {...props} />
    case 4:
      return <StepCompletionDialogue />
    // case 2:
    //   return <GetShippingOption />;
    // case 3:
    //   return <GetWeight />;
    default:
      return "Unknown stepIndex";
  }
}


type WizardPropsType = {
  wizardContext: WizardContextType
}
const Wizard: React.FC<WizardPropsType> = (props: WizardPropsType) => {

  const { wizardContext } = props;
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = (validateForm: Function, setTouched: Function) => {
    // validateForm().then((errors: any) => {
    //   console.log(errors);
    //   if (Object.keys(errors).length === 0) {
    //     setActiveStep(prevActiveStep => prevActiveStep + 1);
    //   }
    // });

    setActiveStep(prevActiveStep => prevActiveStep + 1);

  };

  const handleBack = () => {

    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <WizardWrapper>
      <Formik
        enableReinitialize
        initialValues={wizardContext}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={Yup.object().shape({
          from: Yup.object().shape({
            name: Yup.string().required(`Please Enter Sender's Name`),
            street: Yup.string().required(`Please Enter Street`),
            zip: Yup.number().typeError("Must be number").required(`Please enter zip`),
            city: Yup.string().required(`Please enter City`),
            state: Yup.string().required(`Please enter state`)
          }),
          to: Yup.object().shape({
            name: Yup.string().required(`Please Enter Sender's Name`),
            street: Yup.string().required(`Please Enter Street`),
            zip: Yup.number().typeError("Must be number").required(`Please enter zip`),
            city: Yup.string().required(`Please enter City`),
            state: Yup.string().required(`Please enter state`)
          }),
        })}
        children={(props: any) => (
          <Form>
            <StepperStyled activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </StepperStyled>
            <div>
              {/* {activeStep === steps.length ? (
                <div>
                  <Typography>All steps completed</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : ( */}
              <div>
                {getStepContent(activeStep, props)}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                    </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    style={activeStep === steps.length - 1 ? { display: "none" } : {}}
                    // disabled={Object.keys(props.errors).length > 0}
                    onClick={() => handleNext(props.validateForm, props.setTouched)}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>

                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={activeStep < steps.length - 1 ? { display: "none" } : {display: "block" }}
                    // disabled={Object.keys(props.errors).length > 0}
                  >
                    Confirm
                  </Button>
                </div>

              </div>
            </div>
          </Form>)
        }
      />
    </WizardWrapper>
  );
}

export default Wizard;
