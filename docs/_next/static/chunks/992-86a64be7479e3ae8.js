'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [992],
  {
    6166: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var r = n(5893),
        o = n(9008),
        a = n(8145),
        i = n(7294),
        l = function () {
          ;(0, i.useEffect)(function () {
            if (document.head) {
              var e = document.createElement('script')
              ;(e.async = !0),
                (e.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(a.Z.googleAdsense.adClient)),
                (e.crossOrigin = 'anonymous'),
                document.head.appendChild(e)
            }
          }, [])
        },
        s = function (e) {
          var t = e.title,
            n = e.description,
            i = e.keywords,
            s = e.url,
            c = e.imageURL,
            u = e.customMeta
          return (
            l(),
            (0, r.jsxs)(o.default, {
              children: [
                (0, r.jsx)('link', { rel: 'canonical', href: s }),
                (0, r.jsx)('link', { rel: 'apple-touch-icon', href: a.Z.appleTouchIconPath }),
                (0, r.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, r.jsx)('meta', { name: 'theme-color', content: a.Z.themeColor }, 'theme-color'),
                (0, r.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, r.jsx)('meta', { property: 'og:site_name', content: a.Z.title }, 'og:site_name'),
                (0, r.jsx)('meta', { name: 'author', content: a.Z.author }, 'author'),
                (null === i || void 0 === i ? void 0 : i.length) && (0, r.jsx)('meta', { name: 'keyword', content: i.join(', ') }, 'keyword'),
                (0, r.jsx)('meta', { name: 'description', content: n }, 'description'),
                (0, r.jsx)('meta', { property: 'og:description', content: n }, 'og:description'),
                (0, r.jsx)('meta', { property: 'og:title', content: t }, 'og:title'),
                (0, r.jsx)('meta', { property: 'og:url', content: s }, 'og:url'),
                (0, r.jsx)('meta', { property: 'og:image', content: c }, 'og:image'),
                u && u,
                (0, r.jsx)('title', { children: t }),
              ],
            })
          )
        }
    },
    1780: function (e, t, n) {
      var r = n(5893),
        o = n(7294)
      t.Z = function (e) {
        return (
          (0, o.useEffect)(function () {
            ;(window.adsbygoogle = window.adsbygoogle || []), window.adsbygoogle.push({})
          }, []),
          (0, r.jsx)('ins', {
            className: 'adsbygoogle',
            style: { display: 'block' },
            'data-ad-client': e.adClient,
            'data-ad-slot': e.adSlot,
            'data-ad-format': 'auto',
            'data-full-width-responsive': 'true',
            onLoad: function () {
              return console.log('loaded')
            },
          })
        )
      }
    },
    2698: function (e, t, n) {
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      n.d(t, {
        Z: function () {
          return v
        },
      })
      var i,
        l = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.dataset = t)
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: 'find',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  return void 0 !== e ? this.dataset.slice(t, t + e) : a(this.dataset)
                },
              },
              {
                key: 'count',
                value: function (e, t) {
                  return this.dataset.filter(function (n) {
                    return n[e] === t
                  }).length
                },
              },
              {
                key: 'sort',
                value: function (e) {
                  return this.dataset.sort(e), this
                },
              },
            ]),
            n && o(t.prototype, n),
            r && o(t, r),
            e
          )
        })(),
        s = l,
        c = n(8286)
      function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
      u((i = {}), 'web-component', 'Web Component'),
        u(i, 'roadmap-frontend', 'Roadmap Frontend'),
        u(i, 'react-native', 'React Native'),
        u(i, 'nodejs', 'NodeJS'),
        u(i, 'security', 'Security'),
        u(i, 'cloud', 'Cloud'),
        u(i, 'css', 'CSS'),
        u(i, '\uac1c\ubc1c\ud658\uacbd', '\uac1c\ubc1c\ud658\uacbd'),
        u(i, 'infrastructure', 'Infrastructure'),
        u(i, 'elasticsearch', 'ElasticSearch'),
        u(i, 'typescript', 'TypeScript'),
        u(i, 'ui-and-ux', 'UI and UX'),
        u(i, 'react', 'React'),
        u(i, 'javascript', 'javascript'),
        u(i, 'seo', 'SEO')
      var p = [
        {
          title: 'Web component - custom element',
          description: '\uc6f9 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub9cc\ub4dc\ub294 \ub098\ub9cc\uc758 custom element',
          fileName: 'web-component-web-component---custom-element.md',
          category: 'web-component',
          published: !0,
          publishedAt: '2022-07-31',
          thumbnailName: 'e0e40e28cf11f896033c8650f19188b7',
          tags: ['custom element', '\uc6f9 \ucef4\ud3ec\ub10c\ud2b8', '\ucee4\uc2a4\ud140 \uc5d8\ub9ac\uba3c\ud2b8', 'web component'],
          references: [
            { title: 'WebComponent org', url: 'https://www.webcomponents.org/' },
            { title: 'https://web.dev/custom-elements-v1/#custom-element-reactions', url: 'https://web.dev/custom-elements-v1/#custom-element-reactions' },
            { title: 'Custom element naming convention', url: 'https://html.spec.whatwg.org/#valid-custom-element-name' },
          ],
        },
        {
          title: 'Internet - Roadmap.sh (frontend)',
          description:
            'Roadmap.sh frontend - Internet\nRoadmap.sh - frontend \ud559\uc2b5 \uc21c\uc11c\uc5d0 \ub530\ub77c \uc815\ub9ac\ud558\ub294 \ud3ec\uc2a4\ud305 1',
          fileName: 'internet.md',
          category: 'roadmap-frontend',
          published: !0,
          publishedAt: '2022-07-20',
          thumbnailName: 'roadmap-frontend-internet.png',
          tags: [
            '\uc778\ud130\ub137',
            'packet',
            'routing',
            'roadmap',
            'roadmap.sh',
            'internet',
            '\ub77c\uc6b0\ud305',
            '\ud328\ud0b7',
            '\ud504\ub85c\ud1a0\ucf5c',
            'frontend',
            'protocol',
          ],
          references: [{ title: 'Roadmap.sh', url: 'https://roadmap.sh/frontend' }],
        },
        {
          title: 'React Native - \uac1c\ubc1c\ud658\uacbd \uad6c\uc131\ud558\uae30',
          description:
            'Mac OS\uc5d0\uc11c iOS \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc744 \uc704\ud55c React Native \uac1c\ubc1c\ud658\uacbd \uad6c\uc131\ud558\uae30',
          fileName: 'react-native-dev-env.md',
          category: 'react-native',
          published: !0,
          publishedAt: '2022-03-26',
          thumbnailName: 'react-native-dev-env.png',
          tags: [
            'cross platform',
            'RN',
            'react native',
            '\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c',
            '\uac1c\ubc1c\ud658\uacbd',
            '\uac1c\ubc1c\ud658\uacbd \uad6c\uc131\ud558\uae30',
            'macos',
            'react native cli',
            'ios',
          ],
          references: [
            { title: 'React Native', url: 'https://reactnative.dev/docs/environment-setup' },
            { title: 'NVM', url: 'https://github.com/nvm-sh/nvm' },
          ],
        },
        {
          title: 'Apollo Server + TypeGraphQL\uc744 \uc774\uc6a9\ud55c GraphQL API \uc11c\ubc84 \uad6c\uc131\ud558\uae30',
          description: 'Apollo Server\uc640 TypeGraphQL\uc744 \uc0ac\uc6a9\ud55c Node.JS GraphQL API \uc11c\ubc84 \uad6c\uc131\ud558\uae30',
          fileName: 'graphql-with-apollo-server-typegraphql.md',
          category: 'nodejs',
          published: !0,
          publishedAt: '2022-03-10',
          thumbnailName: 'graphql-apollo-typegraphql.png',
          tags: ['api server', 'api', 'typescript', 'apollo', 'apollo-server', 'node.js', 'graphql', 'typegraphql'],
          references: [
            { title: 'DataLoader - GitHub Repository', url: 'https://github.com/graphql/dataloader' },
            { title: 'TypeGraphQL', url: 'https://typegraphql.com' },
            { title: 'Sample Repository', url: 'https://github.com/possible819/graphql-sample' },
            { title: 'GraphQL', url: 'https://graphql.org' },
            { title: 'Apollo Server', url: 'https://www.apollographql.com' },
          ],
        },
        {
          title: '\ube0c\ub77c\uc6b0\uc800 \ubcf4\uc548 \uc815\ucc45 CHIPS - (feat. Chrome \ucfe0\ud0a4 \uc785\ub825 \ubd88\uac00)',
          description:
            'CHIPS - Cookies Having Independent Partitioned State\n(Chrome 98 \ubc84\uadf8\ub97c \ucc3e\uc544 \ud5e4\ub9e4\ub2e4 \ubc1c\uacac\ud558\uac8c \ub41c \ube0c\ub77c\uc6b0\uc800\uc758 Cookie \uad00\ub9ac \uc815\ucc45)',
          fileName: 'chips.md',
          category: 'security',
          published: !0,
          publishedAt: '2022-03-06',
          thumbnailName: 'chips.png',
          tags: ['security', 'security policy', 'browser', 'chrome', 'policy', 'cookie', 'CHIPS'],
          references: [{ title: 'Chrome Platform Status', url: 'https://chromestatus.com/feature/5179189105786880' }],
        },
        {
          title: 'Heroku\ub85c Node.js \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec\ud558\uae30',
          description: 'Heroku\ub97c \uc774\uc6a9\ud55c NodeJS  \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec\ud558\uae30',
          fileName: 'deploy-nodejs-via-heroku.md',
          category: 'cloud',
          published: !0,
          publishedAt: '2022-03-04',
          thumbnailName: 'deploy-node-js-via-heroku.png',
          tags: ['node.js', 'cloud service', 'deploy', 'cloud', 'paas', '\ubc30\ud3ec', 'heroku'],
          references: [
            { title: 'Wiki - PaaS', url: 'https://en.wikipedia.org/wiki/Platform_as_a_service' },
            { title: 'Heroku Dev Center', url: 'https://devcenter.heroku.com/' },
          ],
        },
        {
          title: 'Focus on Button - Safari VS Chrome',
          description: 'Safari, Chrome \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 button\uc758 focus \uc18d\uc131',
          fileName: 'focus-on-button-safari-vs-chrome.md',
          category: 'css',
          published: !0,
          publishedAt: '2022-02-28',
          thumbnailName: 'focus-on-button.png',
          tags: [
            'chrome',
            '\ud06c\ub86c',
            'focus-visible',
            'safari',
            'focus-within',
            '\uc0ac\ud30c\ub9ac',
            'browser',
            'focus',
            'CSS',
            '\ube0c\ub77c\uc6b0\uc800',
          ],
          references: [
            { title: 'Clicking and focus - MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus' },
          ],
        },
        {
          title: 'ESLint - Plugin and Extends',
          description: 'ESLint\uc758 Plugin\uacfc Extends\uc758 \ucc28\uc774\ub294 \ubb34\uc5c7\uc77c\uae4c?',
          fileName: 'eslint-plugin-and-extends.md',
          category: '\uac1c\ubc1c\ud658\uacbd',
          published: !0,
          publishedAt: '2022-02-27',
          thumbnailName: 'eslint-plugin-and-extends.png',
          tags: ['eslint extends', 'eslint plugin', '\uac1c\ubc1c\ud658\uacbd', 'eslint', 'plugin', 'lint', 'extends'],
          references: [
            { title: 'eslint-plugin-react Github repository', url: 'https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L118-L179' },
          ],
        },
        {
          title: 'yarn berry\ub85c \uad6c\uc131\ud558\ub294 monorepo',
          description:
            'yarn berry\uc640 yarn workspaces\ub97c \uc774\uc6a9\ud574 monorepo \uad6c\uc131 - \ud658\uacbd \uc124\uc815, \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8',
          fileName: 'yarn-berry-monorepo.md',
          category: 'infrastructure',
          published: !0,
          publishedAt: '2022-02-26',
          thumbnailName: 'yarn-berry-monorepo.png',
          tags: ['yarn berry', 'zero-install', 'workspaces', 'monorepo', 'berry', 'yarn', '\ubaa8\ub178\ub9ac\ud3ec', 'workspace'],
          references: [{ title: 'yarn workspaces', url: 'https://yarnpkg.com/features/workspaces' }],
          series: { prevPostTitle: 'Nx build system \ub9db\ubcf4\uae30' },
        },
        {
          title: 'Nx build system \ub9db\ubcf4\uae30',
          description: 'Nx build system\uc744 \uc774\uc6a9\ud55c Monorepo \uad6c\uc131\ud558\uae30',
          fileName: 'monorepo-with-nx.md',
          category: 'infrastructure',
          published: !0,
          publishedAt: '2022-02-12',
          thumbnailName: 'monorepo-with-nx.png',
          tags: ['\ube4c\ub4dc \uc2dc\uc2a4\ud15c', 'build', '\ube4c\ub4dc', '\ubaa8\ub178\ub9ac\ud3ec', 'nx', 'build system', 'monorepo'],
          series: { prevPostTitle: 'Nx build system \ub9db\ubcf4\uae30', nextPostTitle: 'yarn berry\ub85c \uad6c\uc131\ud558\ub294 monorepo' },
        },
        {
          title: 'Elasticsearch: Full-text search (\uc804\ubb38\uac80\uc0c9)',
          description: 'Elasticsearch\ub97c \uc774\uc6a9\ud55c Full-text search',
          fileName: 'full-text-search.md',
          category: 'elasticsearch',
          published: !0,
          publishedAt: '2021-11-16',
          thumbnailName: 'elasticsearch-full-text-search.png',
          tags: ['elasticsearch', 'full-text search', 'searching engine', '\uc5d8\ub77c\uc2a4\ud2f1\uc11c\uce58', '\uc804\ubb38\uac80\uc0c9'],
        },
        {
          title: 'Any | Unknown | Never',
          description: 'TypeScript - Any | Unknown | Never',
          fileName: 'any-unknown-never.md',
          category: 'typescript',
          published: !0,
          publishedAt: '2021-11-15',
          thumbnailName: 'ts-any-unknown-never.png',
          tags: ['\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8', 'typescript', 'never', 'any', 'unknown'],
        },
        {
          title: 'Scroll sequence animation',
          description:
            'Apple \uc81c\ud488 \ud398\uc774\uc9c0 \uac19\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uad6c\ud604\ud574\ubcf4\uc790 - Scroll sequence animation',
          fileName: 'scroll-sequence-animation.md',
          category: 'ui-and-ux',
          published: !0,
          publishedAt: '2021-10-31',
          thumbnailName: 'scroll-sequence.png',
          tags: ['scroll sequence animation', 'scroll sequence', 'ux', 'ui'],
        },
        {
          title: '\uace0\ucc28 \ucef4\ud37c\ub10c\ud2b8 (HOC: Higher Order Component)',
          description: 'React - \uace0\ucc28 \ucef4\ud37c\ub10c\ud2b8\ub97c \uc774\uc6a9\ud55c \ucef4\ud37c\ub10c\ud2b8\uc758 \uc7ac\uc0ac\uc6a9',
          fileName: 'hoc.md',
          category: 'react',
          published: !0,
          publishedAt: '2021-10-30',
          thumbnailName: 'hoc.png',
          tags: ['hoc', 'higher order component', 'react', '\ub9ac\uc561\ud2b8', '\uace0\ucc28 \ucef4\ud37c\ub10c\ud2b8'],
        },
        {
          title: 'CSS Position',
          description: 'CSS Position (Static, Absolute, Fixed, Sticky)\uc5d0 \ub530\ub978 \uace0\uc815 \ud5e4\ub354 \uc2a4\ud0c0\uc77c',
          fileName: 'css-position.md',
          category: 'css',
          published: !0,
          publishedAt: '2021-10-26',
          thumbnailName: 'css-position.png',
          tags: ['sticky', 'position', '\ud5e4\ub354', 'fixed', 'css', 'header', 'static', 'style', 'absolute', '\ud3ec\uc9c0\uc158', '\uc2a4\ud0c0\uc77c'],
        },
        {
          title: 'Proxy',
          description: 'Javascript ES6 Proxy, Proxy, Trap, \ud504\ub77d\uc2dc\ub97c \uc774\uc6a9\ud55c \uac1d\uccb4 \uc870\uc791\uc758 \uc81c\uc5b4',
          fileName: 'proxy.md',
          category: 'javascript',
          published: !0,
          publishedAt: '2021-10-25',
          thumbnailName: 'proxy.png',
          tags: ['\ud504\ub85d\uc2dc', 'trap', 'javascript', 'es6', 'proxy'],
        },
        {
          title: 'Iterator and Generator',
          description:
            'Javascript ES6 Iterator & Generator, \uc5f4\uac70\ud615, \uc81c\ub108\ub808\uc774\ud130 \ud568\uc218, generator function, yield, function*',
          fileName: 'iterator-generator.md',
          category: 'javascript',
          published: !0,
          publishedAt: '2021-10-17',
          thumbnailName: 'iterator-generator.png',
          tags: ['es6', 'generator', 'iterable', 'iterator', 'function*', 'yield', 'javascript'],
        },
        {
          title: 'Tagged Template Literal',
          description: 'Javascript ES6 Tagged Template Literal',
          fileName: 'tagged-template-literal.md',
          category: 'javascript',
          published: !0,
          publishedAt: '2021-10-11',
          thumbnailName: 'tagged-template-literal.png',
          tags: ['tagged template', 'es6', 'tagged template literal', 'javascript'],
        },
        {
          title: '\uac80\uc0c9 \uc5d4\uc9c4 \ucd5c\uc801\ud654\ub97c \uc704\ud55c \uc124\uc815',
          description:
            '\uac80\uc0c9 \uc5d4\uc9c4 \ucd5c\uc801\ud654\ub97c \uc704\ud55c \uc124\uc815 (Title, Meta Tag, \uc808\ub300\uacbd\ub85c, robots.txt, sitemap.xml)',
          fileName: 'config-for-seo.md',
          category: 'seo',
          published: !0,
          publishedAt: '2021-10-10',
          thumbnailName: 'seo-thumbnail.jpg',
          tags: [
            'Search Engine Optimization',
            'sitemap.xml',
            '\uba54\ud0c0 \ud0dc\uadf8',
            '\uac80\uc0c9\uc5d4\uc9c4',
            '\uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654',
            '\uba54\ud0c0',
            'meta tag',
            '\uac80\uc0c9',
            'robots.txt',
            'SEO',
          ],
        },
      ]
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          f(e)
        )
      }
      function m(e, t) {
        return !t || ('object' !== g(t) && 'function' !== typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function h(e, t) {
        return (
          (h =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          h(e, t)
        )
      }
      var g = function (e) {
        return e && 'undefined' !== typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e
      }
      function y(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = f(e)
          if (t) {
            var o = f(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m(this, n)
        }
      }
      var b = (function (e) {
          !(function (e, t) {
            if ('function' !== typeof t && null !== t) throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && h(e, t)
          })(a, e)
          var t,
            n,
            r,
            o = y(a)
          function a() {
            var e
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              (e = o.call(
                this,
                p.filter(function (e) {
                  return e.published
                })
              )).sort(function (e, t) {
                return new Date(e.publishedAt) > new Date(t.publishedAt) ? -1 : 1
              }),
              e
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'findByTitle',
                value: function (e) {
                  return this.dataset.find(function (t) {
                    return c.Z.normalizeTitle(t.title) === e || t.title === e
                  })
                },
              },
              {
                key: 'hasNewByCategory',
                value: function (e) {
                  return Boolean(
                    this.dataset
                      .filter(function (t) {
                        return t.category === e
                      })
                      .find(function (e) {
                        var t = new Date(e.publishedAt)
                        return t.setDate(t.getDate() + 7) >= Date.now()
                      })
                  )
                },
              },
              {
                key: 'count',
                value: function () {
                  return this.dataset.length
                },
              },
              {
                key: 'countByCategory',
                value: function (e) {
                  return this.dataset.filter(function (t) {
                    return t.category === e
                  }).length
                },
              },
              {
                key: 'countByTag',
                value: function (e) {
                  return this.dataset.filter(function (t) {
                    return t.tags.includes(e)
                  }).length
                },
              },
              {
                key: 'query',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = e.split(/\s/).map(function (e) {
                      return e.toLowerCase()
                    }),
                    o = this.dataset.filter(function (e) {
                      return r.some(function (t) {
                        return e.title.indexOf(t) >= 0 || e.description.indexOf(t) >= 0 || e.category.indexOf(t) >= 0 || e.tags.join('').indexOf(t) >= 0
                      })
                    })
                  return void 0 !== t ? o.slice(n, n + t) : o
                },
              },
              {
                key: 'findByCategory',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = this.dataset.filter(function (t) {
                      return t.category === e
                    })
                  return void 0 !== t ? r.slice(n, n + t) : r
                },
              },
              {
                key: 'findByNormalizedTitle',
                value: function (e) {
                  return this.dataset.find(function (t) {
                    return c.Z.normalizeTitle(t.title) === e
                  })
                },
              },
            ]),
            n && d(t.prototype, n),
            r && d(t, r),
            a
          )
        })(s),
        v = new b()
    },
    4111: function (e, t, n) {
      var r = n(7294)
      t.Z = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '.',
          n = (0, r.useState)(''),
          o = n[0],
          a = n[1]
        return (
          (0, r.useEffect)(
            function () {
              var n = String(e.getFullYear()).slice(2),
                r = String(e.getMonth() + 1).padStart(2, '0'),
                o = String(e.getDate()).padStart(2, '0')
              a([n, r, o].join(t))
            },
            [e, t]
          ),
          o
        )
      }
    },
    9443: function (e, t, n) {
      var r = n(8145)
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var a = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var t, n, a
        return (
          (t = e),
          (a = [
            {
              key: 'absolutePath',
              value: function (e, t) {
                return (e = e.replace(/^\//, '')), [t || r.Z.baseURL, e].join('/')
              },
            },
            {
              key: 'buildImagePath',
              value: function (e) {
                return '/assets/images/'.concat(e)
              },
            },
          ]),
          (n = null) && o(t.prototype, n),
          a && o(t, a),
          e
        )
      })()
      t.Z = a
    },
    8286: function (e, t, n) {
      var r = n(1864),
        o = n.n(r),
        a = n(8145)
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var l = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var t, n, r
        return (
          (t = e),
          (r = [
            {
              key: 'normalizeTitle',
              value: function (e) {
                return e.replace(/\s/g, '-').toLowerCase()
              },
            },
            {
              key: 'getMarkdownFilePath',
              value: function (e) {
                return o().join('../posts', e.category, e.fileName)
              },
            },
            {
              key: 'buildLinkURLByTitle',
              value: function (e) {
                return ''.concat(a.Z.baseURL, '/').concat(this.normalizeTitle(e))
              },
            },
          ]),
          (n = null) && i(t.prototype, n),
          r && i(t, r),
          e
        )
      })()
      t.Z = l
    },
    7427: function (e, t, n) {
      var r = n(8145)
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var a = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var t, n, a
        return (
          (t = e),
          (a = [
            {
              key: 'buildPageTitle',
              value: function (e) {
                return ''.concat(e, ' | ').concat(r.Z.title)
              },
            },
          ]),
          (n = null) && o(t.prototype, n),
          a && o(t, a),
          e
        )
      })()
      t.Z = a
    },
  },
])
