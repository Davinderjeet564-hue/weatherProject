import ThemeDropdown from "./ThemeDropdown";

function Header() {
  return (
    <header className="navbar bg-base-100 border-b border-base-200 px-6 py-4 mb-4">
      <div className="flex-1">
        <h1 className="text-2xl font-black tracking-tight text-primary flex items-center gap-2">
          <svg className="w-8 h-8 text-primary animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z"></path>
          </svg>
          Skyline<span className="font-light text-base-content">Weather</span>
        </h1>
      </div>
      <div className="flex">
        <ThemeDropdown />
      </div>
    </header>
  );
}

export default Header;