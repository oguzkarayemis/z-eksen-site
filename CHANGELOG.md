# z-eksen e-yayıncılık Değişiklik Kayıtları (Changelog)

## [2026-03-30]
- **Analitik Entegrasyonu**: Site istatistiklerinin takibi için Google Analytics (gtag.js) entegre edildi. Scriptlerin Astro derleme (build) sürecinden etkilenmeden doğrudan HTML'e basılması için `is:inline` direktifi `Layout.astro` dosyasında yer alan etiketlere uygulandı.

## [2026-03-19]
- **İçerik Mimarisi ve Dosya İsimlendirme Standartları**: Kitapların markdown dosyaları ve kapak görselleri dizideki sırasını ve yazar ismini içerecek şekilde bütüncül olarak yeniden adlandırıldı (Örn: `01-v.buterin-kriptofelsefe.md`, referans görsel: `01-vitalik-cover.jpg`). Eski rastgele isimlendirmeler iptal edildi.
- **Kitap Metinlerinin Felsefi Revizyonu**: Kataloğa eklenen ilk üç kitabın (Einstein, Buterin, Barnum) arka kapak/tanıtım metinleri, z-eksen'in Anti-Moloch, eleştirel baskı ve "dijital zanaatkârlık" vizyonunu yansıtacak biçimde, çok daha derinlikli bir tonla baştan aşağı yeniden yazıldı.
- **Manifesto ve Ana Sayfa Entegrasyonu**: Sitenin `manifesto.astro` sayfasındaki z-eksen manifestosu güçlü ve vurucu bir retorikle (Y ve X eksenlerindeki yüzeysel gürültüye karşı Z eksenindeki derinlik vurgusuyla) yeniden kaleme alındı. Yayınevinin "çeviri ve editörlük" prensipleri (Türkçenin organik sözdizimine sadakat) manifestoya doğrudan entegre edildi. Ana sayfa hero metni "Dijital Zanaatkârlık ve Derin Kavrayış" mottosuyla güncellenerek bu vizyonla uyumlu hale getirildi.
- **Astro Config (Zod) Güncellemesi**: İçerik şemasındaki (`config.ts`) `pubDate` ve `price` alanları metin girişlerini (örn. "yakında", "-") de destekleyecek şekilde esnetildi ve build hataları çözüldü.
- **Kitap Kartı (BookCard) Arayüz Standardı**: İçinde sınır çizgisi barındırmayan kapak görselleri sebebiyle metin ve görsel alanının birbirine girmemesi için `BookCard` bileşeninde kapak alanının altına standart bir CSS ayırıcı çizgisi (`border-bottom`) eklendi.
- **Google Play Bağlantısı**: Kitap detay sayfalarındaki (`[slug].astro`) satış butonu tıklanamaz hale getirilip "Yakında Google Play Books'ta" yazısıyla değiştirildi.
- **Diziler ve Vitrin**: Vitalik Buterin'in *Kriptofelsefe* metni `manset: true` ile anasayfada dev manşete çekildi. İçeriği henüz hazır olmayan "Modern Felsefe Dizisi" yayından geçici olarak kaldırılarak `draft` statüsüne alındı.

