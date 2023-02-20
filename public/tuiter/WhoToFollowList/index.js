import WhoToFollowListItem from "./WhoToFollowListItem.js";
import Who from "./who.js"

const WhoToFollowList = () => {
    return(`
        <div class="d-none d-lg-block col-lg-3 p-0 w-100">
            <ul class="list-group w-100 font-size-14 text-nowrap">
              <li class="list-group-item w-100 p-1 ps-3">
                <span><b>Who to follow</b></span>
              </li>
              ${Who.map(who => WhoToFollowListItem(who)).join('')}
            <ul/>
        <div/>
    `)
}
export default WhoToFollowList;