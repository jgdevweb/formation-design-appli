class RoomService {
  constructor(roomRepository) {
    this.roomRepository = roomRepository;
  }

  getRooms() {
    return this.roomRepository.findAll();
  }

  getRoomByNumber(number) {
    return this.roomRepository.findOneByNumber(number);
  }

  getRoomsByFloor(floor) {
    return this.roomRepository.findByFloor(floor);
  }

  getPriceOfARoom(number) {
    return this.roomRepository.findPriceByNumber(number);
  }
}

module.exports = RoomService;
