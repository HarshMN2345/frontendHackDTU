import React from 'react';
import SignUp from './components/LoginUI/SignUp';
import Login from './components/LoginUI/Login';
import userProfile from './components/LoginUI/userProfile';
// import ResetPassword from './components/LoginUI/ResetPassword';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/"/>
    <Route path="/signup" exact element={<SignUp />} />
		<Route path="/login" exact element={<Login />} />
    <Route path="/userProfile.js" exact element={<userProfile />} />
		<Route path="/" exact element={<Navigate replace to="/login"/>}/>
    </Routes>
    </Router>
    </>
);

}

export default App;
