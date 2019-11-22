import React from 'react';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';
import Header from './core/components/header/Header';
import MainWrapper from './AppJss';
import { StylesProvider } from '@material-ui/core';


const App: React.FC = () => {
  return (
    <div>
      <StylesProvider injectFirst>
        <Header />
        <MainWrapper >
          <ShippingLabelMaker />
        </MainWrapper>
      </StylesProvider>
    </div>

  );
}

export default App;
