import React,{useState,useEffect} from 'react';
import {fetchCountries} from '../../API/api';

const Country = ( {handleCountryChange}) =>  {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect (() => {
        const fetchAPI = async () =>{
        setFetchedCountries(await fetchCountries());
        }
        fetchAPI(); 
        },[setFetchedCountries])
    return (
        <div className="country">
             <label>Select a Country  </label>
             <span className="select">
             <select className="select"  onChange= {(e) => handleCountryChange(e.target.value)} aria-label="Default select example">
             <option value="">Global</option>
            {fetchedCountries.map((country ,i) => <option key={i} value={country}>{country} </option>)}
            </select>
             </span>
             
        </div>
    )
}


export default Country;