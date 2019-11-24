import React from 'react'
import HeaderWrapper from './HeaderJss';
import ShippingMaker from "../../../assets/images/shippinglabel-maker.svg"
import { TypographyStyled } from '../../utils/styled-components/TypographyStyled';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/"> <img src={ShippingMaker} alt="Shipping Service" /></Link>
      <TypographyStyled marginleft="1em" textcolor="white" variant="subtitle2" component="h1">Shipping Label Maker</TypographyStyled>
    </HeaderWrapper>
  )
}
