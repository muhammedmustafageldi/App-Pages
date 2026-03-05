const quitifyTranslations = {
    tr: {
        backLink: "← Ana Sayfaya Dön",
        appTitle: "Quitify Gizlilik Politikası",
        contentHtml: `
                <p style="color: var(--text-tertiary); margin-bottom: 2rem;">
                    <strong>Son Güncelleme:</strong> 24 Temmuz 2025 | <strong>Versiyon:</strong> 1.0
                </p>

                <h2>Giriş</h2>
                <p>Quitify, kullanıcıların sigara bırakma yolculuklarında onlara yardımcı olmak için geliştirilmiş bir uygulamadır. Kullanıcılarımızın gizliliğini ciddiyetle ele alıyor ve kişisel verilerini korumak için gerekli tüm önlemleri alıyoruz. Bu Gizlilik Politikası, Quitify aracılığıyla toplanan verilerin nasıl işlendiğini açıklamaktadır.</p>

                <div class="highlight-box">
                    <h3>📱 Uygulama Bilgileri</h3>
                    <p><strong>Geliştirici:</strong> Muhammed Mustafa Geldi<br>
                        <strong>İletişim:</strong> <a href="mailto:swankydata9@gmail.com">swankydata9@gmail.com</a><br>
                        <strong>Konum:</strong> Türkiye
                    </p>
                </div>

                <h2>1. Toplanan Bilgiler</h2>
                <p>Quitify uygulamasını kullanırken şu veriler toplanabilir:</p>

                <h3>1.1 Kişisel Bilgiler</h3>
                <ul>
                    <li>Kullanıcının adı</li>
                    <li>Sigara bırakma tarihi</li>
                    <li>Günlük içilen sigara sayısı</li>
                    <li>Bir paketteki sigara sayısı</li>
                    <li>Paket fiyatı ve para birimi</li>
                    <li>Sigara içme süresi</li>
                </ul>

                <h3>1.2 Teknik Bilgiler</h3>
                <ul>
                    <li>Cihaz türü ve işletim sistemi</li>
                    <li>IP adresi</li>
                    <li>Oturum detayları</li>
                </ul>

                <h3>1.3 Yedekleme Bilgileri</h3>
                <ul>
                    <li>Firebase aracılığıyla çevrimiçi yedekleme</li>
                    <li>Room veritabanı dosyaları</li>
                    <li>Belirli aralıklarla (3 gün, 1 hafta, 1 ay) Firebase Firestore'a yüklenen veriler</li>
                </ul>

                <h3>1.4 Reklam Verisi</h3>
                <ul>
                    <li>Google AdMob aracılığıyla kişiselleştirilmemiş reklamlar</li>
                </ul>

                <div class="section-divider"></div>

                <h2>2. Bilgilerin Kullanımı</h2>
                <p>Toplanan veriler aşağıdaki amaçlarla kullanılır:</p>
                <ul>
                    <li>Kullanıcının sigara bırakma sürecindeki ilerlemesini izlemek</li>
                    <li>İlerleme göstergeleri ve istatistikler sunmak</li>
                    <li>Veri yedekleme ve geri yükleme işlemleri</li>
                    <li>Google AdMob ile reklamları uygulamada göstermek</li>
                </ul>

                <h2>3. Üçüncü Taraflarla Paylaşım</h2>
                <p>Quitify, kullanıcıların kişisel bilgilerini üçüncü şahıslarla satmaz veya paylaşmaz. Veriler yalnızca Firebase Firestore'a yedekleme ve geri yükleme amaçlarıyla yüklenir ve kullanıcıya özeldir.</p>

                <h2>4. Veri Saklama</h2>
                <p>Verileriniz yalnızca gerekli olduğu sürece saklanır. Yedekleme verileri Firebase üzerinden kullanıcının talebiyle silinebilir. Yedekleme dışındaki veriler yerel olarak saklanır ve dışarıya paylaşılmaz.</p>

                <div class="section-divider"></div>

                <h2>5. Veri Güvenliği</h2>
                <div class="highlight-box">
                    <h3>🔒 Güvenlik Önlemleri</h3>
                    <p>Verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:</p>
                    <ul>
                        <li>Firebase Firestore güvenlik kuralları</li>
                        <li>Şifrelenmiş veri aktarımı</li>
                        <li>Yerel veri şifreleme</li>
                        <li>Düzenli güvenlik güncellemeleri</li>
                    </ul>
                </div>

                <h2>6. Çocukların Gizliliği</h2>
                <p>Quitify, 13 yaş altı çocuklar için uygun değildir ve onlardan herhangi bir kişisel bilgi toplanmaz.</p>

                <div class="section-divider"></div>

                <h2>7. Kullanıcı Hakları</h2>
                <div class="highlight-box">
                    <h3>👤 Haklarınız</h3>
                    <ul>
                        <li><strong>Erişim Hakkı:</strong> Kişisel verilerinize erişim sağlama</li>
                        <li><strong>Düzeltme Hakkı:</strong> Yanlış verileri düzeltme</li>
                        <li><strong>Silme Hakkı:</strong> Kişisel verilerinizi silme</li>
                    </ul>
                    <p><strong>İletişim:</strong> <a href="mailto:swankydata9@gmail.com">swankydata9@gmail.com</a></p>
                    <p><strong>İşlem Süresi:</strong> 30 gün içinde</p>
                </div>

                <h2>8. Üçüncü Taraf Servisler</h2>

                <h3>8.1 Google AdMob</h3>
                <ul>
                    <li>Kişiselleştirilmemiş reklamlar</li>
                    <li>Kullanıcılar Google ayarları ile reklamları yönetebilir</li>
                    <li><a href="https://policies.google.com/privacy" target="_blank">Google Gizlilik Politikası ↗</a></li>
                </ul>

                <h3>8.2 Firebase Firestore</h3>
                <ul>
                    <li>Veri yedekleme ve geri yükleme hizmetleri</li>
                    <li><a href="https://firebase.google.com/support/privacy" target="_blank">Firebase Gizlilik Politikası ↗</a></li>
                </ul>

                <h2>9. İnternet İzinleri</h2>
                <p>Quitify, yalnızca Firebase Firestore yedeklemeleri ve Google AdMob reklamları için internet erişimi gerektirir. Başka hiçbir izin talep edilmez.</p>

                <h2>10. Politika Güncellemeleri</h2>
                <p>Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncellemeler, uygulama içinde ve web sitemizde duyurulacaktır. Uygulamayı kullanmaya devam etmek, değişiklikleri kabul ettiğiniz anlamına gelir.</p>

                <div class="section-divider"></div>

                <h2>11. İletişim</h2>
                <div class="highlight-box">
                    <h3>📧 Bizimle İletişime Geçin</h3>
                    <p><strong>E-posta:</strong> <a href="mailto:swankydata9@gmail.com?subject=Quitify - Gizlilik Politikası">swankydata9@gmail.com</a></p>
                    <p><strong>Konu:</strong> Quitify - Gizlilik Politikası</p>
                    <p>Sorularınızı 24-48 saat içinde yanıtlamaya çalışıyoruz.</p>
                </div>

                <h2>12. Yasal Uyumluluk</h2>
                <ul>
                    <li><strong>KVKK</strong> (Türkiye - Kişisel Verilerin Korunması Kanunu)</li>
                    <li><strong>GDPR</strong> (Avrupa Birliği - Genel Veri Koruma Tüzüğü)</li>
                    <li><strong>CCPA</strong> (ABD - California Tüketici Gizliliği Yasası)</li>
                </ul>
`
    },
    en: {
        backLink: "← Back to Home",
        appTitle: "Quitify Privacy Policy",
        contentHtml: `
                <p style="color: var(--text-tertiary); margin-bottom: 2rem;">
                    <strong>Last Updated:</strong> July 24, 2025 | <strong>Version:</strong> 1.0
                </p>

                <h2>Introduction</h2>
                <p>Quitify is an application developed to assist users on their journey to quit smoking. We take the privacy of our users seriously and take all necessary precautions to protect their personal data. This Privacy Policy explains how data collected continuously through Quitify is processed.</p>

                <div class="highlight-box">
                    <h3>📱 App Information</h3>
                    <p><strong>Developer:</strong> Muhammed Mustafa Geldi<br>
                        <strong>Contact:</strong> <a href="mailto:swankydata9@gmail.com">swankydata9@gmail.com</a><br>
                        <strong>Location:</strong> Turkey
                    </p>
                </div>

                <h2>1. Information Collected</h2>
                <p>The following data may be collected while using the Quitify application:</p>

                <h3>1.1 Personal Information</h3>
                <ul>
                    <li>User's name</li>
                    <li>Date of smoking cessation</li>
                    <li>Number of cigarettes smoked daily</li>
                    <li>Number of cigarettes in a pack</li>
                    <li>Pack price and currency</li>
                    <li>Duration of smoking</li>
                </ul>

                <h3>1.2 Technical Information</h3>
                <ul>
                    <li>Device type and operating system</li>
                    <li>IP address</li>
                    <li>Session details</li>
                </ul>

                <h3>1.3 Backup Information</h3>
                <ul>
                    <li>Online backup via Firebase</li>
                    <li>Room database files</li>
                    <li>Data uploaded to Firebase Firestore at targeted intervals (3 days, 1 week, 1 month)</li>
                </ul>

                <h3>1.4 Advertising Data</h3>
                <ul>
                    <li>Non-personalized ads via Google AdMob</li>
                </ul>

                <div class="section-divider"></div>

                <h2>2. Use of Information</h2>
                <p>Collected data is used for the following purposes:</p>
                <ul>
                    <li>Monitoring the user's progress in quitting smoking</li>
                    <li>Providing progress indicators and statistics</li>
                    <li>Data backup and restoration processes</li>
                    <li>Displaying ads in the app with Google AdMob</li>
                </ul>

                <h2>3. Sharing with Third Parties</h2>
                <p>Quitify does not sell or share users' personal information with third parties. Data is only uploaded to Firebase Firestore for backup and restoration purposes and is private to the user.</p>

                <h2>4. Data Retention</h2>
                <p>Your data is kept only as long as necessary. Backup data can be deleted upon user request via Firebase. Data other than backups is stored locally and is not shared externally.</p>

                <div class="section-divider"></div>

                <h2>5. Data Security</h2>
                <div class="highlight-box">
                    <h3>🔒 Security Measures</h3>
                    <p>We take the following measures to ensure the security of your data:</p>
                    <ul>
                        <li>Firebase Firestore security rules</li>
                        <li>Encrypted data transfer</li>
                        <li>Local data encryption</li>
                        <li>Regular security updates</li>
                    </ul>
                </div>

                <h2>6. Children's Privacy</h2>
                <p>Quitify is not intended for children under 13, and no personal information is collected from them.</p>

                <div class="section-divider"></div>

                <h2>7. User Rights</h2>
                <div class="highlight-box">
                    <h3>👤 Your Rights</h3>
                    <ul>
                        <li><strong>Right of Access:</strong> To access your personal data</li>
                        <li><strong>Right of Rectification:</strong> To correct incorrect data</li>
                        <li><strong>Right to Erasure:</strong> To delete your personal data</li>
                    </ul>
                    <p><strong>Contact:</strong> <a href="mailto:swankydata9@gmail.com">swankydata9@gmail.com</a></p>
                    <p><strong>Processing Time:</strong> Within 30 days</p>
                </div>

                <h2>8. Third Party Services</h2>

                <h3>8.1 Google AdMob</h3>
                <ul>
                    <li>Non-personalized ads</li>
                    <li>Users can manage ads through Google settings</li>
                    <li><a href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy ↗</a></li>
                </ul>

                <h3>8.2 Firebase Firestore</h3>
                <ul>
                    <li>Data backup and restoration services</li>
                    <li><a href="https://firebase.google.com/support/privacy" target="_blank">Firebase Privacy Policy ↗</a></li>
                </ul>

                <h2>9. Internet Permissions</h2>
                <p>Quitify requires internet access strictly for Firebase Firestore backups and Google AdMob ads. No other permissions are required.</p>

                <h2>10. Policy Updates</h2>
                <p>This Privacy Policy may be updated from time to time. Updates will be announced within the app and on our website. Continued use of the app implies acceptance of the changes.</p>

                <div class="section-divider"></div>

                <h2>11. Contact</h2>
                <div class="highlight-box">
                    <h3>📧 Contact Us</h3>
                    <p><strong>Email:</strong> <a href="mailto:swankydata9@gmail.com?subject=Quitify - Privacy Policy">swankydata9@gmail.com</a></p>
                    <p><strong>Subject:</strong> Quitify - Privacy Policy</p>
                    <p>We strive to answer your questions within 24-48 hours.</p>
                </div>

                <h2>12. Legal Compliance</h2>
                <ul>
                    <li><strong>KVKK</strong> (Turkey - Personal Data Protection Law)</li>
                    <li><strong>GDPR</strong> (European Union - General Data Protection Regulation)</li>
                    <li><strong>CCPA</strong> (USA - California Consumer Privacy Act)</li>
                </ul>
`
    }
};

