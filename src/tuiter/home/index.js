import React from 'react';
import {useSelector} from "react-redux";
import TuitItem from "../tuits/tuit-item";
import WhatsHappening from "./whats-happening";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits);
    return (
        <div>
            <WhatsHappening/>
            <ul className={"list-group w-100"}>
                {
                    tuitsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </div>
    );
}
export default TuitsList;