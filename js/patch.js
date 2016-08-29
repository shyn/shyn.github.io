!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
     : t(e)
}
("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function o(e, t, n) {
        if (it.isFunction(t))
            return it.grep(e, function(e, o) {
                return !!t.call(e, o, e) !== n
            }
            );
        if (t.nodeType)
            return it.grep(e, function(e) {
                return e === t !== n
            }
            );
        if ("string" == typeof t) {
            if (ft.test(t))
                return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function(e) {
            return it.inArray(e, t) >= 0 !== n
        }
        )
    }
    function i(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function r(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }
        ),
        t
    }
    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(),
        it.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var o = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(o),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null  : +n + "" === n ? +n : kt.test(n) ? it.parseJSON(n) : n
                } catch (i) {}
                it.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function u(e, t, n, o) {
        if (it.acceptData(e)) {
            var i, r, a = it.expando, s = e.nodeType, l = s ? it.cache : e, c = s ? e[a] : e[a] && a;
            if (c && l[c] && (o || l[c].data) || void 0 !== n || "string" != typeof t)
                return c || (c = s ? e[a] = V.pop() || it.guid++ : a),
                l[c] || (l[c] = s ? {} : {
                    toJSON: it.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (o ? l[c] = it.extend(l[c], t) : l[c].data = it.extend(l[c].data, t)),
                r = l[c],
                o || (r.data || (r.data = {}),
                r = r.data),
                void 0 !== n && (r[it.camelCase(t)] = n),
                "string" == typeof t ? (i = r[t],
                null  == i && (i = r[it.camelCase(t)])) : i = r,
                i
        }
    }
    function d(e, t, n) {
        if (it.acceptData(e)) {
            var o, i, r = e.nodeType, a = r ? it.cache : e, s = r ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (o = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in o ? t = [t] : (t = it.camelCase(t),
                    t = t in o ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--; )
                        delete o[t[i]];
                    if (n ? !c(o) : !it.isEmptyObject(o))
                        return
                }
                (n || (delete a[s].data,
                c(a[s]))) && (r ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null )
            }
        }
    }
    function f() {
        return !0
    }
    function p() {
        return !1
    }
    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }
    function m(e) {
        var t = Ft.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, o, i = 0, r = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [],
            n = e.childNodes || e; null  != (o = n[i]); i++)
                !t || it.nodeName(o, t) ? r.push(o) : it.merge(r, g(o, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], r) : r
    }
    function v(e) {
        Ot.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (null  !== it.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Yt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        for (var n, o = 0; null  != (n = e[o]); o++)
            it._data(n, "globalEval", !t || it._data(t[o], "globalEval"))
    }
    function C(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, o, i, r = it._data(e), a = it._data(t, r), s = r.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (o = 0,
                    i = s[n].length; i > o; o++)
                        it.event.add(t, n, s[n][o])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }
    function T(e, t) {
        var n, o, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (o in i.events)
                    it.removeEvent(t, o, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text,
            x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ot.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function k(t, n) {
        var o, i = it(n.createElement(t)).appendTo(n.body), r = e.getDefaultComputedStyle && (o = e.getDefaultComputedStyle(i[0])) ? o.display : it.css(i[0], "display");
        return i.detach(),
        r
    }
    function E(e) {
        var t = ht
          , n = Kt[e];
        return n || (n = k(e, t),
        "none" !== n && n || (Jt = (Jt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (Jt[0].contentWindow || Jt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = k(e, t),
        Jt.detach()),
        Kt[e] = n),
        n
    }
    function N(e, t) {
        return {
            get: function() {
                var n = e();
                if (null  != n)
                    return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function S(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, i = pn.length; i--; )
            if (t = pn[i] + n,
            t in e)
                return t;
        return o
    }
    function A(e, t) {
        for (var n, o, i, r = [], a = 0, s = e.length; s > a; a++)
            o = e[a],
            o.style && (r[a] = it._data(o, "olddisplay"),
            n = o.style.display,
            t ? (r[a] || "none" !== n || (o.style.display = ""),
            "" === o.style.display && At(o) && (r[a] = it._data(o, "olddisplay", E(o.nodeName)))) : (i = At(o),
            (n && "none" !== n || !i) && it._data(o, "olddisplay", i ? n : it.css(o, "display"))));
        for (a = 0; s > a; a++)
            o = e[a],
            o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var o = cn.exec(t);
        return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
    }
    function O(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)
            "margin" === n && (a += it.css(e, n + St[r], !0, i)),
            o ? ("content" === n && (a -= it.css(e, "padding" + St[r], !0, i)),
            "margin" !== n && (a -= it.css(e, "border" + St[r] + "Width", !0, i))) : (a += it.css(e, "padding" + St[r], !0, i),
            "padding" !== n && (a += it.css(e, "border" + St[r] + "Width", !0, i)));
        return a
    }
    function L(e, t, n) {
        var o = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = en(e)
          , a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, r);
        if (0 >= i || null  == i) {
            if (i = tn(e, t, r),
            (0 > i || null  == i) && (i = e.style[t]),
            on.test(i))
                return i;
            o = a && (nt.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + O(e, t, n || (a ? "border" : "content"), o, r) + "px"
    }
    function j(e, t, n, o, i) {
        return new j.prototype.init(e,t,n,o,i)
    }
    function D() {
        return setTimeout(function() {
            hn = void 0
        }
        ),
        hn = it.now()
    }
    function M(e, t) {
        var n, o = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = St[i],
            o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function H(e, t, n) {
        for (var o, i = (xn[t] || []).concat(xn["*"]), r = 0, a = i.length; a > r; r++)
            if (o = i[r].call(n, t, e))
                return o
    }
    function F(e, t, n) {
        var o, i, r, a, s, l, c, u, d = this, f = {}, p = e.style, h = e.nodeType && At(e), m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"),
        null  == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                it.queue(e, "fx").length || s.empty.fire()
            }
            )
        }
        )),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        c = it.css(e, "display"),
        u = "none" === c ? it._data(e, "olddisplay") || E(e.nodeName) : c,
        "inline" === u && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        nt.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }
        ));
        for (o in t)
            if (i = t[o],
            gn.exec(i)) {
                if (delete t[o],
                r = r || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[o])
                        continue;h = !0
                }
                f[o] = m && m[o] || it.style(e, o)
            } else
                c = void 0;
        if (it.isEmptyObject(f))
            "inline" === ("none" === c ? E(e.nodeName) : c) && (p.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = it._data(e, "fxshow", {}),
            r && (m.hidden = !h),
            h ? it(e).show() : d.done(function() {
                it(e).hide()
            }
            ),
            d.done(function() {
                var t;
                it._removeData(e, "fxshow");
                for (t in f)
                    it.style(e, t, f[t])
            }
            );
            for (o in f)
                a = H(h ? m[o] : 0, o, d),
                o in m || (m[o] = a.start,
                h && (a.end = a.start,
                a.start = "width" === o || "height" === o ? 1 : 0))
        }
    }
    function I(e, t) {
        var n, o, i, r, a;
        for (n in e)
            if (o = it.camelCase(n),
            i = t[o],
            r = e[n],
            it.isArray(r) && (i = r[1],
            r = e[n] = r[0]),
            n !== o && (e[o] = r,
            delete e[n]),
            a = it.cssHooks[o],
            a && "expand" in a) {
                r = a.expand(r),
                delete e[o];
                for (n in r)
                    n in e || (e[n] = r[n],
                    t[n] = i)
            } else
                t[o] = i
    }
    function P(e, t, n) {
        var o, i, r = 0, a = bn.length, s = it.Deferred().always(function() {
            delete l.elem
        }
        ), l = function() {
            if (i)
                return !1;
            for (var t = hn || D(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, r = 1 - o, a = 0, l = c.tweens.length; l > a; a++)
                c.tweens[a].run(r);
            return s.notifyWith(e, [c, r, n]),
            1 > r && l ? n : (s.resolveWith(e, [c]),
            !1)
        }
        , c = s.promise({
            elem: e,
            props: it.extend({}, t),
            opts: it.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: hn || D(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var o = it.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(o),
                o
            },
            stop: function(t) {
                var n = 0
                  , o = t ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; o > n; n++)
                    c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (I(u, c.opts.specialEasing); a > r; r++)
            if (o = bn[r].call(c, e, u, c.opts))
                return o;
        return it.map(u, H, c),
        it.isFunction(c.opts.start) && c.opts.start.call(e, c),
        it.fx.timer(it.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function B(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var o, i = 0, r = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; o = r[i++]; )
                    "+" === o.charAt(0) ? (o = o.slice(1) || "*",
                    (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }
    function z(e, t, n, o) {
        function i(s) {
            var l;
            return r[s] = !0,
            it.each(e[s] || [], function(e, s) {
                var c = s(t, n, o);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                i(c),
                !1)
            }
            ),
            l
        }
        var r = {}
          , a = e === $n;
        return i(t.dataTypes[0]) || !r["*"] && i("*")
    }
    function q(e, t) {
        var n, o, i = it.ajaxSettings.flatOptions || {};
        for (o in t)
            void 0 !== t[o] && ((i[o] ? e : n || (n = {}))[o] = t[o]);
        return n && it.extend(!0, e, n),
        e
    }
    function R(e, t, n) {
        for (var o, i, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n)
            r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                o || (o = a)
            }
            r = r || o
        }
        return r ? (r !== l[0] && l.unshift(r),
        n[r]) : void 0
    }
    function W(e, t, n, o) {
        var i, r, a, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters)
                c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r; )
            if (e.responseFields[r] && (n[e.responseFields[r]] = t),
            !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = r,
            r = u.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (a = c[l + " " + r] || c["* " + r],
                    !a)
                        for (i in c)
                            if (s = i.split(" "),
                            s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                a === !0 ? a = c[i] : c[i] !== !0 && (r = s[0],
                                u.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function $(e, t, n, o) {
        var i;
        if (it.isArray(t))
            it.each(t, function(t, i) {
                n || Vn.test(e) ? o(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, o)
            }
            );
        else if (n || "object" !== it.type(t))
            o(e, t);
        else
            for (i in t)
                $(e + "[" + i + "]", t[i], n, o)
    }
    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function Y(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = []
      , Q = V.slice
      , Z = V.concat
      , G = V.push
      , J = V.indexOf
      , K = {}
      , et = K.toString
      , tt = K.hasOwnProperty
      , nt = {}
      , ot = "1.11.1"
      , it = function(e, t) {
        return new it.fn.init(e,t)
    }
      , rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , at = /^-ms-/
      , st = /-([\da-z])/gi
      , lt = function(e, t) {
        return t.toUpperCase()
    }
    ;
    it.fn = it.prototype = {
        jquery: ot,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null  != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return it.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t)
            }
            ))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: G,
        sort: V.sort,
        splice: V.splice
    },
    it.extend = it.fn.extend = function() {
        var e, t, n, o, i, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || it.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); l > s; s++)
            if (null  != (i = arguments[s]))
                for (o in i)
                    e = a[o],
                    n = i[o],
                    a !== n && (c && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1,
                    r = e && it.isArray(e) ? e : []) : r = e && it.isPlainObject(e) ? e : {},
                    a[o] = it.extend(c, r, n)) : void 0 !== n && (a[o] = n));
        return a
    }
    ,
    it.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === it.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === it.type(e)
        }
        ,
        isWindow: function(e) {
            return null  != e && e == e.window
        },
        isNumeric: function(e) {
            return !it.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e))
                return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e)
                    return tt.call(e, t);
            for (t in e)
                ;
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null  == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && it.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, o) {
            var i, r = 0, a = e.length, s = n(e);
            if (o) {
                if (s)
                    for (; a > r && (i = t.apply(e[r], o),
                    i !== !1); r++)
                        ;
                else
                    for (r in e)
                        if (i = t.apply(e[r], o),
                        i === !1)
                            break
            } else if (s)
                for (; a > r && (i = t.call(e[r], r, e[r]),
                i !== !1); r++)
                    ;
            else
                for (r in e)
                    if (i = t.call(e[r], r, e[r]),
                    i === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null  == e ? "" : (e + "").replace(rt, "")
        },
        makeArray: function(e, t) {
            var o = t || [];
            return null  != e && (n(Object(e)) ? it.merge(o, "string" == typeof e ? [e] : e) : G.call(o, e)),
            o
        },
        inArray: function(e, t, n) {
            var o;
            if (t) {
                if (J)
                    return J.call(t, e, n);
                for (o = t.length,
                n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; n > o; )
                e[i++] = t[o++];
            if (n !== n)
                for (; void 0 !== t[o]; )
                    e[i++] = t[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var o, i = [], r = 0, a = e.length, s = !n; a > r; r++)
                o = !t(e[r], r),
                o !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, o) {
            var i, r = 0, a = e.length, s = n(e), l = [];
            if (s)
                for (; a > r; r++)
                    i = t(e[r], r, o),
                    null  != i && l.push(i);
            else
                for (r in e)
                    i = t(e[r], r, o),
                    null  != i && l.push(i);
            return Z.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, o, i;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            it.isFunction(e) ? (n = Q.call(arguments, 2),
            o = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || it.guid++,
            o) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }),
    it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }
    );
    var ct = function(e) {
        function t(e, t, n, o) {
            var i, r, a, s, l, c, d, p, h, m;
            if ((t ? t.ownerDocument || t : z) !== j && L(t),
            t = t || j,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (M && !o) {
                if (i = yt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(a),
                            !r || !r.parentNode)
                                return n;
                            if (r.id === a)
                                return n.push(r),
                                n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && P(t, r) && r.id === a)
                            return n.push(r),
                            n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (w.qsa && (!H || !H.test(e))) {
                    if (p = d = B,
                    h = t,
                    m = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = E(e),
                        (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p),
                        p = "[id='" + p + "'] ",
                        l = c.length; l--; )
                            c[l] = p + f(c[l]);
                        h = bt.test(e) && u(t.parentNode) || t,
                        m = c.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, h.querySelectorAll(m)),
                            n
                        } catch (g) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(lt, "$1"), t, n, o)
        }
        function n() {
            function e(n, o) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                e[n + " "] = o
            }
            var t = [];
            return e
        }
        function o(e) {
            return e[B] = !0,
            e
        }
        function i(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null 
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), o = e.length; o--; )
                C.attrHandle[n[o]] = t
        }
        function a(e, t) {
            var n = t && e
              , o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (o)
                return o;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return o(function(t) {
                return t = +t,
                o(function(n, o) {
                    for (var i, r = e([], n.length, t), a = r.length; a--; )
                        n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                }
                )
            }
            )
        }
        function u(e) {
            return e && typeof e.getElementsByTagName !== Y && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, o = ""; n > t; t++)
                o += e[t].value;
            return o
        }
        function p(e, t, n) {
            var o = t.dir
              , i = n && "parentNode" === o
              , r = R++;
            return t.first ? function(t, n, r) {
                for (; t = t[o]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, r)
            }
             : function(t, n, a) {
                var s, l, c = [q, r];
                if (a) {
                    for (; t = t[o]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[o]; )
                        if (1 === t.nodeType || i) {
                            if (l = t[B] || (t[B] = {}),
                            (s = l[o]) && s[0] === q && s[1] === r)
                                return c[2] = s[2];
                            if (l[o] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, o) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, o))
                        return !1;
                return !0
            }
             : e[0]
        }
        function m(e, n, o) {
            for (var i = 0, r = n.length; r > i; i++)
                t(e, n[i], o);
            return o
        }
        function g(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, c = null  != t; l > s; s++)
                (r = e[s]) && (!n || n(r, o, i)) && (a.push(r),
                c && t.push(s));
            return a
        }
        function v(e, t, n, i, r, a) {
            return i && !i[B] && (i = v(i)),
            r && !r[B] && (r = v(r, a)),
            o(function(o, a, s, l) {
                var c, u, d, f = [], p = [], h = a.length, v = o || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? v : g(v, f, e, s, l), b = n ? r || (o ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l),
                i)
                    for (c = g(b, p),
                    i(c, [], s, l),
                    u = c.length; u--; )
                        (d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            u = b.length; u--; )
                                (d = b[u]) && c.push(y[u] = d);
                            r(null , b = [], c, l)
                        }
                        for (u = b.length; u--; )
                            (d = b[u]) && (c = r ? tt.call(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                    }
                } else
                    b = g(b === a ? b.splice(h, b.length) : b),
                    r ? r(null , a, b, l) : K.apply(a, b)
            }
            )
        }
        function y(e) {
            for (var t, n, o, i = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                return e === t
            }
            , a, !0), c = p(function(e) {
                return tt.call(t, e) > -1
            }
            , a, !0), u = [function(e, n, o) {
                return !r && (o || n !== A) || ((t = n).nodeType ? l(e, n, o) : c(e, n, o))
            }
            ]; i > s; s++)
                if (n = C.relative[e[s].type])
                    u = [p(h(u), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null , e[s].matches),
                    n[B]) {
                        for (o = ++s; i > o && !C.relative[e[o].type]; o++)
                            ;
                        return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, o > s && y(e.slice(s, o)), i > o && y(e = e.slice(o)), i > o && f(e))
                    }
                    u.push(n)
                }
            return h(u)
        }
        function b(e, n) {
            var i = n.length > 0
              , r = e.length > 0
              , a = function(o, a, s, l, c) {
                var u, d, f, p = 0, h = "0", m = o && [], v = [], y = A, b = o || r && C.find.TAG("*", c), x = q += null  == y ? 1 : Math.random() || .1, w = b.length;
                for (c && (A = a !== j && a); h !== w && null  != (u = b[h]); h++) {
                    if (r && u) {
                        for (d = 0; f = e[d++]; )
                            if (f(u, a, s)) {
                                l.push(u);
                                break
                            }
                        c && (q = x)
                    }
                    i && ((u = !f && u) && p--,
                    o && m.push(u))
                }
                if (p += h,
                i && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (o) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = G.call(l));
                        v = g(v)
                    }
                    K.apply(l, v),
                    c && !o && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (q = x,
                A = y),
                m
            }
            ;
            return i ? o(a) : a
        }
        var x, w, C, T, k, E, N, S, A, _, O, L, j, D, M, H, F, I, P, B = "sizzle" + -new Date, z = e.document, q = 0, R = 0, W = n(), $ = n(), X = n(), U = function(e, t) {
            return e === t && (O = !0),
            0
        }
        , Y = "undefined", V = 1 << 31, Q = {}.hasOwnProperty, Z = [], G = Z.pop, J = Z.push, K = Z.push, et = Z.slice, tt = Z.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ot = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = it.replace("w", "w#"), at = "\\[" + ot + "*(" + it + ")(?:" + ot + "*([*^$|!~]?=)" + ot + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + ot + "*\\]", st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)", lt = new RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$","g"), ct = new RegExp("^" + ot + "*," + ot + "*"), ut = new RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"), dt = new RegExp("=" + ot + "*([^\\]'\"]*?)" + ot + "*\\]","g"), ft = new RegExp(st), pt = new RegExp("^" + rt + "$"), ht = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)","i"),
            bool: new RegExp("^(?:" + nt + ")$","i"),
            needsContext: new RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)","i")
        }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)","ig"), Ct = function(e, t, n) {
            var o = "0x" + t - 65536;
            return o !== o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
        }
        ;
        try {
            K.apply(Z = et.call(z.childNodes), z.childNodes),
            Z[z.childNodes.length].nodeType
        } catch (Tt) {
            K = {
                apply: Z.length ? function(e, t) {
                    J.apply(e, et.call(t))
                }
                 : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : z, o = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n,
            D = n.documentElement,
            M = !k(n),
            o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                L()
            }
            , !1) : o.attachEvent && o.attachEvent("onunload", function() {
                L()
            }
            )),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            ),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }
            ),
            w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }
            ),
            w.getById = i(function(e) {
                return D.appendChild(e).id = B,
                !n.getElementsByName || !n.getElementsByName(B).length
            }
            ),
            w.getById ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            C.filter.ID = function(e) {
                var t = e.replace(wt, Ct);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete C.find.ID,
            C.filter.ID = function(e) {
                var t = e.replace(wt, Ct);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
            }
             : function(e, t) {
                var n, o = [], i = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++]; )
                        1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }
            ,
            C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== Y && M ? t.getElementsByClassName(e) : void 0
            }
            ,
            F = [],
            H = [],
            (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + ot + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || H.push("\\[" + ot + "*(?:value|" + nt + ")"),
                e.querySelectorAll(":checked").length || H.push(":checked")
            }
            ),
            i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && H.push("name" + ot + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:")
            }
            )),
            (w.matchesSelector = vt.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = I.call(e, "div"),
                I.call(e, "[s!='']:x"),
                F.push("!=", st)
            }
            ),
            H = H.length && new RegExp(H.join("|")),
            F = F.length && new RegExp(F.join("|")),
            t = vt.test(D.compareDocumentPosition),
            P = t || vt.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            }
             : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return O = !0,
                    0;
                var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return o ? o : (o = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & o || !w.sortDetached && t.compareDocumentPosition(e) === o ? e === n || e.ownerDocument === z && P(z, e) ? -1 : t === n || t.ownerDocument === z && P(z, t) ? 1 : _ ? tt.call(_, e) - tt.call(_, t) : 0 : 4 & o ? -1 : 1)
            }
             : function(e, t) {
                if (e === t)
                    return O = !0,
                    0;
                var o, i = 0, r = e.parentNode, s = t.parentNode, l = [e], c = [t];
                if (!r || !s)
                    return e === n ? -1 : t === n ? 1 : r ? -1 : s ? 1 : _ ? tt.call(_, e) - tt.call(_, t) : 0;
                if (r === s)
                    return a(e, t);
                for (o = e; o = o.parentNode; )
                    l.unshift(o);
                for (o = t; o = o.parentNode; )
                    c.unshift(o);
                for (; l[i] === c[i]; )
                    i++;
                return i ? a(l[i], c[i]) : l[i] === z ? -1 : c[i] === z ? 1 : 0
            }
            ,
            n) : j
        }
        ,
        t.matches = function(e, n) {
            return t(e, null , null , n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && L(e),
            n = n.replace(dt, "='$1']"),
            !(!w.matchesSelector || !M || F && F.test(n) || H && H.test(n)))
                try {
                    var o = I.call(e, n);
                    if (o || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return o
                } catch (i) {}
            return t(n, j, null , [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && L(e),
            P(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && L(e);
            var n = C.attrHandle[t.toLowerCase()]
              , o = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== o ? o : w.attributes || !M ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null 
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], o = 0, i = 0;
            if (O = !w.detectDuplicates,
            _ = !w.sortStable && e.slice(0),
            e.sort(U),
            O) {
                for (; t = e[i++]; )
                    t === e[i] && (o = n.push(i));
                for (; o--; )
                    e.splice(n[o], 1)
            }
            return _ = null ,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, n = "", o = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[o++]; )
                    n += T(t);
            return n
        }
        ,
        C = t.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Ct),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Ct),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null  : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Ct).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                     : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ot + ")" + e + "(" + ot + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    }
                    )
                },
                ATTR: function(e, n, o) {
                    return function(i) {
                        var r = t.attr(i, e);
                        return null  == r ? "!=" === n : n ? (r += "",
                        "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r + " ").indexOf(o) > -1 : "|=" === n ? r === o || r.slice(0, o.length + 1) === o + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, o, i) {
                    var r = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === o && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                     : function(t, n, l) {
                        var c, u, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (r) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (u = g[B] || (g[B] = {}),
                                c = u[e] || [],
                                p = c[0] === q && c[1],
                                f = c[0] === q && c[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        u[e] = [q, p, f];
                                        break
                                    }
                            } else if (y && (c = (t[B] || (t[B] = {}))[e]) && c[0] === q)
                                f = c[1];
                            else
                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[B] || (d[B] = {}))[e] = [q, f]),
                                d !== t)); )
                                    ;
                            return f -= i,
                            f === o || f % o === 0 && f / o >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[B] ? r(n) : r.length > 1 ? (i = [e, e, "", n],
                    C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, t) {
                        for (var o, i = r(e, n), a = i.length; a--; )
                            o = tt.call(e, i[a]),
                            e[o] = !(t[o] = i[a])
                    }
                    ) : function(e) {
                        return r(e, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = []
                      , n = []
                      , i = N(e.replace(lt, "$1"));
                    return i[B] ? o(function(e, t, n, o) {
                        for (var r, a = i(e, null , o, []), s = e.length; s--; )
                            (r = a[s]) && (e[s] = !(t[s] = r))
                    }
                    ) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null , r, n),
                        !n.pop()
                    }
                }
                ),
                has: o(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }
                ),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }
                ),
                lang: o(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(wt, Ct).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }
                ),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null  == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }
                ),
                last: c(function(e, t) {
                    return [t - 1]
                }
                ),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }
                ),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }
                ),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }
                ),
                lt: c(function(e, t, n) {
                    for (var o = 0 > n ? n + t : n; --o >= 0; )
                        e.push(o);
                    return e
                }
                ),
                gt: c(function(e, t, n) {
                    for (var o = 0 > n ? n + t : n; ++o < t; )
                        e.push(o);
                    return e
                }
                )
            }
        },
        C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos,
        C.setFilters = new d,
        E = t.tokenize = function(e, n) {
            var o, i, r, a, s, l, c, u = $[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (s = e,
            l = [],
            c = C.preFilter; s; ) {
                (!o || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                l.push(r = [])),
                o = !1,
                (i = ut.exec(s)) && (o = i.shift(),
                r.push({
                    value: o,
                    type: i[0].replace(lt, " ")
                }),
                s = s.slice(o.length));
                for (a in C.filter)
                    !(i = ht[a].exec(s)) || c[a] && !(i = c[a](i)) || (o = i.shift(),
                    r.push({
                        value: o,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(o.length));
                if (!o)
                    break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }
        ,
        N = t.compile = function(e, t) {
            var n, o = [], i = [], r = X[e + " "];
            if (!r) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    r = y(t[n]),
                    r[B] ? o.push(r) : i.push(r);
                r = X(e, b(i, o)),
                r.selector = e
            }
            return r
        }
        ,
        S = t.select = function(e, t, n, o) {
            var i, r, a, s, l, c = "function" == typeof e && e, d = !o && E(e = c.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (r = d[0] = d[0].slice(0),
                r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && M && C.relative[r[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0],
                    !t)
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i],
                !C.relative[s = a.type]); )
                    if ((l = C.find[s]) && (o = l(a.matches[0].replace(wt, Ct), bt.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(i, 1),
                        e = o.length && f(r),
                        !e)
                            return K.apply(n, o),
                            n;
                        break
                    }
            }
            return (c || N(e, d))(o, t, !M, n, bt.test(e) && u(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = B.split("").sort(U).join("") === B,
        w.detectDuplicates = !!O,
        L(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }
        ),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        ) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        ),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        ) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }
        ),
        i(function(e) {
            return null  == e.getAttribute("disabled")
        }
        ) || r(nt, function(e, t, n) {
            var o;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null 
        }
        ),
        t
    }
    (e);
    it.find = ct,
    it.expr = ct.selectors,
    it.expr[":"] = it.expr.pseudos,
    it.unique = ct.uniqueSort,
    it.text = ct.getText,
    it.isXMLDoc = ct.isXML,
    it.contains = ct.contains;
    var ut = it.expr.match.needsContext
      , dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ft = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === o.nodeType ? it.find.matchesSelector(o, e) ? [o] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType
        }
        ))
    }
    ,
    it.fn.extend({
        find: function(e) {
            var t, n = [], o = this, i = o.length;
            if ("string" != typeof e)
                return this.pushStack(it(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (it.contains(o[t], this))
                            return !0
                }
                ));
            for (t = 0; i > t; t++)
                it.find(e, o[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && ut.test(e) ? it(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = it.fn.init = function(e, t) {
        var n, o;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : mt.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof it ? t[0] : t,
                it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)),
                dt.test(n[1]) && it.isPlainObject(t))
                    for (n in t)
                        it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (o = ht.getElementById(n[2]),
            o && o.parentNode) {
                if (o.id !== n[2])
                    return pt.find(e);
                this.length = 1,
                this[0] = o
            }
            return this.context = ht,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        it.makeArray(e, this))
    }
    ;
    gt.prototype = it.fn,
    pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/
      , yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    it.extend({
        dir: function(e, t, n) {
            for (var o = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n)); )
                1 === i.nodeType && o.push(i),
                i = i[t];
            return o
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    it.fn.extend({
        has: function(e) {
            var t, n = it(e, this), o = n.length;
            return this.filter(function() {
                for (t = 0; o > t; t++)
                    if (it.contains(this, n[t]))
                        return !0
            }
            )
        },
        closest: function(e, t) {
            for (var n, o = 0, i = this.length, r = [], a = ut.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > o; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? it.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        },
        addBack: function(e) {
            return this.add(null  == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    it.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null 
        },
        parents: function(e) {
            return it.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return it.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return it.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return it.sibling(e.firstChild)
        },
        contents: function(e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function(e, t) {
        it.fn[e] = function(n, o) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n),
            o && "string" == typeof o && (i = it.filter(o, i)),
            this.length > 1 && (yt[e] || (i = it.unique(i)),
            vt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }
    );
    var bt = /\S+/g
      , xt = {};
    it.Callbacks = function(e) {
        e = "string" == typeof e ? xt[e] || r(e) : it.extend({}, e);
        var t, n, o, i, a, s, l = [], c = !e.once && [], u = function(r) {
            for (n = e.memory && r,
            o = !0,
            a = s || 0,
            s = 0,
            i = l.length,
            t = !0; l && i > a; a++)
                if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
        }
        , d = {
            add: function() {
                if (l) {
                    var o = l.length;
                    !function r(t) {
                        it.each(t, function(t, n) {
                            var o = it.type(n);
                            "function" === o ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== o && r(n)
                        }
                        )
                    }
                    (arguments),
                    t ? i = l.length : n && (s = o,
                    u(n))
                }
                return this
            },
            remove: function() {
                return l && it.each(arguments, function(e, n) {
                    for (var o; (o = it.inArray(n, l, o)) > -1; )
                        l.splice(o, 1),
                        t && (i >= o && i--,
                        a >= o && a--)
                }
                ),
                this
            },
            has: function(e) {
                return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                i = 0,
                this
            },
            disable: function() {
                return l = c = n = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, n) {
                return !l || o && !c || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                t ? c.push(n) : u(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return d
    }
    ,
    it.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]]
              , n = "pending"
              , o = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return it.Deferred(function(n) {
                        it.each(t, function(t, r) {
                            var a = it.isFunction(e[t]) && e[t];
                            i[r[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === o ? n.promise() : this, a ? [e] : arguments)
                            }
                            )
                        }
                        ),
                        e = null 
                    }
                    ).promise()
                },
                promise: function(e) {
                    return null  != e ? it.extend(e, o) : o
                }
            }
              , i = {};
            return o.pipe = o.then,
            it.each(t, function(e, r) {
                var a = r[2]
                  , s = r[3];
                o[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                }
                , t[1 ^ e][2].disable, t[2][2].lock),
                i[r[0]] = function() {
                    return i[r[0] + "With"](this === i ? o : this, arguments),
                    this
                }
                ,
                i[r[0] + "With"] = a.fireWith
            }
            ),
            o.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, o, i = 0, r = Q.call(arguments), a = r.length, s = 1 !== a || e && it.isFunction(e.promise) ? a : 0, l = 1 === s ? e : it.Deferred(), c = function(e, n, o) {
                return function(i) {
                    n[e] = this,
                    o[e] = arguments.length > 1 ? Q.call(arguments) : i,
                    o === t ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
                }
            }
            ;
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                o = new Array(a); a > i; i++)
                    r[i] && it.isFunction(r[i].promise) ? r[i].promise().done(c(i, o, r)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(o, r),
            l.promise()
        }
    });
    var wt;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e),
        this
    }
    ,
    it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body)
                    return setTimeout(it.ready);
                it.isReady = !0,
                e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]),
                it.fn.triggerHandler && (it(ht).triggerHandler("ready"),
                it(ht).off("ready")))
            }
        }
    }),
    it.ready.promise = function(t) {
        if (!wt)
            if (wt = it.Deferred(),
            "complete" === ht.readyState)
                setTimeout(it.ready);
            else if (ht.addEventListener)
                ht.addEventListener("DOMContentLoaded", s, !1),
                e.addEventListener("load", s, !1);
            else {
                ht.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null  == e.frameElement && ht.documentElement
                } catch (o) {}
                n && n.doScroll && !function i() {
                    if (!it.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        a(),
                        it.ready()
                    }
                }
                ()
            }
        return wt.promise(t)
    }
    ;
    var Ct, Tt = "undefined";
    for (Ct in it(nt))
        break;
    nt.ownLast = "0" !== Ct,
    nt.inlineBlockNeedsLayout = !1,
    it(function() {
        var e, t, n, o;
        n = ht.getElementsByTagName("body")[0],
        n && n.style && (t = ht.createElement("div"),
        o = ht.createElement("div"),
        o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(o).appendChild(t),
        typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(o))
    }
    ),
    function() {
        var e = ht.createElement("div");
        if (null  == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                nt.deleteExpando = !1
            }
        }
        e = null 
    }
    (),
    it.acceptData = function(e) {
        var t = it.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
    ;
    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Et = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando],
            !!e && !c(e)
        },
        data: function(e, t, n) {
            return u(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    it.fn.extend({
        data: function(e, t) {
            var n, o, i, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(r),
                1 === r.nodeType && !it._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (o = a[n].name,
                        0 === o.indexOf("data-") && (o = it.camelCase(o.slice(5)),
                        l(r, o, i[o])));
                    it._data(r, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                it.data(this, e)
            }
            ) : arguments.length > 1 ? this.each(function() {
                it.data(this, e, t)
            }
            ) : r ? l(r, e, it.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                it.removeData(this, e)
            }
            )
        }
    }),
    it.extend({
        queue: function(e, t, n) {
            var o;
            return e ? (t = (t || "fx") + "queue",
            o = it._data(e, t),
            n && (!o || it.isArray(n) ? o = it._data(e, t, it.makeArray(n)) : o.push(n)),
            o || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t)
              , o = n.length
              , i = n.shift()
              , r = it._queueHooks(e, t)
              , a = function() {
                it.dequeue(e, t)
            }
            ;
            "inprogress" === i && (i = n.shift(),
            o--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            i.call(e, a, r)),
            !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                empty: it.Callbacks("once memory").add(function() {
                    it._removeData(e, t + "queue"),
                    it._removeData(e, n)
                }
                )
            })
        }
    }),
    it.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            }
            )
        },
        dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e)
            }
            )
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, o = 1, i = it.Deferred(), r = this, a = this.length, s = function() {
                --o || i.resolveWith(r, [r])
            }
            ;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = it._data(r[a], e + "queueHooks"),
                n && n.empty && (o++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , St = ["Top", "Right", "Bottom", "Left"]
      , At = function(e, t) {
        return e = t || e,
        "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
    }
      , _t = it.access = function(e, t, n, o, i, r, a) {
        var s = 0
          , l = e.length
          , c = null  == n;
        if ("object" === it.type(n)) {
            i = !0;
            for (s in n)
                it.access(e, t, s, n[s], !0, r, a)
        } else if (void 0 !== o && (i = !0,
        it.isFunction(o) || (a = !0),
        c && (a ? (t.call(e, o),
        t = null ) : (c = t,
        t = function(e, t, n) {
            return c.call(it(e), n)
        }
        )),
        t))
            for (; l > s; s++)
                t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
      , Ot = /^(?:checkbox|radio)$/i;
    !function() {
        var e = ht.createElement("input")
          , t = ht.createElement("div")
          , n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        nt.leadingWhitespace = 3 === t.firstChild.nodeType,
        nt.tbody = !t.getElementsByTagName("tbody").length,
        nt.htmlSerialize = !!t.getElementsByTagName("link").length,
        nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML,
        e.type = "checkbox",
        e.checked = !0,
        n.appendChild(e),
        nt.appendChecked = e.checked,
        t.innerHTML = "<textarea>x</textarea>",
        nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        n.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        nt.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            nt.noCloneEvent = !1
        }
        ),
        t.cloneNode(!0).click()),
        null  == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (o) {
                nt.deleteExpando = !1
            }
        }
    }
    (),
    function() {
        var t, n, o = ht.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (nt[t + "Bubbles"] = n in e) || (o.setAttribute(n, "t"),
            nt[t + "Bubbles"] = o.attributes[n].expando === !1);
        o = null 
    }
    ();
    var Lt = /^(?:input|select|textarea)$/i
      , jt = /^key/
      , Dt = /^(?:mouse|pointer|contextmenu)|click/
      , Mt = /^(?:focusinfocus|focusoutblur)$/
      , Ht = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function(e, t, n, o, i) {
            var r, a, s, l, c, u, d, f, p, h, m, g = it._data(e);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                i = l.selector),
                n.guid || (n.guid = it.guid++),
                (a = g.events) || (a = g.events = {}),
                (u = g.handle) || (u = g.handle = function(e) {
                    return typeof it === Tt || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(u.elem, arguments)
                }
                ,
                u.elem = e),
                t = (t || "").match(bt) || [""],
                s = t.length; s--; )
                    r = Ht.exec(t[s]) || [],
                    p = m = r[1],
                    h = (r[2] || "").split(".").sort(),
                    p && (c = it.event.special[p] || {},
                    p = (i ? c.delegateType : c.bindType) || p,
                    c = it.event.special[p] || {},
                    d = it.extend({
                        type: p,
                        origType: m,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && it.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, l),
                    (f = a[p]) || (f = a[p] = [],
                    f.delegateCount = 0,
                    c.setup && c.setup.call(e, o, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))),
                    c.add && (c.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    it.event.global[p] = !0);
                e = null 
            }
        },
        remove: function(e, t, n, o, i) {
            var r, a, s, l, c, u, d, f, p, h, m, g = it.hasData(e) && it._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(bt) || [""],
                c = t.length; c--; )
                    if (s = Ht.exec(t[c]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = it.event.special[p] || {},
                        p = (o ? d.delegateType : d.bindType) || p,
                        f = u[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = r = f.length; r--; )
                            a = f[r],
                            !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (f.splice(r, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            it.event.remove(e, p + t[c], n, o, !0);
                it.isEmptyObject(u) && (delete g.handle,
                it._removeData(e, "events"))
            }
        },
        trigger: function(t, n, o, i) {
            var r, a, s, l, c, u, d, f = [o || ht], p = tt.call(t, "type") ? t.type : t, h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = o = o || ht,
            3 !== o.nodeType && 8 !== o.nodeType && !Mt.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            t = t[it.expando] ? t : new it.Event(p,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            t.result = void 0,
            t.target || (t.target = o),
            n = null  == n ? [t] : it.makeArray(n, [t]),
            c = it.event.special[p] || {},
            i || !c.trigger || c.trigger.apply(o, n) !== !1)) {
                if (!i && !c.noBubble && !it.isWindow(o)) {
                    for (l = c.delegateType || p,
                    Mt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        u = s;
                    u === (o.ownerDocument || ht) && f.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? l : c.bindType || p,
                    r = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"),
                    r && r.apply(s, n),
                    r = a && s[a],
                    r && r.apply && it.acceptData(s) && (t.result = r.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = p,
                !i && !t.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && it.acceptData(o) && a && o[p] && !it.isWindow(o)) {
                    u = o[a],
                    u && (o[a] = null ),
                    it.event.triggered = p;
                    try {
                        o[p]()
                    } catch (m) {}
                    it.event.triggered = void 0,
                    u && (o[a] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = it.event.fix(e);
            var t, n, o, i, r, a = [], s = Q.call(arguments), l = (it._data(this, "events") || {})[e.type] || [], c = it.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, l),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    r = 0; (o = i.handlers[r++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        n = ((it.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, o, i, r, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [],
                        r = 0; s > r; r++)
                            o = t[r],
                            n = o.selector + " ",
                            void 0 === i[n] && (i[n] = o.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null , [l]).length),
                            i[n] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[it.expando])
                return e;
            var t, n, o, i = e.type, r = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Dt.test(i) ? this.mouseHooks : jt.test(i) ? this.keyHooks : {}),
            o = a.props ? this.props.concat(a.props) : this.props,
            e = new it.Event(r),
            t = o.length; t--; )
                n = o[t],
                e[n] = r[n];
            return e.target || (e.target = r.srcElement || ht),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null  == e.which && (e.which = null  != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, o, i, r = t.button, a = t.fromElement;
                return null  == e.pageX && null  != t.clientX && (o = e.target.ownerDocument || ht,
                i = o.documentElement,
                n = o.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return it.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, o) {
            var i = it.extend(new it.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            o ? it.event.trigger(i, null , t) : it.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    it.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
     : function(e, t, n) {
        var o = "on" + t;
        e.detachEvent && (typeof e[o] === Tt && (e[o] = null ),
        e.detachEvent(o, n))
    }
    ,
    it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e,
        t && it.extend(this, t),
        this.timeStamp = e && e.timeStamp || it.now(),
        void (this[it.expando] = !0)) : new it.Event(e,t)
    }
    ,
    it.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, o = this, i = e.relatedTarget, r = e.handleObj;
                return (!i || i !== o && !it.contains(o, i)) && (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    ),
    nt.submitBubbles || (it.event.special.submit = {
        setup: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }
                ),
                it._data(n, "submitBubbles", !0))
            }
            )
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }),
    nt.changeBubbles || (it.event.special.change = {
        setup: function() {
            return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }
            ),
            it.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                it.event.simulate("change", this, e, !0)
            }
            )),
            !1) : void it.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }
                ),
                it._data(t, "changeBubbles", !0))
            }
            )
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return it.event.remove(this, "._change"),
            !Lt.test(this.nodeName)
        }
    }),
    nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        }
        ;
        it.event.special[t] = {
            setup: function() {
                var o = this.ownerDocument || this
                  , i = it._data(o, t);
                i || o.addEventListener(e, n, !0),
                it._data(o, t, (i || 0) + 1)
            },
            teardown: function() {
                var o = this.ownerDocument || this
                  , i = it._data(o, t) - 1;
                i ? it._data(o, t, i) : (o.removeEventListener(e, n, !0),
                it._removeData(o, t))
            }
        }
    }
    ),
    it.fn.extend({
        on: function(e, t, n, o, i) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (r in e)
                    this.on(r, t, n, e[r], i);
                return this
            }
            if (null  == n && null  == o ? (o = t,
            n = t = void 0) : null  == o && ("string" == typeof t ? (o = n,
            n = void 0) : (o = n,
            n = t,
            t = void 0)),
            o === !1)
                o = p;
            else if (!o)
                return this;
            return 1 === i && (a = o,
            o = function(e) {
                return it().off(e),
                a.apply(this, arguments)
            }
            ,
            o.guid = a.guid || (a.guid = it.guid++)),
            this.each(function() {
                it.event.add(this, e, o, n, t)
            }
            )
        },
        one: function(e, t, n, o) {
            return this.on(e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj)
                return o = e.handleObj,
                it(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = p),
            this.each(function() {
                it.event.remove(this, e, n, t)
            }
            )
        },
        trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this)
            }
            )
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , It = / jQuery\d+="(?:null|\d+)"/g
      , Pt = new RegExp("<(?:" + Ft + ")[\\s/>]","i")
      , Bt = /^\s+/
      , zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , qt = /<([\w:]+)/
      , Rt = /<tbody/i
      , Wt = /<|&#?\w+;/
      , $t = /<(?:script|style|link)/i
      , Xt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ut = /^$|\/(?:java|ecma)script/i
      , Yt = /^true\/(.*)/
      , Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Qt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Zt = m(ht)
      , Gt = Zt.appendChild(ht.createElement("div"));
    Qt.optgroup = Qt.option,
    Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead,
    Qt.th = Qt.td,
    it.extend({
        clone: function(e, t, n) {
            var o, i, r, a, s, l = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Pt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML,
            Gt.removeChild(r = Gt.firstChild)),
            !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (o = g(r),
                s = g(e),
                a = 0; null  != (i = s[a]); ++a)
                    o[a] && T(i, o[a]);
            if (t)
                if (n)
                    for (s = s || g(e),
                    o = o || g(r),
                    a = 0; null  != (i = s[a]); a++)
                        C(i, o[a]);
                else
                    C(e, r);
            return o = g(r, "script"),
            o.length > 0 && w(o, !l && g(e, "script")),
            o = s = i = null ,
            r
        },
        buildFragment: function(e, t, n, o) {
            for (var i, r, a, s, l, c, u, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (r = e[h],
                r || 0 === r)
                    if ("object" === it.type(r))
                        it.merge(p, r.nodeType ? [r] : r);
                    else if (Wt.test(r)) {
                        for (s = s || f.appendChild(t.createElement("div")),
                        l = (qt.exec(r) || ["", ""])[1].toLowerCase(),
                        u = Qt[l] || Qt._default,
                        s.innerHTML = u[1] + r.replace(zt, "<$1></$2>") + u[2],
                        i = u[0]; i--; )
                            s = s.lastChild;
                        if (!nt.leadingWhitespace && Bt.test(r) && p.push(t.createTextNode(Bt.exec(r)[0])),
                        !nt.tbody)
                            for (r = "table" !== l || Rt.test(r) ? "<table>" !== u[1] || Rt.test(r) ? 0 : s : s.firstChild,
                            i = r && r.childNodes.length; i--; )
                                it.nodeName(c = r.childNodes[i], "tbody") && !c.childNodes.length && r.removeChild(c);
                        for (it.merge(p, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        p.push(t.createTextNode(r));
            for (s && f.removeChild(s),
            nt.appendChecked || it.grep(g(p, "input"), v),
            h = 0; r = p[h++]; )
                if ((!o || -1 === it.inArray(r, o)) && (a = it.contains(r.ownerDocument, r),
                s = g(f.appendChild(r), "script"),
                a && w(s),
                n))
                    for (i = 0; r = s[i++]; )
                        Ut.test(r.type || "") && n.push(r);
            return s = null ,
            f
        },
        cleanData: function(e, t) {
            for (var n, o, i, r, a = 0, s = it.expando, l = it.cache, c = nt.deleteExpando, u = it.event.special; null  != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s],
                r = i && l[i])) {
                    if (r.events)
                        for (o in r.events)
                            u[o] ? it.event.remove(n, o) : it.removeEvent(n, o, r.handle);
                    l[i] && (delete l[i],
                    c ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null ,
                    V.push(i))
                }
        }
    }),
    it.fn.extend({
        text: function(e) {
            return _t(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }
            , null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            )
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            )
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            )
        },
        remove: function(e, t) {
            for (var n, o = e ? it.filter(e, this) : this, i = 0; null  != (n = o[i]); i++)
                t || 1 !== n.nodeType || it.cleanData(g(n)),
                n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null  != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null  == e ? !1 : e,
            t = null  == t ? e : t,
            this.map(function() {
                return it.clone(this, e, t)
            }
            )
        },
        html: function(e) {
            return _t(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , o = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(It, "") : void 0;
                if (!("string" != typeof e || $t.test(e) || !nt.htmlSerialize && Pt.test(e) || !nt.leadingWhitespace && Bt.test(e) || Qt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(zt, "<$1></$2>");
                    try {
                        for (; o > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (it.cleanData(g(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }
            , null , e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                it.cleanData(g(this)),
                e && e.replaceChild(t, this)
            }
            ),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Z.apply([], e);
            var n, o, i, r, a, s, l = 0, c = this.length, u = this, d = c - 1, f = e[0], p = it.isFunction(f);
            if (p || c > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f))
                return this.each(function(n) {
                    var o = u.eq(n);
                    p && (e[0] = f.call(this, n, o.html())),
                    o.domManip(e, t)
                }
                );
            if (c && (s = it.buildFragment(e, this[0].ownerDocument, !1, this),
            n = s.firstChild,
            1 === s.childNodes.length && (s = n),
            n)) {
                for (r = it.map(g(s, "script"), b),
                i = r.length; c > l; l++)
                    o = s,
                    l !== d && (o = it.clone(o, !0, !0),
                    i && it.merge(r, g(o, "script"))),
                    t.call(this[l], o, l);
                if (i)
                    for (a = r[r.length - 1].ownerDocument,
                    it.map(r, x),
                    l = 0; i > l; l++)
                        o = r[l],
                        Ut.test(o.type || "") && !it._data(o, "globalEval") && it.contains(a, o) && (o.src ? it._evalUrl && it._evalUrl(o.src) : it.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Vt, "")));
                s = n = null 
            }
            return this
        }
    }),
    it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, o = 0, i = [], r = it(e), a = r.length - 1; a >= o; o++)
                n = o === a ? this : this.clone(!0),
                it(r[o])[t](n),
                G.apply(i, n.get());
            return this.pushStack(i)
        }
    }
    );
    var Jt, Kt = {};
    !function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null  != e)
                return e;
            e = !1;
            var t, n, o;
            return n = ht.getElementsByTagName("body")[0],
            n && n.style ? (t = ht.createElement("div"),
            o = ht.createElement("div"),
            o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(o).appendChild(t),
            typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(ht.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(o),
            e) : void 0
        }
    }
    ();
    var en, tn, nn = /^margin/, on = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$","i"), rn = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null )
    }
    ,
    tn = function(e, t, n) {
        var o, i, r, a, s = e.style;
        return n = n || en(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)),
        on.test(a) && nn.test(t) && (o = s.width,
        i = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = o,
        s.minWidth = i,
        s.maxWidth = r)),
        void 0 === a ? a : a + ""
    }
    ) : ht.documentElement.currentStyle && (en = function(e) {
        return e.currentStyle
    }
    ,
    tn = function(e, t, n) {
        var o, i, r, a, s = e.style;
        return n = n || en(e),
        a = n ? n[t] : void 0,
        null  == a && s && s[t] && (a = s[t]),
        on.test(a) && !rn.test(t) && (o = s.left,
        i = e.runtimeStyle,
        r = i && i.left,
        r && (i.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = o,
        r && (i.left = r)),
        void 0 === a ? a : a + "" || "auto"
    }
    ),
    function() {
        function t() {
            var t, n, o, i;
            n = ht.getElementsByTagName("body")[0],
            n && n.style && (t = ht.createElement("div"),
            o = ht.createElement("div"),
            o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(o).appendChild(t),
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            r = a = !1,
            l = !0,
            e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null ) || {}).top,
            a = "4px" === (e.getComputedStyle(t, null ) || {
                width: "4px"
            }).width,
            i = t.appendChild(ht.createElement("div")),
            i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            i.style.marginRight = i.style.width = "0",
            t.style.width = "1px",
            l = !parseFloat((e.getComputedStyle(i, null ) || {}).marginRight)),
            t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            i = t.getElementsByTagName("td"),
            i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            s = 0 === i[0].offsetHeight,
            s && (i[0].style.display = "",
            i[1].style.display = "none",
            s = 0 === i[0].offsetHeight),
            n.removeChild(o))
        }
        var n, o, i, r, a, s, l;
        n = ht.createElement("div"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        i = n.getElementsByTagName("a")[0],
        o = i && i.style,
        o && (o.cssText = "float:left;opacity:.5",
        nt.opacity = "0.5" === o.opacity,
        nt.cssFloat = !!o.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        nt.clearCloneStyle = "content-box" === n.style.backgroundClip,
        nt.boxSizing = "" === o.boxSizing || "" === o.MozBoxSizing || "" === o.WebkitBoxSizing,
        it.extend(nt, {
            reliableHiddenOffsets: function() {
                return null  == s && t(),
                s
            },
            boxSizingReliable: function() {
                return null  == a && t(),
                a
            },
            pixelPosition: function() {
                return null  == r && t(),
                r
            },
            reliableMarginRight: function() {
                return null  == l && t(),
                l
            }
        }))
    }
    (),
    it.swap = function(e, t, n, o) {
        var i, r, a = {};
        for (r in t)
            a[r] = e.style[r],
            e.style[r] = t[r];
        i = n.apply(e, o || []);
        for (r in t)
            e.style[r] = a[r];
        return i
    }
    ;
    var an = /alpha\([^)]*\)/i
      , sn = /opacity\s*=\s*([^)]*)/
      , ln = /^(none|table(?!-c[ea]).+)/
      , cn = new RegExp("^(" + Nt + ")(.*)$","i")
      , un = new RegExp("^([+-])=(" + Nt + ")","i")
      , dn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , fn = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, a, s = it.camelCase(t), l = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = S(l, s)),
                a = it.cssHooks[t] || it.cssHooks[s],
                void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : l[t];
                if (r = typeof n,
                "string" === r && (i = un.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)),
                r = "number"),
                null  != n && n === n && ("number" !== r || it.cssNumber[s] || (n += "px"),
                nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(a && "set" in a && void 0 === (n = a.set(e, n, o)))))
                    try {
                        l[t] = n
                    } catch (c) {}
            }
        },
        css: function(e, t, n, o) {
            var i, r, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = S(e.style, s)),
            a = it.cssHooks[t] || it.cssHooks[s],
            a && "get" in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = tn(e, t, o)),
            "normal" === r && t in fn && (r = fn[t]),
            "" === n || n ? (i = parseFloat(r),
            n === !0 || it.isNumeric(i) ? i || 0 : r) : r
        }
    }),
    it.each(["height", "width"], function(e, t) {
        it.cssHooks[t] = {
            get: function(e, n, o) {
                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function() {
                    return L(e, t, o)
                }
                ) : L(e, t, o) : void 0
            },
            set: function(e, n, o) {
                var i = o && en(e);
                return _(e, n, o ? O(e, t, o, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }
    ),
    nt.opacity || (it.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , o = e.currentStyle
              , i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , r = o && o.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === it.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || o && !o.filter) || (n.filter = an.test(r) ? r.replace(an, i) : r + " " + i)
        }
    }),
    it.cssHooks.marginRight = N(nt.reliableMarginRight, function(e, t) {
        return t ? it.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }
    ),
    it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        it.cssHooks[e + t] = {
            expand: function(n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++)
                    i[e + St[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        },
        nn.test(e) || (it.cssHooks[e + t].set = _)
    }
    ),
    it.fn.extend({
        css: function(e, t) {
            return _t(this, function(e, t, n) {
                var o, i, r = {}, a = 0;
                if (it.isArray(t)) {
                    for (o = en(e),
                    i = t.length; i > a; a++)
                        r[t[a]] = it.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }
            , e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                At(this) ? it(this).show() : it(this).hide()
            }
            )
        }
    }),
    it.Tween = j,
    j.prototype = {
        constructor: j,
        init: function(e, t, n, o, i, r) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = o,
            this.unit = r || (it.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : j.propHooks._default.set(this),
            this
        }
    },
    j.prototype.init.prototype = j.prototype,
    j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null  == e.elem[e.prop] || e.elem.style && null  != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null  != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    it.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    it.fx = j.prototype.init,
    it.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$","i"), yn = /queueHooks$/, bn = [F], xn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , o = n.cur()
              , i = vn.exec(t)
              , r = i && i[3] || (it.cssNumber[e] ? "" : "px")
              , a = (it.cssNumber[e] || "px" !== r && +o) && vn.exec(it.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== r) {
                r = r || a[3],
                i = i || [],
                a = +o || 1;
                do
                    s = s || ".5",
                    a /= s,
                    it.style(n.elem, e, a + r);
                while (s !== (s = n.cur() / o) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +o || 0,
            n.unit = r,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    it.Animation = it.extend(P, {
        tweener: function(e, t) {
            it.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, o = 0, i = e.length; i > o; o++)
                n = e[o],
                xn[n] = xn[n] || [],
                xn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? bn.unshift(e) : bn.push(e)
        }
    }),
    it.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? it.extend({}, e) : {
            complete: n || !n && t || it.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !it.isFunction(t) && t
        };
        return o.duration = it.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in it.fx.speeds ? it.fx.speeds[o.duration] : it.fx.speeds._default,
        (null  == o.queue || o.queue === !0) && (o.queue = "fx"),
        o.old = o.complete,
        o.complete = function() {
            it.isFunction(o.old) && o.old.call(this),
            o.queue && it.dequeue(this, o.queue)
        }
        ,
        o
    }
    ,
    it.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(e, t, n, o) {
            var i = it.isEmptyObject(e)
              , r = it.speed(t, n, o)
              , a = function() {
                var t = P(this, it.extend({}, e), r);
                (i || it._data(this, "finish")) && t.stop(!0)
            }
            ;
            return a.finish = a,
            i || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            }
            ;
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null  != e && e + "queueHooks"
                  , r = it.timers
                  , a = it._data(this);
                if (i)
                    a[i] && a[i].stop && o(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && yn.test(i) && o(a[i]);
                for (i = r.length; i--; )
                    r[i].elem !== this || null  != e && r[i].queue !== e || (r[i].anim.stop(n),
                    t = !1,
                    r.splice(i, 1));
                (t || !n) && it.dequeue(this, e)
            }
            )
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = it._data(this), o = n[e + "queue"], i = n[e + "queueHooks"], r = it.timers, a = o ? o.length : 0;
                for (n.finish = !0,
                it.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; a > t; t++)
                    o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish
            }
            )
        }
    }),
    it.each(["toggle", "show", "hide"], function(e, t) {
        var n = it.fn[t];
        it.fn[t] = function(e, o, i) {
            return null  == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, o, i)
        }
    }
    ),
    it.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        it.fn[e] = function(e, n, o) {
            return this.animate(t, e, n, o)
        }
    }
    ),
    it.timers = [],
    it.fx.tick = function() {
        var e, t = it.timers, n = 0;
        for (hn = it.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || it.fx.stop(),
        hn = void 0
    }
    ,
    it.fx.timer = function(e) {
        it.timers.push(e),
        e() ? it.fx.start() : it.timers.pop()
    }
    ,
    it.fx.interval = 13,
    it.fx.start = function() {
        mn || (mn = setInterval(it.fx.tick, it.fx.interval))
    }
    ,
    it.fx.stop = function() {
        clearInterval(mn),
        mn = null 
    }
    ,
    it.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    it.fn.delay = function(e, t) {
        return e = it.fx ? it.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var o = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(o)
            }
        }
        )
    }
    ,
    function() {
        var e, t, n, o, i;
        t = ht.createElement("div"),
        t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        o = t.getElementsByTagName("a")[0],
        n = ht.createElement("select"),
        i = n.appendChild(ht.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        o.style.cssText = "top:1px",
        nt.getSetAttribute = "t" !== t.className,
        nt.style = /top/.test(o.getAttribute("style")),
        nt.hrefNormalized = "/a" === o.getAttribute("href"),
        nt.checkOn = !!e.value,
        nt.optSelected = i.selected,
        nt.enctype = !!ht.createElement("form").enctype,
        n.disabled = !0,
        nt.optDisabled = !i.disabled,
        e = ht.createElement("input"),
        e.setAttribute("value", ""),
        nt.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        nt.radioValue = "t" === e.value
    }
    ();
    var wn = /\r/g;
    it.fn.extend({
        val: function(e) {
            var t, n, o, i = this[0];
            {
                if (arguments.length)
                    return o = it.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = o ? e.call(this, n, it(this).val()) : e,
                        null  == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                            return null  == e ? "" : e + ""
                        }
                        )),
                        t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()],
                        t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    }
                    );
                if (i)
                    return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()],
                    t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(wn, "") : null  == n ? "" : n)
            }
        }
    }),
    it.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null  != t ? t : it.trim(it.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, a = r ? null  : [], s = r ? i + 1 : o.length, l = 0 > i ? s : r ? i : 0; s > l; l++)
                        if (n = o[l],
                        !(!n.selected && l !== i || (nt.optDisabled ? n.disabled : null  !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(),
                            r)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = it.makeArray(t), a = i.length; a--; )
                        if (o = i[a],
                        it.inArray(it.valHooks.option.get(o), r) >= 0)
                            try {
                                o.selected = n = !0
                            } catch (s) {
                                o.scrollHeight
                            }
                        else
                            o.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {
            set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        },
        nt.checkOn || (it.valHooks[this].get = function(e) {
            return null  === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    );
    var Cn, Tn, kn = it.expr.attrHandle, En = /^(?:checked|selected)$/i, Nn = nt.getSetAttribute, Sn = nt.input;
    it.fn.extend({
        attr: function(e, t) {
            return _t(this, it.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e)
            }
            )
        }
    }),
    it.extend({
        attr: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r)
                return typeof e.getAttribute === Tt ? it.prop(e, t, n) : (1 === r && it.isXMLDoc(e) || (t = t.toLowerCase(),
                o = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Tn : Cn)),
                void 0 === n ? o && "get" in o && null  !== (i = o.get(e, t)) ? i : (i = it.find.attr(e, t),
                null  == i ? void 0 : i) : null  !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : void it.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, o, i = 0, r = t && t.match(bt);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    o = it.propFix[n] || n,
                    it.expr.match.bool.test(n) ? Sn && Nn || !En.test(n) ? e[o] = !1 : e[it.camelCase("default-" + n)] = e[o] = !1 : it.attr(e, n, ""),
                    e.removeAttribute(Nn ? n : o)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    Tn = {
        set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Sn && Nn || !En.test(n) ? e.setAttribute(!Nn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = kn[t] || it.find.attr;
        kn[t] = Sn && Nn || !En.test(t) ? function(e, t, o) {
            var i, r;
            return o || (r = kn[t],
            kn[t] = i,
            i = null  != n(e, t, o) ? t.toLowerCase() : null ,
            kn[t] = r),
            i
        }
         : function(e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null 
        }
    }
    ),
    Sn && Nn || (it.attrHooks.value = {
        set: function(e, t, n) {
            return it.nodeName(e, "input") ? void (e.defaultValue = t) : Cn && Cn.set(e, t, n)
        }
    }),
    Nn || (Cn = {
        set: function(e, t, n) {
            var o = e.getAttributeNode(n);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)),
            o.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    kn.id = kn.name = kn.coords = function(e, t, n) {
        var o;
        return n ? void 0 : (o = e.getAttributeNode(t)) && "" !== o.value ? o.value : null 
    }
    ,
    it.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Cn.set
    },
    it.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Cn.set(e, "" === t ? !1 : t, n)
        }
    },
    it.each(["width", "height"], function(e, t) {
        it.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    }
    )),
    nt.style || (it.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i
      , _n = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function(e, t) {
            return _t(this, it.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = it.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            }
            )
        }
    }),
    it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var o, i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)
                return r = 1 !== a || !it.isXMLDoc(e),
                r && (t = it.propFix[t] || t,
                i = it.propHooks[t]),
                void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null  !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || _n.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
        it.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }
    ),
    nt.optSelected || (it.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null 
        }
    }),
    it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    }
    ),
    nt.enctype || (it.propFix.enctype = "encoding");
    var On = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function(e) {
            var t, n, o, i, r, a, s = 0, l = this.length, c = "string" == typeof e && e;
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).addClass(e.call(this, t, this.className))
                }
                );
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s],
                    o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(On, " ") : " ")) {
                        for (r = 0; i = t[r++]; )
                            o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                        a = it.trim(o),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, o, i, r, a, s = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).removeClass(e.call(this, t, this.className))
                }
                );
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s],
                    o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(On, " ") : "")) {
                        for (r = 0; i = t[r++]; )
                            for (; o.indexOf(" " + i + " ") >= 0; )
                                o = o.replace(" " + i + " ", " ");
                        a = e ? it.trim(o) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            }
             : function() {
                if ("string" === n)
                    for (var t, o = 0, i = it(this), r = e.match(bt) || []; t = r[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (n === Tt || "boolean" === n) && (this.className && it._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(On, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
    it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }
    ),
    it.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln = it.now()
      , jn = /\?/
      , Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, o = null , i = it.trim(t + "");
        return i && !it.trim(i.replace(Dn, function(e, t, i, r) {
            return n && t && (o = 0),
            0 === o ? e : (n = i || t,
            o += !r - !i,
            "")
        }
        )) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }
    ,
    it.parseXML = function(t) {
        var n, o;
        if (!t || "string" != typeof t)
            return null ;
        try {
            e.DOMParser ? (o = new DOMParser,
            n = o.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t),
        n
    }
    ;
    var Mn, Hn, Fn = /#.*$/, In = /([?&])_=[^&]*/, Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, zn = /^(?:GET|HEAD)$/, qn = /^\/\//, Rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Wn = {}, $n = {}, Xn = "*/".concat("*");
    try {
        Hn = location.href
    } catch (Un) {
        Hn = ht.createElement("a"),
        Hn.href = "",
        Hn = Hn.href
    }
    Mn = Rn.exec(Hn.toLowerCase()) || [],
    it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: Bn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? q(q(e, it.ajaxSettings), t) : q(it.ajaxSettings, e)
        },
        ajaxPrefilter: B(Wn),
        ajaxTransport: B($n),
        ajax: function(e, t) {
            function n(e, t, n, o) {
                var i, u, v, y, x, C = t;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                c = void 0,
                a = o || "",
                w.readyState = e > 0 ? 4 : 0,
                i = e >= 200 && 300 > e || 304 === e,
                n && (y = R(d, w, n)),
                y = W(d, y, w, i),
                i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (it.lastModified[r] = x),
                x = w.getResponseHeader("etag"),
                x && (it.etag[r] = x)),
                204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state,
                u = y.data,
                v = y.error,
                i = !v)) : (v = C,
                (e || !C) && (C = "error",
                0 > e && (e = 0))),
                w.status = e,
                w.statusText = (t || C) + "",
                i ? h.resolveWith(f, [u, C, w]) : h.rejectWith(f, [w, C, v]),
                w.statusCode(g),
                g = void 0,
                l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? u : v]),
                m.fireWith(f, [w, C]),
                l && (p.trigger("ajaxComplete", [w, d]),
                --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var o, i, r, a, s, l, c, u, d = it.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? it(f) : it.event, h = it.Deferred(), m = it.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!u)
                            for (u = {}; t = Pn.exec(a); )
                                u[t[1].toLowerCase()] = t[2];
                        t = u[e.toLowerCase()]
                    }
                    return null  == t ? null  : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null 
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return c && c.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            d.url = ((e || d.url || Hn) + "").replace(Fn, "").replace(qn, Mn[1] + "//"),
            d.type = t.method || t.type || d.method || d.type,
            d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""],
            null  == d.crossDomain && (o = Rn.exec(d.url.toLowerCase()),
            d.crossDomain = !(!o || o[1] === Mn[1] && o[2] === Mn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)),
            z(Wn, d, t, w),
            2 === b)
                return w;
            l = d.global,
            l && 0 === it.active++ && it.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !zn.test(d.type),
            r = d.url,
            d.hasContent || (d.data && (r = d.url += (jn.test(r) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = In.test(r) ? r.replace(In, "$1_=" + Ln++) : r + (jn.test(r) ? "&" : "?") + "_=" + Ln++)),
            d.ifModified && (it.lastModified[r] && w.setRequestHeader("If-Modified-Since", it.lastModified[r]),
            it.etag[r] && w.setRequestHeader("If-None-Match", it.etag[r])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers)
                w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b))
                return w.abort();
            x = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[i](d[i]);
            if (c = z($n, d, t, w)) {
                w.readyState = 1,
                l && p.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }
                , d.timeout));
                try {
                    b = 1,
                    c.send(v, n)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    n(-1, C)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return it.get(e, void 0, t, "script")
        }
    }),
    it.each(["get", "post"], function(e, t) {
        it[t] = function(e, n, o, i) {
            return it.isFunction(n) && (i = i || o,
            o = n,
            n = void 0),
            it.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            })
        }
    }
    ),
    it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    ),
    it._evalUrl = function(e) {
        return it.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    it.fn.extend({
        wrapAll: function(e) {
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).wrapAll(e.call(this, t))
                }
                );
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(it.isFunction(e) ? function(t) {
                it(this).wrapInner(e.call(this, t))
            }
             : function() {
                var t = it(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }
            ).end()
        }
    }),
    it.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }
    ,
    it.expr.filters.visible = function(e) {
        return !it.expr.filters.hidden(e)
    }
    ;
    var Yn = /%20/g
      , Vn = /\[\]$/
      , Qn = /\r?\n/g
      , Zn = /^(?:submit|button|image|reset|file)$/i
      , Gn = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, o = [], i = function(e, t) {
            t = it.isFunction(t) ? t() : null  == t ? "" : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional),
        it.isArray(e) || e.jquery && !it.isPlainObject(e))
            it.each(e, function() {
                i(this.name, this.value)
            }
            );
        else
            for (n in e)
                $(n, e[n], t, i);
        return o.join("&").replace(Yn, "+")
    }
    ,
    it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }
            ).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Gn.test(this.nodeName) && !Zn.test(e) && (this.checked || !Ot.test(e))
            }
            ).map(function(e, t) {
                var n = it(this).val();
                return null  == n ? null  : it.isArray(n) ? it.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Qn, "\r\n")
                    }
                }
                ) : {
                    name: t.name,
                    value: n.replace(Qn, "\r\n")
                }
            }
            ).get()
        }
    }),
    it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    }
     : X;
    var Jn = 0
      , Kn = {}
      , eo = it.ajaxSettings.xhr();
    e.ActiveXObject && it(e).on("unload", function() {
        for (var e in Kn)
            Kn[e](void 0, !0)
    }
    ),
    nt.cors = !!eo && "withCredentials" in eo,
    eo = nt.ajax = !!eo,
    eo && it.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, o) {
                    var i, r = e.xhr(), a = ++Jn;
                    if (r.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (i in e.xhrFields)
                            r[i] = e.xhrFields[i];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        void 0 !== n[i] && r.setRequestHeader(i, n[i] + "");
                    r.send(e.hasContent && e.data || null ),
                    t = function(n, i) {
                        var s, l, c;
                        if (t && (i || 4 === r.readyState))
                            if (delete Kn[a],
                            t = void 0,
                            r.onreadystatechange = it.noop,
                            i)
                                4 !== r.readyState && r.abort();
                            else {
                                c = {},
                                s = r.status,
                                "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && o(s, l, c, r.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Kn[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }
    ),
    it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return it.globalEval(e),
                e
            }
        }
    }),
    it.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }
    ),
    it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return {
                send: function(o, i) {
                    t = ht.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null ,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null ,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }
    );
    var to = []
      , no = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = to.pop() || it.expando + "_" + Ln++;
            return this[e] = !0,
            e
        }
    }),
    it.ajaxPrefilter("json jsonp", function(t, n, o) {
        var i, r, a, s = t.jsonp !== !1 && (no.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && no.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(no, "$1" + i) : t.jsonp !== !1 && (t.url += (jn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return a || it.error(i + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        r = e[i],
        e[i] = function() {
            a = arguments
        }
        ,
        o.always(function() {
            e[i] = r,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            to.push(i)),
            a && it.isFunction(r) && r(a[0]),
            a = r = void 0
        }
        ),
        "script") : void 0
    }
    ),
    it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null ;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || ht;
        var o = dt.exec(e)
          , i = !n && [];
        return o ? [t.createElement(o[1])] : (o = it.buildFragment([e], t, i),
        i && i.length && it(i).remove(),
        it.merge([], o.childNodes))
    }
    ;
    var oo = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && oo)
            return oo.apply(this, arguments);
        var o, i, r, a = this, s = e.indexOf(" ");
        return s >= 0 && (o = it.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        it.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        a.length > 0 && it.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(o ? it("<div>").append(it.parseHTML(e)).find(o) : e)
        }
        ).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem
        }
        ).length
    }
    ;
    var io = e.document.documentElement;
    it.offset = {
        setOffset: function(e, t, n) {
            var o, i, r, a, s, l, c, u = it.css(e, "position"), d = it(e), f = {};
            "static" === u && (e.style.position = "relative"),
            s = d.offset(),
            r = it.css(e, "top"),
            l = it.css(e, "left"),
            c = ("absolute" === u || "fixed" === u) && it.inArray("auto", [r, l]) > -1,
            c ? (o = d.position(),
            a = o.top,
            i = o.left) : (a = parseFloat(r) || 0,
            i = parseFloat(l) || 0),
            it.isFunction(t) && (t = t.call(e, n, s)),
            null  != t.top && (f.top = t.top - s.top + a),
            null  != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : d.css(f)
        }
    },
    it.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    it.offset.setOffset(this, e, t)
                }
                );
            var t, n, o = {
                top: 0,
                left: 0
            }, i = this[0], r = i && i.ownerDocument;
            if (r)
                return t = r.documentElement,
                it.contains(t, i) ? (typeof i.getBoundingClientRect !== Tt && (o = i.getBoundingClientRect()),
                n = Y(r),
                {
                    top: o.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: o.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, o = this[0];
                return "fixed" === it.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                it.nodeName(e[0], "html") || (n = e.offset()),
                n.top += it.css(e[0], "borderTopWidth", !0),
                n.left += it.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - it.css(o, "marginTop", !0),
                    left: t.left - n.left - it.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || io; e && !it.nodeName(e, "html") && "static" === it.css(e, "position"); )
                    e = e.offsetParent;
                return e || io
            }
            )
        }
    }),
    it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function(o) {
            return _t(this, function(e, o, i) {
                var r = Y(e);
                return void 0 === i ? r ? t in r ? r[t] : r.document.documentElement[o] : e[o] : void (r ? r.scrollTo(n ? it(r).scrollLeft() : i, n ? i : it(r).scrollTop()) : e[o] = i)
            }
            , e, o, arguments.length, null )
        }
    }
    ),
    it.each(["top", "left"], function(e, t) {
        it.cssHooks[t] = N(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t),
            on.test(n) ? it(e).position()[t] + "px" : n) : void 0
        }
        )
    }
    ),
    it.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        it.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, o) {
            it.fn[o] = function(o, i) {
                var r = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (o === !0 || i === !0 ? "margin" : "border");
                return _t(this, function(t, n, o) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? it.css(t, n, a) : it.style(t, n, o, a)
                }
                , t, r ? o : void 0, r, null )
            }
        }
        )
    }
    ),
    it.fn.size = function() {
        return this.length
    }
    ,
    it.fn.andSelf = it.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    }
    );
    var ro = e.jQuery
      , ao = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = ao),
        t && e.jQuery === it && (e.jQuery = ro),
        it
    }
    ,
    typeof t === Tt && (e.jQuery = e.$ = it),
    it
}
),
function(e, t) {
    "use strict";
    var n = "#masthead"
      , o = "is-hidden"
      , i = 500
      , r = e.querySelector(n);
    if (!r)
        return !0;
    var a = 0
      , s = 0
      , l = 0
      , c = 0
      , u = 0
      , d = function(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
    }
      , f = function(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    }
      , p = function(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
    }
      , h = function(e, t) {
        var n, o;
        return function() {
            var i = this
              , r = arguments
              , a = +new Date;
            n && n + e > a ? (clearTimeout(o),
            o = setTimeout(function() {
                n = a,
                t.apply(i, r)
            }
            , e)) : (n = a,
            t.apply(i, r))
        }
    }
    ;
    t.addEventListener("scroll", h(i, function() {
        a = e.body.offsetHeight,
        s = t.innerHeight,
        l = t.pageYOffset,
        u = c - l,
        0 >= l ? p(r, o) : u > 0 && d(r, o) ? p(r, o) : 0 > u && (l + s >= a && d(r, o) ? p(r, o) : f(r, o)),
        c = l
    }
    ))
}
(document, window, 0),
function() {
    !function(e) {
        return e.bigfoot = function(t) {
            var n, o, i, r, a, s, l, c, u, d, f, p, h, m, g, v, y, b, x, w, C, T, k, E, N, S, A;
            return i = void 0,
            u = {
                actionOriginalFN: "hide",
                activateCallback: function() {},
                activateOnHover: !1,
                allowMultipleFN: !1,
                anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
                anchorParentTagname: "sup",
                breakpoints: {},
                deleteOnUnhover: !1,
                footnoteParentClass: "footnote",
                footnoteTagname: "li",
                hoverDelay: 250,
                numberResetSelector: void 0,
                popoverDeleteDelay: 300,
                popoverCreateDelay: 100,
                positionContent: !0,
                preventPageScroll: !0,
                scope: !1,
                useFootnoteOnlyOnce: !0,
                contentMarkup: '<aside class="bigfoot-footnote is-positioned-bottom" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="Footnote {{FOOTNOTENUM}}"> <div class="bigfoot-footnote__wrapper"> <div class="bigfoot-footnote__content"> {{FOOTNOTECONTENT}} </div></div> <div class="bigfoot-footnote__tooltip"></div> </aside>',
                buttonMarkup: '<div class=\'bigfoot-footnote__container\'> <button class="bigfoot-footnote__button" id="{{SUP:data-footnote-backlink-ref}}" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="See Footnote {{FOOTNOTENUM}}" rel="footnote" data-bigfoot-footnote="{{FOOTNOTECONTENT}}"> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> </button></div>'
            },
            k = e.extend(u, t),
            g = {},
            p = function() {
                var t, n, o, i, r, a, l, c, u, f, p, h, m, g, v, b, x, C, T, E;
                for (p = k.scope ? "" + k.scope + ' a[href*="#"]' : 'a[href*="#"]',
                o = e(p).filter(function() {
                    var t, n;
                    return t = e(this),
                    n = t.attr("rel"),
                    ("null" === n || null  == n) && (n = ""),
                    ("" + t.attr("href") + n).match(k.anchorPattern) && t.closest("[class*=" + k.footnoteParentClass + "]:not(a):not(" + k.anchorParentTagname + ")").length < 1
                }
                ),
                b = [],
                g = [],
                u = [],
                s(o, g),
                e(g).each(function() {
                    var t, n;
                    return n = e(this).data("footnote-ref").replace(/[:.+~*\]\[]/g, "\\$&"),
                    k.useFootnoteOnlyOnce && (n = "" + n + ":not(.footnote-processed)"),
                    t = e(n).closest(k.footnoteTagname),
                    t.length > 0 ? (b.push(t.first().addClass("footnote-processed")),
                    u.push(this)) : void 0
                }
                ),
                n = e("[data-footnote-identifier]:last"),
                m = n.length < 1 ? 0 : +n.data("footnote-identifier"),
                E = [],
                x = C = 0,
                T = b.length; T >= 0 ? T > C : C > T; x = T >= 0 ? ++C : --C)
                    switch (h = y(e(b[x]).html().trim(), e(u[x]).data("footnote-backlink-ref")),
                    h = h.replace(/"/g, "&quot;").replace(/&lt;/g, "&ltsym;").replace(/&gt;/g, "&gtsym;"),
                    m += 1,
                    f = "",
                    l = e(u[x]),
                    c = e(b[x]),
                    null  != k.numberResetSelector ? (t = l.closest(k.numberResetSelector),
                    t.is(r) ? v += 1 : v = 1,
                    r = t) : v = m,
                    0 !== h.indexOf("<") && (h = "<p>" + h + "</p>"),
                    f = k.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g, v).replace(/\{\{FOOTNOTEID\}\}/g, m).replace(/\{\{FOOTNOTECONTENT\}\}/g, h),
                    f = w(f, "SUP", l),
                    f = w(f, "FN", c),
                    i = e(f).insertBefore(l),
                    a = c.parent(),
                    k.actionOriginalFN.toLowerCase()) {
                    case "hide":
                        l.addClass("footnote-print-only"),
                        c.addClass("footnote-print-only"),
                        E.push(d(a));
                        break;
                    case "delete":
                        l.remove(),
                        c.remove(),
                        E.push(d(a));
                        break;
                    default:
                        E.push(l.addClass("footnote-print-only"))
                    }
                return E
            }
            ,
            s = function(t, n) {
                var o, i, r, a;
                null  == n && (n = []),
                o = void 0,
                i = void 0,
                r = void 0,
                a = void 0,
                t.each(function() {
                    var t, i;
                    return i = e(this),
                    r = "#" + i.attr("href").split("#")[1],
                    o = i.closest(k.anchorParentTagname),
                    t = i.find(k.anchorParentTagname),
                    o.length > 0 ? (a = (o.attr("id") || "") + (i.attr("id") || ""),
                    n.push(o.attr({
                        "data-footnote-backlink-ref": a,
                        "data-footnote-ref": r
                    }))) : t.length > 0 ? (a = (t.attr("id") || "") + (i.attr("id") || ""),
                    n.push(i.attr({
                        "data-footnote-backlink-ref": a,
                        "data-footnote-ref": r
                    }))) : (a = i.attr("id") || "",
                    n.push(i.attr({
                        "data-footnote-backlink-ref": a,
                        "data-footnote-ref": r
                    })))
                }
                )
            }
            ,
            d = function(e) {
                var t;
                return t = void 0,
                e.is(":empty") || 0 === e.children(":not(.footnote-print-only)").length ? (t = e.parent(),
                "delete" === k.actionOriginalFN.toLowerCase() ? e.remove() : e.addClass("footnote-print-only"),
                d(t)) : e.children(":not(.footnote-print-only)").length === e.children("hr:not(.footnote-print-only)").length ? (t = e.parent(),
                "delete" === k.actionOriginalFN.toLowerCase() ? e.remove() : (e.children("hr").addClass("footnote-print-only"),
                e.addClass("footnote-print-only")),
                d(t)) : void 0
            }
            ,
            y = function(e, t) {
                var n;
                return t.indexOf(" ") >= 0 && (t = t.trim().replace(/\s+/g, "|").replace(/(.*)/g, "($1)")),
                n = new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#" + t + "[^>]*>(.*?)<\\s*/\\s*a>","g"),
                e.replace(n, "").replace("[]", "")
            }
            ,
            w = function(e, t, n) {
                var o, i, r, a;
                for (i = new RegExp("\\{\\{" + t + ":([^\\}]*)\\}\\}","g"),
                o = void 0,
                a = void 0,
                r = void 0,
                o = i.exec(e); o; )
                    o[1] && (a = n.attr(o[1]) || "",
                    e = e.replace("{{" + t + ":" + o[1] + "}}", a)),
                    o = i.exec(e);
                return e
            }
            ,
            r = function(t) {
                var n, o, i;
                if (k.activateOnHover) {
                    if (n = e(t.target).closest(".bigfoot-footnote__button"),
                    o = '[data-footnote-identifier="' + n.attr("data-footnote-identifier") + '"]',
                    n.hasClass("is-active"))
                        return;
                    n.addClass("is-hover-instantiated"),
                    k.allowMultipleFN || (i = ".bigfoot-footnote:not(" + o + ")",
                    x(i)),
                    c(".bigfoot-footnote__button" + o).addClass("is-hover-instantiated")
                }
            }
            ,
            E = function(t) {
                var n, o, i;
                i = e(t.target),
                n = i.closest(".bigfoot-footnote__button"),
                o = i.closest(".bigfoot-footnote"),
                n.length > 0 ? (t.preventDefault(),
                l(n)) : o.length < 1 && e(".bigfoot-footnote").length > 0 && x()
            }
            ,
            l = function(e) {
                var t;
                e.blur(),
                t = 'data-footnote-identifier="' + e.attr("data-footnote-identifier") + '"',
                e.hasClass("changing") || (e.hasClass("is-active") ? k.allowMultipleFN ? x(".bigfoot-footnote[" + t + "]") : x() : (e.addClass("changing"),
                setTimeout(function() {
                    return e.removeClass("changing")
                }
                , k.popoverCreateDelay),
                c(".bigfoot-footnote__button[" + t + "]"),
                e.addClass("is-click-instantiated"),
                k.allowMultipleFN || x(".bigfoot-footnote:not([" + t + "])")))
            }
            ,
            c = function(t) {
                var n, o;
                return n = void 0,
                n = "string" != typeof t && k.allowMultipleFN ? t : "string" != typeof t ? t.first() : k.allowMultipleFN ? e(t).closest(".bigfoot-footnote__button") : e(t + ":first").closest(".bigfoot-footnote__button"),
                o = e(),
                n.each(function() {
                    var t, i, r, s;
                    r = e(this),
                    s = void 0;
                    try {
                        return s = k.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g, r.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g, r.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g, r.attr("data-bigfoot-footnote")).replace(/\&gtsym\;/g, "&gt;").replace(/\&ltsym\;/g, "&lt;"),
                        s = w(s, "BUTTON", r)
                    } finally {
                        t = e(s);
                        try {
                            k.activateCallback(t, r)
                        } catch (l) {}
                        t.insertAfter(n),
                        g[r.attr("data-footnote-identifier")] = "init",
                        t.attr("bigfoot-max-width", a(t.css("max-width"), t)),
                        t.css("max-width", 1e4),
                        i = t.find(".bigfoot-footnote__content"),
                        t.attr("data-bigfoot-max-height", a(i.css("max-height"), i)),
                        C(),
                        r.addClass("is-active"),
                        t.find(".bigfoot-footnote__content").bindScrollHandler(),
                        o = o.add(t)
                    }
                }
                ),
                setTimeout(function() {
                    return o.addClass("is-active")
                }
                , k.popoverCreateDelay),
                o
            }
            ,
            o = function() {
                var e, t;
                return e = document.createElement("div"),
                e.style.cssText = "display:inline-block;padding:0;line-height:1;position:absolute;visibility:hidden;font-size:1em;",
                e.appendChild(document.createElement("M")),
                document.body.appendChild(e),
                t = e.offsetHeight,
                document.body.removeChild(e),
                t
            }
            ,
            a = function(e, t) {
                return "none" === e ? e = 1e4 : e.indexOf("rem") >= 0 ? e = parseFloat(e) * o() : e.indexOf("em") >= 0 ? e = parseFloat(e) * parseFloat(t.css("font-size")) : e.indexOf("px") >= 0 ? (e = parseFloat(e),
                60 >= e && (e /= parseFloat(t.parent().css("width")))) : e.indexOf("%") >= 0 && (e = parseFloat(e) / 100),
                e
            }
            ,
            e.fn.bindScrollHandler = function() {
                return k.preventPageScroll ? (e(this).on("DOMMouseScroll mousewheel", function(t) {
                    var n, o, i, r, a, s, l, c;
                    return o = e(this),
                    l = o.scrollTop(),
                    s = o[0].scrollHeight,
                    r = parseInt(o.css("height")),
                    n = o.closest(".bigfoot-footnote"),
                    o.scrollTop() > 0 && o.scrollTop() < 10 && n.addClass("is-scrollable"),
                    n.hasClass("is-scrollable") ? (i = "DOMMouseScroll" === t.type ? -40 * t.originalEvent.detail : t.originalEvent.wheelDelta,
                    c = i > 0,
                    a = function() {
                        return t.stopPropagation(),
                        t.preventDefault(),
                        t.returnValue = !1,
                        !1
                    }
                    ,
                    !c && -i > s - r - l ? (o.scrollTop(s),
                    n.addClass("is-fully-scrolled"),
                    a()) : c && i > l ? (o.scrollTop(0),
                    n.removeClass("is-fully-scrolled"),
                    a()) : n.removeClass("is-fully-scrolled")) : void 0
                }
                ),
                e(this)) : e(this)
            }
            ,
            N = function(t) {
                return k.deleteOnUnhover && k.activateOnHover ? setTimeout(function() {
                    var n;
                    return n = e(t.target).closest(".bigfoot-footnote, .bigfoot-footnote__button"),
                    e(".bigfoot-footnote__button:hover, .bigfoot-footnote:hover").length < 1 ? x() : void 0
                }
                , k.hoverDelay) : void 0
            }
            ,
            f = function(e) {
                return 27 === e.keyCode ? x() : void 0
            }
            ,
            x = function(t, n) {
                var o, i, r, a;
                return null  == t && (t = ".bigfoot-footnote"),
                null  == n && (n = k.popoverDeleteDelay),
                o = e(),
                a = void 0,
                i = void 0,
                r = void 0,
                e(t).each(function() {
                    return r = e(this),
                    a = r.attr("data-footnote-identifier"),
                    i = e('.bigfoot-footnote__button[data-footnote-identifier="' + a + '"]'),
                    i.hasClass("changing") ? void 0 : (o = o.add(i),
                    i.removeClass("is-active is-hover-instantiated is-click-instantiated").addClass("changing"),
                    r.removeClass("is-active").addClass("disapearing"),
                    setTimeout(function() {
                        return r.remove(),
                        delete g[a],
                        i.removeClass("changing")
                    }
                    , n))
                }
                ),
                o
            }
            ,
            C = function(t) {
                var n;
                k.positionContent && (n = t ? t.type : "resize",
                e(".bigfoot-footnote").each(function() {
                    var t, o, i, r, a, s, l, c, u, d, f, p, h, m, y, b;
                    return r = e(this),
                    s = r.attr("data-footnote-identifier"),
                    a = 'data-footnote-identifier="' + s + '"',
                    o = r.find(".bigfoot-footnote__content"),
                    t = r.siblings(".bigfoot-footnote__button"),
                    y = T(t),
                    c = parseFloat(r.css("margin-top")),
                    u = +r.attr("data-bigfoot-max-height"),
                    b = 2 * c + r.outerHeight(),
                    d = 1e4,
                    h = y.bottomRoom < b && y.topRoom > y.bottomRoom,
                    l = g[s],
                    h ? ("top" !== l && (g[s] = "top",
                    r.addClass("is-positioned-top").removeClass("is-positioned-bottom"),
                    r.css("transform-origin", 100 * y.leftRelative + "% 100%")),
                    d = y.topRoom - c - 15) : (("bottom" !== l || "init" === l) && (g[s] = "bottom",
                    r.removeClass("is-positioned-top").addClass("is-positioned-bottom"),
                    r.css("transform-origin", 100 * y.leftRelative + "% 0%")),
                    d = y.bottomRoom - c - 15),
                    r.find(".bigfoot-footnote__content").css({
                        "max-height": Math.min(d, u) + "px"
                    }),
                    "resize" === n && (p = parseFloat(r.attr("bigfoot-max-width")),
                    i = r.find(".bigfoot-footnote__wrapper"),
                    f = p,
                    1 >= p && (m = function() {
                        var t, n;
                        return n = 1e4,
                        k.maxWidthRelativeTo && (t = e(k.maxWidthRelativeTo),
                        t.length > 0 && (n = t.outerWidth())),
                        Math.min(window.innerWidth, n)
                    }
                    (),
                    f = m * p),
                    f = Math.min(f, r.find(".bigfoot-footnote__content").outerWidth() + 1),
                    i.css("max-width", f + "px"),
                    r.css({
                        left: -y.leftRelative * f + parseFloat(t.css("margin-left")) + t.outerWidth() / 2 + "px"
                    }),
                    v(r, y.leftRelative)),
                    parseInt(r.outerHeight()) < r.find(".bigfoot-footnote__content")[0].scrollHeight ? r.addClass("is-scrollable") : void 0
                }
                ))
            }
            ,
            v = function(e, t) {
                var n;
                null  == t && (t = .5),
                n = e.find(".bigfoot-footnote__tooltip"),
                n.length > 0 && n.css("left", "" + 100 * t + "%")
            }
            ,
            T = function(e) {
                var t, n, o, i, r, a;
                return n = parseFloat(e.css("margin-left")),
                o = parseFloat(e.outerWidth()) - n,
                t = parseFloat(e.outerHeight()),
                a = A(),
                r = e.offset().top - a.scrollY + t / 2,
                i = e.offset().left - a.scrollX + o / 2,
                {
                    topRoom: r,
                    bottomRoom: a.height - r,
                    leftRoom: i,
                    rightRoom: a.width - i,
                    leftRelative: i / a.width,
                    topRelative: r / a.height
                }
            }
            ,
            A = function() {
                var t;
                return t = e(window),
                {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    scrollX: t.scrollLeft(),
                    scrollY: t.scrollTop()
                }
            }
            ,
            n = function(e, t, n, o, r) {
                var a, s, l, c, u, d, f;
                return null  == o && (o = k.popoverDeleteDelay),
                null  == r && (r = !0),
                c = void 0,
                s = void 0,
                d = void 0,
                "string" == typeof e ? (d = "iphone" === e.toLowerCase() ? "<320px" : "ipad" === e.toLowerCase() ? "<768px" : e,
                s = ">" === d.charAt(0) ? "min" : "<" === d.charAt(0) ? "max" : null ,
                u = s ? "(" + s + "-width: " + d.substring(1) + ")" : d,
                c = window.matchMedia(u)) : c = e,
                c.media && "invalid" === c.media ? {
                    added: !1,
                    mq: c,
                    listener: null 
                } : (f = "min" === s,
                a = "max" === s,
                t = t || m(r, o, f, function(e) {
                    return e.addClass("is-bottom-fixed")
                }
                ),
                n = n || m(r, o, a, function() {}
                ),
                l = function(e) {
                    e.matches ? t(r, i) : n(r, i)
                }
                ,
                c.addListener(l),
                l(c),
                k.breakpoints[e] = {
                    added: !0,
                    mq: c,
                    listener: l
                },
                k.breakpoints[e])
            }
            ,
            m = function(e, t, n, o) {
                return function(e, i) {
                    var r;
                    return r = void 0,
                    e && (r = i.close(),
                    i.updateSetting("activateCallback", o)),
                    setTimeout(function() {
                        return i.updateSetting("positionContent", n),
                        e ? i.activate(r) : void 0
                    }
                    , t)
                }
            }
            ,
            b = function(e, t) {
                var n, o, i, r;
                if (i = null ,
                n = void 0,
                r = !1,
                "string" == typeof e)
                    r = void 0 !== k.breakpoints[e];
                else
                    for (n in k.breakpoints)
                        k.breakpoints.hasOwnProperty(n) && k.breakpoints[n].mq === e && (r = !0);
                return r && (o = k.breakpoints[n || e],
                t ? t({
                    matches: !1
                }) : o.listener({
                    matches: !1
                }),
                o.mq.removeListener(o.listener),
                delete k.breakpoints[n || e]),
                r
            }
            ,
            S = function(e, t) {
                var n, o;
                if (n = void 0,
                "string" == typeof e)
                    n = k[e],
                    k[e] = t;
                else {
                    n = {};
                    for (o in e)
                        e.hasOwnProperty(o) && (n[o] = k[o],
                        k[o] = e[o])
                }
                return n
            }
            ,
            h = function(e) {
                return k[e]
            }
            ,
            e(document).ready(function() {
                return p(),
                e(document).on("mouseenter", ".bigfoot-footnote__button", r),
                e(document).on("touchend click", E),
                e(document).on("mouseout", ".is-hover-instantiated", N),
                e(document).on("keyup", f),
                e(window).on("scroll resize", C),
                e(document).on("gestureend", function() {
                    return C()
                }
                )
            }
            ),
            i = {
                removePopovers: x,
                close: x,
                createPopover: c,
                activate: c,
                repositionFeet: C,
                reposition: C,
                addBreakpoint: n,
                removeBreakpoint: b,
                getSetting: h,
                updateSetting: S
            }
        }
    }
    (jQuery)
}
.call(this),
function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null ,
            ignore: null 
        };
        if (!document.getElementById("fit-vids-style")) {
            var o = document.head || document.getElementsByTagName("head")[0]
              , i = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}"
              , r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">' + i + "</style>",
            o.appendChild(r.childNodes[1])
        }
        return t && e.extend(n, t),
        this.each(function() {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var o = ".fitvidsignore";
            n.ignore && (o = o + ", " + n.ignore);
            var i = e(this).find(t.join(","));
            i = i.not("object object"),
            i = i.not(o),
            i.each(function() {
                var t = e(this);
                if (!(t.parents(o).length > 0 || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9),
                    t.attr("width", 16));
                    var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height()
                      , i = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10)
                      , r = n / i;
                    if (!t.attr("id")) {
                        var a = "fitvid" + Math.floor(999999 * Math.random());
                        t.attr("id", a)
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"),
                    t.removeAttr("height").removeAttr("width")
                }
            }
            )
        }
        )
    }
}
(window.jQuery || window.Zepto),
function(e, t, n, o) {
    var i = e(t);
    e.fn.lazyload = function(r) {
        function a() {
            var t = 0;
            l.each(function() {
                var n = e(this);
                if (!c.skip_invisible || n.is(":visible"))
                    if (e.abovethetop(this, c) || e.leftofbegin(this, c))
                        ;
                    else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                        if (++t > c.failure_limit)
                            return !1
                    } else
                        n.trigger("appear"),
                        t = 0
            }
            )
        }
        var s, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null ,
            load: null ,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return r && (o !== r.failurelimit && (r.failure_limit = r.failurelimit,
        delete r.failurelimit),
        o !== r.effectspeed && (r.effect_speed = r.effectspeed,
        delete r.effectspeed),
        e.extend(c, r)),
        s = c.container === o || c.container === t ? i : e(c.container),
        0 === c.event.indexOf("scroll") && s.bind(c.event, function() {
            return a()
        }
        ),
        this.each(function() {
            var t = this
              , n = e(t);
            t.loaded = !1,
            (n.attr("src") === o || n.attr("src") === !1) && n.is("img") && n.attr("src", c.placeholder),
            n.one("appear", function() {
                if (!this.loaded) {
                    if (c.appear) {
                        var o = l.length;
                        c.appear.call(t, o, c)
                    }
                    e("<img />").bind("load", function() {
                        var o = n.attr("data-" + c.data_attribute);
                        n.hide(),
                        n.is("img") ? n.attr("src", o) : n.css("background-image", "url('" + o + "')"),
                        n[c.effect](c.effect_speed),
                        t.loaded = !0;
                        var i = e.grep(l, function(e) {
                            return !e.loaded
                        }
                        );
                        if (l = e(i),
                        c.load) {
                            var r = l.length;
                            c.load.call(t, r, c)
                        }
                    }
                    ).attr("src", n.attr("data-" + c.data_attribute))
                }
            }
            ),
            0 !== c.event.indexOf("scroll") && n.bind(c.event, function() {
                t.loaded || n.trigger("appear")
            }
            )
        }
        ),
        i.bind("resize", function() {
            a()
        }
        ),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function() {
                e(this).trigger("appear")
            }
            )
        }
        ),
        e(n).ready(function() {
            a()
        }
        ),
        this
    }
    ,
    e.belowthefold = function(n, r) {
        var a;
        return a = r.container === o || r.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(r.container).offset().top + e(r.container).height(),
        a <= e(n).offset().top - r.threshold
    }
    ,
    e.rightoffold = function(n, r) {
        var a;
        return a = r.container === o || r.container === t ? i.width() + i.scrollLeft() : e(r.container).offset().left + e(r.container).width(),
        a <= e(n).offset().left - r.threshold
    }
    ,
    e.abovethetop = function(n, r) {
        var a;
        return a = r.container === o || r.container === t ? i.scrollTop() : e(r.container).offset().top,
        a >= e(n).offset().top + r.threshold + e(n).height()
    }
    ,
    e.leftofbegin = function(n, r) {
        var a;
        return a = r.container === o || r.container === t ? i.scrollLeft() : e(r.container).offset().left,
        a >= e(n).offset().left + r.threshold + e(n).width()
    }
    ,
    e.inviewport = function(t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }
    ,
    e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}
