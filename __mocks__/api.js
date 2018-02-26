export default {
  returnWeatherAPI(zip) {
    return fetch(`http://api.wunderground.com/api/143dda37475fd161/conditions/forecast/forecast10day/hourly/q/${zip}.json`)
      .then(response => response.json()) 
      }
}