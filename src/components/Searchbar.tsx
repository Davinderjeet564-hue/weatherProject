import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

function Searchbar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex w-full justify-center px-4 py-2">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <div className="join w-full shadow-sm border border-base-300 rounded-lg overflow-hidden">
          <div className="flex items-center bg-base-200/50 pl-3 join-item flex-1">
            <svg className="w-5 h-5 text-base-content/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search city (e.g., Paris, Tokyo)..."
              value={query}
              className="input input-ghost w-full border-none focus:outline-none focus:bg-transparent h-12 text-sm text-base-content pl-2"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary join-item h-12 px-6 font-semibold">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;