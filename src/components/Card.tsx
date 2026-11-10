import { FC, useId, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import {
    cardVariants,
    projectsExpandTransition,
    revealedCardVariants,
    showMoreVariants,
} from '../assets/constant/animation';
import { CardsTypes, useTranslatedServicesData } from '../assets/constant/cards';

/** How many projects are shown on the main page before "Show more". */
export const INITIAL_VISIBLE_PROJECTS = 6;

interface CardItemProps {
    item: CardsTypes;
    /** When false the card stays hidden even if it is in view (used while the list is expanding). */
    canReveal?: boolean;
    /** Revealed by "Show more" — uses a quicker version of the card animation. */
    isRevealed?: boolean;
}

const CardItem: FC<CardItemProps> = ({ item, canReveal = true, isRevealed = false }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            className="work-item mb-[100px] text-center box-border inline-block w-[calc(50%-60px)]"
            initial="hidden"
            animate={inView && canReveal ? 'visible' : 'hidden'}
            variants={isRevealed ? revealedCardVariants : cardVariants}
        >
            <Link to={item.link}>
                <div className="work-item__image h-[640px] overflow-hidden rounded-3xl">
                    <img
                        className="block w-full h-full object-cover"
                        src={item.image}
                        alt={item.title}
                    />
                </div>
                <div className="text-center mt-6 max-md:mt-3">
                    <h3 className="text-black font-medium text-[22px] block leading-relaxed max-md:text-lg">
                        {item.title}
                    </h3>
                    <p className="text-grey font-light text-lg max-md:text-base">{item.text}</p>
                </div>
            </Link>
        </motion.div>
    );
};

interface ShowMoreButtonProps {
    hiddenCount: number;
    controlsId: string;
    onClick: () => void;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ hiddenCount, controlsId, onClick }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="flex justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={showMoreVariants}
        >
            <button
                type="button"
                onClick={onClick}
                aria-expanded={false}
                aria-controls={controlsId}
                className="group inline-flex items-center gap-3 rounded-full border border-black px-10 py-4 text-[22px] font-medium text-black transition-colors duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black max-md:w-full max-md:justify-center max-md:px-8 max-md:py-3 max-md:text-lg"
            >
                {t('main.showMore')}
                <span className="font-light text-grey transition-colors duration-500 group-hover:text-white/70">
                    (+{hiddenCount})
                </span>
            </button>
        </motion.div>
    );
};

/**
 * collapsed — first N projects + "Show more" button
 * hiding    — button dissolves in place, layout is untouched
 * expanding — hidden projects are mounted (invisible), container height slides open
 * expanded  — height is `auto` again, new projects reveal with the regular card animation
 */
type ExpandPhase = 'collapsed' | 'hiding' | 'expanding' | 'expanded';

const Card: FC = () => {
    const projects = useTranslatedServicesData();
    const [phase, setPhase] = useState<ExpandPhase>('collapsed');
    const shouldReduceMotion = useReducedMotion();
    const listId = useId();

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const isButtonVisible = phase === 'collapsed';
    const showAllProjects = phase === 'expanding' || phase === 'expanded';

    const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_VISIBLE_PROJECTS);
    const hiddenCount = projects.length - visibleProjects.length;
    const hasHiddenProjects = hiddenCount > 0;

    // On desktop every even card is shifted down by 300px (see `.work-item` in index.css).
    // When the list ends on such a card it overflows the container, so we reserve the space.
    const endsWithShiftedCard = visibleProjects.length % 2 === 0;

    const handleButtonExitComplete = (): void => {
        const container = containerRef.current;
        if (!container) return;

        // Freeze the current height before new projects mount, so nothing below jumps.
        container.style.height = `${container.offsetHeight}px`;
        container.style.overflow = 'hidden';
        setPhase('expanding');
    };

    useLayoutEffect(() => {
        if (phase !== 'expanding') return;

        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        const controls = animate(
            container,
            { height: [container.offsetHeight, content.offsetHeight] },
            shouldReduceMotion ? { duration: 0 } : projectsExpandTransition,
        );

        controls.then(() => {
            container.style.height = '';
            container.style.overflow = '';
            setPhase('expanded');
        });

        return () => controls.stop();
    }, [phase, shouldReduceMotion]);

    return (
        <section ref={containerRef}>
            <div ref={contentRef}>
                <div
                    id={listId}
                    className={`flex flex-wrap justify-between max-w-[1200px] mx-auto ${
                        hasHiddenProjects && endsWithShiftedCard ? 'md:pb-[300px]' : ''
                    }`}
                >
                    {visibleProjects.map((item, index) => (
                        <CardItem
                            key={item.id}
                            item={item}
                            canReveal={index < INITIAL_VISIBLE_PROJECTS || phase === 'expanded'}
                            isRevealed={index >= INITIAL_VISIBLE_PROJECTS}
                        />
                    ))}
                </div>

                <AnimatePresence onExitComplete={handleButtonExitComplete}>
                    {hasHiddenProjects && isButtonVisible && (
                        <ShowMoreButton
                            key="show-more"
                            hiddenCount={hiddenCount}
                            controlsId={listId}
                            onClick={() => setPhase('hiding')}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Card;
