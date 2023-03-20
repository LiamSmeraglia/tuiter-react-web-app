import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {navigateTo} from "../reducers/nav-reducer";

const NavigationSidebar = () => {
    const active = useSelector(state => state.nav);
    const dispatch = useDispatch();
    const handleNavigate = (to) => {
        dispatch(navigateTo(to));
    }
    return (
        <div className={"list-group"}>
            <a className={"list-group-item"}
               href={"/"}>
                <i className="bi bi-twitter me-2"></i>
            </a>
            <button onClick={() => handleNavigate('home')}
                className={`text-start list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Home
                </span>
            </button>
            <button onClick={() => handleNavigate('explore')}
                className={`text-start list-group-item ${active === 'explore'?'active':''}`
            }>
                <i className="bi bi-hash me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Explore
                </span>
            </button>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`}
               href={"/"}>
                <i className="bi bi-bell me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Notifications
                </span>
            </a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`}
               href={"/"}>
                <i className="bi bi-envelope me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Messages
                </span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}
               href={"/"}>
                <i className="bi bi-bookmark me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Bookmarks
                </span>
            </a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`}
               href={"/"}>
                <i className="bi bi-list me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Lists
                </span>
            </a>
            <a className={`list-group-item ${active === 'profile'?'active':''}`}
               href={"/"}>
                <i className="bi bi-person me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    Profile
                </span>
            </a>
            <a className={`list-group-item ${active === 'more'?'active':''}`}
               href={"/"}>
                <i className="bi bi-three-dots me-2"></i>
                <span className={'d-none d-xl-inline-block'}>
                    More
                </span>
            </a>
        </div>

    );
};
export default NavigationSidebar;