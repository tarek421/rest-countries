import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
   const [countries, setCountries] = useState([]);
   useEffect(() => {
      const url = 'https://restcountries.eu/rest/v2/all';
      fetch(url)
         .then(res => res.json())
         .then(data => setCountries(data))
   }, [])
   return (
      <div className='container'>
         <div className="row">
            {
               countries.map(countries => <Country key={countries.alpha3Code} countries={countries}></Country>)
            }
         </div>
      </div>
   );
};

export default Countries;