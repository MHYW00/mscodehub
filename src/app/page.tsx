'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useTranslation } from '../hooks/useTranslation'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'

const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false })

export default function Home() {
  const { t } = useTranslation()
  const heroAnimation = useScrollAnimation()
  const servicesAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"
    >
        <Navigation />

        {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            ref={heroAnimation.ref}
            initial="hidden"
            animate={heroAnimation.controls}
            variants={staggerContainer}
            className="mb-6 md:mb-8"
          >
            <motion.h1 
              variants={scaleIn}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 md:mb-6 leading-tight"
            >
              MSCodeHub
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 mb-2"
            >
              {t('home.company.founder')}: <span className="text-white font-semibold">Mete Han Yıldırım, Semih Utku Birinci</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 md:mb-8 font-light leading-relaxed"
            >
              {t('home.company.tagline')}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t('home.company.description')}
            </motion.p>
          </motion.div>

          {/* Company Stats */}
          <motion.div 
            initial="visible"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <motion.div variants={staggerItem} className="text-center">
              <motion.div 
                variants={scaleIn}
                className="text-3xl md:text-4xl font-bold text-blue-400"
              >
                12
              </motion.div>
              <div className="text-gray-400">{t('home.stats.projects')}</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <motion.div 
                variants={scaleIn}
                className="text-3xl md:text-4xl font-bold text-purple-400"
              >
                %98
              </motion.div>
              <div className="text-gray-400">{t('home.stats.satisfaction')}</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <motion.div 
                variants={scaleIn}
                className="text-3xl md:text-4xl font-bold text-green-400"
              >
                2024
              </motion.div>
              <div className="text-gray-400">{t('home.stats.founded')}</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <motion.div 
                variants={scaleIn}
                className="text-3xl md:text-4xl font-bold text-orange-400"
              >
                7/24
              </motion.div>
              <div className="text-gray-400">{t('home.stats.support')}</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="visible"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mobile-button-spacing"
          >
            <motion.div variants={fadeInLeft}>
            <Link
              href="/projeler"
                className="block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center min-h-[48px] min-w-[120px]"
            >
              {t('home.cta.projects')}
            </Link>
            </motion.div>
            <motion.div variants={fadeInRight}>
            <Link
              href="/iletisim"
                className="block px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-center min-h-[48px] min-w-[120px]"
            >
              {t('home.cta.contact')}
            </Link>
            </motion.div>
          </motion.div>
          </div>
        </section>

        {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={servicesAnimation.ref}
            initial="hidden"
            animate={servicesAnimation.controls}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">{t('services.title')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300">{t('home.services.subtitle')}</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={servicesAnimation.controls}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-blue-400 mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v10H4V6z"/>
              </svg>
            </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors text-center">
                {t('services.web.title')}
            </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed text-center">
                {t('services.web.description')}
            </p>
          </motion.div>

            <motion.div variants={staggerItem} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-green-400 mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"/>
              </svg>
            </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors text-center">
                {t('services.ecommerce.title')}
            </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed text-center">
                {t('services.ecommerce.description')}
            </p>
          </motion.div>

            <motion.div variants={staggerItem} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-purple-400 mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors text-center">
                {t('services.api.title')}
            </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed text-center">
                {t('services.api.description')}
            </p>
          </motion.div>

            <motion.div variants={staggerItem} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-orange-400 mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors text-center">
                {t('services.consulting.title')}
            </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed text-center">
                {t('services.consulting.description')}
            </p>
            </motion.div>
          </motion.div>
          </div>
        </section>

        {/* Featured Projects Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={projectsAnimation.ref}
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">{t('projects.title')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">{t('projects.subtitle')}</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <motion.div variants={fadeInLeft} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-blue-400 mb-2">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t('projects.ecommerce.title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  {t('projects.ecommerce.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full">Redis</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-green-400 mb-2">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t('projects.dashboard.title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  {t('projects.dashboard.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">React</span>
                  <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">MongoDB</span>
                  <span className="px-3 py-1 text-xs bg-pink-500/20 text-pink-400 rounded-full">TensorFlow</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link
              href="/projeler"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
{t('projects.viewAll')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          </div>
        </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('blog.hero.title')}</h2>
            <p className="text-xl text-gray-300">{t('blog.hero.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('blog.react.title')}</h3>
              <p className="text-gray-400 text-sm mb-4">{t('blog.react.description')}</p>
              <div className="text-blue-400 text-sm">{t('blog.date.react')}</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('blog.web3.title')}</h3>
              <p className="text-gray-400 text-sm mb-4">{t('blog.web3.description')}</p>
              <div className="text-green-400 text-sm">{t('blog.date.web3')}</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
            </div>
              <h3 className="text-lg font-semibold mb-2">{t('blog.rust.title')}</h3>
              <p className="text-gray-400 text-sm mb-4">{t('blog.rust.description')}</p>
              <div className="text-orange-400 text-sm">{t('blog.date.rust')}</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
{t('blog.viewAll')}
            </Link>
            </div>
          </div>
        </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/iletisim"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
{t('cta.consultation')}
            </Link>
            <Link
              href="/projeler"
              className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
{t('cta.portfolio')}
          </Link>
          </div>
        </div>
        </section>
      </motion.div>
  )
} 