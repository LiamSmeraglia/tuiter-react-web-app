import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "Demo User",
    "handle": "@demouser",
    "image": "../images/donkey.jpeg"
};

const templateTuit = {
    ...currentUser,
    "topic": "",
    "time": "1m",
    "liked": false,
    "disliked": false,
    "dislikes": 0,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch()
    const tuitClickHandler = () => {
        const newTuit = {
            ...templateTuit,
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening('');
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="./../images/donkey.jpeg" alt="dinkey king" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image small me-3"></i>
                        <i className="bi bi-filetype-gif small me-3"></i>
                        <i className="bi bi-bar-chart small me-3"></i>
                        <i className="bi bi-emoji-smile small me-3"></i>
                        <i className="bi bi-geo-alt small"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;