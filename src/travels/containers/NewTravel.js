import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/Button/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './NewTravel.css';

const NewTravel = () => {
    const auth = useContext(AuthContext);
    //const [isLoading, setIsLoading] = useState(false);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
    );

    const history = useHistory();

    const submitFormHandler = async event => {
        event.preventDefault();
        try {
            await sendRequest(
              'http://localhost:5000/api/travels',
              'POST',
              JSON.stringify({
                        destination: formState.inputs.destination.value,
                        description:formState.inputs.description.value,
                        creator: auth.userId
              }),
              { 'Content-Type': 'application/json' }
            );
            history.push('/');
          } catch (err) {}
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
            <Button type="submit" >
                ADD PLACE
            </Button>
        </form>
    );
};

export default NewTravel;