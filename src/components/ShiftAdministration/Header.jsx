import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Dropdown, DropdownButton} from "react-bootstrap";
import { FaFontAwesome, FaRegMoon } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import '../shared/style.css';
 import "./ShiftAdministration";
 

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
            <Col  lg={3} md={3} sm={12}>
            <h3 className="header-title">{this.props.title}</h3>
            </Col>
            <Col lg={9} md={9} sm={12} className="align-r">
            <button className='buttons '>
                {/* <Row> */}
                <div className="disply-flex">
                     <BiPlusMedical className="icon" /> <h6>Add Shift</h6>
                {/* </Row> */}
                </div>
            </button>
            <button className='buttons '>
                <div className="disply-flex">
                 <BiPlusMedical />
                <h6>Delete Shift</h6>
                </div>
            </button>
            </Col>

          </Row>
      </>
      
    );
  }
}
export default Filter;

