import { useState, useEffect } from 'react';

const ThemeDropdown = () => {
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
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-sm gap-2 border-base-300 rounded-xl bg-base-100 hover:bg-base-200/50 hover:border-base-400 text-base-content h-9"
      >
        <svg
          className="w-4 h-4 text-base-content/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122A3 3 0 0010.5 21.75h.074a3 3 0 002.917-2.317l.222-.888a3 3 0 011.89-2.086l.222-.088a3 3 0 001.867-3.923l-.38-1.14a3 3 0 00-4.63-1.637l-.547.365a3 3 0 01-4.321-.242l-.547-.546a3 3 0 00-4.63 1.637l-.38 1.14a3 3 0 001.867 3.923l.222.088a3 3 0 011.89 2.086l.222.888z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 10a1 1 0 11-2 0 1 1 0 012 0zm5-1a1 1 0 11-2 0 1 1 0 012 0zm4 3a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
        <span className="capitalize font-semibold text-xs text-base-content/80">
          {currentTheme}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          className="fill-current opacity-60"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </div>

      {/* Dropdown Content */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 border border-base-300 text-base-content rounded-xl z-50 w-40 p-1.5 shadow-xl mt-1.5"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <button
              type="button"
              className={`btn btn-sm btn-ghost justify-between font-semibold capitalize px-3 rounded-lg ${
                currentTheme === theme
                  ? "bg-primary/10 text-primary hover:bg-primary/15"
                  : "hover:bg-base-200 text-base-content/85"
              }`}
              onClick={() => setCurrentTheme(theme)}
            >
              {theme}
              {currentTheme === theme && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeDropdown;