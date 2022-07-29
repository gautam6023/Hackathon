//import logo from './logo.svg';
import './App.css';
import Signin from './component/Sign pages/Signin';
import Login from './component/Create AccountPages/Login';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
