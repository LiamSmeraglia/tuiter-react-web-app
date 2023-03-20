import React from 'react';
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits);
    return (
        <ul className={"list-group w-100"}>
            {
                postsArray.map(post => <PostSummaryItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;