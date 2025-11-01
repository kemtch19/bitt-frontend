import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  if (!theme) {
    setTheme(
      // el objeto global window que tiene todo lo DOM y otros y el matchMedia nos indica si en el objeto actual estamos haciendo match con la condición que tenemos entre parentesís pero este se refiere más que todo al css
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    // toma el documento html como tal y le asigna el atributo root
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  });

  return {
    theme,
    toggleTheme,
  };
};
