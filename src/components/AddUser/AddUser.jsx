import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import UserForm from './UserForm';

import '../shared/style.css';
import './AddUser.css';

function AddUser() {
    return (
        <Container fluid>
            <Row className="app-row">
                <Sidebar />
                <Col className="content">
                    <div className='item-admin'>
                        <h2>User Administration</h2>
                    </div>
                    <div>
                        <Col lg={9} md={9} sm={12}>
                            <UserForm />
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default AddUser;