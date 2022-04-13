import styled from "styled-components";
import { SecondaryButton } from "../Buttons/Buttons";
import { PrimaryHeading } from "../Typography";

export const ModalStylesDesktop = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "3rem",
    height: "max-content",
    borderRadius: "8px",
    width: "60%",
  },
  overlay: {
    backgroundColor: "#0000006E",
    zIndex: 100,
  },
};

export const ModalStylesMobile = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2.5rem",
    height: "max-content",
    borderRadius: "8px",
    width: "85%",
  },
  overlay: {
    backgroundColor: "#0000006E",
    zIndex: 100,
  },
};

export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const LoginLabel = styled.label`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const LoginInput = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid #c7d2e9;
  padding: ${({ theme }) => theme.spacing.s};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.lightBG};
`;

export const ErrorMessage = styled.span`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: 1rem;
`;

export const LoginButton = styled(SecondaryButton)`
  width: 100%;
`;

export const Heading = styled(PrimaryHeading)`
  margin-bottom: ${({ theme }) => theme.spacing.m};
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
  font-size: 2rem;
`;
