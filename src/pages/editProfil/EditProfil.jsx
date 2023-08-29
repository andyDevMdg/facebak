import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import "./editProfil.css";

function EditProfil({closeEdit}) {
  const [editingUsername, setEditingUsername] = useState(false);
  const [editingBio, setEditingBio] = useState(false);

  const [username, setUsername] = useState("Fiantso Harena");
  const [bio, setBio] = useState("We are a Dreamer");

  const handleEditUsername = () => {
    setEditingUsername(true);
  };

  const handleEditBio = () => {
    setEditingBio(true);
  };

  const handleSaveChanges = () => {
    setEditingUsername(false);
    setEditingBio(false);
  };

  return (
    <div className="editBg">
      <div className="editContainer">
        <div className="editTitleContainer">
          <div className="editTitle">
            <h2>Edit your information</h2>
          </div>
          <FontAwesomeIcon className="close" icon={faXmark} onClick={() => closeEdit(false)} />
        </div>
        <Box>
          <div className="editUserName">
            <div className="containEdit">
              <Typography variant="h6">Username</Typography>
            </div>

            {editingUsername ? (
              <form className="editForm">
                <input
                  type="text"
                  value={username}
                  className="inputEdit"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button className="saveBtn" onClick={handleSaveChanges}>
                  Save
                </button>
              </form>
            ) : (
              <>
                <Typography variant="body2" className="infoProfil">
                  {username}
                </Typography>
              <button className="editUsernameBtn" onClick={handleEditUsername}>
                Edit
              </button>
              </>
            )}
          </div>
          <div className="editBio">
            <div className="containEdit">
              <Typography variant="h6">Bio</Typography>
            </div>

            {editingBio ? (
              <form className="editForm">
                <input
                  type="text"
                  value={bio}
                  className="inputEdit"
                  onChange={(e) => setBio(e.target.value)}
                />
                <button className="saveBtn" onClick={handleSaveChanges}>
                  Save
                </button>
              </form>
            ) : (
              <>
                <Typography variant="body2" className="infoProfil">
                  {bio}
                </Typography>
              <button className="editBioBtn" onClick={handleEditBio}>
                Edit
              </button>
              </>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default EditProfil;
