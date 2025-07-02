export interface BlogPost {
  title: string
  description: string
  content: string
  date: string
  readTime: string
  slug: string
  category: string
  tags: string[]
  author: string
  featured: boolean
  gradient: string
}

export const allPosts: BlogPost[] = [
  {
    title: "React 18 Yeni Özellikleri ve Concurrent Features",
    description: "React 18 ile gelen Concurrent Features, Suspense, Server Components ve performans iyileştirmeleri hakkında detaylı rehber.",
    content: `React 18, modern web uygulamaları için devrim niteliğinde özellikler getiriyor. Bu kapsamlı rehberde yeni özellikleri ve migration sürecini ele alacağız.

## React 18'in Temel Yenilikleri

### Concurrent Features
React 18'in en büyük yeniliği Concurrent Features. Bu özellik sayesinde React, kullanıcı etkileşimlerini önceleyebilir ve daha akıcı deneyimler sunabilir.

\`\`\`javascript
import { startTransition } from 'react'

function SearchResults() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (newQuery) => {
    setQuery(newQuery) // Urgent update
    
    startTransition(() => {
      setResults(searchData(newQuery)) // Non-urgent update
    })
  }

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Ara..."
      />
      <SearchResultsList results={results} />
    </div>
  )
}
\`\`\`

### Automatic Batching
React 18, tüm state güncellemelerini otomatik olarak batch'ler.

React 18, modern web uygulamaları için güçlü araçlar sunuyor. Concurrent Features ile daha iyi kullanıcı deneyimi elde edebilirsiniz.`,
      date: "28 Mayıs 2025",
      readTime: "12 dk okuma",
      slug: "react-18-yeni-ozellikler",
      category: "react",
      tags: ["React", "JavaScript", "Frontend", "Hooks", "Performance"],
      author: "MSCodeHub Ekibi",
      featured: true,
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
    title: "Next.js App Router: Modern Full-Stack Development",
    description: "Next.js 13+ App Router ile modern full-stack uygulamalar geliştirin. Server Components, streaming ve advanced routing patterns.",
    content: `Next.js App Router ile modern full-stack development yaklaşımını öğrenin. Bu rehberde Server Components, streaming ve advanced patterns ele alınacak.

## App Router Nedir?

Next.js 13 ile gelen App Router, React Server Components tabanlı yeni routing sistemidir.

### Server Components
Server-side rendering ile performanslı uygulamalar geliştirebilirsiniz.

Next.js App Router, modern web development için güçlü araçlar sunar.`,
    date: "25 Mayıs 2025",
    readTime: "15 dk okuma",
      slug: "nextjs-app-router",
      category: "react",
    tags: ["Next.js", "React", "Server Components", "Full-Stack"],
      author: "MSCodeHub Ekibi",
      featured: true,
    gradient: "from-green-500 via-blue-500 to-purple-500"
  },
  {
    title: "Vue.js 3 Composition API: Modern Vue Development",
    description: "Vue.js 3 Composition API ile modern component geliştirme. Reactivity system, composables ve TypeScript entegrasyonu.",
    content: `Vue.js 3 Composition API ile modern Vue development yaklaşımını öğrenin.

## Composition API Nedir?

Vue 3 ile gelen Composition API, component logic'ini daha organize etmenizi sağlar.

Modern Vue development için güçlü araçlar sunar.`,
    date: "20 Mayıs 2025",
      readTime: "10 dk okuma",
    slug: "vuejs-3-composition-api",
    category: "react",
    tags: ["Vue.js", "JavaScript", "Frontend", "Composition API"],
      author: "MSCodeHub Ekibi",
      featured: false,
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    title: "TypeScript ile Tip Güvenli Enterprise Geliştirme",
    description: "TypeScript ile büyük ölçekli enterprise uygulamalar geliştirin. Advanced types, generics ve best practices.",
    content: `TypeScript ile enterprise düzeyde tip güvenli uygulamalar geliştirmeyi öğrenin.

## TypeScript'in Avantajları

### Tip Güvenliği
Compile-time'da hataları yakalayın ve daha güvenli kod yazın.

### Advanced Types
Generic'ler ve utility types ile güçlü tip sistemleri oluşturun.

Enterprise uygulamalar için TypeScript vazgeçilmezdir.`,
    date: "18 Mayıs 2025",
    readTime: "14 dk okuma",
    slug: "typescript-enterprise-development",
    category: "typescript",
    tags: ["TypeScript", "Enterprise", "Types", "JavaScript"],
      author: "MSCodeHub Ekibi",
      featured: false,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500"
  },
  {
    title: "TypeScript Advanced Types ve Utility Types",
    description: "TypeScript'in gelişmiş tip sistemi. Conditional types, mapped types ve utility types ile güçlü abstraksiyonlar.",
    content: `TypeScript'in gelişmiş tip sistemini keşfedin.

## Advanced Types

### Conditional Types
Koşullu tipler ile dinamik tip sistemleri oluşturun.

### Mapped Types
Mevcut tiplerden yeni tipler türetin.

Advanced TypeScript ile güçlü abstraksiyonlar oluşturabilirsiniz.`,
    date: "15 Mayıs 2025",
    readTime: "16 dk okuma",
    slug: "typescript-advanced-types",
    category: "typescript",
    tags: ["TypeScript", "Advanced", "Types", "Generics"],
      author: "MSCodeHub Ekibi",
      featured: false,
    gradient: "from-blue-500 via-indigo-500 to-purple-500"
  },
  {
    title: "TypeScript ile Modern React Patterns",
    description: "TypeScript ve React kombinasyonu ile modern patterns. Custom hooks, context API ve component typing.",
    content: `TypeScript ile React'te modern patterns uygulayın.

## React + TypeScript

### Component Typing
Props ve state'leri güvenli şekilde tipleyin.

### Custom Hooks
Tip güvenli custom hook'lar oluşturun.

Modern React development için TypeScript vazgeçilmezdir.`,
    date: "12 Mayıs 2025",
    readTime: "13 dk okuma",
    slug: "typescript-react-patterns",
    category: "typescript",
    tags: ["TypeScript", "React", "Hooks", "Patterns"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-purple-500 via-blue-500 to-green-500"
  },
  {
    title: "CSS Grid vs Flexbox: Hangi Durumda Hangisini Kullanmalı?",
    description: "CSS Grid ve Flexbox arasındaki farklar, kullanım alanları ve pratik örneklerle layout teknikleri.",
    content: `CSS Grid ve Flexbox arasındaki farkları öğrenin.

## Grid vs Flexbox

### CSS Grid
İki boyutlu layout'lar için ideal.

### Flexbox
Tek boyutlu layout'lar için mükemmel.

Doğru aracı doğru iş için kullanın.`,
    date: "10 Mayıs 2025",
    readTime: "11 dk okuma",
    slug: "css-grid-vs-flexbox",
    category: "css",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    title: "Tailwind CSS ile Utility-First Design System",
    description: "Tailwind CSS ile modern design system oluşturun. Component library, theming ve responsive design patterns.",
    content: `Tailwind CSS ile utility-first yaklaşımını öğrenin.

## Utility-First Approach

### Avantajları
Hızlı development ve tutarlı design.

### Component Patterns
Reusable component'ler oluşturun.

Modern CSS development için Tailwind CSS ideal.`,
    date: "8 Mayıs 2025",
    readTime: "9 dk okuma",
    slug: "tailwind-css-utility-first",
    category: "css",
    tags: ["Tailwind CSS", "CSS", "Design System", "Utility"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500"
  },
  {
    title: "Modern CSS Animations ve Transitions",
    description: "CSS ile etkileyici animasyonlar ve geçişler oluşturun. Keyframes, transforms ve modern CSS özellikleri.",
    content: `Modern CSS animations ve transitions ile etkileyici web deneyimleri oluşturmayı öğrenin.

## CSS Animations

### Keyframes
Karmaşık animasyon dizileri oluşturun.

### Transforms
2D ve 3D dönüşümler ile dinamik efektler.

Modern web tasarımı için CSS animations vazgeçilmez.`,
    date: "6 Mayıs 2025",
    readTime: "10 dk okuma",
    slug: "modern-css-animations",
    category: "css",
    tags: ["CSS", "Animations", "Transitions", "UI/UX"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    title: "Node.js ile Microservice Mimarisi",
    description: "Node.js ile microservice mimarisi tasarlayın. Service discovery, API gateway ve inter-service communication.",
    content: `Node.js ile microservice mimarisi oluşturmayı öğrenin.

## Microservice Architecture

### Service Design
Bağımsız servisler tasarlayın.

### Communication
Servisler arası iletişim patterns.

Scalable backend sistemleri için microservice mimarisi ideal.`,
    date: "5 Mayıs 2025",
    readTime: "18 dk okuma",
    slug: "nodejs-microservice-architecture",
    category: "backend",
    tags: ["Node.js", "Microservices", "Architecture", "Backend"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-green-500 via-emerald-500 to-teal-500"
  },
  {
    title: "GraphQL API Development: Modern API Tasarımı",
    description: "GraphQL ile modern API'ler geliştirin. Schema design, resolvers, subscriptions ve performance optimization.",
    content: `GraphQL ile modern API development öğrenin.

## GraphQL Nedir?

### Schema Design
Güçlü ve esnek schema'lar tasarlayın.

### Resolvers
Efficient data fetching ile performans optimize edin.

Modern API development için GraphQL güçlü bir çözüm.`,
    date: "3 Mayıs 2025",
    readTime: "16 dk okuma",
    slug: "graphql-api-development",
    category: "backend",
    tags: ["GraphQL", "API", "Backend", "Schema"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    title: "REST API Design Best Practices",
    description: "RESTful API tasarımı için en iyi uygulamalar. HTTP methods, status codes ve API versioning.",
    content: `REST API design best practices ile profesyonel API'ler geliştirmeyi öğrenin.

## RESTful Design

### HTTP Methods
GET, POST, PUT, DELETE kullanımı.

### Status Codes
Doğru HTTP status code'ları.

Professional API development için REST principles kritik.`,
    date: "4 Mayıs 2025",
    readTime: "12 dk okuma",
    slug: "rest-api-design-best-practices",
    category: "backend",
    tags: ["REST API", "Backend", "HTTP", "Web Services"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-teal-500 via-green-500 to-blue-500"
  },
  {
    title: "React Native ile Cross-Platform Mobil Uygulama",
    description: "React Native ile iOS ve Android uygulamaları geliştirin. Navigation, state management ve native modules.",
    content: `React Native ile cross-platform mobil development öğrenin.

## React Native Nedir?

React Native ile native mobil uygulamalar geliştirin.

### Cross-Platform Development
Tek codebase ile iOS ve Android.

### Native Performance
Native performance ile kullanıcı deneyimi.

Mobil development için React Native ideal.`,
    date: "1 Mayıs 2025",
    readTime: "14 dk okuma",
    slug: "react-native-cross-platform",
    category: "mobile",
    tags: ["React Native", "Mobile", "iOS", "Android"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    title: "Flutter ile Cross-Platform Mobil Development",
    description: "Flutter framework ile iOS ve Android uygulamaları geliştirin. Dart dili ve widget sistemi.",
    content: `Flutter ile cross-platform mobil development öğrenin.

## Flutter Framework

### Dart Language
Modern programlama dili.

### Widget System
Flexible UI component'leri.

Cross-platform mobile development için Flutter güçlü bir seçenek.`,
    date: "30 Nisan 2025",
    readTime: "13 dk okuma",
    slug: "flutter-cross-platform-development",
    category: "mobile",
    tags: ["Flutter", "Dart", "Mobile", "Cross-Platform"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-cyan-500 via-blue-500 to-purple-500"
  },
  {
    title: "Swift ile iOS App Development",
    description: "Swift programlama dili ile native iOS uygulamaları geliştirin. UIKit ve SwiftUI framework'leri.",
    content: `Swift ile iOS app development öğrenin.

## Swift Programming

### UIKit Framework
Traditional iOS development.

### SwiftUI
Modern declarative UI.

Native iOS development için Swift ideal.`,
    date: "27 Nisan 2025",
    readTime: "15 dk okuma",
    slug: "swift-ios-app-development",
    category: "mobile",
    tags: ["Swift", "iOS", "UIKit", "SwiftUI"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    title: "Docker ve Kubernetes ile DevOps Pipeline",
    description: "Docker containerization ve Kubernetes orchestration ile modern DevOps pipeline'ları oluşturun.",
    content: `Docker ve Kubernetes ile DevOps pipeline oluşturmayı öğrenin.

## Containerization

### Docker
Uygulamalarınızı containerize edin.

### Kubernetes
Container orchestration ile scalability.

Modern DevOps için Docker ve Kubernetes vazgeçilmez.`,
    date: "28 Nisan 2025",
    readTime: "20 dk okuma",
    slug: "docker-kubernetes-devops",
    category: "devops",
    tags: ["Docker", "Kubernetes", "DevOps", "Container"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-blue-500 via-indigo-500 to-purple-500"
  },
  {
    title: "AWS Cloud Infrastructure ve Serverless Architecture",
    description: "AWS ile cloud infrastructure tasarlayın. Lambda, API Gateway, DynamoDB ve serverless patterns.",
    content: `AWS ile serverless architecture oluşturmayı öğrenin.

## Serverless Architecture

### AWS Lambda
Event-driven serverless functions.

### API Gateway
RESTful API'ler oluşturun.

Cloud-native development için AWS ideal.`,
    date: "25 Nisan 2025",
    readTime: "17 dk okuma",
    slug: "aws-serverless-architecture",
    category: "devops",
    tags: ["AWS", "Serverless", "Lambda", "Cloud"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "GitHub Actions, Jenkins ve GitLab CI ile otomatik deployment pipeline'ları oluşturun.",
    content: `CI/CD pipeline automation öğrenin.

## Continuous Integration

### GitHub Actions
Otomatik test ve deployment.

### Pipeline Design
Efficient workflow'lar tasarlayın.

Modern development için CI/CD vazgeçilmez.`,
    date: "22 Nisan 2025",
    readTime: "15 dk okuma",
    slug: "cicd-pipeline-automation",
    category: "devops",
    tags: ["CI/CD", "GitHub Actions", "Automation", "DevOps"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-green-500 via-blue-500 to-purple-500"
  },
  {
    title: "OpenAI API ile Intelligent Web Uygulamaları",
    description: "OpenAI API entegrasyonu ile AI-powered web uygulamaları geliştirin. GPT-4, embeddings ve fine-tuning.",
    content: `OpenAI API ile intelligent web uygulamaları geliştirmeyi öğrenin.

## AI Integration

### GPT-4 API
Powerful language model entegrasyonu.

### Embeddings
Semantic search ve recommendation.

AI-powered uygulamalar için OpenAI API ideal.`,
    date: "20 Nisan 2025",
    readTime: "13 dk okuma",
    slug: "openai-api-intelligent-apps",
    category: "ai",
    tags: ["OpenAI", "AI", "GPT-4", "API"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    title: "Machine Learning ile Web Uygulamaları: TensorFlow.js",
    description: "TensorFlow.js ile browser'da machine learning. Model training, inference ve real-time predictions.",
    content: `TensorFlow.js ile web'de machine learning öğrenin.

## Browser ML

### TensorFlow.js
Browser'da ML model'leri çalıştırın.

### Real-time Inference
Canlı tahminler yapın.

Web ML için TensorFlow.js güçlü bir araç.`,
    date: "18 Nisan 2025",
      readTime: "16 dk okuma",
    slug: "tensorflow-js-web-ml",
      category: "ai",
    tags: ["TensorFlow.js", "Machine Learning", "Web ML", "AI"],
    author: "MSCodeHub Ekibi",
      featured: false,
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    title: "AI-Powered Chatbot Development",
    description: "Modern chatbot'lar geliştirin. Natural language processing, intent recognition ve conversation flow.",
    content: `AI-powered chatbot development öğrenin.

## Chatbot Architecture

### NLP Integration
Natural language processing.

### Conversation Flow
Intelligent conversation management.

Modern chatbot'lar için AI integration vazgeçilmez.`,
    date: "15 Nisan 2025",
      readTime: "14 dk okuma",
    slug: "ai-chatbot-development",
    category: "ai",
    tags: ["Chatbot", "AI", "NLP", "Conversation"],
    author: "MSCodeHub Ekibi",
      featured: false,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
    title: "Software Engineering Career Path",
    description: "Yazılım mühendisliği kariyer yolu. Junior'dan Senior'a geçiş, skill development ve career planning.",
    content: `Software engineering career path ve professional development öğrenin.

## Career Development

### Skill Building
Technical ve soft skill'leri geliştirin.

### Career Planning
Uzun vadeli kariyer hedefleri.

Tech career success için planlı yaklaşım kritik.`,
    date: "10 Nisan 2025",
    readTime: "11 dk okuma",
    slug: "software-engineering-career-path",
      category: "career",
    tags: ["Career", "Software Engineering", "Professional Development", "Skills"],
    author: "MSCodeHub Ekibi",
      featured: false,
    gradient: "from-green-500 via-teal-500 to-blue-500"
  },
  {
    title: "Remote Work Best Practices for Developers",
    description: "Yazılım geliştiriciler için uzaktan çalışma en iyi uygulamaları. Productivity, communication ve work-life balance.",
    content: `Remote work best practices ile effective uzaktan çalışma öğrenin.

## Remote Work

### Productivity Tips
Verimli çalışma teknikleri.

### Communication
Effective team communication.

Modern work environment için remote skills vazgeçilmez.`,
    date: "8 Nisan 2025",
    readTime: "9 dk okuma",
    slug: "remote-work-best-practices-developers",
    category: "career",
    tags: ["Remote Work", "Productivity", "Career", "Work-Life Balance"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    title: "Tech Leadership ve Engineering Management",
    description: "Teknoloji liderliği ve mühendislik yönetimi. Team building, technical decision making ve career growth.",
    content: `Tech leadership ve engineering management öğrenin.

## Leadership Skills

### Team Management
Effective team building ve mentoring.

### Technical Decisions
Architecture ve technology choices.

Tech career growth için leadership skills kritik.`,
    date: "12 Nisan 2025",
    readTime: "12 dk okuma",
    slug: "tech-leadership-engineering-management",
    category: "career",
    tags: ["Leadership", "Management", "Career", "Tech"],
    author: "MSCodeHub Ekibi",
    featured: false,
    gradient: "from-yellow-500 via-orange-500 to-red-500"
  }
] 