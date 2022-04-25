import './adduser.css';
import IconAddUser from '../icons/icon-adduser';
import { Col , Row} from 'react-bootstrap';


const AddUser = () => {
    return (
        <div>
            <button className='add-button'>
                <Row>
                    <Col> <IconAddUser /> </Col>
                    <Col> <h6>Add User</h6></Col>
                </Row>
                
                
            </button>

        </div>
    );
};
export default AddUser;