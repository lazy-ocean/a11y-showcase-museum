import React, { Dispatch, useContext, useState } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import Modal from "react-modal";
import { ModalStyles, Heading, ModalHeader, CloseBtn } from "./Modal.styled";
import LoginForm from "./LoginForm";

Modal.setAppElement("#__next");

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={() => setIsOpen(false)}
      style={ModalStyles}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalheading"
    >
      <ModalHeader>
        <Heading id="modalheading">{dictionary.login.heading}</Heading>
        <CloseBtn
          aria-label={dictionary.login.close}
          onClick={() => setIsOpen(false)}
        >
          X
        </CloseBtn>
      </ModalHeader>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
