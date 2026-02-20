import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BackgroundBeams from '../../components/ui/background-beams/BackgroundBeams';
import Carousel from '../../components/ui/carousel/Carousel';
import RotatingText from '../../components/ui/rotating-text/RotatingText';
import ScrollVelocity from '../../components/ui/scroll-velocity/Scrollvelocity';
import './Home.css';
import mockupImage from '../../assets/images/MOCKUP1.webp';

const statsData = [
    { value: '2.4M', label: 'Implants' },
    { value: '98.5%', label: 'Accuracy' },
    { value: '300+', label: 'Enterprise Clients' },
    { value: '0.1', label: 'Avg. Latency' },
];

function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxOffset = scrollY * 0.5;

    return (
        <div className="home-container">
            <Header />

            {/* ── HERO ── */}
            <section className="hero-section">
                <BackgroundBeams />
                <div className="hero-content">
                    <div
                        className="tablet-container"
                        style={{ transform: `translateY(${parallaxOffset}px)` }}
                    >
                        <div className="tablet-mockup">
                            <img
                                src={mockupImage}
                                alt="COALESCENCE Dashboard"
                                className="tablet-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PARALLAX OVERLAY ── */}
            <section className="parallax-overlay-section">
                <div className="parallax-rectangle">
                    {/* Enhance title */}
                    <div className="enhance-title-container">
                        <h1 className="enhance-title">
                            Enhance the{' '}
                            <span className="enhance-future">
                                <RotatingText
                                    text={['FUTURE', 'REALITY', 'VISION']}
                                    duration={3000}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                />
                            </span>
                        </h1>
                    </div>

                    {/* Carousel */}
                    <div className="spotlight-section">
                        <Carousel />
                    </div>

                    {/* Scroll velocity */}
                    <div className="scroll-velocity-section">
                        <ScrollVelocity
                            texts={['THE VISION', 'THE FUTURE']}
                            velocity={5}
                            className="custom-scroll-text"
                        />
                    </div>

                    {/* ── STATS ── */}
                    <section className="home-stats-section">
                        <div className="home-stats-grid">
                            {statsData.map((stat) => (
                                <div key={stat.label} className="home-stat-item">
                                    <span className="home-stat-value">{stat.value}</span>
                                    <span className="home-stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── ABOUT ── */}
                    <section className="home-about-section">
                        <div className="home-about-inner">

                            <div className="home-about-text">
                                <p className="home-eyebrow">Who We Are</p>
                                <h2 className="home-about-title">
                                    Intelligence as a <span>Philosophy</span>
                                </h2>
                                <p className="home-about-body">
                                    COALESCENCE was born from a simple conviction: the gap between
                                    human intuition and machine logic shouldn't exist. Founded by
                                    researchers who left the largest AI labs in the world — not because
                                    the work wasn't interesting, but because it wasn't human enough.
                                </p>
                                <p className="home-about-body">
                                    Our platform doesn't replace your thinking. It extends it — quietly,
                                    precisely, without friction. We call this ambient intelligence,
                                    and it's the core of everything we build.
                                </p>
                                <div className="home-about-links">
                                    <Link to="/history" className="home-about-cta">
                                        Our Story
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link to="/research" className="home-about-cta-ghost">
                                        Read Research
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;