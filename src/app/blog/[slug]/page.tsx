import { notFound } from 'next/navigation'
import { allPosts } from '../posts-data'
import BlogPostClient from './BlogPostClient'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = allPosts
                .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
} 