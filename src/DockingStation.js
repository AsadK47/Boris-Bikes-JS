'use strict';

function DockingStation() {
  this.storedBikes = [];
}

DockingStation.prototype.dockBike = function(bike) {
  if (this.storedBikes.length === 5) {
    throw new Error('bike storage is full')
  }
  this.storedBikes.push(bike);
  return bike;
}

DockingStation.prototype.releaseBike = function(bike) {
  if (this.storedBikes.length === 0) {
    throw new Error('bike storage is empty')
  }
  this.storedBikes.pop();
  return bike;
};

DockingStation.prototype.checkStorage = function() {
  return this.storedBikes;
}
