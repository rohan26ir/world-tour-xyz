import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countres'

const Countres = () => {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h3>Countres: {countries.length}</h3>
      <div className="Country-cont">
        
      {
         countries.map(country => <Country key={country.cca3} country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countres;