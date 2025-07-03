import type { Metadata } from 'next'
import './globals.css'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { LanguageProvider } from '../context/LanguageContext'
import DynamicLayout from './DynamicLayout'

export const metadata: Metadata = {
  title: 'MSCodeHub - Enterprise Yazılım Çözümleri & Dijital Dönüşüm | Modern Web Teknolojileri',
  description: 'MSCodeHub olarak işletmelerin dijital ihtiyaçlarına özel yazılım çözümleri geliştiriyoruz. Modern teknolojiler ve agile metodoloji ile enterprise düzeyde projeler hayata geçiriyoruz. React, Next.js, TypeScript, Node.js uzmanı.',
  keywords: 'yazılım geliştirme, enterprise çözümler, web uygulamaları, e-ticaret, API geliştirme, react, nextjs, typescript, nodejs, MSCodeHub, mobil uygulamalar, responsive tasarım, SEO optimizasyonu, yazılım şirketi, Istanbul',
  authors: [{ name: 'MSCodeHub - Mete Han Yıldırım' }],
  creator: 'MSCodeHub',
  publisher: 'MSCodeHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mscodehub.com',
    languages: {
      'tr': 'https://mscodehub.com',
      'en': 'https://mscodehub.com/en',
      'es': 'https://mscodehub.com/es',
      'de': 'https://mscodehub.com/de',
      'ru': 'https://mscodehub.com/ru',
      'fr': 'https://mscodehub.com/fr',
    },
  },
  openGraph: {
    title: 'MSCodeHub - Enterprise Yazılım Çözümleri & Dijital Dönüşüm',
    description: 'İşletmelerin dijital dönüşümünde güvenilir teknoloji partneri. Modern web teknolojileri ile enterprise çözümler sunuyoruz. React, Next.js, TypeScript, Node.js uzmanı.',
    url: 'https://mscodehub.com',
    siteName: 'MSCodeHub',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://mscodehub.com/logo-1024.png',
        width: 1024,
        height: 1024,
        alt: 'MSCodeHub Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSCodeHub - Enterprise Yazılım Çözümleri',
    description: 'İşletmelerin dijital dönüşümünde güvenilir teknoloji partneri. Modern web teknolojileri ile enterprise çözümler sunuyoruz.',
    creator: '@mscodehub',
    images: ['https://mscodehub.com/logo-1024.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'to-be-added-when-domain-setup', // Google Search Console verification sonrası eklenecek
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Mobil viewport meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MSCodeHub" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Enhanced Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Turkey" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MSCodeHub" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="de_DE" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:image" content="https://mscodehub.com/logo-1024.png" />
        <meta property="og:image:alt" content="MSCodeHub - Modern Web Teknolojileri" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:secure_url" content="https://mscodehub.com/logo-1024.png" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mscodehub" />
        <meta name="twitter:creator" content="@metehan" />
        <meta name="twitter:image" content="https://mscodehub.com/logo-1024.png" />
        <meta name="twitter:image:alt" content="MSCodeHub - Enterprise Yazılım Çözümleri" />
        
        {/* Article Tags for Blog Posts */}
        <meta property="article:publisher" content="https://facebook.com/mscodehub" />
        <meta property="article:author" content="https://facebook.com/metehan" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="Yazılım Geliştirme" />
        <meta property="article:tag" content="Web Teknolojileri" />
        <meta property="article:tag" content="React" />
        <meta property="article:tag" content="Next.js" />
        <meta property="article:tag" content="TypeScript" />
        
        {/* Business Schema */}
        <meta property="business:contact_data:country_name" content="Turkey" />
        <meta property="business:contact_data:email" content="metehan@mscodehub.com" />
        <meta property="business:contact_data:phone_number" content="+90-543-123-4567" />
        <meta property="business:contact_data:website" content="https://mscodehub.com" />
        
        {/* App Links */}
        <meta property="al:web:url" content="https://mscodehub.com" />
        
        {/* Verification Tags (Domain setup sonrası eklenecek) */}
        <meta name="google-site-verification" content="to-be-added-when-domain-setup" />
        <meta name="msvalidate.01" content="to-be-added-when-domain-setup" />
        <meta name="yandex-verification" content="to-be-added-when-domain-setup" />
        
        {/* Mobil viewport ve orientation düzeltmeleri */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Viewport height düzeltmesi (mobil tarayıcılar için)
            function setVH() {
              const vh = window.innerHeight * 0.01;
              document.documentElement.style.setProperty('--vh', vh + 'px');
            }
            
            // Sayfa yüklendiğinde ve resize/orientation change olduğunda çalıştır
            setVH();
            window.addEventListener('resize', setVH);
            window.addEventListener('orientationchange', () => {
              setTimeout(setVH, 100); // Orientation change sonrası kısa bekleme
            });
            
            // iOS Safari'de zoom problemi çözümü
            document.addEventListener('touchstart', function() {}, {passive: true});
            
            // Mobil keyboard açılma kapanma durumları için
            let initialViewportHeight = window.innerHeight;
            window.addEventListener('resize', function() {
              if (window.innerHeight < initialViewportHeight * 0.75) {
                // Klavye açık
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
              } else {
                // Klavye kapalı
                document.body.style.position = '';
                document.body.style.width = '';
              }
            });
          `
        }} />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MSCodeHub",
              "url": "https://mscodehub.com",
              "logo": "https://mscodehub.com/logo.png",
              "description": "Modern web teknolojileri ile enterprise düzeyde yazılım çözümleri. React, Next.js, TypeScript uzmanı ekip.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-543-123-4567",
                "contactType": "customer service",
                "availableLanguage": ["Turkish", "English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/mscodehub/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Mete Han Yıldırım",
                "jobTitle": "Full Stack Developer & CEO"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Web Uygulaması Geliştirme",
                  "description": "Modern React ve Next.js ile web uygulaması geliştirme"
                },
                {
                  "@type": "Service", 
                  "name": "E-Ticaret Çözümleri",
                  "description": "Kapsamlı e-ticaret platformları"
                },
                {
                  "@type": "Service",
                  "name": "API Geliştirme", 
                  "description": "RESTful ve GraphQL API geliştirme"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mscodehub.com/#business",
              "name": "MSCodeHub",
              "image": "https://mscodehub.com/logo.png",
              "description": "Enterprise düzeyde yazılım geliştirme ve dijital dönüşüm hizmetleri",
              "url": "https://mscodehub.com",
              "telephone": "+90-543-123-4567",
              "priceRange": "₺₺₺",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://mscodehub.com/#website",
              "url": "https://mscodehub.com",
              "name": "MSCodeHub",
              "description": "Modern web teknolojileri ile enterprise çözümler",
              "publisher": {
                "@id": "https://mscodehub.com/#business"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://mscodehub.com/blog?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": ["tr-TR", "en-US", "es-ES", "de-DE", "fr-FR", "ru-RU"]
            })
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col antialiased overflow-x-hidden">
        <LanguageProvider>
          <DynamicLayout>
          <main className="flex-grow relative">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          </DynamicLayout>
        </LanguageProvider>
      </body>
    </html>
  )
} 