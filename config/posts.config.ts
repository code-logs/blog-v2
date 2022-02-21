import { Post } from '../components/recent-posts/RecentPosts'

const posts: Post[] = [
  {
    title: '검색 엔진 최적화를 위한 설정',
    fileName: 'config-for-seo.md',
    description:
      '검색 엔진 최적화를 위한 설정 (Title, Meta Tag, 절대경로, robots.txt, sitemap.xml)',
    category: 'SEO',
    published: true,
    publishedAt: '2021-10-10',
    tags: [
      'Search Engine Optimization',
      'SEO',
      '검색',
      '메타',
      '메타 태그',
      'meta tag',
      '검색엔진',
      '검색엔진 최적화',
      'robots.txt',
      'sitemap.xml',
    ],
    thumbnailName: 'seo-thumbnail.jpg'
  },
  {
    title: 'Tagged Template Literal',
    fileName: 'tagged-template-literal.md',
    description: 'Javascript ES6 Tagged Template Literal',
    category: 'javascript',
    published: true,
    publishedAt: '2021-10-11',
    tags: ['javascript', 'tagged template', 'tagged template literal', 'es6'],
    thumbnailName: 'tagged-template-literal.jpg',
  },
  {
    title: 'Iterator and Generator',
    fileName: 'iterator-generator.md',
    description:
      'Javascript ES6 Iterator & Generator, 열거형, 제너레이터 함수, generator function, yield, function*',
    category: 'javascript',
    published: true,
    publishedAt: '2021-10-17',
    tags: [
      'javascript',
      'iterator',
      'iterable',
      'generator',
      'es6',
      'function*',
      'yield',
    ],
    thumbnailName: 'iterator-generator.jpg',
  },
  {
    title: 'Proxy',
    fileName: 'proxy.md',
    description:
      'Javascript ES6 Proxy, Proxy, Trap, 프락시를 이용한 객체 조작의 제어',
    category: 'javascript',
    published: true,
    publishedAt: '2021-10-25',
    tags: ['javascript', 'proxy', 'trap', 'es6'],
    thumbnailName: 'proxy.jpg',
  },
  {
    title: 'CSS Position',
    fileName: 'css-position.md',
    description:
      'CSS Position (Static, Absolute, Fixed, Sticky)에 따른 고정 헤더 스타일',
    category: 'CSS',
    published: true,
    publishedAt: '2021-10-26',
    tags: [
      'css',
      'position',
      'static',
      'absolute',
      'fixed',
      'sticky',
      'header',
      'style',
    ],
    thumbnailName: 'css-position.jpg',
  },
  {
    title: '고차 컴퍼넌트 (HOC: Higher Order Component)',
    fileName: 'hoc.md',
    description: 'React - 고차 컴퍼넌트를 이용한 컴퍼넌트의 재사용',
    category: 'react',
    published: true,
    publishedAt: '2021-10-30',
    tags: ['hoc', 'higher order component', '고차 컴퍼넌트', 'react'],
    thumbnailName: 'hoc.jpg',
  },
  {
    title: 'Scroll sequence animation',
    fileName: 'scroll-sequence-animation.md',
    description:
      'Apple 제품 페이지 같은 애니메이션을 구현해보자 - Scroll sequence animation',
    category: 'UI and UX',
    published: true,
    publishedAt: '2021-10-31',
    tags: ['scroll sequence', 'scroll sequence animation', 'ui', 'ux'],
    thumbnailName: 'scroll-sequence.jpg',
  },
  {
    title: 'Any | Unknown | Never',
    fileName: 'any-unknown-never.md',
    description: 'TypeScript - Any | Unknown | Never',
    category: 'typescript',
    published: true,
    publishedAt: '2021-11-15',
    tags: ['typescript', 'any', 'unknown', 'never'],
    thumbnailName: 'ts-any-unknown-never.jpg',
  },
  {
    title: 'Elasticsearch: Full-text search (전문검색)',
    fileName: 'full-text-search.md',
    description: 'Elasticsearch를 이용한 Full-text search',
    category: 'elasticsearch',
    published: true,
    publishedAt: '2021-11-16',
    tags: ['elasticsearch', 'full-text search', 'searching engine'],
    thumbnailName: 'elasticsearch-full-text-search.jpg',
  },
  {
    title: 'Nx build system 맛보기',
    fileName: 'monorepo-with-nx.md',
    description: 'Nx build system을 이용한 Monorepo 구성하기',
    category: 'infrastructure',
    published: true,
    publishedAt: '2022-02-12',
    tags: [
      'nx',
      'build',
      'build system',
      'monorepo',
      '빌드',
      '빌드 시스템',
      '모노리포',
    ],
    thumbnailName: 'monorepo-with-nx.jpg',
  },
  {
    title: "Svelte - Let's get started",
    fileName: 'get-started-svelte.md',
    description: 'Svelte 맛보기',
    category: 'svelte',
    published: false,
    publishedAt: '2022-02-13',
    tags: ['svelte', 'frontend', 'get started'],
    thumbnailName: 'get-started-svelte.jpg',
    references: [{
      title: 'Svelte',
      url: 'https://svelte.dev/'
    }, {
      title: 'Naver',
      url: 'https://naver.com/'
    }]
  },
]

export default posts