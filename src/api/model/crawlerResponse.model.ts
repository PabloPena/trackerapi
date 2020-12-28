import { CrawlerRequestStatus } from "./crawlerRequestStatus.enum";

export class CrawlerResponse {
  
  constructor (
      public requestedUrl: string, 
      public requestID: string,
      public status: CrawlerRequestStatus,
      public processingTime?: number,
      public results?: string[]
    ) {
  }

}