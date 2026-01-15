// Stocky Privacy Policy Translations
const stockyTranslations = {
    tr: {
        backLink: "← Ana Sayfaya Dön",
        title: "Stocky Gizlilik Politikası",
        lastUpdate: "Son Güncelleme:",
        lastUpdateDate: "16 Ocak 2026",
        version: "Versiyon:",
        intro: "Stocky (\"biz\", \"bizim\" veya \"uygulama\") olarak gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, Stocky stok takip uygulamasını kullandığınızda hangi bilgilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.",
        appInfo: "Uygulama Bilgileri",
        developer: "Geliştirici:",
        contact: "İletişim:",
        location: "Konum:",
        locationValue: "Türkiye",
        section1: {
            title: "1. Toplanan Bilgiler",
            sub1: {
                title: "1.1 Hesap Bilgileri",
                desc: "Uygulamayı kullanmak için bir hesap oluşturmanız gerekmektedir. Bu süreçte aşağıdaki bilgiler toplanır:",
                item1: "E-posta adresi: Hesap oluşturma ve kimlik doğrulama için",
                item2: "Şifre: Güvenli bir şekilde şifrelenerek saklanır"
            },
            sub2: {
                title: "1.2 İş Verileri",
                desc: "Uygulama içinde girdiğiniz tüm iş verileri sunucularımızda saklanır:",
                item1: "Ürün bilgileri: Ürün adı, barkod, stok miktarı, fiyatlar, vergi oranları",
                item2: "Müşteri bilgileri: Ad, telefon, e-posta, adres, bakiye, notlar",
                item3: "Tedarikçi bilgileri: Firma adı, iletişim bilgileri, vergi numarası, IBAN, banka bilgileri",
                item4: "İşlem kayıtları: Satış, alış, iade ve ödeme işlemleri"
            },
            sub3: {
                title: "1.3 Cihaz Üzerinde Saklanan Veriler",
                desc: "Bazı tercihler yalnızca cihazınızda saklanır ve sunucularımıza gönderilmez:",
                item1: "Tema tercihi (açık/koyu/sistem)",
                item2: "Dil tercihi",
                item3: "Barkod tarayıcı ses ve titreşim ayarları"
            },
            sub4: {
                title: "1.4 Kamera Erişimi",
                desc: "Barkod tarama özelliği için kamera erişimi istenir. Kamera yalnızca barkod okumak için kullanılır:",
                item1: "Hiçbir fotoğraf veya video kaydedilmez",
                item2: "Kamera görüntüsü sunucularımıza gönderilmez",
                item3: "Barkod tarama işlemi tamamen cihaz üzerinde gerçekleşir (ML Kit)"
            },
            sub5: {
                title: "1.5 Rehber Erişimi (İsteğe Bağlı)",
                desc: "Müşteri veya tedarikçi eklerken rehberden kişi seçme özelliği sunulmaktadır:",
                item1: "Bu özellik tamamen isteğe bağlıdır",
                item2: "Rehber verileriniz sunucularımıza gönderilmez",
                item3: "Yalnızca seçtiğiniz kişinin bilgileri ilgili forma aktarılır"
            }
        },
        section2: {
            title: "2. Bilgilerin Kullanımı",
            desc: "Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:",
            item1: "Hizmet sunumu: Stok takibi, müşteri/tedarikçi yönetimi ve işlem kayıtları",
            item2: "Hesap yönetimi: Kimlik doğrulama ve hesap güvenliği",
            item3: "Veri senkronizasyonu: Verilerinizin farklı cihazlarda erişilebilir olması",
            item4: "Hizmet iyileştirme: Uygulama performansını ve kullanıcı deneyimini geliştirme"
        },
        section3: {
            title: "3. Veri Güvenliği",
            boxTitle: "Teknik Güvenlik Önlemleri",
            item1: "Şifreleme: Tüm veri iletişimi HTTPS/TLS ile şifrelenir",
            item2: "Güvenli kimlik doğrulama: Supabase Auth altyapısı kullanılır",
            item3: "Row Level Security (RLS): Her kullanıcı yalnızca kendi verilerine erişebilir",
            item4: "Şifre güvenliği: Şifreler bcrypt ile hash'lenerek saklanır",
            sub1: {
                title: "3.1 Erişim Kontrolü",
                item1: "Veritabanına doğrudan erişim kapalıdır",
                item2: "Tüm veri işlemleri güvenli API fonksiyonları üzerinden gerçekleşir",
                item3: "Her istek kullanıcı kimlik doğrulaması gerektirir"
            }
        },
        section4: {
            title: "4. Veri Paylaşımı",
            desc: "Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:",
            sub1: {
                title: "4.1 Hizmet Sağlayıcılar",
                item1: "Veritabanı ve kimlik doğrulama hizmetleri",
                item2: "Uygulama dağıtımı ve güncelleme hizmetleri"
            },
            sub2: {
                title: "4.2 Yasal Gereklilikler",
                desc: "Yasal zorunluluk halinde veya mahkeme kararıyla bilgileriniz ilgili makamlara açıklanabilir."
            }
        },
        section5: {
            title: "5. Veri Saklama",
            item1: "Aktif hesaplar: Hesabınız aktif olduğu sürece verileriniz saklanır",
            item2: "Hesap silme: Hesabınızı sildiğinizde tüm verileriniz kalıcı olarak silinir",
            item3: "Otomatik silme: Silinen veriler geri alınamaz şekilde silinir"
        },
        section6: {
            title: "6. Kullanıcı Hakları",
            boxTitle: "Haklarınız",
            item1: "Erişim Hakkı: Uygulama içinden tüm verilerinize erişebilirsiniz",
            item2: "Düzeltme Hakkı: Bilgilerinizi istediğiniz zaman düzenleyebilirsiniz",
            item3: "Silme Hakkı: Tek tek kayıtları veya hesabınızı tamamen silebilirsiniz",
            item4: "Veri Taşınabilirliği: Gelecek güncellemelerde eklenecektir"
        },
        section7: {
            title: "7. Çocukların Gizliliği",
            desc: "Stocky, 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki çocuklardan kişisel bilgi toplamayız."
        },
        section8: {
            title: "8. Uygulama İzinleri",
            th1: "İzin",
            th2: "Amaç",
            th3: "Zorunlu mu?",
            perm1: { name: "İnternet", purpose: "Veri senkronizasyonu ve kimlik doğrulama", required: "Evet" },
            perm2: { name: "Kamera", purpose: "Barkod tarama", required: "Hayır" },
            perm3: { name: "Rehber", purpose: "Kişi bilgilerini forma aktarma", required: "Hayır" },
            perm4: { name: "Titreşim", purpose: "Barkod tarama geri bildirimi", required: "Hayır" }
        },
        section9: {
            title: "9. Üçüncü Taraf Hizmetler",
            supabase: "Veritabanı ve kimlik doğrulama hizmetleri için Supabase kullanılmaktadır.",
            mlkit: "Barkod tarama için Google ML Kit kullanılmaktadır. Barkod işleme tamamen cihaz üzerinde gerçekleşir.",
            googleplay: "Uygulama güncellemeleri ve dağıtım için Google Play hizmetleri kullanılmaktadır."
        },
        section10: {
            title: "10. Politika Değişiklikleri",
            desc: "Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda uygulama içi bildirim göndeririz."
        },
        section11: {
            title: "11. İletişim",
            boxTitle: "Bizimle İletişime Geçin",
            subject: "Konu:",
            response: "Sorularınızı 24-48 saat içinde yanıtlamaya çalışıyoruz."
        },
        section12: {
            title: "12. Yasal Uyumluluk",
            desc: "Bu uygulama aşağıdaki düzenlemelere uygun olarak geliştirilmiştir:",
            kvkk: "Türkiye Kişisel Verilerin Korunması Kanunu",
            gdpr: "Avrupa Birliği Genel Veri Koruma Tüzüğü",
            googleplay: "Geliştirici Politikaları"
        },
        thanks: "Stocky'yi kullandığınız için teşekkür ederiz."
    },
    en: {
        backLink: "← Back to Home",
        title: "Stocky Privacy Policy",
        lastUpdate: "Last Updated:",
        lastUpdateDate: "January 16, 2026",
        version: "Version:",
        intro: "Stocky (\"we\", \"our\", or \"the app\") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains what information is collected when you use the Stocky inventory management application, how it is used, and how it is protected.",
        appInfo: "App Information",
        developer: "Developer:",
        contact: "Contact:",
        location: "Location:",
        locationValue: "Turkey",
        section1: {
            title: "1. Information We Collect",
            sub1: {
                title: "1.1 Account Information",
                desc: "You need to create an account to use the application. The following information is collected during this process:",
                item1: "Email address: For account creation and authentication",
                item2: "Password: Stored securely in encrypted form"
            },
            sub2: {
                title: "1.2 Business Data",
                desc: "All business data you enter within the app is stored on our servers:",
                item1: "Product information: Product name, barcode, stock quantity, prices, tax rates",
                item2: "Customer information: Name, phone, email, address, balance, notes",
                item3: "Supplier information: Company name, contact details, tax number, IBAN, bank details",
                item4: "Transaction records: Sales, purchases, returns, and payment transactions"
            },
            sub3: {
                title: "1.3 Data Stored on Device",
                desc: "Some preferences are stored only on your device and are not sent to our servers:",
                item1: "Theme preference (light/dark/system)",
                item2: "Language preference",
                item3: "Barcode scanner sound and vibration settings"
            },
            sub4: {
                title: "1.4 Camera Access",
                desc: "Camera access is requested for the barcode scanning feature. The camera is used only for reading barcodes:",
                item1: "No photos or videos are recorded",
                item2: "Camera footage is not sent to our servers",
                item3: "Barcode scanning is performed entirely on-device (ML Kit)"
            },
            sub5: {
                title: "1.5 Contacts Access (Optional)",
                desc: "When adding customers or suppliers, you can select contacts from your phone's contact list:",
                item1: "This feature is completely optional",
                item2: "Your contact data is not sent to our servers",
                item3: "Only the selected contact's information is transferred to the relevant form"
            }
        },
        section2: {
            title: "2. How We Use Information",
            desc: "We use the collected information for the following purposes:",
            item1: "Service delivery: Inventory tracking, customer/supplier management, and transaction records",
            item2: "Account management: Authentication and account security",
            item3: "Data synchronization: Making your data accessible across different devices",
            item4: "Service improvement: Enhancing app performance and user experience"
        },
        section3: {
            title: "3. Data Security",
            boxTitle: "Technical Security Measures",
            item1: "Encryption: All data communication is encrypted with HTTPS/TLS",
            item2: "Secure authentication: Supabase Auth infrastructure is used",
            item3: "Row Level Security (RLS): Each user can only access their own data",
            item4: "Password security: Passwords are hashed with bcrypt before storage",
            sub1: {
                title: "3.1 Access Control",
                item1: "Direct database access is disabled",
                item2: "All data operations are performed through secure API functions",
                item3: "Every request requires user authentication"
            }
        },
        section4: {
            title: "4. Data Sharing",
            desc: "We do not share your personal data with third parties except in the following cases:",
            sub1: {
                title: "4.1 Service Providers",
                item1: "Database and authentication services",
                item2: "App distribution and update services"
            },
            sub2: {
                title: "4.2 Legal Requirements",
                desc: "Your information may be disclosed to relevant authorities in case of legal obligation or court order."
            }
        },
        section5: {
            title: "5. Data Retention",
            item1: "Active accounts: Your data is retained as long as your account is active",
            item2: "Account deletion: All your data is permanently deleted when you delete your account",
            item3: "Automatic deletion: Deleted data cannot be recovered"
        },
        section6: {
            title: "6. User Rights",
            boxTitle: "Your Rights",
            item1: "Right to Access: You can access all your data within the app",
            item2: "Right to Rectification: You can edit your information at any time",
            item3: "Right to Erasure: You can delete individual records or your entire account",
            item4: "Data Portability: Will be added in future updates"
        },
        section7: {
            title: "7. Children's Privacy",
            desc: "Stocky is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."
        },
        section8: {
            title: "8. App Permissions",
            th1: "Permission",
            th2: "Purpose",
            th3: "Required?",
            perm1: { name: "Internet", purpose: "Data synchronization and authentication", required: "Yes" },
            perm2: { name: "Camera", purpose: "Barcode scanning", required: "No" },
            perm3: { name: "Contacts", purpose: "Transfer contact info to forms", required: "No" },
            perm4: { name: "Vibration", purpose: "Barcode scanning feedback", required: "No" }
        },
        section9: {
            title: "9. Third-Party Services",
            supabase: "Supabase is used for database and authentication services.",
            mlkit: "Google ML Kit is used for barcode scanning. Barcode processing is performed entirely on-device.",
            googleplay: "Google Play services are used for app updates and distribution."
        },
        section10: {
            title: "10. Policy Changes",
            desc: "We may update this Privacy Policy from time to time. In case of significant changes, we will send an in-app notification."
        },
        section11: {
            title: "11. Contact Us",
            boxTitle: "Get in Touch",
            subject: "Subject:",
            response: "We try to respond to your questions within 24-48 hours."
        },
        section12: {
            title: "12. Legal Compliance",
            desc: "This application has been developed in compliance with:",
            kvkk: "Turkish Personal Data Protection Law",
            gdpr: "European Union General Data Protection Regulation",
            googleplay: "Developer Policies"
        },
        thanks: "Thank you for using Stocky."
    }
};

