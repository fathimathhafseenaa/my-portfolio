import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import './Testimonials.css';

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="testimonials" className="testimonials section" ref={ref}>
            <div className="testimonials-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                    <p className="section-subtitle">Client Feedback</p>
                    <h2>Testimonials</h2>
                </motion.div>

                <div className="testimonials-grid">
                    {portfolioData.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FiStar key={i} className="star-icon" fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.position}</p>
                                    <p className="author-company">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
