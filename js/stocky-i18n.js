// Stocky Privacy Policy & Terms of Service Translations
const stockyTranslations = {
    tr: {
        privacyHtml: `<p><strong>Son Güncelleme:</strong> 5 Mart 2026 | <strong>Versiyon:</strong> 1.1</p>
<p>Stocky (&quot;biz&quot;, &quot;bizim&quot; veya &quot;uygulama&quot;) olarak gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, Stocky stok takip uygulamasını kullandığınızda hangi bilgilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.</p>
<hr>
<h2>1. Toplanan Bilgiler</h2>
<h3>1.1 Hesap Bilgileri</h3>
<p>Uygulamayı kullanmak için bir hesap oluşturmanız gerekmektedir. Bu süreçte aşağıdaki bilgiler toplanır:</p>
<ul>
<li><strong>E-posta adresi:</strong> Hesap oluşturma, kimlik doğrulama ve parola sıfırlama için</li>
<li><strong>Şifre:</strong> Güvenli bir şekilde hash&#39;lenerek (bcrypt) saklanır; düz metin olarak asla saklanmaz</li>
<li><strong>Google hesap bilgileri (isteğe bağlı):</strong> Google ile giriş yapılması halinde, Google tarafından sağlanan e-posta adresi ve kimlik doğrulama token&#39;ı kullanılır. Google hesap şifrenize erişimimiz yoktur.</li>
</ul>
<h3>1.2 İş Verileri</h3>
<p>Uygulama içinde girdiğiniz tüm iş verileri sunucularımızda saklanır:</p>
<ul>
<li><strong>Ürün bilgileri:</strong> Ürün adı, barkod, stok miktarı, alış/satış fiyatları, vergi oranları, birim, ürün açıklamaları</li>
<li><strong>Müşteri bilgileri:</strong> Ad, telefon, e-posta, adres, bakiye, notlar</li>
<li><strong>Tedarikçi bilgileri:</strong> Firma adı, iletişim bilgileri, vergi numarası, IBAN, banka bilgileri, adres, notlar</li>
<li><strong>İşlem kayıtları:</strong> Satış, alış, iade, tahsilat ve tediye işlemleri; ürün kalemleri, indirimler, ödeme yöntemi ve tarih bilgileri</li>
</ul>
<h3>1.3 Firma Bilgileri</h3>
<p>Fiş/fatura üzerinde görüntülenmek üzere saklanan bilgiler:</p>
<ul>
<li>Firma adı, adres, telefon, e-posta, web sitesi</li>
<li>Vergi numarası, vergi dairesi</li>
<li>Firma logosu (Supabase Storage&#39;a yüklenir)</li>
</ul>
<h3>1.4 Abonelik ve Ödeme Bilgileri</h3>
<ul>
<li><strong>Abonelik durumu:</strong> Plan türü (free/monthly/yearly), bitiş tarihi, fiş çıktı sayacı</li>
<li><strong>Satın alma token&#39;ı:</strong> Google Play Billing tarafından oluşturulan, abonelik doğrulaması için kullanılan token</li>
<li>Kredi kartı veya ödeme bilgileriniz tarafımızca <strong>toplanmaz ve saklanmaz</strong>; tüm ödeme işlemleri Google Play altyapısı üzerinden gerçekleşir</li>
</ul>
<h3>1.5 Fiş/Fatura Ayarları</h3>
<ul>
<li>Kağıt genişliği, otomatik yazdırma tercihi</li>
<li>Fişte gösterilecek bilgi tercihleri (firma adı, logo, adres, telefon, e-posta, web sitesi, vergi bilgisi)</li>
<li>Özel başlık ve alt bilgi metinleri</li>
<li>Stocky marka görünürlüğü tercihi (premium özellik)</li>
</ul>
<h3>1.6 Cihaz Üzerinde Saklanan Veriler</h3>
<p>Bazı tercihler yalnızca cihazınızda (SharedPreferences) saklanır ve sunucularımıza gönderilmez:</p>
<ul>
<li>Tema tercihi (açık/koyu/sistem)</li>
<li>Dil tercihi</li>
<li>Barkod tarayıcı ses ve titreşim ayarları</li>
<li>Bluetooth yazıcı bağlantı bilgileri (MAC adresi, cihaz adı)</li>
<li>Kullanıcı ayarları, firma bilgileri ve fiş ayarları önbelleği (hızlı erişim için)</li>
</ul>
<h3>1.7 Kullanıcı Ayarları</h3>
<p>Aşağıdaki iş tercihleri sunucularımızda saklanır:</p>
<ul>
<li>Varsayılan vergi oranı</li>
<li>Fiyatlar vergili mi formatı</li>
<li>Para birimi</li>
<li>Negatif stok izin ayarı</li>
</ul>
<hr>
<h2>2. Cihaz İzinleri ve Kullanım Amaçları</h2>
<h3>2.1 Kamera Erişimi</h3>
<p>Barkod tarama özelliği için kamera erişimi istenir:</p>
<ul>
<li>Hiçbir fotoğraf veya video kaydedilmez</li>
<li>Kamera görüntüsü sunucularımıza gönderilmez</li>
<li>Barkod tarama işlemi tamamen cihaz üzerinde gerçekleşir (Google ML Kit)</li>
</ul>
<h3>2.2 Rehber Erişimi (İsteğe Bağlı)</h3>
<p>Müşteri veya tedarikçi eklerken rehberden kişi seçme özelliği sunulmaktadır:</p>
<ul>
<li>Bu özellik tamamen isteğe bağlıdır</li>
<li>Rehber verileriniz sunucularımıza gönderilmez</li>
<li>Yalnızca seçtiğiniz kişinin bilgileri (ad, telefon, e-posta, adres) ilgili forma aktarılır</li>
</ul>
<h3>2.3 Bluetooth Erişimi</h3>
<p>Termal yazıcıya bağlanmak için Bluetooth izinleri istenir:</p>
<ul>
<li>Yalnızca yazıcı cihazla iletişim kurmak için kullanılır</li>
<li>Bluetooth üzerinden toplanan cihaz bilgileri (yazıcı adı, MAC adresi) yalnızca cihazınızda saklanır ve sunucularımıza gönderilmez</li>
</ul>
<h3>2.4 Internet ve Ağ Durumu</h3>
<ul>
<li>Veri senkronizasyonu, kimlik doğrulama ve abonelik doğrulaması için kullanılır</li>
</ul>
<h3>2.5 Titreşim</h3>
<ul>
<li>Barkod tarama geri bildirimi için kullanılır</li>
</ul>
<table>
<thead>
<tr>
<th>İzin</th>
<th>Amaç</th>
<th>Zorunlu mu?</th>
</tr>
</thead>
<tbody><tr>
<td><strong>İnternet</strong></td>
<td>Veri senkronizasyonu ve kimlik doğrulama</td>
<td>Evet</td>
</tr>
<tr>
<td><strong>Ağ Durumu</strong></td>
<td>Çevrimdışı/çevrimiçi kontrolü</td>
<td>Evet</td>
</tr>
<tr>
<td><strong>Kamera</strong></td>
<td>Barkod tarama</td>
<td>Hayır</td>
</tr>
<tr>
<td><strong>Rehber</strong></td>
<td>Kişi bilgilerini forma aktarma</td>
<td>Hayır</td>
</tr>
<tr>
<td><strong>Bluetooth</strong></td>
<td>Termal yazıcı bağlantısı</td>
<td>Hayır</td>
</tr>
<tr>
<td><strong>Titreşim</strong></td>
<td>Barkod tarama geri bildirimi</td>
<td>Hayır</td>
</tr>
</tbody></table>
<hr>
<h2>3. Bilgilerin Kullanımı</h2>
<p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
<ul>
<li><strong>Hizmet sunumu:</strong> Stok takibi, müşteri/tedarikçi yönetimi, satış/alış işlemleri ve fiş oluşturma</li>
<li><strong>Hesap yönetimi:</strong> Kimlik doğrulama, hesap güvenliği ve parola sıfırlama</li>
<li><strong>Veri senkronizasyonu:</strong> Verilerinizin sunucu ile senkronize edilmesi</li>
<li><strong>Abonelik yönetimi:</strong> Premium plan doğrulaması, fiş kotası takibi</li>
<li><strong>Fiş oluşturma:</strong> İşlem verileriniz ve firma bilgileriniz kullanılarak PDF ve termal yazıcı fişleri oluşturulması</li>
<li><strong>Hizmet iyileştirme:</strong> Uygulama performansını ve kullanıcı deneyimini geliştirme</li>
</ul>
<p><strong>Verilerinizi reklam, profilleme veya pazarlama amacıyla kullanmayız.</strong></p>
<hr>
<h2>4. Veri Güvenliği</h2>
<p>Verilerinizin güvenliği bizim için önceliklidir:</p>
<h3>4.1 Teknik Güvenlik Önlemleri</h3>
<ul>
<li><strong>İletişim şifreleme:</strong> Tüm veri iletişimi HTTPS/TLS ile şifrelenir</li>
<li><strong>Güvenli kimlik doğrulama:</strong> Supabase Auth altyapısı kullanılır (JWT tabanlı)</li>
<li><strong>Row Level Security (RLS):</strong> Her kullanıcı yalnızca kendi verilerine erişebilir; başka kullanıcıların verilerine erişim veritabanı düzeyinde engellenir</li>
<li><strong>Şifre güvenliği:</strong> Şifreler bcrypt ile hash&#39;lenerek saklanır</li>
<li><strong>Abonelik güvenliği:</strong> Google Play satın almaları, hesap sahipliği doğrulaması (obfuscated account ID) ile kontrol edilir</li>
</ul>
<h3>4.2 Erişim Kontrolü</h3>
<ul>
<li>Veritabanına doğrudan erişim kapalıdır</li>
<li>Tüm veri işlemleri güvenli RPC fonksiyonları üzerinden gerçekleşir</li>
<li>Her istek kullanıcı kimlik doğrulaması (JWT) gerektirir</li>
<li>Logo yükleme işlemleri kullanıcıya özel klasörlerde ve güvenli depolama politikalarıyla gerçekleşir</li>
</ul>
<hr>
<h2>5. Veri Paylaşımı</h2>
<p>Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla <strong>paylaşmayız</strong>:</p>
<h3>5.1 Hizmet Sağlayıcılar</h3>
<ul>
<li><strong>Supabase:</strong> Veritabanı, kimlik doğrulama, dosya depolama (logo) ve sunucu taraflı fonksiyonlar</li>
<li><strong>Google Play:</strong> Uygulama dağıtımı, güncelleme ve abonelik ödeme işlemleri</li>
<li><strong>Google ML Kit:</strong> Barkod tarama (tüm işlemler cihaz üzerinde gerçekleşir, Google sunucularına veri gönderilmez)</li>
<li><strong>Google Sign-In:</strong> İsteğe bağlı Google ile giriş kimlik doğrulaması (Google Kimlik Hizmetleri üzerinden)</li>
</ul>
<h3>5.2 Fiş Paylaşımı</h3>
<p>İşlem fişlerini PDF formatında paylaştığınızda, bu paylaşım cihazınızın paylaşım özelliği üzerinden gerçekleşir. Paylaştığınız kişiler ve platformlar sizin tercihinize bağlıdır.</p>
<h3>5.3 Yasal Gereklilikler</h3>
<p>Yasal zorunluluk halinde veya mahkeme kararıyla bilgileriniz ilgili makamlara açıklanabilir.</p>
<hr>
<h2>6. Veri Saklama ve Silme</h2>
<ul>
<li><strong>Aktif hesaplar:</strong> Hesabınız aktif olduğu sürece verileriniz saklanır</li>
<li><strong>Hesap silme:</strong> Uygulama içinden hesabınızı silebilirsiniz. Hesap silindiğinde; tüm iş verileriniz (ürünler, müşteriler, tedarikçiler, işlemler), firma bilgileriniz, fiş ayarlarınız, abonelik kaydınız ve varsa firma logonuz kalıcı olarak silinir.</li>
<li><strong>Tekil kayıt silme:</strong> Ürün, müşteri, tedarikçi ve işlem kayıtlarını tek tek silebilirsiniz; silinen kayıtlar geri alınamaz</li>
<li><strong>Yerel veriler:</strong> Hesap silme veya çıkış yapma durumunda cihazınızdaki önbellek verileri temizlenir; cihaza bağlı tercihler (tema, dil, yazıcı ayarları) korunur</li>
</ul>
<hr>
<h2>7. Kullanıcı Hakları</h2>
<h3>7.1 Erişim Hakkı</h3>
<p>Uygulama içinden tüm verilerinize erişebilirsiniz.</p>
<h3>7.2 Düzeltme Hakkı</h3>
<p>Ürün, müşteri, tedarikçi, işlem ve firma bilgilerinizi istediğiniz zaman düzenleyebilirsiniz.</p>
<h3>7.3 Silme Hakkı</h3>
<ul>
<li>Tek tek kayıtları silebilirsiniz</li>
<li>Hesabınızı tamamen silebilirsiniz (tüm veriler kalıcı olarak silinir)</li>
</ul>
<h3>7.4 Parola Değiştirme</h3>
<p>Hesap ayarlarından parolanızı değiştirebilirsiniz. Google ile giriş yapan kullanıcılar parola yönetimi için Google hesap ayarlarını kullanır.</p>
<h3>7.5 İtiraz ve Başvuru Hakkı</h3>
<p>Kişisel verilerinizin işlenmesine ilişkin talepleriniz için aşağıdaki iletişim bilgileri üzerinden bize ulaşabilirsiniz.</p>
<hr>
<h2>8. Çocukların Gizliliği</h2>
<p>Stocky, 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki çocuklardan kişisel bilgi toplamayız. Eğer 13 yaşın altında bir çocuğun bize kişisel bilgi sağladığını fark ederseniz, lütfen bizimle iletişime geçin; ilgili veriler derhal silinecektir.</p>
<hr>
<h2>9. Üçüncü Taraf Hizmetler</h2>
<h3>9.1 Supabase</h3>
<p>Veritabanı, kimlik doğrulama, dosya depolama ve sunucu taraflı fonksiyonlar için Supabase kullanılmaktadır.</p>
<ul>
<li>Supabase Gizlilik Politikası: <a href="https://supabase.com/privacy">https://supabase.com/privacy</a></li>
</ul>
<h3>9.2 Google ML Kit</h3>
<p>Barkod tarama için Google ML Kit kullanılmaktadır. Barkod işleme tamamen cihaz üzerinde gerçekleşir ve Google sunucularına veri gönderilmez.</p>
<h3>9.3 Google Play Hizmetleri</h3>
<p>Uygulama dağıtımı, güncelleme ve uygulama içi satın alma (abonelik) işlemleri için Google Play hizmetleri kullanılmaktadır.</p>
<ul>
<li>Google Gizlilik Politikası: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></li>
</ul>
<h3>9.4 Google Kimlik Hizmetleri</h3>
<p>İsteğe bağlı Google ile giriş özelliği için Android Credential Manager ve Google Identity Services kullanılmaktadır.</p>
<hr>
<h2>10. Analitik ve Takip</h2>
<p>Stocky, herhangi bir üçüncü taraf analitik veya takip aracı (Firebase Analytics, Crashlytics, Amplitude vb.) <strong>kullanmamaktadır</strong>. Kullanıcı davranışlarınız izlenmez, profillenmez veya reklam amacıyla kullanılmaz.</p>
<hr>
<h2>11. Politika Değişiklikleri</h2>
<p>Bu Gizlilik Politikası&#39;nı zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda:</p>
<ul>
<li>Politikanın &quot;Son Güncelleme&quot; tarihini değiştiririz</li>
<li>Uygulama mağazası açıklamasında değişiklikleri belirtiriz</li>
</ul>
<p>Uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.</p>
<hr>
<h2>12. İletişim</h2>
<p>Gizlilik politikamız veya verilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:</p>
<ul>
<li><strong>E-posta:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a></li>
<li><strong>Geliştirici:</strong> Swanky</li>
</ul>
<hr>
<h2>13. Yasal Dayanak</h2>
<p>Bu uygulama aşağıdaki düzenlemelere uygun olarak geliştirilmiştir:</p>
<ul>
<li>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)</li>
<li>Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR)</li>
<li>Google Play Geliştirici Politikaları</li>
</ul>
<hr>
<p><strong>Stocky&#39;yi kullandığınız için teşekkür ederiz.</strong></p>
`,
        termsHtml: `<p><strong>Son Güncelleme:</strong> 5 Mart 2026</p>
<p>Bu Kullanım Koşulları (&quot;Sözleşme&quot;), Swanky (&quot;biz&quot;, &quot;bizim&quot;) tarafından geliştirilen Stocky stok takip uygulamasının (&quot;Uygulama&quot;) kullanımını düzenlemektedir. Uygulamayı indirerek, yükleyerek veya kullanarak bu Sözleşme&#39;nin tüm hükümlerini kabul etmiş sayılırsınız.</p>
<hr>
<h2>1. Tanımlar</h2>
<ul>
<li><strong>Uygulama:</strong> Google Play üzerinden dağıtılan Stocky mobil uygulaması</li>
<li><strong>Kullanıcı:</strong> Uygulamayı indiren, yükleyen veya kullanan gerçek veya tüzel kişi</li>
<li><strong>Hizmet:</strong> Uygulama aracılığıyla sunulan stok takibi, müşteri/tedarikçi yönetimi, işlem kaydı, fiş oluşturma ve ilgili tüm işlevler</li>
<li><strong>Premium:</strong> Ücretli abonelik planı kapsamında sunulan ek özellikler</li>
<li><strong>İçerik:</strong> Kullanıcı tarafından Uygulama&#39;ya girilen tüm veriler (ürünler, müşteriler, tedarikçiler, işlemler, firma bilgileri vb.)</li>
</ul>
<hr>
<h2>2. Hesap Oluşturma ve Güvenlik</h2>
<h3>2.1 Hesap Gereksinimleri</h3>
<ul>
<li>Uygulamayı kullanmak için geçerli bir e-posta adresiyle hesap oluşturmanız veya Google hesabınızla giriş yapmanız gerekmektedir</li>
<li>13 yaşından küçük kişilerin Uygulama&#39;yı kullanması yasaktır</li>
<li>Hesap bilgilerinizin doğruluğundan siz sorumlusunuz</li>
</ul>
<h3>2.2 Hesap Güvenliği</h3>
<ul>
<li>Hesabınızın güvenliğinden siz sorumlusunuz</li>
<li>Şifrenizi gizli tutmalı ve üçüncü kişilerle paylaşmamalısınız</li>
<li>Hesabınızda yetkisiz erişim fark ederseniz derhal bize bildirmelisiniz</li>
<li>Hesabınız üzerinden gerçekleştirilen tüm işlemlerden siz sorumlusunuz</li>
</ul>
<hr>
<h2>3. Hizmetin Kullanımı</h2>
<h3>3.1 Kabul Edilebilir Kullanım</h3>
<p>Uygulama&#39;yı yalnızca aşağıdaki amaçlarla kullanabilirsiniz:</p>
<ul>
<li>Stok ve envanter takibi</li>
<li>Müşteri ve tedarikçi yönetimi</li>
<li>Satış, alış, iade, tahsilat ve tediye işlemlerinin kaydı</li>
<li>Fiş/fatura oluşturma ve yazdırma</li>
<li>Firma bilgilerinin yönetimi</li>
</ul>
<h3>3.2 Yasak Kullanımlar</h3>
<p>Aşağıdaki kullanımlar kesinlikle yasaktır:</p>
<ul>
<li>Uygulamayı yasa dışı faaliyetler için kullanmak</li>
<li>Uygulamanın kaynak kodunu tersine mühendislik, decompile veya disassemble etmek</li>
<li>Uygulamanın güvenlik mekanizmalarını aşmaya veya manipüle etmeye çalışmak</li>
<li>Başka kullanıcıların verilerine yetkisiz erişim sağlamaya çalışmak</li>
<li>Uygulamayı veya sunucuları aşırı yükleyecek şekilde otomatik sorgular göndermek</li>
<li>Uygulamayı kopyalamak, dağıtmak veya ticari olarak yeniden satmak</li>
<li>Uygulama adını, markasını veya logosunu izinsiz kullanmak</li>
</ul>
<hr>
<h2>4. Kullanıcı İçeriği ve Verileri</h2>
<h3>4.1 İçerik Sahipliği</h3>
<ul>
<li>Uygulamaya girdiğiniz tüm iş verileri (ürünler, müşteriler, tedarikçiler, işlemler vb.) size aittir</li>
<li>Biz bu veriler üzerinde yalnızca size Hizmet sunmak amacıyla sınırlı bir kullanım hakkına sahibiz</li>
</ul>
<h3>4.2 İçerik Sorumluluğu</h3>
<ul>
<li>Girdiğiniz verilerin doğruluğundan, yasallığından ve güncelliğinden siz sorumlusunuz</li>
<li>İşlem kayıtlarınızın resmi muhasebe belgesi niteliği taşıyıp taşımadığını yerel mevzuatınıza göre değerlendirmelisiniz</li>
<li>Uygulama tarafından oluşturulan fişler, yasal fatura yerine geçmez; resmi fatura gereksinimleri için yetkili yazılımları kullanmanız önerilir</li>
</ul>
<h3>4.3 Veri Yedekleme</h3>
<ul>
<li>Verileriniz Supabase sunucularında saklanır</li>
<li>Biz makul teknik önlemler almakla birlikte, kritik iş verilerinizin yedeklenmesinden nihai olarak siz sorumlusunuz</li>
</ul>
<hr>
<h2>5. Abonelik ve Ödeme</h2>
<h3>5.1 Ücretsiz Plan</h3>
<p>Uygulama, temel özellikleri ücretsiz olarak sunar. Ücretsiz planda bazı kısıtlamalar (ürün sayısı, müşteri sayısı, tedarikçi sayısı, fiş çıktı limiti vb.) uygulanır.</p>
<h3>5.2 Premium Abonelik</h3>
<ul>
<li>Premium abonelik aylık veya yıllık olarak Google Play üzerinden satın alınır</li>
<li>Tüm ödeme işlemleri Google Play altyapısı üzerinden gerçekleşir</li>
<li>Fiyatlar Google Play mağaza sayfasında belirtilir ve vergiler dahil olabilir</li>
</ul>
<h3>5.3 Yenileme ve İptal</h3>
<ul>
<li>Abonelikler, iptal edilmediği sürece otomatik olarak yenilenir</li>
<li>İptal işlemi Google Play ayarlarından yapılır</li>
<li>İptal edilen abonelik, mevcut dönem sonuna kadar aktif kalır; dönem sonunda ücretsiz plana düşürülür</li>
<li>Premium özelliklere erişim (fazla ürün, branding kaldırma vb.) ücretsiz plana geçişle birlikte kısıtlanır</li>
</ul>
<h3>5.4 İade</h3>
<ul>
<li>İade talepleri Google Play iade politikasına tabidir</li>
<li>İade onaylandığında abonelik anında iptal edilir ve ücretsiz plana düşürülür</li>
</ul>
<hr>
<h2>6. Fikri Mülkiyet</h2>
<h3>6.1 Uygulama Hakları</h3>
<ul>
<li>Uygulama&#39;nın tasarımı, kaynak kodu, logosu, adı ve tüm bileşenleri Swanky&#39;ye aittir</li>
<li>Size yalnızca Uygulama&#39;yı kişisel/ticari stok takibi amacıyla kullanmak üzere sınırlı, geri alınabilir, münhasır olmayan bir lisans verilmektedir</li>
</ul>
<h3>6.2 Stocky Markası</h3>
<ul>
<li>&quot;Stocky&quot; adı ve logosu Swanky&#39;nin ticari markasıdır</li>
<li>Ücretsiz kullanıcıların fişlerinde &quot;Powered by Stocky&quot; markası görünür</li>
<li>Premium kullanıcılar bu markayı gizleme seçeneğine sahiptir</li>
</ul>
<hr>
<h2>7. Hizmet Düzeyi ve Sınırlamalar</h2>
<h3>7.1 Hizmet Sunumu</h3>
<ul>
<li>Uygulamayı makul düzeyde erişilebilir ve işlevsel tutmak için çaba gösteririz</li>
<li>Bakım, güncelleme veya beklenmedik teknik sorunlar nedeniyle hizmet kesintileri yaşanabilir</li>
<li>Planlı bakım çalışmaları için önceden bildirim yapılmaya çalışılır</li>
</ul>
<h3>7.2 Garanti Reddi</h3>
<p>Uygulama &quot;olduğu gibi&quot; ve &quot;mevcut haliyle&quot; sunulmaktadır. Aşağıdaki konularda herhangi bir garanti verilmemektedir:</p>
<ul>
<li>Hizmetin kesintisiz veya hatasız olacağı</li>
<li>Uygulamanın belirli bir amaca uygunluğu</li>
<li>Veri kaybının hiçbir koşulda yaşanmayacağı</li>
<li>Üçüncü taraf hizmetlerinin (Supabase, Google Play) sürekli erişilebilir olacağı</li>
</ul>
<h3>7.3 Sorumluluk Sınırlaması</h3>
<p>Yürürlükteki yasaların izin verdiği azami ölçüde:</p>
<ul>
<li>Uygulamanın kullanımından veya kullanılamamasından kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu değiliz</li>
<li>Veri kaybı, iş kaybı, gelir kaybı veya beklenen tasarruf kaybından kaynaklanan zararlardan sorumlu değiliz</li>
<li>Toplam sorumluluğumuz, son 12 ayda bize ödediğiniz tutarla sınırlıdır</li>
</ul>
<hr>
<h2>8. Hesap Askıya Alma ve Sonlandırma</h2>
<h3>8.1 Kullanıcı Tarafından</h3>
<ul>
<li>Hesabınızı istediğiniz zaman uygulama içinden silebilirsiniz</li>
<li>Hesap silme işlemi geri alınamaz; tüm verileriniz kalıcı olarak silinir</li>
</ul>
<h3>8.2 Tarafımızca</h3>
<p>Aşağıdaki durumlarda hesabınızı askıya alabilir veya sonlandırabiliriz:</p>
<ul>
<li>Bu Sözleşme&#39;nin ihlali</li>
<li>Yasadışı faaliyet şüphesi</li>
<li>Diğer kullanıcılara veya sisteme zarar veren davranışlar</li>
<li>Mahkeme kararı veya yasal zorunluluk</li>
</ul>
<hr>
<h2>9. Değişiklikler</h2>
<h3>9.1 Sözleşme Değişiklikleri</h3>
<ul>
<li>Bu Sözleşme&#39;yi zaman zaman güncelleyebiliriz</li>
<li>Önemli değişikliklerde &quot;Son Güncelleme&quot; tarihini değiştiririz</li>
<li>Uygulamayı kullanmaya devam etmeniz, güncellenmiş Sözleşme&#39;yi kabul ettiğiniz anlamına gelir</li>
</ul>
<h3>9.2 Hizmet Değişiklikleri</h3>
<ul>
<li>Uygulamanın özelliklerini ekleme, değiştirme veya kaldırma hakkımız saklıdır</li>
<li>Ücretsiz ve premium plan kapsamındaki özellikleri değiştirme hakkımız saklıdır</li>
</ul>
<hr>
<h2>10. Uyuşmazlık Çözümü</h2>
<ul>
<li>Bu Sözleşme Türkiye Cumhuriyeti yasalarına tabidir</li>
<li>Uyuşmazlık halinde öncelikle dostane çözüm aranacaktır</li>
<li>Çözülemeyen uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri yetkilidir</li>
</ul>
<hr>
<h2>11. Gizlilik</h2>
<p>Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi için <a href="PRIVACY_POLICY.md">Gizlilik Politikamızı</a> inceleyiniz.</p>
<hr>
<h2>12. İletişim</h2>
<p>Bu Sözleşme ile ilgili sorularınız için:</p>
<ul>
<li><strong>E-posta:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a></li>
<li><strong>Geliştirici:</strong> Swanky</li>
</ul>
<hr>
<h2>13. Genel Hükümler</h2>
<ul>
<li>Bu Sözleşme&#39;nin herhangi bir hükmünün geçersiz sayılması, diğer hükümlerin geçerliliğini etkilemez</li>
<li>Bu Sözleşme, taraflar arasındaki konuya ilişkin tam ve eksiksiz anlaşmayı oluşturur</li>
<li>Herhangi bir hakkımızı kullanmamamız, o haktan feragat ettiğimiz anlamına gelmez</li>
</ul>
<hr>
<p><strong>Stocky&#39;yi kullandığınız için teşekkür ederiz.</strong></p>
`,
        backLink: "← Ana Sayfaya Dön",
        privacyTitle: "Stocky Gizlilik Politikası",
        termsTitle: "Stocky Kullanıcı Sözleşmesi"
    },
    en: {
        privacyHtml: `<p><strong>Last Updated:</strong> March 5, 2026 | <strong>Version:</strong> 1.1</p>
<p>Stocky (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains what information is collected when you use the Stocky inventory management application, how it is used, and how it is protected.</p>
<hr>
<h2>1. Information We Collect</h2>
<h3>1.1 Account Information</h3>
<p>You need to create an account to use the application. The following information is collected during this process:</p>
<ul>
<li><strong>Email address:</strong> For account creation, authentication, and password reset</li>
<li><strong>Password:</strong> Stored securely in hashed form (bcrypt); never stored as plain text</li>
<li><strong>Google account information (optional):</strong> If you sign in with Google, the email address and authentication token provided by Google are used. We do not have access to your Google account password.</li>
</ul>
<h3>1.2 Business Data</h3>
<p>All business data you enter within the app is stored on our servers:</p>
<ul>
<li><strong>Product information:</strong> Product name, barcode, stock quantity, purchase/sale prices, tax rates, unit, product descriptions</li>
<li><strong>Customer information:</strong> Name, phone, email, address, balance, notes</li>
<li><strong>Supplier information:</strong> Company name, contact details, tax number, IBAN, bank details, address, notes</li>
<li><strong>Transaction records:</strong> Sales, purchases, returns, collections, and payment transactions; product items, discounts, payment method, and date information</li>
</ul>
<h3>1.3 Company Information</h3>
<p>Information stored for display on receipts/invoices:</p>
<ul>
<li>Company name, address, phone, email, website</li>
<li>Tax number, tax office</li>
<li>Company logo (uploaded to Supabase Storage)</li>
</ul>
<h3>1.4 Subscription and Payment Information</h3>
<ul>
<li><strong>Subscription status:</strong> Plan type (free/monthly/yearly), expiration date, receipt print counter</li>
<li><strong>Purchase token:</strong> A token generated by Google Play Billing, used for subscription verification</li>
<li>Your credit card or payment information is <strong>not collected or stored</strong> by us; all payment transactions are processed through the Google Play infrastructure</li>
</ul>
<h3>1.5 Receipt Settings</h3>
<ul>
<li>Paper width, auto-print preference</li>
<li>Information display preferences for receipts (company name, logo, address, phone, email, website, tax info)</li>
<li>Custom header and footer texts</li>
<li>Stocky branding visibility preference (premium feature)</li>
</ul>
<h3>1.6 Data Stored on Device</h3>
<p>Some preferences are stored only on your device (SharedPreferences) and are not sent to our servers:</p>
<ul>
<li>Theme preference (light/dark/system)</li>
<li>Language preference</li>
<li>Barcode scanner sound and vibration settings</li>
<li>Bluetooth printer connection details (MAC address, device name)</li>
<li>User settings, company info, and receipt settings cache (for fast access)</li>
</ul>
<h3>1.7 User Settings</h3>
<p>The following business preferences are stored on our servers:</p>
<ul>
<li>Default tax rate</li>
<li>Prices include tax format</li>
<li>Currency</li>
<li>Overselling permission setting</li>
</ul>
<hr>
<h2>2. Device Permissions and Their Purposes</h2>
<h3>2.1 Camera Access</h3>
<p>Camera access is requested for the barcode scanning feature:</p>
<ul>
<li>No photos or videos are recorded</li>
<li>Camera footage is not sent to our servers</li>
<li>Barcode scanning is performed entirely on-device (Google ML Kit)</li>
</ul>
<h3>2.2 Contacts Access (Optional)</h3>
<p>When adding customers or suppliers, you can select contacts from your phone&#39;s contact list:</p>
<ul>
<li>This feature is completely optional</li>
<li>Your contact data is not sent to our servers</li>
<li>Only the selected contact&#39;s information (name, phone, email, address) is transferred to the relevant form</li>
</ul>
<h3>2.3 Bluetooth Access</h3>
<p>Bluetooth permissions are requested for connecting to thermal printers:</p>
<ul>
<li>Used solely for communicating with the printer device</li>
<li>Device information collected via Bluetooth (printer name, MAC address) is stored only on your device and is not sent to our servers</li>
</ul>
<h3>2.4 Internet and Network State</h3>
<ul>
<li>Used for data synchronization, authentication, and subscription verification</li>
</ul>
<h3>2.5 Vibration</h3>
<ul>
<li>Used for barcode scanning feedback</li>
</ul>
<table>
<thead>
<tr>
<th>Permission</th>
<th>Purpose</th>
<th>Required?</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Internet</strong></td>
<td>Data synchronization and authentication</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Network State</strong></td>
<td>Offline/online status check</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Camera</strong></td>
<td>Barcode scanning</td>
<td>No</td>
</tr>
<tr>
<td><strong>Contacts</strong></td>
<td>Transfer contact info to forms</td>
<td>No</td>
</tr>
<tr>
<td><strong>Bluetooth</strong></td>
<td>Thermal printer connection</td>
<td>No</td>
</tr>
<tr>
<td><strong>Vibration</strong></td>
<td>Barcode scanning feedback</td>
<td>No</td>
</tr>
</tbody></table>
<hr>
<h2>3. How We Use Information</h2>
<p>We use the collected information for the following purposes:</p>
<ul>
<li><strong>Service delivery:</strong> Inventory tracking, customer/supplier management, sales/purchase transactions, and receipt generation</li>
<li><strong>Account management:</strong> Authentication, account security, and password reset</li>
<li><strong>Data synchronization:</strong> Synchronizing your data with the server</li>
<li><strong>Subscription management:</strong> Premium plan verification, receipt quota tracking</li>
<li><strong>Receipt generation:</strong> Creating PDF and thermal printer receipts using your transaction data and company information</li>
<li><strong>Service improvement:</strong> Enhancing app performance and user experience</li>
</ul>
<p><strong>We do not use your data for advertising, profiling, or marketing purposes.</strong></p>
<hr>
<h2>4. Data Security</h2>
<p>Your data security is our priority:</p>
<h3>4.1 Technical Security Measures</h3>
<ul>
<li><strong>Communication encryption:</strong> All data communication is encrypted with HTTPS/TLS</li>
<li><strong>Secure authentication:</strong> Supabase Auth infrastructure is used (JWT-based)</li>
<li><strong>Row Level Security (RLS):</strong> Each user can only access their own data; access to other users&#39; data is blocked at the database level</li>
<li><strong>Password security:</strong> Passwords are hashed with bcrypt before storage</li>
<li><strong>Subscription security:</strong> Google Play purchases are verified with account ownership validation (obfuscated account ID)</li>
</ul>
<h3>4.2 Access Control</h3>
<ul>
<li>Direct database access is disabled</li>
<li>All data operations are performed through secure RPC functions</li>
<li>Every request requires user authentication (JWT)</li>
<li>Logo uploads are stored in user-specific folders with secure storage policies</li>
</ul>
<hr>
<h2>5. Data Sharing</h2>
<p>We do <strong>not share</strong> your personal data with third parties except in the following cases:</p>
<h3>5.1 Service Providers</h3>
<ul>
<li><strong>Supabase:</strong> Database, authentication, file storage (logo), and server-side functions</li>
<li><strong>Google Play:</strong> App distribution, updates, and subscription payment processing</li>
<li><strong>Google ML Kit:</strong> Barcode scanning (all processing occurs on-device, no data is sent to Google servers)</li>
<li><strong>Google Sign-In:</strong> Optional Google sign-in authentication (via Google Identity Services)</li>
</ul>
<h3>5.2 Receipt Sharing</h3>
<p>When you share transaction receipts in PDF format, this sharing occurs through your device&#39;s share functionality. The recipients and platforms you share with are your choice.</p>
<h3>5.3 Legal Requirements</h3>
<p>Your information may be disclosed to relevant authorities in case of legal obligation or court order.</p>
<hr>
<h2>6. Data Retention and Deletion</h2>
<ul>
<li><strong>Active accounts:</strong> Your data is retained as long as your account is active</li>
<li><strong>Account deletion:</strong> You can delete your account from within the app. When your account is deleted, all your business data (products, customers, suppliers, transactions), company information, receipt settings, subscription records, and company logo (if any) are permanently deleted.</li>
<li><strong>Individual record deletion:</strong> You can delete product, customer, supplier, and transaction records individually; deleted records cannot be recovered</li>
<li><strong>Local data:</strong> Upon account deletion or logout, cached data on your device is cleared; device-specific preferences (theme, language, printer settings) are preserved</li>
</ul>
<hr>
<h2>7. User Rights</h2>
<h3>7.1 Right to Access</h3>
<p>You can access all your data within the app.</p>
<h3>7.2 Right to Rectification</h3>
<p>You can edit your product, customer, supplier, transaction, and company information at any time.</p>
<h3>7.3 Right to Erasure</h3>
<ul>
<li>You can delete individual records</li>
<li>You can completely delete your account (all data will be permanently deleted)</li>
</ul>
<h3>7.4 Password Change</h3>
<p>You can change your password from account settings. Users who sign in with Google use Google account settings for password management.</p>
<h3>7.5 Right to Object and Apply</h3>
<p>You can contact us through the contact information below for requests regarding the processing of your personal data.</p>
<hr>
<h2>8. Children&#39;s Privacy</h2>
<p>Stocky is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child under 13 has provided us with personal information, please contact us and the relevant data will be deleted immediately.</p>
<hr>
<h2>9. Third-Party Services</h2>
<h3>9.1 Supabase</h3>
<p>Supabase is used for database, authentication, file storage, and server-side functions.</p>
<ul>
<li>Supabase Privacy Policy: <a href="https://supabase.com/privacy">https://supabase.com/privacy</a></li>
</ul>
<h3>9.2 Google ML Kit</h3>
<p>Google ML Kit is used for barcode scanning. Barcode processing is performed entirely on-device and no data is sent to Google servers.</p>
<h3>9.3 Google Play Services</h3>
<p>Google Play services are used for app distribution, updates, and in-app purchases (subscriptions).</p>
<ul>
<li>Google Privacy Policy: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></li>
</ul>
<h3>9.4 Google Identity Services</h3>
<p>Android Credential Manager and Google Identity Services are used for the optional Google sign-in feature.</p>
<hr>
<h2>10. Analytics and Tracking</h2>
<p>Stocky does <strong>not use</strong> any third-party analytics or tracking tools (Firebase Analytics, Crashlytics, Amplitude, etc.). Your user behavior is not monitored, profiled, or used for advertising purposes.</p>
<hr>
<h2>11. Policy Changes</h2>
<p>We may update this Privacy Policy from time to time. In case of significant changes:</p>
<ul>
<li>We will update the &quot;Last Updated&quot; date of the policy</li>
<li>We will note the changes in the app store description</li>
</ul>
<p>Your continued use of the app means you accept the updated policy.</p>
<hr>
<h2>12. Contact Us</h2>
<p>For questions about our privacy policy or your data, you can contact us:</p>
<ul>
<li><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a></li>
<li><strong>Developer:</strong> Swanky</li>
</ul>
<hr>
<h2>13. Legal Basis</h2>
<p>This application has been developed in compliance with:</p>
<ul>
<li>Turkish Personal Data Protection Law (KVKK) No. 6698</li>
<li>European Union General Data Protection Regulation (GDPR)</li>
<li>Google Play Developer Policies</li>
</ul>
<hr>
<p><strong>Thank you for using Stocky.</strong></p>
`,
        termsHtml: `<p><strong>Last Updated:</strong> March 5, 2026</p>
<p>These Terms of Service (&quot;Agreement&quot;) govern the use of the Stocky inventory management application (&quot;App&quot;) developed by Swanky (&quot;we&quot;, &quot;our&quot;). By downloading, installing, or using the App, you agree to all provisions of this Agreement.</p>
<hr>
<h2>1. Definitions</h2>
<ul>
<li><strong>App:</strong> The Stocky mobile application distributed via Google Play</li>
<li><strong>User:</strong> Any individual or legal entity who downloads, installs, or uses the App</li>
<li><strong>Service:</strong> All functions provided through the App, including inventory tracking, customer/supplier management, transaction recording, receipt generation, and related features</li>
<li><strong>Premium:</strong> Additional features offered under a paid subscription plan</li>
<li><strong>Content:</strong> All data entered by the User into the App (products, customers, suppliers, transactions, company information, etc.)</li>
</ul>
<hr>
<h2>2. Account Creation and Security</h2>
<h3>2.1 Account Requirements</h3>
<ul>
<li>You must create an account with a valid email address or sign in with your Google account to use the App</li>
<li>Persons under the age of 13 are prohibited from using the App</li>
<li>You are responsible for the accuracy of your account information</li>
</ul>
<h3>2.2 Account Security</h3>
<ul>
<li>You are responsible for the security of your account</li>
<li>You must keep your password confidential and not share it with third parties</li>
<li>You must notify us immediately if you notice unauthorized access to your account</li>
<li>You are responsible for all activities carried out through your account</li>
</ul>
<hr>
<h2>3. Use of Service</h2>
<h3>3.1 Acceptable Use</h3>
<p>You may use the App only for the following purposes:</p>
<ul>
<li>Stock and inventory tracking</li>
<li>Customer and supplier management</li>
<li>Recording sales, purchases, returns, collections, and payment transactions</li>
<li>Creating and printing receipts/invoices</li>
<li>Managing company information</li>
</ul>
<h3>3.2 Prohibited Uses</h3>
<p>The following uses are strictly prohibited:</p>
<ul>
<li>Using the App for illegal activities</li>
<li>Reverse engineering, decompiling, or disassembling the App&#39;s source code</li>
<li>Attempting to bypass or manipulate the App&#39;s security mechanisms</li>
<li>Attempting to gain unauthorized access to other users&#39; data</li>
<li>Sending automated queries that would overload the App or servers</li>
<li>Copying, distributing, or commercially reselling the App</li>
<li>Using the App&#39;s name, brand, or logo without permission</li>
</ul>
<hr>
<h2>4. User Content and Data</h2>
<h3>4.1 Content Ownership</h3>
<ul>
<li>All business data you enter into the App (products, customers, suppliers, transactions, etc.) belongs to you</li>
<li>We hold only a limited right to use this data solely for the purpose of providing the Service to you</li>
</ul>
<h3>4.2 Content Responsibility</h3>
<ul>
<li>You are responsible for the accuracy, legality, and currency of the data you enter</li>
<li>You should evaluate whether your transaction records constitute official accounting documents according to your local regulations</li>
<li>Receipts generated by the App do not substitute for legal invoices; it is recommended that you use authorized software for official invoice requirements</li>
</ul>
<h3>4.3 Data Backup</h3>
<ul>
<li>Your data is stored on Supabase servers</li>
<li>While we take reasonable technical measures, you are ultimately responsible for backing up your critical business data</li>
</ul>
<hr>
<h2>5. Subscription and Payment</h2>
<h3>5.1 Free Plan</h3>
<p>The App offers basic features for free. Certain limitations apply to the free plan (product count, customer count, supplier count, receipt print limit, etc.).</p>
<h3>5.2 Premium Subscription</h3>
<ul>
<li>Premium subscription can be purchased monthly or yearly through Google Play</li>
<li>All payment transactions are processed through Google Play infrastructure</li>
<li>Prices are displayed on the Google Play store page and may include taxes</li>
</ul>
<h3>5.3 Renewal and Cancellation</h3>
<ul>
<li>Subscriptions automatically renew unless cancelled</li>
<li>Cancellation is done through Google Play settings</li>
<li>A cancelled subscription remains active until the end of the current period; at the end of the period, it is downgraded to the free plan</li>
<li>Access to premium features (extra products, branding removal, etc.) is restricted upon transition to the free plan</li>
</ul>
<h3>5.4 Refunds</h3>
<ul>
<li>Refund requests are subject to Google Play&#39;s refund policy</li>
<li>When a refund is approved, the subscription is immediately cancelled and downgraded to the free plan</li>
</ul>
<hr>
<h2>6. Intellectual Property</h2>
<h3>6.1 App Rights</h3>
<ul>
<li>The design, source code, logo, name, and all components of the App belong to Swanky</li>
<li>You are granted a limited, revocable, non-exclusive license to use the App solely for personal/commercial inventory management purposes</li>
</ul>
<h3>6.2 Stocky Brand</h3>
<ul>
<li>The &quot;Stocky&quot; name and logo are trademarks of Swanky</li>
<li>&quot;Powered by Stocky&quot; branding appears on receipts of free users</li>
<li>Premium users have the option to hide this branding</li>
</ul>
<hr>
<h2>7. Service Level and Limitations</h2>
<h3>7.1 Service Delivery</h3>
<ul>
<li>We strive to keep the App reasonably accessible and functional</li>
<li>Service interruptions may occur due to maintenance, updates, or unexpected technical issues</li>
<li>We endeavor to provide advance notice for planned maintenance</li>
</ul>
<h3>7.2 Disclaimer of Warranties</h3>
<p>The App is provided &quot;as is&quot; and &quot;as available.&quot; No warranty is given regarding:</p>
<ul>
<li>That the Service will be uninterrupted or error-free</li>
<li>The App&#39;s fitness for a particular purpose</li>
<li>That data loss will never occur under any circumstances</li>
<li>That third-party services (Supabase, Google Play) will be continuously accessible</li>
</ul>
<h3>7.3 Limitation of Liability</h3>
<p>To the maximum extent permitted by applicable law:</p>
<ul>
<li>We are not liable for indirect, incidental, or consequential damages arising from the use or inability to use the App</li>
<li>We are not liable for damages arising from data loss, business loss, revenue loss, or loss of expected savings</li>
<li>Our total liability is limited to the amount you have paid us in the last 12 months</li>
</ul>
<hr>
<h2>8. Account Suspension and Termination</h2>
<h3>8.1 By User</h3>
<ul>
<li>You can delete your account at any time from within the App</li>
<li>Account deletion is irreversible; all your data will be permanently deleted</li>
</ul>
<h3>8.2 By Us</h3>
<p>We may suspend or terminate your account in the following cases:</p>
<ul>
<li>Violation of this Agreement</li>
<li>Suspicion of illegal activity</li>
<li>Behavior that harms other users or the system</li>
<li>Court order or legal obligation</li>
</ul>
<hr>
<h2>9. Changes</h2>
<h3>9.1 Agreement Changes</h3>
<ul>
<li>We may update this Agreement from time to time</li>
<li>We will update the &quot;Last Updated&quot; date for significant changes</li>
<li>Your continued use of the App means you accept the updated Agreement</li>
</ul>
<h3>9.2 Service Changes</h3>
<ul>
<li>We reserve the right to add, modify, or remove features of the App</li>
<li>We reserve the right to change the features included in free and premium plans</li>
</ul>
<hr>
<h2>10. Dispute Resolution</h2>
<ul>
<li>This Agreement is governed by the laws of the Republic of Turkey</li>
<li>In case of a dispute, an amicable resolution will be sought first</li>
<li>For unresolved disputes, the courts of the Republic of Turkey shall have jurisdiction</li>
</ul>
<hr>
<h2>11. Privacy</h2>
<p>For detailed information about how your personal data is collected, used, and protected, please review our <a href="PRIVACY_POLICY_EN.md">Privacy Policy</a>.</p>
<hr>
<h2>12. Contact Us</h2>
<p>For questions about this Agreement:</p>
<ul>
<li><strong>Email:</strong> <a href="mailto:swankysoftware@gmail.com">swankysoftware@gmail.com</a></li>
<li><strong>Developer:</strong> Swanky</li>
</ul>
<hr>
<h2>13. General Provisions</h2>
<ul>
<li>If any provision of this Agreement is deemed invalid, it shall not affect the validity of the remaining provisions</li>
<li>This Agreement constitutes the entire and complete agreement between the parties regarding the subject matter</li>
<li>Our failure to exercise any right shall not constitute a waiver of that right</li>
</ul>
<hr>
<p><strong>Thank you for using Stocky.</strong></p>
`,
        backLink: "← Back to Home",
        privacyTitle: "Stocky Privacy Policy",
        termsTitle: "Stocky Terms of Service"
    }
};

