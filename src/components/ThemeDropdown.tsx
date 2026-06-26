import { useState, useEffect } from 'react';

const ThemeDropdown = () => {
  // List of themes you want to display in the dropdown
  const themes = ["light", "dark", "cupcake", "valentine", "dracula"];
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem("skyline-weather-theme") || themes[0];
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("skyline-weather-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="dropdown dropdown-end">
      {/* Dropdown Trigger Button */}
      <div tabIndex={0} role="button" className="btn btn-primary m-1">
        {currentTheme}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="inline-block h-2 w-2 fill-current opacity-60"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </div>

      {/* Dropdown Content */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 text-base-content rounded-box z-50 w-52 p-2 shadow-xl"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-ghost justify-start"
              aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              value={theme}
              checked={currentTheme === theme}
              onChange={() => setCurrentTheme(theme)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeDropdown;