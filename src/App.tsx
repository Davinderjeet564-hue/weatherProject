import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

import { useState } from "react";
import ShowWeather from "./components/ShowWeather";

function App() {

  const [city, setCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async (e: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");
    setWeatherData(null);
    setIsLoading(true);

    
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

      if (!response.ok) {
        throw new Error(`City "${city}" not found`);
      }

      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsLoading(false);
    }
  };


    if (isLoading) return (
      <>
        <Header />
        <Searchbar handleSearch={handleSearch} setCity={setCity} />
        {/* loading spinner here */}
        <p>Loading weather data...</p>
      </>
    );
    return (
      <div>
        <Header />
        <Searchbar handleSearch={handleSearch} setCity={setCity} />
        {weatherData ? <ShowWeather weatherData={weatherData}/> : error && <p className="text-red-500">{error}</p>}
      </div>
    )
}


export default App