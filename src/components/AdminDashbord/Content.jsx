import React, { useEffect, useState } from "react";
import { Dropdown, Container,Row, Col, Button, SplitButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styled, { css } from 'styled-components';
import { FaCalendar, FaSortDown, FaTasks, FaPrint } from "react-icons/fa";
import './AdminDashbord-test';
import Calender from './Calender';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import  Chart  from "./Chart";
import IconColorize from "../icons/icon-colorize";
import IconStar from "../icons/icon-star";
import { HiMail } from "react-icons/hi";
import IconContact from "../icons/icon-contact";
import Item from '../UserDashbord/item';
import New from '../../lib/new.json';
import IconBus from "../icons/icon-bus";


function Content() {


    const percentage = 66;
    const items =[
        {
            name:" John Doe ",
            station:"Fire and Rescue Station 1John Doe",
            title:"New Wish Service Plan 384 - John Doe für 02 / 2022",
            description :"New Wish Service Plan 384 - John Doe für 02 / 2022Fire and Rescue Station 1John DoeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ..."

        },
        {
            name:" John Doe ",
            station:"Fire and Rescue Station 1John Doe",
            title:"New Wish Service Plan 384 - John Doe für 02 / 2022",
            description :"New Wish Service Plan 384 - John Doe für 02 / 2022Fire and Rescue Station 1John DoeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ..."

        },
        {
            name:" John Doe ",
            station:"Fire and Rescue Station 1John Doe",
            title:"New Wish Service Plan 384 - John Doe für 02 / 2022",
            description :"New Wish Service Plan 384 - John Doe für 02 / 2022Fire and Rescue Station 1John DoeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ..."

        }
    ];
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
      setActive(!isActive);
    };
    return ( 
        <div className="admin-dashbord">
        <Row>
            <Col lg={3} md={6} sm={12} xs={12}>
                <div className="summaryContent chart">     
                    <div className="chartContent ">
                        <h4 className="padding">
                            shift relation
                        </h4>
                            <div>
                            <Chart/>
                            </div>
                            
                    </div>

                </div>
            </Col>

            <Col lg={9} md={6} sm={12} className="marginTop">
            <Row>
                <Col lg={4} sm={12}>
                    <div className="summaryContent displayFlex ">     
                        <div className="prograssBar">
                        <CircularProgressbar
                        styles={buildStyles({trailColor:'lightblue',pathColor:'darkblue',textSize: "14px"})}
                                value={percentage}
                                text={`${percentage}%`}
                                strokeWidth='12'
                            
                            />
                        </div>
                        <div className="prograssBarContent">
                            <h2 >215</h2>
                            <h6 >unoccupied Shifts</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={4} sm={12}>
                    <div className="summaryContent displayFlex ">     
                        <div className="prograssBar">
                        <CircularProgressbar
                        styles={buildStyles({trailColor:'lightblue',pathColor:'darkblue',textSize: "14px"})}
                                value={percentage}
                                text={`${percentage}%`}
                                strokeWidth='12'
                            
                            />
                        </div>
                        <div className="prograssBarContent">
                            <h2 >285</h2>
                            <h6 >unoccupied Shifts</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={4} sm={12}>
                    <div className="summaryContent displayFlex ">     
                        <div className="prograssBar">
                            <div className="iconMail">
                                <HiMail/>
                            </div>
                        
                        </div>
                        <div className="prograssBarContent">
                            <h2 >295</h2>
                            <h6 >unoccupied Shifts</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={12} sm={12}>
                <div className="WishList">
                <span className="padding">New Wish Service Plans</span>
                {items.map((item) => (
                <div>
                <div className="displayFlex ">
                    <div className="images displayFlex" >
                        <div className={isActive ? "inactive" : "active"}>
                        <IconStar onClick={ToggleClass} />
                        </div>
                        <div>
                        <img src={"./icons.png"} alt="Logo" width="53"/>
                        </div>  
                    </div>
                    <div className="contentDetail">
                        <h6 className="contentTitle">{item.name} {" -"} {item.station} </h6>
                        <span>{item.station}</span>

                        <h6>
                        {item.description}
                        </h6>
                    </div>
                    <div className="FaPrint">
                        <FaPrint/>
                    </div>
                </div>
                   
                    <hr className="line"></hr>
                </div>
               
                
                ))}
                </div>
                </Col>
            </Row>
            <Row>
            </Row>
            </Col>
        </Row>
        </div>
     );
}

export default Content;