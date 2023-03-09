import { useState } from "react";
import './WeatherFormComponent.css';

const WeatherFormComponent = ({ changeCity }) => {
  const [city, setCity] = useState("");

  function handleChange(e) {
    let value = e.target.value;
    setCity(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (city !== "") changeCity(city);
    setCity('');
  }

  return (
    <article className="weather-search">
      <form onSubmit={handleSubmit} className="weather-form">
        <input type="text" value={city} onChange={handleChange} className="weather-form_input"/>
        <button type="submit" className="weather-form_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(255, 255, 255,.9)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </article>
  );
};

export default WeatherFormComponent;
