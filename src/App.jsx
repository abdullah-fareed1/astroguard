import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

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
