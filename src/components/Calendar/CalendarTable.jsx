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
import { today } from "react-big-calendar/lib/utils/dates";
import Weekdays from "react-calendar/dist/umd/MonthView/Weekdays";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../shared/style.css';
import "./Calendar.css";

class CalendarTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            calendarEvents: props.calendarEvents
        }
    }

    componentDidMount() {
        if (document.getElementById("external-events")) {
            let draggableEl = document.getElementById("external-events");
            new Draggable(draggableEl, {
                itemSelector: ".fc-event",
                eventData: function (eventEl) {
                    let title = eventEl.getAttribute("title");
                    let id = eventEl.getAttribute("data");
                    let icon = eventEl.getAttribute("icon");
                    return {
                        title: title,
                        id: id,
                        icon: icon
                    };
                }
            });
        }
    }


    eventClick = eventClick => {
        Alert.fire({
            title: eventClick.event.title,
            html:
                `<div class="table-responsive">
                    <table class="table">
                    <tbody>
                    <tr >
                    <td>Title</td>
                    <td><strong>` +
                    eventClick.event.title +
                    `</strong></td>
                    </tr>
                    <tr >
                    <td>Start Time</td>
                    <td><strong>
                    ` +
                    eventClick.event.start +
                    `
                    </strong></td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                `,
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Remove Event",
            cancelButtonText: "Close"
        }).then(result => {
            if (result.value) {
                eventClick.event.remove(); // It will remove event from the calendar
                Alert.fire("Deleted!", "Your Event has been deleted.", "success");
            }
        });
    };
    // function renderEventContent(eventInfo) {
    //   return (
    //     <>
    //       <b>{eventInfo.timeText}</b>
    //       <i>{eventInfo.event.title}</i>
    //     </>
    //   )
    // }
    render() {
        function renderEventContent(calendarEvents) {
            return (
                <>
                    <b className="align-right"><FiSun /></b>
                    <i>{calendarEvents[0].title}</i>
                </>
            )
        }
        function weekDays(day) {
            // const isLoggedIn = props.isLoggedIn;
            if (day == 4) {
                return "Sunday";
            }
            if (day == 5) {
                return "Monday";
            }
            if (day == 6) {
                return "Tuesday";
            }
            if (day == 7) {
                return "Wednesday";
            }
            if (day == 8) {
                return "Thursday";
            }
            if (day == 9) {
                return "Friday";
            }
            if (day == 10) {
                return "Saturday";
            }
            return day;
        }
        function handleYear(e) {
            console.log("year change: " + e.target.value);
        }
        return (
            <>
                <FullCalendar
                    headerToolbar={{
                        right: '',
                        left: ''
                    }}
                    rerenderDelay={10}
                    eventDurationEditable={false}
                    editable={true}
                    droppable={true}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.state.calendarEvents}
                    eventContent={renderEventContent(this.state.calendarEvents)}
                    // console.log();
                    eventDrop={this.drop}
                    drop={(param) => {
                        console.log(this.state.calendarEvents)
                    }}
                    dayHeaderFormat={(param) => {
                        return weekDays(param.date.day.toString());
                    }}
                    eventReceive={this.eventReceive}
                    eventClick={this.eventClick}
                />
            </>

        );
    }
}
export default CalendarTable;

