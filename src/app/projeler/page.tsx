'use client'

import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn } from '../../hooks/useScrollAnimation'
import { buttonVariants, hoverVariants } from '../../hooks/useMicroInteractions'

const Navigation = dynamic(() => import('../../components/Navigation'), { ssr: false })

export default function Projeler() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  // SEO için document title güncellemesi
  useEffect(() => {
    document.title = t('seo.projects.title')
    
    // Meta description güncelleme
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.projects.description'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = t('seo.projects.description')
      document.head.appendChild(meta)
    }

    // Meta keywords güncelleme
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('seo.projects.keywords'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = t('seo.projects.keywords')
      document.head.appendChild(meta)
    }
  }, [t])

  const heroAnimation = useScrollAnimation()
  const statsAnimation = useScrollAnimation()
  const categoriesAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const testimonialsAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()

  // İstatistikler
  const stats = [
    { labelKey: "projects.stats.completed", value: "12+", icon: "https://cdn-icons-png.flaticon.com/32/190/190411.png", color: "text-green-400" },
    { labelKey: "projects.stats.activeClients", value: "8+", icon: "https://cdn-icons-png.flaticon.com/32/1077/1077114.png", color: "text-blue-400" },
    { labelKey: "projects.stats.codeLines", value: "300K+", icon: "https://cdn-icons-png.flaticon.com/32/1336/1336494.png", color: "text-purple-400" },
    { labelKey: "projects.stats.uptime", value: "%99.8", icon: "https://cdn-icons-png.flaticon.com/32/2983/2983788.png", color: "text-orange-400" }
  ]

  // Kategoriler
  const categories = [
    { id: 'all', nameKey: 'projects.categories.all', count: 12, icon: 'https://cdn-icons-png.flaticon.com/32/3767/3767084.png', color: 'blue' },
    { id: 'web', nameKey: 'projects.categories.web', count: 4, icon: 'https://cdn-icons-png.flaticon.com/32/1006/1006771.png', color: 'green' },
    { id: 'ecommerce', nameKey: 'projects.categories.ecommerce', count: 3, icon: 'https://cdn-icons-png.flaticon.com/32/3081/3081559.png', color: 'purple' },
    { id: 'mobile', nameKey: 'projects.categories.mobile', count: 2, icon: 'https://cdn-icons-png.flaticon.com/32/2991/2991148.png', color: 'pink' },
    { id: 'dashboard', nameKey: 'projects.categories.dashboard', count: 2, icon: 'https://cdn-icons-png.flaticon.com/32/1828/1828673.png', color: 'orange' },
    { id: 'api', nameKey: 'projects.categories.api', count: 1, icon: 'https://cdn-icons-png.flaticon.com/32/2721/2721297.png', color: 'indigo' }
  ]

  // Projeler
  const projects = [
    // Web Siteleri
    {
      title: "Kurumsal Web Sitesi",
      description: "Modern tasarım ve SEO optimizasyonu ile kurumsal web sitesi. Responsive tasarım, hızlı yükleme ve admin paneli.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS"],
      category: "web",
      duration: "3-4 hafta",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Responsive Tasarım", "SEO Optimizasyonu", "Admin Paneli", "İletişim Formu"],
      icon: "https://cdn-icons-png.flaticon.com/32/1006/1006771.png",
      socialProof: "Son 30 günde 8 müşteri seçti",
      urgency: "Bu ay sadece 2 slot kaldı",
      clientLogo: "https://cdn-icons-png.flaticon.com/32/3135/3135715.png",
      resultMetric: "Müşteri memnuniyeti tam"
    },
    {
      title: "Portfolio Web Sitesi",
      description: "Freelancer ve ajanslar için modern portfolio sitesi. Proje galerisi, blog sistemi ve iletişim entegrasyonu.",
      tech: ["React", "Gatsby", "GraphQL", "Netlify CMS"],
      category: "web",
      duration: "2-3 hafta",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Proje Galerisi", "Blog Sistemi", "İletişim Formu", "Hızlı Yükleme"],
      icon: "https://cdn-icons-png.flaticon.com/32/3135/3135715.png"
    },
    {
      title: "Restoran Web Sitesi",
      description: "Restoran ve kafe işletmeleri için menü, rezervasyon ve online sipariş sistemi entegreli web sitesi.",
      tech: ["WordPress", "WooCommerce", "Custom Theme", "Payment Gateway"],
      category: "web",
      duration: "3-4 hafta",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Online Menü", "Rezervasyon Sistemi", "Online Sipariş", "Ödeme Entegrasyonu"],
      icon: "https://cdn-icons-png.flaticon.com/32/685/685352.png"
    },
    {
      title: "Emlak Web Sitesi",
      description: "Emlak ofisleri için gelişmiş filtreleme, harita entegrasyonu ve CRM sistemi olan web sitesi.",
      tech: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
      category: "web",
      duration: "4-6 hafta",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Gelişmiş Filtreleme", "Harita Entegrasyonu", "CRM Sistemi", "Mobil Uyumlu"],
      icon: "https://cdn-icons-png.flaticon.com/32/1946/1946488.png"
    },

    // E-Ticaret
    {
      title: "Küçük E-Ticaret Sitesi",
      description: "KOBİ'ler için basit ve etkili e-ticaret çözümü. Ürün yönetimi, sipariş takibi ve ödeme entegrasyonu.",
      tech: ["Shopify", "Liquid", "JavaScript", "Payment APIs"],
      category: "ecommerce",
      duration: "4-5 hafta",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Ürün Kataloğu", "Sepet Sistemi", "Ödeme Entegrasyonu", "Sipariş Yönetimi"],
      icon: "https://cdn-icons-png.flaticon.com/32/3081/3081559.png",
      socialProof: "Son 7 günde 5 müşteri seçti",
      urgency: "Erken rezervasyon %15 indirim",
      clientLogo: "https://cdn-icons-png.flaticon.com/32/2830/2830284.png",
      resultMetric: "Başarıyla teslim edildi"
    },
    {
      title: "B2B E-Ticaret Platformu",
      description: "Toptan satış için gelişmiş B2B e-ticaret sistemi. Bayi yönetimi, toplu sipariş ve özel fiyatlandırma.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      category: "ecommerce",
      duration: "8-10 hafta",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Bayi Sistemi", "Toplu Sipariş", "Özel Fiyatlandırma", "Stok Yönetimi"],
      icon: "https://cdn-icons-png.flaticon.com/32/2830/2830284.png"
    },
    {
      title: "Marketplace Platformu",
      description: "Çok satıcılı marketplace sistemi. Satıcı paneli, komisyon sistemi ve ödeme dağıtımı.",
      tech: ["React", "Express.js", "MongoDB", "Stripe Connect"],
      category: "ecommerce",
      duration: "12-16 hafta",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Çok Satıcı", "Komisyon Sistemi", "Ödeme Dağıtımı", "Satıcı Paneli"],
      icon: "https://cdn-icons-png.flaticon.com/32/2830/2830657.png"
    },

    // Mobil Uygulamalar
    {
      title: "Kurumsal Mobil Uygulama",
      description: "İşletmeler için müşteri hizmetleri ve bilgilendirme amaçlı mobil uygulama. Push notification ve offline destek.",
      tech: ["React Native", "Firebase", "AsyncStorage", "Push Notifications"],
      category: "mobile",
      duration: "6-8 hafta",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Push Notification", "Offline Destek", "Kullanıcı Paneli", "İletişim Modülü"],
      icon: "https://cdn-icons-png.flaticon.com/32/2991/2991148.png",
      socialProof: "4.9/5 müşteri memnuniyeti",
      urgency: "Sınırlı sayıda geliştirici",
      clientLogo: "https://cdn-icons-png.flaticon.com/32/3135/3135823.png",
      resultMetric: "Kullanıcı memnuniyeti yüksek"
    },
    {
      title: "E-Ticaret Mobil App",
      description: "E-ticaret sitesi için companion mobil uygulama. Sepet, ödeme ve sipariş takibi özellikleri.",
      tech: ["Flutter", "Dart", "REST API", "Payment Gateway"],
      category: "mobile",
      duration: "8-10 hafta",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Mobil Ödeme", "Sipariş Takibi", "Push Bildirim", "Offline Sepet"],
      icon: "https://cdn-icons-png.flaticon.com/32/3081/3081559.png"
    },

    // Dashboard/Yönetim Panelleri
    {
      title: "İş Zekası Dashboard'u",
      description: "KPI takibi ve veri analizi için interaktif dashboard. Gerçek zamanlı grafikler ve raporlama sistemi.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      category: "dashboard",
      duration: "6-8 hafta",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Gerçek Zamanlı Veriler", "İnteraktif Grafikler", "PDF Raporlar", "Kullanıcı Yetkileri"],
      icon: "https://cdn-icons-png.flaticon.com/32/1828/1828673.png"
    },
    {
      title: "Proje Yönetim Sistemi",
      description: "Ekip çalışması için task yönetimi, zaman takibi ve proje planlama sistemi. Gantt chart ve kanban board.",
      tech: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
      category: "dashboard",
      duration: "8-10 hafta",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["Task Yönetimi", "Zaman Takibi", "Gantt Chart", "Ekip İşbirliği"],
      icon: "https://cdn-icons-png.flaticon.com/32/3135/3135706.png"
    },

    // API/Backend
    {
      title: "RESTful API Geliştirme",
      description: "Ölçeklenebilir ve güvenli API sistemi. Authentication, rate limiting ve comprehensive documentation.",
      tech: ["Node.js", "Express", "JWT", "Swagger"],
      category: "api",
      duration: "4-6 hafta",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&h=600&fit=crop&auto=format&q=90",
      features: ["JWT Authentication", "Rate Limiting", "API Documentation", "Error Handling"],
      icon: "https://cdn-icons-png.flaticon.com/32/2721/2721297.png"
    }
  ]

  // Müşteri yorumları
  const testimonials = [
    {
      name: "Uğur Birinci",
      company: "Viracup",
      textKey: "projects.testimonials.ugur.text",
      rating: 5,
      avatar: "https://cdn-icons-png.flaticon.com/32/3135/3135715.png",
      projectKey: "projects.testimonials.ugur.project"
    },
    {
      name: "Elif Kaya",
      company: "XYZ E-Ticaret",
      textKey: "projects.testimonials.elif.text",
      rating: 5,
      avatar: "https://cdn-icons-png.flaticon.com/32/3135/3135823.png",
      projectKey: "projects.testimonials.elif.project"
    },
    {
      name: "Mehmet Demir",
      company: "DEF Restoran",
      textKey: "projects.testimonials.mehmet.text",
      rating: 5,
      avatar: "https://cdn-icons-png.flaticon.com/32/3135/3135715.png",
      projectKey: "projects.testimonials.mehmet.project"
    }
  ]

  const getFilteredProjects = () => {
    return projects.filter(project => {
      return activeCategory === 'all' || project.category === activeCategory
    })
  }

  const getCategoryStyle = (categoryId: string) => {
    const isActive = activeCategory === categoryId
    const baseStyle = "border transition-all duration-300"
    
    if (isActive) {
      return `${baseStyle} bg-blue-500 text-white border-blue-500`
    }
    return `${baseStyle} bg-gray-800/50 text-gray-300 border-gray-700 hover:border-gray-600 hover:text-white`
  }



  const filteredProjects = getFilteredProjects()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <motion.div
            ref={heroAnimation.ref}
            variants={staggerContainer}
            initial="hidden"
            animate={heroAnimation.controls}
            className="text-center pt-16 pb-12"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
            >
              {t("projects.page.title")}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {t("projects.page.subtitle")}
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <a
                href="/iletisim"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <img src="https://cdn-icons-png.flaticon.com/32/3135/3135823.png" alt={t('projects.hero.contact')} className="w-6 h-6" />
                <span>{t('projects.labels.projectQuote')}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">{t('projects.cta.free')}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* İstatistikler */}
          <motion.div 
            ref={statsAnimation.ref}
            variants={staggerContainer}
            initial="hidden"
            animate={statsAnimation.controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="mb-2 flex justify-center">
                  <img src={stat.icon} alt={t(stat.labelKey)} className="w-8 h-8" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Kategori Filtreleri */}
          <motion.div className="mb-12">
            <motion.h2 className="text-2xl font-bold text-center mb-8">
              {t('projects.categories.title')}
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 min-h-[48px] touch-manipulation ${getCategoryStyle(category.id)}`}
                >
                  <img src={category.icon} alt={t(category.nameKey)} className="w-5 h-5" />
                  <span>{t(category.nameKey)}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Projeler Grid */}
          <motion.div 
            ref={projectsAnimation.ref}
            variants={staggerContainer}
            initial="hidden"
            animate={projectsAnimation.controls}
            className="mb-16"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={`projects-${activeCategory}`}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.title}-${index}`}
                    variants={staggerItem}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 group"
                  >
                    {/* Proje Görseli */}
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Görsel yüklenemezse fallback gradient göster
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center hidden">
                        <div className="text-center">
                          <div className="mb-2 flex justify-center">
                            <img src={project.icon} alt={project.title} className="w-12 h-12" />
                          </div>
                          <div className="text-white font-semibold text-sm">{project.title}</div>
                        </div>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Sosyal Kanıt Badge */}
                      {project.socialProof && (
                        <div className="absolute top-3 left-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                          {project.socialProof}
                        </div>
                      )}
                      
                      {/* Urgency Badge */}
                      {project.urgency && (
                        <div className="absolute top-3 right-3 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-2 py-1 rounded-full text-xs">
                          {project.urgency}
                        </div>
                      )}
                      
                      {/* Proje ikonu köşede */}
                      <div className="absolute bottom-3 left-3">
                        <img src={project.icon} alt={project.title} className="w-8 h-8 opacity-80" />
                      </div>
                    </div>

                    <div className="p-6 flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors">
                          {project.title}
                        </h3>
                      </div>
              
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {project.description}
                      </p>

                      {/* Özellikler */}
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-2">{t('projects.labels.features')}:</div>
                        <div className="flex flex-wrap gap-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs border border-blue-500/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Teknolojiler */}
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-2">{t('projects.labels.technologies')}:</div>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Süre */}
                      <div className="mb-4 text-xs">
                        <div>
                          <span className="text-gray-500">{t('projects.labels.duration')}: </span>
                          <span className="text-gray-300">{project.duration}</span>
                        </div>
                      </div>

                      {/* Sonuç Metriği */}
                      {project.resultMetric && (
                        <div className="mb-6 p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
                          <div className="flex items-center gap-2">
                            <img src="https://cdn-icons-png.flaticon.com/32/1828/1828884.png" alt="Success" className="w-4 h-4" />
                            <span className="text-green-400 text-sm font-medium">{project.resultMetric}</span>
                          </div>
                        </div>
                      )}

                      {/* Tek Buton - Ortalanmış */}
                      <div className="flex justify-center">
                        <motion.a
                          href="/iletisim"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl min-h-[48px] min-w-[120px] touch-manipulation"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                          </svg>
                          {t('projects.labels.getQuote')}
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Müşteri Yorumları */}
          <motion.div
            ref={testimonialsAnimation.ref}
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsAnimation.controls}
            className="mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-12"
            >
              {t('projects.testimonials.title')}
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img key={i} src="https://cdn-icons-png.flaticon.com/32/1828/1828884.png" alt="Star" className="w-4 h-4 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">"{t(testimonial.textKey)}"</p>
                  <div className="text-xs text-blue-400">{t('projects.testimonials.project')}: {t(testimonial.projectKey)}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            ref={ctaAnimation.ref}
            variants={staggerContainer}
            initial="hidden"
            animate={ctaAnimation.controls}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-700/50 rounded-2xl p-8 text-center backdrop-blur-sm mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-white mb-4"
            >
              {t("projects.page.customProject")}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
            >
              {t("projects.page.customDescription")}
            </motion.p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/iletisim"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 min-h-[48px] min-w-[120px] touch-manipulation"
              >
                {t("projects.page.getProjectQuote")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 