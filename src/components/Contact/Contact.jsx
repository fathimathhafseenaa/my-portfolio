import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        setLoading(true);

        try {
            // Format message for WhatsApp
            const text = `*New Contact Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/9746706081?text=${encodedText}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');

            toast.success('Opening WhatsApp to send your message!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
        } catch (error) {
            toast.error('Failed to open WhatsApp. Please try again.');
            setLoading(false);
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('your.email@example.com');
        setCopied(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="contact section" ref={ref}>
            <div className="contact-container container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                    <p className="section-subtitle">Get In Touch</p>
                    <h2>Contact Me</h2>
                </motion.div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Let's Work Together</h3>
                        <p className="contact-description">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FiMail />
                                </div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <p>faathimathhafseena@gmail.com</p>
                                    <button className="copy-btn" onClick={copyEmail}>
                                        {copied ? <FiCheck /> : <FiCopy />}
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FiPhone />
                                </div>
                                <div className="contact-text">
                                    <h4>Phone</h4>
                                    <p>+919746706081 , +971508856081</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FiMapPin />
                                </div>
                                <div className="contact-text">
                                    <h4>Location</h4>
                                    <p>United Arab Emirates</p>
                                </div>
                            </div>
                        </div>

                        <div className="availability-status ">
                            <span className="status-dot"></span>
                            <span>Available for hire</span>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="6"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg submit-btn"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="loader-small"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FiSend />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
