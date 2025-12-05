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
            // New data — save it and the new ETag
            const newETag = response.headers.get("ETag");
            const jsonString = await response.text();

            localStorage.setItem("kaggle_etag", newETag);
            localStorage.setItem("kaggle_stats_json", jsonString);

            data = JSON.parse(jsonString);
            console.log("Loaded fresh data from Firebase.");
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the data string again
        data = JSON.parse(data)

        // Extract stats for current page
        let fileName = window.location.pathname;
        fileName = fileName.split("/").slice(-1)[0].split(".")[0] + ".md";
        const stats = data[fileName];

        document.querySelector('#kaggle_views').innerHTML = stats.views.toString() + " views";
        document.querySelector('#kaggle_downloads').innerHTML = stats.downloads.toString() + " downloads";
        document.querySelector('#kaggle_size').innerHTML = stats.size;

    } catch (error) {
        console.error("Failed to fetch Firebase data:", error);
    }
}

fetchFirebaseData();

