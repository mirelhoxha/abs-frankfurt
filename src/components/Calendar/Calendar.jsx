import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import { Container, Dropdown, DropdownButton} from "react-bootstrap";
import { FaFontAwesome, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../shared/style.css';
import { today } from "react-big-calendar/lib/utils/dates";
import Weekdays from "react-calendar/dist/umd/MonthView/Weekdays";
// import "./styles.css";
 import "./Calendar.css";
import Sidebar  from "../Sidebar/Sidebar";

class Calendar extends Component {
  state = {
    events: [
      { title: "C11F", id: "1", icon: "FiSun", time:"18:20 - 06:35"},
      { title: "C21F", id: "2", icon: "FaRegMoon", time:"18:20 - 06:35"},
      { title: "C1F ", id: "3", icon: "FiSun",time:"18:20 - 06:35" },
      { title: "C31F", id: "4", icon: "FaRegMoon",time:"18:20 - 06:35" },
    ]
  };
  

  /**
   * adding dragable properties to external events through javascript
   */
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id
        };
      }
    });
  }
  

  /**
   * when we click on event we are displaying event details
   */
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
      </div>`,

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

  render() {
    function weekDays(day) {
      // const isLoggedIn = props.isLoggedIn;
      if (day==4) {
        return "Sunday";
      }
      if (day==5) {
        return "Monday";
      }
      if (day==6) {
        return "Tuesday";
      }
      if (day==7) {
        return "Wednesday";
      }
      if (day==8) {
        return "Thursday";
      }
      if (day==9) {
        return "Friday";
      }
      if (day==10) {
        return "Saturday";
      }
      return day;
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
                      <Row>
                        <Col>
                        <h3>Service Plan</h3>
                        </Col>

                        <Col>
                          <DropdownButton id="dropdown-basic-button" title="section">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </DropdownButton>
                        </Col>
                    
                        <Col>
                        <DropdownButton id="dropdown-basic-button" title="Month">
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        </Col>
                        <Col>
                        <DropdownButton id="dropdown-basic-button" title="Year">
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        </Col>
                      </Row>
                      
                      
                      </div>
                      <div className="demo-app-calendar" id="mycalendartest">
                        <FullCalendar
                          // defaultView="dayGridMonth"
                          headerToolbar={{ 
                              right: '',
                              left : ''
                          }}

                          rerenderDelay={10}
                          eventDurationEditable={false}
                          editable={true}
                          droppable={true}
                          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                          ref={this.calendarComponentRef}
                          weekends={this.state.calendarWeekends}
                          // Weekday={'long'}
                          events={this.state.calendarEvents}
                          eventDrop={this.drop}
                          // drop={this.drop}
                          dayHeaderFormat={(param) => {
                            console.log(param);
                            return weekDays(param.date.day.toString());
                            
                          }}
                          eventReceive={this.eventReceive}
                          eventClick={this.eventClick}
                
                          // selectable={true}
                        />
                      </div>
                    </Col>
                    <Col lg={3} sm={3} md={3}  >

                      <div
                      className="events"
                        id="external-events"
                        style={{
                          padding: "10px",
                          width: "19%",
                          height: "660px",
                          maxHeight: "-webkit-fill-available"
                        }}
                      >
                        <p align="center">
                          <strong> Available Shifts</strong>
                        </p>
                        {this.state.events.map(event => (
                          <div
                            className="fc-event display-flex"
                            title={event.title}
                            data={event.id}
                            key={event.id}
                            >
                            
                            {event.icon == "FaRegMoon" &&
                            <div className="moon-icon display-flex">
                              <FaRegMoon/>
                              </div>
                            }
                            
                            {event.icon == "FiSun" &&
                              <div className="sun-icon display-flex">
                                <FiSun/>
                              </div>
                            }
                            <div className="display-flex time">
                            {event.title}
                            <br/>
                            {event.time} UHR
                            </div>
                          </div>
                        ))}
                      </div>
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
export default Calendar;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Calendar />, rootElement);