function applyQuitifyTranslations() {
    if (!window.i18n) return;
    const lang = i18n.getLang();
    const t = quitifyTranslations[lang] || quitifyTranslations.tr;

    const contentArea = document.getElementById('quitifyContentContainer');
    if (contentArea) {
        contentArea.innerHTML = t.contentHtml;
        document.title = t.appTitle;
        const h1 = document.querySelector('article h1');
        if (h1) h1.textContent = t.appTitle;
    }

    const backLink = document.querySelector('.back-link');
    if (backLink) backLink.textContent = t.backLink;

    if (typeof initializeTOC === 'function') {
        const tocSidebar = document.querySelector('.toc-sidebar');
        if (tocSidebar) {
            const existingBtn = tocSidebar.querySelector('.download-btn-sidebar');
            tocSidebar.innerHTML = '';
            if (existingBtn) {
                if (lang === 'en') {
                    existingBtn.querySelector('span:last-child').textContent = 'Download Quitify';
                } else {
                    existingBtn.querySelector('span:last-child').textContent = "Quitify'ı İndir";
                }
                tocSidebar.appendChild(existingBtn);
            }
        }
        initializeTOC();
    }
}

window.addEventListener('langChanged', applyQuitifyTranslations);

document.addEventListener('DOMContentLoaded', () => {
    const checkI18n = setInterval(() => {
        if (window.i18n && window.i18n.translations) {
            clearInterval(checkI18n);
            applyQuitifyTranslations();
        }
    }, 50);
    setTimeout(() => {
        clearInterval(checkI18n);
        applyQuitifyTranslations();
    }, 1000);
});
