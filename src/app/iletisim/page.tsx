'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import emailjs from '@emailjs/browser'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import { buttonVariants, hoverVariants } from '../../hooks/useMicroInteractions'

const Navigation = dynamic(() => import('../../components/Navigation'), { ssr: false })

function ContactContent() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const heroAnimation = useScrollAnimation()
  const formAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()
  const mapAnimation = useScrollAnimation()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // URL parametresinden proje bilgisini al ve formu doldur
  useEffect(() => {
    const proje = searchParams.get('proje')
    if (proje) {
      setFormData(prev => ({
        ...prev,
        projectType: proje,
        message: `${proje} projesi hakkında detaylı bilgi almak istiyorum. Lütfen benimle iletişime geçin.`
      }))
    }
  }, [searchParams])

  // SEO için document title güncellemesi
  useEffect(() => {
    document.title = t('seo.contact.title')
    
    // Meta description güncelleme
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.contact.description'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = t('seo.contact.description')
      document.head.appendChild(meta)
    }

    // Meta keywords güncelleme
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('seo.contact.keywords'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = t('seo.contact.keywords')
      document.head.appendChild(meta)
    }
  }, [t])

  // EmailJS yapılandırması
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_mscodehub',
    TEMPLATE_ID: 'template_contact',
    PUBLIC_KEY: 'your_public_key_here'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key_here') {
        const subject = `MSCodeHub Proje Talebi - ${formData.projectType}`
        const body = `
Merhaba,

Aşağıdaki bilgilerle proje talebi iletmek istiyorum:

👤 Ad Soyad: ${formData.name}
📧 E-posta: ${formData.email}
🏢 Şirket/Kurum: ${formData.company || 'Belirtilmemiş'}
💼 Proje Türü: ${formData.projectType}
💰 Bütçe Aralığı: ${formData.budget || 'Belirtilmemiş'}

📝 Proje Detayları:
${formData.message}

---
Bu mesaj MSCodeHub web sitesi iletişim formu aracılığıyla oluşturulmuştur.
        `
        
        window.location.href = `mailto:metehan@mscodehub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        setTimeout(() => {
          const whatsappMessage = `
🔹 *MSCodeHub Proje Talebi*

👤 *Ad:* ${formData.name}
📧 *E-posta:* ${formData.email}
🏢 *Şirket:* ${formData.company || 'Belirtilmemiş'}
💼 *Proje:* ${formData.projectType}
💰 *Bütçe:* ${formData.budget || 'Belirtilmemiş'}

