import { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Research.css';

const papers = [
    {
        year: '2025',
        title: 'Temporal Coherence in Distributed Neural Inference',
        authors: 'R. Caldwell, M. Osei, L. Hartmann et al.',
        tag: 'Neural Systems',
        category: 'neural',
    },
    {
        year: '2024',
        title: 'Cross-Modal Attention Mechanisms for Sensory Integration',
        authors: 'Y. Tanaka, F. Okonkwo, A. Rivera',
        tag: 'Multimodal',
        category: 'multimodal',
    },
    {
        year: '2024',
        title: 'Federated Cognition: Privacy-Preserving Collaborative Learning',
        authors: 'D. Singh, P. Marceau, J. Weiss',
        tag: 'Privacy AI',
        category: 'privacy',
    },
    {
        year: '2024',
        title: 'Emergent Symbolic Reasoning in Large-Scale Transformers',
        authors: 'K. Müller, S. Cho, B. Adeyemi',
        tag: 'Neural Systems',
        category: 'neural',
    },
    {
        year: '2023',
        title: 'Adversarial Robustness in Real-Time Perception Systems',
        authors: 'C. Fontaine, T. Adebayo, N. Petrov',
        tag: 'Multimodal',
        category: 'multimodal',
    },
    {
        year: '2023',
        title: 'Sparse Attention for Long-Context Language Models',
        authors: 'A. Kim, H. Nwosu, R. Bernstein',
        tag: 'Neural Systems',
        category: 'neural',
    },
];

const statsData = [
    { value: '48', label: 'Published Papers' },
    { value: '120+', label: 'Researchers' },
    { value: '12', label: 'Partner Universities' },
    { value: '3.2M', label: 'Citations' },
];

const tabs = ['All', 'Neural Systems', 'Multimodal', 'Privacy AI'];

function Research() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredPapers = activeTab === 'All'
        ? papers
        : papers.filter((p) => p.tag === activeTab);

    return (
        <div className="research-page">
            <Header />

            {/* Hero */}
            <section className="research-hero">
                <div className="research-hero-bg" />
                <div className="research-hero-content">
                    <h1 className="research-hero-title">
                        Pushing the<br />
                        <span>Boundaries</span>
                    </h1>
                    <section className="research-stats-section">
                        <div className="research-stats-inner">
                            {statsData.map((stat) => (
                                <div key={stat.label}>
                                    <p className="research-stat-value">{stat.value}</p>
                                    <p className="research-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
            {/* Papers */}
            <section className="research-papers-section">
                <div className="research-papers-header">
                    <div className="section-header" style={{ marginBottom: 0 }}>
                        <h2 style={{ fontFamily: 'Coolvetica, sans-serif', fontSize: '2.5rem', fontWeight: 400, margin: 0 }}>
                            Latest <span style={{ fontFamily: 'Induction, sans-serif', color: '#ed6a2d' }}>Papers</span>
                        </h2>
                    </div>
                    <div className="research-filter-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`filter-tab${activeTab === tab ? ' active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="research-papers-list">
                    {filteredPapers.map((paper, index) => (
                        <div key={index} className="research-paper-row">
                            <span className="paper-year">{paper.year}</span>
                            <div>
                                <p className="paper-info-title">{paper.title}</p>
                                <p className="paper-info-authors">{paper.authors}</p>
                            </div>
                            <span className="paper-tag">{paper.tag}</span>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Research;