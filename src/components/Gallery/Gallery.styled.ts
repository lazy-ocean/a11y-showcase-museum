import styled from "styled-components";
import Image from "next/image";

export const Slide = styled(Image)`
  width: 100%;
`;

export const SlideButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;

    polyline {
      stroke: white;
    }
  }
`;
