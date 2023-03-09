import React from 'react';
import PostSummaryList from "../post-summary-list";
import './index.css';

const ExploreComponent = () => {
    return (
        <>
            <div className="d-flex flex-row">
                <div className="d-flex flex-row flex-fill">
                    <div className="h-100 ps-1 wd-border-left d-flex bg-white">
                        <label htmlFor="search" className="rounded-pill align-self-center bg-white">
                            <i className="bi bi-search ms-1"></i>
                        </label>
                    </div>
                    <input id="search" className="wd-border-right form-control flex-fill bg-color-dark-gray" placeholder="Search Tuiter"></input>
                </div>
                <i className="fas fa-cog fa-2x ms-3 align-self-center" style={{color: '#0d6efd'}}></i>
            </div>
            <ul className="nav nav-tabs mt-2">
                <li className="nav-item disabled">
                    <a className="nav-link active" href="#">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="w-100 wd-image-container">
                <img className="w-100 mt-2" src="../images/starship.webp"/>
                <h2 className="wd-image-text ms-2">SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;