function applyStockyTranslations() {
    if (!window.i18n) return;
    const lang = i18n.getLang();
    const t = stockyTranslations[lang] || stockyTranslations.tr;

    const privacyContent = document.getElementById('privacyContentContainer');
    if (privacyContent) {
        privacyContent.innerHTML = t.privacyHtml;
        document.title = t.privacyTitle;
        const h1 = document.querySelector('article h1');
        if (h1) h1.textContent = t.privacyTitle;
    }

    const termsContent = document.getElementById('termsContentContainer');
    if (termsContent) {
        termsContent.innerHTML = t.termsHtml;
        document.title = t.termsTitle;
        const h1 = document.querySelector('article h1');
        if (h1) h1.textContent = t.termsTitle;
    }

    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.textContent = t.backLink;
    }

    // Re-init TOC to update headings correctly
    if (typeof initializeTOC === 'function') {
        const tocSidebar = document.querySelector('.toc-sidebar');
        if (tocSidebar) {
            const existingBtn = tocSidebar.querySelector('.download-btn-sidebar');
            tocSidebar.innerHTML = '';
            if (existingBtn) {
                if (lang === 'en') {
                    existingBtn.querySelector('span:last-child').textContent = 'Download Stocky';
                } else {
                    existingBtn.querySelector('span:last-child').textContent = "Stocky'yi İndir";
                }
                tocSidebar.appendChild(existingBtn);
            }
        }
        initializeTOC();
    }
}

window.addEventListener('langChanged', applyStockyTranslations);

document.addEventListener('DOMContentLoaded', () => {
    const checkI18n = setInterval(() => {
        if (window.i18n && window.i18n.translations) {
            clearInterval(checkI18n);
            applyStockyTranslations();
        }
    }, 50);
    setTimeout(() => {
        clearInterval(checkI18n);
        applyStockyTranslations();
    }, 1000);
});
