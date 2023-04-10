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

  const [selected, setSelected] = useState([0])

  const toggle = (i) => {
    if (selected.includes(i)){
      return setSelected(selected.filter((item) => item !== i))
    }
    setSelected([...selected, i])
  }
  console.log(courseData)
  return (
      <Container className="mt-md-1 ">
        <Row className="pt-1 mt-2">
            <Col>
            <h4 className='course_schedule'>Course Schedule</h4>
              <div className='accordion'>    
                  {courseData.map((yearInfo, i) => {
                    return(
                      <div className='profile'>

                        <div className='profile_title' onClick={() => toggle(i)}>
                            <div className={`profile_btn ${selected.includes(i)? 'active' : ''}`}></div>
                            <h3 className={` ${selected.includes(i)? '' : 'inactive'}`}>{`Year ${i+1}`}</h3>
                        </div>

                        <div className={`profile_body ${selected.includes(i) ? 'show' : 'hide'}`}>
                          {/* Schedule for each semester in the year */}
                          <SemesterSchedule semesterInfo={yearInfo[0]}/>
                          <SemesterSchedule semesterInfo={yearInfo[1]}/>
                        </div>
                      </div>
                    )})
                  }
                </div>
            </Col>
          </Row>
      </Container>
  );
}

export default ProfileSchedule;

