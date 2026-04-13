import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import './Blog.css';

const Blog = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="blog" className="blog section" ref={ref}>
            <div className="blog-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                    <p className="section-subtitle">Latest Articles</p>
                    <h2>Blog</h2>
                </motion.div>

                <div className="blog-grid">
                    {portfolioData.blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="blog-image">
                                <img src={blog.image} alt={blog.title} />
                                <span className="blog-category">{blog.category}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
                                    <span className="blog-read-time">
                                        <FiClock size={14} /> {blog.readTime}
                                    </span>
                                </div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                                <div className="blog-tags">
                                    {blog.tags.map((tag) => (
                                        <span key={tag} className="blog-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={`/blog/${blog.id}`} className="blog-link">
                                    Read More <FiArrowRight />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="blog-cta"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <button className="btn btn-primary btn-lg">View All Posts</button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
