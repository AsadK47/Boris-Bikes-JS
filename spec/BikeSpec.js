'use strict';

describe('Bike', function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  it('checks if a bike is working', function() {
    expect(bike.checkWorking()).toEqual(true)
  });
});
