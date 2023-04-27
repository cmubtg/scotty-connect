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





function Results() {
  console.log(window.history.state.majors)
  const [allMajors, setAllMajors] = useState(get_majors(SearchData));
  const [selectedMajors, setSelectedMajors] = useState(window.history.state.majors)
  const [options, setOptions] = useState(get_options(allMajors))

  function handleResultClick(studentData) {
    navigate('/profile', {state: {studentData}})
  };

  const arr_equal = (a,b) => {
    return a.length === b.length && a.every((v,i)=> v === b[i])
  }

  // Gets how closely a student's majors match the search
  // studentMajors = Array of major for specific student
  // e.g ['Computer Science', 'Mathematics']
  function getScore(studentMajors){
    var score = 0
    var selectedMajorsLabel = get_labels(selectedMajors)
    // Put perfect matches on top
    if (arr_equal(studentMajors, selectedMajorsLabel)){
      return 100
    }
    for (var i = 0; i < studentMajors.length; i++) {
      var major = studentMajors[i]
      if (selectedMajorsLabel.includes(major)){
        score += 1
      }
    }
    return score
  }

  // Sorting function
  function compareStudentScore(a,b){
    return getScore(a.major) - getScore(b.major)  
  }

  // Gets students who match selected majors
  // Orders it based on score (how closely their majors match the search)
  function selectStudents(){
    var res = []
    for (var i = 0; i < SearchData.length; i++) {
      var studentInfo = SearchData[i]
      var score = getScore(studentInfo.major)
      // Dont include the students that dont match at all
      if (score > 0) res.push(studentInfo)
    }
    return res.sort(compareStudentScore).reverse()
  }
  

  const selectedStudents = selectStudents();
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
                <div onClick={() => handleResultClick(studentData)} data={studentData}  className='searchResults_card searchResults_border'>
                  <SearchResult data={studentData}/>
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
