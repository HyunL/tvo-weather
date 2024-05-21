import './WeatherDisplay.css';

type Props = {
  iconName: string;
  description: string;
  temp: number;
  unitSymbol: string;
};

export default function WeatherDisplay(props: Props) {
  return (
    <div className="weather">
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${props.iconName}@2x.png`}
        />
        <p className="weather-description">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </p>
      </div>
      <span>
        {props.temp} {props.unitSymbol}
      </span>
    </div>
  );
}
