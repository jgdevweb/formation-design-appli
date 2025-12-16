class RoomPriceCalculator {

  maxPricePerNight = 200;
  priceSurchargeByFloor = {
    0: 1,
    1: 1.07,
    2: 1.22,
    3: 1.33
  };

  constructor(
    pricePerNightForZeroFloor = 100
  ) {
    this.pricePerNightForZeroFloor = pricePerNightForZeroFloor;
  }

  calculatePricePerNight(floorNumber) {
    return Math.min(this.pricePerNightForZeroFloor * this.priceSurchargeByFloor[floorNumber], this.maxPricePerNight);
  }
}

module.exports = RoomPriceCalculator