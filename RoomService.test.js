const expect = require('chai').expect;
const RoomService = require('./RoomService')
const RoomRepository = require('./RoomRepository');
const roomList = require('./RoomList');

describe('RoomService', function () {
  const roomRepository = new RoomRepository();
  describe('getRooms', function () {
    it('returns all rooms', function () {
      const roomService = new RoomService(roomRepository);

      const result = roomService.getRooms();

      expect(result).to.equal(roomList);
    });
  });
  describe('getRoom', function () {
    it('returns a room if it exists', function () {
      const roomService = new RoomService(roomRepository);

      const result = roomService.getRoomByNumber(1);

      expect(result.number).to.equal(1);
    });
    it(`returns null if it doesn't exist`, function () {
      const roomService = new RoomService(roomRepository);

      const result = roomService.getRoomByNumber(999);

      expect(result).to.equal(undefined);
    })
  });
  describe('getRoomsByFloor', function () {
    it('returns rooms on the specified floor', function () {
      const roomService = new RoomService(roomRepository);

      const result = roomService.getRoomsByFloor(0);

      expect(result.length).to.equal(2);
      expect(result[0].number).to.equal(1);
      expect(result[1].number).to.equal(2);
    });
  });
  describe('getPriceOfARoom', function () {
    it('returns the price of the specified room', function () {
      const roomService = new RoomService(roomRepository);

      const result = roomService.getPriceOfARoom(101);

      expect(result).to.equal(53.5);
    });
    it(`returns null if the room doesn't exist`, function () {
      const roomService = new RoomService(roomRepository);

      const result = roomService.getPriceOfARoom(999);

      expect(result).to.equal(null);
    });
  })
});