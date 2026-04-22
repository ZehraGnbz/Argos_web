'use client';

import styles from '../gizlilik-politikasi/legal.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function CerezPolitikasi()
{
    const { language } = useLanguage();
    const isTr = language === 'tr';

    return (
        <div className={styles.legal}>
            <div className={styles.container}>
                <h1 className={styles.title}>{isTr ? 'Çerez (Cookie) Politikası' : 'Cookie Policy'}</h1>

                <section className={styles.section}>
                    <p>
                        {isTr
                            ? 'Argos Elektro-Optik olarak, yönetmekte olduğumuz internet sitesinin ziyaretçilerinin gizlilik ve kişisel verilerinin korunması haklarını gözeterek ziyaretçilerimize daha iyi bir kullanım deneyimi sağlayabilmek için kişisel verilerini işlemekte ve internet çerezlerini kullanmaktayız.'
                            : 'At Argos Elektro-Optik, we process personal data and use internet cookies to provide a better user experience while respecting visitors’ privacy and personal data protection rights.'}
                    </p>
                    <p>
                        {isTr
                            ? 'Bu teknolojilerin kullanımı başta 6698 sayılı Kişisel Verilerin Korunması Kanunu olmak üzere tabi olduğumuz mevzuata uygun şekilde gerçekleştirilmektedir.'
                            : 'The use of these technologies is carried out in accordance with applicable legislation, including data protection regulations.'}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? 'Çerez Nedir ve Hangi Amaçlarla Kullanılır?' : 'What Is a Cookie and Why Is It Used?'}</h2>
                    <p>
                        {isTr
                            ? 'Çerez, internet siteleri tarafından erişim sağladığınız bilgisayarınıza, cep telefonlarınıza, tabletlerinize veya diğer mobil cihazlarınıza kaydedilen küçük veri depolama dosyalarıdır. Bu dosyada internet sitesi üzerindeki gezintilerinize ait bilgiler saklanır.'
                            : 'A cookie is a small data storage file saved by websites on your computer, mobile phone, tablet, or other devices. These files store information about your browsing activity on the website.'}
                    </p>
                    <p>{isTr ? 'Çerezlerin kullanılmasının temel amaçları:' : 'Main purposes of cookie usage:'}</p>
                    <ul>
                        <li>{isTr ? 'İnternet sitesinin daha etkili kullanılabilmesi için bazı teknik verilere ihtiyaç duyulması' : 'Collecting certain technical data for more effective operation of the website'}</li>
                        <li>{isTr ? 'İnternet sitesi üzerinden tarama ve kullanım tercihlerinize ilişkin bilgilerin toplanması' : 'Collecting information about browsing and usage preferences'}</li>
                        <li>{isTr ? '5651 sayılı Kanun ve ilgili mevzuattan doğan yükümlülüklerin yerine getirilebilmesi için IP adresi gibi verilere ihtiyaç duyulması' : 'Obtaining data such as IP addresses to fulfill legal obligations under applicable regulations'}</li>
                        <li>{isTr ? 'İnternet sitesinin, sizin ve Şirketimizin hukuki ve ticari güvenliğinin sağlanması' : 'Ensuring the legal and commercial security of both users and the Company'}</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? 'İnternet Sitemizde Kullandığımız Çerez Tipleri' : 'Cookie Types Used on Our Website'}</h2>

                    <h3>{isTr ? 'Zorunlu Çerezler' : 'Strictly Necessary Cookies'}</h3>
                    <p>
                        {isTr
                            ? 'Bu çerezler web sitesinin temel işlevselliği için gereklidir ve devre dışı bırakılamaz. İnternet sitesinin düzgün şekilde çalışması için mutlaka gerekli olan çerezlerdir.'
                            : 'These cookies are required for the core functionality of the website and cannot be disabled. They are essential for proper site operation.'}
                    </p>

                    <h3>{isTr ? 'Analitik Çerezler' : 'Analytics Cookies'}</h3>
                    <p>
                        {isTr
                            ? 'Bu çerezler, ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olur. Ziyaretçi sayısının belirlenmesi, sayfa görüntüleme, tıklama ve kullanım alışkanlıklarının analiz edilmesi amacıyla kullanılır.'
                            : 'These cookies help us understand how visitors use the website. They are used to analyze visitor count, page views, clicks, and usage patterns.'}
                    </p>
                    <p>{isTr ? 'Kullanılan Hizmetler: Google Analytics' : 'Services Used: Google Analytics'}</p>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? 'Çerezlerin Kullanımını Nasıl Kontrol Edebilirim?' : 'How Can I Control Cookie Usage?'}</h2>
                    <p>
                        {isTr
                            ? 'Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirebilirsiniz.'
                            : 'You can personalize your cookie preferences by changing your browser settings.'}
                    </p>
                    <ul>
                        <li><strong>Chrome:</strong> {isTr ? 'Ayarlar → Gizlilik ve Güvenlik → Çerezler' : 'Settings → Privacy and Security → Cookies'}</li>
                        <li><strong>Firefox:</strong> {isTr ? 'Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri' : 'Settings → Privacy and Security → Cookies and Site Data'}</li>
                        <li><strong>Safari:</strong> {isTr ? 'Tercihler → Gizlilik → Çerezler' : 'Preferences → Privacy → Cookies'}</li>
                        <li><strong>Edge:</strong> {isTr ? 'Ayarlar → Çerezler ve Site İzinleri' : 'Settings → Cookies and Site Permissions'}</li>
                        <li><strong>Opera:</strong> {isTr ? 'Ayarlar → Gelişmiş → Gizlilik ve Güvenlik → Çerezler' : 'Settings → Advanced → Privacy and Security → Cookies'}</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>{isTr ? 'İletişim' : 'Contact'}</h2>
                    <p>
                        {isTr
                            ? 'Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:'
                            : 'You may contact us with your questions about our Cookie Policy:'}
                    </p>
                    <div className={styles.infoBox}>
                        <p><strong>Argos Elektro-Optik</strong></p>
                        <p>Mustafa Kemal Mahallesi, Bilişim İnovasyon Merkezi</p>
                        <p>ODTÜ Teknokent, Ankara</p>
                        <p>{isTr ? 'E-posta' : 'Emaıl'}: <a href="mailto:info@argoseo.com">info@argoseo.com</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
