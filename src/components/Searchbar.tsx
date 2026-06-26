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
        {/* Geolocation Button */}
        <div className="tooltip tooltip-bottom shrink-0 flex items-center justify-center pt-4" data-tip="Use current location">
          <button
            type="button"
            onClick={onLocationSearch}
            className="btn btn-border join-item text-base-content/60 hover:text-base-content hover:bg-primary/60 transition-colors flex items-center justify-center border-none"
            aria-label="Use current location"
          >
          <div className="flex items-center gap-2">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>Get Weather Info</span>
          </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
