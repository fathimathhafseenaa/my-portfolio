import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

    const filteredProjects = filter === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects section" ref={ref}>
            <div className="projects-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                    <p className="section-subtitle">My Work</p>
                    <h2>Featured Projects</h2>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <FiFilter />
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
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {project.featured && <div className="featured-badge">Featured</div>}
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FiExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FiGithub size={20} />
                                        </a>
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
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
<<<<<<< HEAD
          
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
