'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import styles from './About.module.css';
import { useLanguage } from '@/context/LanguageContext';

const features = {
    tr: [
        {
            icon: Award,
            title: 'Özgün Yetkinlik',
            description: 'Yenilikçi çözümlerimizle yurt içinde benzersiz bir teknoloji konumuna sahibiz.',
            color: '#4a90b8'
        },
        {
            icon: Zap,
            title: 'Çevik',
            description: 'Gereksinimlere hızla yanıt veren dinamik ekip yapısı.',
            color: '#5eb3e4'
        },
        {
            icon: TrendingUp,
            title: 'Düşük Maliyetli',
            description: 'Hem teknolojide hem toplam mülkiyet maliyetinde alternatiflerin önünde.',
            color: '#3a7ca5'
        }
    ],
    en: [
        {
            icon: Award,
            title: 'Distinctive Expertise',
            description: 'With innovative solutions, we hold a unique technology position domestically.',
            color: '#4a90b8'
        },
        {
            icon: Zap,
            title: 'Agile',
            description: 'A responsive team structure that reacts quickly to requirements and needs.',
            color: '#5eb3e4'
        },
        {
            icon: TrendingUp,
            title: 'Cost Efficient',
            description: 'Ahead of alternatives in both technology and total ownership cost.',
            color: '#3a7ca5'
        }
    ]
};

const stats = [
    { value: '160', unit: 'm²', label: 'Üretim Alanı' },
    { value: '25+', unit: '', label: 'Mühendis Kadrosu' },
    { value: '10+', unit: '', label: 'Aktif Proje' },
    { value: '%100', unit: '', label: 'Yerli Sermaye' }
];

const UNIFIED_ICON_COLOR = '#5eb3e4';

export default function About()
{
    const { language } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const t = language === 'tr'
        ? {
            titlePrefix: 'Neden',
            titleHighlight: 'ArgosEO',
            subtitle: 'ODTÜ Teknokent\'te faaliyet gösteren Argos Elektro-Optik, savunma sanayine yönelik ileri teknoloji çözümleri sunmaktadır.',
            capTitle: 'Temel Yeteneklerimiz',
            capList: [
                'MIL-STD-810G/461G uyumlu ürün tasarımı',
                'Prototipten seri üretime tam destek',
                'AS9100D kalite yönetim sistemi',
                'Yerli ve milli teknoloji geliştirme',
                'Ar-Ge odaklı mühendislik yaklaşımı'
            ]
        }
        : {
            titlePrefix: 'Why',
            titleHighlight: 'ArgosEO',
            subtitle: 'Operating in METU Technopolis, Argos Electro-Optics delivers advanced technologies for the defense industry.',
            capTitle: 'Core Capabilities',
            capList: [
                'Product design compliant with MIL-STD-810G/461G',
                'Full support from prototype to serial production',
                'AS9100D quality management system',
                'Local and national technology development',
                'R&D-driven engineering approach'
            ]
        };

    return (
        <section className={styles.about} id="about" ref={ref}>
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
                        {t.titlePrefix} <span className={styles.highlight}>{t.titleHighlight}</span>?
                    </h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </motion.div>

                {/* Features */}
                <div className={styles.features}>
                    {features[language].map((feature, index) =>
                    {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.25 }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                whileHover={{ y: -5 }}
                            >
                                <div
                                    className={styles.featureIcon}
                                    style={{ background: `${feature.color}15` }}
                                >
                                    <Icon size={32} style={{ color: UNIFIED_ICON_COLOR }} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Capabilities */}
                <motion.div
                    className={styles.capabilities}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className={styles.capContent}>
                        <h3 className={styles.capTitle}>{t.capTitle}</h3>
                        <ul className={styles.capList}>
                            {t.capList.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className={styles.capItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.65 }}
                                    transition={{ delay: 0.2 + index * 0.08 }}
                                >
                                    <CheckCircle2 size={20} className={styles.capIcon} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
