//This is the home page of the CMU BTG website. It gives a short introduction to the club, our mission, and some of our 
//achievements as well as our sponsors.

//Created by David You <dsyou@andrew.cmu.edu>

import React from "react";
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
function Home() {
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 class="home" style={{ marginTop: '20%' }}> Let's get on with&nbsp;</h1><h1 class="home2">course planning</h1><h1 class="home">!</h1>
    
            <input type="text" className="searchbar" onkeyup="myFunction()" placeholder="Search people, courses, majors..." title="Type in a name"></input>
          </Col>
        </Row>
      </Container>
      </Layout>
  );
}

export default Home;
