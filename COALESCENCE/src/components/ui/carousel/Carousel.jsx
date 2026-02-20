import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from '../spotlight-card/SpotlightCard';
import './Carousel.css';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 = izquierda, 1 = derecha

    const cards = [
        {
            id: 1,
            title: "Making the perfect human",
            description: "At Coalescence, we are dedicated to pushing the boundaries of human potential. Our mission is to create a future where technology and humanity work together seamlessly to achieve the impossible.",
            specs: [
                { label: "Adaptive AI", value: "I.N.D" },
                { label: "BioTech", value: "C.O.R.E" },
                { label: "Precision", value: "99.8%" }
            ]
        },
        {
            id: 2,
            title: "Neural Integration Systems",
            description: "Our advanced neural interfaces allow seamless communication between human consciousness and digital systems, creating unprecedented cognitive enhancement capabilities.",
            specs: [
                { label: "Response Time", value: "< 1ms" },
                { label: "Bandwidth", value: "10 Tbps" },
                { label: "Compatibility", value: "Universal" }
            ]
        },
        {
            id: 3,
            title: "Biological Enhancement",
            description: "Revolutionary biotechnology that enhances human physiology at the cellular level, providing superior strength, endurance, and regenerative capabilities.",
            specs: [
                { label: "Enhancement", value: "300%" },
                { label: "Recovery", value: "Instant" },
                { label: "Longevity", value: "Extended" }
            ]
        }
    ];

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Variantes de animación
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <div className="carousel-container">
            {/* Botón anterior */}
            <button
                className="carousel-button carousel-button-prev"
                onClick={goToPrevious}
                aria-label="Previous card"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            {/* Card actual con animación */}
            <div className="carousel-card-wrapper">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.3 }
                        }}
                    >
                        <SpotlightCard
                            spotlightColor="rgba(196, 105, 45, 0.45)"
                            className="carousel-card"
                        >
                            <h2 className="card-title">{cards[currentIndex].title}</h2>
                            <p className="card-description">
                                {cards[currentIndex].description}
                            </p>
                            <div className="card-specs">
                                {cards[currentIndex].specs.map((spec, index) => (
                                    <div key={index} className="spec-item">
                                        <span className="spec-label">{spec.label}</span>
                                        <span className="spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Botón siguiente */}
            <button
                className="carousel-button carousel-button-next"
                onClick={goToNext}
                aria-label="Next card"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            {/* Indicadores (dots) */}
            <div className="carousel-indicators">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;