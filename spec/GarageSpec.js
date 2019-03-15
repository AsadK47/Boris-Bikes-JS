'use strict';

describe('Garage', function() {
  let garage;
  let brokenBike;
  let van;

  beforeEach(function() {
    garage = new Garage();
  });

  describe('.checkStorage', function() {
    it('can check the garages storage for bikes', function() {
      expect(garage.checkStorage()).toEqual([]);
    })
  });

  describe('.repairBike', function() {
    it('can repair a bike', function() {
      
    });
  });
});
