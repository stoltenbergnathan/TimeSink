import "./App.css";
import "./Components/Personal";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav";
import Personal from "./Components/Personal";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./Components/Messages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={Homepage()} />
        <Route path="/activities" element={Personal()} />
        <Route path="/login" element={LoginPage()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
