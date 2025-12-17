const {json} = require("mocha/lib/reporters");

class GetAllRoomJSONPresenter /*implements getAllPresenterInterface*/ {
  invoke(rooms) {
    const formattedRooms = [];
    for (const room of rooms) {
      const FormattedRoom = {
        floor: room.floor.toString(),
        roomNumber: room.number.toString(),
        price: room.price.toString()
      }
      formattedRooms.push(JSON.stringify(FormattedRoom));
    }

    return formattedRooms
  }
}

module.exports = GetAllRoomJSONPresenter