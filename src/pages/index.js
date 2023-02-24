//This is the home page of the CMU BTG website. It gives a short introduction to the club, our mission, and some of our 
//achievements as well as our sponsors.

//Created by David You <dsyou@andrew.cmu.edu>

import React, { useEffect } from "react";
import {navigate} from 'gatsby'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"
import './index.css'

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


function Home() {

  // Go to results page when enter key is pressed
  useEffect(() => {
    const input = document.getElementById('searchBar')
    console.log(input)
    const listener = event => {
      if (event.code === "Enter") {
        console.log("Enter key was pressed. Run your function.");
        handleSearch(input)
      }
    };
    input.addEventListener("keydown", listener);
    return () => {
      input.removeEventListener("keydown", listener);
    };
  }, []);

  
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 class="home" style={{ marginTop: '20%' }}> Let's get on with&nbsp;</h1><h1 class="home2">course planning</h1><h1 class="home">!</h1>

            {/* TODO: Make Search Bar its own component */}
            <input type="text" id="searchBar" className="searchbar" placeholder="Search people, courses, majors..." title="Type in a name"></input>
            
          </Col>
        </Row>
      </Container>
      </Layout>
  );
}

export default Home;
