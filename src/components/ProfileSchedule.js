import React from "react";
import { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"


import SemesterSchedule from "./SemesterSchedule.js"
import SearchResult from "../components/SearchResult";
import SearchData from '../data/searchData.json'

import '../css/profile.css'

// 
function ProfileSchedule({courseData}) {

  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
            <Col>
              <div className='profile_courses'>    
                  {courseData.map((yearInfo, i) => {
                    return(
                      <div className='profile_year'>
                        <div className='profile_header'>
                            <h3>{`Year ${i+1}`}</h3>
                        </div>
                        <div className='profile_body'>
                          {/* Schedule for each semester in the year */}
                          <p>Potenti nulla litora gravida adipiscing rhoncus scelerisque conubia cras purus. Dapibus arcu convallis habitant nullam lorem fringilla eleifend curabitur congue duis eros donec. Mauris eros sapien tincidunt montes dignissim ante sapien, neque pellentesque volutpat! Ipsum varius mollis pretium hendrerit arcu vivamus nibh ligula laoreet. Elementum eros lorem vitae, leo dolor condimentum mollis montes. Tempus mollis.</p>   
                          {/* <SemesterSchedule data={yearInfo[0]}/>
                          <SemesterSchedule data={yearInfo[1]}/> */}
                        </div>
                      </div>
                    )})
                  }
                </div>
            </Col>
          </Row>
      </Container>
    </Layout>
  );
}

export default ProfileSchedule;

