'use client';

import { useState } from 'react';
import styles from './EmailGatedDownloadButton.module.css';

type Language = 'tr' | 'en';

type Props = {
  language: Language;
  fileUrl: string;
  productKey: string;
  productName: string;
  fileName?: string;
  className?: string;
  children: React.ReactNode;
};

function isValidEmailByStandards(input: string) {
  if (!input) return false;
  if (input.length < 6 || input.length > 254) return false;

  const email = input.trim().toLowerCase();
  if (email.includes(' ')) return false;
  if (email.startsWith('.') || email.endsWith('.')) return false;
  if (email.includes('..')) return false;

  const atIndex = email.indexOf('@');
  if (atIndex <= 0 || atIndex !== email.lastIndexOf('@')) return false;

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);
  if (!localPart || !domainPart) return false;
  if (localPart.length > 64) return false;

  // local-part: allows common RFC5322-safe characters (pragmatic subset)
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(localPart)) return false;

  // domain must have at least one dot and valid labels
  if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domainPart)) return false;
  const labels = domainPart.split('.');
  if (labels.some((label) => !label || label.startsWith('-') || label.endsWith('-'))) return false;
  if (labels.some((label) => !/^[a-z0-9-]+$/i.test(label))) return false;

  return true;
}

export default function EmailGatedDownloadButton({
  language,
  fileUrl,
  productKey,
  productName,
  fileName,
  className,
  children,
}: Props)
{
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const text = language === 'tr'
    ? {
      title: 'Datasheet indirme',
      description: 'Devam etmeden önce e-posta adresinizi girin.',
      placeholder: 'ad.soyad@firma.com',
      invalid: 'Geçerli bir e-posta girin.',
      failed: 'Kayıt alınamadı. Tekrar deneyin veya bizimle iletişime geçin.',
      validating: 'Doğrulanıyor...',
      downloading: 'Kayıt alındı, indiriliyor...',
      cancel: 'İptal',
      download: 'İndir',
      retry: 'Tekrar dene',
      contact: 'Bize ulaş',
    }
    : {
      title: 'Datasheet download',
      description: 'Enter your e-mail before continuing.',
      placeholder: 'name.surname@company.com',
      invalid: 'Enter a valid e-mail address.',
      failed: 'Could not save your request. Please retry or contact us.',
      validating: 'Validating...',
      downloading: 'Saved. Starting download...',
      cancel: 'Cancel',
      download: 'Download',
      retry: 'Retry',
      contact: 'Contact us',
    };

  const normalized = email.trim();
  const isEmailValid = isValidEmailByStandards(normalized);

  const close = () =>
  {
    setIsOpen(false);
    setError('');
    setStatus('');
  };

  const handleConfirm = async () =>
  {
    if (!isEmailValid)
    {
      setError(text.invalid);
      setStatus('');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setStatus(text.validating);
    try {
      const response = await fetch('/api/download-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalized,
          productKey,
          productName,
          language,
          sourcePath: window.location.pathname,
        }),
      });
      if (!response.ok) {
        setError(text.failed);
        setStatus('');
        return;
      }
      setStatus(text.downloading);

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName ?? '';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
      close();
    } catch {
      setError(text.failed);
      setStatus('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.downloadGateButton}${className ? ` ${className}` : ''}`}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>

      {isOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={text.title}>
          <div className={styles.dialog}>
            <h3 className={styles.title}>{text.title}</h3>
            <p className={styles.description}>{text.description}</p>
            <input
              id="datasheet-email"
              name="email"
              autoFocus
              type="email"
              className={styles.input}
              value={email}
              placeholder={text.placeholder}
              autoComplete="email"
              onChange={(e) =>
              {
                setEmail(e.target.value);
                if (error) setError('');
                setStatus('');
              }}
              onKeyDown={(e) =>
              {
                if (e.key === 'Enter')
                {
                  e.preventDefault();
                  handleConfirm();
                }
              }}
            />
            {normalized.length > 0 && !isEmailValid ? <p className={styles.error}>{text.invalid}</p> : null}
            {status ? <p className={styles.status}>{status}</p> : null}
            {error ? <p className={styles.error}>{error}</p> : null}
            {error ? (
              <div className={styles.fallbackActions}>
                <button type="button" className={styles.retryButton} onClick={handleConfirm} disabled={isSubmitting}>
                  {text.retry}
                </button>
                <a className={styles.contactLink} href="/#contact" onClick={close}>
                  {text.contact}
                </a>
              </div>
            ) : null}

            <div className={styles.actions}>
              <button type="button" className={styles.cancelButton} onClick={close} disabled={isSubmitting}>
                {text.cancel}
              </button>
              <button type="button" className={styles.downloadButton} onClick={handleConfirm} disabled={isSubmitting || !isEmailValid}>
                {text.download}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
