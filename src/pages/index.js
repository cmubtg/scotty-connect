//This is the home page of the CMU BTG website. It gives a short introduction to the club, our mission, and some of our 
//achievements as well as our sponsors.

//Created by David You <dsyou@andrew.cmu.edu>

import React, { useEffect, useState } from "react";
import {navigate} from 'gatsby'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"
import SearchData from '../data/searchData.json'
import MySelect from "../components/MySelect"

import './index.css'

const searchText = () =>
{
  return(
    <h className = "searchText"> Search people, courses, majors...</h>
  )
}





function check_keys(str,dict) {
  for(let s in dict){
    if(str.includes(s)){
      return s
    }
  }
  return ""
}

function get_majors(users) {
  var all_majors = {"Electrical Engineering":[], "Business Administration":[], "Information Systems":[]}
  users.forEach(
    function(user,index) {
      // console.log(user);
      var r = user.major
      r.forEach(
        function(indMajor,index) {
          var k = check_keys(indMajor,all_majors)
          if(k!=="") {
              all_majors[k].push(user)
            }
        }
      )
    }
  )
  return Object.entries(all_majors)
}

function get_options(majors) {
  var ops = []
  majors.forEach((r) => {
    ops.push({ "label":r[0],"value":r })
  })
  return ops;
}

  // setMajors(input) {
  //   this.setState({majors:input})
  // }

function Home() {
  const [majors, setMajors] = useState(get_majors(SearchData.students));
  const [ops, setOps] = useState([]);

  function setMajors_input(input) {
    setMajors(input)
    console.log("majors is now", majors)
  }
  
  const handleSearch = () =>{
    const input = document.getElementById('searchBar')
    // var search = input.value;
    // console.log("search", search)
    console.log("Majors", majors);
    navigate('/results', {state: {majors} })
  }


  useEffect(() => {
    // setSelected([...selected, i])
    // setMajors([...majors, get_majors(SearchData.students)])
    // console.log("majors", majors)
    // console.log(get_options(majors))
    // setOps( ops => [...ops, get_options(majors)])
    setOps(get_options(majors))
    console.log("majors is now", majors)
  }, []);

  // Go to results page when enter key is pressed
  useEffect(() => {
    const input = document.getElementById('searchBar')
    console.log(input)
    const listener = event => {
      if (event.code === "Enter") {
        // handleSearch(input)
        console.log("Majors before navigating:", majors);
        navigate('/results', {state: {majors} })
      }
    };
    input.addEventListener("keydown", listener);
    return () => {
      input.removeEventListener("keydown", listener);
    };
  }, [majors]);

  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 class="home" style={{ marginTop: '20%' }}> Let's get on with&nbsp;</h1><h1 class="home2">course planning</h1><h1 class="home">!</h1>

            {/* TODO: Make Search Bar its own component */}
            {/* <input type="text" id="searchBar" className="searchbar" placeholder="Search people, courses, majors..." title="Type in a name"></input> */}
            <MySelect
            id="searchBar"
            className="searchbar"
            options={ops}
            isMulti
            onChange={setMajors}
            allowSelectAll = {true}
            // value={window.history.state.search}
            placeholder="See all our majors"
          />
            
          </Col>
        </Row>
      </Container>
      </Layout>
  );
}

export default Home;
