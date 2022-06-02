import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Chart from "./Chart";
import IconStar from "../icons/icon-star";
import { HiMail } from "react-icons/hi";
import './AdminDashbord-test';
import "react-circular-progressbar/dist/styles.css";

function Content() {
    const percentage = 66;
    const items = [
        {
            name: " John Doe ",
            station: "Fire and Rescue Station 1",
            title: "New Wish Service Plan 384 - John Doe für 02 / 2022",
            description: "New Wish Service Plan 384 - John Doe für 02 / 2022Fire and Rescue Station 1John DoeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ..."

        },
        {
            name: " John Doe ",
            station: "Fire and Rescue Station 1",
            title: "New Wish Service Plan 384 - John Doe für 02 / 2022",
            description: "New Wish Service Plan 384 - John Doe für 02 / 2022Fire and Rescue Station 1John DoeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ..."

        },
        {
            name: " John Doe ",
            station: "Fire and Rescue Station 1",
            title: "New Wish Service Plan 384 - John Doe für 02 / 2022",
            description: "New Wish Service Plan 384 - John Doe für 02 / 2022Fire and Rescue Station 1John DoeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ..."

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
                        <div className="chartContent">
                            <h4 className="chart-title">
                                Shift relationship
                            </h4>
                            <div>
                                <Chart />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={9} md={6} sm={12} xs={12} className="marginTop">
                    <Row>
                        <Col lg={4} sm={12} xs={12}>
                            <div className="summaryContent displayFlex ">
                                <div className="prograssBar">
                                    <CircularProgressbar
                                        styles={buildStyles({ trailColor: 'rgb(201 205 250)', pathColor: 'rgb(36 49 184)', textSize: "14px" })}
                                        value={percentage}
                                        text={`${percentage}%`}
                                        strokeWidth='14'
                                    />
                                </div>
                                <div className="prograssBarContent">
                                    <h2>215</h2>
                                    <h6>unoccupied Shifts</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="summaryContent displayFlex ">
                                <div className="prograssBar">
                                    <CircularProgressbar
                                        styles={buildStyles({ trailColor: 'rgb(223 237 242)', pathColor: 'rgb(114 160 163)', textSize: "14px" })}
                                        value={percentage}
                                        text={`${percentage}%`}
                                        strokeWidth='14'
                                    />
                                </div>
                                <div className="prograssBarContent">
                                    <h2>84</h2>
                                    <h6>fulfilled Duty</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="summaryContent displayFlex ">
                                <div className="prograssBar">
                                    <div className="iconMail">
                                        <HiMail />
                                    </div>
                                </div>
                                <div className="prograssBarContent">
                                    <h2>59</h2>
                                    <h6>new requests</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} sm={12}>
                            <div className="WishList">
                                <span className="w-title">New Wish Service Plans</span>
                                {items.map((item) => (
                                    <div>
                                        <div className="displayFlex">
                                            <div className="images displayFlex">
                                                <div className={isActive ? "inactive" : "active"}>
                                                    <IconStar onClick={ToggleClass} />
                                                </div>
                                                <div>
                                                    <img src="./icons.png" alt="Logo" />
                                                </div>
                                            </div>
                                            <div className="contentDetail">
                                                <h6 className="contentTitle">{item.name} {" -"} {item.station} </h6>
                                                <span className="contentBody">{item.title}</span>
                                                <h6 className="contentDescription">
                                                    {item.description}
                                                </h6>
                                            </div>
                                            <div className="FaPrint">
                                                <FaPrint />
                                            </div>
                                        </div>
                                        <hr className="line"></hr>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Content;