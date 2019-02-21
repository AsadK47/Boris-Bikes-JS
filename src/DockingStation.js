'use strict';

function DockingStation() {
  this.DEFAULT_CAPACITY = 5;
  this.storedBikes = [];
}

DockingStation.prototype.dockBike = function(bike) {
  if (this._storageIsFull()) {
    throw new Error('bike storage is full');
  }
  this.storedBikes.push(bike);
  return bike;
}

DockingStation.prototype.releaseBike = function(bike) {
  if (this._storageIsEmpty()) {
    throw new Error('bike storage is empty')
  }
  this.storedBikes.pop();
  return bike;
};

DockingStation.prototype.checkStorage = function() {
  return this.storedBikes;
}

DockingStation.prototype._storageIsFull = function() {
  return this.storedBikes.length === this.DEFAULT_CAPACITY
}

DockingStation.prototype._storageIsEmpty = function() {
  return this.storedBikes.length === 0
}
