'use strict';

describe('Bike', function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  describe('.checkStatus()', function() {
    it('checks if a bike is in working condition', function() {
      expect(bike.checkStatus()).toEqual(true)
    });
  });

  describe('.reportBroken()', function() {
    it('changes a bikes status to broken', function() {
      bike.reportBroken();
      expect(bike.checkStatus()).toEqual(false);
    });
  });

  describe('.reportWorking()', function() {
    it('changes a bikes status to working', function() {
      bike.reportBroken();
      bike.reportWorking();
      expect(bike.checkStatus()).toEqual(true);
    });
  });
});
