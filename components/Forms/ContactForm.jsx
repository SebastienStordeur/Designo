import React from "react";
import useInput from "../../hooks/useInput";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import Error from "./Error/Error";

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const isNotEmpty = (value) => value.trim() !== "";
const isValidName = (value) => letterRegex.test(value) && isNotEmpty;
const isValidEmail = (value) =>
  emailRegex.test(value) && isNotEmpty && value.length >= 6;
const isValidPhone = (value) => phoneRegex.test(value) && isNotEmpty;

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
  } = useInput(isValidEmail);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isValidPhone);
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const formValues = {
    name: enteredName,
    email: enteredEmail,
    phone: enteredPhone,
    message: enteredMessage,
  };

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(formValues);
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetMessageInput();
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto lg:w-2/4">
      <div className="relative mb-6">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <Error />}
      </div>
      <div className="relative">
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <Error />}
      </div>
      <div className="relative my-6">
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone}
        />
        {phoneInputHasError && <Error />}
      </div>
      <div className="relative">
        <Textarea
          name="message"
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        />
        {messageInputHasError && <Error />}
      </div>
      <div className="w-full text-center md:text-right">
        <Button
          className="bg-white text-dark-grey mt-10 md:mr-[4.44%]"
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
