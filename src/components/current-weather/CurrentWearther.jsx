import React from "react";

const CurrentWearther = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt=""
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{`${Math.round(data.main.temp)}°C`}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{`${Math.round(
              data.main.feels_like
            )}°C`}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humity</span>
            <span className="parameter-value">{data.main.humidity}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWearther;
