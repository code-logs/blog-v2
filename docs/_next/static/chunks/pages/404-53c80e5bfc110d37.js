;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9014: function (n, t, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return e(5838)
        },
      ])
    },
    6166: function (n, t, e) {
      'use strict'
      e.d(t, {
        Z: function () {
          return s
        },
      })
      var o = e(5893),
        i = e(9008),
        a = e(8145),
        r = e(7294),
        c = function () {
          ;(0, r.useEffect)(function () {
            if (document.head) {
              var n = document.createElement('script')
              ;(n.async = !0),
                (n.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(a.Z.googleAdsense.adClient)),
                (n.crossOrigin = 'anonymous'),
                document.head.appendChild(n)
            }
          }, [])
        },
        s = function (n) {
          var t = n.title,
            e = n.description,
            r = n.keywords,
            s = n.url,
            u = n.imageURL,
            l = n.customMeta
          return (
            c(),
            (0, o.jsxs)(i.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: s }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: a.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: a.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: a.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: a.Z.author }, 'author'),
                (null === r || void 0 === r ? void 0 : r.length) && (0, o.jsx)('meta', { name: 'keyword', content: r.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: e }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: e }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: t }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: s }, 'og:url'),
                (0, o.jsx)('meta', { property: 'og:image', content: u }, 'og:image'),
                l && l,
                (0, o.jsx)('title', { children: t }),
              ],
            })
          )
        }
    },
    3447: function (n, t, e) {
      'use strict'
      e.d(t, {
        Z: function () {
          return s
        },
      })
      var o = e(5893),
        i = e(8145),
        a = e(7294),
        r = function (n) {
          return (
            (0, a.useEffect)(function () {
              ;(window.adsbygoogle = window.adsbygoogle || []), window.adsbygoogle.push({})
            }, []),
            (0, o.jsx)('ins', {
              className: 'adsbygoogle',
              style: { display: 'block' },
              'data-ad-client': n.adClient,
              'data-ad-slot': n.adSlot,
              'data-ad-format': 'auto',
              'data-full-width-responsive': 'true',
              onLoad: function () {
                return console.log('loaded')
              },
            })
          )
        },
        c = e(3589),
        s = function () {
          return (0, o.jsxs)('section', {
            children: [
              (0, o.jsx)(r, { adClient: i.Z.googleAdsense.adClient, adSlot: '5391522351' }),
              (0, o.jsx)(c.Z, { adfitUnitID: i.Z.kakaoAdfitUnitIDs.mainBannerID, position: 'main' }),
            ],
          })
        }
    },
    6678: function (n, t, e) {
      'use strict'
      e.d(t, {
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
          DESCRIPTION: function (n, t, e, o) {
            return 'Code Logs '.concat(n, ' - ').concat(t, ' | ').concat(e, ', ').concat(o.join(', '))
          },
        },
        CATEGORIES: {
          TITLE: function (n) {
            return n
          },
          DESCRIPTION: function (n, t) {
            return 'Code Logs | '.concat(n, ' \uc5f0\uad00 \ud3ec\uc2a4\ud305 \ubaa9\ub85d ').concat(t, ' \ud398\uc774\uc9c0')
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
    5838: function (n, t, e) {
      'use strict'
      e.r(t)
      var o = e(5893),
        i = e(6166),
        a = e(3447),
        r = e(8145),
        c = e(6678),
        s = e(7427)
      t.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z, {
              title: s.Z.buildPageTitle(c.z.NOT_FOUND.TITLE),
              description: c.z.NOT_FOUND.DESCRIPTION,
              url: r.Z.baseURL,
              imageURL: '/icons/icon-512x512.png',
            }),
            (0, o.jsx)('section', { children: (0, o.jsx)('h1', { children: 'Page Not Found' }) }),
            (0, o.jsx)(a.Z, {}),
          ],
        })
      }
    },
    7427: function (n, t, e) {
      'use strict'
      var o = e(8145)
      function i(n, t) {
        for (var e = 0; e < t.length; e++) {
          var o = t[e]
          ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
        }
      }
      var a = (function () {
        function n() {
          !(function (n, t) {
            if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, n)
        }
        var t, e, a
        return (
          (t = n),
          (a = [
            {
              key: 'buildPageTitle',
              value: function (n) {
                return ''.concat(n, ' | ').concat(o.Z.title)
              },
            },
          ]),
          (e = null) && i(t.prototype, e),
          a && i(t, a),
          n
        )
      })()
      t.Z = a
    },
    9008: function (n, t, e) {
      n.exports = e(5443)
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (t = 9014), n((n.s = t))
      var t
    })
    var t = n.O()
    _N_E = t
  },
])
