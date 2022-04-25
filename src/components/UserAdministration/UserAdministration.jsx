import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../shared/style.css';
import Sidebar from '../Sidebar/Sidebar';
import Item from './item';
import Search from './search';
import AddUser from './adduser';
import FormShow from './FormShow';


function UserAdministration() {
    return (
        <Container fluid>
            <Row className="app-row">
                <Sidebar />
                <Col className="content">
                    
                    <Row>
                        <Col>
                            <div className="top-bar">
                                <h2>User Administration</h2>
                            </div>
                        </Col>
                        <Col>
                        <Search />
                        </Col>
                        <Col>
                            <AddUser />
                        </Col>

                        
                        {/* <AddUser /> */}
                    </Row>
                    <div className="content-wrapper">
                        <Item />
                        {/* <FormShow /> */}

                    </div>
                </Col>

            </Row>
        </Container>

    );

}
export default UserAdministration;