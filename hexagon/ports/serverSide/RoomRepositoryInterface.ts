const Room = require('./Room');
interface RoomRepositoryInterface {
  findAll(): Array<typeof Room>;
  findOneByNumber(number: number): typeof Room
  findByFloor(floor: number): Array<typeof Room>
  findPriceByNumber(number: number): number
}