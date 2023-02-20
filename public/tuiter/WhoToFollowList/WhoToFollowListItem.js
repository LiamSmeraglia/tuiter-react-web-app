const WhoToFollowListItem = (who) => {
    return(`<li class="list-group-item w-100 d-flex flex-row">
            <img class="rounded-circle img-size-48 float-left me-xl-2 align-self-center" src=${who.avatarIcon}/>
            <div class="float-left flex-fill align-self-center">
                <span><b>${who.userName}</b></span>
                <i class="fas fa-check-circle"></i><br/>
                <span>${who.handle}</span>
            </div>
            <div class="float-right pt-2 pb-2">
                <button type="button" class="btn btn-primary rounded-pill float-right">Follow</button>
            </div>
        </li>`);
}

export default WhoToFollowListItem;