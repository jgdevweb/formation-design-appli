const expect = require('chai').expect;
const RoomPriceCalculator = require('./RoomPriceCalculator');
describe('RoomPriceCalculator', function () {
  describe('calculatePricePerNight', function () {
    it('should return the correct price for a standard room on zero floor', function () {
      const zeroFloorStandardRoomPrice = 100;
      const roomPriceCalculator = new RoomPriceCalculator();
      const price = roomPriceCalculator.calculatePricePerNight(0, zeroFloorStandardRoomPrice);
      expect(price).to.equal(100);
    })
    it('should return the correct price for a standard room on first floor', function () {
      const zeroFloorStandardRoomPrice = 100;
      const roomPriceCalculator = new RoomPriceCalculator();
      const price = roomPriceCalculator.calculatePricePerNight(1, zeroFloorStandardRoomPrice);
      expect(price).to.equal(107);
    })
    it('should return the correct price for a standard room on second floor', function () {
      const zeroFloorStandardRoomPrice = 100;
      const roomPriceCalculator = new RoomPriceCalculator();
      const price = roomPriceCalculator.calculatePricePerNight(2, zeroFloorStandardRoomPrice);
      expect(price).to.equal(122);
    })
    it('should return the correct price for a standard room on third floor', function () {
      const zeroFloorStandardRoomPrice = 100;
      const roomPriceCalculator = new RoomPriceCalculator();
      const price = roomPriceCalculator.calculatePricePerNight(3, zeroFloorStandardRoomPrice);
      expect(price).to.equal(133);
    })
    it('should return the max 200 € price for a standard room on third floor', function () {
      const zeroFloorStandardRoomPrice = 180;
      const roomPriceCalculator = new RoomPriceCalculator();
      const price = roomPriceCalculator.calculatePricePerNight(3, zeroFloorStandardRoomPrice);
      expect(price).to.equal(200);
    })
  });
});