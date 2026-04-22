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
        Radio,
        Shield,
        Target,
        Plane,
        Crosshair,
        Bot,
        ChevronRight,
        Eye,
        Cpu,
        ShieldCheck
    } from 'lucide-react';
import styles from '../ProductDetail.module.css';
import { useLanguage } from '@/context/LanguageContext';
import EmailGatedDownloadButton from '@/components/EmailGatedDownloadButton';

export default function CSALPageClient()
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
            performance: 'Haberleşme & İşleme',
            environmental: 'Elektriksel & Çevresel',
            mechanical: 'Mekanik & Entegrasyon',
            appBadge: 'Uygulama Alanları',
            appTitle: 'Tipik Uygulamalar',
            ctaTitle: 'C-SAL ile Hedef Takip Çözümünüzü Keşfedin',
            ctaDesc: 'NATO STANAG 3733 uyumlu, düşük SWaP lazer spot tracker\'ımız hakkında detaylı teknik bilgi için bizimle iletişime geçin.',
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
            performance: 'Communication & Processing',
            environmental: 'Electrical & Environmental',
            mechanical: 'Mechanical & Integration',
            appBadge: 'Applications',
            appTitle: 'Typical Applications',
            ctaTitle: 'Discover Your Target Tracking Solution with C-SAL',
            ctaDesc: 'Contact us for detailed technical information about our NATO STANAG 3733 compliant low-SWaP laser spot tracker.',
            contact: 'Contact Us',
            other: 'Other Products',
        };
    const overviewParagraphs = language === 'tr'
        ? [
            'Kompakt optoelektronik ön ucu, entegre dijital işleme ünitesi ve sağlamlaştırılmış mekanik tasarımı, güdümlü mühimmat kitleri, küçük İHA\'lar, VTOL dronlar, UGV\'ler ve güvenilir terminal güdüm ipuçları gerektiren diğer düşük SWaP platformlar için uygundur.',
            'Sensör, NATO STANAG 3733 ve kullanıcı tanımlı PRF kodlarını destekler, mevcut yer/hava lazer belirleyicileri ile kesintisiz ara çalışabilirlik sağlar. Geniş dinamik aralık ve güçlü yanlış hedef reddetme algoritmaları, karmaşık savaş alanı veya kentsel ortamlarda bile doğru takip sağlar.',
        ]
        : [
            'The ARGOS C-SAL is a next-generation Laser Spot Tracker designed to provide precise angular bearing information from coded or uncoded laser designators.',
            'Its compact opto-electronic front end, integrated digital processing unit, and ruggedized mechanical design make it suitable for guided munition kits, small UAVs, VTOL drones, UGVs, and other low-SWaP platforms requiring reliable terminal guidance cues.',
            'The sensor supports NATO STANAG 3733 and user-defined PRF codes, enabling seamless interoperability with existing ground/airborne laser designators.',
            'A wide dynamic range and robust false-target rejection algorithms (inherited from proven laser-tracking architectures) ensure accurate tracking even in cluttered battlefield or urban environments.',
            'Although extremely compact, the module incorporates a wide-spectrum optical front-end and digital centroid-based angular reporting, allowing both image-assisted spot detection and direct coded-laser acquisition without explicitly revealing the underlying detector technology.',
            'Designed as a cost-effective alternative for small platforms, ARGOS C-SAL offers high performance in a lightweight, low-power package.',
        ];
    const features = language === 'tr'
        ? [
            { icon: ShieldCheck, title: 'NATO STANAG 3733', description: 'NATO standart PRF kodları ile tam uyumluluk' },
            { icon: Gauge, title: 'Low-SWaP', description: 'Düşük boyut, ağırlık ve güç tüketimi mimarisi' },
            { icon: Radio, title: 'RS-422 Full Duplex', description: 'Entegre test (BIT) özellikli iletişim arayüzü' },
            { icon: Shield, title: 'Sağlamlaştırılmış', description: 'Zorlu ortamlar için kapalı mekanik yapı' },
            { icon: Eye, title: 'Geniş FoV', description: '50° dairesel görüş alanı' },
            { icon: Cpu, title: 'Dijital İşleme', description: 'Entegre dijital işleme ünitesi' }
        ]
        : [
            { icon: ShieldCheck, title: 'NATO STANAG 3733', description: 'Fully compliant with NATO standard PRF coding' },
            { icon: Gauge, title: 'Low-SWaP', description: 'Low size, weight, and power architecture' },
            { icon: Radio, title: 'RS-422 Full Duplex', description: 'Communication interface with integrated BIT features' },
            { icon: Shield, title: 'Ruggedized', description: 'Sealed mechanical structure for harsh environments' },
            { icon: Eye, title: 'Wide FoV', description: '50° circular field of view' },
            { icon: Cpu, title: 'Digital Processing', description: 'Integrated digital processing unit' }
        ];

    const specs = language === 'tr'
        ? {
            optical: [
                { label: 'Spektral Yanıt', value: '905 & 1064 nm' },
                { label: 'Toplam Dairesel FoV', value: '50°' },
                { label: 'Açısal Doğruluk', value: '≤ 0.5° (centroid tabanlı)' },
                { label: 'Menzil', value: '3 km, 100 mJ NATO hedef' },
                { label: 'Optik Pencere', value: 'Sertleştirilmiş AR kaplamalı cam' }
            ],
            performance: [
                { label: 'Desteklenen Kodlar', value: 'NATO STANAG 3733, özel PRF' },
                { label: 'Haberleşme Arayüzleri', value: 'RS-422, Ethernet' },
                { label: 'Yerleşik Test', value: 'Entegre BIT' },
                { label: 'Kodlama Uyumluluğu', value: 'NATO STANAG 3733 PRF kodlama uyumlu' },
                { label: 'Takip Kabiliyeti', value: 'Kodlu ve kodsuz lazer belirleyiciler için lazer nokta takibi' }
            ],
            environmental: [
                { label: 'Giriş Gerilim Aralığı', value: '9–32 VDC (nominal 28 V)' },
                { label: 'Güç Tüketimi', value: '< 5 W' },
                { label: 'Çalışma Sıcaklığı', value: '-40°C to +71°C' },
                { label: 'Depolama Sıcaklığı', value: '-50°C to +85°C' },
                { label: 'Çevresel Uygunluk', value: 'Zorlu ortamlar için sağlam, sızdırmaz yapı' }
            ],
            mechanical: [
                { label: 'Uzunluk', value: '102 mm' },
                { label: 'Çap', value: '60 mm' },
                { label: 'Ağırlık', value: '< 120 g (İHA optimize), < 200 g (sağlam)' },
                { label: 'Mimari', value: 'Low-SWaP' },
                { label: 'Yardımcı Port', value: 'Opsiyonel yardımcı proximity/HOB sensör portu' },
                { label: 'Entegrasyon Uygunluğu', value: 'Küçük İHA, VTOL, UGV ve düşük SWaP platformlar için kompakt tasarım' }
            ]
        }
        : {
            optical: [
                { label: 'Spectral Response', value: '905 & 1064 nm' },
                { label: 'Total Circular FoV', value: '50°' },
                { label: 'Angular Accuracy', value: '≤ 0.5° (centroid-based)' },
                { label: 'Range', value: '3 km, 100 mJ NATO target' },
                { label: 'Optical Window', value: 'Hardened AR-coated glass' }
            ],
            performance: [
                { label: 'Supported Codes', value: 'NATO STANAG 3733, custom PRF' },
                { label: 'Communication Interfaces', value: 'RS-422, Ethernet' },
                { label: 'Built-In Test', value: 'Integrated BIT' },
                { label: 'Coding Compatibility', value: 'Compatible with NATO STANAG 3733 PRF coding' },
                { label: 'Tracking Capability', value: 'Laser spot tracking for coded and uncoded laser designators' }
            ],
            environmental: [
                { label: 'Input Voltage Range', value: '9–32 VDC (nominal 28 V)' },
                { label: 'Power Dissipation', value: '< 5 W' },
                { label: 'Operating Temperature', value: '−40°C to +71°C' },
                { label: 'Storage Temperature', value: '−50°C to +85°C' },
                { label: 'Environmental Suitability', value: 'Rugged, sealed construction for harsh environments' }
            ],
            mechanical: [
                { label: 'Length', value: '102 mm' },
                { label: 'Diameter', value: '60 mm' },
                { label: 'Weight', value: '< 120 g (UAV-optimized), < 200 g (rugged)' },
                { label: 'Architecture', value: 'Low-SWaP' },
                { label: 'Auxiliary Port', value: 'Optional auxiliary proximity/HOB sensor port' },
                { label: 'Integration Suitability', value: 'Compact design for small UAV, VTOL, UGV, and low-SWaP platforms' }
            ]
        };

    const applications = language === 'tr'
        ? [
            { icon: Target, title: 'Güdümlü Mühimmat' },
            { icon: Plane, title: 'VTOL Dronlar' },
            { icon: Bot, title: 'UGV Sistemleri' },
            { icon: Crosshair, title: 'Terminal Navigasyon' }
        ]
        : [
            { icon: Target, title: 'Guided Munitions' },
            { icon: Plane, title: 'VTOL Drones' },
            { icon: Bot, title: 'UGV Systems' },
            { icon: Crosshair, title: 'Terminal Navigation' }
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
                        <span className={styles.breadcrumbCurrent}>C-SAL</span>
                    </motion.nav>

                    <div className={styles.heroContent}>
                        {/* Text Content */}
                        <motion.div
                            className={styles.heroText}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={styles.badge}>{language === 'tr' ? 'Lazer Nokta Takipçisi' : 'Laser Spot Tracker'}</span>
                            <h1 className={styles.title}>ARGOS C-SAL</h1>
                            <p className={styles.subtitle}>
                                {language === 'tr'
                                    ? 'Kompakt ve dusuk SWaP lazer nokta takip sensoru'
                                    : 'Compact, low-SWaP laser spot tracking sensor compatible with NATO STANAG 3733 coded laser designators'}
                            </p>
                            <p className={styles.description}>
                                {language === 'tr'
                                    ? 'ARGOS C-SAL, kodlu veya kodsuz lazer belirleyicilerden hassas açısal yön bilgisi sağlamak için tasarlanmış yeni nesil bir Lazer Nokta Takipçisidir. NATO STANAG 3733 uyumlu, kompakt optoelektronik ön uç, entegre dijital işleme ünitesi ve sağlamlaştırılmış mekanik tasarımı ile güdümlü mühimmat ve küçük İHA platformları için idealdir.'
                                    : 'ARGOS C-SAL is a next-generation Laser Spot Tracker designed to provide precise angular bearing information from coded or uncoded laser designators. With NATO STANAG 3733 compliance, a compact opto-electronic front end, integrated digital processing, and ruggedized mechanics, it is ideal for guided munitions and small UAV platforms.'}
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/#contact" className={styles.btnPrimary}>
                                    <Mail size={20} />
                                    {t.offer}
                                </Link>
                                <EmailGatedDownloadButton
                                    language={language}
                                    fileUrl="/products/csal-datasheet.png"
                                    productKey="csal"
                                    productName="C-SAL"
                                    fileName="argos-csal-datasheet.png"
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
                                    src="/products/csal-overview.png"
                                    alt="ARGOS C-SAL Laser Spot Tracker"
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
                                src="/products/csal-datasheet.png"
                                alt="C-SAL Detailed Specifications"
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
                                <Eye size={24} />
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

                        {/* Performance */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.specCategoryTitle}>
                                <Zap size={24} />
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

                        {/* Mechanical */}
                        <motion.div
                            className={styles.specCategory}
                            initial={{ opacity: 0, x: 30 }}
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
