import React from "react";
import './who-to-follow-item.css';
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: '../images/nasa.jpeg' }
    }
) => {
    return(
        <li className={"list-group-item w-100 d-flex flex-row"}>
            <img className={"rounded-circle wd-img-size-48 float-left me-xl-2 align-self-center"} src={who.avatarIcon}/>
            <div className={"float-left flex-fill align-self-center"}>
                <span><b>{who.userName}</b></span>
                <i className="bi bi-patch-check-fill ms-1"></i><br/>
                <span>@{who.handle}</span>
            </div>
            <div className={"float-right pt-2 pb-2"}>
                <button type="button" className={"btn btn-primary rounded-pill float-right"}>Follow</button>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;