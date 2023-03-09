import React from 'react';
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
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
