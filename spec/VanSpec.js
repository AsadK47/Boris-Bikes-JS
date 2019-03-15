'use strict';

describe('Van', function() {
  let van;
  let garage;
  let brokenBike;
  let dockingstation;

  beforeEach(function() {
    van = new Van;
    brokenBike = {
      checkStatus: function() {
        return false;
      }
    };
    garage = {
      checkStorage: function() {
        return [brokenBike];
      }
    };
    dockingstation = {
      storedBikes: function() {
        return [brokenBike];
      }
    };
  });

  describe('.sendBikeForRepair', function() {
    it('can send bikes to a garage for repair', function() {
      van.sendBikesForRepair(brokenBike, dockingstation, garage);
      expect(garage.checkStorage()).toEqual([brokenBike]);
    });
  });
});
