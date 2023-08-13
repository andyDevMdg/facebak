import UserImage from "./1.jpg";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Stivebook</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">Profile</span>
        </div>
      </div>
      <div className="navbarIcons">
        <div className="navbarIconItem">
          <Person />
          <span className="navbarIconBadge">1</span>
        </div>
        <div className="navbarIconItem">
          <Chat />
          <span className="navbarIconBadge">2</span>
        </div>
        <div className="navbarIconItem">
          <Notifications />
          <span className="navbarIconBadge">3</span>
        </div>
      </div>
      <img src={UserImage} alt="userImage" className="navbarImg" />
    </div>
  );
}

export default Navbar;
