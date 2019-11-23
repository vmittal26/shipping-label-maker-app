import React from "react";
import WizardContextType from "../../../model/WizardContextType";
import ShippingLabelStyled, { ShippingLabelHeaderStyled, ShippingLabelMainStyled, ShippingClientInfoContainerStyled, ShippingClientInfoStyledBox, TopbarStyled, ShippingConstInfoStyled } from "./ShippingLabelJss";
import { Typography, Divider, Box } from "@material-ui/core";

type ShippingLabelType = {
    wizardContext: WizardContextType
}


const ShippingLabel: React.FC<ShippingLabelType> = (props: ShippingLabelType) => {

    return (
        <ShippingLabelStyled>
            <TopbarStyled padding={"0.7rem"}></TopbarStyled>
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
                <Divider />
                <ShippingConstInfoStyled>
                    <TopbarStyled padding={"0.8rem"}>
                         <Typography variant="subtitle1">Description</Typography>
                    </TopbarStyled>

                </ShippingConstInfoStyled>

            </ShippingLabelMainStyled>
        </ShippingLabelStyled>)

}

export default ShippingLabel;