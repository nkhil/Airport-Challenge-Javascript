const Airport = require('../lib/airport.js')

describe('Airport', function(){
  let airport;
  let plane;
  let plane1;
  let weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeOff', 'landed']);
    plane1 = jasmine.createSpyObj('plane',['land', 'takeOff', 'landed']);
    plane2 = jasmine.createSpyObj('plane',['land', 'takeOff', 'landed']);
  });

  describe('.land', function(){
    it('can instruct a plane to land', function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
      expect(airport.planes_in_airport).toContain(plane);
    });

    it('prevents landing when the airport is full', function(){
      const airport1 = new Airport(1);
      spyOn(Math, 'random').and.returnValue(0);
      airport1.land(plane);
      expect(function(){
        airport1.land(plane1)
      }).toThrow();
    })

    it('prevents planes that have already landed from landing again', function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      expect(function(){
        airport.land(plane)
      }).toThrow();
    });

    it('prevents landing when weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(1)
      expect(function() {
        airport.land(plane)
      }).toThrow();
    });
  });

  describe('.takeOff', function(){

    it('can instruct a plane to take off and confirm it has left', function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
      expect(airport.planes_in_airport).not.toContain(plane);
    });

    it('throws an error if the plane is not in the airport', function(){
      expect(function(){
        airport.takeOff(plane)
      }).toThrow();
    });
  });

});