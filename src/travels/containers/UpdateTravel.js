import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';


const UpdateTravel = () => {
  const placeId = useParams().placeId;

  const DUMMY_PLACES = [];

  const identifiedTravel = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedTravel.title,
          isValid: true
        },
        description: {
          value: identifiedTravel.description,
          isValid: true
        }
      },
      true
    );
  }, [setFormData, identifiedTravel]);

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: identifiedTravel.title,
      isValid: true
    },
    description: {
      value: identifiedTravel.description,
      isValid: false
    }
  }, false)

  const updateSubmitHandler = evrnt => {
    evrnt.preventDefault();

  }
  if (!identifiedTravel) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (

    <form className="place-form" onSubmit={updateSubmitHandler()}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdateTravel;
