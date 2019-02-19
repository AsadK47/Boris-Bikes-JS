'use strict';

describe('Docking Station', function() {
  var dockingstation;

  beforeEach(function() {
    dockingstation = new DockingStation();
  })

  it('can dock a bike', function() {
    expect(dockingstation.releaseBike(bike)).toEqual(bike)
  });
});
