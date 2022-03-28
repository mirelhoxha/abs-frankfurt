import React, { useEffect, useState } from "react";
import { Dropdown, Container,Row, Col, Button, SplitButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styled, { css } from 'styled-components';
import { FaCalendar, FaSortDown, FaTasks, FaPrint } from "react-icons/fa";
import './AdminDashbord.css';
import Calender from './Calender';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import  Chart  from "./Chart";
import IconColorize from "../icons/icon-colorize";
import IconStar from "../icons/icon-star";


function AdminDashbord() {
    const percentage = 66;
    const plans =[
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
        
        <>
          <style>{`
        .red {color: red}
        .green {color: green}
      `}</style>
        <div className="headerSyle" >
            <div  className=" displayFlex">
                <h1 >Dashbord</h1>
                <span>
                <Dropdown>
                    <Dropdown.Toggle variant="defult" id="dropdown-basic">
                        <div className='displayFlex'>
                                <span className='calIcon'>
                                < FaCalendar/> 
                                </span>
                                <div>
                                    <h6>Change peroid</h6>

                                    <h6 className='grayColor'>
                                        { "01 junuary 2022"}
                                    </h6>

                                </div>
                                <span className='arrowIcon'>
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
                </span>
                
            </div>

        <Row>
            <Col lg={3} md={6} sm={12} xs={12}>
                <div className="summaryContent chart">     
                    <div className="chartContent ">
                        <h3 className="m-2">
                            shift relation</h3>
                            <Chart />
                    </div>

                </div>
            </Col>

            <Col lg={9} md={6} sm={12} className="marginTop">
            <Row>
                <Col lg={4} sm={12}>
                    <div className="summaryContent displayFlex progress">     
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
                    <div className="summaryContent displayFlex progress">     
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
                    <div className="summaryContent displayFlex progress">     
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
                <Col lg={12} sm={12}>
                <div className="WishList">
                        <h3 className="">New Wish Service Plans</h3>
                        <div className="">
                            {plans.map((plan) => (
                            <div >
                                <div className="displayFlex wishListDisplay">
                                    <div className="images displayFlex" >
                                        <div>
                                        <img src={"./icons.png"} alt="Logo" width="63"/>
                                        </div>
                                       
                                        <div className={isActive ? "inactive" : "active"}>
                                        <IconStar onClick={ToggleClass} />
                                        </div>
                                        
                                    </div>
                                    <div className="contentDetail">
                                        <h6 className="contentTitle">{plan.name} {" -"} {plan.station} </h6>
                                        <span>{plan.station}</span>

                                        <h6>
                                        {plan.description}
                                        </h6>
                                    </div>
                                    <div className="FaPrint">
                                        <FaPrint/>
                                    </div>
                                
                                </div>
                                <hr />
                            </div>
                            
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
            </Row>
            </Col>
        </Row>



            

        </div>
        </>
     );
}

export default AdminDashbord;