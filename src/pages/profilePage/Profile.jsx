import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import UserProfileImg from "./1.jpg";
import CoverProfileImg from "./2.jpg";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EditProfil from "../editProfil/EditProfil";
import {useState} from "react";

function Profile() {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <Navbar />
      {openEdit && <EditProfil closeEdit={setOpenEdit} />}
      
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={CoverProfileImg} alt="" />
              <img className="profileUserImg" src={UserProfileImg} alt="" />
            </div>
            <div className="profileInfo">
              <div className="profileNameEdit">
                <h4 className="profileInfoName">Fiantso Harena</h4>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="editProfilBtn"
                  onClick={() => {
                    setOpenEdit(true);
                  }}
                />
              </div>
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
