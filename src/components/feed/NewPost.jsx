import React, { useState } from "react";
import "./newPost.css";
import { Avatar, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function NewPost() {
  const [userName, setUserName] = useState("Andy");
  const [showField, setShowField] = useState(false);

  return (
    <div className="newPostContainer">
      {showField && (
        <div className="newStatutFieldBg">
          <div className="newStatutField">
            <form>
              <input type="text" placeholder="What's up ?" />
            </form>
            <FontAwesomeIcon icon={faCircleXmark} 
            className="closeBtn"
            onClick={() => setShowField(false)}/>
          </div>
        </div>
      )}
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Avatar>A</Avatar>
        <button
          className="btnStatutField"
          onClick={() => setShowField(!showField)}
        >{`What's Up ${userName}`}</button>
      </Stack>
    </div>
  );
}

export default NewPost;
