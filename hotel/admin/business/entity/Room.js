const roomPriceCalculator = require('./RoomPriceCalculator');
class Room {
  floor;
  number;
  price;

  constructor(floor, number, priceForZeroFloorRoom) {
    const priceCalculator = new roomPriceCalculator();
    this.floor = floor;
    this.number = number;
    this.price = priceCalculator.calculatePricePerNight(floor, priceForZeroFloorRoom);
  }

  setPrice(price) {
    this.price = price;
  }
}

module.exports = Room;