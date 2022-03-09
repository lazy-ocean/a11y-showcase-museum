import styled from "styled-components";
import { SecondaryButton } from "../Buttons/Buttons";
import { PrimaryHeading } from "../Typography";

export const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    padding: "7rem 15rem",
    height: "max-content",
    borderRadius: "8px",
    maxWidth: "80rem",
  },
  overlay: {
    backgroundColor: "#0000006E",
  },
};

export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const LoginLabel = styled.label`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const LoginInput = styled.input`
  width: 50rem;
  height: 6.5rem;
  border-radius: 8px;
  border: 1px solid #c7d2e9;
  padding: 2rem;
  font-size: 3rem;
  background-color: ${({ theme }) => theme.palette.lightBG};
`;

export const PasswordInstruction = styled.span`
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: 1.6rem;
`;

export const LoginButton = styled(SecondaryButton)`
  width: 100%;
`;

export const Heading = styled(PrimaryHeading)`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 3rem;
`;