'use client';

import { useState, useEffect, useTransition } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';

const navItems = {
    tr: [
        { name: 'Ana Sayfa', href: '/', section: null },
        { name: 'Ürünlerimiz', href: '#products', section: '#products' },
        { name: 'Hizmetlerimiz', href: '#services', section: '#services' },
        { name: 'Hakkımızda', href: '#about', section: '#about' },
        { name: 'İletişim', href: '#contact', section: '#contact' },
    ],
    en: [
        { name: 'Home', href: '/', section: null },
        { name: 'Products', href: '#products', section: '#products' },
        { name: 'Services', href: '#services', section: '#services' },
        { name: 'About', href: '#about', section: '#about' },
        { name: 'Contact', href: '#contact', section: '#contact' },
    ],
};

const productItems = {
    tr: [
        { name: 'ASL-40', href: '/urunler/asl40' },
        { name: 'S-BATTERY', href: '/urunler/s-battery' },
        { name: 'C-SAL', href: '/urunler/csal' },
    ],
    en: [
        { name: 'ASL-40', href: '/urunler/asl40' },
        { name: 'S-BATTERY', href: '/urunler/s-battery' },
        { name: 'C-SAL', href: '/urunler/csal' },
    ],
};

export default function Navbar()
{
    const { language, setLanguage } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const items = navItems[language];
    const productMenu = productItems[language];

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        // Ensure correct navbar state immediately after hard reload.
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() =>
    {
        // Always close mobile overlays on route change.
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() =>
    {
        const handleResize = () =>
        {
            // Prevent stale mobile backdrop/menu blocking navbar interactions
            // after switching to desktop width.
            if (window.innerWidth > 1024)
            {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getNavHref = (href: string) =>
    {
        if (!href.startsWith('#')) return href;
        return pathname === '/' ? href : `/${href}`;
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) =>
    {
        if (href === '/')
        {
            if (pathname === '/')
            {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsMobileMenuOpen(false);
            return;
        }

        if (href.startsWith('#'))
        {
            e.preventDefault();

            if (pathname === '/')
            {
                const element = document.querySelector(href);
                if (element)
                {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else
            {
                router.push(`/${href}`);
            }
        }
        setIsMobileMenuOpen(false);
    };

    const handleLanguageChange = (nextLanguage: 'tr' | 'en') =>
    {
        if (nextLanguage === language)
        {
            setIsMobileMenuOpen(false);
            return;
        }

        // Close menu first so the logo/navbar stays visible on mobile.
        setIsMobileMenuOpen(false);
        startTransition(() =>
        {
            setLanguage(nextLanguage);
        });
    };

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
                initial={false}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className={styles.container}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <motion.div
                            className={styles.logoIcon}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/argos-logo.png"
                                alt="Argos Elektro-Optik Logo"
                                width={220}
                                height={80}
                                priority
                                style={{ objectFit: 'contain' }}
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className={styles.navList}>
                        {items.map((item) => (
                            <li
                                key={item.name}
                                className={item.section === '#products' ? styles.navItemWithMenu : undefined}
                            >
                                <Link
                                    href={getNavHref(item.href)}
                                    className={styles.navLink}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.name}
                                </Link>
                                {item.section === '#products' && (
                                    <div className={styles.productsDropdown}>
                                        <ul className={styles.productsDropdownList}>
                                            {productMenu.map((product) => (
                                                <li key={product.href}>
                                                    <Link
                                                        href={product.href}
                                                        className={styles.productsDropdownLink}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.langToggle} role="group" aria-label="Language switch">
                        <button
                            type="button"
                            className={`${styles.langOption} ${language === 'tr' ? styles.langActive : ''}`}
                            onClick={() => handleLanguageChange('tr')}
                            aria-pressed={language === 'tr'}
                        >
                            TR
                        </button>
                        <button
                            type="button"
                            className={`${styles.langOption} ${language === 'en' ? styles.langActive : ''}`}
                            onClick={() => handleLanguageChange('en')}
                            aria-pressed={language === 'en'}
                        >
                            EN
                        </button>
                    </div>



                    {/* Mobile Menu Button */}
                    <motion.button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.92 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <>
                    <div
                        className={styles.mobileBackdrop}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className={styles.mobileMenu}>
                        <ul className={styles.mobileNavList}>
                            {items.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={getNavHref(item.href)}
                                        className={styles.mobileNavLink}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.section === '#products' && (
                                        <ul className={styles.mobileSubmenu}>
                                            {productMenu.map((product) => (
                                                <li key={product.href}>
                                                    <Link
                                                        href={product.href}
                                                        className={styles.mobileSubmenuLink}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li>
                                <div className={styles.mobileLangToggle}>
                                    <button
                                        type="button"
                                        className={`${styles.mobileLangOption} ${language === 'tr' ? styles.langActive : ''}`}
                                        onClick={() => handleLanguageChange('tr')}
                                    >
                                        Turkish
                                    </button>
                                    <button
                                        type="button"
                                        className={`${styles.mobileLangOption} ${language === 'en' ? styles.langActive : ''}`}
                                        onClick={() => handleLanguageChange('en')}
                                    >
                                        English
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
}
