// Fetch the data from the JSON file
fetch('/assets/example_statistics.json')
  .then(response => response.json())  // Parse the JSON response
  .then(dataJSON => {
    // stanford accent colors
    const colorList = [
      "#175e54", // paloalto
      "#279989", // paloverde
      "#8f993e", // olive
      "#6fa287", // bay
      "#4298b5", // sky
      "#007c92", // lagunita
      "#f9a44a", // poppy
      "#e04f39", // spirited
      "#fedd5c", // illuminating
      "#620059", // plum
      "#651c32", // brick
      "#5d4b3c", // archway
      "#7f7776", // stone
      "#dad7cb"  // fog
    ];

    // https://www.chartjs.org/docs/latest/configuration/elements.html#types
    const markerSymbols = ['circle', 'triangle', 'square', 'rectRounded', 'star','cross'];

    // Permute various combo of symbol/color and store in a map
    const colorMap = {};
    const datasetKeys = Object.keys(dataJSON);
    datasetKeys.forEach((key, index) => {
      const color = colorList[index % colorList.length];
      const symbol = markerSymbols[Math.floor(index / colorList.length) % markerSymbols.length];
      colorMap[key] = {color,symbol};
    });

    // Dynamic css for marker symbol
    const classToProp = {
      'circle': 'backgroundColor',
      'triangle': 'borderBottomColor',
      'square': 'backgroundColor',
      'rectRounded': 'backgroundColor',
      'star': 'color',
      'cross': 'color'
    };

    // Generate checkboxes dynamically
    const form = document.getElementById('datasetForm');
    datasetKeys.forEach(key => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'datasets';
      checkbox.value = key;
      checkbox.id = key;
      checkbox.checked = false;
      checkbox.addEventListener('change', updateChart);
      form.appendChild(checkbox);

      const label = document.createElement('label');
      label.setAttribute('for',key);

      const labelMarker = document.createElement('span');
      labelMarker.className = `marker-symbol ${colorMap[key].symbol}`;
      labelMarker.style[classToProp[colorMap[key].symbol]] = colorMap[key].color;
      label.appendChild(labelMarker);
      label.appendChild(document.createTextNode(` ${key}`));
      form.appendChild(label);
    });

    // Initialize Chart.js
    Chart.defaults.font.size = 20;
    const ctx = document.getElementById('scatterChart').getContext('2d');
    const scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: { datasets: [] },
      options: {
        scales: {
          x: { type: 'linear', title: { display: true, text: 'stat1' } },
          y: { type: 'linear', title: { display: true, text: 'stat2' } }
        },
	layout: {
	  padding: 20
	},
        plugins: {
          legend: {
            //position: 'right',
	    //align: 'left'
            display: false
	  },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `x: ${context.parsed.x}, y: ${context.parsed.y}`;
              }
            }
          }
        }
      }
    });

    // Update chart based on selected checkboxes
    function updateChart() {
      const selected = Array.from(document.querySelectorAll('input[name="datasets"]:checked'))
                            .map(cb => cb.value);

      scatterChart.data.datasets = selected.map(key => {
        const { stat1, stat2 } = dataJSON[key];
        const minLen = Math.min(stat1.length, stat2.length);
        const points = Array.from({ length: minLen }, (_, i) => ({ x: stat1[i], y: stat2[i] }));
        return {
          label: key,
          data: points,
          backgroundColor: colorMap[key].color,
	  borderColor: colorMap[key].color,
          pointStyle: colorMap[key].symbol,
          pointRadius: 6
        };
      });

      scatterChart.update();
    }

    // Initial chart render
    updateChart();
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

