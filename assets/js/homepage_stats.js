function formatBytes(numBytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024; // Conversion factor for bytes to the next unit

    let unitIndex = 0;
    while (numBytes >= factor && unitIndex < units.length - 1) {
        numBytes /= factor;
        unitIndex++;
    }

    // Format the output to 0 decimal places
    return `${numBytes.toFixed(0)} ${units[unitIndex]}`;
}

async function fetchFirebaseData() {
    const firebaseURL = "https://blastnet-backend-default-rtdb.firebaseio.com/kaggle_stats.json";

    // Try to get cached ETag and JSON from localStorage
    let etag = localStorage.getItem("kaggle_etag");
    let cachedJSON = localStorage.getItem("kaggle_stats_json");

    let headers = {};
    if (etag) {
        headers["If-None-Match"] = etag;
    } else {
        headers["X-Firebase-ETag"] = "true"; // ask Firebase to return an ETag
    }

    try {
        console.log(`Fetching data from Firebase REST API: ${firebaseURL}`);

        const response = await fetch(firebaseURL, { method: "GET", headers });
        let data;

        if (response.status === 304) {
            // Data hasn't changed — use cached version
            data = JSON.parse(cachedJSON);
            console.log("Using cached data (not modified).");
        } else if (response.ok) {
            // New data — store ETag and JSON string
            const newETag = response.headers.get("ETag");
            const jsonString = await response.text();

            localStorage.setItem("kaggle_etag", newETag);
            localStorage.setItem("kaggle_stats_json", jsonString);

            data = JSON.parse(jsonString);
            console.log("Loaded fresh data from Firebase.");
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the data again
        data = JSON.parse(data)

        // Access your data
        const total_size = parseInt(data.total_size);
        const total_bytes = parseInt(data.total_bytes);

        // Format total bytes downloaded
        const formattedNumber = total_bytes.toLocaleString();
        const wrappedNumber = Array.from(formattedNumber)
            .map(char => (/\d/.test(char) ? `<span>${char}</span>` : `<em>${char}</em>`))
            .join('');
        document.getElementById("kaggle_stat").innerHTML = wrappedNumber + " bytes downloaded";

        // Format total dataset size
        const formattedSize = formatBytes(total_size);
        const wrappedSize = formattedSize.split(/(\s+)/).map(chunk => {
            if (/^\d+$/.test(chunk))
                return Array.from(chunk).map(char => `<span>${char}</span>`).join('');
            else if (/^\w+$/.test(chunk))
                return `<span>${chunk}</span>`;
            else
                return chunk;
        }).join('');
        document.getElementById("kaggle_size").innerHTML = wrappedSize;
        document.getElementById("data_size").innerHTML = formattedSize;

        // Extra formatting
        let children = Array.from(document.getElementById("kaggle_stat").children);
        let firstEmIndex = children.findIndex(child => child.tagName.toLowerCase() === 'em');
        let byteCount = firstEmIndex === -1
            ? children.filter(child => child.tagName.toLowerCase() === 'span').length
            : children.slice(0, firstEmIndex).filter(child => child.tagName.toLowerCase() === 'span').length;
        let sizeCount = document.querySelectorAll("#kaggle_size span").length - 1;
        if (sizeCount < byteCount) {
            let prependZeros = Array(byteCount - sizeCount).fill('<span class="zero">0</span>').join('');
            document.getElementById("kaggle_size").innerHTML = prependZeros + wrappedSize;
        } else if (sizeCount > byteCount) {
            let prependZeros = Array(sizeCount - byteCount).fill('<span class="zero">0</span>').join('');
            document.getElementById("kaggle_stat").innerHTML = prependZeros + wrappedNumber + " bytes downloaded";
        }

    } catch (error) {
        console.error("Failed to fetch Firebase data:", error);
    }
}

fetchFirebaseData();

