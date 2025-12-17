class RoomPriceCalculator {

  maxPricePerNight = 200;
  priceSurchargeByFloor = {
    0: 1,
    1: 1.07,
    2: 1.22,
    3: 1.33
  };

  calculatePricePerNight(floorNumber, pricePerNightForZeroFloor) {
    return Math.min(pricePerNightForZeroFloor * this.priceSurchargeByFloor[floorNumber], this.maxPricePerNight);
  }
}

module.exports = RoomPriceCalculator