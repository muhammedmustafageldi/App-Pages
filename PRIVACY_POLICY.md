# Stocky Gizlilik Politikası

**Son Güncelleme:** 5 Mart 2026

Stocky ("biz", "bizim" veya "uygulama") olarak gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, Stocky stok takip uygulamasını kullandığınızda hangi bilgilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.

---

## 1. Toplanan Bilgiler

### 1.1 Hesap Bilgileri
Uygulamayı kullanmak için bir hesap oluşturmanız gerekmektedir. Bu süreçte aşağıdaki bilgiler toplanır:
- **E-posta adresi:** Hesap oluşturma, kimlik doğrulama ve parola sıfırlama için
- **Şifre:** Güvenli bir şekilde hash'lenerek (bcrypt) saklanır; düz metin olarak asla saklanmaz
- **Google hesap bilgileri (isteğe bağlı):** Google ile giriş yapılması halinde, Google tarafından sağlanan e-posta adresi ve kimlik doğrulama token'ı kullanılır. Google hesap şifrenize erişimimiz yoktur.

### 1.2 İş Verileri
Uygulama içinde girdiğiniz tüm iş verileri sunucularımızda saklanır:
- **Ürün bilgileri:** Ürün adı, barkod, stok miktarı, alış/satış fiyatları, vergi oranları, birim, ürün açıklamaları
- **Müşteri bilgileri:** Ad, telefon, e-posta, adres, bakiye, notlar
- **Tedarikçi bilgileri:** Firma adı, iletişim bilgileri, vergi numarası, IBAN, banka bilgileri, adres, notlar
- **İşlem kayıtları:** Satış, alış, iade, tahsilat ve tediye işlemleri; ürün kalemleri, indirimler, ödeme yöntemi ve tarih bilgileri

