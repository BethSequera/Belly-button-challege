function createBarChart(x) {
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(data => {
        const sampleData = data.samples.find(sample => sample.id === x);
        const top10SampleValues = sampleData.sample_values.slice(0, 10).reverse();
        const top10OtuIds = sampleData.otu_ids.slice(0, 10).reverse();
        const top10OtuLabels = sampleData.otu_labels.slice(0, 10).reverse();

        const trace = {
            x: top10SampleValues,
            y: top10OtuIds.map(id => `OTU ${id}`),
            text: top10OtuLabels,
            type: 'bar',
            orientation: 'h'
        };

        const databar = [trace];

        const layout = {
            title: 'Top 10 OTUs Found in Individual',
            xaxis: { title: 'Sample Values' },
            yaxis: { title: 'OTU ID' }
        };

        Plotly.newPlot('bar', databar, layout);
    });
}

// Function to create the bubble chart
function createBubbleChart(sampleData) {
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(data => {
        const initialSample = data.samples.find(sample => sample.id === sampleData);

        const trace = {
            x: initialSample.otu_ids,
            y: initialSample.sample_values,
            text: initialSample.otu_labels,
            mode: 'markers',
            marker: {
                size: initialSample.sample_values,
                color: initialSample.otu_ids,
                colorscale: 'Viridis',
                opacity: 0.7
            }
        };

        const databubble = [trace];

        const layout = {
            title: 'OTU Bubble Chart',
            xaxis: { title: 'OTU ID' },
            yaxis: { title: 'Sample Values' },
            showlegend: false
        };

        Plotly.newPlot('bubble', databubble, layout);
    });
}

// Function to display metadata
function displayMetadata(x) {
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(data => {

        let metadataDiv = d3.select('#sample-metadata');

        let metadata = data.metadata;
        let results = metadata.filter(sample => sample.id == x);
        let y = results[0];
        metadataDiv.html('');
        console.log(y)
        Object.entries(y).forEach(([key, value]) => {
            metadataDiv.append('h6').text(`${key}: ${value}`);
        });
        
    });
}

function optionChanged(params) {
    createBarChart(params)
    createBubbleChart(params)
    displayMetadata(params)
}

function initial() {
    const dropdown = d3.select('#selDataset');
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(data => {

        data.names.forEach(name => {
            dropdown.append('option').text(name).property('value', name);
        });

        const initialSubject = data.names[0];
        const initialSample = data.samples.find(sample => sample.id === initialSubject);

        createBarChart(initialSubject)
        createBubbleChart(initialSubject)
        displayMetadata(initialSubject)
    });
}
initial();
