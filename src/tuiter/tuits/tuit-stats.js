import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat-left-text"></i>
                <span className="ms-2">{tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i>
                <span className="ms-2">{tuit.retuits}</span>
            </div>
            <div className="col-3">
                {
                    tuit.liked ? <i className="bi bi-heart-fill"></i> :
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes + 1,
                            liked: true
                        }))}
                           className="bi bi-heart"></i>
                }
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col-3">
                {
                    tuit.disliked ? <i className="bi bi-hand-thumbs-down-fill"></i> :
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes + 1,
                            disliked: true
                        }))}
                            className="bi bi-hand-thumbs-down"></i>
                }
                <span className="ms-2">{tuit.dislikes}</span>
            </div>
        </div>
    );
}
export default TuitStats;