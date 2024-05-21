export type Unit = {
  name: string;
  symbol: string;
};

export type UnitTypes = { [unitName: string]: Unit };

export const units: UnitTypes = {
  CELCIUS: { name: 'metric', symbol: '°C' },
  FAHRENHEIT: { name: 'imperial', symbol: '°F' }
};

export const convertFtoC = (temp: number) =>
  Math.round((((temp - 32) * 5) / 9) * 10) / 10;
export const convertCtoF = (temp: number) =>
  Math.round(((9 / 5) * temp + 32) * 10) / 10;
