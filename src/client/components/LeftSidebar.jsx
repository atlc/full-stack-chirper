import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import LeftSideItem from './LeftSideItem';

class LeftSidebar extends Component {
    state = {
        items: [
            { label: "Home", link: "https://www.google.com/search?tbm=isch&q=Home", icon: "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png", alt: "Icon of a house"},
            { label: "Explore", link: "https://www.google.com/search?tbm=isch&q=Explore", icon: "https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Zoom_place.png", alt: "Icon of a magnifying glass"},
            { label: "Updates", link: "https://www.google.com/search?tbm=isch&q=Updates", icon: "https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/003/037/original/notification.png?1572711433", alt: "Icon of a notification bell"},
            { label: "Messages", link: "https://www.google.com/search?tbm=isch&q=Messages", icon: "https://cdn.iconscout.com/icon/free/png-512/message-537-461910.png", alt: "Icon of a message bubble"},
            { label: "Saved", link: "https://www.google.com/search?tbm=isch&q=Bookmarks", icon: "https://www.freeiconspng.com/uploads/bookmark-icon-1.png", alt: "Icon of a bookmark"},
            { label: "Lists", link: "https://www.google.com/search?tbm=isch&q=Lists", icon: "https://cdn.onlinewebfonts.com/svg/img_446233.png", alt: "Icon of a list"},
            { label: "Profile", link: "https://www.google.com/search?tbm=isch&q=Profile", icon: "https://i.ya-webdesign.com/images/profile-icon-png-9.png", alt: "Icon of a person's silhouette"}
        ]
    }

    focusToTextarea = () => { if (this.props.App.isLoggedIn) document.getElementById('chirp-textarea').focus(); }

    render() {
        return (
            <ul className="nav flex-column children-margin-vert-10 pad-bot-10 bl-thin hr-thin" style={{paddingLeft: 15+'px'}}>
                <li className="nav-item">
                    <Button disabled className="badge-pill w-100" variant="info">
                        <img src={"https://image.flaticon.com/icons/png/128/92/92031.png"} height={32} width={32} alt="Icon of a raven" />
                    </Button>
                </li>
                {this.state.items.map((item, index) => <LeftSideItem key={index} label={item.label} link={item.link} icon={item.icon} alt={item.alt} disabled={!this.props.App.isLoggedIn} />)}
                <li className="nav-item">
                    <Button disabled={!this.props.App.isLoggedIn} className="badge-pill w-100" variant="info" onClick={this.focusToTextarea}>{this.props.App.isLoggedIn ? 'Go' : "Click 'Login' to"} Chirp!</Button>
                </li>
            </ul>
        );
    }
}

export default LeftSidebar;