import React from 'react';
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <ul className={"list-group w-100"}>
            {
                postsArray.map(post => <PostSummaryItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;