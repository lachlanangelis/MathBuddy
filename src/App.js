// src/App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/objects/Navbar';
import About from './Components/homepages/About';
import Contact from './Components/homepages/Contact';
import Home from './Components/homepages/Home';
import Signup from './Components/homepages/Signup';
import Tsign from './Components/homepages/Tsignup';
import Login from './Components/homepages/Login';
import StudentHome from './Components/studentpages/StudentHome';
import StudentQuiz from './Components/studentpages/StudentQuiz';

function App() {
  const location = useLocation();

  // List of paths where NavBar from home should be hidden
  const hideNavBarPaths = ['/studenthome', '/studentquiz'];

  return (
    <>
      {!hideNavBarPaths.includes(location.pathname) && <NavBar />} {/* Conditionally render NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teacher-signup" element={<Tsign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/studentquiz" element={<StudentQuiz />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
