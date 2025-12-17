class GetAllRooms {
  constructor(roomRepository) {
    this.roomRepository = roomRepository;
  }

  invoke(getAllRoomPresenter) {
    const rooms = this.roomRepository.findAll();

    return getAllRoomPresenter.invoke(rooms)
  }
}

module.exports = GetAllRooms