(jQuery, window, document),
function(e) {
    var t, n, o, i, r, a, s, l = "Close", c = "BeforeClose", u = "AfterClose", d = "BeforeAppend", f = "MarkupParse", p = "Open", h = "Change", m = "mfp", g = "." + m, v = "mfp-ready", y = "mfp-removing", b = "mfp-prevent-close", x = function() {}
    , w = !!window.jQuery, C = e(window), T = function(e, n) {
        t.ev.on(m + e + g, n)
    }
    , k = function(t, n, o, i) {
        var r = document.createElement("div");
        return r.className = "mfp-" + t,
        o && (r.innerHTML = o),
        i ? n && n.appendChild(r) : (r = e(r),
        n && r.appendTo(n)),
        r
    }
    , E = function(n, o) {
        t.ev.triggerHandler(m + n, o),
        t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1),
        t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(o) ? o : [o]))
    }
    , N = function(n) {
        return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        s = n),
        t.currTemplate.closeBtn
    }
    , S = function() {
        e.magnificPopup.instance || (t = new x,
        t.init(),
        e.magnificPopup.instance = t)
    }
    , A = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition" in e)
                return !0;
        return !1
    }
    ;
    x.prototype = {
        constructor: x,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."),
            t.isIE8 = -1 !== n.indexOf("MSIE 8."),
            t.isLowIE = t.isIE7 || t.isIE8,
            t.isAndroid = /android/gi.test(n),
            t.isIOS = /iphone|ipad|ipod/gi.test(n),
            t.supportsTransition = A(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            i = e(document),
            t.popupsCache = {}
        },
        open: function(n) {
            o || (o = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(),
                t.index = 0;
                var s, l = n.items;
                for (r = 0; r < l.length; r++)
                    if (s = l[r],
                    s.parsed && (s = s.el[0]),
                    s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else
                t.items = e.isArray(n.items) ? n.items : [n.items],
                t.index = n.index || 0;
            if (t.isOpen)
                return void t.updateItemHTML();
            t.types = [],
            a = "",
            t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i,
            n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, n),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = k("bg").on("click" + g, function() {
                t.close()
            }
            ),
            t.wrap = k("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                t._checkIfClose(e.target) && t.close()
            }
            ),
            t.container = k("container", t.wrap)),
            t.contentContainer = k("content"),
            t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; r < c.length; r++) {
                var u = c[r];
                u = u.charAt(0).toUpperCase() + u.slice(1),
                t["init" + u].call(t)
            }
            E("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (T(f, function(e, t, n, o) {
                n.close_replaceWith = N(o.type)
            }
            ),
            a += " mfp-close-btn-in") : t.wrap.append(N())),
            t.st.alignTop && (a += " mfp-align-top"),
            t.wrap.css(t.fixedContentPos ? {
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            } : {
                top: C.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && i.on("keyup" + g, function(e) {
                27 === e.keyCode && t.close()
            }
            ),
            C.on("resize" + g, function() {
                t.updateSize()
            }
            ),
            t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && t.wrap.addClass(a);
            var d = t.wH = C.height()
              , h = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var m = t._getScrollbarSize();
                m && (h.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
            var y = t.st.mainClass;
            return t.isIE7 && (y += " mfp-ie7"),
            y && t._addClassToMFP(y),
            t.updateItemHTML(),
            E("BuildControls"),
            e("html").css(h),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || o),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(v),
                t._setFocus()) : t.bgOverlay.addClass(v),
                i.on("focusin" + g, t._onFocusIn)
            }
            , 16),
            t.isOpen = !0,
            t.updateSize(d),
            E(p),
            n
        },
        close: function() {
            t.isOpen && (E(c),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y),
            setTimeout(function() {
                t._close()
            }
            , t.st.removalDelay)) : t._close())
        },
        _close: function() {
            E(l);
            var n = y + " " + v + " ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (n += t.st.mainClass + " "),
            t._removeClassFromMFP(n),
            t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "",
                e("html").css(o)
            }
            i.off("keyup" + g + " focusin" + g),
            t.ev.off(g),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null ,
            t.content = null ,
            t.currTemplate = null ,
            t.prevHeight = 0,
            E(u)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth
                  , o = window.innerHeight * n;
                t.wrap.css("height", o),
                t.wH = o
            } else
                t.wH = e || C.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            E("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            n.parsed || (n = t.parseEl(t.index));
            var o = n.type;
            if (E("BeforeChange", [t.currItem ? t.currItem.type : "", o]),
            t.currItem = n,
            !t.currTemplate[o]) {
                var i = t.st[o] ? t.st[o].markup : !1;
                E("FirstMarkupParse", i),
                t.currTemplate[o] = i ? e(i) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + o.charAt(0).toUpperCase() + o.slice(1)](n, t.currTemplate[o]);
            t.appendContent(a, o),
            n.preloaded = !0,
            E(h, n),
            r = n.type,
            t.container.prepend(t.contentContainer),
            E("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(N()) : t.content = e : t.content = "",
            E(d),
            t.container.addClass("mfp-" + n + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var o, i = t.items[n];
            if (i.tagName ? i = {
                el: e(i)
            } : (o = i.type,
            i = {
                data: i,
                src: i.src
            }),
            i.el) {
                for (var r = t.types, a = 0; a < r.length; a++)
                    if (i.el.hasClass("mfp-" + r[a])) {
                        o = r[a];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"),
                i.src || (i.src = i.el.attr("href"))
            }
            return i.type = o || t.st.type || "inline",
            i.index = n,
            i.parsed = !0,
            t.items[n] = i,
            E("ElementParse", i),
            t.items[n]
        },
        addGroup: function(e, n) {
            var o = function(o) {
                o.mfpEl = this,
                t._openClick(o, e, n)
            }
            ;
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = e,
            n.items ? (n.isObj = !0,
            e.off(i).on(i, o)) : (n.isObj = !1,
            n.delegate ? e.off(i).on(i, n.delegate, o) : (n.items = e,
            e.off(i).on(i, o)))
        },
        _openClick: function(n, o, i) {
            var r = void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t))
                            return !0
                    } else if (C.width() < a)
                        return !0;
                n.type && (n.preventDefault(),
                t.isOpen && n.stopPropagation()),
                i.el = e(n.mfpEl),
                i.delegate && (i.items = o.find(i.delegate)),
                t.open(i)
            }
        },
        updateStatus: function(e, o) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n),
                o || "loading" !== e || (o = t.st.tLoading);
                var i = {
                    status: e,
                    text: o
                };
                E("UpdateStatus", i),
                e = i.status,
                o = i.text,
                t.preloader.html(o),
                t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }
                ),
                t.container.addClass("mfp-s-" + e),
                n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(b)) {
                var o = t.st.closeOnContentClick
                  , i = t.st.closeOnBgClick;
                if (o && i)
                    return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0])
                    return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (o)
                        return !0
                } else if (i && e.contains(document, n))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(),
            !1)
        },
        _parseMarkup: function(t, n, o) {
            var i;
            o.data && (n = e.extend(o.data, n)),
            E(f, [t, n, o]),
            e.each(n, function(e, n) {
                if (void 0 === n || n === !1)
                    return !0;
                if (i = e.split("_"),
                i.length > 1) {
                    var o = t.find(g + "-" + i[0]);
                    if (o.length > 0) {
                        var r = i[1];
                        "replaceWith" === r ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith('<img src="' + n + '" class="' + o.attr("class") + '" />') : o.attr(i[1], n)
                    }
                } else
                    t.find(g + "-" + e).html(n)
            }
            )
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm",
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null ,
        proto: x.prototype,
        modules: [],
        open: function(t, n) {
            return S(),
            t = t ? e.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = n || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null ,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null ,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    e.fn.magnificPopup = function(n) {
        S();
        var o = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var i, r = w ? o.data("magnificPopup") : o[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                r.items ? i = r.items[a] : (i = o,
                r.delegate && (i = i.find(r.delegate)),
                i = i.eq(a)),
                t._openClick({
                    mfpEl: i
                }, o, r)
            } else
                t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            n = e.extend(!0, {}, n),
            w ? o.data("magnificPopup", n) : o[0].magnificPopup = n,
            t.addGroup(o, n);
        return o
    }
    ;
    var _, O, L, j = "inline", D = function() {
        L && (O.after(L.addClass(_)).detach(),
        L = null )
    }
    ;
    e.magnificPopup.registerModule(j, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(j),
                T(l + "." + j, function() {
                    D()
                }
                )
            },
            getInline: function(n, o) {
                if (D(),
                n.src) {
                    var i = t.st.inline
                      , r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (_ = i.hiddenClass,
                        O = k(_),
                        _ = "mfp-" + _),
                        L = r.after(O).detach().removeClass(_)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", i.tNotFound),
                        r = e("<div>");
                    return n.inlineElement = r,
                    r
                }
                return t.updateStatus("ready"),
                t._parseMarkup(o, {}, n),
                o
            }
        }
    });
    var M, H = "ajax", F = function() {
        M && o.removeClass(M)
    }
    , I = function() {
        F(),
        t.req && t.req.abort()
    }
    ;
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null ,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H),
                M = t.st.ajax.cursor,
                T(l + "." + H, I),
                T("BeforeChange." + H, I)
            },
            getAjax: function(n) {
                M && o.addClass(M),
                t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(o, i, r) {
                        var a = {
                            data: o,
                            xhr: r
                        };
                        E("ParseAjax", a),
                        t.appendContent(e(a.data), H),
                        n.finished = !0,
                        F(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(v)
                        }
                        , 16),
                        t.updateStatus("ready"),
                        E("AjaxContentAdded")
                    },
                    error: function() {
                        F(),
                        n.finished = n.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i),
                ""
            }
        }
    });
    var P, B = function(n) {
        if (n.data && void 0 !== n.data.title)
            return n.data.title;
        var o = t.st.image.titleSrc;
        if (o) {
            if (e.isFunction(o))
                return o.call(t, n);
            if (n.el)
                return n.el.attr(o) || ""
        }
        return ""
    }
    ;
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image
                  , n = ".image";
                t.types.push("image"),
                T(p + n, function() {
                    "image" === t.currItem.type && e.cursor && o.addClass(e.cursor)
                }
                ),
                T(l + n, function() {
                    e.cursor && o.removeClass(e.cursor),
                    C.off("resize" + g)
                }
                ),
                T("Resize" + n, t.resizeImage),
                t.isLowIE && T("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                P && clearInterval(P),
                e.isCheckingImgSize = !1,
                E("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0
                  , o = e.img[0]
                  , i = function(r) {
                    P && clearInterval(P),
                    P = setInterval(function() {
                        return o.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(P),
                        n++,
                        void (3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                    }
                    , r)
                }
                ;
                i(1)
            },
            getImage: function(n, o) {
                var i = 0
                  , r = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("ready")),
                    n.hasSize = !0,
                    n.loaded = !0,
                    E("ImageLoadComplete")) : (i++,
                    200 > i ? setTimeout(r, 100) : a()))
                }
                  , a = function() {
                    n && (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("error", s.tError.replace("%url%", n.src))),
                    n.hasSize = !0,
                    n.loaded = !0,
                    n.loadError = !0)
                }
                  , s = t.st.image
                  , l = o.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    n.img = e(c).on("load.mfploader", r).on("error.mfploader", a),
                    c.src = n.src,
                    l.is("img") && (n.img = n.img.clone()),
                    c = n.img[0],
                    c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(o, {
                    title: B(n),
                    img_replaceWith: n.img
                }, n),
                t.resizeImage(),
                n.hasSize ? (P && clearInterval(P),
                n.loadError ? (o.addClass("mfp-loading"),
                t.updateStatus("error", s.tError.replace("%url%", n.src))) : (o.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                o) : (t.updateStatus("loading"),
                n.loading = !0,
                n.hasSize || (n.imgHidden = !0,
                o.addClass("mfp-loading"),
                t.findImageSize(n)),
                o)
            }
        }
    });
    var z, q = function() {
        return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform),
        z
    }
    ;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom, o = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var i, r, a = n.duration, s = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , o = "all " + n.duration / 1e3 + "s " + n.easing
                          , i = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , r = "transition";
                        return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = o,
                        t.css(i),
                        t
                    }
                    , u = function() {
                        t.content.css("visibility", "visible")
                    }
                    ;
                    T("BuildControls" + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i),
                            t.content.css("visibility", "hidden"),
                            e = t._getItemToZoom(),
                            !e)
                                return void u();
                            r = s(e),
                            r.css(t._getOffset()),
                            t.wrap.append(r),
                            i = setTimeout(function() {
                                r.css(t._getOffset(!0)),
                                i = setTimeout(function() {
                                    u(),
                                    setTimeout(function() {
                                        r.remove(),
                                        e = r = null ,
                                        E("ZoomAnimationEnded")
                                    }
                                    , 16)
                                }
                                , a)
                            }
                            , 16)
                        }
                    }
                    ),
                    T(c + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i),
                            t.st.removalDelay = a,
                            !e) {
                                if (e = t._getItemToZoom(),
                                !e)
                                    return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)),
                            t.wrap.append(r),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                r.css(t._getOffset())
                            }
                            , 16)
                        }
                    }
                    ),
                    T(l + o, function() {
                        t._allowZoom() && (u(),
                        r && r.remove(),
                        e = null )
                    }
                    )
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var o;
                o = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var i = o.offset()
                  , r = parseInt(o.css("padding-top"), 10)
                  , a = parseInt(o.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - r;
                var s = {
                    width: o.width(),
                    height: (w ? o.innerHeight() : o[0].offsetHeight) - a - r
                };
                return q() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left,
                s.top = i.top),
                s
            }
        }
    });
    var R = "iframe"
      , W = "//about:blank"
      , $ = function(e) {
        if (t.currTemplate[R]) {
            var n = t.currTemplate[R].find("iframe");
            n.length && (e || (n[0].src = W),
            t.isIE8 && n.css("display", e ? "block" : "none"))
        }
    }
    ;
    e.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(R),
                T("BeforeChange", function(e, t, n) {
                    t !== n && (t === R ? $() : n === R && $(!0))
                }
                ),
                T(l + "." + R, function() {
                    $()
                }
                )
            },
            getIframe: function(n, o) {
                var i = n.src
                  , r = t.st.iframe;
                e.each(r.patterns, function() {
                    return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)),
                    i = this.src.replace("%id%", i),
                    !1) : void 0
                }
                );
                var a = {};
                return r.srcAction && (a[r.srcAction] = i),
                t._parseMarkup(o, a, n),
                t.updateStatus("ready"),
                o
            }
        }
    });
    var X = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    }
      , U = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    ;
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery
                  , o = ".mfp-gallery"
                  , r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0,
                n && n.enabled ? (a += " mfp-gallery",
                T(p + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(),
                        !1) : void 0
                    }
                    ),
                    i.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    }
                    )
                }
                ),
                T("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = U(n.text, t.currItem.index, t.items.length))
                }
                ),
                T(f + o, function(e, o, i, r) {
                    var a = t.items.length;
                    i.counter = a > 1 ? U(n.tCounter, r.index, a) : ""
                }
                ),
                T("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var o = n.arrowMarkup
                          , i = t.arrowLeft = e(o.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(b)
                          , a = t.arrowRight = e(o.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(b)
                          , s = r ? "mfpFastClick" : "click";
                        i[s](function() {
                            t.prev()
                        }
                        ),
                        a[s](function() {
                            t.next()
                        }
                        ),
                        t.isIE7 && (k("b", i[0], !1, !0),
                        k("a", i[0], !1, !0),
                        k("b", a[0], !1, !0),
                        k("a", a[0], !1, !0)),
                        t.container.append(i.add(a))
                    }
                }
                ),
                T(h + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null 
                    }
                    , 16)
                }
                ),
                void T(l + o, function() {
                    i.off(o),
                    t.wrap.off("click" + o),
                    t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                    t.arrowRight = t.arrowLeft = null 
                }
                )) : !1
            },
            next: function() {
                t.direction = !0,
                t.index = X(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = X(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload, o = Math.min(n[0], t.items.length), i = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? i : o); e++)
                    t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? o : i); e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = X(n),
                !t.items[n].preloaded) {
                    var o = t.items[n];
                    o.parsed || (o = t.parseEl(n)),
                    E("LazyLoad", o),
                    "image" === o.type && (o.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        o.hasSize = !0
                    }
                    ).on("error.mfploader", function() {
                        o.hasSize = !0,
                        o.loadError = !0,
                        E("LazyLoadError", o)
                    }
                    ).attr("src", o.src)),
                    o.preloaded = !0
                }
            }
        }
    });
    var Y = "retina";
    e.magnificPopup.registerModule(Y, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                }
                )
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , n = e.ratio;
                    n = isNaN(n) ? n() : n,
                    n > 1 && (T("ImageHasSize." + Y, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }
                    ),
                    T("ElementParse." + Y, function(t, o) {
                        o.src = e.replaceSrc(o, n)
                    }
                    ))
                }
            }
        }
    }),
    function() {
        var t = 1e3
          , n = "ontouchstart" in window
          , o = function() {
            C.off("touchmove" + r + " touchend" + r)
        }
          , i = "mfpFastClick"
          , r = "." + i;
        e.fn.mfpFastClick = function(i) {
            return e(this).each(function() {
                var a, s = e(this);
                if (n) {
                    var l, c, u, d, f, p;
                    s.on("touchstart" + r, function(e) {
                        d = !1,
                        p = 1,
                        f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                        c = f.clientX,
                        u = f.clientY,
                        C.on("touchmove" + r, function(e) {
                            f = e.originalEvent ? e.originalEvent.touches : e.touches,
                            p = f.length,
                            f = f[0],
                            (Math.abs(f.clientX - c) > 10 || Math.abs(f.clientY - u) > 10) && (d = !0,
                            o())
                        }
                        ).on("touchend" + r, function(e) {
                            o(),
                            d || p > 1 || (a = !0,
                            e.preventDefault(),
                            clearTimeout(l),
                            l = setTimeout(function() {
                                a = !1
                            }
                            , t),
                            i())
                        }
                        )
                    }
                    )
                }
                s.on("click" + r, function() {
                    a || i()
                }
                )
            }
            )
        }
        ,
        e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + r + " click" + r),
            n && C.off("touchmove" + r + " touchend" + r)
        }
    }
    (),
    S()
}
(window.jQuery || window.Zepto),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}
(function(e) {
    function t(e) {
        return e.replace(/(:|\.|\/)/g, "\\$1")
    }
    var n = "1.5.4"
      , o = {}
      , i = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        scrollElement: null ,
        scrollTarget: null ,
        beforeScroll: function() {},
        afterScroll: function() {},
        easing: "swing",
        speed: 400,
        autoCoefficient: 2,
        preventDefault: !0
    }
      , r = function(t) {
        var n = []
          , o = !1
          , i = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";
        return this.each(function() {
            if (this !== document && this !== window) {
                var t = e(this);
                t[i]() > 0 ? n.push(this) : (t[i](1),
                o = t[i]() > 0,
                o && n.push(this),
                t[i](0))
            }
        }
        ),
        n.length || this.each(function() {
            "BODY" === this.nodeName && (n = [this])
        }
        ),
        "first" === t.el && n.length > 1 && (n = [n[0]]),
        n
    }
    ;
    e.fn.extend({
        scrollable: function(e) {
            var t = r.call(this, {
                dir: e
            });
            return this.pushStack(t)
        },
        firstScrollable: function(e) {
            var t = r.call(this, {
                el: "first",
                dir: e
            });
            return this.pushStack(t)
        },
        smoothScroll: function(n, o) {
            if (n = n || {},
            "options" === n)
                return o ? this.each(function() {
                    var t = e(this)
                      , n = e.extend(t.data("ssOpts") || {}, o);
                    e(this).data("ssOpts", n)
                }
                ) : this.first().data("ssOpts");
            var i = e.extend({}, e.fn.smoothScroll.defaults, n)
              , r = e.smoothScroll.filterPath(location.pathname);
            return this.unbind("click.smoothscroll").bind("click.smoothscroll", function(n) {
                var o = this
                  , a = e(this)
                  , s = e.extend({}, i, a.data("ssOpts") || {})
                  , l = i.exclude
                  , c = s.excludeWithin
                  , u = 0
                  , d = 0
                  , f = !0
                  , p = {}
                  , h = location.hostname === o.hostname || !o.hostname
                  , m = s.scrollTarget || e.smoothScroll.filterPath(o.pathname) === r
                  , g = t(o.hash);
                if (s.scrollTarget || h && m && g) {
                    for (; f && u < l.length; )
                        a.is(t(l[u++])) && (f = !1);
                    for (; f && d < c.length; )
                        a.closest(c[d++]).length && (f = !1)
                } else
                    f = !1;
                f && (s.preventDefault && n.preventDefault(),
                e.extend(p, s, {
                    scrollTarget: s.scrollTarget || g,
                    link: o
                }),
                e.smoothScroll(p))
            }
            ),
            this
        }
    }),
    e.smoothScroll = function(t, n) {
        if ("options" === t && "object" == typeof n)
            return e.extend(o, n);
        var i, r, a, s, l, c = 0, u = "offset", d = "scrollTop", f = {}, p = {};
        "number" == typeof t ? (i = e.extend({
            link: null 
        }, e.fn.smoothScroll.defaults, o),
        a = t) : (i = e.extend({
            link: null 
        }, e.fn.smoothScroll.defaults, t || {}, o),
        i.scrollElement && (u = "position",
        "static" === i.scrollElement.css("position") && i.scrollElement.css("position", "relative"))),
        d = "left" === i.direction ? "scrollLeft" : d,
        i.scrollElement ? (r = i.scrollElement,
        /^(?:HTML|BODY)$/.test(r[0].nodeName) || (c = r[d]())) : r = e("html, body").firstScrollable(i.direction),
        i.beforeScroll.call(r, i),
        a = "number" == typeof t ? t : n || e(i.scrollTarget)[u]() && e(i.scrollTarget)[u]()[i.direction] || 0,
        f[d] = a + c + i.offset,
        s = i.speed,
        "auto" === s && (l = f[d] - r.scrollTop(),
        0 > l && (l *= -1),
        s = l / i.autoCoefficient),
        p = {
            duration: s,
            easing: i.easing,
            complete: function() {
                i.afterScroll.call(i.link, i)
            }
        },
        i.step && (p.step = i.step),
        r.length ? r.stop().animate(f, p) : i.afterScroll.call(i.link, i)
    }
    ,
    e.smoothScroll.version = n,
    e.smoothScroll.filterPath = function(e) {
        return e = e || "",
        e.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }
    ,
    e.fn.smoothScroll.defaults = i
}
),
function(e) {
    jQuery.fn.widowFix = function(t) {
        var n = {
            letterLimit: null ,
            prevLimit: null ,
            linkFix: !1,
            dashes: !1
        }
          , o = e.extend(n, t);
        return this.length ? this.each(function() {
            function t() {
                "" === l && (l = s.pop(),
                t())
            }
            var n, i = e(this);
            if (o.linkFix) {
                var r = i.find("a:last");
                r.wrap("<var>");
                var a = e("var").html();
                n = r.contents()[0],
                r.contents().unwrap()
            }
            var s = e(this).html().split(" ")
              , l = s.pop();
            if (!(s.length <= 1)) {
                if (t(),
                o.dashes) {
                    var c = ["-", "\u2013", "\u2014"];
                    e.each(c, function(e, t) {
                        return l.indexOf(t) > 0 ? (l = '<span style="white-space:nowrap;">' + l + "</span>",
                        !1) : void 0
                    }
                    )
                }
                var u = s[s.length - 1];
                if (o.linkFix) {
                    if (null  !== o.letterLimit && n.length >= o.letterLimit)
                        return void i.find("var").each(function() {
                            e(this).contents().replaceWith(a),
                            e(this).contents().unwrap()
                        }
                        );
                    if (null  !== o.prevLimit && u.length >= o.prevLimit)
                        return void i.find("var").each(function() {
                            e(this).contents().replaceWith(a),
                            e(this).contents().unwrap()
                        }
                        )
                } else {
                    if (null  !== o.letterLimit && l.length >= o.letterLimit)
                        return;
                    if (null  !== o.prevLimit && u.length >= o.prevLimit)
                        return
                }
                var d = s.join(" ") + "&nbsp;" + l;
                i.html(d),
                o.linkFix && i.find("var").each(function() {
                    e(this).contents().replaceWith(a),
                    e(this).contents().unwrap()
                }
                )
            }
        }
        ) : void 0
    }
}
(jQuery),
$(document).ready(function() {
    function e(e, t, n) {
        var o = screen.width / 2 - t / 2
          , i = screen.height / 2 - n / 2;
        window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + t + ",height=" + n + ",top=" + i + ",left=" + o)
    }
    $("#js-menu-trigger,#js-menu-screen,#js-menu-close").on("click touchstart", function(e) {
        $("#js-menu,#js-menu-screen").toggleClass("is-visible"),
        $("#js-menu-trigger").toggleClass("close"),
        e.preventDefault()
    }
    ),
    $(".entry-title").widowFix(),
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").addClass("image-popup"),
    $(".image-popup").magnificPopup({
        disableOn: function() {
            return $(window).width() < 500 ? !1 : !0
        },
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
        },
        removalDelay: 500,
        mainClass: "mfp-zoom-in",
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        closeOnContentClick: !0,
        midClick: !0
    }),
    $("img.load").show().lazyload({
        effect: "fadeIn",
        skip_invisible: !1
    }),
    $("#main").fitVids();
    var t = function(e) {
        var t = document.createElement("a");
        return t.className = "header-link",
        t.href = "#" + e,
        t.innerHTML = '<i class="fa fa-link"></i>',
        t
    }
      , n = function(e, n) {
        for (var o = n.getElementsByTagName("h" + e), i = 0; i < o.length; i++) {
            var r = o[i];
            "undefined" != typeof r.id && "" !== r.id && r.appendChild(t(r.id))
        }
    }
    ;
    document.onreadystatechange = function() {
        if ("complete" === this.readyState) {
            var e = document.getElementsByClassName("page-content")[0];
            if (!e)
                return;
            for (var t = 1; 6 >= t; t++)
                n(t, e)
        }
    }
    ,
    $(".js-social-share").on("click", function(t) {
        t.preventDefault(),
        e($(this).attr("href"), 500, 300)
    }
    ),
    $("a").smoothScroll({
        offset: -20
    });
    $.bigfoot({
        deleteOnUnhover: !1,
        preventPageScroll: !1,
        activateOnHover: !0
    })
}
);
