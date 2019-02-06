const Plane = require('../lib/plane.js')

describe('Plane', function(){
  let plane;
  
  beforeEach(function(){
    plane = new Plane();
  });
  
  it('should initialize as not landed', function(){
    expect(plane.isLanded).toEqual(false);
  })

  describe('.land', function(){
    it('should set isLanded to true', function(){
      plane.land();
      expect(plane.isLanded).toEqual(true);
    });
  })
});