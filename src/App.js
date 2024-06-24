import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/objects/Navbar';
import About from './Components/homepages/About';
import Contact from './Components/homepages/Contact';
import Home from './Components/homepages/Home';
import Signup from './Components/homepages/Signup';
import Tsign from './Components/homepages/Tsignup';
import Login from './Components/homepages/Login';

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
