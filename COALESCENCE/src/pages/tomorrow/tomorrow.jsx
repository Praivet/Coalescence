import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Tomorrow.css';

const pillars = [
    {
        number: '01',
        title: 'Ambient Intelligence',
        desc: 'AI that exists invisibly within everyday environments — anticipating needs before they are expressed, acting at the edges of consciousness.',
    },
    {
        number: '02',
        title: 'Cognitive Augmentation',
        desc: 'Systems that amplify human reasoning rather than replacing it. Our interfaces are designed to extend the limits of what a single mind can hold.',
    },
    {
        number: '03',
        title: 'Sovereign Data',
        desc: 'A future where individuals own their cognitive data — and AI learns from it only with explicit, revocable consent.',
    },
];

const roadmapPhases = [
    {
        label: 'Phase 01 — 2025',
        name: 'Foundation Layer',
        items: ['Open API v3', 'Federated inference', 'SDK for developers'],
        active: false,
    },
    {
        label: 'Phase 02 — Q3 2025',
        name: 'Ambient SDK',
        items: ['Edge deployment', 'Wearable integrations', 'Real-time context engine'],
        active: true,
    },
    {
        label: 'Phase 03 — 2026',
        name: 'Cognitive Layer',
        items: ['Personal model fine-tuning', 'Memory-persistent AI', 'Multi-agent orchestration'],
        active: false,
    },
    {
        label: 'Phase 04 — 2027',
        name: 'Open Intelligence',
        items: ['Decentralised inference', 'Community governance', 'Universal access tier'],
        active: false,
    },
];

function Tomorrow() {
    return (
        <div className="tomorrow-page">
            <Header />

            {/* Hero */}


            {/* Pillars */}
            <section className="tomorrow-pillars-section">
                <div className="section-header" style={{ marginBottom: 0 }}>
                    <p style={{ fontFamily: 'Induction, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ed6a2d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{ display: 'inline-block', width: '2rem', height: '1px', background: '#ed6a2d', flexShrink: 0 }} />
                        Three Pillars
                    </p>
                    <h2 style={{ fontFamily: 'Coolvetica, sans-serif', fontSize: '3rem', fontWeight: 400, margin: 0 }}>
                        Our <span style={{ fontFamily: 'Induction, sans-serif', color: '#ed6a2d' }}>Principles</span>
                    </h2>
                </div>
                <div className="tomorrow-pillars-grid">
                    {pillars.map((pillar) => (
                        <div key={pillar.number} className="tomorrow-pillar-card">
                            <p className="pillar-number">{pillar.number}</p>
                            <h3 className="pillar-title">{pillar.title}</h3>
                            <p className="pillar-desc">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Roadmap */}
            <section className="tomorrow-roadmap-section">
                <div className="tomorrow-roadmap-inner">
                    <p style={{ fontFamily: 'Induction, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ed6a2d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{ display: 'inline-block', width: '2rem', height: '1px', background: '#ed6a2d', flexShrink: 0 }} />
                        Product Roadmap
                    </p>
                    <h2 style={{ fontFamily: 'Coolvetica, sans-serif', fontSize: '3rem', fontWeight: 400, margin: 0 }}>
                        What's <span style={{ fontFamily: 'Induction, sans-serif', color: '#ed6a2d' }}>Coming</span>
                    </h2>
                    <div className="roadmap-grid">
                        {roadmapPhases.map((phase) => (
                            <div key={phase.label} className={`roadmap-phase${phase.active ? ' active' : ''}`}>
                                <p className="roadmap-phase-label">{phase.label}</p>
                                <h4 className="roadmap-phase-name">{phase.name}</h4>
                                <ul className="roadmap-phase-items">
                                    {phase.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="tomorrow-cta-section">
                <div className="tomorrow-cta-inner">
                    <h2 className="tomorrow-cta-title">
                        Be Part of<br />
                        <span>The Tomorrow</span>
                    </h2>
                    <p className="tomorrow-cta-desc">
                        Whether you're a researcher, engineer, or simply someone who believes in a
                        better future — there is a place for you in what we're building.
                    </p>
                    <div className="tomorrow-cta-buttons">
                        <a href="mailto:join@coalescence.io" className="btn-primary">
                            Join The Team
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#research" className="btn-secondary">
                            Read Our Research
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Tomorrow;