import { get, reset } from '../utils/bang-storage-util.js';

function listenForClicks() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("reset")) {
            reset()
                .then(() => {
                    // TODO: add UI cleanup logic
                })
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
    get()
        .then(result => {
            // TODO: add UI construction
            console.log(result);
        })
}

try {
    onStartUp();
    listenForClicks();
}
catch (err) {
    reportExecuteScriptError(err);
}