import { CrawlerValidator } from '../api/validator/crawler.validator';
import { DOMParser } from 'xmldom'

export class HtmlUtil {

    /**
     * Extract links from HTM text
     * @param text text given
     * @returns the list of links retrieved
     */
    static extractLinks(text: any): string[] {
        const document = new DOMParser().parseFromString(text, "text/xml");
        const links: Element[] = Array.from(document.getElementsByTagName('a'));

        // In the reductor function we have to take in account three conditions:
        // 1. The URL has to be valid (we will reuse the validator for param url)
        // 2. We shoud not include duplicates
        // 3. Also solution will be aware of non href links
        const setOfLinks: Set<string> = links.reduce((acc, link) => {
            if (link.getAttribute('href') && CrawlerValidator.validateURL(link.getAttribute('href'))) {
                acc.add(link.getAttribute('href'))
            }
            return acc
        }, new Set<string>());

        return Array.from(setOfLinks);
    }
}