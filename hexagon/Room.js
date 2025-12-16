const roomPriceCalculator = require('./RoomPriceCalculator');
class Room {
  floor;
  number;
  price;

  constructor(floor, number, priceForZeroFloorRoom) {
    const priceCalculator = new roomPriceCalculator(priceForZeroFloorRoom);
    this.floor = floor;
    this.number = number;
    this.price = priceCalculator.calculatePricePerNight(floor);
  }

  setPrice(price) {
    this.price = price;
  }
}

module.exports = Room;