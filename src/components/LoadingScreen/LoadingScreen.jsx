import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const diff = Math.random() * 12 + 3;
                return Math.min(prev + diff, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-grid-overlay"></div>
            <motion.div
                className="loading-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="loader-ring-container">
                    <motion.div 
                        className="loader-ring"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="loader-inner-circle">
                        <span className="loader-initials">FH</span>
                    </div>
                </div>

                <div className="loader-progress-wrapper">
                    <div className="loader-progress-bar">
                        <div 
                            className="loader-progress-fill" 
                            style={{ width: `${progress}%` }} 
                        />
                    </div>
                    <div className="loader-details">
                        <span className="loader-status">Syncing Portfolio</span>
                        <span className="loader-percentage">{Math.round(progress)}%</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
