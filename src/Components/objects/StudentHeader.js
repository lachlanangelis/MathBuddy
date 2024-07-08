import { Link } from 'react-router-dom';
import './StudentHeader.css';

export default function StudentHeader() {
    return (
        <nav className="nav">
            <div className="nav-left">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/home/Mathbuddylogo.png`} alt="Math Buddy Logo" className="site-logo" />
                </Link>
                <span className="desc">Wollongong, School of Math</span>
            </div>
            <ul>
                <li>
                    <Link to="/profile">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/profile-icon.png`} alt="Profile Icon" className="icon" />
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/settings-icon.png`} alt="Settings Icon" className="icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
