import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollButton: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return (
        <div style={{ display: visible ? 'block' : 'none' }}>
            <button onClick={scrollToTop} className='flex flex-col justify-center items-center'>
                <div className='animate-ping rounded-full bg-sky-400 opacity-75 h-4 w-4' />
                <AiOutlineArrowUp className='animate-bounce text-4xl' />
            </button>
        </div>
    );
}

export default ScrollButton;
