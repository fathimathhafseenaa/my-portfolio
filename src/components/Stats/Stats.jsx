import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiBriefcase, FiUsers, FiCoffee, FiAward } from 'react-icons/fi';
import './Stats.css';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        {
            icon: <FiAward size={32} />,
            value: 1,
            suffix: '+',
            label: 'Years Experience',
            color: 'var(--primary-blue)',
        },
        {
            icon: <FiBriefcase size={32} />,
            value: 15,
            suffix: '+',
            label: 'Projects Completed',
            color: 'var(--primary-purple)',
        },
        {
            icon: <FiUsers size={32} />,
            value: 10,
            suffix: '+',
            label: 'Happy Clients',
            color: 'var(--primary-cyan)',
        },
        // {
        //     icon: <FiCoffee size={32} />,
        //     value: 1000,
        //     suffix: '+',
        //     label: 'Cups of Coffee',
        //     color: 'var(--accent-orange)',
        // },
    ];

    return (
        <section className="stats section" ref={ref}>
            <div className="stats-container container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="stat-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="stat-icon" style={{ color: stat.color }}>
                                {stat.icon}
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
                </div>
            </div>
        </section>
    );
};

export default Stats;
