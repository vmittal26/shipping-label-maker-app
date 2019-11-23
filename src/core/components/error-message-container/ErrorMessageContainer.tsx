import React from "react";
import { Typography } from "@material-ui/core";
import ErroMessageContainerStyled from "./ErrorMessageContainerJss";


type ErrorMessageType = {
    errorMessage: string
}
const ErroMessageContainer: React.FC<ErrorMessageType> = ({ errorMessage }) => (
    <ErroMessageContainerStyled>
        <Typography color='error' variant="h5" component="h5">
            {errorMessage}
        </Typography>
    </ErroMessageContainerStyled>);
export default ErroMessageContainer;