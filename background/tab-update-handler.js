import { tryGetUrlBang } from '../utils/duckduckgo-url-parser.js';
import { add } from '../utils/bang-storage-util.js';

browser.webRequest.onCompleted.addListener(function (req) {
    const bang = tryGetUrlBang(req.url, req.originUrl);
    add(bang);
},
    { urls: ["*://*.duckduckgo.com/?*", "*://*.google.com/*"] }
);
