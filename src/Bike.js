'use strict';

function Bike() {
  this.working = true;
}

Bike.prototype.checkStatus = function() {
  return this.working;
}

Bike.prototype.reportWorking = function() {
  this.working = true;
}

Bike.prototype.reportBroken = function() {
  this.working = false;
}
