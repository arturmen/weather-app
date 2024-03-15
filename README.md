# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Running application

### Prepare environment
Angular CLI: 17.2.3  
Node: 20.11.1  
Package Manager: npm 10.2.4  
OS: win32 x64 (Developed on windows - on linux/mac everything also should be fine)

### Serve application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Deployment
Projet available without local building on github pages:  
https://arturmen.github.io/weather-app  
Note: Due to github pages refreshing bug, refreshing view and entering page by specific route may cause 404. If it happens, just enter https://arturmen.github.io/weather-app again. Locally everything works fine.

## Project description

### Views:
* /home         (home icon)       - Home page that fetches weather forecast based on user location  
* /weather/:id  (umbrella icon)   - Main weather forecast page, that displays weather based on city id. It shows current weather and forecast divided by hours and days.  
* /browse       (search icon)     - Search page that finds possible cities by name, gives opportunity to add city to favourites and show weather forecast(weather details)  
* /settings     (cog icon)        - Settings page that gives opportunity to change forecast units: Temperature, Wind speed and Precipitation  
* /favourites   (star icon)       - Page with favourites cities picked by marking the star icon next to City name

### Features
* Current weather
* Daily and Hourly weather forecast
* Changing weather model icon based on it's code
* Favourite cities
* City search with prompts
* City weather by location
* Api errors handling and not found city handling
* Mobile view
* Settings changes
* Displaying specific weather information
