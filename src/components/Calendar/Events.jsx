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


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: props.events
        }
    }

    render() {
        return (
            < >
                <div
                    className="events"
                    id="external-events"
                    style={{
                        padding: "10px",
                        width: "19%",
                        height: "92%",
                        maxHeight: "-webkit-fill-available"
                    }}
                >
                    <p align="center">
                        <strong> Available Shifts</strong>
                    </p>
                    {this.state.events.map(event => (
                        <div
                            className="fc-event event-display-flex"
                            title={event.title}
                            data={event.id}
                            key={event.id}
                        >

                            {event.icon == "FaRegMoon" &&
                                <div className="moon-icon event-display-flex">
                                    <FaRegMoon />
                                </div>
                            }

                            {event.icon == "FiSun" &&
                                <div className="sun-icon event-display-flex">
                                    <FiSun />
                                </div>
                            }
                            <div className="event-display-flex time">
                                {event.title}
                                <br />
                                {event.time} UHR
                            </div>
                        </div>
                    ))}
                </div>
            </>

        );
    }
}
export default Events;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Calendar />, rootElement);
