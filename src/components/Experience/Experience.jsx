import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 15 }
        }
    };

    return (
        <section id="experience" className="experience section" ref={ref}>
            <div className="experience-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">My Journey</p>
                    <h2 className="gradient-text-neon glow-text">Work Experience</h2>
                </motion.div>

                <motion.div 
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            variants={itemVariants}
                        >
                            <div className="timeline-dot-wrapper">
                                <div className="timeline-dot"></div>
                                <div className="timeline-dot-pulse"></div>
                            </div>
                            <div className="timeline-content glass-card">
                                <div className="timeline-header">
                                    <div className="timeline-info">
                                        <h3 className="position-title">{exp.position}</h3>
                                        <h4 className="company-title">{exp.company}</h4>
                                        <p className="timeline-duration">{exp.duration} • {exp.location}</p>
                                    </div>
                                </div>
                                <p className="timeline-description">{exp.description}</p>
                                <ul className="timeline-responsibilities">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>
                                            <span className="bullet-indicator">▹</span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
