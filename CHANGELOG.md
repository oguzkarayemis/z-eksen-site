# z-eksen e-yayıncılık Değişiklik Kayıtları (Changelog)

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
