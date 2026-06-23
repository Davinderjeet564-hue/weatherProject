interface ShowWeatherProps {
  weatherData: { [key: string]: any };
}

function ShowWeather({ weatherData }: ShowWeatherProps) {
  return (
    <div className="mt-6 p-4 text-white flex flex-col justify-center card card-bordered w-full max-w-md mx-auto bg-primary rounded-lg">
      <h2 className="text-4xl font-bold mb-2">{weatherData.name}</h2>
      <p className="text-2xl font-bold mb-2">Temperature: {weatherData.main.temp}</p>
      <p className="text-2xl font-bold mb-2">Description: {weatherData.weather[0].description}</p>
      <p className="text-2xl font-bold mb-2">Humidity: {weatherData.main.humidity}</p>
      <p className="text-2xl font-bold mb-2">Wind Speed: {weatherData.wind.speed}</p>
    </div>
  );
}

export default ShowWeather;
