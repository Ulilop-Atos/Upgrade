import React from "react";
import WikiCountry from "../WikiCountry/WikiCountry";
import "./TableCountries.css";

/* 
 * Returns a Bootstrap style table with a row for each country in the response
 * fof the fetched API, with columns:
 * Official name, Capital, Region, Language (all if apply), Population, Flag as
 * an image
*/
class TableCountries extends React.Component {

    // Constructor for this class
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            loading: false,
            error: null,
        };
    }

    // Fetching the APi data when mounted and updating the state, trows an error
    // if the request failed.
    componentDidMount() { 
        this.setState({ loading: true });   
        if (this.props.hasOwnProperty('countriesListAPI')  && 
            this.props.countriesListAPI !== "") {
            fetch(this.props.countriesListAPI)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                      } else {
                        throw new Error('An error ocurred fetching data from: '
                            + this.props.countriesListAPI);
                      }
                })
                // Sorting the response
                .then(data =>
                    data.sort(
                        (a,b) => a.name.official.localeCompare(b.name.official))
                )
                // Memory optimization, ony using the required properties
                .then(data => 
                    data.map( (i) => i = {
                        name: i.name, 
                        capital: i.capital, 
                        region: i.region, 
                        languages: i.languages, 
                        population: i.population,
                        flags: i.flags
                    })
                )
                // Saving the state
                .then(data => {
                    this.setState({countries: data, loading: false})
                })
                .catch(error => this.setState({ error, loading: false }));             
        }
    }

    render() {

        // State for the DOM
        const { countries, loading, error } = this.state;

        // Storing a list formatter
        const listFormatter = new Intl.ListFormat('en', { 
            style: 'long', 
            type: 'conjunction' });

        // Storing a number formatter
        const numberFormatter = new Intl.NumberFormat('en-US');
        
        // If error
        if (error) {
            return <p>{error.message}</p>;
        }

        // While loading
        if (loading) {
            return <p><i className="fa fa-spin fa-spinner"></i> Loading...</p>;
        }
        
        // The table view
        return (
        <div className="TableCountries">
            <div className="table-responsive-sm">
                <table className="table table-sm table-bordered table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Region</th>
                        <th scope="col">Language</th>
                        <th scope="col">Population</th>
                        <th scope="col">Flag</th>
                        <th scope="col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((c, i) => (
                            <tr key={c.name.common}>  
                            <th scope="row">{c.name.official}</th>
                            <td>{c.capital}</td>
                            <td>{c.region}</td>
                            <td>{formatMapValues(c.languages)}</td>
                            <td>{numberFormatter.format(c.population)}</td>
                            <td>
                                <img src={c.flags.svg} 
                                alt={c.name.common+ " flag"} 
                                height="20px" width="35px"/>
                            </td>
                            <td>
                                { <WikiCountry country = {c.name.common}/> }
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        );

        // Auxiliary function to properly list a map object values
        function formatMapValues(map) {
            let temp = [];
            for (const prop in map) {
                temp.push(map[prop]);
            }
            return listFormatter.format(temp);
        }

    }
}

export default TableCountries;