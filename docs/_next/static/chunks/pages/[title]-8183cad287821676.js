;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [133],
  {
    3201: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/[title]',
        function () {
          return n(2727)
        },
      ])
    },
    7192: function (e, t, n) {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      n.d(t, {
        Z: function () {
          return v
        },
      })
      var s = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.dataset = t)
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: 'find',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  return void 0 !== e ? this.dataset.slice(t, t + e) : o(this.dataset)
                },
              },
              {
                key: 'count',
                value: function (e, t) {
                  return this.dataset.filter(function (n) {
                    return n[e] === t
                  }).length
                },
              },
              {
                key: 'sort',
                value: function (e) {
                  return this.dataset.sort(e), this
                },
              },
            ]),
            n && i(t.prototype, n),
            r && i(t, r),
            e
          )
        })(),
        a = s,
        l = n(8286),
        c = n(5500)
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          d(e)
        )
      }
      function h(e, t) {
        return !t || ('object' !== y(t) && 'function' !== typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          p(e, t)
        )
      }
      var y = function (e) {
        return e && 'undefined' !== typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e
      }
      function m(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = d(e)
          if (t) {
            var i = d(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h(this, n)
        }
      }
      var b = (function (e) {
          !(function (e, t) {
            if ('function' !== typeof t && null !== t) throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && p(e, t)
          })(o, e)
          var t,
            n,
            r,
            i = m(o)
          function o() {
            var e
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, o),
              (e = i.call(
                this,
                c.ZP.filter(function (e) {
                  return e.published
                }).map(function (e, t) {
                  return (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n)
                      'function' === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                          })
                        )),
                        r.forEach(function (t) {
                          f(e, t, n[t])
                        })
                    }
                    return e
                  })({}, e, { order: t })
                })
              )),
              e.sort(function (e, t) {
                return e.publishedAt > t.publishedAt ? -1 : e.publishedAt < t.publishedAt ? 1 : t.order - e.order
              }),
              e
            )
          }
          return (
            (t = o),
            (n = [
              {
                key: 'findByTitle',
                value: function (e) {
                  return this.dataset.find(function (t) {
                    return l.Z.normalizeTitle(t.title) === e || t.title === e
                  })
                },
              },
              {
                key: 'hasNewByCategory',
                value: function (e) {
                  return Boolean(
                    this.dataset
                      .filter(function (t) {
                        return t.category === e
                      })
                      .find(function (e) {
                        var t = new Date(e.publishedAt)
                        return t.setDate(t.getDate() + 7) >= Date.now()
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
                value: function (e) {
                  return this.dataset.filter(function (t) {
                    return t.category === e
                  }).length
                },
              },
              {
                key: 'countByTag',
                value: function (e) {
                  return this.dataset.filter(function (t) {
                    return t.tags.includes(e)
                  }).length
                },
              },
              {
                key: 'query',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = e.split(/\s/).map(function (e) {
                      return e.toLowerCase()
                    }),
                    i = this.dataset.filter(function (e) {
                      return r.some(function (t) {
                        return e.title.indexOf(t) >= 0 || e.description.indexOf(t) >= 0 || e.category.indexOf(t) >= 0 || e.tags.join('').indexOf(t) >= 0
                      })
                    })
                  return void 0 !== t ? i.slice(n, n + t) : i
                },
              },
              {
                key: 'findByCategory',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = this.dataset.filter(function (t) {
                      return t.category === e
                    })
                  return void 0 !== t ? r.slice(n, n + t) : r
                },
              },
              {
                key: 'findByNormalizedTitle',
                value: function (e) {
                  return this.dataset.find(function (t) {
                    return l.Z.normalizeTitle(t.title) === e
                  })
                },
              },
            ]),
            n && u(t.prototype, n),
            r && u(t, r),
            o
          )
        })(a),
        v = new b()
    },
    2727: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return k
          },
          default: function () {
            return C
          },
        })
      var r = n(5893),
        i = n(637),
        o = n(7294),
        s = n(8286),
        a = n(6778),
        l = n.n(a)
      function c(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return c(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var f = function (e) {
          var t = e.posts,
            n = (0, o.useState)([]),
            i = n[0],
            a = n[1],
            c = (0, o.useState)([]),
            f = c[0],
            d = c[1]
          return (
            (0, o.useEffect)(
              function () {
                var e = u(t)
                a(e.slice(0, 3)), d(e.slice(3))
              },
              [t]
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)('ul', {
                  className: l().container,
                  children: i.map(function (e) {
                    return (0,
                    r.jsxs)('li', { children: [(0, r.jsx)('h3', { children: e.title }), (0, r.jsx)('a', { href: s.Z.buildLinkURLByTitle(e.title), children: e.description })] }, e.fileName)
                  }),
                }),
                Boolean(f.length) &&
                  (0, r.jsxs)('details', {
                    className: l().details,
                    children: [
                      (0, r.jsx)('summary', { children: '\ub354\ubcf4\uae30' }),
                      (0, r.jsx)('ul', {
                        className: l().container,
                        children: t.map(function (e) {
                          return (0,
                          r.jsxs)('li', { children: [(0, r.jsx)('h3', { children: e.title }), (0, r.jsx)('a', { href: s.Z.buildLinkURLByTitle(e.title), children: e.description })] }, e.fileName)
                        }),
                      }),
                    ],
                  }),
              ],
            })
          )
        },
        d = n(6166),
        h = n(3447),
        p = n(7192),
        y = n(5114),
        m = n.n(y),
        b = function (e) {
          var t,
            n,
            i,
            o,
            a,
            l,
            c = e.post
          return (0, r.jsxs)('ol', {
            className: m().container,
            children: [
              (null === (t = c.series) || void 0 === t ? void 0 : t.prevPostTitle) &&
                (0, r.jsxs)('li', {
                  children: [
                    (0, r.jsxs)('h3', { children: [(0, r.jsx)('span', { children: '\uc774\uc804\uae00 - ' }), c.series.prevPostTitle] }),
                    (0, r.jsx)('a', {
                      href: s.Z.buildLinkURLByTitle(c.series.prevPostTitle),
                      children:
                        (null === (i = p.Z.findByTitle(null === (n = c.series) || void 0 === n ? void 0 : n.prevPostTitle)) || void 0 === i
                          ? void 0
                          : i.description) || '',
                    }),
                  ],
                }),
              (null === (o = c.series) || void 0 === o ? void 0 : o.nextPostTitle) &&
                (0, r.jsxs)('li', {
                  children: [
                    (0, r.jsxs)('h3', { children: [(0, r.jsx)('span', { children: '\ub2e4\uc74c\uae00 - ' }), c.series.nextPostTitle] }),
                    (0, r.jsx)('a', {
                      href: s.Z.buildLinkURLByTitle(c.series.nextPostTitle),
                      children:
                        (null === (l = p.Z.findByTitle(null === (a = c.series) || void 0 === a ? void 0 : a.nextPostTitle)) || void 0 === l
                          ? void 0
                          : l.description) || '',
                    }),
                  ],
                }),
            ],
          })
        },
        v = n(3791),
        g = n.n(v),
        j = function (e) {
          var t = e.repo,
            n = e.issueTerm,
            i = e.theme,
            s = e.issueLabel,
            a = (0, o.useRef)(null)
          return (
            (0, o.useEffect)(
              function () {
                if (a.current) {
                  var e = document.createElement('script')
                  ;(e.src = 'https://utteranc.es/client.js'),
                    (e.crossOrigin = 'anonymous'),
                    (e.async = !0),
                    e.setAttribute('repo', t),
                    e.setAttribute('issue-term', n),
                    e.setAttribute('theme', i),
                    s && e.setAttribute('label', s),
                    a.current.append(e)
                }
              },
              [s, n, t, i]
            ),
            (0, r.jsx)('div', { className: g().utteranceContainer, ref: a })
          )
        },
        _ = n(8145),
        x = n(6678),
        P = n(4111),
        w = n(9443),
        O = n(7427),
        T = n(3494),
        A = n.n(T)
      function S(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function N(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return S(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return S(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var k = !0,
        C = function (e) {
          var t,
            n = e.post,
            a = e.content,
            l = e.postsByCategory,
            c = (0, P.Z)(new Date(n.publishedAt))
          return (
            (0, o.useEffect)(function () {
              i.Z.highlightAll()
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(d.Z, {
                  title: O.Z.buildPageTitle(x.z.POST.TITLE(n.title)),
                  description: x.z.POST.DESCRIPTION(n.title, n.description, n.category, n.tags),
                  url: ''.concat(_.Z.baseURL, '/').concat(s.Z.normalizeTitle(n.title)),
                  imageURL: w.Z.buildImagePath(n.thumbnailName),
                  keywords: N(n.tags).concat([n.title, n.description, n.category]),
                }),
                (0, r.jsxs)('article', {
                  className: A().container,
                  children: [
                    (0, r.jsx)('p', { className: A().publishedAt, children: (0, r.jsx)('span', { children: c }) }),
                    (0, r.jsx)('section', {
                      className: A().thumbnailWrapper,
                      children: (0, r.jsx)('img', { src: w.Z.buildImagePath(n.thumbnailName), alt: n.description }),
                    }),
                    (0, r.jsxs)('section', {
                      children: [(0, r.jsx)('h1', { children: n.title }), (0, r.jsx)('p', { className: A().description, children: n.description })],
                    }),
                    (0, r.jsx)('section', { dangerouslySetInnerHTML: { __html: a } }),
                  ],
                }),
                (0, r.jsx)(h.Z, {}),
                n.series &&
                  (0, r.jsxs)('section', {
                    className: A().relatedPosting,
                    children: [(0, r.jsx)('h2', { children: '\uc5f0\uad00 \ud3ec\uc2a4\ud305' }), (0, r.jsx)(b, { post: n })],
                  }),
                !!l.length &&
                  (0, r.jsxs)('section', {
                    className: A().categoryGroup,
                    children: [(0, r.jsx)('h2', { children: '\uce74\ud14c\uace0\ub9ac \ub354\ubcf4\uae30' }), (0, r.jsx)(f, { posts: l })],
                  }),
                !!(null === (t = n.references) || void 0 === t ? void 0 : t.length) &&
                  (0, r.jsxs)('section', {
                    className: A().references,
                    children: [
                      (0, r.jsx)('h2', { children: '\ucc38\uace0' }),
                      (0, r.jsx)('ul', {
                        className: A().references,
                        children: n.references.map(function (e, t) {
                          return (0,
                          r.jsx)('li', { children: (0, r.jsx)('a', { href: encodeURIComponent(e.url), target: '_blank', rel: 'noreferrer', children: e.title }) }, t)
                        }),
                      }),
                    ],
                  }),
                (0, r.jsxs)('section', {
                  className: A().utterances,
                  children: [
                    (0, r.jsx)('h2', { children: '\ub313\uae00' }),
                    (0, r.jsx)(j, { repo: 'code-logs/code-logs.github.io', theme: 'preferred-color-scheme', issueTerm: 'title', issueLabel: 'Comment' }),
                  ],
                }),
              ],
            })
          )
        }
    },
    6778: function (e) {
      e.exports = { container: 'CategoryPostGroup_container__MDFUe' }
    },
    5114: function (e) {
      e.exports = { container: 'PostSeriesLink_container__jtRUh' }
    },
    3791: function (e) {
      e.exports = { utteranceContainer: 'Utterrances_utteranceContainer__qopWy' }
    },
    3494: function (e) {
      e.exports = {
        thumbnailWrapper: 'PostDetail_thumbnailWrapper__oALCg',
        container: 'PostDetail_container__Ma_26',
        publishedAt: 'PostDetail_publishedAt__7GOQm',
        description: 'PostDetail_description__l6wHC',
        relatedPosting: 'PostDetail_relatedPosting__VlXXV',
        categoryGroup: 'PostDetail_categoryGroup___S2ib',
        references: 'PostDetail_references__EU_hH',
        utterances: 'PostDetail_utterances__jZeOm',
      }
    },
  },
  function (e) {
    e.O(0, [294, 439, 774, 888, 179], function () {
      return (t = 3201), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
