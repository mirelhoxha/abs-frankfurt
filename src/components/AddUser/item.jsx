import {Form, Row, Col, Button, Figure, } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import { BsFillCameraFill } from "react-icons/bs";
import { FaArrowLeft } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
//import Figure from 'react-bootstrap/Figure';
import './item.css';


const Item = () => {
    return(
    <div className='item'>
        <Row>
            <Row>
                <Col lg={1} md={1} sm={1} className='col-arrow'>
                   <FaArrowLeft className='icon-arrow' /> 
                </Col>
                <Col lg={10} md={10} sm={10} className='col-title'> 
                    <h3>General Information</h3>
                </Col>
                <Col lg={1} md={1} sm={1} className='col-threedots'>
                    <BsThreeDotsVertical className='icon-threedots'/>
                </Col>
            </Row>
            <Row>
                <hr className='item-hr' />
            </Row>
            <div className='information'>
            <span><h3>Information</h3></span>
            </div>
            <Col >
                <Form className='form-item'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFisrtName">
                            <Form.Label className='text-color' >FIRST NAME</Form.Label>
                            <Form.Control className='form-size' type="text" placeholder="Samuel" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label className='text-color'>LAST NAME</Form.Label>
                            <Form.Control className='form-size' type="text" placeholder="chen" />
                        </Form.Group>
                    </Row>
                        
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridQualification">
                            <Form.Label className='text-color'>QUALIFICATION</Form.Label>
                            <Form.Select className='form-size' defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Paramedic</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMainStation">
                            <Form.Label className='text-color'>MAIN STATION</Form.Label>
                            <Form.Select className='form-size' defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Fire and Rescue Station</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    
                    <div className='contact-details'>
                        <span><h4>Contact Details</h4></span>
                    </div>
                    
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className='text-color'>E-MAIL</Form.Label>
                            <Form.Control className='form-size' type="email" placeholder="samuelchen@mail.com" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label className='text-color'>PHONE</Form.Label>
                            <Form.Control className='form-size' type="number" placeholder="+21 33456 7256" />
                        </Form.Group>
                    </Row>
                    <div className='employment-details'>
                    <span><h4>Employment Details</h4></span>
                    </div>
                    <Row >
                        
                        <Form.Group as={Col} controlId="formGridType">
                            <Form.Label className='text-color'>TYPE OF EMPLOYMENT</Form.Label>
                            <Form.Select className='form-size' defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Full time</option>
                            </Form.Select>
                        </Form.Group>
                        
                        
                        <Form.Group as={Col} controlId="formGridWorkingTime">
                            <Form.Label className='text-color'>WEEKLY WORKING TIME</Form.Label>
                            <Form.Control className='form-size' type="text" placeholder="38.5 Hours" />
                        </Form.Group>
                    </Row>
                </Form>
            </Col>

            <Col className='col-2'>
                <Row >
                    <span className='text-color' ><h6>PROFILE PICTURE</h6></span>
                </Row>
                <Row>
                    <div className="card-item">
                        <img src="./profile.PNG" />
                    {/* <svg data-layer="cdf2c640-ca2a-4484-a49f-8eef64a95e7d" preserveAspectRatio="none" viewBox="-0.75 -0.75 256.5 308.5" class="placeholder31b7e206"><path d="M 14 0 L 241 0 C 248.7319946289062 0 255 6.268013000488281 255 14 L 255 293 C 255 300.7319946289062 248.7319946289062 307 241 307 L 14 307 C 6.268013000488281 307 0 300.7319946289062 0 293 L 0 14 C 0 6.268013000488281 6.268013000488281 0 14 0 Z"></path></svg> */}
                        {/*<Figure>
                            <Figure.Image width={256} height={308} alt="" src='' />
                        </Figure>*/}
                        {/*<Card className='card' border="light" variant="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <placeholder
                                className='place-holder'>11111</placeholder>

                            </Card.Body>
                        </Card>*/}
                    </div> 
                </Row>
                
                <Row>
                    <button className='camera-button'>
                        <Row>
                            <Col> <BsFillCameraFill className='icon-camera'/> </Col>
                            <Col> <h6 className='choose-file'>CHOOSE FILE</h6></Col>
                        </Row>
                    </button>
                </Row>
                <Row>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    className='check-box'
                                    inline
                                    label="NEF"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    className='check-box'
                                    inline
                                    label="INT"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    className='check-box'
                                    label="Admin"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                </div>
                            ))}
                        </Form>
                </Row>
                <Row>
                    <button className='add-button'>
                        <Row>
                            <Col> <FaUserPlus className='icon'/> </Col>
                            <Col> <h6 className='add'><strong>ADD USER</strong></h6></Col>
                        </Row>
                    </button>
                </Row>
            </Col>
        </Row>

    </div>

    );

};
export default Item;