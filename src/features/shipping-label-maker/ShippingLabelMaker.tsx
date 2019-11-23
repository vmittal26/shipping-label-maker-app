import React, { useState } from "react";
import Wizard from "../../core/components/wizard/Wizard";
import initialWizardContext from "../../mockData/wizardContext";
import StepSenderAdress from "../../core/components/step-sender-address/StepSenderAdress";
import StepReceiverAddress from "../../core/components/step-receiver-address/StepReceiverAddress";
import StepGetShippingOption from "../../core/components/step-get-shipping-option/StepGetShippingOption";
import StepGetWeight from "../../core/components/step-get-weight/StepGetWeight";
import StepConfirmation from "../../core/components/step-confirmation/StepConfirmation";
import isObjectEmpty from "../../core/utils/isObjectEmpty";
import * as Yup from "yup";
import WizardContextType from "../../model/WizardContextType";
import Spinner from "../../core/components/spinner/Spinner";
import ShippingLabel from "../../core/components/shipping-label/ShippingLabel";


//Factory of Content Component 
function getStepContent(stepIndex: number, props: any) {

  const { errors } = props;

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
      return <StepConfirmation isFormValid={isObjectEmpty(errors)} />
    default:
      return "Unknown stepIndex";
  }
}
function getSteps() {
  return [
    "Step 1 Enter Sender's Address",
    "Step 2 Enter Reciver's Address",
    "Step 3 Enter Shipping Option",
    "Step 4 Enter Shipping Weight",
    "Step 5 Confirm"
  ];
}

const validationSchema = Yup.object().shape({
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
})

const ShippingLabelMaker: React.FC = () => {
  const [isGeneratingShippingLabel, setIsGeneratingShippingLabel] = useState<boolean>(false);

  const [state, setState] = useState({
    isWizardComplete: false,
    wizardContext: initialWizardContext
  });

  const { isWizardComplete, wizardContext } = state;
  const onComplete = (wizardContext: WizardContextType) => {

    setIsGeneratingShippingLabel(true);
    setTimeout(() => {
      setIsGeneratingShippingLabel(false);
      setState({
        isWizardComplete: true,
        wizardContext
      })
    }, 1000);
  }

  let spinner = <Spinner />

  let wizard = (
    <Wizard
      wizardContext={wizardContext}
      steps={getSteps()}
      onComplete={onComplete}
      getStepContent={getStepContent}
      validationSchema={validationSchema} />

  );
  let shippingLabelMaker = null;

  if (isGeneratingShippingLabel) {
    shippingLabelMaker = <>{spinner}{wizard}</>;
  } else if (isWizardComplete) {
    shippingLabelMaker = <ShippingLabel wizardContext={wizardContext} />;
  } else {
    shippingLabelMaker = wizard;
  }

  return shippingLabelMaker;

};

export default ShippingLabelMaker;
