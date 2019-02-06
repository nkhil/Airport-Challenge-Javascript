const Weather = require('./weather.js');

class Airport {
  constructor(capacity, weather){
    this.planes_in_airport = [];
    this.weather = weather || new Weather();
    this.capacity = capacity || 10;
  }
  
  land(plane){
    if(this.planes_in_airport.length >= this.capacity){
      throw "error";
    } else {
      plane.land();
      this.planes_in_airport.push(plane);
    }
  }
}

module.exports = Airport;