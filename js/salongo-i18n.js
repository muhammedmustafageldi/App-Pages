const salongoTranslations = {
    tr: {
        backLink: "← Ana Sayfaya Dön",
        privacyTitle: "SalonGo Gizlilik Politikası",
        termsTitle: "SalonGo Kullanıcı Sözleşmesi",
        privacyContentHtml: `<p style="color: var(--text-tertiary); margin-bottom: 2rem;">
                    <strong>Son Güncelleme:</strong> 28 Aralık 2025 | <strong>Versiyon:</strong> 1.1.1
                </p>

                <div class="highlight-box">
                    <h3>👋 Özetle</h3>
                    <p>Müşteri verilerinizi güvenle saklıyor ve koruyoruz. Verilerinizi reklam amaçlı kullanmıyor veya
                        satmıyoruz. SalonGo, verilerinizin kontrolünün tamamen sizde olduğu güvenli bir platformdur.</p>
                </div>

                <h2>1. Uygulama Hakkında</h2>
                <p>SalonGo, işletmeler için tasarlanmış kapsamlı bir yönetim uygulamasıdır. Müşteri kayıtları, randevu
                    takibi, kasa yönetimi ve işlem geçmişi gibi tüm operasyonları kolaylaştırır.</p>

                <div class="highlight-box">
                    <h3>📱 Uygulama Bilgileri</h3>
                    <p><strong>Geliştirici:</strong> Muhammed Mustafa Geldi<br>
                    <strong>İletişim:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
                    <strong>Konum:</strong> Türkiye</p>
                </div>

                <div class="highlight-box">
                    <h3>📋 İlgili Belgeler</h3>
                    <p>Bu Gizlilik Politikası, <a href="salongo-terms-of-service.html" style="color: var(--primary-color); font-weight: 500;">Kullanıcı Sözleşmesi ↗</a> ile birlikte geçerlidir. Uygulamayı kullanarak her iki belgeyi de kabul etmiş sayılırsınız.</p>
                </div>

                <h2>2. Topladığımız Veriler</h2>

                <h3>2.1 Hesap Bilgileri (Bulutta Saklanır)</h3>
                <p>Kayıt ve giriş işlemleri için aşağıdaki bilgiler toplanır:</p>
                <ul>
                    <li>Kullanıcı adı (Hesap kimliği, 3-20 karakter)</li>
                    <li>Email adresi (İletişim ve doğrulama için)</li>
                    <li>Şifre (Bcrypt ile şifrelenmiş olarak saklanır)</li>
                    <li>Salon adı (İşletme tanımlayıcısı)</li>
                    <li>Google ID (Google ile giriş yapanlar için - opsiyonel)</li>
                    <li>Kayıt yöntemi ('email' veya 'google')</li>
                    <li>Cihaz ID (Tek cihaz politikası için)</li>
                </ul>

                <h3>2.2 Abonelik Bilgileri (Bulutta Saklanır)</h3>
                <ul>
                    <li>Abonelik tipi ('free', 'monthly' veya 'yearly')</li>
                    <li>Premium durumu</li>
                    <li>Google Play purchase token (Abonelik doğrulama için)</li>
                    <li>Google Play sipariş ID (Ödeme takibi için)</li>
                    <li>Son senkronizasyon tarihi</li>
                </ul>

                <h3>2.3 Salon Verileri (Cihazınızda Saklanır)</h3>
                <p>Bu veriler <strong>yalnızca cihazınızda</strong> saklanır ve bulut yedekleme yapılmadığı sürece sunucularımıza gönderilmez:</p>
                <ul>
                    <li><strong>Müşteri Bilgileri:</strong> Ad soyad, telefon, doğum tarihi, cinsiyet, notlar, VIP durumu, profil ikonu</li>
                    <li><strong>Çalışan Bilgileri:</strong> Ad, profil ikonu</li>
                    <li><strong>Randevu Kayıtları:</strong> Çalışan/müşteri bilgisi, işlem açıklaması, tarih/saat, notlar, tamamlanma durumu</li>
                    <li><strong>İşlem Kayıtları (Kasa):</strong> İşlem başlığı, tutar, tarih, açıklama, gelir/gider türü</li>
                    <li><strong>Sadakat Sistemi:</strong> Müşteri bazlı yıldız sayısı, yıllık harcama tutarı</li>
                    <li><strong>İşletme Ayarları:</strong> Çalışma saatleri, kapalı günler, otomatik mesaj şablonu</li>
                </ul>

                <h3>2.4 Geçici Veriler (Otomatik Silinir)</h3>
                <ul>
                    <li>Email doğrulama kodları (3 dakika)</li>
                    <li>Şifre sıfırlama kodları (3 dakika)</li>
                    <li>Şifre sıfırlama token'ları (5 dakika)</li>
                    <li>Günlük email gönderim sayacı (3 gün)</li>
                </ul>

                <h2>3. Verilerin Saklanması</h2>

                <h3>📱 Cihazınızda (Yerel - Room Database)</h3>
                <p>Müşteri kayıtları, randevular, işlemler, çalışanlar ve ayarlar <strong>yalnızca cihazınızda</strong> saklanır.</p>

                <h3>☁️ Bulutta (Supabase)</h3>
                <ul>
                    <li>Hesap bilgileri</li>
                    <li>Oturum bilgileri</li>
                    <li>Abonelik durumu</li>
                    <li>Geçici doğrulama kodları</li>
                    <li>Bulut yedekleme dosyaları (Premium)</li>
                    <li>Duyurular</li>
                </ul>
                <p><strong>Sunucu Konumu:</strong> Avrupa (EU)<br>
                <strong>Güvenlik:</strong> Tüm veriler HTTPS/TLS ile şifrelenir</p>

                <h2>4. Verileri Nasıl Kullanıyoruz?</h2>

                <h3>✅ Yapıyoruz:</h3>
                <ul>
                    <li>Hesap oluşturma ve kimlik doğrulama</li>
                    <li>Email doğrulama (6 haneli kod)</li>
                    <li>Şifre sıfırlama desteği</li>
                    <li>Premium abonelik yönetimi ve doğrulama</li>
                    <li>Bulut yedekleme hizmeti (Premium)</li>
                    <li>Uygulama içi duyurular</li>
                    <li>Tek cihaz güvenlik politikası</li>
                </ul>

                <h3>❌ Yapmıyoruz:</h3>
                <ul>
                    <li>Reklam göstermiyoruz</li>
                    <li>Verilerinizi satmıyoruz</li>
                    <li>Üçüncü taraflara pazarlama amaçlı vermiyoruz</li>
                    <li>Kullanıcı davranışı takibi yapmıyoruz</li>
                    <li>Analitik veri toplamıyoruz</li>
                    <li>Konum bilgisi toplamıyoruz</li>
                </ul>

                <h2>5. İzinler</h2>

                <h3>🌐 İnternet (INTERNET)</h3>
                <p><strong>Kullanım:</strong> Hesap işlemleri, abonelik doğrulama, bulut yedekleme<br>
                <strong>Zorunlu:</strong> Evet</p>

                <h3>💳 Faturalandırma (BILLING)</h3>
                <p><strong>Kullanım:</strong> Google Play üzerinden Premium abonelik ödemeleri<br>
                <strong>İşleyici:</strong> Google Play<br>
                <strong>Not:</strong> Kredi kartı bilgilerinizi görmeyiz</p>

                <h3>📱 SMS Gönderme (Intent)</h3>
                <p><strong>Kullanım:</strong> Müşterilerinize mesaj göndermek için<br>
                <strong>Kontrol:</strong> Sadece siz "Gönder" butonuna bastığınızda<br>
                <strong>Not:</strong> Uygulama izin istemez, cihazın SMS uygulamasını açar</p>

                <h3>📞 Arama (Intent)</h3>
                <p><strong>Kullanım:</strong> Müşterilerinizi aramak için<br>
                <strong>Kontrol:</strong> Sadece siz "Ara" butonuna bastığınızda</p>

                <h3>💬 WhatsApp (Intent)</h3>
                <p><strong>Kullanım:</strong> Müşterilerinize WhatsApp mesajı göndermek için<br>
                <strong>Not:</strong> WhatsApp yüklü olmalıdır</p>

                <p><strong>⚠️ Önemli:</strong> Uygulama otomatik SMS göndermez, arama yapmaz veya mesaj atmaz. Her işlem sizin kontrolünüzdedir.</p>

                <h2>6. Üçüncü Taraf Servisler</h2>

                <h3>Supabase (Backend)</h3>
                <ul>
                    <li><strong>Kullanım:</strong> Hesap yönetimi, oturum kontrolü, bulut yedekleme</li>
                    <li><strong>Konum:</strong> Avrupa sunucuları</li>
                    <li><strong>Gizlilik:</strong> <a href="https://supabase.com/privacy" target="_blank">supabase.com/privacy ↗</a></li>
                </ul>

                <h3>Google Play Billing</h3>
                <ul>
                    <li><strong>Kullanım:</strong> Premium abonelik ödemeleri</li>
                    <li><strong>Gizlilik:</strong> <a href="https://policies.google.com/privacy" target="_blank">policies.google.com/privacy ↗</a></li>
                </ul>

                <h3>Google Sign-In</h3>
                <ul>
                    <li><strong>Kullanım:</strong> Google hesabı ile giriş (opsiyonel)</li>
                    <li><strong>Alınan Veriler:</strong> Email, Google ID, isim</li>
                    <li><strong>Gizlilik:</strong> <a href="https://policies.google.com/privacy" target="_blank">policies.google.com/privacy ↗</a></li>
                </ul>

                <h3>Resend (Email Servisi)</h3>
                <ul>
                    <li><strong>Kullanım:</strong> Doğrulama ve şifre sıfırlama emailleri</li>
                    <li><strong>Gizlilik:</strong> <a href="https://resend.com/legal/privacy-policy" target="_blank">resend.com/legal/privacy-policy ↗</a></li>
                </ul>

                <h3>❌ Kullanmadıklarımız:</h3>
                <ul>
                    <li>Google Analytics</li>
                    <li>Firebase Analytics / Crashlytics</li>
                    <li>Facebook SDK</li>
                    <li>Reklam ağları (AdMob vb.)</li>
                    <li>Kullanıcı takip araçları</li>
                </ul>

                <h2>7. Güvenlik</h2>

                <div class="highlight-box">
                    <h3>🔒 Güvenlik Önlemlerimiz</h3>
                    <p><strong>Şifreleme:</strong></p>
                    <ul>
                        <li>HTTPS/TLS ile şifreli veri iletimi</li>
                        <li>Bcrypt ile şifre hash'leme (sunucu tarafı)</li>
                        <li>Şifreler asla düz metin olarak saklanmaz</li>
                    </ul>
                    <p><strong>Kimlik Doğrulama:</strong></p>
                    <ul>
                        <li>Email doğrulama sistemi (6 haneli kod)</li>
                        <li>Tek cihaz politikası (yeni girişte eski oturum sonlanır)</li>
                        <li>Token tabanlı oturum yönetimi</li>
                    </ul>
                    <p><strong>Brute Force Koruması:</strong></p>
                    <ul>
                        <li>3 yanlış deneme sonrası 1 saat bekleme</li>
                        <li>Günlük 5 email gönderim limiti</li>
                        <li>Doğrulama kodları 3 dakika geçerli</li>
                    </ul>
                    <p><strong>Veritabanı Güvenliği:</strong></p>
                    <ul>
                        <li>Row Level Security (RLS) aktif</li>
                        <li>Tüm tablolara direkt erişim kapalı</li>
                        <li>Sadece güvenli RPC fonksiyonları ile erişim</li>
                    </ul>
                </div>

                <h2>8. Premium Abonelik</h2>

                <h3>💳 Ödeme</h3>
                <ul>
                    <li>Tüm ödemeler Google Play üzerinden yapılır</li>
                    <li>Kredi kartı bilgilerinizi görmeyiz</li>
                    <li>İstediğiniz zaman iptal edebilirsiniz</li>
                </ul>

                <h3>📊 Abonelik Türleri</h3>
                <ul>
                    <li><strong>Ücretsiz:</strong> Temel özellikler (10 müşteri, 1 çalışan, 5 gün randevu)</li>
                    <li><strong>Aylık Premium:</strong> Tüm özellikler</li>
                    <li><strong>Yıllık Premium:</strong> Tüm özellikler (indirimli)</li>
                </ul>

                <h3>🔄 Abonelik Kontrolü</h3>
                <ul>
                    <li>Her uygulama açılışında Google Play ile senkronize edilir</li>
                    <li>Aynı Google Play hesabı ile farklı SalonGo hesaplarına premium verilemez</li>
                    <li>İptal edilen abonelikler otomatik olarak algılanır</li>
                </ul>

                <h2>9. Haklarınız (KVKK & GDPR)</h2>

                <div class="highlight-box">
                    <h3>✅ Sahip Olduğunuz Haklar:</h3>
                    <ul>
                        <li><strong>Erişim:</strong> Verilerinizi görme</li>
                        <li><strong>Düzeltme:</strong> Verilerinizi güncelleme</li>
                        <li><strong>Silme:</strong> Verilerinizi kalıcı olarak silme</li>
                        <li><strong>İtiraz:</strong> Veri işlemeye itiraz etme</li>
                        <li><strong>Taşınabilirlik:</strong> Verilerinizi alma</li>
                    </ul>
                    <p><strong>📧 Haklarınızı Kullanmak İçin:</strong><br>
                    Email: <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
                    Yanıt Süresi: 30 gün</p>
                </div>

                <h2>10. Hesap ve Veri Silme</h2>

                <h3>🗑️ Hesabınızı Nasıl Silersiniz?</h3>
                <p>Hesabınızı silmek için bizimle e-posta ile iletişime geçin:</p>
                <p><strong>E-posta:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
                <strong>Konu:</strong> SalonGo - Hesap Silme Talebi<br>
                <strong>İşlem Süresi:</strong> 7 iş günü içinde</p>

                <h3>Silinen Veriler</h3>
                <p>Hesap silme işlemi sonrasında <strong>tüm verileriniz kalıcı olarak silinir:</strong></p>
                <p><strong>Buluttan Silinen:</strong></p>
                <ul>
                    <li>Hesap bilgileri</li>
                    <li>Abonelik bilgileri</li>
                    <li>Oturum kayıtları</li>
                    <li>Yedekleme meta verileri</li>
                    <li>Doğrulama kodları</li>
                    <li>Bulut yedekleme dosyası</li>
                </ul>
                <p><strong>Cihazda Kalan:</strong> Yerel veritabanı (uygulamayı kaldırarak silinir)</p>
                <p><strong>⚠️ Bu işlem geri alınamaz!</strong></p>

                <h2>11. Çocukların Gizliliği</h2>
                <p>SalonGo <strong>18 yaş altı kullanıcılar için değildir</strong>. Bilerek 18 yaş altından veri toplamıyoruz. 18 yaş altı bir kullanıcının hesap açtığını tespit edersek, hesabı derhal sileriz.</p>

                <h2>12. Veri Saklama Süreleri</h2>
                <ul>
                    <li><strong>Hesap bilgileri:</strong> Hesap silinene kadar</li>
                    <li><strong>Oturum bilgileri:</strong> Çıkış yapılana kadar</li>
                    <li><strong>Abonelik bilgileri:</strong> Hesap silinene kadar</li>
                    <li><strong>Doğrulama kodları:</strong> 3 dakika (otomatik temizlik)</li>
                    <li><strong>Email gönderim kayıtları:</strong> 3 gün (otomatik temizlik)</li>
                    <li><strong>Bulut yedekleme:</strong> Hesap silinene kadar</li>
                    <li><strong>Yerel veriler:</strong> Uygulama kaldırılana kadar</li>
                </ul>

                <h2>13. Değişiklikler</h2>
                <p>Gizlilik politikasını güncelleyebiliriz. Önemli değişikliklerde uygulama içi duyuru yapılır ve değişiklikler 30 gün sonra yürürlüğe girer.</p>

                <h2>14. İletişim</h2>
                <div class="highlight-box">
                    <h3>📧 İletişim Bilgileri</h3>
                    <p><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
                    <strong>Geliştirici:</strong> Muhammed Mustafa Geldi<br>
                    <strong>Konum:</strong> Türkiye<br>
                    <strong>Yanıt Süresi:</strong> 7 iş günü</p>
                </div>

                <h2>15. Özet</h2>

                <div class="highlight-box">
                    <h3>✅ Yapıyoruz</h3>
                    <ul>
                        <li>Verilerinizi güvenle saklıyoruz</li>
                        <li>Şifreleme kullanıyoruz (HTTPS, Bcrypt)</li>
                        <li>Şeffaf oluyoruz</li>
                        <li>KVKK ve GDPR'a uyuyoruz</li>
                        <li>Minimum veri topluyoruz</li>
                    </ul>

                    <h3>❌ Yapmıyoruz</h3>
                    <ul>
                        <li>Reklam göstermiyoruz</li>
                        <li>Veri satmıyoruz</li>
                        <li>Takip etmiyoruz</li>
                        <li>Spam göndermiyoruz</li>
                        <li>Analitik toplamıyoruz</li>
                    </ul>
                </div>

                <p style="margin-top: 2rem; text-align: center; font-style: italic;">
                    <strong>Bu Gizlilik Politikası, 28 Aralık 2025 tarihinde yürürlüğe girmiştir.</strong><br>
                    <strong>Versiyon: 1.1.1 | Dil: Türkçe</strong><br><br>
                    <strong>SalonGo'yu kullandığınız için teşekkür ederiz! ✨</strong>
                </p>`,
        termsContentHtml: `<p style="color: var(--text-tertiary); margin-bottom: 2rem;">
                    <strong>Son Güncelleme:</strong> 28 Aralık 2025 | <strong>Versiyon:</strong> 1.1
                </p>

                <h2>1. Taraflar ve Kapsam</h2>

                <h3>1.1 Taraflar</h3>
                <p>Bu Kullanıcı Sözleşmesi ("Sözleşme"), aşağıdaki taraflar arasında akdedilmiştir:</p>

                <div class="highlight-box">
                    <p><strong>Hizmet Sağlayıcı:</strong><br>
                        Muhammed Mustafa Geldi ("Geliştirici", "Biz", "Bizim")<br>
                        İletişim: <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
                        Konum: Türkiye</p>

                    <p><strong>Kullanıcı:</strong><br>
                        SalonGo uygulamasını indiren, yükleyen veya kullanan gerçek veya tüzel kişi ("Kullanıcı", "Siz",
                        "Sizin")</p>
                </div>

                <h3>1.2 Sözleşmenin Konusu</h3>
                <p>Bu Sözleşme, SalonGo mobil uygulaması ("Uygulama") ve ilgili hizmetlerin ("Hizmetler") kullanım
                    şartlarını düzenler.</p>

                <h3>1.3 Sözleşmenin Kabulü</h3>
                <p>Uygulamayı indirerek, yükleyerek, hesap oluşturarak veya kullanarak bu Sözleşme'nin tüm hükümlerini
                    okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz. Bu şartları kabul etmiyorsanız,
                    Uygulamayı kullanmayınız.</p>

                <div class="section-divider"></div>

                <h2>2. Hizmet Tanımı</h2>

                <h3>2.1 SalonGo Nedir?</h3>
                <p>SalonGo, işletmeler için tasarlanmış kapsamlı bir yönetim uygulamasıdır. Müşteri kayıtları, randevu
                    takibi, kasa yönetimi ve işlem geçmişi gibi tüm operasyonları kolaylaştırır.</p>

                <h3>2.2 Sunulan Özellikler</h3>
                <ul>
                    <li>Müşteri kayıt ve yönetimi</li>
                    <li>Randevu takibi ve planlama</li>
                    <li>Gelir/gider takibi</li>
                    <li>Çalışan yönetimi</li>
                    <li>Sadakat sistemi</li>
                    <li>Otomatik mesaj gönderimi (SMS/WhatsApp)</li>
                    <li>Bulut yedekleme (Premium)</li>
                    <li>Yerel yedekleme</li>
                </ul>

                <h3>2.3 Hizmet Türleri</h3>

                <div class="highlight-box">
                    <h3>Ücretsiz Plan</h3>
                    <ul>
                        <li>Maksimum 10 müşteri kaydı</li>
                        <li>Maksimum 1 çalışan kaydı</li>
                        <li>Maksimum 5 gün sonrasına randevu oluşturma</li>
                        <li>Yerel yedekleme</li>
                        <li>Temel özellikler</li>
                        <li>Otomatik mesaj ve sadakat sistemi kapalı</li>
                        <li>Bulut yedekleme kapalı</li>
                    </ul>
                </div>

                <div class="highlight-box">
                    <h3>Premium Plan (Aylık/Yıllık)</h3>
                    <ul>
                        <li>Sınırsız müşteri ve çalışan kaydı</li>
                        <li>Sınırsız ileri tarihli randevu</li>
                        <li>Otomatik mesaj sistemi</li>
                        <li>Sadakat sistemi</li>
                        <li>Otomatik bulut yedekleme (her gece 00:00)</li>
                        <li>Tüm özellikler</li>
                    </ul>
                </div>

                <div class="section-divider"></div>

                <h2>3. Hesap Oluşturma ve Güvenlik</h2>

                <h3>3.1 Hesap Gereksinimleri</h3>
                <p>Hesap oluşturmak için:</p>
                <ul>
                    <li>18 yaşından büyük olmalısınız</li>
                    <li>Geçerli bir email adresi sağlamalısınız</li>
                    <li>Doğru ve güncel bilgiler vermelisiniz</li>
                    <li>Kullanıcı adı 3-20 karakter olmalı ve sadece harf, rakam, alt çizgi (_) veya tire (-)
                        içermelidir</li>
                </ul>

                <h3>3.2 Hesap Güvenliği</h3>
                <p>Kullanıcı olarak:</p>
                <ul>
                    <li>Hesap bilgilerinizin gizliliğinden sorumlusunuz</li>
                    <li>Şifrenizi kimseyle paylaşmamalısınız</li>
                    <li>Hesabınızdaki tüm aktivitelerden sorumlusunuz</li>
                    <li>Yetkisiz erişim durumunda derhal bizi bilgilendirmelisiniz</li>
                </ul>

                <h3>3.3 Tek Cihaz Politikası</h3>
                <p>Güvenlik nedeniyle, hesabınız aynı anda yalnızca bir cihazda aktif olabilir. Yeni bir cihazdan giriş
                    yapıldığında, önceki cihazlardaki oturumlar otomatik olarak sonlandırılır.</p>

                <h3>3.4 Email Doğrulama</h3>
                <p>Hesabınızı aktifleştirmek için email adresinizi doğrulamanız gerekmektedir. Doğrulama kodları 3
                    dakika geçerlidir.</p>

                <h2>4. Kullanıcı Yükümlülükleri</h2>

                <h3>4.1 Yasal Kullanım</h3>
                <p>Uygulamayı yalnızca yasal amaçlarla ve bu Sözleşme'ye uygun şekilde kullanacağınızı taahhüt
                    edersiniz.</p>

                <h3>4.2 Yasak Faaliyetler</h3>

                <h4>Teknik İhlaller:</h4>
                <ul>
                    <li>Uygulamayı tersine mühendislik yapmak, kaynak kodunu çıkarmaya çalışmak</li>
                    <li>Güvenlik önlemlerini atlatmaya veya devre dışı bırakmaya çalışmak</li>
                    <li>Uygulamaya yetkisiz erişim sağlamaya çalışmak</li>
                    <li>Sunucularımıza aşırı yük bindirmek veya DDoS saldırısı yapmak</li>
                    <li>Otomatik botlar, scriptler veya benzeri araçlar kullanmak</li>
                </ul>

                <h4>İçerik İhlalleri:</h4>
                <ul>
                    <li>Yasa dışı, zararlı, tehditkar, taciz edici içerik yüklemek</li>
                    <li>Başkalarının kişisel verilerini izinsiz işlemek</li>
                    <li>Sahte veya yanıltıcı bilgi girmek</li>
                    <li>Fikri mülkiyet haklarını ihlal eden içerik kullanmak</li>
                </ul>

                <h4>Ticari İhlaller:</h4>
                <ul>
                    <li>Uygulamayı üçüncü taraflara kiralamak veya satmak</li>
                    <li>Uygulamayı rekabetçi bir ürün geliştirmek için kullanmak</li>
                    <li>Premium özellikleri hileli yollarla elde etmeye çalışmak</li>
                </ul>

                <h3>4.3 Veri Sorumluluğu</h3>
                <p>Uygulamaya girdiğiniz tüm verilerden (müşteri bilgileri, işlem kayıtları vb.) tamamen siz
                    sorumlusunuz. Bu verilerin:</p>
                <ul>
                    <li>Doğru ve güncel olmasını</li>
                    <li>Yasal yollarla elde edilmiş olmasını</li>
                    <li>İlgili kişilerin rızasıyla işlenmesini</li>
                </ul>
                <p>sağlamak sizin yükümlülüğünüzdedir.</p>

                <h3>4.4 KVKK Uyumu</h3>
                <p>Müşterilerinizin kişisel verilerini işlerken 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK)
                    uygun hareket etmekle yükümlüsünüz. Müşterilerinizden gerekli izinleri almak sizin
                    sorumluluğunuzdadır.</p>

                <div class="section-divider"></div>

                <h2>5. Premium Abonelik</h2>

                <h3>5.1 Ödeme</h3>
                <ul>
                    <li>Tüm ödemeler Google Play üzerinden işlenir</li>
                    <li>Fiyatlar Google Play'de gösterildiği şekildedir</li>
                    <li>Ödemeler otomatik olarak yenilenir (iptal edilmediği sürece)</li>
                </ul>

                <h3>5.2 İptal ve İade</h3>
                <ul>
                    <li>Aboneliğinizi istediğiniz zaman Google Play üzerinden iptal edebilirsiniz</li>
                    <li>İptal, mevcut dönemin sonunda geçerli olur</li>
                    <li>İade talepleri Google Play politikalarına tabidir</li>
                    <li>Kısmi dönem için iade yapılmaz</li>
                </ul>

                <h3>5.3 Fiyat Değişiklikleri</h3>
                <ul>
                    <li>Fiyat değişiklikleri önceden bildirilir</li>
                    <li>Mevcut abonelikler dönem sonuna kadar eski fiyattan devam eder</li>
                    <li>Yeni fiyatı kabul etmezseniz aboneliğinizi iptal edebilirsiniz</li>
                </ul>

                <h3>5.4 Abonelik Transferi</h3>
                <ul>
                    <li>Premium abonelik hesaplar arası transfer edilebilir</li>
                    <li>Eski hesap otomatik olarak ücretsiz plana düşer</li>
                </ul>

                <h2>6. Veri Yedekleme</h2>

                <h3>6.1 Yerel Yedekleme</h3>
                <ul>
                    <li>Tüm kullanıcılar yerel yedekleme özelliğini kullanabilir</li>
                    <li>Yerel yedeklemeler cihazınızda saklanır</li>
                    <li>Yerel yedeklemelerin güvenliği ve korunması tamamen sizin sorumluluğunuzdadır</li>
                    <li>Cihaz kaybı, çalınması veya arızası durumunda yerel yedeklemeler kaybolabilir</li>
                </ul>

                <h3>6.2 Bulut Yedekleme (Premium)</h3>
                <p>Bulut yedekleme hizmeti yalnızca Premium abonelere sunulmaktadır.</p>

                <div class="highlight-box">
                    <h4>Hizmet Kapsamı:</h4>
                    <ul>
                        <li>Her gece otomatik yedekleme (00:00)</li>
                        <li>Avrupa'da bulunan güvenli sunucularda (Supabase) saklama</li>
                        <li>HTTPS ile şifreli veri transferi</li>
                        <li>Tek yedek politikası (her yeni yedek öncekinin üzerine yazılır)</li>
                    </ul>

                    <h4>Yedeklenen Veriler:</h4>
                    <ul>
                        <li>Müşteri kayıtları</li>
                        <li>Randevu kayıtları</li>
                        <li>İşlem geçmişi (gelir/gider)</li>
                        <li>Çalışan bilgileri</li>
                        <li>Uygulama ayarları</li>
                    </ul>
                </div>

                <h3>6.3 Bulut Yedekleme Sorumluluk Reddi</h3>
                <p><strong>Geliştirici aşağıdaki durumlardan sorumlu tutulamaz:</strong></p>
                <ul>
                    <li>Supabase veya diğer üçüncü taraf hizmet sağlayıcılarının kesintileri nedeniyle yedekleme yapılamaması</li>
                    <li>İnternet bağlantısı sorunları nedeniyle yedekleme başarısızlıkları</li>
                    <li>Sunucu bakım çalışmaları sırasında geçici erişim kesintileri</li>
                    <li>Öngörülemeyen teknik arızalar nedeniyle veri kaybı</li>
                    <li>Siber saldırılar sonucu oluşabilecek veri ihlalleri</li>
                    <li>Kullanıcının Premium aboneliğini iptal etmesi sonucu bulut yedeklerine erişim kaybı</li>
                </ul>

                <p><strong>Kullanıcı Sorumlulukları:</strong></p>
                <ul>
                    <li>Kritik verileriniz için ek yedekleme önlemleri almanız önerilir</li>
                    <li>Düzenli olarak yerel yedekleme yapmanız tavsiye edilir</li>
                    <li>Yedekleme durumunu periyodik olarak kontrol etmeniz beklenir</li>
                    <li>İnternet bağlantınızın yedekleme saatlerinde aktif olmasını sağlamalısınız</li>
                </ul>

                <h3>6.4 Yedekleme Verilerinin Silinmesi</h3>
                <ul>
                    <li>Hesap silme talebinde bulunduğunuzda bulut yedeklemeleriniz de kalıcı olarak silinir</li>
                    <li>Premium aboneliğinizi iptal ettiğinizde mevcut bulut yedeğiniz korunur ancak yeni yedekleme yapılmaz</li>
                    <li>Hesabınız askıya alındığında veya kapatıldığında bulut yedeklerinize erişiminiz sona erer</li>
                </ul>

                <h3>6.5 Veri Bütünlüğü</h3>
                <ul>
                    <li>Yedekleme ve geri yükleme işlemlerinde veri bütünlüğü için makul çaba gösterilmektedir</li>
                    <li>Ancak %100 veri bütünlüğü garanti edilmemektedir</li>
                    <li>Geri yükleme işlemi sonrası verilerinizi kontrol etmeniz önerilir</li>
                </ul>

                <div class="section-divider"></div>

                <h2>7. Fikri Mülkiyet Hakları</h2>

                <h3>7.1 Uygulama Hakları</h3>
                <p>SalonGo uygulaması, tasarımı, logosu, kaynak kodu, grafikleri ve tüm içeriği Muhammed Mustafa Geldi'nin münhasır mülkiyetindedir ve Türkiye Cumhuriyeti ile uluslararası fikri mülkiyet yasaları ile korunmaktadır.</p>

                <h3>7.2 Lisans</h3>
                <p>Size, bu Sözleşme şartlarına uygun olarak Uygulamayı kişisel ve ticari amaçlarla (salon işletmeniz için) kullanmanız için sınırlı, münhasır olmayan, devredilemez bir lisans verilmektedir.</p>

                <h3>7.3 Kısıtlamalar</h3>
                <p>Bu lisans aşağıdaki hakları içermez:</p>
                <ul>
                    <li>Uygulamayı kopyalamak, değiştirmek veya türev eserler oluşturmak</li>
                    <li>Uygulamayı satmak, kiralamak veya alt lisans vermek</li>
                    <li>Uygulamanın kaynak koduna erişmek veya tersine mühendislik yapmak</li>
                    <li>SalonGo markasını izinsiz kullanmak</li>
                </ul>

                <h3>7.4 Kullanıcı İçeriği</h3>
                <p>Uygulamaya girdiğiniz veriler (müşteri bilgileri, işlem kayıtları vb.) size aittir. Ancak bu verileri işlemek ve hizmet sunmak için bize gerekli teknik izinleri vermiş olursunuz.</p>

                <h2>8. Gizlilik</h2>
                <p>Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için <a href="salongo-privacy-policy.html" style="color: var(--primary-color); font-weight: 500;">Gizlilik Politikamızı ↗</a> inceleyiniz. Gizlilik Politikası bu Sözleşme'nin ayrılmaz bir parçasıdır.</p>

                <h2>9. Sorumluluk Sınırlaması</h2>

                <h3>9.1 Hizmet Garantisi</h3>
                <p>Uygulama "OLDUĞU GİBİ" ve "MEVCUT OLDUĞU ŞEKİLDE" sunulmaktadır. Aşağıdaki konularda açık veya zımni hiçbir garanti verilmemektedir:</p>
                <ul>
                    <li>Kesintisiz veya hatasız çalışma</li>
                    <li>Belirli bir amaca uygunluk</li>
                    <li>Ticari elverişlilik</li>
                    <li>Güvenlik ihlallerinin olmaması</li>
                </ul>

                <h3>9.2 Sorumluluk Reddi</h3>
                <p>Geliştirici, aşağıdaki durumlardan kaynaklanan zararlardan sorumlu tutulamaz:</p>

                <h4>Teknik Sorunlar:</h4>
                <ul>
                    <li>Sunucu kesintileri veya bakım çalışmaları</li>
                    <li>İnternet bağlantı sorunları</li>
                    <li>Cihaz uyumsuzlukları</li>
                    <li>Üçüncü taraf hizmet kesintileri (Google Play, Supabase vb.)</li>
                </ul>

                <h4>Veri Kayıpları:</h4>
                <ul>
                    <li>Kullanıcı hatası nedeniyle veri kaybı</li>
                    <li>Cihaz arızası veya kaybı nedeniyle veri kaybı</li>
                    <li>Yedekleme yapılmaması nedeniyle veri kaybı</li>
                    <li>Siber saldırılar nedeniyle veri kaybı</li>
                </ul>

                <h4>Kullanım Sonuçları:</h4>
                <ul>
                    <li>Yanlış veri girişi nedeniyle oluşan sorunlar</li>
                    <li>İş kararlarınızın sonuçları</li>
                    <li>Müşterilerinizle yaşanan anlaşmazlıklar</li>
                    <li>Gelir kaybı veya kar kaybı</li>
                </ul>

                <h3>9.3 Maksimum Sorumluluk</h3>
                <p>Herhangi bir durumda, Geliştiricinin toplam sorumluluğu, son 12 ayda ödediğiniz abonelik ücretini aşmayacaktır.</p>

                <h3>9.4 Zorunlu Yasal Haklar</h3>
                <p>Bu sınırlamalar, yürürlükteki yasaların izin verdiği azami ölçüde geçerlidir. Tüketici olarak sahip olduğunuz yasal haklar saklıdır.</p>

                <div class="section-divider"></div>

                <h2>10. Tazminat</h2>
                <p>Aşağıdaki durumlardan kaynaklanan her türlü talep, dava, zarar, yükümlülük ve masrafa karşı Geliştiriciyi tazmin etmeyi ve zararsız tutmayı kabul edersiniz:</p>
                <ul>
                    <li>Bu Sözleşme'yi ihlal etmeniz</li>
                    <li>Uygulamayı yasadışı kullanmanız</li>
                    <li>Üçüncü tarafların haklarını ihlal etmeniz</li>
                    <li>Müşterilerinizin verilerini hukuka aykırı işlemeniz</li>
                </ul>

                <h2>11. Hesap Askıya Alma ve Fesih</h2>

                <h3>11.1 Kullanıcı Tarafından Fesih</h3>
                <ul>
                    <li>Hesabınızı istediğiniz zaman silebilirsiniz</li>
                    <li>Hesap silme talebi için: <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a></li>
                    <li>İşlem süresi: 7 iş günü</li>
                    <li>Silinen veriler geri getirilemez</li>
                </ul>

                <h3>11.2 Geliştirici Tarafından Askıya Alma</h3>
                <p>Aşağıdaki durumlarda hesabınız önceden bildirim yapılmaksızın askıya alınabilir:</p>
                <ul>
                    <li>Bu Sözleşme'nin ihlali</li>
                    <li>Yasadışı faaliyet şüphesi</li>
                    <li>Güvenlik tehdidi oluşturma</li>
                    <li>Ödeme sorunları (Premium kullanıcılar için)</li>
                </ul>

                <h3>11.3 Geliştirici Tarafından Fesih</h3>
                <p>Ciddi ihlallerde hesabınız kalıcı olarak kapatılabilir. Bu durumda:</p>
                <ul>
                    <li>Tüm verileriniz silinir</li>
                    <li>Premium aboneliğiniz iptal edilir (iade yapılmaz)</li>
                    <li>Yeni hesap açmanız engellenebilir</li>
                </ul>

                <h3>11.4 Fesih Sonrası</h3>
                <p>Sözleşme'nin feshi halinde:</p>
                <ul>
                    <li>Fikri mülkiyet hakları, sorumluluk sınırlaması ve tazminat hükümleri yürürlükte kalmaya devam eder</li>
                    <li>Ödenmemiş borçlar muaccel hale gelir</li>
                </ul>

                <div class="section-divider"></div>

                <h2>12. Değişiklikler</h2>

                <h3>12.1 Sözleşme Değişiklikleri</h3>
                <p>Bu Sözleşme'yi herhangi bir zamanda değiştirme hakkını saklı tutarız.</p>

                <h3>12.2 Bildirim</h3>
                <ul>
                    <li>Önemli değişiklikler uygulama içi bildirim ile duyurulur</li>
                    <li>Değişiklikler, yayınlandıktan 30 gün sonra yürürlüğe girer</li>
                    <li>Acil güvenlik güncellemeleri derhal yürürlüğe girebilir</li>
                </ul>

                <h3>12.3 Kabul</h3>
                <p>Değişiklikler yürürlüğe girdikten sonra Uygulamayı kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.</p>

                <h2>13. Uyuşmazlık Çözümü</h2>

                <h3>13.1 Uygulanacak Hukuk</h3>
                <p>Bu Sözleşme, Türkiye Cumhuriyeti yasalarına tabidir.</p>

                <h3>13.2 Yetkili Mahkeme</h3>
                <p>Bu Sözleşme'den doğan uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri yetkilidir.</p>

                <h3>13.3 Dostane Çözüm</h3>
                <p>Herhangi bir uyuşmazlık durumunda, öncelikle dostane çözüm yolları aranacaktır. Şikayetlerinizi <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a> adresine iletebilirsiniz.</p>

                <h3>13.4 Tüketici Hakları</h3>
                <p>6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamındaki haklarınız saklıdır.</p>

                <h2>14. Mücbir Sebepler</h2>
                <p>Aşağıdaki durumlar nedeniyle hizmet kesintisi yaşanması halinde Geliştirici sorumlu tutulamaz:</p>
                <ul>
                    <li>Doğal afetler (deprem, sel, yangın vb.)</li>
                    <li>Savaş, terör, sivil kargaşa</li>
                    <li>Pandemi veya salgın hastalık</li>
                    <li>Hükümet kararları veya yasal düzenlemeler</li>
                    <li>Siber saldırılar</li>
                    <li>Üçüncü taraf hizmet sağlayıcıların kesintileri</li>
                    <li>Elektrik veya internet altyapı sorunları</li>
                </ul>

                <h2>15. Genel Hükümler</h2>

                <h3>15.1 Bütünlük</h3>
                <p>Bu Sözleşme ve Gizlilik Politikası, taraflar arasındaki anlaşmanın tamamını oluşturur.</p>

                <h3>15.2 Bölünebilirlik</h3>
                <p>Bu Sözleşme'nin herhangi bir hükmünün geçersiz bulunması, diğer hükümlerin geçerliliğini etkilemez.</p>

                <h3>15.3 Feragat</h3>
                <p>Herhangi bir hakkın kullanılmaması, o haktan feragat edildiği anlamına gelmez.</p>

                <h3>15.4 Devir</h3>
                <p>Bu Sözleşme'den doğan haklarınızı üçüncü taraflara devredemezsiniz.</p>

                <h3>15.5 Dil</h3>
                <p>Bu Sözleşme'nin orijinal dili Türkçe'dir.</p>

                <h2>16. İletişim</h2>
                <div class="highlight-box">
                    <h3>📧 İletişim Bilgileri</h3>
                    <p><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
                    <strong>Geliştirici:</strong> Muhammed Mustafa Geldi<br>
                    <strong>Konum:</strong> Türkiye<br>
                    <strong>Yanıt Süresi:</strong> 7 iş günü</p>
                </div>

                <div class="section-divider"></div>

                <h2>17. Özet</h2>
                <div class="highlight-box">
                    <h3>✅ Haklarınız</h3>
                    <ul>
                        <li>Uygulamayı salon işletmeniz için kullanma</li>
                        <li>Verilerinize erişme ve silme talep etme</li>
                        <li>Aboneliğinizi istediğiniz zaman iptal etme</li>
                        <li>Şikayet ve öneride bulunma</li>
                    </ul>

                    <h3>✅ Yükümlülükleriniz</h3>
                    <ul>
                        <li>Doğru bilgi vermek</li>
                        <li>Hesap güvenliğini sağlamak</li>
                        <li>Yasalara uygun kullanmak</li>
                        <li>Müşteri verilerini korumak</li>
                    </ul>

                    <h3>❌ Yasak Olanlar</h3>
                    <ul>
                        <li>Uygulamayı kötüye kullanmak</li>
                        <li>Güvenlik önlemlerini atlatmak</li>
                        <li>Başkalarının haklarını ihlal etmek</li>
                        <li>Sahte bilgi girmek</li>
                    </ul>
                </div>

                <p style="margin-top: 2rem; text-align: center; font-style: italic;">
                    <strong>Bu Kullanıcı Sözleşmesi, 28 Aralık 2025 tarihinde yürürlüğe girmiştir.</strong><br>
                    <strong>Versiyon: 1.1 | Dil: Türkçe</strong><br><br>
                    <strong>SalonGo'yu kullandığınız için teşekkür ederiz! ✨</strong>
                </p>`
    },
    en: {
        backLink: "← Back to Home",
        privacyTitle: "SalonGo Privacy Policy",
        termsTitle: "SalonGo Terms of Service",
        privacyContentHtml: `<p style="color: var(--text-tertiary); margin-bottom: 2rem;">
    <strong>Last Updated:</strong> December 28, 2025 | <strong>Version:</strong> 1.1.1
</p>

<div class="highlight-box">
    <h3>👋 In Summary</h3>
    <p>We securely store and protect your customer data. We do not use or sell your data for advertising purposes.
        SalonGo is a secure platform where you have full control over your data.</p>
</div>

<h2>1. About the App</h2>
<p>SalonGo is a comprehensive management application designed for businesses. It simplifies all operations such as
    customer records, appointment tracking, cash register management, and transaction history.</p>

<div class="highlight-box">
    <h3>📱 App Information</h3>
    <p><strong>Developer:</strong> Muhammed Mustafa Geldi<br>
        <strong>Contact:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
        <strong>Location:</strong> Turkey
    </p>
</div>

<div class="highlight-box">
    <h3>📋 Related Documents</h3>
    <p>This Privacy Policy applies together with the <a href="salongo-terms-of-service.html"
            style="color: var(--primary-color); font-weight: 500;">Terms of Service ↗</a>. By using the app, you are
        deemed to have accepted both documents.</p>
</div>

<h2>2. Data We Collect</h2>

<h3>2.1 Account Information (Stored in Cloud)</h3>
<p>The following information is collected for registration and login purposes:</p>
<ul>
    <li>Username (Account ID, 3-20 characters)</li>
    <li>Email address (For contact and verification)</li>
    <li>Password (Stored encrypted with Bcrypt)</li>
    <li>Salon name (Business identifier)</li>
    <li>Google ID (For those logging in with Google - optional)</li>
    <li>Registration method ('email' or 'google')</li>
    <li>Device ID (For single-device policy)</li>
</ul>

<h3>2.2 Subscription Information (Stored in Cloud)</h3>
<ul>
    <li>Subscription type ('free', 'monthly' or 'yearly')</li>
    <li>Premium status</li>
    <li>Google Play purchase token (For subscription verification)</li>
    <li>Google Play order ID (For payment tracking)</li>
    <li>Last synchronization date</li>
</ul>

<h3>2.3 Salon Data (Stored on Your Device)</h3>
<p>This data is stored <strong>only on your device</strong> and is not sent to our servers unless cloud backup is
    enabled:</p>
<ul>
    <li><strong>Customer Information:</strong> Full name, phone, date of birth, gender, notes, VIP status, profile icon
    </li>
    <li><strong>Employee Information:</strong> Name, profile icon</li>
    <li><strong>Appointment Records:</strong> Employee/customer information, transaction description, date/time, notes,
        completion status</li>
    <li><strong>Transaction Records (Cash Register):</strong> Transaction title, amount, date, description,
        income/expense type</li>
    <li><strong>Loyalty System:</strong> Customer-based star count, annual spending amount</li>
    <li><strong>Business Settings:</strong> Working hours, closed days, auto message template</li>
</ul>

<h3>2.4 Temporary Data (Automatically Deleted)</h3>
<ul>
    <li>Email verification codes (3 minutes)</li>
    <li>Password reset codes (3 minutes)</li>
    <li>Password reset tokens (5 minutes)</li>
    <li>Daily email send counter (3 days)</li>
</ul>

<h2>3. Data Storage</h2>

<h3>📱 On Your Device (Local - Room Database)</h3>
<p>Customer records, appointments, transactions, employees, and settings are stored <strong>only on your
        device</strong>.</p>

<h3>☁️ In the Cloud (Supabase)</h3>
<ul>
    <li>Account information</li>
    <li>Session information</li>
    <li>Subscription status</li>
    <li>Temporary verification codes</li>
    <li>Cloud backup files (Premium)</li>
    <li>Announcements</li>
</ul>
<p><strong>Server Location:</strong> Europe (EU)<br>
    <strong>Security:</strong> All data is encrypted with HTTPS/TLS
</p>

<h2>4. How We Use Data?</h2>

<h3>✅ What We Do:</h3>
<ul>
    <li>Account creation and authentication</li>
    <li>Email verification (6-digit code)</li>
    <li>Password reset support</li>
    <li>Premium subscription management and verification</li>
    <li>Cloud backup service (Premium)</li>
    <li>In-app announcements</li>
    <li>Single device security policy</li>
</ul>

<h3>❌ What We Don't Do:</h3>
<ul>
    <li>We do not show ads</li>
    <li>We do not sell your data</li>
    <li>We do not share with third parties for marketing purposes</li>
    <li>We do not track user behavior</li>
    <li>We do not collect analytical data</li>
    <li>We do not collect location information</li>
</ul>

<h2>5. Permissions</h2>

<h3>🌐 Internet (INTERNET)</h3>
<p><strong>Usage:</strong> Account operations, subscription verification, cloud backup<br>
    <strong>Required:</strong> Yes
</p>

<h3>💳 Billing (BILLING)</h3>
<p><strong>Usage:</strong> Premium subscription payments via Google Play<br>
    <strong>Processor:</strong> Google Play<br>
    <strong>Note:</strong> We do not see your credit card information
</p>

<h3>📱 Sending SMS (Intent)</h3>
<p><strong>Usage:</strong> To send messages to your customers<br>
    <strong>Control:</strong> Only when you press the "Send" button<br>
    <strong>Note:</strong> The app does not ask for permission, it opens the device's SMS app
</p>

<h3>📞 Calling (Intent)</h3>
<p><strong>Usage:</strong> To call your customers<br>
    <strong>Control:</strong> Only when you press the "Call" button
</p>

<h3>💬 WhatsApp (Intent)</h3>
<p><strong>Usage:</strong> To send WhatsApp messages to your customers<br>
    <strong>Note:</strong> WhatsApp must be installed
</p>

<p><strong>⚠️ Important:</strong> The app does not automatically send SMS, make calls, or send messages. Every action is
    under your control.</p>

<h2>6. Third Party Services</h2>

<h3>Supabase (Backend)</h3>
<ul>
    <li><strong>Usage:</strong> Account management, session control, cloud backup</li>
    <li><strong>Location:</strong> Europe servers</li>
    <li><strong>Privacy:</strong> <a href="https://supabase.com/privacy" target="_blank">supabase.com/privacy ↗</a></li>
</ul>

<h3>Google Play Billing</h3>
<ul>
    <li><strong>Usage:</strong> Premium subscription payments</li>
    <li><strong>Privacy:</strong> <a href="https://policies.google.com/privacy"
            target="_blank">policies.google.com/privacy ↗</a></li>
</ul>

<h3>Google Sign-In</h3>
<ul>
    <li><strong>Usage:</strong> Login with Google account (optional)</li>
    <li><strong>Data Received:</strong> Email, Google ID, name</li>
    <li><strong>Privacy:</strong> <a href="https://policies.google.com/privacy"
            target="_blank">policies.google.com/privacy ↗</a></li>
</ul>

<h3>Resend (Email Service)</h3>
<ul>
    <li><strong>Usage:</strong> Verification and password reset emails</li>
    <li><strong>Privacy:</strong> <a href="https://resend.com/legal/privacy-policy"
            target="_blank">resend.com/legal/privacy-policy ↗</a></li>
</ul>

<h3>❌ What We Do Not Use:</h3>
<ul>
    <li>Google Analytics</li>
    <li>Firebase Analytics / Crashlytics</li>
    <li>Facebook SDK</li>
    <li>Ad networks (AdMob, etc.)</li>
    <li>User tracking tools</li>
</ul>

<h2>7. Security</h2>

<div class="highlight-box">
    <h3>🔒 Our Security Measures</h3>
    <p><strong>Encryption:</strong></p>
    <ul>
        <li>Encrypted data transmission with HTTPS/TLS</li>
        <li>Password hashing with Bcrypt (server side)</li>
        <li>Passwords are never stored in plain text</li>
    </ul>
    <p><strong>Authentication:</strong></p>
    <ul>
        <li>Email verification system (6-digit code)</li>
        <li>Single device policy (new login terminates old session)</li>
        <li>Token-based session management</li>
    </ul>
    <p><strong>Brute Force Protection:</strong></p>
    <ul>
        <li>1-hour wait after 3 invalid attempts</li>
        <li>Daily limit of 5 email sends</li>
        <li>Verification codes valid for 3 minutes</li>
    </ul>
    <p><strong>Database Security:</strong></p>
    <ul>
        <li>Row Level Security (RLS) active</li>
        <li>Direct access to all tables disabled</li>
        <li>Access only via secure RPC functions</li>
    </ul>
</div>

<h2>8. Premium Subscription</h2>

<h3>💳 Payment</h3>
<ul>
    <li>All payments are processed through Google Play</li>
    <li>We do not see your credit card information</li>
    <li>You can cancel anytime</li>
</ul>

<h3>📊 Subscription Types</h3>
<ul>
    <li><strong>Free:</strong> Core features (10 customers, 1 employee, 5-day appointments)</li>
    <li><strong>Monthly Premium:</strong> All features</li>
    <li><strong>Yearly Premium:</strong> All features (discounted)</li>
</ul>

<h3>🔄 Subscription Check</h3>
<ul>
    <li>Synchronized with Google Play at every app launch</li>
    <li>Premium cannot be granted to different SalonGo accounts with the same Google Play account</li>
    <li>Canceled subscriptions are detected automatically</li>
</ul>

<h2>9. Your Rights (KVKK & GDPR)</h2>

<div class="highlight-box">
    <h3>✅ Rights You Have:</h3>
    <ul>
        <li><strong>Access:</strong> To view your data</li>
        <li><strong>Rectification:</strong> To update your data</li>
        <li><strong>Erasure:</strong> To permanently delete your data</li>
        <li><strong>Objection:</strong> To object to data processing</li>
        <li><strong>Portability:</strong> To receive your data</li>
    </ul>
    <p><strong>📧 To Exercise Your Rights:</strong><br>
        Email: <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
        Response Time: 30 days</p>
</div>

<h2>10. Account and Data Deletion</h2>

<h3>🗑️ How to Delete Your Account?</h3>
<p>To delete your account, contact us via email:</p>
<p><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
    <strong>Subject:</strong> SalonGo - Account Deletion Request<br>
    <strong>Processing Time:</strong> Within 7 business days
</p>

<h3>Deleted Data</h3>
<p>After the account deletion process, <strong>all your data will be permanently deleted:</strong></p>
<p><strong>Deleted from Cloud:</strong></p>
<ul>
    <li>Account information</li>
    <li>Subscription information</li>
    <li>Session records</li>
    <li>Backup metadata</li>
    <li>Verification codes</li>
    <li>Cloud backup file</li>
</ul>
<p><strong>Left on Device:</strong> Local database (deleted by uninstalling the app)</p>
<p><strong>⚠️ This process cannot be undone!</strong></p>

<h2>11. Children's Privacy</h2>
<p>SalonGo is <strong>not intended for users under 18</strong>. We do not knowingly collect data from anyone under 18.
    If we identify that a user under 18 has created an account, we will immediately delete the account.</p>

<h2>12. Data Retention Periods</h2>
<ul>
    <li><strong>Account information:</strong> Until the account is deleted</li>
    <li><strong>Session information:</strong> Until log out</li>
    <li><strong>Subscription information:</strong> Until the account is deleted</li>
    <li><strong>Verification codes:</strong> 3 minutes (auto cleanup)</li>
    <li><strong>Email sending records:</strong> 3 days (auto cleanup)</li>
    <li><strong>Cloud backup:</strong> Until the account is deleted</li>
    <li><strong>Local data:</strong> Until the app is uninstalled</li>
</ul>

<h2>13. Changes</h2>
<p>We may update the privacy policy. For significant changes, an in-app announcement will be made and the changes will
    take effect after 30 days.</p>

<h2>14. Contact</h2>
<div class="highlight-box">
    <h3>📧 Contact Information</h3>
    <p><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
        <strong>Developer:</strong> Muhammed Mustafa Geldi<br>
        <strong>Location:</strong> Turkey<br>
        <strong>Response Time:</strong> 7 business days
    </p>
</div>

<h2>15. Summary</h2>

<div class="highlight-box">
    <h3>✅ What We Do</h3>
    <ul>
        <li>Store your data securely</li>
        <li>Use encryption (HTTPS, Bcrypt)</li>
        <li>Operate transparently</li>
        <li>Comply with KVKK and GDPR</li>
        <li>Collect minimal data</li>
    </ul>

    <h3>❌ What We Don't Do</h3>
    <ul>
        <li>Show ads</li>
        <li>Sell data</li>
        <li>Track you</li>
        <li>Send spam</li>
        <li>Collect analytics</li>
    </ul>
</div>

<p style="margin-top: 2rem; text-align: center; font-style: italic;">
    <strong>This Privacy Policy is effective as of December 28, 2025.</strong><br>
    <strong>Version: 1.1.1 | Language: English</strong><br><br>
    <strong>Thank you for using SalonGo! ✨</strong>
</p>`,
        termsContentHtml: `<p style="color: var(--text-tertiary); margin-bottom: 2rem;">
    <strong>Last Updated:</strong> December 28, 2025 | <strong>Version:</strong> 1.1
</p>

<h2>1. Parties and Scope</h2>

<h3>1.1 Parties</h3>
<p>This Terms of Service ("Agreement") is concluded between the following parties:</p>

<div class="highlight-box">
    <p><strong>Service Provider:</strong><br>
        Muhammed Mustafa Geldi ("Developer", "We", "Our")<br>
        Contact: <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
        Location: Turkey</p>

    <p><strong>User:</strong><br>
        The real or legal person who downloads, installs, or uses the SalonGo application ("User", "You",
        "Your")</p>
</div>

<h3>1.2 Scope of the Agreement</h3>
<p>This Agreement governs the terms of use of the SalonGo mobile application ("Application") and related services
    ("Services").</p>

<h3>1.3 Acceptance of the Agreement</h3>
<p>By downloading, installing, creating an account, or using the Application, you declare that you have read,
    understood, and accepted all provisions of this Agreement. If you do not accept these terms,
    do not use the Application.</p>

<div class="section-divider"></div>

<h2>2. Description of Service</h2>

<h3>2.1 What is SalonGo?</h3>
<p>SalonGo is a comprehensive management application designed for businesses. It simplifies all operations such as
    customer records, appointment tracking, cash register management, and transaction history.</p>

<h3>2.2 Features Offered</h3>
<ul>
    <li>Customer registration and management</li>
    <li>Appointment tracking and planning</li>
    <li>Income/expense tracking</li>
    <li>Employee management</li>
    <li>Loyalty system</li>
    <li>Automatic message sending (SMS/WhatsApp)</li>
    <li>Cloud backup (Premium)</li>
    <li>Local backup</li>
</ul>

<h3>2.3 Types of Service</h3>

<div class="highlight-box">
    <h3>Free Plan</h3>
    <ul>
        <li>Maximum 10 customer records</li>
        <li>Maximum 1 employee record</li>
        <li>Creating appointments up to 5 days in advance</li>
        <li>Local backup</li>
        <li>Basic features</li>
        <li>Auto message and loyalty system disabled</li>
        <li>Cloud backup disabled</li>
    </ul>
</div>

<div class="highlight-box">
    <h3>Premium Plan (Monthly/Yearly)</h3>
    <ul>
        <li>Unlimited customer and employee records</li>
        <li>Unlimited future appointments</li>
        <li>Automatic messaging system</li>
        <li>Loyalty system</li>
        <li>Automatic cloud backup (every night at 00:00)</li>
        <li>All features</li>
    </ul>
</div>

<div class="section-divider"></div>

<h2>3. Account Creation and Security</h2>

<h3>3.1 Account Requirements</h3>
<p>To create an account:</p>
<ul>
    <li>You must be over 18 years old</li>
    <li>You must provide a valid email address</li>
    <li>You must provide accurate and up-to-date information</li>
    <li>Your username must be 3-20 characters long and contain only letters, numbers, underscores (_), or hyphens (-)
    </li>
</ul>

<h3>3.2 Account Security</h3>
<p>As a User:</p>
<ul>
    <li>You are responsible for maintaining the confidentiality of your account information</li>
    <li>You must not share your password with anyone</li>
    <li>You are responsible for all activities on your account</li>
    <li>You must notify us immediately in the event of unauthorized access</li>
</ul>

<h3>3.3 Single Device Policy</h3>
<p>For security reasons, your account can only be active on one device at a time. When logged in from a new device,
    sessions on previous devices will be automatically terminated.</p>

<h3>3.4 Email Verification</h3>
<p>To activate your account, you must verify your email address. Verification codes are valid for 3
    minutes.</p>

<h2>4. User Obligations</h2>

<h3>4.1 Lawful Use</h3>
<p>You agree to use the Application only for lawful purposes and in accordance with this Agreement.</p>

<h3>4.2 Prohibited Activities</h3>

<h4>Technical Violations:</h4>
<ul>
    <li>Reverse engineering the Application, attempting to extract the source code</li>
    <li>Attempting to bypass or disable security measures</li>
    <li>Attempting to gain unauthorized access to the Application</li>
    <li>Overloading our servers or carrying out DDoS attacks</li>
    <li>Using automated bots, scripts, or similar tools</li>
</ul>

<h4>Content Violations:</h4>
<ul>
    <li>Uploading illegal, harmful, threatening, harassing content</li>
    <li>Processing others' personal data without permission</li>
    <li>Entering incorrect or misleading information</li>
    <li>Using content that infringes on intellectual property rights</li>
</ul>

<h4>Commercial Violations:</h4>
<ul>
    <li>Renting or selling the Application to third parties</li>
    <li>Using the Application to develop a competing product</li>
    <li>Attempting to obtain Premium features by fraudulent means</li>
</ul>

<h3>4.3 Data Responsibility</h3>
<p>You are solely responsible for all data you enter into the Application (customer information, transaction records,
    etc.). You are
    obligated to ensure that this data:</p>
<ul>
    <li>Is accurate and up to date</li>
    <li>Has been obtained through lawful means</li>
    <li>Is processed with the relevant persons' consent</li>
</ul>

<h3>4.4 KVKK Compliance</h3>
<p>When processing your customers' personal data, you are obliged to act in accordance with the Personal Data Protection
    Law No. 6698 (KVKK). It is your responsibility to obtain necessary permissions from your customers.</p>

<div class="section-divider"></div>

<h2>5. Premium Subscription</h2>

<h3>5.1 Payment</h3>
<ul>
    <li>All payments are processed securely through Google Play</li>
    <li>Prices are as shown on Google Play</li>
    <li>Payments will automatically renew (unless canceled)</li>
</ul>

<h3>5.2 Cancellation and Refund</h3>
<ul>
    <li>You can cancel your subscription at any time via Google Play</li>
    <li>Cancellations will take effect at the end of the current billing cycle</li>
    <li>Refund requests are subject to Google Play policies</li>
    <li>No refunds will be given for partial periods</li>
</ul>

<h3>5.3 Price Changes</h3>
<ul>
    <li>Price changes will be notified in advance</li>
    <li>Existing subscriptions will continue at the old price until the end of the term</li>
    <li>If you do not accept the new price, you can cancel your subscription</li>
</ul>

<h3>5.4 Subscription Transfer</h3>
<ul>
    <li>Premium subscriptions can be transferred between accounts</li>
    <li>The old account will automatically fall back to the free plan</li>
</ul>

<h2>6. Data Backup</h2>

<h3>6.1 Local Backup</h3>
<ul>
    <li>All users can utilize the local backup feature</li>
    <li>Local backups are stored directly on your device</li>
    <li>The security and preservation of local backups is entirely your responsibility</li>
    <li>If the device is lost, stolen, or damaged, local backups may be lost</li>
</ul>

<h3>6.2 Cloud Backup (Premium)</h3>
<p>Cloud backup service is exclusively available for Premium subscribers.</p>

<div class="highlight-box">
    <h4>Service Scope:</h4>
    <ul>
        <li>Automatic backup every night (at 00:00)</li>
        <li>Stored on secure servers located in Europe (Supabase)</li>
        <li>Encrypted data transfer via HTTPS</li>
        <li>Single backup policy (each new backup overwrites the previous one)</li>
    </ul>

    <h4>Backed Up Data:</h4>
    <ul>
        <li>Customer records</li>
        <li>Appointment records</li>
        <li>Transaction history (income/expense)</li>
        <li>Employee information</li>
        <li>Application settings</li>
    </ul>
</div>

<h3>6.3 Cloud Backup Disclaimer</h3>
<p><strong>The Developer cannot be held responsible in the following situations:</strong></p>
<ul>
    <li>Failure to backup due to outages experienced by Supabase or other third-party service providers</li>
    <li>Backup failures due to internet connection issues</li>
    <li>Temporary access interruptions during server maintenance works</li>
    <li>Data loss due to unforeseen technical failures</li>
    <li>Data breaches resulting from cyber-attacks</li>
    <li>Loss of access to cloud backups resulting from the User's cancellation of their Premium subscription</li>
</ul>

<p><strong>User Responsibilities:</strong></p>
<ul>
    <li>We recommend taking additional backup precautions for your critical data</li>
    <li>You are advised to perform regular local backups</li>
    <li>You are expected to check the backup status periodically</li>
    <li>You must ensure your internet connection is active during backup times</li>
</ul>

<h3>6.4 Deletion of Backup Data</h3>
<ul>
    <li>When you submit an account deletion request, your cloud backups will also be permanently deleted</li>
    <li>When you cancel your Premium subscription, your current cloud backup will be preserved but no new backups will
        be performed</li>
    <li>When your account is suspended or closed, your access to cloud backups will be terminated</li>
</ul>

<h3>6.5 Data Integrity</h3>
<ul>
    <li>Reasonable effort is made to ensure data integrity during backup and restoration operations</li>
    <li>However, 100% data integrity is not guaranteed</li>
    <li>It is recommended to verify your data after a restoration process</li>
</ul>

<div class="section-divider"></div>

<h2>7. Intellectual Property Rights</h2>

<h3>7.1 Application Rights</h3>
<p>The SalonGo application, its design, logo, source code, graphics, and all its contents are the exclusive property of
    Muhammed Mustafa Geldi and are protected by the intellectual property laws of the Republic of Turkey and
    international laws.</p>

<h3>7.2 License</h3>
<p>You are granted a limited, non-exclusive, non-transferable license to use the Application for personal and commercial
    purposes (for your salon business) in accordance with the terms of this Agreement.</p>

<h3>7.3 Restrictions</h3>
<p>This license does not include the following rights:</p>
<ul>
    <li>To copy, modify, or create derivative works of the Application</li>
    <li>To sell, rent, or sublicense the Application</li>
    <li>To access the source code or reverse engineer the Application</li>
    <li>To use the SalonGo mark without authorization</li>
</ul>

<h3>7.4 User Content</h3>
<p>Data you enter into the Application (customer information, transaction records, etc.) belongs to you. However, you
    grant us the necessary technical permissions to process this data and provide the service.</p>

<h2>8. Privacy</h2>
<p>For detailed information about the processing of your personal data, please review our <a
        href="salongo-privacy-policy.html" style="color: var(--primary-color); font-weight: 500;">Privacy Policy ↗</a>.
    The Privacy Policy is an integral part of this Agreement.</p>

<h2>9. Limitation of Liability</h2>

<h3>9.1 Service Warranty</h3>
<p>The Application is provided on an "AS IS" and "AS AVAILABLE" basis. No express or implied warranty is given regarding
    the following matters:</p>
<ul>
    <li>Uninterruptible or error-free operation</li>
    <li>Fitness for a particular purpose</li>
    <li>Commercial suitability</li>
    <li>Absence of security breaches</li>
</ul>

<h3>9.2 Disclaimer</h3>
<p>The Developer cannot be held liable for damages resulting from the following situations:</p>

<h4>Technical Issues:</h4>
<ul>
    <li>Server outages or maintenance work</li>
    <li>Internet connection issues</li>
    <li>Device incompatibilities</li>
    <li>Third-party service interruptions (Google Play, Supabase, etc.)</li>
</ul>

<h4>Data Losses:</h4>
<ul>
    <li>Data loss due to user error</li>
    <li>Data loss due to device malfunction or loss</li>
    <li>Data loss due to failure to back up</li>
    <li>Data loss due to cyber attacks</li>
</ul>

<h4>Consequences of Use:</h4>
<ul>
    <li>Issues arising from incorrect data entry</li>
    <li>Results of your business decisions</li>
    <li>Disputes experienced with your customers</li>
    <li>Loss of income or loss of profit</li>
</ul>

<h3>9.3 Maximum Liability</h3>
<p>In any case, the total liability of the Developer will not exceed the subscription fee you paid in the last 12
    months.</p>

<h3>9.4 Mandatory Legal Rights</h3>
<p>These limitations apply to the maximum extent permitted by applicable law. Your legal rights as a consumer are
    reserved.</p>

<div class="section-divider"></div>

<h2>10. Liability</h2>
<p>You agree to indemnify and hold harmless the Developer from any claim, action, damage, liability, and expense arising
    from the following situations:</p>
<ul>
    <li>Your violation of this Agreement</li>
    <li>Your unlawful use of the Application</li>
    <li>Your violation of the rights of third parties</li>
    <li>Your unlawful processing of your customers' data</li>
</ul>

<h2>11. Account Suspension and Termination</h2>

<h3>11.1 Termination by User</h3>
<ul>
    <li>You can delete your account at any time</li>
    <li>For account deletion request: <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a></li>
    <li>Processing time: 7 business days</li>
    <li>Deleted data cannot be recovered</li>
</ul>

<h3>11.2 Suspension by Developer</h3>
<p>Your account may be suspended without notice in the following cases:</p>
<ul>
    <li>Violation of this Agreement</li>
    <li>Suspicion of illegal activity</li>
    <li>Posing a security threat</li>
    <li>Payment issues (for Premium users)</li>
</ul>

<h3>11.3 Termination by Developer</h3>
<p>In cases of serious violations, your account may be completely closed. In this condition:</p>
<ul>
    <li>All your data will be deleted</li>
    <li>Your Premium subscription will be canceled (no refund)</li>
    <li>You may be blocked from opening a new account</li>
</ul>

<h3>11.4 Post-Termination</h3>
<p>Upon termination of the Agreement:</p>
<ul>
    <li>Provisions regarding intellectual property rights, limitation of liability, and indemnification shall remain in
        effect</li>
    <li>Unpaid debts shall become due and payable</li>
</ul>

<div class="section-divider"></div>

<h2>12. Amendments</h2>

<h3>12.1 Agreement Changes</h3>
<p>We reserve the right to amend this Agreement at any time.</p>

<h3>12.2 Notification</h3>
<ul>
    <li>Significant changes will be announced via in-app notifications</li>
    <li>Changes will take effect 30 days after publication</li>
    <li>Urgent security updates may take effect immediately</li>
</ul>

<h3>12.3 Acceptance</h3>
<p>Your continued use of the Application after the changes take effect constitutes your acceptance of the new terms.</p>

<h2>13. Dispute Resolution</h2>

<h3>13.1 Governing Law</h3>
<p>This Agreement is subject to the laws of the Republic of Turkey.</p>

<h3>13.2 Competent Court</h3>
<p>The courts of the Republic of Turkey have jurisdiction over disputes arising from this Agreement.</p>

<h3>13.3 Amicable Resolution</h3>
<p>In the event of any dispute, amicable resolution methods will be sought first. You can send your complaints to <a
        href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a>.</p>

<h3>13.4 Consumer Rights</h3>
<p>Your rights under the Consumer Protection Law No. 6502 are reserved.</p>

<h2>14. Force Majeure</h2>
<p>The Developer cannot be held liable for any service interruption due to the following situations:</p>
<ul>
    <li>Natural disasters (earthquake, flood, fire, etc.)</li>
    <li>War, terrorism, civil unrest</li>
    <li>Pandemic or epidemic disease</li>
    <li>Government decisions or legal regulations</li>
    <li>Cyber attacks</li>
    <li>Outages of third-party service providers</li>
    <li>Electrical or internet infrastructure problems</li>
</ul>

<h2>15. General Provisions</h2>

<h3>15.1 Entire Agreement</h3>
<p>This Agreement and the Privacy Policy constitute the entire agreement between the parties.</p>

<h3>15.2 Severability</h3>
<p>If any provision of this Agreement is found to be invalid, it will not affect the validity of the remaining
    provisions.</p>

<h3>15.3 Waiver</h3>
<p>Failure to exercise any right does not mean a waiver of that right.</p>

<h3>15.4 Re-assignment</h3>
<p>You cannot transfer your rights arising from this Agreement to third parties.</p>

<h3>15.5 Language</h3>
<p>The original language of this Agreement is Turkish.</p>

<h2>16. Contact</h2>
<div class="highlight-box">
    <h3>📧 Contact Information</h3>
    <p><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a><br>
        <strong>Developer:</strong> Muhammed Mustafa Geldi<br>
        <strong>Location:</strong> Turkey<br>
        <strong>Response Time:</strong> 7 business days
    </p>
</div>

<div class="section-divider"></div>

<h2>17. Summary</h2>
<div class="highlight-box">
    <h3>✅ Your Rights</h3>
    <ul>
        <li>Use the application for your salon business</li>
        <li>Request access to and deletion of your data</li>
        <li>Cancel your subscription at any time</li>
        <li>Submit complaints and suggestions</li>
    </ul>

    <h3>✅ Your Obligations</h3>
    <ul>
        <li>Provide accurate information</li>
        <li>Ensure account security</li>
        <li>Use it securely under the law</li>
        <li>Protect customer data</li>
    </ul>

    <h3>❌ Things Prohibited</h3>
    <ul>
        <li>Abusing the application</li>
        <li>Bypassing security measures</li>
        <li>Violating the rights of others</li>
        <li>Entering fake information</li>
    </ul>
</div>

<p style="margin-top: 2rem; text-align: center; font-style: italic;">
    <strong>This Terms of Service is effective as of December 28, 2025.</strong><br>
    <strong>Version: 1.1 | Language: English</strong><br><br>
    <strong>Thank you for using SalonGo! ✨</strong>
</p>`
    }
};

