import React, { useEffect, useState } from "react";
import { Dropdown, Container, Row, Col, Button, SplitButton } from "react-bootstrap";
import styled, { css } from 'styled-components';
import { FaCalendar, FaSortDown, FaTasks, FaPrint } from "react-icons/fa";
import Calender from './Calender';
import IconHamburger from "../icons/icon-hamburger";
import './AdminDashbord.css';
import '../shared//style.css';

function Header() {
    // const [ items, setItems ] = useState(New);

    return (<>
        <button className="mobile-menu">
            <IconHamburger />
        </button>
        <h2>Dashbord</h2>
        <Dropdown>
            <Dropdown.Toggle variant="defult" id="dropdown-basic">
                <div className='displayFlex'>
                    <span className='calIcon dropdown-icon'>
                        < FaCalendar />
                    </span>
                    <div className="dropdown-date">
                        <h6 className="date-title">Change peroid</h6>
                        <p className='grayColor data-value'>
                            {"01 junuary 2022"}
                        </p>
                    </div>
                    <span className='arrowIcon dropdown-icon'>
                        < FaSortDown />
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
