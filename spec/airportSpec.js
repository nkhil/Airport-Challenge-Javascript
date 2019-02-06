const Airport = require('../lib/airport.js')

describe('Airport', function(){
  let airport;
  let plane;
  let plane1;
  let weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeoff', 'landed']);
    plane1 = jasmine.createSpyObj('plane',['land', 'takeoff', 'landed']);
    plane2 = jasmine.createSpyObj('plane',['land', 'takeoff', 'landed']);
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
      airport1.land(plane);
      expect(function(){
        airport1.land(plane1)
      }).toThrow();
    })

    it('prevents planes that have already landed from landing again', function(){
      airport.land(plane);
      expect(function(){
        airport.land(plane)
      }).toThrow();
    });
  });
});