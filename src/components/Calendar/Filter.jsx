import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Dropdown, DropdownButton} from "react-bootstrap";
import { FaFontAwesome, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import '../shared/style.css';
 import "./Calendar.css";

class Filter extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    function handleYear(e) {
      console.log("year change: " + e.target.value);
    }
    return (
        <>
          <Row>
            <Col>
            <h3>{this.props.title}</h3>
            </Col>
            {this.props.filter ? (
              
              <select id="dropdown-basic-button" title="User" className="select-box">
                <option >Action</option>
                <option >Another action</option>
                <option >Something else</option>
              </select>
            ):""}

            {/* <Col className="align-right"> */}
              <select id="dropdown-basic-button" title="section" className="select-box">
                <option >Action</option>
                <option >Another action</option>
                <option >Something else</option>
              </select>
            {/* </Col> */}
        
            {/* <Col className="align-right"> */}
            <select id="dropdown-basic-button" className="select-box" title="month" onChange={(e) => handleYear(e)}>
              <option value="01">Jun</option>
              <option value="02">Feb</option>
              <option value="03">March</option>
            </select>
            {/* </Col> */}
            {/* <Col className="align-right"> */}
            <select id="dropdown-basic-button" className="select-box select-year" title="Year">
              <option >2022</option>
              <option >2021</option>
              <option >2000</option>
            </select>
            {/* </Col> */}
            
          </Row>
      </>
      
    );
  }
}
export default Filter;

