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
    Battery,
    Shield,
    Clock,
    Rocket,
    Car,
    Factory,
    Bot,
    ChevronRight,
    RefreshCw,
    Snowflake,
    ShieldCheck,
    Globe,
    BatteryCharging,
    Settings2
} from 'lucide-react';
import styles from '../ProductDetail.module.css';
import { useLanguage } from '@/context/LanguageContext';
import EmailGatedDownloadButton from '@/components/EmailGatedDownloadButton';

export default function SBatteryPageClient()
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
            electrical: 'Performans & Enerji',
            protection: 'Elektriksel & Koruma',
            environmental: 'Mekanik & Entegrasyon',
            performance: 'Yaşam Döngüsü & Program Avantajları',
            appBadge: 'Uygulama Alanları',
            appTitle: 'Kullanım Senaryoları',
            ctaTitle: 'S-Battery ile Enerji Çözümünüzü Keşfedin',
            ctaDesc: 'Özelleştirilebilir form faktörü ve yüksek performans ile projenize uygun çözüm için bizimle iletişime geçin.',
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
            electrical: 'Performance & Energy',
            protection: 'Electrical & Protection',
            environmental: 'Mechanical & Integration',
            performance: 'Lifecycle & Program Advantages',
            appBadge: 'Applications',
            appTitle: 'Use Cases',
            ctaTitle: 'Discover Your Energy Solution with S-Battery',
            ctaDesc: 'Contact us for a project-fit solution with customizable form factor and high performance.',
            contact: 'Contact Us',
            other: 'Other Products',
        };
    const overviewParagraphs = language === 'tr'
        ? [
            'ARGOS Hibrit Güç Modülü, savunma ve endüstriyel uygulamalarda geleneksel Li-Ion ve Termal bataryaların sınırlamalarını aşmak için tasarlanmış yeni nesil bir enerji depolama çözümüdür.',
            'Li-Ion bataryaların düşük akım çıkışı, yavaş şarj oranı ve soğuk koşullarda kapasite kaybı gibi sınırlamalarına karşı ARGOS modülü, -40°C ile +71°C aralığında anlık yüksek güç ve ultra hızlı enerji transferi sağlar.',
        ]
        : [
            'The ARGOS Hybrid Power Module is a next-generation energy storage solution designed to overcome the limitations of traditional Li-Ion and Thermal batteries in defense and industrial applications.',
            'While Li-Ion batteries are limited by low current output, slow charge rates, and significant capacity loss in cold conditions, the ARGOS module delivers instantaneous high power and ultra-fast energy transfer across an extreme temperature range of -40°C to +71°C.',
        ];
    const features = language === 'tr'
        ? [
            { icon: Thermometer, title: '-40°C / +71°C', description: 'Ekstrem sıcaklık aralığında kesintisiz performans' },
            { icon: RefreshCw, title: '1,000,000+ Döngü', description: 'Olağanüstü uzun döngü ömrü' },
            { icon: BatteryCharging, title: '~60 Saniye Şarj', description: 'Ultra hızlı tam şarj süresi' },
            { icon: ShieldCheck, title: 'Gelişmiş Güvenlik', description: 'OVP, UVLO ve akım sınırlama korumaları' },
            { icon: Globe, title: 'ITAR-Free', description: 'İhracat dostu tasarım' },
            { icon: Settings2, title: 'Özelleştirilebilir', description: 'Farklı uygulamalar için mekanik varyantlar' }
        ]
        : [
            { icon: Thermometer, title: '-40°C / +71°C', description: 'Continuous performance across extreme temperatures' },
            { icon: RefreshCw, title: '1,000,000+ Cycles', description: 'Exceptional lifecycle durability' },
            { icon: BatteryCharging, title: '~60s Charge', description: 'Ultra-fast full charge time' },
            { icon: ShieldCheck, title: 'Enhanced Safety', description: 'OVP, UVLO, and current limiting protections' },
            { icon: Globe, title: 'ITAR-Free', description: 'Export-friendly architecture' },
            { icon: Settings2, title: 'Customizable', description: 'Mechanical variants for different applications' }
        ];

    const specs = language === 'tr'
        ? {
            electrical: [
                { label: 'Çalışma Sıcaklığı', value: '-40°C to +71°C' },
                { label: 'Döngü Ömrü', value: '1,000,000 döngü' },
                { label: 'Şarj Süresi', value: '~60 saniyede tam şarj' },
                { label: 'Kullanılabilir Enerji', value: '~10 Wh eşdeğeri' },
                { label: 'Güç Teslimi', value: 'Anlık yüksek güç ve ultra hızlı enerji transferi' }
            ],
            protection: [
                { label: 'Koruma Özellikleri', value: 'OVP @ 42 V, UVLO @ 10 V, inrush current limit, hücre dengeleme' },
                { label: 'Batarya Teknolojisi', value: 'Hibrit güç modülü' },
                { label: 'Güvenlik', value: 'Geliştirilmiş güvenlik' },
                { label: 'Şarj Kabiliyeti', value: 'Hızlı şarj kabiliyeti' }
            ],
            environmental: [
                { label: 'Mekanik Varyantlar', value: 'Opsiyonel mekanik varyantlar' },
                { label: 'Form Faktörü', value: 'Farklı uygulamalar için özelleştirilebilir' },
                { label: 'Mekanik Uyarlanabilirlik', value: 'Form faktörü farklı uygulamalar için özelleştirilebilir' },
                { label: 'Konuşlandırma Uygunluğu', value: 'Zorlu ortamlar ve kritik platformlar için tasarlandı' }
            ],
            performance: [
                { label: 'Sıcaklıkta Çalışma', value: 'Ekstrem sıcaklıkta çalışma' },
                { label: 'Yaşam Döngüsü', value: 'Uzatılmış yaşam döngüsü' },
                { label: 'Maliyet Verimliliği', value: 'Düşük maliyetli' },
                { label: 'İhracat Durumu', value: 'ITAR-free ve ihracat dostu' }
            ]
        }
        : {
            electrical: [
                { label: 'Operating Temperature', value: '-40°C to +71°C' },
                { label: 'Cycle Life', value: '1.000.000 cycles' },
                { label: 'Charge Time', value: '~60 seconds to full charge' },
                { label: 'Usable Energy', value: '~10 Wh equivalent' },
                { label: 'Power Delivery', value: 'Instant high power and ultra-fast energy transfer' }
            ],
            protection: [
                { label: 'Protection Features', value: 'OVP @ 42 V, UVLO @ 10 V, inrush current limit, cell balancing' },
                { label: 'Battery Technology', value: 'Hybrid power module' },
                { label: 'Safety', value: 'Enhanced safety' },
                { label: 'Charge Capability', value: 'Fast charge capability' }
            ],
            environmental: [
                { label: 'Mechanical Variants', value: 'Optional mechanical variants' },
                { label: 'Form Factor', value: 'Customizable for different applications' },
                { label: 'Mechanical Adaptability', value: 'Form factor is customizable for different applications' },
                { label: 'Deployment Suitability', value: 'Designed for harsh environments and critical platforms' }
            ],
            performance: [
                { label: 'Temperature Operation', value: 'Extreme temperature operation' },
                { label: 'Lifecycle', value: 'Extended lifecycle' },
                { label: 'Cost Efficiency', value: 'Cost efficient' },
                { label: 'Export Status', value: 'ITAR-free and export-friendly' }
            ]
        };

    const applications = language === 'tr'
        ? [
            { icon: Rocket, title: 'Güdümlü Mühimmat' },
            { icon: Car, title: 'Start-Stop Sistemleri' },
            { icon: Bot, title: 'AMR/AGV' },
            { icon: Factory, title: 'Kritik Platformlar' }
        ]
        : [
            { icon: Rocket, title: 'Guided Munitions' },
            { icon: Car, title: 'Start-Stop Systems' },
            { icon: Bot, title: 'AMR/AGV' },
            { icon: Factory, title: 'Critical Platforms' }
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
                        <span className={styles.breadcrumbCurrent}>S-Battery</span>
                    </motion.nav>

                    <div className={styles.heroContent}>
                        {/* Text Content */}
                        <motion.div
                            className={styles.heroText}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={styles.badge}>{language === 'tr' ? 'Hibrit Güç Modülü' : 'Hybrıd Power Module'}</span>
                            <h1 className={styles.title}>ARGOS S-BATTERY</h1>
                            <p className={styles.subtitle}>
                                {language === 'tr'
                                    ? 'Zorlu Ortamlar ve Kritik Platformlar için Yüksek Güvenilirlikli Güç Kaynağı'
                                    : 'High-Reliability Power Source for Harsh Environments & Critical Platforms'}
                            </p>
                            <p className={styles.description}>
                                {language === 'tr'
                                    ? 'ARGOS Hibrit Güç Modülü, savunma ve endüstriyel uygulamalarda geleneksel Li-Ion ve Termal bataryaların sınırlamalarını aşmak için tasarlanmış yeni nesil bir enerji depolama çözümüdür. -40°C ile +71°C arasında anlık yüksek güç ve ultra hızlı enerji transferi sağlar.'
                                    : 'ARGOS Hybrid Power Module is a next-generation energy storage solution designed to overcome the limitations of traditional Li-Ion and thermal batteries in defense and industrial use. It delivers instant high power and ultra-fast energy transfer across -40°C to +71°C.'}
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/#contact" className={styles.btnPrimary}>
                                    <Mail size={20} />
                                    {t.offer}
                                </Link>
                                <EmailGatedDownloadButton
                                    language={language}
                                    fileUrl="/products/s%20battery%20datasheet.png"
                                    productKey="s-battery"
                                    productName="S-BATTERY"
                                    fileName="argos-s-battery-datasheet.png"
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
                                    src="/products/s%20battery%20datasheet.png"
                                    alt="ARGOS S-Battery Hybrid Power Module"
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
                                src="/products/s%20battery%20datasheet.png"
                                alt="S-Battery Specifications"
                                width={500}
                                height={650}
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
                        {/* Electrical */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: -30 }}
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

                        {/* Protection */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Shield size={24} />
                                {t.protection}
                            </h3>
                            <div className={styles.specTable}>
                                {specs.protection.map((spec, index) => (
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
                            initial={{ opacity: 0, x: -30 }}
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

                        {/* Performance */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Gauge size={24} />
                                {t.performance}
                            </h3>
                            <div className={styles.specTable}>
                                {specs.performance.map((spec, index) => (
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
