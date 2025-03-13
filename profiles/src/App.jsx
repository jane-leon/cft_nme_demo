{/* import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Teams from "./Teams.jsx"; 
import Profile from "./Profile.jsx"; 
import Student from "./Student.jsx"; 
import User from "./User.jsx"
import Button from "./Button.jsx";
import Counter from "./Counter.jsx"; */}
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <>
      <Router>
        <>
          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/profile">Profile</Link>
          </nav>

         
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App
