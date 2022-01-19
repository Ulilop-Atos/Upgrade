import React from "react";
import BootboxAlert from "../BootboxAlert/BootboxAlert";

// Storing the API url
const apiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

/**
 * Displays an alert with a small paragraph of some country information 
 * accordingly to Wikipedia.
 */
class WikiCountry extends React.Component{
    
     // Constructor for this class
     constructor(props) {
        super(props);
        this.state = {
            extract: "<p><i className=\"fa fa-spin fa-spinner\"></i> Loading...</p>",
            error: null,
        };
    }

   // Fetching the APi data when mounted and updating the state, trows an error
    // if the request failed.
    componentDidMount() {
        if (this.props.hasOwnProperty('country')  && 
            this.props.country !== "") {
            fetch(apiURL + this.props.country, {method: "GET"})
            .then(response => {
                if (response.ok) {
                    return response.json();
                    } else {
                    throw new Error('An error ocurred fetching data from: '
                        + apiURL + this.props.country);
                    }})
            .then(data => { this.setState({ extract: data.extract_html }) })
            .catch(e => { this.setState({ error: e }) });
        }
    }

    render() {
         // State for the DOM
         const { extract, error } = this.state;

          // If error
        if (error) {
            console.log(error.message);
            return "";
        }

        return (<BootboxAlert message={extract} />);
        
    }
}

export default WikiCountry;