// Apply Stocky translations
function applyStockyTranslations() {
    if (!window.i18n) return;
    
    const lang = i18n.getLang();
    const t = stockyTranslations[lang] || stockyTranslations.tr;
    
    // Apply all translations recursively
    function applyNested(obj, prefix = '') {
        for (const [key, value] of Object.entries(obj)) {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            if (typeof value === 'string') {
                const el = document.querySelector(`[data-i18n="stocky.${fullKey}"]`);
                if (el) {
                    el.textContent = value;
                }
            } else if (typeof value === 'object') {
                applyNested(value, fullKey);
            }
        }
    }
    
    applyNested(t);
    
    // Update page title
    document.title = lang === 'en' ? 'Stocky - Privacy Policy' : 'Stocky - Gizlilik Politikası';
    
    // Update TOC links to match translated headings
    document.querySelectorAll('.toc-link').forEach(link => {
        const targetId = link.dataset.target;
        const heading = document.getElementById(targetId);
        if (heading) {
            link.textContent = heading.textContent;
        }
    });
    
    // Update TOC header
    const tocHeader = document.querySelector('.toc-header');
    if (tocHeader) {
        tocHeader.textContent = lang === 'en' ? 'Table of Contents' : 'İçindekiler';
    }
}

// Listen for language changes
window.addEventListener('langChanged', applyStockyTranslations);

// Apply on load - wait for i18n to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Check periodically until i18n is ready
    const checkI18n = setInterval(() => {
        if (window.i18n && window.i18n.translations && Object.keys(window.i18n.translations).length > 0) {
            clearInterval(checkI18n);
            applyStockyTranslations();
        }
    }, 50);
    
    // Fallback after 1 second
    setTimeout(() => {
        clearInterval(checkI18n);
        applyStockyTranslations();
    }, 1000);
});
