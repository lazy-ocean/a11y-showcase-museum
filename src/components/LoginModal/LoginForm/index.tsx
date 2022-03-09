import React, { useContext } from "react";
import { LanguageContext } from "../../../utils/LanguageContext";
import {
  LoginField,
  LoginLabel,
  LoginInput,
  PasswordInstruction,
  LoginButton,
} from "../Modal.styled";

const LoginForm = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <form>
      <LoginField>
        <LoginLabel htmlFor="email">{dictionary.login.email}</LoginLabel>
        <LoginInput
          type="email"
          name="email"
          id="email"
          aria-label={dictionary.login.email}
          aria-describedby="email-input-error"
          placeholder="joe@example.com"
          autoComplete="email"
          autoFocus
        />
      </LoginField>
      <LoginField>
        <LoginLabel htmlFor="password">{dictionary.login.password}</LoginLabel>
        <LoginInput
          type="password"
          name="password"
          id="password"
          aria-label={dictionary.login.password}
          aria-describedby="password_instr"
        />
        <PasswordInstruction id="password_instr">
          {dictionary.login.passwordInstruction}
        </PasswordInstruction>
      </LoginField>
      <LoginButton aria-label={dictionary.login.submit} type="submit">
        {dictionary.login.submit}
      </LoginButton>
    </form>
  );
};

export default LoginForm;
