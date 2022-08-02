import React, { useState } from "react";

import './Auth.css';
import Card from '../../shared/components/Card/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/Button/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const authSubmitHandlet = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    const switchModeHandler = () => {
        setIsLoginMode(prevMode => !prevMode);
    };

    return <Card className="auth">
        <h2>Login</h2>
        <hr />
        <form onSubmit={authSubmitHandlet}>
            {!isLoginMode &&
                < Input
                    element="input"
                    id="name"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter a name"
                    onInput={inputHandler}
                />}
            <Input
                id="email"
                element="imput"
                type="email"
                label="email"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Enter a valid email address"
                onInput={inputHandler}
            />
            <Input
                id="password"
                element="imput"
                type="password"
                label="password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Enter a valid password, at least 5 characters"
                onInput={inputHandler}
            />
            < Button disabled={!formState.isValid} type="submit">
                {isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
            {isLoginMode ? 'You don`t have a account? SIGNUP' : 'LOGIN'}
        </Button>
    </Card>
};

export default Auth;