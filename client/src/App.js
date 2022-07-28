import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chat />
    </div>
  );
}

export default App;
