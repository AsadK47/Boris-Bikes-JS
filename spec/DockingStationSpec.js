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

  describe('.dockBike(bike)', function() {
    it('can dock a bike', function() {
      expect(dockingstation.dockBike(bike)).toEqual(bike);
    });
  });

  describe('.releaseBike(bike)', function() {
    it('prevents a bike release if storage is empty', function() {
      expect(function() { dockingstation.releaseBike(bike); }).toThrowError('bike storage is empty')
    })

    it('can release a bike', function() {
      dockingstation.dockBike(bike)
      expect(dockingstation.releaseBike(bike)).toEqual(bike);
    });

    it('can check if a released bike is working', function() {
      dockingstation.dockBike(bike)
      bike = dockingstation.releaseBike(bike);
      expect(bike.checkWorking()).toEqual(true);
    });
  });

  describe('.checkStorage', function() {
    it('can check if a bike is stored after docking a bike', function() {
      dockingstation.dockBike(bike)
      expect(dockingstation.checkStorage()).toEqual([bike]);
    });

    it('can check the bikes storage once the bike has been released: should be empty', function() {
      dockingstation.dockBike(bike);
      dockingstation.releaseBike(bike);
      expect(dockingstation.checkStorage()).toEqual([]);
    })
  })
});
