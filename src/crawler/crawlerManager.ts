import { CrawlerResponse } from "../api/model/crawlerResponse.model";
import { CrawlerProcess } from "./crawlerProcess";

export class CrawlerManager {
    static new(url: any): CrawlerProcess {
        return new CrawlerProcess(url);
    }

    static startProcess(process: CrawlerProcess) {
        return new Promise<CrawlerResponse>((resolve, reject) => {
            process.doWork()
                .then(results => resolve(new CrawlerResponse(
                    process.request.requestID, 
                    process.request.url, 
                    process.request.status,
                    process.request.updated.getDate() - process.request.requested.getDate(),
                    results)
                ))
                .catch(err => reject(err));
        })
    };

}