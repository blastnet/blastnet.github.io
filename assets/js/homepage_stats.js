function formatBytes(numBytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1000; // Conversion factor for bytes to the next unit

    let unitIndex = 0;
    while (numBytes >= factor && unitIndex < units.length - 1) {
        numBytes /= factor;
        unitIndex++;
    }

    // Format the output to 3 decimal places
    return `${numBytes.toFixed(0)} ${units[unitIndex]}`;
}

async function fetchGistData() {
	const gistURL = 'https://gist.githubusercontent.com/beverleyy/c9112c25c5acd400b90741efa81aa411/raw/kaggle_stats.json';
	
	try {
		// Fetch data from Gist JSON
		const response = await fetch(gistURL);
		const data = await response.json();

		// Parse JSON data
		const total_size = parseInt(data.total_size);
		const total_bytes = parseInt(data.total_bytes);

		// Print total bytes downloaded
		const formattedNumber = total_bytes.toLocaleString();
		const wrappedNumber = Array.from(formattedNumber).map(char => (/\d/.test(char) ? `<span>${char}</span>`:`<em>${char}</em>`)).join('');
		document.querySelectorAll("#kaggle_stat")[0].innerHTML = wrappedNumber + " bytes downloaded";

		// Print total dataset size
		const formattedSize = formatBytes(total_size);
		//const wrappedSize = Array.from(formattedSize).map(char => (/\s/.test(char) ? `${char}`:`<span>${char}</span>`)).join('');
		const wrappedSize = formattedSize.split(/(\s+)/).map(chunk => {
    			if (/^\d+$/.test(chunk))
      				return Array.from(chunk).map(char => `<span>${char}</span>`).join('');
    			else if (/^\w+$/.test(chunk))
      				return `<span>${chunk}</span>`;
    			else
      				return chunk;
  		}).join('');
		document.querySelectorAll("#kaggle_size")[0].innerHTML = wrappedSize;
		document.querySelectorAll("#data_size")[0].innerHTML = formattedSize;
	} catch (error) {
		console.log("Failed to fetch Gist data:", error);
	}
}
fetchGistData();