## [2026-03-12]
- **Bültene Abone Ol Butonu Optimizasyonu**: `Layout.astro` içerisinde hem header hem de footer kısmında yer alan bültene abone ol butonu, `paragraph.com/@z-eksen` adresine yönlendirilecek şekilde güncellendi.
- **Anasayfa Başlık Hiyerarşisi Optimizasyonu**: Anasayadaki manşetteki kitabın başlığı h1'den h2'ye alınarak SEO ve ekran okuyucular için optimize edildi.
- **Hero Manşet Optimizasyonu**: Ana sayfada (`index.astro`) manşet kitap görseli, `BookCard` bileşeniyle değiştirildi. Böylece manşet kitap görseli masaüstünde sola taşındı ve metin ondan sonra görünür oldu. Bu sayede mobilde manşetteki kitap görseli metnin üstüne taşınmış oldu.
- **Kitaplar Koleksiyonu Link Yapısı Optimizasyonu**: Kitap dosya isimleri yenilenerek sitedeki kitaplar koleksiyonu link yapısı güncellendi.
- **Header Logo Optimizasyonu**: Sitenin ana logosu (`Logo-ters.png`) `src/assets/images/` klasörüne taşındı ve `Layout.astro` içerisindeki standart `<img>` etiketi Astro'nun yerleşik `<Image />` bileşenine (webp formatı, `loading="eager"`) dönüştürülerek sayfa ilk yükleme performansı (LCP) artırıldı.
- **PageSpeed & SEO Optimizasyonu**: `Layout.astro` dosyasına eksik `description` meta etiketi eklendi. Sayfa başlıklarına varsayılan bir manifesto metni tanımlandı.
- **Site Haritası & Robots.txt**: `@astrojs/sitemap` entegrasyonu kurularak `astro.config.mjs` üzerinden `https://z-eksen.com` adresli site haritası oluşturuldu. Arama motorları için `public/robots.txt` dosyası eklendi.
- **Astro Image (WebP) Optimizasyonu**: Kapak görsellerinin Astro tarafından WebP formatında derlenip optimize edilebilmesi için `public/images/` dizinindeki tüm resimler referans `src/assets/images/` dizinine taşındı. `config.ts` şeması `image()` yardımcısıyla kullanıldı.
- **LCP ve Detay Sayfası Optimizasyonu**: Ana sayfadaki (`index.astro`) dev manşet görseli, arşivdeki listeleme kartları (`BookCard.astro`) ve kitapların tekil detay sayfalarındaki (`[slug].astro`) görseller Astro'nun yerleşik `<Image />` bileşeniyle değiştirildi (`format="webp"`, `eager/lazy loading`, boyutlandırma ve `fetchpriority` eklenerek PageSpeed hatasız hale getirildi).
- **İlgili Kitaplar Modülü**: Kitap detay sayfası (`[slug].astro`) sonuna, okuyucunun o kitapla aynı diziye (`dizi`) mensup diğer yayınları keşfedebileceği rastgele 4 kitaplık (4'lü grid) "Aynı Dizideki Diğer Kitaplarımız" öneri modülü eklendi.
- **Tipografi ve Okunabilirlik İyileştirmesi**: Tekil kitap sayfalarındaki (`[slug].astro`) içerik ve makale alanı, `Manifesto` sayfasındaki okunabilirlik standartlarına göre güncellendi. Metin satır aralıkları, paragraf boşlukları ve makale genişliği (`max-width: 720px`) ayarlanarak "dar/sıkışık" görünüm ortadan kaldırıldı; alıntı (blockquote) blokları merkezî/vurgulu hale getirildi.
- **Tipografi Ön Yükleme (Preload)**: Sayfa ilk açılışındaki FOUT problemlerini çözmek için `global.css` dosyasındaki Font Face ayarları `font-display: swap` olarak güncellendi ve eş zamanlı olarak `Layout.astro` içerisinde `<head>` kısmına `Cormorant Garamond` font dosyaları için `<link rel="preload">` tanımlamaları eklendi.
- Vitalik Buterin'in kitap adı ve kapak görseli (`public/images/vitalik-cover.jpg` ve `src/content/books/vitalik-secmeler.md`) yenilendi.

## [2026-03-11]
- **Manifesto ve Tipografi Güncellemesi**: Manifesto sayfasına ekibin "çeviri ve editörlük yaklaşımımız" vizyonu eklendi, yeni başlık sayfa tasarımına uyumlu olarak ortalandı. Okunabilirliği maksimize etmek için site genelindeki temel metin boyutu masaüstünde ve mobilde 1.2 kat (oranında) artırıldı, metin ağırlığı `600` (yarı kalın) seviyesine çekildi.
- Gelişmiş Tarayıcı Optimizasyonu: Fontların sayfa açılışında yarattığı FOUT (Flash of Unstyled Text) sıçramasını engellemek adına CSS `font-display` özelliği `swap` yerine `optional` olarak düzenlendi, ilk yüklemedeki metin "zıplaması" izole edildi.
- Üst Bilgi (Header) sosyal medya menüsüne "LinkedIn" bağlantısı, satıriçi (inline) SVG ikonuyla birlikte eklendi.
- Altbilgide (footer) yer alan Sosyal Medya ikonları (X ve Instagram) daha görünür olması amacıyla üst bilgiye (header), logo ile navigasyon menüsü arasına taşındı. Siyah arkaplanda daha şık durması için krem rengi ve hover durumunda kırmızı vurguya (Z-Eksen kırmızı) sahip özel SVG stil tanımlamaları yapıldı. Mobil görünümde (responsive) taşıma işlemi sonrası sola kayan ikonlar, masaüstü görünüme dokunulmadan `margin: auto` ve `justify-content: center` komutlarıyla tam olarak menünün üzerinde/altında ortalandı.
- Üst Bilgi (Header) tipografisi güçlendirildi: Ana logo yanındaki site başlığı ("z-eksen e-yayıncılık") ve navigasyon menüsündeki tüm bağlantılar (Kitaplar, Diziler, Manifesto) kalınlaştırılarak (font-weight: 700) görünürlükleri artırıldı.
- Fontlar yerelleştirildi: Z-eksen'in dış sunucu (Google Fonts) bağımlılığını tamamen ortadan kaldırmak ve tam gizlilik/hız sağlamak amacıyla `Cormorant Garamond` web fontunun woff2 dosyaları sunucuya (`public/fonts/`) indirilerek siteye yerleşik olarak gömüldü. Artık site hiçbir dış font kaynağına bağlanmıyor.
- Ana sayfadaki `Yayınlarımız` başlığı, sadeleştirme vizyonu doğrultusunda kaldırılarak hero metni ve editoryal vitrin arasındaki geçiş pürüzsüzleştirildi.
- Ana sayfaya "Dijital Zanaatkârlık ve Derin Kavrayış" başlığı ve alt başlık metnini içeren Hero tasarımı geri getirildi ve CSS stilleri düzeltildi.
- Zod şeması güncellendi: `books` koleksiyonuna `description` (string), `pubDate` (date) ve `manset` (boolean) alanları isteğe bağlı olarak eklendi.
- Mevcut kitap Markdown dosyalarına `pubDate` ve `manset` verileri girildi. (Vitalik kitabı manşete taşındı).
- `src/pages/index.astro` (Ana sayfa) "Editoryal Vitrin" mantığına geçirilerek, manşet kitabı devasa bir hero alanında, son çıkan 3 kitap ise yatay 3'lü CSS Grid (BookCard bileşeni) ile listelendi.
- `src/pages/kitaplar/index.astro` (Arşiv sayfası) içindeki `BookCard` ızgara (grid) yapısı güncellendi: Kitaplar masaüstü görünümde (desktop) artık yana doğru 3'lü listelenecek şekilde düzenlendi (`@media (min-width: 900px)` breakpoint eklendi).

## [2026-03-09]
- Astro mimarisi IPFS'e uyumlu olarak başlatıldı (site: z-eksen.eth.limo, IPFS relative link yapılandırmaları yapıldı).
- Proje kök dizini ve temel `Layout.astro`, `index.astro` ve `global.css` dosyaları z-eksen marka kimliğine göre (Cormorant Garamond, monokrom & Akademik Kırmızı) yapılandırıldı.

- `src/pages/kitaplar/[slug].astro` içeriğindeki `book.render()` hatası giderilip `<Content />` componentine dahil edildi.
- Astro `src/content/config.ts` Content Collections mimarisi kurularak frontmatter şemaları Zod ile zorunlu tiplendirildi.
- Yeni dummy veri `vitalik-secmeler.md` markdown formatında kitaplar dosyasına eklendi.

- `src/components/BookCard.astro` kitap vitrin arayüz bileşeni geliştirildi.
- `src/pages/index.astro` anasayfası, z-eksen kimliğiyle kurgulanmış 3 veya 4 kolonlu responsive BookCard css girdisiyle yayınların listeleneceği şekilde güncellendi.
- Otonom tarayıcı kontrolü (Browser Subagent) vasıtasıyla localhost testleri ve Schema onaylamaları başarılı.

- Seri terminolojisi Dizi olarak değiştirildi ve Diziler koleksiyon mimarisi kurularak kitaplar ile relasyonlandırıldı.
- Eksik kalan `dijital-yasama-giris` dizisi oluşturuldu ve `vitalik-secmeler.md` kitabının relasyon datası doğrulandı.

- `dijital-yasama-giris` dizi koleksiyonunun ismi `dijital-yasam-bilgeligi` terminolojisiyle düzeltildi ve indexlendi.
- Otonom tarayıcı kontrolü (Browser Subagent) vasıtasıyla diziler sayfasındaki `vitalik-secmeler.md` bağlantılarının başarıyla listelendiği doğrulandı.

- Kurumsal kimlik çalışmaları bağlamında `Layout.astro` header/footer kısımlarına logo, küçük harfli başlık (z-eksen e-yayıncılık) ve iletişim adresi entegre edildi.
- `src/pages/manifesto.astro` eklendi. Anti-Moloch, dijital zanaatkarlık ve X-Y-Z ekseni felsefesi işlendi.
- Eksik logo dosyası yerine `public/logo.svg` dosyasında z-eksen kurumsal kimliğine uygun SVG tabanlı logo otonom olarak üretildi ve referans düzeltildi.
- SVG tabanlı geçici logo silinerek sistemde var olan asıl `Logo-ters.png` dosyası sisteme entegre edildi.
- Tüm kataloğu listeleyen `/kitaplar/` ana sayfası eklendi ve Grid raf sistemi kurgulandı.
- Mobil uyumluluk (Responsive Design) CSS Media Query'leri ile sağlandı.
- Proje kod tabanındaki amatör yapay zeka yorum satırları temizlendi.
- Site genelindeki tüm "Z-Eksen E-Yayıncılık" yazımları küçük harfle ("z-eksen e-yayıncılık") güncellendi.
- Sayfa altbilgisine (footer) X (Twitter) ve Instagram sosyal medya bağlantıları ikonlarıyla birlikte eklendi.
- Statik site simgesi (favicon) olarak kullanılmak üzere Z-Eksen logosundan 32x32 boyutlarında favicon otonom olarak üretilip siteye entegre edildi.
- Kitap tanıtımları ve site içerik metinlerinde yapısal revizyonlar ve anlatım iyileştirmeleri yapıldı.
