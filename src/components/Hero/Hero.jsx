import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowDown } from 'react-icons/fi';
import ThreeDCard from '../ThreeDCard/ThreeDCard';
import './Hero.css';

const Hero = () => {
    const socialLinks = [
        { icon: <FiGithub size={22} />, url: 'https://github.com/fathimathhafseenaa', label: 'GitHub' },
        { icon: <FiLinkedin size={22} />, url: 'https://www.linkedin.com/in/fathimath-hafseena/', label: 'LinkedIn' },
        { icon: <FiInstagram size={22} />, url: 'https://www.instagram.com/hafcy.___?igsh=MTZodWJ0MDV2bTNhMA%3D%3D&utm_source=qr', label: 'Instagram' },
        { icon: <FiMail size={22} />, url: 'mailto:fathimathhafseenaa@gmail.com', label: 'Email' },
    ];

    const handleScrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownloadResume = () => {
        const resumeUrl = '/videos/FATHIMATH_HAFSEENA_CV.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'FATHIMATH_HAFSEENA_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        }
    };

    return (
        <section id="home" className="hero">
            {/* Animated Background */}
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="hero-grid-overlay"></div>
            </div>

            <div className="hero-container container">
                <div className="hero-content">
                    {/* Text Content */}
                    <motion.div
                        className="hero-text"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span
                            className="hero-greeting"
                            variants={itemVariants}
                        >
                            <span className="greeting-line"></span>
                            Hello, I'm
                        </motion.span>

                        <motion.h1 
                            className="hero-name" 
                            variants={itemVariants}
                        >
                            Fathimath <span className="gradient-text-neon glow-text">Hafseena</span>
                        </motion.h1>

                        <motion.div className="hero-subtitle" variants={itemVariants}>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    3000,
                                    'MERN Stack Expert',
                                    2000,
                                    'Laravel Developer',
                                    2000,
                                    'React Specialist',
                                    2000,
                                    'Node.js Developer',
                                    2000,
                                ]}
                                wrapper="h2"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p
                            className="hero-description"
                            variants={itemVariants}
                        >
                            Building scalable, high-performance web applications with clean architecture and secure REST APIs. Passionate about delivering production-ready solutions with optimized performance and seamless user experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="hero-cta"
                            variants={itemVariants}
                        >
                            <button className="btn btn-accent btn-lg glow-btn" onClick={handleScrollToProjects}>
                                <span>View My Work</span>
                            </button>
                            <button className="btn btn-secondary-glass btn-lg" onClick={handleScrollToContact}>
                                <span>Hire Me</span>
                            </button>
                            <button className="btn btn-secondary-glass btn-lg" onClick={handleDownloadResume}>
                                <span>Download Resume</span>
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="hero-social"
                            variants={itemVariants}
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image/Avatar */}
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: 'spring', bounce: 0.25, delay: 0.3 }}
                    >
                        <ThreeDCard className="image-wrapper-3d">
                            <div className="image-wrapper">
                                <div className="orbit-ring ring-1"></div>
                                <div className="orbit-ring ring-2"></div>
                                <div className="image-glow"></div>
                                <img
                                    src="/devlogo.png"
                                    alt="Fathimath Hafseena"
                                    className="hero-avatar"
                                />
                                <div className="floating-badge badge-1 glass-card">
                                    <span>1+</span>
                                    <p>Year Experience</p>
                                </div>
                                <div className="floating-badge badge-2 glass-card">
                                    <span>15+</span>
                                    <p>Projects Done</p>
                                </div>
                            </div>
                        </ThreeDCard>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator" onClick={handleScrollToProjects}>
                <p>Scroll Down</p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FiArrowDown size={18} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
