const {expect} = require("chai");
const Room = require("../entity/Room");
const RoomRepositoryStub = require("../../../../tests/serverSide/RoomGatewayStub");
const GetOneRoomByNumber = require("./GetOneRoomByNumber");

describe('getOneRoomByNumber', function () {
  it('returns room 101', function () {
    const roomList = [new Room(1, 101, 100)]
    const roomRepository = new RoomRepositoryStub(roomList);

    const getOneRoomByNumber = new GetOneRoomByNumber(roomRepository);

    const room = getOneRoomByNumber.invoke(101)

    expect(room).to.equal(roomList[0]);
  });
});