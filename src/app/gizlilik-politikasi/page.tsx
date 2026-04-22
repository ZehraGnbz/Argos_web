'use client';

import styles from './legal.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function GizlilikPolitikasi() {
    const { language } = useLanguage();
    const isTr = language === 'tr';

    return (
        <div className={styles.legal}>
            <div className={styles.container}>
                <h1 className={styles.title}>{isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}</h1>

                <section className={styles.section}>
                    <p>
                        {isTr
                            ? (
                                <>
                                    Argos Elektro-Optik olarak, ziyaretçilerimizin gizliliğine ve kişisel verilerinin korunmasına
                                    büyük önem veriyoruz. Bu gizlilik politikası, <a href="https://argos-eo.com">www.argos-eo.com</a> adresli
                                    web sitemizi ziyaret ettiğinizde, bizimle paylaştığınız kişisel bilgilerin nasıl toplandığını,
                                    kullanıldığını ve korunduğunu açıklamaktadır.
                                </>
                            )
                            : (
                                <>
                                    At Argos Elektro-Optik, we attach great importance to the privacy of our visitors and the
                                    protection of personal data. This Privacy Policy explains how personal information shared through
                                    our website at <a href="https://argos-eo.com">www.argos-eo.com</a> is collected, used, and protected.
                                </>
                            )}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '1. Toplanan Bilgiler' : '1. Information We Collect'}</h2>
                    <p>{isTr ? 'Web sitemiz üzerinden aşağıdaki türde kişisel veriler toplanabilir:' : 'The following types of personal data may be collected through our website:'}</p>
                    <ul>
                        <li>
                            <strong>{isTr ? 'İletişim yoluyla:' : 'Via contact forms:'}</strong>{' '}
                            {isTr ? 'Ad, soyad, e-posta adresi, telefon numarası, mesaj içeriği' : 'Name, surname, e-mail address, phone number, and message content'}
                        </li>
                        <li>
                            <strong>{isTr ? 'Otomatik olarak toplanan veriler:' : 'Automatically collected data:'}</strong>{' '}
                            {isTr ? 'IP adresi, tarayıcı türü, ziyaret zamanı gibi teknik veriler (yalnızca sistem güvenliği ve istatistiksel analiz amaçlı)' : 'Technical data such as IP address, browser type, and visit time (only for system security and statistical analysis)'}
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '2. Kişisel Verilerin Kullanım Amaçları' : '2. Purposes of Processing Personal Data'}</h2>
                    <p>{isTr ? 'Topladığımız kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:' : 'Collected personal data is used for the following purposes:'}</p>
                    <ul>
                        <li>{isTr ? 'İletişim yoluyla gönderilen taleplere, sorulara veya teklif isteklerine yanıt verebilmek' : 'Responding to requests, questions, or quotation demands sent via contact channels'}</li>
                        <li>{isTr ? 'Web sitesinin güvenliğini ve performansını sağlamak' : 'Maintaining website security and performance'}</li>
                        <li>{isTr ? 'Mevzuattan doğan yükümlülüklerimizi yerine getirmek' : 'Fulfilling legal obligations'}</li>
                    </ul>
                    <p>{isTr ? 'Kişisel verileriniz, belirtilen amaçlar dışında kullanılmaz.' : 'Your personal data is not used for purposes other than those specified above.'}</p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '3. Kişisel Verilerin Paylaşımı' : '3. Sharing Personal Data'}</h2>
                    <p>
                        {isTr
                            ? 'Kişisel verileriniz herhangi bir üçüncü tarafla paylaşılmaz. Yalnızca yasal yükümlülükler kapsamında, yetkili kamu kurumları veya yargı mercileri ile talep edilmesi halinde paylaşılabilir.'
                            : 'Your personal data is not shared with third parties, except when required under legal obligations and upon request by competent public authorities or judicial bodies.'}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '4. Kişisel Verilerin Saklanması' : '4. Data Retention'}</h2>
                    <p>
                        {isTr
                            ? 'Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca güvenli ortamlarda saklanır. Bu süre sona erdiğinde veriler silinir, yok edilir veya anonim hale getirilir.'
                            : 'Your personal data is retained in secure environments for the duration required by processing purposes. At the end of this period, data is deleted, destroyed, or anonymized.'}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '5. Bilgi Güvenliği' : '5. Information Security'}</h2>
                    <p>
                        {isTr
                            ? 'Kişisel verilerinizin güvenliği bizim için önemlidir. Bu nedenle, verilerin kaybolmasını, yetkisiz erişimi veya ifşayı önlemek amacıyla uygun teknik ve idari tedbirler alınmaktadır.'
                            : 'The security of your personal data is important to us. Therefore, appropriate technical and administrative measures are implemented to prevent loss, unauthorized access, or disclosure.'}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '6. Çerez (Cookie) Kullanımı' : '6. Cookie Usage'}</h2>
                    <p>
                        {isTr
                            ? 'Web sitemizde, kullanıcı deneyimini geliştirmek, site performansını analiz etmek ve sunulan hizmetleri iyileştirmek amacıyla çerezler kullanılmaktadır.'
                            : 'Cookies are used on our website to improve user experience, analyze site performance, and enhance provided services.'}
                    </p>
                    <p>
                        {isTr
                            ? 'Kullanılan çerezler; zorunlu, performans ve analitik çerezleri gibi farklı türlerde olabilir. Ziyaretçiler, tarayıcı ayarlarını değiştirerek çerezleri reddedebilir veya silebilir. Ancak bu durumda web sitesinin bazı bölümleri düzgün çalışmayabilir.'
                            : 'Cookies used may include strictly necessary, performance, and analytics cookies. Visitors can refuse or delete cookies by changing browser settings. In that case, some parts of the website may not function properly.'}
                    </p>
                    <p>
                        {isTr ? 'Detaylı bilgi için ' : 'For more details, please review our '}
                        <a href="/cerez-politikasi">{isTr ? 'Çerez Politikamızı' : 'Cookie Policy'}</a>.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '7. Haklarınız' : '7. Your Rights'}</h2>
                    <p>
                        {isTr
                            ? 'Kişisel verilerinizle ilgili olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:'
                            : 'Regarding your personal data, you have the following rights under applicable data protection legislation:'}
                    </p>
                    <ul>
                        <li>{isTr ? 'Kişisel verilerinizin işlenip işlenmediğini öğrenme' : 'To learn whether your personal data is processed'}</li>
                        <li>{isTr ? 'İşlenmişse buna ilişkin bilgi talep etme' : 'To request information if your data has been processed'}</li>
                        <li>{isTr ? 'İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme' : 'To learn the purpose of processing and whether it is used accordingly'}</li>
                        <li>{isTr ? 'Eksik veya yanlış işlenmişse düzeltilmesini isteme' : 'To request correction if processed incompletely or inaccurately'}</li>
                        <li>{isTr ? 'Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme' : 'To request deletion or destruction under legal conditions'}</li>
                        <li>{isTr ? 'Bu işlemlerin üçüncü kişilere bildirilmesini talep etme' : 'To request notification of such actions to third parties'}</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '8. İletişim' : '8. Contact'}</h2>
                    <p>
                        {isTr
                            ? 'Gizlilik politikamız veya kişisel verilerinizin işlenmesiyle ilgili her türlü soru ve talebiniz için bizimle iletişime geçebilirsiniz:'
                            : 'You may contact us for any questions or requests regarding this Privacy Policy or the processing of your personal data:'}
                    </p>
                    <div className={styles.infoBox}>
                        <p><strong>Argos Elektro-Optik</strong></p>
                        <p>Mustafa Kemal Mahallesi, Bilişim İnovasyon Merkezi</p>
                        <p>ODTÜ Teknokent, Ankara</p>
                        <p>{isTr ? 'E-posta' : 'Emaıl'}: <a href="mailto:info@argoseo.com">info@argoseo.com</a></p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? '9. Güncelleme ve Değişiklikler' : '9. Updates and Changes'}</h2>
                    <p>
                        {isTr
                            ? 'İşbu Politika, yasal düzenlemelerde meydana gelebilecek değişiklikler doğrultusunda güncellenebilir. Güncel versiyon, www.argos-eo.com adresinde yayımlandığı tarihten itibaren geçerli olur.'
                            : 'This Policy may be updated in line with legal and regulatory changes. The current version becomes effective as of its publication date at www.argos-eo.com.'}
                    </p>
                </section>
            </div>
        </div>
    );
}
