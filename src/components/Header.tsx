import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { navItemVariants, scrollHeaderVariants } from '../assets/constant/animation';

const Header: FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { scrollY } = useScroll();
    const isHomePage = location.pathname === '/';

    const [hidden, setHidden] = React.useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = React.useState<number>(0);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const difference = latest - lastScrollY;

        if (difference > 50 && latest > 100) {
            setHidden(true);
            setLastScrollY(latest);
        } else if (difference < 0) {
            setHidden(false);
            setLastScrollY(latest);
        }
    });

    return (
        <motion.header
            className="py-8 sticky top-0 bg-white z-10 opacity-100 max-md:py-5"
            initial="visible"
            animate={hidden ? 'hidden' : 'visible'}
            variants={scrollHeaderVariants}
        >
            <nav>
                <ul className="flex justify-between items-center">
                    <motion.li
                        custom={0}
                        initial="initial"
                        animate="animate"
                        variants={navItemVariants}
                    >
                        <Link
                            to="/"
                            className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg"
                        >
                            {t('header.me')}
                        </Link>
                    </motion.li>

                    <div className="flex gap-10 items-center max-[423px]:gap-4">
                        <motion.li
                            custom={1}
                            initial="initial"
                            animate="animate"
                            variants={navItemVariants}
                        >
                            <Link
                                to={isHomePage ? '/about' : '/'}
                                className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg"
                            >
                                {isHomePage ? t('header.about') : t('header.work')}
                            </Link>
                        </motion.li>

                        <motion.li
                            custom={2}
                            initial="initial"
                            animate="animate"
                            variants={navItemVariants}
                        >
                            <LanguageSwitcher />
                        </motion.li>
                    </div>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
