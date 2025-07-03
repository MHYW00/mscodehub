'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-700 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {/* Sol taraf - Logo ve bilgi */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <Logo size={36} />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                MSCodeHub
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              {t('footer.description')}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="mailto:metehan@mscodehub.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/mscodehub/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368S4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368S6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                </svg>
              </a>
              <a href="https://instagram.com/mscodehub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Orta - Hızlı Linkler */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-3">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col items-center space-y-0">
              <Link href="/" className="text-gray-300 hover:text-white transition text-sm">
                {t('nav.home')}
              </Link>
              <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition text-sm">
                {t('nav.about')}
              </Link>
              <Link href="/projeler" className="text-gray-300 hover:text-white transition text-sm">
                {t('nav.projects')}
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition text-sm">
                {t('nav.blog')}
              </Link>
              <Link href="/iletisim" className="text-gray-300 hover:text-white transition text-sm">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Sağ - İletişim */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-3">{t('nav.contact')}</h4>
            <div className="space-y-0">
              <a
                href="mailto:metehan@mscodehub.com"
                className="flex items-start justify-center md:justify-end space-x-2 text-gray-300 hover:text-white transition text-sm"
              >
                <svg className="w-4 h-4 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>metehan@mscodehub.com</span>
              </a>
              <a
                href="https://wa.me/905431234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-center md:justify-end space-x-2 text-gray-300 hover:text-white transition text-sm"
              >
                <svg className="w-4 h-4 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                <span>+90 543 123 4567</span>
              </a>
              <div className="text-gray-400 text-xs mt-2">
                Türkiye
              </div>
            </div>
          </div>
        </div>

        {/* Alt bölüm - Telif hakkı ve yasal linkler */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <span>© {currentYear} MSCodeHub</span>
              <span className="mx-2">•</span>
              <span>{t('footer.rights')}</span>
            </div>
            
            {/* Yasal Belgeler */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <span>
                <Link href="/gizlilik-politikasi" className="hover:text-white transition">
                  {t('footer.privacy')}
                </Link>
                <span className="mx-4"></span>
                <Link href="/kullanim-sartlari" className="hover:text-white transition">
                  {t('footer.terms')}
                </Link>
                <span className="mx-4"></span>
                <Link href="/kvkk" className="hover:text-white transition">
                  {t('footer.kvkk')}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 