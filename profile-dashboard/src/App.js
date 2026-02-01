import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Profile() {
  return (
    <div className="page">
      <img src="/JHARKHANDI.jpg" alt="profile" className="photo" />

      <h2>Sakshi Kumari</h2>
      <p>AI & ML Engineer</p>

      <h3>Projects / Internships</h3>
      <ul>
        <li>Gamified Rehabilitation System</li>
        <li>Blog Platform</li>
        <li>Vendor Mitra – Supplier Vendor Connector</li>
        <li>Quick Bite – Food Delivery App</li>
        <li>Internship at YHills</li>
      </ul>

      <h3>My Profiles</h3>

      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sakshiikumari/"
          target="_blank"
          rel="noreferrer"
        >
          View Profile
        </a>
      </p>

      <p>
        💻 LeetCode:{" "}
        <a
          href="https://leetcode.com/u/sakshi_singh__7/"
          target="_blank"
          rel="noreferrer"
        >
          View Profile
        </a>
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h2>My Skills</h2>

      <ul>
        <li>Python</li>
        <li>React</li>
        <li>C Programming</li>
        <li>Machine Learning</li>
        <li>OpenCV</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
