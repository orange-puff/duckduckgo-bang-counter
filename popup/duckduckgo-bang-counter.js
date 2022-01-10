import { BANG_STORAGE_KEY, reset } from '../utils/bang-storage-util.js';

function listenForClicks() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("reset")) {
            reset();
        }
    });
}

/**
* There was an error executing the script.
* Display the popup's error message, and hide the normal UI.
*/
function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.log(`Failed to load DuckDuckGo Bang Counter; ${error.message}`);
}

function onStartUp() {
    browser.storage.local.get(BANG_STORAGE_KEY)
        .then(result => {
            console.log(result);
        });
}

try {
    onStartUp();
    listenForClicks();
}
catch (err) {
    reportExecuteScriptError(err);
}