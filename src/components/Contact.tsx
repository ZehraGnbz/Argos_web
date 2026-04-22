'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact()
{
    const { language } = useLanguage();
    const ref = useRef(null);
    useInView(ref, { once: true, amount: 0.2 });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');
    const t = language === 'tr'
        ? {
            titlePrefix: 'Bizimle',
            titleHighlight: 'İletişime',
            titleSuffix: 'Geçin',
            subtitle: 'Projeleriniz için teknik destek ve teklif almak için bize ulaşın.',
            address: 'Adres',
            email: 'E-posta',
            phone: 'Telefon',
            leaveMessage: 'Mesaj Bırakın',
            leaveMessageDesc: 'Ekibimiz size en kısa sürede geri dönüş yapacaktır.',
            fullName: 'Ad Soyad',
            yourEmail: 'E-posta',
            yourMessage: 'Mesajınız',
            send: 'Gönder',
            sending: 'Gönderiliyor...',
            invalid: 'Lütfen geçerli ad, e-posta ve mesaj girin.',
            saveError: 'Mesaj kaydedilemedi. Tarayıcı izinlerini kontrol edin veya e-posta ile ulaşın.',
            success: 'Mesajınız alındı. Teşekkürler!',
        }
        : {
            titlePrefix: 'Get',
            titleHighlight: 'In Touch',
            titleSuffix: 'With Us',
            subtitle: 'Contact us for technical support and proposals for your projects.',
            address: 'Address',
            email: 'Emaıl',
            phone: 'Phone',
            leaveMessage: 'Leave Us a Message',
            leaveMessageDesc: 'Our team will get back to you as soon as possible.',
            fullName: 'Full name',
            yourEmail: 'Email',
            yourMessage: 'Your message',
            send: 'Send',
            sending: 'Sending...',
            invalid: 'Please enter a valid name, e-mail, and message.',
            saveError: 'Message could not be saved. Check browser permissions or contact us by e-mail.',
            success: 'Your message has been received. Thank you!',
        };

    const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        const normalizedName = name.trim();
        const normalizedEmail = email.trim().toLowerCase();
        const normalizedMessage = message.trim();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(normalizedEmail);

        if (normalizedName.length < 2 || !isValidEmail || normalizedMessage.length < 3)
        {
            setFormSuccess('');
            setFormError(t.invalid);
            return;
        }

        setIsSubmitting(true);
        setFormError('');
        try
        {
            const response = await fetch('/api/contact-messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: normalizedName,
                    email: normalizedEmail,
                    message: normalizedMessage,
                    sourcePath: window.location.pathname,
                }),
            });
            if (!response.ok)
            {
                setFormSuccess('');
                setFormError(t.saveError);
                return;
            }
            setFormSuccess(t.success);
            setName('');
            setEmail('');
            setMessage('');
        } catch
        {
            setFormSuccess('');
            setFormError(t.saveError);
        } finally
        {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.contact} id="contact" ref={ref}>
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

                <motion.div
                    className={styles.contactLayout}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={`${styles.infoCard} ${styles.addressCard}`}>
                        <div className={styles.infoIcon}>
                            <Image
                                src="/argos-location.png"
                                alt="Konum"
                                width={60}
                                height={60}
                                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                            />
                        </div>
                        <div className={styles.addressContent}>
                            <h4 className={styles.infoTitle}>{t.address}</h4>
                            <p className={styles.infoText}>
                                ODTÜ Teknokent<br />
                                Bilişim İnovasyon Merkezi<br />
                                Mustafa Kemal Mahallesi, Ankara
                            </p>
                            <div className={styles.mapWrapper}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14345.997911373777!2d32.73140328715821!3d39.908283200000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347c53f28dff7%3A0xca27e3853847f199!2sOdt%C3%BC%20Teknokent!5e1!3m2!1str!2str!4v1749758787433!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '280px', borderRadius: '14px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sideCards}>
                        <div className={`${styles.infoCard} ${styles.sideInfoCard}`}>
                            <div className={styles.infoIcon}>
                                <Image
                                    src="/argos-mail.png"
                                    alt="E-posta"
                                    width={60}
                                    height={60}
                                    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>
                            <div>
                                <h4 className={styles.infoTitle}>{t.email}</h4>
                                <a href="mailto:info@argoseo.com" className={styles.infoLink}>
                                    info@argoseo.com
                                </a>
                            </div>
                        </div>

                        <div className={`${styles.infoCard} ${styles.sideInfoCard}`}>
                            <div className={styles.infoIcon}>
                                <Image
                                    src="/argos-call.png"
                                    alt="Telefon"
                                    width={60}
                                    height={60}
                                    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>
                            <div>
                                <h4 className={styles.infoTitle}>{t.phone}</h4>
                                <p className={styles.infoText}>-</p>
                            </div>
                        </div>

                        <form className={`${styles.infoCard} ${styles.messageCard}`} onSubmit={handleSubmitMessage}>
                            <h4 className={styles.infoTitle}>{t.leaveMessage}</h4>
                            <p className={styles.messageDesc}>{t.leaveMessageDesc}</p>
                            <input
                                id="contact-full-name"
                                name="fullName"
                                className={styles.messageInput}
                                type="text"
                                placeholder={t.fullName}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="name"
                                required
                            />
                            <input
                                id="contact-email"
                                name="email"
                                className={styles.messageInput}
                                type="email"
                                placeholder={t.yourEmail}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                            />
                            <textarea
                                id="contact-message"
                                name="message"
                                className={styles.messageTextarea}
                                placeholder={t.yourMessage}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                autoComplete="off"
                                rows={4}
                                required
                            />
                            {formError ? <p className={styles.formError}>{formError}</p> : null}
                            {formSuccess ? <p className={styles.formSuccess}>{formSuccess}</p> : null}
                            <button type="submit" className={styles.messageButton} disabled={isSubmitting}>
                                {isSubmitting ? t.sending : t.send}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
