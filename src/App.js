import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/objects/Navbar';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import Signup from './Components/pages/Signup';
import Tsign from './Components/pages/Tsignup';
import Login from './Components/pages/Login';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/teacher-signup" element={<Tsign />} />
                <Route path="/login" element={<Login />} /> 
            </Routes>
        </Router>
    );
}

export default App;
