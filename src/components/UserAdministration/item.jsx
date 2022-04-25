import IconThreeDot from "../icons/icon-threedot";
import './item.css';
import IconRw1 from "../icons/icon-rw1";
import IconPhone from "../icons/icon-phone";
import { Col ,Row } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const Item = () => {
    const items =[
        {
            name: "Angela Moss",
        },
        {
            name: "Angela ",
        },
        {
            name: "Angela ",
        },
        {
            name: "Angela ",
        },
        {
            name: "Angela ",
        }
    ]
    return (
    <>
      <Row >
         {items.map((plan) => (
           
            <Col lg={3} md={3} className="m-b">
                <div className="margin-right">
                <div className="profile">
                    
                    <img src="/images/placeholderAm.png" className="profile-size" />
                    <BiDotsVerticalRounded className="icon-dot" />
                    <div className="box">
                    {/* <IconRw1 /> */}
                        <span >RW1</span>
                    </div>
                </div>
                <div className="title">
                        Angela Moss
                </div>
                <div className="sub-title">
                        Paramedic
                </div>
                    <Row className="footer">
                        <Col className="icon-width ">
                        <HiMail  className="icon-mail"/>
                        </Col>
                        <Col className="email-width">angelamoss@gmail.com
                        </Col>
                    </Row>
                </div>
            </Col>
            
         ))}
        </Row>
    </>
    )

};
export default Item;