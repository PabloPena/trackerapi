import { DOMParser } from 'xmldom'

export class HtmlUtil {

    static extractLinks(text: any): string[] {
        const document = new DOMParser().parseFromString(text, "text/xml");
        const links: Element[] = Array.from(document.getElementsByTagName('a'));


        return links.reduce((acc, link) => link.getAttribute('href') ? [...acc, link.getAttribute('href')] : acc, []);
    }
}