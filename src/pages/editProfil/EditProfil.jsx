import React from "react";
import {Box, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import "./editProfil.css";

function EditProfil({closeEdit}) {
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
              <button className="editBtn">Edit</button>
            </div>
            <Typography variant="body2" className="infoProfil" >Fiantso Harena</Typography>
          </div>
          <div className="editBio">
            <div className="containEdit">
              <Typography variant="h6">Bio</Typography>
              <button className="editBtn">Edit</button>
            </div>
            <Typography variant="body2" className="infoProfil" >We are a Dreamer</Typography>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default EditProfil;
