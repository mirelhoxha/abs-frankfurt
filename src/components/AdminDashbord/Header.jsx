import React, { useEffect, useState } from "react";
import { Dropdown, Container,Row, Col, Button, SplitButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styled, { css } from 'styled-components';
import { FaCalendar, FaSortDown, FaTasks, FaPrint } from "react-icons/fa";
import './AdminDashbord.css';
import '../shared//style.css';
import Calender from './Calender';
import IconHamburger from "../icons/icon-hamburger";


function Header() {

// const [ items, setItems ] = useState(New);
    return (<>
    <button className="mobile-menu">
        <IconHamburger />
    </button>
        <h2><strong>Dashbord</strong></h2>
        <Dropdown>
            <Dropdown.Toggle variant="defult" id="dropdown-basic">
                <div className='displayFlex'>
                        <span className='calIcon dropdown-icon'>
                        < FaCalendar/> 
                        </span>
                        <div>
                            <h6 className="dropdown-date" >Change peroid</h6>
                            <h6 className='grayColor dropdown-date'>
                                { "01 junuary 2022"}
                            </h6>
                        </div>
                        <span className='arrowIcon dropdown-icon'>
                        < FaSortDown/> 
                        </span>
                    </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item >
                <Calender />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
     </>
    );
  }

export default Header;
