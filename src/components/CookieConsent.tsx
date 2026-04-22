'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import styles from './CookieConsent.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieConsent() {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const t = language === 'tr'
        ? {
            title: 'Çerez Politikası',
            descriptionPrefix: 'Bu web sitesi, deneyiminizi geliştirmek ve site trafiğini analiz etmek için çerezler kullanmaktadır. Sitemizi kullanmaya devam ederek',
            cookiePolicy: 'Çerez Politikamızı',
            privacyPolicy: 'Gizlilik Politikamızı',
            descriptionSuffix: 'kabul etmiş olursunuz. 6698 sayılı KVKK kapsamında kişisel verileriniz korunmaktadır.',
            reject: 'Reddet',
            accept: 'Kabul Et',
            close: 'Kapat',
        }
        : {
            title: 'Cookie Policy',
            descriptionPrefix: 'This website uses cookies to improve your experience and analyze site traffic. By continuing to use our website, you accept our',
            cookiePolicy: 'Cookie Policy',
            privacyPolicy: 'Privacy Policy',
            descriptionSuffix: 'and consent to data processing under applicable regulations.',
            reject: 'Reject',
            accept: 'Accept',
            close: 'Close',
        };

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Small delay before showing the banner
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setIsVisible(false);

        // Dispatch event so GoogleAnalytics component can load
        window.dispatchEvent(new Event('cookie-consent-update'));
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    <div className={styles.banner}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Shield size={28} />
                            </div>
                            <div className={styles.textContent}>
                                <h3 className={styles.title}>{t.title}</h3>
                                <p className={styles.description}>
                                    {t.descriptionPrefix}{' '}
                                    <a href="/cerez-politikasi" className={styles.link}>
                                        {t.cookiePolicy}
                                    </a>{' '}
                                    {language === 'tr' ? 've' : 'and'}{' '}
                                    <a href="/gizlilik-politikasi" className={styles.link}>
                                        {t.privacyPolicy}
                                    </a>{' '}
                                    {t.descriptionSuffix}
                                </p>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <button
                                onClick={handleReject}
                                className={styles.rejectBtn}
                            >
                                {t.reject}
                            </button>
                            <button
                                onClick={handleAccept}
                                className={styles.acceptBtn}
                            >
                                <Cookie size={18} />
                                {t.accept}
                            </button>
                        </div>

                        <button
                            onClick={handleReject}
                            className={styles.closeBtn}
                            aria-label={t.close}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
