import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Login from './pages/authPage/Login';
import SignUp from './pages/authPage/SignUp';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Post from './pages/Post';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Profile from "./pages/profilePage/Profile";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/profile/edit" component={EditProfile} />
                <Route exact path="/posts" component={Post} />
                <Route path="/posts/:postId" component={Post} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Routes>
        </Router>
    </ThemeProvider>
  );
  }
export default App;
