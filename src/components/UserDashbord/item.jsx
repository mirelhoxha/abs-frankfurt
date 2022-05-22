import IconBus from "../icons/icon-bus";
import IconColorize from "../icons/icon-colorize";
import IconDot from "../icons/icon-dot";
import IconStar from "../icons/icon-star";
import './item.css';

const Item = ({ item, onClickStar }) => {

    const onClick = () => {
        onClickStar(item);
    };
    return <div className={`item ${item.status === true ? 'active' : 'deactive'} ${item.isMarked === true ? 'marked' : ''} `}>
        <div>
            <IconStar active={item.isMarked} onClick={onClick} />
            <IconColorize />
        </div>
        <div>
            <div className="item-title">
                <span>John Doe</span>
                <IconDot />
                <span>Fire and Rescue Station 40a</span>
            </div>
            <div className="item-subtitle">
                <span>Your wish work schedule for 02/2022</span>
            </div>
            <div className="item-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...</p>
            </div>
            <IconBus />
        </div>
    </div>;
};

export default Item;