import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* LEFT SIDE – CONSTANT PROFILE CARD */
function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="/JHARKHANDI.jpg" className="photo" alt="profile" />
      <h3>Sakshi Kumari</h3>
      <p>AI & ML Engineering Student</p>

      <h4>Projects / Internships</h4>
      <ul>
        <li>Fruit Ninja Therapy Game</li>
        <li>Medical Report Analyzer</li>
        <li>EthGuard AI Framework</li>
        <li>Social Internship</li>
      </ul>
    </div>
  );
}

/* RIGHT SIDE – PROFILE PAGE */
function Profile() {
  return (
    <div className="content">
      <h2>Profile Details</h2>
      <p><b>Name:</b> Sakshi Kumari</p>
      <p><b>Designation:</b> AI & ML Engineering Student</p>

      <h3>Projects / Internships</h3>
      <ul>
        <li>Fruit Ninja Therapy Game</li>
        <li>Medical Report Analyzer</li>
        <li>EthGuard Framework</li>
        <li>Social Internship</li>
      </ul>
    </div>
  );
}

/* RIGHT SIDE – DASHBOARD */
function Dashboard() {
  return (
    <div className="content">
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

      {/* HEADER */}
      <header>
        <div className="logo">
          <Link to="/">My Profile</Link>
        </div>

        <nav>
          <Link to="/">Profile</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      {/* MAIN LAYOUT */}
      <div className="main">

        {/* LEFT CONSTANT PROFILE */}
        <ProfileCard />

        {/* RIGHT CHANGING CONTENT */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
