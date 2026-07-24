import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const categories = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'database', label: 'Database' },
        { id: 'devops', label: 'DevOps' },
        { id: 'tools', label: 'Tools' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 20, rotateY: -10, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 90, damping: 16 }
        }
    };

    return (
        <section id="skills" className="skills section" ref={ref}>
            <div className="skills-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">My Expertise</p>
                    <h2 className="gradient-text-neon glow-text">Skills & Technologies</h2>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    className="skills-tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`skill-tab ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                            {activeCategory === category.id && (
                                <motion.div
                                    layoutId="activeTabOutline"
                                    className="active-tab-indicator"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {portfolioData.skills[activeCategory]?.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card glass-card"
                                variants={cardVariants}
                                layout
                                whileHover={{ y: -6, scale: 1.02 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            >
                                <div className="skill-header">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <h4 className="skill-name">{skill.name}</h4>
                                </div>
                                <div className="skill-body">
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.proficiency}%` } : {}}
                                            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                                        />
                                    </div>
                                    <p className="skill-percentage">{skill.proficiency}%</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
