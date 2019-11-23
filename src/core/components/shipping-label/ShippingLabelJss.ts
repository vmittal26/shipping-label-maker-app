import styled, { StyledComponent } from "styled-components";
import { Typography } from "@material-ui/core";

const ShippingLabelStyled = styled.div`
    border:1px solid #ccc;
    height:100%;
    font-size:0.8rem;
    padding:0;
`;

export const FlexBarStyled: StyledComponent<any, any> = styled.div`
    background-color:${({bgcolor="rgb(51,51,51)"}: any) => bgcolor};
    width:100%;
    padding:${(props: any) => props.padding};
    display:flex;
    justify-content:space-between;
    
`

export const ShippingLabelHeaderStyled = styled.div`
    display:flex;
    width:100%;
    padding:1em 4em;
    padding-bottom:0em;
    justify-content:space-between;
    
`

export const ShippingLabelMainStyled = styled.div`
    padding:1em 4em ;

`

export const ShippingClientInfoContainerStyled = styled.div`
    margin:2em 0;
    display:flex;
    width:50%;
`

export const ShippingClientInfoStyledBox = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:50%;

    .heading-1{
        font-weight:300;
        padding-bottom:0.8em;
    }
`
export const TypographyStyled: StyledComponent<any, any> = styled(Typography)`
   color:${(props: any) => props.textcolor};
`


export const ShippingRateDescriptionStyled = styled.div`
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    flex-direction:column;

`

export const ShippingDescriptionHeaderRightStyled = styled.div`
  display:flex;
  justify-content:space-between;
  flex-basis:20%;
`

export const ShippingRateContainerStyled:StyledComponent<any, any> = styled.div`
  padding:1.5em;
  background-color:${({bgcolor="#fff"}: any) => bgcolor};
  display:flex;
  justify-content:space-between;
  width:${({width="21%"}: any) => width};
  margin-left:auto
`


export default ShippingLabelStyled;