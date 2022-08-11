;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9014: function (n, e, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return t(5838)
        },
      ])
    },
    6166: function (n, e, t) {
      'use strict'
      t.d(e, {
        Z: function () {
          return s
        },
      })
      var o = t(5893),
        r = t(9008),
        c = t(8145),
        i = t(7294),
        a = function () {
          ;(0, i.useEffect)(function () {
            if (document.head) {
              var n = document.createElement('script')
              ;(n.async = !0),
                (n.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(c.Z.googleAdsense.mainBannerAdClient)),
                (n.crossOrigin = 'anonymous'),
                document.head.appendChild(n)
            }
          }, [])
        },
        s = function (n) {
          var e = n.title,
            t = n.description,
            i = n.keywords,
            s = n.url,
            u = n.imageURL,
            l = n.customMeta
          return (
            a(),
            (0, o.jsxs)(r.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: s }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: c.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: c.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: c.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: c.Z.author }, 'author'),
                (null === i || void 0 === i ? void 0 : i.length) && (0, o.jsx)('meta', { name: 'keyword', content: i.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: t }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: t }, 'og:description'),
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
    2429: function (n, e, t) {
      'use strict'
      var o = t(5893),
        r = t(8145),
        c = t(1780)
      e.Z = function () {
        return (0, o.jsx)('section', { children: (0, o.jsx)(c.Z, { adClient: r.Z.googleAdsense.mainBannerAdClient, adSlot: '5391522351' }) })
      }
    },
    6678: function (n, e, t) {
      'use strict'
      t.d(e, {
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
          DESCRIPTION: function (n) {
            return 'Code Logs | \ud3ec\uc2a4\ud305 \ubaa9\ub85d '.concat(n, ' \ud398\uc774\uc9c0')
          },
        },
        POST: {
          TITLE: function (n) {
            return n
          },
          DESCRIPTION: function (n, e, t, o) {
            return 'Code Logs '.concat(n, ' - ').concat(e, ' | ').concat(t, ', ').concat(o.join(', '))
          },
        },
        CATEGORIES: {
          TITLE: function (n) {
            return n
          },
          DESCRIPTION: function (n, e) {
            return 'Code Logs | '.concat(n, ' \uc5f0\uad00 \ud3ec\uc2a4\ud305 \ubaa9\ub85d ').concat(e, ' \ud398\uc774\uc9c0')
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
    5838: function (n, e, t) {
      'use strict'
      t.r(e)
      var o = t(5893),
        r = t(6166),
        c = t(2429),
        i = t(8145),
        a = t(6678),
        s = t(7427)
      e.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Z, {
              title: s.Z.buildPageTitle(a.z.NOT_FOUND.TITLE),
              description: a.z.NOT_FOUND.DESCRIPTION,
              url: i.Z.baseURL,
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsx)('section', { children: (0, o.jsx)('h1', { children: 'Page Not Found' }) }),
            (0, o.jsx)(c.Z, {}),
          ],
        })
      }
    },
    7427: function (n, e, t) {
      'use strict'
      var o = t(8145)
      function r(n, e) {
        for (var t = 0; t < e.length; t++) {
          var o = e[t]
          ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
        }
      }
      var c = (function () {
        function n() {
          !(function (n, e) {
            if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function')
          })(this, n)
        }
        var e, t, c
        return (
          (e = n),
          (c = [
            {
              key: 'buildPageTitle',
              value: function (n) {
                return ''.concat(n, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (t = null) && r(e.prototype, t),
          c && r(e, c),
          n
        )
      })()
      e.Z = c
    },
    9008: function (n, e, t) {
      n.exports = t(5443)
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (e = 9014), n((n.s = e))
      var e
    })
    var e = n.O()
    _N_E = e
  },
])
