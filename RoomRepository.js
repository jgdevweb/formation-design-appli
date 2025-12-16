const rooms = require('./RoomList');

class RoomRepository {
  findAll() {
    return rooms;
  }

  findOneByNumber(number) {
    return rooms.find(room => room.number === number);
  }

  findByFloor(floor) {
    return rooms.filter(room => room.floor === floor);
  }

  findPriceByNumber(number) {
    const room = this.findOneByNumber(number);
    return room ? room.price : null;
  }
}

module.exports = RoomRepository;
