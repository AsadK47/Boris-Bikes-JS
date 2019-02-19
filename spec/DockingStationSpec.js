'use strict';

describe('Docking Station', function() {
  let dockingstation;
  let bike;

  beforeEach(function() {
    dockingstation = new DockingStation();
    bike = {
      checkWorking: function() {
        return true;
      }
    };
  });

  describe('.releaseBike(bike)', function() {
    it('can dock a bike', function() {
      expect(dockingstation.releaseBike(bike)).toEqual(bike);
    });

    it('can check if a released bike is working', function() {
      dockingstation.releaseBike(bike);
      expect(bike.checkWorking()).toEqual(true);
    });
  });


});
