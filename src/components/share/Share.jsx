import { PermMedia } from "@mui/icons-material";
import UserImageTest from "./1.jpg";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={UserImageTest} alt="" />
          <input className="shareInput" placeholder="What's in your mind ?" />
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
