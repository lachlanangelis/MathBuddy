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
import StudentLessons from './Components/studentpages/StudentLessons';
import StudentClasses from './Components/studentpages/StudentClasses';
import StudentQuizI from './Components/studentinner/StudentQuizI';
import TActiveTasks from './Components/teacherpages/TActiveTasks'; 
import TeacherHomepage from './Components/teacherpages/TeacherHomepage'; 
import StudentFeedback from './Components/studentpages/StudentFeedback';
import Tclasses from './Components/teacherpages/Tclasses';
import TNewClass from './Components/teacherinner/TNewClass';
import StudentQuizComplete from './Components/studentinner/StudentQuizComplete';
import TNewQuiz from './Components/teacherinner/TNewQuiz';
function App() {
  const location = useLocation();

  // List of paths where NavBar from home should be hidden
  const hideNavBarPaths = ['/studenthome', '/studentquiz', '/studentlessons', '/studentclasses', 
  '/studentquizi', '/TActiveTasks', '/studentfeedback', '/teacherhomepage', '/Tclasses', '/tnewclass', 
  '/studentquizcomplete', '/tnewquiz'];

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
        <Route path="/studentlessons" element={<StudentLessons />} /> 
        <Route path="/studentclasses" element={<StudentClasses />} /> 
        <Route path ="/studentfeedback" element={<StudentFeedback/>} />
        <Route path="/studentquizi" element={<StudentQuizI />} /> 
        <Route path="/tactivetasks" element={<TActiveTasks />} /> 
        <Route path = "/teacherhomepage" element={<TeacherHomepage />} />
        <Route path = "/tclasses" element={<Tclasses />} />
        <Route path = "/tnewclass" element={<TNewClass/>} />
        <Route path ='/studentquizcomplete' element = {<StudentQuizComplete/>} />
        <Route path = '/tnewquiz' element= {<TNewQuiz />} />
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
