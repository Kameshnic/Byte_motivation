import React from "react";
import { Moon, Sun } from "lucide-react";

const ToggleDarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
    >
      {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-700" />}
    </button>
  );
};

export default ToggleDarkMode;
