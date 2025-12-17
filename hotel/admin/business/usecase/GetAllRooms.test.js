const {expect} = require("chai");
const Room = require("../entity/Room");
const RoomRepositoryStub = require("../../../../tests/serverSide/RoomGatewayStub");
const GetAllRooms = require("./GetAllRooms");
const GetAllRoomJSONPresenter = require("../../infrastructure/presenter/GetAllRoomJSONPresenter");

describe('getAllRooms', function () {
  it('returns all rooms', function () {
    const roomList= [new Room(1, 101, 100)]
    const roomRepository = new RoomRepositoryStub(roomList);
    const getAllRooms = new GetAllRooms(roomRepository);
    const getAllRoomPresenter = new GetAllRoomJSONPresenter()
    const result = getAllRooms.invoke(getAllRoomPresenter);

    const expectedResult = '{"floor":"1","roomNumber":"101","price":"107"}';
    expect(result[0]).to.equal(expectedResult.toString());
  });
});