"use client";

import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);

  const onThemeChange = () => {
    if (isDarkModeEnabled) {
      setIsDarkModeEnabled(false);
      document.documentElement.classList.remove("dark");
      document.cookie = "isDarkModeEnabled=false; path=/; max-age=31536000";
    } else {
      setIsDarkModeEnabled(true);
      document.documentElement.classList.add("dark");
      document.cookie = "isDarkModeEnabled=true; path=/; max-age=31536000";
    }
  };

  useEffect(() => {
    const isDark = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isDarkModeEnabled="))
      ?.split("=")[1];

    console.log("useTheme init effect, cookie value:", isDark);
    setIsDarkModeEnabled(isDark === "true");
  }, []);

  useEffect(() => {
    console.log("Theme state changed:", isDarkModeEnabled);
  }, [isDarkModeEnabled]);

  return { isDarkModeEnabled, onThemeChange };
};

export default useTheme;
