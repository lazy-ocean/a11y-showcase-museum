import { useEffect } from "react";

export const useKeydown = (key: string, onEvent: () => void): void => {
  const handleClick = (event: KeyboardEvent): void => {
    if (event.code === "ArrowUp" || event.code === "ArrowDown")
      event.preventDefault();
    if (event.code === key) onEvent();
  };
  useEffect(() => {
    document.addEventListener("keydown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  });
};

export default useKeydown;
