import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile.jsx";
import MyPage from "./MyPage.jsx";

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
            <Route path="/" element={<MyPage />} /> 
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App

