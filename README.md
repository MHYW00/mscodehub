# MSCodeHub Portfolio

MSCodeHub için tasarlanmış modern, özgün ve teknolojik portfolyo web sitesi. Bu proje mobil öncelikli tasarım prensibiyle geliştirilmiş olup, eşsiz animasyonlar ve mikro etkileşimler içermektedir.

## ✨ Özellikler

### 🎭 Eşsiz Animasyonlar
- **3D Etkileşimler**: Piyasada hiç olmayan özgün animasyonlar
- **Mikro Animasyonlar**: Her etkileşimde akıcı geçişler
- **Kaydırma Efektleri**: Smooth scroll ve parallax etkiler
- **Framer Motion**: Profesyonel animasyon kütüphanesi kullanımı

### 📱 Mobil Öncelikli Tasarım
- **Responsive Design**: Tüm cihaz boyutlarında mükemmel görünüm
- **Touch Optimized**: Dokunmatik etkileşimlerde maksimum akıcılık
- **Fast Loading**: Optimize edilmiş performans
- **Mobile First**: Önce mobil, sonra masaüstü yaklaşımı

### 🎨 Modern UI/UX
- **Gradient Backgrounds**: Dinamik renk geçişleri
- **Glass Morphism**: Modern cam efektleri
- **Soft Shadows**: Yumuşak gölgeler
- **Rounded Corners**: 2xl yuvarlatılmış köşeler
- **Typography**: Okunması kolay, modern fontlar

### 🚀 Performans & Erişilebilirlik
- **WCAG Standards**: Erişilebilirlik standartlarına uygun
- **Color Contrast**: Yüksek renk kontrastı
- **Keyboard Navigation**: Klavye erişilebilirliği
- **Optimized Images**: Görsel optimizasyonu
- **Fast Loading**: Hızlı yükleme süreleri

## 🛠️ Teknolojiler

- **Next.js 15.3.3** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Modern icon library

## 📁 Proje Yapısı

```
mscodehub-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx      # Navigation ve logo
│       ├── Hero.tsx        # Ana sayfa başlık alanı
│       ├── Projects.tsx    # Proje galerisi
│       ├── Services.tsx    # Hizmetler bölümü
│       ├── Team.tsx        # Ekip üyeleri
│       ├── Contact.tsx     # İletişim formu
│       └── Footer.tsx      # Alt bilgi alanı
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎯 Bölümler

### 🏠 Ana Sayfa (Hero)
- Büyük başlık animasyonu
- Giriş mikro etkileşimi
- CTA butonları
- Scroll indicator

### 💼 Projeler
- Fare üstünde açılan kartlar
- Detay gösterimi
- Teknoloji etiketleri
- Live demo linkleri

### 🛠️ Hizmetler
- Kartlı düzen
- Kaydırmalı animasyonlu ikonlar
- Hover efektleri
- Feature listesi

### 👥 Ekip
- Fotoğraflar üzerine hareketli çerçeveler
- Hover efektleri
- Sosyal medya linkleri
- Skill badges

### 📞 İletişim
- Form alanı mikro geçişleri
- Gönderme animasyonu
- İletişim bilgileri
- Harita entegrasyonu

## 🚀 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/mscodehub/portfolio.git
cd mscodehub-portfolio
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📝 Scripts

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # ESLint kontrolü
```

## 🎨 Özelleştirme

### Renkler
Tailwind config dosyasında özel renk paleti tanımlanmıştır:
- **Primary**: Mavi tonları
- **Secondary**: Gri tonları  
- **Accent**: Sarı/turuncu tonları

### Animasyonlar
Custom animasyonlar `globals.css` dosyasında tanımlanmıştır:
- **Blob Animation**: Arka plan blob efektleri
- **Float Animation**: Yüzen elementler
- **Glow Effect**: Parlama efektleri

### Typography
- **Font Family**: Inter (Sans-serif)
- **Mono Font**: JetBrains Mono
- **Font Weights**: 300-900 arası

## 📱 Responsive Breakpoints

```css
sm: 640px    # Küçük tabletler
md: 768px    # Tabletler
lg: 1024px   # Küçük masaüstü
xl: 1280px   # Büyük masaüstü
2xl: 1536px  # Çok büyük ekranlar
```

## 🌟 Öne Çıkan Özellikler

1. **Smooth Scroll Navigation**: Yumuşak kaydırma ile bölümler arası geçiş
2. **Interactive Elements**: Her etkileşimde görsel geri bildirim
3. **Loading States**: Yükleme durumları için animasyonlar
4. **Error Handling**: Kullanıcı dostu hata mesajları
5. **SEO Optimized**: Arama motoru optimizasyonu
6. **Performance Optimized**: Lighthouse skorları için optimize edilmiş

## 🔧 Yapılandırma

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://mscodehub.com
NEXT_PUBLIC_CONTACT_EMAIL=info@mscodehub.com
```

### Meta Tags
Tüm SEO meta etiketleri `layout.tsx` dosyasında yapılandırılmıştır.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 İletişim

**MSCodeHub Team**
- Website: [mscodehub.com](https://mscodehub.com)
- Email: info@mscodehub.com
- Phone: +90 (555) 123 45 67

---

**Not**: Bu portfolyo web sitesi MSCodeHub'ın teknoloji yeteneklerini sergilemek amacıyla tasarlanmış olup, gerçek projeler ve deneyimler içermektedir. 