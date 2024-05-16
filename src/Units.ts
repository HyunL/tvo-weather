export type Unit = {
  name: string;
  symbol: string;
};

export type UnitTypes = { [unitName: string]: Unit };

export const units: UnitTypes = {
  CELCIUS: { name: 'metric', symbol: '°C' },
  FAHRENHEIT: { name: 'imperial', symbol: '°F' }
};
