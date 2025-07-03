'use client'

import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import { useTranslation } from '../../hooks/useTranslation'

const GizlilikPolitikasi = () => {
  const { t } = useTranslation()

  // Type-safe data access
  const privacySections = t('legal.privacy.sections') as any
  const directItems = privacySections?.dataCollected?.direct?.items || []
  const automaticItems = privacySections?.dataCollected?.automatic?.items || []
  const purposeItems = privacySections?.dataUsage?.purposes?.items || []
  const legalBasisItems = privacySections?.dataUsage?.legalBasis?.items || []
  const sharingConditions = privacySections?.dataSharing?.conditions || []
  const securityMeasures = privacySections?.dataSecurity?.measures || []
  const cookieTypes = privacySections?.cookies?.types || []
  const rightsList = privacySections?.rights?.list || []
  const retentionPeriods = privacySections?.retention?.periods || []

  return (
    <>
      <Head>
        <title>Gizlilik Politikası | MSCodeHub - KVKK Uyumlu Kişisel Veri Koruma</title>
        <meta name="description" content="MSCodeHub gizlilik politikası ve kişisel verilerin korunması hakkında detaylı bilgilendirme. KVKK uyumlu veri işleme, çerez politikası, veri sahibi hakları ve güvenlik tedbirleri." />
        <meta name="keywords" content="gizlilik politikası, KVKK, kişisel veri koruma, çerez politikası, veri güvenliği, veri sahibi hakları, MSCodeHub privacy policy, data protection, GDPR compliance" />
        <meta property="og:title" content="Gizlilik Politikası | MSCodeHub - KVKK Uyumlu Veri Koruma" />
        <meta property="og:description" content="MSCodeHub gizlilik politikası ve kişisel verilerin korunması. KVKK uyumlu veri işleme süreçleri, güvenlik tedbirleri ve veri sahibi haklarınız hakkında detaylı bilgi." />
        <meta property="og:url" content="https://mscodehub.com/gizlilik-politikasi" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Gizlilik Politikası | MSCodeHub" />
        <meta name="twitter:description" content="KVKK uyumlu gizlilik politikası ve kişisel veri koruma süreçlerimiz hakkında detaylı bilgi." />
        <link rel="canonical" href="https://mscodehub.com/gizlilik-politikasi" />
      </Head>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Gizlilik Politikası",
                "description": "MSCodeHub gizlilik politikası ve kişisel verilerin korunması hakkında detaylı bilgilendirme",
                "url": "https://mscodehub.com/gizlilik-politikasi",
                "inLanguage": "tr-TR",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "MSCodeHub",
                  "url": "https://mscodehub.com"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Kişisel Veri Koruma",
                  "description": "KVKK uyumlu kişisel veri koruma politikası"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "MSCodeHub",
                  "url": "https://mscodehub.com"
                },
                "dateModified": new Date().toISOString().split('T')[0],
                "datePublished": "2025-01-15"
              })
            }}
          />
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
              {t('legal.privacy.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('legal.privacy.subtitle')}
            </p>
            <div className="text-sm text-gray-400 mt-4">
              {t('legal.privacy.lastUpdated')}: {new Date().toLocaleDateString(t('nav.home') === 'Home' ? 'en-US' : 'tr-TR')}
            </div>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 space-y-8">
            
            {/* 1. Giriş */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.intro?.title || '1. Giriş ve Yasal Çerçeve'}</h2>
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/20">
              <div className="text-gray-300 space-y-4">
                  {(privacySections?.intro?.content || 'MSCodeHub olarak kişisel verilerinizin korunması konusunda sorumluluklarımızın tam olarak bilincindeyiz.').split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Toplanan Veriler */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.dataCollected?.title || '2. Topladığımız Kişisel Veriler'}</h2>
              <div className="text-gray-300 space-y-6">
                
                <h3 className="text-lg font-semibold text-green-400 flex items-center">
                  <span className="mr-2">📝</span>
                  {privacySections?.dataCollected?.direct?.title || '2.1 Doğrudan Toplanan Veriler'}
                </h3>
                <div className="grid gap-4">
                  {(directItems.length > 0 ? directItems : [
                    'Kimlik Bilgileri: Ad, soyad, doğum tarihi, T.C. kimlik numarası',
                    'İletişim Bilgileri: E-posta adresi, telefon numarası, adres bilgileri',
                    'Kurumsal Bilgiler: Şirket adı, vergi numarası, faaliyet alanı',
                    'Proje Bilgileri: Teknik gereksinimler, bütçe, proje kapsamı',
                    'İletişim Kayıtları: E-posta yazışmaları, telefon görüşmeleri'
                  ]).map((item: string, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-start space-x-3">
                        <span className="text-green-400 font-bold mt-1">📄</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-blue-400 flex items-center mt-8">
                  <span className="mr-2">🤖</span>
                  {privacySections?.dataCollected?.automatic?.title || '2.2 Otomatik Toplanan Teknik Veriler'}
                </h3>
                <div className="grid gap-4">
                  {(automaticItems.length > 0 ? automaticItems : [
                    'Ağ ve Cihaz Bilgileri: IP adresi, MAC adresi, coğrafi konum',
                    'Tarayıcı Bilgileri: Tarayıcı türü, işletim sistemi, dil tercihleri',
                    'Site Kullanım Analitikleri: Ziyaret edilen sayfalar, tıklama verileri',
                    'Teknik Performans: Sayfa yükleme süreleri, hata kayıtları',
                    'Çerez Verileri: Session çerezleri, kalıcı çerezler, yerel depolama'
                  ]).map((item: string, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-start space-x-3">
                        <img src="https://cdn-icons-png.flaticon.com/32/2040/2040504.png" alt="Settings" className="w-5 h-5 mt-1" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Veri Kullanımı */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.dataUsage?.title || '3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepler'}</h2>
              <div className="text-gray-300 space-y-6">
                
                <h3 className="text-lg font-semibold text-purple-400 flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/32/1055/1055687.png" alt="Target" className="w-5 h-5 mr-2" />
                  {privacySections?.dataUsage?.purposes?.title || '3.1 Detaylı İşleme Amaçları'}
                </h3>
                <div className="grid gap-3">
                  {(purposeItems.length > 0 ? purposeItems : [
                    'Hizmet Sunumu: Web sitesi ve mobil uygulama geliştirme hizmetleri',
                    'Müşteri İlişkileri: Kayıt işlemleri, profil oluşturma, kişiselleştirilmiş hizmet',
                    'Proje Yönetimi: Planlama, kaynak tahsisi, ilerleme takibi, kalite kontrol',
                    'Mali İşlemler: Faturalama, tahsilat, muhasebe, vergi beyanları',
                    'Hukuki Yükümlülükler: Yasal kayıt tutma, denetim, adli makam talepleri',
                    'Pazarlama ve İletişim: E-posta bültenleri, kişiselleştirilmiş teklifler'
                  ]).map((item: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 bg-purple-900/10 p-3 rounded-lg">
                      <span className="text-purple-400 font-bold">🔸</span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-yellow-400 flex items-center mt-8">
                  <img src="https://cdn-icons-png.flaticon.com/32/1040/1040230.png" alt="Justice" className="w-5 h-5 mr-2" />
                  {privacySections?.dataUsage?.legalBasis?.title || '3.2 Hukuki Sebepler (KVKK m.5 ve m.6)'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(legalBasisItems.length > 0 ? legalBasisItems : [
                    { title: 'Sözleşmenin kurulması/ifası', description: 'Hizmet sözleşmelerinin yapılması ve yürütülmesi (m.5/2-c)' },
                    { title: 'Yasal yükümlülük', description: 'Vergi, ticaret ve diğer mevzuat gereği (m.5/2-d)' },
                    { title: 'Meşru menfaat', description: 'İş geliştirme, güvenlik ve analiz faaliyetleri (m.5/2-f)' },
                    { title: 'Açık rıza', description: 'Pazarlama iletişimi ve özel kategori veriler için (m.5/1)' }
                  ]).map((item: any, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-4 rounded-lg border border-yellow-500/20">
                      <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                        <span className="mr-2">📋</span>
                        {item?.title}
                      </h4>
                      <p className="text-sm leading-relaxed">{item?.description}</p>
                  </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Veri Paylaşımı */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.dataSharing?.title || '4. Kişisel Verilerin Paylaşımı ve Aktarım Koşulları'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-500/20">
                  <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/32/2913/2913112.png" alt="Shield" className="w-5 h-5 mr-2" />
                    Gizlilik İlkemiz
                  </h3>
                  <p className="leading-relaxed">{privacySections?.dataSharing?.intro || 'Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız ve satmayız.'}</p>
                </div>
                
                <h3 className="text-lg font-semibold text-orange-400 flex items-center">
                  <span className="mr-2">📤</span>
                  Paylaşım Durumları
                </h3>
                <div className="grid gap-4">
                  {(sharingConditions.length > 0 ? sharingConditions : [
                    'Yasal Zorunluluk: Mahkeme kararı, savcılık talebi, vergi denetimi',
                    'Hizmet Sağlayıcılar: Hosting, bulut hizmetleri, ödeme sistemleri (sözleşmeli)',
                    'İş Ortakları: Ortak proje geliştirme (NDA ile korumalı)',
                    'Acil Durumlar: Kamu güvenliği, hayati tehlike durumları',
                    'Şirket Devri: Birleşme, satın alma durumlarında (bildirim ile)',
                    'Analiz Firmaları: Anonim istatistiksel analizler için',
                    'Pazarlama Ortakları: Açık rızanız ile sınırlı pazarlama faaliyetleri',
                    'Teknik Destek: Sistem bakımı ve güvenlik için (yetkili personel)',
                    'Muhasebe-Hukuk: Profesyonel danışmanlık hizmetleri (gizlilik sözleşmeli)',
                    'Denetim: Yasal denetim ve uyumluluk kontrolü'
                  ]).map((condition: string, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-start space-x-3">
                        <span className="text-orange-400 font-bold mt-1">🔒</span>
                        <span className="text-sm leading-relaxed">{condition}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Veri Güvenliği */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.dataSecurity?.title || '5. Kapsamlı Veri Güvenliği Tedbirleri'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
                    <span className="mr-2">🔐</span>
                    Güvenlik Taahhüdümüz
                  </h3>
                  <p className="leading-relaxed">{privacySections?.dataSecurity?.intro || 'Kişisel verilerinizin güvenliği için endüstri standardında teknik ve idari önlemler alıyoruz.'}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {(securityMeasures.length > 0 ? securityMeasures : [
                    'SSL/TLS Şifreleme: 256-bit şifreleme ile veri iletimi koruması',
                    'Güvenli Veri Tabanları: Encrypted storage ve access control',
                    'Düzenli Backup: Otomatik yedekleme ve disaster recovery planı',
                    'Güvenlik Duvarı: Multi-layer firewall ve intrusion detection',
                    'Anti-virüs Koruma: Real-time malware scanning ve protection',
                    'Erişim Kontrolü: Multi-factor authentication ve role-based access',
                    'Güvenlik Denetimi: Düzenli penetration testing ve vulnerability scan',
                    'Personel Eğitimi: KVKK ve veri güvenliği eğitimleri',
                    'Gizlilik Sözleşmeleri: Tüm çalışanlar için binding NDA',
                    'Veri Minimizasyonu: Sadece gerekli veriler toplama prensibi'
                  ]).map((measure: string, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-teal-900/20 to-green-900/20 p-4 rounded-lg border border-teal-500/20">
                      <div className="flex items-start space-x-3">
                        <img src="https://cdn-icons-png.flaticon.com/32/2913/2913112.png" alt="Security" className="w-5 h-5 mt-1" />
                        <span className="text-sm leading-relaxed">{measure}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Çerezler */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.cookies?.title || '6. Detaylı Çerez Politikası'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center">
                    <span className="mr-2">🍪</span>
                    Çerez Kullanım Politikamız
                  </h3>
                  <p className="leading-relaxed">{privacySections?.cookies?.intro || 'Web sitemizde kullanıcı deneyimini iyileştirmek ve hizmetlerimizi optimize etmek için çeşitli çerez türleri kullanıyoruz.'}</p>
                </div>
                
                <div className="grid gap-4">
                  {(cookieTypes.length > 0 ? cookieTypes : [
                    { name: 'Zorunlu Çerezler', description: 'Web sitesinin temel fonksiyonları için gerekli, devre dışı bırakılamaz' },
                    { name: 'Performans Çerezleri', description: 'Site performansını izleme ve iyileştirme (Google Analytics)' },
                    { name: 'Fonksiyonel Çerezler', description: 'Kullanıcı tercihlerini hatırlama (dil, tema seçimi)' },
                    { name: 'Analitik Çerezler', description: 'Kullanıcı davranışı analizi ve site optimizasyonu' },
                    { name: 'Pazarlama Çerezleri', description: 'Hedeflenmiş reklam ve pazarlama (açık rıza ile)' },
                    { name: 'Üçüncü Taraf Çerezler', description: 'Sosyal medya entegrasyonu ve harici hizmetler' }
                  ]).map((type: any, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-start space-x-3">
                        <img src="https://cdn-icons-png.flaticon.com/32/1055/1055687.png" alt="Target" className="w-5 h-5 mt-1" />
                        <div>
                          <h4 className="font-semibold text-purple-400 mb-1">{type?.name}</h4>
                          <p className="text-sm leading-relaxed">{type?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/32/2040/2040504.png" alt="Settings" className="w-5 h-5 mr-2" />
                    Çerez Yönetimi
                  </h4>
                  <p className="text-sm">{privacySections?.cookies?.management || 'Tarayıcı ayarlarınızdan çerezleri yönetebilir, kabul etmeyebilir veya silebilirsiniz. Ancak bu durum site fonksiyonlarını etkileyebilir.'}</p>
                </div>
              </div>
            </section>

            {/* 7. Haklarınız */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.rights?.title || '7. Veri Sahibi Haklarınız (KVKK m.11)'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="mr-2">⚖️</span>
                    Yasal Haklarınız
                  </h3>
                  <p className="leading-relaxed">{privacySections?.rights?.intro || 'KVKK\'nın 11. maddesi uyarınca sahip olduğunuz haklar:'}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {(rightsList.length > 0 ? rightsList : [
                    'Bilgi Alma Hakkı: Verilerinizin işlenip işlenmediğini öğrenme',
                    'Erişim Hakkı: İşlenen verileriniz hakkında bilgi talep etme',
                    'Düzeltme Hakkı: Yanlış/eksik verilerin düzeltilmesini isteme',
                    'Silme Hakkı: Verilerinizin silinmesini talep etme',
                    'İşlemeye İtiraz Hakkı: Veri işlemeye karşı itirazda bulunma',
                    'Taşınabilirlik Hakkı: Verilerinizi başka sisteme aktarma',
                    'Otomatik Karar Vermeye İtiraz: Algoritmik kararlar hakkında bilgi alma',
                    'Tazminat Hakkı: Zarar durumunda tazminat talep etme',
                    'Şikayet Hakkı: KVKK Kuruluna şikayette bulunma',
                    'Rıza Geri Çekme Hakkı: Verdiğiniz rızayı geri çekme'
                  ]).map((right: string, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-4 rounded-lg border border-cyan-500/20">
                      <div className="flex items-start space-x-3">
                        <img src="https://cdn-icons-png.flaticon.com/32/2983/2983788.png" alt="Fast" className="w-5 h-5 mt-1" />
                        <span className="text-sm leading-relaxed">{right}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-900/20 p-6 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                    <span className="mr-2">📧</span>
                    Başvuru Yöntemi
                  </h4>
                  <p className="leading-relaxed">
                    {privacySections?.rights?.contact?.text || 'Bu haklarınızı kullanmak için'}{' '}
                    <a href="mailto:metehan@mscodehub.com" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                    metehan@mscodehub.com
                  </a>{' '}
                    {privacySections?.rights?.contact?.suffix || 'adresinden bizimle iletişime geçebilirsiniz. Başvurularınız en geç 30 gün içinde cevaplanır.'}
                </p>
                </div>
              </div>
            </section>

            {/* 8. Saklama Süresi */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.retention?.title || '8. Veri Saklama Süreleri ve İmha Politikası'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 p-6 rounded-lg border border-amber-500/20">
                  <h3 className="text-lg font-semibold text-amber-400 mb-4 flex items-center">
                    <span className="mr-2">⏰</span>
                    Saklama Politikamız
                  </h3>
                  <p className="leading-relaxed">{privacySections?.retention?.description || 'Kişisel verilerinizi işleme amacının gerektirdiği süre ve yasal zorunluluklar çerçevesinde saklıyoruz.'}</p>
                </div>
                
                <div className="grid gap-4">
                  {(retentionPeriods.length > 0 ? retentionPeriods : [
                    { type: 'Müşteri Kayıtları', duration: '10 yıl (Türk Ticaret Kanunu gereği)' },
                    { type: 'Mali Belgeler', duration: '10 yıl (Vergi Usul Kanunu gereği)' },
                    { type: 'İletişim Kayıtları', duration: '3 yıl (İş gereksinimi)' },
                    { type: 'Web Site Logları', duration: '1 yıl (Güvenlik amaçlı)' },
                    { type: 'Pazarlama Verileri', duration: 'Rıza süresi boyunca (İptal edilene kadar)' },
                    { type: 'Çerez Verileri', duration: '1 yıl (Teknik gereksinim)' },
                    { type: 'Proje Dökümanları', duration: '5 yıl (Garanti süresi + 2 yıl)' },
                    { type: 'Güvenlik Kayıtları', duration: '2 yıl (Güvenlik politikası gereği)' },
                    { type: 'Denetim Kayıtları', duration: '7 yıl (Yasal denetim gereği)' },
                    { type: 'Şikayet Kayıtları', duration: '5 yıl (Hukuki takip süresi)' }
                  ]).map((period: any, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-start space-x-3">
                        <span className="text-yellow-400 font-bold mt-1">📅</span>
                        <div>
                          <h4 className="font-semibold text-yellow-400 mb-1">{period?.type}</h4>
                          <p className="text-sm leading-relaxed">{period?.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. Uluslararası Veri Transferleri */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.transfers?.title || '9. Uluslararası Veri Transferleri'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-rose-900/20 to-pink-900/20 p-6 rounded-lg border border-rose-500/20">
                  <h3 className="text-lg font-semibold text-rose-400 mb-4 flex items-center">
                    <span className="mr-2">🌍</span>
                    Yurt Dışı Veri Aktarımı
                  </h3>
                  <p className="leading-relaxed">{privacySections?.transfers?.description || 'Kişisel verileriniz, yeterli koruma düzeyine sahip ülkelere veya uygun güvenceler sağlanması kaydıyla üçüncü ülkelerdeki hizmet sağlayıcılarına aktarılabilir.'}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                      <span className="mr-2">✅</span>
                      Yeterli Koruma
                    </h4>
                    <p className="text-sm">AB ülkeleri, İngiltere, İsviçre gibi KVKK tarafından yeterli koruma düzeyine sahip kabul edilen ülkeler</p>
                  </div>
                  <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                                              <img src="https://cdn-icons-png.flaticon.com/32/2913/2913112.png" alt="Security" className="w-5 h-5 mr-2" />
                      Uygun Güvenceler
                    </h4>
                    <p className="text-sm">Standard Contractual Clauses, Binding Corporate Rules, sertifika programları ile korumalı transferler</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. İletişim */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{privacySections?.contactInfo?.title || '10. Veri Sorumlusu ve İletişim Bilgileri'}</h2>
              <div className="text-gray-300 space-y-6">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-lg border border-gray-600/30">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="mr-2">🏢</span>
                    MSCodeHub Bilişim Teknolojileri
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p><strong className="text-blue-400">📍 {privacySections?.contactInfo?.address || 'Adres'}:</strong></p>
                      <p className="text-sm">Merkez Mahallesi, Atatürk Caddesi, No: 123<br/>Merkez/Rize/Türkiye</p>
                      
                      <p className="mt-3"><strong className="text-green-400">📧 {privacySections?.contactInfo?.email || 'E-posta'}:</strong></p>
                      <p className="text-sm">metehan@mscodehub.com (KVKK İletişim)</p>
                      
                      <p className="mt-3"><strong className="text-purple-400">📞 {privacySections?.contactInfo?.phone || 'Telefon'}:</strong></p>
                      <p className="text-sm">+90 543 123 4567</p>
                    </div>
                    <div>
                      <p><strong className="text-yellow-400">🌐 Website:</strong></p>
                      <p className="text-sm">www.mscodehub.com</p>
                      
                      <p className="mt-3"><strong className="text-red-400">⏰ Çalışma Saatleri:</strong></p>
                      <p className="text-sm">Pazartesi-Cuma 09:00-18:00</p>
                      
                      <p className="mt-3"><strong className="text-cyan-400">📋 Veri Koruma Sorumlusu:</strong></p>
                      <p className="text-sm">Mete Han Yıldırım</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-400 mb-2">📞 İletişim Hakkında</h4>
                  <p className="text-sm leading-relaxed">{privacySections?.contactInfo?.description || 'Bu Gizlilik Politikası ile ilgili her türlü soru, görüş ve öneriniz için bizimle iletişime geçebilirsiniz. Başvurularınız azami 30 gün içinde yanıtlanır.'}</p>
                </div>
              </div>
            </section>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('legal.privacy.backHome')}
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GizlilikPolitikasi 