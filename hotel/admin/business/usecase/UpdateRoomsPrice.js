class updateRoomsPrice {
  constructor(roomPriceCalculator) {
    this.roomPriceCalculator = roomPriceCalculator
  }

  invoke(roomList, priceOfZeroFloorRoom) {
    for (const room of roomList) {
      const newPrice = this.roomPriceCalculator.calculatePricePerNight(room.floor, priceOfZeroFloorRoom)
      room.setPrice(newPrice)
    }
  }
}