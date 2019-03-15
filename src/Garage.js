'use strict';

function Garage() {
  this.storage = [];
}

Garage.prototype.checkStorage = function() {
  return this.storage;
}

Garage.prototype.repairBike = function() {
  var i = 0;
  for(i; i < this.storage.length; i++) {
    this.storage[i].working = true;
  }
}
