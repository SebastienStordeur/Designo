import React from "react";
import useInput from "../../hooks/useInput";

import Button from "../UI/Button";
import Input from "../UI/Input";

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const isNotEmpty = (value) => value.trim() !== "";
const isValidName = (value) =>
  letterRegex.test(value) && isNotEmpty; /* && value.length >= 3 */

const ContactForm = () => {
  const {
    value: enteredName,
    isValid: enterNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameHandInput,
  } = useInput(isValidName);

  let formIsValid = false;
  if (enterNameIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetNameHandInput();
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="mb-6">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p>Error</p>}
      </div>
      <div>
        <Input type="email" placeholder="Email Address" />
      </div>
      <div className="my-6">
        <Input type="phone" placeholder="Phone" />
      </div>
      <Button className="bg-white text-dark-grey mt-10">Submit</Button>
    </form>
  );
};

export default ContactForm;
