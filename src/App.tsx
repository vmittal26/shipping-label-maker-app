import React from 'react';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';
import './App.scss';
import Header from './core/components/header/Header';
import Wizard from './core/components/wizard/Wizard';


const App: React.FC = () => {
  return (
    <div className="App">
     <Header/>
      <main >
        <Wizard/>
      </main>    
    </div>
  );
}

export default App;
