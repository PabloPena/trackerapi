// Request Status Enum Definition
export type CrawlerRequestStatus = -1 | 0 | 1;
export const CrawlerRequestStatus = {
    STARTED: 0 as CrawlerRequestStatus,
    ERRORS: -1 as CrawlerRequestStatus,
    COMPLETED: 1 as CrawlerRequestStatus
}
