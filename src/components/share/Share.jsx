import {
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
  Send,
} from "@mui/icons-material";
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
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="cyan" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="lightgreen" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
