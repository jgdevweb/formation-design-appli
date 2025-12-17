const Room = require('./Room');
interface GetAllRoomPresenterInterface {
  invoke(rooms: Array<typeof Room>): Array<Record<string, any>>;

}

module.exports = GetAllRoomPresenterInterface;