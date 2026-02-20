import { Link } from 'react-router-dom';
import './Header.css';
import logoWhite from '../../assets/images/LOGO COALESCENCE blanco.svg';

function Header() {
    return (
        <header className="header-transparent">
            <div className="header-content">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logoWhite} alt="COALESCENCE" className="logo-img" />
                    </Link>
                </div>

                <nav className="header-nav">
                    <ul>
                        <li><Link to="/ai">AI</Link></li>
                        <li><Link to="/research">RESEARCH</Link></li>
                        <li><Link to="/history">HISTORY</Link></li>
                        <li><Link to="/tomorrow" className="nav-tomorrow">THE TOMORROW</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;