import { socket } from '../server';;
import NotificationData from '../api/notification/notificationData.interface';

export class SockerUtil {

    /**
     * Notify data through notification event represented by key
     * @param key event key 
     * @param data notification data object 
    */
    static notify(broadcastId: any, data: NotificationData) {
        socket.emit(broadcastId, data);
    }

}