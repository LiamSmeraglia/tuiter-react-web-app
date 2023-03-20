import React from 'react';
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return(
        <ul className="list-group w-100 font-size-14 text-nowrap">
            <li className="list-group-item w-100 p-1 ps-3">
                <span><b>Who to follow</b></span>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>)
            }
        </ul>
    );
};
export default WhoToFollowList;
