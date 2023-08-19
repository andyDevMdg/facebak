import Home from "./pages/homePage/Home";
import Login from './pages/authPage/Login'
import SignUp from "./pages/authPage/SignUp";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
