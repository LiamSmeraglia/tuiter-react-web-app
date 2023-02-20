const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a class="list-group-item" href="/">
       <i class="fas fa-home"></i>
       <span class="d-none d-xl-inline-block">Home</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-hashtag"></i>
        <span class="d-none d-xl-inline-block">Explore</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-bell"></i>
        <span class="d-none d-xl-inline-block">Notifications</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-xl-inline-block">Messages</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-xl-inline-block">Bookmarks</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-list"></i>
        <span class="d-none d-xl-inline-block">Lists</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-user"></i>
        <span class="d-none d-xl-inline-block">Profile</span><br/>
     </a>
     <a class="list-group-item" href="/">
        <i class="fas fa-ellipsis-h"></i>
        <span class="d-none d-xl-inline-block">More</span><br/>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;