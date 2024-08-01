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
            <div className="nav-right">
                <div className="nav-item">
                    <Link to="/settings">
                        <img src={`${process.env.PUBLIC_URL}/images/home/settings-icon.png`} alt="Profile Icon" className="icontest" />
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/profile">
                        <img src={`${process.env.PUBLIC_URL}/images/home/profile-icon.png`} alt="Settings Icon" className="icontest" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
