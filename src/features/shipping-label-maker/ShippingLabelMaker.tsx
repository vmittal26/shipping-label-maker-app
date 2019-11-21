import React, {useState} from "react";
import Wizard from "../../core/components/wizard/Wizard";
import wizardContext from "../../mockData/wizardContext";

const ShippingLabelMaker: React.FC = () => {
  const [state, setState] = useState({
    wizardContext
  });
  return (
    <div>
      <Wizard wizardContext={wizardContext}/>
    </div>
  );
};

export default ShippingLabelMaker;
