import React, { useState } from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Item from './item';
import Search from './search';
import AddUser from './adduser';
import '../shared/style.css';
import './UserAdministration.css';

function UserAdministration() {
    return (
        <Container fluid>
            <Row className="app-row">
                <Sidebar />
                <Col className="content">
                    <Row>
                        <Col lg={5} md={12} sm={12}>
                            <h2>User Administration</h2>
                        </Col>
                        <Col lg={5} md={6} sm={6}>
                            <Search />
                        </Col>
                        <Col lg={2} md={6} sm={6}>
                            <AddUser />
                        </Col>
                    </Row>
                    <div className="content-wrapper">
                        <Item />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default UserAdministration;