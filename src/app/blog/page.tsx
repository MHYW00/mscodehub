'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../../components/Navigation'
import { useTranslation } from '../../hooks/useTranslation'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import { buttonVariants, hoverVariants } from '../../hooks/useMicroInteractions'
import { allPosts } from './posts-data'

export default function Blog() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [showFilters, setShowFilters] = useState(false)
  
  const heroAnimation = useScrollAnimation()
  const categoriesAnimation = useScrollAnimation()
  const postsAnimation = useScrollAnimation()

  // SEO için document title güncellemesi
  useEffect(() => {
    document.title = t('seo.blog.title')
    
    // Meta description güncelleme
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.blog.description'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = t('seo.blog.description')
      document.head.appendChild(meta)
    }

    // Meta keywords güncelleme
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('seo.blog.keywords'))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = t('seo.blog.keywords')
      document.head.appendChild(meta)
    }
    
    // Blog Schema.org structured data
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "MSCodeHub Blog",
      "description": "Yazılım geliştirme, modern web teknolojileri ve dijital dönüşüm makaleleri",
      "url": "https://mscodehub.com/blog",
      "author": {
        "@type": "Organization",
        "name": "MSCodeHub",
        "url": "https://mscodehub.com"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "MSCodeHub",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mscodehub.com/logo.png"
        }
      },
      "blogPost": allPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `https://mscodehub.com/blog/${post.slug}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "MSCodeHub",
          "logo": {
            "@type": "ImageObject", 
            "url": "https://mscodehub.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://mscodehub.com/blog/${post.slug}`
        },
        "image": "https://mscodehub.com/logo.png",
        "keywords": post.tags.join(", "),
        "articleSection": post.category,
        "wordCount": parseInt(post.readTime.replace(/\D/g, '') || '5') * 200 // Approximate word count
      })),
      "inLanguage": "tr-TR"
    }
    
    // Remove existing blog schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="blog"]')
    if (existingSchema) {
      existingSchema.remove()
    }
    
    // Add new blog schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-schema', 'blog')
    script.innerHTML = JSON.stringify(blogSchema)
    document.head.appendChild(script)
    
    // Breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://mscodehub.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Blog",
          "item": "https://mscodehub.com/blog"
        }
      ]
    }
    
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.setAttribute('data-schema', 'breadcrumb')
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(breadcrumbScript)
    
    return () => {
      // Cleanup schemas on unmount
      document.querySelector('script[data-schema="blog"]')?.remove()
      document.querySelector('script[data-schema="breadcrumb"]')?.remove()
    }
  }, [t])

  // Kategoriler - marjinal tasarım ile
  const categories = [
    { 
      id: 'all', 
      name: t('blog.categories.all.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/3534/3534033.png',
      gradient: 'from-blue-500 to-cyan-500',
      description: t('blog.categories.all.description'),
      color: 'blue'
    },
    { 
      id: 'react', 
      name: t('blog.categories.react.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/1126/1126012.png',
      gradient: 'from-purple-500 to-pink-500',
      description: t('blog.categories.react.description'),
      color: 'purple'
    },
    { 
      id: 'typescript', 
      name: t('blog.categories.typescript.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/5968/5968381.png',
      gradient: 'from-indigo-500 to-purple-500',
      description: t('blog.categories.typescript.description'),
      color: 'indigo'
    },
    { 
      id: 'css', 
      name: t('blog.categories.css.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/732/732190.png',
      gradient: 'from-orange-500 to-red-500',
      description: t('blog.categories.css.description'),
      color: 'orange'
    },
    { 
      id: 'backend', 
      name: t('blog.categories.backend.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/2721/2721297.png',
      gradient: 'from-green-500 to-emerald-500',
      description: t('blog.categories.backend.description'),
      color: 'green'
    },
    { 
      id: 'mobile', 
      name: t('blog.categories.mobile.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/2991/2991148.png',
      gradient: 'from-pink-500 to-rose-500',
      description: t('blog.categories.mobile.description'),
      color: 'pink'
    },
    { 
      id: 'devops', 
      name: t('blog.categories.devops.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/1336/1336494.png',
      gradient: 'from-indigo-500 to-blue-500',
      description: t('blog.categories.devops.description'),
      color: 'indigo'
    },
    { 
      id: 'ai', 
      name: t('blog.categories.ai.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/8637/8637099.png',
      gradient: 'from-red-500 to-orange-500',
      description: t('blog.categories.ai.description'),
      color: 'red'
    },
    { 
      id: 'career', 
      name: t('blog.categories.career.name'), 
      icon: 'https://cdn-icons-png.flaticon.com/32/3135/3135706.png',
      gradient: 'from-yellow-500 to-amber-500',
      description: t('blog.categories.career.description'),
      color: 'yellow'
    }
  ]

  // Filtreleme fonksiyonları - Memoized
  const getFilteredPosts = () => {
    let filtered = [...allPosts] // Array kopyası oluştur

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    } else if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory)
    }

    return filtered
  }

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return allPosts.length
    return allPosts.filter(post => post.category === categoryId).length
  }

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId)
      setSearchQuery('')
    }
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    if (query.trim() && activeCategory !== 'all') {
      setActiveCategory('all')
    }
  }

  const filteredPosts = getFilteredPosts()
  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section - Marjinal Tasarım */}
      <motion.section 
        ref={heroAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={heroAnimation.controls}
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <motion.h1 
            variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-relaxed mt-8 py-4 overflow-visible"
              style={{ lineHeight: '1.2' }}
          >
              {t('blog.page.title')}
          </motion.h1>
            
          <motion.p 
            variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light"
          >
              {t('blog.page.subtitle')}
          </motion.p>
          
            {/* Advanced Search Bar */}
          <motion.div 
            variants={fadeInUp}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className={`relative transition-all duration-500 ${isSearchFocused ? 'scale-105' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-2">
                  <div className="flex items-center">
                    <div className="flex-1 relative">
              <input
                type="text"
                        placeholder={t('blog.page.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                      />
                      <AnimatePresence>
                        {searchQuery && (
                          <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => handleSearchChange('')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {/* View Mode Toggle */}
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center items-center space-x-8 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{allPosts.length} {t('blog.page.articles')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>{categories.length - 1} {t('blog.page.categories')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span>{t('blog.page.weeklyUpdates')}</span>
            </div>
          </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories - Marjinal Tasarım */}
      <motion.section 
        ref={categoriesAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={categoriesAnimation.controls}
        className="relative py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t('blog.page.categories')}</h2>
            <p className="text-gray-400">{t('blog.page.categoriesSubtitle')}</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative p-4 sm:p-6 rounded-2xl transition-all duration-500 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-br ' + category.gradient + ' text-white shadow-2xl shadow-' + category.color + '-500/25'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" 
                     style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}}></div>
                
                <div className="relative z-10 text-center">
                  <div className="mb-2 sm:mb-3 flex justify-center">
                    <img src={category.icon} alt={category.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 line-clamp-1">{category.name}</h3>
                  <p className={`text-xs opacity-75 mb-2 sm:mb-3 line-clamp-2 hidden sm:block ${activeCategory === category.id ? 'text-white/80' : 'text-gray-400'}`}>
                    {category.description}
                  </p>
                  <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {getCategoryCount(category.id)} {t('blog.page.articlesCount')}
                  </div>
                </div>

                {/* Active indicator */}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts */}
      <motion.section 
        ref={postsAnimation.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={postsAnimation.controls}
        className="relative py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Search Results Info */}
          <AnimatePresence>
            {searchQuery && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
              >
                <p className="text-lg">
                  <span className="text-blue-400 font-semibold">"{searchQuery}"</span> {t('blog.page.searchResultsFor')} 
                  <span className="text-white font-bold"> {filteredPosts.length} {t('blog.page.searchResultsFound')}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured Posts */}
          <AnimatePresence mode="wait">
            {featuredPosts.length > 0 && !searchQuery && activeCategory === 'all' && (
              <motion.div 
                key="featured-posts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mb-20"
              >
                        <motion.div 
                  variants={fadeInUp}
                  className="text-center mb-12"
                        >
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-4">
                    <div className="flex items-center gap-2">
                      <img src="https://cdn-icons-png.flaticon.com/32/1828/1828884.png" alt="Featured" className="w-4 h-4" />
                      <span className="text-yellow-400 text-sm font-medium">{t('blog.page.featuredTitle')}</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold">{t('blog.page.featuredSubtitle')}</h2>
                        </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 4).map((post, index) => (
                    <motion.article
                      key={`featured-${post.slug}`}
                      variants={staggerItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      whileHover={{ scale: 1.02, y: -10 }}
                      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${post.gradient}`}></div>
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                              {categories.find(cat => cat.id === post.category)?.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                          {post.title}
                      </h3>
                        
                        <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                        <Link
                          href={`/blog/${post.slug}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 group-hover:scale-105"
                          >
                            {t('blog.page.readMore')}
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        </div>
                    </div>
                  </motion.article>
                ))}
                </div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <motion.div 
              key={`posts-${activeCategory}-${searchQuery}`}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
            <motion.div 
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">
                  {searchQuery ? t('blog.search.results') : 
                   activeCategory === 'all' ? t('blog.page.allPosts') : 
                   `${categories.find(cat => cat.id === activeCategory)?.name} ${t('blog.page.allPosts')}`}
                </h2>
                <p className="text-gray-400">
                  {regularPosts.length} {t('blog.page.articlesCount')} {t('blog.page.searchResultsFound')}
                </p>
              </motion.div>

              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" 
                : "space-y-6"
              }>
                <AnimatePresence mode="wait">
                  {regularPosts.map((post, index) => (
                <motion.article
                      key={`${post.slug}-${activeCategory}-${searchQuery}`}
                  variants={staggerItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      whileHover={{ scale: viewMode === 'grid' ? 1.03 : 1.01, y: -5 }}
                      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 ${
                        viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className={`relative z-10 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className={`flex items-center ${viewMode === 'list' ? 'justify-between mb-4' : 'justify-between mb-4'}`}>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${post.gradient}`}></div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                              {categories.find(cat => cat.id === post.category)?.name}
                            </span>
                  </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                    </div>
                        </div>

                        <h3 className={`font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 ${
                          viewMode === 'list' ? 'text-xl line-clamp-1' : 'text-xl line-clamp-2'
                        }`}>
                      {post.title}
                    </h3>
                        
                        <p className={`text-gray-400 mb-4 leading-relaxed ${
                          viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'
                        }`}>
                      {post.description}
                    </p>

                        <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, viewMode === 'list' ? 2 : 3).map((tag) => (
                              <span key={tag} className="px-2 py-1 text-xs bg-gray-700/30 text-gray-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                          
                      <Link 
                        href={`/blog/${post.slug}`}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300 group-hover:scale-105"
                          >
                            {t('blog.page.readMore')}
                            <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                      </Link>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-700/30 flex items-center justify-between text-xs text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                  </div>
                </motion.article>
              ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div 
              variants={fadeInUp}
              className="text-center py-20"
            >
              <div className="mb-6 flex justify-center">
                <img src="https://cdn-icons-png.flaticon.com/64/3721/3721928.png" alt="No results" className="w-16 h-16 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('blog.page.noResults.title')}</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                {t('blog.page.noResults.description')}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300"
              >
                {t('blog.page.noResults.clearFilters')}
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        variants={fadeInUp}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8">
            <span className="text-blue-400 text-sm font-medium">📧 Newsletter</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            {t('blog.page.newsletter.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('blog.page.newsletter.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('blog.page.newsletter.placeholder')}
              className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105">
              {t('blog.page.newsletter.subscribe')}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            {t('blog.page.newsletterDisclaimer')}
          </p>
        </div>
      </motion.section>
      </div>
  )
} 