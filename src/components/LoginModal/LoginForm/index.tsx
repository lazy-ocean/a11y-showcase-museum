import React, { useContext, useState } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import {
  LoginField,
  LoginLabel,
  LoginInput,
  LoginButton,
  ErrorMessage,
} from "../Modal.styled";

enum Error {
  email = "email",
  password = "password",
}

interface ErrorsInterface {
  email: string | boolean;
  password: string | boolean;
}

const database = [
  {
    email: "user1@gmail.com",
    password: "password1",
  },
  {
    email: "user2@gmail.com",
    password: "password2",
  },
];

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState<ErrorsInterface>({
    email: false,
    password: false,
  });
  const { dictionary } = useContext(LanguageContext);

  const errors: ErrorsInterface = dictionary.login.errors;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { email, password } = document.forms[1];

    const userData = database.find((user) => user.email === email?.value);

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ ...errorMessages, password: true });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ ...errorMessages, email: true });
    }
  };

  const renderError = (input: Error) => (
    <ErrorMessage role="alert" aria-atomic={true}>
      {errorMessages[input] && errors[input]}
    </ErrorMessage>
  );

  return (
    <form onSubmit={handleSubmit}>
      <LoginField>
        <LoginLabel htmlFor="email">{dictionary.login.email}</LoginLabel>
        <LoginInput
          type="email"
          name="email"
          id="email"
          aria-label={dictionary.login.email}
          placeholder="joe@example.com"
          autoComplete="email"
          autoFocus
          aria-required="true"
          onChange={() => setErrorMessages({ email: false, password: false })}
        />
        {renderError(Error.email)}
      </LoginField>
      <LoginField>
        <LoginLabel htmlFor="password">{dictionary.login.password}</LoginLabel>
        <LoginInput
          type="password"
          name="password"
          id="password"
          required
          aria-label={dictionary.login.password}
          aria-required="true"
          onChange={() => setErrorMessages({ email: false, password: false })}
        />
        {renderError(Error.password)}
      </LoginField>
      <LoginButton aria-label={dictionary.login.submit} type="submit">
        {dictionary.login.submit}
      </LoginButton>
    </form>
  );
};

export default LoginForm;
