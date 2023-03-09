import React from 'react'

const WeatherWeekDayComponent = ({day}) => {
  return (
    <article className="weahter-day">
    <p>
      {new Date(`${day.date}T00:00:00`).toLocaleDateString("en-us", {
        weekday: "short",
      })}
    </p>
    <img src={day.day.condition.icon} alt="" />
    <div>
      <span className="weather-day_minmax">Max {day.day.maxtemp_c}</span>
      <span className="weather-day_minmax">Min {day.day.mintemp_c}</span>
    </div>
    <p>{day.day.condition.text}</p>
  </article>
  )
}

export default WeatherWeekDayComponent