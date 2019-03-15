'use strict';

describe('Docking Station', function() {
  let dockingstation;
  let workingBike;
  let brokenBike;
  let workingBikeX;

  beforeEach(function() {
    dockingstation = new DockingStation();
    workingBike = {
      checkStatus: function() {
        return true;
      }
    };
    brokenBike = {
      checkStatus: function() {
        return false;
      }
    };
  });

  function defaultCapacity(bike) {
    var times = 5;
    var i = 0;
    for(i; i < times; i++) {
      dockingstation.dockBike(workingBike);
    }
  }

  describe('.dockBike(bike)', function() {
    it('can dock a bike', function() {
      expect(dockingstation.dockBike(workingBike)).toEqual(workingBike);
    });

    it('raises an error if the dockingstation cannot accept more bikes', function() {
      defaultCapacity(workingBike);
      expect(function() { dockingstation.dockBike(workingBike); }).toThrowError('bike storage is full')
    });
  });

  describe('.releaseBike(bike)', function() {
    it('prevents a bike release if storage is empty', function() {
      expect(function() { dockingstation.releaseBike(workingBike); }).toThrowError('bike storage is empty')
    })

    it('can release a bike', function() {
      dockingstation.dockBike(workingBike)
      expect(dockingstation.releaseBike(workingBike)).toEqual(workingBike);
    });

    it('can check if a released bike is working', function() {
      dockingstation.dockBike(workingBike)
      workingBikeX = dockingstation.releaseBike(workingBike);
      expect(workingBikeX.checkStatus()).toEqual(true);
    });

    it('fails to release a broken bike', function() {
      dockingstation.dockBike(brokenBike)
      expect(function() { dockingstation.releaseBike(brokenBike); }).toThrowError('sorry, this bike is broken')
    });
  });

  describe('.checkStorage', function() {
    it('can check if a bike is stored after docking a bike', function() {
      dockingstation.dockBike(workingBike)
      expect(dockingstation.checkStorage()).toEqual([workingBike]);
    });

    it('can check the bikes storage once the bike has been released: should be empty', function() {
      dockingstation.dockBike(workingBike);
      dockingstation.releaseBike(workingBike);
      expect(dockingstation.checkStorage()).toEqual([]);
    });
  });
});
