interface SearchBarProps {
  handleSearch: (e: React.SubmitEvent<HTMLFormElement>) => void;
  setCity: (city: string) => void;
}

function Searchbar({ handleSearch, setCity }: SearchBarProps) {
  return (
    <div className="flex w-full justify-center p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search a city"
          className="input input-bordered input-primary w-full"
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Searchbar;