import { Col, Row } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import PaginationItem from './pagination-item';
import './item.css';

const Item = () => {
    const items = [
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
        {
            title: "Paramedic ",
            name: "Angela Moss",
            email: "angelamoss@mail.com",
        },
    ]
    return (
        <>
            <div className="user-list-container">
                {items.map((user) => (
                    <div className="user-list-item">
                        <div className="user-card">
                            <div className="profile">
                                <img src="/images/placeholderAm.png" className="profile-image" />
                                <BiDotsVerticalRounded className="icon-dot" />
                                <div className="box-status">
                                    <span>HS</span>
                                </div>
                            </div>
                            <div className="profile-body">
                                <h6 className="name">{user.name}</h6>
                                <p className="title">{user.title}</p>
                            </div>
                            <div className="footer">
                                <HiMail className="icon-mail"/>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Row className='pagination-item'>
                <PaginationItem />
            </Row>
        </>
    )

};
export default Item;