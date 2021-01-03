import { CrawlerRequestStatus } from "../../api/model/crawler-request-status.enum";

// Crawler Request Model Class Definition
export class CrawlerRequest {
  
  // The state by default
  public status: CrawlerRequestStatus = CrawlerRequestStatus.STARTED;
  public requested: Date;
  public updated: any = null;
  constructor (
      public requestID: string,
      public url: string
    ) {
    // Set requested to now on constructor
    this.requested = new Date();
  }

  updateStatus(status: CrawlerRequestStatus){
    this.status = status;
    this.updated = new Date();
  }

}