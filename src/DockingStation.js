'use strict';

function DockingStation() {
  this.storedBikes = [];
}

DockingStation.prototype.releaseBike = function(bike = new Bike()) {
  return bike;
};

DockingStation.prototype.dockBike = function(bike) {
  this.storedBikes.push(bike);
}

DockingStation.prototype.checkStorage = function() {
  return this.storedBikes;
}
