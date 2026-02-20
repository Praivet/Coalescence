import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './RotatingText.css';

function RotatingText({
    text,
    y = -10,
    duration = 1000,
    transition = { duration: 0.2, ease: 'easeOut' },
    className = '',
    ...props
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!Array.isArray(text)) {
            return;
        }

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, duration);

        return () => clearInterval(interval);
    }, [text, duration]);

    const currentText = Array.isArray(text) ? text[index] : text;

    return (
        <div className={`rotating-text-container ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentText}
                    initial={{ opacity: 1, y: -y }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y }}
                    transition={transition}
                    className="rotating-text-item"
                    {...props}
                >
                    {currentText}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default RotatingText;