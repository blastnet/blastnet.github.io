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
		document.getElementById("kaggle_stat").innerHTML = wrappedNumber+" bytes downloaded";

		// Print total dataset size
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
		
		// Extra formatting thanks matthias
		let children = Array.from(document.getElementById("kaggle_stat").children);
		let firstEmIndex = children.findIndex(child => child.tagName.toLowerCase() === 'em');
		let byteCount = firstEmIndex === -1 
  		? children.filter(child => child.tagName.toLowerCase() === 'span').length 
  		: children.slice(0, firstEmIndex).filter(child => child.tagName.toLowerCase() === 'span').length;
		let sizeCount = document.querySelectorAll("#kaggle_size span").length-1;
		if (sizeCount < byteCount){
			let prependZeros = Array(byteCount-sizeCount).fill('<span class="zero">0</span>').join('');
			document.getElementById("kaggle_size").innerHTML = prependZeros+wrappedSize;
		} else if (sizeCount > byteCount){
			let prependZeros = Array(sizeCount-byteCount).fill('<span class="zero">0</span>').join('');
			document.getElementById("kaggle_stat").innerHTML = prependZeros+wrappedNumber+" bytes downloaded";
		}

	} catch (error) {
		console.log("Failed to fetch Gist data:", error);
	}
}
fetchGistData();
