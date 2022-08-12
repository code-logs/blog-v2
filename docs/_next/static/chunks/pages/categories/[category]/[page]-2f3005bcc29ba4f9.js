;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [643],
  {
    2214: function (t, r, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/categories/[category]/[page]',
        function () {
          return e(8899)
        },
      ])
    },
    8899: function (t, r, e) {
      'use strict'
      e.r(r),
        e.d(r, {
          __N_SSG: function () {
            return d
          },
        })
      var n = e(5893),
        o = e(4786),
        a = e(6166),
        i = e(9337),
        c = e(4351),
        s = e(8145),
        u = e(6678),
        l = e(5500),
        f = e(7427),
        p = e(5866),
        g = e.n(p)
      function y(t, r) {
        ;(null == r || r > t.length) && (r = t.length)
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e]
        return n
      }
      function _(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t)
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t)
          })(t) ||
          (function (t, r) {
            if (!t) return
            if ('string' === typeof t) return y(t, r)
            var e = Object.prototype.toString.call(t).slice(8, -1)
            'Object' === e && t.constructor && (e = t.constructor.name)
            if ('Map' === e || 'Set' === e) return Array.from(e)
            if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return y(t, r)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var d = !0
      r.default = function (t) {
        var r = t.page,
          e = t.lastPage,
          p = t.posts,
          y = t.category
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.Z, {
              title: f.Z.buildPageTitle(u.z.CATEGORIES.TITLE(y)),
              description: u.z.CATEGORIES.DESCRIPTION(y, r),
              url: 'categories/'.concat(y, '/').concat(r, '}'),
              imageURL: '/icons/icon-512x512.png',
              keywords: p
                .map(function (t) {
                  return _(t.tags).concat([t.title, t.category, t.description])
                })
                .flat(),
            }),
            (0, n.jsx)('h1', { className: g().title, children: l.aA[y] }),
            (0, n.jsx)(c.Z, { titleLevel: 2, posts: p }),
            (0, n.jsx)(o.Z, {}),
            (0, n.jsx)(i.Z, { page: r, lastPage: e, baseURL: ''.concat(s.Z.baseURL, '/categories/').concat(y) }),
          ],
        })
      }
    },
    5866: function (t) {
      t.exports = { title: 'Categories_title__UTw08' }
    },
  },
  function (t) {
    t.O(0, [117, 495, 774, 888, 179], function () {
      return (r = 2214), t((t.s = r))
      var r
    })
    var r = t.O()
    _N_E = r
  },
])
