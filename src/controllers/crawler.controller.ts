import { CrawlerProcess } from "../crawler/crawlerProcess";
import { CrawlerResponse } from "../api/model/crawlerResponse.model";
import { CrawlerValidator } from "../api/validator/crawler.validator";
import { CrawlerManager } from "../crawler/crawlerManager";

class CrawlerController {

    /**
     * Render the API index page
     * @param req
     * @param res
     */
    public static crawl = function(req: any, res: any) {
        if (CrawlerValidator.validateURL(req.body?.url)){
            const newProcess: CrawlerProcess = CrawlerManager.new(req.body.url);
            // Before doing business, notify the requester 
            res.status(200).json(new CrawlerResponse(req.body.url, newProcess.request.requestID, newProcess.request.status));
            CrawlerManager.startProcess(newProcess).then((result: CrawlerResponse) =>{
                // Update success thought web sockets with results
                console.log(result);
            }).catch((err: any) => {
                // Update error thought web sockets
                console.log(err);
            });
        } else {
            res.status(405).send('Invalid Argument');
        }
    };

}

export default CrawlerController;
  