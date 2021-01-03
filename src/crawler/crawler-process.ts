import { CrawlerRequest } from "./model/crawler-request.model";
import { v4 as uuidv4 } from 'uuid';
import { HtmlUtil } from "../util/html.util";
import { UrlExtractorUtil } from "../util/url-extractor.util";
import { CrawlerRequestStatus } from "../api/model/crawler-request-status.enum";

export class CrawlerProcess {

    request: CrawlerRequest;
    broadcastId: string
    constructor(broadcastId: string, url: string) {
        this.broadcastId = broadcastId;
        this.request = new CrawlerRequest(uuidv4(), url);
    }

    /**
     * Do process business neccessary to retrieve all links above the url
     * @returns a promise of results
     */
    doWork() {
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