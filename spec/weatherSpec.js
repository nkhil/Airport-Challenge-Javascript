const Weather = require('../lib/weather.js')

describe('Weather', function(){
  let weather;

  beforeEach(function(){
    weather = new Weather();
    obj = new Object();

        jasmine.addMatchers({
          toBeIn: function(expected) {
            return {
                compare: function (actual, expected) {
                    return {
                        pass: expected.some(function(item){ return item === actual; }),
                        message: actual + ' is not in ' + expected
                    }
                }
            };
          }
        });
  });

  describe('stormy', function(){
    it('returns either 0 or 1', function(){
      expect(weather.stormy()).toBeIn([1, 0]);
    });
  });
});

