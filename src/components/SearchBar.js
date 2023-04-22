import React, { useState, useEffect } from 'react';
import {navigate} from 'gatsby'
import Select from 'react-select';

import coursesData from '../data/coursesData'


import '../css/SearchBar.css'

const searchText = () =>
{
  return(
    <h className = "searchText"> Search people, courses, majors...</h>
  )
}

const handleSearch = () =>{
  const input = document.getElementById('searchBar')
  var search = input.value;
  navigate('/results', {state: {search} })
}



export default function SearchBar() {

// Go to results page when enter key is pressed
  useEffect(() => {
    const input = document.getElementById('searchBar')
    console.log(input)
    const listener = event => {
      if (event.code === "Enter") {
        handleSearch(input)
      }
    };
    input.addEventListener("keydown", listener);
    return () => {
      input.removeEventListener("keydown", listener);
    };
  }, []);

const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div class="search_container">
        <h1 class="search_title"> Let's get on with <span>course planning</span> 📓</h1> 
        <Select id="searchBar"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={coursesData.options}
        />

        {/* <input type="text" id="searchBar" className="searchbar" placeholder="Search people, courses, majors..." title="Type in a name"></input> */}

    </div>
  )
}
