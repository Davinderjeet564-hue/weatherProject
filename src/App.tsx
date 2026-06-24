import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

import { useState } from "react";
import ShowWeather from "./components/ShowWeather";
import type { WeatherData } from "./types";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  function closeCard() {
    setShowCard(false);
    setWeatherData(null);
    setError("");
  }

  const handleSearch = async (searchTerm: string): Promise<void> => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    setError("");
    setWeatherData(null);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${trimmed}&appid=${apiKey}&units=metric`);

      if (!response.ok) {
        throw new Error(`City "${trimmed}" not found`);
      }

      const data = await response.json();
      setWeatherData(data);
      setShowCard(true);
      setIsLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200/30 flex flex-col pb-12">
      <Header />
      <div className="flex-1 container mx-auto px-4 max-w-xl">
        <Searchbar onSearch={handleSearch} />

        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-12 mt-6">
            <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
            <p className="text-base-content/60 font-semibold animate-pulse text-sm">
              Fetching weather data...
            </p>
          </div>
        ) : weatherData && showCard ? (
          <ShowWeather weatherData={weatherData} CloseCard={closeCard} />
        ) : (
          error && (
            <div className="alert alert-error max-w-md mx-auto mt-6 shadow-sm flex gap-3 text-sm rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;