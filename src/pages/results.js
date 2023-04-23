import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout"
import MySelect from "../components/MySelect"
import SearchData from '../data/searchData.json'
import SearchResult from '../components/SearchResult'
import {navigate} from 'gatsby'


import '../css/searchResult.css'

function handleResultClick() {
  navigate('/profile')
}

function get_labels(majors) {
  var labels = []
  majors.forEach((major) => {
    labels.push(major[0])
  })
  console.log("labels",labels)
  return labels
}

function MajorContainer(props) {
  return (
    <Row className="pt-1 mt-5">
      <h3>{props.major}</h3>
      <div className="searchResults_container">
        {Array.from(props.users).map((user) => (
            <SearchResult data={user} onClick={handleResultClick}></SearchResult>
        ))}
      </div>
    </Row>
  )
}

function check_keys(str,dict) {
  for(let s in dict){
    if(str.includes(s)){
      return s
    }
  }
  return ""
}

function get_majors(users) {
  var all_majors = {"Electrical Engineering":[], "Business Administration":[], "Information Systems":[]}
  users.forEach(
    function(user,index) {
      console.log(user);
      var r = user.major
      r.forEach(
        function(indMajor,index) {
          var k = check_keys(indMajor,all_majors)
          if(k!=="") {
              all_majors[k].push(user)
            }
        }
      )
    }
  )
  return Object.entries(all_majors)
}

function get_options(majors) {
  var ops = []
  majors.forEach((r) => {
    ops.push({ "label":r[0],"value":r })
  })
  return ops;
}
class UserListTemplate extends React.Component {

  constructor(props) {
    console.log("majors", window.history.state.majors);
    super(props)
    const { data } = this.props
    const majors = get_majors(data.students)
    // const majors = window.history.state.majors
    const ops = get_options(majors)
    this.state = {
      majors: window.history.state.majors,
      options:ops
    }
    // this.state = {
    //   majors: [window.history.state.majors[0]],
    //   options: ops
    // }

    this.setMajors = this.setMajors.bind(this)
    console.log(this.state.options)
  }

  setMajors(input) {
    this.setState({majors:input})
  }

  render() {
    return (
      <Layout>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Search For Students by Major</h1>
            </Col>
          </Row>


        <Container className="mt-2">
          <MySelect
            className="searchbar"
            options={this.state.options}
            isMulti
            onChange={this.setMajors}
            allowSelectAll = {true}
            value={this.state.majors}
            placeholder="See all our majors"
          />
            {this.state.majors.map((m) => (
              <MajorContainer
                major = {m["value"][0]}
                users = {m["value"][1]}
              />
            ))}
        </Container>
      </Container>

      </Layout>       
      
    );
  }
}

export default function UserList() {
  return(
  <UserListTemplate data={SearchData} />)
};

