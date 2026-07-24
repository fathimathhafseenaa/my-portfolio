import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiBriefcase, FiUsers, FiAward } from 'react-icons/fi';
import './Stats.css';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        {
            icon: <FiAward size={36} />,
            value: 1,
            suffix: '+',
            label: 'Years Experience',
            color: '#ff2a3a',
        },
        {
            icon: <FiBriefcase size={36} />,
            value: 15,
            suffix: '+',
            label: 'Projects Completed',
            color: '#ff5e6c',
        },
        {
            icon: <FiUsers size={36} />,
            value: 10,
            suffix: '+',
            label: 'Happy Clients',
            color: '#ff8a95',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <section className="stats section" ref={ref}>
            <div className="stats-container container">
                <motion.div 
                    className="stats-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="stat-card glass-card"
                            variants={itemVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                        >
                            <div className="stat-icon-wrapper" style={{ '--accent-color': stat.color }}>
                                <div className="stat-icon-glow"></div>
                                <div className="stat-icon" style={{ color: stat.color }}>
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-value">
                                    {inView && (
                                        <CountUp
                                            end={stat.value}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    )}
                                </h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
