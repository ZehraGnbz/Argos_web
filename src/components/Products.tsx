'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Crosshair, Battery, Radar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Products.module.css';
import { useLanguage } from '@/context/LanguageContext';

const products = {
    tr: [
        {
            id: 'asl40',
            title: 'Lazer Mesafe Ölçer',
            subtitle: 'ASL-40',
            description: '40 metre menzil ve ±1cm hassasiyetle yüksek doğruluklu lazer mesafe ölçer.',
            icon: Crosshair,
            specs: ['40m Menzil', '±1cm Hassasiyet', 'MIL-STD-810G'],
            color: '#4a90b8',
        },
        {
            id: 's-battery',
            title: 'Hibrit Batarya Paketi',
            subtitle: 'S-BATTERY',
            description: 'Uzun ömürlü ve yüksek güvenilirlikli askeri sınıf hibrit batarya sistemi.',
            icon: Battery,
            specs: ['Isı Yönetimi', 'Akıllı BMS', '1.000.000+ Döngü'],
            color: '#5eb3e4',
        },
        {
            id: 'csal',
            title: 'Lazer Spot Tracker',
            subtitle: 'CSAL',
            description: 'İHA sistemleri için hassas hedefleme özellikli lazer spot takip modülü.',
            icon: Radar,
            specs: ['Çok Bantlı', 'Düşük Gecikme', 'Kompakt Tasarım'],
            color: '#6cc4e8',
        },
    ],
    en: [
        {
            id: 'asl40',
            title: 'Laser Range Finder',
            subtitle: 'ASL-40',
            description: 'High-precision laser range finder with 40-meter range and ±1cm accuracy.',
            icon: Crosshair,
            specs: ['40m Range', '±1cm Accuracy', 'MIL-STD-810G'],
            color: '#4a90b8',
        },
        {
            id: 's-battery',
            title: 'Hybrid Battery Pack',
            subtitle: 'S-BATTERY',
            description: 'Military-grade hybrid battery system with long life and high reliability.',
            icon: Battery,
            specs: ['Thermal Management', 'Smart BMS', '1.000.000+ Cycles'],
            color: '#5eb3e4',
        },
        {
            id: 'csal',
            title: 'Laser Spot Tracker',
            subtitle: 'CSAL',
            description: 'Laser spot tracking module for UAV systems with precision targeting.',
            icon: Radar,
            specs: ['Multi-Band', 'Low Latency', 'Compact Design'],
            color: '#6cc4e8',
        },
    ],
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const UNIFIED_ICON_COLOR = '#5eb3e4';

export default function Products()
{
    const { language } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const preventNewTabOpen = (e: React.MouseEvent<HTMLAnchorElement>) =>
    {
        if (e.button === 1 || e.metaKey || e.ctrlKey)
        {
            e.preventDefault();
        }
    };
    const t = language === 'tr'
        ? {
            titlePrefix: 'İleri Teknoloji',
            titleHighlight: 'Elektro-Optik',
            titleSuffix: 'Ürünler',
            subtitle: 'Milli mühendislikle geliştirilen, askeri standartlarda üretilen elektro-optik sistem çözümleri.',
            detail: 'Detaylı Bilgi',
        }
        : {
            titlePrefix: 'Advanced',
            titleHighlight: 'Electro-Optical',
            titleSuffix: 'Products',
            subtitle: 'Electro-optical system solutions developed with national engineering and produced to military standards.',
            detail: 'View Details',
        };

    return (
        <section className={styles.products} id="products" ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                >
                    <h2 className={styles.title}>
                        {t.titlePrefix} <span className={styles.highlight}>{t.titleHighlight}</span> {t.titleSuffix}
                    </h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {products[language].map((product) =>
                    {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.id}
                                className={styles.card}
                                variants={cardVariants}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.22 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <div
                                    className={styles.cardGlow}
                                    style={{ background: `radial-gradient(circle at center, ${product.color}20 0%, transparent 70%)` }}
                                />

                                <div className={styles.iconWrapper} style={{ background: `${product.color}20` }}>
                                    <Icon size={32} style={{ color: UNIFIED_ICON_COLOR }} />
                                </div>

                                <span className={styles.productSubtitle}>{product.subtitle}</span>
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <p className={styles.productDescription}>{product.description}</p>

                                <ul className={styles.specs}>
                                    {product.specs.map((spec, index) => (
                                        <li key={index} className={styles.spec}>
                                            <span className={styles.specDot} style={{ background: product.color }} />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/urunler/${product.id}`}
                                    className={styles.cardLink}
                                    onMouseDown={preventNewTabOpen}
                                    onAuxClick={preventNewTabOpen}
                                    draggable={false}
                                >
                                    {t.detail}
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
