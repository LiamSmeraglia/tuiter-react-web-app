import React from 'react';
import {useSelector} from "react-redux";
import TuitsList from "../home";
import ExploreComponent from "../explore";

const MainContent = () => {
    const active = useSelector(state => state.nav)
    console.log(active);
    console.log(<TuitsList/> && active === 'home');
    return (
        <div>
            { active === 'home' && <h2>Home</h2>}
            { active === 'home' && <TuitsList/>}
            { active === 'explore' && <ExploreComponent/>}
        </div>
    )
}
export default MainContent;