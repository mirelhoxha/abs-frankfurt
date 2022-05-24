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
import "./ShiftAdministration.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header"
import ShiftList from "./ShiftList";
import ShiftTable from "./ShiftTable";

class ShiftAdministration extends Component {

    render() {
        function handleYear(e) {
            console.log("year change: " + e.target.value);
        }
        return (
            <Container fluid className="calendar">
                <Row className="app-row">
                    <Sidebar />
                    <Col className="content">
                        <div className="content-wrapper">
                            <div className="animated fadeIn p-4 demo-app">
                                <Row>
                                    <Col lg={3} sm={12} md={3} className="">
                                        <ShiftList />
                                    </Col>
                                    <Col lg={9} sm={12} md={9} className="">
                                        <div>
                                            <Header title="Shifts" />
                                        </div>
                                        <div className="demo-app-calendar" id="mycalendartest">
                                            <ShiftTable />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ShiftAdministration;