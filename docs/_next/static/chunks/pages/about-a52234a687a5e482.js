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
          return a
        },
      })
      var o = n(5893),
        r = n(9008),
        c = n(8145),
        i = n(7294),
        s = function () {
          ;(0, i.useEffect)(function () {
            if (document.head) {
              var e = document.createElement('script')
              ;(e.async = !0),
                (e.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(c.Z.googleAdsense.adClient)),
                (e.crossOrigin = 'anonymous'),
                document.head.appendChild(e)
            }
          }, [])
        },
        a = function (e) {
          var t = e.title,
            n = e.description,
            i = e.keywords,
            a = e.url,
            u = e.imageURL,
            l = e.customMeta
          return (
            s(),
            (0, o.jsxs)(r.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: a }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: c.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: c.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: c.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: c.Z.author }, 'author'),
                (null === i || void 0 === i ? void 0 : i.length) && (0, o.jsx)('meta', { name: 'keyword', content: i.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: n }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: n }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: t }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: a }, 'og:url'),
                (0, o.jsx)('meta', { property: 'og:image', content: u }, 'og:image'),
                l && l,
                (0, o.jsx)('title', { children: t }),
              ],
            })
          )
        }
    },
    3447: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var o = n(5893),
        r = n(8145),
        c = n(7294),
        i = function (e) {
          return (
            (0, c.useEffect)(function () {
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
        },
        s = function () {
          return (0, o.jsx)('section', { children: (0, o.jsx)(i, { adClient: r.Z.googleAdsense.adClient, adSlot: '5391522351' }) })
        }
    },
    1985: function (e, t, n) {
      'use strict'
      var o = n(5893),
        r = n(7294),
        c = n(9401),
        i = n.n(c)
      function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
      function a(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              c = Object.keys(e)
            for (o = 0; o < c.length; o++) (n = c[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (o = 0; o < c.length; o++) (n = c[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      t.Z = function (e) {
        var t = e.timeout,
          n = void 0 === t ? 500 : t,
          c = e.children,
          u = a(e, ['timeout', 'children']),
          l = (0, r.useRef)(null),
          d = (0, r.useState)(!1),
          f = d[0],
          g = d[1]
        return (
          (0, r.useEffect)(
            function () {
              setTimeout(function () {
                g(Boolean(l.current))
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
                    s(e, t, n[t])
                  })
              }
              return e
            })({ ref: l, className: ''.concat(i().section, ' ').concat(f && i().raise) }, u, { children: c })
          )
        )
      }
    },
    6678: function (e, t, n) {
      'use strict'
      n.d(t, {
        z: function () {
          return o
        },
      })
      var o = {
        MAIN: {
          TITLE: 'Home',
          DESCRIPTION:
            'Code Logs\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601 \ud569\ub2c8\ub2e4 - \uc6f9\uac1c\ubc1c\uacfc \uad00\ub828\ub41c \uc815\ubcf4\ub97c \uae30\ub85d\ud558\uace0 \uacf5\uc720\ud558\ub294 \uac1c\uc778\uacf5\uac04 \uc785\ub2c8\ub2e4.',
        },
        POSTS: {
          TITLE: 'Posts',
          DESCRIPTION: function (e) {
            return 'Code Logs | \ud3ec\uc2a4\ud305 \ubaa9\ub85d '.concat(e, ' \ud398\uc774\uc9c0')
          },
        },
        POST: {
          TITLE: function (e) {
            return e
          },
          DESCRIPTION: function (e, t, n, o) {
            return 'Code Logs '.concat(e, ' - ').concat(t, ' | ').concat(n, ', ').concat(o.join(', '))
          },
        },
        CATEGORIES: {
          TITLE: function (e) {
            return e
          },
          DESCRIPTION: function (e, t) {
            return 'Code Logs | '.concat(e, ' \uc5f0\uad00 \ud3ec\uc2a4\ud305 \ubaa9\ub85d ').concat(t, ' \ud398\uc774\uc9c0')
          },
        },
        TAGS: {
          TITLE: 'Tags \ubaa9\ub85d',
          DESCRIPTION: 'Code Logs | Tag\ub97c \uae30\uc900\uc73c\ub85c \ud3ec\uc2a4\ud305\uc744 \uc0c9\uc778\ud569\ub2c8\ub2e4.',
        },
        ABOUT: {
          TITLE: 'About',
          DESCRIPTION:
            'Code Logs | \uc6f9\uac1c\ubc1c\uacfc \uad00\ub828\ub41c \uc815\ubcf4\ub97c \uae30\ub85d\ud558\uace0 \uacf5\uc720\ud558\ub294 \uac1c\uc778\uacf5\uac04 \uc785\ub2c8\ub2e4.',
        },
        NOT_FOUND: {
          TITLE: '\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc74c',
          DESCRIPTION:
            'Code Logs | \ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4! \uc785\ub825\ud558\uc2e0 URL\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.',
        },
      }
    },
    4178: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n(5893),
        r = n(6166),
        c = n(3447),
        i = n(1985),
        s = n(8145),
        a = n(6678),
        u = n(7427),
        l = n(9564),
        d = n.n(l)
      t.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Z, {
              title: u.Z.buildPageTitle(a.z.ABOUT.TITLE),
              description: a.z.ABOUT.DESCRIPTION,
              url: ''.concat(s.Z.baseURL, '/about'),
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsxs)('article', {
              className: d().about,
              children: [
                (0, o.jsx)('h1', { children: 'About' }),
                (0, o.jsxs)(i.Z, {
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
                      children: (0, o.jsx)('strong', {
                        children:
                          '\uc815\ubcf4 \uacf5\uc720\ub97c \ud1b5\ud574 \uc800\uc640 \ucc38\uc5ec\uc790 \ubd84\ub4e4\uc758 \uae0d\uc815\uc801\uc778 \ubc1c\uc804\uc744 \uae30\uc6d0\ud569\ub2c8\ub2e4.',
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)(i.Z, {
                  timeout: 1350,
                  children: [
                    (0, o.jsx)('h2', { children: 'Licenses' }),
                    (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'licenses', children: 'Link to license info' }) }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(c.Z, {}),
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
      var c = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var t, n, c
        return (
          (t = e),
          (c = [
            {
              key: 'buildPageTitle',
              value: function (e) {
                return ''.concat(e, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (n = null) && r(t.prototype, n),
          c && r(t, c),
          e
        )
      })()
      t.Z = c
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
