import { useEffect, useState } from 'react';
import { Unit } from './Units';

type Props = {
  unit: Unit;
  setUnit: React.Dispatch<React.SetStateAction<Unit>>;
};

export default function Homepage(props: Props) {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    setWeatherData({
      coord: {
        lon: -79.4163,
        lat: 43.7001
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      base: 'stations',
      main: {
        temp: 20.39,
        feels_like: 19.89,
        temp_min: 17.4,
        temp_max: 23.06,
        pressure: 1011,
        humidity: 54
      },
      visibility: 10000,
      wind: {
        speed: 4.63,
        deg: 70
      },
      clouds: {
        all: 0
      },
      dt: 1715877669,
      sys: {
        type: 2,
        id: 2043365,
        country: 'CA',
        sunrise: 1715853059,
        sunset: 1715906239
      },
      timezone: -14400,
      id: 6167865,
      name: 'Toronto',
      cod: 200
    });

    // Actual API call logic. Use hardcorded response above for testing to save on
    // API usage (limited to 1000 calls per day)
    //
    // const fetchDataForPosts = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=0890f4af9c4f07e3006d7b44f396cab7&units=${props.unit.name}`
    //     );
    //     if (!response.ok) {
    //       throw new Error(`HTTP error: Status ${response.status}`);
    //     }
    //     let weather = await response.json();
    //     setWeatherData(weather);
    //   } catch (err) {}
    // };

    // fetchDataForPosts();
  }, []);

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>
        {weatherData.main.temp} {props.unit.symbol}
      </p>
    </div>
  );
}
