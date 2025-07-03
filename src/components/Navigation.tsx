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
                    className={`mobile-touch-target py-2 transition-colors ${
                      pathname === item.href
                        ? 'text-white border-b-2 border-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
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
                  className="mobile-touch-target flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
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
                className="mobile-touch-target relative z-[75] p-3 rounded-lg bg-gray-800/90 border border-gray-600/50 backdrop-blur-sm hover:bg-gray-700/90 hover:border-gray-500 transition-all duration-300 shadow-lg min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label="Menüyü aç/kapat"
                style={{ WebkitTapHighlightColor: 'transparent' }}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Enhanced Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          duration: 0.3
        }}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-md border-l border-gray-700 z-[65] shadow-2xl md:hidden"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Logo size={32} />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MSCodeHub
            </span>
          </div>
          <motion.button
            variants={buttonVariants}
            whileTap="tap"
            onClick={closeMobileMenu}
            className="mobile-touch-target p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Menüyü kapat"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col py-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                x: isMobileMenuOpen ? 0 : 50 
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={closeMobileMenu}
                className={`mobile-touch-target flex items-center space-x-4 px-6 py-4 text-lg font-medium transition-all duration-200 hover:bg-gray-800/50 hover:border-r-4 hover:border-blue-500 ${
                  pathname === item.href
                    ? 'bg-blue-600/20 border-r-4 border-blue-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Content Container - with proper spacing */}
        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
          {/* Mobile Language Selector */}
          <div className="border-t border-gray-700 p-6 flex-grow">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Dil Seçimi / Language
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isMobileMenuOpen ? 1 : 0, 
                      y: isMobileMenuOpen ? 0 : 20 
                    }}
                    transition={{ delay: (navItems.length * 0.1) + (index * 0.05) }}
                    variants={buttonVariants}
                    whileTap="tap"
                    onClick={() => {
                      setLanguage(lang.code as 'tr' | 'en' | 'es' | 'de' | 'ru' | 'fr')
                      closeMobileMenu()
                    }}
                    className={`mobile-touch-target flex items-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium truncate">{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer - Now properly positioned */}
          <div className="border-t border-gray-700 p-6 bg-gray-900/95 mt-auto">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                İletişim için:
              </p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="mailto:metehan@mscodehub.com"
                  variants={buttonVariants}
                  whileTap="tap"
                  className="mobile-touch-target flex items-center space-x-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors min-w-[48px] min-h-[48px]"
                  aria-label="E-posta gönder"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm hidden xs:block">E-posta</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/905431234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileTap="tap"
                  className="mobile-touch-target flex items-center space-x-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors min-w-[48px] min-h-[48px]"
                  aria-label="WhatsApp ile iletişim"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                  </svg>
                  <span className="text-sm hidden xs:block">WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Navigation