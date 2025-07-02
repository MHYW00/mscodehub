# EmailJS Kurulum Rehberi

## ✅ Şu Anda Çalışır Durum

İletişim formu **şu anda çalışır durumda**! Form gönderildiğinde:
1. 📧 Varsayılan e-posta uygulaması açılır (Gmail, Outlook vb.)
2. 📱 WhatsApp web/uygulaması açılır
3. Her ikisinde de form bilgileri önceden doldurulmuş olarak gelir

EmailJS entegrasyonu **isteğe bağlı** bir geliştirmedir. Daha profesyonel otomatik e-posta gönderimi için aşağıdaki adımları takip edebilirsiniz.

---

## 1. EmailJS Hesabı Oluşturma

1. [EmailJS.com](https://www.emailjs.com/) adresine gidin
2. "Sign Up" butonuna tıklayarak ücretsiz hesap oluşturun
3. E-posta adresinizi doğrulayın

## 2. E-posta Servisini Bağlama

1. Dashboard'da **"Email Services"** sekmesine gidin
2. **"Add New Service"** butonuna tıklayın
3. Gmail, Outlook, Yahoo vb. seçeneklerden birini seçin (Gmail öneriyoruz)
4. E-posta hesabınızı bağlayın ve yetkilendirin
5. **Service ID**'yi kopyalayın (örn: `service_mscodehub`)

## 3. E-posta Şablonu Oluşturma

1. **"Email Templates"** sekmesine gidin
2. **"Create New Template"** butonuna tıklayın
3. Aşağıdaki şablonu kullanın:

### Template İçeriği:

**Subject (Konu):**
```
MSCodeHub İletişim Formu - {{from_name}}
```

**Body (İçerik):**
```
Yeni Proje Talebi - MSCodeHub

Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Şirket: {{company}}
Proje Türü: {{project_type}}
Bütçe: {{budget}}

Proje Detayları:
{{message}}

---
Bu mesaj MSCodeHub web sitesi üzerinden gönderilmiştir.
```

4. Template'i kaydedin
5. **Template ID**'yi kopyalayın (örn: `template_contact`)

## 4. Public Key Alma

1. **"Account"** → **"General"** sekmesine gidin
2. **Public Key**'i kopyalayın

## 5. Konfigürasyon Güncelleme

`src/app/iletisim/page.tsx` dosyasındaki `EMAILJS_CONFIG` kısmını güncelleyin:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_mscodehub',    // Adım 2'den aldığınız Service ID
  TEMPLATE_ID: 'template_contact',    // Adım 3'ten aldığınız Template ID
  PUBLIC_KEY: 'your_public_key_here'  // Adım 4'ten aldığınız Public Key
}
```

## 6. Test Etme

1. Web sitenizi yeniden başlatın: `npm run dev`
2. İletişim formunu doldurup test edin
3. E-posta kutunuzu kontrol edin

## 7. Güvenlik Notları

- Public Key frontend'de görünür olacaktır (bu normal)
- EmailJS ücretsiz planında ayda 200 e-posta limiti var
- Ücretli plan için [fiyatlandırmaya](https://www.emailjs.com/pricing/) bakın

## 8. Alternatif Çözümler

### A. Basit Mailto Yönlendirmesi (Hemen Çalışır)
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  const subject = `Proje Talebi - ${formData.projectType}`
  const body = `
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Şirket: ${formData.company}
Proje Türü: ${formData.projectType}
Bütçe: ${formData.budget}

Detaylar:
${formData.message}
  `
  
  window.location.href = `mailto:metehan@mscodehub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
```

### B. WhatsApp Yönlendirmesi (Hemen Çalışır)
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  const message = `
🔹 *Yeni Proje Talebi*
👤 *Ad:* ${formData.name}
📧 *E-posta:* ${formData.email}
🏢 *Şirket:* ${formData.company}
💼 *Proje:* ${formData.projectType}
💰 *Bütçe:* ${formData.budget}

📝 *Detaylar:*
${formData.message}
  `
  
  window.open(`https://wa.me/905431234567?text=${encodeURIComponent(message)}`, '_blank')
}
```

### C. Backend API (Gelişmiş)
1. Next.js API Route oluşturun: `pages/api/contact.js`
2. Nodemailer veya SendGrid kullanın
3. Daha güvenli ama backend gerektirir

## Sorun Giderme

**Form gönderilmiyor:**
- Console'da hata mesajlarını kontrol edin
- EmailJS konfigürasyonunu doğrulayın
- İnternet bağlantınızı kontrol edin

**E-posta gelmiyor:**
- Spam klasörünü kontrol edin
- EmailJS dashboard'da gönderim loglarını inceleyin
- Template değişkenlerinin doğru yazıldığından emin olun

**Hata alıyorum:**
- Public Key'in doğru olduğunu kontrol edin
- Service ve Template ID'lerin aktif olduğunu kontrol edin
- EmailJS'in rate limitine takılmadığınızdan emin olun 