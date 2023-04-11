import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import SearchResult from "../components/SearchResult";
import SearchData from '../data/searchData.json';
import '../css/searchResult.css';
import { navigate } from 'gatsby';
import SearchBar from "../components/SearchBar";

function Results() {
  const [searchQuery, setSearchQuery] = useState(window.history.state.search);

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function handleResultClick() {
    navigate('/profile')
  }

  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <SearchBar
              initialValue={searchQuery}
              handleSearch={handleSearch}
            />

            <div className="searchResults_container">
              {SearchData.map((resData, index) => {
                return (
                  <div onClick={handleResultClick} className='searchResults_card searchResults_border'>
                    <SearchResult key={index} data={resData}/>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Results;
