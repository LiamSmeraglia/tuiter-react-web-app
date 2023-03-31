import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "../tuits/tuit-item";
import WhatsHappening from "./whats-happening";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return (
        <div>
            <WhatsHappening/>
            <ul className={"list-group w-100"}>
                {
                    loading ? <li className="list-group-item">Loading...</li> :
                        tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </div>
    );
}
export default TuitsList;