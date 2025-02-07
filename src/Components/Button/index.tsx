import { AnimationControls, motion, useAnimation } from 'framer-motion';
import { marquee } from '@src/utils/animations.ts';

// Define button props interface
interface ButtonProps {
    title: string;
    link?: string;
    isSmall?: boolean;
    background?: string; // You can specify a background color here
    onClick?: () => void;
    className?: string
}

interface ButtonTitleProps {
    title: string;
    isSmall?: boolean;
    controls: AnimationControls;
}

const ButtonTitle: React.FC<ButtonTitleProps> = ({ title, isSmall, controls, }) => (
    <motion.span
        variants={marquee}
        initial="initial"
        animate={controls}
        className={`inline-block text-center px-[0.7em] pt-[0.2em] pb-[0.6em] text-white ${isSmall ? 'text-base' : 'text-xl'
            }`}
    >
        {title}
    </motion.span>
);

const Button: React.FC<ButtonProps> = ({ title, isSmall, background, onClick, className }) => {
    const controls = useAnimation();

    const handleMouseEnterControls = () => controls.start('animate');
    const handleMouseLeaveControls = () => controls.start('initial');

    return (
        <button
            onClick={onClick}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
            style={{
                backgroundColor: background || '#BE2026', // Default background color, change as needed
            }}
            className={`relative group font-heading-narrow font-bold text-center ${isSmall ? 'text-base' : 'text-xl'
                } text-[var(--black)] px-[0.7em] pt-[0.3em] pb-[0.3em] tracking-[0.01em] rounded ${className}`}
        >
            <span className="opacity-0"> {title} </span>
            <span className="absolute top-0 left-0 bottom-0 w-full overflow-hidden pointer-events-none whitespace-nowrap">
                <ButtonTitle title={title} isSmall={isSmall} controls={controls} />
                <ButtonTitle title={title} isSmall={isSmall} controls={controls} />
            </span>
        </button>
    );
};

export default Button;
