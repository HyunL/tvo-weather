import CreatableSelect from 'react-select/creatable';
import './CitySearch.css';

const options = [
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Vancouver', value: 'Vancouver' },
  { label: 'Calgary', value: 'Calgary' },
  { label: 'Montreal', value: 'Montreal' },
  { label: 'Ottawa', value: 'Ottawa' }
];

type Props = {
  setCurrentCity: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  errorMessage: string;
};

export default function CitySelect(props: Props) {
  return (
    <div>
      <CreatableSelect
        isClearable
        options={options}
        onChange={(newValue) => {
          if (newValue !== null) props.setCurrentCity(newValue.value);
        }}
        formatCreateLabel={(userInput) => `Search for ${userInput}`}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: props.error ? 'red' : 'grey'
          })
        }}
      />
      {props.error && (
        <div className="error">
          <span className="text-danger">{props.errorMessage}</span>
        </div>
      )}
    </div>
  );
}
