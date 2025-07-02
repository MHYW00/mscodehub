'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import Logo from './Logo'
import { buttonVariants, iconVariants, hoverVariants } from '../hooks/useMicroInteractions'

const Navigation = () => {
  const pathname = usePathname()
  const { language, setLanguage, isHydrated } = useLanguage()
  const { t } = useTranslation()
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  const navItems = [
    { name: isHydrated ? t('nav.home') : 'Ana Sayfa', href: '/', icon: '🏠' },
    { name: isHydrated ? t('nav.about') : 'Hakkımızda', href: '/hakkimizda', icon: '👥' },
    { name: isHydrated ? t('nav.projects') : 'Projeler', href: '/projeler', icon: '🚀' },
    { name: isHydrated ? t('nav.blog') : 'Blog', href: '/blog', icon: '📝' },
    { name: isHydrated ? t('nav.contact') : 'İletişim', href: '/iletisim', icon: '📞' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-[70] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              variants={hoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/" className="flex items-center space-x-3">
                <motion.div 
                  variants={iconVariants}
                  className="flex items-center"
                >
                  <Logo size={38} />
                </motion.div>
                <span className="text-[22px] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-none">MSCodeHub</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href={item.href}
                    className={`py-2 transition-colors ${
                      pathname === item.href
                        ? 'text-white border-b-2 border-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
                >
                  <span>{currentLang.flag}</span>
                  <span className="text-sm font-medium">{currentLang.name}</span>
                  <motion.svg
                    variants={iconVariants}
                    className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-[45]"
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-[50]"
                    >
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => {
                            setLanguage(lang.code as 'tr' | 'en' | 'es' | 'de' | 'ru' | 'fr')
                            setIsLangMenuOpen(false)
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            language === lang.code ? 'bg-blue-600 text-white' : 'text-gray-300'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                          {language === lang.code && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-4 h-4 ml-auto" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </motion.svg>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-[75] p-3 rounded-lg bg-gray-800/90 border border-gray-600/50 backdrop-blur-sm hover:bg-gray-700/90 hover:border-gray-500 transition-all duration-300 shadow-lg min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label="Menüyü aç/kapat"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 4 : -2
                    }}
                    className="bg-white/90 block h-0.5 w-6 rounded-sm"
                  />
                  <motion.span
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1
                    }}
                    className="bg-white/90 block h-0.5 w-6 rounded-sm my-0.5"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -4 : 2
                    }}
                    className="bg-white/90 block h-0.5 w-6 rounded-sm"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[65] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/98 backdrop-blur-xl border-l border-slate-700/50 shadow-2xl z-[68] transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20 h-full overflow-y-auto">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MSCodeHub
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {isHydrated ? t('footer.description') : 'Modern web teknolojileri ile enterprise çözümler'}
            </p>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-slate-800/50 border border-transparent hover:border-slate-600 ${
                    pathname === item.href 
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-blue-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Language Selection */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h4 className="text-slate-300 text-sm font-medium mb-4">Dil Seçimi</h4>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    setLanguage(lang.code as 'tr' | 'en' | 'es' | 'de' | 'ru')
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all ${
                    language === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm">metehan@mscodehub.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                <span className="text-sm">+90 543 123 4567</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pb-6">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/iletisim"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                >
                  <motion.svg 
                    variants={iconVariants}
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </motion.svg>
                  <span>{isHydrated ? t('home.hero.contact') : 'İletişim'}</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation