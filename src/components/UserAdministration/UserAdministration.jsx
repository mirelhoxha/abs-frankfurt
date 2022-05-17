import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../shared/style.css';
import Sidebar from '../Sidebar/Sidebar';
import Item from './item';
import Search from './search';
import AddUser from './adduser';
// import FormShow from './FormShow';
import './UserAdministration.css';


function UserAdministration() {
    return (
        <Container fluid>
            <Row className="app-row">
                <Sidebar />
                <Col className="content">
                    
                    <Row>
                        <Col lg={5} md={12} sm={12} className="margin-b-2">
                            <div className="">
                                <h2>User Administration</h2>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6} className="margin-b-2">
                            <Search />
                        </Col>
                        <Col lg={3} md={6}  sm={6} className="margin-b-2">
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