import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"

import '../css/profile.css'

// 
function SemesterSchedule({semesterInfo}) {
  console.log(semesterInfo)
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
        <Row>
            <div className='profile_semester'>
              {
                semesterInfo.map((course, idx) => {
                  return (
                    <div className='profile_course'>
                      <h3>{course}</h3>
                      <p>Insert Description...</p>
                    </div>
                  )
                })
              }
            </div>

        </Row>

      </Container>

      </Layout>
  );
}

export default SemesterSchedule;

