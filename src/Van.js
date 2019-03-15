'use strict';

function Van() {

}

Van.prototype.sendBikesForRepair = function(bike, dockingstation, garage) {
  var i = 0;
  if (bike.checkStatus() === false) {
    for(i; i < dockingstation.storedBikes.length; i++) {
      garage.storage.push(bike);
      dockingstation.storedBikes.splice(i, 1);
      i--;
    }
  }
};
