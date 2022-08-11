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
    6166: function (e, n, t) {
      'use strict'
      t.d(n, {
        Z: function () {
          return s
        },
      })
      var o = t(5893),
        r = t(9008),
        i = t(8145),
        c = t(7294),
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
          var n = e.title,
            t = e.description,
            c = e.keywords,
            s = e.url,
            u = e.imageURL,
            l = e.customMeta
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
                (0, o.jsx)('meta', { name: 'description', content: t }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: t }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: n }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: s }, 'og:url'),
                (0, o.jsx)('meta', { property: 'og:image', content: u }, 'og:image'),
                l && l,
                (0, o.jsx)('title', { children: n }),
              ],
            })
          )
        }
    },
    3447: function (e, n, t) {
      'use strict'
      t.d(n, {
        Z: function () {
          return s
        },
      })
      var o = t(5893),
        r = t(8145),
        i = t(7294),
        c = function (e) {
          return (
            (0, i.useEffect)(function () {
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
        a = t(3589),
        s = function () {
          return (0, o.jsxs)('section', {
            children: [
              (0, o.jsx)(c, { adClient: r.Z.googleAdsense.adClient, adSlot: '5391522351' }),
              (0, o.jsx)(a.Z, { adfitUnitID: r.Z.kakaoAdfitUnitIDs.mainBannerID, position: 'main' }),
            ],
          })
        }
    },
    1985: function (e, n, t) {
      'use strict'
      var o = t(5893),
        r = t(7294),
        i = t(9401),
        c = t.n(i)
      function a(e, n, t) {
        return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e
      }
      function s(e, n) {
        if (null == e) return {}
        var t,
          o,
          r = (function (e, n) {
            if (null == e) return {}
            var t,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]))
        }
        return r
      }
      n.Z = function (e) {
        var n = e.timeout,
          t = void 0 === n ? 500 : n,
          i = e.children,
          u = s(e, ['timeout', 'children']),
          l = (0, r.useRef)(null),
          d = (0, r.useState)(!1),
          f = d[0],
          p = d[1]
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
                    a(e, n, t[n])
                  })
              }
              return e
            })({ ref: l, className: ''.concat(c().section, ' ').concat(f && c().raise) }, u, { children: i })
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
        r = t(6166),
        i = t(3447),
        c = t(1985),
        a = t(8145),
        s = t(6678),
        u = t(7427),
        l = t(9564),
        d = t.n(l)
      n.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Z, {
              title: u.Z.buildPageTitle(s.z.ABOUT.TITLE),
              description: s.z.ABOUT.DESCRIPTION,
              url: ''.concat(a.Z.baseURL, '/about'),
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsxs)('article', {
              className: d().about,
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
                      children: (0, o.jsx)('strong', {
                        children:
                          '\uc815\ubcf4 \uacf5\uc720\ub97c \ud1b5\ud574 \uc800\uc640 \ucc38\uc5ec\uc790 \ubd84\ub4e4\uc758 \uae0d\uc815\uc801\uc778 \ubc1c\uc804\uc744 \uae30\uc6d0\ud569\ub2c8\ub2e4.',
                      }),
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
            (0, o.jsx)(i.Z, {}),
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
      var i = (function () {
        function e() {
          !(function (e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        var n, t, i
        return (
          (n = e),
          (i = [
            {
              key: 'buildPageTitle',
              value: function (e) {
                return ''.concat(e, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (t = null) && r(n.prototype, t),
          i && r(n, i),
          e
        )
      })()
      n.Z = i
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
