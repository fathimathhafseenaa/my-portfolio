import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const [hidden, setHidden] = useState(true);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            if (dotRef.current && outlineRef.current) {
                // Apply hardware-accelerated transforms
                dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
                outlineRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            }
            if (hidden) setHidden(false);
        };

        const handleMouseEnter = () => setHidden(false);
        const handleMouseLeave = () => setHidden(true);

        const addHoverListeners = () => {
            const elements = document.querySelectorAll('a, button, .clickable, [role="button"], .project-card, .skill-card, .skill-tab, .social-link');
            elements.forEach((el) => {
                el.addEventListener('mouseenter', () => setHovered(true));
                el.addEventListener('mouseleave', () => setHovered(false));
            });
        };

        // Create observer to watch for DOM changes and re-apply listeners
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        addHoverListeners();

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
        };
    }, [hidden]);

    return (
        <>
            <div
                ref={dotRef}
                className={`custom-cursor-dot ${hidden ? 'hidden' : ''} ${hovered ? 'hover' : ''}`}
            />
            <div
                ref={outlineRef}
                className={`custom-cursor-outline ${hidden ? 'hidden' : ''} ${hovered ? 'hover' : ''}`}
            />
        </>
    );
};

export default CustomCursor;
