async function fetchGistData() {
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const gistURL = 'https://gist.githubusercontent.com/beverleyy/c9112c25c5acd400b90741efa81aa411/raw/kaggle_stats.json';
    const localURL = './kaggle_stats.json'; // Path to the local JSON file

    let dataURL = gistURL;

    if (isLocal) {
        try {
            // Check if the local JSON file exists
            const response = await fetch(localURL, { method: 'HEAD' });
            if (response.ok) {
                dataURL = localURL;
            } else {
                console.log("Local JSON file not found. Falling back to Gist.");
            }
        } catch (error) {
            console.log("Error checking local JSON file. Falling back to Gist:", error);
        }
    }

    try {
        // Fetch data from the appropriate source
        console.log(`Fetching data from: ${dataURL}`);
        const response = await fetch(dataURL);
        const data = await response.json();

        let fileName = window.location.pathname;
        fileName = fileName.split("/").slice(-1)[0].split(".")[0] + ".md";
        const stats = data[fileName];

        document.querySelectorAll('#kaggle_views')[0].innerHTML = stats.views.toString() + " views";
        document.querySelectorAll('#kaggle_downloads')[0].innerHTML = stats.downloads.toString() + " downloads";
        document.querySelectorAll('#kaggle_size')[0].innerHTML = stats.size;
    } catch (error) {
        console.log("Failed to fetch data:", error);
    }
}

fetchGistData();
