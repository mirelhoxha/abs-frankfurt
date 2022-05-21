import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../shared/style.css';
import './UserAdmin.css';

import Item from './item';
import Sidebar from '../Sidebar/Sidebar';
import Tabs from './tabs';
import New from '../../lib/new.json';
import Approved from '../../lib/new.json';
import Rejected from '../../lib/new.json';

function UserDashbord() {

    const [items, setItems] = useState(New);

    const onChangeTab = tab => {
        switch (tab) {
            case 'new':
                setItems(New);
                break;
            case 'approved':
                setItems(Approved);
                break;
            case 'rejected':
                setItems(Rejected);
                break;
        }
    }

    const onClickStar = item => {
        const findIndex = items.findIndex(itm => itm.id == item.id);
        if (findIndex < 0) {
            return;
        }
        const tempItems = [...items];
        tempItems[findIndex] = { ...item, isMarked: !item.isMarked };
        setItems([...tempItems]);
    };

    return (
        <Container fluid>
            <Row className="app-row">
                <Sidebar />
                <Col className="content">
                    <div className="top-bar">
                        <h2><strong>Overview of requests</strong></h2>
                        <Tabs onChangeTab={onChangeTab} />
                    </div>
                    <div className="content-wrapper">
                        {items.map((item, index) => <Item item={item} key={index} onClickStar={onClickStar} />)}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default UserDashbord;
