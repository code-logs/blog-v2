;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9014: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(5838)
        },
      ])
    },
    6166: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return c
        },
      })
      var o = n(5893),
        a = n(9008),
        i = n(8145),
        r = n(7294),
        s = function () {
          ;(0, r.useEffect)(function () {
            if (document.head) {
              var e = document.createElement('script')
              ;(e.async = !0),
                (e.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='.concat(i.Z.googleAdsense.adClient)),
                (e.crossOrigin = 'anonymous'),
                document.head.appendChild(e)
            }
          }, [])
        },
        c = function (e) {
          var t = e.title,
            n = e.description,
            r = e.keywords,
            c = e.url,
            l = e.imageURL,
            u = e.customMeta
          return (
            s(),
            (0, o.jsxs)(a.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: c }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: i.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: i.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: i.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: i.Z.author }, 'author'),
                (null === r || void 0 === r ? void 0 : r.length) && (0, o.jsx)('meta', { name: 'keyword', content: r.join(', ') }, 'keyword'),
                (0, o.jsx)('meta', { name: 'description', content: n }, 'description'),
                (0, o.jsx)('meta', { property: 'og:description', content: n }, 'og:description'),
                (0, o.jsx)('meta', { property: 'og:title', content: t }, 'og:title'),
                (0, o.jsx)('meta', { property: 'og:url', content: c }, 'og:url'),
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
        a = n(7294)
      t.Z = function (e) {
        return (
          (0, a.useEffect)(function () {
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
    5838: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n(5893),
        a = n(6166),
        i = n(1780),
        r = n(8145),
        s = n(7427)
      t.default = function () {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(a.Z, {
              title: s.Z.buildPageTitle('Page Not Found'),
              description: '404 Page Not Found. Please move to right URL',
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
    7427: function (e, t, n) {
      'use strict'
      var o = n(8145)
      function a(e, t) {
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
          (n = null) && a(t.prototype, n),
          i && a(t, i),
          e
        )
      })()
      t.Z = i
    },
    9008: function (e, t, n) {
      e.exports = n(5443)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 9014), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])