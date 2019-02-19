'use strict';

describe('Docking Station', function() {
  let dockingstation;
  let bike;
  let bike1;

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
      bike = dockingstation.releaseBike(bike);
      expect(bike.checkWorking()).toEqual(true);
    });
  });

  describe('.dockBike(bike)', function() {
    it('can release a bike', function() {
      bike1 = dockingstation.releaseBike(bike);
      dockingstation.dockBike(bike1);
      expect(dockingstation.checkStorage()).toEqual([bike1]);
    });
  });
});
