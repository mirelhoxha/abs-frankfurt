import './AddUser.css';
import { Col, Container, Row } from 'react-bootstrap';
import '../shared/style.css';
import Sidebar from '../Sidebar/Sidebar';
import Item from './item';



function AddUser() {
    return(
        <Container fluid>
        <Row className="app-row">
            <Sidebar />
                <Col className="content">
                    <div className='item-admin'>
                        <h2>User Administration</h2>
                    </div>
                    <div className='item-form'>
                        <Item/>
                    </div>
                </Col>
            </Row>

        </Container>

    );

};
export default AddUser;