import React from 'react';
import { StyledForm } from "./style";
import { Login } from "./login";
import { Reg } from "./reg";

const AuthModal: React.FC = () => {

    return (
        <StyledForm>
            <div className="wrapper">
                <h1>Чтобы использовать приложение, нужно зарегистрироваться или авторизоваться.</h1>
                <div className="forms">
                    <Login />
                    <Reg />
                </div>
            </div>
        </StyledForm>
    );
}

export {
    AuthModal
}