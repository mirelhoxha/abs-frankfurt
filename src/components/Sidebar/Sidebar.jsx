import { Col, ListGroup, ProgressBar } from "react-bootstrap";
// import Chart from "./chart";
import Fj from "./fj";
import IconArchive from "../icons/icon-archive";
import IconCalendar from "../icons/icon-calendar";
import IconContact from "../icons/icon-contact";
import IconDashboard from "../icons/icon-dashboard";
import IconRejected from "../icons/icon-rejected";
import Logo from "./logo";

const Sidebar = () => {
    return <Col lg={2} className="sidebar">
    <div className="logo-wrapper">
      <Logo />
      <button className="close-drawer">
          <IconRejected />
      </button>
    </div>
    <div>
      <ListGroup>
        <ListGroup.Item active>
          <IconDashboard />
          <span>Dashboard</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <IconCalendar />
          <span>Calendar</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <IconArchive />
          <span>Archive</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
    <div>
      <p>Evaluation of duty schedule</p>
    </div>
    <div className="chart-wrapper">
      {/* <Chart /> */}
    </div>
    <Fj />
    <div>
      <span className="info">
        <span className="name">Franklin Jr.</span>
        <span className="type">Paramedic</span>
      </span>
      <ProgressBar now={ 25 } />
      <div className="contact">
        <IconContact />
        <span>Contact Support</span>
      </div>
      <div className="copyright">
        © Yannik Herrmann & Langer and Friends Holding GmbH 2022
      </div>
    </div>
  </Col>;
};
export default Sidebar;