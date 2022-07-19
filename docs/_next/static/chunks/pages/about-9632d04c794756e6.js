;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    5706: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/about',
        function () {
          return n(4178)
        },
      ])
    },
    6166: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var o = n(5893),
        r = n(9008),
        i = n(8145),
        c = n(7294),
        a = function () {
          ;(0, c.useEffect)(function () {
            if (document.head) {
              var e = document.createElement('script')
              ;(e.async = !0),
                (e.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(i.Z.googleAdsense.adClient)),
                (e.crossOrigin = 'anonymous'),
                document.head.appendChild(e)
            }
          }, [])
        },
        s = function (e) {
          var t = e.title,
            n = e.description,
            c = e.keywords,
            s = e.url,
            l = e.imageURL,
            u = e.customMeta
          return (
            a(),
            (0, o.jsxs)(r.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: s }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: i.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: i.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: i.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: i.Z.author }, 'author'),
                (null === c || void 0 === c ? void 0 : c.length) && (0, o.jsx)('meta', { name: 'keyword', content: c.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: n }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: n }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: t }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: s }, 'og:url'),
                (0, o.jsx)('meta', { property: 'og:image', content: l }, 'og:image'),
                u && u,
                (0, o.jsx)('title', { children: t }),
              ],
            })
          )
        }
    },
    1780: function (e, t, n) {
      'use strict'
      var o = n(5893),
        r = n(7294)
      t.Z = function (e) {
        return (
          (0, r.useEffect)(function () {
            ;(window.adsbygoogle = window.adsbygoogle || []), window.adsbygoogle.push({})
          }, []),
          (0, o.jsx)('ins', {
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
    1985: function (e, t, n) {
      'use strict'
      var o = n(5893),
        r = n(7294),
        i = n(9401),
        c = n.n(i)
      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
      function s(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      t.Z = function (e) {
        var t = e.timeout,
          n = void 0 === t ? 500 : t,
          i = e.children,
          l = s(e, ['timeout', 'children']),
          u = (0, r.useRef)(null),
          d = (0, r.useState)(!1),
          f = d[0],
          p = d[1]
        return (
          (0, r.useEffect)(
            function () {
              setTimeout(function () {
                p(Boolean(u.current))
              }, n)
            },
            [n]
          ),
          (0, o.jsx)(
            'section',
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n)
                'function' === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })
                  )),
                  o.forEach(function (t) {
                    a(e, t, n[t])
                  })
              }
              return e
            })({ ref: u, className: ''.concat(c().section, ' ').concat(f && c().raise) }, l, { children: i })
          )
        )
      }
    },
    4178: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n(5893),
        r = n(6166),
        i = n(1780),
        c = n(1985),
        a = n(8145),
        s = n(7427),
        l = n(9564),
        u = n.n(l)
      t.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Z, {
              title: s.Z.buildPageTitle('About'),
              description: 'Code Logs\uc5d0 \ub300\ud558\uc5ec',
              url: ''.concat(a.Z.baseURL, '/about'),
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsxs)('article', {
              className: u().about,
              children: [
                (0, o.jsx)('h1', { children: 'About' }),
                (0, o.jsxs)(c.Z, {
                  timeout: 300,
                  children: [
                    (0, o.jsx)('h2', { children: 'Here is...' }),
                    (0, o.jsx)('p', {
                      children:
                        '\uc774\uacf3\uc740 \uc6f9\uac1c\ubc1c\uacfc \uad00\ub828\ub41c \uc815\ubcf4\ub97c \uae30\ub85d\ud558\uace0 \uacf5\uc720\ud558\ub294 \uac1c\uc778\uacf5\uac04 \uc785\ub2c8\ub2e4.',
                    }),
                    (0, o.jsx)('p', {
                      children:
                        '\uc62c\ubc14\ub978 \uc815\ubcf4\ub97c \uacf5\uc720\ud558\ub294 \uac83\uc744 \ubaa9\uc801\uc73c\ub85c \ud558\uc9c0\ub9cc \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc720\uc5b8\ube44\uc5b4(?)\ub97c \ub178\ucd9c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
                    }),
                    (0, o.jsx)('p', {
                      children:
                        '\uc798\ubabb\ub41c \uc815\ubcf4\uc758 \uacf5\uc720\ub098 \ubc14\ub974\uc9c0 \uc54a\uc740 \uac1c\uc778\uc758\uacac\uc5d0 \ub300\ud55c \ud53c\ub4dc\ubc31\uc740 \uc8fc\uc2dc\uba74 \uac10\uc0ac\ud788 \uc218\uc6a9\ud569\ub2c8\ub2e4.',
                    }),
                    (0, o.jsx)('br', {}),
                    (0, o.jsx)('p', {
                      children:
                        '\uacf5\uac1c\ub41c \uacf5\uac04\uc758 \uc815\ubcf4 \uacf5\uc720\ub97c \ud1b5\ud574 \uc800\uc640 \ucc38\uc5ec\uc790 \ubd84\ub4e4\uc758 \uae0d\uc815\uc801\uc778 \ubc1c\uc804\uc744 \uae30\uc6d0\ud569\ub2c8\ub2e4.',
                    }),
                  ],
                }),
                (0, o.jsxs)(c.Z, {
                  timeout: 900,
                  children: [
                    (0, o.jsx)('h2', { children: 'I am...' }),
                    (0, o.jsxs)('p', {
                      children: [
                        '\uace0\uc591\uc774\ub97c \uc88b\uc544\ud558\ub294 ',
                        new Date().getFullYear() - 2015,
                        '\ub144\ucc28 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4.',
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)(c.Z, {
                  timeout: 1350,
                  children: [
                    (0, o.jsx)('h2', { children: 'Licenses' }),
                    (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'licenses', children: 'Link to license info' }) }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(i.Z, { adClient: a.Z.googleAdsense.adClient, adSlot: '5391522351' }),
          ],
        })
      }
    },
    7427: function (e, t, n) {
      'use strict'
      var o = n(8145)
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      var i = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var t, n, i
        return (
          (t = e),
          (i = [
            {
              key: 'buildPageTitle',
              value: function (e) {
                return ''.concat(e, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (n = null) && r(t.prototype, n),
          i && r(t, i),
          e
        )
      })()
      t.Z = i
    },
    9401: function (e) {
      e.exports = { section: 'RaiseSection_section__FR7Qu', raise: 'RaiseSection_raise__5fbS6' }
    },
    9564: function (e) {
      e.exports = { about: 'About_about__Dxcfy' }
    },
    9008: function (e, t, n) {
      e.exports = n(5443)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 5706), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
