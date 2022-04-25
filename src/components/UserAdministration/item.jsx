import IconThreeDot from "../icons/icon-threedot";
import './item.css';
import IconRw1 from "../icons/icon-rw1";
import IconPhone from "../icons/icon-phone";

const Item = () => {
    const item =[
        {
            name: "Angela Moss",
        },
        {
            name: "Angela ",
        }
    ]
    return <div className="card">
        <div className="background">
            <IconThreeDot />
        </div>
        <div className="profile-picture">
            <img src="/images/placeholderAm.png" className="icon-colorize" />
            {/*<svg data-layer="d648f975-8ddb-42cd-af6b-ba619d38260d" preserveAspectRatio="none" viewBox="-0.75 -0.75 107.5 107.5" class="placeholderc2ab596f"><defs><pattern id="img-placeholderc2ab596f" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/placeholderc2ab596f.png" x="0" y="0" width="106.00px" height="106.00px"></image></pattern></defs><path d="M 14 0 L 92 0 C 99.73198699951172 0 106 6.268013000488281 106 14 L 106 92 C 106 99.73198699951172 99.73198699951172 106 92 106 L 14 106 C 6.268013000488281 106 0 99.73198699951172 0 92 L 0 14 C 0 6.268013000488281 6.268013000488281 0 14 0 Z" fill="url(#img-placeholderc2ab596f)"></path></svg>
            <span className="am">AM</span>*/}
        </div>
        <div className="rw1">
            <IconRw1 />
            <span className="rw">RW1</span>
        </div>
        <div className="itemcell">
            <div className="title">
                Angela Moss
            </div>
            <div className="sub-title">
                Paramedic
            </div>
        </div>
        <div className="item-telephone display-flex">
            <div className="icon-phone">
                <IconPhone />
            </div>
            <div className="email">
                angelamoss@mail.com
            </div>
        </div>

    </div>

};
export default Item;