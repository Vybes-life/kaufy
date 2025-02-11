document.addEventListener('DOMContentLoaded', () => {
  const widget = document.querySelector('kaufy-ai');
  if (widget) {
    
    widget.addEventListener('kaufy-ai:call', (event) => {
      event.detail.config.clientTools = {
        
        RE_DIRECT: ({ url }) => {
          window.open(url, '_blank', 'noopener,noreferrer');
        },
        
        redirectToEmailSupport: ({ subject, body, email }) => {
          const encodedSubject = encodeURIComponent(subject);
          const encodedBody = encodeURIComponent(body);
          window.open(
            `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`,
            '_blank'
          );
        },
      };
    });
  }
});



(function (se) {
  typeof define == "function" && define.amd ? define(se) : se();
})(function () {
  "use strict";
  var xu = Object.defineProperty;
  var Cu = (se, N, qe) =>
    N in se
      ? xu(se, N, { enumerable: !0, configurable: !0, writable: !0, value: qe })
      : (se[N] = qe);
  var Ne = (se, N, qe) => Cu(se, typeof N != "symbol" ? N + "" : N, qe);
  



  const kau = (function(){
    const shift = 3;
    const encoded = [104,111,104,121,104,113,111,100,101,118,49,108,114];
    return encoded.map(c => String.fromCharCode(c - shift)).join('');
})();
  var se,
    N,
    qe,
    Ke,
    no,
    oo,
    Qt,
    en,
    tn,
    nn,
    ro,
    dt = {},
    io = [],
    Gi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Ct = Array.isArray;
  function Ce(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function ao(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function U(e, t, n) {
    var o,
      r,
      i,
      a = {};
    for (i in t)
      i == "key" ? (o = t[i]) : i == "ref" ? (r = t[i]) : (a[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? se.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
    return ft(e, a, o, r, null);
  }
  function ft(e, t, n, o, r) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: r ?? ++qe,
      __i: -1,
      __u: 0,
    };
    return r == null && N.vnode != null && N.vnode(i), i;
  }
  function so() {
    return { current: null };
  }
  function oe(e) {
    return e.children;
  }
  function pe(e, t) {
    (this.props = e), (this.context = t);
  }
  function Ye(e, t) {
    if (t == null) return e.__ ? Ye(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? Ye(e) : null;
  }
  function lo(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return lo(e);
    }
  }
  function on(e) {
    ((!e.__d && (e.__d = !0) && Ke.push(e) && !St.__r++) ||
      no !== N.debounceRendering) &&
      ((no = N.debounceRendering) || oo)(St);
  }
  function St() {
    var e, t, n, o, r, i, a, s;
    for (Ke.sort(Qt); (e = Ke.shift()); )
      e.__d &&
        ((t = Ke.length),
        (o = void 0),
        (i = (r = (n = e).__v).__e),
        (a = []),
        (s = []),
        n.__P &&
          (((o = Ce({}, r)).__v = r.__v + 1),
          N.vnode && N.vnode(o),
          rn(
            n.__P,
            o,
            r,
            n.__n,
            n.__P.ownerSVGElement !== void 0,
            32 & r.__u ? [i] : null,
            a,
            i ?? Ye(r),
            !!(32 & r.__u),
            s
          ),
          (o.__v = r.__v),
          (o.__.__k[o.__i] = o),
          ho(a, o, s),
          o.__e != i && lo(o)),
        Ke.length > t && Ke.sort(Qt));
    St.__r = 0;
  }
  function co(e, t, n, o, r, i, a, s, c, l, d) {
    var u,
      _,
      p,
      y,
      f,
      m = (o && o.__k) || io,
      v = t.length;
    for (n.__d = c, Xi(n, t, m), c = n.__d, u = 0; u < v; u++)
      (p = n.__k[u]) != null &&
        typeof p != "boolean" &&
        typeof p != "function" &&
        ((_ = p.__i === -1 ? dt : m[p.__i] || dt),
        (p.__i = u),
        rn(e, p, _, r, i, a, s, c, l, d),
        (y = p.__e),
        p.ref &&
          _.ref != p.ref &&
          (_.ref && an(_.ref, null, p), d.push(p.ref, p.__c || y, p)),
        f == null && y != null && (f = y),
        65536 & p.__u || _.__k === p.__k
          ? (c && !c.isConnected && (c = Ye(_)), (c = uo(p, c, e)))
          : typeof p.type == "function" && p.__d !== void 0
          ? (c = p.__d)
          : y && (c = y.nextSibling),
        (p.__d = void 0),
        (p.__u &= -196609));
    (n.__d = c), (n.__e = f);
  }
  function Xi(e, t, n) {
    var o,
      r,
      i,
      a,
      s,
      c = t.length,
      l = n.length,
      d = l,
      u = 0;
    for (e.__k = [], o = 0; o < c; o++)
      (a = o + u),
        (r = e.__k[o] =
          (r = t[o]) == null || typeof r == "boolean" || typeof r == "function"
            ? null
            : typeof r == "string" ||
              typeof r == "number" ||
              typeof r == "bigint" ||
              r.constructor == String
            ? ft(null, r, null, null, null)
            : Ct(r)
            ? ft(oe, { children: r }, null, null, null)
            : r.constructor === void 0 && r.__b > 0
            ? ft(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
            : r) != null
          ? ((r.__ = e),
            (r.__b = e.__b + 1),
            (s = Zi(r, n, a, d)),
            (r.__i = s),
            (i = null),
            s !== -1 && (d--, (i = n[s]) && (i.__u |= 131072)),
            i == null || i.__v === null
              ? (s == -1 && u--,
                typeof r.type != "function" && (r.__u |= 65536))
              : s !== a &&
                (s === a + 1
                  ? u++
                  : s > a
                  ? d > c - a
                    ? (u += s - a)
                    : u--
                  : s < a
                  ? s == a - 1 && (u = s - a)
                  : (u = 0),
                s !== o + u && (r.__u |= 65536)))
          : (i = n[a]) &&
            i.key == null &&
            i.__e &&
            !(131072 & i.__u) &&
            (i.__e == e.__d && (e.__d = Ye(i)),
            sn(i, i, !1),
            (n[a] = null),
            d--);
    if (d)
      for (o = 0; o < l; o++)
        (i = n[o]) != null &&
          !(131072 & i.__u) &&
          (i.__e == e.__d && (e.__d = Ye(i)), sn(i, i));
  }
  function uo(e, t, n) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && ((o[r].__ = e), (t = uo(o[r], t, n)));
      return t;
    }
    e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType === 8);
    return t;
  }
  function Se(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (Ct(e)
          ? e.some(function (n) {
              Se(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function Zi(e, t, n, o) {
    var r = e.key,
      i = e.type,
      a = n - 1,
      s = n + 1,
      c = t[n];
    if (c === null || (c && r == c.key && i === c.type && !(131072 & c.__u)))
      return n;
    if (o > (c != null && !(131072 & c.__u) ? 1 : 0))
      for (; a >= 0 || s < t.length; ) {
        if (a >= 0) {
          if ((c = t[a]) && !(131072 & c.__u) && r == c.key && i === c.type)
            return a;
          a--;
        }
        if (s < t.length) {
          if ((c = t[s]) && !(131072 & c.__u) && r == c.key && i === c.type)
            return s;
          s++;
        }
      }
    return -1;
  }
  function fo(e, t, n) {
    t[0] === "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null ? "" : typeof n != "number" || Gi.test(t) ? n : n + "px");
  }
  function Et(e, t, n, o, r) {
    var i;
    e: if (t === "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof o == "string" && (e.style.cssText = o = ""), o))
          for (t in o) (n && t in n) || fo(e.style, t, "");
        if (n) for (t in n) (o && n[t] === o[t]) || fo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
        (t =
          t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
            ? t.toLowerCase().slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? o
            ? (n.u = o.u)
            : ((n.u = en), e.addEventListener(t, i ? nn : tn, i))
          : e.removeEventListener(t, i ? nn : tn, i);
    else {
      if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] !== "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function po(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = en++;
        else if (t.t < n.u) return;
        return n(N.event ? N.event(t) : t);
      }
    };
  }
  function rn(e, t, n, o, r, i, a, s, c, l) {
    var d,
      u,
      _,
      p,
      y,
      f,
      m,
      v,
      h,
      b,
      w,
      x,
      P,
      C,
      k,
      O = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && ((c = !!(32 & n.__u)), (i = [(s = t.__e = n.__e)])),
      (d = N.__b) && d(t);
    e: if (typeof O == "function")
      try {
        if (
          ((v = t.props),
          (h = (d = O.contextType) && o[d.__c]),
          (b = d ? (h ? h.props.value : d.__) : o),
          n.__c
            ? (m = (u = t.__c = n.__c).__ = u.__E)
            : ("prototype" in O && O.prototype.render
                ? (t.__c = u = new O(v, b))
                : ((t.__c = u = new pe(v, b)),
                  (u.constructor = O),
                  (u.render = Qi)),
              h && h.sub(u),
              (u.props = v),
              u.state || (u.state = {}),
              (u.context = b),
              (u.__n = o),
              (_ = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          u.__s == null && (u.__s = u.state),
          O.getDerivedStateFromProps != null &&
            (u.__s == u.state && (u.__s = Ce({}, u.__s)),
            Ce(u.__s, O.getDerivedStateFromProps(v, u.__s))),
          (p = u.props),
          (y = u.state),
          (u.__v = t),
          _)
        )
          O.getDerivedStateFromProps == null &&
            u.componentWillMount != null &&
            u.componentWillMount(),
            u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (
            (O.getDerivedStateFromProps == null &&
              v !== p &&
              u.componentWillReceiveProps != null &&
              u.componentWillReceiveProps(v, b),
            !u.__e &&
              ((u.shouldComponentUpdate != null &&
                u.shouldComponentUpdate(v, u.__s, b) === !1) ||
                t.__v === n.__v))
          ) {
            for (
              t.__v !== n.__v &&
                ((u.props = v), (u.state = u.__s), (u.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.forEach(function (T) {
                  T && (T.__ = t);
                }),
                w = 0;
              w < u._sb.length;
              w++
            )
              u.__h.push(u._sb[w]);
            (u._sb = []), u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, b),
            u.componentDidUpdate != null &&
              u.__h.push(function () {
                u.componentDidUpdate(p, y, f);
              });
        }
        if (
          ((u.context = b),
          (u.props = v),
          (u.__P = e),
          (u.__e = !1),
          (x = N.__r),
          (P = 0),
          "prototype" in O && O.prototype.render)
        ) {
          for (
            u.state = u.__s,
              u.__d = !1,
              x && x(t),
              d = u.render(u.props, u.state, u.context),
              C = 0;
            C < u._sb.length;
            C++
          )
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do
            (u.__d = !1),
              x && x(t),
              (d = u.render(u.props, u.state, u.context)),
              (u.state = u.__s);
          while (u.__d && ++P < 25);
        (u.state = u.__s),
          u.getChildContext != null && (o = Ce(Ce({}, o), u.getChildContext())),
          _ ||
            u.getSnapshotBeforeUpdate == null ||
            (f = u.getSnapshotBeforeUpdate(p, y)),
          co(
            e,
            Ct(
              (k =
                d != null && d.type === oe && d.key == null
                  ? d.props.children
                  : d)
            )
              ? k
              : [k],
            t,
            n,
            o,
            r,
            i,
            a,
            s,
            c,
            l
          ),
          (u.base = t.__e),
          (t.__u &= -161),
          u.__h.length && a.push(u),
          m && (u.__E = u.__ = null);
      } catch (T) {
        (t.__v = null),
          c || i != null
            ? ((t.__e = s), (t.__u |= c ? 160 : 32), (i[i.indexOf(s)] = null))
            : ((t.__e = n.__e), (t.__k = n.__k)),
          N.__e(T, t, n);
      }
    else
      i == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = Ji(n.__e, t, n, o, r, i, a, c, l));
    (d = N.diffed) && d(t);
  }
  function ho(e, t, n) {
    t.__d = void 0;
    for (var o = 0; o < n.length; o++) an(n[o], n[++o], n[++o]);
    N.__c && N.__c(t, e),
      e.some(function (r) {
        try {
          (e = r.__h),
            (r.__h = []),
            e.some(function (i) {
              i.call(r);
            });
        } catch (i) {
          N.__e(i, r.__v);
        }
      });
  }
  function Ji(e, t, n, o, r, i, a, s, c) {
    var l,
      d,
      u,
      _,
      p,
      y,
      f,
      m = n.props,
      v = t.props,
      h = t.type;
    if ((h === "svg" && (r = !0), i != null)) {
      for (l = 0; l < i.length; l++)
        if (
          (p = i[l]) &&
          "setAttribute" in p == !!h &&
          (h ? p.localName === h : p.nodeType === 3)
        ) {
          (e = p), (i[l] = null);
          break;
        }
    }
    if (e == null) {
      if (h === null) return document.createTextNode(v);
      (e = r
        ? document.createElementNS("http://www.w3.org/2000/svg", h)
        : document.createElement(h, v.is && v)),
        (i = null),
        (s = !1);
    }
    if (h === null) m === v || (s && e.data === v) || (e.data = v);
    else {
      if (
        ((i = i && se.call(e.childNodes)), (m = n.props || dt), !s && i != null)
      )
        for (m = {}, l = 0; l < e.attributes.length; l++)
          m[(p = e.attributes[l]).name] = p.value;
      for (l in m)
        (p = m[l]),
          l == "children" ||
            (l == "dangerouslySetInnerHTML"
              ? (u = p)
              : l === "key" || l in v || Et(e, l, null, p, r));
      for (l in v)
        (p = v[l]),
          l == "children"
            ? (_ = p)
            : l == "dangerouslySetInnerHTML"
            ? (d = p)
            : l == "value"
            ? (y = p)
            : l == "checked"
            ? (f = p)
            : l === "key" ||
              (s && typeof p != "function") ||
              m[l] === p ||
              Et(e, l, p, m[l], r);
      if (d)
        s ||
          (u && (d.__html === u.__html || d.__html === e.innerHTML)) ||
          (e.innerHTML = d.__html),
          (t.__k = []);
      else if (
        (u && (e.innerHTML = ""),
        co(
          e,
          Ct(_) ? _ : [_],
          t,
          n,
          o,
          r && h !== "foreignObject",
          i,
          a,
          i ? i[0] : n.__k && Ye(n, 0),
          s,
          c
        ),
        i != null)
      )
        for (l = i.length; l--; ) i[l] != null && ao(i[l]);
      s ||
        ((l = "value"),
        y !== void 0 &&
          (y !== e[l] ||
            (h === "progress" && !y) ||
            (h === "option" && y !== m[l])) &&
          Et(e, l, y, m[l], !1),
        (l = "checked"),
        f !== void 0 && f !== e[l] && Et(e, l, f, m[l], !1));
    }
    return e;
  }
  function an(e, t, n) {
    try {
      typeof e == "function" ? e(t) : (e.current = t);
    } catch (o) {
      N.__e(o, n);
    }
  }
  function sn(e, t, n) {
    var o, r;
    if (
      (N.unmount && N.unmount(e),
      (o = e.ref) && ((o.current && o.current !== e.__e) || an(o, null, t)),
      (o = e.__c) != null)
    ) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          N.__e(i, t);
        }
      o.base = o.__P = null;
    }
    if ((o = e.__k))
      for (r = 0; r < o.length; r++)
        o[r] && sn(o[r], t, n || typeof e.type != "function");
    n || e.__e == null || ao(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
  }
  function Qi(e, t, n) {
    return this.constructor(e, n);
  }
  function Oe(e, t, n) {
    var o, r, i, a;
    N.__ && N.__(e, t),
      (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k),
      (i = []),
      (a = []),
      rn(
        t,
        (e = ((!o && n) || t).__k = U(oe, null, [e])),
        r || dt,
        dt,
        t.ownerSVGElement !== void 0,
        !o && n ? [n] : r ? null : t.firstChild ? se.call(t.childNodes) : null,
        i,
        !o && n ? n : r ? r.__e : t.firstChild,
        o,
        a
      ),
      ho(i, e, a);
  }
  function ln(e, t) {
    Oe(e, t, ln);
  }
  function cn(e, t, n) {
    var o,
      r,
      i,
      a,
      s = Ce({}, e.props);
    for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
      i == "key"
        ? (o = t[i])
        : i == "ref"
        ? (r = t[i])
        : (s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i]);
    return (
      arguments.length > 2 &&
        (s.children = arguments.length > 3 ? se.call(arguments, 2) : n),
      ft(e.type, s, o || e.key, r || e.ref, null)
    );
  }
  function De(e, t) {
    var n = {
      __c: (t = "__cC" + ro++),
      __: e,
      Consumer: function (o, r) {
        return o.children(r);
      },
      Provider: function (o) {
        var r, i;
        return (
          this.getChildContext ||
            ((r = []),
            ((i = {})[t] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (a) {
              this.props.value !== a.value &&
                r.some(function (s) {
                  (s.__e = !0), on(s);
                });
            }),
            (this.sub = function (a) {
              r.push(a);
              var s = a.componentWillUnmount;
              a.componentWillUnmount = function () {
                r.splice(r.indexOf(a), 1), s && s.call(a);
              };
            })),
          o.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  (se = io.slice),
    (N = {
      __e: function (e, t, n, o) {
        for (var r, i, a; (t = t.__); )
          if ((r = t.__c) && !r.__)
            try {
              if (
                ((i = r.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)),
                r.componentDidCatch != null &&
                  (r.componentDidCatch(e, o || {}), (a = r.__d)),
                a)
              )
                return (r.__E = r);
            } catch (s) {
              e = s;
            }
        throw e;
      },
    }),
    (qe = 0),
    (pe.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = Ce({}, this.state))),
        typeof e == "function" && (e = e(Ce({}, n), this.props)),
        e && Ce(n, e),
        e != null && this.__v && (t && this._sb.push(t), on(this));
    }),
    (pe.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), on(this));
    }),
    (pe.prototype.render = oe),
    (Ke = []),
    (oo =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Qt = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (St.__r = 0),
    (en = 0),
    (tn = po(!1)),
    (nn = po(!0)),
    (ro = 0);
  function un() {
    return (un = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
  }
  var ea = ["context", "children"];
  function ta(e) {
    this.getChildContext = function () {
      return e.context;
    };
    var t = e.children,
      n = (function (o, r) {
        if (o == null) return {};
        var i,
          a,
          s = {},
          c = Object.keys(o);
        for (a = 0; a < c.length; a++)
          r.indexOf((i = c[a])) >= 0 || (s[i] = o[i]);
        return s;
      })(e, ea);
    return cn(t, n);
  }
  function na() {
    var e = new CustomEvent("_preact", {
      detail: {},
      bubbles: !0,
      cancelable: !0,
    });
    this.dispatchEvent(e),
      (this._vdom = U(
        ta,
        un({}, this._props, { context: e.detail.context }),
        (function t(n, o) {
          if (n.nodeType === 3) return n.data;
          if (n.nodeType !== 1) return null;
          var r = [],
            i = {},
            a = 0,
            s = n.attributes,
            c = n.childNodes;
          for (a = s.length; a--; )
            s[a].name !== "slot" &&
              ((i[s[a].name] = s[a].value), (i[_o(s[a].name)] = s[a].value));
          for (a = c.length; a--; ) {
            var l = t(c[a], null),
              d = c[a].slot;
            d ? (i[d] = U(vo, { name: d }, l)) : (r[a] = l);
          }
          var u = o ? U(vo, null, r) : r;
          return U(o || n.nodeName.toLowerCase(), i, u);
        })(this, this._vdomComponent)
      )),
      (this.hasAttribute("hydrate") ? ln : Oe)(this._vdom, this._root);
  }
  function _o(e) {
    return e.replace(/-(\w)/g, function (t, n) {
      return n ? n.toUpperCase() : "";
    });
  }
  function oa(e, t, n) {
    if (this._vdom) {
      var o = {};
      (o[e] = n = n ?? void 0),
        (o[_o(e)] = n),
        (this._vdom = cn(this._vdom, o)),
        Oe(this._vdom, this._root);
    }
  }
  function ra() {
    Oe((this._vdom = null), this._root);
  }
  function vo(e, t) {
    var n = this;
    return U(
      "slot",
      un({}, e, {
        ref: function (o) {
          o
            ? ((n.ref = o),
              n._listener ||
                ((n._listener = function (r) {
                  r.stopPropagation(), (r.detail.context = t);
                }),
                o.addEventListener("_preact", n._listener)))
            : n.ref.removeEventListener("_preact", n._listener);
        },
      })
    );
  }
  function ia(e, t, n, o) {
    function r() {
      var i = Reflect.construct(HTMLElement, [], r);
      return (
        (i._vdomComponent = e),
        (i._root = i.attachShadow({ mode: o.mode || "open" })),
        i
      );
    }
    return (
      ((r.prototype = Object.create(HTMLElement.prototype)).constructor = r),
      (r.prototype.connectedCallback = na),
      (r.prototype.attributeChangedCallback = oa),
      (r.prototype.disconnectedCallback = ra),
      (n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
      (r.observedAttributes = n),
      n.forEach(function (i) {
        Object.defineProperty(r.prototype, i, {
          get: function () {
            return this._vdom.props[i];
          },
          set: function (a) {
            this._vdom
              ? this.attributeChangedCallback(i, null, a)
              : (this._props || (this._props = {}),
                (this._props[i] = a),
                this.connectedCallback());
            var s = typeof a;
            (a != null &&
              s !== "string" &&
              s !== "boolean" &&
              s !== "number") ||
              this.setAttribute(i, a);
          },
        });
      }),
      customElements.define(t, r)
    );
  }
  var aa = 0;
  function g(e, t, n, o, r, i) {
    var a,
      s,
      c = {};
    for (s in t) s == "ref" ? (a = t[s]) : (c[s] = t[s]);
    var l = {
      type: e,
      props: c,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: --aa,
      __i: -1,
      __u: 0,
      __source: r,
      __self: i,
    };
    if (typeof e == "function" && (a = e.defaultProps))
      for (s in a) c[s] === void 0 && (c[s] = a[s]);
    return N.vnode && N.vnode(l), l;
  }
  var Ee,
    K,
    dn,
    mo,
    et = 0,
    go = [],
    Pt = [],
    J = N,
    yo = J.__b,
    bo = J.__r,
    wo = J.diffed,
    xo = J.__c,
    Co = J.unmount,
    So = J.__;
  function Ge(e, t) {
    J.__h && J.__h(K, e, et || t), (et = 0);
    var n = K.__H || (K.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Pt }), n.__[e];
  }
  function E(e) {
    return (et = 1), fn(Io, e);
  }
  function fn(e, t, n) {
    var o = Ge(Ee++, 2);
    if (
      ((o.t = e),
      !o.__c &&
        ((o.__ = [
          n ? n(t) : Io(void 0, t),
          function (s) {
            var c = o.__N ? o.__N[0] : o.__[0],
              l = o.t(c, s);
            c !== l && ((o.__N = [l, o.__[1]]), o.__c.setState({}));
          },
        ]),
        (o.__c = K),
        !K.u))
    ) {
      var r = function (s, c, l) {
        if (!o.__c.__H) return !0;
        var d = o.__c.__H.__.filter(function (_) {
          return !!_.__c;
        });
        if (
          d.every(function (_) {
            return !_.__N;
          })
        )
          return !i || i.call(this, s, c, l);
        var u = !1;
        return (
          d.forEach(function (_) {
            if (_.__N) {
              var p = _.__[0];
              (_.__ = _.__N), (_.__N = void 0), p !== _.__[0] && (u = !0);
            }
          }),
          !(!u && o.__c.props === s) && (!i || i.call(this, s, c, l))
        );
      };
      K.u = !0;
      var i = K.shouldComponentUpdate,
        a = K.componentWillUpdate;
      (K.componentWillUpdate = function (s, c, l) {
        if (this.__e) {
          var d = i;
          (i = void 0), r(s, c, l), (i = d);
        }
        a && a.call(this, s, c, l);
      }),
        (K.shouldComponentUpdate = r);
    }
    return o.__N || o.__;
  }
  function z(e, t) {
    var n = Ge(Ee++, 3);
    !J.__s && hn(n.__H, t) && ((n.__ = e), (n.i = t), K.__H.__h.push(n));
  }
  function ze(e, t) {
    var n = Ge(Ee++, 4);
    !J.__s && hn(n.__H, t) && ((n.__ = e), (n.i = t), K.__h.push(n));
  }
  function L(e) {
    return (
      (et = 5),
      Y(function () {
        return { current: e };
      }, [])
    );
  }
  function Eo(e, t, n) {
    (et = 6),
      ze(
        function () {
          return typeof e == "function"
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
        },
        n == null ? n : n.concat(e)
      );
  }
  function Y(e, t) {
    var n = Ge(Ee++, 7);
    return hn(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function G(e, t) {
    return (
      (et = 8),
      Y(function () {
        return e;
      }, t)
    );
  }
  function Xe(e) {
    var t = K.context[e.__c],
      n = Ge(Ee++, 9);
    return (
      (n.c = e),
      t ? (n.__ == null && ((n.__ = !0), t.sub(K)), t.props.value) : e.__
    );
  }
  function Po(e, t) {
    J.useDebugValue && J.useDebugValue(t ? t(e) : e);
  }
  function sa(e) {
    var t = Ge(Ee++, 10),
      n = E();
    return (
      (t.__ = e),
      K.componentDidCatch ||
        (K.componentDidCatch = function (o, r) {
          t.__ && t.__(o, r), n[1](o);
        }),
      [
        n[0],
        function () {
          n[1](void 0);
        },
      ]
    );
  }
  function Ao() {
    var e = Ge(Ee++, 11);
    if (!e.__) {
      for (var t = K.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function la() {
    for (var e; (e = go.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(At), e.__H.__h.forEach(pn), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), J.__e(t, e.__v);
        }
  }
  (J.__b = function (e) {
    (K = null), yo && yo(e);
  }),
    (J.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), So && So(e, t);
    }),
    (J.__r = function (e) {
      bo && bo(e), (Ee = 0);
      var t = (K = e.__c).__H;
      t &&
        (dn === K
          ? ((t.__h = []),
            (K.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = Pt), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(At), t.__h.forEach(pn), (t.__h = []), (Ee = 0))),
        (dn = K);
    }),
    (J.diffed = function (e) {
      wo && wo(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((go.push(t) !== 1 && mo === J.requestAnimationFrame) ||
            ((mo = J.requestAnimationFrame) || ca)(la)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i),
            n.__V !== Pt && (n.__ = n.__V),
            (n.i = void 0),
            (n.__V = Pt);
        })),
        (dn = K = null);
    }),
    (J.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(At),
            (n.__h = n.__h.filter(function (o) {
              return !o.__ || pn(o);
            }));
        } catch (o) {
          t.some(function (r) {
            r.__h && (r.__h = []);
          }),
            (t = []),
            J.__e(o, n.__v);
        }
      }),
        xo && xo(e, t);
    }),
    (J.unmount = function (e) {
      Co && Co(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (o) {
          try {
            At(o);
          } catch (r) {
            t = r;
          }
        }),
        (n.__H = void 0),
        t && J.__e(t, n.__v));
    });
  var ko = typeof requestAnimationFrame == "function";
  function ca(e) {
    var t,
      n = function () {
        clearTimeout(o), ko && cancelAnimationFrame(t), setTimeout(e);
      },
      o = setTimeout(n, 100);
    ko && (t = requestAnimationFrame(n));
  }
  function At(e) {
    var t = K,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (K = t);
  }
  function pn(e) {
    var t = K;
    (e.__c = e.__()), (K = t);
  }
  function hn(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, o) {
        return n !== e[o];
      })
    );
  }
  function Io(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  const To =`https://api.${kau}`,
    Ro = `https://api.us.${kau}`,
    ua = `wss://api.${kau}`,
    da =  `wss://api.us.${kau}`;
  function No(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function _n(e, t) {
    for (var n in e) if (n !== "__source" && !(n in t)) return !0;
    for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
    return !1;
  }
  function kt(e, t) {
    (this.props = e), (this.context = t);
  }
  function Oo(e, t) {
    function n(r) {
      var i = this.props.ref,
        a = i == r.ref;
      return (
        !a && i && (i.call ? i(null) : (i.current = null)),
        t ? !t(this.props, r) || !a : _n(this.props, r)
      );
    }
    function o(r) {
      return (this.shouldComponentUpdate = n), U(e, r);
    }
    return (
      (o.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (o.prototype.isReactComponent = !0),
      (o.__f = !0),
      o
    );
  }
  ((kt.prototype = new pe()).isPureReactComponent = !0),
    (kt.prototype.shouldComponentUpdate = function (e, t) {
      return _n(this.props, e) || _n(this.state, t);
    });
  var Do = N.__b;
  N.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Do && Do(e);
  };
  var fa =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function F(e) {
    function t(n) {
      var o = No({}, n);
      return delete o.ref, e(o, n.ref || null);
    }
    return (
      (t.$$typeof = fa),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var zo = function (e, t) {
      return e == null ? null : Se(Se(e).map(t));
    },
    Le = {
      map: zo,
      forEach: zo,
      count: function (e) {
        return e ? Se(e).length : 0;
      },
      only: function (e) {
        var t = Se(e);
        if (t.length !== 1) throw "Children.only";
        return t[0];
      },
      toArray: Se,
    },
    pa = N.__e;
  N.__e = function (e, t, n, o) {
    if (e.then) {
      for (var r, i = t; (i = i.__); )
        if ((r = i.__c) && r.__c)
          return (
            t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t)
          );
    }
    pa(e, t, n, o);
  };
  var Lo = N.unmount;
  function Mo(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (o) {
            typeof o.__c == "function" && o.__c();
          }),
          (e.__c.__H = null)),
        (e = No({}, e)).__c != null &&
          (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (o) {
            return Mo(o, t, n);
          }))),
      e
    );
  }
  function Fo(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (o) {
            return Fo(o, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function pt() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Bo(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function $o(e) {
    var t, n, o;
    function r(i) {
      if (
        (t ||
          (t = e()).then(
            function (a) {
              n = a.default || a;
            },
            function (a) {
              o = a;
            }
          ),
        o)
      )
        throw o;
      if (!n) throw t;
      return U(n, i);
    }
    return (r.displayName = "Lazy"), (r.__f = !0), r;
  }
  function tt() {
    (this.u = null), (this.o = null);
  }
  (N.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Lo && Lo(e);
  }),
    ((pt.prototype = new pe()).__c = function (e, t) {
      var n = t.__c,
        o = this;
      o.t == null && (o.t = []), o.t.push(n);
      var r = Bo(o.__v),
        i = !1,
        a = function () {
          i || ((i = !0), (n.__R = null), r ? r(s) : s());
        };
      n.__R = a;
      var s = function () {
        if (!--o.__u) {
          if (o.state.__a) {
            var c = o.state.__a;
            o.__v.__k[0] = Fo(c, c.__c.__P, c.__c.__O);
          }
          var l;
          for (o.setState({ __a: (o.__b = null) }); (l = o.t.pop()); )
            l.forceUpdate();
        }
      };
      o.__u++ || 32 & t.__u || o.setState({ __a: (o.__b = o.__v.__k[0]) }),
        e.then(a, a);
    }),
    (pt.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (pt.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            o = this.__v.__k[0].__c;
          this.__v.__k[0] = Mo(this.__b, n, (o.__O = o.__P));
        }
        this.__b = null;
      }
      var r = t.__a && U(oe, null, e.fallback);
      return r && (r.__u &= -33), [U(oe, null, t.__a ? null : e.children), r];
    });
  var Wo = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function ha(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function _a(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      Oe(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      t.l ||
        ((t.i = n),
        (t.l = {
          nodeType: 1,
          parentNode: n,
          childNodes: [],
          appendChild: function (o) {
            this.childNodes.push(o), t.i.appendChild(o);
          },
          insertBefore: function (o, r) {
            this.childNodes.push(o), t.i.appendChild(o);
          },
          removeChild: function (o) {
            this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1),
              t.i.removeChild(o);
          },
        })),
      Oe(U(ha, { context: t.context }, e.__v), t.l);
  }
  function It(e, t) {
    var n = U(_a, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((tt.prototype = new pe()).__a = function (e) {
    var t = this,
      n = Bo(t.__v),
      o = t.o.get(e);
    return (
      o[0]++,
      function (r) {
        var i = function () {
          t.props.revealOrder ? (o.push(r), Wo(t, e, o)) : r();
        };
        n ? n(i) : i();
      }
    );
  }),
    (tt.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = Se(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (tt.prototype.componentDidUpdate = tt.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Wo(e, n, t);
        });
      });
  var Vo =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    va =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    ma = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    ga = /[A-Z0-9]/g,
    ya = typeof document < "u",
    ba = function (e) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  function Ho(e, t, n) {
    return (
      t.__k == null && (t.textContent = ""),
      Oe(e, t),
      typeof n == "function" && n(),
      e ? e.__c : null
    );
  }
  function Uo(e, t, n) {
    return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  (pe.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(pe.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var jo = N.event;
  function wa() {}
  function xa() {
    return this.cancelBubble;
  }
  function Ca() {
    return this.defaultPrevented;
  }
  N.event = function (e) {
    return (
      jo && (e = jo(e)),
      (e.persist = wa),
      (e.isPropagationStopped = xa),
      (e.isDefaultPrevented = Ca),
      (e.nativeEvent = e)
    );
  };
  var vn,
    Sa = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    qo = N.vnode;
  N.vnode = function (e) {
    typeof e.type == "string" &&
      (function (t) {
        var n = t.props,
          o = t.type,
          r = {};
        for (var i in n) {
          var a = n[i];
          if (
            !(
              (i === "value" && "defaultValue" in n && a == null) ||
              (ya && i === "children" && o === "noscript") ||
              i === "class" ||
              i === "className"
            )
          ) {
            var s = i.toLowerCase();
            i === "defaultValue" && "value" in n && n.value == null
              ? (i = "value")
              : i === "download" && a === !0
              ? (a = "")
              : s === "translate" && a === "no"
              ? (a = !1)
              : s === "ondoubleclick"
              ? (i = "ondblclick")
              : s !== "onchange" ||
                (o !== "input" && o !== "textarea") ||
                ba(n.type)
              ? s === "onfocus"
                ? (i = "onfocusin")
                : s === "onblur"
                ? (i = "onfocusout")
                : ma.test(i)
                ? (i = s)
                : o.indexOf("-") === -1 && va.test(i)
                ? (i = i.replace(ga, "-$&").toLowerCase())
                : a === null && (a = void 0)
              : (s = i = "oninput"),
              s === "oninput" && r[(i = s)] && (i = "oninputCapture"),
              (r[i] = a);
          }
        }
        o == "select" &&
          r.multiple &&
          Array.isArray(r.value) &&
          (r.value = Se(n.children).forEach(function (c) {
            c.props.selected = r.value.indexOf(c.props.value) != -1;
          })),
          o == "select" &&
            r.defaultValue != null &&
            (r.value = Se(n.children).forEach(function (c) {
              c.props.selected = r.multiple
                ? r.defaultValue.indexOf(c.props.value) != -1
                : r.defaultValue == c.props.value;
            })),
          n.class && !n.className
            ? ((r.class = n.class), Object.defineProperty(r, "className", Sa))
            : ((n.className && !n.class) || (n.class && n.className)) &&
              (r.class = r.className = n.className),
          (t.props = r);
      })(e),
      (e.$$typeof = Vo),
      qo && qo(e);
  };
  var Ko = N.__r;
  N.__r = function (e) {
    Ko && Ko(e), (vn = e.__c);
  };
  var Yo = N.diffed;
  N.diffed = function (e) {
    Yo && Yo(e);
    var t = e.props,
      n = e.__e;
    n != null &&
      e.type === "textarea" &&
      "value" in t &&
      t.value !== n.value &&
      (n.value = t.value == null ? "" : t.value),
      (vn = null);
  };
  var Go = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return vn.__n[e.__c].props.value;
          },
        },
      },
    },
    Ea = "17.0.2";
  function Xo(e) {
    return U.bind(null, e);
  }
  function Pe(e) {
    return !!e && e.$$typeof === Vo;
  }
  function Zo(e) {
    return Pe(e) && e.type === oe;
  }
  function Jo(e) {
    return (
      !!e &&
      !!e.displayName &&
      (typeof e.displayName == "string" || e.displayName instanceof String) &&
      e.displayName.startsWith("Memo(")
    );
  }
  function ht(e) {
    return Pe(e) ? cn.apply(null, arguments) : e;
  }
  function Qo(e) {
    return !!e.__k && (Oe(null, e), !0);
  }
  function er(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var tr = function (e, t) {
      return e(t);
    },
    Tt = function (e, t) {
      return e(t);
    },
    nr = oe;
  function mn(e) {
    e();
  }
  function or(e) {
    return e;
  }
  function rr() {
    return [!1, mn];
  }
  var ir = ze,
    ar = Pe;
  function sr(e, t) {
    var n = t(),
      o = E({ h: { __: n, v: t } }),
      r = o[0].h,
      i = o[1];
    return (
      ze(
        function () {
          (r.__ = n), (r.v = t), gn(r) && i({ h: r });
        },
        [e, n, t]
      ),
      z(
        function () {
          return (
            gn(r) && i({ h: r }),
            e(function () {
              gn(r) && i({ h: r });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  function gn(e) {
    var t,
      n,
      o = e.v,
      r = e.__;
    try {
      var i = o();
      return !(
        ((t = r) === (n = i) && (t !== 0 || 1 / t == 1 / n)) ||
        (t != t && n != n)
      );
    } catch {
      return !0;
    }
  }
  var Ae = {
    useState: E,
    useId: Ao,
    useReducer: fn,
    useEffect: z,
    useLayoutEffect: ze,
    useInsertionEffect: ir,
    useTransition: rr,
    useDeferredValue: or,
    useSyncExternalStore: sr,
    startTransition: mn,
    useRef: L,
    useImperativeHandle: Eo,
    useMemo: Y,
    useCallback: G,
    useContext: Xe,
    useDebugValue: Po,
    version: "17.0.2",
    Children: Le,
    render: Ho,
    hydrate: Uo,
    unmountComponentAtNode: Qo,
    createPortal: It,
    createElement: U,
    createContext: De,
    createFactory: Xo,
    cloneElement: ht,
    createRef: so,
    Fragment: oe,
    isValidElement: Pe,
    isElement: ar,
    isFragment: Zo,
    isMemo: Jo,
    findDOMNode: er,
    Component: pe,
    PureComponent: kt,
    memo: Oo,
    forwardRef: F,
    flushSync: Tt,
    unstable_batchedUpdates: tr,
    StrictMode: nr,
    Suspense: pt,
    SuspenseList: tt,
    lazy: $o,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Go,
  };
  const Pa = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Le,
        Component: pe,
        Fragment: oe,
        PureComponent: kt,
        StrictMode: nr,
        Suspense: pt,
        SuspenseList: tt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Go,
        cloneElement: ht,
        createContext: De,
        createElement: U,
        createFactory: Xo,
        createPortal: It,
        createRef: so,
        default: Ae,
        findDOMNode: er,
        flushSync: Tt,
        forwardRef: F,
        hydrate: Uo,
        isElement: ar,
        isFragment: Zo,
        isMemo: Jo,
        isValidElement: Pe,
        lazy: $o,
        memo: Oo,
        render: Ho,
        startTransition: mn,
        unmountComponentAtNode: Qo,
        unstable_batchedUpdates: tr,
        useCallback: G,
        useContext: Xe,
        useDebugValue: Po,
        useDeferredValue: or,
        useEffect: z,
        useErrorBoundary: sa,
        useId: Ao,
        useImperativeHandle: Eo,
        useInsertionEffect: ir,
        useLayoutEffect: ze,
        useMemo: Y,
        useReducer: fn,
        useRef: L,
        useState: E,
        useSyncExternalStore: sr,
        useTransition: rr,
        version: Ea,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  function Rt() {
    return (
      (Rt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
      Rt.apply(null, arguments)
    );
  }
  function Aa(e) {
    const t = new Uint8Array(e);
    return window.btoa(String.fromCharCode(...t));
  }
  function ka(e) {
    const t = window.atob(e),
      n = t.length,
      o = new Uint8Array(n);
    for (let r = 0; r < n; r++) o[r] = t.charCodeAt(r);
    return o.buffer;
  }
  const Ia = new Blob(
      [
        `
      const BIAS = 0x84;
      const CLIP = 32635;
      const encodeTable = [
        0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
      ];
      
      function encodeSample(sample) {
        let sign;
        let exponent;
        let mantissa;
        let muLawSample;
        sign = (sample >> 8) & 0x80;
        if (sign !== 0) sample = -sample;
        sample = sample + BIAS;
        if (sample > CLIP) sample = CLIP;
        exponent = encodeTable[(sample>>7) & 0xFF];
        mantissa = (sample >> (exponent+3)) & 0x0F;
        muLawSample = ~(sign | (exponent << 4) | mantissa);
        
        return muLawSample;
      }
    
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
                    
          this.port.onmessage = ({ data }) => {
            this.buffer = []; // Initialize an empty buffer
            this.bufferSize = data.sampleRate / 4;
            
            if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
              globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
                this.resampler = resampler;
              });
            } 
          };
        }
        process(inputs) {
          if (!this.buffer) {
            return true;
          }
          
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = new Float32Array(this.buffer)
              let encodedArray = this.format === "ulaw"
                ? new Uint8Array(float32Array.length)
                : new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));

                // Scale the sample to the range [-32768, 32767]
                let value = sample < 0 ? sample * 32768 : sample * 32767;
                if (this.format === "ulaw") {
                  value = encodeSample(Math.round(value));
                }

                encodedArray[i] = value;
              }

              // Send the buffered data to the main script
              this.port.postMessage([encodedArray, maxVolume]);

              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `,
      ],
      { type: "application/javascript" }
    ),
    Ta = URL.createObjectURL(Ia);
  class yn {
    static async create({
      sampleRate: t,
      format: n,
      preferHeadphonesForIosDevices: o,
    }) {
      let r = null,
        i = null;
      try {
        const c = {
          sampleRate: { ideal: t },
          echoCancellation: { ideal: !0 },
          noiseSuppression: { ideal: !0 },
        };
        if (
          ([
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") &&
              "ontouchend" in document)) &&
          o
        ) {
          const p = (
            await window.navigator.mediaDevices.enumerateDevices()
          ).find(
            (y) =>
              y.kind === "audioinput" &&
              ["airpod", "headphone", "earphone"].find((f) =>
                y.label.toLowerCase().includes(f)
              )
          );
          p && (c.deviceId = { ideal: p.deviceId });
        }
        const l = navigator.mediaDevices.getSupportedConstraints().sampleRate;
        r = new window.AudioContext(l ? { sampleRate: t } : {});
        const d = r.createAnalyser();
        l ||
          (await r.audioWorklet.addModule(
            "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"
          )),
          await r.audioWorklet.addModule(Ta),
          (i = await navigator.mediaDevices.getUserMedia({ audio: c }));
        const u = r.createMediaStreamSource(i),
          _ = new AudioWorkletNode(r, "raw-audio-processor");
        return (
          _.port.postMessage({ type: "setFormat", format: n, sampleRate: t }),
          u.connect(d),
          d.connect(_),
          new yn(r, d, _, i)
        );
      } catch (c) {
        var a, s;
        throw (
          ((a = i) == null || a.getTracks().forEach((l) => l.stop()),
          (s = r) == null || s.close(),
          c)
        );
      }
    }
    constructor(t, n, o, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.worklet = void 0),
        (this.inputStream = void 0),
        (this.context = t),
        (this.analyser = n),
        (this.worklet = o),
        (this.inputStream = r);
    }
    async close() {
      this.inputStream.getTracks().forEach((t) => t.stop()),
        await this.context.close();
    }
  }
  const Ra = new Blob(
      [
        `
      const decodeTable = [0,132,396,924,1980,4092,8316,16764];
      
      export function decodeSample(muLawSample) {
        let sign;
        let exponent;
        let mantissa;
        let sample;
        muLawSample = ~muLawSample;
        sign = (muLawSample & 0x80);
        exponent = (muLawSample >> 4) & 0x07;
        mantissa = muLawSample & 0x0F;
        sample = decodeTable[exponent] + (mantissa << (exponent+3));
        if (sign !== 0) sample = -sample;

        return sample;
      }
      
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;
          
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.format = data.format;
                break;
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(
                  this.format === "ulaw"
                    ? new Uint8Array(data.buffer)
                    : new Int16Array(data.buffer)
                );
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            let value = this.currentBuffer[this.cursor];
            if (this.format === "ulaw") {
              value = decodeSample(value);
            }
            output[i] = value / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `,
      ],
      { type: "application/javascript" }
    ),
    Na = URL.createObjectURL(Ra);
  let Oa = class Ki {
    static async create({ sampleRate: t, format: n }) {
      let o = null;
      try {
        o = new AudioContext({ sampleRate: t });
        const i = o.createAnalyser(),
          a = o.createGain();
        a.connect(i),
          i.connect(o.destination),
          await o.audioWorklet.addModule(Na);
        const s = new AudioWorkletNode(o, "audio-concat-processor");
        return (
          s.port.postMessage({ type: "setFormat", format: n }),
          s.connect(a),
          new Ki(o, i, a, s)
        );
      } catch (i) {
        var r;
        throw ((r = o) == null || r.close(), i);
      }
    }
    constructor(t, n, o, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.gain = void 0),
        (this.worklet = void 0),
        (this.context = t),
        (this.analyser = n),
        (this.gain = o),
        (this.worklet = r);
    }
    async close() {
      await this.context.close();
    }
  };
  function lr(e) {
    return !!e.type;
  }
  let Da = class Yi {
    static async create(t) {
      let n = null;
      try {
        var o;
        const i = (o = t.origin) != null ? o : `wss://api.${kau}`,
          a = t.signedUrl
            ? t.signedUrl
            : i + "/v1/convai/conversation?agent_id=" + t.agentId,
          s = ["convai"];
        t.authorization && s.push(`bearer.${t.authorization}`),
          (n = new WebSocket(a, s));
        const c = await new Promise((y, f) => {
            n.addEventListener(
              "open",
              () => {
                var m;
                const v = { type: "conversation_initiation_client_data" };
                var h, b, w, x;
                t.overrides &&
                  (v.conversation_config_override = {
                    agent: {
                      prompt:
                        (h = t.overrides.agent) == null ? void 0 : h.prompt,
                      first_message:
                        (b = t.overrides.agent) == null
                          ? void 0
                          : b.firstMessage,
                      language:
                        (w = t.overrides.agent) == null ? void 0 : w.language,
                    },
                    tts: {
                      voice_id:
                        (x = t.overrides.tts) == null ? void 0 : x.voiceId,
                    },
                  }),
                  t.customLlmExtraBody &&
                    (v.custom_llm_extra_body = t.customLlmExtraBody),
                  t.dynamicVariables &&
                    (v.dynamic_variables = t.dynamicVariables),
                  (m = n) == null || m.send(JSON.stringify(v));
              },
              { once: !0 }
            ),
              n.addEventListener("error", (m) => {
                setTimeout(() => f(m), 0);
              }),
              n.addEventListener("close", f),
              n.addEventListener(
                "message",
                (m) => {
                  const v = JSON.parse(m.data);
                  lr(v) &&
                    (v.type === "conversation_initiation_metadata"
                      ? y(v.conversation_initiation_metadata_event)
                      : console.warn(
                          "First received message is not conversation metadata."
                        ));
                },
                { once: !0 }
              );
          }),
          {
            conversation_id: l,
            agent_output_audio_format: d,
            user_input_audio_format: u,
          } = c,
          _ = cr(u ?? "pcm_16000"),
          p = cr(d);
        return new Yi(n, l, _, p);
      } catch (i) {
        var r;
        throw ((r = n) == null || r.close(), i);
      }
    }
    constructor(t, n, o, r) {
      (this.socket = void 0),
        (this.conversationId = void 0),
        (this.inputFormat = void 0),
        (this.outputFormat = void 0),
        (this.queue = []),
        (this.disconnectionDetails = null),
        (this.onDisconnectCallback = null),
        (this.onMessageCallback = null),
        (this.socket = t),
        (this.conversationId = n),
        (this.inputFormat = o),
        (this.outputFormat = r),
        this.socket.addEventListener("error", (i) => {
          setTimeout(
            () =>
              this.disconnect({
                reason: "error",
                message: "The connection was closed due to a socket error.",
                context: i,
              }),
            0
          );
        }),
        this.socket.addEventListener("close", (i) => {
          this.disconnect(
            i.code === 1e3
              ? { reason: "agent", context: i }
              : {
                  reason: "error",
                  message:
                    i.reason || "The connection was closed by the server.",
                  context: i,
                }
          );
        }),
        this.socket.addEventListener("message", (i) => {
          try {
            const a = JSON.parse(i.data);
            if (!lr(a)) return;
            this.onMessageCallback
              ? this.onMessageCallback(a)
              : this.queue.push(a);
          } catch {}
        });
    }
    close() {
      this.socket.close();
    }
    sendMessage(t) {
      this.socket.send(JSON.stringify(t));
    }
    onMessage(t) {
      (this.onMessageCallback = t), this.queue.forEach(t), (this.queue = []);
    }
    onDisconnect(t) {
      (this.onDisconnectCallback = t),
        this.disconnectionDetails && t(this.disconnectionDetails);
    }
    disconnect(t) {
      var n;
      this.disconnectionDetails ||
        ((this.disconnectionDetails = t),
        (n = this.onDisconnectCallback) == null || n.call(this, t));
    }
  };
  function cr(e) {
    const [t, n] = e.split("_");
    if (!["pcm", "ulaw"].includes(t)) throw new Error(`Invalid format: ${e}`);
    const o = parseInt(n);
    if (isNaN(o)) throw new Error(`Invalid sample rate: ${n}`);
    return { format: t, sampleRate: o };
  }
  const za = { clientTools: {} },
    La = {
      onConnect: () => {},
      onDebug: () => {},
      onDisconnect: () => {},
      onError: () => {},
      onMessage: () => {},
      onModeChange: () => {},
      onStatusChange: () => {},
      onCanSendFeedbackChange: () => {},
    };
  class bn {
    static async startSession(t) {
      const n = Rt({}, za, La, t);
      n.onStatusChange({ status: "connecting" }),
        n.onCanSendFeedbackChange({ canSendFeedback: !1 });
      let o = null,
        r = null,
        i = null;
      try {
        const l = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        return (
          l == null || l.getTracks().forEach((d) => d.stop()),
          (r = await Da.create(t)),
          ([o, i] = await Promise.all([
            yn.create(
              Rt({}, r.inputFormat, {
                preferHeadphonesForIosDevices: t.preferHeadphonesForIosDevices,
              })
            ),
            Oa.create(r.outputFormat),
          ])),
          new bn(n, r, o, i)
        );
      } catch (l) {
        var a, s, c;
        throw (
          (n.onStatusChange({ status: "disconnected" }),
          (a = r) == null || a.close(),
          await ((s = o) == null ? void 0 : s.close()),
          await ((c = i) == null ? void 0 : c.close()),
          l)
        );
      }
    }
    constructor(t, n, o, r) {
      var i = this;
      (this.options = void 0),
        (this.connection = void 0),
        (this.input = void 0),
        (this.output = void 0),
        (this.lastInterruptTimestamp = 0),
        (this.mode = "listening"),
        (this.status = "connecting"),
        (this.inputFrequencyData = void 0),
        (this.outputFrequencyData = void 0),
        (this.volume = 1),
        (this.currentEventId = 1),
        (this.lastFeedbackEventId = 1),
        (this.canSendFeedback = !1),
        (this.endSession = () =>
          this.endSessionWithDetails({ reason: "user" })),
        (this.endSessionWithDetails = async function (a) {
          (i.status !== "connected" && i.status !== "connecting") ||
            (i.updateStatus("disconnecting"),
            i.connection.close(),
            await i.input.close(),
            await i.output.close(),
            i.updateStatus("disconnected"),
            i.options.onDisconnect(a));
        }),
        (this.updateMode = (a) => {
          a !== this.mode &&
            ((this.mode = a), this.options.onModeChange({ mode: a }));
        }),
        (this.updateStatus = (a) => {
          a !== this.status &&
            ((this.status = a), this.options.onStatusChange({ status: a }));
        }),
        (this.updateCanSendFeedback = () => {
          const a = this.currentEventId !== this.lastFeedbackEventId;
          this.canSendFeedback !== a &&
            ((this.canSendFeedback = a),
            this.options.onCanSendFeedbackChange({ canSendFeedback: a }));
        }),
        (this.onMessage = async function (a) {
          switch (a.type) {
            case "interruption":
              a.interruption_event &&
                (i.lastInterruptTimestamp = a.interruption_event.event_id),
                i.fadeOutAudio();
              break;
            case "agent_response":
              i.options.onMessage({
                source: "ai",
                message: a.agent_response_event.agent_response,
              });
              break;
            case "user_transcript":
              i.options.onMessage({
                source: "user",
                message: a.user_transcription_event.user_transcript,
              });
              break;
            case "internal_tentative_agent_response":
              i.options.onDebug({
                type: "tentative_agent_response",
                response:
                  a.tentative_agent_response_internal_event
                    .tentative_agent_response,
              });
              break;
            case "agent_response":
              const response = a.agent_response_event.agent_response;
              setCurrentTranscript(response);
              options.onMessage({
                source: "ai",
                message: response,
              });
              break;
            case "client_tool_call":
              if (
                i.options.clientTools.hasOwnProperty(
                  a.client_tool_call.tool_name
                )
              ) {
                try {
                  var s;
                  const c =
                    (s = await i.options.clientTools[
                      a.client_tool_call.tool_name
                    ](a.client_tool_call.parameters)) != null
                      ? s
                      : "Client tool execution successful.";
                  i.connection.sendMessage({
                    type: "client_tool_result",
                    tool_call_id: a.client_tool_call.tool_call_id,
                    result: c,
                    is_error: !1,
                  });
                } catch (c) {
                  i.onError(
                    "Client tool execution failed with following error: " +
                      (c == null ? void 0 : c.message),
                    { clientToolName: a.client_tool_call.tool_name }
                  ),
                    i.connection.sendMessage({
                      type: "client_tool_result",
                      tool_call_id: a.client_tool_call.tool_call_id,
                      result:
                        "Client tool execution failed: " +
                        (c == null ? void 0 : c.message),
                      is_error: !0,
                    });
                }
                break;
              }
              if (i.options.onUnhandledClientToolCall) {
                i.options.onUnhandledClientToolCall(a.client_tool_call);
                break;
              }
              i.onError(
                `Client tool with name ${a.client_tool_call.tool_name} is not defined on client`,
                { clientToolName: a.client_tool_call.tool_name }
              ),
                i.connection.sendMessage({
                  type: "client_tool_result",
                  tool_call_id: a.client_tool_call.tool_call_id,
                  result: `Client tool with name ${a.client_tool_call.tool_name} is not defined on client`,
                  is_error: !0,
                });
              break;
            case "audio":
              i.lastInterruptTimestamp <= a.audio_event.event_id &&
                (i.addAudioBase64Chunk(a.audio_event.audio_base_64),
                (i.currentEventId = a.audio_event.event_id),
                i.updateCanSendFeedback(),
                i.updateMode("speaking"));
              break;
            case "ping":
              i.connection.sendMessage({
                type: "pong",
                event_id: a.ping_event.event_id,
              });
              break;
            default:
              i.options.onDebug(a);
          }
        }),
        (this.onInputWorkletMessage = (a) => {
          this.status === "connected" &&
            this.connection.sendMessage({
              user_audio_chunk: Aa(a.data[0].buffer),
            });
        }),
        (this.onOutputWorkletMessage = ({ data: a }) => {
          a.type === "process" &&
            this.updateMode(a.finished ? "listening" : "speaking");
        }),
        (this.addAudioBase64Chunk = (a) => {
          (this.output.gain.gain.value = this.volume),
            this.output.worklet.port.postMessage({ type: "clearInterrupted" }),
            this.output.worklet.port.postMessage({
              type: "buffer",
              buffer: ka(a),
            });
        }),
        (this.fadeOutAudio = () => {
          this.updateMode("listening"),
            this.output.worklet.port.postMessage({ type: "interrupt" }),
            this.output.gain.gain.exponentialRampToValueAtTime(
              1e-4,
              this.output.context.currentTime + 2
            ),
            setTimeout(() => {
              (this.output.gain.gain.value = this.volume),
                this.output.worklet.port.postMessage({
                  type: "clearInterrupted",
                });
            }, 2e3);
        }),
        (this.onError = (a, s) => {
          console.error(a, s), this.options.onError(a, s);
        }),
        (this.calculateVolume = (a) => {
          if (a.length === 0) return 0;
          let s = 0;
          for (let c = 0; c < a.length; c++) s += a[c] / 255;
          return (s /= a.length), s < 0 ? 0 : s > 1 ? 1 : s;
        }),
        (this.getId = () => this.connection.conversationId),
        (this.isOpen = () => this.status === "connected"),
        (this.setVolume = ({ volume: a }) => {
          this.volume = a;
        }),
        (this.getInputByteFrequencyData = () => (
          this.inputFrequencyData != null ||
            (this.inputFrequencyData = new Uint8Array(
              this.input.analyser.frequencyBinCount
            )),
          this.input.analyser.getByteFrequencyData(this.inputFrequencyData),
          this.inputFrequencyData
        )),
        (this.getOutputByteFrequencyData = () => (
          this.outputFrequencyData != null ||
            (this.outputFrequencyData = new Uint8Array(
              this.output.analyser.frequencyBinCount
            )),
          this.output.analyser.getByteFrequencyData(this.outputFrequencyData),
          this.outputFrequencyData
        )),
        (this.getInputVolume = () =>
          this.calculateVolume(this.getInputByteFrequencyData())),
        (this.getOutputVolume = () =>
          this.calculateVolume(this.getOutputByteFrequencyData())),
        (this.sendFeedback = (a) => {
          this.canSendFeedback
            ? (this.connection.sendMessage({
                type: "feedback",
                score: a ? "like" : "dislike",
                event_id: this.currentEventId,
              }),
              (this.lastFeedbackEventId = this.currentEventId),
              this.updateCanSendFeedback())
            : console.warn(
                this.lastFeedbackEventId === 0
                  ? "Cannot send feedback: the conversation has not started yet."
                  : "Cannot send feedback: feedback has already been sent for the current response."
              );
        }),
        (this.options = t),
        (this.connection = n),
        (this.input = o),
        (this.output = r),
        this.options.onConnect({ conversationId: n.conversationId }),
        this.connection.onDisconnect(this.endSessionWithDetails),
        this.connection.onMessage(this.onMessage),
        (this.input.worklet.port.onmessage = this.onInputWorkletMessage),
        (this.output.worklet.port.onmessage = this.onOutputWorkletMessage),
        this.updateStatus("connected");
    }
  }
  function Ma(e, t, n = `https://api.${kau}`) {
    return fetch(`${n}/v1/convai/conversations/${e}/feedback`, {
      method: "POST",
      body: JSON.stringify({ feedback: t ? "like" : "dislike" }),
      headers: { "Content-Type": "application/json" },
    });
  }
  function wn() {
    return (
      (wn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
      wn.apply(null, arguments)
    );
  }
  function Fa(e) {
    const t = L(null),
      n = L(null),
      [o, r] = E("disconnected"),
      [i, a] = E(!1),
      [s, c] = E("listening");
    return (
      z(
        () => () => {
          var l;
          (l = t.current) == null || l.endSession();
        },
        []
      ),
      {
        startSession: async (l) => {
          var d;
          if ((d = t.current) != null && d.isOpen()) return t.current.getId();
          if (n.current) return (await n.current).getId();
          try {
            return (
              (n.current = bn.startSession(
                wn({}, e ?? {}, l ?? {}, {
                  onModeChange: ({ mode: u }) => {
                    c(u);
                  },
                  onStatusChange: ({ status: u }) => {
                    r(u);
                  },
                  onCanSendFeedbackChange: ({ canSendFeedback: u }) => {
                    a(u);
                  },
                })
              )),
              (t.current = await n.current),
              t.current.getId()
            );
          } finally {
            n.current = null;
          }
        },
        endSession: async () => {
          const l = t.current;
          (t.current = null), await (l == null ? void 0 : l.endSession());
        },
        setVolume: ({ volume: l }) => {
          var d;
          (d = t.current) == null || d.setVolume({ volume: l });
        },
        getInputByteFrequencyData: () => {
          var l;
          return (l = t.current) == null
            ? void 0
            : l.getInputByteFrequencyData();
        },
        getOutputByteFrequencyData: () => {
          var l;
          return (l = t.current) == null
            ? void 0
            : l.getOutputByteFrequencyData();
        },
        getInputVolume: () => {
          var l, d;
          return (l = (d = t.current) == null ? void 0 : d.getInputVolume()) !=
            null
            ? l
            : 0;
        },
        getOutputVolume: () => {
          var l, d;
          return (l = (d = t.current) == null ? void 0 : d.getOutputVolume()) !=
            null
            ? l
            : 0;
        },
        sendFeedback: (l) => {
          var d;
          (d = t.current) == null || d.sendFeedback(l);
        },
        status: o,
        canSendFeedback: i,
        isSpeaking: s === "speaking",
      }
    );
  }
  function ChatIcon({ className }) {
  return g("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    children: g("path", {
      d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
    })
  });
}
  function Ba(e) {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      height: "24px",
      width: "24px",
      ...e,
      children: g("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      }),
    });
  }
  function ur(e) {
    return g("svg", {
      viewBox: "0 0 640 640",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      stroke: "currentColor",
      fill: "currentColor",
      ...e,
      children: g("path", {
        d: "",
      }),
    });
  }
  function $a(e) {
    return g("svg", {
      viewBox: "0 0 640 640",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      stroke: "currentColor",
      fill: "currentColor",
      ...e,
      children: g("path", {
        d: "",
      }),
    });
  }
  function Wa(e) {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: "lucide lucide-thumbs-up",
      ...e,
      children: [
        g("path", { d: "M7 10v12" }),
        g("path", {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        }),
      ],
    });
  }
  function Va(e) {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...e,
      children: [
        g("path", { d: "M17 14V2" }),
        g("path", {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
        }),
      ],
    });
  }
  const S = {
      wrapper: "_wrapper_1yvvz_15",
      box: "_box_1yvvz_36",
      open: "_open_1yvvz_54",
      expandable: "_expandable_1yvvz_59",
      customContent: "_customContent_1yvvz_65",
      compact: "_compact_1yvvz_69",
      avatar: "_avatar_1yvvz_75",
      chatBubble: "_chatBubble_1yvvz_600",
      chatBubbleText: "_chatBubbleText_1yvvz_630",
      avatarBackground: "_avatarBackground_1yvvz_91",
      avatarImage: "_avatarImage_1yvvz_101",
      canvas: "_canvas_1yvvz_113",
      actions: "_actions_1yvvz_118",
      hasLanguageSelect: "_hasLanguageSelect_1yvvz_126",
      actionButtons: "_actionButtons_1yvvz_136",
      status: "_status_1yvvz_145",
      btn: "_btn_1yvvz_159",
      disabled: "_disabled_1yvvz_205",
      secondary: "_secondary_1yvvz_219",
      iconBtn: "_iconBtn_1yvvz_233",
      select: "_select_1yvvz_237",
      ellipsis: "_ellipsis_1yvvz_243",
      icon: "_icon_1yvvz_233",
      minimize: "_minimize_1yvvz_263",
      openContent: "_openContent_1yvvz_278",
      closedContent: "_closedContent_1yvvz_293",
      poweredBy: "_poweredBy_1yvvz_310",
      full: "_full_1yvvz_335",
      terms: "_terms_1yvvz_339",
      strong: "_strong_1yvvz_370",
      show: "_show_1yvvz_398",
      termsFooter: "_termsFooter_1yvvz_402",
      feedback: "_feedback_1yvvz_413",
      flag: "_flag_1yvvz_439",
      selectContent: "_selectContent_1yvvz_447",
      selectViewport: "_selectViewport_1yvvz_458",
      selectValue: "_selectValue_1yvvz_462",
      selectIcon: "_selectIcon_1yvvz_468",
      selectItem: "_selectItem_1yvvz_476",
      selectItemIndicator: "_selectItemIndicator_1yvvz_495",
      selectScrollButton: "_selectScrollButton_1yvvz_504",
      error: "_error_1yvvz_513",
    },
    Ha = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,
    Ua = `#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,
    dr = 0,
    ja = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
    qa =
      "https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",
    we = class we {
      constructor(t) {
        Ne(this, "gl");
        Ne(this, "program");
        Ne(this, "startTime");
        Ne(this, "rafId", null);
        Ne(this, "resizeObserver");
        Ne(this, "copyNoiseImage", () => {
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.gl.RGBA,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            we.noiseImage
          ),
            this.gl.generateMipmap(this.gl.TEXTURE_2D);
        });
        Ne(this, "render", () => {
          if (!this.gl) {
            this.rafId = null;
            return;
          }
          const t = (performance.now() - this.startTime) / 1e3;
          this.gl.uniform1f(
            this.gl.getUniformLocation(this.program, "uTime"),
            t
          ),
            this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4),
            (this.rafId = requestAnimationFrame(this.render));
        });
        const n = t.getContext("webgl2", { depth: !1, stencil: !1 });
        this.gl = n;
        const o = this.getShader(n.FRAGMENT_SHADER, Ha),
          r = this.getShader(n.VERTEX_SHADER, Ua);
        if (!o || !r) throw new Error("Failed to compile shaders");
        if (
          ((this.program = n.createProgram()),
          n.attachShader(this.program, o),
          n.attachShader(this.program, r),
          n.linkProgram(this.program),
          !n.getProgramParameter(this.program, n.LINK_STATUS))
        )
          throw new Error("Failed to link program");
        const i = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, i),
          n.texImage2D(
            n.TEXTURE_2D,
            0,
            n.RGBA,
            1,
            1,
            0,
            n.RGBA,
            n.UNSIGNED_BYTE,
            new Uint8Array([128, 128, 128, 255])
          ),
          we.noiseImage ||
            ((we.noiseImage = new Image()),
            (we.noiseImage.crossOrigin = "anonymous"),
            (we.noiseImage.src = qa)),
          we.noiseImage.complete
            ? this.copyNoiseImage()
            : we.noiseImage.addEventListener("load", this.copyNoiseImage);
        const a = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, a),
          n.bufferData(n.ARRAY_BUFFER, ja, n.STATIC_DRAW),
          n.vertexAttribPointer(dr, 2, n.FLOAT, !1, 0, 0),
          n.enableVertexAttribArray(dr),
          n.useProgram(this.program),
          n.uniform1i(n.getUniformLocation(this.program, "uPerlinTexture"), 0),
          n.uniform1fv(
            n.getUniformLocation(this.program, "uOffsets"),
            new Float32Array(7).map(() => Math.random() * Math.PI * 2)
          ),
          this.updateColors("#2792DC", "#9CE6E6"),
          (this.resizeObserver = new ResizeObserver((c) => {
            const l = c[0];
            let d;
            l.devicePixelContentBoxSize
              ? (d = l.devicePixelContentBoxSize[0])
              : (d = l.contentBoxSize[0]),
              (t.width = Math.min(512, d.inlineSize)),
              (t.height = Math.min(512, d.blockSize)),
              this.updateViewport();
          }));
        const s = t.parentElement;
        if (s)
          try {
            this.resizeObserver.observe(s, { box: "device-pixel-content-box" });
          } catch {
            this.resizeObserver.observe(s);
          }
        (this.startTime = performance.now()),
          (this.rafId = requestAnimationFrame(this.render));
      }
      dispose() {
        var t, n, o;
        this.rafId !== null && cancelAnimationFrame(this.rafId),
          (t = this.resizeObserver) == null || t.disconnect(),
          (o =
            (n = this.gl) == null
              ? void 0
              : n.getExtension("WEBGL_lose_context")) == null ||
            o.loseContext(),
          (this.gl = null),
          (this.program = null);
      }
      updateViewport() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      }
      updateColors(t, n) {
        this.updateColor("uColor1", t), this.updateColor("uColor2", n);
      }
      updateColor(t, n) {
        try {
          const o = parseInt(n.slice(1, 3), 16) / 255,
            r = parseInt(n.slice(3, 5), 16) / 255,
            i = parseInt(n.slice(5, 7), 16) / 255;
          this.gl.uniform3fv(this.gl.getUniformLocation(this.program, t), [
            Math.pow(o, 2.2),
            Math.pow(r, 2.2),
            Math.pow(i, 2.2),
          ]);
        } catch (o) {
          console.error(`Failed to parse ${n} as color:`, o);
        }
      }
      getShader(t, n) {
        const o = this.gl.createShader(t);
        return (
          this.gl.shaderSource(o, n),
          this.gl.compileShader(o),
          this.gl.getShaderParameter(o, this.gl.COMPILE_STATUS)
            ? o
            : (this.gl.deleteShader(o), null)
        );
      }
    };
  Ne(we, "noiseImage");
  let xn = we;
  function Ka({
    getInputVolume: e,
    getOutputVolume: t,
    isSpeaking: n,
    status: o,
    config: r,
  }) {
    const i = L(null),
      a = L(null);
    return (
      z(() => {
        if (o === "disconnected") {
          (i.current.style.transform = ""),
            (a.current.style.transform = ""),
            (a.current.style.opacity = "");
          return;
        }
        let s;
        function c() {
          const l = e(),
            d = t(),
            u = n ? 1 : 0.5,
            _ = n ? 1 : 1 - l * 0.6,
            p = n ? 1 + d * 0.6 : 1;
          (i.current.style.transform = `scale(${p})`),
            (a.current.style.transform = `scale(${_})`),
            (a.current.style.opacity = `${u}`),
            (s = requestAnimationFrame(c));
        }
        return (
          c(),
          () => {
            cancelAnimationFrame(s);
          }
        );
      }, [o]),
      g("div", {
        className: S.avatar,
        children: [
          g("div", { ref: i, className: S.avatarBackground }),
          g("div", {
            ref: a,
            style: {
              backgroundImage:
                r.type === "image"
                  ? `url(${r.url})`
                  : r.type === "url"
                  ? `url(${r.custom_url})`
                  : void 0,
            },
            className: S.avatarImage,
            children:
              r.type === "orb" &&
              g(Ya, { color1: r.color_1, color2: r.color_2 }),
          }),
        ],
      })
    );
  }
  function Ya({ color1: e, color2: t }) {
    const n = L(null),
      o = L(null);
    return (
      z(() => {
        var r;
        try {
          o.current = new xn(n.current);
        } catch {
          (r = o.current) == null || r.dispose(), (o.current = null);
        }
        return () => {
          var i;
          (i = o.current) == null || i.dispose();
        };
      }, []),
      z(() => {
        var r;
        (r = o.current) == null || r.updateColors(e, t);
      }, [e, t]),
      g("canvas", { className: S.canvas, ref: n })
    );
  }
  function fr(e) {
    var t,
      n,
      o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var r = e.length;
        for (t = 0; t < r; t++)
          e[t] && (n = fr(e[t])) && (o && (o += " "), (o += n));
      } else for (n in e) e[n] && (o && (o += " "), (o += n));
    return o;
  }
  function ce() {
    for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
      (e = arguments[n]) && (t = fr(e)) && (o && (o += " "), (o += t));
    return o;
  }
  function pr() {
    return g("div", {
      className: S.poweredBy,
      children: [
        g("span", { children: "Powered by Kaufy Tech" }),
      ],
    });
  }
  const Cn = {
    en: { name: "English", flagCode: "us", languageCode: "en" },
    zh: { name: "Chinese", flagCode: "cn", languageCode: "zh" },
    es: { name: "Spanish", flagCode: "es", languageCode: "es" },
    hi: { name: "Hindi", flagCode: "in", languageCode: "hi" },
    pt: { name: "Portuguese", flagCode: "br", languageCode: "pt" },
    fr: { name: "French", flagCode: "fr", languageCode: "fr" },
    de: { name: "German", flagCode: "de", languageCode: "de" },
    ja: { name: "Japanese", flagCode: "jp", languageCode: "ja" },
    ar: { name: "Arabic", flagCode: "ae", languageCode: "ar" },
    ru: { name: "Russian", flagCode: "ru", languageCode: "ru" },
    ko: { name: "Korean", flagCode: "kr", languageCode: "ko" },
    id: { name: "Indonesian", flagCode: "id", languageCode: "id" },
    it: { name: "Italian", flagCode: "it", languageCode: "it" },
    nl: { name: "Dutch", flagCode: "nl", languageCode: "nl" },
    tr: { name: "Turkish", flagCode: "tr", languageCode: "tr" },
    pl: { name: "Polish", flagCode: "pl", languageCode: "pl" },
    sv: { name: "Swedish", flagCode: "se", languageCode: "sv" },
    fil: { name: "Filipino", flagCode: "ph", languageCode: "fi" },
    ms: { name: "Malay", flagCode: "my", languageCode: "ms" },
    ro: { name: "Romanian", flagCode: "ro", languageCode: "ro" },
    uk: { name: "Ukrainian", flagCode: "ua", languageCode: "uk" },
    el: { name: "Greek", flagCode: "gr", languageCode: "el" },
    cs: { name: "Czech", flagCode: "cz", languageCode: "cs" },
    da: { name: "Danish", flagCode: "dk", languageCode: "da" },
    fi: { name: "Finnish", flagCode: "fi", languageCode: "fi" },
    bg: { name: "Bulgarian", flagCode: "bg", languageCode: "bg" },
    hr: { name: "Croatian", flagCode: "hr", languageCode: "hr" },
    sk: { name: "Slovak", flagCode: "sk", languageCode: "sk" },
    ta: { name: "Tamil", flagCode: "in", languageCode: "ta" },
    hu: { name: "Hungarian", flagCode: "hu", languageCode: "hu" },
    no: { name: "Norwegian", flagCode: "no", languageCode: "no" },
    vi: { name: "Vietnamese", flagCode: "vn", languageCode: "vi" },
  };
  function hr(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
  }
  function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
      if ((e == null || e(r), n === !1 || !r.defaultPrevented))
        return t == null ? void 0 : t(r);
    };
  }
  function _r(e, t = []) {
    let n = [];
    function o(i, a) {
      const s = De(a),
        c = n.length;
      n = [...n, a];
      function l(u) {
        const { scope: _, children: p, ...y } = u,
          f = (_ == null ? void 0 : _[e][c]) || s,
          m = Y(() => y, Object.values(y));
        return g(f.Provider, { value: m, children: p });
      }
      function d(u, _) {
        const p = (_ == null ? void 0 : _[e][c]) || s,
          y = Xe(p);
        if (y) return y;
        if (a !== void 0) return a;
        throw new Error(`\`${u}\` must be used within \`${i}\``);
      }
      return (l.displayName = i + "Provider"), [l, d];
    }
    const r = () => {
      const i = n.map((a) => De(a));
      return function (s) {
        const c = (s == null ? void 0 : s[e]) || i;
        return Y(() => ({ [`__scope${e}`]: { ...s, [e]: c } }), [s, c]);
      };
    };
    return (r.scopeName = e), [o, Ga(r, ...t)];
  }
  function Ga(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
      return function (i) {
        const a = o.reduce((s, { useScope: c, scopeName: l }) => {
          const u = c(i)[`__scope${l}`];
          return { ...s, ...u };
        }, {});
        return Y(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  function Xa(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function vr(...e) {
    return (t) => e.forEach((n) => Xa(n, t));
  }
  function ie(...e) {
    return G(vr(...e), e);
  }
  var _t = F((e, t) => {
    const { children: n, ...o } = e,
      r = Le.toArray(n),
      i = r.find(Ja);
    if (i) {
      const a = i.props.children,
        s = r.map((c) =>
          c === i
            ? Le.count(a) > 1
              ? Le.only(null)
              : Pe(a)
              ? a.props.children
              : null
            : c
        );
      return g(Sn, { ...o, ref: t, children: Pe(a) ? ht(a, void 0, s) : null });
    }
    return g(Sn, { ...o, ref: t, children: n });
  });
  _t.displayName = "Slot";
  var Sn = F((e, t) => {
    const { children: n, ...o } = e;
    if (Pe(n)) {
      const r = es(n);
      return ht(n, { ...Qa(o, n.props), ref: t ? vr(t, r) : r });
    }
    return Le.count(n) > 1 ? Le.only(null) : null;
  });
  Sn.displayName = "SlotClone";
  var Za = ({ children: e }) => g(oe, { children: e });
  function Ja(e) {
    return Pe(e) && e.type === Za;
  }
  function Qa(e, t) {
    const n = { ...t };
    for (const o in t) {
      const r = e[o],
        i = t[o];
      /^on[A-Z]/.test(o)
        ? r && i
          ? (n[o] = (...s) => {
              i(...s), r(...s);
            })
          : r && (n[o] = r)
        : o === "style"
        ? (n[o] = { ...r, ...i })
        : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function es(e) {
    var o, r;
    let t =
        (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : o.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : r.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function ts(e) {
    const t = e + "CollectionProvider",
      [n, o] = _r(t),
      [r, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      a = (p) => {
        const { scope: y, children: f } = p,
          m = Ae.useRef(null),
          v = Ae.useRef(new Map()).current;
        return g(r, { scope: y, itemMap: v, collectionRef: m, children: f });
      };
    a.displayName = t;
    const s = e + "CollectionSlot",
      c = Ae.forwardRef((p, y) => {
        const { scope: f, children: m } = p,
          v = i(s, f),
          h = ie(y, v.collectionRef);
        return g(_t, { ref: h, children: m });
      });
    c.displayName = s;
    const l = e + "CollectionItemSlot",
      d = "data-radix-collection-item",
      u = Ae.forwardRef((p, y) => {
        const { scope: f, children: m, ...v } = p,
          h = Ae.useRef(null),
          b = ie(y, h),
          w = i(l, f);
        return (
          Ae.useEffect(
            () => (
              w.itemMap.set(h, { ref: h, ...v }), () => void w.itemMap.delete(h)
            )
          ),
          g(_t, { [d]: "", ref: b, children: m })
        );
      });
    u.displayName = l;
    function _(p) {
      const y = i(e + "CollectionConsumer", p);
      return Ae.useCallback(() => {
        const m = y.collectionRef.current;
        if (!m) return [];
        const v = Array.from(m.querySelectorAll(`[${d}]`));
        return Array.from(y.itemMap.values()).sort(
          (w, x) => v.indexOf(w.ref.current) - v.indexOf(x.ref.current)
        );
      }, [y.collectionRef, y.itemMap]);
    }
    return [{ Provider: a, Slot: c, ItemSlot: u }, _, o];
  }
  function ns(e, t = []) {
    let n = [];
    function o(i, a) {
      const s = De(a),
        c = n.length;
      n = [...n, a];
      const l = (u) => {
        var v;
        const { scope: _, children: p, ...y } = u,
          f = ((v = _ == null ? void 0 : _[e]) == null ? void 0 : v[c]) || s,
          m = Y(() => y, Object.values(y));
        return g(f.Provider, { value: m, children: p });
      };
      l.displayName = i + "Provider";
      function d(u, _) {
        var f;
        const p =
            ((f = _ == null ? void 0 : _[e]) == null ? void 0 : f[c]) || s,
          y = Xe(p);
        if (y) return y;
        if (a !== void 0) return a;
        throw new Error(`\`${u}\` must be used within \`${i}\``);
      }
      return [l, d];
    }
    const r = () => {
      const i = n.map((a) => De(a));
      return function (s) {
        const c = (s == null ? void 0 : s[e]) || i;
        return Y(() => ({ [`__scope${e}`]: { ...s, [e]: c } }), [s, c]);
      };
    };
    return (r.scopeName = e), [o, os(r, ...t)];
  }
  function os(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
      return function (i) {
        const a = o.reduce((s, { useScope: c, scopeName: l }) => {
          const u = c(i)[`__scope${l}`];
          return { ...s, ...u };
        }, {});
        return Y(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  var rs = De(void 0);
  function is(e) {
    const t = Xe(rs);
    return e || t || "ltr";
  }
  var as = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    ne = as.reduce((e, t) => {
      const n = F((o, r) => {
        const { asChild: i, ...a } = o,
          s = i ? _t : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g(s, { ...a, ref: r })
        );
      });
      return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
    }, {});
  function ss(e, t) {
    e && Tt(() => e.dispatchEvent(t));
  }
  function ke(e) {
    const t = L(e);
    return (
      z(() => {
        t.current = e;
      }),
      Y(
        () =>
          (...n) => {
            var o;
            return (o = t.current) == null ? void 0 : o.call(t, ...n);
          },
        []
      )
    );
  }
  function ls(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e);
    z(() => {
      const o = (r) => {
        r.key === "Escape" && n(r);
      };
      return (
        t.addEventListener("keydown", o, { capture: !0 }),
        () => t.removeEventListener("keydown", o, { capture: !0 })
      );
    }, [n, t]);
  }
  var cs = "DismissableLayer",
    En = "dismissableLayer.update",
    us = "dismissableLayer.pointerDownOutside",
    ds = "dismissableLayer.focusOutside",
    mr,
    gr = De({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    yr = F((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: o,
          onPointerDownOutside: r,
          onFocusOutside: i,
          onInteractOutside: a,
          onDismiss: s,
          ...c
        } = e,
        l = Xe(gr),
        [d, u] = E(null),
        _ =
          (d == null ? void 0 : d.ownerDocument) ??
          (globalThis == null ? void 0 : globalThis.document),
        [, p] = E({}),
        y = ie(t, (C) => u(C)),
        f = Array.from(l.layers),
        [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
        v = f.indexOf(m),
        h = d ? f.indexOf(d) : -1,
        b = l.layersWithOutsidePointerEventsDisabled.size > 0,
        w = h >= v,
        x = hs((C) => {
          const k = C.target,
            O = [...l.branches].some((T) => T.contains(k));
          !w ||
            O ||
            (r == null || r(C),
            a == null || a(C),
            C.defaultPrevented || s == null || s());
        }, _),
        P = _s((C) => {
          const k = C.target;
          [...l.branches].some((T) => T.contains(k)) ||
            (i == null || i(C),
            a == null || a(C),
            C.defaultPrevented || s == null || s());
        }, _);
      return (
        ls((C) => {
          h === l.layers.size - 1 &&
            (o == null || o(C),
            !C.defaultPrevented && s && (C.preventDefault(), s()));
        }, _),
        z(() => {
          if (d)
            return (
              n &&
                (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((mr = _.body.style.pointerEvents),
                  (_.body.style.pointerEvents = "none")),
                l.layersWithOutsidePointerEventsDisabled.add(d)),
              l.layers.add(d),
              br(),
              () => {
                n &&
                  l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (_.body.style.pointerEvents = mr);
              }
            );
        }, [d, _, n, l]),
        z(
          () => () => {
            d &&
              (l.layers.delete(d),
              l.layersWithOutsidePointerEventsDisabled.delete(d),
              br());
          },
          [d, l]
        ),
        z(() => {
          const C = () => p({});
          return (
            document.addEventListener(En, C),
            () => document.removeEventListener(En, C)
          );
        }, []),
        g(ne.div, {
          ...c,
          ref: y,
          style: {
            pointerEvents: b ? (w ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: te(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: te(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: te(
            e.onPointerDownCapture,
            x.onPointerDownCapture
          ),
        })
      );
    });
  yr.displayName = cs;
  var fs = "DismissableLayerBranch",
    ps = F((e, t) => {
      const n = Xe(gr),
        o = L(null),
        r = ie(t, o);
      return (
        z(() => {
          const i = o.current;
          if (i)
            return (
              n.branches.add(i),
              () => {
                n.branches.delete(i);
              }
            );
        }, [n.branches]),
        g(ne.div, { ...e, ref: r })
      );
    });
  ps.displayName = fs;
  function hs(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e),
      o = L(!1),
      r = L(() => {});
    return (
      z(() => {
        const i = (s) => {
            if (s.target && !o.current) {
              let c = function () {
                wr(us, n, l, { discrete: !0 });
              };
              const l = { originalEvent: s };
              s.pointerType === "touch"
                ? (t.removeEventListener("click", r.current),
                  (r.current = c),
                  t.addEventListener("click", r.current, { once: !0 }))
                : c();
            } else t.removeEventListener("click", r.current);
            o.current = !1;
          },
          a = window.setTimeout(() => {
            t.addEventListener("pointerdown", i);
          }, 0);
        return () => {
          window.clearTimeout(a),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", r.current);
        };
      }, [t, n]),
      { onPointerDownCapture: () => (o.current = !0) }
    );
  }
  function _s(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e),
      o = L(!1);
    return (
      z(() => {
        const r = (i) => {
          i.target &&
            !o.current &&
            wr(ds, n, { originalEvent: i }, { discrete: !1 });
        };
        return (
          t.addEventListener("focusin", r),
          () => t.removeEventListener("focusin", r)
        );
      }, [t, n]),
      {
        onFocusCapture: () => (o.current = !0),
        onBlurCapture: () => (o.current = !1),
      }
    );
  }
  function br() {
    const e = new CustomEvent(En);
    document.dispatchEvent(e);
  }
  function wr(e, t, n, { discrete: o }) {
    const r = n.originalEvent.target,
      i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && r.addEventListener(e, t, { once: !0 }),
      o ? ss(r, i) : r.dispatchEvent(i);
  }
  var Pn = 0;
  function vs() {
    z(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", e[0] ?? xr()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? xr()),
        Pn++,
        () => {
          Pn === 1 &&
            document
              .querySelectorAll("[data-radix-focus-guard]")
              .forEach((t) => t.remove()),
            Pn--;
        }
      );
    }, []);
  }
  function xr() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.outline = "none"),
      (e.style.opacity = "0"),
      (e.style.position = "fixed"),
      (e.style.pointerEvents = "none"),
      e
    );
  }
  var An = "focusScope.autoFocusOnMount",
    kn = "focusScope.autoFocusOnUnmount",
    Cr = { bubbles: !1, cancelable: !0 },
    ms = "FocusScope",
    Sr = F((e, t) => {
      const {
          loop: n = !1,
          trapped: o = !1,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          ...a
        } = e,
        [s, c] = E(null),
        l = ke(r),
        d = ke(i),
        u = L(null),
        _ = ie(t, (f) => c(f)),
        p = L({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      z(() => {
        if (o) {
          let f = function (b) {
              if (p.paused || !s) return;
              const w = b.target;
              s.contains(w) ? (u.current = w) : Me(u.current, { select: !0 });
            },
            m = function (b) {
              if (p.paused || !s) return;
              const w = b.relatedTarget;
              w !== null && (s.contains(w) || Me(u.current, { select: !0 }));
            },
            v = function (b) {
              if (document.activeElement === document.body)
                for (const x of b) x.removedNodes.length > 0 && Me(s);
            };
          document.addEventListener("focusin", f),
            document.addEventListener("focusout", m);
          const h = new MutationObserver(v);
          return (
            s && h.observe(s, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener("focusin", f),
                document.removeEventListener("focusout", m),
                h.disconnect();
            }
          );
        }
      }, [o, s, p.paused]),
        z(() => {
          if (s) {
            Ar.add(p);
            const f = document.activeElement;
            if (!s.contains(f)) {
              const v = new CustomEvent(An, Cr);
              s.addEventListener(An, l),
                s.dispatchEvent(v),
                v.defaultPrevented ||
                  (gs(Cs(Er(s)), { select: !0 }),
                  document.activeElement === f && Me(s));
            }
            return () => {
              s.removeEventListener(An, l),
                setTimeout(() => {
                  const v = new CustomEvent(kn, Cr);
                  s.addEventListener(kn, d),
                    s.dispatchEvent(v),
                    v.defaultPrevented ||
                      Me(f ?? document.body, { select: !0 }),
                    s.removeEventListener(kn, d),
                    Ar.remove(p);
                }, 0);
            };
          }
        }, [s, l, d, p]);
      const y = G(
        (f) => {
          if ((!n && !o) || p.paused) return;
          const m = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
            v = document.activeElement;
          if (m && v) {
            const h = f.currentTarget,
              [b, w] = ys(h);
            b && w
              ? !f.shiftKey && v === w
                ? (f.preventDefault(), n && Me(b, { select: !0 }))
                : f.shiftKey &&
                  v === b &&
                  (f.preventDefault(), n && Me(w, { select: !0 }))
              : v === h && f.preventDefault();
          }
        },
        [n, o, p.paused]
      );
      return g(ne.div, { tabIndex: -1, ...a, ref: _, onKeyDown: y });
    });
  Sr.displayName = ms;
  function gs(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const o of e)
      if ((Me(o, { select: t }), document.activeElement !== n)) return;
  }
  function ys(e) {
    const t = Er(e),
      n = Pr(t, e),
      o = Pr(t.reverse(), e);
    return [n, o];
  }
  function Er(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const r = o.tagName === "INPUT" && o.type === "hidden";
          return o.disabled || o.hidden || r
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function Pr(e, t) {
    for (const n of e) if (!bs(n, { upTo: t })) return n;
  }
  function bs(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
      if (t !== void 0 && e === t) return !1;
      if (getComputedStyle(e).display === "none") return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function ws(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function Me(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({ preventScroll: !0 }), e !== n && ws(e) && t && e.select();
    }
  }
  var Ar = xs();
  function xs() {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        t !== n && (n == null || n.pause()), (e = kr(e, t)), e.unshift(t);
      },
      remove(t) {
        var n;
        (e = kr(e, t)), (n = e[0]) == null || n.resume();
      },
    };
  }
  function kr(e, t) {
    const n = [...e],
      o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n;
  }
  function Cs(e) {
    return e.filter((t) => t.tagName !== "A");
  }
  var ue = globalThis != null && globalThis.document ? ze : () => {},
    Ss = Pa.useId || (() => {}),
    Es = 0;
  function In(e) {
    const [t, n] = E(Ss());
    return (
      ue(() => {
        e || n((o) => o ?? String(Es++));
      }, [e]),
      e || (t ? `radix-${t}` : "")
    );
  }
  const Ps = ["top", "right", "bottom", "left"],
    Fe = Math.min,
    de = Math.max,
    Nt = Math.round,
    Ot = Math.floor,
    Be = (e) => ({ x: e, y: e }),
    As = { left: "right", right: "left", bottom: "top", top: "bottom" },
    ks = { start: "end", end: "start" };
  function Tn(e, t, n) {
    return de(e, Fe(t, n));
  }
  function Ie(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Te(e) {
    return e.split("-")[0];
  }
  function nt(e) {
    return e.split("-")[1];
  }
  function Rn(e) {
    return e === "x" ? "y" : "x";
  }
  function Nn(e) {
    return e === "y" ? "height" : "width";
  }
  function $e(e) {
    return ["top", "bottom"].includes(Te(e)) ? "y" : "x";
  }
  function On(e) {
    return Rn($e(e));
  }
  function Is(e, t, n) {
    n === void 0 && (n = !1);
    const o = nt(e),
      r = On(e),
      i = Nn(r);
    let a =
      r === "x"
        ? o === (n ? "end" : "start")
          ? "right"
          : "left"
        : o === "start"
        ? "bottom"
        : "top";
    return t.reference[i] > t.floating[i] && (a = Dt(a)), [a, Dt(a)];
  }
  function Ts(e) {
    const t = Dt(e);
    return [Dn(e), t, Dn(t)];
  }
  function Dn(e) {
    return e.replace(/start|end/g, (t) => ks[t]);
  }
  function Rs(e, t, n) {
    const o = ["left", "right"],
      r = ["right", "left"],
      i = ["top", "bottom"],
      a = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? r : o) : t ? o : r;
      case "left":
      case "right":
        return t ? i : a;
      default:
        return [];
    }
  }
  function Ns(e, t, n, o) {
    const r = nt(e);
    let i = Rs(Te(e), n === "start", o);
    return (
      r && ((i = i.map((a) => a + "-" + r)), t && (i = i.concat(i.map(Dn)))), i
    );
  }
  function Dt(e) {
    return e.replace(/left|right|bottom|top/g, (t) => As[t]);
  }
  function Os(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function Ir(e) {
    return typeof e != "number"
      ? Os(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function zt(e) {
    const { x: t, y: n, width: o, height: r } = e;
    return {
      width: o,
      height: r,
      top: n,
      left: t,
      right: t + o,
      bottom: n + r,
      x: t,
      y: n,
    };
  }
  function Tr(e, t, n) {
    let { reference: o, floating: r } = e;
    const i = $e(t),
      a = On(t),
      s = Nn(a),
      c = Te(t),
      l = i === "y",
      d = o.x + o.width / 2 - r.width / 2,
      u = o.y + o.height / 2 - r.height / 2,
      _ = o[s] / 2 - r[s] / 2;
    let p;
    switch (c) {
      case "top":
        p = { x: d, y: o.y - r.height };
        break;
      case "bottom":
        p = { x: d, y: o.y + o.height };
        break;
      case "right":
        p = { x: o.x + o.width, y: u };
        break;
      case "left":
        p = { x: o.x - r.width, y: u };
        break;
      default:
        p = { x: o.x, y: o.y };
    }
    switch (nt(t)) {
      case "start":
        p[a] -= _ * (n && l ? -1 : 1);
        break;
      case "end":
        p[a] += _ * (n && l ? -1 : 1);
        break;
    }
    return p;
  }
  const Ds = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: i = [],
        platform: a,
      } = n,
      s = i.filter(Boolean),
      c = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let l = await a.getElementRects({ reference: e, floating: t, strategy: r }),
      { x: d, y: u } = Tr(l, o, c),
      _ = o,
      p = {},
      y = 0;
    for (let f = 0; f < s.length; f++) {
      const { name: m, fn: v } = s[f],
        {
          x: h,
          y: b,
          data: w,
          reset: x,
        } = await v({
          x: d,
          y: u,
          initialPlacement: o,
          placement: _,
          strategy: r,
          middlewareData: p,
          rects: l,
          platform: a,
          elements: { reference: e, floating: t },
        });
      (d = h ?? d),
        (u = b ?? u),
        (p = { ...p, [m]: { ...p[m], ...w } }),
        x &&
          y <= 50 &&
          (y++,
          typeof x == "object" &&
            (x.placement && (_ = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await a.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: r,
                    })
                  : x.rects),
            ({ x: d, y: u } = Tr(l, _, c))),
          (f = -1));
    }
    return { x: d, y: u, placement: _, strategy: r, middlewareData: p };
  };
  async function vt(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: o, y: r, platform: i, rects: a, elements: s, strategy: c } = e,
      {
        boundary: l = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: u = "floating",
        altBoundary: _ = !1,
        padding: p = 0,
      } = Ie(t, e),
      y = Ir(p),
      m = s[_ ? (u === "floating" ? "reference" : "floating") : u],
      v = zt(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(m))) ==
              null || n
              ? m
              : m.contextElement ||
                (await (i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(s.floating))),
          boundary: l,
          rootBoundary: d,
          strategy: c,
        })
      ),
      h =
        u === "floating"
          ? { x: o, y: r, width: a.floating.width, height: a.floating.height }
          : a.reference,
      b = await (i.getOffsetParent == null
        ? void 0
        : i.getOffsetParent(s.floating)),
      w = (await (i.isElement == null ? void 0 : i.isElement(b)))
        ? (await (i.getScale == null ? void 0 : i.getScale(b))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      x = zt(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: s,
              rect: h,
              offsetParent: b,
              strategy: c,
            })
          : h
      );
    return {
      top: (v.top - x.top + y.top) / w.y,
      bottom: (x.bottom - v.bottom + y.bottom) / w.y,
      left: (v.left - x.left + y.left) / w.x,
      right: (x.right - v.right + y.right) / w.x,
    };
  }
  const zs = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: o,
            placement: r,
            rects: i,
            platform: a,
            elements: s,
            middlewareData: c,
          } = t,
          { element: l, padding: d = 0 } = Ie(e, t) || {};
        if (l == null) return {};
        const u = Ir(d),
          _ = { x: n, y: o },
          p = On(r),
          y = Nn(p),
          f = await a.getDimensions(l),
          m = p === "y",
          v = m ? "top" : "left",
          h = m ? "bottom" : "right",
          b = m ? "clientHeight" : "clientWidth",
          w = i.reference[y] + i.reference[p] - _[p] - i.floating[y],
          x = _[p] - i.reference[p],
          P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
        let C = P ? P[b] : 0;
        (!C || !(await (a.isElement == null ? void 0 : a.isElement(P)))) &&
          (C = s.floating[b] || i.floating[y]);
        const k = w / 2 - x / 2,
          O = C / 2 - f[y] / 2 - 1,
          T = Fe(u[v], O),
          M = Fe(u[h], O),
          X = T,
          V = C - f[y] - M,
          $ = C / 2 - f[y] / 2 + k,
          Z = Tn(X, $, V),
          D =
            !c.arrow &&
            nt(r) != null &&
            $ !== Z &&
            i.reference[y] / 2 - ($ < X ? T : M) - f[y] / 2 < 0,
          H = D ? ($ < X ? $ - X : $ - V) : 0;
        return {
          [p]: _[p] + H,
          data: {
            [p]: Z,
            centerOffset: $ - Z - H,
            ...(D && { alignmentOffset: H }),
          },
          reset: D,
        };
      },
    }),
    Ls = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, o;
            const {
                placement: r,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: c,
                elements: l,
              } = t,
              {
                mainAxis: d = !0,
                crossAxis: u = !0,
                fallbackPlacements: _,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: y = "none",
                flipAlignment: f = !0,
                ...m
              } = Ie(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const v = Te(r),
              h = $e(s),
              b = Te(s) === s,
              w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
              x = _ || (b || !f ? [Dt(s)] : Ts(s)),
              P = y !== "none";
            !_ && P && x.push(...Ns(s, f, y, w));
            const C = [s, ...x],
              k = await vt(t, m),
              O = [];
            let T = ((o = i.flip) == null ? void 0 : o.overflows) || [];
            if ((d && O.push(k[v]), u)) {
              const $ = Is(r, a, w);
              O.push(k[$[0]], k[$[1]]);
            }
            if (
              ((T = [...T, { placement: r, overflows: O }]),
              !O.every(($) => $ <= 0))
            ) {
              var M, X;
              const $ = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
                Z = C[$];
              if (Z)
                return {
                  data: { index: $, overflows: T },
                  reset: { placement: Z },
                };
              let D =
                (X = T.filter((H) => H.overflows[0] <= 0).sort(
                  (H, A) => H.overflows[1] - A.overflows[1]
                )[0]) == null
                  ? void 0
                  : X.placement;
              if (!D)
                switch (p) {
                  case "bestFit": {
                    var V;
                    const H =
                      (V = T.filter((A) => {
                        if (P) {
                          const j = $e(A.placement);
                          return j === h || j === "y";
                        }
                        return !0;
                      })
                        .map((A) => [
                          A.placement,
                          A.overflows
                            .filter((j) => j > 0)
                            .reduce((j, ae) => j + ae, 0),
                        ])
                        .sort((A, j) => A[1] - j[1])[0]) == null
                        ? void 0
                        : V[0];
                    H && (D = H);
                    break;
                  }
                  case "initialPlacement":
                    D = s;
                    break;
                }
              if (r !== D) return { reset: { placement: D } };
            }
            return {};
          },
        }
      );
    };
  function Rr(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function Nr(e) {
    return Ps.some((t) => e[t] >= 0);
  }
  const Ms = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: o = "referenceHidden", ...r } = Ie(e, t);
          switch (o) {
            case "referenceHidden": {
              const i = await vt(t, { ...r, elementContext: "reference" }),
                a = Rr(i, n.reference);
              return {
                data: { referenceHiddenOffsets: a, referenceHidden: Nr(a) },
              };
            }
            case "escaped": {
              const i = await vt(t, { ...r, altBoundary: !0 }),
                a = Rr(i, n.floating);
              return { data: { escapedOffsets: a, escaped: Nr(a) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function Fs(e, t) {
    const { placement: n, platform: o, elements: r } = e,
      i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
      a = Te(n),
      s = nt(n),
      c = $e(n) === "y",
      l = ["left", "top"].includes(a) ? -1 : 1,
      d = i && c ? -1 : 1,
      u = Ie(t, e);
    let {
      mainAxis: _,
      crossAxis: p,
      alignmentAxis: y,
    } = typeof u == "number"
      ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: u.mainAxis || 0,
          crossAxis: u.crossAxis || 0,
          alignmentAxis: u.alignmentAxis,
        };
    return (
      s && typeof y == "number" && (p = s === "end" ? y * -1 : y),
      c ? { x: p * d, y: _ * l } : { x: _ * l, y: p * d }
    );
  }
  const Bs = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, o;
            const { x: r, y: i, placement: a, middlewareData: s } = t,
              c = await Fs(t, e);
            return a === ((n = s.offset) == null ? void 0 : n.placement) &&
              (o = s.arrow) != null &&
              o.alignmentOffset
              ? {}
              : { x: r + c.x, y: i + c.y, data: { ...c, placement: a } };
          },
        }
      );
    },
    $s = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: o, placement: r } = t,
              {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
                  fn: (m) => {
                    let { x: v, y: h } = m;
                    return { x: v, y: h };
                  },
                },
                ...c
              } = Ie(e, t),
              l = { x: n, y: o },
              d = await vt(t, c),
              u = $e(Te(r)),
              _ = Rn(u);
            let p = l[_],
              y = l[u];
            if (i) {
              const m = _ === "y" ? "top" : "left",
                v = _ === "y" ? "bottom" : "right",
                h = p + d[m],
                b = p - d[v];
              p = Tn(h, p, b);
            }
            if (a) {
              const m = u === "y" ? "top" : "left",
                v = u === "y" ? "bottom" : "right",
                h = y + d[m],
                b = y - d[v];
              y = Tn(h, y, b);
            }
            const f = s.fn({ ...t, [_]: p, [u]: y });
            return {
              ...f,
              data: { x: f.x - n, y: f.y - o, enabled: { [_]: i, [u]: a } },
            };
          },
        }
      );
    },
    Ws = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: o, placement: r, rects: i, middlewareData: a } = t,
              { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Ie(e, t),
              d = { x: n, y: o },
              u = $e(r),
              _ = Rn(u);
            let p = d[_],
              y = d[u];
            const f = Ie(s, t),
              m =
                typeof f == "number"
                  ? { mainAxis: f, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...f };
            if (c) {
              const b = _ === "y" ? "height" : "width",
                w = i.reference[_] - i.floating[b] + m.mainAxis,
                x = i.reference[_] + i.reference[b] - m.mainAxis;
              p < w ? (p = w) : p > x && (p = x);
            }
            if (l) {
              var v, h;
              const b = _ === "y" ? "width" : "height",
                w = ["top", "left"].includes(Te(r)),
                x =
                  i.reference[u] -
                  i.floating[b] +
                  ((w && ((v = a.offset) == null ? void 0 : v[u])) || 0) +
                  (w ? 0 : m.crossAxis),
                P =
                  i.reference[u] +
                  i.reference[b] +
                  (w ? 0 : ((h = a.offset) == null ? void 0 : h[u]) || 0) -
                  (w ? m.crossAxis : 0);
              y < x ? (y = x) : y > P && (y = P);
            }
            return { [_]: p, [u]: y };
          },
        }
      );
    },
    Vs = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, o;
            const { placement: r, rects: i, platform: a, elements: s } = t,
              { apply: c = () => {}, ...l } = Ie(e, t),
              d = await vt(t, l),
              u = Te(r),
              _ = nt(r),
              p = $e(r) === "y",
              { width: y, height: f } = i.floating;
            let m, v;
            u === "top" || u === "bottom"
              ? ((m = u),
                (v =
                  _ ===
                  ((await (a.isRTL == null ? void 0 : a.isRTL(s.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((v = u), (m = _ === "end" ? "top" : "bottom"));
            const h = f - d.top - d.bottom,
              b = y - d.left - d.right,
              w = Fe(f - d[m], h),
              x = Fe(y - d[v], b),
              P = !t.middlewareData.shift;
            let C = w,
              k = x;
            if (
              ((n = t.middlewareData.shift) != null && n.enabled.x && (k = b),
              (o = t.middlewareData.shift) != null && o.enabled.y && (C = h),
              P && !_)
            ) {
              const T = de(d.left, 0),
                M = de(d.right, 0),
                X = de(d.top, 0),
                V = de(d.bottom, 0);
              p
                ? (k =
                    y - 2 * (T !== 0 || M !== 0 ? T + M : de(d.left, d.right)))
                : (C =
                    f - 2 * (X !== 0 || V !== 0 ? X + V : de(d.top, d.bottom)));
            }
            await c({ ...t, availableWidth: k, availableHeight: C });
            const O = await a.getDimensions(s.floating);
            return y !== O.width || f !== O.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    };
  function Lt() {
    return typeof window < "u";
  }
  function ot(e) {
    return Or(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function fe(e) {
    var t;
    return (
      (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
      window
    );
  }
  function ge(e) {
    var t;
    return (t = (Or(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : t.documentElement;
  }
  function Or(e) {
    return Lt() ? e instanceof Node || e instanceof fe(e).Node : !1;
  }
  function he(e) {
    return Lt() ? e instanceof Element || e instanceof fe(e).Element : !1;
  }
  function ye(e) {
    return Lt()
      ? e instanceof HTMLElement || e instanceof fe(e).HTMLElement
      : !1;
  }
  function Dr(e) {
    return !Lt() || typeof ShadowRoot > "u"
      ? !1
      : e instanceof ShadowRoot || e instanceof fe(e).ShadowRoot;
  }
  function mt(e) {
    const { overflow: t, overflowX: n, overflowY: o, display: r } = _e(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
      !["inline", "contents"].includes(r)
    );
  }
  function Hs(e) {
    return ["table", "td", "th"].includes(ot(e));
  }
  function Mt(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return !1;
      }
    });
  }
  function zn(e) {
    const t = Ln(),
      n = he(e) ? _e(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : !1) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
      (!t && (n.filter ? n.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((o) =>
        (n.willChange || "").includes(o)
      ) ||
      ["paint", "layout", "strict", "content"].some((o) =>
        (n.contain || "").includes(o)
      )
    );
  }
  function Us(e) {
    let t = We(e);
    for (; ye(t) && !rt(t); ) {
      if (zn(t)) return t;
      if (Mt(t)) return null;
      t = We(t);
    }
    return null;
  }
  function Ln() {
    return typeof CSS > "u" || !CSS.supports
      ? !1
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function rt(e) {
    return ["html", "body", "#document"].includes(ot(e));
  }
  function _e(e) {
    return fe(e).getComputedStyle(e);
  }
  function Ft(e) {
    return he(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function We(e) {
    if (ot(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (Dr(e) && e.host) || ge(e);
    return Dr(t) ? t.host : t;
  }
  function zr(e) {
    const t = We(e);
    return rt(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : ye(t) && mt(t)
      ? t
      : zr(t);
  }
  function gt(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = zr(e),
      i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
      a = fe(r);
    if (i) {
      const s = Mn(a);
      return t.concat(
        a,
        a.visualViewport || [],
        mt(r) ? r : [],
        s && n ? gt(s) : []
      );
    }
    return t.concat(r, gt(r, [], n));
  }
  function Mn(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function Lr(e) {
    const t = _e(e);
    let n = parseFloat(t.width) || 0,
      o = parseFloat(t.height) || 0;
    const r = ye(e),
      i = r ? e.offsetWidth : n,
      a = r ? e.offsetHeight : o,
      s = Nt(n) !== i || Nt(o) !== a;
    return s && ((n = i), (o = a)), { width: n, height: o, $: s };
  }
  function Fn(e) {
    return he(e) ? e : e.contextElement;
  }
  function it(e) {
    const t = Fn(e);
    if (!ye(t)) return Be(1);
    const n = t.getBoundingClientRect(),
      { width: o, height: r, $: i } = Lr(t);
    let a = (i ? Nt(n.width) : n.width) / o,
      s = (i ? Nt(n.height) : n.height) / r;
    return (
      (!a || !Number.isFinite(a)) && (a = 1),
      (!s || !Number.isFinite(s)) && (s = 1),
      { x: a, y: s }
    );
  }
  const js = Be(0);
  function Mr(e) {
    const t = fe(e);
    return !Ln() || !t.visualViewport
      ? js
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function qs(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== fe(e)) ? !1 : t;
  }
  function Ze(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
      i = Fn(e);
    let a = Be(1);
    t && (o ? he(o) && (a = it(o)) : (a = it(e)));
    const s = qs(i, n, o) ? Mr(i) : Be(0);
    let c = (r.left + s.x) / a.x,
      l = (r.top + s.y) / a.y,
      d = r.width / a.x,
      u = r.height / a.y;
    if (i) {
      const _ = fe(i),
        p = o && he(o) ? fe(o) : o;
      let y = _,
        f = Mn(y);
      for (; f && o && p !== y; ) {
        const m = it(f),
          v = f.getBoundingClientRect(),
          h = _e(f),
          b = v.left + (f.clientLeft + parseFloat(h.paddingLeft)) * m.x,
          w = v.top + (f.clientTop + parseFloat(h.paddingTop)) * m.y;
        (c *= m.x),
          (l *= m.y),
          (d *= m.x),
          (u *= m.y),
          (c += b),
          (l += w),
          (y = fe(f)),
          (f = Mn(y));
      }
    }
    return zt({ width: d, height: u, x: c, y: l });
  }
  function Ks(e) {
    let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
    const i = r === "fixed",
      a = ge(o),
      s = t ? Mt(t.floating) : !1;
    if (o === a || (s && i)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
      l = Be(1);
    const d = Be(0),
      u = ye(o);
    if (
      (u || (!u && !i)) &&
      ((ot(o) !== "body" || mt(a)) && (c = Ft(o)), ye(o))
    ) {
      const _ = Ze(o);
      (l = it(o)), (d.x = _.x + o.clientLeft), (d.y = _.y + o.clientTop);
    }
    return {
      width: n.width * l.x,
      height: n.height * l.y,
      x: n.x * l.x - c.scrollLeft * l.x + d.x,
      y: n.y * l.y - c.scrollTop * l.y + d.y,
    };
  }
  function Ys(e) {
    return Array.from(e.getClientRects());
  }
  function Bn(e, t) {
    const n = Ft(e).scrollLeft;
    return t ? t.left + n : Ze(ge(e)).left + n;
  }
  function Gs(e) {
    const t = ge(e),
      n = Ft(e),
      o = e.ownerDocument.body,
      r = de(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
      i = de(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let a = -n.scrollLeft + Bn(e);
    const s = -n.scrollTop;
    return (
      _e(o).direction === "rtl" && (a += de(t.clientWidth, o.clientWidth) - r),
      { width: r, height: i, x: a, y: s }
    );
  }
  function Xs(e, t) {
    const n = fe(e),
      o = ge(e),
      r = n.visualViewport;
    let i = o.clientWidth,
      a = o.clientHeight,
      s = 0,
      c = 0;
    if (r) {
      (i = r.width), (a = r.height);
      const l = Ln();
      (!l || (l && t === "fixed")) && ((s = r.offsetLeft), (c = r.offsetTop));
    }
    return { width: i, height: a, x: s, y: c };
  }
  function Zs(e, t) {
    const n = Ze(e, !0, t === "fixed"),
      o = n.top + e.clientTop,
      r = n.left + e.clientLeft,
      i = ye(e) ? it(e) : Be(1),
      a = e.clientWidth * i.x,
      s = e.clientHeight * i.y,
      c = r * i.x,
      l = o * i.y;
    return { width: a, height: s, x: c, y: l };
  }
  function Fr(e, t, n) {
    let o;
    if (t === "viewport") o = Xs(e, n);
    else if (t === "document") o = Gs(ge(e));
    else if (he(t)) o = Zs(t, n);
    else {
      const r = Mr(e);
      o = { ...t, x: t.x - r.x, y: t.y - r.y };
    }
    return zt(o);
  }
  function Br(e, t) {
    const n = We(e);
    return n === t || !he(n) || rt(n)
      ? !1
      : _e(n).position === "fixed" || Br(n, t);
  }
  function Js(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = gt(e, [], !1).filter((s) => he(s) && ot(s) !== "body"),
      r = null;
    const i = _e(e).position === "fixed";
    let a = i ? We(e) : e;
    for (; he(a) && !rt(a); ) {
      const s = _e(a),
        c = zn(a);
      !c && s.position === "fixed" && (r = null),
        (
          i
            ? !c && !r
            : (!c &&
                s.position === "static" &&
                !!r &&
                ["absolute", "fixed"].includes(r.position)) ||
              (mt(a) && !c && Br(e, a))
        )
          ? (o = o.filter((d) => d !== a))
          : (r = s),
        (a = We(a));
    }
    return t.set(e, o), o;
  }
  function Qs(e) {
    let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
    const a = [
        ...(n === "clippingAncestors"
          ? Mt(t)
            ? []
            : Js(t, this._c)
          : [].concat(n)),
        o,
      ],
      s = a[0],
      c = a.reduce((l, d) => {
        const u = Fr(t, d, r);
        return (
          (l.top = de(u.top, l.top)),
          (l.right = Fe(u.right, l.right)),
          (l.bottom = Fe(u.bottom, l.bottom)),
          (l.left = de(u.left, l.left)),
          l
        );
      }, Fr(t, s, r));
    return {
      width: c.right - c.left,
      height: c.bottom - c.top,
      x: c.left,
      y: c.top,
    };
  }
  function el(e) {
    const { width: t, height: n } = Lr(e);
    return { width: t, height: n };
  }
  function tl(e, t, n) {
    const o = ye(t),
      r = ge(t),
      i = n === "fixed",
      a = Ze(e, !0, i, t);
    let s = { scrollLeft: 0, scrollTop: 0 };
    const c = Be(0);
    if (o || (!o && !i))
      if (((ot(t) !== "body" || mt(r)) && (s = Ft(t)), o)) {
        const p = Ze(t, !0, i, t);
        (c.x = p.x + t.clientLeft), (c.y = p.y + t.clientTop);
      } else r && (c.x = Bn(r));
    let l = 0,
      d = 0;
    if (r && !o && !i) {
      const p = r.getBoundingClientRect();
      (d = p.top + s.scrollTop), (l = p.left + s.scrollLeft - Bn(r, p));
    }
    const u = a.left + s.scrollLeft - c.x - l,
      _ = a.top + s.scrollTop - c.y - d;
    return { x: u, y: _, width: a.width, height: a.height };
  }
  function $n(e) {
    return _e(e).position === "static";
  }
  function $r(e, t) {
    if (!ye(e) || _e(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return ge(e) === n && (n = n.ownerDocument.body), n;
  }
  function Wr(e, t) {
    const n = fe(e);
    if (Mt(e)) return n;
    if (!ye(e)) {
      let r = We(e);
      for (; r && !rt(r); ) {
        if (he(r) && !$n(r)) return r;
        r = We(r);
      }
      return n;
    }
    let o = $r(e, t);
    for (; o && Hs(o) && $n(o); ) o = $r(o, t);
    return o && rt(o) && $n(o) && !zn(o) ? n : o || Us(e) || n;
  }
  const nl = async function (e) {
    const t = this.getOffsetParent || Wr,
      n = this.getDimensions,
      o = await n(e.floating);
    return {
      reference: tl(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: o.width, height: o.height },
    };
  };
  function ol(e) {
    return _e(e).direction === "rtl";
  }
  const rl = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ks,
    getDocumentElement: ge,
    getClippingRect: Qs,
    getOffsetParent: Wr,
    getElementRects: nl,
    getClientRects: Ys,
    getDimensions: el,
    getScale: it,
    isElement: he,
    isRTL: ol,
  };
  function il(e, t) {
    let n = null,
      o;
    const r = ge(e);
    function i() {
      var s;
      clearTimeout(o), (s = n) == null || s.disconnect(), (n = null);
    }
    function a(s, c) {
      s === void 0 && (s = !1), c === void 0 && (c = 1), i();
      const {
        left: l,
        top: d,
        width: u,
        height: _,
      } = e.getBoundingClientRect();
      if ((s || t(), !u || !_)) return;
      const p = Ot(d),
        y = Ot(r.clientWidth - (l + u)),
        f = Ot(r.clientHeight - (d + _)),
        m = Ot(l),
        h = {
          rootMargin: -p + "px " + -y + "px " + -f + "px " + -m + "px",
          threshold: de(0, Fe(1, c)) || 1,
        };
      let b = !0;
      function w(x) {
        const P = x[0].intersectionRatio;
        if (P !== c) {
          if (!b) return a();
          P
            ? a(!1, P)
            : (o = setTimeout(() => {
                a(!1, 1e-7);
              }, 1e3));
        }
        b = !1;
      }
      try {
        n = new IntersectionObserver(w, { ...h, root: r.ownerDocument });
      } catch {
        n = new IntersectionObserver(w, h);
      }
      n.observe(e);
    }
    return a(!0), i;
  }
  function al(e, t, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: c = !1,
      } = o,
      l = Fn(e),
      d = r || i ? [...(l ? gt(l) : []), ...gt(t)] : [];
    d.forEach((v) => {
      r && v.addEventListener("scroll", n, { passive: !0 }),
        i && v.addEventListener("resize", n);
    });
    const u = l && s ? il(l, n) : null;
    let _ = -1,
      p = null;
    a &&
      ((p = new ResizeObserver((v) => {
        let [h] = v;
        h &&
          h.target === l &&
          p &&
          (p.unobserve(t),
          cancelAnimationFrame(_),
          (_ = requestAnimationFrame(() => {
            var b;
            (b = p) == null || b.observe(t);
          }))),
          n();
      })),
      l && !c && p.observe(l),
      p.observe(t));
    let y,
      f = c ? Ze(e) : null;
    c && m();
    function m() {
      const v = Ze(e);
      f &&
        (v.x !== f.x ||
          v.y !== f.y ||
          v.width !== f.width ||
          v.height !== f.height) &&
        n(),
        (f = v),
        (y = requestAnimationFrame(m));
    }
    return (
      n(),
      () => {
        var v;
        d.forEach((h) => {
          r && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n);
        }),
          u == null || u(),
          (v = p) == null || v.disconnect(),
          (p = null),
          c && cancelAnimationFrame(y);
      }
    );
  }
  const sl = Bs,
    ll = $s,
    cl = Ls,
    ul = Vs,
    dl = Ms,
    Vr = zs,
    fl = Ws,
    pl = (e, t, n) => {
      const o = new Map(),
        r = { platform: rl, ...n },
        i = { ...r.platform, _c: o };
      return Ds(e, t, { ...r, platform: i });
    };
  var Bt = typeof document < "u" ? ze : z;
  function $t(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return !1;
        for (o = n; o-- !== 0; ) if (!$t(e[o], t[o])) return !1;
        return !0;
      }
      if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
        return !1;
      for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
      for (o = n; o-- !== 0; ) {
        const i = r[o];
        if (!(i === "_owner" && e.$$typeof) && !$t(e[i], t[i])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }
  function Hr(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function Ur(e, t) {
    const n = Hr(e);
    return Math.round(t * n) / n;
  }
  function Wn(e) {
    const t = L(e);
    return (
      Bt(() => {
        t.current = e;
      }),
      t
    );
  }
  function hl(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: { reference: i, floating: a } = {},
        transform: s = !0,
        whileElementsMounted: c,
        open: l,
      } = e,
      [d, u] = E({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1,
      }),
      [_, p] = E(o);
    $t(_, o) || p(o);
    const [y, f] = E(null),
      [m, v] = E(null),
      h = G((A) => {
        A !== P.current && ((P.current = A), f(A));
      }, []),
      b = G((A) => {
        A !== C.current && ((C.current = A), v(A));
      }, []),
      w = i || y,
      x = a || m,
      P = L(null),
      C = L(null),
      k = L(d),
      O = c != null,
      T = Wn(c),
      M = Wn(r),
      X = Wn(l),
      V = G(() => {
        if (!P.current || !C.current) return;
        const A = { placement: t, strategy: n, middleware: _ };
        M.current && (A.platform = M.current),
          pl(P.current, C.current, A).then((j) => {
            const ae = { ...j, isPositioned: X.current !== !1 };
            $.current &&
              !$t(k.current, ae) &&
              ((k.current = ae),
              Tt(() => {
                u(ae);
              }));
          });
      }, [_, t, n, M, X]);
    Bt(() => {
      l === !1 &&
        k.current.isPositioned &&
        ((k.current.isPositioned = !1), u((A) => ({ ...A, isPositioned: !1 })));
    }, [l]);
    const $ = L(!1);
    Bt(
      () => (
        ($.current = !0),
        () => {
          $.current = !1;
        }
      ),
      []
    ),
      Bt(() => {
        if ((w && (P.current = w), x && (C.current = x), w && x)) {
          if (T.current) return T.current(w, x, V);
          V();
        }
      }, [w, x, V, T, O]);
    const Z = Y(
        () => ({ reference: P, floating: C, setReference: h, setFloating: b }),
        [h, b]
      ),
      D = Y(() => ({ reference: w, floating: x }), [w, x]),
      H = Y(() => {
        const A = { position: n, left: 0, top: 0 };
        if (!D.floating) return A;
        const j = Ur(D.floating, d.x),
          ae = Ur(D.floating, d.y);
        return s
          ? {
              ...A,
              transform: "translate(" + j + "px, " + ae + "px)",
              ...(Hr(D.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: j, top: ae };
      }, [n, s, D.floating, d.x, d.y]);
    return Y(
      () => ({ ...d, update: V, refs: Z, elements: D, floatingStyles: H }),
      [d, V, Z, D, H]
    );
  }
  const _l = (e) => {
      function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
          return o && t(o)
            ? o.current != null
              ? Vr({ element: o.current, padding: r }).fn(n)
              : {}
            : o
            ? Vr({ element: o, padding: r }).fn(n)
            : {};
        },
      };
    },
    vl = (e, t) => ({ ...sl(e), options: [e, t] }),
    ml = (e, t) => ({ ...ll(e), options: [e, t] }),
    gl = (e, t) => ({ ...fl(e), options: [e, t] }),
    yl = (e, t) => ({ ...cl(e), options: [e, t] }),
    bl = (e, t) => ({ ...ul(e), options: [e, t] }),
    wl = (e, t) => ({ ...dl(e), options: [e, t] }),
    xl = (e, t) => ({ ..._l(e), options: [e, t] });
  var Cl = "Arrow",
    jr = F((e, t) => {
      const { children: n, width: o = 10, height: r = 5, ...i } = e;
      return g(ne.svg, {
        ...i,
        ref: t,
        width: o,
        height: r,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : g("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  jr.displayName = Cl;
  var Sl = jr;
  function El(e) {
    const [t, n] = E(void 0);
    return (
      ue(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const o = new ResizeObserver((r) => {
            if (!Array.isArray(r) || !r.length) return;
            const i = r[0];
            let a, s;
            if ("borderBoxSize" in i) {
              const c = i.borderBoxSize,
                l = Array.isArray(c) ? c[0] : c;
              (a = l.inlineSize), (s = l.blockSize);
            } else (a = e.offsetWidth), (s = e.offsetHeight);
            n({ width: a, height: s });
          });
          return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
        } else n(void 0);
      }, [e]),
      t
    );
  }
  var Vn = "Popper",
    [qr, Kr] = _r(Vn),
    [Pl, Yr] = qr(Vn),
    Gr = (e) => {
      const { __scopePopper: t, children: n } = e,
        [o, r] = E(null);
      return g(Pl, { scope: t, anchor: o, onAnchorChange: r, children: n });
    };
  Gr.displayName = Vn;
  var Xr = "PopperAnchor",
    Zr = F((e, t) => {
      const { __scopePopper: n, virtualRef: o, ...r } = e,
        i = Yr(Xr, n),
        a = L(null),
        s = ie(t, a);
      return (
        z(() => {
          i.onAnchorChange((o == null ? void 0 : o.current) || a.current);
        }),
        o ? null : g(ne.div, { ...r, ref: s })
      );
    });
  Zr.displayName = Xr;
  var Hn = "PopperContent",
    [Al, kl] = qr(Hn),
    Jr = F((e, t) => {
      var R, W, re, q, I, B;
      const {
          __scopePopper: n,
          side: o = "bottom",
          sideOffset: r = 0,
          align: i = "center",
          alignOffset: a = 0,
          arrowPadding: s = 0,
          avoidCollisions: c = !0,
          collisionBoundary: l = [],
          collisionPadding: d = 0,
          sticky: u = "partial",
          hideWhenDetached: _ = !1,
          updatePositionStrategy: p = "optimized",
          onPlaced: y,
          ...f
        } = e,
        m = Yr(Hn, n),
        [v, h] = E(null),
        b = ie(t, (Q) => h(Q)),
        [w, x] = E(null),
        P = El(w),
        C = (P == null ? void 0 : P.width) ?? 0,
        k = (P == null ? void 0 : P.height) ?? 0,
        O = o + (i !== "center" ? "-" + i : ""),
        T =
          typeof d == "number"
            ? d
            : { top: 0, right: 0, bottom: 0, left: 0, ...d },
        M = Array.isArray(l) ? l : [l],
        X = M.length > 0,
        V = { padding: T, boundary: M.filter(Tl), altBoundary: X },
        {
          refs: $,
          floatingStyles: Z,
          placement: D,
          isPositioned: H,
          middlewareData: A,
        } = hl({
          strategy: "fixed",
          placement: O,
          whileElementsMounted: (...Q) =>
            al(...Q, { animationFrame: p === "always" }),
          elements: { reference: m.anchor },
          middleware: [
            vl({ mainAxis: r + k, alignmentAxis: a }),
            c &&
              ml({
                mainAxis: !0,
                crossAxis: !1,
                limiter: u === "partial" ? gl() : void 0,
                ...V,
              }),
            c && yl({ ...V }),
            bl({
              ...V,
              apply: ({
                elements: Q,
                rects: ee,
                availableWidth: je,
                availableHeight: wt,
              }) => {
                const { width: xt, height: wu } = ee.reference,
                  Jt = Q.floating.style;
                Jt.setProperty("--radix-popper-available-width", `${je}px`),
                  Jt.setProperty("--radix-popper-available-height", `${wt}px`),
                  Jt.setProperty("--radix-popper-anchor-width", `${xt}px`),
                  Jt.setProperty("--radix-popper-anchor-height", `${wu}px`);
              },
            }),
            w && xl({ element: w, padding: s }),
            Rl({ arrowWidth: C, arrowHeight: k }),
            _ && wl({ strategy: "referenceHidden", ...V }),
          ],
        }),
        [j, ae] = ti(D),
        le = ke(y);
      ue(() => {
        H && (le == null || le());
      }, [H, le]);
      const Ue = (R = A.arrow) == null ? void 0 : R.x,
        Qe = (W = A.arrow) == null ? void 0 : W.y,
        me = ((re = A.arrow) == null ? void 0 : re.centerOffset) !== 0,
        [Re, xe] = E();
      return (
        ue(() => {
          v && xe(window.getComputedStyle(v).zIndex);
        }, [v]),
        g("div", {
          ref: $.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Z,
            transform: H ? Z.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Re,
            "--radix-popper-transform-origin": [
              (q = A.transformOrigin) == null ? void 0 : q.x,
              (I = A.transformOrigin) == null ? void 0 : I.y,
            ].join(" "),
            ...(((B = A.hide) == null ? void 0 : B.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: g(Al, {
            scope: n,
            placedSide: j,
            onArrowChange: x,
            arrowX: Ue,
            arrowY: Qe,
            shouldHideArrow: me,
            children: g(ne.div, {
              "data-side": j,
              "data-align": ae,
              ...f,
              ref: b,
              style: { ...f.style, animation: H ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  Jr.displayName = Hn;
  var Qr = "PopperArrow",
    Il = { top: "bottom", right: "left", bottom: "top", left: "right" },
    ei = F(function (t, n) {
      const { __scopePopper: o, ...r } = t,
        i = kl(Qr, o),
        a = Il[i.placedSide];
      return g("span", {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0,
        },
        children: g(Sl, {
          ...r,
          ref: n,
          style: { ...r.style, display: "block" },
        }),
      });
    });
  ei.displayName = Qr;
  function Tl(e) {
    return e !== null;
  }
  var Rl = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var m, v, h;
      const { placement: n, rects: o, middlewareData: r } = t,
        a = ((m = r.arrow) == null ? void 0 : m.centerOffset) !== 0,
        s = a ? 0 : e.arrowWidth,
        c = a ? 0 : e.arrowHeight,
        [l, d] = ti(n),
        u = { start: "0%", center: "50%", end: "100%" }[d],
        _ = (((v = r.arrow) == null ? void 0 : v.x) ?? 0) + s / 2,
        p = (((h = r.arrow) == null ? void 0 : h.y) ?? 0) + c / 2;
      let y = "",
        f = "";
      return (
        l === "bottom"
          ? ((y = a ? u : `${_}px`), (f = `${-c}px`))
          : l === "top"
          ? ((y = a ? u : `${_}px`), (f = `${o.floating.height + c}px`))
          : l === "right"
          ? ((y = `${-c}px`), (f = a ? u : `${p}px`))
          : l === "left" &&
            ((y = `${o.floating.width + c}px`), (f = a ? u : `${p}px`)),
        { data: { x: y, y: f } }
      );
    },
  });
  function ti(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var Nl = Gr,
    Ol = Zr,
    Dl = Jr,
    zl = ei,
    Ll = "Portal",
    ni = F((e, t) => {
      var s;
      const { container: n, ...o } = e,
        [r, i] = E(!1);
      ue(() => i(!0), []);
      const a =
        n ||
        (r &&
          ((s = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : s.body));
      return a ? Ae.createPortal(g(ne.div, { ...o, ref: t }), a) : null;
    });
  ni.displayName = Ll;
  function oi({ prop: e, defaultProp: t, onChange: n = () => {} }) {
    const [o, r] = Ml({ defaultProp: t, onChange: n }),
      i = e !== void 0,
      a = i ? e : o,
      s = ke(n),
      c = G(
        (l) => {
          if (i) {
            const u = typeof l == "function" ? l(e) : l;
            u !== e && s(u);
          } else r(l);
        },
        [i, e, r, s]
      );
    return [a, c];
  }
  function Ml({ defaultProp: e, onChange: t }) {
    const n = E(e),
      [o] = n,
      r = L(o),
      i = ke(t);
    return (
      z(() => {
        r.current !== o && (i(o), (r.current = o));
      }, [o, r, i]),
      n
    );
  }
  function Fl(e) {
    const t = L({ value: e, previous: e });
    return Y(
      () => (
        t.current.value !== e &&
          ((t.current.previous = t.current.value), (t.current.value = e)),
        t.current.previous
      ),
      [e]
    );
  }
  var Bl = "VisuallyHidden",
    ri = F((e, t) =>
      g(ne.span, {
        ...e,
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    );
  ri.displayName = Bl;
  var $l = function (e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body;
    },
    at = new WeakMap(),
    Wt = new WeakMap(),
    Vt = {},
    Un = 0,
    ii = function (e) {
      return e && (e.host || ii(e.parentNode));
    },
    Wl = function (e, t) {
      return t
        .map(function (n) {
          if (e.contains(n)) return n;
          var o = ii(n);
          return o && e.contains(o)
            ? o
            : (console.error(
                "aria-hidden",
                n,
                "in not contained inside",
                e,
                ". Doing nothing"
              ),
              null);
        })
        .filter(function (n) {
          return !!n;
        });
    },
    Vl = function (e, t, n, o) {
      var r = Wl(t, Array.isArray(e) ? e : [e]);
      Vt[n] || (Vt[n] = new WeakMap());
      var i = Vt[n],
        a = [],
        s = new Set(),
        c = new Set(r),
        l = function (u) {
          !u || s.has(u) || (s.add(u), l(u.parentNode));
        };
      r.forEach(l);
      var d = function (u) {
        !u ||
          c.has(u) ||
          Array.prototype.forEach.call(u.children, function (_) {
            if (s.has(_)) d(_);
            else {
              var p = _.getAttribute(o),
                y = p !== null && p !== "false",
                f = (at.get(_) || 0) + 1,
                m = (i.get(_) || 0) + 1;
              at.set(_, f),
                i.set(_, m),
                a.push(_),
                f === 1 && y && Wt.set(_, !0),
                m === 1 && _.setAttribute(n, "true"),
                y || _.setAttribute(o, "true");
            }
          });
      };
      return (
        d(t),
        s.clear(),
        Un++,
        function () {
          a.forEach(function (u) {
            var _ = at.get(u) - 1,
              p = i.get(u) - 1;
            at.set(u, _),
              i.set(u, p),
              _ || (Wt.has(u) || u.removeAttribute(o), Wt.delete(u)),
              p || u.removeAttribute(n);
          }),
            Un--,
            Un ||
              ((at = new WeakMap()),
              (at = new WeakMap()),
              (Wt = new WeakMap()),
              (Vt = {}));
        }
      );
    },
    Hl = function (e, t, n) {
      n === void 0 && (n = "data-aria-hidden");
      var o = Array.from(Array.isArray(e) ? e : [e]),
        r = $l(e);
      return r
        ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
          Vl(o, r, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    be = function () {
      return (
        (be =
          Object.assign ||
          function (t) {
            for (var n, o = 1, r = arguments.length; o < r; o++) {
              n = arguments[o];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
        be.apply(this, arguments)
      );
    };
  function ai(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  }
  function Ul(e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, r = t.length, i; o < r; o++)
        (i || !(o in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
    return e.concat(i || Array.prototype.slice.call(t));
  }
  typeof SuppressedError == "function" && SuppressedError;
  var Ht = "right-scroll-bar-position",
    Ut = "width-before-scroll-bar",
    jl = "with-scroll-bars-hidden",
    ql = "--removed-body-scroll-bar-size";
  function jn(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
  }
  function Kl(e, t) {
    var n = E(function () {
      return {
        value: e,
        callback: t,
        facade: {
          get current() {
            return n.value;
          },
          set current(o) {
            var r = n.value;
            r !== o && ((n.value = o), n.callback(o, r));
          },
        },
      };
    })[0];
    return (n.callback = t), n.facade;
  }
  var si = new WeakMap();
  function Yl(e, t) {
    var n = Kl(null, function (o) {
      return e.forEach(function (r) {
        return jn(r, o);
      });
    });
    return (
      ze(
        function () {
          var o = si.get(n);
          if (o) {
            var r = new Set(o),
              i = new Set(e),
              a = n.current;
            r.forEach(function (s) {
              i.has(s) || jn(s, null);
            }),
              i.forEach(function (s) {
                r.has(s) || jn(s, a);
              });
          }
          si.set(n, e);
        },
        [e]
      ),
      n
    );
  }
  function Gl(e) {
    return e;
  }
  function Xl(e, t) {
    t === void 0 && (t = Gl);
    var n = [],
      o = !1,
      r = {
        read: function () {
          if (o)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (i) {
          var a = t(i, o);
          return (
            n.push(a),
            function () {
              n = n.filter(function (s) {
                return s !== a;
              });
            }
          );
        },
        assignSyncMedium: function (i) {
          for (o = !0; n.length; ) {
            var a = n;
            (n = []), a.forEach(i);
          }
          n = {
            push: function (s) {
              return i(s);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (i) {
          o = !0;
          var a = [];
          if (n.length) {
            var s = n;
            (n = []), s.forEach(i), (a = n);
          }
          var c = function () {
              var d = a;
              (a = []), d.forEach(i);
            },
            l = function () {
              return Promise.resolve().then(c);
            };
          l(),
            (n = {
              push: function (d) {
                a.push(d), l();
              },
              filter: function (d) {
                return (a = a.filter(d)), n;
              },
            });
        },
      };
    return r;
  }
  function Zl(e) {
    e === void 0 && (e = {});
    var t = Xl(null);
    return (t.options = be({ async: !0, ssr: !1 }, e)), t;
  }
  var li = function (e) {
    var t = e.sideCar,
      n = ai(e, ["sideCar"]);
    if (!t)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car"
      );
    var o = t.read();
    if (!o) throw new Error("Sidecar medium not found");
    return U(o, be({}, n));
  };
  li.isSideCarExport = !0;
  function Jl(e, t) {
    return e.useMedium(t), li;
  }
  var ci = Zl(),
    qn = function () {},
    jt = F(function (e, t) {
      var n = L(null),
        o = E({
          onScrollCapture: qn,
          onWheelCapture: qn,
          onTouchMoveCapture: qn,
        }),
        r = o[0],
        i = o[1],
        a = e.forwardProps,
        s = e.children,
        c = e.className,
        l = e.removeScrollBar,
        d = e.enabled,
        u = e.shards,
        _ = e.sideCar,
        p = e.noIsolation,
        y = e.inert,
        f = e.allowPinchZoom,
        m = e.as,
        v = m === void 0 ? "div" : m,
        h = e.gapMode,
        b = ai(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        w = _,
        x = Yl([n, t]),
        P = be(be({}, b), r);
      return U(
        oe,
        null,
        d &&
          U(w, {
            sideCar: ci,
            removeScrollBar: l,
            shards: u,
            noIsolation: p,
            inert: y,
            setCallbacks: i,
            allowPinchZoom: !!f,
            lockRef: n,
            gapMode: h,
          }),
        a
          ? ht(Le.only(s), be(be({}, P), { ref: x }))
          : U(v, be({}, P, { className: c, ref: x }), s)
      );
    });
  (jt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (jt.classNames = { fullWidth: Ut, zeroRight: Ht });
  var Ql = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function ec() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Ql();
    return t && e.setAttribute("nonce", t), e;
  }
  function tc(e, t) {
    e.styleSheet
      ? (e.styleSheet.cssText = t)
      : e.appendChild(document.createTextNode(t));
  }
  function nc(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
  }
  var oc = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          e == 0 && (t = ec()) && (tc(t, n), nc(t)), e++;
        },
        remove: function () {
          e--,
            !e &&
              t &&
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
        },
      };
    },
    rc = function () {
      var e = oc();
      return function (t, n) {
        z(
          function () {
            return (
              e.add(t),
              function () {
                e.remove();
              }
            );
          },
          [t && n]
        );
      };
    },
    ui = function () {
      var e = rc(),
        t = function (n) {
          var o = n.styles,
            r = n.dynamic;
          return e(o, r), null;
        };
      return t;
    },
    ic = { left: 0, top: 0, right: 0, gap: 0 },
    Kn = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    ac = function (e) {
      var t = window.getComputedStyle(document.body),
        n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
        o = t[e === "padding" ? "paddingTop" : "marginTop"],
        r = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [Kn(n), Kn(o), Kn(r)];
    },
    sc = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return ic;
      var t = ac(e),
        n = document.documentElement.clientWidth,
        o = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, o - n + t[2] - t[0]),
      };
    },
    lc = ui(),
    st = "data-scroll-locked",
    cc = function (e, t, n, o) {
      var r = e.left,
        i = e.top,
        a = e.right,
        s = e.gap;
      return (
        n === void 0 && (n = "margin"),
        `
  .`
          .concat(
            jl,
            ` {
   overflow: hidden `
          )
          .concat(
            o,
            `;
   padding-right: `
          )
          .concat(s, "px ")
          .concat(
            o,
            `;
  }
  body[`
          )
          .concat(
            st,
            `] {
    overflow: hidden `
          )
          .concat(
            o,
            `;
    overscroll-behavior: contain;
    `
          )
          .concat(
            [
              t && "position: relative ".concat(o, ";"),
              n === "margin" &&
                `
    padding-left: `
                  .concat(
                    r,
                    `px;
    padding-top: `
                  )
                  .concat(
                    i,
                    `px;
    padding-right: `
                  )
                  .concat(
                    a,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                  )
                  .concat(s, "px ")
                  .concat(
                    o,
                    `;
    `
                  ),
              n === "padding" &&
                "padding-right: ".concat(s, "px ").concat(o, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`
          )
          .concat(
            Ht,
            ` {
    right: `
          )
          .concat(s, "px ")
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(
            Ut,
            ` {
    margin-right: `
          )
          .concat(s, "px ")
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(Ht, " .")
          .concat(
            Ht,
            ` {
    right: 0 `
          )
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(Ut, " .")
          .concat(
            Ut,
            ` {
    margin-right: 0 `
          )
          .concat(
            o,
            `;
  }
  
  body[`
          )
          .concat(
            st,
            `] {
    `
          )
          .concat(ql, ": ")
          .concat(
            s,
            `px;
  }
`
          )
      );
    },
    di = function () {
      var e = parseInt(document.body.getAttribute(st) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    uc = function () {
      z(function () {
        return (
          document.body.setAttribute(st, (di() + 1).toString()),
          function () {
            var e = di() - 1;
            e <= 0
              ? document.body.removeAttribute(st)
              : document.body.setAttribute(st, e.toString());
          }
        );
      }, []);
    },
    dc = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        o = e.gapMode,
        r = o === void 0 ? "margin" : o;
      uc();
      var i = Y(
        function () {
          return sc(r);
        },
        [r]
      );
      return U(lc, { styles: cc(i, !t, r, n ? "" : "!important") });
    },
    Yn = !1;
  if (typeof window < "u")
    try {
      var qt = Object.defineProperty({}, "passive", {
        get: function () {
          return (Yn = !0), !0;
        },
      });
      window.addEventListener("test", qt, qt),
        window.removeEventListener("test", qt, qt);
    } catch {
      Yn = !1;
    }
  var lt = Yn ? { passive: !1 } : !1,
    fc = function (e) {
      return e.tagName === "TEXTAREA";
    },
    fi = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return (
        n[t] !== "hidden" &&
        !(n.overflowY === n.overflowX && !fc(e) && n[t] === "visible")
      );
    },
    pc = function (e) {
      return fi(e, "overflowY");
    },
    hc = function (e) {
      return fi(e, "overflowX");
    },
    pi = function (e, t) {
      var n = t.ownerDocument,
        o = t;
      do {
        typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
        var r = hi(e, o);
        if (r) {
          var i = _i(e, o),
            a = i[1],
            s = i[2];
          if (a > s) return !0;
        }
        o = o.parentNode;
      } while (o && o !== n.body);
      return !1;
    },
    _c = function (e) {
      var t = e.scrollTop,
        n = e.scrollHeight,
        o = e.clientHeight;
      return [t, n, o];
    },
    vc = function (e) {
      var t = e.scrollLeft,
        n = e.scrollWidth,
        o = e.clientWidth;
      return [t, n, o];
    },
    hi = function (e, t) {
      return e === "v" ? pc(t) : hc(t);
    },
    _i = function (e, t) {
      return e === "v" ? _c(t) : vc(t);
    },
    mc = function (e, t) {
      return e === "h" && t === "rtl" ? -1 : 1;
    },
    gc = function (e, t, n, o, r) {
      var i = mc(e, window.getComputedStyle(t).direction),
        a = i * o,
        s = n.target,
        c = t.contains(s),
        l = !1,
        d = a > 0,
        u = 0,
        _ = 0;
      do {
        var p = _i(e, s),
          y = p[0],
          f = p[1],
          m = p[2],
          v = f - m - i * y;
        (y || v) && hi(e, s) && ((u += v), (_ += y)),
          s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
      } while (
        (!c && s !== document.body) ||
        (c && (t.contains(s) || t === s))
      );
      return ((d && Math.abs(u) < 1) || (!d && Math.abs(_) < 1)) && (l = !0), l;
    },
    Kt = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    vi = function (e) {
      return [e.deltaX, e.deltaY];
    },
    mi = function (e) {
      return e && "current" in e ? e.current : e;
    },
    yc = function (e, t) {
      return e[0] === t[0] && e[1] === t[1];
    },
    bc = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`
        )
        .concat(
          e,
          ` {pointer-events: all;}
`
        );
    },
    wc = 0,
    ct = [];
  function xc(e) {
    var t = L([]),
      n = L([0, 0]),
      o = L(),
      r = E(wc++)[0],
      i = E(ui)[0],
      a = L(e);
    z(
      function () {
        a.current = e;
      },
      [e]
    ),
      z(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var f = Ul(
              [e.lockRef.current],
              (e.shards || []).map(mi),
              !0
            ).filter(Boolean);
            return (
              f.forEach(function (m) {
                return m.classList.add("allow-interactivity-".concat(r));
              }),
              function () {
                document.body.classList.remove(
                  "block-interactivity-".concat(r)
                ),
                  f.forEach(function (m) {
                    return m.classList.remove("allow-interactivity-".concat(r));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards]
      );
    var s = G(function (f, m) {
        if (
          ("touches" in f && f.touches.length === 2) ||
          (f.type === "wheel" && f.ctrlKey)
        )
          return !a.current.allowPinchZoom;
        var v = Kt(f),
          h = n.current,
          b = "deltaX" in f ? f.deltaX : h[0] - v[0],
          w = "deltaY" in f ? f.deltaY : h[1] - v[1],
          x,
          P = f.target,
          C = Math.abs(b) > Math.abs(w) ? "h" : "v";
        if ("touches" in f && C === "h" && P.type === "range") return !1;
        var k = pi(C, P);
        if (!k) return !0;
        if ((k ? (x = C) : ((x = C === "v" ? "h" : "v"), (k = pi(C, P))), !k))
          return !1;
        if (
          (!o.current && "changedTouches" in f && (b || w) && (o.current = x),
          !x)
        )
          return !0;
        var O = o.current || x;
        return gc(O, m, f, O === "h" ? b : w);
      }, []),
      c = G(function (f) {
        var m = f;
        if (!(!ct.length || ct[ct.length - 1] !== i)) {
          var v = "deltaY" in m ? vi(m) : Kt(m),
            h = t.current.filter(function (x) {
              return (
                x.name === m.type &&
                (x.target === m.target || m.target === x.shadowParent) &&
                yc(x.delta, v)
              );
            })[0];
          if (h && h.should) {
            m.cancelable && m.preventDefault();
            return;
          }
          if (!h) {
            var b = (a.current.shards || [])
                .map(mi)
                .filter(Boolean)
                .filter(function (x) {
                  return x.contains(m.target);
                }),
              w = b.length > 0 ? s(m, b[0]) : !a.current.noIsolation;
            w && m.cancelable && m.preventDefault();
          }
        }
      }, []),
      l = G(function (f, m, v, h) {
        var b = {
          name: f,
          delta: m,
          target: v,
          should: h,
          shadowParent: Cc(v),
        };
        t.current.push(b),
          setTimeout(function () {
            t.current = t.current.filter(function (w) {
              return w !== b;
            });
          }, 1);
      }, []),
      d = G(function (f) {
        (n.current = Kt(f)), (o.current = void 0);
      }, []),
      u = G(function (f) {
        l(f.type, vi(f), f.target, s(f, e.lockRef.current));
      }, []),
      _ = G(function (f) {
        l(f.type, Kt(f), f.target, s(f, e.lockRef.current));
      }, []);
    z(function () {
      return (
        ct.push(i),
        e.setCallbacks({
          onScrollCapture: u,
          onWheelCapture: u,
          onTouchMoveCapture: _,
        }),
        document.addEventListener("wheel", c, lt),
        document.addEventListener("touchmove", c, lt),
        document.addEventListener("touchstart", d, lt),
        function () {
          (ct = ct.filter(function (f) {
            return f !== i;
          })),
            document.removeEventListener("wheel", c, lt),
            document.removeEventListener("touchmove", c, lt),
            document.removeEventListener("touchstart", d, lt);
        }
      );
    }, []);
    var p = e.removeScrollBar,
      y = e.inert;
    return U(
      oe,
      null,
      y ? U(i, { styles: bc(r) }) : null,
      p ? U(dc, { gapMode: e.gapMode }) : null
    );
  }
  function Cc(e) {
    for (var t = null; e !== null; )
      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode);
    return t;
  }
  const Sc = Jl(ci, xc);
  var gi = F(function (e, t) {
    return U(jt, be({}, e, { ref: t, sideCar: Sc }));
  });
  gi.classNames = jt.classNames;
  var Ec = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Pc = [" ", "Enter"],
    yt = "Select",
    [Yt, Gt, Ac] = ts(yt),
    [ut, ud] = ns(yt, [Ac, Kr]),
    Xt = Kr(),
    [kc, Ve] = ut(yt),
    [Ic, Tc] = ut(yt),
    yi = (e) => {
      const {
          __scopeSelect: t,
          children: n,
          open: o,
          defaultOpen: r,
          onOpenChange: i,
          value: a,
          defaultValue: s,
          onValueChange: c,
          dir: l,
          name: d,
          autoComplete: u,
          disabled: _,
          required: p,
          form: y,
        } = e,
        f = Xt(t),
        [m, v] = E(null),
        [h, b] = E(null),
        [w, x] = E(!1),
        P = is(l),
        [C = !1, k] = oi({ prop: o, defaultProp: r, onChange: i }),
        [O, T] = oi({ prop: a, defaultProp: s, onChange: c }),
        M = L(null),
        X = m ? y || !!m.closest("form") : !0,
        [V, $] = E(new Set()),
        Z = Array.from(V)
          .map((D) => D.props.value)
          .join(";");
      return g(Nl, {
        ...f,
        children: g(kc, {
          required: p,
          scope: t,
          trigger: m,
          onTriggerChange: v,
          valueNode: h,
          onValueNodeChange: b,
          valueNodeHasChildren: w,
          onValueNodeHasChildrenChange: x,
          contentId: In(),
          value: O,
          onValueChange: T,
          open: C,
          onOpenChange: k,
          dir: P,
          triggerPointerDownPosRef: M,
          disabled: _,
          children: [
            g(Yt.Provider, {
              scope: t,
              children: g(Ic, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: G((D) => {
                  $((H) => new Set(H).add(D));
                }, []),
                onNativeOptionRemove: G((D) => {
                  $((H) => {
                    const A = new Set(H);
                    return A.delete(D), A;
                  });
                }, []),
                children: n,
              }),
            }),
            X
              ? g(
                  Wi,
                  {
                    "aria-hidden": !0,
                    required: p,
                    tabIndex: -1,
                    name: d,
                    autoComplete: u,
                    value: O,
                    onChange: (D) => T(D.target.value),
                    disabled: _,
                    form: y,
                    children: [
                      O === void 0 ? g("option", { value: "" }) : null,
                      Array.from(V),
                    ],
                  },
                  Z
                )
              : null,
          ],
        }),
      });
    };
  yi.displayName = yt;
  var bi = "SelectTrigger",
    wi = F((e, t) => {
      const { __scopeSelect: n, disabled: o = !1, ...r } = e,
        i = Xt(n),
        a = Ve(bi, n),
        s = a.disabled || o,
        c = ie(t, a.onTriggerChange),
        l = Gt(n),
        d = L("touch"),
        [u, _, p] = Vi((f) => {
          const m = l().filter((b) => !b.disabled),
            v = m.find((b) => b.value === a.value),
            h = Hi(m, f, v);
          h !== void 0 && a.onValueChange(h.value);
        }),
        y = (f) => {
          s || (a.onOpenChange(!0), p()),
            f &&
              (a.triggerPointerDownPosRef.current = {
                x: Math.round(f.pageX),
                y: Math.round(f.pageY),
              });
        };
      return g(Ol, {
        asChild: !0,
        ...i,
        children: g(ne.button, {
          type: "button",
          role: "combobox",
          "aria-controls": a.contentId,
          "aria-expanded": a.open,
          "aria-required": a.required,
          "aria-autocomplete": "none",
          dir: a.dir,
          "data-state": a.open ? "open" : "closed",
          disabled: s,
          "data-disabled": s ? "" : void 0,
          "data-placeholder": $i(a.value) ? "" : void 0,
          ...r,
          ref: c,
          onClick: te(r.onClick, (f) => {
            f.currentTarget.focus(), d.current !== "mouse" && y(f);
          }),
          onPointerDown: te(r.onPointerDown, (f) => {
            d.current = f.pointerType;
            const m = f.target;
            m.hasPointerCapture(f.pointerId) &&
              m.releasePointerCapture(f.pointerId),
              f.button === 0 &&
                f.ctrlKey === !1 &&
                f.pointerType === "mouse" &&
                (y(f), f.preventDefault());
          }),
          onKeyDown: te(r.onKeyDown, (f) => {
            const m = u.current !== "";
            !(f.ctrlKey || f.altKey || f.metaKey) &&
              f.key.length === 1 &&
              _(f.key),
              !(m && f.key === " ") &&
                Ec.includes(f.key) &&
                (y(), f.preventDefault());
          }),
        }),
      });
    });
  wi.displayName = bi;
  var xi = "SelectValue",
    Rc = F((e, t) => {
      const {
          __scopeSelect: n,
          className: o,
          style: r,
          children: i,
          placeholder: a = "",
          ...s
        } = e,
        c = Ve(xi, n),
        { onValueNodeHasChildrenChange: l } = c,
        d = i !== void 0,
        u = ie(t, c.onValueNodeChange);
      return (
        ue(() => {
          l(d);
        }, [l, d]),
        g(ne.span, {
          ...s,
          ref: u,
          style: { pointerEvents: "none" },
          children: $i(c.value) ? g(oe, { children: a }) : i,
        })
      );
    });
  Rc.displayName = xi;
  var Nc = "SelectIcon",
    Ci = F((e, t) => {
      const { __scopeSelect: n, children: o, ...r } = e;
      return g(ne.span, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        children: o || "â–¼",
      });
    });
  Ci.displayName = Nc;
  var Oc = "SelectPortal",
    Si = (e) => g(ni, { asChild: !0, ...e });
  Si.displayName = Oc;
  var Je = "SelectContent",
    Ei = F((e, t) => {
      const n = Ve(Je, e.__scopeSelect),
        [o, r] = E();
      if (
        (ue(() => {
          r(new DocumentFragment());
        }, []),
        !n.open)
      ) {
        const i = o;
        return i
          ? It(
              g(Pi, {
                scope: e.__scopeSelect,
                children: g(Yt.Slot, {
                  scope: e.__scopeSelect,
                  children: g("div", { children: e.children }),
                }),
              }),
              i
            )
          : null;
      }
      return g(Ai, { ...e, ref: t });
    });
  Ei.displayName = Je;
  var ve = 10,
    [Pi, He] = ut(Je),
    Dc = "SelectContentImpl",
    Ai = F((e, t) => {
      const {
          __scopeSelect: n,
          position: o = "item-aligned",
          onCloseAutoFocus: r,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          side: s,
          sideOffset: c,
          align: l,
          alignOffset: d,
          arrowPadding: u,
          collisionBoundary: _,
          collisionPadding: p,
          sticky: y,
          hideWhenDetached: f,
          avoidCollisions: m,
          ...v
        } = e,
        h = Ve(Je, n),
        [b, w] = E(null),
        [x, P] = E(null),
        C = ie(t, (R) => w(R)),
        [k, O] = E(null),
        [T, M] = E(null),
        X = Gt(n),
        [V, $] = E(!1),
        Z = L(!1);
      z(() => {
        if (b) return Hl(b);
      }, [b]),
        vs();
      const D = G(
          (R) => {
            const [W, ...re] = X().map((B) => B.ref.current),
              [q] = re.slice(-1),
              I = document.activeElement;
            for (const B of R)
              if (
                B === I ||
                (B == null || B.scrollIntoView({ block: "nearest" }),
                B === W && x && (x.scrollTop = 0),
                B === q && x && (x.scrollTop = x.scrollHeight),
                B == null || B.focus(),
                document.activeElement !== I)
              )
                return;
          },
          [X, x]
        ),
        H = G(() => D([k, b]), [D, k, b]);
      z(() => {
        V && H();
      }, [V, H]);
      const { onOpenChange: A, triggerPointerDownPosRef: j } = h;
      z(() => {
        if (b) {
          let R = { x: 0, y: 0 };
          const W = (q) => {
              var I, B;
              R = {
                x: Math.abs(
                  Math.round(q.pageX) -
                    (((I = j.current) == null ? void 0 : I.x) ?? 0)
                ),
                y: Math.abs(
                  Math.round(q.pageY) -
                    (((B = j.current) == null ? void 0 : B.y) ?? 0)
                ),
              };
            },
            re = (q) => {
              R.x <= 10 && R.y <= 10
                ? q.preventDefault()
                : b.contains(q.target) || A(!1),
                document.removeEventListener("pointermove", W),
                (j.current = null);
            };
          return (
            j.current !== null &&
              (document.addEventListener("pointermove", W),
              document.addEventListener("pointerup", re, {
                capture: !0,
                once: !0,
              })),
            () => {
              document.removeEventListener("pointermove", W),
                document.removeEventListener("pointerup", re, { capture: !0 });
            }
          );
        }
      }, [b, A, j]),
        z(() => {
          const R = () => A(!1);
          return (
            window.addEventListener("blur", R),
            window.addEventListener("resize", R),
            () => {
              window.removeEventListener("blur", R),
                window.removeEventListener("resize", R);
            }
          );
        }, [A]);
      const [ae, le] = Vi((R) => {
          const W = X().filter((I) => !I.disabled),
            re = W.find((I) => I.ref.current === document.activeElement),
            q = Hi(W, R, re);
          q && setTimeout(() => q.ref.current.focus());
        }),
        Ue = G(
          (R, W, re) => {
            const q = !Z.current && !re;
            ((h.value !== void 0 && h.value === W) || q) &&
              (O(R), q && (Z.current = !0));
          },
          [h.value]
        ),
        Qe = G(() => (b == null ? void 0 : b.focus()), [b]),
        me = G(
          (R, W, re) => {
            const q = !Z.current && !re;
            ((h.value !== void 0 && h.value === W) || q) && M(R);
          },
          [h.value]
        ),
        Re = o === "popper" ? Gn : ki,
        xe =
          Re === Gn
            ? {
                side: s,
                sideOffset: c,
                align: l,
                alignOffset: d,
                arrowPadding: u,
                collisionBoundary: _,
                collisionPadding: p,
                sticky: y,
                hideWhenDetached: f,
                avoidCollisions: m,
              }
            : {};
      return g(Pi, {
        scope: n,
        content: b,
        viewport: x,
        onViewportChange: P,
        itemRefCallback: Ue,
        selectedItem: k,
        onItemLeave: Qe,
        itemTextRefCallback: me,
        focusSelectedItem: H,
        selectedItemText: T,
        position: o,
        isPositioned: V,
        searchRef: ae,
        children: g(gi, {
          as: _t,
          allowPinchZoom: !0,
          children: g(Sr, {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (R) => {
              R.preventDefault();
            },
            onUnmountAutoFocus: te(r, (R) => {
              var W;
              (W = h.trigger) == null || W.focus({ preventScroll: !0 }),
                R.preventDefault();
            }),
            children: g(yr, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: i,
              onPointerDownOutside: a,
              onFocusOutside: (R) => R.preventDefault(),
              onDismiss: () => h.onOpenChange(!1),
              children: g(Re, {
                role: "listbox",
                id: h.contentId,
                "data-state": h.open ? "open" : "closed",
                dir: h.dir,
                onContextMenu: (R) => R.preventDefault(),
                ...v,
                ...xe,
                onPlaced: () => $(!0),
                ref: C,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...v.style,
                },
                onKeyDown: te(v.onKeyDown, (R) => {
                  const W = R.ctrlKey || R.altKey || R.metaKey;
                  if (
                    (R.key === "Tab" && R.preventDefault(),
                    !W && R.key.length === 1 && le(R.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(R.key))
                  ) {
                    let q = X()
                      .filter((I) => !I.disabled)
                      .map((I) => I.ref.current);
                    if (
                      (["ArrowUp", "End"].includes(R.key) &&
                        (q = q.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(R.key))
                    ) {
                      const I = R.target,
                        B = q.indexOf(I);
                      q = q.slice(B + 1);
                    }
                    setTimeout(() => D(q)), R.preventDefault();
                  }
                }),
              }),
            }),
          }),
        }),
      });
    });
  Ai.displayName = Dc;
  var zc = "SelectItemAlignedPosition",
    ki = F((e, t) => {
      const { __scopeSelect: n, onPlaced: o, ...r } = e,
        i = Ve(Je, n),
        a = He(Je, n),
        [s, c] = E(null),
        [l, d] = E(null),
        u = ie(t, (C) => d(C)),
        _ = Gt(n),
        p = L(!1),
        y = L(!0),
        {
          viewport: f,
          selectedItem: m,
          selectedItemText: v,
          focusSelectedItem: h,
        } = a,
        b = G(() => {
          if (i.trigger && i.valueNode && s && l && f && m && v) {
            const C = i.trigger.getBoundingClientRect(),
              k = l.getBoundingClientRect(),
              O = i.valueNode.getBoundingClientRect(),
              T = v.getBoundingClientRect();
            if (i.dir !== "rtl") {
              const I = T.left - k.left,
                B = O.left - I,
                Q = C.left - B,
                ee = C.width + Q,
                je = Math.max(ee, k.width),
                wt = window.innerWidth - ve,
                xt = hr(B, [ve, Math.max(ve, wt - je)]);
              (s.style.minWidth = ee + "px"), (s.style.left = xt + "px");
            } else {
              const I = k.right - T.right,
                B = window.innerWidth - O.right - I,
                Q = window.innerWidth - C.right - B,
                ee = C.width + Q,
                je = Math.max(ee, k.width),
                wt = window.innerWidth - ve,
                xt = hr(B, [ve, Math.max(ve, wt - je)]);
              (s.style.minWidth = ee + "px"), (s.style.right = xt + "px");
            }
            const M = _(),
              X = window.innerHeight - ve * 2,
              V = f.scrollHeight,
              $ = window.getComputedStyle(l),
              Z = parseInt($.borderTopWidth, 10),
              D = parseInt($.paddingTop, 10),
              H = parseInt($.borderBottomWidth, 10),
              A = parseInt($.paddingBottom, 10),
              j = Z + D + V + A + H,
              ae = Math.min(m.offsetHeight * 5, j),
              le = window.getComputedStyle(f),
              Ue = parseInt(le.paddingTop, 10),
              Qe = parseInt(le.paddingBottom, 10),
              me = C.top + C.height / 2 - ve,
              Re = X - me,
              xe = m.offsetHeight / 2,
              R = m.offsetTop + xe,
              W = Z + D + R,
              re = j - W;
            if (W <= me) {
              const I = M.length > 0 && m === M[M.length - 1].ref.current;
              s.style.bottom = "0px";
              const B = l.clientHeight - f.offsetTop - f.offsetHeight,
                Q = Math.max(Re, xe + (I ? Qe : 0) + B + H),
                ee = W + Q;
              s.style.height = ee + "px";
            } else {
              const I = M.length > 0 && m === M[0].ref.current;
              s.style.top = "0px";
              const Q = Math.max(me, Z + f.offsetTop + (I ? Ue : 0) + xe) + re;
              (s.style.height = Q + "px"), (f.scrollTop = W - me + f.offsetTop);
            }
            (s.style.margin = `${ve}px 0`),
              (s.style.minHeight = ae + "px"),
              (s.style.maxHeight = X + "px"),
              o == null || o(),
              requestAnimationFrame(() => (p.current = !0));
          }
        }, [_, i.trigger, i.valueNode, s, l, f, m, v, i.dir, o]);
      ue(() => b(), [b]);
      const [w, x] = E();
      ue(() => {
        l && x(window.getComputedStyle(l).zIndex);
      }, [l]);
      const P = G(
        (C) => {
          C && y.current === !0 && (b(), h == null || h(), (y.current = !1));
        },
        [b, h]
      );
      return g(Mc, {
        scope: n,
        contentWrapper: s,
        shouldExpandOnScrollRef: p,
        onScrollButtonChange: P,
        children: g("div", {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w,
          },
          children: g(ne.div, {
            ...r,
            ref: u,
            style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
          }),
        }),
      });
    });
  ki.displayName = zc;
  var Lc = "SelectPopperPosition",
    Gn = F((e, t) => {
      const {
          __scopeSelect: n,
          align: o = "start",
          collisionPadding: r = ve,
          ...i
        } = e,
        a = Xt(n);
      return g(Dl, {
        ...a,
        ...i,
        ref: t,
        align: o,
        collisionPadding: r,
        style: {
          boxSizing: "border-box",
          ...i.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    });
  Gn.displayName = Lc;
  var [Mc, Xn] = ut(Je, {}),
    Zn = "SelectViewport",
    Ii = F((e, t) => {
      const { __scopeSelect: n, nonce: o, ...r } = e,
        i = He(Zn, n),
        a = Xn(Zn, n),
        s = ie(t, i.onViewportChange),
        c = L(0);
      return g(oe, {
        children: [
          g("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
            },
            nonce: o,
          }),
          g(Yt.Slot, {
            scope: n,
            children: g(ne.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...r,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...r.style,
              },
              onScroll: te(r.onScroll, (l) => {
                const d = l.currentTarget,
                  { contentWrapper: u, shouldExpandOnScrollRef: _ } = a;
                if (_ != null && _.current && u) {
                  const p = Math.abs(c.current - d.scrollTop);
                  if (p > 0) {
                    const y = window.innerHeight - ve * 2,
                      f = parseFloat(u.style.minHeight),
                      m = parseFloat(u.style.height),
                      v = Math.max(f, m);
                    if (v < y) {
                      const h = v + p,
                        b = Math.min(y, h),
                        w = h - b;
                      (u.style.height = b + "px"),
                        u.style.bottom === "0px" &&
                          ((d.scrollTop = w > 0 ? w : 0),
                          (u.style.justifyContent = "flex-end"));
                    }
                  }
                }
                c.current = d.scrollTop;
              }),
            }),
          }),
        ],
      });
    });
  Ii.displayName = Zn;
  var Ti = "SelectGroup",
    [Fc, Bc] = ut(Ti),
    $c = F((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = In();
      return g(Fc, {
        scope: n,
        id: r,
        children: g(ne.div, {
          role: "group",
          "aria-labelledby": r,
          ...o,
          ref: t,
        }),
      });
    });
  $c.displayName = Ti;
  var Ri = "SelectLabel",
    Wc = F((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = Bc(Ri, n);
      return g(ne.div, { id: r.id, ...o, ref: t });
    });
  Wc.displayName = Ri;
  var Zt = "SelectItem",
    [Vc, Ni] = ut(Zt),
    Oi = F((e, t) => {
      const {
          __scopeSelect: n,
          value: o,
          disabled: r = !1,
          textValue: i,
          ...a
        } = e,
        s = Ve(Zt, n),
        c = He(Zt, n),
        l = s.value === o,
        [d, u] = E(i ?? ""),
        [_, p] = E(!1),
        y = ie(t, (h) => {
          var b;
          return (b = c.itemRefCallback) == null ? void 0 : b.call(c, h, o, r);
        }),
        f = In(),
        m = L("touch"),
        v = () => {
          r || (s.onValueChange(o), s.onOpenChange(!1));
        };
      if (o === "")
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
        );
      return g(Vc, {
        scope: n,
        value: o,
        disabled: r,
        textId: f,
        isSelected: l,
        onItemTextChange: G((h) => {
          u((b) => b || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: g(Yt.ItemSlot, {
          scope: n,
          value: o,
          disabled: r,
          textValue: d,
          children: g(ne.div, {
            role: "option",
            "aria-labelledby": f,
            "data-highlighted": _ ? "" : void 0,
            "aria-selected": l && _,
            "data-state": l ? "checked" : "unchecked",
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            tabIndex: r ? void 0 : -1,
            ...a,
            ref: y,
            onFocus: te(a.onFocus, () => p(!0)),
            onBlur: te(a.onBlur, () => p(!1)),
            onClick: te(a.onClick, () => {
              m.current !== "mouse" && v();
            }),
            onPointerUp: te(a.onPointerUp, () => {
              m.current === "mouse" && v();
            }),
            onPointerDown: te(a.onPointerDown, (h) => {
              m.current = h.pointerType;
            }),
            onPointerMove: te(a.onPointerMove, (h) => {
              var b;
              (m.current = h.pointerType),
                r
                  ? (b = c.onItemLeave) == null || b.call(c)
                  : m.current === "mouse" &&
                    h.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: te(a.onPointerLeave, (h) => {
              var b;
              h.currentTarget === document.activeElement &&
                ((b = c.onItemLeave) == null || b.call(c));
            }),
            onKeyDown: te(a.onKeyDown, (h) => {
              var w;
              (((w = c.searchRef) == null ? void 0 : w.current) !== "" &&
                h.key === " ") ||
                (Pc.includes(h.key) && v(),
                h.key === " " && h.preventDefault());
            }),
          }),
        }),
      });
    });
  Oi.displayName = Zt;
  var bt = "SelectItemText",
    Di = F((e, t) => {
      const { __scopeSelect: n, className: o, style: r, ...i } = e,
        a = Ve(bt, n),
        s = He(bt, n),
        c = Ni(bt, n),
        l = Tc(bt, n),
        [d, u] = E(null),
        _ = ie(
          t,
          (v) => u(v),
          c.onItemTextChange,
          (v) => {
            var h;
            return (h = s.itemTextRefCallback) == null
              ? void 0
              : h.call(s, v, c.value, c.disabled);
          }
        ),
        p = d == null ? void 0 : d.textContent,
        y = Y(
          () =>
            g(
              "option",
              { value: c.value, disabled: c.disabled, children: p },
              c.value
            ),
          [c.disabled, c.value, p]
        ),
        { onNativeOptionAdd: f, onNativeOptionRemove: m } = l;
      return (
        ue(() => (f(y), () => m(y)), [f, m, y]),
        g(oe, {
          children: [
            g(ne.span, { id: c.textId, ...i, ref: _ }),
            c.isSelected && a.valueNode && !a.valueNodeHasChildren
              ? It(i.children, a.valueNode)
              : null,
          ],
        })
      );
    });
  Di.displayName = bt;
  var zi = "SelectItemIndicator",
    Li = F((e, t) => {
      const { __scopeSelect: n, ...o } = e;
      return Ni(zi, n).isSelected
        ? g(ne.span, { "aria-hidden": !0, ...o, ref: t })
        : null;
    });
  Li.displayName = zi;
  var Jn = "SelectScrollUpButton",
    Mi = F((e, t) => {
      const n = He(Jn, e.__scopeSelect),
        o = Xn(Jn, e.__scopeSelect),
        [r, i] = E(!1),
        a = ie(t, o.onScrollButtonChange);
      return (
        ue(() => {
          if (n.viewport && n.isPositioned) {
            let s = function () {
              const l = c.scrollTop > 0;
              i(l);
            };
            const c = n.viewport;
            return (
              s(),
              c.addEventListener("scroll", s),
              () => c.removeEventListener("scroll", s)
            );
          }
        }, [n.viewport, n.isPositioned]),
        r
          ? g(Bi, {
              ...e,
              ref: a,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: c } = n;
                s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
              },
            })
          : null
      );
    });
  Mi.displayName = Jn;
  var Qn = "SelectScrollDownButton",
    Fi = F((e, t) => {
      const n = He(Qn, e.__scopeSelect),
        o = Xn(Qn, e.__scopeSelect),
        [r, i] = E(!1),
        a = ie(t, o.onScrollButtonChange);
      return (
        ue(() => {
          if (n.viewport && n.isPositioned) {
            let s = function () {
              const l = c.scrollHeight - c.clientHeight,
                d = Math.ceil(c.scrollTop) < l;
              i(d);
            };
            const c = n.viewport;
            return (
              s(),
              c.addEventListener("scroll", s),
              () => c.removeEventListener("scroll", s)
            );
          }
        }, [n.viewport, n.isPositioned]),
        r
          ? g(Bi, {
              ...e,
              ref: a,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: c } = n;
                s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
              },
            })
          : null
      );
    });
  Fi.displayName = Qn;
  var Bi = F((e, t) => {
      const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
        i = He("SelectScrollButton", n),
        a = L(null),
        s = Gt(n),
        c = G(() => {
          a.current !== null &&
            (window.clearInterval(a.current), (a.current = null));
        }, []);
      return (
        z(() => () => c(), [c]),
        ue(() => {
          var d;
          const l = s().find((u) => u.ref.current === document.activeElement);
          (d = l == null ? void 0 : l.ref.current) == null ||
            d.scrollIntoView({ block: "nearest" });
        }, [s]),
        g(ne.div, {
          "aria-hidden": !0,
          ...r,
          ref: t,
          style: { flexShrink: 0, ...r.style },
          onPointerDown: te(r.onPointerDown, () => {
            a.current === null && (a.current = window.setInterval(o, 50));
          }),
          onPointerMove: te(r.onPointerMove, () => {
            var l;
            (l = i.onItemLeave) == null || l.call(i),
              a.current === null && (a.current = window.setInterval(o, 50));
          }),
          onPointerLeave: te(r.onPointerLeave, () => {
            c();
          }),
        })
      );
    }),
    Hc = "SelectSeparator",
    Uc = F((e, t) => {
      const { __scopeSelect: n, ...o } = e;
      return g(ne.div, { "aria-hidden": !0, ...o, ref: t });
    });
  Uc.displayName = Hc;
  var eo = "SelectArrow",
    jc = F((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = Xt(n),
        i = Ve(eo, n),
        a = He(eo, n);
      return i.open && a.position === "popper"
        ? g(zl, { ...r, ...o, ref: t })
        : null;
    });
  jc.displayName = eo;
  function $i(e) {
    return e === "" || e === void 0;
  }
  var Wi = F((e, t) => {
    const { value: n, ...o } = e,
      r = L(null),
      i = ie(t, r),
      a = Fl(n);
    return (
      z(() => {
        const s = r.current,
          c = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(c, "value").set;
        if (a !== n && d) {
          const u = new Event("change", { bubbles: !0 });
          d.call(s, n), s.dispatchEvent(u);
        }
      }, [a, n]),
      g(ri, {
        asChild: !0,
        children: g("select", { ...o, ref: i, defaultValue: n }),
      })
    );
  });
  Wi.displayName = "BubbleSelect";
  function Vi(e) {
    const t = ke(e),
      n = L(""),
      o = L(0),
      r = G(
        (a) => {
          const s = n.current + a;
          t(s),
            (function c(l) {
              (n.current = l),
                window.clearTimeout(o.current),
                l !== "" && (o.current = window.setTimeout(() => c(""), 1e3));
            })(s);
        },
        [t]
      ),
      i = G(() => {
        (n.current = ""), window.clearTimeout(o.current);
      }, []);
    return z(() => () => window.clearTimeout(o.current), []), [n, r, i];
  }
  function Hi(e, t, n) {
    const r = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
      i = n ? e.indexOf(n) : -1;
    let a = qc(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter((l) => l !== n));
    const c = a.find((l) =>
      l.textValue.toLowerCase().startsWith(r.toLowerCase())
    );
    return c !== n ? c : void 0;
  }
  function qc(e, t) {
    return e.map((n, o) => e[(t + o) % e.length]);
  }
  var Kc = yi,
    Yc = wi,
    Gc = Ci,
    Xc = Si,
    Zc = Ei,
    Jc = Ii,
    Qc = Oi,
    eu = Di,
    tu = Li,
    nu = Mi,
    ou = Fi;
  function to(e, t) {
    if (e == null) return {};
    var n = {},
      o = Object.keys(e),
      r,
      i;
    for (i = 0; i < o.length; i++)
      (r = o[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  var ru = ["color"],
    iu = F(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = to(e, ru);
      return U(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        U("path", {
          d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    }),
    au = ["color"],
    Ui = F(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = to(e, au);
      return U(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        U("path", {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    }),
    su = ["color"],
    lu = F(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = to(e, su);
      return U(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        U("path", {
          d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    });
  function ji({ flagCode: e }) {
    return g("img", {
      className: S.flag,
      src: `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${e}.svg`,
      alt: `${e.toUpperCase()} flag`,
    });
  }
  function cu({ portal: e, value: t, options: n, onChange: o }) {
    const r = Y(
        () =>
          n
            .map((a) => Cn[a])
            .filter(Boolean)
            .sort((a, s) => a.name.localeCompare(s.name)),
        [n]
      ),
      i = Cn[t] ?? Cn.en;
    return g(Kc, {
      value: t,
      onValueChange: o,
      children: [
        g(Yc, {
          className: ce(S.btn, S.secondary, S.select),
          "aria-label": "Food",
          children: [
            g(ji, { flagCode: i.flagCode }),
            g("span", { className: S.selectValue, children: i.name }),
            g(Gc, { className: S.selectIcon, children: g(Ui, {}) }),
          ],
        }),
        g(Xc, {
          container: e,
          children: g(Zc, {
            className: S.selectContent,
            position: "popper",
            sideOffset: 8,
            align: "end",
            side: "top",
            children: [
              g(nu, { className: S.selectScrollButton, children: g(lu, {}) }),
              g(Jc, {
                className: S.selectViewport,
                children: r.map((a) =>
                  g(Qc, {
                    value: a.languageCode,
                    className: ce(S.selectItem),
                    children: [
                      g(ji, { flagCode: a.flagCode }),
                      g(eu, { children: a.name }),
                      g(tu, {
                        className: S.selectItemIndicator,
                        children: g(iu, {}),
                      }),
                    ],
                  })
                ),
              }),
              g(ou, { className: S.selectScrollButton, children: g(Ui, {}) }),
            ],
          }),
        }),
      ],
    });
  }
  function uu({ value: e, children: t }) {
    const [n, o] = E(!1);
    return (
      z(() => {
        if (n) {
          const r = setTimeout(() => {
            o(!1);
          }, 2e3);
          return () => {
            clearTimeout(r);
          };
        }
      }, [n]),
      g("button", {
        className: ce(S.btn, S.secondary),
        onClick: () => {
          navigator.clipboard.writeText(e), o(!0);
        },
        children: n ? "Copied!" : t,
      })
    );
  }
  const du = 1e3 * 60,
    fu = 1e3 * 5;
  function pu({
    termsKey: e,
    config: t,
    avatar: n,
    contents: o,
    variant: r,
    feedbackMode: i,
    location: a,
    languageConfig: s,
    dynamicVariables: c,
  }) {
    const [currentTranscript, setCurrentTranscript] = E(null);
    const l = Y(() => (e ? !!localStorage.getItem(e) : !1), [e]),
      d = L(null),
      u = L(null),
      _ = L(null),
      [p, y] = E(l),
      [f, m] = E(!1),
      [v, h] = E(null),
      [b, w] = E(!1),
      [x, P] = E(!1),
      [C, k] = E(null),
      O = Fa({
        onDisconnect: (I) => {
          I.reason === "error" &&
            (k(I.message),
            console.error(
              "Disconnected due to an error:",
              I.message
            ));
        },
      }),
      {
        startSession: T,
        endSession: M,
        sendFeedback: X,
        canSendFeedback: V,
        status: $,
        isSpeaking: Z,
      } = O,
      D = $ === "disconnected",
      H = x || r !== "expandable" || !D,
      [A, j] = E(null),
      [ae, le] = E(0),
      [Ue, Qe] = E(s.defaultValue);
    z(() => {
      if (D) {
        const I = setTimeout(() => j(null), 3e5);
        return () => clearTimeout(I);
      }
    }, [D]),
      z(() => () => M(), []),
      z(() => {
        var I;
        if (_.current) {
          const B = () => {
            let ee = null;
            for (const je of _.current.assignedElements())
              if (je instanceof HTMLFormElement) {
                ee = je;
                break;
              }
            h(ee), w((ee == null ? void 0 : ee.checkValidity()) ?? !1);
          };
          B();
          const Q = _.current;
          return (
            Q.addEventListener("slotchange", B),
            () => Q.removeEventListener("slotchange", B)
          );
        } else
          h(u.current),
            w(((I = u.current) == null ? void 0 : I.checkValidity()) ?? !1);
      }, [o.terms]),
      z(() => {
        l || !v ? (m(!1), y(!0)) : !l && v && y(!1);
      }, [l, v]);
    async function me(I) {
      const B = new CustomEvent("kaufy-ai:call", {
        bubbles: !0,
        composed: !0,
        detail: {
          config: {
            ...t,
            overrides: { agent: { language: s.options ? Ue : void 0 } },
            dynamicVariables: c,
          },
        },
      });
      I.dispatchEvent(B), k(null);
      try {
        const Q = await T(B.detail.config);
        le(0), j(Q);
      } catch (Q) {
        let ee = "Could not start a conversation.";
        Q instanceof CloseEvent
          ? (ee = Q.reason || ee)
          : Q instanceof Error && (ee = Q.message || ee),
          k(ee);
      }
    }
    const [Re, xe] = E(V);
    z(() => {
      if (V) {
        const I = setTimeout(() => {
          xe(!0);
        }, fu);
        return () => clearTimeout(I);
      } else xe(!1);
    }, [V]);
    const [R, W] = Y(
        () =>
          Date.now() - ae < du
            ? []
            : D && A && (i === "end" || i === "during")
            ? [
                "Was the call helpful?",
                (I) => {
                  Ma(A, I, a === "us" ? Ro : To).catch(() => {
                    console.error(
                      `Cannot send feedback for conversation ${A}`
                    );
                  }),
                    j(null),
                    le(Date.now());
                },
              ]
            : !D && Re && i === "during"
            ? [
                "Is this response helpful?",
                (I) => {
                  X(I), le(Date.now());
                },
              ]
            : [],
        [D, A, Re, i, a, ae, Z]
      ),
      [re, q] = E(null);
    return (
      z(() => {
        R && q(R);
      }, [R]),
      (currentTranscript && (
        g('div',{
          className: S.chatBubble,
          children: g('p',{
            className:S.chatBubbleText,
            children: currentTranscript
          })
        })
        
      )),
      g("div", {
        ref: d,
        className: ce(
          S.wrapper,
          S[r],
          H && S.open,
          (f || C) && S.customContent,
          s.options && S.hasLanguageSelect
        ),
        children: [
          r !== "expandable" && g(pr, {}),
          r === "expandable" &&
            g("button", {
              disabled: !D,
              className: ce(S.btn, S.minimize),
              onClick: () => P(!x),
              title: o.expand,
              children: [
                g(Ba, { className: S.openContent }),
                g("div", {
                  className: S.closedContent,
                  children: [
                    g(ur, { className: S.icon }),
                    g("div", { className: S.ellipsis, children: o.expand }),
                  ],
                }),
              ],
            }),
          g("div", {
            className: S.box,
            children: [
              C &&
                g("div", {
                  className: S.error,
                  children: [
                    g("h1", { children: "An error occurred" }),
                    g("p", { children: C }),
                    A && g("p", { children: ["Conversation ID: ", A] }),
                    g("div", {
                      className: S.termsFooter,
                      children: [
                        A && g(uu, { value: A, children: "Copy ID" }),
                        g("button", {
                          className: ce(S.btn, S.secondary),
                          onClick: () => {
                            k(null), le(Date.now());
                          },
                          children: "Close",
                        }),
                      ],
                    }),
                  ],
                }),
              g("div", {
                className: ce(S.terms, f && !C && S.show),
                children: [
                  o.terms
                    ? g("form", {
                        ref: u,
                        onInput: () => {
                          w((v == null ? void 0 : v.checkValidity()) ?? !1);
                        },
                        dangerouslySetInnerHTML: { __html: o.terms },
                      })
                    : g("slot", {
                        onInput: () => {
                          w((v == null ? void 0 : v.checkValidity()) ?? !1);
                        },
                        ref: _,
                        name: "terms",
                      }),
                  g("div", {
                    class: S.termsFooter,
                    children: [
                      g("button", {
                        className: ce(S.btn, S.secondary),
                        type: "button",
                        onClick: () => {
                          m(!1);
                        },
                        children: "Cancel",
                      }),
                      g("button", {
                        className: ce(S.btn, !b && S.disabled),
                        type: "button",
                        onClick: (I) => {
                          v != null &&
                            v.reportValidity() &&
                            (y(!0),
                            e && localStorage.setItem(e, "true"),
                            m(!1),
                            me(I.currentTarget));
                        },
                        children: "Agree",
                      }),
                    ],
                  }),
                ],
              }),
              !f &&
                !C &&
                g(oe, {
                  children: [
                    g(Ka, { config: n, ...O }),
                    g("div", {
                      className: S.actions,
                      children: [
                        r !== "compact" &&
                          g("p", {
                            className: S.status,
                            children: D
                              ? o.action
                              : Z
                              ? o.speaking
                              : o.listening,
                          }),
                        D
                          ? g("div", {
                              className: S.actionButtons,
                              children: [
                                g("button", {
                                  className: S.btn,
                                  title: o.startCall,
                                  onClick: (I) => {
                                    if (!p) {
                                      m(!0);
                                      return;
                                    }
                                    me(I.currentTarget);
                                  },
                                  children: [
                                    g(ur, { className: S.icon }),
                                    g("div", {
                                      className: S.ellipsis,
                                      children: o.startCall,
                                    }),
                                  ],
                                }),
                                s.options &&
                                  g(cu, {
                                    value: Ue,
                                    onChange: Qe,
                                    options: s.options,
                                    portal: d.current ?? void 0,
                                  }),
                              ],
                            })
                          : g("button", {
                              className: ce(S.btn, S.secondary),
                              title: o.endCall,
                              onClick: () => M(),
                              children: [
                                g($a, { className: S.icon }),
                                g("div", {
                                  className: S.ellipsis,
                                  children: o.endCall,
                                }),
                              ],
                            }),
                        r === "expandable" && g(pr, {}),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          i !== "none" &&
            g("div", {
              className: ce(S.feedback, H && W && !C && S.show),
              children: [
                re,
                g("button", {
                  className: ce(S.btn, S.secondary, S.iconBtn),
                  title: "Yes",
                  onClick: () => (W == null ? void 0 : W(!0)),
                  children: g(Wa, { className: S.icon }),
                }),
                g("button", {
                  className: ce(S.btn, S.secondary, S.iconBtn),
                  title: "No",
                  onClick: () => (W == null ? void 0 : W(!1)),
                  children: g(Va, { className: S.icon }),
                }),
              ],
            }),
        ],
      })
    );
  }
  const qi = ["full", "compact", "expandable"];
  function hu(e) {
    return qi.includes(e) ? e : qi[0];
  }
  function _u(e = "us") {
    switch (e) {
      case "us":
      case "global":
        return e;
      default:
        return (
          console.warn(
            `Invalid server-location: ${e}. Defaulting to "us"`
          ),
          "us"
        );
    }
  }
  const vu = [
      "variant",
      "override-config",
      "avatar-image-url",
      "avatar-orb-color-1",
      "avatar-orb-color-2",
      "agent-id",
      "signed-url",
      "action-text",
      "start-call-text",
      "end-call-text",
      "expand-text",
      "listening-text",
      "speaking-text",
      "terms-key",
      "server-location",
      "language",
      "dynamic-variables",
    ],
    mu =
  '@import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap";' +
  '* { box-sizing: border-box; }' +
  ':host { pointer-events: none; position: fixed; right: 32px; bottom: 32px; z-index: 1000; }' +
  '._wrapper_1yvvz_15 { display: flex; flex-direction: column-reverse; align-items: flex-end; gap: 16px; font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }' +
  '._box_1yvvz_36 { background: linear-gradient(135deg, #1A1A2E, #16213E); color: #ffffff; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 16px; padding: 24px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); pointer-events: none; opacity: 0; transition: opacity 0.2s ease-in-out; max-width: calc(100vw - 64px); max-height: calc(100vh - 64px); }' +
  '._open_1yvvz_54 ._box_1yvvz_36 { pointer-events: auto; opacity: 1; }' +
  '._expandable_1yvvz_59 ._box_1yvvz_36 { flex-direction: column; padding: 32px; gap: 24px; }' +
  '._expandable_1yvvz_59:not(._customContent_1yvvz_65) ._box_1yvvz_36 { padding-top: 48px; }' +
  '._compact_1yvvz_69:not(._customContent_1yvvz_65) ._box_1yvvz_36 { gap: 10px; padding: 16px; border-radius: 24px; }' +
  '._avatar_1yvvz_75 { position: relative; width: 60px; height: 60px; }' +
  '._compact_1yvvz_69 ._avatar_1yvvz_75 { width: 40px; height: 40px; }' +
  '._expandable_1yvvz_59 ._avatar_1yvvz_75 { width: 96px; height: 96px; }' +
  '@media (min-width: 768px) {' +
    ':host { right: 32px; bottom: 32px; }' +
    '._wrapper_1yvvz_15 { gap: 16px; padding: 0; }' +
    '._box_1yvvz_36 { padding: 24px; gap: 16px; max-width: 480px; }' +
    '._avatar_1yvvz_75 { width: 60px; height: 60px; }' +
    '._actions_1yvvz_118 { min-width: 160px; width: min-content; }' +
    '._btn_1yvvz_159 { height: 40px; max-width: 300px; }' +
  '}'+
  '._avatarBackground_1yvvz_91 { border-radius: 50%; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background-color: rgba(255,255,255,0.2); }' +
  '._avatarImage_1yvvz_101 { border-radius: 50%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-size: cover; background-color: #1A1A2E; overflow: hidden; }' +
  '._canvas_1yvvz_113 { width: 100%; height: 100%; }' +
  '._actions_1yvvz_118 { min-width: 160px; width: min-content; display: flex; gap: 12px; flex-direction: column; }' +
  '._hasLanguageSelect_1yvvz_126 ._actions_1yvvz_118 { min-width: 210px; }' +
  '._expandable_1yvvz_59 ._actions_1yvvz_118 { min-width: 190px; width: min-content; justify-content: flex-end; }' +
  '._actionButtons_1yvvz_136 { display: flex; gap: 10px; }' +
  '._expandable_1yvvz_59 ._actionButtons_1yvvz_136 { flex-direction: column; }' +
  '._status_1yvvz_145 { font-size: 14px; white-space: nowrap; line-height: 12px; margin: 0; color: #cccccc; }' +
  '._expandable_1yvvz_59 ._status_1yvvz_145 { text-align: center; white-space: normal; line-height: 20px; }' +
  '._btn_1yvvz_159 { --el-ring-color: transparent; --el-ring-radius: 0; --el-focus-ring-radius: 0; --el-border-width: 0; background-color: #0F3460; color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); cursor: pointer; -webkit-appearance: none; -moz-appearance: none; appearance: none; border: none; padding: 0 20px; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; font-size: 14px; font-weight: 500; transition: all 0.2s ease-in-out; flex-grow: 1; height: 40px; max-width: 300px; }' +
  '._expandable_1yvvz_59 ._btn_1yvvz_159 { flex-grow: 0; }' +
  '._btn_1yvvz_159:hover { --el-ring-color: rgba(125,135,155,0.2); --el-ring-radius: 4px; }' +
  '._btn_1yvvz_159:active { --el-ring-color: rgba(101,115,135,0.3); --el-ring-radius: 4px; }' +
  '._btn_1yvvz_159._disabled_1yvvz_205, ._btn_1yvvz_159:disabled { opacity: 0.5; pointer-events: none; }' +
  '._btn_1yvvz_159:focus-visible { --el-focus-ring-radius: 2px; outline: none; }' +
  '._btn_1yvvz_159._secondary_1yvvz_219 { --el-border-width: 1px; background-color: transparent; color: #0F3460; border: 1px solid #0F3460; }' +
  '._btn_1yvvz_159._secondary_1yvvz_219:hover { --el-ring-color: rgba(135,145,165,0.1); }' +
  '._btn_1yvvz_159._secondary_1yvvz_219:active { --el-ring-color: rgba(125,135,155,0.2); }' +
  '._btn_1yvvz_159._iconBtn_1yvvz_233 { height: 36px; }' +
  '._btn_1yvvz_159._select_1yvvz_237 { flex-grow: 0; padding: 8px; gap: 6px; }' +
  '._ellipsis_1yvvz_243 { overflow: hidden; text-overflow: ellipsis; }' +
  '._icon_1yvvz_233 { margin-left: -6px; margin-right: 4px; width: 18px; height: 18px; flex-shrink: 0; }' +
  '._iconBtn_1yvvz_233 ._icon_1yvvz_233 { margin-left: -6px; margin-right: -6px; width: 14px; height: 14px; }' +
  '._minimize_1yvvz_263 { pointer-events: auto; display: grid; grid-template-columns: 1fr; position: relative; overflow: hidden; }' +
  '._open_1yvvz_54 ._minimize_1yvvz_263 { grid-template-columns: 0fr; align-items: center; height: 40px; padding: 0 20px; }' +
  '._openContent_1yvvz_278 { position: absolute; top: 8px; left: 8px; opacity: 0; pointer-events: none; transform: rotate(90deg); }' +
  '._open_1yvvz_54 ._openContent_1yvvz_278 { opacity: 1; pointer-events: auto; transform: rotate(0deg); }' +
  '._closedContent_1yvvz_293 { min-width: 0; display: flex; align-items: center; justify-content: center; }' +
  '._open_1yvvz_54 ._closedContent_1yvvz_293 { opacity: 0; pointer-events: none; }' +
  '._openContent_1yvvz_278, ._closedContent_1yvvz_293 { transition: all 0.2s ease-in-out; }' +
  '._poweredBy_1yvvz_310 { pointer-events: auto; font-size: 10px; align-self: center; text-align: center; color: #cccccc; }' +
  '._poweredBy_1yvvz_310 a, ._poweredBy_1yvvz_310 span { opacity: 0.6; }' +
  '._poweredBy_1yvvz_310 a { white-space: nowrap; color: inherit; outline-color: #0F3460; }' +
  '._poweredBy_1yvvz_310 a:hover, ._poweredBy_1yvvz_310 a:focus-visible { opacity: 1; }' +
  '._compact_1yvvz_69 ._poweredBy_1yvvz_310, ._full_1yvvz_335 ._poweredBy_1yvvz_310 { margin: -8px 0 -20px; }' +
  '._terms_1yvvz_339 { display: none; max-width: 480px; font-size: 14px; line-height: 20px; color: #cccccc; }' +
  '._terms_1yvvz_339 form { display: flex; flex-direction: column; gap: 16px; }' +
  '._terms_1yvvz_339 p, ._terms_1yvvz_339 ul, ._terms_1yvvz_339 ol, ._terms_1yvvz_339 h1, ._terms_1yvvz_339 h2, ._terms_1yvvz_339 h3, ._terms_1yvvz_339 h4, ._terms_1yvvz_339 h5, ._terms_1yvvz_339 h6 { margin: 0; font-weight: 400; }' +
  '._terms_1yvvz_339 a { color: #aaaaaa; }' +
  '._terms_1yvvz_339 ._strong_1yvvz_370 { font-weight: 500; }' +
  '._terms_1yvvz_339 h1 { font-size: 36px; }' +
  '._terms_1yvvz_339 h2 { font-size: 30px; }' +
  '._terms_1yvvz_339 h3 { font-size: 26px; }' +
  '._terms_1yvvz_339 h4 { font-size: 22px; }' +
  '._terms_1yvvz_339 h5 { font-size: 20px; }' +
  '._terms_1yvvz_339 h6 { font-size: 18px; }' +
  '._terms_1yvvz_339._show_1yvvz_398 { display: block; }' +
  '._termsFooter_1yvvz_402 { display: flex; gap: 8px; justify-content: flex-end; margin-top: 20px; }' +
  '._termsFooter_1yvvz_402 ._btn_1yvvz_159 { flex-grow: 0; }' +
  '._feedback_1yvvz_413 { display: flex; align-items: center; gap: 8px; z-index: 1; opacity: 0; transform: translateY(8px); transition: all 0.6s ease; font-size: 10px; white-space: nowrap; line-height: 12px; margin: 0; color: #cccccc; }' +
  '._feedback_1yvvz_413._show_1yvvz_398 { opacity: 0.5; transform: translateY(0); pointer-events: auto; }' +
  '._feedback_1yvvz_413._show_1yvvz_398:hover { opacity: 1; }' +
  '._flag_1yvvz_439 { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); }' +
  '._selectContent_1yvvz_447 { z-index: 1; overflow: hidden; background-color: #16213E; color: #ffffff; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; max-height: min(384px, 80vh); min-width: 180px; }' +
  '._selectViewport_1yvvz_458 { padding: 8px; }' +
  '._selectValue_1yvvz_462 { display: none; margin: 0 auto; }' +
  '._selectIcon_1yvvz_468 { padding-right: 4px; }' +
  '._expandable_1yvvz_59 ._selectValue_1yvvz_462 { display: inline; }' +
  '._selectItem_1yvvz_476 { display: flex; user-select: none; align-items: center; padding: 6px 32px 6px 6px; gap: 8px; cursor: pointer; border-radius: 8px; position: relative; }' +
  '._selectItem_1yvvz_476:focus-visible { outline: none; }' +
  '._selectItem_1yvvz_476[data-highlighted] { background-color: rgba(255,255,255,0.1); }' +
  '._selectItemIndicator_1yvvz_495 { position: absolute; right: 0; width: 24px; display: inline-flex; align-items: center; justify-content: center; }' +
  '._selectScrollButton_1yvvz_504 { display: flex; align-items: center; justify-content: center; height: 24px; background-color: #16213E; cursor: default; }' +
  '._error_1yvvz_513 { max-width: 320px; font-size: 14px; line-height: 20px; }' +
  '._error_1yvvz_513 h1 { margin: 0 0 16px; font-size: 22px; font-weight: 400; }' +
  '._error_1yvvz_513 p { margin: 0; }'+
  `._chatBubble_1yvvz_600 {
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 16px;
  background: #ffffff;
  color: #000000;
  padding: 12px 16px;
  border-radius: 12px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform-origin: bottom right;
  animation: bubbleIn 0.3s ease-out forwards;
  pointer-events: none;
}

._chatBubble_1yvvz_600::after {
  content: '';
  position: absolute;
  bottom: -8px;
  right: 24px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #ffffff;
}

@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateX(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}

._chatBubbleText_1yvvz_630 {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
}`;
  function gu({ config: e }) {
    let t = mu;
    const n = Y(
      () => `:host {
  --el-bg-color: ${(e == null ? void 0 : e.bg_color) ?? "#fff"};
  --el-text-color: ${(e == null ? void 0 : e.text_color) ?? "#000"};
  --el-border-color: ${(e == null ? void 0 : e.border_color) ?? "#e1e1e1"};
  --el-border-radius: ${(e == null ? void 0 : e.border_radius) ?? "20"}px;
  --el-btn-color: ${(e == null ? void 0 : e.btn_color) ?? "#000"};
  --el-btn-text-color: ${(e == null ? void 0 : e.btn_text_color) ?? "#fff"};
  --el-btn-radius: ${(e == null ? void 0 : e.btn_radius) ?? "32"}px;
  --el-focus-color: ${(e == null ? void 0 : e.focus_color) ?? "#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`,
      [e]
    );
    return g("style", { children: [n, t] });
  }
  function yu({
    variant: e,
    language: t,
    ["terms-key"]: n,
    ["agent-id"]: o,
    ["signed-url"]: r,
    ["override-config"]: i,
    ["avatar-image-url"]: a,
    ["avatar-orb-color-1"]: s,
    ["avatar-orb-color-2"]: c,
    ["action-text"]: l,
    ["start-call-text"]: d,
    ["end-call-text"]: u,
    ["expand-text"]: _,
    ["listening-text"]: p,
    ["speaking-text"]: y,
    ["server-location"]: f,
    ["dynamic-variables"]: m,
  }) {
    const v = Y(() => _u(f), [f]),
      [h, b] = E(null),
      [w, x] = E(null),
      P = Y(
        () =>
          a
            ? { type: "image", url: a }
            : s && c
            ? { type: "orb", color_1: s, color_2: c }
            : (h == null ? void 0 : h.avatar) ?? null,
        [a, s, c, h]
      ),
      C = Y(
        () => ({
          startCall:
            d ?? (h == null ? void 0 : h.start_call_text) ?? "Let's Talk",
          endCall: u ?? (h == null ? void 0 : h.end_call_text) ?? "End it",
          action: l ?? (h == null ? void 0 : h.action_text) ?? "Welcome to Kaufy, How can I help you?",
          expand: _ ?? (h == null ? void 0 : h.expand_text) ?? "Chat with AI",
          listening:
            p ?? (h == null ? void 0 : h.listening_text) ?? "Listening",
          speaking:
            y ?? (h == null ? void 0 : h.speaking_text) ?? "Talk to interrupt",
          terms: (h == null ? void 0 : h.terms_html) ?? "",
        }),
        [l, d, u, _, p, y, h]
      ),
      k = Y(() => {
        var T;
        return {
          defaultValue:
            t &&
            (T = h == null ? void 0 : h.supported_language_overrides) != null &&
            T.includes(t)
              ? t
              : (h == null ? void 0 : h.language) ?? "en",
          options: h == null ? void 0 : h.supported_language_overrides,
        };
      }, [h, t]),
      O = Y(() => {
        if (m)
          try {
            return JSON.parse(m);
          } catch (T) {
            console.error(
              `Cannot parse dynamic-variables: ${
                T == null ? void 0 : T.message
              }`
            );
          }
      }, [m]);
    return (
      z(() => {
        if (i)
          try {
            const M = JSON.parse(i);
            if (M) {
              b(M);
              return;
            }
          } catch (M) {
            console.error(
              `Cannot parse override-config: ${
                M == null ? void 0 : M.message
              }`
            );
          }
        if (!o) {
          b(null);
          return;
        }
        const T = new AbortController();
        return (
          bu(o, v, T.signal)
            .then((M) => {
              T.signal.aborted || b(M);
            })
            .catch((M) => {
              console.error(
                `Cannot fetch config for agent ${o}: ${
                  M == null ? void 0 : M.message
                }`
              ),
                T.signal.aborted || b(null);
            }),
          () => {
            T.abort();
          }
        );
      }, [o, v, i]),
      z(() => {
        if (o) {
          x({ agentId: o, origin: v === "us" ? da : ua });
          return;
        }
        if (r) {
          x({ signedUrl: r });
          return;
        }
        x(null),
          console.error(
            "Either agent-id or signed-url is required"
          );
      }, [o, r, v]),
      g(oe, {
        children: [
          g(gu, { config: h }),
          h &&
            w &&
            P &&
            g(pu, {
              termsKey: n ?? h.terms_key,
              config: w,
              contents: C,
              feedbackMode: h.feedback_mode,
              location: v,
              variant: hu(e ?? (h == null ? void 0 : h.variant)),
              avatar: P,
              languageConfig: k,
              dynamicVariables: O,
            }),
        ],
      })
    );
  }
  async function bu(e, t, n) {
    const i = await (
      await fetch(`${t === "us" ? Ro : To}/v1/convai/agents/${e}/widget`, {
        signal: n,
      })
    ).json();
    if (!i.widget_config)
      throw new Error("Response does not contain widget_config");
    return i.widget_config;
  }
  
  ia(yu, "kaufy-ai", vu, { shadow: !0 });
});



