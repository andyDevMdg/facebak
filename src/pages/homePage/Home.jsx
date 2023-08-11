import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

// Home Page which contains the basic components

function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
