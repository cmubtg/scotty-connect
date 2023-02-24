import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"
import SearchResultContainer from "../components/SearchResultContainer";

import './index.css'

function Results() {
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <input type="text" className="searchbar" value={window.history.state.search} title="Type in a name"></input>
            <SearchResultContainer/>
          </Col>
        </Row>
      </Container>
      </Layout>
  );
}

export default Results;

