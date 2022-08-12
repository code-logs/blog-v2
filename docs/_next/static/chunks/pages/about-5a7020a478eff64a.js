;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    5706: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/about',
        function () {
          return t(4178)
        },
      ])
    },
    4786: function (e, n, t) {
      'use strict'
      var o = t(5893),
        r = t(8145),
        c = t(1780),
        i = t(4104),
        s = t.n(i)
      n.Z = function () {
        return (0, o.jsx)('section', {
          className: s().container,
          children: (0, o.jsx)(c.Z, { adClient: r.Z.googleAdsense.adClient, adSlot: r.Z.googleAdsense.mainBannerAdSlot }),
        })
      }
    },
    6166: function (e, n, t) {
      'use strict'
      t.d(n, {
        Z: function () {
          return a
        },
      })
      var o = t(5893),
        r = t(9008),
        c = t(8145),
        i = t(7294),
        s = function () {
          ;(0, i.useEffect)(function () {
            if (document.head) {
              var e = document.createElement('script')
              ;(e.async = !0),
                (e.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(c.Z.googleAdsense.mainBannerAdSlot)),
                (e.crossOrigin = 'anonymous'),
                document.head.appendChild(e)
            }
          }, [])
        },
        a = function (e) {
          var n = e.title,
            t = e.description,
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
                (0, o.jsx)('meta', { name: 'description', content: t }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: t }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: n }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: a }, 'og:url'),
                (0, o.jsx)('meta', { property: 'og:image', content: u }, 'og:image'),
                l && l,
                (0, o.jsx)('title', { children: n }),
              ],
            })
          )
        }
    },
    1985: function (e, n, t) {
      'use strict'
      var o = t(5893),
        r = t(7294),
        c = t(9401),
        i = t.n(c)
      function s(e, n, t) {
        return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e
      }
      function a(e, n) {
        if (null == e) return {}
        var t,
          o,
          r = (function (e, n) {
            if (null == e) return {}
            var t,
              o,
              r = {},
              c = Object.keys(e)
            for (o = 0; o < c.length; o++) (t = c[o]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (o = 0; o < c.length; o++) (t = c[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]))
        }
        return r
      }
      n.Z = function (e) {
        var n = e.timeout,
          t = void 0 === n ? 500 : n,
          c = e.children,
          u = a(e, ['timeout', 'children']),
          l = (0, r.useRef)(null),
          f = (0, r.useState)(!1),
          d = f[0],
          p = f[1]
        return (
          (0, r.useEffect)(
            function () {
              setTimeout(function () {
                p(Boolean(l.current))
              }, t)
            },
            [t]
          ),
          (0, o.jsx)(
            'section',
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                  o = Object.keys(t)
                'function' === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(t).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })
                  )),
                  o.forEach(function (n) {
                    s(e, n, t[n])
                  })
              }
              return e
            })({ ref: l, className: ''.concat(i().section, ' ').concat(d && i().raise) }, u, { children: c })
          )
        )
      }
    },
    6678: function (e, n, t) {
      'use strict'
      t.d(n, {
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
          DESCRIPTION: function (e, n, t, o) {
            return 'Code Logs '.concat(e, ' - ').concat(n, ' | ').concat(t, ', ').concat(o.join(', '))
          },
        },
        CATEGORIES: {
          TITLE: function (e) {
            return e
          },
          DESCRIPTION: function (e, n) {
            return 'Code Logs | '.concat(e, ' \uc5f0\uad00 \ud3ec\uc2a4\ud305 \ubaa9\ub85d ').concat(n, ' \ud398\uc774\uc9c0')
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
    4178: function (e, n, t) {
      'use strict'
      t.r(n)
      var o = t(5893),
        r = t(1664),
        c = t(4786),
        i = t(6166),
        s = t(1985),
        a = t(8145),
        u = t(6678),
        l = t(7427),
        f = t(9564),
        d = t.n(f)
      n.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z, {
              title: l.Z.buildPageTitle(u.z.ABOUT.TITLE),
              description: u.z.ABOUT.DESCRIPTION,
              url: ''.concat(a.Z.baseURL, '/about'),
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsxs)('article', {
              className: d().about,
              children: [
                (0, o.jsx)('h1', { children: 'About' }),
                (0, o.jsxs)(s.Z, {
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
                (0, o.jsxs)(s.Z, {
                  timeout: 1350,
                  children: [
                    (0, o.jsx)('h2', { children: 'Licenses' }),
                    (0, o.jsx)('p', { children: (0, o.jsx)(r.default, { href: 'licenses', children: (0, o.jsx)('a', { children: 'Link to license info' }) }) }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(c.Z, {}),
          ],
        })
      }
    },
    7427: function (e, n, t) {
      'use strict'
      var o = t(8145)
      function r(e, n) {
        for (var t = 0; t < n.length; t++) {
          var o = n[t]
          ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      var c = (function () {
        function e() {
          !(function (e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var n, t, c
        return (
          (n = e),
          (c = [
            {
              key: 'buildPageTitle',
              value: function (e) {
                return ''.concat(e, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (t = null) && r(n.prototype, t),
          c && r(n, c),
          e
        )
      })()
      n.Z = c
    },
    4104: function (e) {
      e.exports = { container: 'MainAdsBanner_container__YWe5C' }
    },
    9401: function (e) {
      e.exports = { section: 'RaiseSection_section__FR7Qu', raise: 'RaiseSection_raise__5fbS6' }
    },
    9564: function (e) {
      e.exports = { about: 'About_about__Dxcfy' }
    },
    9008: function (e, n, t) {
      e.exports = t(5443)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (n = 5706), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
