import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleDownloadResume = () => {
        const resumeUrl = '/FATHIMATH_HAFSEENA_CV.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'FATHIMATH_HAFSEENA_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="about section" ref={ref}>
            <div className="about-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Get To Know More</p>
                    <h2>About Me</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-image">
                            <img
                                src="/aboutme.png"
                                alt="About Me"
                            />
                            <div className="about-image-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="about-bio">{portfolioData.about.bio}</p>

                        <div className="about-highlights">
                            <h3>Key Highlights</h3>
                            <ul className="highlights-list">
                                {portfolioData.about.highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <span className="highlight-icon">✓</span>
                                        {highlight}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="about-fun-facts">
                            <h3>Fun Facts</h3>
                            <div className="fun-facts-grid">
                                {portfolioData.about.funFacts.map((fact, index) => (
                                    <motion.div
                                        key={index}
                                        className="fun-fact-card"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        {fact}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.button
                            className="btn btn-primary btn-lg"
                            onClick={handleDownloadResume}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload />
                            <span>Download Resume</span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
