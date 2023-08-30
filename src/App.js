import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/authPage/Login";
// import Logout from "./pages/authPage/Logout";
import SignUp from "./pages/authPage/SignUp";
import Post from "./components/post/Post";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Profile from "./pages/profilePage/Profile";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/*<Route path="/logout" element={<Logout />} />*/}
        <Route path="/profile" element={<Profile />} />
        {/**<Route path="/profile/edit" element={<EditProfile />} />**/}
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="*" element={() => "404 NOT FOUND"} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
