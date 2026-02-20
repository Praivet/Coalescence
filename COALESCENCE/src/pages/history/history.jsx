import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './History.css';

const timelineEvents = [
    {
        year: '2018',
        title: 'The Founding Vision',
        desc: 'COALESCENCE was founded in a research lab by a group of rogue scientists and engineers who believed that the gap between human intuition and machine logic could be closed. The first prototype model ran on a single workstation.',
        tag: 'Foundation',
    },
    {
        year: '2019',
        title: 'First External Funding',
        desc: 'A $12M seed round enabled the team to scale infrastructure and recruit top talent from Stanford, MIT, and ETH Zurich. The team grew from 9 to 40 in under 12 months.',
        tag: 'Milestone',
    },
    {
        year: '2020',
        title: 'NEXUS CORE v1 Released',
        desc: 'Our first commercial language model shipped to early access partners. Benchmarks showed a 34% improvement over existing systems on multi-step reasoning tasks.',
        tag: 'Product',
    },
    {
        year: '2022',
        title: 'Multimodal Breakthrough',
        desc: 'The APEX VISION architecture introduced simultaneous image-language reasoning — a capability considered years away by industry consensus. Nature published our foundational paper.',
        tag: 'Research',
    },
    {
        year: '2023',
        title: 'Series B — $200M',
        desc: 'With 300+ enterprise clients and $50M ARR, COALESCENCE closed a $200M Series B to accelerate global expansion and open our first research lab in Singapore.',
        tag: 'Milestone',
    },
    {
        year: '2025',
        title: 'SYNAPSE NET & The Platform Era',
        desc: 'Launch of SYNAPSE NET — a distributed inference platform processing over 10 trillion operations per day. COALESCENCE enters the intelligence-as-a-service era.',
        tag: 'Product',
    },
];

function History() {
    return (
        <div className="history-page">
            <Header />

            {/* Hero */}
            <section className="history-hero">
                <div className="history-hero-bg" />
                <div className="history-hero-content">
                    <h1 className="history-hero-title">
                        How We<br />
                        <span>Got Here</span>
                    </h1>
                </div>
            </section>

            {/* Founding quote */}
            <section className="history-founding-section">
                <div className="history-founding-inner">
                    <div>
                        <p className="founding-quote">
                            We didn't build AI to replace thought.<br />We built it to<br /> <span>amplify it.</span>
                        </p>
                        <p className="founding-quote-author">— Elena Vasquez, Co-Founder & CEO</p>
                    </div>
                    <div className="founding-text">
                        <p>
                            COALESCENCE began as an obsession. Its founders had worked inside the largest
                            AI labs in the world and came away with a shared conviction: existing systems
                            were optimised for benchmarks, not for people.
                        </p>
                        <p>
                            They wanted to build something different — an intelligence layer that enhanced
                            human judgment rather than circumventing it. That idea grew into a company,
                            a platform, and a philosophy that now shapes everything we build.
                        </p>
                        <p>
                            From a single rented server rack in 2018 to processing trillions of operations
                            per day in 2025 — this is our story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="history-timeline-section">
                <div className="history-timeline">
                    {timelineEvents.map((event) => (
                        <div key={event.year} className="timeline-item">
                            <div className="timeline-dot" />
                            <span className="timeline-year">{event.year}</span>
                            <div>
                                <h3 className="timeline-content-title">{event.title}</h3>
                                <p className="timeline-content-desc">{event.desc}</p>
                                <span className="timeline-content-tag">{event.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default History;