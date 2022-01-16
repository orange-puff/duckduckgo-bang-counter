export const BANG_STORAGE_KEY = 'bangStorage';

function getEmptyBangStorage() {
    return { [BANG_STORAGE_KEY]: {} };
}

export function initialize() {
    browser.storage.local.get(BANG_STORAGE_KEY)
        .then(result => {
            if (Object.entries(result).length === 0) {
                browser.storage.local.set(getEmptyBangStorage());
            }
        });
}

export function reset() {
    return browser.storage.local.set(getEmptyBangStorage());
}

export function add(bang) {
    browser.storage.local.get(BANG_STORAGE_KEY)
        .then(result => {
            if (!(bang in result[BANG_STORAGE_KEY])) {
                result[BANG_STORAGE_KEY][bang] = 0;
            }

            result[BANG_STORAGE_KEY][bang] += 1;

            browser.storage.local.set(result);
        });
}