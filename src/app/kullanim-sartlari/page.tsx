'use client'

import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import { useTranslation } from '../../hooks/useTranslation'

const KullanimSartlari = () => {
  const { t } = useTranslation()

  // Type-safe data access
  const termsSections = t('legal.terms.sections') as any

  return (
    <>
      <Head>
        <title>Kullanım Şartları | MSCodeHub - Yazılım Hizmet Şartları ve Koşulları</title>
        <meta name="description" content="MSCodeHub yazılım geliştirme hizmetleri kullanım şartları ve koşulları. Tüketici hakları, fikri mülkiyet, garanti koşulları, hukuki düzenlemeler ve şikayet çözüm yolları." />
        <meta name="keywords" content="kullanım şartları, yazılım hizmet şartları, tüketici hakları, fikri mülkiyet, garanti koşulları, hukuki düzenlemeler, MSCodeHub terms of service, software development terms" />
        <meta property="og:title" content="Kullanım Şartları | MSCodeHub - Yazılım Hizmet Şartları" />
        <meta property="og:description" content="MSCodeHub yazılım geliştirme hizmetleri kullanım şartları ve koşulları. Tüketici hakları, garanti koşulları ve hukuki düzenlemeler hakkında detaylı bilgi." />
        <meta property="og:url" content="https://mscodehub.com/kullanim-sartlari" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kullanım Şartları | MSCodeHub" />
        <meta name="twitter:description" content="Yazılım hizmetleri kullanım şartları, tüketici hakları ve garanti koşulları hakkında detaylı bilgi." />
        <link rel="canonical" href="https://mscodehub.com/kullanim-sartlari" />
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
                  "name": "Kullanım Şartları",
                  "description": "MSCodeHub yazılım geliştirme hizmetleri kullanım şartları ve koşulları",
                  "url": "https://mscodehub.com/kullanim-sartlari",
                  "inLanguage": "tr-TR",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "MSCodeHub",
                    "url": "https://mscodehub.com"
                  },
                  "about": {
                    "@type": "Thing",
                    "name": "Yazılım Hizmet Şartları",
                    "description": "Enterprise yazılım geliştirme hizmet şartları ve koşulları"
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
                {t('legal.terms.title')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('legal.terms.subtitle')}
              </p>
              <div className="text-sm text-gray-400 mt-4">
                {t('legal.privacy.lastUpdated')}: {new Date().toLocaleDateString(t('nav.home') === 'Home' ? 'en-US' : 'tr-TR')}
              </div>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 space-y-8">
              
              {/* 1. Genel Hükümler */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.general?.title || '1. Genel Hükümler'}</h2>
                <div className="text-gray-300 space-y-4">
                  {(termsSections?.general?.content || 'Bu kullanım şartları MSCodeHub hizmetlerinin kullanımını düzenler.').split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* 2. Hizmetler */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.services?.title || '2. Hizmetlerimiz'}</h2>
                <div className="text-gray-300 space-y-6">
                  <h3 className="text-lg font-semibold text-blue-400">{termsSections?.services?.offered?.title || '2.1 Sunulan Profesyonel Hizmetler'}</h3>
                  <div className="grid gap-4">
                    {(termsSections?.services?.offered?.items || [
                      'Web uygulaması geliştirme hizmetleri',
                      'Mobil uygulama geliştirme',
                      'E-ticaret çözümleri',
                      'API geliştirme ve entegrasyon',
                      'Kurumsal yazılım çözümleri',
                      'Teknik danışmanlık hizmetleri'
                    ]).map((item: string, index: number) => (
                      <div key={index} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-blue-400 mt-8">{termsSections?.services?.scope?.title || '2.2 Detaylı Hizmet Kapsamı ve Süreç'}</h3>
                  <div className="space-y-4">
                    <p className="leading-relaxed">{termsSections?.services?.scope?.description || 'Hizmetlerimizin detayları, kapsamı ve fiyatlandırması proje bazında belirlenir ve yazılı anlaşmalarla teyit edilir.'}</p>
                    
                    {termsSections?.services?.scope?.process && (
                      <div className="bg-gray-800/30 p-6 rounded-lg border border-green-500/20">
                        <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                          <span className="mr-2">🔄</span> Hizmet Süreci
                        </h4>
                        <p className="text-sm leading-relaxed">{termsSections.services.scope.process}</p>
                      </div>
                    )}
                    
                    {termsSections?.services?.scope?.quality && (
                      <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-500/20">
                        <h4 className="font-semibold text-blue-400 mb-3 flex items-center">
                          <span className="mr-2">⭐</span> Kalite Standartları
                        </h4>
                        <p className="text-sm leading-relaxed">{termsSections.services.scope.quality}</p>
                      </div>
                    )}
                    
                    {termsSections?.services?.scope?.delivery && (
                      <div className="bg-gray-800/30 p-6 rounded-lg border border-purple-500/20">
                        <h4 className="font-semibold text-purple-400 mb-3 flex items-center">
                          <span className="mr-2">📦</span> Teslimat Koşulları
                        </h4>
                        <p className="text-sm leading-relaxed">{termsSections.services.scope.delivery}</p>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* 3. Kullanıcı Sorumlulukları */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.responsibilities?.title || '3. Kullanıcı Sorumlulukları'}</h2>
                <div className="text-gray-300 space-y-6">
                  <h3 className="text-lg font-semibold text-green-400">{termsSections?.responsibilities?.acceptable?.title || '3.1 Kabul Edilen Kullanım'}</h3>
                  <div className="grid gap-3">
                    {(termsSections?.responsibilities?.acceptable?.items || [
                      'Web sitesini yasal amaçlarla kullanmak',
                      'Doğru bilgiler sağlamak',
                      'Telif haklarına saygı göstermek',
                      'Site güvenliğini korumak'
                    ]).map((item: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 bg-green-900/10 p-3 rounded-lg">
                        <span className="text-green-400 font-bold">✓</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-red-400 mt-8">{termsSections?.responsibilities?.prohibited?.title || '3.2 Yasak Faaliyetler'}</h3>
                  <div className="grid gap-3">
                    {(termsSections?.responsibilities?.prohibited?.items || [
                      'Zararlı yazılım yaymak',
                      'Yetkisiz erişim sağlama',
                      'Spam gönderme',
                      'Sahte bilgi kullanma'
                    ]).map((item: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 bg-red-900/10 p-3 rounded-lg">
                        <span className="text-red-400 font-bold">✗</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 4. Fikri Mülkiyet */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.intellectual?.title || '4. Fikri Mülkiyet Hakları'}</h2>
                <div className="text-gray-300 space-y-6">
                  <h3 className="text-lg font-semibold text-blue-400">{termsSections?.intellectual?.company?.title || '4.1 Şirket İçeriği'}</h3>
                  <div className="bg-gray-800/30 p-6 rounded-lg">
                    <p className="leading-relaxed mb-4">{termsSections?.intellectual?.company?.description || 'Web sitemizdeki tüm içerik, tasarım, logo, metin, görsel ve kodlar MSCodeHub\'ın fikri mülkiyetidir ve telif hakları ile korunmaktadır.'}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Web sitesi tasarımı ve kullanıcı arayüzü',
                        'MSCodeHub logosu ve kurumsal kimlik',
                        'Yazılı içerikler, makaleler, blog yazıları',
                        'Görseller, fotoğraflar, grafikler',
                        'Kaynak kodlar ve yazılım çözümleri',
                        'Marka ve ticaret unvanı'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <span className="text-blue-400">©</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-blue-400 mt-8">{termsSections?.intellectual?.projects?.title || '4.2 Proje Hakları'}</h3>
                  <div className="bg-gray-800/30 p-6 rounded-lg">
                    <p className="leading-relaxed mb-4">{termsSections?.intellectual?.projects?.description || 'Geliştirilen projelerin fikri mülkiyet hakları, proje anlaşmasında belirtilen şartlara göre belirlenir. Özel olarak geliştirilmiş çözümler için haklar müşteriye devredilir.'}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-900/20 p-4 rounded border-l-4 border-green-400">
                        <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                          <span className="mr-2">👤</span> Müşteriye Ait
                        </h4>
                        <ul className="text-sm space-y-2">
                          <li>• Özel geliştirilen kodlar</li>
                          <li>• Müşteri verileri</li>
                          <li>• İş süreçleri</li>
                          <li>• Özel tasarımlar</li>
                        </ul>
                      </div>
                      <div className="bg-blue-900/20 p-4 rounded border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-400 mb-3 flex items-center">
                          <span className="mr-2">🏢</span> MSCodeHub'a Ait
                        </h4>
                        <ul className="text-sm space-y-2">
                          <li>• Genel framework'ler</li>
                          <li>• Metodolojiler</li>
                          <li>• Araçlar ve kütüphaneler</li>
                          <li>• Genel çözüm yaklaşımları</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Tüketici Hakları */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.consumer?.title || '5. Kapsamlı Tüketici Hakları ve Koruması'}</h2>
                <div className="text-gray-300 space-y-6">
                  {termsSections?.consumer?.intro && (
                    <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-sm font-semibold">{termsSections.consumer.intro}</p>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-blue-400">{termsSections?.consumer?.withdrawal?.title || '5.1 Cayma Hakkı (14 Gün)'}</h3>
                  <div className="space-y-4">
                    <p className="leading-relaxed">{termsSections?.consumer?.withdrawal?.description || 'Mesafeli sözleşmelerde, hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin 14 gün içinde cayma hakkınız bulunmaktadır.'}</p>
                    
                    {termsSections?.consumer?.withdrawal?.exceptions && (
                      <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-400 mb-2">⚠️ Cayma Hakkı İstisnalar</h4>
                        <p className="text-sm">{termsSections.consumer.withdrawal.exceptions}</p>
                      </div>
                    )}
                    
                    {termsSections?.consumer?.withdrawal?.process && (
                      <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-semibold text-green-400 mb-2">✅ Cayma Süreci</h4>
                        <p className="text-sm">{termsSections.consumer.withdrawal.process}</p>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-blue-400 mt-8">{termsSections?.consumer?.warranty?.title || '5.2 Detaylı Garanti Koşulları'}</h3>
                  <div className="grid gap-4">
                    {(termsSections?.consumer?.warranty?.items || [
                      'Fonksiyonel Garanti: Teslim edilen yazılımın sözleşmede belirtilen tüm özelliklere tam uyumu (12 ay)',
                      'Hata Giderme Garantisi: Teslimat sonrası 6 ay içinde tespit edilen programlama hatalarının ücretsiz giderilmesi',
                      'Güvenlik Garantisi: Güvenlik açıklarının tespit edildiği tarihten itibaren 72 saat içinde kapatılması',
                      'Performans Garantisi: Belirtilen performans kriterlerine uygunluk (yükleme hızı, response time)',
                      'Uyumluluk Garantisi: Belirtilen tarayıcı, işletim sistemi ve cihaz uyumluluğu'
                    ]).map((item: string, index: number) => (
                      <div key={index} className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start space-x-3">
                          <span className="text-green-400 font-bold mt-1">🛡️</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {termsSections?.consumer?.rights && (
                    <>
                      <h3 className="text-lg font-semibold text-blue-400 mt-8">{termsSections.consumer.rights.title || '5.3 Ek Tüketici Hakları'}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {(termsSections.consumer.rights.items || [
                          'Ücretsiz İptal: Hizmet başlamamış ise tam ücretsiz iptal hakkı',
                          'Değişiklik Talep Etme: Proje kapsamında makul değişiklik talep etme hakkı',
                          'İkinci Görüş: Teknik konularda bağımsız uzman görüşü alma hakkı',
                          'Şeffaflık: Proje ilerlemesi hakkında düzenli bilgi alma hakkı',
                          'Veri Taşınabilirliği: Proje sonunda tüm kodlar ve verileri alma hakkı',
                          'Eğitim ve Dokümantasyon: Kullanım kılavuzu ve temel eğitim alma hakkı'
                        ]).map((item: string, index: number) => (
                          <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-purple-500/20">
                            <div className="flex items-start space-x-3">
                              <span className="text-purple-400">✓</span>
                              <span className="text-sm">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <h3 className="text-lg font-semibold text-blue-400 mt-8">{termsSections?.consumer?.complaints?.title || '5.4 Şikayet ve Uyuşmazlık Çözüm Yolları'}</h3>
                  <div className="space-y-4">
                    <p className="leading-relaxed">{termsSections?.consumer?.complaints?.description || 'Hizmetlerimizle ilgili şikayetlerinizi öncelikle metehan@mscodehub.com adresine iletiniz. 15 iş günü içinde yazılı yanıt verilecektir.'}</p>
                    
                    {termsSections?.consumer?.complaints?.escalation && (
                      <div className="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-semibold text-red-400 mb-2">⚖️ Çözüm Bulunamazsa</h4>
                        <p className="text-sm">{termsSections.consumer.complaints.escalation}</p>
                      </div>
                    )}
                    
                    {termsSections?.consumer?.complaints?.alternative && (
                      <div className="bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-400 mb-2">🤝 Alternatif Çözüm Yolları</h4>
                        <p className="text-sm">{termsSections.consumer.complaints.alternative}</p>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* 6. Veri Koruma */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.dataProtection?.title || '6. Kişisel Verilerin Korunması'}</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/20">
                    {(termsSections?.dataProtection?.description || 'Kişisel verilerinizin işlenmesi KVKK uyarınca Gizlilik Politikamızda detaylandırılmıştır.\n\nBu şartları kabul ederek, KVKK kapsamında kişisel verilerinizin işlenmesine rıza göstermiş sayılırsınız.').split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph.includes('Gizlilik Politikamızda') ? (
                          <>
                            {paragraph.split('Gizlilik Politikamızda')[0]}
                            <a href="/gizlilik-politikasi" className="text-blue-400 hover:text-blue-300 mx-1 underline">
                              Gizlilik Politikamızda
                            </a>
                            {paragraph.split('Gizlilik Politikamızda')[1]}
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </section>

              {/* 7. Uygulanacak Hukuk */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.law?.title || '7. Uygulanacak Hukuk ve Yetki'}</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-lg border border-gray-600/30">
                    {(termsSections?.law?.description || 'Bu sözleşmeden doğan uyuşmazlıkların çözümünde Türk Hukuku uygulanır.\n\nRize Mahkemeleri ve İcra Müdürlükleri yetkilidir.').split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* 8. Yürürlük */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{termsSections?.effective?.title || '8. Yürürlük ve Değişiklikler'}</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-6 rounded-lg border border-green-500/20">
                    {(termsSections?.effective?.description || 'Bu kullanım şartları yayın tarihinde yürürlüğe girmiştir.\n\nDeğişiklikler web sitemizde duyurulur.').split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="leading-relaxed">{paragraph}</p>
                    ))}
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

export default KullanimSartlari 