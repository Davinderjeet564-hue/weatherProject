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

  const iconCode = weatherData.weather?.[0]?.icon;
  const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@4x.png` : null;

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return null;
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  const sunriseTime = formatTime(weatherData.sys?.sunrise);
  const sunsetTime = formatTime(weatherData.sys?.sunset);

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 w-full max-w-md mx-auto transition-all duration-300 hover:shadow-2xl overflow-hidden animate-slide-up rounded-2xl">
      <div className="card-body p-6 flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-base-content flex items-center gap-2 flex-wrap">
              {weatherData.name}
              {weatherData.sys?.country && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-base-200 text-base-content/85 uppercase border border-base-300/50">
                  {weatherData.sys.country}
                </span>
              )}
            </h2>
            <p className="text-sm text-base-content/60 mt-1 capitalize font-medium flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-success"></span>
              {description}
            </p>
          </div>
          <button
            onClick={CloseCard}
            aria-label="Close weather card"
            className="btn btn-ghost btn-circle btn-sm text-base-content/40 hover:text-base-content hover:bg-base-200/80"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Temperature & Icon Section */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-6xl font-light text-primary tracking-tighter flex items-start">
              {temp}
              <span className="text-3xl font-normal mt-1">°C</span>
            </span>
            {(weatherData.main?.temp_max !== undefined || weatherData.main?.temp_min !== undefined) && (
              <span className="text-xs text-base-content/60 font-semibold mt-2 flex gap-3">
                {weatherData.main.temp_max !== undefined && (
                  <span className="flex items-center gap-0.5">
                    <svg className="w-3 h-3 text-error" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    H: {Math.round(weatherData.main.temp_max)}°
                  </span>
                )}
                {weatherData.main.temp_min !== undefined && (
                  <span className="flex items-center gap-0.5">
                    <svg className="w-3 h-3 text-info" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    L: {Math.round(weatherData.main.temp_min)}°
                  </span>
                )}
              </span>
            )}
          </div>
          {iconUrl && (
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
              <img
                src={iconUrl}
                alt={description}
                className="w-24 h-24 object-contain relative z-10 animate-bounce"
                style={{ animationDuration: "3.5s" }}
              />
            </div>
          )}
        </div>

        <div className="divider my-0 opacity-40"></div>

        {/* 3x2 Info Grid with Icons */}
        <div className="grid grid-cols-2 gap-3.5">
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
              <span className="text-[10px] text-base-content/50 font-bold uppercase tracking-wider">
                Feels Like
              </span>
              <span className="text-sm font-extrabold text-base-content">
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
              <span className="text-[10px] text-base-content/50 font-bold uppercase tracking-wider">
                Humidity
              </span>
              <span className="text-sm font-extrabold text-base-content">
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
              <span className="text-[10px] text-base-content/50 font-bold uppercase tracking-wider">
                Wind Speed
              </span>
              <span className="text-sm font-extrabold text-base-content">
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
              <span className="text-[10px] text-base-content/50 font-bold uppercase tracking-wider">
                Pressure
              </span>
              <span className="text-sm font-extrabold text-base-content">
                {pressure} hPa
              </span>
            </div>
          </div>

          {/* Sunrise */}
          {sunriseTime && (
            <div className="flex items-center gap-3 p-3 bg-base-200/40 rounded-xl border border-base-200/50">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
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
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-base-content/50 font-bold uppercase tracking-wider">
                  Sunrise
                </span>
                <span className="text-sm font-extrabold text-base-content">
                  {sunriseTime}
                </span>
              </div>
            </div>
          )}

          {/* Sunset */}
          {sunsetTime && (
            <div className="flex items-center gap-3 p-3 bg-base-200/40 rounded-xl border border-base-200/50">
              <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
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
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-base-content/50 font-bold uppercase tracking-wider">
                  Sunset
                </span>
                <span className="text-sm font-extrabold text-base-content">
                  {sunsetTime}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowWeatherCard;
