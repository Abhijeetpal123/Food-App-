import React from "react";
import useTheme from "../utils/useTheme";

const ToggleButton= () => {
  const [theme, setTheme] = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to{theme === "light" ? "🌙Dark" : "☀️Light"}Mode
      </button>
    </div>
  );
};

export default ToggleButton;