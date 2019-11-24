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
    state: Yup.string().required(`Please enter state`),

  }),
  to: Yup.object().shape({
    name: Yup.string().required(`Please Enter Sender's Name`),
    street: Yup.string().required(`Please Enter Street`),
    zip: Yup.number().typeError("Must be number").required(`Please enter zip`),
    city: Yup.string().required(`Please enter City`),
    state: Yup.string().required(`Please enter state`)
  }),
  weight: Yup.number().moreThan(0, "Must be more than 0 KG").max(200, "Maximum weight allowed 200 KG").typeError("Must be number").required(`Please enter weight`),
})

const ShippingLabelMaker: React.FC = (props: any) => {

  const { history } = props;

  const onComplete = (wizardContext: WizardContextType) => {
    history.push("/shippingLabel", {
      wizardContext,
      isWizardComplete:true
    });
  }

  let shippingLabelMaker = (
    <Wizard
      wizardContext={initialWizardContext}
      steps={getSteps()}
      onComplete={onComplete}
      getStepContent={getStepContent}
      validationSchema={validationSchema} />

  );

  return shippingLabelMaker;

};

export default ShippingLabelMaker;
