import React from "react";
import { useState, useEffect } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return <button onClick={() => setDarkMode(!darkMode)}
  className="px-3 py-2 rounded-md dark:border-gray-600">
     {darkMode ? "☀️" : "🌙"}
    </button>;
}

export default ThemeToggle;
