import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Forum.css';

const categories = ['All', 'Product', 'Research', 'Milestone', 'Engineering'];

function Forum() {
    const [news, setNews] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const q = query(collection(db, 'forum'), orderBy('date', 'desc'));
                const snapshot = await getDocs(q);
                const items = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNews(items);
            } catch (err) {
                console.error('Error fetching forum data:', err);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    const filteredNews = activeCategory === 'All'
        ? news
        : news.filter((item) => item.category === activeCategory);

    return (
        <div className="forum-page">
            <Header />

            {/* Hero */}
            <section className="forum-hero">
                <div className="forum-hero-bg" />
                <div className="forum-hero-grid" />
                <div className="forum-hero-content">
                    <p className="forum-eyebrow">Company Updates</p>
                    <h1 className="forum-hero-title">
                        Latest <span>News</span>
                    </h1>
                    <p className="forum-hero-subtitle">
                        Stay up to date with COALESCENCE — product launches, research breakthroughs,
                        and milestones from the frontier of intelligence.
                    </p>
                </div>
            </section>

            {/* News section */}
            <section className="forum-news-section">

                {/* Filter tabs + count */}
                <div className="forum-controls">
                    <div className="forum-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`forum-tab${activeCategory === cat ? ' active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <span className="forum-count">
                        {isLoading ? '—' : `${filteredNews.length} update${filteredNews.length !== 1 ? 's' : ''}`}
                    </span>
                </div>

                {/* Loading state */}
                {isLoading && (
                    <div className="forum-loading">
                        <div className="forum-loading-spinner" />
                        <p>Loading updates...</p>
                    </div>
                )}

                {/* Error state */}
                {hasError && !isLoading && (
                    <div className="forum-error">
                        <p>Could not connect to the database. Check your Firebase configuration.</p>
                    </div>
                )}

                {/* Empty state */}
                {!isLoading && !hasError && filteredNews.length === 0 && (
                    <div className="forum-empty">
                        <p>No updates found in this category.</p>
                    </div>
                )}

                {/* News grid */}
                {!isLoading && !hasError && filteredNews.length > 0 && (
                    <div className="forum-grid">
                        {filteredNews.map((item, index) => (
                            <article
                                key={item.id}
                                className={`forum-card${index === 0 ? ' forum-card--featured' : ''}`}
                            >
                                <div className="forum-card-header">
                                    <span className="forum-card-category">{item.category}</span>
                                    <span className="forum-card-date">{item.date}</span>
                                </div>
                                <h2 className="forum-card-title">{item.title}</h2>
                                <p className="forum-card-content">{item.content}</p>
                                <div className="forum-card-footer">
                                    <div className="forum-card-author">
                                        <div className="forum-author-avatar">
                                            {item.author?.charAt(0) ?? '?'}
                                        </div>
                                        <span className="forum-author-name">{item.author}</span>
                                    </div>
                                    <button className="forum-card-read-more">
                                        Read more
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}

export default Forum;