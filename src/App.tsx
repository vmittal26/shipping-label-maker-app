import React from 'react';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';
import Header from './core/components/header/Header';
import MainWrapper from './AppJss';
import { StylesProvider, createMuiTheme } from '@material-ui/core';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import ShippingLabel from './core/components/shipping-label/ShippingLabel';

const theme = createMuiTheme({
  
  palette: {
    primary: {
      main: '#039be5',
    }
  },
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Header />
        <MainWrapper >
          <Switch>
            <Route exact path="/" component={ShippingLabelMaker}/>
            <Route exact path="/shippingLabel" component={ShippingLabel}/>
          </Switch>
        </MainWrapper>
      </StylesProvider>
    </ThemeProvider>

  );
}

export default App;
