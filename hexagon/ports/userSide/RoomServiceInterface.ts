const Room = require('./Room');
interface RoomServiceInterface {
  getRooms(): Array<typeof Room>;
  getRoomByNumber(number: string): typeof Room | null;
  getRoomsByFloor(floor: number): Array<typeof Room>;
  getPriceOfARoom(number: string): number | null;
}