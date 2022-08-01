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
          return b
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
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          f(e)
        )
      }
      function d(e, t) {
        return !t || ('object' !== p(t) && 'function' !== typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function h(e, t) {
        return (
          (h =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          h(e, t)
        )
      }
      var p = function (e) {
        return e && 'undefined' !== typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e
      }
      function y(e) {
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
            r = f(e)
          if (t) {
            var i = f(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return d(this, n)
        }
      }
      var m = (function (e) {
          !(function (e, t) {
            if ('function' !== typeof t && null !== t) throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && h(e, t)
          })(o, e)
          var t,
            n,
            r,
            i = y(o)
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
                })
              )).sort(function (e, t) {
                return new Date(e.publishedAt) > new Date(t.publishedAt) ? -1 : 1
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
        b = new m()
    },
    2727: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return O
          },
          default: function () {
            return S
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
                (0, r.jsx)('dl', {
                  className: l().container,
                  children: i.map(function (e) {
                    return (0,
                    r.jsxs)('a', { href: s.Z.buildLinkURLByTitle(e.title), children: [(0, r.jsx)('dt', { children: (0, r.jsx)('h3', { children: e.title }) }), (0, r.jsx)('dd', { children: e.description })] }, e.fileName)
                  }),
                }),
                !!f.length &&
                  (0, r.jsxs)('details', {
                    className: l().details,
                    children: [
                      (0, r.jsx)('summary', { children: '\ub354\ubcf4\uae30' }),
                      (0, r.jsx)('dl', {
                        className: l().container,
                        children: t.map(function (e) {
                          return (0,
                          r.jsxs)('a', { href: s.Z.buildLinkURLByTitle(e.title), children: [(0, r.jsx)('dt', { children: (0, r.jsx)('h3', { children: e.title }) }), (0, r.jsx)('dd', { children: e.description })] }, e.fileName)
                        }),
                      }),
                    ],
                  }),
              ],
            })
          )
        },
        d = n(6166),
        h = n(1780),
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
          return (0, r.jsxs)('dl', {
            className: m().container,
            children: [
              (null === (t = c.series) || void 0 === t ? void 0 : t.prevPostTitle) &&
                (0, r.jsxs)('a', {
                  href: s.Z.buildLinkURLByTitle(c.series.prevPostTitle),
                  children: [
                    (0, r.jsxs)('dt', {
                      children: [(0, r.jsx)('span', { children: '\uc774\uc804\uae00 - ' }), (0, r.jsx)('h3', { children: c.series.prevPostTitle })],
                    }),
                    (0, r.jsx)('dd', {
                      children:
                        (null === (i = p.Z.findByTitle(null === (n = c.series) || void 0 === n ? void 0 : n.prevPostTitle)) || void 0 === i
                          ? void 0
                          : i.description) || '',
                    }),
                  ],
                }),
              (null === (o = c.series) || void 0 === o ? void 0 : o.nextPostTitle) &&
                (0, r.jsxs)('a', {
                  href: s.Z.buildLinkURLByTitle(c.series.nextPostTitle),
                  children: [
                    (0, r.jsxs)('dt', {
                      children: [(0, r.jsx)('span', { children: '\ub2e4\uc74c\uae00 - ' }), (0, r.jsx)('h3', { children: c.series.nextPostTitle })],
                    }),
                    (0, r.jsx)('dd', {
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
        v = function (e) {
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
            (0, r.jsx)('div', { ref: a })
          )
        },
        g = n(8145),
        j = n(4111),
        x = n(9443),
        _ = n(7427),
        w = n(3494),
        A = n.n(w)
      function P(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function T(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return P(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return P(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var O = !0,
        S = function (e) {
          var t,
            n = e.post,
            a = e.content,
            l = e.postsByCategory,
            c = (0, j.Z)(new Date(n.publishedAt))
          return (
            (0, o.useEffect)(function () {
              i.Z.highlightAll()
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(d.Z, {
                  title: _.Z.buildPageTitle(n.title),
                  description: n.description,
                  url: ''.concat(g.Z.baseURL, '/').concat(s.Z.normalizeTitle(n.title)),
                  imageURL: x.Z.buildImagePath(n.thumbnailName),
                  keywords: T(n.tags).concat([n.title, n.description, n.category]),
                }),
                (0, r.jsxs)('article', {
                  className: A().container,
                  children: [
                    (0, r.jsx)('p', { className: A().publishedAt, children: (0, r.jsx)('span', { children: c }) }),
                    (0, r.jsx)('section', {
                      className: A().thumbnailWrapper,
                      children: (0, r.jsx)('img', { src: x.Z.buildImagePath(n.thumbnailName), alt: n.description }),
                    }),
                    (0, r.jsxs)('section', {
                      children: [(0, r.jsx)('h1', { children: n.title }), (0, r.jsx)('p', { className: A().description, children: n.description })],
                    }),
                    (0, r.jsx)('section', { dangerouslySetInnerHTML: { __html: a } }),
                  ],
                }),
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
                          return (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: e.url, target: '_blank', rel: 'noreferrer', children: e.title }) }, t)
                        }),
                      }),
                    ],
                  }),
                (0, r.jsxs)('section', {
                  className: A().utterances,
                  children: [
                    (0, r.jsx)('h2', { children: '\ub313\uae00' }),
                    (0, r.jsx)(v, { repo: 'code-logs/code-logs.github.io', theme: 'preferred-color-scheme', issueTerm: 'title', issueLabel: 'Comment' }),
                  ],
                }),
                (0, r.jsx)(h.Z, { adClient: g.Z.googleAdsense.adClient, adSlot: '5391522351' }),
              ],
            })
          )
        }
    },
    6778: function (e) {
      e.exports = { container: 'CategoryPostGroup_container__MDFUe', details: 'CategoryPostGroup_details__S_rtz' }
    },
    5114: function (e) {
      e.exports = { container: 'PostSeriesLink_container__jtRUh' }
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
    e.O(0, [294, 377, 774, 888, 179], function () {
      return (t = 3201), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
