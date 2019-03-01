'use strict';

describe('Bike', function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  describe('.checkWorking()', function() {
    it('checks if a bike is in a working condition', function() {
      expect(bike.checkStatus()).toEqual(true)
    });
  });

  describe('.reportBroken()', function() {
    it('changes a bikes status to broken', function() {
      bike.reportBroken();
      expect(bike.checkStatus()).toEqual(false);
    });
  });
});
