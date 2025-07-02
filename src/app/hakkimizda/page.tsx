'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import { buttonVariants, hoverVariants } from '../../hooks/useMicroInteractions'

const Navigation = dynamic(() => import('../../components/Navigation'), { ssr: false })

export default function AboutUs() {
  const { t } = useTranslation()
  const heroAnimation = useScrollAnimation()
  const storyAnimation = useScrollAnimation()
  const ceoAnimation = useScrollAnimation()
  const missionAnimation = useScrollAnimation()
  const techAnimation = useScrollAnimation()

  // SEO için document title güncellemesi
  useEffect(() => {
    document.title = t('seo.about.title')
    
    // Meta description güncelleme
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.about.description'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = t('seo.about.description')
      document.head.appendChild(meta)
    }

    // Meta keywords güncelleme
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('seo.about.keywords'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = t('seo.about.keywords')
      document.head.appendChild(meta)
    }
  }, [t])
  
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
            >
              {t('about.hero.title')}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {t('about.hero.description')}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Company Story Section */}
      <motion.section 
        ref={storyAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={storyAnimation.controls}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-6"
            >
              {t('about.company.story')}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {t('about.company.description')}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* CEO Section */}
      <motion.section 
        ref={ceoAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={ceoAnimation.controls}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div 
              variants={fadeInLeft}
              className="relative"
            >
              <div className="w-full max-w-md mx-auto">
                <motion.div 
                  variants={hoverVariants}
                  whileHover="hover"
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8"
                >
                  <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden bg-gray-800">
                    <img
                      src="/mete-han-photo.jpg"
                      alt="Mete Han Yıldırım - MSCodeHub CEO"
                      className="w-full h-full object-cover object-center"
                      onLoad={() => console.log('Fotoğraf yüklendi')}
                      onError={() => console.log('Fotoğraf yüklenemedi')}
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* CEO Info */}
            <motion.div 
              variants={fadeInRight}
            >
              <motion.div variants={staggerItem} className="mb-6">
                <motion.div variants={fadeInUp} className="text-sm text-blue-400 font-semibold mb-2 uppercase tracking-wider">{t('about.ceo.title')}</motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">{t('about.ceo.name')}</motion.h2>
                <motion.div variants={fadeInUp} className="text-lg text-gray-300 mb-4">{t('about.ceo.description')}</motion.div>
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-6">
                  <motion.span 
                    variants={buttonVariants}
                    whileHover="hover"
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm"
                  >
                    Founder & CEO
                  </motion.span>
                  <motion.span 
                    variants={buttonVariants}
                    whileHover="hover"
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-xl text-sm"
                  >
                    Full Stack Developer
                  </motion.span>
                  <motion.span 
                    variants={buttonVariants}
                    whileHover="hover"
                    className="px-4 py-2 bg-green-500/20 text-green-300 rounded-xl text-sm"
                  >
                    Tech Lead
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div variants={staggerItem} className="space-y-6">
                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  {t('about.ceo.bio1')}
                </motion.p>
                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  {t('about.ceo.bio2')}
                </motion.p>
                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  {t('about.ceo.bio3')}
                </motion.p>
              </motion.div>

              {/* Skills */}
              <motion.div variants={staggerItem} className="mt-8">
                <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-4">{t('about.skills.title')}</motion.h3>
                <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'React/Next.js', color: 'text-blue-400' },
                    { name: 'TypeScript', color: 'text-yellow-400' },
                    { name: 'Node.js', color: 'text-green-400' },
                    { name: 'MongoDB', color: 'text-purple-400' },
                    { name: 'AWS/DevOps', color: 'text-orange-400' },
                    { name: 'Architecture', color: 'text-red-400' }
                  ].map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 text-center hover:border-gray-600 transition-colors"
                    >
                      <div className={`${skill.color} text-sm font-medium`}>{skill.name}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Mission */}
      <motion.section 
        ref={missionAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={missionAnimation.controls}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">{t('about.mission.title')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('about.mission.description')}
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                gradient: "from-blue-500 to-purple-600",
                hoverColor: "hover:border-blue-500/50",
                title: t('about.quality.title'),
                description: t('about.quality.description')
              },
              {
                icon: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z",
                gradient: "from-green-500 to-teal-600",
                hoverColor: "hover:border-green-500/50",
                title: t('about.improvement.title'),
                description: t('about.improvement.description')
              },
              {
                icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
                gradient: "from-purple-500 to-pink-600",
                hoverColor: "hover:border-purple-500/50",
                title: t('about.delivery.title'),
                description: t('about.delivery.description')
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center ${item.hoverColor} transition-all duration-300`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon}/>
                  </svg>
                </motion.div>
                <motion.h3 variants={fadeInUp} className="text-xl font-bold mb-4">{item.title}</motion.h3>
                <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        ref={techAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={techAnimation.controls}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">{t('about.tech.title')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.tech.description')}
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: 'Frontend',
                color: 'text-blue-400',
                techs: [
                  { name: 'React 18', color: 'text-cyan-400' },
                  { name: 'Next.js 15', color: 'text-white' },
                  { name: 'TypeScript', color: 'text-blue-400' },
                  { name: 'Tailwind CSS', color: 'text-cyan-300' }
                ]
              },
              {
                title: 'Backend',
                color: 'text-green-400',
                techs: [
                  { name: 'Node.js', color: 'text-green-400' },
                  { name: 'Express.js', color: 'text-gray-300' },
                  { name: 'Fastify', color: 'text-yellow-300' },
                  { name: 'GraphQL', color: 'text-blue-300' }
                ]
              },
              {
                title: 'Database',
                color: 'text-purple-400',
                techs: [
                  { name: 'MongoDB', color: 'text-green-400' },
                  { name: 'PostgreSQL', color: 'text-blue-400' },
                  { name: 'Redis', color: 'text-red-400' },
                  { name: 'Prisma', color: 'text-indigo-400' }
                ]
              },
              {
                title: 'DevOps',
                color: 'text-orange-400',
                techs: [
                  { name: 'AWS', color: 'text-orange-400' },
                  { name: 'Docker', color: 'text-blue-400' },
                  { name: 'Kubernetes', color: 'text-blue-300' },
                  { name: 'CI/CD', color: 'text-green-400' }
                ]
              }
            ].map((category, categoryIndex) => (
              <motion.div key={category.title} variants={staggerItem} className="text-center">
                <motion.h3 
                  variants={fadeInUp}
                  className={`text-xl font-semibold mb-6 ${category.color}`}
                >
                  {category.title}
                </motion.h3>
                <motion.div variants={staggerContainer} className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-colors"
                    >
                      <div className={`${tech.color} font-medium`}>{tech.name}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t('about.cta.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {t('about.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/iletisim"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>{t('about.cta.button')}</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
} 