import { Form, Row, Col, Button, Figure, } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { BsFillCameraFill } from "react-icons/bs";
import { FaArrowLeft } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
//import Figure from 'react-bootstrap/Figure';
import './UserForm.css';

const Item = () => {
    return (
        <Row className='user-form'>
            <Col lg={12} className='form-header'>
                <Row>
                    <Col lg={1} className='col-arrow'>
                        <FaArrowLeft className='icon-arrow' />
                    </Col>
                    <Col lg={10} className='col-title'>
                        <h3>General Information</h3>
                    </Col>
                    <Col lg={1} className='col-threedots'>
                        <BsThreeDotsVertical className='icon-threedots' />
                    </Col>
                </Row>
            </Col>
            <Col lg={12} className='form-body'>
                <Form className='form-item'>
                    <Col lg={12} className='information'>
                        <span><h3>Information</h3></span>
                    </Col>
                    <Row>
                        <Col>
                            <Row className="mt-20">
                                <Form.Group as={Col} controlId="formGridFisrtName">
                                    <Form.Label className='form-label'>FIRST NAME</Form.Label>
                                    <Form.Control className='form-input' type="text" placeholder="Samuel" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label className='form-label'>LAST NAME</Form.Label>
                                    <Form.Control className='form-input' type="text" placeholder="chen" />
                                </Form.Group>
                            </Row>
                            <Row className="mt-20">
                                <Form.Group as={Col} controlId="formGridQualification">
                                    <Form.Label className='form-label'>QUALIFICATION</Form.Label>
                                    <Form.Select className='form-input' defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Paramedic</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridMainStation">
                                    <Form.Label className='form-label'>MAIN STATION</Form.Label>
                                    <Form.Select className='form-input' defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Fire and Rescue Station</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Col lg={12} className='contact-details'>
                                <span><h4>Contact Details</h4></span>
                            </Col>

                            <Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='form-label'>E-MAIL</Form.Label>
                                    <Form.Control className='form-input' type="email" placeholder="samuelchen@mail.com" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label className='form-label'>PHONE</Form.Label>
                                    <Form.Control className='form-input' type="number" placeholder="+21 33456 7256" />
                                </Form.Group>
                            </Row>
                            <Col lg={12} className='employment-details'>
                                <span><h4>Employment Details</h4></span>
                            </Col>
                            <Row >
                                <Form.Group as={Col} controlId="formGridType">
                                    <Form.Label className='form-label'>TYPE OF EMPLOYMENT</Form.Label>
                                    <Form.Select className='form-input' defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Full time</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridWorkingTime">
                                    <Form.Label className='form-label'>WEEKLY WORKING TIME</Form.Label>
                                    <Form.Control className='form-input' type="text" placeholder="38.5 Hours" />
                                </Form.Group>
                            </Row>
                        </Col>

                        <Col className='col-3'>
                            <Row>
                                <Col lg={12}>
                                    <span className='form-label'><h6>PROFILE PICTURE</h6></span>
                                </Col>
                                <Col lg={12} className="profile-image-container">
                                    <img className='profile-image' src="./profile.PNG" />
                                    <Col lg={12}>
                                        <button className='btn-camera'>
                                            <Row>
                                                <Col> <BsFillCameraFill className='icon' /> </Col>
                                                <Col> <h6 className='text'>CHOOSE FILE</h6></Col>
                                            </Row>
                                        </button>
                                    </Col>
                                    <Col lg={12}>
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="mt-20">
                                                <Form.Check className='check-box' inline
                                                    label="NEF" name="group1" type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check className='check-box' inline
                                                    label="INT" name="group1"
                                                    type={type} id={`inline-${type}-2`}
                                                />
                                                <Form.Check className='check-box' inline
                                                    label="Admin" name="group1"
                                                    type={type} id={`inline-${type}-3`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Col>
                                <Col lg={12}>
                                    <button className='btn-add'>
                                        <Row>
                                            <Col lg={3}><FaUserPlus className='icon' /> </Col>
                                            <Col lg={9}><p className='text'>ADD USER</p></Col>
                                        </Row>
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );

};
export default Item;