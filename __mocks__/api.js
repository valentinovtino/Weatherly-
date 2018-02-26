export default {
  returnWeatherAPI(zip) {
    return fetch(`http://api.wunderground.com/api/f9460b57fa291959/conditions/forecast/forecast10day/hourly/q/${zip}.json`)
      .then(response => response.json()) 
      }
}



