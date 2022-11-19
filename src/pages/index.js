//This is the home page of the CMU BTG website. It gives a short introduction to the club, our mission, and some of our 
//achievements as well as our sponsors.

//Created by David You <dsyou@andrew.cmu.edu>

import React from "react";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Companies from "../components/Companies";
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";

function Home() {
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 class="display-3 text-black font-weight-boldest">
              Hello
            </h1>
            <input type="text" className="searchbar" onkeyup="myFunction()" placeholder="Search people, courses, majors..." title="Type in a name"></input>
          </Col>
        </Row>
      </Container>
      </Layout>
  );
}

export default Home;
