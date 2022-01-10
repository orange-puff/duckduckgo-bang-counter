const DUCKDUCKGO_REGEX = /^https:\/\/duckduckgo.com\/.*\?(t=(.*))?q=(.*)/;
const BANG_REGEX = /[a-zA-Z0-9]?%21(\w)/;

function searchBang(search) {
    const match = search.match(BANG_REGEX);
    if (!match) {
        return null;
    }

    return match[match.length - 1].toLowerCase();
}

export function tryGetUrlBang(url) {
    const match = url.match(DUCKDUCKGO_REGEX);
    if (!match) {
        return null;
    }
    const search = match[match.length - 1];
    return searchBang(search);
}