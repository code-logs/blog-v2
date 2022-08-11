;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [410],
  {
    3454: function (t, e, n) {
      'use strict'
      var r, o
      t.exports =
        (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) && 'object' === typeof (null === (o = n.g.process) || void 0 === o ? void 0 : o.env)
          ? n.g.process
          : n(7663)
    },
    122: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/posts/[page]',
        function () {
          return n(8118)
        },
      ])
    },
    9337: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return p
        },
      })
      var r = n(5893),
        o = n(7026),
        i = (0, o.Z)(
          (0, r.jsx)('path', {
            d: 'M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z',
          }),
          'ChevronLeftRounded'
        ),
        a = (0, o.Z)(
          (0, r.jsx)('path', {
            d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
          }),
          'MoreHorizRounded'
        ),
        c = (0, o.Z)(
          (0, r.jsx)('path', {
            d: 'M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z',
          }),
          'ChevronRightRounded'
        ),
        u = n(1664),
        l = n(7294),
        s = n(2256),
        f = n.n(s)
      function h(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function d(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return h(t)
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (!t) return
            if ('string' === typeof t) return h(t, e)
            var n = Object.prototype.toString.call(t).slice(8, -1)
            'Object' === n && t.constructor && (n = t.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var p = function (t) {
        var e = t.page,
          n = t.lastPage,
          o = t.displayCount,
          s = void 0 === o ? 5 : o,
          h = t.query,
          p = t.baseURL,
          g = (0, l.useState)([]),
          y = g[0],
          v = g[1]
        ;(0, l.useEffect)(
          function () {
            for (var t = [], r = [], o = Math.floor(s / 2), i = 0; i < o; i++) {
              var a = e - o + i
              a > 0 && t.push(a)
              var c = e + 1 + i
              c <= n && r.push(c)
            }
            v(d(t).concat([e], d(r)))
          },
          [e, n, s]
        ),
          (0, l.useEffect)(function () {}, [])
        var m = function (t) {
          var e = ''.concat(p, '/').concat(t)
          return h && (e += '?query='.concat(h)), e
        }
        return (0, r.jsx)('div', {
          className: f().container,
          children: (0, r.jsxs)('ul', {
            children: [
              e > 1 && (0, r.jsx)('li', { children: (0, r.jsx)(u.default, { href: m(e - 1), children: (0, r.jsx)('a', { children: (0, r.jsx)(i, {}) }) }) }),
              e > 1 &&
                !y.includes(1) &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('li', { children: (0, r.jsx)('a', { href: m(1), children: 1 }) }), (0, r.jsx)(a, {})] }),
              y.map(function (t) {
                return (0, r.jsx)('li', { children: (0, r.jsx)('a', { className: e === t ? f().currentPage : '', href: m(t), children: t }) }, t)
              }),
              e < n &&
                !y.includes(n) &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(a, {}), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: m(n), children: n }) })] }),
              e < n && (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: m(e + 1), children: (0, r.jsx)(c, {}) }) }),
            ],
          }),
        })
      }
    },
    7221: function (t, e, n) {
      'use strict'
      var r = n(5893),
        o = n(1664),
        i = n(5500),
        a = n(4111),
        c = n(9443),
        u = n(8286),
        l = n(7594),
        s = n(7828),
        f = n.n(s)
      e.Z = function (t) {
        var e = t.titleLevel,
          n = void 0 === e ? 3 : e,
          s = t.post,
          h = (0, a.Z)(new Date(s.publishedAt))
        return (0, r.jsxs)('article', {
          className: 'clickable '.concat(f().card),
          children: [
            (0, r.jsx)(o.default, {
              href: u.Z.buildLinkURLByTitle(s.title),
              children: (0, r.jsxs)('a', {
                className: f().title,
                children: [
                  1 === n && (0, r.jsx)('h1', { children: s.title }),
                  2 === n && (0, r.jsx)('h2', { children: s.title }),
                  3 === n && (0, r.jsx)('h3', { children: s.title }),
                ],
              }),
            }),
            (0, r.jsx)('span', { className: f().category, children: i.aA[s.category] }),
            (0, r.jsx)('span', { className: f().publishedAt, children: h }),
            (0, r.jsx)(o.default, {
              href: u.Z.buildLinkURLByTitle(s.title),
              children: (0, r.jsx)('a', { className: f().description, children: (0, r.jsx)('p', { children: s.description }) }),
            }),
            s.thumbnailName &&
              (0, r.jsx)('div', {
                className: f().thumbnail,
                children: (0, r.jsx)(o.default, {
                  href: u.Z.buildLinkURLByTitle(s.title),
                  children: (0, r.jsx)('a', {
                    children: (0, r.jsx)('img', { className: 'thumbnail', src: c.Z.buildImagePath(s.thumbnailName), alt: s.description }),
                  }),
                }),
              }),
            (0, r.jsx)('section', { className: f().tags, children: (0, r.jsx)(l.Z, { tags: s.tags }) }),
          ],
        })
      }
    },
    7594: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return s
        },
      })
      var r = n(5893),
        o = n(1664),
        i = n(2002),
        a = n.n(i),
        c = function (t) {
          return (0, r.jsx)(o.default, {
            href: '/posts/1?query='.concat(encodeURIComponent(t.tag)),
            children: (0, r.jsx)('a', {
              children: (0, r.jsxs)('span', { className: 'clickable '.concat(a().tag), children: [t.tag, ' ', t.count && t.count] }),
            }),
          })
        },
        u = n(8193),
        l = n.n(u),
        s = function (t) {
          return (0, r.jsx)('ul', {
            className: l().tags,
            children: t.tags.map(function (t, e) {
              return (0, r.jsx)('li', { children: 'string' === typeof t ? (0, r.jsx)(c, { tag: t }) : (0, r.jsx)(c, { tag: t.tag, count: t.count }) }, e)
            }),
          })
        }
    },
    7192: function (t, e, n) {
      'use strict'
      function r(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      function i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t)
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (!t) return
            if ('string' === typeof t) return r(t, e)
            var n = Object.prototype.toString.call(t).slice(8, -1)
            'Object' === n && t.constructor && (n = t.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      n.d(e, {
        Z: function () {
          return m
        },
      })
      var a = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (this.dataset = e)
          }
          var e, n, r
          return (
            (e = t),
            (n = [
              {
                key: 'find',
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  return void 0 !== t ? this.dataset.slice(e, e + t) : i(this.dataset)
                },
              },
              {
                key: 'count',
                value: function (t, e) {
                  return this.dataset.filter(function (n) {
                    return n[t] === e
                  }).length
                },
              },
              {
                key: 'sort',
                value: function (t) {
                  return this.dataset.sort(t), this
                },
              },
            ]),
            n && o(e.prototype, n),
            r && o(e, r),
            t
          )
        })(),
        c = a,
        u = n(8286),
        l = n(5500)
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      function f(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
      }
      function h(t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          h(t)
        )
      }
      function d(t, e) {
        return !e || ('object' !== g(e) && 'function' !== typeof e)
          ? (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return t
            })(t)
          : e
      }
      function p(t, e) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          p(t, e)
        )
      }
      var g = function (t) {
        return t && 'undefined' !== typeof Symbol && t.constructor === Symbol ? 'symbol' : typeof t
      }
      function y(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h(t)
          if (e) {
            var o = h(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return d(this, n)
        }
      }
      var v = (function (t) {
          !(function (t, e) {
            if ('function' !== typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
            ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && p(t, e)
          })(i, t)
          var e,
            n,
            r,
            o = y(i)
          function i() {
            var t
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
              })(this, i),
              (t = o.call(
                this,
                l.ZP.filter(function (t) {
                  return t.published
                }).map(function (t, e) {
                  return (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n)
                      'function' === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                          })
                        )),
                        r.forEach(function (e) {
                          f(t, e, n[e])
                        })
                    }
                    return t
                  })({}, t, { order: e })
                })
              )),
              t.sort(function (t, e) {
                return t.publishedAt > e.publishedAt ? -1 : t.publishedAt < e.publishedAt ? 1 : e.order - t.order
              }),
              t
            )
          }
          return (
            (e = i),
            (n = [
              {
                key: 'findByTitle',
                value: function (t) {
                  return this.dataset.find(function (e) {
                    return u.Z.normalizeTitle(e.title) === t || e.title === t
                  })
                },
              },
              {
                key: 'hasNewByCategory',
                value: function (t) {
                  return Boolean(
                    this.dataset
                      .filter(function (e) {
                        return e.category === t
                      })
                      .find(function (t) {
                        var e = new Date(t.publishedAt)
                        return e.setDate(e.getDate() + 7) >= Date.now()
                      })
                  )
                },
              },
              {
                key: 'count',
                value: function () {
                  return this.dataset.length
                },
              },
              {
                key: 'countByCategory',
                value: function (t) {
                  return this.dataset.filter(function (e) {
                    return e.category === t
                  }).length
                },
              },
              {
                key: 'countByTag',
                value: function (t) {
                  return this.dataset.filter(function (e) {
                    return e.tags.includes(t)
                  }).length
                },
              },
              {
                key: 'query',
                value: function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = t.split(/\s/).map(function (t) {
                      return t.toLowerCase()
                    }),
                    o = this.dataset.filter(function (t) {
                      return r.some(function (e) {
                        return t.title.indexOf(e) >= 0 || t.description.indexOf(e) >= 0 || t.category.indexOf(e) >= 0 || t.tags.join('').indexOf(e) >= 0
                      })
                    })
                  return void 0 !== e ? o.slice(n, n + e) : o
                },
              },
              {
                key: 'findByCategory',
                value: function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = this.dataset.filter(function (e) {
                      return e.category === t
                    })
                  return void 0 !== e ? r.slice(n, n + e) : r
                },
              },
              {
                key: 'findByNormalizedTitle',
                value: function (t) {
                  return this.dataset.find(function (e) {
                    return u.Z.normalizeTitle(e.title) === t
                  })
                },
              },
            ]),
            n && s(e.prototype, n),
            r && s(e, r),
            i
          )
        })(c),
        m = new v()
    },
    8118: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return C
          },
          default: function () {
            return O
          },
        })
      var r = n(5893),
        o = n(1163),
        i = n(7294),
        a = n(6166),
        c = n(3447),
        u = n(9337),
        l = n(7221),
        s = (0, n(7026).Z)(
          (0, r.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
          }),
          'SearchRounded'
        ),
        f = n(3337),
        h = n.n(f)
      function d(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              })
            )),
            r.forEach(function (e) {
              d(t, e, n[e])
            })
        }
        return t
      }
      var g = function (t) {
          return (0, r.jsxs)('label', {
            className: h().label,
            children: [(0, r.jsx)(s, { className: h().icon }), (0, r.jsx)('input', p({ className: h().input }, t))],
          })
        },
        y = n(8145),
        v = n(6678),
        m = n(7192),
        b = n(9443),
        x = n(7427),
        j = n(7498),
        _ = n.n(j)
      function w(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function A(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return w(t)
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (!t) return
            if ('string' === typeof t) return w(t, e)
            var n = Object.prototype.toString.call(t).slice(8, -1)
            'Object' === n && t.constructor && (n = t.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var C = !0,
        O = function (t) {
          var e = t.page,
            n = t.totalCount,
            s = (0, i.useState)(t.lastPage),
            f = s[0],
            h = s[1],
            d = (0, i.useState)(t.posts),
            p = d[0],
            j = d[1],
            w = (0, i.useState)(),
            C = w[0],
            O = w[1],
            S = (0, o.useRouter)()
          return (
            (0, i.useEffect)(
              function () {
                var t = new URL(b.Z.absolutePath(S.asPath))
                if (t.search) {
                  var n = new URLSearchParams(t.search).get('query')
                  if (n) {
                    O(encodeURIComponent(n))
                    var r = y.Z.pageLimit,
                      o = (e - 1) * r
                    j(m.Z.query(n, r, o)), h(Math.ceil(m.Z.query(n).length / r))
                  }
                }
              },
              [e, S.asPath]
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(a.Z, {
                  title: x.Z.buildPageTitle(v.z.POSTS.TITLE),
                  description: v.z.POSTS.DESCRIPTION(e),
                  url: ''.concat(y.Z.baseURL, '/posts/').concat(e),
                  imageURL: '/icons/icon-512x512.png',
                  keywords: p
                    .map(function (t) {
                      return A(t.tags).concat([t.title, t.description])
                    })
                    .flat(),
                }),
                (0, r.jsxs)('span', { className: _().totalCount, children: ['Total posts ', n] }),
                (0, r.jsx)('h1', { children: 'Posts ' }),
                (0, r.jsx)('form', {
                  onSubmit: function (t) {
                    t.preventDefault()
                    var e = t.currentTarget,
                      n = new FormData(e).get('query')
                    if (n) {
                      var r = new URL(location.href)
                      ;(r.pathname = '/posts/1'), (r.search = 'query='.concat(encodeURIComponent(n.toString()))), (location.href = r.href)
                    }
                  },
                  children: (0, r.jsx)(g, { placeholder: 'Search...', name: 'query' }),
                }),
                Boolean(null === p || void 0 === p ? void 0 : p.length) &&
                  p.map(function (t, e) {
                    return (0, r.jsx)(l.Z, { titleLevel: 2, post: t }, e)
                  }),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(u.Z, { page: e, lastPage: f, query: C, baseURL: ''.concat(y.Z.baseURL, '/posts') }),
              ],
            })
          )
        }
    },
    2256: function (t) {
      t.exports = { container: 'Paginator_container__Jyd6p', currentPage: 'Paginator_currentPage__uykCS' }
    },
    7828: function (t) {
      t.exports = {
        card: 'PostCard_card__RhSh8',
        title: 'PostCard_title__sytFV',
        category: 'PostCard_category__maLVP',
        publishedAt: 'PostCard_publishedAt__jx58S',
        description: 'PostCard_description__53x7j',
        thumbnail: 'PostCard_thumbnail__RluzR',
        tags: 'PostCard_tags__H0ViL',
      }
    },
    3337: function (t) {
      t.exports = {
        'hide-clear': 'SearchInput_hide-clear__OJzSU',
        label: 'SearchInput_label__5WQ13',
        icon: 'SearchInput_icon__7xWSN',
        input: 'SearchInput_input__pcQeU',
      }
    },
    2002: function (t) {
      t.exports = { tag: 'Tag_tag__tXphA' }
    },
    8193: function (t) {
      t.exports = { tags: 'Tags_tags__mhykw' }
    },
    7498: function (t) {
      t.exports = { totalCount: 'Posts_totalCount__8nFES' }
    },
    1864: function (t, e, n) {
      var r = n(3454)
      !(function () {
        'use strict'
        var e = {
            977: function (t) {
              function e(t) {
                if ('string' !== typeof t) throw new TypeError('Path must be a string. Received ' + JSON.stringify(t))
              }
              function n(t, e) {
                for (var n, r = '', o = 0, i = -1, a = 0, c = 0; c <= t.length; ++c) {
                  if (c < t.length) n = t.charCodeAt(c)
                  else {
                    if (47 === n) break
                    n = 47
                  }
                  if (47 === n) {
                    if (i === c - 1 || 1 === a);
                    else if (i !== c - 1 && 2 === a) {
                      if (r.length < 2 || 2 !== o || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2))
                        if (r.length > 2) {
                          var u = r.lastIndexOf('/')
                          if (u !== r.length - 1) {
                            ;-1 === u ? ((r = ''), (o = 0)) : (o = (r = r.slice(0, u)).length - 1 - r.lastIndexOf('/')), (i = c), (a = 0)
                            continue
                          }
                        } else if (2 === r.length || 1 === r.length) {
                          ;(r = ''), (o = 0), (i = c), (a = 0)
                          continue
                        }
                      e && (r.length > 0 ? (r += '/..') : (r = '..'), (o = 2))
                    } else r.length > 0 ? (r += '/' + t.slice(i + 1, c)) : (r = t.slice(i + 1, c)), (o = c - i - 1)
                    ;(i = c), (a = 0)
                  } else 46 === n && -1 !== a ? ++a : (a = -1)
                }
                return r
              }
              var o = {
                resolve: function () {
                  for (var t, o = '', i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
                    var c
                    a >= 0 ? (c = arguments[a]) : (void 0 === t && (t = r.cwd()), (c = t)),
                      e(c),
                      0 !== c.length && ((o = c + '/' + o), (i = 47 === c.charCodeAt(0)))
                  }
                  return (o = n(o, !i)), i ? (o.length > 0 ? '/' + o : '/') : o.length > 0 ? o : '.'
                },
                normalize: function (t) {
                  if ((e(t), 0 === t.length)) return '.'
                  var r = 47 === t.charCodeAt(0),
                    o = 47 === t.charCodeAt(t.length - 1)
                  return 0 !== (t = n(t, !r)).length || r || (t = '.'), t.length > 0 && o && (t += '/'), r ? '/' + t : t
                },
                isAbsolute: function (t) {
                  return e(t), t.length > 0 && 47 === t.charCodeAt(0)
                },
                join: function () {
                  if (0 === arguments.length) return '.'
                  for (var t, n = 0; n < arguments.length; ++n) {
                    var r = arguments[n]
                    e(r), r.length > 0 && (void 0 === t ? (t = r) : (t += '/' + r))
                  }
                  return void 0 === t ? '.' : o.normalize(t)
                },
                relative: function (t, n) {
                  if ((e(t), e(n), t === n)) return ''
                  if ((t = o.resolve(t)) === (n = o.resolve(n))) return ''
                  for (var r = 1; r < t.length && 47 === t.charCodeAt(r); ++r);
                  for (var i = t.length, a = i - r, c = 1; c < n.length && 47 === n.charCodeAt(c); ++c);
                  for (var u = n.length - c, l = a < u ? a : u, s = -1, f = 0; f <= l; ++f) {
                    if (f === l) {
                      if (u > l) {
                        if (47 === n.charCodeAt(c + f)) return n.slice(c + f + 1)
                        if (0 === f) return n.slice(c + f)
                      } else a > l && (47 === t.charCodeAt(r + f) ? (s = f) : 0 === f && (s = 0))
                      break
                    }
                    var h = t.charCodeAt(r + f)
                    if (h !== n.charCodeAt(c + f)) break
                    47 === h && (s = f)
                  }
                  var d = ''
                  for (f = r + s + 1; f <= i; ++f) (f !== i && 47 !== t.charCodeAt(f)) || (0 === d.length ? (d += '..') : (d += '/..'))
                  return d.length > 0 ? d + n.slice(c + s) : ((c += s), 47 === n.charCodeAt(c) && ++c, n.slice(c))
                },
                _makeLong: function (t) {
                  return t
                },
                dirname: function (t) {
                  if ((e(t), 0 === t.length)) return '.'
                  for (var n = t.charCodeAt(0), r = 47 === n, o = -1, i = !0, a = t.length - 1; a >= 1; --a)
                    if (47 === (n = t.charCodeAt(a))) {
                      if (!i) {
                        o = a
                        break
                      }
                    } else i = !1
                  return -1 === o ? (r ? '/' : '.') : r && 1 === o ? '//' : t.slice(0, o)
                },
                basename: function (t, n) {
                  if (void 0 !== n && 'string' !== typeof n) throw new TypeError('"ext" argument must be a string')
                  e(t)
                  var r,
                    o = 0,
                    i = -1,
                    a = !0
                  if (void 0 !== n && n.length > 0 && n.length <= t.length) {
                    if (n.length === t.length && n === t) return ''
                    var c = n.length - 1,
                      u = -1
                    for (r = t.length - 1; r >= 0; --r) {
                      var l = t.charCodeAt(r)
                      if (47 === l) {
                        if (!a) {
                          o = r + 1
                          break
                        }
                      } else -1 === u && ((a = !1), (u = r + 1)), c >= 0 && (l === n.charCodeAt(c) ? -1 === --c && (i = r) : ((c = -1), (i = u)))
                    }
                    return o === i ? (i = u) : -1 === i && (i = t.length), t.slice(o, i)
                  }
                  for (r = t.length - 1; r >= 0; --r)
                    if (47 === t.charCodeAt(r)) {
                      if (!a) {
                        o = r + 1
                        break
                      }
                    } else -1 === i && ((a = !1), (i = r + 1))
                  return -1 === i ? '' : t.slice(o, i)
                },
                extname: function (t) {
                  e(t)
                  for (var n = -1, r = 0, o = -1, i = !0, a = 0, c = t.length - 1; c >= 0; --c) {
                    var u = t.charCodeAt(c)
                    if (47 !== u) -1 === o && ((i = !1), (o = c + 1)), 46 === u ? (-1 === n ? (n = c) : 1 !== a && (a = 1)) : -1 !== n && (a = -1)
                    else if (!i) {
                      r = c + 1
                      break
                    }
                  }
                  return -1 === n || -1 === o || 0 === a || (1 === a && n === o - 1 && n === r + 1) ? '' : t.slice(n, o)
                },
                format: function (t) {
                  if (null === t || 'object' !== typeof t) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t)
                  return (function (t, e) {
                    var n = e.dir || e.root,
                      r = e.base || (e.name || '') + (e.ext || '')
                    return n ? (n === e.root ? n + r : n + t + r) : r
                  })('/', t)
                },
                parse: function (t) {
                  e(t)
                  var n = { root: '', dir: '', base: '', ext: '', name: '' }
                  if (0 === t.length) return n
                  var r,
                    o = t.charCodeAt(0),
                    i = 47 === o
                  i ? ((n.root = '/'), (r = 1)) : (r = 0)
                  for (var a = -1, c = 0, u = -1, l = !0, s = t.length - 1, f = 0; s >= r; --s)
                    if (47 !== (o = t.charCodeAt(s)))
                      -1 === u && ((l = !1), (u = s + 1)), 46 === o ? (-1 === a ? (a = s) : 1 !== f && (f = 1)) : -1 !== a && (f = -1)
                    else if (!l) {
                      c = s + 1
                      break
                    }
                  return (
                    -1 === a || -1 === u || 0 === f || (1 === f && a === u - 1 && a === c + 1)
                      ? -1 !== u && (n.base = n.name = 0 === c && i ? t.slice(1, u) : t.slice(c, u))
                      : (0 === c && i ? ((n.name = t.slice(1, a)), (n.base = t.slice(1, u))) : ((n.name = t.slice(c, a)), (n.base = t.slice(c, u))),
                        (n.ext = t.slice(a, u))),
                    c > 0 ? (n.dir = t.slice(0, c - 1)) : i && (n.dir = '/'),
                    n
                  )
                },
                sep: '/',
                delimiter: ':',
                win32: null,
                posix: null,
              }
              ;(o.posix = o), (t.exports = o)
            },
          },
          n = {}
        function o(t) {
          var r = n[t]
          if (void 0 !== r) return r.exports
          var i = (n[t] = { exports: {} }),
            a = !0
          try {
            e[t](i, i.exports, o), (a = !1)
          } finally {
            a && delete n[t]
          }
          return i.exports
        }
        o.ab = '//'
        var i = o(977)
        t.exports = i
      })()
    },
    7663: function (t) {
      !(function () {
        var e = {
            162: function (t) {
              var e,
                n,
                r = (t.exports = {})
              function o() {
                throw new Error('setTimeout has not been defined')
              }
              function i() {
                throw new Error('clearTimeout has not been defined')
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0)
                if ((e === o || !e) && setTimeout) return (e = setTimeout), setTimeout(t, 0)
                try {
                  return e(t, 0)
                } catch (r) {
                  try {
                    return e.call(null, t, 0)
                  } catch (r) {
                    return e.call(this, t, 0)
                  }
                }
              }
              !(function () {
                try {
                  e = 'function' === typeof setTimeout ? setTimeout : o
                } catch (t) {
                  e = o
                }
                try {
                  n = 'function' === typeof clearTimeout ? clearTimeout : i
                } catch (t) {
                  n = i
                }
              })()
              var c,
                u = [],
                l = !1,
                s = -1
              function f() {
                l && c && ((l = !1), c.length ? (u = c.concat(u)) : (s = -1), u.length && h())
              }
              function h() {
                if (!l) {
                  var t = a(f)
                  l = !0
                  for (var e = u.length; e; ) {
                    for (c = u, u = []; ++s < e; ) c && c[s].run()
                    ;(s = -1), (e = u.length)
                  }
                  ;(c = null),
                    (l = !1),
                    (function (t) {
                      if (n === clearTimeout) return clearTimeout(t)
                      if ((n === i || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(t)
                      try {
                        n(t)
                      } catch (e) {
                        try {
                          return n.call(null, t)
                        } catch (e) {
                          return n.call(this, t)
                        }
                      }
                    })(t)
                }
              }
              function d(t, e) {
                ;(this.fun = t), (this.array = e)
              }
              function p() {}
              ;(r.nextTick = function (t) {
                var e = new Array(arguments.length - 1)
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
                u.push(new d(t, e)), 1 !== u.length || l || a(h)
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (r.title = 'browser'),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ''),
                (r.versions = {}),
                (r.on = p),
                (r.addListener = p),
                (r.once = p),
                (r.off = p),
                (r.removeListener = p),
                (r.removeAllListeners = p),
                (r.emit = p),
                (r.prependListener = p),
                (r.prependOnceListener = p),
                (r.listeners = function (t) {
                  return []
                }),
                (r.binding = function (t) {
                  throw new Error('process.binding is not supported')
                }),
                (r.cwd = function () {
                  return '/'
                }),
                (r.chdir = function (t) {
                  throw new Error('process.chdir is not supported')
                }),
                (r.umask = function () {
                  return 0
                })
            },
          },
          n = {}
        function r(t) {
          var o = n[t]
          if (void 0 !== o) return o.exports
          var i = (n[t] = { exports: {} }),
            a = !0
          try {
            e[t](i, i.exports, r), (a = !1)
          } finally {
            a && delete n[t]
          }
          return i.exports
        }
        r.ab = '//'
        var o = r(162)
        t.exports = o
      })()
    },
    9008: function (t, e, n) {
      t.exports = n(5443)
    },
  },
  function (t) {
    t.O(0, [439, 774, 888, 179], function () {
      return (e = 122), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
