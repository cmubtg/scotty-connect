import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import SearchResult from "../components/SearchResult";

import SearchData from '../data/searchData.json'

import MySelect from "../components/MySelect"
import {get_majors,get_labels, get_options, hasAllElems} from '../utils/searchHelpers'

import '../css/searchResult.css'
import {navigate} from 'gatsby'


function handleResultClick() {
  navigate('/profile')
}


function Results() {
  console.log(window.history.state.majors)
  const [allMajors, setAllMajors] = useState(get_majors(SearchData));
  const [selectedMajors, setSelectedMajors] = useState(window.history.state.majors)
  const [options, setOptions] = useState(get_options(allMajors))

  function handleResultClick() {
    navigate('/profile')
  }

  const selectedStudents = SearchData.filter(studentInfo => hasAllElems(studentInfo.major, get_labels(selectedMajors)))
  console.log("selected",selectedStudents)
  console.log("selected majors",selectedMajors)
  console.log("all",allMajors)
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            {/* Search Results Bar at top */}
            <MySelect
              className="searchbar"
              options={options}
              isMulti
              onChange={setSelectedMajors}
              allowSelectAll = {true}
              value={selectedMajors}
              placeholder="See all our majors"
            />

            {/* Add result counts */}

            {/* <input type="text" className="searchbar" value={window.history.state.search} title="Type in a name"></input> */}

            <div className="searchResults_container">
              {selectedStudents.map((studentData, index) => (
                <div onClick={handleResultClick} className='searchResults_card searchResults_border'>
                  <SearchResult key={index} data={studentData}/>
                </div>
              ))}
              {/* {SearchData.map((resData, index) => {
                  return (
                    <div onClick={handleResultClick} className='searchResults_card searchResults_border'>
                      <SearchResult key={index} data={resData}/>
                    </div>
                  )
              })} */}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Results;
