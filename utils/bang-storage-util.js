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
    if (bang === null) {
        return;
    }

    browser.storage.local.get(BANG_STORAGE_KEY)
        .then(result => {
            const key = bang.bang;
            if (!(key in result[BANG_STORAGE_KEY])) {
                result[BANG_STORAGE_KEY][key] = bang;
                result[BANG_STORAGE_KEY][key]['count'] = 0;
            }

            result[BANG_STORAGE_KEY][key]['count'] += 1;

            browser.storage.local.set(result);
        });
}