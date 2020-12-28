import fetch from 'node-fetch';

export class UrlExtractorUtil {

    /**
     * Extract html from url
     * @param text url 
     * @returns the html text (not parsed)
    */
    static extractHTML(url: string) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.text()
                    .then(text => resolve(text))
                    .catch(err => reject(err))
                )
                .catch(err => reject(err))
        });
    }
}