### 1.3 Firma Bilgileri
Fiş/fatura üzerinde görüntülenmek üzere saklanan bilgiler:
- Firma adı, adres, telefon, e-posta, web sitesi
- Vergi numarası, vergi dairesi
- Firma logosu (Supabase Storage'a yüklenir)

### 1.4 Abonelik ve Ödeme Bilgileri
- **Abonelik durumu:** Plan türü (free/monthly/yearly), bitiş tarihi, fiş çıktı sayacı
- **Satın alma token'ı:** Google Play Billing tarafından oluşturulan, abonelik doğrulaması için kullanılan token
- Kredi kartı veya ödeme bilgileriniz tarafımızca **toplanmaz ve saklanmaz**; tüm ödeme işlemleri Google Play altyapısı üzerinden gerçekleşir

### 1.5 Fiş/Fatura Ayarları
- Kağıt genişliği, otomatik yazdırma tercihi
- Fişte gösterilecek bilgi tercihleri (firma adı, logo, adres, telefon, e-posta, web sitesi, vergi bilgisi)
- Özel başlık ve alt bilgi metinleri
- Stocky marka görünürlüğü tercihi (premium özellik)

### 1.6 Cihaz Üzerinde Saklanan Veriler
Bazı tercihler yalnızca cihazınızda (SharedPreferences) saklanır ve sunucularımıza gönderilmez:
- Tema tercihi (açık/koyu/sistem)
- Dil tercihi
- Barkod tarayıcı ses ve titreşim ayarları
- Bluetooth yazıcı bağlantı bilgileri (MAC adresi, cihaz adı)
- Kullanıcı ayarları, firma bilgileri ve fiş ayarları önbelleği (hızlı erişim için)

### 1.7 Kullanıcı Ayarları
Aşağıdaki iş tercihleri sunucularımızda saklanır:
- Varsayılan vergi oranı
- Fiyatlar vergili mi formatı
- Para birimi
- Negatif stok izin ayarı

---

## 2. Cihaz İzinleri ve Kullanım Amaçları

### 2.1 Kamera Erişimi
Barkod tarama özelliği için kamera erişimi istenir:
- Hiçbir fotoğraf veya video kaydedilmez
- Kamera görüntüsü sunucularımıza gönderilmez
- Barkod tarama işlemi tamamen cihaz üzerinde gerçekleşir (Google ML Kit)

### 2.2 Rehber Erişimi (İsteğe Bağlı)
Müşteri veya tedarikçi eklerken rehberden kişi seçme özelliği sunulmaktadır:
- Bu özellik tamamen isteğe bağlıdır
- Rehber verileriniz sunucularımıza gönderilmez
- Yalnızca seçtiğiniz kişinin bilgileri (ad, telefon, e-posta, adres) ilgili forma aktarılır

### 2.3 Bluetooth Erişimi
Termal yazıcıya bağlanmak için Bluetooth izinleri istenir:
- Yalnızca yazıcı cihazla iletişim kurmak için kullanılır
- Bluetooth üzerinden toplanan cihaz bilgileri (yazıcı adı, MAC adresi) yalnızca cihazınızda saklanır ve sunucularımıza gönderilmez

### 2.4 Internet ve Ağ Durumu
- Veri senkronizasyonu, kimlik doğrulama ve abonelik doğrulaması için kullanılır

### 2.5 Titreşim
- Barkod tarama geri bildirimi için kullanılır

| İzin | Amaç | Zorunlu mu? |
|------|------|-------------|
| **İnternet** | Veri senkronizasyonu ve kimlik doğrulama | Evet |
| **Ağ Durumu** | Çevrimdışı/çevrimiçi kontrolü | Evet |
| **Kamera** | Barkod tarama | Hayır |
| **Rehber** | Kişi bilgilerini forma aktarma | Hayır |
| **Bluetooth** | Termal yazıcı bağlantısı | Hayır |
| **Titreşim** | Barkod tarama geri bildirimi | Hayır |

---

## 3. Bilgilerin Kullanımı

Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:

- **Hizmet sunumu:** Stok takibi, müşteri/tedarikçi yönetimi, satış/alış işlemleri ve fiş oluşturma
- **Hesap yönetimi:** Kimlik doğrulama, hesap güvenliği ve parola sıfırlama
- **Veri senkronizasyonu:** Verilerinizin sunucu ile senkronize edilmesi
- **Abonelik yönetimi:** Premium plan doğrulaması, fiş kotası takibi
- **Fiş oluşturma:** İşlem verileriniz ve firma bilgileriniz kullanılarak PDF ve termal yazıcı fişleri oluşturulması
- **Hizmet iyileştirme:** Uygulama performansını ve kullanıcı deneyimini geliştirme

**Verilerinizi reklam, profilleme veya pazarlama amacıyla kullanmayız.**

---

## 4. Veri Güvenliği

Verilerinizin güvenliği bizim için önceliklidir:

### 4.1 Teknik Güvenlik Önlemleri
- **İletişim şifreleme:** Tüm veri iletişimi HTTPS/TLS ile şifrelenir
- **Güvenli kimlik doğrulama:** Supabase Auth altyapısı kullanılır (JWT tabanlı)
- **Row Level Security (RLS):** Her kullanıcı yalnızca kendi verilerine erişebilir; başka kullanıcıların verilerine erişim veritabanı düzeyinde engellenir
- **Şifre güvenliği:** Şifreler bcrypt ile hash'lenerek saklanır
- **Abonelik güvenliği:** Google Play satın almaları, hesap sahipliği doğrulaması (obfuscated account ID) ile kontrol edilir

### 4.2 Erişim Kontrolü
- Veritabanına doğrudan erişim kapalıdır
- Tüm veri işlemleri güvenli RPC fonksiyonları üzerinden gerçekleşir
- Her istek kullanıcı kimlik doğrulaması (JWT) gerektirir
- Logo yükleme işlemleri kullanıcıya özel klasörlerde ve güvenli depolama politikalarıyla gerçekleşir

---

## 5. Veri Paylaşımı

Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla **paylaşmayız**:

### 5.1 Hizmet Sağlayıcılar
- **Supabase:** Veritabanı, kimlik doğrulama, dosya depolama (logo) ve sunucu taraflı fonksiyonlar
- **Google Play:** Uygulama dağıtımı, güncelleme ve abonelik ödeme işlemleri
- **Google ML Kit:** Barkod tarama (tüm işlemler cihaz üzerinde gerçekleşir, Google sunucularına veri gönderilmez)
- **Google Sign-In:** İsteğe bağlı Google ile giriş kimlik doğrulaması (Google Kimlik Hizmetleri üzerinden)

### 5.2 Fiş Paylaşımı
İşlem fişlerini PDF formatında paylaştığınızda, bu paylaşım cihazınızın paylaşım özelliği üzerinden gerçekleşir. Paylaştığınız kişiler ve platformlar sizin tercihinize bağlıdır.

### 5.3 Yasal Gereklilikler
Yasal zorunluluk halinde veya mahkeme kararıyla bilgileriniz ilgili makamlara açıklanabilir.

---

## 6. Veri Saklama ve Silme

- **Aktif hesaplar:** Hesabınız aktif olduğu sürece verileriniz saklanır
- **Hesap silme:** Uygulama içinden hesabınızı silebilirsiniz. Hesap silindiğinde; tüm iş verileriniz (ürünler, müşteriler, tedarikçiler, işlemler), firma bilgileriniz, fiş ayarlarınız, abonelik kaydınız ve varsa firma logonuz kalıcı olarak silinir.
- **Tekil kayıt silme:** Ürün, müşteri, tedarikçi ve işlem kayıtlarını tek tek silebilirsiniz; silinen kayıtlar geri alınamaz
- **Yerel veriler:** Hesap silme veya çıkış yapma durumunda cihazınızdaki önbellek verileri temizlenir; cihaza bağlı tercihler (tema, dil, yazıcı ayarları) korunur

---

## 7. Kullanıcı Hakları

### 7.1 Erişim Hakkı
Uygulama içinden tüm verilerinize erişebilirsiniz.

### 7.2 Düzeltme Hakkı
Ürün, müşteri, tedarikçi, işlem ve firma bilgilerinizi istediğiniz zaman düzenleyebilirsiniz.

### 7.3 Silme Hakkı
- Tek tek kayıtları silebilirsiniz
- Hesabınızı tamamen silebilirsiniz (tüm veriler kalıcı olarak silinir)

### 7.4 Parola Değiştirme
Hesap ayarlarından parolanızı değiştirebilirsiniz. Google ile giriş yapan kullanıcılar parola yönetimi için Google hesap ayarlarını kullanır.

### 7.5 İtiraz ve Başvuru Hakkı
Kişisel verilerinizin işlenmesine ilişkin talepleriniz için aşağıdaki iletişim bilgileri üzerinden bize ulaşabilirsiniz.

---

## 8. Çocukların Gizliliği

Stocky, 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki çocuklardan kişisel bilgi toplamayız. Eğer 13 yaşın altında bir çocuğun bize kişisel bilgi sağladığını fark ederseniz, lütfen bizimle iletişime geçin; ilgili veriler derhal silinecektir.

---

## 9. Üçüncü Taraf Hizmetler

### 9.1 Supabase
Veritabanı, kimlik doğrulama, dosya depolama ve sunucu taraflı fonksiyonlar için Supabase kullanılmaktadır.
- Supabase Gizlilik Politikası: https://supabase.com/privacy

### 9.2 Google ML Kit
Barkod tarama için Google ML Kit kullanılmaktadır. Barkod işleme tamamen cihaz üzerinde gerçekleşir ve Google sunucularına veri gönderilmez.

### 9.3 Google Play Hizmetleri
Uygulama dağıtımı, güncelleme ve uygulama içi satın alma (abonelik) işlemleri için Google Play hizmetleri kullanılmaktadır.
- Google Gizlilik Politikası: https://policies.google.com/privacy

### 9.4 Google Kimlik Hizmetleri
İsteğe bağlı Google ile giriş özelliği için Android Credential Manager ve Google Identity Services kullanılmaktadır.

---

## 10. Analitik ve Takip

Stocky, herhangi bir üçüncü taraf analitik veya takip aracı (Firebase Analytics, Crashlytics, Amplitude vb.) **kullanmamaktadır**. Kullanıcı davranışlarınız izlenmez, profillenmez veya reklam amacıyla kullanılmaz.

---

## 11. Politika Değişiklikleri

Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda:
- Politikanın "Son Güncelleme" tarihini değiştiririz
- Uygulama mağazası açıklamasında değişiklikleri belirtiriz

Uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.

---

## 12. İletişim

Gizlilik politikamız veya verilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:

- **E-posta:** swankysoftware@gmail.com
- **Geliştirici:** Swanky

---

## 13. Yasal Dayanak

Bu uygulama aşağıdaki düzenlemelere uygun olarak geliştirilmiştir:
- 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
- Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR)
- Google Play Geliştirici Politikaları

---

**Stocky'yi kullandığınız için teşekkür ederiz.**
