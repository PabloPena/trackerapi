import { NotificationAction } from "../api/notification/notification-action.enum";
import NotificationData from "../api/notification/notifiaction-data.interface";
import { CrawlerResponse } from "../api/model/crawler-response.model";
import { CrawlerProcess } from "./crawler-process";
import { SockerUtil } from "../util/socker.util";

export class CrawlerManager {

    /**
     * Manager website url
     * @param broadcastId the broadcast identifier for socket notifications
     * @param url a new url to process
     * @returns the process created
     */
    static manage(broadcastId: string, url: any): CrawlerProcess {
        const newProcess = new CrawlerProcess(broadcastId, url);
        newProcess.doWork()
            .then(results => {
                const responseData = new CrawlerResponse(
                    newProcess.request.requestID, 
                    newProcess.request.url, 
                    newProcess.request.status,
                    newProcess.request.updated.getTime() - newProcess.request.requested.getTime(),
                    results);
                const notificationData: NotificationData = {
                    action: NotificationAction.CRAWLER_COMPLETED,
                    data: responseData
                }
                SockerUtil.notify(newProcess.broadcastId, notificationData)
            })
            .catch(err => {
                const responseData = new CrawlerResponse(
                    newProcess.request.requestID, 
                    newProcess.request.url, 
                    newProcess.request.status,
                    null,
                    [],
                    err);
                const notificationData: NotificationData = {
                    action: NotificationAction.CRAWLER_WITH_ERRORS,
                    data: responseData
                }
                SockerUtil.notify(newProcess.broadcastId, notificationData)
            });
        return newProcess;
    }
}