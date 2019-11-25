import React from 'react';
import { shallow } from 'enzyme';
import Header from '../core/components/header/Header';

describe('First React component test with Enzyme', () => {

   const wrapper = shallow(<Header />); 
   it('renders header without crashing', () => {
     
   });

   it('renders header with correct heading', () => {
       expect(wrapper.find(`[data-heading='${'header-heading'}']`).text()).toEqual("Shipping Label Maker")
   });
});