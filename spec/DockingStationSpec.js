'use strict';

describe('Docking Station', function() {
  let dockingstation;
  let bike;
  let bike2;

  beforeEach(function() {
    dockingstation = new DockingStation();
    bike = {
      checkStatus: function() {
        return true;
      }
    };
    bike2 = {
      checkStatus: function() {
        return false;
      }
    };
  });

  function defaultCapacity(bike) {
    var times = 5;
    var i = 0;
    for(i; i < times; i++) {
      dockingstation.dockBike(bike);
    }
  }

  describe('.dockBike(bike)', function() {
    it('can dock a bike', function() {
      expect(dockingstation.dockBike(bike)).toEqual(bike);
    });

    it('raises an error if the dockingstation cannot accept more bikes', function() {
      defaultCapacity(bike);
      expect(function() { dockingstation.dockBike(bike); }).toThrowError('bike storage is full')
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
      expect(bike.checkStatus()).toEqual(true);
    }); // check this in a second

    it('fails to release a broken bike', function() {
      dockingstation.dockBike(bike2)
      expect(function() { dockingstation.releaseBike(bike2); }).toThrowError('sorry, this bike is broken')
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
    });
  });
});
