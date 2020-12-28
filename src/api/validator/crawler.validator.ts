export class CrawlerValidator {

    public static validateURL(urlCandidate: string){
        let url;
        try {
            url = new URL(urlCandidate)
        } catch (_){
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

}