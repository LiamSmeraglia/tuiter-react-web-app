import Posts from './posts.js';
import PostSummaryItem from './PostSummaryItem.js';

const PostSummaryList = () => {
    return(`<ul class="list-group w-100">
        ${Posts.map(post => PostSummaryItem(post)).join('')}
    <ul/>
    `);
}

export default PostSummaryList;