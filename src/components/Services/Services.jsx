import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';
import './Services.css';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="services" className="services section" ref={ref}>
            <div className="services-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                    <p className="section-subtitle">What I Offer</p>
                    <h2>Services</h2>
                </motion.div>

                <div className="services-grid">
                    {portfolioData.services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <button className="btn btn-secondary">Learn More</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
