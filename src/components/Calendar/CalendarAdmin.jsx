import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { FaFontAwesome, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../shared/style.css';
import { today } from "react-big-calendar/lib/utils/dates";
import Weekdays from "react-calendar/dist/umd/MonthView/Weekdays";
import "./Calendar.css";
import Sidebar from "../Sidebar/Sidebar";
import Filter from "./Filter"
import Events from "./Events";
import CalendarTable from "./CalendarTable";

class CalendarAdmin extends Component {
    state = {
        events: [
            { title: "C11F", id: "1", icon: "FiSun", time: "18:20 - 06:35" },
            { title: "C21F", id: "2", icon: "FaRegMoon", time: "18:20 - 06:35" },
            { title: "C1F ", id: "3", icon: "FiSun", time: "18:20 - 06:35" },
            { title: "C31F", id: "4", icon: "FaRegMoon", time: "18:20 - 06:35" },
        ],
        calendarEvents: [
            {
                title: "C11F",
                start: new Date("2022-04-04 00:00"),
                id: "99999998",
                eventId: "FiSun",
            },
            {
                title: "C1F",
                start: new Date("2022-04-05 00:00"),
                id: "99999999",
                eventId: "FiSun",
            }
        ],
    };
    render() {
        function handleYear(e) {
            console.log("year change: " + e.target.value);
        }
        return (
            <Container fluid className="calendar">
                <Row className="app-row">
                    <Sidebar />
                    <Col className="content">
                        <div>
                            <div className="content-wrapper">
                                <div className="animated fadeIn p-4 demo-app">
                                    <Row>
                                        <Col lg={9} sm={9} md={9} className="background-style">
                                            <div>
                                                <Filter title="Service Plan" />
                                            </div>
                                            <div className="demo-app-calendar" id="mycalendartest">
                                                <CalendarTable calendarEvents={this.state.calendarEvents} />
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={3} md={3}  >
                                            <Events events={this.state.events} />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default CalendarAdmin;