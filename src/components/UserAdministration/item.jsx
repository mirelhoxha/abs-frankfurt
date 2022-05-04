
import './item.css';
import { Col ,Row } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import PaginationItem from './pagination-item';

const Item = () => {
    const items =[
        {
            name: "Angela Moss",
        },
        {
            title: "Paramedic ",
        },
        {
            email: "angelamoss@mail.com ",
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
         {items.map((items) => (
           
            <Col lg={3} md={6}  sm={6} className="m-b">
                <div className="margin-right">
                <div className="profile">
                    
                    <img src="/images/placeholderAm.png" className="profile-size" />
                    <BiDotsVerticalRounded className="icon-dot" />
                    <div className="box">
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
                        <Col className="email-width">angelamoss@mail.com
                        </Col>
                    </Row>
                </div>
            </Col>
            
         ))}
        </Row>
        <Row>
            <div className='pagination-item'>
                <PaginationItem />
            </div>
        </Row>
    </>
    )

};
export default Item;