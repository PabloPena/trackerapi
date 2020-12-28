import { CrawlerRequest } from "./model/crawlerRequest.model";
import { v4 as uuidv4 } from 'uuid';
import { HtmlUtil } from "../util/html.util";
import { UrlExtractorUtil } from "../util/urlExtractor.util";
import { CrawlerRequestStatus } from "../api/model/crawlerRequestStatus.enum";

export class CrawlerProcess {
    
    request: CrawlerRequest;
    constructor(url: string){
        this.request = new CrawlerRequest(uuidv4(), url);
    }

    doWork(){
        return new Promise<string[]>((resolve, reject) => {
            UrlExtractorUtil.extractHTML(this.request.url)
                .then(htmlContent => { 
                    const links = HtmlUtil.extractLinks(htmlContent);
                    this.request.updateStatus(CrawlerRequestStatus.COMPLETED);
                    resolve(links)
                })
                .catch(err => {
                    this.request.updateStatus(CrawlerRequestStatus.ERRORS);
                    reject(err)
                })
        })
    }
}