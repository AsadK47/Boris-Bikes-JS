'use strict';

describe('Bike', function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  describe('.checkWorking()', function() {
    it('checks if a bike is in a working condition', function() {
      expect(bike.checkWorking()).toEqual(true)
    });
  })
});
