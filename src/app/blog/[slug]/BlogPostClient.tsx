'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import { useTranslation } from '../../../hooks/useTranslation'
import { useScrollAnimation, fadeInUp } from '../../../hooks/useScrollAnimation'
import { BlogPost } from '../posts-data'

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const { t } = useTranslation()
  const heroAnimation = useScrollAnimation()
  const contentAnimation = useScrollAnimation()

  // Format content for better display
  const formatContent = (content: string) => {
    return content
      .replace(/\n/g, '<br/>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto my-6 border border-gray-700"><code class="text-green-400">$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-green-400 border border-gray-700">$1</code>')
      .replace(/## (.*)/g, '<h2 class="text-3xl font-bold text-white mt-8 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-2xl font-bold text-white mt-6 mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-blue-300 italic">$1</em>')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroAnimation.ref}
        variants={fadeInUp}
        initial="hidden"
        animate={heroAnimation.controls}
        className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Blog'a Dön
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div variants={fadeInUp} className="mb-12">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${post.gradient} rounded-full text-white font-medium text-sm`}>
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </div>
              <div className="flex items-center text-gray-400 text-sm space-x-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full hover:border-blue-500/50 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        ref={contentAnimation.ref}
        variants={fadeInUp}
        initial="hidden"
        animate={contentAnimation.controls}
        className="relative pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          {/* Article Content */}
          <motion.article 
            variants={fadeInUp}
            className="prose prose-lg prose-invert max-w-none mb-16"
          >
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div 
                className="text-gray-300 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ 
                  __html: formatContent(post.content)
                }}
              />
            </div>
          </motion.article>

          {/* Author Section */}
          <motion.div 
            variants={fadeInUp}
            className="mb-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex items-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${post.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg`}>
                MH
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{post.author}</h3>
                <p className="text-gray-400 leading-relaxed">
                  Full-stack developer ve teknoloji yazarı. Modern web teknolojileri, 
                  React, TypeScript ve cloud architecture konularında uzman. 
                  Enterprise projelerinde 8+ yıl deneyim.
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <span className="text-sm text-gray-500">🌍 İstanbul, Türkiye</span>
                  <span className="text-sm text-gray-500">💼 Senior Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div 
              variants={fadeInUp}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                İlgili Yazılar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <motion.div
                    key={relatedPost.slug}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${relatedPost.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${relatedPost.gradient}`}></div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {relatedPost.category}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {relatedPost.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group-hover:translate-x-1"
                        >
                          Oku
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-between items-center gap-6 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-blue-500/20"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Daha Fazla İçerik İçin
              </h3>
              <p className="text-gray-300">
                Teknoloji ve yazılım geliştirme hakkında daha fazla makale keşfet
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
                Tüm Yazılar
              </Link>
              
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Ana Sayfa
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
} 