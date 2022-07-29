// import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Create AccountPages/Login";
import Signin from "./components/Auth/Sign pages/Signin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RequiredAuth } from "./components/RequiredAuth/RequiredAuth";
function App() {


 
 


  return (
    <div className="App">
     
      <Navbar />
      <Routes>
        <Route path={"/"} element={<RequiredAuth><Chat /></RequiredAuth>} />
        <Route path={"/signup"} element={<Login />} />
        <Route path={"/login"} element={<Signin />} />
      </Routes>
      npm
    </div>
  );
}

export default App;
