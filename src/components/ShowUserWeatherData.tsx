import { useState } from "react";
import type { WeatherData } from "../types";
import ShowWeatherCard from "./ShowWeatherCard";

function getCoordinates(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function GetWeatherData(): Promise<WeatherData> {
  const position = await getCoordinates();
  const { latitude, longitude } = position.coords;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  if (!apiKey) {
    throw new Error("Weather API key is not configured.");
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your configuration.");
    }
    throw new Error(`Failed to fetch weather (Status: ${response.status})`);
  }
  return response.json();
}

function ShowUserWeatherData() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleGetLocationWeather = async () => {
    setError("");
    setWeatherData(null);
    setIsLoading(true);

    try {
      const data = await GetWeatherData();
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const closeCard = () => {
    setWeatherData(null);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {!weatherData && !isLoading && (
        <button
          onClick={handleGetLocationWeather}
          className="btn btn-outline btn-primary gap-2 rounded-xl"
        >
          <svg
            className="w-5.5 h-5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            width="20"
            height="20"
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
          Get Current Location Weather
        </button>
      )}

      {isLoading && (
        <div className="flex flex-col items-center p-6">
          <span className="loading loading-spinner loading-md text-primary mb-2"></span>
          <p className="text-xs text-base-content/60 font-semibold animate-pulse">
            Getting your location and weather...
          </p>
        </div>
      )}

      {error && (
        <div className="alert alert-error max-w-md mx-auto shadow-sm flex gap-3 text-sm rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {weatherData && (
        <ShowWeatherCard weatherData={weatherData} CloseCard={closeCard} />
      )}
    </div>
  );
}

export default ShowUserWeatherData;
