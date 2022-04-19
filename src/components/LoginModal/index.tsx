import React, { Dispatch, useContext } from "react";
import Modal from "react-modal";
import { LanguageContext, useBreakpoint } from "@a11y/utils";
import {
  ModalStylesDesktop,
  ModalStylesMobile,
  Heading,
  ModalHeader,
  CloseBtn,
} from "./Modal.styled";
import LoginForm from "./LoginForm";

Modal.setAppElement("#__next");

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  const { dictionary } = useContext(LanguageContext);
  const { isDesktop } = useBreakpoint();

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={() => setIsOpen(false)}
      style={isDesktop ? ModalStylesDesktop : ModalStylesMobile}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalheading"
    >
      <ModalHeader>
        <Heading id="modalheading">{dictionary.login.heading}</Heading>
        <CloseBtn
          aria-label={dictionary.login.close}
          title={dictionary.login.close}
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
