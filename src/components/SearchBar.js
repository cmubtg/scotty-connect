import React, { useState, useEffect } from 'react';
import {navigate} from 'gatsby'

import MySelect from "./MySelect"
import coursesData from '../data/coursesData'
import SearchData from '../data/searchData.json'

import searchIcon from '../images/searchIconBtg.png'

import {get_majors, get_options} from '../utils/searchHelpers'

import '../css/SearchBar.css'


const handleSearch = () =>{
  const input = document.getElementById('searchBar')
  var search = input.value;
  navigate('/results', {state: {search} })
}


export default function SearchBar() {
  const [majors, setMajors] = useState(get_majors(SearchData));
  const [ops, setOps] = useState(get_options(majors));

  // Go to results page when enter key is pressed
  // Changes options based on selected majors
  useEffect(() => {
    const input = document.getElementById('searchBar')
    const listener = event => {
      if (event.code === "Enter") {
        navigate('/results', {state: {majors} })
      }
    };
    input.addEventListener("keydown", listener);
    return () => {
      input.removeEventListener("keydown", listener);
    };
  }, [majors]);

  return (
    <div class="search_container">
         <h1 class="search_title"> Let's get on with <span>course planning.</span> 📓</h1> 
          <div class="searchBar_container">
            <img src={searchIcon} alt="search icon" class="search_icon"/>
            <MySelect
              id="searchBar"
              //  className="searchbar"
              options={ops}
              isMulti
              onChange={setMajors}
              allowSelectAll = {true}
              // value={window.history.state.search}
              placeholder="Search courses, majors..."
            />
          </div>
        

         {/* <input type="text" id="searchBar" className="searchbar" placeholder="Search people, courses, majors..." title="Type in a name"></input> */}

    </div>
  )
}
