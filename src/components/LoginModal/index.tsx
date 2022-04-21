import React, { Dispatch, useContext } from "react";
import Modal from "react-modal";
import { LanguageContext } from "@a11y/utils";
import {
  Heading,
  ModalHeader,
  CloseBtn,
  ModalContent,
  Overlay,
} from "./Modal.styled";
import LoginForm from "./LoginForm";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#__next");

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Modal
      className="_"
      overlayClassName="_"
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalheading"
      contentElement={(props, children) => (
        <ModalContent {...props}>{children}</ModalContent>
      )}
      overlayElement={(props, contentElement) => (
        <Overlay {...props}>{contentElement}</Overlay>
      )}
    >
      <ModalHeader>
        <Heading id="modalheading">{dictionary.login.heading}</Heading>
        <CloseBtn
          aria-label={dictionary.login.close}
          title={dictionary.login.close}
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </CloseBtn>
      </ModalHeader>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
