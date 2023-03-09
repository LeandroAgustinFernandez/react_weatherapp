import { useEffect, useState } from "react";
import Spinner from "./partials/Spinner";
import "./WeatherComponent.css";
import WeatherFormComponent from "./WeatherFormComponent";
import WeatherInfoComponent from "./WeatherInfoComponent";

const WeatherComponent = () => {
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    navigator.geolocation.getCurrentPosition(onAccept, onReject, options);
  }, []);

  const getLocation = async (ubicacion) => {
    let url = `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${ubicacion.latitude},${ubicacion.longitude}`;
    getWeatherData(url);
  };

  const onAccept = (ubicacion) => getLocation(ubicacion.coords);
  const onReject = () => loadCityInfo();

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  };

  function loadCityInfo(city = "rome") {
    setShow(true);
    let url = `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`;
    getWeatherData(url);
  }

  async function getWeatherData(url) {
    try {
      const request = await fetch(url);
      const data = await request.json();
      setWeather(data);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCityChange(city) {
    setWeather(null);
    loadCityInfo(city);
  }

  return (
    <section className="container">
      <WeatherFormComponent changeCity={handleCityChange} />
      {show ? <Spinner /> : <WeatherInfoComponent weather={weather} />}
    </section>
  );
};

export default WeatherComponent;
