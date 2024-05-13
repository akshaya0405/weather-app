import { useState } from "react";
import CurrentWearther from "./components/current-weather/CurrentWearther";
import Search from "./components/search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/search/api";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecst] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecst({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => log(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      hi
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWearther data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
