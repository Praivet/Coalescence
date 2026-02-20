import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Ai.css';

const aiModels = [
    {
        id: '01',
        name: 'NEXUS CORE',
        type: 'Large Language Model',
        description: 'Our foundational reasoning engine. Trained on 2.4 trillion tokens of curated data, NEXUS CORE delivers precise, context-aware responses across complex domains.',
        stats: [{ value: '2.4T', label: 'Tokens' }, { value: '98.2%', label: 'Accuracy' }],
        featured: false,
    },
    {
        id: '02',
        name: 'APEX VISION',
        type: 'Multimodal AI System',
        description: 'Bridges the gap between vision and cognition. APEX VISION processes images, diagrams, and real-time video streams with sub-second latency analysis.',
        stats: [{ value: '0.3s', label: 'Latency' }, { value: '4K', label: 'Resolution' }],
        featured: true,
    },
    {
        id: '03',
        name: 'SYNAPSE NET',
        type: 'Neural Inference Engine',
        description: 'Distributed inference at scale. SYNAPSE NET orchestrates thousands of parallel reasoning threads to solve problems of unprecedented complexity.',
        stats: [{ value: '10K+', label: 'Threads' }, { value: '99.9%', label: 'Uptime' }],
        featured: false,
    },
];

const capabilities = [
    {
        title: 'Adaptive Reasoning',
        desc: 'Context-sensitive logic that evolves with each interaction, mimicking deep human cognition.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        title: 'Cross-Domain Synthesis',
        desc: 'Connects concepts across fields — physics, biology, economics — to surface non-obvious insights.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M9 6h6M6 9v6M18 9v6M9 18h6" />
            </svg>
        ),
    },
    {
        title: 'Predictive Modeling',
        desc: 'Probabilistic forecasting engines trained on longitudinal datasets spanning decades.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        title: 'Federated Learning',
        desc: 'Models trained collaboratively across distributed nodes with zero raw data exposure.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="6" height="6" rx="1" /><rect x="16" y="7" width="6" height="6" rx="1" /><rect x="9" y="14" width="6" height="6" rx="1" />
                <path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M12 10v4" />
            </svg>
        ),
    },
];

function Ai() {
    return (
        <div className="ai-page">
            <Header />

            {/* Hero */}
            <section className="ai-hero">
                <div className="ai-hero-bg" />
                <div className="ai-hero-grid-lines" />
                <div className="ai-hero-content">
                    <div className="ai-hero-text">
                        <p className="ai-hero-eyebrow">Artificial Intelligence</p>
                        <h1 className="ai-hero-title">
                            The <span>Mind</span> Behind the Machine
                        </h1>
                        <p className="ai-hero-desc">
                            Our AI systems don't just process — they understand, infer, and evolve.
                            Built on proprietary neural architectures optimised for real-world complexity.
                        </p>
                        <a href="#models" className="ai-hero-cta">
                            Explore Models
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Models */}
            <section className="ai-models-section" id="models">
                <div className="section-header">
                    <p className="section-eyebrow">AI Systems</p>
                    <h2 className="section-title">Our <span>Models</span></h2>
                </div>
                <div className="ai-models-grid">
                    {aiModels.map((model) => (
                        <div key={model.id} className={`ai-model-card${model.featured ? ' featured' : ''}`}>
                            <p className="ai-model-number">{model.id}</p>
                            <h3 className="ai-model-name">{model.name}</h3>
                            <p className="ai-model-type">{model.type}</p>
                            <p className="ai-model-desc">{model.description}</p>
                            <div className="ai-model-stats">
                                {model.stats.map((stat) => (
                                    <div key={stat.label} className="ai-stat">
                                        <span className="ai-stat-value">{stat.value}</span>
                                        <span className="ai-stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Capabilities */}
            <section className="ai-capabilities-section">
                <div className="ai-capabilities-inner">
                    <div className="section-header">
                        <p className="section-eyebrow">Core Capabilities</p>
                        <h2 className="section-title">What Our AI <span>Can Do</span></h2>
                    </div>
                    <div className="ai-capabilities-grid">
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="ai-capability-item">
                                <div className="ai-capability-icon">{cap.icon}</div>
                                <div>
                                    <p className="ai-capability-title">{cap.title}</p>
                                    <p className="ai-capability-desc">{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Ai;