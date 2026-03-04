import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    const htmlClass = window.document.documentElement.classList;

    if (colorMode === "dark") {
      bodyClass.add(className);
      htmlClass.add(className);
      window.document.documentElement.style.colorScheme = "dark";
      return;
    }

    bodyClass.remove(className);
    htmlClass.remove(className);
    window.document.documentElement.style.colorScheme = "light";
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
