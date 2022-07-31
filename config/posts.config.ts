export interface PostRef {
  title: string
  url: string
}

export interface Post {
  title: string
  fileName: string
  description: string
  category: typeof CATEGORIES[keyof typeof CATEGORIES]
  published: boolean
  publishedAt: string
  thumbnailName: string
  tags: string[]
  references?: PostRef[]
  series?: {
    prevPostTitle?: string
    nextPostTitle?: string
  }
}

export const CATEGORIES = {
  ['webcomponent']: 'WebComponent',
  ['roadmap-frontend']: 'Roadmap Frontend',
  ['react-native']: 'React Native',
  ['nodejs']: 'NodeJS',
  ['security']: 'Security',
  ['cloud']: 'Cloud',
  ['css']: 'CSS',
  ['개발환경']: '개발환경',
  ['infrastructure']: 'Infrastructure',
  ['elasticsearch']: 'ElasticSearch',
  ['typescript']: 'TypeScript',
  ['ui-and-ux']: 'UI and UX',
  ['react']: 'React',
  ['javascript']: 'javascript',
  ['seo']: 'SEO',
}

export const posts: Post[] = [
  {
    title: `web component`,
    description: `Web Component tutorial`,
    fileName: 'webcomponent-web-component.md',
    category: 'webcomponent',
    published: false,
    publishedAt: `2022-07-31`,
    thumbnailName: `aa1857289dbae334d434fde93903999c`,
    tags: [`eslint`, `position`, `routing`, `elasticsearch`, `roadmap.sh`],
  },
  {
    title: `Internet - Roadmap.sh (frontend)`,
    description: `Roadmap.sh frontend - Internet
Roadmap.sh - frontend 학습 순서에 따라 정리하는 포스팅 1`,
    fileName: 'internet.md',
    category: 'roadmap-frontend',
    published: true,
    publishedAt: `2022-07-20`,
    thumbnailName: `roadmap-frontend-internet.png`,
    tags: [`라우팅`, `internet`, `프로토콜`, `패킷`, `roadmap`, `frontend`, `packet`, `protocol`, `인터넷`],
  },
  {
    title: `React Native - 개발환경 구성하기`,
    description: `Mac OS에서 iOS 애플리케이션 개발을 위한 React Native 개발환경 구성하기`,
    fileName: 'react-native-dev-env.md',
    category: 'react-native',
    published: true,
    publishedAt: `2022-03-26`,
    thumbnailName: `react-native-dev-env.png`,
    tags: [`react native`, `cross platform`, `리액트 네이티브`, `ios`, `RN`, `react native cli`, `macos`, `개발환경`, `개발환경 구성하기`],
  },
  {
    title: `Apollo Server + TypeGraphQL을 이용한 GraphQL API 서버 구성하기`,
    description: `Apollo Server와 TypeGraphQL을 사용한 Node.JS GraphQL API 서버 구성하기`,
    fileName: 'graphql-with-apollo-server-typegraphql.md',
    category: 'nodejs',
    published: true,
    publishedAt: `2022-03-10`,
    thumbnailName: `graphql-apollo-typegraphql.png`,
    tags: [`api`, `typegraphql`, `typescript`, `api server`, `apollo`, `node.js`, `apollo-server`, `graphql`],
  },
  {
    title: `브라우저 보안 정책 CHIPS - (feat. Chrome 쿠키 입력 불가)`,
    description: `CHIPS - Cookies Having Independent Partitioned State
(Chrome 98 버그를 찾아 헤매다 발견하게 된 브라우저의 Cookie 관리 정책)`,
    fileName: 'chips.md',
    category: 'security',
    published: true,
    publishedAt: `2022-03-06`,
    thumbnailName: `chips.png`,
    tags: [`browser`, `security`, `CHIPS`, `cookie`, `policy`, `chrome`, `security policy`],
  },
  {
    title: `Heroku로 Node.js 애플리케이션 배포하기`,
    description: `Heroku를 이용한 NodeJS  애플리케이션 배포하기`,
    fileName: 'deploy-nodejs-via-heroku.md',
    category: 'cloud',
    published: true,
    publishedAt: `2022-03-04`,
    thumbnailName: `deploy-node-js-via-heroku.png`,
    tags: [`배포`, `node.js`, `heroku`, `paas`, `cloud service`, `cloud`, `deploy`],
  },
  {
    title: `Focus on Button - Safari VS Chrome`,
    description: `Safari, Chrome 브라우저에 따라 달라지는 button의 focus 속성`,
    fileName: 'focus-on-button-safari-vs-chrome.md',
    category: 'css',
    published: true,
    publishedAt: `2022-02-28`,
    thumbnailName: `focus-on-button.png`,
    tags: [`safari`, `chrome`, `CSS`, `사파리`, `focus-visible`, `focus`, `focus-within`, `브라우저`, `browser`, `크롬`],
  },
  {
    title: `ESLint - Plugin and Extends`,
    description: `ESLint의 Plugin과 Extends의 차이는 무엇일까?`,
    fileName: 'eslint-plugin-and-extends.md',
    category: '개발환경',
    published: true,
    publishedAt: `2022-02-27`,
    thumbnailName: `eslint-plugin-and-extends.png`,
    tags: [`eslint extends`, `개발환경`, `lint`, `plugin`, `extends`, `eslint plugin`],
  },
  {
    title: `yarn berry로 구성하는 monorepo`,
    description: `yarn berry와 yarn workspaces를 이용해 monorepo 구성 - 환경 설정, 샘플 프로젝트`,
    fileName: 'yarn-berry-monorepo.md',
    category: 'infrastructure',
    published: true,
    publishedAt: `2022-02-26`,
    thumbnailName: `yarn-berry-monorepo.png`,
    tags: [`berry`, `monorepo`, `workspaces`, `yarn`, `모노리포`, `workspace`, `yarn berry`, `zero-install`],
  },
  {
    title: `Nx build system 맛보기`,
    description: `Nx build system을 이용한 Monorepo 구성하기`,
    fileName: 'monorepo-with-nx.md',
    category: 'infrastructure',
    published: true,
    publishedAt: `2022-02-12`,
    thumbnailName: `monorepo-with-nx.png`,
    tags: [`nx`, `monorepo`, `빌드`, `모노리포`, `build`, `빌드 시스템`, `build system`],
  },
  {
    title: `Elasticsearch: Full-text search (전문검색)`,
    description: `Elasticsearch를 이용한 Full-text search`,
    fileName: 'full-text-search.md',
    category: 'elasticsearch',
    published: true,
    publishedAt: `2021-11-16`,
    thumbnailName: `elasticsearch-full-text-search.png`,
    tags: [`full-text search`, `엘라스틱서치`, `전문검색`, `searching engine`],
  },
  {
    title: `Any | Unknown | Never`,
    description: `TypeScript - Any | Unknown | Never`,
    fileName: 'any-unknown-never.md',
    category: 'typescript',
    published: true,
    publishedAt: `2021-11-15`,
    thumbnailName: `ts-any-unknown-never.png`,
    tags: [`타입스크립트`, `any`, `typescript`, `never`, `unknown`],
  },
  {
    title: `Scroll sequence animation`,
    description: `Apple 제품 페이지 같은 애니메이션을 구현해보자 - Scroll sequence animation`,
    fileName: 'scroll-sequence-animation.md',
    category: 'ui-and-ux',
    published: true,
    publishedAt: `2021-10-31`,
    thumbnailName: `scroll-sequence.png`,
    tags: [`ux`, `scroll sequence animation`, `scroll sequence`, `ui`],
  },
  {
    title: `고차 컴퍼넌트 (HOC: Higher Order Component)`,
    description: `React - 고차 컴퍼넌트를 이용한 컴퍼넌트의 재사용`,
    fileName: 'hoc.md',
    category: 'react',
    published: true,
    publishedAt: `2021-10-30`,
    thumbnailName: `hoc.png`,
    tags: [`react`, `고차 컴퍼넌트`, `리액트`, `higher order component`, `hoc`],
  },
  {
    title: `CSS Position`,
    description: `CSS Position (Static, Absolute, Fixed, Sticky)에 따른 고정 헤더 스타일`,
    fileName: 'css-position.md',
    category: 'css',
    published: true,
    publishedAt: `2021-10-26`,
    thumbnailName: `css-position.png`,
    tags: [`포지션`, `absolute`, `스타일`, `fixed`, `css`, `sticky`, `static`, `헤더`, `header`, `style`],
  },
  {
    title: `Proxy`,
    description: `Javascript ES6 Proxy, Proxy, Trap, 프락시를 이용한 객체 조작의 제어`,
    fileName: 'proxy.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-25`,
    thumbnailName: `proxy.png`,
    tags: [`프록시`, `es6`, `trap`, `javascript`, `proxy`],
  },
  {
    title: `Iterator and Generator`,
    description: `Javascript ES6 Iterator & Generator, 열거형, 제너레이터 함수, generator function, yield, function*`,
    fileName: 'iterator-generator.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-17`,
    thumbnailName: `iterator-generator.png`,
    tags: [`javascript`, `yield`, `iterable`, `generator`, `es6`, `function*`, `iterator`],
  },
  {
    title: `Tagged Template Literal`,
    description: `Javascript ES6 Tagged Template Literal`,
    fileName: 'tagged-template-literal.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-11`,
    thumbnailName: `tagged-template-literal.png`,
    tags: [`tagged template literal`, `javascript`, `tagged template`, `es6`],
  },
  {
    title: `검색 엔진 최적화를 위한 설정`,
    description: `검색 엔진 최적화를 위한 설정 (Title, Meta Tag, 절대경로, robots.txt, sitemap.xml)`,
    fileName: 'config-for-seo.md',
    category: 'seo',
    published: true,
    publishedAt: `2021-10-10`,
    thumbnailName: `seo-thumbnail.jpg`,
    tags: [`meta tag`, `robots.txt`, `sitemap.xml`, `검색엔진`, `검색`, `Search Engine Optimization`, `메타`, `SEO`, `메타 태그`, `검색엔진 최적화`],
  },
]

export default posts
