export class CrawlerValidator {

    /**
     * Validate a website url
     * @param urlCandidate includes the url to validate
     * @returns if URL is valid
     */
    public static validateURL(urlCandidate: string): boolean {
        let url;
        try {
            url = new URL(urlCandidate)
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

}