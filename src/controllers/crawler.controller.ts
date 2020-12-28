import { CrawlerProcess } from "../crawler/crawlerProcess";
import { CrawlerResponse } from "../api/model/crawlerResponse.model";
import { CrawlerValidator } from "../api/validator/crawler.validator";
import { CrawlerManager } from "../crawler/crawlerManager";

class CrawlerController {

    /**
     * Crawl a website url
     * @param req includes the url y req.body.url
     * @param res returns the process created 
     */
    public static crawl = function(req: any, res: any) {
        if (req.body?.broadcastId && CrawlerValidator.validateURL(req.body?.url)){
            const newProcess: CrawlerProcess = CrawlerManager.manage(req.body.broadcastId, req.body.url);
            // Before doing business, notify the requester. The crawling proccess will continue asyncronously 
            // The notification of completion will be throw with sockets inside the manager
            res.status(200).json(new CrawlerResponse(newProcess.request.requestID, req.body.url, newProcess.request.status, null, []));
        } else {
            !req.body.broadcastId ? res.status(405).send('Argument is Mandatory') : res.status(405).send('Invalid Argument');
        }
    };

}

export default CrawlerController;
  