function applySalongoTranslations() {
    if (!window.i18n) return;
    const lang = i18n.getLang();
    const t = salongoTranslations[lang] || salongoTranslations.tr;

    const privacyContainer = document.getElementById('salongoPrivacyContentContainer');
    if (privacyContainer) {
        privacyContainer.innerHTML = t.privacyContentHtml;
        document.title = t.privacyTitle;
        const h1 = document.querySelector('article h1');
        if (h1) h1.textContent = t.privacyTitle;
    }

    const termsContainer = document.getElementById('salongoTermsContentContainer');
    if (termsContainer) {
        termsContainer.innerHTML = t.termsContentHtml;
        document.title = t.termsTitle;
        const h1 = document.querySelector('article h1');
        if (h1) h1.textContent = t.termsTitle;
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
                    existingBtn.querySelector('span:last-child').textContent = 'Download SalonGo';
                } else {
                    existingBtn.querySelector('span:last-child').textContent = "SalonGo'yu İndir";
                }
                tocSidebar.appendChild(existingBtn);
            }
        }
        initializeTOC();
    }
}

window.addEventListener('langChanged', applySalongoTranslations);

document.addEventListener('DOMContentLoaded', () => {
    const checkI18n = setInterval(() => {
        if (window.i18n && window.i18n.translations) {
            clearInterval(checkI18n);
            applySalongoTranslations();
        }
    }, 50);
    setTimeout(() => {
        clearInterval(checkI18n);
        applySalongoTranslations();
    }, 1000);
});
