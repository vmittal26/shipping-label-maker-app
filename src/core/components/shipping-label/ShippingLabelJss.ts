import styled, { StyledComponent } from "styled-components";

const ShippingLabelStyled = styled.div`
    border:1px solid #ccc;
    height:100%;
    padding:0;
`;

export const TopbarStyled: StyledComponent<any, any> = styled.div`
    background-color:rgb(0,0,0,0.9);
    width:100%;
    padding:${(props: any) => props.padding};

`

export const ShippingLabelHeaderStyled = styled.div`
    display:flex;
    width:100%;
    padding:4em;
    justify-content:space-between;
    
`

export const ShippingLabelMainStyled = styled.div`
    padding:4em;

`

export const ShippingClientInfoContainerStyled = styled.div`
        margin:4em 0;
        display:flex;
        width:50%;
`

export const ShippingClientInfoStyledBox = styled.div`
        display:flex;
        flex-direction:column;
        flex-basis:50%;

        .heading-1{
            font-weight:300;
            padding:0.8em 0;
        }
`


export const ShippingConstInfoStyled = styled.div`
        color:white;
        text-transform:uppercase;
`

export default ShippingLabelStyled;