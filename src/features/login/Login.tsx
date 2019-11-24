import React, { useContext } from "react";
import LoginWrapperStyled from "./LoginJss";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../core/components/login-form/LoginForm";

const Login: React.FC = (props: any) => {

    const { history } = props;

    const authContext = useContext(AuthContext);

    const onLogin = (values: any, actions: any) => {
    
            setTimeout(() => {
                authContext.isAuthenticated = true;
                history.push("/shippingLabelMaker");
            }, 1000);
    }

    let login =  (
        <LoginWrapperStyled>
              <LoginForm onSubmit = {onLogin}/>
        </LoginWrapperStyled>)
  
    return login;
}

export default Login;