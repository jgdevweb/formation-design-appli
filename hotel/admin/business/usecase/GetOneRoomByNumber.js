class GetOneRoomByNumber {
  constructor(roomRepository) {
    this.roomRepository = roomRepository;
  }

  invoke(number) {
    return this.roomRepository.findOneByNumber(number);
  }
}

module.exports = GetOneRoomByNumber