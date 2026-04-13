import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="experience section" ref={ref}>
            <div className="experience-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                    <p className="section-subtitle">My Journey</p>
                    <h2>Work Experience</h2>
                </motion.div>

                <div className="timeline">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div className="timeline-info">
                                        <h3>{exp.position}</h3>
                                        <h4>{exp.company}</h4>
                                        <p className="timeline-duration">{exp.duration} • {exp.location}</p>
                                    </div>
                                </div>
                                <p className="timeline-description">{exp.description}</p>
                                <ul className="timeline-responsibilities">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
