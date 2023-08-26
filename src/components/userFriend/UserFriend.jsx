import "./userFriend.css";

function UserFriend({ user }) {
    console.log(user);
  return (
    <div className="rightbarFollowing">
      <img
        src={user.profilePicture}
        alt=""
        className="rightbarFollowingImg"
      />
    </div>
  );
}

export default UserFriend;
