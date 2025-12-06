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
