# Z-Eksen E-Yayıncılık Değişiklik Kayıtları (Changelog)

## [2026-03-09]
- Astro mimarisi IPFS'e uyumlu olarak başlatıldı (site: z-eksen.eth.limo, IPFS relative link yapılandırmaları yapıldı).
- Proje kök dizini ve temel `Layout.astro`, `index.astro` ve `global.css` dosyaları Z-Eksen marka kimliğine göre (Cormorant Garamond, monokrom & Akademik Kırmızı) yapılandırıldı.

- `src/pages/kitaplar/[slug].astro` içeriğindeki `book.render()` hatası giderilip `<Content />` componentine dahil edildi.
- Astro `src/content/config.ts` Content Collections mimarisi kurularak frontmatter şemaları Zod ile zorunlu tiplendirildi.
- Yeni dummy veri `vitalik-secmeler.md` markdown formatında kitaplar dosyasına eklendi.

- `src/components/BookCard.astro` kitap vitrin arayüz bileşeni geliştirildi.
- `src/pages/index.astro` anasayfası, Z-Eksen kimliğiyle kurgulanmış 3 veya 4 kolonlu responsive BookCard css girdisiyle yayınların listeleneceği şekilde güncellendi.
- Otonom tarayıcı kontrolü (Browser Subagent) vasıtasıyla localhost testleri ve Schema onaylamaları başarılı.

- Seri terminolojisi Dizi olarak değiştirildi ve Diziler koleksiyon mimarisi kurularak kitaplar ile relasyonlandırıldı.
- Eksik kalan `dijital-yasama-giris` dizisi oluşturuldu ve `vitalik-secmeler.md` kitabının relasyon datası doğrulandı.

- `dijital-yasama-giris` dizi koleksiyonunun ismi `dijital-yasam-bilgeligi` terminolojisiyle düzeltildi ve indexlendi.
- Otonom tarayıcı kontrolü (Browser Subagent) vasıtasıyla diziler sayfasındaki `vitalik-secmeler.md` bağlantılarının başarıyla listelendiği doğrulandı.

- Kurumsal kimlik çalışmaları bağlamında `Layout.astro` header/footer kısımlarına logo, küçük harfli başlık (z-eksen e-yayıncılık) ve iletişim adresi entegre edildi.
- `src/pages/manifesto.astro` eklendi. Anti-Moloch, dijital zanaatkarlık ve X-Y-Z ekseni felsefesi işlendi.
- Eksik logo dosyası yerine `public/logo.svg` dosyasında Z-Eksen kurumsal kimliğine uygun SVG tabanlı logo otonom olarak üretildi ve referans düzeltildi.
- SVG tabanlı geçici logo silinerek sistemde var olan asıl `Logo-ters.png` dosyası sisteme entegre edildi.
- Tüm kataloğu listeleyen `/kitaplar/` ana sayfası eklendi ve Grid raf sistemi kurgulandı.
- Mobil uyumluluk (Responsive Design) CSS Media Query'leri ile sağlandı.
- Proje kod tabanındaki amatör yapay zeka yorum satırları temizlendi.
