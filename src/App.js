import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home'
import Login from './pages/authPage/Login'
import SignUp from "./pages/authPage/SignUp";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
