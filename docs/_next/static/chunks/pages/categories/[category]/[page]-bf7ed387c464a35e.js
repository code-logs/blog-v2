;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [643],
  {
    3454: function (e, t, r) {
      'use strict'
      var n, i
      e.exports =
        (null === (n = r.g.process) || void 0 === n ? void 0 : n.env) && 'object' === typeof (null === (i = r.g.process) || void 0 === i ? void 0 : i.env)
          ? r.g.process
          : r(7663)
    },
    2214: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/categories/[category]/[page]',
        function () {
          return r(8899)
        },
      ])
    },
    9337: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return g
        },
      })
      var n = r(5893),
        i = r(7026),
        o = (0, i.Z)(
          (0, n.jsx)('path', {
            d: 'M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z',
          }),
          'ChevronLeftRounded'
        ),
        a = (0, i.Z)(
          (0, n.jsx)('path', {
            d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
          }),
          'MoreHorizRounded'
        ),
        c = (0, i.Z)(
          (0, n.jsx)('path', {
            d: 'M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z',
          }),
          'ChevronRightRounded'
        ),
        s = r(1664),
        l = r(7294),
        u = r(2256),
        f = r.n(u)
      function h(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return h(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return h(e, t)
            var r = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === r && e.constructor && (r = e.constructor.name)
            if ('Map' === r || 'Set' === r) return Array.from(r)
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var g = function (e) {
        var t = e.page,
          r = e.lastPage,
          i = e.displayCount,
          u = void 0 === i ? 5 : i,
          h = e.query,
          g = e.baseURL,
          p = (0, l.useState)([]),
          v = p[0],
          m = p[1]
        ;(0, l.useEffect)(
          function () {
            for (var e = [], n = [], i = Math.floor(u / 2), o = 0; o < i; o++) {
              var a = t - i + o
              a > 0 && e.push(a)
              var c = t + 1 + o
              c <= r && n.push(c)
            }
            m(d(e).concat([t], d(n)))
          },
          [t, r, u]
        ),
          (0, l.useEffect)(function () {}, [])
        var x = function (e) {
          var t = ''.concat(g, '/').concat(e)
          return h && (t += '?query='.concat(h)), t
        }
        return (0, n.jsx)('div', {
          className: f().container,
          children: (0, n.jsxs)('ul', {
            children: [
              t > 1 && (0, n.jsx)('li', { children: (0, n.jsx)(s.default, { href: x(t - 1), children: (0, n.jsx)('a', { children: (0, n.jsx)(o, {}) }) }) }),
              t > 1 &&
                !v.includes(1) &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)('li', { children: (0, n.jsx)('a', { href: x(1), children: 1 }) }), (0, n.jsx)(a, {})] }),
              v.map(function (e) {
                return (0, n.jsx)('li', { children: (0, n.jsx)('a', { className: t === e ? f().currentPage : '', href: x(e), children: e }) }, e)
              }),
              t < r &&
                !v.includes(r) &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(a, {}), (0, n.jsx)('li', { children: (0, n.jsx)('a', { href: x(r), children: r }) })] }),
              t < r && (0, n.jsx)('li', { children: (0, n.jsx)('a', { href: x(t + 1), children: (0, n.jsx)(c, {}) }) }),
            ],
          }),
        })
      }
    },
    7221: function (e, t, r) {
      'use strict'
      var n = r(5893),
        i = r(1664),
        o = r(5500),
        a = r(4111),
        c = r(9443),
        s = r(8286),
        l = r(7594),
        u = r(7828),
        f = r.n(u)
      t.Z = function (e) {
        var t = e.titleLevel,
          r = void 0 === t ? 3 : t,
          u = e.post,
          h = (0, a.Z)(new Date(u.publishedAt))
        return (0, n.jsxs)('article', {
          className: 'clickable '.concat(f().card),
          children: [
            (0, n.jsx)(i.default, {
              href: s.Z.buildLinkURLByTitle(u.title),
              children: (0, n.jsxs)('a', {
                className: f().title,
                children: [
                  1 === r && (0, n.jsx)('h1', { children: u.title }),
                  2 === r && (0, n.jsx)('h2', { children: u.title }),
                  3 === r && (0, n.jsx)('h3', { children: u.title }),
                ],
              }),
            }),
            (0, n.jsx)('span', { className: f().category, children: o.aA[u.category] }),
            (0, n.jsx)('span', { className: f().publishedAt, children: h }),
            (0, n.jsx)(i.default, {
              href: s.Z.buildLinkURLByTitle(u.title),
              children: (0, n.jsx)('a', { className: f().description, children: (0, n.jsx)('p', { children: u.description }) }),
            }),
            u.thumbnailName &&
              (0, n.jsx)('div', {
                className: f().thumbnail,
                children: (0, n.jsx)(i.default, {
                  href: s.Z.buildLinkURLByTitle(u.title),
                  children: (0, n.jsx)('a', {
                    children: (0, n.jsx)('img', { className: 'thumbnail', src: c.Z.buildImagePath(u.thumbnailName), alt: u.description }),
                  }),
                }),
              }),
            (0, n.jsx)('section', { className: f().tags, children: (0, n.jsx)(l.Z, { tags: u.tags }) }),
          ],
        })
      }
    },
    7594: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return u
        },
      })
      var n = r(5893),
        i = r(1664),
        o = r(2002),
        a = r.n(o),
        c = function (e) {
          return (0, n.jsx)(i.default, {
            href: '/posts/1?query='.concat(encodeURIComponent(e.tag)),
            children: (0, n.jsx)('a', {
              children: (0, n.jsxs)('span', { className: 'clickable '.concat(a().tag), children: [e.tag, ' ', e.count && e.count] }),
            }),
          })
        },
        s = r(8193),
        l = r.n(s),
        u = function (e) {
          return (0, n.jsx)('ul', {
            className: l().tags,
            children: e.tags.map(function (e, t) {
              return (0, n.jsx)('li', { children: 'string' === typeof e ? (0, n.jsx)(c, { tag: e }) : (0, n.jsx)(c, { tag: e.tag, count: e.count }) }, t)
            }),
          })
        }
    },
    8899: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return v
          },
        })
      var n = r(5893),
        i = r(6166),
        o = r(3447),
        a = r(9337),
        c = r(7221),
        s = r(8145),
        l = r(6678),
        u = r(5500),
        f = r(7427),
        h = r(5866),
        d = r.n(h)
      function g(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return g(e, t)
            var r = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === r && e.constructor && (r = e.constructor.name)
            if ('Map' === r || 'Set' === r) return Array.from(r)
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var v = !0
      t.default = function (e) {
        var t = e.page,
          r = e.lastPage,
          h = e.posts,
          g = e.category
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z, {
              title: f.Z.buildPageTitle(l.z.CATEGORIES.TITLE(g)),
              description: l.z.CATEGORIES.DESCRIPTION(g, t),
              url: 'categories/'.concat(g, '/').concat(t, '}'),
              imageURL: '/icons/icon-512x512.png',
              keywords: h
                .map(function (e) {
                  return p(e.tags).concat([e.title, e.category, e.description])
                })
                .flat(),
            }),
            (0, n.jsx)('h1', { className: d().title, children: u.aA[g] }),
            Boolean(null === h || void 0 === h ? void 0 : h.length) &&
              h.map(function (e, t) {
                return (0, n.jsx)(c.Z, { titleLevel: 2, post: e }, t)
              }),
            (0, n.jsx)(o.Z, {}),
            (0, n.jsx)(a.Z, { page: t, lastPage: r, baseURL: ''.concat(s.Z.baseURL, '/categories/').concat(g) }),
          ],
        })
      }
    },
    2256: function (e) {
      e.exports = { container: 'Paginator_container__Jyd6p', currentPage: 'Paginator_currentPage__uykCS' }
    },
    7828: function (e) {
      e.exports = {
        card: 'PostCard_card__RhSh8',
        title: 'PostCard_title__sytFV',
        category: 'PostCard_category__maLVP',
        publishedAt: 'PostCard_publishedAt__jx58S',
        description: 'PostCard_description__53x7j',
        thumbnail: 'PostCard_thumbnail__RluzR',
        tags: 'PostCard_tags__H0ViL',
      }
    },
    2002: function (e) {
      e.exports = { tag: 'Tag_tag__tXphA' }
    },
    8193: function (e) {
      e.exports = { tags: 'Tags_tags__mhykw' }
    },
    5866: function (e) {
      e.exports = { title: 'Categories_title__UTw08' }
    },
    1864: function (e, t, r) {
      var n = r(3454)
      !(function () {
        'use strict'
        var t = {
            977: function (e) {
              function t(e) {
                if ('string' !== typeof e) throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
              }
              function r(e, t) {
                for (var r, n = '', i = 0, o = -1, a = 0, c = 0; c <= e.length; ++c) {
                  if (c < e.length) r = e.charCodeAt(c)
                  else {
                    if (47 === r) break
                    r = 47
                  }
                  if (47 === r) {
                    if (o === c - 1 || 1 === a);
                    else if (o !== c - 1 && 2 === a) {
                      if (n.length < 2 || 2 !== i || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2))
                        if (n.length > 2) {
                          var s = n.lastIndexOf('/')
                          if (s !== n.length - 1) {
                            ;-1 === s ? ((n = ''), (i = 0)) : (i = (n = n.slice(0, s)).length - 1 - n.lastIndexOf('/')), (o = c), (a = 0)
                            continue
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ;(n = ''), (i = 0), (o = c), (a = 0)
                          continue
                        }
                      t && (n.length > 0 ? (n += '/..') : (n = '..'), (i = 2))
                    } else n.length > 0 ? (n += '/' + e.slice(o + 1, c)) : (n = e.slice(o + 1, c)), (i = c - o - 1)
                    ;(o = c), (a = 0)
                  } else 46 === r && -1 !== a ? ++a : (a = -1)
                }
                return n
              }
              var i = {
                resolve: function () {
                  for (var e, i = '', o = !1, a = arguments.length - 1; a >= -1 && !o; a--) {
                    var c
                    a >= 0 ? (c = arguments[a]) : (void 0 === e && (e = n.cwd()), (c = e)),
                      t(c),
                      0 !== c.length && ((i = c + '/' + i), (o = 47 === c.charCodeAt(0)))
                  }
                  return (i = r(i, !o)), o ? (i.length > 0 ? '/' + i : '/') : i.length > 0 ? i : '.'
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return '.'
                  var n = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1)
                  return 0 !== (e = r(e, !n)).length || n || (e = '.'), e.length > 0 && i && (e += '/'), n ? '/' + e : e
                },
                isAbsolute: function (e) {
                  return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                },
                join: function () {
                  if (0 === arguments.length) return '.'
                  for (var e, r = 0; r < arguments.length; ++r) {
                    var n = arguments[r]
                    t(n), n.length > 0 && (void 0 === e ? (e = n) : (e += '/' + n))
                  }
                  return void 0 === e ? '.' : i.normalize(e)
                },
                relative: function (e, r) {
                  if ((t(e), t(r), e === r)) return ''
                  if ((e = i.resolve(e)) === (r = i.resolve(r))) return ''
                  for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                  for (var o = e.length, a = o - n, c = 1; c < r.length && 47 === r.charCodeAt(c); ++c);
                  for (var s = r.length - c, l = a < s ? a : s, u = -1, f = 0; f <= l; ++f) {
                    if (f === l) {
                      if (s > l) {
                        if (47 === r.charCodeAt(c + f)) return r.slice(c + f + 1)
                        if (0 === f) return r.slice(c + f)
                      } else a > l && (47 === e.charCodeAt(n + f) ? (u = f) : 0 === f && (u = 0))
                      break
                    }
                    var h = e.charCodeAt(n + f)
                    if (h !== r.charCodeAt(c + f)) break
                    47 === h && (u = f)
                  }
                  var d = ''
                  for (f = n + u + 1; f <= o; ++f) (f !== o && 47 !== e.charCodeAt(f)) || (0 === d.length ? (d += '..') : (d += '/..'))
                  return d.length > 0 ? d + r.slice(c + u) : ((c += u), 47 === r.charCodeAt(c) && ++c, r.slice(c))
                },
                _makeLong: function (e) {
                  return e
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return '.'
                  for (var r = e.charCodeAt(0), n = 47 === r, i = -1, o = !0, a = e.length - 1; a >= 1; --a)
                    if (47 === (r = e.charCodeAt(a))) {
                      if (!o) {
                        i = a
                        break
                      }
                    } else o = !1
                  return -1 === i ? (n ? '/' : '.') : n && 1 === i ? '//' : e.slice(0, i)
                },
                basename: function (e, r) {
                  if (void 0 !== r && 'string' !== typeof r) throw new TypeError('"ext" argument must be a string')
                  t(e)
                  var n,
                    i = 0,
                    o = -1,
                    a = !0
                  if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e) return ''
                    var c = r.length - 1,
                      s = -1
                    for (n = e.length - 1; n >= 0; --n) {
                      var l = e.charCodeAt(n)
                      if (47 === l) {
                        if (!a) {
                          i = n + 1
                          break
                        }
                      } else -1 === s && ((a = !1), (s = n + 1)), c >= 0 && (l === r.charCodeAt(c) ? -1 === --c && (o = n) : ((c = -1), (o = s)))
                    }
                    return i === o ? (o = s) : -1 === o && (o = e.length), e.slice(i, o)
                  }
                  for (n = e.length - 1; n >= 0; --n)
                    if (47 === e.charCodeAt(n)) {
                      if (!a) {
                        i = n + 1
                        break
                      }
                    } else -1 === o && ((a = !1), (o = n + 1))
                  return -1 === o ? '' : e.slice(i, o)
                },
                extname: function (e) {
                  t(e)
                  for (var r = -1, n = 0, i = -1, o = !0, a = 0, c = e.length - 1; c >= 0; --c) {
                    var s = e.charCodeAt(c)
                    if (47 !== s) -1 === i && ((o = !1), (i = c + 1)), 46 === s ? (-1 === r ? (r = c) : 1 !== a && (a = 1)) : -1 !== r && (a = -1)
                    else if (!o) {
                      n = c + 1
                      break
                    }
                  }
                  return -1 === r || -1 === i || 0 === a || (1 === a && r === i - 1 && r === n + 1) ? '' : e.slice(r, i)
                },
                format: function (e) {
                  if (null === e || 'object' !== typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e)
                  return (function (e, t) {
                    var r = t.dir || t.root,
                      n = t.base || (t.name || '') + (t.ext || '')
                    return r ? (r === t.root ? r + n : r + e + n) : n
                  })('/', e)
                },
                parse: function (e) {
                  t(e)
                  var r = { root: '', dir: '', base: '', ext: '', name: '' }
                  if (0 === e.length) return r
                  var n,
                    i = e.charCodeAt(0),
                    o = 47 === i
                  o ? ((r.root = '/'), (n = 1)) : (n = 0)
                  for (var a = -1, c = 0, s = -1, l = !0, u = e.length - 1, f = 0; u >= n; --u)
                    if (47 !== (i = e.charCodeAt(u)))
                      -1 === s && ((l = !1), (s = u + 1)), 46 === i ? (-1 === a ? (a = u) : 1 !== f && (f = 1)) : -1 !== a && (f = -1)
                    else if (!l) {
                      c = u + 1
                      break
                    }
                  return (
                    -1 === a || -1 === s || 0 === f || (1 === f && a === s - 1 && a === c + 1)
                      ? -1 !== s && (r.base = r.name = 0 === c && o ? e.slice(1, s) : e.slice(c, s))
                      : (0 === c && o ? ((r.name = e.slice(1, a)), (r.base = e.slice(1, s))) : ((r.name = e.slice(c, a)), (r.base = e.slice(c, s))),
                        (r.ext = e.slice(a, s))),
                    c > 0 ? (r.dir = e.slice(0, c - 1)) : o && (r.dir = '/'),
                    r
                  )
                },
                sep: '/',
                delimiter: ':',
                win32: null,
                posix: null,
              }
              ;(i.posix = i), (e.exports = i)
            },
          },
          r = {}
        function i(e) {
          var n = r[e]
          if (void 0 !== n) return n.exports
          var o = (r[e] = { exports: {} }),
            a = !0
          try {
            t[e](o, o.exports, i), (a = !1)
          } finally {
            a && delete r[e]
          }
          return o.exports
        }
        i.ab = '//'
        var o = i(977)
        e.exports = o
      })()
    },
    7663: function (e) {
      !(function () {
        var t = {
            162: function (e) {
              var t,
                r,
                n = (e.exports = {})
              function i() {
                throw new Error('setTimeout has not been defined')
              }
              function o() {
                throw new Error('clearTimeout has not been defined')
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0)
                if ((t === i || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
                try {
                  return t(e, 0)
                } catch (n) {
                  try {
                    return t.call(null, e, 0)
                  } catch (n) {
                    return t.call(this, e, 0)
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' === typeof setTimeout ? setTimeout : i
                } catch (e) {
                  t = i
                }
                try {
                  r = 'function' === typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                  r = o
                }
              })()
              var c,
                s = [],
                l = !1,
                u = -1
              function f() {
                l && c && ((l = !1), c.length ? (s = c.concat(s)) : (u = -1), s.length && h())
              }
              function h() {
                if (!l) {
                  var e = a(f)
                  l = !0
                  for (var t = s.length; t; ) {
                    for (c = s, s = []; ++u < t; ) c && c[u].run()
                    ;(u = -1), (t = s.length)
                  }
                  ;(c = null),
                    (l = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e)
                      if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
                      try {
                        r(e)
                      } catch (t) {
                        try {
                          return r.call(null, e)
                        } catch (t) {
                          return r.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function d(e, t) {
                ;(this.fun = e), (this.array = t)
              }
              function g() {}
              ;(n.nextTick = function (e) {
                var t = new Array(arguments.length - 1)
                if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
                s.push(new d(e, t)), 1 !== s.length || l || a(h)
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (n.title = 'browser'),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ''),
                (n.versions = {}),
                (n.on = g),
                (n.addListener = g),
                (n.once = g),
                (n.off = g),
                (n.removeListener = g),
                (n.removeAllListeners = g),
                (n.emit = g),
                (n.prependListener = g),
                (n.prependOnceListener = g),
                (n.listeners = function (e) {
                  return []
                }),
                (n.binding = function (e) {
                  throw new Error('process.binding is not supported')
                }),
                (n.cwd = function () {
                  return '/'
                }),
                (n.chdir = function (e) {
                  throw new Error('process.chdir is not supported')
                }),
                (n.umask = function () {
                  return 0
                })
            },
          },
          r = {}
        function n(e) {
          var i = r[e]
          if (void 0 !== i) return i.exports
          var o = (r[e] = { exports: {} }),
            a = !0
          try {
            t[e](o, o.exports, n), (a = !1)
          } finally {
            a && delete r[e]
          }
          return o.exports
        }
        n.ab = '//'
        var i = n(162)
        e.exports = i
      })()
    },
    9008: function (e, t, r) {
      e.exports = r(5443)
    },
  },
  function (e) {
    e.O(0, [439, 774, 888, 179], function () {
      return (t = 2214), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
