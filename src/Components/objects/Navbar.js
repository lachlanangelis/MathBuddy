import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-left">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/home/Mathbuddylogo.png`} alt="Math Buddy Logo" className="site-logo" />
                </Link>
                <span className="desc">For Students, By Students</span>
            </div>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
