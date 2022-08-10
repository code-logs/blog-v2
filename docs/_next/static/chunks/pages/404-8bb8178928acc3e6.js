;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9014: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(5838)
        },
      ])
    },
    6166: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return s
        },
      })
      var o = n(5893),
        a = n(9008),
        i = n(8145),
        r = n(7294),
        c = function () {
          ;(0, r.useEffect)(function () {
            if (document.head) {
              var t = document.createElement('script')
              ;(t.async = !0),
                (t.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(i.Z.googleAdsense.adClient)),
                (t.crossOrigin = 'anonymous'),
                document.head.appendChild(t)
            }
          }, [])
        },
        s = function (t) {
          var e = t.title,
            n = t.description,
            r = t.keywords,
            s = t.url,
            u = t.imageURL,
            l = t.customMeta
          return (
            c(),
            (0, o.jsxs)(a.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: s }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: i.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: i.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: i.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: i.Z.author }, 'author'),
                (null === r || void 0 === r ? void 0 : r.length) && (0, o.jsx)('meta', { name: 'keyword', content: r.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: n }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: n }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: e }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: s }, 'og:url'),
                (0, o.jsx)('meta', { property: 'og:image', content: u }, 'og:image'),
                l && l,
                (0, o.jsx)('title', { children: e }),
              ],
            })
          )
        }
    },
    1780: function (t, e, n) {
      'use strict'
      var o = n(5893),
        a = n(7294)
      e.Z = function (t) {
        return (
          (0, a.useEffect)(function () {
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
      }
    },
    6678: function (t, e, n) {
      'use strict'
      n.d(e, {
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
          DESCRIPTION: function (t, e, n, o) {
            return 'Code Logs '.concat(t, ' - ').concat(e, ' | ').concat(n, ', ').concat(o.join(', '))
          },
        },
        CATEGORIES: {
          TITLE: function (t) {
            return t
          },
          DESCRIPTION: function (t, e) {
            return 'Code Logs | '.concat(t, ' \uc5f0\uad00 \ud3ec\uc2a4\ud305 \ubaa9\ub85d ').concat(e, ' \ud398\uc774\uc9c0')
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
    5838: function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n(5893),
        a = n(6166),
        i = n(1780),
        r = n(8145),
        c = n(6678),
        s = n(7427)
      e.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(a.Z, {
              title: s.Z.buildPageTitle(c.z.NOT_FOUND.TITLE),
              description: c.z.NOT_FOUND.DESCRIPTION,
              url: r.Z.baseURL,
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsxs)('section', {
              children: [(0, o.jsx)('h1', { children: 'Page Not Found' }), (0, o.jsx)(i.Z, { adClient: r.Z.googleAdsense.adClient, adSlot: '5391522351' })],
            }),
          ],
        })
      }
    },
    7427: function (t, e, n) {
      'use strict'
      var o = n(8145)
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n]
          ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }
      var i = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
        }
        var e, n, i
        return (
          (e = t),
          (i = [
            {
              key: 'buildPageTitle',
              value: function (t) {
                return ''.concat(t, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (n = null) && a(e.prototype, n),
          i && a(e, i),
          t
        )
      })()
      e.Z = i
    },
    9008: function (t, e, n) {
      t.exports = n(5443)
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return (e = 9014), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
