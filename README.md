# Interactive Web Visualizations - OTUs Analysis

This project uses the D3 library and Plotly to create interactive web visualizations for the analysis of Operational Taxonomic Units (OTUs) found in individual samples. The project includes a horizontal bar chart, a bubble chart, and the display of sample metadata. Users can select different samples from a dropdown menu to update the visualizations and view demographic information.

### Project Description
In this project, we use data from a JSON file (`samples.json`) hosted on Amazon S3 to create interactive web visualizations. The main visualizations include a horizontal bar chart that displays the top 10 OTUs found in an individual, a bubble chart that visualizes each sample's OTU data, and the display of sample metadata.

## Instructions
To use this application, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Select a sample from the dropdown menu to update the visualizations.
4. Explore the horizontal bar chart, bubble chart, and sample metadata displayed on the page.

## Project Structure
The project structure is organized as follows:

- `index.html`: The HTML file that contains the structure of the web page and includes the necessary libraries and JavaScript code for visualization.
- 'js/your_script.js': The JavaScript file that loads and processes the data from samples.json, creates the visualizations using D3 and Plotly, and updates the page when a new sample is selected.
- 'samples.json': The data file hosted on Amazon S3 that contains the sample data, including sample values, OTU IDs, OTU labels, and sample metadata.

## Usage
This application allows users to interactively explore and visualize OTU data for different samples. Users can select a sample from the dropdown menu, and the visualizations and sample metadata will update accordingly.

## Deployment
The application can be deployed to a free static page hosting service such as GitHub Pages. You can access the deployed version of this application at Your Deployment URL.

## Contributing
Contributions to this project are welcome. If you would like to contribute, please follow the GitHub flow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, concise commit messages.
4. Push your branch to your forked repository.
5. Create a pull request to merge your changes into the main branch.

Please ensure that your repository has regular commits and a thorough README.md file.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
