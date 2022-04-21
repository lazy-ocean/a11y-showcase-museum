import styled from "styled-components";
import { SecondaryButton } from "@a11y/components/Buttons";
import { PrimaryHeading } from "@a11y/components/Typography";

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.palette.grey};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5rem;
  width: 85%;
  height: max-content;
  border-radius: 8px;
  position: absolute;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.tablet}{
    padding: 3rem;
    width: 50%;
  }`}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
`;

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
  background-color: ${({ theme }) => theme.palette.bgLight};
  color: ${({ theme }) => theme.palette.text};
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

  svg {
    fill: ${({ theme }) => theme.palette.text};
  }
`;
