import React from 'react';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';
import Header from './core/components/header/Header';
import MainWrapper from './AppJss';


const App: React.FC = () => {
  return (
    <div>
     <Header/>
      <MainWrapper >
        <ShippingLabelMaker/>
      </MainWrapper>    
    </div>
  );
}

export default App;
