'use strict';

describe('Docking Station', function() {
  var dockingstation;
  var bike;

  beforeEach(function() {
    dockingstation = new DockingStation();
    bike = jasmine.createSpy('bike');
  });

  describe('.releaseBike(bike)', function() {
    it('can dock a bike', function() {
      expect(dockingstation.releaseBike(bike)).toEqual(bike);
    });
  });
});
