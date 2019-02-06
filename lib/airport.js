const Weather = require('./weather.js');

class Airport {
  constructor(capacity, weather){
    this.planes_in_airport = [];
    this.weather = weather || new Weather();
    this.capacity = capacity || 10;
  }
  
  land(plane){
    if(this.stormy() === 'stormy'){
      throw "error";
    } else if(this.planes_in_airport.length >= this.capacity){
      throw "error";
    } else if((this.planes_in_airport).includes(plane)){
      throw "error";
    } else {
      plane.land();
      this.planes_in_airport.push(plane);
    }
  }

  takeOff(plane){
    if(this.stormy() === 'stormy'){
      throw "error";
    } else if(!(this.planes_in_airport).includes(plane)){
      throw "error";
    } else {
      plane.takeOff();
      const planes = this.planes_in_airport;
      this.planes_in_airport = planes.filter(element => element != plane);
    }
  }

  stormy(){
    return this.weather.stormy() === 1 ? 'stormy' : 'sunny';
  }
}

module.exports = Airport;
