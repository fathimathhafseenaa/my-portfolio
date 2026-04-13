import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        { name: 'Web Development', href: '#services' },
        { name: 'Frontend Development', href: '#services' },
        { name: 'Backend Development', href: '#services' },
        { name: 'API Development', href: '#services' },
    ];



    const socialLinks = [
        { icon: <FiGithub size={20} />, url: 'https://github.com/fathimathhafseenaa', label: 'GitHub' },
        { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/fathimath-hafseena/', label: 'LinkedIn' },
        { icon: <FiInstagram size={20} />, url: 'https://www.instagram.com/hafcy.___?igsh=MTZodWJ0MDV2bTNhMA%3D%3D&utm_source=qr', label: 'Instagram' },
        { icon: <FiMail size={20} />, url: 'mailto:faathimathhafseena@gmail.com', label: 'Email' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLinkClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container container">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="footer-column">
                        <div className="footer-logo gradient-text-neon">
                            {'<FH />'}
                        </div>
                        <p className="footer-description">
                            Full-Stack MERN Developer passionate about building scalable web applications
                            and creating seamless user experiences.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.href);
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a
                                        href={service.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(service.href);
                                        }}
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Get In Touch</h4>
                        <p className="footer-contact">
                            <strong>Email:</strong><br />
                            faathimathhafseena@gmail.com
                        </p>
                        <p className="footer-contact">
                            <strong>Location:</strong><br />
                            United Arab Emirates
                        </p>
                        <p className="footer-availability">
                            <span className="status-dot"></span>
                            Available for hire
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Fathimath Hafseena. All rights reserved.
                    </p>
                    <p className="footer-built">
                        Built with React & <FiHeart className="heart-icon" />
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
