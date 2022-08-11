;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [165],
  {
    4333: function (n, t, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/tags',
        function () {
          return e(7437)
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
        r = e(9008),
        a = e(8145),
        i = e(7294),
        c = function () {
          ;(0, i.useEffect)(function () {
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
            i = n.keywords,
            s = n.url,
            u = n.imageURL,
            l = n.customMeta
          return (
            c(),
            (0, o.jsxs)(r.default, {
              children: [
                (0, o.jsx)('link', { rel: 'canonical', href: s }),
                (0, o.jsx)('link', { rel: 'apple-touch-icon', href: a.Z.appleTouchIconPath }),
                (0, o.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, o.jsx)('meta', { name: 'theme-color', content: a.Z.themeColor }, 'theme-color'),
                (0, o.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
                (0, o.jsx)('meta', { property: 'og:site_name', content: a.Z.title }, 'og:site_name'),
                (0, o.jsx)('meta', { name: 'author', content: a.Z.author }, 'author'),
                (null === i || void 0 === i ? void 0 : i.length) && (0, o.jsx)('meta', { name: 'keyword', content: i.join(', ') }, 'keyword'),
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
        r = e(8145),
        a = e(7294),
        i = function (n) {
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
              (0, o.jsx)(i, { adClient: r.Z.googleAdsense.adClient, adSlot: '5391522351' }),
              (0, o.jsx)(c.Z, { adfitUnitID: r.Z.kakaoAdfitUnitIDs.mainBannerID, position: 'main' }),
            ],
          })
        }
    },
    7594: function (n, t, e) {
      'use strict'
      e.d(t, {
        Z: function () {
          return l
        },
      })
      var o = e(5893),
        r = e(1664),
        a = e(2002),
        i = e.n(a),
        c = function (n) {
          return (0, o.jsx)(r.default, {
            href: '/posts/1?query='.concat(encodeURIComponent(n.tag)),
            children: (0, o.jsx)('a', {
              children: (0, o.jsxs)('span', { className: 'clickable '.concat(i().tag), children: [n.tag, ' ', n.count && n.count] }),
            }),
          })
        },
        s = e(8193),
        u = e.n(s),
        l = function (n) {
          return (0, o.jsx)('ul', {
            className: u().tags,
            children: n.tags.map(function (n, t) {
              return (0, o.jsx)('li', { children: 'string' === typeof n ? (0, o.jsx)(c, { tag: n }) : (0, o.jsx)(c, { tag: n.tag, count: n.count }) }, t)
            }),
          })
        }
    },
    5505: function (n, t, e) {
      'use strict'
      var o = e(5893),
        r = e(7260),
        a = e.n(r)
      t.Z = function (n) {
        var t = (0, o.jsxs)(o.Fragment, { children: [n.title, ' ', (0, o.jsxs)('span', { className: a().postCount, children: ['(', n.count, ')'] })] })
        switch (n.level) {
          case 1:
          default:
            return (0, o.jsx)('h1', { children: t })
          case 2:
            return (0, o.jsx)('h2', { children: t })
          case 3:
            return (0, o.jsx)('h3', { children: t })
        }
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
    7437: function (n, t, e) {
      'use strict'
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return j
          },
          default: function () {
            return T
          },
        })
      var o = e(5893),
        r = e(6166),
        a = e(3447),
        i = e(7594),
        c = e(6545),
        s = e.n(c),
        u = function (n) {
          return (0, o.jsx)('ol', {
            className: s().container,
            children: n.indexGroups.map(function (t, e) {
              return (0, o.jsx)(
                'ol',
                {
                  children: t
                    .filter(function (t) {
                      return n.tagsByIndexes[t].length
                    })
                    .map(function (t, e) {
                      return (0, o.jsxs)('li', { children: [(0, o.jsx)('h2', { id: t, children: t }), (0, o.jsx)(i.Z, { tags: n.tagsByIndexes[t] })] }, e)
                    }),
                },
                e
              )
            }),
          })
        },
        l = e(1664),
        d = e(327),
        f = e.n(d),
        g = function (n) {
          var t = new Set(n.activatedIndexes)
          return (0, o.jsx)('div', {
            className: f().container,
            children: n.indexGroups.map(function (n, e) {
              return (0, o.jsx)(
                'ol',
                {
                  children: n.map(function (n) {
                    return (0,
                    o.jsx)(l.default, { href: '#'.concat(n), children: (0, o.jsx)('a', { className: t.has(n) ? f().active : '', children: (0, o.jsx)('li', { children: n }) }) }, n)
                  }),
                },
                e
              )
            }),
          })
        },
        p = e(5505),
        h = e(8145),
        x = e(6678),
        m = e(7427),
        j = !0,
        T = function (n) {
          var t = n.tags,
            e = [
              ['\uac00', '\ub098', '\ub2e4', '\ub77c', '\ub9c8', '\ubc14', '\uc0ac', '\uc544', '\uc790', '\ucc28', '\uce74', '\ud0c0', '\ud558'],
              Array(26)
                .fill('')
                .map(function (n, t) {
                  return String.fromCharCode(t + 65)
                }),
            ],
            i = t.reduce(function (n, t) {
              var e = n.findIndex(function (n) {
                return n.tag === t
              })
              return e >= 0 ? n[e].count++ : n.push({ tag: t, count: 1 }), n
            }, []),
            c = e.flat(),
            s = c.reduce(function (n, t) {
              return (n[t] = []), n
            }, {})
          i.forEach(function (n) {
            for (var t = n.tag.toUpperCase().charCodeAt(0), e = 0; e < c.length; e++) {
              var o = c[e],
                r = c[e + 1],
                a = o.toUpperCase().charCodeAt(0),
                i = void 0
              if ((r && (i = r.toUpperCase().charCodeAt(0)), void 0 !== i)) {
                if (t >= a && t < i) {
                  s[o].push(n)
                  break
                }
              } else s[o].push(n)
            }
          })
          var l = c.reduce(function (n, t) {
            return s[t].length && n.push(t), n
          }, [])
          return (0, o.jsxs)('section', {
            children: [
              (0, o.jsx)(r.Z, {
                title: m.Z.buildPageTitle(x.z.TAGS.TITLE),
                description: x.z.TAGS.DESCRIPTION,
                url: ''.concat(h.Z.baseURL, '/tags'),
                imageURL: '/icons/icon-512x512.png',
              }),
              (0, o.jsx)(p.Z, { level: 1, title: 'Tags', count: t.length }),
              (0, o.jsx)(g, { activatedIndexes: l, indexGroups: e }),
              (0, o.jsx)(u, { indexGroups: e, tagsByIndexes: s }),
              (0, o.jsx)(a.Z, {}),
            ],
          })
        }
    },
    7427: function (n, t, e) {
      'use strict'
      var o = e(8145)
      function r(n, t) {
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
          (e = null) && r(t.prototype, e),
          a && r(t, a),
          n
        )
      })()
      t.Z = a
    },
    6545: function (n) {
      n.exports = { container: 'TagList_container__e_mLL' }
    },
    327: function (n) {
      n.exports = { container: 'TagNavigator_container__LKTJr', active: 'TagNavigator_active__9hURi' }
    },
    2002: function (n) {
      n.exports = { tag: 'Tag_tag__tXphA' }
    },
    8193: function (n) {
      n.exports = { tags: 'Tags_tags__mhykw' }
    },
    7260: function (n) {
      n.exports = { postCount: 'TitleWithCount_postCount__E9bRh' }
    },
    9008: function (n, t, e) {
      n.exports = e(5443)
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (t = 4333), n((n.s = t))
      var t
    })
    var t = n.O()
    _N_E = t
  },
])
