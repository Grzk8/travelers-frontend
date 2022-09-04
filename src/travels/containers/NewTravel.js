import React, { useCallback, useReducer, useState, useEffect, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/Button/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './NewTravel.css';

const NewTravel = () => {
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [formState, inputHandler] = useForm(
        {
            destination: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            creator: {
                value: '',
                isValid: false
            }
        },
        false
    )

    const newTravel = useEffect (() => {
        const request = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/travels', {
                    method: 'POST',
                    header: {'Content-Type': 'application/json'},
                    body:JSON.stringify({
                        destination: formState.inputs.destination.value,
                        description:formState.inputs.description.value,
                        creator: auth.userId
                    })
                });
                const responseData = await response.json();
                console.log(responseData)

                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                //setUsers(responseData.users);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        request();
    }, []);

    const submitFormHandler = event => {
        event.preventDefault();
        newTravel();
    };

    return (
        <form className="travel-form" onSubmit={submitFormHandler}>
            <Input
                id="destination"
                element="input"
                type="text"
                label="Destination"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    );
};

export default NewTravel;