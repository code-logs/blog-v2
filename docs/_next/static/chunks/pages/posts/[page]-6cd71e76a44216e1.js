;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [410],
  {
    122: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/posts/[page]',
        function () {
          return n(8118)
        },
      ])
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
          return g
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
        u = a,
        c = n(8286),
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
      function p(t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          p(t)
        )
      }
      function y(t, e) {
        return !e || ('object' !== h(e) && 'function' !== typeof e)
          ? (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return t
            })(t)
          : e
      }
      function d(t, e) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          d(t, e)
        )
      }
      var h = function (t) {
        return t && 'undefined' !== typeof Symbol && t.constructor === Symbol ? 'symbol' : typeof t
      }
      function b(t) {
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
            r = p(t)
          if (e) {
            var o = p(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y(this, n)
        }
      }
      var v = (function (t) {
          !(function (t, e) {
            if ('function' !== typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
            ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && d(t, e)
          })(i, t)
          var e,
            n,
            r,
            o = b(i)
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
                    return c.Z.normalizeTitle(e.title) === t || e.title === t
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
                    return c.Z.normalizeTitle(e.title) === t
                  })
                },
              },
            ]),
            n && s(e.prototype, n),
            r && s(e, r),
            i
          )
        })(u),
        g = new v()
    },
    8118: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return j
          },
          default: function () {
            return P
          },
        })
      var r = n(5893),
        o = n(1163),
        i = n(7294),
        a = n(6166),
        u = n(9337),
        c = n(4351),
        l = (0, n(7026).Z)(
          (0, r.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
          }),
          'SearchRounded'
        ),
        s = n(3337),
        f = n.n(s)
      function p(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
      }
      function y(t) {
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
              p(t, e, n[e])
            })
        }
        return t
      }
      var d = function (t) {
          return (0, r.jsxs)('label', {
            className: f().label,
            children: [(0, r.jsx)(l, { className: f().icon }), (0, r.jsx)('input', y({ className: f().input }, t))],
          })
        },
        h = n(8145),
        b = n(6678),
        v = n(7192),
        g = n(9443),
        m = n(7427),
        O = n(7498),
        w = n.n(O)
      function S(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function _(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return S(t)
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (!t) return
            if ('string' === typeof t) return S(t, e)
            var n = Object.prototype.toString.call(t).slice(8, -1)
            'Object' === n && t.constructor && (n = t.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(t, e)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var j = !0,
        P = function (t) {
          var e = t.page,
            n = t.totalCount,
            l = (0, i.useState)(t.lastPage),
            s = l[0],
            f = l[1],
            p = (0, i.useState)(t.posts),
            y = p[0],
            O = p[1],
            S = (0, i.useState)(),
            j = S[0],
            P = S[1],
            x = (0, o.useRouter)()
          return (
            (0, i.useEffect)(
              function () {
                var n = new URL(g.Z.absolutePath(x.asPath))
                if (n.search) {
                  var r = new URLSearchParams(n.search).get('query')
                  if (r) {
                    P(encodeURIComponent(r))
                    var o = h.Z.pageLimit,
                      i = (e - 1) * o
                    O(v.Z.query(r, o, i)), f(Math.ceil(v.Z.query(r).length / o))
                  }
                } else f(t.lastPage), O(t.posts), P(void 0)
              },
              [e, x, t.lastPage, t.posts]
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(a.Z, {
                  title: m.Z.buildPageTitle(b.z.POSTS.TITLE),
                  description: b.z.POSTS.DESCRIPTION(e),
                  url: ''.concat(h.Z.baseURL, '/posts/').concat(e),
                  imageURL: '/icons/icon-512x512.png',
                  keywords: y
                    .map(function (t) {
                      return _(t.tags).concat([t.title, t.description])
                    })
                    .flat(),
                }),
                (0, r.jsxs)('span', { className: w().totalCount, children: ['Total posts ', n] }),
                (0, r.jsx)('h1', { children: 'Posts ' }),
                (0, r.jsx)('form', {
                  onSubmit: function (t) {
                    t.preventDefault()
                    var e = t.currentTarget,
                      n = new FormData(e).get('query')
                    if (n) {
                      var r = new URL(location.href)
                      ;(r.pathname = '/posts/1'), (r.search = 'query='.concat(encodeURIComponent(n.toString()))), x.push(r.href)
                    }
                  },
                  children: (0, r.jsx)(d, { placeholder: 'Search...', name: 'query', defaultValue: j && decodeURIComponent(j) }),
                }),
                (0, r.jsx)(c.Z, { titleLevel: 2, posts: y }),
                (0, r.jsx)(u.Z, { page: e, lastPage: s, query: j, baseURL: ''.concat(h.Z.baseURL, '/posts') }),
              ],
            })
          )
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
    7498: function (t) {
      t.exports = { totalCount: 'Posts_totalCount__8nFES' }
    },
  },
  function (t) {
    t.O(0, [117, 495, 774, 888, 179], function () {
      return (e = 122), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
