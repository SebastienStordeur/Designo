import React from "react";
import useInput from "../../hooks/useInput";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const isNotEmpty = (value) => value.trim() !== "";
const isValidName = (value) =>
  letterRegex.test(value) && isNotEmpty; /* && value.length >= 3 */

const ContactForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isValidName);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isValidName);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isValidName);

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetNameHandInput();
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto lg:w-2/4">
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
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="my-6">
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone}
        />
      </div>
      <div>{/* <Textarea /> */}</div>
      <div className="w-full text-center md:text-right">
        <Button className="bg-white text-dark-grey mt-10 md:mr-[4.44%]">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
