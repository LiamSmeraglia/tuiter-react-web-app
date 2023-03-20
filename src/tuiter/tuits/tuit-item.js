import React from 'react';
import {useDispatch} from "react-redux";
import './tuit-item.css';
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
        tuit = {
            "_id": 345,
            "topic": "Energy",
            "userName": "Tesla",
            "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
            "time": "4d",
            "image": "/images/tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@Tesla",
            "tuit": "Tesla Fired Buffalo Workers Seeking to Organize, Union Says. A filing to the National Labor Relations Board called the dismissals retaliatory. The carmaker denied the allegation, saying they were based on performance."
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id))
    }
    return(
        <div className="list-group-item w-100">
            <div className="d-flex flex-row">
                <div className="">
                    <img className="wd-profile-img-size rounded-2 me-2" alt="" src={tuit.image}/>
                </div>
                <div className="flex-fill">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <span className="text-black me-2"><b>{tuit.userName}</b></span>
                    <i className="fas fa-check-circle"></i>
                    <span className="text-secondary">{tuit.handle} - {tuit.time}</span><br/>
                    <span className="text-black">{tuit.tuit}</span>
                </div>
            </div>
        </div>
    )
}
export default TuitItem;