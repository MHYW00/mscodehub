'use client'

import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import { useTranslation } from '../../hooks/useTranslation'

const KVKK = () => {
  const { t } = useTranslation()

  // Type-safe data access
  const kvkkSections = t('legal.kvkk.sections') as any

  return (
    <>
      <Head>
        <title>KVKK Aydınlatma Metni | MSCodeHub - Kişisel Verilerin Korunması</title>
        <meta name="description" content="MSCodeHub KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri işleme, veri sahibi hakları, başvuru yöntemleri ve iletişim bilgileri." />
        <meta name="keywords" content="KVKK, kişisel verilerin korunması, aydınlatma metni, veri işleme, veri sahibi hakları, 6698 sayılı kanun, MSCodeHub KVKK, data protection law, personal data processing" />
        <meta property="og:title" content="KVKK Aydınlatma Metni | MSCodeHub - Kişisel Verilerin Korunması" />
        <meta property="og:description" content="MSCodeHub KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri işleme süreçleri ve veri sahibi haklarınız." />
        <meta property="og:url" content="https://mscodehub.com/kvkk" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="KVKK Aydınlatma Metni | MSCodeHub" />
        <meta name="twitter:description" content="6698 sayılı KVKK kapsamında kişisel veri işleme süreçleri ve veri sahibi haklarınız hakkında bilgi." />
        <link rel="canonical" href="https://mscodehub.com/kvkk" />
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
                  "name": "KVKK Aydınlatma Metni",
                  "description": "MSCodeHub KVKK aydınlatma metni ve kişisel veri işleme politikası",
                  "url": "https://mscodehub.com/kvkk",
                  "inLanguage": "tr-TR",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "MSCodeHub",
                    "url": "https://mscodehub.com"
                  },
                  "about": {
                    "@type": "Thing",
                    "name": "KVKK Uyumluluk",
                    "description": "6698 sayılı Kişisel Verilerin Korunması Kanunu uyum metni"
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
                {t('legal.kvkk.title')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('legal.kvkk.subtitle')}
              </p>
              <div className="text-sm text-gray-400 mt-4">
                {t('legal.kvkk.lawNote')} • {t('legal.privacy.lastUpdated')}: {new Date().toLocaleDateString(t('nav.home') === 'Home' ? 'en-US' : 'tr-TR')}
              </div>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 space-y-8">
              
              {/* Veri Sorumlusu */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{kvkkSections?.controller?.title || '1. Veri Sorumlusu'}</h2>
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">{kvkkSections?.controller?.company || 'MSCodeHub'}</h3>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Adres:</strong> {kvkkSections?.controller?.address || 'Rize, Türkiye'}</p>
                    <p><strong>E-posta:</strong> <a href={`mailto:${kvkkSections?.controller?.email || 'metehan@mscodehub.com'}`} className="text-blue-400 hover:text-blue-300">{kvkkSections?.controller?.email || 'metehan@mscodehub.com'}</a></p>
                    <p><strong>Telefon:</strong> <a href={`tel:${kvkkSections?.controller?.phone || '+90 543 123 4567'}`} className="text-blue-400 hover:text-blue-300">{kvkkSections?.controller?.phone || '+90 543 123 4567'}</a></p>
                  </div>
                  <p className="mt-4 text-gray-300">{kvkkSections?.controller?.description || 'KVKK kapsamında veri işliyoruz.'}</p>
                </div>
              </section>

              {/* İşlenen Kişisel Veriler */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{kvkkSections?.dataTypes?.title || '2. İşlenen Kişisel Veriler'}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">{kvkkSections?.dataTypes?.identity?.title || '2.1 Kimlik Verileri'}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {(kvkkSections?.dataTypes?.identity?.items || ['Ad, soyad', 'Doğum tarihi (gerekli hallerde)', 'TC Kimlik No (sözleşme imzalama durumunda)']).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-green-900/30 p-6 rounded-xl border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">{kvkkSections?.dataTypes?.contact?.title || '2.2 İletişim Verileri'}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {(kvkkSections?.dataTypes?.contact?.items || ['E-posta adresi', 'Telefon numarası', 'Adres bilgisi', 'Web sitesi/sosyal medya hesapları']).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/20">
                    <h3 className="text-lg font-semibold text-green-400 mb-3">{kvkkSections?.dataTypes?.transaction?.title || '2.3 Müşteri İşlem Verileri'}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {(kvkkSections?.dataTypes?.transaction?.items || ['Proje talep detayları', 'Teknik gereksinimler', 'Bütçe bilgileri', 'İletişim geçmişi']).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-500/20">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">{kvkkSections?.dataTypes?.technical?.title || '2.4 Teknik Veriler'}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {(kvkkSections?.dataTypes?.technical?.items || ['IP adresi', 'Tarayıcı bilgileri', 'İşletim sistemi', 'Çerez verileri', 'Site kullanım istatistikleri']).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* İşleme Amaçları */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">İş Süreçleri</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Hizmet taleplerinizi değerlendirmek</li>
                        <li>• Proje teklifleri hazırlamak</li>
                        <li>• Sözleşme yönetimi</li>
                        <li>• Proje geliştirme süreçleri</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">İletişim</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Müşteri desteği sağlamak</li>
                        <li>• Bilgilendirme yapmak</li>
                        <li>• Geri bildirim almak</li>
                        <li>• Pazarlama faaliyetleri</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Yasal Yükümlülükler</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Vergi mevzuatı gereği</li>
                        <li>• Ticari defter tutma</li>
                        <li>• Arşivleme yükümlülükleri</li>
                        <li>• Denetim süreçleri</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Güvenlik</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sistem güvenliği</li>
                        <li>• Fraud önleme</li>
                        <li>• Risk yönetimi</li>
                        <li>• İç denetim</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Hukuki Sebepler */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. İşlemenin Hukuki Sebepleri</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <strong>Sözleşmenin kurulması veya ifası:</strong> Hizmet sözleşmelerinin yapılması ve yürütülmesi
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <strong>Yasal yükümlülük:</strong> Vergi, ticaret ve diğer mevzuat gereği
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <strong>Meşru menfaat:</strong> İş geliştirme, güvenlik ve analiz faaliyetleri
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <strong>Açık rıza:</strong> Pazarlama iletişimi ve özel kategori veriler için
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Aktarım */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Kişisel Verilerin Aktarılması</h2>
                <div className="text-gray-300 space-y-4">
                  <h3 className="text-lg font-semibold text-blue-400">5.1 Yurt İçi Aktarım</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Yasal yükümlülük gereği kamu kurum ve kuruluşlarına</li>
                    <li>Hizmet sağlayıcı firmalar (hosting, bulut hizmetleri vb.)</li>
                    <li>Muhasebe ve hukuk danışmanlığı hizmeti alınan firmalar</li>
                    <li>Analiz ve raporlama hizmeti veren firmalar</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-blue-400 mt-6">5.2 Yurt Dışı Aktarım</h3>
                  <p>
                    Kişisel verileriniz, yeterli koruma düzeyine sahip ülkelere veya 
                    uygun güvenceler sağlanması kaydıyla üçüncü ülkelerdeki hizmet 
                    sağlayıcılarına aktarılabilir.
                  </p>
                  <div className="bg-amber-900/20 border border-amber-500/30 p-3 rounded-lg">
                    <p className="text-amber-200 text-sm">
                      <strong>Önemli:</strong> Yurt dışı aktarımlar yalnızca KVKK'ya uygun şekilde 
                      ve gerekli güvenceler alınarak yapılmaktadır.
                    </p>
                  </div>
                </div>
              </section>

              {/* Veri Sahibi Haklarınız */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Veri Sahibi Haklarınız</h2>
                <div className="text-gray-300 space-y-4">
                  <p>KVKK'nın 11. maddesi uyarınca sahip olduğunuz haklar:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-green-900/20 border border-green-500/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-400 mb-1">Bilgi Alma Hakkı</h4>
                        <p className="text-sm">Verilerinizin işlenip işlenmediğini öğrenme</p>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-1">Erişim Hakkı</h4>
                        <p className="text-sm">İşlenen verileriniz hakkında bilgi talep etme</p>
                      </div>
                      <div className="bg-purple-900/20 border border-purple-500/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-400 mb-1">Düzeltme Hakkı</h4>
                        <p className="text-sm">Yanlış/eksik verilerin düzeltilmesini isteme</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-red-900/20 border border-red-500/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-400 mb-1">Silme Hakkı</h4>
                        <p className="text-sm">Verilerinizin silinmesini talep etme</p>
                      </div>
                      <div className="bg-orange-900/20 border border-orange-500/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-orange-400 mb-1">İtiraz Hakkı</h4>
                        <p className="text-sm">Veri işlemeye karşı itirazda bulunma</p>
                      </div>
                      <div className="bg-gray-700/30 border border-gray-500/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-300 mb-1">Tazminat Hakkı</h4>
                        <p className="text-sm">Zarar durumunda tazminat talep etme</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Başvuru Yöntemi */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Başvuru Yöntemi</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-3">İletişim Bilgileri</h4>
                    <div className="space-y-2">
                      <p><strong>E-posta:</strong> metehan@mscodehub.com</p>
                      <p><strong>Adres:</strong> MSCodeHub, Rize, Türkiye</p>
                      <p><strong>Konu:</strong> "KVKK Veri Sahibi Başvurusu"</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Başvurularınız 30 gün içinde değerlendirilir ve yanıtlanır.
                  </p>
                </div>
              </section>

              {/* Güvenlik */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Veri Güvenliği</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Kişisel verilerinizin güvenliği için alınan teknik ve idari tedbirler:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Teknik Tedbirler</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>SSL/TLS şifreleme</li>
                        <li>Güvenli veri tabanı</li>
                        <li>Düzenli backup alma</li>
                        <li>Güvenlik duvarı</li>
                        <li>Anti-virüs koruma</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">İdari Tedbirler</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Erişim yetkilendirmeleri</li>
                        <li>Personel eğitimleri</li>
                        <li>Gizlilik sözleşmeleri</li>
                        <li>Düzenli denetimler</li>
                        <li>Veri minimizasyonu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* İletişim */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. İletişim</h2>
                <div className="text-gray-300">
                  <p>KVKK ile ilgili sorularınız için:</p>
                  <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                    <p><strong>Veri Sorumlusu:</strong> MSCodeHub</p>
                    <p><strong>E-posta:</strong> metehan@mscodehub.com</p>
                    <p><strong>Telefon:</strong> +90 543 123 4567</p>
                    <p><strong>Adres:</strong> Rize, Türkiye</p>
                  </div>
                </div>
              </section>

            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                {t('legal.privacy.backHome')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default KVKK 