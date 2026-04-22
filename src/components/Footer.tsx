'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Linkedin } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer()
{
    const { language } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();
    const scrollToTop = () =>
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) =>
    {
        if (!href.startsWith('#')) return;
        e.preventDefault();
        if (pathname === '/')
        {
            const element = document.querySelector(href);
            if (element)
            {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }
        router.push(`/${href}`);
    };
    const t = language === 'tr'
        ? {
            description: 'İleri teknoloji elektro-optik sistem çözümleri ile savunma sanayine hizmet veriyoruz.',
            quick: 'Hızlı Bağlantılar',
            products: 'Ürünlerimiz',
            contact: 'İletişim',
            navProducts: 'Ürünlerimiz',
            navServices: 'Hizmetlerimiz',
            navAbout: 'Hakkımızda',
            navContact: 'İletişim',
            copyright: 'Tüm hakları saklıdır.',
            privacy: 'Gizlilik Politikası',
            cookie: 'Çerez Politikası',
        }
        : {
            description: 'We deliver advanced electro-optical system solutions for the defense industry.',
            quick: 'Quick Links',
            products: 'Products',
            contact: 'Contact',
            navProducts: 'Products',
            navServices: 'Services',
            navAbout: 'About',
            navContact: 'Contact',
            copyright: 'All rights reserved.',
            privacy: 'Privacy Policy',
            cookie: 'Cookie Policy',
        };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow} />
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={`${styles.brand} ${styles.panel}`}>
                        <div className={styles.logo}>
                            <Image
                                src="/argos-logo.png"
                                alt="Argos Elektro-Optik Logo"
                                width={220}
                                height={80}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className={styles.brandDescription}>
                            {t.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={`${styles.column} ${styles.panel}`}>
                        <h4 className={styles.columnTitle}>{t.quick}</h4>
                        <ul className={styles.links}>
                            <li><Link href="#products" onClick={(e) => handleAnchorClick(e, '#products')}>{t.navProducts}</Link></li>
                            <li><Link href="#services" onClick={(e) => handleAnchorClick(e, '#services')}>{t.navServices}</Link></li>
                            <li><Link href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>{t.navAbout}</Link></li>
                            <li><Link href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>{t.navContact}</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className={`${styles.column} ${styles.panel}`}>
                        <h4 className={styles.columnTitle}>{t.products}</h4>
                        <ul className={styles.links}>
                            <li><Link href="/urunler/asl20">Laser Range Finder</Link></li>
                            <li><Link href="/urunler/s-battery">Hybrid Battery Pack</Link></li>
                            <li><Link href="/urunler/csal">Drone Laser Spot Tracker</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={`${styles.column} ${styles.panel}`}>
                        <h4 className={styles.columnTitle}>{t.contact}</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <Image
                                    src="/argos-location.png"
                                    alt="Konum"
                                    width={18}
                                    height={18}
                                    className={styles.contactIcon}
                                    style={{ objectFit: 'contain' }}
                                />
                                <span>ODTÜ Teknokent, Ankara</span>
                            </li>
                            <li>
                                <Image
                                    src="/argos-mail.png"
                                    alt="E-posta"
                                    width={18}
                                    height={18}
                                    className={styles.contactIcon}
                                    style={{ objectFit: 'contain' }}
                                />
                                <a href="mailto:info@argoseo.com">info@argoseo.com</a>
                            </li>
                        </ul>
                        <div className={styles.social}>
                            <a
                                href="https://www.linkedin.com/company/argos-eo"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        Copyright © {new Date().getFullYear()} Argos Elektro-Optik. {t.copyright}
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/gizlilik-politikasi">{t.privacy}</Link>
                        <span className={styles.divider}>|</span>
                        <Link href="/cerez-politikasi">{t.cookie}</Link>
                    </div>
                    <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
