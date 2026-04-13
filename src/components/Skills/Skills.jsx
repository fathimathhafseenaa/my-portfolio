import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categories = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'database', label: 'Database' },
        { id: 'devops', label: 'deployment' },
        { id: 'other', label: 'tools' },
    ];

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
                    <h2>Skills & Technologies</h2>
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
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {portfolioData.skills[activeCategory]?.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h4 className="skill-name">{skill.name}</h4>
                            <div className="skill-bar">
                                <motion.div
                                    className="skill-progress"
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: `${skill.proficiency}%` } : {}}
                                    transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                                />
                            </div>
                            <p className="skill-percentage">{skill.proficiency}%</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
