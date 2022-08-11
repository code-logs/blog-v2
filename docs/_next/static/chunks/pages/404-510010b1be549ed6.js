;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9014: function (t, n, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return e(5838)
        },
      ])
    },
    6166: function (t, n, e) {
      'use strict'
      e.d(n, {
        Z: function () {
          return s
        },
      })
      var o = e(5893),
        a = e(9008),
        r = e(8145),
        i = e(7294),
        c = function () {
          ;(0, i.useEffect)(function () {
            if (document.head) {
              var t = document.createElement('script')
              ;(t.async = !0),
                (t.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(r.Z.googleAdsense.adClient)),
                (t.crossOrigin = 'anonymous'),
                document.head.appendChild(t)
            }
          }, [])
        },
        s = function (t) {
          var n = t.title,
            e = t.description,
            i = t.keywords,
            s = t.url,
            u = t.imageURL,
            l = t.customMeta
          return (
            c(),
            (0, o.jsxs)(a.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: s }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: r.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: r.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: r.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: r.Z.author }, 'author'),
                (null === i || void 0 === i ? void 0 : i.length) && (0, o.jsx)('meta', { name: 'keyword', content: i.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: e }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: e }, 'og:description'),
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
    3447: function (t, n, e) {
      'use strict'
      e.d(n, {
        Z: function () {
          return c
        },
      })
      var o = e(5893),
        a = e(8145),
        r = e(7294),
        i = function (t) {
          return (
            (0, r.useEffect)(function () {
              ;(window.adsbygoogle = window.adsbygoogle || []), window.adsbygoogle.push({})
            }, []),
            (0, o.jsx)('ins', {
              className: 'adsbygoogle',
              style: { display: 'block' },
              'data-ad-client': t.adClient,
              'data-ad-slot': t.adSlot,
              'data-ad-format': 'auto',
              'data-full-width-responsive': 'true',
              onLoad: function () {
                return console.log('loaded')
              },
            })
          )
        },
        c = function () {
          return (0, o.jsx)('section', { children: (0, o.jsx)(i, { adClient: a.Z.googleAdsense.adClient, adSlot: '5391522351' }) })
        }
    },
    6678: function (t, n, e) {
      'use strict'
      e.d(n, {
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
          DESCRIPTION: function (t) {
            return 'Code Logs | \ud3ec\uc2a4\ud305 \ubaa9\ub85d '.concat(t, ' \ud398\uc774\uc9c0')
          },
        },
        POST: {
          TITLE: function (t) {
            return t
          },
          DESCRIPTION: function (t, n, e, o) {
            return 'Code Logs '.concat(t, ' - ').concat(n, ' | ').concat(e, ', ').concat(o.join(', '))
          },
        },
        CATEGORIES: {
          TITLE: function (t) {
            return t
          },
          DESCRIPTION: function (t, n) {
            return 'Code Logs | '.concat(t, ' \uc5f0\uad00 \ud3ec\uc2a4\ud305 \ubaa9\ub85d ').concat(n, ' \ud398\uc774\uc9c0')
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
    5838: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = e(5893),
        a = e(6166),
        r = e(3447),
        i = e(8145),
        c = e(6678),
        s = e(7427)
      n.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(a.Z, {
              title: s.Z.buildPageTitle(c.z.NOT_FOUND.TITLE),
              description: c.z.NOT_FOUND.DESCRIPTION,
              url: i.Z.baseURL,
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsx)('section', { children: (0, o.jsx)('h1', { children: 'Page Not Found' }) }),
            (0, o.jsx)(r.Z, {}),
          ],
        })
      }
    },
    7427: function (t, n, e) {
      'use strict'
      var o = e(8145)
      function a(t, n) {
        for (var e = 0; e < n.length; e++) {
          var o = n[e]
          ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }
      var r = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
        }
        var n, e, r
        return (
          (n = t),
          (r = [
            {
              key: 'buildPageTitle',
              value: function (t) {
                return ''.concat(t, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (e = null) && a(n.prototype, e),
          r && a(n, r),
          t
        )
      })()
      n.Z = r
    },
    9008: function (t, n, e) {
      t.exports = e(5443)
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return (n = 9014), t((t.s = n))
      var n
    })
    var n = t.O()
    _N_E = n
  },
])
