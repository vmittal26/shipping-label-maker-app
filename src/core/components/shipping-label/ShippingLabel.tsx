import React from "react";
import WizardContextType from "../../../model/WizardContextType";
import ShippingLabelStyled, { ShippingLabelHeaderStyled, ShippingLabelMainStyled, ShippingClientInfoContainerStyled, ShippingClientInfoStyledBox, FlexBarStyled, ShippingRateDescriptionStyled, TypographyStyled, ShippingDescriptionHeaderRightStyled, ShippingRateContainerStyled } from "./ShippingLabelJss";
import { Typography, Divider, Box, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

type ShippingLabelType = {
    wizardContext: WizardContextType
}

const theme = createMuiTheme({
    typography: {
        fontSize: 12,
    },
});
const ShippingLabel: React.FC<ShippingLabelType> = (props: ShippingLabelType) => {

    return (
        <ShippingLabelStyled>
            <ThemeProvider theme={theme}>
                <FlexBarStyled padding="0.7rem"></FlexBarStyled>
                <ShippingLabelHeaderStyled>
                    <Typography variant="h4" component="h1">Invoice</Typography>
                </ShippingLabelHeaderStyled>
                <ShippingLabelMainStyled>
                    <ShippingClientInfoContainerStyled>
                        <ShippingClientInfoStyledBox>
                            <Typography className="heading-1" variant="h6">FROM </Typography>
                            <Typography variant="h6"> Vaibhav Mittal</Typography>
                            <Typography variant="subtitle1"> Sector -77 , North Eye</Typography>
                            <Box display="flex" className="heading-2">
                                <Typography variant="subtitle1">  Noida , 201301</Typography>
                            </Box>
                            <Typography variant="h6">Uttar Pradesh</Typography>
                        </ShippingClientInfoStyledBox>
                        <ShippingClientInfoStyledBox>
                            <Typography className="heading-1" variant="h6">TO</Typography>
                            <Typography variant="h6"> John Miller</Typography>
                            <Typography variant="subtitle1"> Sector -77 , North Eye</Typography>
                            <Box display="flex" className="heading-2">
                                <Typography variant="subtitle1">  Noida , 201301</Typography>
                            </Box>
                            <Typography variant="h6">Uttar Pradesh</Typography>
                        </ShippingClientInfoStyledBox>
                    </ShippingClientInfoContainerStyled>
                    <ShippingRateDescriptionStyled>
                        <FlexBarStyled padding="0.8rem">
                            <TypographyStyled textcolor="white" variant="subtitle1">Description</TypographyStyled>
                            <ShippingDescriptionHeaderRightStyled>
                                <TypographyStyled textcolor="white" variant="subtitle1">RATE</TypographyStyled>
                                <TypographyStyled textcolor="white" variant="subtitle1">WEIGHT</TypographyStyled>
                                <TypographyStyled textcolor="white" variant="subtitle1">AMOUNT</TypographyStyled>
                            </ShippingDescriptionHeaderRightStyled>
                        </FlexBarStyled>
                        <FlexBarStyled bgcolor={"#efefef"}>
                            <ShippingRateContainerStyled bgcolor="#efefef">
                                <Typography variant="subtitle1">0.40</Typography>
                                <Typography variant="subtitle1">weight</Typography>
                                <Typography variant="subtitle1">₹200</Typography>
                            </ShippingRateContainerStyled>
                        </FlexBarStyled>
                        <ShippingRateContainerStyled width="20%">
                            <Typography variant="subtitle1">SHIPPING OPTION</Typography>
                            <Typography variant="subtitle1">₹0.00</Typography>
                        </ShippingRateContainerStyled>
                        <ShippingRateContainerStyled width="14%">
                            <Typography variant="subtitle1">Tax (0%)</Typography>
                            <Typography variant="subtitle1">₹0.00</Typography>
                        </ShippingRateContainerStyled>
                        <ShippingRateContainerStyled width="56%">
                            <Typography variant="button"><strong>TOTAL COST : RATE * WEIGHT * SHIPPING OPTION COST ( GROUND = 1 , PRIORITY = 1.15 )</strong></Typography>
                            <Typography variant="subtitle1">₹0.00</Typography>
                        </ShippingRateContainerStyled>
                    </ShippingRateDescriptionStyled>
                </ShippingLabelMainStyled>
            </ThemeProvider>
        </ShippingLabelStyled>)
}

export default ShippingLabel;