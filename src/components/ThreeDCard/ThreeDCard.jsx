import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const ThreeDCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Snappier and deeper 3D tilt springs
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [28, -28]), { damping: 15, stiffness: 250 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-28, 28]), { damping: 15, stiffness: 250 });

    // Motion values for light glare reflection (percents)
    const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { damping: 20 });
    const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { damping: 20 });

    // Dynamic background template
    const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 42, 58, 0.15) 0%, transparent 60%)`;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Normalize mouse coordinates from -0.5 to 0.5 relative to card center
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        x.set((mouseX / width) - 0.5);
        y.set((mouseY / height) - 0.5);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1200,
                transformStyle: 'preserve-3d',
            }}
            className={className}
        >
            <motion.div
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-full h-full relative"
            >
                {/* Glare reflection overlay */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: glareBg,
                        pointerEvents: 'none',
                        zIndex: 10,
                        borderRadius: 'inherit',
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                    }}
                />
                
                <div style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default ThreeDCard;
