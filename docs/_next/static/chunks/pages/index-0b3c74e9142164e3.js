;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    3454: function (e, t, n) {
      'use strict'
      var r, i
      e.exports =
        (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) && 'object' === typeof (null === (i = n.g.process) || void 0 === i ? void 0 : i.env)
          ? n.g.process
          : n(7663)
    },
    5301: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(1739)
        },
      ])
    },
    7221: function (e, t, n) {
      'use strict'
      var r = n(5893),
        i = n(1664),
        s = n(4111),
        o = n(9443),
        a = n(8286),
        c = n(7594),
        l = n(7828),
        u = n.n(l)
      t.Z = function (e) {
        var t = e.titleLevel,
          n = void 0 === t ? 3 : t,
          l = e.post,
          h = (0, s.Z)(new Date(l.publishedAt))
        return (0, r.jsxs)('article', {
          className: u().card,
          children: [
            (0, r.jsx)(i.default, {
              href: a.Z.buildLinkURLByTitle(l.title),
              children: (0, r.jsxs)('a', {
                className: u().title,
                children: [
                  1 === n && (0, r.jsx)('h1', { children: l.title }),
                  2 === n && (0, r.jsx)('h2', { children: l.title }),
                  3 === n && (0, r.jsx)('h3', { children: l.title }),
                ],
              }),
            }),
            (0, r.jsx)('span', { className: u().category, children: l.category }),
            (0, r.jsx)('span', { className: u().publishedAt, children: h }),
            (0, r.jsx)(i.default, {
              href: a.Z.buildLinkURLByTitle(l.title),
              children: (0, r.jsx)('a', { className: u().description, children: (0, r.jsx)('p', { children: l.description }) }),
            }),
            l.thumbnailName &&
              (0, r.jsx)('div', {
                className: u().thumbnail,
                children: (0, r.jsx)(i.default, {
                  href: a.Z.buildLinkURLByTitle(l.title),
                  children: (0, r.jsx)('a', {
                    children: (0, r.jsx)('img', { className: 'thumbnail', src: o.Z.buildImagePath(l.thumbnailName), alt: l.description }),
                  }),
                }),
              }),
            (0, r.jsx)('section', { className: u().tags, children: (0, r.jsx)(c.Z, { tags: l.tags }) }),
          ],
        })
      }
    },
    7594: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return h
        },
      })
      var r = n(5893),
        i = n(1664),
        s = n(8145),
        o = n(2002),
        a = n.n(o),
        c = function (e) {
          return (0, r.jsx)(i.default, {
            href: ''.concat(s.Z.baseURL, '/posts/1?query=').concat(encodeURI(e.tag)),
            children: (0, r.jsx)('a', { children: (0, r.jsxs)('span', { className: a().tag, children: [e.tag, ' ', e.count && e.count] }) }),
          })
        },
        l = n(8193),
        u = n.n(l),
        h = function (e) {
          return (0, r.jsx)('ul', {
            className: u().tags,
            children: e.tags.map(function (e, t) {
              return (0, r.jsx)('li', { children: 'string' === typeof e ? (0, r.jsx)(c, { tag: e }) : (0, r.jsx)(c, { tag: e.tag, count: e.count }) }, t)
            }),
          })
        }
    },
    5505: function (e, t, n) {
      'use strict'
      var r = n(5893),
        i = n(7260),
        s = n.n(i)
      t.Z = function (e) {
        var t = (0, r.jsxs)(r.Fragment, { children: [e.title, ' ', (0, r.jsxs)('span', { className: s().postCount, children: ['(', e.count, ')'] })] })
        switch (e.level) {
          case 1:
          default:
            return (0, r.jsx)('h1', { children: t })
          case 2:
            return (0, r.jsx)('h2', { children: t })
          case 3:
            return (0, r.jsx)('h3', { children: t })
        }
      }
    },
    1739: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return y
          },
          default: function () {
            return C
          },
        })
      var r = n(5893),
        i = n(1664),
        s = n(8145),
        o = n(2698),
        a = n(2631),
        c = n.n(a),
        l = function (e) {
          return (0, r.jsxs)('section', {
            className: c().container,
            children: [
              (0, r.jsx)('h2', { children: 'Categories' }),
              (0, r.jsx)('ul', {
                children: e.categories.map(function (e, t) {
                  return (0,
                  r.jsx)('li', { children: (0, r.jsx)(i.default, { href: ''.concat(s.Z.baseURL, '/categories/').concat(encodeURI(e), '/1'), children: (0, r.jsxs)('a', { children: [o.Z.hasNewByCategory(e) && (0, r.jsx)('span', { className: c().newTag, children: 'New' }), (0, r.jsx)('span', { className: c().category, children: e }), (0, r.jsx)('span', { className: c().count, children: (0, r.jsx)('span', { children: o.Z.countByCategory(e) }) })] }) }) }, t)
                }),
              }),
            ],
          })
        },
        u = n(6166),
        h = n(1780),
        d = n(7221),
        f = n(5505),
        g = function (e) {
          return (0, r.jsxs)('section', {
            children: [
              (0, r.jsx)(f.Z, { level: 2, count: e.posts.length, title: 'Recent posts' }),
              e.posts.map(function (e, t) {
                return (0, r.jsx)(d.Z, { post: e }, t)
              }),
            ],
          })
        },
        x = n(7594),
        p = n(9284),
        v = n.n(p),
        m = function (e) {
          var t = e.tagsWithCount,
            n = e.limit,
            s = void 0 === n ? 10 : n
          return (
            t.sort(function (e, t) {
              return t.count - e.count
            }),
            (0, r.jsxs)('section', {
              children: [
                (0, r.jsxs)('h2', {
                  children: [
                    'Tags',
                    (0, r.jsx)(i.default, {
                      href: '/tags',
                      children: (0, r.jsx)('a', { className: v().seeMore, children: (0, r.jsx)('span', { children: 'See more tags' }) }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', { className: v().container, children: (0, r.jsx)(x.Z, { tags: t.slice(0, s) }) }),
              ],
            })
          )
        },
        _ = n(7427),
        j = n(3447),
        b = n.n(j),
        y = !0,
        C = function (e) {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(u.Z, {
                title: _.Z.buildPageTitle('Home'),
                description: 'Code Logs\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601 \ud569\ub2c8\ub2e4.',
                keywords: ['Code Logs', 'Web', 'Development', 'Web development'],
                url: s.Z.baseURL,
                imageURL: '/icons/icon-512x512.png',
              }),
              (0, r.jsx)('h1', { children: 'Home' }),
              (0, r.jsx)(g, { posts: e.recentPosts }),
              (0, r.jsxs)('div', {
                className: b().index,
                children: [(0, r.jsx)(l, { categories: e.categories }), (0, r.jsx)(m, { tagsWithCount: e.tagsWithCount, limit: 20 })],
              }),
              (0, r.jsx)(h.Z, { adClient: s.Z.googleAdsense.adClient, adSlot: '5391522351' }),
            ],
          })
        }
    },
    2631: function (e) {
      e.exports = {
        container: 'CategoryIndexer_container__SsHDd',
        category: 'CategoryIndexer_category__oIIbg',
        newTag: 'CategoryIndexer_newTag__Lgzq_',
        count: 'CategoryIndexer_count__QQ7wP',
      }
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
    9284: function (e) {
      e.exports = { seeMore: 'TagIndexer_seeMore__s6M9v', container: 'TagIndexer_container__jyFkf' }
    },
    2002: function (e) {
      e.exports = { tag: 'Tag_tag__tXphA' }
    },
    8193: function (e) {
      e.exports = { tags: 'Tags_tags__mhykw' }
    },
    7260: function (e) {
      e.exports = { postCount: 'TitleWithCount_postCount__E9bRh' }
    },
    3447: function (e) {
      e.exports = { index: 'Home_index__AH1Ds' }
    },
    1864: function (e, t, n) {
      var r = n(3454)
      !(function () {
        'use strict'
        var t = {
            977: function (e) {
              function t(e) {
                if ('string' !== typeof e) throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
              }
              function n(e, t) {
                for (var n, r = '', i = 0, s = -1, o = 0, a = 0; a <= e.length; ++a) {
                  if (a < e.length) n = e.charCodeAt(a)
                  else {
                    if (47 === n) break
                    n = 47
                  }
                  if (47 === n) {
                    if (s === a - 1 || 1 === o);
                    else if (s !== a - 1 && 2 === o) {
                      if (r.length < 2 || 2 !== i || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2))
                        if (r.length > 2) {
                          var c = r.lastIndexOf('/')
                          if (c !== r.length - 1) {
                            ;-1 === c ? ((r = ''), (i = 0)) : (i = (r = r.slice(0, c)).length - 1 - r.lastIndexOf('/')), (s = a), (o = 0)
                            continue
                          }
                        } else if (2 === r.length || 1 === r.length) {
                          ;(r = ''), (i = 0), (s = a), (o = 0)
                          continue
                        }
                      t && (r.length > 0 ? (r += '/..') : (r = '..'), (i = 2))
                    } else r.length > 0 ? (r += '/' + e.slice(s + 1, a)) : (r = e.slice(s + 1, a)), (i = a - s - 1)
                    ;(s = a), (o = 0)
                  } else 46 === n && -1 !== o ? ++o : (o = -1)
                }
                return r
              }
              var i = {
                resolve: function () {
                  for (var e, i = '', s = !1, o = arguments.length - 1; o >= -1 && !s; o--) {
                    var a
                    o >= 0 ? (a = arguments[o]) : (void 0 === e && (e = r.cwd()), (a = e)),
                      t(a),
                      0 !== a.length && ((i = a + '/' + i), (s = 47 === a.charCodeAt(0)))
                  }
                  return (i = n(i, !s)), s ? (i.length > 0 ? '/' + i : '/') : i.length > 0 ? i : '.'
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return '.'
                  var r = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1)
                  return 0 !== (e = n(e, !r)).length || r || (e = '.'), e.length > 0 && i && (e += '/'), r ? '/' + e : e
                },
                isAbsolute: function (e) {
                  return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                },
                join: function () {
                  if (0 === arguments.length) return '.'
                  for (var e, n = 0; n < arguments.length; ++n) {
                    var r = arguments[n]
                    t(r), r.length > 0 && (void 0 === e ? (e = r) : (e += '/' + r))
                  }
                  return void 0 === e ? '.' : i.normalize(e)
                },
                relative: function (e, n) {
                  if ((t(e), t(n), e === n)) return ''
                  if ((e = i.resolve(e)) === (n = i.resolve(n))) return ''
                  for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
                  for (var s = e.length, o = s - r, a = 1; a < n.length && 47 === n.charCodeAt(a); ++a);
                  for (var c = n.length - a, l = o < c ? o : c, u = -1, h = 0; h <= l; ++h) {
                    if (h === l) {
                      if (c > l) {
                        if (47 === n.charCodeAt(a + h)) return n.slice(a + h + 1)
                        if (0 === h) return n.slice(a + h)
                      } else o > l && (47 === e.charCodeAt(r + h) ? (u = h) : 0 === h && (u = 0))
                      break
                    }
                    var d = e.charCodeAt(r + h)
                    if (d !== n.charCodeAt(a + h)) break
                    47 === d && (u = h)
                  }
                  var f = ''
                  for (h = r + u + 1; h <= s; ++h) (h !== s && 47 !== e.charCodeAt(h)) || (0 === f.length ? (f += '..') : (f += '/..'))
                  return f.length > 0 ? f + n.slice(a + u) : ((a += u), 47 === n.charCodeAt(a) && ++a, n.slice(a))
                },
                _makeLong: function (e) {
                  return e
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return '.'
                  for (var n = e.charCodeAt(0), r = 47 === n, i = -1, s = !0, o = e.length - 1; o >= 1; --o)
                    if (47 === (n = e.charCodeAt(o))) {
                      if (!s) {
                        i = o
                        break
                      }
                    } else s = !1
                  return -1 === i ? (r ? '/' : '.') : r && 1 === i ? '//' : e.slice(0, i)
                },
                basename: function (e, n) {
                  if (void 0 !== n && 'string' !== typeof n) throw new TypeError('"ext" argument must be a string')
                  t(e)
                  var r,
                    i = 0,
                    s = -1,
                    o = !0
                  if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                    if (n.length === e.length && n === e) return ''
                    var a = n.length - 1,
                      c = -1
                    for (r = e.length - 1; r >= 0; --r) {
                      var l = e.charCodeAt(r)
                      if (47 === l) {
                        if (!o) {
                          i = r + 1
                          break
                        }
                      } else -1 === c && ((o = !1), (c = r + 1)), a >= 0 && (l === n.charCodeAt(a) ? -1 === --a && (s = r) : ((a = -1), (s = c)))
                    }
                    return i === s ? (s = c) : -1 === s && (s = e.length), e.slice(i, s)
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!o) {
                        i = r + 1
                        break
                      }
                    } else -1 === s && ((o = !1), (s = r + 1))
                  return -1 === s ? '' : e.slice(i, s)
                },
                extname: function (e) {
                  t(e)
                  for (var n = -1, r = 0, i = -1, s = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                    var c = e.charCodeAt(a)
                    if (47 !== c) -1 === i && ((s = !1), (i = a + 1)), 46 === c ? (-1 === n ? (n = a) : 1 !== o && (o = 1)) : -1 !== n && (o = -1)
                    else if (!s) {
                      r = a + 1
                      break
                    }
                  }
                  return -1 === n || -1 === i || 0 === o || (1 === o && n === i - 1 && n === r + 1) ? '' : e.slice(n, i)
                },
                format: function (e) {
                  if (null === e || 'object' !== typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e)
                  return (function (e, t) {
                    var n = t.dir || t.root,
                      r = t.base || (t.name || '') + (t.ext || '')
                    return n ? (n === t.root ? n + r : n + e + r) : r
                  })('/', e)
                },
                parse: function (e) {
                  t(e)
                  var n = { root: '', dir: '', base: '', ext: '', name: '' }
                  if (0 === e.length) return n
                  var r,
                    i = e.charCodeAt(0),
                    s = 47 === i
                  s ? ((n.root = '/'), (r = 1)) : (r = 0)
                  for (var o = -1, a = 0, c = -1, l = !0, u = e.length - 1, h = 0; u >= r; --u)
                    if (47 !== (i = e.charCodeAt(u)))
                      -1 === c && ((l = !1), (c = u + 1)), 46 === i ? (-1 === o ? (o = u) : 1 !== h && (h = 1)) : -1 !== o && (h = -1)
                    else if (!l) {
                      a = u + 1
                      break
                    }
                  return (
                    -1 === o || -1 === c || 0 === h || (1 === h && o === c - 1 && o === a + 1)
                      ? -1 !== c && (n.base = n.name = 0 === a && s ? e.slice(1, c) : e.slice(a, c))
                      : (0 === a && s ? ((n.name = e.slice(1, o)), (n.base = e.slice(1, c))) : ((n.name = e.slice(a, o)), (n.base = e.slice(a, c))),
                        (n.ext = e.slice(o, c))),
                    a > 0 ? (n.dir = e.slice(0, a - 1)) : s && (n.dir = '/'),
                    n
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
          n = {}
        function i(e) {
          var r = n[e]
          if (void 0 !== r) return r.exports
          var s = (n[e] = { exports: {} }),
            o = !0
          try {
            t[e](s, s.exports, i), (o = !1)
          } finally {
            o && delete n[e]
          }
          return s.exports
        }
        i.ab = '//'
        var s = i(977)
        e.exports = s
      })()
    },
    7663: function (e) {
      !(function () {
        var t = {
            162: function (e) {
              var t,
                n,
                r = (e.exports = {})
              function i() {
                throw new Error('setTimeout has not been defined')
              }
              function s() {
                throw new Error('clearTimeout has not been defined')
              }
              function o(e) {
                if (t === setTimeout) return setTimeout(e, 0)
                if ((t === i || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
                try {
                  return t(e, 0)
                } catch (r) {
                  try {
                    return t.call(null, e, 0)
                  } catch (r) {
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
                  n = 'function' === typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                  n = s
                }
              })()
              var a,
                c = [],
                l = !1,
                u = -1
              function h() {
                l && a && ((l = !1), a.length ? (c = a.concat(c)) : (u = -1), c.length && d())
              }
              function d() {
                if (!l) {
                  var e = o(h)
                  l = !0
                  for (var t = c.length; t; ) {
                    for (a = c, c = []; ++u < t; ) a && a[u].run()
                    ;(u = -1), (t = c.length)
                  }
                  ;(a = null),
                    (l = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e)
                      if ((n === s || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e)
                      try {
                        n(e)
                      } catch (t) {
                        try {
                          return n.call(null, e)
                        } catch (t) {
                          return n.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function f(e, t) {
                ;(this.fun = e), (this.array = t)
              }
              function g() {}
              ;(r.nextTick = function (e) {
                var t = new Array(arguments.length - 1)
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
                c.push(new f(e, t)), 1 !== c.length || l || o(d)
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (r.title = 'browser'),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ''),
                (r.versions = {}),
                (r.on = g),
                (r.addListener = g),
                (r.once = g),
                (r.off = g),
                (r.removeListener = g),
                (r.removeAllListeners = g),
                (r.emit = g),
                (r.prependListener = g),
                (r.prependOnceListener = g),
                (r.listeners = function (e) {
                  return []
                }),
                (r.binding = function (e) {
                  throw new Error('process.binding is not supported')
                }),
                (r.cwd = function () {
                  return '/'
                }),
                (r.chdir = function (e) {
                  throw new Error('process.chdir is not supported')
                }),
                (r.umask = function () {
                  return 0
                })
            },
          },
          n = {}
        function r(e) {
          var i = n[e]
          if (void 0 !== i) return i.exports
          var s = (n[e] = { exports: {} }),
            o = !0
          try {
            t[e](s, s.exports, r), (o = !1)
          } finally {
            o && delete n[e]
          }
          return s.exports
        }
        r.ab = '//'
        var i = r(162)
        e.exports = i
      })()
    },
    9008: function (e, t, n) {
      e.exports = n(5443)
    },
  },
  function (e) {
    e.O(0, [992, 774, 888, 179], function () {
      return (t = 5301), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
