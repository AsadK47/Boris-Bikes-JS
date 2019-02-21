'use strict';

function DockingStation() {
  this.DEFAULT_CAPACITY = 5;
  this.storedBikes = [];
}

DockingStation.prototype.dockBike = function(bike) {
  if (this._fullCapacity()) {
    throw new Error('bike storage is full');
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

DockingStation.prototype._fullCapacity = function() {
  return this.storedBikes.length === this.DEFAULT_CAPACITY
}
