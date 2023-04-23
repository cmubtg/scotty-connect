import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import CircleWithIcon from "../components/CircleWithIcon"
import SearchBar from "../components/SearchBar";

import './index.css';

function Home() {
  
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <CircleWithIcon/>
          <Col className=''>
            {/* Contains both search bar and home title */}
            <SearchBar/>      
          </Col> 
        </Row>
      </Container>
      </Layout>
  );
}

export default Home;
