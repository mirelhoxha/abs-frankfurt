import React, { useEffect, useState } from "react";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";
import Content from "./Content";
import './AdminDashbord.css';
import '../shared/style.css';
import "react-circular-progressbar/dist/styles.css";

function AdminDashbord() {
    // const [ items, setItems ] = useState(New);
    return (
        <Container fluid>
            <Row className="app-row bg-blue">
                <Sidebar />
                <Col className="content bg-gray">
                    <div>
                        <div className="top-bar-admin flex-row">
                            <Header />
                        </div>
                        <div className="content-wrapper">
                            <Content />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminDashbord;
