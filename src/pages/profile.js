import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"

import SearchResult from "../components/SearchResult";
import SearchData from '../data/searchData.json'

import ProfileSchedule from "../components/ProfileSchedule.js";

import '../css/profile.css'
import '../css/searchResult.css'

function Profile() {

  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <div className='divider'>

            </div>
            {/* 
              Temporarily using searchData array to pass course info
              Ideally each user is routed based on id/name 
            */}
            <div className='searchResults_card searchResults_card_left'>
              <SearchResult data={SearchData[0]}/>
            </div>
            
            

        
          </Col>
        </Row>
        {/* Accordion of all courses user has taken over the years */}
        <ProfileSchedule courseData={SearchData[0].courses}/>
        
      </Container>

      </Layout>
  );
}

export default Profile;

