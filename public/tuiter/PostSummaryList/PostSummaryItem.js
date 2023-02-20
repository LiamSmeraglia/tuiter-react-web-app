const PostSummaryItem = (post) => {
    if (!post.title) {
        return(`
          <div class="list-group-item w-100">
            <img class="float-end trend-img-size rounded-2 ms-2" src=${post.image}/>
            <span class="text-secondary">${post.topic}</span><br/>
            <span class="text-white"><b>${post.userName}</b></span>
            <i class="fas fa-check-circle"></i>
            <span class="text-secondary"> - ${post.time}</span><br/>
            <span class="text-secondary">${post.tweets} Tweets</span>
          </div>
        `)
    }
    if (!post.userName) {
        return(`
          <div class="list-group-item w-100">
            <img class="float-end trend-img-size rounded-2 ms-2" src=${post.image}/>
            <span class="text-secondary">${post.topic}</span><br/>
            <span class="text-white"><b>${post.title}</b></span><br/>
            <span class="text-secondary">${post.tweets} Tweets</span>
          </div>
        `)
    }
    if (!post.topic) {
        return(`
          <div class="list-group-item w-100">
            <img class="float-end trend-img-size rounded-2 ms-2" src=${post.image}/>
            <span class="text-white"><b>${post.userName}</b></span>
            <i class="fas fa-check-circle"></i>
            <span class="text-secondary"> - ${post.time}</span><br/>
            <span class="text-white"><b>${post.title}</b></span><br/>
            <span class="text-secondary">${post.tweets} Tweets</span>
          </div>
        `)
    }
    return(`
      <div class="list-group-item w-100">
        <img class="float-end trend-img-size rounded-2 ms-2" src=${post.image}/>
        <span class="text-secondary">${post.topic}</span><br/>
        <span class="text-white"><b>${post.userName}</b></span>
        <i class="fas fa-check-circle"></i>
        <span class="text-secondary"> - ${post.time}</span><br/>
        <span class="text-white"><b>${post.title}</b></span><br/>
      </div>
    `)
}

export default PostSummaryItem;