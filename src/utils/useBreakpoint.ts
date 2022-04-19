import { useEffect, useState } from "react";

const BREAKPOINTS = {
  mobile: 600,
  tablet: 810,
  desktop: 1920,
};

interface checkBreakpointProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

export const useBreakpoint = (): checkBreakpointProps => {
  const [width, setWidth] = useState<number>(0);

  const handleWindowSizeChange = (): void =>
    window ? setWidth(window.innerWidth) : setWidth(0);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return (): void => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile: boolean = width <= BREAKPOINTS.mobile;
  const isTablet: boolean = width <= BREAKPOINTS.tablet;
  const isDesktop: boolean = width > BREAKPOINTS.tablet;

  return { isMobile, isTablet, isDesktop };
};

export default useBreakpoint;
