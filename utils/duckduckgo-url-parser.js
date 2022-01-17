const DUCKDUCKGO_REGEX = /^https:\/\/duckduckgo.com\/.*\?(t=(.*))?q=(.*)/;
const BANG_REGEX = /[a-zA-Z0-9]?%21(\w)/;
const DOMAIN_REGEX = /(\w+\.)+\w+/;

function searchDomain(url) {
    const match = url.match(DOMAIN_REGEX);
    if (match === null) {
        return null;
    }

    const domain = match[match.length - 1];
    return domain.substring(0, domain.length - 1);
}

function searchBang(search) {
    const match = search.match(BANG_REGEX);
    if (!match) {
        return null;
    }
    return match[match.length - 1].toLowerCase();
}

function createBang(bang, domain) {
    if (bang === null || domain === null) {
        return null;
    }

    return {
        bang: bang,
        domain: domain
    };
}

function tryGetDuckDuckGo(url) {
    const match = url.match(DUCKDUCKGO_REGEX);
    if (!match) {
        return null;
    }

    const search = match[match.length - 1];
    const bang = searchBang(search);
    if (bang !== null) {
        return null;
    }

    return createBang("duckduckgo", "duckduckgo");
}

function tryGetBang(url, originUrl) {
    const match = originUrl.match(DUCKDUCKGO_REGEX);
    if (!match) {
        return null;
    }

    const search = match[match.length - 1];
    const bang = searchBang(search);
    const domain = searchDomain(url);

    return createBang(bang, domain);
}


export function tryGetUrlBang(url, originUrl) {
    if (url === undefined) {
        return null;
    }
    if (originUrl === undefined) {
        return tryGetDuckDuckGo(url);
    }

    return tryGetBang(url, originUrl);
}
