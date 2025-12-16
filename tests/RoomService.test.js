const expect = require('chai').expect;
const Room = require('../hexagon/Room')
const RoomService = require('../hexagon/RoomService')
const RoomRepositoryStub = require('../serverSide/RoomRepositoryStub');

describe('RoomService', function () {
  describe('getRooms', function () {
    it('returns all rooms', function () {
      const roomList= []
      const roomRepository = new RoomRepositoryStub(roomList);
      const roomService = new RoomService(roomRepository);

      const result = roomService.getRooms();

      expect(result).to.equal(roomList);
    });
  });
  describe('getPriceOfRoomDependingOnFloor', function () {
    it('expectPriceOfZeroFloorRoomIs100IfPriceIsFixedTo100', function () {
      const room1 = new Room(0, 1, 100);
      const roomRepository = new RoomRepositoryStub([room1])
      const roomService = new RoomService(roomRepository)
      const priceForZeroFloorRoom = roomService.getPriceOfARoom(1)

      expect(priceForZeroFloorRoom).to.equal(100)
    })

    it('expectPriceOfFirstFloorRoomIs107IfPriceIsFixedTo100', function () {
      const room1 = new Room(1, 1, 100);
      const roomRepository = new RoomRepositoryStub([room1])
      const roomService = new RoomService(roomRepository)
      const priceForZeroFloorRoom = roomService.getPriceOfARoom(1)

      expect(priceForZeroFloorRoom).to.equal(107)
    })
    it('expectPriceOfSecondFloorRoomIs122IfPriceIsFixedTo100', function () {
      const room1 = new Room(2, 1, 100);
      const roomRepository = new RoomRepositoryStub([room1])
      const roomService = new RoomService(roomRepository)
      const priceForZeroFloorRoom = roomService.getPriceOfARoom(1)

      expect(priceForZeroFloorRoom).to.equal(122)
    })
    it('expectPriceOfThirdFloorRoomIs133IfPriceIsFixedTo100', function () {
      const room1 = new Room(3, 1, 100);
      const roomRepository = new RoomRepositoryStub([room1])
      const roomService = new RoomService(roomRepository)
      const priceForZeroFloorRoom = roomService.getPriceOfARoom(1)

      expect(priceForZeroFloorRoom).to.equal(133)
    })

    it('expectPriceOfThirdFloorRoomIs133IfPriceIsFixedTo100', function () {
      const room1 = new Room(3, 1, 150);
      const roomRepository = new RoomRepositoryStub([room1])
      const roomService = new RoomService(roomRepository)
      const priceForZeroFloorRoom = roomService.getPriceOfARoom(1)

      expect(priceForZeroFloorRoom).to.equal(199.5)
    })

    it('expectPriceOfThirdFloorRoomIs200IfPriceIsFixedTo199', function () {
      const room1 = new Room(3, 1, 199);
      const roomRepository = new RoomRepositoryStub([room1])
      const roomService = new RoomService(roomRepository)
      const priceForZeroFloorRoom = roomService.getPriceOfARoom(1)

      expect(priceForZeroFloorRoom).to.equal(200)
    })
  })
});