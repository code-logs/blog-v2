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
  ['web-component']: 'web-component',
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
    published: true,
    publishedAt: `2022-07-31`,
    thumbnailName: `68e0ad25625a6fa77a6cb68665141b62`,
    tags: [`웹 컴포넌트`, `custom element`, `커스텀 엘리먼트`, `Web Component`],
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
    tags: [`roadmap`, `인터넷`, `라우팅`, `packet`, `패킷`, `protocol`, `프로토콜`, `frontend`, `internet`],
  },
  {
    title: `React Native - 개발환경 구성하기`,
    description: `Mac OS에서 iOS 애플리케이션 개발을 위한 React Native 개발환경 구성하기`,
    fileName: 'react-native-dev-env.md',
    category: 'react-native',
    published: true,
    publishedAt: `2022-03-26`,
    thumbnailName: `react-native-dev-env.png`,
    tags: [`cross platform`, `react native cli`, `macos`, `개발환경`, `ios`, `개발환경 구성하기`, `react native`, `RN`, `리액트 네이티브`],
  },
  {
    title: `Apollo Server + TypeGraphQL을 이용한 GraphQL API 서버 구성하기`,
    description: `Apollo Server와 TypeGraphQL을 사용한 Node.JS GraphQL API 서버 구성하기`,
    fileName: 'graphql-with-apollo-server-typegraphql.md',
    category: 'nodejs',
    published: true,
    publishedAt: `2022-03-10`,
    thumbnailName: `graphql-apollo-typegraphql.png`,
    tags: [`node.js`, `apollo-server`, `typescript`, `graphql`, `typegraphql`, `api server`, `api`, `apollo`],
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
    tags: [`security policy`, `security`, `CHIPS`, `policy`, `cookie`, `chrome`, `browser`],
  },
  {
    title: `Heroku로 Node.js 애플리케이션 배포하기`,
    description: `Heroku를 이용한 NodeJS  애플리케이션 배포하기`,
    fileName: 'deploy-nodejs-via-heroku.md',
    category: 'cloud',
    published: true,
    publishedAt: `2022-03-04`,
    thumbnailName: `deploy-node-js-via-heroku.png`,
    tags: [`paas`, `heroku`, `배포`, `node.js`, `cloud`, `cloud service`, `deploy`],
  },
  {
    title: `Focus on Button - Safari VS Chrome`,
    description: `Safari, Chrome 브라우저에 따라 달라지는 button의 focus 속성`,
    fileName: 'focus-on-button-safari-vs-chrome.md',
    category: 'css',
    published: true,
    publishedAt: `2022-02-28`,
    thumbnailName: `focus-on-button.png`,
    tags: [`CSS`, `focus-within`, `browser`, `브라우저`, `focus-visible`, `focus`, `크롬`, `chrome`, `사파리`, `safari`],
  },
  {
    title: `ESLint - Plugin and Extends`,
    description: `ESLint의 Plugin과 Extends의 차이는 무엇일까?`,
    fileName: 'eslint-plugin-and-extends.md',
    category: '개발환경',
    published: true,
    publishedAt: `2022-02-27`,
    thumbnailName: `eslint-plugin-and-extends.png`,
    tags: [`eslint plugin`, `eslint extends`, `개발환경`, `lint`, `extends`, `plugin`],
  },
  {
    title: `yarn berry로 구성하는 monorepo`,
    description: `yarn berry와 yarn workspaces를 이용해 monorepo 구성 - 환경 설정, 샘플 프로젝트`,
    fileName: 'yarn-berry-monorepo.md',
    category: 'infrastructure',
    published: true,
    publishedAt: `2022-02-26`,
    thumbnailName: `yarn-berry-monorepo.png`,
    tags: [`zero-install`, `monorepo`, `berry`, `workspace`, `yarn`, `workspaces`, `yarn berry`, `모노리포`],
  },
  {
    title: `Nx build system 맛보기`,
    description: `Nx build system을 이용한 Monorepo 구성하기`,
    fileName: 'monorepo-with-nx.md',
    category: 'infrastructure',
    published: true,
    publishedAt: `2022-02-12`,
    thumbnailName: `monorepo-with-nx.png`,
    tags: [`빌드 시스템`, `빌드`, `build system`, `nx`, `모노리포`, `build`, `monorepo`],
  },
  {
    title: `Elasticsearch: Full-text search (전문검색)`,
    description: `Elasticsearch를 이용한 Full-text search`,
    fileName: 'full-text-search.md',
    category: 'elasticsearch',
    published: true,
    publishedAt: `2021-11-16`,
    thumbnailName: `elasticsearch-full-text-search.png`,
    tags: [`전문검색`, `엘라스틱서치`, `searching engine`, `full-text search`],
  },
  {
    title: `Any | Unknown | Never`,
    description: `TypeScript - Any | Unknown | Never`,
    fileName: 'any-unknown-never.md',
    category: 'typescript',
    published: true,
    publishedAt: `2021-11-15`,
    thumbnailName: `ts-any-unknown-never.png`,
    tags: [`any`, `타입스크립트`, `unknown`, `typescript`, `never`],
  },
  {
    title: `Scroll sequence animation`,
    description: `Apple 제품 페이지 같은 애니메이션을 구현해보자 - Scroll sequence animation`,
    fileName: 'scroll-sequence-animation.md',
    category: 'ui-and-ux',
    published: true,
    publishedAt: `2021-10-31`,
    thumbnailName: `scroll-sequence.png`,
    tags: [`ux`, `scroll sequence`, `scroll sequence animation`, `ui`],
  },
  {
    title: `고차 컴퍼넌트 (HOC: Higher Order Component)`,
    description: `React - 고차 컴퍼넌트를 이용한 컴퍼넌트의 재사용`,
    fileName: 'hoc.md',
    category: 'react',
    published: true,
    publishedAt: `2021-10-30`,
    thumbnailName: `hoc.png`,
    tags: [`hoc`, `react`, `고차 컴퍼넌트`, `higher order component`, `리액트`],
  },
  {
    title: `CSS Position`,
    description: `CSS Position (Static, Absolute, Fixed, Sticky)에 따른 고정 헤더 스타일`,
    fileName: 'css-position.md',
    category: 'css',
    published: true,
    publishedAt: `2021-10-26`,
    thumbnailName: `css-position.png`,
    tags: [`css`, `style`, `header`, `fixed`, `포지션`, `absolute`, `static`, `sticky`, `스타일`, `헤더`],
  },
  {
    title: `Proxy`,
    description: `Javascript ES6 Proxy, Proxy, Trap, 프락시를 이용한 객체 조작의 제어`,
    fileName: 'proxy.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-25`,
    thumbnailName: `proxy.png`,
    tags: [`es6`, `proxy`, `trap`, `프록시`, `javascript`],
  },
  {
    title: `Iterator and Generator`,
    description: `Javascript ES6 Iterator & Generator, 열거형, 제너레이터 함수, generator function, yield, function*`,
    fileName: 'iterator-generator.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-17`,
    thumbnailName: `iterator-generator.png`,
    tags: [`iterable`, `generator`, `es6`, `iterator`, `yield`, `javascript`, `function*`],
  },
  {
    title: `Tagged Template Literal`,
    description: `Javascript ES6 Tagged Template Literal`,
    fileName: 'tagged-template-literal.md',
    category: 'javascript',
    published: true,
    publishedAt: `2021-10-11`,
    thumbnailName: `tagged-template-literal.png`,
    tags: [`javascript`, `tagged template literal`, `es6`, `tagged template`],
  },
  {
    title: `검색 엔진 최적화를 위한 설정`,
    description: `검색 엔진 최적화를 위한 설정 (Title, Meta Tag, 절대경로, robots.txt, sitemap.xml)`,
    fileName: 'config-for-seo.md',
    category: 'seo',
    published: true,
    publishedAt: `2021-10-10`,
    thumbnailName: `seo-thumbnail.jpg`,
    tags: [`메타`, `검색엔진`, `SEO`, `robots.txt`, `sitemap.xml`, `meta tag`, `검색`, `메타 태그`, `검색엔진 최적화`, `Search Engine Optimization`],
  },
]

export default posts
