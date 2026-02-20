import { Link } from 'react-router-dom';
import './Footer.css';
// import logoWhite from '../../assets/images/LOGO COALESCENCE blanco.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* Columna Brand */}
                <div className="footer-brand">
                    {/* <img src={logoWhite} alt="COALESCENCE" className="footer-brand-logo" /> */}
                    <p className="footer-brand-desc">
                        COALESCENCE is a next-generation intelligence platform designed to bridge
                        human intuition with artificial cognition. We build tools for those who
                        shape tomorrow.
                    </p>
                    <div className="footer-social-icons">
                        {/* X / Twitter */}
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        {/* GitHub */}
                        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Columna Navigate */}
                <div>
                    <p className="footer-col-title">Navigate</p>
                    <ul className="footer-col-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ai">AI</Link></li>
                        <li><Link to="/research">Research</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/tomorrow">The Tomorrow</Link></li>
                    </ul>
                </div>

                {/* Columna Resources */}
                <div>
                    <p className="footer-col-title">Resources</p>
                    <ul className="footer-col-links">
                        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Repository</a></li>
                        <li><a href="https://figma.com" target="_blank" rel="noreferrer">Figma Design</a></li>
                        <li><a href="https://docs.coalescence.io" target="_blank" rel="noreferrer">Documentation</a></li>
                        <li><a href="#changelog">Changelog</a></li>
                    </ul>
                </div>

                {/* Columna Legal */}
                <div>
                    <p className="footer-col-title">Legal</p>
                    <ul className="footer-col-links">
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#cookies">Cookie Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#sales">Sales Conditions</a></li>
                    </ul>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p className="footer-copyright">
                    © 2025 COALESCENCE. All rights reserved. &nbsp;|&nbsp;{' '}
                    <a href="#privacy">Privacy & Cookies</a> &nbsp;|&nbsp;{' '}
                    <a href="#terms">Terms of Sale</a>
                </p>
                <div className="footer-legal-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#cookies">Cookies</a>
                    <a href="#accessibility">Accessibility</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;