import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <!-- Search bar -->
        <div class="d-flex flex-row">
          <div class="d-flex flex-row flex-fill">
            <div class="h-100 ps-1 border-left d-flex bg-white">
              <label for="search" class="rounded-pill align-self-center bg-white">
                <i class="fas fa-search ms-1"></i>
              </label>
            </div>
            <input id="search" class="form-control flex-fill border-right bg-color-dark-gray" placeholder="Search Tuiter"></input>
          </div>
          <i class="fas fa-cog fa-2x ms-3 align-self-center" style="color: #0d6efd"></i>
        </div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs mt-2">
          <li class="nav-item disabled">
            <a class="nav-link active" href="#">For You</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="#">Entertainment</a>
          </li>
        </ul>
        <!-- Content -->
        <div class="w-100 wd-image-container">
          <img class="w-100 mt-2" src="../explore/images/starship.webp"/>
          <h2 class="wd-image-text ms-2">SpaceX's Starship</h2>
        </div>
        ${PostSummaryList()}
    `)
}

export default ExploreComponent;