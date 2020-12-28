import { CrawlerRequestStatus } from "./crawlerRequestStatus.enum";

// Crawler Response Model Class Definition
export class CrawlerResponse {
  
  constructor (
      public requestID: string,
      public requestedUrl: string, 
      public status: CrawlerRequestStatus,
      public processingTime?: number,
      public results?: string[],
      public error?: any
    ) {
  }

}