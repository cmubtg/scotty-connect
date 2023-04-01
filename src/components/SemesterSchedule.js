import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"

import '../css/profile.css'

// 
function SemesterSchedule({semesterInfo}) {
  return (
    <Layout>
      <Container className="mt-md-1 pt-md-4">
            <h1>Semester</h1>
            {
                semesterInfo.map((i, course) => {
                    <h3>{course}</h3>
                })
            }
      </Container>

      </Layout>
  );
}

export default SemesterSchedule;

