// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import Input from '../../shared/components/FormElements/Input';
// import Button from '../../shared/components/Button/Button';
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH
// } from '../../shared/util/validators';
// import { useForm } from '../../shared/hooks/form-hook';
// import { useHttpClient } from '../../shared/hooks/http-hook';


// const UpdateTravel = () => {
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();
//   const [loadedTravel, setLoadedTravel] = useState();
//   const placeId = useParams().placeId;

//   useEffect(() => {
//     const fetchTravel = async () => {
//       try {
//         const responseData = await sendRequest(`http://localhost:5000/api/trevels/${placeId}`);
//         setLoadedTravel(responseData.travel);
//         setFormData(
//           {
//             destination: {
//               value: responseData.travel.destination,
//               isValid: true
//             },
//             description: {
//               value: responseData.travel.description,
//               isValid: true
//             }
//           },
//           true
//         );
//       } catch (err) { }
//     };
//     fetchTravel();
//   }, [sendRequest, placeId, setFormData]);

// /*   useEffect(() => {

//      setFormData(
//       {
//         title: {
//           value: identifiedTravel.title,
//           isValid: true
//         },
//         description: {
//           value: identifiedTravel.description,
//           isValid: true
//         }
//       },
//       true
//     );
//   }, [setFormData, identifiedTravel]);

//   const [formState, inputHandler, setFormData] = useForm({
//     title: {
//       value: identifiedTravel.title,
//       isValid: true
//     },
//     description: {
//       value: identifiedTravel.description,
//       isValid: false
//     }
//   }, false)  */

//   const updateSubmitHandler = evrnt => {
//     evrnt.preventDefault();

//   }
//   if (!identifiedTravel) {
//     return (
//       <div className="center">
//         <h2>Could not find place!</h2>
//       </div>
//     );
//   }

//   return (

//     <form className="place-form" onSubmit={updateSubmitHandler()}>
//       <Input
//         id="title"
//         element="input"
//         type="text"
//         label="Title"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid title."
//         onInput={inputHandler}
//         initialValue={formState.inputs.title.value}
//         initialValid={formState.inputs.title.isValid}
//       />
//       <Input
//         id="description"
//         element="textarea"
//         label="Description"
//         validators={[VALIDATOR_MINLENGTH(5)]}
//         errorText="Please enter a valid description (min. 5 characters)."
//         onInput={inputHandler}
//         initialValue={formState.inputs.description.value}
//         initialValid={formState.inputs.description.isValid}
//       />
//       <Button type="submit" disabled={!formState.isValid}>
//         UPDATE PLACE
//       </Button>
//     </form>
//   );
// };

// export default UpdateTravel;



