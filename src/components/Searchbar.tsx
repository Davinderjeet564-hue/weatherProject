import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  onLocationSearch: () => void;
}

function Searchbar({ onSearch, onLocationSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex w-full justify-center px-4 py-2">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <div className="join w-full shadow-md rounded-2xl border border-base-300 bg-base-100 overflow-hidden">
          {/* Geolocation Button */}
          <div className="tooltip tooltip-bottom shrink-0 flex items-center" data-tip="Use current location">
            <button
              type="button"
              onClick={onLocationSearch}
              className="btn btn-ghost join-item h-12 w-12 p-0 text-base-content/60 hover:text-primary transition-colors flex items-center justify-center border-none"
              aria-label="Use current location"
            >
              <svg
                className="w-5.5 h-5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.105-7.5 11.25-7.5 11.25S4.5 17.605 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </button>
          </div>

          {/* Search Icon & Input */}
          <div className="flex items-center flex-1 join-item bg-base-100 pl-2">
            <svg
              className="w-5 h-5 text-base-content/40 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              aria-label="Search city name"
              placeholder="Search city (e.g., Paris, Tokyo)..."
              value={query}
              className="input input-ghost w-full border-none focus:outline-none focus:bg-transparent h-12 text-sm text-base-content pl-2 font-medium"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="btn btn-primary join-item h-12 px-6 font-semibold border-none rounded-none text-primary-content hover:opacity-90"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
