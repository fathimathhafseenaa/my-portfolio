import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiCamera, FiX } from 'react-icons/fi';
import './Videography.css';

const Videography = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: 1,
            title: 'Cinematic Travel Film',
            description: 'A visual journey through stunning landscapes',
            src: '/videos/cinematic.mp4',
            category: 'Travel',
        },
        {
            id: 2,
            title: 'Kappil Beauty',
            description: 'Capturing the serene beauty of Kappil beach',
            src: '/videos/kappil.mp4',
            category: 'Nature',
        },
        {
            id: 3,
            title: 'Nandi Hills',
            description: 'Morning vibes at Nandi Hills',
            src: '/videos/nandi.mp4',
            category: 'Travel',
        },
    ];

    const handleMouseEnter = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <section id="videography" className="videography section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Creative Passion</p>
                    <h2 className="section-title">Videography</h2>
                    <p className="section-description">
                        Beyond code, I explore visual storytelling through videography —
                        a creative outlet that complements my technical work.
                    </p>
                </motion.div>

                <div className="videography-grid">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className="video-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleVideoClick(video)}
                        >
                            <div className="video-thumbnail">
                                <video
                                    src={video.src}
                                    muted
                                    loop
                                    playsInline
                                    className="video-element"
                                />
                                <div className="video-overlay">
                                    <FiPlay className="play-icon" size={48} />
                                </div>
                                <div className="video-category">
                                    <FiCamera size={16} />
                                    <span>{video.category}</span>
                                </div>
                            </div>
                            <div className="video-content">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="videography-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p>
                        <FiCamera size={20} />
                        Videography is a creative hobby that helps me explore visual composition,
                        storytelling, and attention to detail — skills that enhance my development work.
                    </p>
                </motion.div>

                <motion.div
                    className="videography-cta"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a
                        href="https://www.instagram.com/shaaz_muhammed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        View All Videos
                    </a>
                </motion.div>
            </div>

            {/* Full Screen Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="video-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="video-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal-btn" onClick={closeModal}>
                                <FiX size={32} />
                            </button>
                            <video
                                src={selectedVideo.src}
                                controls
                                autoPlay
                                className="modal-video-player"
                            />
                            <div className="modal-video-info">
                                <h3>{selectedVideo.title}</h3>
                                <p>{selectedVideo.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Videography;
