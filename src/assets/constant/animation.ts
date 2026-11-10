import type { DynamicAnimationOptions } from 'framer-motion';

// header
export const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
};

export const scrollHeaderVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    hidden: {
        y: -100,
        opacity: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const navItemVariants = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

// h1
export const mainTitleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
            // delay: 1,
        },
    },
};

//cards
export const cardVariants = {
    hidden: {
        y: 100,
        opacity: 0,
        filter: 'blur(10px)',
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            filter: { duration: 0.7, ease: 'easeOut' },
        },
    },
};

//about
export const sectionVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

//show more button
export const showMoreVariants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.2, 0.6, 0.2, 1] },
    },
    // Dissolves in place (no vertical movement): soft blur + slight shrink, like the cards' reveal in reverse.
    exit: {
        opacity: 0,
        scale: 0.94,
        filter: 'blur(12px)',
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.35, ease: 'easeInOut' },
        },
    },
};

// projects list height when "Show more" is clicked — the section below slides down smoothly
export const projectsExpandTransition: DynamicAnimationOptions = {
    duration: 0.65,
    ease: [0.65, 0, 0.35, 1],
};

// projects revealed by "Show more" — same motion as the regular cards, just quicker
export const revealedCardVariants = {
    hidden: cardVariants.hidden,
    visible: {
        ...cardVariants.visible,
        transition: {
            duration: 0.7,
            ease: 'easeInOut',
            filter: { duration: 0.45, ease: 'easeOut' },
        },
    },
};
