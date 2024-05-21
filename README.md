# TVO Weather App

This project is for the Software Developer 2 role at TVO. Please see the _Software Developer 2 - Technical Assessment.pdf_ file in the repo.

## Running The App

1. `yarn` to install all dependencies for the project
2. `yarn start` to run the app
3. The app should be running on `http://localhost:3000/`. If not, it should say in the terminal where to view it locally.

## Expected Functionality

- This app should:
  - display the current temperature for a given city
  - display the type of weather (e.g. rainy, sunny, cloudy, etc.) along with an icon to match. The icons come from openweathermap so all weather types should have a matching icon.
  - allow to user to select from a fixed selection of Canadian cities from a dropdown
  - allow to user to search for a city by name. It needs full spelling of the city (e.g. London would work, but Londo will error)
  - display an error message when the given city name can't be found
  - allow for toggling between °C and °F
  - be responsive, being a pleasant viewing experience from very narrow screens to ultrawide

## Potential Improvements

Unfortunately, I didn't get much time to work on this as I was out of town on a trip so please keep that into consideration. This section outlines things I would have loved to add given more time.

- Using the openweather api to get forecast data so that we can use the additional screen real estate to display the 7 day forecast
- Adding a more robust search bar that doesn't require the exact city name.
  - The user should be able to search something like `Lond` and get suggestions for cities that match such as `London`.
  - Strings can have multiple matches (e.g. `London` corresponds to `London, ON` and `London, UK`). The searchbar should show these matches and allow the user to select the city of their choice. Currently, the api just returns the 1st match and the app displays that.
- Using a backend to store user data such as:
  - accounts
  - Saved locations to display on the homescreen, saving the user time.
  - Default units (°C and °F) for a given user