📝 *Detaylar:*
${formData.message}
          `
          window.open(`https://wa.me/905431234567?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
        }, 1500)

        setSubmitStatus('success')
        
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: ''
        })

        return
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Belirtilmemiş',
        project_type: formData.projectType,
        budget: formData.budget || 'Belirtilmemiş',
        message: formData.message,
        to_email: 'metehan@mscodehub.com'
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      })

      const whatsappMessage = `Merhaba! ${formData.name} isimli kişi web sitesi üzerinden ${formData.projectType} projesi için iletişime geçti. E-posta: ${formData.email}`
      const whatsappUrl = `https://wa.me/905431234567?text=${encodeURIComponent(whatsappMessage)}`
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
      }, 2000)

    } catch (error) {
      console.error('E-posta gönderme hatası:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      titleKey: "contact.methods.whatsapp.title",
      descriptionKey: "contact.methods.whatsapp.description",
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
        </svg>
      ),
      value: "+90 543 123 4567", 
      link: "https://wa.me/905431234567"
    },
    {
      titleKey: "contact.methods.email.title",
      descriptionKey: "contact.methods.email.description",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      value: "metehan@mscodehub.com",
      link: "mailto:metehan@mscodehub.com"
    },
    {
      titleKey: "contact.methods.location.title",
      descriptionKey: "contact.methods.location.description",
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      value: "Rize, Türkiye",
      link: "#"
    },
    {
      titleKey: "contact.methods.hours.title",
      descriptionKey: "contact.methods.hours.description",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>
      ),
      value: "09:00 - 18:00",
      link: "#"
    }
  ]

  const projectTypes = [
    { name: "Web Sitesi", value: "website" },
    { name: "E-Ticaret", value: "ecommerce" },
    { name: "Mobil Uygulama", value: "mobile" },
    { name: "Web Uygulaması", value: "webapp" },
    { name: "API Geliştirme", value: "api" },
    { name: "Kurumsal Çözüm", value: "enterprise" },
    { name: "Diğer", value: "other" }
  ]

  const budgetRanges = [
    { name: "1.000₺ - 5.000₺", value: "1k-5k" },
    { name: "5.000₺ - 15.000₺", value: "5k-15k" },
    { name: "15.000₺ - 50.000₺", value: "15k-50k" },
    { name: "50.000₺ - 100.000₺", value: "50k-100k" },
    { name: "100.000₺+", value: "100k+" },
    { name: "Teklif almak istiyorum", value: "quote" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        ref={heroAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={heroAnimation.controls}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
          >
            {t('contact.page.cta.title')}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {t('contact.page.cta.subtitle')}
          </motion.p>
          
          {/* Quick Contact Stats */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-16"
          >
            {[
              { value: "24", label: t('contact.stats.response'), color: "text-blue-400" },
              { value: "%100", label: t('contact.stats.secure'), color: "text-green-400" },
              { value: t('contact.stats.consultation').split(' ')[0], label: t('contact.stats.consultation'), color: "text-purple-400" },
              { value: "7/24", label: t('contact.stats.support'), color: "text-orange-400" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div 
                  className={`text-3xl font-bold ${stat.color}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section 
        ref={contactAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={contactAnimation.controls}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-4"
            >
              {t('contact.channels.title')}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300"
            >
              {t('contact.channels.subtitle')}
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{t(method.titleKey)}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{t(method.descriptionKey)}</p>
                
                {method.link !== "#" ? (
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    {method.value}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="text-gray-300 font-medium">{method.value}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('contact.form.detailedTitle')}</h2>
            <p className="text-xl text-gray-300">{t('contact.form.detailedSubtitle')}</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-500/20 border border-green-500/50 rounded-xl text-center">
                <div className="text-green-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Mesajınız Başarıyla Gönderildi!</h3>
                <p className="text-green-300">
                  E-posta istemciniz açıldı ve WhatsApp yönlendirmesi yapıldı. 
                  24 saat içinde size geri dönüş yapacağız.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-500/20 border border-red-500/50 rounded-xl text-center">
                <div className="text-red-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">Gönderim Hatası</h3>
                <p className="text-red-300">
                  Mesajınız gönderilemedi. Lütfen doğrudan WhatsApp veya e-posta ile iletişime geçin.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base min-h-[48px] touch-manipulation"
                    placeholder={t('contact.form.placeholder.name')}
                    autoComplete="name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base min-h-[48px] touch-manipulation"
                    placeholder={t('contact.form.placeholder.email')}
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>
              </div>

              {/* Company and Project Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base min-h-[48px] touch-manipulation"
                    placeholder={t('contact.form.placeholder.company')}
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.projectType')}
                  </label>
                  <select
                    id="projectType"
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base min-h-[48px] touch-manipulation"
                  >
                    <option value="">{t('contact.form.placeholder.projectType')}</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.budget')}
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base min-h-[48px] touch-manipulation"
                >
                  <option value="">{t('contact.form.placeholder.budget')}</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-base touch-manipulation"
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed min-h-[48px] min-w-[120px] touch-manipulation"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      <span>Gönderiliyor...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      <span>{t('contact.form.submit')}</span>
                    </div>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section 
        ref={mapAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={mapAnimation.controls}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-4"
            >
              {t('contact.location.title')}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300"
            >
              {t('contact.location.subtitle')}
            </motion.p>
          </div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center"
          >
            <div className="mb-6">
              <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <h3 className="text-2xl font-bold mb-2">{t('contact.location.city')}</h3>
              <p className="text-gray-400 mb-6">
                {t('contact.location.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-800/50 rounded-xl">
                <div className="text-blue-400 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">{t('contact.services.local.title')}</h4>
                <p className="text-sm text-gray-400">{t('contact.services.local.description')}</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-xl">
                <div className="text-green-400 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">{t('contact.services.remote.title')}</h4>
                <p className="text-sm text-gray-400">{t('contact.services.remote.description')}</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-xl">
                <div className="text-purple-400 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">{t('contact.services.flexible.title')}</h4>
                <p className="text-sm text-gray-400">{t('contact.services.flexible.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  )
} 