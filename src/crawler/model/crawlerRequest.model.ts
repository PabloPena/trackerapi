import { CrawlerRequestStatus } from "../../api/model/crawlerRequestStatus.enum";

export class CrawlerRequest {
  
  public status: CrawlerRequestStatus = CrawlerRequestStatus.STARTED;
  public requested: Date;
  public updated: any = null;
  constructor (
      public requestID: string,
      public url: string
    ) {
    this.requested = new Date();
  }

  updateStatus(status: CrawlerRequestStatus){
    this.status = status;
    this.updated = new Date();
  }

}