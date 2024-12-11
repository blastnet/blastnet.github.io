async function fetchGistData() {
	const gistURL = 'https://gist.githubusercontent.com/beverleyy/c9112c25c5acd400b90741efa81aa411/raw/kaggle_stats.json';
	
	try {
		const response = await fetch(gistURL);
		const data = await response.json();
		let fileName = window.location.pathname;
		fileName = fileName.split("/").slice(-1)[0].split(".")[0]+".md";
		const stats = data[fileName];
		document.querySelectorAll('#kaggle_views')[0].innerHTML = stats.views.toString() + " views";
		document.querySelectorAll('#kaggle_downloads')[0].innerHTML = stats.downloads.toString() + " downloads";
		document.querySelectorAll('#kaggle_size')[0].innerHTML = stats.size;
	} catch (error) {
		console.log("Failed to fetch Gist data:",error);
	}
}
fetchGistData();
