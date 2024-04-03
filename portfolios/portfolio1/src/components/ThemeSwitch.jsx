import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState(false);
  const themetogggle = () => {
    setTheme((prevMode) => !prevMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkmode") === "true";
    setTheme(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkmode", theme);
  }, [theme]);

  return (
    <div
      className="cursor-pointer rounded-md px-4 text-2xl"
      onClick={themetogggle}
    >
      {theme ? (
        <GoSun className="text-white" />
      ) : (
        <FaRegMoon className="text-black" />
      )}
    </div>
  );
};
