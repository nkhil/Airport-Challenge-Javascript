const Airport = require('../lib/airport.js')

describe('Airport', function(){
  let airport;
  let plane;
  let plane1;
  let weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeoff', 'landed']);
    plane1 = jasmine.createSpy('plane1');
    plane1 = jasmine.createSpy('plane1');
  });

  describe('.land', function(){
    it('can instruct a plane to land', function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
      expect(airport.planes_in_airport).toContain(plane);
    });
  });
});