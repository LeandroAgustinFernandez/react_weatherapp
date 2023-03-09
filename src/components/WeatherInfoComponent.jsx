import { useEffect, useState } from "react";
import "./WeatherInfoComponent.css";
import WeatherWeekDayComponent from "./WeatherWeekDayComponent";

const WeatherInfoComponent = ({ weather }) => {
  console.log(weather);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(weather?.current?.condition?.icon.replace("64x64", "128x128"));
  }, [weather]);

  return (
    <article className="weather">
      {weather.error ? (
        <h1 className="weather-noexist">There isn't a city with this name.</h1>
      ) : (
        <>
          <h1 className="weather-title">{weather?.location?.name}</h1>
          <h2 className="weather-subtitle">{weather?.location?.country}</h2>
          <div className="weather-info">
            <img src={icon} alt="weahter icon" className="weahter-img" />
            <div className="weather-temps">
              <p className="weather-minmax">
                <span>Min</span>
                <span>{weather?.forecast?.forecastday[0]?.day.mintemp_c}°C</span>
              </p>
              <h3 className="weather-temp">{weather?.current?.temp_c}°C</h3>
              <p className="weather-minmax">
                <span>Max</span>{" "}
                <span>{weather?.forecast?.forecastday[0]?.day.maxtemp_c}°C</span>
              </p>
            </div>
            <h3 className="weather-text">{weather?.current?.condition.text}</h3>
          </div>
          <div className="weather-week">
            {weather?.forecast?.forecastday.map((day, index) => (
              <WeatherWeekDayComponent day={day} key={index} />
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export default WeatherInfoComponent;
