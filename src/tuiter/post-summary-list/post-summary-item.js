import React from 'react';
import './post-summary-item.css';
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    if (!post.title) {
        return(
          <div className="list-group-item w-100">
            <img className="float-end wd-trend-img-size rounded-2 ms-2" src={post.image}/>
            <span className="text-secondary">{post.topic}</span><br/>
            <span className="text-black"><b>{post.userName}</b></span>
            <i className="fas fa-check-circle"></i>
            <span className="text-secondary"> - {post.time}</span><br/>
            <span className="text-secondary">{post.tweets} Tweets</span>
          </div>
        )
    }
    if (!post.userName) {
        return(
          <div className="list-group-item w-100">
            <img className="float-end wd-trend-img-size rounded-2 ms-2" src={post.image}/>
            <span className="text-secondary">{post.topic}</span><br/>
            <span className="text-black"><b>{post.title}</b></span><br/>
            <span className="text-secondary">{post.tweets} Tweets</span>
          </div>
        )
    }
    if (!post.topic) {
        return(
          <div className="list-group-item w-100">
            <img className="float-end wd-trend-img-size rounded-2 ms-2" src={post.image}/>
            <span className="text-black"><b>{post.userName}</b></span>
            <i className="fas fa-check-circle"></i>
            <span className="text-secondary"> - {post.time}</span><br/>
            <span className="text-black"><b>{post.title}</b></span><br/>
            <span className="text-secondary">{post.tweets} Tweets</span>
          </div>
        )
    }
    return(
        <div className="list-group-item w-100">
            <img className="float-end wd-trend-img-size rounded-2 ms-2" src={post.image}/>
            <span className="text-secondary">{post.topic}</span><br/>
            <span className="text-black"><b>{post.userName}</b></span>
            <i className="fas fa-check-circle"></i>
            <span className="text-secondary"> - {post.time}</span><br/>
            <span className="text-black">{post.title}</span><br/>
        </div>
    );
};
export default PostSummaryItem;