import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import UserProfileImg from "./1.jpg";
import CoverProfileImg from "./2.jpg";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={CoverProfileImg} alt="" />
              <img className="profileUserImg" src={UserProfileImg} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Fiantso Harena</h4>
              <span className="profileInfoDesc">We are a Dreamer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
