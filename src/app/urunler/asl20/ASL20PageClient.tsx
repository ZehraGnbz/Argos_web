'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import
{
    ArrowLeft,
    Download,
    Mail,
    Zap,
    Gauge,
    Thermometer,
    Cpu,
    Radio,
    Shield,
    ShieldCheck,
    Plane,
    Car,
    Radar,
    Bot,
    ChevronRight
} from 'lucide-react';
import styles from '../ProductDetail.module.css';
import { useLanguage } from '@/context/LanguageContext';
import EmailGatedDownloadButton from '@/components/EmailGatedDownloadButton';

export default function ASL20PageClient()
{
    const { language } = useLanguage();
    const t = language === 'tr'
        ? {
            home: 'Ana Sayfa',
            products: 'Ürünler',
            offer: 'Teklif Al',
            download: 'Datasheet İndir',
            featureBadge: 'Temel Özellikler',
            overview: 'Ürün Genel Bakış',
            specsBadge: 'Teknik Özellikler',
            specsTitle: 'Detaylı Spesifikasyonlar',
            optical: 'Optik & Algılama',
            electrical: 'İşleme & Haberleşme',
            mechanical: 'Mekanik',
            environmental: 'Güç & Çevresel',
            appBadge: 'Uygulama Alanları',
            appTitle: 'Kullanım Senaryoları',
            ctaTitle: 'ASL-40 ile Projenizi Hayata Geçirin',
            ctaDesc: 'Teknik ekibimiz, ürün entegrasyonu ve özelleştirme konusunda size destek olmaya hazır.',
            contact: 'İletişime Geçin',
            other: 'Diğer Ürünler',
        }
        : {
            home: 'Home',
            products: 'Products',
            offer: 'Get Quote',
            download: 'Download Datasheet',
            featureBadge: 'Key Features',
            overview: 'Product Overview',
            specsBadge: 'Technical Specifications',
            specsTitle: 'Detailed Specifications',
            optical: 'Optics & Detection',
            electrical: 'Processing & Communication',
            mechanical: 'Mechanical',
            environmental: 'Power & Environmental',
            appBadge: 'Applications',
            appTitle: 'Use Cases',
            ctaTitle: 'Bring Your Project to Life with ASL-40',
            ctaDesc: 'Our technical team is ready to support integration and customization.',
            contact: 'Contact Us',
            other: 'Other Products',
        };
    const features = language === 'tr'
        ? [
            { icon: Gauge, title: '100 kHz Örnekleme', description: 'Yüksek örnekleme hızıyla anlık mesafe ölçümü' },
            { icon: Cpu, title: 'FPGA İşleme', description: 'Düşük gecikmeli FPGA tabanlı gerçek zamanlı işleme' },
            { icon: Radar, title: '0.1-40m Menzil', description: 'Geniş etkin menzille çok yönlü kullanım' },
            { icon: Thermometer, title: '-40°C / +71°C', description: 'Ekstrem sıcaklık koşullarında güvenilir çalışma' },
            { icon: ShieldCheck, title: 'Class 1 Göz Güvenliği', description: 'Uluslararası güvenlik standartlarına uygunluk' },
            { icon: Radio, title: 'UART Haberleşme', description: 'Kolay entegrasyon için standart arayüz' }
        ]
        : [
            { icon: Gauge, title: '100 kHz Sampling', description: 'Instant distance measurement with high sampling rate' },
            { icon: Cpu, title: 'FPGA Processing', description: 'Low-latency FPGA-based real-time processing' },
            { icon: Radar, title: '0.1-40m Range', description: 'Versatile usage with wide effective range' },
            { icon: Thermometer, title: '-40°C / +71°C', description: 'Reliable operation in extreme temperature conditions' },
            { icon: ShieldCheck, title: 'Class 1 Eye Safety', description: 'Compliant with international safety standards' },
            { icon: Radio, title: 'UART Communication', description: 'Standard interface for easy integration' }
        ];
    const overviewParagraphs = language === 'tr'
        ? [
            'ARGOS ASL-40, kompakt yapısı ve yüksek örnekleme kabiliyeti sayesinde kısa menzilde hassas mesafe ölçümü gerektiren sistemler için geliştirilmiştir.',
            'FPGA tabanlı gerçek zamanlı işleme mimarisi, düşük gecikme ile kararlı veri üretir. UART arayüzü ile mevcut aviyonik, otonom sürüş ve robotik kontrol birimlerine hızlı entegrasyon sağlar.',
        ]
        : [
            'ARGOS ASL-40 is developed for systems that require precise short-range distance measurement with a compact footprint and high sampling capability.',
            'Its FPGA-based real-time processing architecture delivers stable output with low latency. The UART interface enables rapid integration into existing avionics, autonomous driving, and robotics control units.',
        ];

    const specs = language === 'tr'
        ? {
            optical: [
                { label: 'Merkez Dalga Boyu', value: '905 nm' },
                { label: 'Görüş Alanı (FoV)', value: '< 0.5°' },
                { label: 'Etkin Menzil', value: '0.1–40 m' },
                { label: 'Göz Güvenliği', value: 'Class 1' }
            ],
            electrical: [
                { label: 'İşleme Mimarisi', value: 'FPGA Tabanlı' },
                { label: 'Gecikme', value: 'Düşük Gecikme' },
                { label: 'Haberleşme Arayüzü', value: 'UART' },
                { label: 'Örnekleme Hızı', value: '100 kHz\'e kadar' }
            ],
            mechanical: [
                { label: 'Boyutlar', value: '38.0 × 33.6 × 22.2 mm' },
                { label: 'Ağırlık', value: '24 g' },
                { label: 'Konnektör', value: 'JST (yapılandırılabilir)' },
                { label: 'Form Faktörü', value: 'Ultra Hafif / Kompakt' }
            ],
            environmental: [
                { label: 'Çalışma Sıcaklığı', value: '-40°C ... +71°C' },
                { label: 'Güç Tüketimi', value: '≤ 0.45 W' },
                { label: 'Besleme Gerilimi', value: 'DC 4–32 V' },
                { label: 'Şok Toleransı', value: '5,000 g' }
            ]
        }
        : {
            optical: [
                { label: 'Central Wavelength', value: '905 nm' },
                { label: 'Field of View (FoV)', value: '< 0.5°' },
                { label: 'Effective Range', value: '0.1–40 m' },
                { label: 'Eye Safety', value: 'Class 1' }
            ],
            electrical: [
                { label: 'Processing Architecture', value: 'FPGA-Based' },
                { label: 'Latency', value: 'Low Latency' },
                { label: 'Communication Interface', value: 'UART' },
                { label: 'Sampling Rate', value: 'Up to 100 kHz' }
            ],
            mechanical: [
                { label: 'Dimensions', value: '38.0 × 33.6 × 22.2 mm' },
                { label: 'Weight', value: '24 g' },
                { label: 'Connector', value: 'JST (Configurable)' },
                { label: 'Form Factor', value: 'Ultra-Lightweight / Compact' }
            ],
            environmental: [
                { label: 'Power Consumption', value: '≤ 0.45 W' },
                { label: 'Supply Voltage', value: 'DC 4–32 V' },
                { label: 'Operating Temperature', value: '-40°C to +71°C' },
                { label: 'Shock Tolerance', value: '5,000 g' }
            ]
        };

    const applications = language === 'tr'
        ? [
            { icon: Plane, title: 'İHA Sistemleri' },
            { icon: Car, title: 'Otonom Araçlar' },
            { icon: Radar, title: 'Seviye Algılama' },
            { icon: Bot, title: 'Robotik Sistemler' }
        ]
        : [
            { icon: Plane, title: 'UAV Systems' },
            { icon: Car, title: 'Autonomous Vehicles' },
            { icon: Radar, title: 'Level Sensing' },
            { icon: Bot, title: 'Robotics Systems' }
        ];

    return (
        <div className={styles.productPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    {/* Breadcrumb */}
                    <motion.nav
                        className={styles.breadcrumb}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link href="/">{t.home}</Link>
                        <ChevronRight size={16} />
                        <Link href="/#products">{t.products}</Link>
                        <ChevronRight size={16} />
                        <span className={styles.breadcrumbCurrent}>ASL-40</span>
                    </motion.nav>

                    <div className={styles.heroContent}>
                        {/* Text Content */}
                        <motion.div
                            className={styles.heroText}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={styles.badge}>{language === 'tr' ? 'Lazer Mesafe Ölçer' : 'Laser Range Fınder'}</span>
                            <h1 className={styles.title}>ARGOS ASL-40</h1>
                            <p className={styles.subtitle}>{language === 'tr' ? 'Yüksek Hızlı Kısa Menzilli Lazer Modülü' : 'High-Speed Short-Range Laser Module'}</p>
                            <p className={styles.description}>
                                {language === 'tr'
                                    ? 'ARGOS ASL-40, yüksek hızlı kısa menzilli bir lazer mesafe ölçüm modülüdür. 100 kHz\'e varan örnekleme hızı, düşük gecikmeli FPGA işleme ve ultra kompakt formuyla İHA, otonom araç ve robotik sistemler için ideal bir çözümdür.'
                                    : 'ARGOS ASL-40 is a high-speed short-range laser range measurement module. With up to 100 kHz sampling rate, low-latency FPGA processing, and an ultra-compact form, it is an ideal solution for UAV, autonomous vehicle, and robotic systems.'}
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/#contact" className={styles.btnPrimary}>
                                    <Mail size={20} />
                                    {t.offer}
                                </Link>
                                <EmailGatedDownloadButton
                                    language={language}
                                    fileUrl="/products/asl40-datasheet.png"
                                    productKey="asl20"
                                    productName="ASL-40"
                                    fileName="argos-asl40-datasheet.png"
                                    className={styles.btnSecondary}
                                >
                                    <Download size={20} />
                                    {t.download}
                                </EmailGatedDownloadButton>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            className={styles.heroImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={styles.imageGlow}></div>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/products/asl40-datasheet.png"
                                    alt="ARGOS ASL-40 Laser Range Finder"
                                    width={500}
                                    height={650}
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.sectionBadge}>{t.featureBadge}</span>
                    </motion.div>

                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) =>
                        {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className={styles.featureCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={styles.featureIcon}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Product Overview */}
            <section className={styles.datasheetSection}>
                <div className={styles.container}>
                    <div className={styles.datasheetContent}>
                        <motion.div
                            className={styles.datasheetText}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>{t.overview}</h3>
                            {overviewParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </motion.div>
                        <motion.div
                            className={styles.datasheetImage}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/products/asl40-datasheet.png"
                                alt="ASL-40 Product Overview"
                                width={500}
                                height={700}
                                style={{ objectFit: 'contain' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className={styles.specsSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.sectionBadge}>{t.specsBadge}</span>
                    </motion.div>

                    <div className={styles.specsGrid}>
                        {/* Optical & Detection */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Radar size={24} />
                                {t.optical}
                            </h3>
                            <div className={styles.specTable}>
                                {specs.optical.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                        <span className={styles.specValue}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Electrical */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Zap size={24} />
                                {t.electrical}
                            </h3>
                            <div className={styles.specTable}>
                                {specs.electrical.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                        <span className={styles.specValue}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Mechanical */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Gauge size={24} />
                                {t.mechanical}
                            </h3>
                            <div className={styles.specTable}>
                                {specs.mechanical.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                        <span className={styles.specValue}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Environmental */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Thermometer size={24} />
                                {t.environmental}
                            </h3>
                            <div className={styles.specTable}>
                                {specs.environmental.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                        <span className={styles.specValue}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className={styles.applicationsSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.sectionBadge}>{t.appBadge}</span>
                    </motion.div>

                    <div className={styles.applicationsGrid}>
                        {applications.map((app, index) =>
                        {
                            const Icon = app.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className={styles.applicationCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className={styles.applicationIcon}>
                                        <Icon size={32} />
                                    </div>
                                    <h4 className={styles.applicationTitle}>{app.title}</h4>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.ctaContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>{t.ctaTitle}</h3>
                        <p>{t.ctaDesc}</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/#contact" className={styles.btnPrimary}>
                                <Mail size={20} />
                                {t.contact}
                            </Link>
                            <Link href="/#products" className={styles.btnSecondary}>
                                <ArrowLeft size={20} />
                                {t.other}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
