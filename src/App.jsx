import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Index from "./components/Index";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/" element={<Index/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
