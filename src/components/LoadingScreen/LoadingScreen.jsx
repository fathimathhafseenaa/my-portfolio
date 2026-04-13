import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <motion.div
                className="loading-content"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="loader-logo gradient-text-neon"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {'<F-H />'}
                </motion.div>
                <div className="loader"></div>
                <motion.p
                    className="loading-text"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Loading amazing things...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
