import TableCountries from '../TableCountries/TableCountries';
import './App.css';

function App() {
  return (
    <TableCountries countriesListAPI= "https://restcountries.com/v3.1/all"/>
  );
}

export default App;
