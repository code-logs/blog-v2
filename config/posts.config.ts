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
  ['web-component']: 'Web Component',
  ['roadmap-frontend']: 'roadmap-frontend',
  ['react-native']: 'react-native',
  ['nodejs']: 'nodejs',
  ['security']: 'security',
  ['cloud']: 'cloud',
  ['css']: 'css',
  ['개발환경']: '개발환경',
  ['infrastructure']: 'infrastructure',
  ['elasticsearch']: 'elasticsearch',
  ['typescript']: 'typescript',
  ['ui-and-ux']: 'ui-and-ux',
  ['react']: 'react',
  ['javascript']: 'javascript',
  ['seo']: 'seo',
}

export const posts: Post[] = [
  {
    title: `웹 컴포넌트 - custom element`,
    description: `웹 컴포넌트로 만드는 나만의 custom element`,
    fileName: 'webcomponent-web-component.md',
    category: 'web-component',
    published: false,
    publishedAt: `2022-07-31`,
    thumbnailName: `68e0ad25625a6fa77a6cb68665141b62`,
    tags: [`Web Component`, `custom element`, `웹 컴포넌트`, `커스텀 엘리먼트`],
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
    tags: [`frontend`, `인터넷`, `protocol`, `라우팅`, `프로토콜`, `roadmap`, `internet`, `패킷`, `packet`],
  },
  {
    title: `React Native - 개발환경 구성하기`,
    description: `Mac OS에서 iOS 애플리케이션 개발을 위한 React Native 개발환경 구성하기`,
    fileName: 'react-native-dev-env.md',
    category: 'react-native',
    published: true,
    publishedAt: `2022-03-26`,
    thumbnailName: `react-native-dev-env.png`,
    tags: [`리액트 네이티브`, `cross platform`, `ios`, `react native cli`, `macos`, `개발환경`, `개발환경 구성하기`, `react native`, `RN`],
  },
  {
    title: `Apollo Server + TypeGraphQL을 이용한 GraphQL API 서버 구성하기`,
    description: `Apollo Server와 TypeGraphQL을 사용한 Node.JS GraphQL API 서버 구성하기`,
    fileName: 'graphql-with-apollo-server-typegraphql.md',
    category: 'nodejs',
    published: true,
    publishedAt: `2022-03-10`,
    thumbnailName: `graphql-apollo-typegraphql.png`,
    tags: [`typegraphql`, `api server`, `api`, `apollo`, `typescript`, `graphql`, `node.js`, `apollo-server`],
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
    tags: [`security`, `security policy`, `browser`, `cookie`, `CHIPS`, `policy`, `chrome`],
  },
  {
    title: `Heroku로 Node.js 애플리케이션 배포하기`,
    description: `Heroku를 이용한 NodeJS  애플리케이션 배포하기`,
    fileName: 'deploy-nodejs-via-heroku.md',
    category: 'cloud',
    published: true,
    publishedAt: `2022-03-04`,
    thumbnailName: `deploy-node-js-via-heroku.png`,
    tags: [`paas`, `deploy`, `node.js`, `heroku`, `cloud service`, `cloud`, `배포`],
  },
  {
    title: `Focus on Button - Safari VS Chrome`,
    description: `Safari, Chrome 브라우저에 따라 달라지는 button의 focus 속성`,
    fileName: 'focus-on-button-safari-vs-chrome.md',
    category: 'css',
    published: true,
    publishedAt: `2022-02-28`,
    thumbnailName: `focus-on-button.png`,
    tags: [`focus-visible`, `safari`, `사파리`, `CSS`, `크롬`, `browser`, `focus`, `focus-within`, `chrome`, `브라우저`],
  },
  {
    title: `ESLint - Plugin and Extends`,
    description: `ESLint의 Plugin과 Extends의 차이는 무엇일까?`,
    fileName: 'eslint-plugin-and-extends.md',
    category: '개발환경',
    published: true,
    publishedAt: `2022-02-27`,
    thumbnailName: `eslint-plugin-and-extends.png`,
    tags: [`plugin`, `eslint plugin`, `eslint extends`, `lint`, `extends`, `개발환경`],
  },
  {
    title: `yarn berry로 구성하는 monorepo`,
    description: `yarn berry와 yarn workspaces를 이용해 monorepo 구성 - 환경 설정, 샘플 프로젝트`,
    fileName: 'yarn-berry-monorepo.md',
    category: 'infrastructure',
    published: true,
    publishedAt: `2022-02-26`,
    thumbnailName: `yarn-berry-monorepo.png`,
    tags: [`workspaces`, `yarn berry`, `모노리포`, `zero-install`, `berry`, `monorepo`, `yarn`, `workspace`],
  },
  {
    title: `Nx build system 맛보기`,
    description: `Nx build system을 이용한 Monorepo 구성하기`,
    fileName: 'monorepo-with-nx.md',
    category: 'infrastructure',
    published: true,
    publishedAt: `2022-02-12`,
    thumbnailName: `monorepo-with-nx.png`,
    tags: [`빌드`, `build system`, `모노리포`, `build`, `nx`, `빌드 시스템`, `monorepo`],
  },
  {
    title: `Elasticsearch: Full-text search (전문검색)`,
    description: `Elasticsearch를 이용한 Full-text search`,
    fileName: 'full-text-search.md',
    category: 'elasticsearch',
    published: true,
    publishedAt: `2021-11-16`,
    thumbnailName: `elasticsearch-full-text-search.png`,
    tags: [`엘라스틱서치`, `full-text search`, `searching engine`, `전문검색`],
  },
  {
    title: `Any | Unknown | Never`,
    description: `TypeScript - Any | Unknown | Never`,
    fileName: 'any-unknown-never.md',
    category: 'typescript',
    published: true,
    publishedAt: `2021-11-15`,
    thumbnailName: `ts-any-unknown-never.png`,
    tags: [`unknown`, `any`, `typescript`, `never`, `타입스크립트`],
  },
  {
    title: `Scroll sequence animation`,
    description: `Apple 제품 페이지 같은 애니메이션을 구현해보자 - Scroll sequence animation`,
    fileName: 'scroll-sequence-animation.md',
    category: 'ui-and-ux',
    published: true,
    publishedAt: `2021-10-31`,
    thumbnailName: `scroll-sequence.png`,
    tags: [`ui`, `ux`, `scroll sequence`, `scroll sequence animation`],
  },
  {
    title: `고차 컴퍼넌트 (HOC: Higher Order Component)`,
    description: `React - 고차 컴퍼넌트를 이용한 컴퍼넌트의 재사용`,
    fileName: 'hoc.md',
    category: 'react',
    published: true,
    publishedAt: `2021-10-30`,
    thumbnailName: `hoc.png`,
    tags: [`higher order component`, `리액트`, `고차 컴퍼넌트`, `hoc`, `react`],
  },
  {
    title: `CSS Position`,
    description: `CSS Position (Static, Absolute, Fixed, Sticky)에 따른 고정 헤더 스타일`,
    fileName: 'css-position.md',
    category: 'css',
    published: true,
    publishedAt: `2021-10-26`,
    thumbnailName: `css-position.png`,
    tags: [`sticky`, `헤더`, `static`, `css`, `header`, `absolute`, `style`, `스타일`, `fixed`, `포지션`],
  },
  {
    title: `Proxy`,
    description: `Javascript ES6 Proxy, Proxy, Trap, 프락시를 이용한 객체 조작의 제어`,
    fileName: 'proxy.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-25`,
    thumbnailName: `proxy.png`,
    tags: [`trap`, `proxy`, `javascript`, `es6`, `프록시`],
  },
  {
    title: `Iterator and Generator`,
    description: `Javascript ES6 Iterator & Generator, 열거형, 제너레이터 함수, generator function, yield, function*`,
    fileName: 'iterator-generator.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-17`,
    thumbnailName: `iterator-generator.png`,
    tags: [`javascript`, `generator`, `function*`, `iterable`, `es6`, `iterator`, `yield`],
  },
  {
    title: `Tagged Template Literal`,
    description: `Javascript ES6 Tagged Template Literal`,
    fileName: 'tagged-template-literal.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-11`,
    thumbnailName: `tagged-template-literal.png`,
    tags: [`javascript`, `tagged template literal`, `tagged template`, `es6`],
  },
  {
    title: `검색 엔진 최적화를 위한 설정`,
    description: `검색 엔진 최적화를 위한 설정 (Title, Meta Tag, 절대경로, robots.txt, sitemap.xml)`,
    fileName: 'config-for-seo.md',
    category: 'seo',
    published: true,
    publishedAt: `2021-10-10`,
    thumbnailName: `seo-thumbnail.jpg`,
    tags: [`메타 태그`, `robots.txt`, `sitemap.xml`, `meta tag`, `검색엔진`, `메타`, `SEO`, `검색`, `검색엔진 최적화`, `Search Engine Optimization`],
  },
]

export default posts
