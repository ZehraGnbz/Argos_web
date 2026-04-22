'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import
    {
        Eye,
        CircuitBoard,
        Gauge,
    } from 'lucide-react';
import styles from './Services.module.css';
import { useLanguage } from '@/context/LanguageContext';

const services = {
    tr: [
        {
            id: 'hardware',
            title: 'Donanım Tasarımı ve Gömülü Sistemler',
            icon: CircuitBoard,
            items: [
                'Analog ve Dijital Devre Tasarımı',
                'FPGA Tabanlı Gerçek Zamanlı İşleme',
                'Güç Dağıtımı ve Motor Sürücü Kartları',
                'Veri Toplama ve Sensör Arayüz Kartları',
                'Gömülü Yazılım ve RTOS Entegrasyonu',
                'Safe and Arm Cihazları'
            ],
            color: '#4a90b8'
        },
        {
            id: 'electrooptic',
            title: 'Elektro-Optik Sistem Tasarımı',
            icon: Eye,
            items: [
                'Laser Proximity Burst Sistemleri',
                'Hedef Tespit ve Takip Sistemleri',
                'Laser Spot Tracking',
                'Rangefinder ve Ölçüm Üniteleri',
                'LIDAR Sistemleri',
                "Lazer Designator'lar"
            ],
            color: '#5eb3e4'
        },
        {
            id: 'test',
            title: 'Test & Kalibrasyon Sistemleri',
            icon: Gauge,
            items: [
                'Test ve Programlama Cihazları',
                'Elektro-Optik Kalibrasyon Tezgâhları',
                'Seeker ve Güdüm Ünitesi Test Sistemleri',
                'Elektronik Kart Test Ekipmanları',
                'Yer Kontrol Arayüzleri ve Destek Yazılımları'
            ],
            color: '#3a7ca5'
        }
    ],
    en: [
        {
            id: 'hardware',
            title: 'Hardware Design & Embedded Systems',
            icon: CircuitBoard,
            items: [
                'Analog and Digital Circuit Design',
                'FPGA-Based Real-Time Processing',
                'Power Distribution & Motor Driver Boards',
                'Data Acquisition & Sensor Interface Boards',
                'Embedded Software & RTOS Integration',
                'Safe and Arm Devices for Motor Ignition'
            ],
            color: '#4a90b8'
        },
        {
            id: 'electrooptic',
            title: 'Electro-Optical System Design',
            icon: Eye,
            items: [
                'Laser Proximity Burst Systems',
                'Target Detection and Tracking Systems',
                'Laser Spot Tracking',
                'Rangefinders and Measurement Units',
                'LIDAR Systems',
                'Laser Designators'
            ],
            color: '#5eb3e4'
        },
        {
            id: 'test',
            title: 'Test & Calibration Systems',
            icon: Gauge,
            items: [
                'Test and Programming Devices',
                'Electro-Optical Calibration Benches',
                'Seeker and Guidance Unit Test Systems',
                'Electronic Board Test Equipment',
                'Ground Control Interfaces and Support Software'
            ],
            color: '#3a7ca5'
        }
    ]
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const UNIFIED_ICON_COLOR = '#5eb3e4';

export default function Services()
{
    const { language } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const t = language === 'tr'
        ? {
            titlePrefix: 'Kapsamlı',
            titleHighlight: 'Mühendislik',
            titleSuffix: 'Çözümleri',
            subtitle: 'Tasarımdan üretime, testten kalibrasyona kadar tüm süreçlerde yanınızdayız.',
        }
        : {
            titlePrefix: 'Comprehensive',
            titleHighlight: 'Engineering',
            titleSuffix: 'Solutions',
            subtitle: 'We support you across the full lifecycle from design and production to testing and calibration.',
        };

    return (
        <section className={styles.services} id="services" ref={ref}>
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

                {/* Services Grid */}
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {services[language].map((service, index) =>
                    {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                className={styles.card}
                                variants={cardVariants}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.22 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div
                                        className={styles.iconWrapper}
                                        style={{ background: `${service.color}15`, borderColor: `${service.color}30` }}
                                    >
                                        <Icon size={32} style={{ color: UNIFIED_ICON_COLOR }} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                </div>

                                <ul className={styles.itemList}>
                                    {service.items.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className={styles.item}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.65 }}
                                            transition={{ delay: 0.12 + idx * 0.06, duration: 0.35 }}
                                        >
                                            <span
                                                className={styles.itemDot}
                                                style={{ background: service.color }}
                                            />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div
                                    className={styles.cardAccent}
                                    style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className={styles.bgDecoration}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>
        </section>
    );
}
