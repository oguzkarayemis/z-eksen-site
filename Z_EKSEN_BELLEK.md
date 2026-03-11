# Z-EKSEN E-YAYINCILIK | YAPAY ZEKA BAĞLAM BELLEĞİ (AI MEMORY)

Bu dosya, yapay zeka asistanının ("Antigravity" / AI) projeye her yeniden bağlandığında Z-Eksen projesinin temel felsefesini, kurumsal kimliğini, teknik mimarisini ve geçmiş kritik kararlarını (örneğin font krizleri) anında hatırlaması için oluşturulmuş kalıcı bir sistem belleğidir. 

LÜTFEN KODLAMAYA VEYA YANIT VERMEYE BAŞLAMADAN ÖNCE BU DOSYAYI OKU.

## 1. Z-Eksen Felsefesi ve Yayıncılık Vizyonu
- **Temel Vizyon:** X ve Y eksenlerindeki (yataydaki) yüzeysel gürültüden (ana akım yayıncılık, sürekli scrolling, clickbait) kaçarak **Z eksenine (derinliğe)** inmek.
- **Odak Noktası:** İnsanlığın kadim problemleri ("Yaşam Bilgeliği") ve güncel dijital dünyayı (kripto, blockchain, AI, sosyal medya) anlamlandıran "Dijital Yaşam Bilgeliği". Anti-Moloch felsefesi.
- **Çeviri Etiği:** Kelime kelime çeviri değil, yazarın ruhunu ve metnin derinliğini taşımak. Batı dillerindeki uzun ve bol virgüllü cümleleri Türkçenin organik, akıcı sözdizimine (kısa ve net) uyarlamak. 

## 2. Tasarım ve Kurumsal Kimlik (UI/UX)
- **Renk Paleti:** Monokrom (Siyah, Krem/Beyaz) ağırlıklı ve sadece zarif dokunuşlar/vurgular için **Akademik Kırmızı** (`var(--color-accent): #8b0000;`).
- **Tipografi Özeti:** Özel `Cormorant Garamond` serif fontu kullanılmaktadır. Okunabilirliği yüksek tutmak için site geneli temel yazılar `1.25rem` büyüklüğünde ve `600` (yarı kalın) ağırlığındadır. Başlıklar ve Header elemanları `700` (kalın) ağırlığındadır.
- **Editoryal Vitrin Modeli:** Ana sayfa, klasik bir "son eklenenler" yığınından ziyade, devasa yatay bir "Seçilmiş/Manşet" kitap (Hero alanı) ve altında 3'lü kolonlardan oluşan derli toplu bir vitrin mantığına sahiptir.

## 3. Kritik Teknik Kararlar ve Geçmiş Sorunlar (ÖNEMLİ!)
- **Fontların Yerelleştirilmesi (Tam Bağımsızlık):** 11 Mart 2026 tarihindeki oturumda dış Google Fonts sunucularına olan bağımlılık tamamen kesilmiştir. `global.css` içinde `@import` veya dış bağlantı KULLANILMAZ. Tüm fontlar (`Cormorant Garamond` Regular, Italic, Bold) `.woff2` formatında bizzat projenin `public/fonts/` klasöründen sunulmaktadır. (FOUT sıçramasını önlemek için `font-display: optional;` kullanılmaktadır).
- **Sosyal Medya İkonları:** Dış sunuculardan çekilen resimler değil, projenin tamamen içine gömülmüş saf **Satıriçi SVG** (Inline SVG) kodları kullanılmaktadır. Kalite kaybı ve dış bağlantı riski yoktur. Header'da (site ismi ile menü arasında) özel CSS (`.header-social`) ile hizalanmış durumdadır.
- **Astro İçerik Mimarisi (Content Collections):** Kitaplar statik `.astro` veya `.html` olarak değil, `src/content/books/` altında Markdown (`.md`) olarak tutulur. `src/content/config.ts` içinde Zod ile tip kontrolleri (şema) yapılır. 
  - Önemli Zod Alanları: `manset` (boolean, anasayfa hero'ya çıkartır), `pubDate` (tarihe göre sıralatır), `description` (kısa açıklama).

## 4. Dosya Yapısı ve Neresi Nerededir?
- `src/layouts/Layout.astro`: Sitenin ana iskeleti, üst menü (header), tipografi hiyerarşisi, sosyal medya ikonları ve altbilgi (footer).
- `src/styles/global.css`: Tamamen bağımsız yapılandırılmış `font-face` tanımlamaları, global CSS değişkenleri (renkler, fontlar), `body` metin özellikleri.
- `src/pages/index.astro`: Dinamik manşet kitabını çağıran yatay hero modülü ve altındaki en yeni 3 yayının ızgarası.
- `src/pages/kitaplar/index.astro`: Bütün kitapların CSS Grid (yana doğru masaüstünde 3'lü dizilim) mimarisiyle listelendiği genel arşiv.
- `CHANGELOG.md`: Yapılan HER önemli değişikliğin ve mimari kararın kronolojik olarak eklendiği mutlak seyir defteri.

**Not (Yapay Zeka İçin):** Z-Eksen projesinde kodlamaya başlamadan önce veya bir hata ile karşılaştığında daima bu belgeyi analiz ederek önceki kararlarla çelişen (örn: dışarıdan link ile font çekme, tasarımı karmaşıklaştırma vb.) eylemlerden kaçın. Sadelik ve derinlik esastır.
