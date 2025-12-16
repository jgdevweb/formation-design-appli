class RoomRepositoryStub {
  constructor(roomsList) {
    this.rooms = roomsList;

  }
  findAll() {
    return this.rooms;
  }

  findOneByNumber(number) {
    return this.rooms.find(room => room.number === number);
  }

  findByFloor(floor) {
    return this.rooms.filter(room => room.floor === floor);
  }

  findPriceByNumber(number) {
    const room = this.findOneByNumber(number);
    return room ? room.price : null;
  }
}

module.exports = RoomRepositoryStub;
