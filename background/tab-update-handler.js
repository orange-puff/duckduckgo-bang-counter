import { tryGetUrlBang } from '../utils/duckduckgo-url-parser.js';
import { add } from '../utils/bang-storage-util.js';

const WAIT_TIME_MS = 200;

let lastMove = 0;
browser.tabs.onUpdated.addListener(function (activeInfo) {
    if (Date.now() - lastMove > WAIT_TIME_MS) {
        lastMove = Date.now();
        browser.tabs.query({ currentWindow: true, active: true })
            .then((tabs) => {
                let tabUrl = tabs[0].url;
                const bang = tryGetUrlBang(tabUrl);

                if (bang !== null) {
                    add(bang);
                }
            }, console.error);
    }

});