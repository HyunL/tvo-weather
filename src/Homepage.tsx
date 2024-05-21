import { useEffect, useState } from 'react';
import { convertFtoC, convertCtoF, units } from './Units';
import CitySelect from './CitySearch';
import Switch from 'react-switch';
import './Homepage.css';
import WeatherDisplay from './WeatherDisplay';

export default function Homepage() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [currentCity, setCurrentCity] = useState<string>('Toronto');
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [unit, setUnit] = useState(units.CELCIUS);
  const [displayTemp, setDisplayTemp] = useState(0);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        setError(false);
        setErrorMessage('');

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=0890f4af9c4f07e3006d7b44f396cab7&units=${unit.name}`
        );

        if (response.status === 404) {
          setError(true);
          setErrorMessage("Couldn't find city");
          throw new Error(`HTTP error: Status ${response.status}`);
        } else if (!response.ok) {
          setError(true);
          setErrorMessage('Error, please try again');
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        let weather = await response.json();
        setWeatherData(weather);
        setDisplayTemp(Math.round(weather.main.temp * 10) / 10);
      } catch (err) {}
    };

    fetchDataForPosts();
  }, [currentCity]);

  return (
    <div className="homepage">
      <div className="city-select">
        <CitySelect
          setCurrentCity={setCurrentCity}
          error={error}
          errorMessage={errorMessage}
        />
      </div>

      <div className="city">
        <h2 className="city-name">{weatherData && weatherData.name}</h2>

        <Switch
          onChange={(checked) => {
            setUnit(checked ? units.CELCIUS : units.FAHRENHEIT);

            if (checked) {
              setDisplayTemp(convertFtoC(displayTemp));
            } else {
              setDisplayTemp(convertCtoF(displayTemp));
            }
          }}
          checked={unit == units.CELCIUS}
          uncheckedIcon={
            <div className="unit-option">
              <span>°F</span>
            </div>
          }
          checkedIcon={
            <div className="unit-option">
              <span>°C</span>
            </div>
          }
          onColor={'#888'}
          offColor={'#888'}
        />
      </div>

      {weatherData && (
        <WeatherDisplay
          iconName={weatherData.weather[0].icon}
          description={weatherData.weather[0].description}
          temp={displayTemp}
          unitSymbol={unit.symbol}
        />
      )}
    </div>
  );
}
