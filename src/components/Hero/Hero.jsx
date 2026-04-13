import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const socialLinks = [
        { icon: <FiGithub size={24} />, url: 'https://github.com/fathimathhafseenaa', label: 'GitHub' },
        { icon: <FiLinkedin size={24} />, url: 'https://www.linkedin.com/in/fathimath-hafseena/', label: 'LinkedIn' },
        { icon: <FiInstagram size={24} />, url: 'https://www.instagram.com/hafcy.___?igsh=MTZodWJ0MDV2bTNhMA%3D%3D&utm_source=qr', label: 'Instagram' },
        { icon: <FiMail size={24} />, url: 'mailto:faathimathhafseena@gmail.com', label: 'Email' },
    ];

    const handleScrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownloadResume = () => {
        const resumeUrl = '/FATHIMATH_HAFSEENA_CV.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'FATHIMATH_HAFSEENA_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="hero">
            {/* Animated Background */}
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="hero-container container">
                <div className="hero-content">
                    {/* Text Content */}
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            className="hero-greeting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hi, I'm Fathimath Hafseena
                        </motion.p>

                        <div className="hero-subtitle">
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
                        </div>

                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                         Building scalable, high-performance web applications with clean architecture and secure REST APIs. Passionate about delivering production-ready solutions with optimized performance and seamless user experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <button className="btn btn-accent btn-lg" onClick={handleScrollToProjects}>
                                View My Work
                            </button>
                            <button className="btn btn-accent btn-lg" onClick={handleScrollToContact}>
                                Hire Me
                            </button>
                            <button className="btn btn-accent btn-lg" onClick={handleDownloadResume}>
                                Download Resume
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="hero-social"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image/Avatar */}
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="image-wrapper">
                            <div className="image-glow"></div>
                            <img
                                src="/devlogo.png"
                                alt="Your Name"
                                className="hero-avatar"
                            />
                            <div className="floating-badge badge-1">
                                <span>1+</span>
                                <p>Years Experience</p>
                            </div>
                            <div className="floating-badge badge-2">
                                <span>15+</span>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                
            </div>
        </section>
    );
};

export default Hero;
