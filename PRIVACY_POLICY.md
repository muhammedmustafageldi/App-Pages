# SalonGo Gizlilik Politikası

**Son Güncelleme:** 28 Aralık 2025  
**Versiyon:** 1.1.1  
**Dil:** Türkçe

---

## 1. Uygulama Hakkında

SalonGo, işletmeler için tasarlanmış kapsamlı bir yönetim uygulamasıdır. Müşteri kayıtları, randevu takibi, kasa yönetimi ve işlem geçmişi gibi tüm operasyonları kolaylaştırır.

### 📱 Uygulama Bilgileri
- **Geliştirici:** Muhammed Mustafa Geldi  
- **İletişim:** swankysoftware@gmail.com  
- **Konum:** Türkiye

### 📋 İlgili Belgeler
Bu Gizlilik Politikası, [Kullanıcı Sözleşmesi](https://muhammedmustafageldi.github.io/App-Pages/salongo-terms-of-service.html) ile birlikte geçerlidir. Uygulamayı kullanarak her iki belgeyi de kabul etmiş sayılırsınız.

---

## 2. Topladığımız Veriler

### 2.1 Hesap Bilgileri (Bulutta Saklanır)
Kayıt ve giriş işlemleri için aşağıdaki bilgiler toplanır:

| Veri | Açıklama |
|------|----------|
| Kullanıcı adı | Hesap kimliği (3-20 karakter) |
| Email adresi | İletişim ve doğrulama için |
| Şifre | Bcrypt ile şifrelenmiş olarak saklanır |
| Salon adı | İşletme tanımlayıcısı |
| Google ID | Google ile giriş yapanlar için (opsiyonel) |
| Kayıt yöntemi | 'email' veya 'google' |
| Cihaz ID | Tek cihaz politikası için |

### 2.2 Abonelik Bilgileri (Bulutta Saklanır)

| Veri | Açıklama |
|------|----------|
| Abonelik tipi | 'free', 'monthly' veya 'yearly' |
| Premium durumu | Aktif abonelik var mı? |
| Google Play purchase token | Abonelik doğrulama için |
| Google Play sipariş ID | Ödeme takibi için |
| Son senkronizasyon tarihi | Abonelik güncelleme zamanı |

### 2.3 Salon Verileri (Cihazınızda Saklanır)
Bu veriler **yalnızca cihazınızda** saklanır ve bulut yedekleme yapılmadığı sürece sunucularımıza gönderilmez:

**Müşteri Bilgileri:**
- Ad soyad
- Telefon numarası
- Doğum tarihi
- Cinsiyet
- Notlar (opsiyonel)
- VIP durumu ve bitiş tarihi
- Profil ikonu

**Çalışan Bilgileri:**
- Ad
- Profil ikonu

**Randevu Kayıtları:**
- Çalışan ve müşteri bilgisi
- Yapılacak işlem açıklaması
- Tarih ve saat
- Notlar
- Tamamlanma durumu

**İşlem Kayıtları (Kasa):**
- İşlem başlığı
- Tutar
- Tarih
- Açıklama
- Gelir/Gider türü
- İlişkili müşteri (opsiyonel)

**Sadakat Sistemi:**
- Müşteri bazlı yıldız sayısı
- Yıllık harcama tutarı
- Yıldız kazanma tarihleri

**İşletme Ayarları:**
- Çalışma saatleri (açılış/kapanış)
- Kapalı günler
- Otomatik mesaj şablonu
- Sadakat sistemi ayarları

### 2.4 Oturum Bilgileri (Bulutta Saklanır)

| Veri | Açıklama |
|------|----------|
| Oturum token'ı | Güvenli giriş için |
| Cihaz ID | Tek cihaz politikası için |
| Oturum durumu | Aktif/Geçersiz kılınmış |

### 2.5 Geçici Veriler (Bulutta - Otomatik Silinir)

| Veri | Saklama Süresi |
|------|----------------|
| Email doğrulama kodları | 3 dakika |
| Şifre sıfırlama kodları | 3 dakika |
| Şifre sıfırlama token'ları | 5 dakika |
| Günlük email gönderim sayacı | 3 gün |

### 2.6 Yedekleme Bilgileri (Bulutta - Premium)

| Veri | Açıklama |
|------|----------|
| Yedekleme dosya yolu | Supabase Storage konumu |
| Yedekleme boyutu | Byte cinsinden |
| Son yedekleme tarihi | Otomatik güncellenir |

---

## 3. Verilerin Saklanması

### 📱 Cihazınızda (Yerel - Room Database)
Müşteri kayıtları, randevular, işlemler, çalışanlar ve ayarlar **yalnızca cihazınızda** saklanır.

**Yerel Veritabanı Tabloları:**
- Customer (Müşteriler)
- Employee (Çalışanlar)
- Appointment (Randevular)
- Operation (Gelir/Gider İşlemleri)
- CustomerLoyalty (Müşteri Sadakati)
- LoyaltySettings (Sadakat Ayarları)
- AutoMessageSettings (Otomatik Mesaj Ayarları)
- BusinessInfo (İşletme Bilgileri)

### ☁️ Bulutta (Supabase)
- Hesap bilgileri
- Oturum bilgileri
- Abonelik durumu
- Geçici doğrulama kodları
- Bulut yedekleme dosyaları (Premium)
- Duyurular

**Sunucu Konumu:** Avrupa (EU)  
**Güvenlik:** Tüm veriler HTTPS/TLS ile şifrelenir

---

## 4. Verileri Nasıl Kullanıyoruz?

### ✅ Yapıyoruz:
- Hesap oluşturma ve kimlik doğrulama
- Email doğrulama (6 haneli kod)
- Şifre sıfırlama desteği
- Premium abonelik yönetimi ve doğrulama
- Bulut yedekleme hizmeti (Premium)
- Uygulama içi duyurular
- Tek cihaz güvenlik politikası

### ❌ Yapmıyoruz:
- Reklam göstermiyoruz
- Verilerinizi satmıyoruz
- Üçüncü taraflara pazarlama amaçlı vermiyoruz
- Kullanıcı davranışı takibi yapmıyoruz
- Analitik veri toplamıyoruz
- Konum bilgisi toplamıyoruz

---

## 5. İzinler

### 🌐 İnternet (INTERNET)
- **Kullanım:** Hesap işlemleri, abonelik doğrulama, bulut yedekleme
- **Zorunlu:** Evet

### 💳 Faturalandırma (BILLING)
- **Kullanım:** Google Play üzerinden Premium abonelik ödemeleri
- **İşleyici:** Google Play
- **Not:** Kredi kartı bilgilerinizi görmeyiz

### 📱 SMS Gönderme (Intent)
- **Kullanım:** Müşterilerinize mesaj göndermek için
- **Kontrol:** Sadece siz "Gönder" butonuna bastığınızda
- **Maliyet:** Operatörünüzün SMS ücretleri geçerlidir
- **Not:** Uygulama izin istemez, cihazın SMS uygulamasını açar

### 📞 Arama (Intent)
- **Kullanım:** Müşterilerinizi aramak için
- **Kontrol:** Sadece siz "Ara" butonuna bastığınızda
- **Not:** Uygulama izin istemez, cihazın telefon uygulamasını açar

### 💬 WhatsApp (Intent)
- **Kullanım:** Müşterilerinize WhatsApp mesajı göndermek için
- **Kontrol:** Sadece siz butona bastığınızda
- **Not:** WhatsApp yüklü olmalıdır

**⚠️ Önemli:** Uygulama otomatik SMS göndermez, arama yapmaz veya mesaj atmaz. Her işlem sizin kontrolünüzdedir ve cihazınızın varsayılan uygulamalarını kullanır.

---

## 6. Üçüncü Taraf Servisler

### Supabase (Backend)
- **Kullanım:** Hesap yönetimi, oturum kontrolü, bulut yedekleme
- **Konum:** Avrupa sunucuları
- **Gizlilik:** [supabase.com/privacy](https://supabase.com/privacy)

### Google Play Billing
- **Kullanım:** Premium abonelik ödemeleri
- **Gizlilik:** [policies.google.com/privacy](https://policies.google.com/privacy)

### Google Sign-In
- **Kullanım:** Google hesabı ile giriş (opsiyonel)
- **Alınan Veriler:** Email, Google ID, isim
- **Gizlilik:** [policies.google.com/privacy](https://policies.google.com/privacy)

### Resend (Email Servisi)
- **Kullanım:** Doğrulama ve şifre sıfırlama emailleri
- **Gizlilik:** [resend.com/legal/privacy-policy](https://resend.com/legal/privacy-policy)

### ❌ Kullanmadıklarımız:
- Google Analytics
- Firebase Analytics
- Firebase Crashlytics
- Facebook SDK
- Reklam ağları (AdMob, vb.)
- Kullanıcı takip araçları

---

## 7. Güvenlik

### 🔒 Güvenlik Önlemlerimiz

**Şifreleme:**
- HTTPS/TLS ile şifreli veri iletimi
- Bcrypt ile şifre hash'leme (sunucu tarafı)
- Şifreler asla düz metin olarak saklanmaz

**Kimlik Doğrulama:**
- Email doğrulama sistemi (6 haneli kod)
- Tek cihaz politikası (yeni girişte eski oturum sonlanır)
- Token tabanlı oturum yönetimi
- Google hesapları için email otomatik doğrulanmış sayılır

**Brute Force Koruması:**
- 3 yanlış deneme sonrası 1 saat bekleme
- Günlük 5 email gönderim limiti
- Doğrulama kodları 3 dakika geçerli
- Şifre sıfırlama token'ları 5 dakika geçerli

**Veritabanı Güvenliği:**
- Row Level Security (RLS) aktif
- Tüm tablolara direkt erişim kapalı
- Sadece güvenli RPC fonksiyonları ile erişim

---

## 8. Premium Abonelik

### 💳 Ödeme
- Tüm ödemeler Google Play üzerinden yapılır
- Kredi kartı bilgilerinizi görmeyiz
- İstediğiniz zaman iptal edebilirsiniz

### 📊 Abonelik Türleri
- **Ücretsiz:** Temel özellikler (10 müşteri, 1 çalışan, 5 gün randevu)
- **Aylık Premium:** Tüm özellikler
- **Yıllık Premium:** Tüm özellikler (indirimli)

### 🔄 Abonelik Kontrolü
- Her uygulama açılışında Google Play ile senkronize edilir
- Aynı Google Play hesabı ile farklı SalonGo hesaplarına premium verilemez
- İptal edilen abonelikler otomatik olarak algılanır

---

## 9. Haklarınız (KVKK & GDPR)

### ✅ Sahip Olduğunuz Haklar:
- **Erişim:** Verilerinizi görme
- **Düzeltme:** Verilerinizi güncelleme
- **Silme:** Verilerinizi kalıcı olarak silme
- **İtiraz:** Veri işlemeye itiraz etme
- **Taşınabilirlik:** Verilerinizi alma

### 📧 Haklarınızı Kullanmak İçin:
**Email:** swankysoftware@gmail.com  
**Yanıt Süresi:** 30 gün içinde

---

## 10. Hesap ve Veri Silme

### 🗑️ Hesabınızı Nasıl Silersiniz?

Hesabınızı silmek için bizimle e-posta ile iletişime geçin:

**E-posta:** swankysoftware@gmail.com  
**Konu:** SalonGo - Hesap Silme Talebi  
**İçerik:**
- Kullanıcı adınız
- Salon adınız
- "Hesabımın ve tüm verilerimin silinmesini talep ediyorum" ifadesi

**İşlem Süresi:** 7 iş günü içinde

### Silinen Veriler

Hesap silme işlemi sonrasında **tüm verileriniz kalıcı olarak silinir:**

**Buluttan Silinen:**
- Hesap bilgileri (users tablosu)
- Abonelik bilgileri (subscriptions tablosu)
- Oturum kayıtları (sessions tablosu)
- Yedekleme meta verileri (backups tablosu)
- Doğrulama kodları (verification_codes tablosu)
- Email gönderim kayıtları (email_send_limits tablosu)
- Bulut yedekleme dosyası (Supabase Storage)

**Cihazda Kalan (Manuel Silmeniz Gerekir):**
- Yerel veritabanı (uygulamayı kaldırarak silinir)

**⚠️ Bu işlem geri alınamaz!**

---

## 11. Çocukların Gizliliği

SalonGo **18 yaş altı kullanıcılar için değildir**. Bilerek 18 yaş altından veri toplamıyoruz. 18 yaş altı bir kullanıcının hesap açtığını tespit edersek, hesabı derhal sileriz.

---

## 12. Veri Saklama Süreleri

| Veri Türü | Saklama Süresi |
|-----------|----------------|
| Hesap bilgileri | Hesap silinene kadar |
| Oturum bilgileri | Çıkış yapılana veya geçersiz kılınana kadar |
| Abonelik bilgileri | Hesap silinene kadar |
| Doğrulama kodları | 3 dakika (otomatik temizlik) |
| Email gönderim kayıtları | 3 gün (otomatik temizlik) |
| Bulut yedekleme | Hesap silinene kadar |
| Yerel veriler | Uygulama kaldırılana kadar |

---

## 13. Değişiklikler

Gizlilik politikasını güncelleyebiliriz. Önemli değişikliklerde:
- Uygulama içi duyuru yapılır
- Değişiklikler 30 gün sonra yürürlüğe girer
- Güncel versiyon her zaman bu sayfada yayınlanır

---

## 14. İletişim

### 📧 İletişim Bilgileri
- **Email:** swankysoftware@gmail.com  
- **Geliştirici:** Muhammed Mustafa Geldi  
- **Konum:** Türkiye
- **Yanıt Süresi:** 7 iş günü

---

## 15. Özet

### ✅ Yapıyoruz
- Verilerinizi güvenle saklıyoruz
- Şifreleme kullanıyoruz (HTTPS, Bcrypt)
- Şeffaf oluyoruz
- KVKK ve GDPR'a uyuyoruz
- Minimum veri topluyoruz

### ❌ Yapmıyoruz
- Reklam göstermiyoruz
- Veri satmıyoruz
- Takip etmiyoruz
- Spam göndermiyoruz
- Analitik toplamıyoruz

---

**Bu Gizlilik Politikası, 28 Aralık 2025 tarihinde yürürlüğe girmiştir.**

**Versiyon:** 1.1.1  | **Dil:** Türkçe

**SalonGo'yu kullandığınız için teşekkür ederiz! ✨**
