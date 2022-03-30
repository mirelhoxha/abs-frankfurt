import { useState } from "react";
import IconApproved from "../icons/icon-approved";
import IconHamburger from "../icons/icon-hamburger";
import IconNew from "../icons/icon-new";
import IconRejected from "../icons/icon-rejected";
import './tabs.css';

const Tabs = ({ onChangeTab }) => {

    const [ selectedTab, setSelectedTab ] = useState('new');

    const onClick = tab => {
        setSelectedTab(tab);
        onChangeTab(tab);
    };

    return <div className="tabs">
    <button className="mobile-menu">
        <IconHamburger />
    </button>
    <span onClick={ () => onClick('new') } className={ selectedTab == 'new' ? 'active' : '' }>
      <IconNew />
      <span>New</span>
    </span>
    <span onClick={ () => onClick('approved') } className={ selectedTab == 'approved' ? 'active' : '' }>
      <IconApproved />
      <span>Approved</span>
    </span>
    <span onClick={ () => onClick('rejected') } className={ selectedTab == 'rejected' ? 'active' : '' }>
      <IconRejected />
      <span>Rejected</span>
    </span>
  </div>
};
export default Tabs;