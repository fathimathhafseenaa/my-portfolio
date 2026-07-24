import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import ThreeDCard from '../ThreeDCard/ThreeDCard';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

    const filteredProjects = filter === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter || (filter === 'Full-Stack' && p.category.includes('Full-Stack')));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, rotateX: 25, rotateY: -12, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 80, damping: 15 }
        }
    };

    return (
        <section id="projects" className="projects section" ref={ref}>
            <div className="projects-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">My Work</p>
                    <h2 className="gradient-text-neon glow-text">Featured Projects</h2>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <FiFilter className="filter-icon" />
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                layout
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                className="project-card-wrapper"
                            >
                                <ThreeDCard className="project-card-3d">
                                    <div className="project-card glass-card">
                                        {project.featured && <div className="featured-badge">Featured</div>}
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                            <div className="project-overlay">
                                                <div className="project-links">
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                        <FiExternalLink size={20} />
                                                    </a>
                                                    {project.githubUrl && (
                                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                            <FiGithub size={20} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-tags">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="project-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ThreeDCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <a
                        href="https://github.com/fathimathhafseenaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary-glass btn-lg glow-btn-outline"
                    >
                        View All Projects
                    </a> 
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;