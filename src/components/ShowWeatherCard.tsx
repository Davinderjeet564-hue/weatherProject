import type { WeatherData } from "../types";

interface ShowWeatherProps {
  weatherData: WeatherData;
  CloseCard: () => void;
}

function ShowWeatherCard({ weatherData, CloseCard }: ShowWeatherProps) {
  const temp = Math.round(weatherData.main?.temp ?? 0);
  const feelsLike = Math.round(weatherData.main?.feels_like ?? 0);
  const description = weatherData.weather?.[0]?.description || "no description available";
  const humidity = weatherData.main?.humidity ?? 0;
  const windSpeed = weatherData.wind?.speed ?? 0;
  const pressure = weatherData.main?.pressure ?? 0;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 w-full max-w-md mx-auto mt-6 transition-all duration-300 hover:shadow-2xl overflow-hidden animate-slide-up">
      <div className="card-body p-6">
        {/* Card Header with City & Main Temp */}
        <div className="card-actions justify-end">
          <button
            onClick={CloseCard}
            aria-label="Close weather card"
            className="btn btn-ghost btn-square text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-base-content flex items-center gap-1.5">
              {weatherData.name}
              {weatherData.sys?.country && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-base-200 text-base-content/75 uppercase">
                  {weatherData.sys.country}
                </span>
              )}
            </h2>
            <p className="text-sm text-base-content/60 mt-1.5 capitalize font-medium flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-success"></span>
              {description}
            </p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-light text-primary tracking-tighter">
              {temp}°C
            </span>
          </div>
        </div>

        <div className="divider my-4 opacity-50"></div>

        {/* 2x2 Info Grid with Icons */}
        <div className="grid grid-cols-2 gap-3">
          {/* Feels Like */}
          <div className="flex items-center gap-3 p-3 bg-base-200/40 rounded-xl border border-base-200/50">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12V4a3 3 0 016 0v8a5 5 0 11-6 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-base-content/50 font-semibold uppercase tracking-wider">
                Feels Like
              </span>
              <span className="text-sm font-bold text-base-content">
                {feelsLike}°C
              </span>
            </div>
          </div>

          {/* Humidity */}
          <div className="flex items-center gap-3 p-3 bg-base-200/40 rounded-xl border border-base-200/50">
            <div className="p-2 bg-info/10 rounded-lg text-info">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.105-7.5 11.25-7.5 11.25S4.5 17.605 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-base-content/50 font-semibold uppercase tracking-wider">
                Humidity
              </span>
              <span className="text-sm font-bold text-base-content">
                {humidity}%
              </span>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="flex items-center gap-3 p-3 bg-base-200/40 rounded-xl border border-base-200/50">
            <div className="p-2 bg-success/10 rounded-lg text-success">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m-15-3H12m-7.5 6H15"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-base-content/50 font-semibold uppercase tracking-wider">
                Wind Speed
              </span>
              <span className="text-sm font-bold text-base-content">
                {windSpeed} m/s
              </span>
            </div>
          </div>

          {/* Pressure */}
          <div className="flex items-center gap-3 p-3 bg-base-200/40 rounded-xl border border-base-200/50">
            <div className="p-2 bg-warning/10 rounded-lg text-warning">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 12l2-2"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-base-content/50 font-semibold uppercase tracking-wider">
                Pressure
              </span>
              <span className="text-sm font-bold text-base-content">
                {pressure} hPa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowWeatherCard;
