import IconAddUser from '../icons/icon-adduser';
import { Col, Row } from 'react-bootstrap';
import './adduser.css';

const AddUser = () => {
    return (
        <div>
            <button className='btn-add-user'>
                <Row>
                    <Col> <IconAddUser /> </Col>
                    <Col> <h6>Add User</h6></Col>
                </Row>
            </button>
        </div>
    );
};
export default AddUser;