'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';

const content = {
    tr: {
        titleStart: 'Elektro-Optik',
        titleHighlight: ' Sistem Çözümleri',
        subtitle: 'Lazer mesafe ölçerler, hedef takip sistemleri ve ileri savunma teknolojileriyle sektörde fark yaratıyoruz.',
        ctaPrimary: 'Ürünlerimizi Keşfedin',
        ctaSecondary: 'İletişime Geçin',
        scroll: 'Keşfetmeye Başla',
    },
    en: {
        titleStart: 'Electro-Optical',
        titleHighlight: ' System Solutions',
        subtitle: 'We make a difference with laser range finders, target tracking systems, and advanced defense technologies.',
        ctaPrimary: 'Explore Our Products',
        ctaSecondary: 'Get in Touch',
        scroll: 'Start Exploring',
    },
};

export default function Hero()
{
    const { language } = useLanguage();
    const t = content[language];

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) =>
    {
        if (!href.startsWith('#')) return;
        e.preventDefault();
        const element = document.querySelector(href);
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className={styles.hero} id="hero">
            {/* Background Elements */}
            <div className={styles.bgGrid}></div>
            <div className={styles.bgGlow}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    >
                        {t.titleStart}
                        <span className={styles.highlight}>{t.titleHighlight}</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t.subtitle}
                    </motion.p>

                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link
                            href="#products"
                            className={styles.btnPrimary}
                            onClick={(e) => handleAnchorClick(e, '#products')}
                        >
                            {t.ctaPrimary}
                        </Link>
                        <Link
                            href="#contact"
                            className={styles.btnSecondary}
                            onClick={(e) => handleAnchorClick(e, '#contact')}
                        >
                            {t.ctaSecondary}
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span>{t.scroll}</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span className={styles.iconScroll} aria-hidden="true" />
                </motion.div>
            </motion.div>
        </section>
    );
}
