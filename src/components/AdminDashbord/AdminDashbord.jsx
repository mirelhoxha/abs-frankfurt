import React, { useEffect, useState } from "react";
import { Dropdown, Container,Row, Col, Button, SplitButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styled, { css } from 'styled-components';
import { FaCalendar, FaSortDown, FaTasks, FaPrint } from "react-icons/fa";
import './AdminDashbord.css';
import '../shared/style.css';
import Calender from './Calender';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import  Chart  from "./Chart";
import IconColorize from "../icons/icon-colorize";
import IconStar from "../icons/icon-star";
import { HiMail } from "react-icons/hi";
import Sidebar  from "../Sidebar/Sidebar";

import IconHamburger from "../icons/icon-hamburger";
import IconNew from "../icons/icon-new";
import IconRejected from "../icons/icon-rejected";
import Header from "./Header";
import Content from "./Content";




function AdminDashbord() {
// const [ items, setItems ] = useState(New);
    return (
      <Container fluid className="bg-blue">
        <Row className="app-row">
          <Sidebar />
          <Col className="content bg-gray">
            <div>
                <div className="top-bar flex-row ">
                    <Header/>
                    
                </div>
              
                <div className="content-wrapper">
                <Content/>
                </div>
              
            </div>
            
          </Col>
        </Row>
      </Container>
    );
  }

export default AdminDashbord;
