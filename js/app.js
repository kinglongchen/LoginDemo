/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
/**
 * alertify
 * An unobtrusive customizable JavaScript notification system
 *
 * @author Fabien Doiron <fabien.doiron@gmail.com>
 * @copyright Fabien Doiron 2013
 * @license MIT <http://opensource.org/licenses/mit-license.php>
 * @link http://fabien-d.github.com/alertify.js/
 * @module alertify
 * @version 0.3.8
 */
/*!
 * VERSION: beta 1.9.0
 * DATE: 2013-03-01
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, easing.EasePack, plugins.CSSPlugin, plugins.RoundPropsPlugin, plugins.BezierPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
// Copyright (c) 2011 Harvest http://getharvest.com
/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function (e, t) {
    function P(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    function I(e, n, r, i) {
        if (b.acceptData(e)) {
            var s, o, u = b.expando,
                a = "string" == typeof n,
                f = e.nodeType,
                c = f ? b.cache : e,
                h = f ? e[u] : e[u] && u;
            if (h && c[h] && (i || c[h].data) || !a || r !== t) return h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n)), s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], null == o && (o = s[b.camelCase(n)])) : o = s, o
        }
    }
    function q(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, s, o = e.nodeType,
                u = o ? b.cache : e,
                a = o ? e[b.expando] : b.expando;
            if (u[a]) {
                if (t && (s = n ? u[a] : u[a].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [t] : (t = b.camelCase(t), t = t in s ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete s[t[r]];
                    if (!(n ? U : b.isEmptyObject)(s)) return
                } (n || (delete u[a].data, U(u[a]))) && (o ? b.cleanData([e], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null)
            }
        }
    }
    function R(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r
                } catch (s) { }
                b.data(e, n, r)
            } else r = t
        }
        return r
    }
    function U(e) {
        var t;
        for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    function it() {
        return !0
    }
    function st() {
        return !1
    }
    function ct(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function ht(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (at.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 === n
        })
    }
    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function Mt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function _t(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }
    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function Pt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]) ; r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }
    function Ht(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, s = b._data(e),
                o = b._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u) for (r = 0, i = u[n].length; i > r; r++) b.event.add(t, n, u[n][r])
            }
            o.data && (o.data = b.extend({}, o.data))
        }
    }
    function Bt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (_t(t).text = e.text, Dt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u) for (u = [], r = e.childNodes || e; null != (s = r[o]) ; o++) !n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], u) : u
    }
    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) if (t = en[i] + n, t in e) return t;
        return r
    }
    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; u > o; o++) r = e[o], r.style && (s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }
    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            o = 0;
        for (; 4 > s; s += 2) "margin" === n && (o += b.css(e, n + Zt[s], !0, i)), r ? ("content" === n && (o -= b.css(e, "padding" + Zt[s], !0, i)), "margin" !== n && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), "padding" !== n && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }
    function un(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Rt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function an(e) {
        var t = s,
            n = Qt[e];
        return n || (n = fn(e, t), "none" !== n && n || (It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach()), Qt[e] = n), n
    }
    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }
    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else for (i in t) vn(e + "[" + i + "]", t[i], n, r)
    }
    function _n(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n)) while (r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Dn(e, n, r, i) {
        function u(a) {
            var f;
            return s[a] = !0, b.each(e[a] || [], function (e, a) {
                var l = a(n, r, i);
                return "string" != typeof l || o || s[l] ? o ? !(f = l) : t : (n.dataTypes.unshift(l), u(l), !1)
            }), f
        }
        var s = {},
            o = e === An;
        return u(n.dataTypes[0]) || !s["*"] && u("*")
    }
    function Pn(e, n) {
        var r, i, s = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (u in l) u in r && (n[l[u]] = r[u]);
        while ("*" === f[0]) f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s) for (u in a) if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        return o ? (o !== f[0] && f.unshift(o), r[o]) : t
    }
    function Bn(e, t) {
        var n, r, i, s, o = {},
            u = 0,
            a = e.dataTypes.slice(),
            f = a[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]) for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u];) if ("*" !== r) {
            if ("*" !== f && f !== r) {
                if (i = o[f + " " + r] || o["* " + r], !i) for (n in o) if (s = n.split(" "), s[1] === r && (i = o[f + " " + s[0]] || o["* " + s[0]])) {
                    i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                    break
                }
                if (i !== !0) if (i && e["throws"]) t = i(t);
                else try {
                    t = i(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: i ? l : "No conversion from " + f + " to " + r
                    }
                }
            }
            f = r
        }
        return {
            state: "success",
            data: t
        }
    }
    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    }
    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }
    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = b.now()
    }
    function Zn(e, t) {
        b.each(t, function (t, n) {
            var r = (Gn[t] || []).concat(Gn["*"]),
                i = 0,
                s = r.length;
            for (; s > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = b.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (tr(l, f.opts.specialEasing) ; o > s; s++) if (r = Qn[s].call(f, e, l, f.opts)) return r;
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e) if (r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r], o && "expand" in o) {
            n = o.expand(n), delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = s)
        } else t[r] = s
    }
    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            v = [],
            m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t) if (o = t[i], $n.exec(o)) {
            if (delete t[i], a = a || "toggle" === o, o === (m ? "hide" : "show")) continue;
            v.push(i)
        }
        if (s = v.length) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function () {
                b(e).hide()
            }), h.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in d) b.style(e, t, d[t])
            });
            for (i = 0; s > i; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    function ir(e, t) {
        var n, r = {
            height: e
        },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function sr(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.document,
        o = e.location,
        u = e.jQuery,
        a = e.$,
        f = {},
        l = [],
        c = "1.9.1",
        h = l.concat,
        p = l.push,
        d = l.slice,
        v = l.indexOf,
        m = f.toString,
        g = f.hasOwnProperty,
        y = c.trim,
        b = function (e, t) {
            return new b.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        E = /\S+/g,
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        N = /^[\],:{}\s]*$/,
        C = /(?:^|:|,)(?:\s*\[)+/g,
        k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        A = /^-ms-/,
        O = /-([\da-z])/gi,
        M = function (e, t) {
            return t.toUpperCase()
        },
        _ = function (e) {
            (s.addEventListener || "load" === e.type || "complete" === s.readyState) && (D(), b.ready())
        },
        D = function () {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
        };
    b.fn = b.prototype = {
        jquery: c,
        constructor: b,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : x.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), T.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = s.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = s, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return d.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return b.each(this, e, t)
        },
        ready: function (e) {
            return b.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: p,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        for ("boolean" == typeof u && (l = u, u = arguments[1] || {}, a = 2), "object" == typeof u || b.isFunction(u) || (u = {}), f === a && (u = this, --a) ; f > a; a++) if (null != (s = arguments[a])) for (i in s) e = u[i], r = s[i], u !== r && (l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r));
        return u
    }, b.extend({
        noConflict: function (t) {
            return e.$ === b && (e.$ = a), t && e.jQuery === b && (e.jQuery = u), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!s.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(s, [b]), b.fn.trigger && b(s).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray ||
        function (e) {
            return "array" === b.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || g.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || s;
            var r = T.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && N.test(n.replace(k, "@").replace(L, "]").replace(C, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function () { },
        globalEval: function (t) {
            t && b.trim(t) && (e.execScript ||
            function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(A, "ms-").replace(O, M)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e);
            if (n) {
                if (o) {
                    for (; s > i; i++) if (r = t.apply(e[i], n), r === !1) break
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break
            } else if (o) {
                for (; s > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: y && !y.call("﻿ ") ?
        function (e) {
            return null == e ? "" : y.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(S, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (P(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : p.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (v) return v.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if ("number" == typeof r) for (; r > s; s++) e[i++] = n[s];
            else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            for (n = !!n; o > s; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e),
                u = [];
            if (o) for (; s > i; i++) r = t(e[i], i, n), null != r && (u[u.length] = r);
            else for (i in e) r = t(e[i], i, n), null != r && (u[u.length] = r);
            return h.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return "string" == typeof n && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(d.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = null == r;
            if ("object" === b.type(r)) {
                s = !0;
                for (a in r) b.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t && (s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                return l.call(b(e), n)
            })), n)) for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n) if (n = b.Deferred(), "complete" === s.readyState) setTimeout(b.ready);
        else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1);
        else {
            s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
            var r = !1;
            try {
                r = null == e.frameElement && s.documentElement
            } catch (i) { }
            r && r.doScroll &&
            function o() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    D(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }), r = b(s);
    var H = {};
    b.Callbacks = function (e) {
        e = "string" == typeof e ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                for (r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0; a && s > o; o++) if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            },
            c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            b.each(t, function (t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function () {
                    return a && b.each(arguments, function (e, t) {
                        var r;
                        while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1), n && (s >= r && s--, o >= r && o--)
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = r = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, r || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !a || i && !f || (n ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, b.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                ["notify", "progress", b.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, s) {
                                var o = s[0],
                                    u = b.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, b.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = d.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                s = 1 === i ? e : b.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) for (u = Array(r), a = Array(r), f = Array(r) ; r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n), s.promise()
        }
    }), b.support = function () {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== p.className,
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!o.value,
            optSelected: f.selected,
            enctype: !!s.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === s.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip, b(function () {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = s.getElementsByTagName("body")[0];
            a && (n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null)
        }), n = u = a = f = r = o = null, t
    }();
    var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        F = /([A-Z])/g;
    b.extend({
        cache: {},
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !U(e)
        },
        data: function (e, t, n) {
            return I(e, t, n)
        },
        removeData: function (e, t) {
            return q(e, t)
        },
        _data: function (e, t, n) {
            return I(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return q(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, s = this[0],
                o = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = b.data(s), 1 === s.nodeType && !b._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > o; o++) i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                    b._data(s, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                return n === t ? s ? R(s, e, b.data(s, e)) : null : (this.each(function () {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    }), b.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = b._queueHooks(e, t),
                o = function () {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), s.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = b.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (u--) r = b._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var z, W, X = /[\t\r\n]/g,
        V = /\r/g,
        $ = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Q = /^(?:checked|selected)$/i,
        G = b.support.getSetAttribute,
        Y = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) { }
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(E) || []; u > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                s = 0;
                while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = b.trim(r)
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(E) || []; u > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                s = 0;
                while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? b.trim(r) : ""
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var s, o = 0,
                        u = b(this),
                        a = t,
                        f = e.match(E) || [];
                    while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s)
                } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
                var s, o = b(this);
                1 === this.nodeType && (s = i ? e.call(this, n, o.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : b.isArray(s) && (s = b.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s))
            });
            if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = "select-one" === e.type || 0 > i,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = 0 > i ? u : s ? i : 0;
                    for (; u > a; a++) if (n = r[a], !(!n.selected && a !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                        if (t = b(n).val(), s) return t;
                        o.push(t)
                    }
                    return o
                },
                set: function (e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var s, o, u, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === i ? b.prop(e, n, r) : (o = 1 !== a || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z)), r === t ? s && o && "get" in s && null !== (u = s.get(e, n)) ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), null == u ? t : u) : null !== r ? s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(E);
            if (s && 1 === e.nodeType) while (n = s[i++]) r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !b.isXMLDoc(e), o && (n = b.propFix[n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && null !== (i = s.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), W = {
        get: function (e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                s = "boolean" == typeof r ? Y && G ? null != i : Q.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Y && G || (b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), G || (z = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: z.get,
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    b.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
            if (y) {
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), n = (n || "").match(E) || [""], f = n.length;
                while (f--) u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && b.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = a[v]) || (d = a[v] = [], d.delegateCount = 0, c.setup && c.setup.call(e, s, m, h) !== !1 || (e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
            if (m && (l = m.events)) {
                t = (t || "").match(E) || [""], f = t.length;
                while (f--) if (u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                    c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                    while (s--) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                    a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || b.removeEvent(e, p, m.handle), delete l[p])
                } else for (p in l) b.event.remove(e, p + t[f], n, r, !0);
                b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var u, a, f, l, c, h, p, d = [i || s],
                v = g.call(n, "type") ? n.type : n,
                m = g.call(n, "namespace") ? n.namespace.split(".") : [];
            if (f = h = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(v + b.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = 0 > v.indexOf(":") && "on" + v, n = n[b.expando] ? n : new b.Event(v, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), c = b.event.special[v] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !b.isWindow(i)) {
                    for (l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode) ; f; f = f.parentNode) d.push(f), h = f;
                    h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e)
                }
                p = 0;
                while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                if (n.type = v, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === v && b.nodeName(i, "a") || !b.acceptData(i) || !a || !i[v] || b.isWindow(i))) {
                    h = i[a], h && (i[a] = null), b.event.triggered = v;
                    try {
                        i[v]()
                    } catch (y) { }
                    b.event.triggered = t, h && (i[a] = h)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, s, o, u = [],
                a = d.call(arguments),
                f = (b._data(this, "events") || {})[e.type] || [],
                l = b.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = b.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type)) for (; f != this; f = f.parentNode || this) if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                for (s = [], o = 0; a > o; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [f]).length), s[r] && s.push(i);
                s.length && u.push({
                    elem: f,
                    handlers: s
                })
            }
            return n.length > a && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new b.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, u = n.button,
                    a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || u === t || (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function () {
                    if (this !== s.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === s.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = s.removeEventListener ?
    function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function (e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    }, b.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
        b.event.special[t] = {
            setup: function () {
                0 === n++ && s.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && s.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = st;
            else if (!i) return this;
            return 1 === s && (u = i, i = function (e) {
                return b().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = st), this.each(function () {
                b.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }), function (e, t) {
        function rt(e) {
            return J.test(e + "")
        }
        function it() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
            }
        }
        function st(e) {
            return e[w] = !0, e
        }
        function ot(e) {
            var t = c.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }
        function ut(e, t, n, r) {
            var i, s, o, u, a, f, h, v, m, y;
            if ((t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (!p && !r) {
                if (i = K.exec(e)) if (o = i[1]) {
                    if (9 === u) {
                        if (s = t.getElementById(o), !s || !s.parentNode) return n;
                        if (s.id === o) return n.push(s), n
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                } else {
                    if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                    if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                }
                if (S.qsa && !d.test(e)) {
                    if (h = !0, v = w, m = t, y = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                        while (a--) f[a] = v + pt(f[a]);
                        m = $.test(e) && t.parentNode || t, y = f.join(",")
                    }
                    if (y) try {
                        return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                    } catch (b) { } finally {
                        h || t.removeAttribute("id")
                    }
                }
            }
            return Et(e.replace(R, "$1"), t, n, r)
        }
        function at(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function lt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ct(e) {
            return st(function (t) {
                return t = +t, st(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ht(e, t) {
            var n, r, s, o, u, a, f, l = C[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                (!n || (r = U.exec(u))) && (r && (u = u.slice(r[0].length) || u), a.push(s = [])), n = !1, (r = z.exec(u)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in i.filter) !(r = V[o].exec(u)) || f[o] && !(r = f[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
        }
        function pt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }
        function dt(e, t, n) {
            var i = t.dir,
                s = n && "parentNode" === i,
                o = T++;
            return t.first ?
            function (t, n, r) {
                while (t = t[i]) if (1 === t.nodeType || s) return e(t, n, r)
            } : function (t, n, u) {
                var a, f, l, c = x + " " + o;
                if (u) {
                    while (t = t[i]) if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                } else while (t = t[i]) if (1 === t.nodeType || s) if (l = t[w] || (t[w] = {}), (f = l[i]) && f[0] === c) {
                    if ((a = f[1]) === !0 || a === r) return a === !0
                } else if (f = l[i] = [c], f[1] = e(t, n, u) || r, f[1] === !0) return !0
            }
        }
        function vt(e) {
            return e.length > 1 ?
            function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function mt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = null != t;
            for (; a > u; u++) (s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }
        function gt(e, t, n, r, i, s) {
            return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : mt(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = mt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) (c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--) (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--) (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }
        function yt(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                l = dt(function (e) {
                    return e === t
                }, u, !0),
                c = dt(function (e) {
                    return P.call(t, e) > -1
                }, u, !0),
                h = [function (e, n, r) {
                    return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }];
            for (; s > a; a++) if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
            else {
                if (n = i.filter[e[a].type].apply(null, e[a].matches), n[w]) {
                    for (r = ++a; s > r; r++) if (i.relative[e[r].type]) break;
                    return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, r > a && yt(e.slice(a, r)), s > r && yt(e = e.slice(r)), s > r && pt(e))
                }
                h.push(n)
            }
            return vt(h)
        }
        function bt(e, t) {
            var n = 0,
                s = t.length > 0,
                o = e.length > 0,
                u = function (u, a, l, h, p) {
                    var d, v, m, g = [],
                        y = 0,
                        b = "0",
                        w = u && [],
                        E = null != p,
                        S = f,
                        T = u || o && i.find.TAG("*", p && a.parentNode || a),
                        N = x += null == S ? 1 : Math.random() || .1;
                    for (E && (f = a !== c && a, r = n) ; null != (d = T[b]) ; b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++]) if (m(d, a, l)) {
                                h.push(d);
                                break
                            }
                            E && (x = N, r = ++n)
                        }
                        s && ((d = !m && d) && y--, u && w.push(d))
                    }
                    if (y += b, s && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(w, g, a, l);
                        if (u) {
                            if (y > 0) while (b--) w[b] || g[b] || (g[b] = M.call(h));
                            g = mt(g)
                        }
                        _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                    }
                    return E && (x = N, f = S), w
                };
            return s ? st(u) : u
        }
        function wt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; i > r; r++) ut(e, t[r], n);
            return n
        }
        function Et(e, t, n, r) {
            var s, o, a, f, l, c = ht(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !p && i.relative[o[1].type]) {
                    if (t = i.find.ID(a.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                s = V.needsContext.test(e) ? 0 : o.length;
                while (s--) {
                    if (a = o[s], i.relative[f = a.type]) break;
                    if ((l = i.find[f]) && (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(s, 1), e = r.length && pt(o), !e) return _.apply(n, D.call(r, 0)), n;
                        break
                    }
                }
            }
            return u(e, c)(r, t, p, n, $.test(e)), n
        }
        function St() { }
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date),
            E = e.document,
            S = {},
            x = 0,
            T = 0,
            N = it(),
            C = it(),
            k = it(),
            L = typeof t,
            A = 1 << 31,
            O = [],
            M = O.pop,
            _ = O.push,
            D = O.slice,
            P = O.indexOf ||
        function (e) {
            var t = 0,
                n = this.length;
            for (; n > t; t++) if (this[t] === e) return t;
            return -1
        }, H = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", j = B.replace("w", "w#"), F = "([*^$|!~]?=)", I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]", q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)", R = RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), U = RegExp("^" + H + "*," + H + "*"), z = RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"), W = RegExp(q), X = RegExp("^" + j + "$"), V = {
            ID: RegExp("^#(" + B + ")"),
            CLASS: RegExp("^\\.(" + B + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
            TAG: RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + I),
            PSEUDO: RegExp("^" + q),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
            needsContext: RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        }, $ = /[\x20\t\r\n\f]*[+~]/, J = /^[^{]+\{\s*\[native code/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function (e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            D.call(E.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            D = function (e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n
            }
        }
        o = ut.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, l = ut.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : E;
            return n !== c && 9 === n.nodeType && n.documentElement ? (c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), S.attributes = ot(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), S.getByClassName = ot(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), S.getByName = ot(function (e) {
                e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
            }), i.attrHandle = ot(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            }, S.getIdNotName ? (i.find.ID = function (e, t) {
                if (typeof t.getElementById !== L && !p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function (e, n) {
                if (typeof n.getElementById !== L && !p) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = S.tagNameNoComments ?
            function (e, n) {
                return typeof n.getElementsByTagName !== L ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, i.find.NAME = S.getByName &&
            function (e, n) {
                return typeof n.getElementsByName !== L ? n.getElementsByName(name) : t
            }, i.find.CLASS = S.getByClassName &&
            function (e, n) {
                return typeof n.getElementsByClassName === L || p ? t : n.getElementsByClassName(e)
            }, v = [], d = [":focus"], (S.qsa = rt(n.querySelectorAll)) && (ot(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function (e) {
                S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = RegExp(d.join("|")), v = RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ?
            function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, y = h.compareDocumentPosition ?
            function (e, t) {
                var r;
                return e === t ? (a = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    f = [t];
                if (e === t) return a = !0, 0;
                if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                if (s === o) return at(e, t);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = t;
                while (r = r.parentNode) f.unshift(r);
                while (u[i] === f[i]) i++;
                return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
            }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c) : c
        }, ut.matches = function (e, t) {
            return ut(e, null, null, t)
        }, ut.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']"), !(!S.matchesSelector || p || v && v.test(t) || d.test(t))) try {
                var n = m.call(e, t);
                if (n || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) { }
            return ut(t, c, null, [e]).length > 0
        }, ut.contains = function (e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, ut.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, ut.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, ut.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            if (a = !S.detectDuplicates, e.sort(y), a) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, s = ut.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += s(t);
            return n
        }, i = ut.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: V,
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
                ATTR: function (e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ut.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ?
                    function () {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ut.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (1 === c.nodeType && ++h && c === t) {
                                    l[e] = [x, p, h];
                                    break
                                }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                            else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [x, h]), c === t)) break;
                            return h -= i, h === r || 0 === h % r && h / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: st(function (e) {
                    var t = [],
                        n = [],
                        r = u(e.replace(R, "$1"));
                    return r[w] ? st(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--) (s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function (e) {
                    return function (t) {
                        return ut(e, t).length > 0
                    }
                }),
                contains: st(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function (e) {
                    return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) {
                        var n;
                        do
                            if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                header: function (e) {
                    return G.test(e.nodeName)
                },
                input: function (e) {
                    return Q.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ct(function () {
                    return [0]
                }),
                last: ct(function (e, t) {
                    return [t - 1]
                }),
                eq: ct(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ct(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = lt(n);
        u = ut.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = k[e + " "];
            if (!s) {
                t || (t = ht(e)), n = t.length;
                while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = k(e, bt(i, r))
            }
            return s
        }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains
    }(e);
    var ot = /Until$/,
        ut = /^(?:parents|prev(?:Until|All))/,
        at = /^.[^:#\[\.,]*$/,
        ft = b.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ht(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(ht(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(s.length > 1 ? b.unique(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack, b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ct(e, "nextSibling")
        },
        prev: function (e) {
            return ct(e, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return ot.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !b(s).is(r))) 1 === s.nodeType && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        At = pt(s),
        Ot = At.appendChild(s.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = 0;
            for (; null != (n = this[r]) ; r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]) ; t++) {
                1 === e.nodeType && b.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
                if (!("string" != typeof e || St.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && gt.test(e) || Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) { }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = h.apply([], e);
            var i, s, o, u, a, f, l = 0,
                c = this.length,
                p = this,
                d = c - 1,
                v = e[0],
                m = b.isFunction(v);
            if (m || !(1 >= c || "string" != typeof v || b.support.checkClone) && Tt.test(v)) return this.each(function (i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
            });
            if (c && (f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, 1 === f.childNodes.length && (f = i), i)) {
                for (n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length; c > l; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                if (o) for (a = u[u.length - 1].ownerDocument, b.map(u, Dt), l = 0; o > l; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                    url: s.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")));
                f = i = null
            }
            return this
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                s = b(e),
                o = s.length - 1;
            for (; o >= r; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i)
        }
    }), b.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]) ; ++o) r[o] && Bt(i, r[o]);
            if (t) if (n) for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]) ; o++) Ht(i, r[o]);
            else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; c > d; d++) if (s = e[d], s || 0 === s) if ("object" === b.type(s)) b.merge(p, s.nodeType ? [s] : s);
            else if (Et.test(s)) {
                u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0])), !b.support.tbody) {
                    s = "table" !== a || wt.test(s) ? "<table>" !== l[1] || wt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                b.merge(p, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild
            } else p.push(t.createTextNode(s));
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) if ((!r || -1 === b.inArray(s, r)) && (o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u), n)) {
                i = 0;
                while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
            }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, s, o, u = 0,
                a = b.expando,
                f = b.cache,
                c = b.support.deleteExpando,
                h = b.event.special;
            for (; null != (n = e[u]) ; u++) if ((t || b.acceptData(n)) && (s = n[a], o = s && f[s])) {
                if (o.events) for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
            }
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = RegExp("^(" + w + ")(.*)$", "i"),
        Jt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Kt = RegExp("^([+-])=(" + w + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (b.isArray(n)) {
                    for (s = qt(e), i = n.length; i > u; u++) o[n[u]] = b.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = b.camelCase(n),
                    f = e.style;
                if (n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                if (o = typeof r, "string" === o && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || b.cssNumber[a] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                    f[n] = r
                } catch (l) { }
            }
        },
        css: function (e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), "normal" === o && n in Yt && (o = Yt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && ("" !== a || b.contains(e.ownerDocument, e) || (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : s.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return null == a && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), "" === a ? "auto" : a
    }), b.each(["height", "width"], function (e, n) {
        b.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function () {
                    return un(e, n, i)
                }) : un(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && qt(e);
                return sn(e, t, r ? on(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(s.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
            b.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Rt(e, n), Jt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {},
                    s = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (b.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), b.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            s(this.name, this.value)
        });
        else for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, gn, yn = b.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = b.fn.load,
        Ln = {},
        An = {},
        On = "*/".concat("*");
    try {
        gn = o.href
    } catch (Mn) {
        gn = s.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function (e, n, r) {
        if ("string" != typeof e && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), u.length > 0 && b.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function (e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, r, i, s) {
            return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
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
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                2 !== w && (w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r)), e >= 200 && 300 > e || 304 === e ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), 204 === e ? (l = !0, T = "nocontent") : 304 === e ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event,
                d = b.Deferred(),
                v = b.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                w = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e) if (2 > w) for (t in e) m[t] = [m[t], e[t]];
                        else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || S;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            if (d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""], null == c.crossDomain && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), c.data && c.processData && "string" != typeof c.data && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2 === w) return x;
            a = c.global, a && 0 === b.active++ && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && 2 !== w) {
                S = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                if (f = Dn(An, c, n, x)) {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N)
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        N(-1, T)
                    }
                } else N(-1, "No Transport");
                return x
            }
            return x.abort()
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        }
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = s.head || b("head")[0] || s.documentElement;
            return {
                send: function (t, i) {
                    n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jn.pop() || b.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || b.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t
        }), "script") : t
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject &&
    function () {
        var e;
        for (e in In) In[e](t, !0)
    };
    b.ajaxSettings.xhr = e.ActiveXObject ?
    function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !!qn && "withCredentials" in qn, qn = b.support.ajax = !!qn, qn && b.ajaxTransport(function (n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) { }
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || 4 === a.readyState)) if (r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]), i) 4 !== a.readyState && a.abort();
                            else {
                                c = {}, u = a.status, f = a.getAllResponseHeaders(), "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (h) {
                                    l = ""
                                }
                                u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t),
                    s = Jn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    if (n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && u) {
                        u = b.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, b.style(i.elem, e, u + r);
                        while (a !== (a = i.cur() / o) && 1 !== a && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    b.Animation = b.extend(er, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e),
                s = b.speed(t, n, r),
                o = function () {
                    var t = er(this, b.extend({}, e), s);
                    o.finish = function () {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    s = b.timers,
                    o = b._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = b.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now() ; n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Vn || (Vn = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, s = {
            top: 0,
            left: 0
        },
            o = this[0],
            u = o && o.ownerDocument;
        if (u) return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                s = i.offset(),
                o = b.css(e, "top"),
                u = b.css(e, "left"),
                a = ("absolute" === r || "fixed" === r) && b.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + c), null != t.left && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                    r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || s.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function (i) {
            return b.access(this, function (e, i, s) {
                var o = sr(e);
                return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s, t)
            }, e, i, arguments.length, null)
        }
    }), b.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            b.fn[i] = function (i, s) {
                var o = arguments.length && (r || "boolean" != typeof i),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window), function () {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            if (e instanceof x) return e;
            if (!(this instanceof x)) return new x(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
    var T = x.each = x.forEach = function (e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++) if (t.call(r, e[i], i, e) === n) return
        } else for (var o in e) if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !!i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !!i)
    };
    x.contains = x.include = function (e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.where = function (e, t, n) {
        return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function (e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function (e, t) {
        return x.where(e, t, !0)
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity,
            value: -Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity,
            value: Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function (e) {
        return x.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    x.sortBy = function (e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function (e, t, n, r) {
        var i = {},
            s = k(t || x.identity);
        return T(e, function (t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    x.groupBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, x.countBy = function (e, t, n) {
        return L(e, t, n, function (e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function (e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return e == null ? void 0 : t != null && !n ? u.call(e, 0, t) : e[0]
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return e == null ? void 0 : t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return T(e, function (e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, x.union = function () {
        return x.uniq(a.apply(r, arguments))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        var e = u.call(arguments),
            t = x.max(x.pluck(e, "length")),
            n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.object = function (e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++) if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--) if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    }, x.bind = function (e, t) {
        if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
        var n = u.call(arguments, 2);
        return function () {
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function (e) {
        var t = u.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        return t.length === 0 && (t = x.functions(e)), T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity), function () {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t) {
        var n, r, i, s, o = 0,
            u = function () {
                o = new Date, i = null, s = e.apply(n, r)
            };
        return function () {
            var a = new Date,
                f = t - (a - o);
            return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i;
        return function () {
            var s = this,
                o = arguments,
                u = function () {
                    r = null, n || (i = e.apply(s, o))
                },
                a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, x.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E ||
    function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t
    }, x.values = function (e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t
    }, x.pairs = function (e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([n, e[n]]);
        return t
    }, x.invert = function (e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var O = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--) if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if (i == "[object Array]") {
            o = e.length, u = o == t.length;
            if (u) while (o--) if (!(u = O(e[o], t[o], n, r))) break
        } else {
            var a = e.constructor,
                l = t.constructor;
            if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
            for (var c in e) if (x.has(e, c)) {
                o++;
                if (!(u = x.has(t, c) && O(e[c], t[c], n, r))) break
            }
            if (u) {
                for (c in t) if (x.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    x.isEqual = function (e, t) {
        return O(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e) if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w ||
    function (e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !!x.has(e, "callee")
    }), typeof / . / != "function" && (x.isFunction = function (e) {
        return typeof e == "function"
    }), x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function (e) {
        return e === null
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        var r = Array(e);
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = x.invert(M.escape);
    var _ = {
        escape: new RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return t == null ? "" : ("" + t).replace(_[e], function (t) {
                return M[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (e == null) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), j.call(this, n.apply(x, e))
            }
        })
    };
    var D = 0;
    x.uniqueId = function (e) {
        var t = ++D + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/,
        H = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function (t, n, r, i, u) {
            return o += e.slice(s, u).replace(B, function (e) {
                return "\\" + H[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function (e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var j = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], j.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return j.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this), define("underscore", function (e) {
    return function () {
        var t, n;
        return t || e._
    }
}(this)), function () {
    var e = this,
        t = e.Backbone,
        n = [],
        r = n.push,
        i = n.slice,
        s = n.splice,
        o;
    o = "undefined" != typeof exports ? exports : e.Backbone = {}, o.VERSION = "0.9.10";
    var u = e._;
    !u && "undefined" != typeof require && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender, o.noConflict = function () {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = /\s+/,
        f = function (e, t, n, r) {
            if (!n) return !0;
            if ("object" == typeof n) for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
            else {
                if (!a.test(n)) return !0;
                n = n.split(a), i = 0;
                for (var s = n.length; i < s; i++) e[t].apply(e, [n[i]].concat(r))
            }
        },
        l = function (e, t) {
            var n, r = -1,
                i = e.length;
            switch (t.length) {
                case 0:
                    for (; ++r < i;) (n = e[r]).callback.call(n.ctx);
                    break;
                case 1:
                    for (; ++r < i;) (n = e[r]).callback.call(n.ctx, t[0]);
                    break;
                case 2:
                    for (; ++r < i;) (n = e[r]).callback.call(n.ctx, t[0], t[1]);
                    break;
                case 3:
                    for (; ++r < i;) (n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
                    break;
                default:
                    for (; ++r < i;) (n = e[r]).callback.apply(n.ctx, t)
            }
        },
        n = o.Events = {
            on: function (e, t, n) {
                return !f(this, "on", e, [t, n]) || !t ? this : (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                    callback: t,
                    context: n,
                    ctx: n || this
                }), this)
            },
            once: function (e, t, n) {
                if (!f(this, "once", e, [t, n]) || !t) return this;
                var r = this,
                    i = u.once(function () {
                        r.off(e, i), t.apply(this, arguments)
                    });
                return i._callback = t, this.on(e, i, n), this
            },
            off: function (e, t, n) {
                var r, i, s, o, a, l, c, h;
                if (!this._events || !f(this, "off", e, [t, n])) return this;
                if (!e && !t && !n) return this._events = {}, this;
                o = e ? [e] : u.keys(this._events), a = 0;
                for (l = o.length; a < l; a++) if (e = o[a], r = this._events[e]) {
                    s = [];
                    if (t || n) {
                        c = 0;
                        for (h = r.length; c < h; c++) i = r[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && s.push(i)
                    }
                    this._events[e] = s
                }
                return this
            },
            trigger: function (e) {
                if (!this._events) return this;
                var t = i.call(arguments, 1);
                if (!f(this, "trigger", e, t)) return this;
                var n = this._events[e],
                    r = this._events.all;
                return n && l(n, t), r && l(r, arguments), this
            },
            listenTo: function (e, t, n) {
                var r = this._listeners || (this._listeners = {}),
                    i = e._listenerId || (e._listenerId = u.uniqueId("l"));
                return r[i] = e, e.on(t, "object" == typeof t ? this : n, this), this
            },
            stopListening: function (e, t, n) {
                var r = this._listeners;
                if (r) {
                    if (e) e.off(t, "object" == typeof t ? this : n, this), !t && !n && delete r[e._listenerId];
                    else {
                        "object" == typeof t && (n = this);
                        for (var i in r) r[i].off(t, n, this);
                        this._listeners = {}
                    }
                    return this
                }
            }
        };
    n.bind = n.on, n.unbind = n.off, u.extend(o, n);
    var c = o.Model = function (e, t) {
        var n, r = e || {};
        this.cid = u.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r, t) || {});
        if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    u.extend(c.prototype, n, {
        changed: null,
        idAttribute: "id",
        initialize: function () { },
        toJSON: function () {
            return u.clone(this.attributes)
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return u.escape(this.get(e))
        },
        has: function (e) {
            return null != this.get(e)
        },
        set: function (e, t, n) {
            var r, i, s, o, a, f, l;
            if (null == e) return this;
            "object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, o = n.silent, e = [], a = this._changing, this._changing = !0, a || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), l = this.attributes, f = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(l[r], t) || e.push(r), u.isEqual(f[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete l[r] : l[r] = t;
            if (!o) {
                e.length && (this._pending = !0), t = 0;
                for (r = e.length; t < r; t++) this.trigger("change:" + e[t], this, l[e[t]], n)
            }
            if (a) return this;
            if (!o) for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
            return this._changing = this._pending = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {},
                n;
            for (n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return null == e ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes,
                i;
            for (i in e) u.isEqual(r[i], t = e[i]) || ((n || (n = {}))[i] = t);
            return n
        },
        previous: function (e) {
            return null == e || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function () {
            return u.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success;
            return e.success = function (e, n, r) {
                if (!e.set(e.parse(n, r), r)) return !1;
                t && t(e, n, r)
            }, this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var r, i, s = this.attributes;
            return null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, r && (!n || !n.wait) && !this.set(r, n) ? !1 : (n = u.extend({
                validate: !0
            }, n), this._validate(r, n) ? (r && n.wait && (this.attributes = u.extend({}, s, r)), void 0 === n.parse && (n.parse = !0), i = n.success, n.success = function (e, t, n) {
                e.attributes = s;
                var o = e.parse(t, n);
                n.wait && (o = u.extend(r || {}, o));
                if (u.isObject(o) && !e.set(o, n)) return !1;
                i && i(e, t, n)
            }, e = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === e && (n.attrs = r), e = this.sync(e, this, n), r && n.wait && (this.attributes = s), e) : !1)
        },
        destroy: function (e) {
            e = e ? u.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            e.success = function (e, t, i) {
                (i.wait || e.isNew()) && r(), n && n(e, t, i)
            };
            if (this.isNew()) return e.success(this, null, e), !1;
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function () {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || k();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        isValid: function (e) {
            return !this.validate || !this.validate(this.attributes, e)
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, t || {}), !1) : !0
        }
    });
    var h = o.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t))
    };
    u.extend(h.prototype, n, {
        model: c,
        initialize: function () { },
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        add: function (e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, i, o, a, f, l, c, h, p, d;
            c = [], h = t.at, p = this.comparator && null == h && 0 != t.sort, d = u.isString(this.comparator) ? this.comparator : null, n = 0;
            for (i = e.length; n < i; n++) (o = this._prepareModel(a = e[n], t)) ? (f = this.get(o)) ? t.merge && (f.set(a === o ? o.attributes : a, t), p && !l && f.hasChanged(d) && (l = !0)) : (c.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, null != o.id && (this._byId[o.id] = o)) : this.trigger("invalid", this, a, t);
            c.length && (p && (l = !0), this.length += c.length, null != h ? s.apply(this.models, [h, 0].concat(c)) : r.apply(this.models, c)), l && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            n = 0;
            for (i = c.length; n < i; n++) (o = c[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this
        },
        remove: function (e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, r, i, s;
            n = 0;
            for (r = e.length; n < r; n++) if (s = this.get(e[n])) delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s);
            return this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function (e, t) {
            return this.models.slice(e, t)
        },
        get: function (e) {
            if (null != e) return this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e) {
            return u.isEmpty(e) ? [] : this.filter(function (t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        sort: function (e) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function (e) {
            return u.invoke(this.models, "get", e)
        },
        update: function (e, t) {
            t = u.extend({
                add: !0,
                merge: !0,
                remove: !0
            }, t), t.parse && (e = this.parse(e, t));
            var n, r, i, s, o = [],
                a = [],
                f = {};
            u.isArray(e) || (e = e ? [e] : []);
            if (t.add && !t.remove) return this.add(e, t);
            r = 0;
            for (i = e.length; r < i; r++) n = e[r], s = this.get(n), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
            if (t.remove) {
                r = 0;
                for (i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || a.push(n)
            }
            return a.length && this.remove(a, t), o.length && this.add(o, t), this
        },
        reset: function (e, t) {
            t || (t = {}), t.parse && (e = this.parse(e, t));
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success;
            return e.success = function (e, n, r) {
                e[r.update ? "update" : "reset"](n, r), t && t(e, n, r)
            }, this.sync("read", this, e)
        },
        create: function (e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function (e, t, i) {
                i.wait && n.add(e, i), r && r(e, t, i)
            }, e.save(null, t), e
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models.length = 0, this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof c) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : !1
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            ("add" === e || "remove" === e) && n !== this || ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
        },
        sortedIndex: function (e, t, n) {
            t || (t = this.comparator);
            var r = u.isFunction(t) ? t : function (e) {
                return e.get(t)
            };
            return u.sortedIndex(this.models, e, r, n)
        }
    }), u.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "), function (e) {
        h.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    }), u.each(["groupBy", "countBy", "sortBy"], function (e) {
        h.prototype[e] = function (t, n) {
            var r = u.isFunction(t) ? t : function (e) {
                return e.get(t)
            };
            return u[e](this.models, r, n)
        }
    });
    var p = o.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    },
        d = /\((.*?)\)/g,
        v = /(\(\?)?:\w+/g,
        m = /\*\w+/g,
        g = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(p.prototype, n, {
        initialize: function () { },
        route: function (e, t, n) {
            return u.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), o.history.route(e, u.bind(function (r) {
                r = this._extractParameters(e, r), n && n.apply(this, r), this.trigger.apply(this, ["route:" + t].concat(r)), this.trigger("route", t, r), o.history.trigger("route", this, t, r)
            }, this)), this
        },
        navigate: function (e, t) {
            return o.history.navigate(e, t), this
        },
        _bindRoutes: function () {
            if (this.routes) for (var e, t = u.keys(this.routes) ; null != (e = t.pop()) ;) this.route(e, this.routes[e])
        },
        _routeToRegExp: function (e) {
            return e = e.replace(g, "\\$&").replace(d, "(?:$1)?").replace(v, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(m, "(.*?)"), RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            return e.exec(t).slice(1)
        }
    });
    var y = o.History = function () {
        this.handlers = [], u.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    },
        b = /^[#\/]|\s+$/g,
        w = /^\/+|\/+$/g,
        E = /msie [\w.]+/,
        S = /\/$/;
    y.started = !1, u.extend(y.prototype, n, {
        interval: 50,
        getHash: function (e) {
            return (e = (e || this).location.href.match(/#(.*)$/)) ? e[1] : ""
        },
        getFragment: function (e, t) {
            if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(S, "");
                e.indexOf(n) || (e = e.substr(n.length))
            } else e = this.getHash();
            return e.replace(b, "")
        },
        start: function (e) {
            if (y.started) throw Error("Backbone.history has already been started");
            y.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.options.pushState || !this.history || !this.history.pushState), e = this.getFragment();
            var t = document.documentMode,
                t = E.exec(navigator.userAgent.toLowerCase()) && (!t || 7 >= t);
            this.root = ("/" + this.root + "/").replace(w, "/"), t && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !t ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e, e = this.location, t = e.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !t) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && t && e.hash && (this.fragment = this.getHash().replace(b, ""), this.history.replaceState({}, document.title, this.root + this.fragment + e.search));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), y.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe)));
            if (e === this.fragment) return !1;
            this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e);
            return u.any(this.handlers, function (e) {
                if (e.route.test(t)) return e.callback(t), !0
            })
        },
        navigate: function (e, t) {
            if (!y.started) return !1;
            if (!t || !0 === t) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment !== e) {
                this.fragment = e;
                var n = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                t.trigger && this.loadUrl(e)
            }
        },
        _updateHash: function (e, t, n) {
            n ? (n = e.href.replace(/(javascript:|#).*$/, ""), e.replace(n + "#" + t)) : e.hash = "#" + t
        }
    }), o.history = new y;
    var x = o.View = function (e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    },
        T = /^(\S+)\s*(.*)$/,
        N = "model collection el id attributes className tagName events".split(" ");
    u.extend(x.prototype, n, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () { },
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], !1 !== t && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (e || (e = u.result(this, "events"))) {
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    u.isFunction(n) || (n = this[e[t]]);
                    if (!n) throw Error('Method "' + e[t] + '" does not exist');
                    var r = t.match(T),
                        i = r[1],
                        r = r[2],
                        n = u.bind(n, this),
                        i = i + (".delegateEvents" + this.cid);
                    "" === r ? this.$el.on(i, n) : this.$el.on(i, r, n)
                }
            }
        },
        undelegateEvents: function () {
            this.$el.off(".delegateEvents" + this.cid)
        },
        _configure: function (e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, N)), this.options = e
        },
        _ensureElement: function () {
            if (this.el) this.setElement(u.result(this, "el"), !1);
            else {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className")), e = o.$("<" + u.result(this, "tagName") + ">").attr(e), this.setElement(e, !1)
            }
        }
    });
    var C = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.sync = function (e, t, n) {
        var r = C[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || k()), null == n.data && t && ("create" === e || "update" === e || "patch" === e) && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function (e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments)
            }
        }
        "GET" !== i.type && !n.emulateJSON && (i.processData = !1);
        var a = n.success;
        n.success = function (e) {
            a && a(t, e, n), t.trigger("sync", t, e, n)
        };
        var f = n.error;
        return n.error = function (e) {
            f && f(t, e, n), t.trigger("error", t, e, n)
        }, e = n.xhr = o.ajax(u.extend(i, n)), t.trigger("request", t, e, n), e
    }, o.ajax = function () {
        return o.$.ajax.apply(o.$, arguments)
    }, c.extend = h.extend = p.extend = x.extend = y.extend = function (e, t) {
        var n = this,
            r;
        r = e && u.has(e, "constructor") ? e.constructor : function () {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function () {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    var k = function () {
        throw Error('A "url" property or function must be specified')
    }
}.call(this), define("Backbone", ["underscore", "jquery"], function (e) {
    return function () {
        var t, n;
        return t || e.Backbone
    }
}(this)), function (e, t) {
    var n = e.document,
        r;
    r = function () {
        var r = {},
            i = {},
            s = !1,
            o = {
                ENTER: 13,
                ESC: 27,
                SPACE: 32
            },
            u = [],
            a, f, l, c, h, p, d, v, m, g, y, b;
        return i = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<a href="#" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</a>',
                cancel: '<a href="#" class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</a>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        }, b = function () {
            var e, r = n.createElement("fakeelement"),
                i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                };
            for (e in i) if (r.style[e] !== t) return i[e]
        }, a = function (e) {
            return n.getElementById(e)
        }, r = {
            labels: {
                ok: "OK",
                cancel: "Cancel"
            },
            delay: 5e3,
            buttonReverse: !1,
            buttonFocus: "ok",
            transition: t,
            addListeners: function (e) {
                var t = typeof l != "undefined",
                    r = typeof f != "undefined",
                    i = typeof y != "undefined",
                    s = "",
                    u = this,
                    a, h, p, d, v;
                a = function (t) {
                    return typeof t.preventDefault != "undefined" && t.preventDefault(), p(t), typeof y != "undefined" && (s = y.value), typeof e == "function" && (typeof y != "undefined" ? e(!0, s) : e(!0)), !1
                }, h = function (t) {
                    return typeof t.preventDefault != "undefined" && t.preventDefault(), p(t), typeof e == "function" && e(!1), !1
                }, p = function (e) {
                    u.hide(), u.unbind(n.body, "keyup", d), u.unbind(c, "focus", v), i && u.unbind(g, "submit", a), t && u.unbind(l, "click", a), r && u.unbind(f, "click", h)
                }, d = function (e) {
                    var t = e.keyCode;
                    t === o.SPACE && !i && a(e), t === o.ESC && r && h(e)
                }, v = function (e) {
                    i ? y.focus() : r ? f.focus() : l.focus()
                }, this.bind(c, "focus", v), t && this.bind(l, "click", a), r && this.bind(f, "click", h), this.bind(n.body, "keyup", d), i && this.bind(g, "submit", a), typeof this.transition == "undefined" && this.setFocus()
            },
            bind: function (e, t, n) {
                typeof e.addEventListener == "function" ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            handleErrors: function () {
                if (typeof e.onerror != "undefined") {
                    var t = this;
                    return e.onerror = function (e, n, r) {
                        t.error("[" + e + " on line " + r + " of " + n + "]", 0)
                    }, !0
                }
                return !1
            },
            appendButtons: function (e, t) {
                return this.buttonReverse ? t + e : e + t
            },
            build: function (e) {
                var t = "",
                    n = e.type,
                    s = e.message,
                    o = e.cssClass || "";
                t += '<div class="alertify-dialog">', r.buttonFocus === "none" && (t += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), n === "prompt" && (t += '<form id="alertify-form">'), t += '<article class="alertify-inner">', t += i.message.replace("{{message}}", s), n === "prompt" && (t += i.input), t += i.buttons.holder, t += "</article>", n === "prompt" && (t += "</form>"), t += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', t += "</div>";
                switch (n) {
                    case "confirm":
                        t = t.replace("{{buttons}}", this.appendButtons(i.buttons.cancel, i.buttons.ok)), t = t.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case "prompt":
                        t = t.replace("{{buttons}}", this.appendButtons(i.buttons.cancel, i.buttons.submit)), t = t.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case "alert":
                        t = t.replace("{{buttons}}", i.buttons.ok), t = t.replace("{{ok}}", this.labels.ok);
                        break;
                    default:
                }
                return v.className = "alertify alertify-show alertify-" + n + " " + o, d.className = "alertify-cover", t
            },
            close: function (e, t) {
                var n = t && !isNaN(t) ? +t : this.delay,
                    r = this,
                    i, s;
                this.bind(e, "click", function () {
                    i(e)
                }), s = function (e) {
                    e.stopPropagation(), r.unbind(this, r.transition, s), m.removeChild(this), m.hasChildNodes() || (m.className += " alertify-logs-hidden")
                }, i = function (e) {
                    typeof e != "undefined" && e.parentNode === m && (typeof r.transition != "undefined" ? (r.bind(e, r.transition, s), e.className += " alertify-log-hide") : (m.removeChild(e), m.hasChildNodes() || (m.className += " alertify-logs-hidden")))
                };
                if (t === 0) return;
                setTimeout(function () {
                    i(e)
                }, n)
            },
            dialog: function (e, t, r, i, o) {
                p = n.activeElement;
                var a = function () {
                    if (v && v.scrollTop !== null) return;
                    a()
                };
                if (typeof e != "string") throw new Error("message must be a string");
                if (typeof t != "string") throw new Error("type must be a string");
                if (typeof r != "undefined" && typeof r != "function") throw new Error("fn must be a function");
                return typeof this.init == "function" && (this.init(), a()), u.push({
                    type: t,
                    message: e,
                    callback: r,
                    placeholder: i,
                    cssClass: o
                }), s || this.setup(), this
            },
            extend: function (e) {
                if (typeof e != "string") throw new Error("extend method must have exactly one paramter");
                return function (t, n) {
                    return this.log(t, e, n), this
                }
            },
            hide: function () {
                var e, t = this;
                u.splice(0, 1), u.length > 0 ? this.setup() : (s = !1, e = function (n) {
                    n.stopPropagation(), v.className += " alertify-isHidden", t.unbind(v, t.transition, e)
                }, typeof this.transition != "undefined" ? (this.bind(v, this.transition, e), v.className = "alertify alertify-hide alertify-hidden") : v.className = "alertify alertify-hide alertify-hidden alertify-isHidden", d.className = "alertify-cover alertify-cover-hidden", p.focus())
            },
            init: function () {
                n.createElement("nav"), n.createElement("article"), n.createElement("section"), d = n.createElement("div"), d.setAttribute("id", "alertify-cover"), d.className = "alertify-cover alertify-cover-hidden", n.body.appendChild(d), v = n.createElement("section"), v.setAttribute("id", "alertify"), v.className = "alertify alertify-hidden", n.body.appendChild(v), m = n.createElement("section"), m.setAttribute("id", "alertify-logs"), m.className = "alertify-logs alertify-logs-hidden", n.body.appendChild(m), n.body.setAttribute("tabindex", "0"), this.transition = b(), delete this.init
            },
            log: function (e, t, n) {
                var r = function () {
                    if (m && m.scrollTop !== null) return;
                    r()
                };
                return typeof this.init == "function" && (this.init(), r()), m.className = "alertify-logs", this.notify(e, t, n), this
            },
            notify: function (e, t, r) {
                var i = n.createElement("article");
                i.className = "alertify-log" + (typeof t == "string" && t !== "" ? " alertify-log-" + t : ""), i.innerHTML = e, m.insertBefore(i, m.firstChild), setTimeout(function () {
                    i.className = i.className + " alertify-log-show"
                }, 50), this.close(i, r)
            },
            set: function (e) {
                var t;
                if (typeof e != "object" && e instanceof Array) throw new Error("args must be an object");
                for (t in e) e.hasOwnProperty(t) && (this[t] = e[t])
            },
            setFocus: function () {
                y ? (y.focus(), y.select()) : h.focus()
            },
            setup: function () {
                var e = u[0],
                    n = this,
                    i;
                s = !0, i = function (e) {
                    e.stopPropagation(), n.setFocus(), n.unbind(v, n.transition, i)
                }, typeof this.transition != "undefined" && this.bind(v, this.transition, i), v.innerHTML = this.build(e), c = a("alertify-resetFocus"), l = a("alertify-ok") || t, f = a("alertify-cancel") || t, h = r.buttonFocus === "cancel" ? f : r.buttonFocus === "none" ? a("alertify-noneFocus") : l, y = a("alertify-text") || t, g = a("alertify-form") || t, typeof e.placeholder == "string" && e.placeholder !== "" && (y.value = e.placeholder), this.addListeners(e.callback)
            },
            unbind: function (e, t, n) {
                typeof e.removeEventListener == "function" ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }
        }, {
            alert: function (e, t, n) {
                return r.dialog(e, "alert", t, "", n), this
            },
            confirm: function (e, t, n) {
                return r.dialog(e, "confirm", t, "", n), this
            },
            extend: r.extend,
            init: r.init,
            log: function (e, t, n) {
                return r.log(e, t, n), this
            },
            prompt: function (e, t, n, i) {
                return r.dialog(e, "prompt", t, n, i), this
            },
            success: function (e, t) {
                return r.log(e, "success", t), this
            },
            error: function (e, t) {
                return r.log(e, "error", t), this
            },
            set: function (e) {
                r.set(e)
            },
            labels: r.labels,
            debug: r.handleErrors
        }
    }, typeof define == "function" ? define("Alertify", [], function () {
        return new r
    }) : typeof e.alertify == "undefined" && (e.alertify = new r)
}(this), typeof JSON != "object" && (JSON = {}), function () {
    function f(e) {
        return e < 10 ? "0" + e : e
    }
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case "string":
                return quote(a);
            case "number":
                return isFinite(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a) return "null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), define("json2", function () { }), function (e, t) {
    function n(t, n) {
        var r, i;
        if (e.isArray(t)) {
            for (r = t.length - 1; r >= 0; r--) i = t[r], e.type(t) === "object" || e.type(i) === "string" && s.transports[i] || (n.log("Invalid transport: " + i + ", removing it from the transports list."), t.splice(r, 1));
            t.length === 0 && (n.log("No transports remain within the specified transport array."), t = null)
        } else e.type(t) === "object" || s.transports[t] || t === "auto" || (n.log("Invalid transport: " + t.toString()), t = null);
        return t
    }
    function r(e) {
        return e === "http:" ? 80 : e === "https:" ? 443 : void 0
    }
    function i(e, t) {
        return t.match(/:\d+$/) ? t : t + ":" + r(e)
    }
    if (typeof e != "function") throw new Error("SignalR: jQuery not found. Please ensure jQuery is referenced before the SignalR.js file.");
    if (!t.JSON) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
    var s, o, u = t.document.readyState === "complete",
        a = e(t),
        f = {
            onStart: "onStart",
            onStarting: "onStarting",
            onReceived: "onReceived",
            onError: "onError",
            onConnectionSlow: "onConnectionSlow",
            onReconnecting: "onReconnecting",
            onReconnect: "onReconnect",
            onStateChanged: "onStateChanged",
            onDisconnect: "onDisconnect"
        },
        l = function (e, n) {
            if (n !== !1) {
                var r;
                typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + e, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
            }
        },
        c = function (t, n, r) {
            return n === t.state ? (t.state = r, e(t).triggerHandler(f.onStateChanged, [{
                oldState: n,
                newState: r
            }]), !0) : !1
        },
        h = function (e) {
            return e.state === s.connectionState.disconnected
        },
        p = function (e) {
            var n, r;
            e._.configuredStopReconnectingTimeout || (r = function (e) {
                e.log("Couldn't reconnect within the configured timeout (" + e.disconnectTimeout + "ms), disconnecting."), e.stop(!1, !1)
            }, e.reconnecting(function () {
                var e = this;
                e.state === s.connectionState.reconnecting && (n = t.setTimeout(function () {
                    r(e)
                }, e.disconnectTimeout))
            }), e.stateChanged(function (e) {
                e.oldState === s.connectionState.reconnecting && t.clearTimeout(n)
            }), e._.configuredStopReconnectingTimeout = !0)
        };
    s = function (e, t, n) {
        return new s.fn.init(e, t, n)
    }, s.events = f, s.changeState = c, s.isDisconnecting = h, s.connectionState = {
        connecting: 0,
        connected: 1,
        reconnecting: 2,
        disconnected: 4
    }, s.hub = {
        start: function () {
            throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/hubs'></script>.")
        }
    }, a.load(function () {
        u = !0
    }), s.fn = s.prototype = {
        init: function (e, t, n) {
            this.url = e, this.qs = t, this._ = {}, typeof n == "boolean" && (this.logging = n)
        },
        isCrossDomain: function (n, r) {
            var s;
            return (n = e.trim(n), n.indexOf("http") !== 0) ? !1 : (r = r || t.location, s = t.document.createElement("a"), s.href = n, s.protocol + i(s.protocol, s.host) !== r.protocol + i(r.protocol, r.host))
        },
        ajaxDataType: "json",
        logging: !1,
        state: s.connectionState.disconnected,
        keepAliveData: {},
        reconnectDelay: 2e3,
        disconnectTimeout: 3e4,
        keepAliveWarnAt: 2 / 3,
        start: function (r, i) {
            var o = this,
                l = {
                    waitForPageLoad: !0,
                    transport: "auto",
                    jsonp: !1
                },
                h, d = o._deferral || e.Deferred(),
                v = t.document.createElement("a"),
                m;
            if (e.type(r) === "function" ? i = r : e.type(r) === "object" && (e.extend(l, r), e.type(l.callback) === "function" && (i = l.callback)), l.transport = n(l.transport, o), !l.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
            return !u && l.waitForPageLoad === !0 ? (a.load(function () {
                o._deferral = d, o.start(r, i)
            }), d.promise()) : (p(o), c(o, s.connectionState.disconnected, s.connectionState.connecting) === !1) ? (d.resolve(o), d.promise()) : (v.href = o.url, v.protocol && v.protocol !== ":" ? (o.protocol = v.protocol, o.host = v.host, o.baseUrl = v.protocol + "//" + v.host) : (o.protocol = t.document.location.protocol, o.host = t.document.location.host, o.baseUrl = o.protocol + "//" + o.host), o.wsProtocol = o.protocol === "https:" ? "wss://" : "ws://", l.transport === "auto" && l.jsonp === !0 && (l.transport = "longPolling"), this.isCrossDomain(o.url) && (o.log("Auto detected cross domain url."), l.transport === "auto" && (l.transport = ["webSockets", "longPolling"]), l.jsonp || (l.jsonp = !e.support.cors, l.jsonp && o.log("Using jsonp because this browser doesn't support CORS"))), o.ajaxDataType = l.jsonp ? "jsonp" : "json", e(o).bind(f.onStart, function () {
                e.type(i) === "function" && i.call(o), d.resolve(o)
            }), h = function (t, n) {
                if (n = n || 0, n >= t.length) {
                    o.transport || (e(o).triggerHandler(f.onError, "SignalR: No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization."), d.reject("SignalR: No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization."), o.stop());
                    return
                }
                var r = t[n],
                    i = e.type(r) === "object" ? r : s.transports[r];
                if (r.indexOf("_") === 0) {
                    h(t, n + 1);
                    return
                }
                i.start(o, function () {
                    i.supportsKeepAlive && o.keepAliveData.activated && s.transports._logic.monitorKeepAlive(o), o.transport = i, c(o, s.connectionState.connecting, s.connectionState.connected), e(o).triggerHandler(f.onStart), a.unload(function () {
                        o.stop(!1)
                    })
                }, function () {
                    h(t, n + 1)
                })
            }, m = o.url + "/negotiate", m = s.transports._logic.addQs(m, o), o.log("Negotiating with '" + m + "'."), e.ajax({
                url: m,
                global: !1,
                cache: !1,
                type: "GET",
                data: {},
                dataType: o.ajaxDataType,
                error: function (t) {
                    e(o).triggerHandler(f.onError, [t.responseText]), d.reject("SignalR: Error during negotiation request: " + t.responseText), o.stop()
                },
                success: function (t) {
                    var n = o.keepAliveData,
                        r, i;
                    if (o.appRelativeUrl = t.Url, o.id = t.ConnectionId, o.token = t.ConnectionToken, o.webSocketServerUrl = t.WebSocketServerUrl, o.disconnectTimeout = t.DisconnectTimeout * 1e3, t.KeepAliveTimeout ? (n.activated = !0, n.timeout = t.KeepAliveTimeout * 1e3, n.timeoutWarning = n.timeout * o.keepAliveWarnAt, n.checkInterval = (n.timeout - n.timeoutWarning) / 3) : n.activated = !1, !t.ProtocolVersion || t.ProtocolVersion !== "1.2") {
                        e(o).triggerHandler(f.onError, "You are using a version of the client that isn't compatible with the server. Client version 1.2, server version " + t.ProtocolVersion + "."), d.reject("You are using a version of the client that isn't compatible with the server. Client version 1.2, server version " + t.ProtocolVersion + ".");
                        return
                    }
                    e(o).triggerHandler(f.onStarting), r = [], i = [], e.each(s.transports, function (e) {
                        if (e === "webSockets" && !t.TryWebSockets) return !0;
                        i.push(e)
                    }), e.isArray(l.transport) ? e.each(l.transport, function () {
                        var t = this;
                        (e.type(t) === "object" || e.type(t) === "string" && e.inArray("" + t, i) >= 0) && r.push(e.type(t) === "string" ? "" + t : t)
                    }) : e.type(l.transport) === "object" || e.inArray(l.transport, i) >= 0 ? r.push(l.transport) : r = i, h(r)
                }
            }), d.promise())
        },
        starting: function (t) {
            var n = this;
            return e(n).bind(f.onStarting, function () {
                t.call(n)
            }), n
        },
        send: function (e) {
            var t = this;
            if (t.state === s.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
            if (t.state === s.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
            return t.transport.send(t, e), t
        },
        received: function (t) {
            var n = this;
            return e(n).bind(f.onReceived, function (e, r) {
                t.call(n, r)
            }), n
        },
        stateChanged: function (t) {
            var n = this;
            return e(n).bind(f.onStateChanged, function (e, r) {
                t.call(n, r)
            }), n
        },
        error: function (t) {
            var n = this;
            return e(n).bind(f.onError, function (e, r) {
                t.call(n, r)
            }), n
        },
        disconnected: function (t) {
            var n = this;
            return e(n).bind(f.onDisconnect, function () {
                t.call(n)
            }), n
        },
        connectionSlow: function (t) {
            var n = this;
            return e(n).bind(f.onConnectionSlow, function () {
                t.call(n)
            }), n
        },
        reconnecting: function (t) {
            var n = this;
            return e(n).bind(f.onReconnecting, function () {
                t.call(n)
            }), n
        },
        reconnected: function (t) {
            var n = this;
            return e(n).bind(f.onReconnect, function () {
                t.call(n)
            }), n
        },
        stop: function (t, n) {
            var r = this;
            if (r.state !== s.connectionState.disconnected) {
                try {
                    r.transport && (n !== !1 && r.transport.abort(r, t), r.transport.supportsKeepAlive && r.keepAliveData.activated && s.transports._logic.stopMonitoringKeepAlive(r), r.transport.stop(r), r.transport = null), e(r).triggerHandler(f.onDisconnect), delete r.messageId, delete r.groupsToken, delete r.id, delete r._deferral
                } finally {
                    c(r, r.state, s.connectionState.disconnected)
                }
                return r
            }
        },
        log: function (e) {
            l(e, this.logging)
        }
    }, s.fn.init.prototype = s.fn, s.noConflict = function () {
        return e.connection === s && (e.connection = o), s
    }, e.connection && (o = e.connection), e.connection = e.signalR = s
}(window.jQuery, window), function (e, t) {
    function n(s) {
        var o = s.keepAliveData,
            a, f;
        s.state === r.connectionState.connected && (a = new Date, a.setTime(a - o.lastKeepAlive), f = a.getTime(), f >= o.timeout ? (s.log("Keep alive timed out.  Notifying transport that connection has been lost."), s.transport.lostConnection(s)) : f >= o.timeoutWarning ? o.userNotified || (s.log("Keep alive has been missed, connection may be dead/slow."), e(s).triggerHandler(i.onConnectionSlow), o.userNotified = !0) : o.userNotified = !1), o.monitoring && t.setTimeout(function () {
            n(s)
        }, o.checkInterval)
    }
    var r = e.signalR,
        i = e.signalR.events,
        s = e.signalR.changeState;
    r.transports = {}, r.transports._logic = {
        pingServer: function (t, n) {
            var r = n === "webSockets" ? "" : t.baseUrl,
                i = r + t.appRelativeUrl + "/ping",
                s = e.Deferred();
            return i = this.addQs(i, t), e.ajax({
                url: i,
                global: !1,
                cache: !1,
                type: "GET",
                data: {},
                dataType: t.ajaxDataType,
                success: function (e) {
                    e.Response === "pong" ? s.resolve() : s.reject("SignalR: Invalid ping response when pinging server: " + (e.responseText || e.statusText))
                },
                error: function (e) {
                    s.reject("SignalR: Error pinging server: " + (e.responseText || e.statusText))
                }
            }), s.promise()
        },
        addQs: function (t, n) {
            var r = t.indexOf("?") !== -1 ? "&" : "?",
                i;
            if (!n.qs) return t;
            if (typeof n.qs == "object") return t + r + e.param(n.qs);
            if (typeof n.qs == "string") return i = n.qs.charAt(0), (i === "?" || i === "&") && (r = ""), t + r + n.qs;
            throw new Error("Connections query string property must be either a string or object.")
        },
        getUrl: function (e, n, r, i) {
            var s = n === "webSockets" ? "" : e.baseUrl,
                o = s + e.appRelativeUrl,
                u = "transport=" + n + "&connectionToken=" + t.encodeURIComponent(e.token);
            return e.data && (u += "&connectionData=" + t.encodeURIComponent(e.data)), e.groupsToken && (u += "&groupsToken=" + t.encodeURIComponent(e.groupsToken)), r ? (i && (o += "/reconnect"), e.messageId && (u += "&messageId=" + t.encodeURIComponent(e.messageId))) : o += "/connect", o += "?" + u, o = this.addQs(o, e), o + ("&tid=" + Math.floor(Math.random() * 11))
        },
        maximizePersistentResponse: function (e) {
            return {
                MessageId: e.C,
                Messages: e.M,
                Disconnect: typeof e.D != "undefined" ? !0 : !1,
                TimedOut: typeof e.T != "undefined" ? !0 : !1,
                LongPollDelay: e.L,
                GroupsToken: e.G
            }
        },
        updateGroups: function (e, t) {
            t && (e.groupsToken = t)
        },
        ajaxSend: function (n, r) {
            var s = n.url + "/send?transport=" + n.transport.name + "&connectionToken=" + t.encodeURIComponent(n.token);
            return s = this.addQs(s, n), e.ajax({
                url: s,
                global: !1,
                type: n.ajaxDataType === "jsonp" ? "GET" : "POST",
                dataType: n.ajaxDataType,
                data: {
                    data: r
                },
                success: function (t) {
                    t && e(n).triggerHandler(i.onReceived, [t])
                },
                error: function (t, r) {
                    r !== "abort" && r !== "parsererror" && e(n).triggerHandler(i.onError, [t])
                }
            })
        },
        ajaxAbort: function (n, r) {
            if (typeof n.transport != "undefined") {
                r = typeof r == "undefined" ? !0 : r;
                var i = n.url + "/abort?transport=" + n.transport.name + "&connectionToken=" + t.encodeURIComponent(n.token);
                i = this.addQs(i, n), e.ajax({
                    url: i,
                    async: r,
                    timeout: 1e3,
                    global: !1,
                    type: "POST",
                    dataType: n.ajaxDataType,
                    data: {}
                }), n.log("Fired ajax abort async = " + r)
            }
        },
        processMessages: function (t, n) {
            var r, s;
            if (t.transport) {
                if (s = e(t), t.transport.supportsKeepAlive && t.keepAliveData.activated && this.updateKeepAlive(t), !n) return;
                if (r = this.maximizePersistentResponse(n), r.Disconnect) {
                    t.log("Disconnect command received from server"), t.stop(!1, !1);
                    return
                }
                this.updateGroups(t, r.GroupsToken), r.Messages && e.each(r.Messages, function () {
                    s.triggerHandler(i.onReceived, [this])
                }), r.MessageId && (t.messageId = r.MessageId)
            }
        },
        monitorKeepAlive: function (t) {
            var r = t.keepAliveData,
                s = this;
            r.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored") : (r.monitoring = !0, s.updateKeepAlive(t), t.keepAliveData.reconnectKeepAliveUpdate = function () {
                s.updateKeepAlive(t)
            }, e(t).bind(i.onReconnect, t.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + r.timeoutWarning + " and a connection lost timeout of " + r.timeout), n(t))
        },
        stopMonitoringKeepAlive: function (t) {
            var n = t.keepAliveData;
            n.monitoring && (n.monitoring = !1, e(t).unbind(i.onReconnect, t.keepAliveData.reconnectKeepAliveUpdate), t.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive"))
        },
        updateKeepAlive: function (e) {
            e.keepAliveData.lastKeepAlive = new Date
        },
        ensureReconnectingState: function (t) {
            return s(t, r.connectionState.connected, r.connectionState.reconnecting) === !0 && e(t).triggerHandler(i.onReconnecting), t.state === r.connectionState.reconnecting
        },
        foreverFrame: {
            count: 0,
            connections: {}
        }
    }
}(window.jQuery, window), function (e, t) {
    var n = e.signalR,
        r = e.signalR.events,
        i = e.signalR.changeState,
        s = n.transports._logic;
    n.transports.webSockets = {
        name: "webSockets",
        supportsKeepAlive: !0,
        attemptingReconnect: !1,
        currentSocketID: 0,
        send: function (e, t) {
            e.socket.send(t)
        },
        start: function (o, a, l) {
            var c, h = !1,
                p = this,
                d = !a,
                v = e(o);
            if (!t.WebSocket) {
                l();
                return
            }
            o.socket || (c = o.webSocketServerUrl ? o.webSocketServerUrl : o.wsProtocol + o.host, c += s.getUrl(o, this.name, d), o.log("Connecting to websocket endpoint '" + c + "'"), o.socket = new t.WebSocket(c), o.socket.ID = ++p.currentSocketID, o.socket.onopen = function () {
                h = !0, o.log("Websocket opened"), p.attemptingReconnect && (p.attemptingReconnect = !1), a ? a() : i(o, n.connectionState.reconnecting, n.connectionState.connected) === !0 && v.triggerHandler(r.onReconnect)
            }, o.socket.onclose = function (t) {
                if (this.ID === p.currentSocketID) {
                    if (!h) {
                        l ? l() : d && p.reconnect(o);
                        return
                    }
                    typeof t.wasClean != "undefined" && t.wasClean === !1 ? (e(o).triggerHandler(r.onError, [t.reason]), o.log("Unclean disconnect from websocket." + t.reason)) : o.log("Websocket closed"), p.reconnect(o)
                }
            }, o.socket.onmessage = function (n) {
                var i = t.JSON.parse(n.data),
                    a = e(o);
                i && (e.isEmptyObject(i) || i.M ? s.processMessages(o, i) : a.triggerHandler(r.onReceived, [i]))
            })
        },
        reconnect: function (e) {
            var r = this;
            e.state !== n.connectionState.disconnected && (r.attemptingReconnect || (r.attemptingReconnect = !0), t.setTimeout(function () {
                r.attemptingReconnect && r.stop(e), s.ensureReconnectingState(e) && (e.log("Websocket reconnecting"), r.start(e))
            }, e.reconnectDelay))
        },
        lostConnection: function (e) {
            this.reconnect(e)
        },
        stop: function (e) {
            e.socket !== null && (e.log("Closing the Websocket"), e.socket.close(), e.socket = null)
        },
        abort: function () { }
    }
}(window.jQuery, window), function (e, t) {
    var n = e.signalR,
        r = e.signalR.events,
        i = e.signalR.changeState,
        s = n.transports._logic;
    n.transports.serverSentEvents = {
        name: "serverSentEvents",
        supportsKeepAlive: !0,
        reconnectTimeout: !1,
        currentEventSourceID: 0,
        timeOut: 3e3,
        start: function (o, a, l) {
            var c = this,
                h = !1,
                p = e(o),
                d = !a,
                v, m;
            if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) {
                l && (o.log("This browser doesn't support SSE."), l());
                return
            }
            v = s.getUrl(o, this.name, d);
            try {
                o.log("Attempting to connect to SSE endpoint '" + v + "'"), o.eventSource = new t.EventSource(v), o.eventSource.ID = ++c.currentEventSourceID
            } catch (g) {
                o.log("EventSource failed trying to connect with error " + g.Message), l ? l() : (p.triggerHandler(r.onError, [g]), d && c.reconnect(o));
                return
            }
            m = t.setTimeout(function () {
                h === !1 && (o.log("EventSource timed out trying to connect"), o.log("EventSource readyState: " + o.eventSource.readyState), d || c.stop(o), d ? o.eventSource.readyState !== t.EventSource.CONNECTING && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o) : l && l())
            }, c.timeOut), o.eventSource.addEventListener("open", function () {
                o.log("EventSource connected"), m && t.clearTimeout(m), c.reconnectTimeout && t.clearTimeout(c.reconnectTimeout), h === !1 && (h = !0, a ? a() : i(o, n.connectionState.reconnecting, n.connectionState.connected) === !0 && p.triggerHandler(r.onReconnect))
            }, !1), o.eventSource.addEventListener("message", function (e) {
                e.data !== "initialized" && s.processMessages(o, t.JSON.parse(e.data))
            }, !1), o.eventSource.addEventListener("error", function (e) {
                if (this.ID === c.currentEventSourceID) {
                    if (!h) {
                        l && l();
                        return
                    }
                    o.log("EventSource readyState: " + o.eventSource.readyState), e.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending"), c.reconnect(o)) : (o.log("EventSource error"), p.triggerHandler(r.onError))
                }
            }, !1)
        },
        reconnect: function (e) {
            var n = this;
            n.reconnectTimeout = t.setTimeout(function () {
                n.stop(e), s.ensureReconnectingState(e) && (e.log("EventSource reconnecting"), n.start(e))
            }, e.reconnectDelay)
        },
        lostConnection: function (e) {
            this.reconnect(e)
        },
        send: function (e, t) {
            s.ajaxSend(e, t)
        },
        stop: function (e) {
            e && e.eventSource && (e.log("EventSource calling close()"), e.eventSource.ID = null, e.eventSource.close(), e.eventSource = null, delete e.eventSource)
        },
        abort: function (e, t) {
            s.ajaxAbort(e, t)
        }
    }
}(window.jQuery, window), function (e, t) {
    var n = e.signalR,
        r = e.signalR.events,
        i = e.signalR.changeState,
        s = n.transports._logic;
    n.transports.foreverFrame = {
        name: "foreverFrame",
        supportsKeepAlive: !0,
        timeOut: 3e3,
        start: function (n, r, i) {
            var o = this,
                u = s.foreverFrame.count += 1,
                a, f = e("<iframe data-signalr-connection-id='" + n.id + "' style='position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;' src=''></iframe>");
            if (t.EventSource) {
                i && (n.log("This browser supports SSE, skipping Forever Frame."), i());
                return
            }
            a = s.getUrl(n, this.name), a += "&frameId=" + u, e("body").append(f), f.prop("src", a), s.foreverFrame.connections[u] = n, n.log("Binding to iframe's readystatechange event."), f.bind("readystatechange", function () {
                e.inArray(this.readyState, ["loaded", "complete"]) >= 0 && (n.log("Forever frame iframe readyState changed to " + this.readyState + ", reconnecting"), o.reconnect(n))
            }), n.frame = f[0], n.frameId = u, r && (n.onSuccess = r), t.setTimeout(function () {
                n.onSuccess && (n.log("Failed to connect using forever frame source, it timed out after " + o.timeOut + "ms."), o.stop(n), i && i())
            }, o.timeOut)
        },
        reconnect: function (e) {
            var n = this;
            t.setTimeout(function () {
                if (e.frame && s.ensureReconnectingState(e)) {
                    var t = e.frame,
                        r = s.getUrl(e, n.name, !0) + "&frameId=" + e.frameId;
                    e.log("Updating iframe src to '" + r + "'."), t.src = r
                }
            }, e.reconnectDelay)
        },
        lostConnection: function (e) {
            this.reconnect(e)
        },
        send: function (e, t) {
            s.ajaxSend(e, t)
        },
        receive: function (t, n) {
            var r;
            s.processMessages(t, n), t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > 50 && (t.frameMessageCount = 0, r = t.frame.contentWindow || t.frame.contentDocument, r && r.document && e("body", r.document).empty())
        },
        stop: function (t) {
            var n = null;
            if (t.frame) {
                if (t.frame.stop) t.frame.stop();
                else try {
                    n = t.frame.contentWindow || t.frame.contentDocument, n.document && n.document.execCommand && n.document.execCommand("Stop")
                } catch (r) {
                    t.log("SignalR: Error occured when stopping foreverFrame transport. Message = " + r.message)
                }
                e(t.frame).remove(), delete s.foreverFrame.connections[t.frameId], t.frame = null, t.frameId = null, delete t.frame, delete t.frameId, t.log("Stopping forever frame")
            }
        },
        abort: function (e, t) {
            s.ajaxAbort(e, t)
        },
        getConnection: function (e) {
            return s.foreverFrame.connections[e]
        },
        started: function (t) {
            t.onSuccess ? (t.onSuccess(), t.onSuccess = null, delete t.onSuccess) : i(t, n.connectionState.reconnecting, n.connectionState.connected) === !0 && e(t).triggerHandler(r.onReconnect)
        }
    }
}(window.jQuery, window), function (e, t) {
    var n = e.signalR,
        r = e.signalR.events,
        i = e.signalR.changeState,
        s = e.signalR.isDisconnecting,
        o = n.transports._logic;
    n.transports.longPolling = {
        name: "longPolling",
        supportsKeepAlive: !1,
        reconnectDelay: 3e3,
        init: function (e, n) {
            var r = this,
                i, a = function (n) {
                    s(e) === !1 && (e.log("SignalR: Server ping failed because '" + n + "', re-trying ping."), t.setTimeout(i, r.reconnectDelay))
                };
            e.log("SignalR: Initializing long polling connection with server."), i = function () {
                o.pingServer(e, r.name).done(n).fail(a)
            }, i()
        },
        start: function (a, l) {
            var c = this,
                h = !1,
                p = function () {
                    h || (h = !0, l(), a.log("Longpolling connected"))
                };
            a.pollXhr && (a.log("Polling xhr requests already exists, aborting."), a.stop()), c.init(a, function () {
                a.messageId = null, t.setTimeout(function () {
                    (function l(h, d) {
                        var v = h.messageId,
                            m = v === null,
                            g = !m,
                            y = o.getUrl(h, c.name, g, d);
                        s(h) !== !0 && (a.log("Attempting to connect to '" + y + "' using longPolling."), h.pollXhr = e.ajax({
                            url: y,
                            global: !1,
                            cache: !1,
                            type: "GET",
                            dataType: a.ajaxDataType,
                            success: function (n) {
                                var r = 0,
                                    i;
                                (p(), n && (i = o.maximizePersistentResponse(n)), o.processMessages(h, n), i && e.type(i.LongPollDelay) === "number" && (r = i.LongPollDelay), i && i.Disconnect) || s(h) !== !0 && (r > 0 ? t.setTimeout(function () {
                                    l(h, !1)
                                }, r) : l(h, !1))
                            },
                            error: function (t, i) {
                                if (i === "abort") {
                                    a.log("Aborted xhr requst.");
                                    return
                                }
                                a.state !== n.connectionState.reconnecting && (a.log("An error occurred using longPolling. Status = " + i + ". " + t.responseText), e(h).triggerHandler(r.onError, [t.responseText])), o.ensureReconnectingState(h), c.init(h, function () {
                                    l(h, !0)
                                })
                            }
                        }), g && d === !0 && i(a, n.connectionState.reconnecting, n.connectionState.connected) === !0 && (a.log("Raising the reconnect event"), e(h).triggerHandler(r.onReconnect)))
                    })(a), t.setTimeout(function () {
                        p()
                    }, 250)
                }, 250)
            })
        },
        lostConnection: function () {
            throw new Error("Lost Connection not handled for LongPolling")
        },
        send: function (e, t) {
            o.ajaxSend(e, t)
        },
        stop: function (e) {
            e.pollXhr && (e.pollXhr.abort(), e.pollXhr = null, delete e.pollXhr)
        },
        abort: function (e, t) {
            o.ajaxAbort(e, t)
        }
    }
}(window.jQuery, window), function (e, t) {
    function n(e) {
        return e + f
    }
    function r(t) {
        return e.isFunction(t) ? null : e.type(t) === "undefined" ? null : t
    }
    function i(e) {
        for (var t in e) if (e.hasOwnProperty(t)) return !0;
        return !1
    }
    function s(e, t) {
        return new s.fn.init(e, t)
    }
    function o(t, n) {
        var r = {
            qs: null,
            logging: !1,
            useDefaultPath: !0
        };
        return e.extend(r, n), (!t || r.useDefaultPath) && (t = (t || "") + "/signalr"), new o.fn.init(t, r)
    }
    var u = 0,
        a = {},
        f = ".hubProxy";
    Array.prototype.hasOwnProperty("map") || (Array.prototype.map = function (e, t) {
        for (var n = this, r = n.length, i = [], s = 0; s < r; s += 1) n.hasOwnProperty(s) && (i[s] = e.call(t, n[s], s, n));
        return i
    }), s.fn = s.prototype = {
        init: function (e, t) {
            this.state = {}, this.connection = e, this.hubName = t, this._ = {
                callbackMap: {}
            }
        },
        hasSubscriptions: function () {
            return i(this._.callbackMap)
        },
        on: function (t, r) {
            var i = this,
                s = i._.callbackMap;
            return t = t.toLowerCase(), s[t] || (s[t] = {}), s[t][r] = function (e, t) {
                r.apply(i, t)
            }, e(i).bind(n(t), s[t][r]), i
        },
        off: function (t, r) {
            var s = this,
                o = s._.callbackMap,
                u;
            return t = t.toLowerCase(), u = o[t], u && (u[r] ? (e(s).unbind(n(t), u[r]), delete u[r], i(u) || delete o[t]) : r || (e(s).unbind(n(t)), delete o[t])), s
        },
        invoke: function (n) {
            var i = this,
                s = e.makeArray(arguments).slice(1),
                o = s.map(r),
                f = {
                    H: i.hubName,
                    M: n,
                    A: o,
                    I: u
                },
                l = e.Deferred(),
                c = function (t) {
                    var n = i._maximizeHubResponse(t);
                    e.extend(i.state, n.State), n.Error ? (n.StackTrace && i.connection.log(n.Error + "\n" + n.StackTrace), l.rejectWith(i, [n.Error])) : l.resolveWith(i, [n.Result])
                };
            return a[u.toString()] = {
                scope: i,
                method: c
            }, u += 1, e.isEmptyObject(i.state) || (f.S = i.state), i.connection.send(t.JSON.stringify(f)), l.promise()
        },
        _maximizeHubResponse: function (e) {
            return {
                State: e.S,
                Result: e.R,
                Id: e.I,
                Error: e.E,
                StackTrace: e.T
            }
        }
    }, s.fn.init.prototype = s.fn, o.fn = o.prototype = e.connection(), o.fn.init = function (t, r) {
        var i = {
            qs: null,
            logging: !1,
            useDefaultPath: !0
        },
            s = this;
        e.extend(i, r), e.signalR.fn.init.call(s, t, i.qs, i.logging), s.proxies = {}, s.received(function (t) {
            var r, i, o, u, f, l;
            t && (typeof t.I != "undefined" ? (o = t.I.toString(), u = a[o], u && (a[o] = null, delete a[o], u.method.call(u.scope, t))) : (r = this._maximizeClientHubInvocation(t), s.log("Triggering client hub event '" + r.Method + "' on hub '" + r.Hub + "'."), f = r.Hub.toLowerCase(), l = r.Method.toLowerCase(), i = this.proxies[f], e.extend(i.state, r.State), e(i).triggerHandler(n(l), [r.Args])))
        })
    }, o.fn._maximizeClientHubInvocation = function (e) {
        return {
            Hub: e.H,
            Method: e.M,
            Args: e.A,
            State: e.S
        }
    }, o.fn._registerSubscribedHubs = function () {
        this._subscribedToHubs || (this._subscribedToHubs = !0, this.starting(function () {
            var n = [];
            e.each(this.proxies, function (e) {
                this.hasSubscriptions() && n.push({
                    name: e
                })
            }), this.data = t.JSON.stringify(n)
        }))
    }, o.fn.createHubProxy = function (e) {
        e = e.toLowerCase();
        var t = this.proxies[e];
        return t || (t = s(this, e), this.proxies[e] = t), this._registerSubscribedHubs(), t
    }, o.fn.init.prototype = o.fn, e.hubConnection = o
}(window.jQuery, window), function (e) {
    e.signalR.version = "1.0.1"
}(window.jQuery), define("SignalR", ["jquery", "json2"], function () { }), define("importNotifier", ["Alertify", "jquery", "json2", "SignalR", "SignalRHubs"], function (e) {
    var t = function () {
        var t = $("html");
        if (t.hasClass("lte8")) return;
        if (t.find("body").attr("data-import-mode-enabled") !== "true") return;
        var n = $.connection.importer;
        n.client.alertUsersStarted = function () {
            e.error("data import started - some pages may be inaccessable")
        }, n.client.alertUsersComplete = function () {
            e.success("data import complete")
        }, n.client.importInProgress = function (t) {
            t && e.error("data import in progress - some pages may be inaccessable")
        }, $.connection.hub.start({
            waitForPageLoad: !1
        }, function () {
            n.server.checkImportStatus()
        })
    };
    return {
        init: t
    }
});
if (!window.YT) var YT = {};
YT.Player ||
function () {
    var e = "http://s.ytimg.com/yts/jsbin/www-widgetapi-vflXiNhG3.js",
        t = document.createElement("script");
    t.src = e, t.async = !0;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n), YT.embed_template = '<iframe width="425" height="344" src="" frameborder="0" allowfullscreen></iframe>'
}(), define("youtubeapi", function () { }), define("AppModel", ["jquery", "underscore", "Backbone"], function (e, t, n) {
    var r = n.Model.extend({
        FLIP: "notification_flip",
        FLIP_COMPLETE: "notification_flip_complete",
        NAV_FOLD_UPDATE: "notification_nav_fold_update",
        FLIP_CONTENT_LOAD_COMPLETE: "notification_flip_content_load_complete",
        ABOUT: "show-about",
        DISCOVER: "show-discover",
        MAX_WIDTH: 1600,
        initialize: function () {
            this.set("html", e("html")), this.set("document", e(document)), this.set("win", e(window)), this.set("body", e("body")), this.set("container", e(".container")), this.set("containerBody", e(".body")), this.set("nav", e("#navigation-main")), this.set("youTubeAPILoaded", !1), this.set("section", null), this.initDevMode()
        },
        initDevMode: function () {
            //require(["importNotifier"], function (e) {
            //    e.init()
            //})
        },
        getScrollPosition: function () {
            return window.pageYOffset || Math.max(this.get("html").scrollTop(), document.body.scrollTop)
        },
        loadYouTubeAPI: function () {
            if (!this.get("youTubeAPILoaded")) {
                var e = this;
                require(["youtubeapi"], function () {
                    window.onYouTubeIframeAPIReady = function () {
                        e.set("youTubeAPILoaded", !0), e.get("win").trigger("WacomYouTubeIframeAPIReady")
                    }
                })
            } else this.get("win").trigger("WacomYouTubeIframeAPIReady")
        },
        setSection: function () {
            var e = this.get("nav").hasClass(this.ABOUT) ? this.ABOUT : this.DISCOVER;
            this.set("section", e)
        },
        isCanvasSupported: function () {
            var e = document.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        },
        isTransformSupported: function () {
            return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style
        }
    });
    return new r
}), define("Modules/notification-dispatcher", [], function () {
    function t(t, r, i) {
        n(t, r) || e.push({
            destroyOnUse: i,
            handler: r,
            type: t
        })
    }
    function n(t, n) {
        var r = {};
        for (var i = 0, s = e.length; i < s; i += 1) {
            r = e[i];
            if (t === r.type && n === r.handler) return !0
        }
        return !1
    }
    function r(t, n) {
        var r = {};
        for (var i = 0, s = e.length; i < s; i += 1) {
            r = e[i];
            if (t === r.type && n === r.handler) {
                e.splice(i, 1);
                return
            }
        }
    }
    function i(t, n) {
        var i = {},
            s;
        for (var o = e.length - 1; o >= 0; o -= 1) i = e[o], t === i.type && (s = i.handler, i.destroyOnUse && r(i.type, i.handler), s(n))
    }
    var e = [];
    return {
        sendNotification: function (e, t) {
            i(e, t)
        },
        addListener: function (e, n, r) {
            r !== !0 && (r = !1), t(e, n, r)
        },
        removeListener: function (e, t) {
            r(e, t)
        },
        OVERLAY_SHOW: "OVERLAY_SHOW",
        OVERLAY_CONTENT_CLOSE: "OVERLAY_CONTENT_CLOSE",
        CONTENT_LOADED: "CONTENT_LOADED",
        REGION_MAP_CLOSE: "REGION_MAP_CLOSE",
        URL_STATECHANGE: "URL_STATECHANGE",
        TILES_LOADED: "TILES_LOADED"
    }
}), define("Modules/fadeovercontent", ["Modules/notification-dispatcher"], function (e) {
    var t = function (e) {
        this.windowHeight = this.getOverlaySize();
        var t = e ? e : {};
        this.init(t)
    };
    return t.prototype.init = function (e) {
        this.elementName = e.elementname || "wacom-overlay", this.overlayColor = e.color || "#000", this.overlayOpacity = e.opacity || .8
    }, t.prototype.addEvents = function () {
        var t = this;
        t.element.on("click", function () {
            e.sendNotification(e.OVERLAY_CONTENT_CLOSE)
        }), e.addListener(e.OVERLAY_HIDE, function () {
            t.close()
        }), e.addListener(e.CONTENT_LOADED, function () {
            $(".overlay .loading-icon").remove()
        })
    }, t.prototype.open = function (e, t) {
        var n = this;
        n.tempPos = $(window).scrollTop();
        var r = $(".container").width();
        $("body").addClass("overlay-active"), t ? markup = "<div class='overlay'><div class='loading-icon'></div>" : markup = "<div class='overlay'></div>", $(".container").append(markup).css({
            top: "-" + n.tempPos + "px",
            width: r
        }), $(".overlay").delay(1).animate({
            opacity: .8
        }, 500, function () {
            e && e.apply()
        }), n.element = $(".overlay"), n.addEvents()
    }, t.prototype.close = function () {
        var e = this;
        e.element.animate({
            opacity: 0
        }, 300, function () {
            e.element.remove(), $("body").removeClass("overlay-active").find(".container").css({
                top: 0,
                width: "100%"
            }), $(window).scrollTop(e.tempPos)
        })
    }, t.prototype.getOverlaySize = function () {
        return $(window).height()
    }, t
}), define("Modules/getContentViaAjax", [], function () {
    var e = function (e) {
        var t = this;
        if (e.contentUrl === null || e.contentUrl === "") return;
        this.options = e, this.contentUrl = e.contentUrl, $.ajax({
            url: t.contentUrl,
            dataType: "text",
            beforeSend: function () {
                t.options.onBefore && t.options.onBefore()
            }
        }).error(function () {
            t.options.onError && t.onError()
        }).success(function (e, n, r) {
            t.options.onSuccess && t.options.onSuccess(e)
        }).complete(function () {
            t.options.onComplete && t.options.onComplete()
        })
    };
    return e
}), window.JSON || (window.JSON = {}), function () {
    function f(e) {
        return e < 10 ? "0" + e : e
    }
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case "string":
                return quote(a);
            case "number":
                return isFinite(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a) return "null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1) r = rep[n], typeof r == "string" && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else for (r in a) Object.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    "use strict", typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var JSON = window.JSON,
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object") for (n in i) Object.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (e, t) {
    var n = e.History = e.History || {},
        r = e.jQuery;
    if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        bind: function (e, t, n) {
            r(e).bind(t, n)
        },
        trigger: function (e, t, n) {
            r(e).trigger(t, n)
        },
        extractEventData: function (e, n, r) {
            var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
            return i
        },
        onDomLoad: function (e) {
            r(e)
        }
    }, typeof n.init != "undefined" && n.init()
}(window), function (e, t) {
    var n = e.document,
        r = e.setTimeout || r,
        i = e.clearTimeout || i,
        s = e.setInterval || s,
        o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function () {
        if (typeof o.initHtml4.initialized != "undefined") return !1;
        o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (e) {
            var t = o.getHashByIndex(),
                n;
            return n = e === t, n
        }, o.saveHash = function (e) {
            return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
        }, o.getHashByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (e, t, n) {
            var r = o.getHashByState(e),
                i;
            return i = {
                discardedState: e,
                backState: n,
                forwardState: t
            }, o.discardedStates[r] = i, !0
        }, o.discardHash = function (e, t, n) {
            var r = {
                discardedHash: e,
                backState: n,
                forwardState: t
            };
            return o.discardedHashes[e] = r, !0
        }, o.discardedState = function (e) {
            var t = o.getHashByState(e),
                n;
            return n = o.discardedStates[t] || !1, n
        }, o.discardedHash = function (e) {
            var t = o.discardedHashes[e] || !1;
            return t
        }, o.recycleState = function (e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t], !0
        }, o.emulated.hashChange && (o.hashChangeInit = function () {
            o.checkerFunction = null;
            var t = "",
                r, i, u, l;
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", l = !1, o.checkerFunction = function () {
                if (l) return !1;
                l = !0;
                var n = o.getHash() || "",
                    r = o.unescapeHash(i.contentWindow.document.location.hash) || "";
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, o.setHash(r, !1)), l = !1, !0
            }) : o.checkerFunction = function () {
                var n = o.getHash();
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (t) {
            var r = t && t.newURL || n.location.href,
                i = o.getHashByUrl(r),
                s = null,
                u = null,
                f = null,
                l;
            return o.isLastHash(i) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(i), i && o.isTraditionalAnchor(i) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (s = o.extractState(o.getFullUrl(i || n.location.href, !1), !0), o.isLastSavedState(s) ? (o.busy(!1), !1) : (u = o.getHashByState(s), l = o.discardedState(s), l ? (o.getHashByIndex(-2) === o.getHashByState(l.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(s.data, s.title, s.url, !1), !0))))
        }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function (t, r, i, s) {
            if (o.getHashByUrl(i)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (s !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.pushState,
                args: arguments,
                queue: s
            }), !1;
            o.busy(!0);
            var u = o.createStateObject(t, r, i),
                f = o.getHashByState(u),
                l = o.getState(!1),
                h = o.getHashByState(l),
                p = o.getHash();
            return o.storeState(u), o.expectedStateId = u.id, o.recycleState(u), o.setTitle(u), f === h ? (o.busy(!1), !1) : f !== p && f !== o.getShortUrl(n.location.href) ? (o.setHash(f, !1), !1) : (o.saveState(u), o.Adapter.trigger(e, "statechange"), o.busy(!1), !0)
        }, o.replaceState = function (e, t, n, r) {
            if (o.getHashByUrl(n)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (r !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.replaceState,
                args: arguments,
                queue: r
            }), !1;
            o.busy(!0);
            var i = o.createStateObject(e, t, n),
                s = o.getState(!1),
                u = o.getStateByIndex(-2);
            return o.discardState(s, i, u), o.pushState(i.data, i.title, i.url, !1), !0
        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
            o.Adapter.trigger(e, "hashchange")
        })
    }, typeof o.init != "undefined" && o.init()
}(window), function (e, t) {
    var n = e.console || t,
        r = e.document,
        i = e.navigator,
        s = e.sessionStorage || !1,
        o = e.setTimeout,
        u = e.clearTimeout,
        a = e.setInterval,
        f = e.clearInterval,
        l = e.JSON,
        c = e.alert,
        h = e.History = e.History || {},
        p = e.history;
    l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
    h.init = function () {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    }, h.initCore = function () {
        if (typeof h.initCore.initialized != "undefined") return !1;
        h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.intervalList = [], h.clearAllIntervals = function () {
            var e, t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++) f(t[e]);
                h.intervalList = null
            }
        }, h.debug = function () {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        }, h.log = function () {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                t = r.getElementById("log"),
                i, s, o, u, a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined") try {
                    a = l.stringify(a)
                } catch (f) { }
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        }, h.getInternetExplorerMajorVersion = function () {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                var e = 3,
                    t = r.createElement("div"),
                    n = t.getElementsByTagName("i");
                while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                return e > 4 ? e : !1
            }();
            return e
        }, h.isInternetExplorer = function () {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        }, h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        }, h.enabled = !h.emulated.pushState, h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        }, h.isEmptyObject = function (e) {
            for (var t in e) return !1;
            return !0
        }, h.cloneObject = function (e) {
            var t, n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        }, h.getRootUrl = function () {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ":" + r.location.port;
            return e += "/", e
        }, h.getBaseHref = function () {
            var e = r.getElementsByTagName("base"),
                t = null,
                n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        }, h.getBaseUrl = function () {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        }, h.getPageUrl = function () {
            var e = h.getState(!1, !1),
                t = (e || {}).url || r.location.href,
                n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /\./.test(e) ? e : e + "/"
            }), n
        }, h.getBasePageUrl = function () {
            var e = r.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        }, h.getFullUrl = function (e, t) {
            var n = e,
                r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        }, h.getShortUrl = function (e) {
            var t = e,
                n = h.getBaseUrl(),
                r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
            h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
        }, h.getState = function (e, t) {
            typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        }, h.getIdByState = function (e) {
            var t = h.extractId(e.url),
                n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                else {
                    for (; ;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                    }
                    h.stateToId[n] = t, h.idToState[t] = e
                }
            }
            return t
        }, h.normalizeState = function (e) {
            var t, n;
            if (!e || typeof e != "object") e = {};
            if (typeof e.normalized != "undefined") return e;
            if (!e.data || typeof e.data != "object") e.data = {};
            t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(h.unescapeString(e.url || r.location.href)), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data);
            if (t.title || n) t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id;
            return t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        }, h.createStateObject = function (e, t, n) {
            var r = {
                data: e,
                title: t,
                url: n
            };
            return r = h.normalizeState(r), r
        }, h.getStateById = function (e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        }, h.getStateString = function (e) {
            var t, n, r;
            return t = h.normalizeState(e), n = {
                data: t.data,
                title: e.title,
                url: e.url
            }, r = l.stringify(n), r
        }, h.getStateId = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.id, n
        }, h.getHashByState = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.hash, n
        }, h.extractId = function (e) {
            var t, n, r;
            return n = /(.*)\&_suid=([0-9]+)$/.exec(e), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        }, h.isTraditionalAnchor = function (e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        }, h.extractState = function (e, t) {
            var n = null,
                r, i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        }, h.getIdByUrl = function (e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        }, h.getLastSavedState = function () {
            return h.savedStates[h.savedStates.length - 1] || t
        }, h.getLastStoredState = function () {
            return h.storedStates[h.storedStates.length - 1] || t
        }, h.hasUrlDuplicate = function (e) {
            var t = !1,
                n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        }, h.storeState = function (e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        }, h.isLastSavedState = function (e) {
            var t = !1,
                n, r, i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        }, h.saveState = function (e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        }, h.getStateByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        }, h.getHash = function () {
            var e = h.unescapeHash(r.location.hash);
            return e
        }, h.unescapeString = function (t) {
            var n = t,
                r;
            for (; ;) {
                r = e.unescape(n);
                if (r === n) break;
                n = r
            }
            return n
        }, h.unescapeHash = function (e) {
            var t = h.normalizeHash(e);
            return t = h.unescapeString(t), t
        }, h.normalizeHash = function (e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        }, h.setHash = function (e, t) {
            var n, i, s;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (n = h.escapeHash(e), h.busy(!0), i = h.extractState(e, !0), i && !h.emulated.pushState ? h.pushState(i.data, i.title, i.url, !1) : r.location.hash !== n && (h.bugs.setHash ? (s = h.getPageUrl(), h.pushState(null, null, s + "#" + n, !1)) : r.location.hash = n), h)
        }, h.escapeHash = function (t) {
            var n = h.normalizeHash(t);
            return n = e.escape(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, h.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        }, h.setTitle = function (e) {
            var t = e.title,
                n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (i) { }
            return r.title = t, h
        }, h.queues = [], h.busy = function (e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function () {
                    var e, n, r;
                    if (h.busy.flag) return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0) continue;
                        r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        }, h.busy.flag = !1, h.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || h, e.args || [])
        }, h.pushQueue = function (e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        }, h.queue = function (e, t) {
            return typeof e == "function" && (e = {
                callback: e
            }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        }, h.clearQueue = function () {
            return h.busy.flag = !1, h.queues = [], h
        }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        }, h.doubleCheckClear = function () {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        }, h.doubleCheck = function (e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        }, h.safariStatePoll = function () {
            var t = h.extractState(r.location.href),
                n;
            if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
            return
        }, h.back = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.back(!1)
            }), p.go(-1), !0)
        }, h.forward = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.forward(!1)
            }), p.go(1), !0)
        }, h.go = function (e, t) {
            var n;
            if (e > 0) for (n = 1; n <= e; ++n) h.forward(t);
            else {
                if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n) h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function () { };
            h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
        } else h.onPopState = function (t, n) {
            var i = !1,
                s = !1,
                o, u;
            return h.doubleCheckComplete(), o = h.getHash(), o ? (u = h.extractState(o || r.location.href, !0), u ? h.replaceState(u.data, u.title, u.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (i = h.Adapter.extractEventData("state", t, n) || !1, i ? s = h.getStateById(i) : h.expectedStateId ? s = h.getStateById(h.expectedStateId) : s = h.extractState(r.location.href), s || (s = h.createStateObject(null, null, r.location.href)), h.expectedStateId = !1, h.isLastSavedState(s) ? (h.busy(!1), !1) : (h.storeState(s), h.saveState(s), h.setTitle(s), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }, h.replaceState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        };
        if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (y) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(e, "beforeunload", h.clearAllIntervals), h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(r.location.href, !0))), s && (h.onUnload = function () {
            var e, t;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (n) {
                e = {}
            }
            e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e, h.normalizeStore(), s.setItem("History.store", l.stringify(e))
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function () {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    }, h.init()
}(window), define("History", function () { }), define("Modules/history-service", ["History", "Modules/notification-dispatcher"], function (e, t) {
    var n = function (e, n) {
        var r = $("html"),
            i = $("body").attr("data-language"),
            s = $("body").attr("data-region"),
            o = e.History;
        o.Adapter.bind(e, "statechange", function () {
            var n = o.getState(),
                i = "",
                s = "",
                u = e.location.pathname;
            r.hasClass("lte9") ? (s = u.lastIndexOf("/"), i = u.substr(0, s) + "/" + n.hash) : i = e.location.protocol + "//" + e.location.host + e.location.pathname;
            i = n.cleanUrl;
            t.sendNotification(t.URL_STATECHANGE, {
                url: i
            })
        }), this.setUrl = function (e) {
            o.pushState(null, null, e)
        }, this.back = function (e) {
            o.enabled && o.back()
        }, this.currentURL = function () {
            return e.location.protocol + "//" + e.location.host + e.location.pathname
        }
    };
    return n
}), (window._gsQueue || (window._gsQueue = [])).push(function () {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e, t, r) {
            n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0
        },
            i = function (e) {
                return e.jquery || "function" == typeof e.each && e[0] && e[0].nodeType && e[0].style
            },
            s = function (e) {
                var t = [];
                return e.each(function () {
                    t.push(this)
                }), t
            },
            o = r.prototype = n.to({}, .1, {}),
            u = [];
        r.version = "1.9.0", o.constructor = r, o.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = n.killTweensOf, r.getTweensOf = n.getTweensOf, r.ticker = n.ticker, o.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
        }, o.updateTo = function (e, t) {
            var r, i = this.ratio;
            t && null != this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (r in e) this.vars[r] = e[r];
            if (this._initted) if (t) this._initted = !1;
            else if (this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._time > 0) {
                this._initted = !1, this._init();
                for (var o, u = 1 / (1 - i), a = this._firstPT; a;) o = a.s + a.c, a.c *= u, a.s = o - a.c, a = a._next
            }
            return this
        }, o.render = function (e, t, n) {
            var r, i, s, o = this._dirty ? this.totalDuration() : this._totalDuration,
                a = this._time,
                f = this._totalTime,
                l = this._cycle;
            if (e >= o) this._totalTime = o, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, i = "onComplete"), 0 === this._duration && ((0 === e || 0 > this._rawPrevTime) && this._rawPrevTime !== e && (n = !0), this._rawPrevTime = e);
            else if (0 >= e) this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = e)) : this._initted || (n = !0);
            else {
                if (this._totalTime = this._time = e, 0 !== this._repeat) {
                    var c = this._duration + this._repeatDelay;
                    this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)
                }
                if (this._easeType) {
                    var p = this._time / this._duration,
                        d = this._easeType,
                        v = this._easePower;
                    (1 === d || 3 === d && p >= .5) && (p = 1 - p), 3 === d && (p *= 2), 1 === v ? p *= p : 2 === v ? p *= p * p : 3 === v ? p *= p * p * p : 4 === v && (p *= p * p * p * p), this.ratio = 1 === d ? 1 - p : 2 === d ? p : .5 > this._time / this._duration ? p / 2 : 1 - p / 2
                } else this.ratio = this._ease.getRatio(this._time / this._duration)
            }
            if (a === this._time && !n) return f !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), void 0;
            for (this._initted || (this._init(), !r && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration))), this._active || this._paused || (this._active = !0), 0 === f && (this._startAt && this._startAt.render(e, t, n), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
            this._onUpdate && (0 > e && this._startAt && this._startAt.render(e, t, n), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== l && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), i && (this._gc || (0 > e && this._startAt && (this._onUpdate || this._startAt.render(e, t, n)), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || u)))
        }, r.to = function (e, t, n) {
            return new r(e, t, n)
        }, r.from = function (e, t, n) {
            return n.runBackwards = !0, n.immediateRender !== !1 && (n.immediateRender = !0), new r(e, t, n)
        }, r.fromTo = function (e, t, n, i) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new r(e, t, i)
        }, r.staggerTo = r.allTo = function (e, t, o, u, a, f, l) {
            u = u || 0;
            var h, p, v, m, g = o.delay || 0,
                y = [];
            for (e instanceof Array || ("string" == typeof e && (e = n.selector(e) || e), i(e) && (e = s(e))), h = e.length, v = 0; h > v; v++) {
                p = {};
                for (m in o) p[m] = o[m];
                p.delay = g, v === h - 1 && a && (p.onComplete = function () {
                    o.onComplete && o.onComplete.apply(o.onCompleteScope, o.onCompleteParams), a.apply(l, f)
                }), y[v] = new r(e[v], t, p), g += u
            }
            return y
        }, r.staggerFrom = r.allFrom = function (e, t, n, i, s, o, u) {
            return n.runBackwards = !0, 0 != n.immediateRender && (n.immediateRender = !0), r.staggerTo(e, t, n, i, s, o, u)
        }, r.staggerFromTo = r.allFromTo = function (e, t, n, i, s, o, u, a) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, r.staggerTo(e, t, i, s, o, u, a)
        }, r.delayedCall = function (e, t, n, i, s) {
            return new r(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: i,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, r.set = function (e, t) {
            return new r(e, 0, t)
        }, r.isTweening = function (e) {
            for (var t, r = n.getTweensOf(e), i = r.length; --i > -1;) if ((t = r[i])._active || t._startTime === t.timeline._time && t.timeline._active) return !0;
            return !1
        };
        var a = function (e, t) {
            for (var r = [], i = 0, s = e._first; s;) s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(a(s, t)), i = r.length), s = s._next;
            return r
        },
            f = r.getAllTweens = function (t) {
                var n = a(e._rootTimeline, t);
                return n.concat(a(e._rootFramesTimeline, t))
            };
        r.killAll = function (e, n, r, i) {
            null == n && (n = !0), null == r && (r = !0);
            var s, o, u, a = f(0 != i),
                l = a.length,
                c = n && r && i;
            for (u = 0; l > u; u++) o = a[u], (c || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && (e ? o.totalTime(o.totalDuration()) : o._enabled(!1, !1))
        }, r.killChildTweensOf = function (e, t) {
            if (null != e) {
                var o, u, a, f, l, h = n._tweenLookup;
                if ("string" == typeof e && (e = n.selector(e) || e), i(e) && (e = s(e)), e instanceof Array) for (f = e.length; --f > -1;) r.killChildTweensOf(e[f], t);
                else {
                    o = [];
                    for (a in h) for (u = h[a].target.parentNode; u;) u === e && (o = o.concat(h[a].tweens)), u = u.parentNode;
                    for (l = o.length, f = 0; l > f; f++) t && o[f].totalTime(o[f].totalDuration()), o[f]._enabled(!1, !1)
                }
            }
        };
        var l = function (e, n, r, i) {
            void 0 === n && (n = !0), void 0 === r && (r = !0);
            for (var s, o, u = f(i), a = n && r && i, l = u.length; --l > -1;) o = u[l], (a || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && o.paused(e)
        };
        return r.pauseAll = function (e, t, n) {
            l(!0, e, t, n)
        }, r.resumeAll = function (e, t, n) {
            l(!1, e, t, n)
        }, o.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, o.totalProgress = function (e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, o.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, o.duration = function (t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, o.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, o.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, o.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, o.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, r
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            for (var n, r, s = i.length; --s > -1;) if (r = this.vars[i[s]]) for (n = r.length; --n > -1;) "{self}" === r[n] && (r = this.vars[i[s]] = r.concat(), r[n] = this);
            this.vars.tweens instanceof Array && this.add(this.vars.tweens, 0, this.vars.align, this.vars.stagger)
        },
            i = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
            s = [],
            o = function (e) {
                var t, n = {};
                for (t in e) n[t] = e[t];
                return n
            },
            u = r.prototype = new t;
        return r.version = "1.9.0", u.constructor = r, u.kill()._gc = !1, u.to = function (e, t, r, i) {
            return this.add(new n(e, t, r), i)
        }, u.from = function (e, t, r, i) {
            return this.add(n.from(e, t, r), i)
        }, u.fromTo = function (e, t, r, i, s) {
            return this.add(n.fromTo(e, t, r, i), s)
        }, u.staggerTo = function (e, t, i, s, u, a, f, l) {
            var h, p, v = new r({
                onComplete: a,
                onCompleteParams: f,
                onCompleteScope: l
            });
            for ("string" == typeof e && (e = n.selector(e) || e), !(e instanceof Array) && "function" == typeof e.each && e[0] && e[0].nodeType && e[0].style && (p = [], e.each(function () {
                p.push(this)
            }), e = p), s = s || 0, h = 0; e.length > h; h++) null != i.startAt && (i.startAt = o(i.startAt)), v.add(new n(e[h], t, o(i)), h * s);
            return this.add(v, u)
        }, u.staggerFrom = function (e, t, n, r, i, s, o, u) {
            return null == n.immediateRender && (n.immediateRender = !0), n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
        }, u.staggerFromTo = function (e, t, n, r, i, s, o, u, a) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, r, i, s, o, u, a)
        }, u.call = function (e, t, r, i) {
            return this.add(n.delayedCall(0, e, t, r), i)
        }, u.set = function (e, t, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
        }, r.exportRoot = function (e, t) {
            e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
            var i, s, o = new r(e),
                u = o._timeline;
            for (null == t && (t = !0), u._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = u._time, i = u._first; i;) s = i._next, t && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
            return u.add(o, 0), o
        }, u.add = function (i, s, o, u) {
            var f, l, h, p, v;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof e)) {
                if (i instanceof Array) {
                    for (o = o || "normal", u = u || 0, f = s, l = i.length, h = 0; l > h; h++) (p = i[h]) instanceof Array && (p = new r({
                        tweens: p
                    })), this.add(p, f), "string" != typeof p && "function" != typeof p && ("sequence" === o ? f = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), f += u;
                    return this._uncache(!0)
                }
                if ("string" == typeof i) return this.addLabel(i, s);
                if ("function" != typeof i) throw "Cannot add " + i + " into the TimelineLite/Max: it is neither a tween, timeline, function, nor a String.";
                i = n.delayedCall(0, i)
            }
            if (t.prototype.add.call(this, i, s), this._gc && !this._paused && this._time === this._duration && this._time < this.duration()) for (v = this; v._gc && v._timeline;) v._timeline.smoothChildTiming ? v.totalTime(v._totalTime, !0) : v._enabled(!0, !1), v = v._timeline;
            return this
        }, u.remove = function (t) {
            if (t instanceof e) return this._remove(t, !1);
            if (t instanceof Array) {
                for (var n = t.length; --n > -1;) this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, u.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, u.insert = u.insertMultiple = function (e, t, n, r) {
            return this.add(e, t || 0, n, r)
        }, u.appendMultiple = function (e, t, n, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
        }, u.addLabel = function (e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, u.removeLabel = function (e) {
            return delete this._labels[e], this
        }, u.getLabelTime = function (e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }, u._parseTimeOrLabel = function (t, n, r, i) {
            var s;
            if (i instanceof e && i.timeline === this) this.remove(i);
            else if (i instanceof Array) for (s = i.length; --s > -1;) i[s] instanceof e && i[s].timeline === this && this.remove(i[s]);
            if ("string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, r);
            if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
            else {
                if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
            }
            return Number(t) + n
        }, u.seek = function (e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
        }, u.stop = function () {
            return this.paused(!0)
        }, u.gotoAndPlay = function (e, n) {
            return t.prototype.play.call(this, e, n)
        }, u.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        }, u.render = function (e, t, n) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var r, i, o, u, a = this._dirty ? this.totalDuration() : this._totalDuration,
                l = this._time,
                c = this._startTime,
                h = this._timeScale,
                p = this._paused;
            if (e >= a ? (this._totalTime = this._time = a, this._reversed || this._hasPausedChild() || (i = !0, u = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime) && this._rawPrevTime !== e && (n = !0)), this._rawPrevTime = e, e = a + 1e-6) : 0 >= e ? (this._totalTime = this._time = 0, (0 !== l || 0 === this._duration && this._rawPrevTime > 0) && (u = "onReverseComplete", i = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && (n = !0)) : this._initted || (n = !0), this._rawPrevTime = e, e = -0.000001) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== l || n) {
                if (this._initted || (this._initted = !0), 0 === l && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time > l) for (r = this._first; r && (o = r._next, !this._paused || p) ;) (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                else for (r = this._last; r && (o = r._prev, !this._paused || p) ;) (r._active || l >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), u && (this._gc || (c === this._startTime || h !== this._timeScale) && (0 === this._time || a >= this.totalDuration()) && (i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || s)))
            }
        }, u._hasPausedChild = function () {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        }, u.getChildren = function (e, t, r, i) {
            i = i || -9999999999;
            for (var s = [], o = this._first, u = 0; o;) i > o._startTime || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
            return s
        }, u.getTweensOf = function (e, t) {
            for (var r = n.getTweensOf(e), i = r.length, s = [], o = 0; --i > -1;) (r[i].timeline === this || t && this._contains(r[i])) && (s[o++] = r[i]);
            return s
        }, u._contains = function (e) {
            for (var t = e.timeline; t;) {
                if (t === this) return !0;
                t = t.timeline
            }
            return !1
        }, u.shiftChildren = function (e, t, n) {
            n = n || 0;
            for (var r, i = this._first; i;) i._startTime >= n && (i._startTime += e), i = i._next;
            if (t) for (r in this._labels) this._labels[r] >= n && (this._labels[r] += e);
            return this._uncache(!0)
        }, u._kill = function (e, t) {
            if (null == e && null == t) return this._enabled(!1, !1);
            for (var n = null == t ? this.getChildren(!0, !0, !1) : this.getTweensOf(t), r = n.length, i = !1; --r > -1;) n[r]._kill(e, t) && (i = !0);
            return i
        }, u.clear = function (e) {
            var t = this.getChildren(!1, !0, !0),
                n = t.length;
            for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
            return e !== !1 && (this._labels = {}), this._uncache(!0)
        }, u.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return this
        }, u._enabled = function (e, n) {
            if (e === this._gc) for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
            return t.prototype._enabled.call(this, e, n)
        }, u.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * e, !1) : this._time / this.duration()
        }, u.duration = function (e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, u.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, n, r = 0, i = this._last, s = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > s && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : s = i._startTime, 0 > i._startTime && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), s = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = t;
                    this._duration = this._totalDuration = r, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
        }, u.usesFrames = function () {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === e._rootFramesTimeline
        }, u.rawTime = function () {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, r
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, n) {
        var r = function (t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        },
            i = [],
            s = new n(null, null, 1, 0),
            o = function (e) {
                for (; e;) {
                    if (e._paused) return !0;
                    e = e._timeline
                }
                return !1
            },
            u = r.prototype = new e;
        return u.constructor = r, u.kill()._gc = !1, r.version = "1.9.0", u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, u.addCallback = function (e, n, r, i) {
            return this.add(t.delayedCall(0, e, r, i), n)
        }, u.removeCallback = function (e, t) {
            if (null == t) this._kill(null, e);
            else for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t) ; --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
            return this
        }, u.tweenTo = function (e, n) {
            n = n || {};
            var r, o, u = {
                ease: s,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (r in n) u[r] = n[r];
            return u.time = this._parseTimeOrLabel(e), o = new t(this, Math.abs(Number(u.time) - this._time) / this._timeScale || .001, u), u.onStart = function () {
                o.target.paused(!0), o.vars.time !== o.target.time() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || o, n.onStartParams || i)
            }, o
        }, u.tweenFromTo = function (e, t, n) {
            n = n || {}, n.startAt = {
                time: this._parseTimeOrLabel(e)
            };
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - r.vars.startAt.time) / this._timeScale || .001)
        }, u.render = function (e, t, n) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var r, s, o, u, a = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._time,
                l = this._totalTime,
                c = this._startTime,
                h = this._timeScale,
                p = this._rawPrevTime,
                d = this._paused,
                v = this._cycle;
            if (e >= a) this._locked || (this._totalTime = a, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime) && this._rawPrevTime !== e && (n = !0)), this._rawPrevTime = e, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, e = -0.000001) : (this._time = this._duration, e = this._duration + 1e-6);
            else if (0 >= e) this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0 && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && (n = !0)) : this._initted || (n = !0), this._rawPrevTime = e, e = 0 === this._duration ? 0 : -0.000001;
            else if (this._time = this._rawPrevTime = e, !this._locked && (this._totalTime = e, 0 !== this._repeat)) {
                var m = this._duration + this._repeatDelay;
                this._cycle = this._totalTime / m >> 0, 0 !== this._cycle && this._cycle === this._totalTime / m && this._cycle--, this._time = this._totalTime - this._cycle * m, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? (this._time = this._duration, e = this._duration + 1e-6) : 0 > this._time ? this._time = e = 0 : e = this._time
            }
            if (this._cycle !== v && !this._locked) {
                var g = this._yoyo && 0 !== (1 & v),
                    y = g === (this._yoyo && 0 !== (1 & this._cycle)),
                    b = this._totalTime,
                    w = this._cycle,
                    E = this._rawPrevTime,
                    S = this._time;
                this._totalTime = v * this._duration, v > this._cycle ? g = !g : this._totalTime += this._duration, this._time = f, this._rawPrevTime = 0 === this._duration ? p - 1e-5 : p, this._cycle = v, this._locked = !0, f = g ? 0 : this._duration, this.render(f, t, 0 === this._duration), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || i), y && (f = g ? this._duration + 1e-6 : -0.000001, this.render(f, !0, !1)), this._time = S, this._totalTime = b, this._cycle = w, this._rawPrevTime = E, this._locked = !1
            }
            if (this._time === f && !n) return l !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)), void 0;
            if (this._initted || (this._initted = !0), 0 === l && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || i)), this._time > f) for (r = this._first; r && (o = r._next, !this._paused || d) ;) (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
            else for (r = this._last; r && (o = r._prev, !this._paused || d) ;) (r._active || f >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)), u && (this._locked || this._gc || (c === this._startTime || h !== this._timeScale) && (0 === this._time || a >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || i)))
        }, u.getActive = function (e, t, n) {
            null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
            var r, i, s = [],
                u = this.getChildren(e, t, n),
                a = 0,
                f = u.length;
            for (r = 0; f > r; r++) i = u[r], i._paused || i._timeline._time >= i._startTime && i._timeline._time < i._startTime + i._totalDuration / i._timeScale && (o(i._timeline) || (s[a++] = i));
            return s
        }, u.getLabelAfter = function (e) {
            e || 0 !== e && (e = this._time);
            var t, n = this.getLabelsArray(),
                r = n.length;
            for (t = 0; r > t; t++) if (n[t].time > e) return n[t].name;
            return null
        }, u.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), n = t.length; --n > -1;) if (e > t[n].time) return t[n].name;
            return null
        }, u.getLabelsArray = function () {
            var e, t = [],
                n = 0;
            for (e in this._labels) t[n++] = {
                time: this._labels[e],
                name: e
            };
            return t.sort(function (e, t) {
                return e.time - t.time
            }), t
        }, u.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, u.totalProgress = function (e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, u.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, u.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, r
    }, !0), function () {
        var e = 180 / Math.PI,
            t = Math.PI / 180,
            n = [],
            r = [],
            i = [],
            s = {},
            o = function (e, t, n, r) {
                this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
            },
            u = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            a = function (e, t, n, r) {
                var i = {
                    a: e
                },
                    s = {},
                    o = {},
                    u = {
                        c: r
                    },
                    a = (e + t) / 2,
                    f = (t + n) / 2,
                    l = (n + r) / 2,
                    c = (a + f) / 2,
                    h = (f + l) / 2,
                    p = (h - c) / 8;
                return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
            },
            f = function (e, t, s, o, u) {
                var f, l, c, h, p, d, v, m, g, y, b, w, E, S = e.length - 1,
                    x = 0,
                    T = e[0].a;
                for (f = 0; S > f; f++) p = e[x], l = p.a, c = p.d, h = e[x + 1].d, u ? (b = n[f], w = r[f], E = .25 * (w + b) * t / (o ? .5 : i[f] || .5), d = c - (c - l) * (o ? .5 * t : E / b), v = c + (h - c) * (o ? .5 * t : E / w), m = c - (d + (v - d) * (3 * b / (b + w) + .5) / 4)) : (d = c - .5 * (c - l) * t, v = c + .5 * (h - c) * t, m = c - (d + v) / 2), d += m, v += m, p.c = g = d, p.b = 0 !== f ? T : T = p.a + .6 * (p.c - p.a), p.da = c - l, p.ca = g - l, p.ba = T - l, s ? (y = a(l, T, g, c), e.splice(x, 1, y[0], y[1], y[2], y[3]), x += 4) : x++, T = v;
                p = e[x], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, s && (y = a(p.a, T, p.c, p.d), e.splice(x, 1, y[0], y[1], y[2], y[3]))
            },
            l = function (e, t, i, s) {
                var u, a, f, l, c, h, p = [];
                if (s) for (e = [s].concat(e), a = e.length; --a > -1;) "string" == typeof (h = e[a][t]) && "=" === h.charAt(1) && (e[a][t] = s[t] + Number(h.charAt(0) + h.substr(2)));
                if (u = e.length - 2, 0 > u) return p[0] = new o(e[0][t], 0, 0, e[-1 > u ? 0 : 1][t]), p;
                for (a = 0; u > a; a++) f = e[a][t], l = e[a + 1][t], p[a] = new o(f, 0, 0, l), i && (c = e[a + 2][t], n[a] = (n[a] || 0) + (l - f) * (l - f), r[a] = (r[a] || 0) + (c - l) * (c - l));
                return p[a] = new o(e[a][t], 0, 0, e[a + 1][t]), p
            },
            c = function (e, t, o, a, c, h) {
                var p, d, v, m, g, y, b, w, E = {},
                    S = [],
                    x = h || e[0];
                c = "string" == typeof c ? "," + c + "," : u, null == t && (t = 1);
                for (d in e[0]) S.push(d);
                if (e.length > 1) {
                    for (w = e[e.length - 1], b = !0, p = S.length; --p > -1;) if (d = S[p], Math.abs(x[d] - w[d]) > .05) {
                        b = !1;
                        break
                    }
                    b && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                }
                for (n.length = r.length = i.length = 0, p = S.length; --p > -1;) d = S[p], s[d] = -1 !== c.indexOf("," + d + ","), E[d] = l(e, d, s[d], h);
                for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p]), r[p] = Math.sqrt(r[p]);
                if (!a) {
                    for (p = S.length; --p > -1;) if (s[d]) for (v = E[S[p]], y = v.length - 1, m = 0; y > m; m++) g = v[m + 1].da / r[m] + v[m].da / n[m], i[m] = (i[m] || 0) + g * g;
                    for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p])
                }
                for (p = S.length, m = o ? 4 : 1; --p > -1;) d = S[p], v = E[d], f(v, t, o, a, s[d]), b && (v.splice(0, m), v.splice(v.length - m, m));
                return E
            },
            h = function (e, t, n) {
                t = t || "soft";
                var r, i, s, u, a, f, l, c, h, p, d, v = {},
                    m = "cubic" === t ? 3 : 2,
                    y = "soft" === t,
                    b = [];
                if (y && n && (e = [n].concat(e)), null == e || m + 1 > e.length) throw "invalid Bezier data";
                for (h in e[0]) b.push(h);
                for (f = b.length; --f > -1;) {
                    for (h = b[f], v[h] = a = [], p = 0, c = e.length, l = 0; c > l; l++) r = null == n ? e[l][h] : "string" == typeof (d = e[l][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), y && l > 1 && c - 1 > l && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
                    for (c = p - m + 1, p = 0, l = 0; c > l; l += m) r = a[l], i = a[l + 1], s = a[l + 2], u = 2 === m ? 0 : a[l + 3], a[p++] = d = 3 === m ? new o(r, i, s, u) : new o(r, (2 * i + r) / 3, (2 * i + s) / 3, s);
                    a.length = p
                }
                return v
            },
            p = function (e, t, n) {
                for (var r, i, s, o, u, a, f, l, c, h, p, d = 1 / n, v = e.length; --v > -1;) for (h = e[v], s = h.a, o = h.d - s, u = h.c - s, a = h.b - s, r = i = 0, l = 1; n >= l; l++) f = d * l, c = 1 - f, r = i - (i = (f * f * o + 3 * c * (f * u + c * a)) * f), p = v * n + l - 1, t[p] = (t[p] || 0) + r * r
            },
            d = function (e, t) {
                t = t >> 0 || 6;
                var n, r, i, s, o = [],
                    u = [],
                    a = 0,
                    f = 0,
                    l = t - 1,
                    c = [],
                    h = [];
                for (n in e) p(e[n], o, t);
                for (i = o.length, r = 0; i > r; r++) a += Math.sqrt(o[r]), s = r % t, h[s] = a, s === l && (f += a, s = r / t >> 0, c[s] = h, u[s] = f, a = 0, h = []);
                return {
                    length: f,
                    lengths: u,
                    segments: c
                }
            },
            v = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                init: function (e, t, n) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                    var r, i, s, o, u, a = t.values || [],
                        f = {},
                        l = a[0],
                        p = t.autoRotate || n.vars.orientToBezier;
                    this._autoRotate = p ? p instanceof Array ? p : [
                        ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                    ] : null;
                    for (r in l) this._props.push(r);
                    for (s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], f[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u || f[r] !== a[0][r] && (u = f);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? c(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, u) : h(a, t.type, f), this._segCount = this._beziers[r].length, this._timeRes) {
                        var v = d(this._beziers, this._timeRes);
                        this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate) for (p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) for (o = 0; 3 > o; o++) r = p[s][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                    return !0
                },
                set: function (t) {
                    var n, r, i, s, o, u, a, f, l, c, h = this._segCount,
                        p = this._func,
                        d = this._target;
                    if (this._timeRes) {
                        if (l = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && h - 1 > i) {
                            for (f = h - 1; f > i && t >= (this._l2 = l[++i]) ;);
                            this._l1 = l[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                        } else if (this._l1 > t && i > 0) {
                            for (; i > 0 && (this._l1 = l[--i]) >= t;);
                            0 === i && this._l1 > t ? this._l1 = 0 : i++, this._l2 = l[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                        }
                        if (n = i, t -= this._l1, i = this._si, t > this._s2 && c.length - 1 > i) {
                            for (f = c.length - 1; f > i && t >= (this._s2 = c[++i]) ;);
                            this._s1 = c[i - 1], this._si = i
                        } else if (this._s1 > t && i > 0) {
                            for (; i > 0 && (this._s1 = c[--i]) >= t;);
                            0 === i && this._s1 > t ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                        }
                        u = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, u = (t - n * (1 / h)) * h;
                    for (r = 1 - u, i = this._props.length; --i > -1;) s = this._props[i], o = this._beziers[s][n], a = (u * u * o.da + 3 * r * (u * o.ca + r * o.ba)) * u + o.a, this._round[s] && (a = a + (a > 0 ? .5 : -0.5) >> 0), p[s] ? d[s](a) : d[s] = a;
                    if (this._autoRotate) {
                        var v, m, g, y, b, w, E, S = this._autoRotate;
                        for (i = S.length; --i > -1;) s = S[i][2], w = S[i][3] || 0, E = S[i][4] === !0 ? 1 : e, o = this._beziers[S[i][0]][n], v = this._beziers[S[i][1]][n], m = o.a + (o.b - o.a) * u, y = o.b + (o.c - o.b) * u, m += (y - m) * u, y += (o.c + (o.d - o.c) * u - y) * u, g = v.a + (v.b - v.a) * u, b = v.b + (v.c - v.b) * u, g += (b - g) * u, b += (v.c + (v.d - v.c) * u - b) * u, a = Math.atan2(b - g, y - m) * E + w, p[s] ? p[s].call(d, a) : d[s] = a
                    }
                }
            }),
            m = v.prototype;
        v.bezierThrough = c, v.cubicToQuadratic = a, v._autoCSS = !0, v.quadraticToCubic = function (e, t, n) {
            return new o(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
        }, v._cssRegister = function () {
            var e = window._gsDefine.globals.CSSPlugin;
            if (e) {
                var n = e._internals,
                    r = n._parseToProxy,
                    i = n._setPluginRatio,
                    s = n.CSSPropTween;
                n._registerComplexSpecialProp("bezier", null, function (e, n, o, u, a, f) {
                    n instanceof Array && (n = {
                        values: n
                    }), f = new v;
                    var l, c, h, p = n.values,
                        d = p.length - 1,
                        m = [],
                        g = {};
                    if (0 > d) return a;
                    for (l = 0; d >= l; l++) h = r(e, p[l], u, a, f, d !== l), m[l] = h.end;
                    for (c in n) g[c] = n[c];
                    return g.values = m, a = new s(e, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = f, a.setRatio = i, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (l = g.autoRotate === !0 ? 0 : Number(g.autoRotate) * t, g.autoRotate = null != h.end.left ? [
                        ["left", "top", "rotation", l, !0]
                    ] : null != h.end.x ? [
                        ["x", "y", "rotation", l, !0]
                    ] : !1), g.autoRotate && (u._transform || u._enableTransforms(!1), h.autoRotate = u._target._gsTransform), f._onInitTween(h.proxy, g, u._tween), a
                })
            }
        }, m._roundProps = function (e, t) {
            for (var n = this._overwriteProps, r = n.length; --r > -1;) (e[n[r]] || e.bezier || e.bezierThrough) && (this._round[n[r]] = t)
        }, m._kill = function (e) {
            var t, n, r = this._props;
            for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;) r[n] === t && r.splice(n, 1);
            return this._super._kill.call(this, e)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e) {
        var t, n, r, i, s = function () {
            e.call(this, "css"), this._overwriteProps.length = 0
        },
            o = {},
            u = s.prototype = new e("css");
        u.constructor = s, s.version = "1.9.0", s.API = 2, s.defaultTransformPerspective = 0, u = "px", s.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u
        };
        var a, f, l, c, h, p, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            m = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            g = /[^\d\-\.]/g,
            y = /(?:\d|\-|\+|=|#|\.)*/g,
            b = /opacity *= *([^)]*)/,
            w = /opacity:([^;]*)/,
            E = /alpha\(opacity *=.+?\)/i,
            S = /([A-Z])/g,
            x = /-([a-z])/gi,
            T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            N = function (e, t) {
                return t.toUpperCase()
            },
            C = /(?:Left|Right|Width)/i,
            k = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            A = Math.PI / 180,
            O = 180 / Math.PI,
            M = {},
            _ = document,
            D = _.createElement("div"),
            P = _.createElement("img"),
            H = s._internals = {
                _specialProps: o
            },
            B = navigator.userAgent,
            j = function () {
                var e, t = B.indexOf("Android"),
                    n = _.createElement("div");
                return l = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), h = l && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), c = -1 !== B.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B), p = parseFloat(RegExp.$1), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = n.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
            }(),
            F = function (e) {
                return b.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            I = function (e) {
                window.console && console.log(e)
            },
            q = "",
            R = "",
            U = function (e, t) {
                t = t || D;
                var n, r, i = t.style;
                if (void 0 !== i[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
                return r >= 0 ? (R = 3 === r ? "ms" : n[r], q = "-" + R.toLowerCase() + "-", R + e) : null
            },
            z = _.defaultView ? _.defaultView.getComputedStyle : function () { },
            W = s.getStyle = function (e, t, n, r, i) {
                var s;
                return j || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (n = n || z(e, null)) ? (e = n.getPropertyValue(t.replace(S, "-$1").toLowerCase()), s = e || n.length ? e : n[t]) : e.currentStyle && (n = e.currentStyle, s = n[t]), null == i || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : i) : F(e)
            },
            X = function (e, t, n) {
                var r, i, s = {},
                    o = e._gsOverwrittenClassNamePT;
                if (o && !n) {
                    for (; o;) o.setRatio(0), o = o._next;
                    e._gsOverwrittenClassNamePT = null
                }
                if (t = t || z(e, null)) if (r = t.length) for (; --r > -1;) s[t[r].replace(x, N)] = t.getPropertyValue(t[r]);
                else for (r in t) s[r] = t[r];
                else if (t = e.currentStyle || e.style) for (r in t) s[r.replace(x, N)] = t[r];
                return j || (s.opacity = F(e)), i = bt(e, t, !1), s.rotation = i.rotation * O, s.skewX = i.skewX * O, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, yt && (s.z = i.z, s.rotationX = i.rotationX * O, s.rotationY = i.rotationY * O, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s
            },
            V = function (e, t, n, r) {
                var i, s, o, u = {},
                    a = e.style;
                for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && t[s] !== (i = n[s]) && -1 === s.indexOf("Origin") && ("number" == typeof i || "string" == typeof i) && (u[s] = "" !== i && "auto" !== i && "none" !== i || "string" != typeof t[s] || "" === t[s].replace(g, "") ? i : 0, void 0 !== a[s] && (o = new ut(a, s, a[s], o)));
                if (r) for (s in r) "className" !== s && (u[s] = r[s]);
                return {
                    difs: u,
                    firstMPT: o
                }
            },
            $ = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            K = function (e, t, n) {
                var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                    i = $[t],
                    s = i.length;
                for (n = n || z(e, null) ; --s > -1;) r -= parseFloat(W(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat(W(e, "border" + i[s] + "Width", n, !0)) || 0;
                return r
            },
            Q = function (e, t, n, r, i) {
                if ("px" === r || !r) return n;
                if ("auto" === r || !n) return 0;
                var s, o = C.test(t),
                    u = e,
                    a = D.style,
                    f = 0 > n;
                return f && (n = -n), "%" === r && -1 !== t.indexOf("border") ? s = n / 100 * (o ? e.clientWidth : e.clientHeight) : (a.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== r && u.appendChild ? a[o ? "borderLeftWidth" : "borderTopWidth"] = n + r : (u = e.parentNode || _.body, a[o ? "width" : "height"] = n + r), u.appendChild(D), s = parseFloat(D[o ? "offsetWidth" : "offsetHeight"]), u.removeChild(D), 0 !== s || i || (s = Q(e, t, n, r, !0))), f ? -s : s
            },
            G = function (e, t) {
                (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                var n = e.split(" "),
                    r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                    i = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                return null == i ? i = "0" : "center" === i && (i = "50%"), ("center" === r || isNaN(parseFloat(r))) && (r = "50%"), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== i.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === i.charAt(1), t.ox = parseFloat(r.replace(g, "")), t.oy = parseFloat(i.replace(g, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
            },
            Y = function (e, t) {
                return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
            },
            Z = function (e, t) {
                return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
            },
            et = function (e, t) {
                var n, r, i, s, o, u = 1e-6;
                return null == e ? o = t : "number" == typeof e ? o = e * A : (n = 2 * Math.PI, r = e.split("_"), i = Number(r[0].replace(g, "")) * (-1 === e.indexOf("rad") ? A : 1) - ("=" === e.charAt(1) ? 0 : t), s = r[1], "short" === s ? (i %= n, i !== i % (n / 2) && (i = 0 > i ? i + n : i - n)) : "cw" === s && 0 > i ? i = (i + 9999999999 * n) % n - (0 | i / n) * n : "ccw" === s && i > 0 && (i = (i - 9999999999 * n) % n - (0 | i / n) * n), o = t + i), u > o && o > -u && (o = 0), o
            },
            tt = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            nt = function (e, t, n) {
                return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
            },
            rt = function (e) {
                var t, n, r, i, s, o;
                return e && "" !== e ? tt[e] ? tt[e] : "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + t + t + n + n + r + r), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(d), i = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, o = Number(e[2]) / 100, n = .5 >= o ? o * (s + 1) : o + s - o * s, t = 2 * o - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = nt(i + 1 / 3, t, n), e[1] = nt(i, t, n), e[2] = nt(i - 1 / 3, t, n), e) : (e = e.match(d) || tt.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e) : tt.black
            },
            it = "(?:\\b(?:(?:rgb|rgba)\\(.+?\\))|\\B#.+?\\b";
        for (u in tt) it += "|" + u + "\\b";
        it = RegExp(it + ")", "gi");
        var st = function (e, t, n) {
            if (null == e) return function (e) {
                return e
            };
            var r = t ? (e.match(it) || [""])[0] : "",
                i = e.split(r).join("").match(m) || [],
                s = e.substr(0, e.indexOf(i[0])),
                o = ")" === e.charAt(e.length - 1) ? ")" : "",
                u = -1 !== e.indexOf(" ") ? " " : ",",
                a = i.length,
                f = a > 0 ? i[0].replace(d, "") : "";
            return a ? t ?
            function (e) {
                "number" == typeof e && (e += f);
                var t = (e.match(it) || [r])[0],
                    l = e.split(t).join("").match(m) || [],
                    c = l.length;
                if (a > c--) for (; a > ++c;) l[c] = n ? l[(c - 1) / 2 >> 0] : i[c];
                return s + l.join(u) + u + t + o
            } : function (e) {
                "number" == typeof e && (e += f);
                var t = e.match(m) || [],
                    r = t.length;
                if (a > r--) for (; a > ++r;) t[r] = n ? t[(r - 1) / 2 >> 0] : i[r];
                return s + t.join(u) + o
            } : function (e) {
                return e
            }
        },
            ot = function (e) {
                return e = e.split(","), function (t, n, r, i, s, o, u) {
                    var a, f = (n + "").split(" ");
                    for (u = {}, a = 0; 4 > a; a++) u[e[a]] = f[a] = f[a] || f[(a - 1) / 2 >> 0];
                    return i.parse(t, u, s, o)
                }
            },
            ut = (H._setPluginRatio = function (e) {
                this.plugin.setRatio(e);
                for (var t, n, r, i, s = this.data, o = s.proxy, u = s.firstMPT, a = 1e-6; u;) t = o[u.v], u.r ? t = t > 0 ? t + .5 >> 0 : t - .5 >> 0 : a > t && t > -a && (t = 0), u.t[u.p] = t, u = u._next;
                if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e) for (u = s.firstMPT; u;) {
                    if (n = u.t, n.type) {
                        if (1 === n.type) {
                            for (i = n.xs0 + n.s + n.xs1, r = 1; n.l > r; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                            n.e = i
                        }
                    } else n.e = n.s + n.xs0;
                    u = u._next
                }
            }, function (e, t, n, r, i) {
                this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
            }),
            at = (H._parseToProxy = function (e, t, n, r, i, s) {
                var o, u, a, f, l, c = r,
                    h = {},
                    p = {},
                    d = n._transform,
                    v = M;
                for (n._transform = null, M = t, r = l = n.parse(e, t, r, i), M = v, s && (n._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))) ; r && r !== c;) {
                    if (1 >= r.type && (u = r.p, p[u] = r.s + r.c, h[u] = r.s, s || (f = new ut(r, "s", u, f, r.r), r.c = 0), 1 === r.type)) for (o = r.l; --o > 0;) a = "xn" + o, u = r.p + "_" + a, p[u] = r.data[a], h[u] = r[a], s || (f = new ut(r, a, u, f, r.rxp[a]));
                    r = r._next
                }
                return {
                    proxy: h,
                    end: p,
                    firstMPT: f,
                    pt: l
                }
            }, H.CSSPropTween = function (e, n, r, s, o, u, a, f, l, c, h) {
                this.t = e, this.p = n, this.s = r, this.c = s, this.n = a || "css_" + n, e instanceof at || i.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, t = !0), this.b = void 0 === c ? r : c, this.e = void 0 === h ? r + s : h, o && (this._next = o, o._prev = this)
            }),
            ft = s.parseComplex = function (e, t, n, r, i, s, o, u, f, l) {
                o = new at(e, t, 0, 0, o, l ? 2 : 1, null, !1, u, n, r);
                var c, h, p, m, g, y, b, w, E, S, x, T, N = n.split(", ").join(",").split(" "),
                    C = (r + "").split(", ").join(",").split(" "),
                    k = N.length,
                    L = a !== !1;
                for (k !== C.length && (N = (s || "").split(" "), k = N.length), o.plugin = f, o.setRatio = l, c = 0; k > c; c++) if (m = N[c], g = C[c], w = parseFloat(m), w || 0 === w) o.appendXtra("", w, Y(g, w), g.replace(v, ""), L && -1 !== g.indexOf("px"), !0);
                else if (i && ("#" === m.charAt(0) || 0 === m.indexOf("rgb") || tt[m])) m = rt(m), g = rt(g), E = m.length + g.length > 6, E && !j && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[c]).join("transparent")) : (j || (E = !1), o.appendXtra(E ? "rgba(" : "rgb(", m[0], g[0] - m[0], ",", !0, !0).appendXtra("", m[1], g[1] - m[1], ",", !0).appendXtra("", m[2], g[2] - m[2], E ? "," : ")", !0), E && (m = 4 > m.length ? 1 : m[3], o.appendXtra("", m, (4 > g.length ? 1 : g[3]) - m, ")", !1)));
                else if (y = m.match(d)) {
                    if (b = g.match(v), !b || b.length !== y.length) return o;
                    for (p = 0, h = 0; y.length > h; h++) x = y[h], S = m.indexOf(x, p), o.appendXtra(m.substr(p, S - p), Number(x), Y(b[h], x), "", L && "px" === m.substr(S + x.length, 2), 0 === h), p = S + x.length;
                    o["xs" + o.l] += m.substr(p)
                } else o["xs" + o.l] += o.l ? " " + m : m;
                if (-1 !== r.indexOf("=") && o.data) {
                    for (T = o.xs0 + o.data.s, c = 1; o.l > c; c++) T += o["xs" + c] + o.data["xn" + c];
                    o.e = T + o["xs" + c]
                }
                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
            },
            lt = 9;
        for (u = at.prototype, u.l = u.pr = 0; --lt > 0;) u["xn" + lt] = 0, u["xs" + lt] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (e, t, n, r, i, s) {
            var o = this,
                u = o.l;
            return o["xs" + u] += s && u ? " " + e : e || "", n || 0 === u || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new at(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                s: t + n
            }, o.rxp = {}, o.s = t, o.c = n, o.r = i, o)) : (o["xs" + u] += t + (r || ""), o)
        };
        var ct = function (e, t, n, r, i, s, u) {
            this.p = r ? U(e) || e : e, o[e] = o[this.p] = this, this.format = s || st(t, i), n && (this.parse = n), this.clrs = i, this.dflt = t, this.pr = u || 0
        },
            ht = H._registerComplexSpecialProp = function (e, t, n, r, i, s, o) {
                for (var u, a = e.split(","), f = t instanceof Array ? t : [t], l = a.length; --l > -1;) u = new ct(a[l], f[l], n, r && 0 === l, i, s, o)
            },
            pt = function (e) {
                if (!o[e]) {
                    var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                    ht(e, null, function (e, n, r, i, s, u, a) {
                        var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                        return f ? (f._cssRegister(), o[r].parse(e, n, r, i, s, u, a)) : (I("Error: " + t + " js file not loaded."), s)
                    })
                }
            };
        u = ct.prototype, u.parseComplex = function (e, t, n, r, i, s) {
            return ft(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
        }, u.parse = function (e, t, n, i, s, o) {
            return this.parseComplex(e.style, this.format(W(e, this.p, r, !1, this.dflt)), this.format(t), s, o)
        }, s.registerSpecialProp = function (e, t, n) {
            ht(e, null, function (e, r, i, s, o, u) {
                var a = new at(e, i, 0, 0, o, 2, i, !1, n);
                return a.plugin = u, a.setRatio = t(e, r, s._tween, i), a
            }, !1, !1, null, n)
        };
        var dt = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "rotation", "rotationX", "rotationY", "perspective"],
            vt = U("transform"),
            mt = q + "transform",
            gt = U("transformOrigin"),
            yt = null !== U("perspective"),
            bt = function (e, t, n) {
                var r, i, o, u, a, f, l, c, h, p, d, v, m, g = n ? e._gsTransform || {
                    skewY: 0
                } : {
                    skewY: 0
                },
                    y = 0 > g.scaleX,
                    b = 2e-5,
                    w = 1e5,
                    E = -Math.PI + 1e-4,
                    S = Math.PI - 1e-4,
                    x = yt ? parseFloat(W(e, gt, t, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0;
                for (vt ? r = W(e, mt, t, !0) : e.currentStyle && (r = e.currentStyle.filter.match(k), r = r && 4 === r.length ? r[0].substr(4) + "," + Number(r[2].substr(4)) + "," + Number(r[1].substr(4)) + "," + r[3].substr(4) + "," + (g ? g.x : 0) + "," + (g ? g.y : 0) : null), i = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = i.length; --o > -1;) u = Number(i[o]), i[o] = (a = u - (u |= 0)) ? (0 | a * w + (0 > a ? -0.5 : .5)) / w + u : u;
                if (16 === i.length) {
                    var T = i[8],
                        N = i[9],
                        C = i[10],
                        L = i[12],
                        A = i[13],
                        O = i[14];
                    if (g.zOrigin && (O = -g.zOrigin, L = T * O - i[12], A = N * O - i[13], O = C * O + g.zOrigin - i[14]), !n || L !== g.x || A !== g.y || O !== g.z) {
                        var M, _, D, P, H, B, j, F, I = i[0],
                            q = i[1],
                            R = i[2],
                            U = i[3],
                            z = i[4],
                            X = i[5],
                            V = i[6],
                            $ = i[7],
                            J = i[11],
                            K = g.rotationX = Math.atan2(V, C),
                            Q = E > K || K > S;
                        K && (H = Math.cos(-K), B = Math.sin(-K), M = z * H + T * B, _ = X * H + N * B, D = V * H + C * B, P = $ * H + J * B, T = z * -B + T * H, N = X * -B + N * H, C = V * -B + C * H, J = $ * -B + J * H, z = M, X = _, V = D), K = g.rotationY = Math.atan2(T, I), K && (j = E > K || K > S, H = Math.cos(-K), B = Math.sin(-K), M = I * H - T * B, _ = q * H - N * B, D = R * H - C * B, P = U * H - J * B, N = q * B + N * H, C = R * B + C * H, J = U * B + J * H, I = M, q = _, R = D), K = g.rotation = Math.atan2(q, X), K && (F = E > K || K > S, H = Math.cos(-K), B = Math.sin(-K), I = I * H + z * B, _ = q * H + X * B, X = q * -B + X * H, V = R * -B + V * H, q = _), F && Q ? g.rotation = g.rotationX = 0 : F && j ? g.rotation = g.rotationY = 0 : j && Q && (g.rotationY = g.rotationX = 0), g.scaleX = (Math.sqrt(I * I + q * q) * w + .5 >> 0) / w, g.scaleY = (Math.sqrt(X * X + N * N) * w + .5 >> 0) / w, g.scaleZ = (Math.sqrt(V * V + C * C) * w + .5 >> 0) / w, g.skewX = 0, g.perspective = J ? 1 / (0 > J ? -J : J) : 0, g.x = L, g.y = A, g.z = O
                    }
                } else if (!yt || 0 === i.length || g.x !== i[4] || g.y !== i[5] || !g.rotationX && !g.rotationY) {
                    var G = i.length >= 6,
                        Y = G ? i[0] : 1,
                        Z = i[1] || 0,
                        et = i[2] || 0,
                        tt = G ? i[3] : 1;
                    g.x = i[4] || 0, g.y = i[5] || 0, f = Math.sqrt(Y * Y + Z * Z), l = Math.sqrt(tt * tt + et * et), c = Y || Z ? Math.atan2(Z, Y) : g.rotation || 0, h = et || tt ? Math.atan2(et, tt) + c : g.skewX || 0, p = f - Math.abs(g.scaleX || 0), d = l - Math.abs(g.scaleY || 0), Math.abs(h) > Math.PI / 2 && Math.abs(h) < 1.5 * Math.PI && (y ? (f *= -1, h += 0 >= c ? Math.PI : -Math.PI, c += 0 >= c ? Math.PI : -Math.PI) : (l *= -1, h += 0 >= h ? Math.PI : -Math.PI)), v = (c - g.rotation) % Math.PI, m = (h - g.skewX) % Math.PI, (void 0 === g.skewX || p > b || -b > p || d > b || -b > d || v > E && S > v && 0 !== v * w >> 0 || m > E && S > m && 0 !== m * w >> 0) && (g.scaleX = f, g.scaleY = l, g.rotation = c, g.skewX = h), yt && (g.rotationX = g.rotationY = g.z = 0, g.perspective = parseFloat(s.defaultTransformPerspective) || 0, g.scaleZ = 1)
                }
                g.zOrigin = x;
                for (o in g) b > g[o] && g[o] > -b && (g[o] = 0);
                return n && (e._gsTransform = g), g
            },
            wt = function (e) {
                var t, n, r = this.data,
                    i = -r.rotation,
                    s = i + r.skewX,
                    o = 1e5,
                    u = (Math.cos(i) * r.scaleX * o >> 0) / o,
                    a = (Math.sin(i) * r.scaleX * o >> 0) / o,
                    f = (Math.sin(s) * -r.scaleY * o >> 0) / o,
                    l = (Math.cos(s) * r.scaleY * o >> 0) / o,
                    c = this.t.style,
                    h = this.t.currentStyle;
                if (h) {
                    n = a, a = -f, f = -n, t = h.filter, c.filter = "";
                    var d, v, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        w = "absolute" !== h.position,
                        E = "progid:DXImageTransform.Microsoft.Matrix(M11=" + u + ", M12=" + a + ", M21=" + f + ", M22=" + l,
                        S = r.x,
                        x = r.y;
                    if (null != r.ox && (d = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, v = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, S += d - (d * u + v * a), x += v - (d * f + v * l)), w) d = m / 2, v = g / 2, E += ", Dx=" + (d - (d * u + v * a) + S) + ", Dy=" + (v - (d * f + v * l) + x) + ")";
                    else {
                        var T, N, C, k = 8 > p ? 1 : -1;
                        for (d = r.ieOffsetX || 0, v = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > u ? -u : u) * m + (0 > a ? -a : a) * g)) / 2 + S), r.ieOffsetY = Math.round((g - ((0 > l ? -l : l) * g + (0 > f ? -f : f) * m)) / 2 + x), lt = 0; 4 > lt; lt++) N = J[lt], T = h[N], n = -1 !== T.indexOf("px") ? parseFloat(T) : Q(this.t, N, parseFloat(T), T.replace(y, "")) || 0, C = n !== r[N] ? 2 > lt ? -r.ieOffsetX : -r.ieOffsetY : 2 > lt ? d - r.ieOffsetX : v - r.ieOffsetY, c[N] = (r[N] = Math.round(n - C * (0 === lt || 2 === lt ? 1 : k))) + "px";
                        E += ", sizingMethod='auto expand')"
                    }
                    c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(L, E) : E + " " + t, (0 === e || 1 === e) && 1 === u && 0 === a && 0 === f && 1 === l && (w && -1 === E.indexOf("Dx=0, Dy=0") || b.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf("gradient(") && c.removeAttribute("filter"))
                }
            },
            Et = function () {
                var e, t, n, r, i, s, o, u, a, f = this.data,
                    l = this.t.style,
                    h = f.perspective,
                    p = f.scaleX,
                    d = 0,
                    v = 0,
                    m = 0,
                    g = 0,
                    y = f.scaleY,
                    b = 0,
                    w = 0,
                    E = 0,
                    S = 0,
                    x = f.scaleZ,
                    T = 0,
                    N = 0,
                    C = 0,
                    k = h ? -1 / h : 0,
                    L = f.rotation,
                    A = f.zOrigin,
                    O = ",",
                    M = 1e5;
                c && (o = W(this.t, "top", null, !1, "0"), u = parseFloat(o) || 0, a = o.substr((u + "").length), f._ffFix = !f._ffFix, l.top = (f._ffFix ? u + .05 : u - .05) + ("" === a ? "px" : a)), (L || f.skewX) && (n = p * Math.cos(L), r = y * Math.sin(L), L -= f.skewX, d = p * -Math.sin(L), y *= Math.cos(L), p = n, g = r), L = f.rotationY, L && (e = Math.cos(L), t = Math.sin(L), n = p * e, r = g * e, i = x * -t, s = k * -t, v = p * t, b = g * t, x *= e, k *= e, p = n, g = r, E = i, N = s), L = f.rotationX, L && (e = Math.cos(L), t = Math.sin(L), n = d * e + v * t, r = y * e + b * t, i = S * e + x * t, s = C * e + k * t, v = d * -t + v * e, b = y * -t + b * e, x = S * -t + x * e, k = C * -t + k * e, d = n, y = r, S = i, C = s), A && (T -= A, m = v * T, w = b * T, T = x * T + A), m = (n = (m += f.x) - (m |= 0)) ? (0 | n * M + (0 > n ? -0.5 : .5)) / M + m : m, w = (n = (w += f.y) - (w |= 0)) ? (0 | n * M + (0 > n ? -0.5 : .5)) / M + w : w, T = (n = (T += f.z) - (T |= 0)) ? (0 | n * M + (0 > n ? -0.5 : .5)) / M + T : T, l[vt] = "matrix3d(" + (p * M >> 0) / M + O + (g * M >> 0) / M + O + (E * M >> 0) / M + O + (N * M >> 0) / M + O + (d * M >> 0) / M + O + (y * M >> 0) / M + O + (S * M >> 0) / M + O + (C * M >> 0) / M + O + (v * M >> 0) / M + O + (b * M >> 0) / M + O + (x * M >> 0) / M + O + (k * M >> 0) / M + O + m + O + w + O + T + O + (h ? 1 + -T / h : 1) + ")"
            },
            St = function () {
                var e, t, n, r, i, s, o, u, a = this.data,
                    f = this.t;
                c && (e = W(f, "top", null, !1, "0"), t = parseFloat(e) || 0, n = e.substr((t + "").length), a._ffFix = !a._ffFix, f.style.top = (a._ffFix ? t + .05 : t - .05) + ("" === n ? "px" : n)), a.rotation || a.skewX ? (r = a.rotation, i = r - a.skewX, s = 1e5, o = a.scaleX * s, u = a.scaleY * s, f.style[vt] = "matrix(" + (Math.cos(r) * o >> 0) / s + "," + (Math.sin(r) * o >> 0) / s + "," + (Math.sin(i) * -u >> 0) / s + "," + (Math.cos(i) * u >> 0) / s + "," + a.x + "," + a.y + ")") : f.style[vt] = "matrix(" + a.scaleX + ",0,0," + a.scaleY + "," + a.x + "," + a.y + ")"
            };
        ht("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", null, function (e, t, n, i, s, o, u) {
            if (i._transform) return s;
            var a, f, l, c, h, p, d, v = i._transform = bt(e, r, !0),
                m = e.style,
                g = 1e-6,
                y = dt.length,
                b = u;
            if ("string" == typeof b.transform && vt) l = m.cssText, m[vt] = b.transform, m.display = "block", a = bt(e, null, !1), m.cssText = l;
            else if ("object" == typeof b) {
                if (a = {
                    scaleX: Z(null != b.scaleX ? b.scaleX : b.scale, v.scaleX),
                    scaleY: Z(null != b.scaleY ? b.scaleY : b.scale, v.scaleY),
                    scaleZ: Z(null != b.scaleZ ? b.scaleZ : b.scale, v.scaleZ),
                    x: Z(b.x, v.x),
                    y: Z(b.y, v.y),
                    z: Z(b.z, v.z),
                    perspective: Z(b.transformPerspective, v.perspective)
                }, d = b.directionalRotation, null != d) if ("object" == typeof d) for (l in d) b[l] = d[l];
                else b.rotation = d;
                a.rotation = et("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : v.rotation * O, v.rotation), yt && (a.rotationX = et("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : v.rotationX * O || 0, v.rotationX), a.rotationY = et("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : v.rotationY * O || 0, v.rotationY)), a.skewX = null == b.skewX ? v.skewX : et(b.skewX, v.skewX), a.skewY = null == b.skewY ? v.skewY : et(b.skewY, v.skewY), (f = a.skewY - v.skewY) && (a.skewX += f, a.rotation += f)
            }
            for (h = v.z || v.rotationX || v.rotationY || a.z || a.rotationX || a.rotationY || a.perspective, h || null == b.scale || (a.scaleZ = 1) ; --y > -1;) n = dt[y], c = a[n] - v[n], (c > g || -g > c || null != M[n]) && (p = !0, s = new at(v, n, v[n], c, s), s.xs0 = 0, s.plugin = o, i._overwriteProps.push(s.n));
            return c = b.transformOrigin, (c || yt && h && v.zOrigin) && (vt ? (p = !0, c = (c || W(e, n, r, !1, "50% 50%")) + "", n = gt, s = new at(m, n, 0, 0, s, -1, "css_transformOrigin"), s.b = m[n], s.plugin = o, yt ? (l = v.zOrigin, c = c.split(" "), v.zOrigin = (c.length > 2 ? parseFloat(c[2]) : l) || 0, s.xs0 = s.e = m[n] = c[0] + " " + (c[1] || "50%") + " 0px", s = new at(v, "zOrigin", 0, 0, s, -1, s.n), s.b = l, s.xs0 = s.e = v.zOrigin) : s.xs0 = s.e = m[n] = c) : G(c + "", v)), p && (i._transformType = h || 3 === this._transformType ? 3 : 2), s
        }, !0), ht("boxShadow", "0px 0px 0px 0px #999", function (e, t, n, i, s, o) {
            var u = -1 !== (t + "").indexOf("inset") ? " inset" : "";
            return this.parseComplex(e.style, this.format(W(e, this.p, r, !1, this.dflt)) + u, this.format(t) + u, s, o)
        }, !0, !0), ht("borderRadius", "0px", function (e, t, i, s, o) {
            t = this.format(t);
            var u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                T = e.style;
            for (v = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), u = t.split(" "), a = 0; x.length > a; a++) this.p.indexOf("border") && (x[a] = U(x[a])), c = l = W(e, x[a], r, !1, "0px"), -1 !== c.indexOf(" ") && (l = c.split(" "), c = l[0], l = l[1]), h = f = u[a], p = parseFloat(c), y = c.substr((p + "").length), b = "=" === h.charAt(1), b ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), g = h.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(h), g = h.substr((d + "").length)), "" === g && (g = n[i] || y), g !== y && (w = Q(e, "borderLeft", p, y), E = Q(e, "borderTop", p, y), "%" === g ? (c = 100 * (w / v) + "%", l = 100 * (E / m) + "%") : "em" === g ? (S = Q(e, "borderLeft", 1, "em"), c = w / S + "em", l = E / S + "em") : (c = w + "px", l = E + "px"), b && (h = parseFloat(c) + d + g, f = parseFloat(l) + d + g)), o = ft(T, x[a], c + " " + l, h + " " + f, !1, "0px", o);
            return o
        }, !0, !1, st("0px 0px 0px 0px", !1, !0)), ht("backgroundPosition", "0 0", function (e, t, n, i, s, o) {
            var u, a, f, l, c, h, d = "background-position",
                v = r || z(e, null),
                m = this.format((v ? p ? v.getPropertyValue(d + "-x") + " " + v.getPropertyValue(d + "-y") : v.getPropertyValue(d) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                g = this.format(t);
            if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (h = W(e, "backgroundImage").replace(T, ""), h && "none" !== h)) {
                for (u = m.split(" "), a = g.split(" "), P.setAttribute("src", h), f = 2; --f > -1;) m = u[f], l = -1 !== m.indexOf("%"), l !== (-1 !== a[f].indexOf("%")) && (c = 0 === f ? e.offsetWidth - P.width : e.offsetHeight - P.height, u[f] = l ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                m = u.join(" ")
            }
            return this.parseComplex(e.style, m, g, s, o)
        }, !1, !1, G), ht("backgroundSize", "0 0", null, !1, !1, G), ht("perspective", "0px", null, !0), ht("perspectiveOrigin", "50% 50%", null, !0), ht("transformStyle", null, null, !0), ht("backfaceVisibility", null, null, !0), ht("margin", null, ot("marginTop,marginRight,marginBottom,marginLeft")), ht("padding", null, ot("paddingTop,paddingRight,paddingBottom,paddingLeft")), ht("clip", "rect(0px,0px,0px,0px)"), ht("textShadow", "0px 0px 0px #999", null, !1, !0), ht("autoRound,strictUnits", null, function (e, t, n, r, i) {
            return i
        }), ht("border", "0px solid #000", function (e, t, n, i, s, o) {
            return this.parseComplex(e.style, this.format(W(e, "borderTopWidth", r, !1, "0px") + " " + W(e, "borderTopStyle", r, !1, "solid") + " " + W(e, "borderTopColor", r, !1, "#000")), this.format(t), s, o)
        }, !1, !0, function (e) {
            var t = e.split(" ");
            return t[0] + " " + (t[1] || "solid") + " " + (e.match(it) || ["#000"])[0]
        }), ht("float,cssFloat,styleFloat", null, function (e, t, n, r, i) {
            var s = e.style,
                o = "cssFloat" in s ? "cssFloat" : "styleFloat";
            return new at(s, o, 0, 0, i, -1, n, !1, 0, s[o], t)
        });
        var xt = function (e) {
            var t, n = this.t,
                r = n.filter,
                i = this.s + this.c * e >> 0;
            100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") ? (n.removeAttribute("filter"), t = !W(this.data, "filter")) : (n.filter = r.replace(E, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=100)"), -1 === r.indexOf("opacity") ? n.filter += " alpha(opacity=" + i + ")" : n.filter = r.replace(b, "opacity=" + i))
        };
        ht("opacity,alpha,autoAlpha", "1", function (e, t, n, i, s, o) {
            var u, a = parseFloat(W(e, "opacity", r, !1, "1")),
                f = e.style;
            return t = parseFloat(t), "autoAlpha" === n && (u = W(e, "visibility", r), 1 === a && "hidden" === u && 0 !== t && (a = 0), s = new at(f, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "visible" : "hidden", 0 === t ? "hidden" : "visible"), s.xs0 = "visible", i._overwriteProps.push(s.n)), j ? s = new at(f, "opacity", a, t - a, s) : (s = new at(f, "opacity", 100 * a, 100 * (t - a), s), s.xn1 = "autoAlpha" === n ? 1 : 0, f.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = xt), s
        });
        var Tt = function (e) {
            if (1 === e || 0 === e) {
                this.t.className = 1 === e ? this.e : this.b;
                for (var t = this.data, n = this.t.style, r = n.removeProperty ? "removeProperty" : "removeAttribute"; t;) t.v ? n[t.p] = t.v : n[r](t.p.replace(S, "-$1").toLowerCase()), t = t._next
            } else this.t.className !== this.b && (this.t.className = this.b)
        };
        ht("className", null, function (e, n, i, s, o, u, a) {
            var f, l, c = e.className,
                h = e.style.cssText;
            return o = s._classNamePT = new at(e, i, 0, 0, o, 2), o.setRatio = Tt, o.pr = -11, t = !0, o.b = c, o.e = "=" !== n.charAt(1) ? n : "+" === n.charAt(0) ? c + " " + n.substr(2) : c.split(n.substr(2)).join(""), s._tween._duration && (l = X(e, r, !0), e.className = o.e, f = V(e, l, X(e), a), e.className = c, o.data = f.firstMPT, e.style.cssText = h, o = o.xfirst = s.parse(e, f.difs, o, u)), o
        });
        var Nt = function (e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration) for (var t, n = "all" === this.e, r = this.t.style, i = n ? r.cssText.split(";") : this.e.split(","), s = r.removeProperty ? "removeProperty" : "removeAttribute", u = i.length, a = o.transform.parse; --u > -1;) t = i[u], n && (t = t.substr(0, t.indexOf(":")).split(" ").join("")), o[t] && (t = o[t].parse === a ? vt : o[t].p), t && r[s](t.replace(S, "-$1").toLowerCase())
        };
        for (ht("clearProps", null, function (e, n, r, i, s) {
            return s = new at(e, r, 0, 0, s, 2), s.setRatio = Nt, s.e = n, s.pr = -10, s.data = i._tween, t = !0, s
        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), lt = u.length; lt--;) pt(u[lt]);
        return u = s.prototype, u._firstPT = null, u._onInitTween = function (e, o, u) {
            if (!e.nodeType) return !1;
            this._target = e, this._tween = u, this._vars = o, a = o.autoRound, t = !1, n = o.suffixMap || s.suffixMap, r = z(e, ""), i = this._overwriteProps;
            var c, p, d, v, m, g, y, b, E, S = e.style;
            if (f && "" === S.zIndex && (c = W(e, "zIndex", r), ("auto" === c || "" === c) && (S.zIndex = 0)), "string" == typeof o && (v = S.cssText, c = X(e, r), S.cssText = v + ";" + o, c = V(e, c, X(e)).difs, !j && w.test(o) && (c.opacity = parseFloat(RegExp.$1)), o = c, S.cssText = v), this._firstPT = p = this.parse(e, o, null), this._transformType) {
                for (E = 3 === this._transformType, vt ? l && (f = !0, "" === S.zIndex && (y = W(e, "zIndex", r), ("auto" === y || "" === y) && (S.zIndex = 0)), h && (S.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (E ? "visible" : "hidden"))) : S.zoom = 1, d = p; d && d._next;) d = d._next;
                b = new at(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, d), b.setRatio = E && yt ? Et : vt ? St : wt, b.data = this._transform || bt(e, r, !0), i.pop()
            }
            if (t) {
                for (; p;) {
                    for (g = p._next, d = v; d && d.pr > p.pr;) d = d._next;
                    (p._prev = d ? d._prev : m) ? p._prev._next = p : v = p, (p._next = d) ? d._prev = p : m = p, p = g
                }
                this._firstPT = v
            }
            return !0
        }, u.parse = function (e, t, i, s) {
            var u, f, l, c, h, p, d, v, m, g, b = e.style;
            for (u in t) p = t[u], f = o[u], f ? i = f.parse(e, p, u, this, i, s, t) : (h = W(e, u, r) + "", m = "string" == typeof p, "color" === u || "fill" === u || "stroke" === u || -1 !== u.indexOf("Color") || m && !p.indexOf("rgb") ? (m || (p = rt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = ft(b, u, h, p, !0, "transparent", i, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(h), d = l || 0 === l ? h.substr((l + "").length) : "", ("" === h || "auto" === h) && ("width" === u || "height" === u ? (l = K(e, u, r), d = "px") : (l = "opacity" !== u ? 0 : 1, d = "")), g = m && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(y, "")) : (c = parseFloat(p), v = m ? p.substr((c + "").length) || "" : ""), "" === v && (v = n[u] || d), p = c || 0 === c ? (g ? c + l : c) + v : t[u], d !== v && "" !== v && (c || 0 === c) && (l || 0 === l) && (l = Q(e, u, l, d), "%" === v ? (l /= Q(e, u, 100, "%") / 100, l > 100 && (l = 100), t.strictUnits !== !0 && (h = l + "%")) : "em" === v ? l /= Q(e, u, 1, "em") : (c = Q(e, u, c, v), v = "px"), g && (c || 0 === c) && (p = c + l + v)), g && (c += l), !l && 0 !== l || !c && 0 !== c ? p || "NaN" != p + "" && null != p ? (i = new at(b, u, c || l || 0, 0, i, -1, "css_" + u, !1, 0, h, p), i.xs0 = "display" === u && "none" === p ? h : p) : I("invalid " + u + " tween value. ") : (i = new at(b, u, l, c - l, i, 0, "css_" + u, a !== !1 && ("px" === v || "zIndex" === u), 0, h, p), i.xs0 = v)) : i = ft(b, u, h, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
            return i
        }, u.setRatio = function (e) {
            var t, n, r, i = this._firstPT,
                s = 1e-6;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001) for (; i;) {
                if (t = i.c * e + i.s, i.r ? t = t > 0 ? t + .5 >> 0 : t - .5 >> 0 : s > t && t > -s && (t = 0), i.type) if (1 === i.type) if (r = i.l, 2 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                else if (3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                else if (4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                else if (5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                else {
                    for (n = i.xs0 + t + i.xs1, r = 1; i.l > r; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                    i.t[i.p] = n
                } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                else i.t[i.p] = t + i.xs0;
                i = i._next
            } else for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
            else for (; i;) 2 !== i.type ? i.t[i.p] = i.e : i.setRatio(e), i = i._next
        }, u._enableTransforms = function (e) {
            this._transformType = e || 3 === this._transformType ? 3 : 2
        }, u._linkCSSP = function (e, t, n, r) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next), e._next = t, e._prev = n), e
        }, u._kill = function (t) {
            var n, r, i, s = t,
                o = !1;
            if (t.css_autoAlpha || t.css_alpha) {
                s = {};
                for (r in t) s[r] = t[r];
                s.css_opacity = 1, s.css_autoAlpha && (s.css_visibility = 1)
            }
            return t.css_className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = null), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._target._gsOverwrittenClassNamePT = this._linkCSSP(n, this._target._gsOverwrittenClassNamePT), this._classNamePT = null, o = !0), e.prototype._kill.call(this, s) || o
        }, e.activate([s]), s
    }, !0), function () {
        var e = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (e, t, n) {
                return this._tween = n, !0
            }
        }),
            t = e.prototype;
        t._onInitAllProps = function () {
            for (var e, t, n, r = this._tween, i = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), s = i.length, o = {}, u = r._propLookup.roundProps; --s > -1;) o[i[s]] = 1;
            for (s = i.length; --s > -1;) for (e = i[s], t = r._firstPT; t;) n = t._next, t.pg ? t.t._roundProps(o, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), n && (n._prev = t._prev), t._prev ? t._prev._next = n : r._firstPT === t && (r._firstPT = n), t._next = t._prev = null, r._propLookup[e] = u), t = n;
            return !1
        }, t._add = function (e, t, n, r) {
            this._addTween(e, t, n, n + r, t, !0), this._overwriteProps.push(t)
        }
    }(), window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function (e, t) {
            var n;
            if ("function" != typeof e.setAttribute) return !1;
            this._target = e, this._proxy = {};
            for (n in t) this._addTween(this._proxy, n, parseFloat(e.getAttribute(n)), t[n], n), this._overwriteProps.push(n);
            return !0
        },
        set: function (e) {
            this._super.setRatio.call(this, e);
            for (var t, n = this._overwriteProps, r = n.length; --r > -1;) t = n[r], this._target.setAttribute(t, this._proxy[t] + "")
        }
    }), window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function (e, t, n) {
            "object" != typeof t && (t = {
                rotation: t
            }), this.finals = {}, this._tween = n;
            var r, i, s, o, u, a, f, l = t.useRadians === !0 ? 2 * Math.PI : 360;
            for (r in t) "useRadians" !== r && (a = (t[r] + "").split("_"), i = a[0], f = a[1], s = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof i && "=" === i.charAt(1) ? s + parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2)) : Number(i) || 0, u = o - s, "short" === f ? (u %= l, u !== u % (l / 2) && (u = 0 > u ? u + l : u - l)) : "cw" === f && 0 > u ? u = (u + 9999999999 * l) % l - (0 | u / l) * l : "ccw" === f && u > 0 && (u = (u - 9999999999 * l) % l - (0 | u / l) * l), this._addTween(e, r, s, s + u, r), this._overwriteProps.push(r));
            return !0
        },
        set: function (e) {
            var t;
            if (1 !== e) this._super.setRatio.call(this, e);
            else for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
    })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t, n, r = window.GreenSockGlobals || window,
            i = r.com.greensock,
            s = 2 * Math.PI,
            o = Math.PI / 2,
            u = i._class,
            a = function (t, n) {
                var r = u("easing." + t, function () { }, !0),
                    i = r.prototype = new e;
                return i.constructor = r, i.getRatio = n, r
            },
            f = e.register ||
        function () { }, l = function (e, t, n, r) {
            var i = u("easing." + e, {
                easeOut: new t,
                easeIn: new n,
                easeInOut: new r
            }, !0);
            return f(i, e), i
        }, c = function (t, n) {
            var r = u("easing." + t, function (e) {
                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
            }, !0),
                i = r.prototype = new e;
            return i.constructor = r, i.getRatio = n, i.config = function (e) {
                return new r(e)
            }, r
        }, h = l("Back", c("BackOut", function (e) {
            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
        }), c("BackIn", function (e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
        }), c("BackInOut", function (e) {
            return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
        })), p = u("easing.SlowMo", function (e, t, n) {
            t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
        }, !0), d = p.prototype = new e;
        return d.constructor = p, d.getRatio = function (e) {
            var t = e + (.5 - e) * this._p;
            return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, p.ease = new p(.7, .7), d.config = p.config = function (e, t, n) {
            return new p(e, t, n)
        }, t = u("easing.SteppedEase", function (e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), d = t.prototype = new e, d.constructor = t, d.getRatio = function (e) {
            return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, d.config = t.config = function (e) {
            return new t(e)
        }, l("Bounce", a("BounceOut", function (e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), a("BounceIn", function (e) {
            return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), a("BounceInOut", function (e) {
            var t = .5 > e;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), l("Circ", a("CircOut", function (e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), a("CircIn", function (e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), a("CircInOut", function (e) {
            return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), n = function (t, n, r) {
            var i = u("easing." + t, function (e, t) {
                this._p1 = e || 1, this._p2 = t || r, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
            }, !0),
                o = i.prototype = new e;
            return o.constructor = i, o.getRatio = n, o.config = function (e, t) {
                return new i(e, t)
            }, i
        }, l("Elastic", n("ElasticOut", function (e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * s / this._p2) + 1
        }, .3), n("ElasticIn", function (e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * s / this._p2))
        }, .3), n("ElasticInOut", function (e) {
            return 1 > (e *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * s / this._p2) + 1
        }, .45)), l("Expo", a("ExpoOut", function (e) {
            return 1 - Math.pow(2, -10 * e)
        }), a("ExpoIn", function (e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), a("ExpoInOut", function (e) {
            return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), l("Sine", a("SineOut", function (e) {
            return Math.sin(e * o)
        }), a("SineIn", function (e) {
            return -Math.cos(e * o) + 1
        }), a("SineInOut", function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1)
        })), u("easing.EaseLookup", {
            find: function (t) {
                return e.map[t]
            }
        }, !0), f(r.SlowMo, "SlowMo", "ease,"), f(t, "SteppedEase", "ease,"), h
    }, !0)
}), function (e) {
    var t, n, r, i, s = e.GreenSockGlobals || e,
        o = function (e) {
            var t, n = e.split("."),
                r = s;
            for (t = 0; n.length > t; t++) r[n[t]] = r = r[n[t]] || {};
            return r
        },
        u = o("com.greensock"),
        a = {},
        f = function (t, n, r, i) {
            this.sc = a[t] ? a[t].sc : [], a[t] = this, this.gsClass = null, this.func = r;
            var u = [];
            this.check = function (l) {
                for (var c, h, p, d, v = n.length, m = v; --v > -1;) (c = a[n[v]] || new f(n[v], [])).gsClass ? (u[v] = c.gsClass, m--) : l && c.sc.push(this);
                if (0 === m && r) for (h = ("com.greensock." + t).split("."), p = h.pop(), d = o(h.join("."))[p] = this.gsClass = r.apply(r, u), i && (s[p] = d, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").join("/"), [], function () {
                    return d
                }) : "undefined" != typeof module && module.exports && (module.exports = d)), v = 0; this.sc.length > v; v++) this.sc[v].check()
            }, this.check(!0)
        },
        l = e._gsDefine = function (e, t, n, r) {
            return new f(e, t, n, r)
        },
        c = u._class = function (e, t, n) {
            return t = t ||
            function () { }, l(e, [], function () {
                return t
            }, n), t
        };
    l.globals = s;
    var h = [0, 0, 1, 1],
        p = [],
        d = c("easing.Ease", function (e, t, n, r) {
            this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? h.concat(t) : h
        }, !0),
        v = d.map = {},
        m = d.register = function (e, t, n, r) {
            for (var i, s, o, a, f = t.split(","), l = f.length, h = (n || "easeIn,easeOut,easeInOut").split(",") ; --l > -1;) for (s = f[l], i = r ? c("easing." + s, null, !0) : u.easing[s] || {}, o = h.length; --o > -1;) a = h[o], v[s + "." + a] = v[a + s] = i[a] = e.getRatio ? e : e[a] || new e
        };
    for (r = d.prototype, r._calcEnd = !1, r.getRatio = function (e) {
        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
        var t = this._type,
            n = this._power,
            r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
        return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
    }, t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = t.length; --n > -1;) r = t[n] + ",Power" + n, m(new d(null, null, 1, n), r, "easeOut", !0), m(new d(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), m(new d(null, null, 3, n), r, "easeInOut");
    v.linear = u.easing.Linear.easeIn, v.swing = u.easing.Quad.easeInOut;
    var g = c("events.EventDispatcher", function (e) {
        this._listeners = {}, this._eventTarget = e || this
    });
    r = g.prototype, r.addEventListener = function (e, t, n, r, i) {
        i = i || 0;
        var s, o, u = this._listeners[e],
            a = 0;
        for (null == u && (this._listeners[e] = u = []), o = u.length; --o > -1;) s = u[o], s.c === t ? u.splice(o, 1) : 0 === a && i > s.pr && (a = o + 1);
        u.splice(a, 0, {
            c: t,
            s: n,
            up: r,
            pr: i
        })
    }, r.removeEventListener = function (e, t) {
        var n, r = this._listeners[e];
        if (r) for (n = r.length; --n > -1;) if (r[n].c === t) return r.splice(n, 1), void 0
    }, r.dispatchEvent = function (e) {
        var t = this._listeners[e];
        if (t) for (var n, r = t.length, i = this._eventTarget; --r > -1;) n = t[r], n.up ? n.c.call(n.s || i, {
            type: e,
            target: i
        }) : n.c.call(n.s || i)
    };
    var y = e.requestAnimationFrame,
        b = e.cancelAnimationFrame,
        w = Date.now ||
    function () {
        return (new Date).getTime()
    };
    for (t = ["ms", "moz", "webkit", "o"], n = t.length; --n > -1 && !y;) y = e[t[n] + "RequestAnimationFrame"], b = e[t[n] + "CancelAnimationFrame"] || e[t[n] + "CancelRequestAnimationFrame"];
    c("Ticker", function (t, n) {
        var r, i, s, o, u, a = this,
            f = w(),
            l = n !== !1 && y,
            c = function () {
                null != s && (l && b ? b(s) : e.clearTimeout(s), s = null)
            },
            h = function (e) {
                a.time = (w() - f) / 1e3, (!r || a.time >= u || e === !0) && (a.frame++, u = a.time > u ? a.time + o - (a.time - u) : a.time + o - .001, a.time + .001 > u && (u = a.time + .001), a.dispatchEvent("tick")), e !== !0 && (s = i(h))
            };
        g.call(a), this.time = this.frame = 0, this.tick = function () {
            h(!0)
        }, this.fps = function (e) {
            return arguments.length ? (r = e, o = 1 / (r || 60), u = this.time + o, i = 0 === r ?
            function () { } : l && y ? y : function (e) {
                return setTimeout(e, 1e3 * (u - a.time) + 1 >> 0 || 1)
            }, c(), s = i(h), void 0) : r
        }, this.useRAF = function (e) {
            return arguments.length ? (c(), l = e, a.fps(r), void 0) : l
        }, a.fps(t), setTimeout(function () {
            l && !s && a.useRAF(!1)
        }, 1e3)
    }), r = u.Ticker.prototype = new u.events.EventDispatcher, r.constructor = u.Ticker;
    var E = c("core.Animation", function (e, t) {
        if (this.vars = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, P) {
            i || (S.tick(), i = !0);
            var n = this.vars.useFrames ? D : P;
            n.add(this, n._time), this.vars.paused && this.paused(!0)
        }
    }),
        S = E.ticker = new u.Ticker;
    r = E.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1, r.play = function (e, t) {
        return arguments.length && this.seek(e, t), this.reversed(!1), this.paused(!1)
    }, r.pause = function (e, t) {
        return arguments.length && this.seek(e, t), this.paused(!0)
    }, r.resume = function (e, t) {
        return arguments.length && this.seek(e, t), this.paused(!1)
    }, r.seek = function (e, t) {
        return this.totalTime(Number(e), t !== !1)
    }, r.restart = function (e, t) {
        return this.reversed(!1), this.paused(!1), this.totalTime(e ? -this._delay : 0, t !== !1)
    }, r.reverse = function (e, t) {
        return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0), this.paused(!1)
    }, r.render = function () { }, r.invalidate = function () {
        return this
    }, r._enabled = function (e, t) {
        return this._gc = !e, this._active = e && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, t !== !0 && (e && null == this.timeline ? this._timeline.add(this, this._startTime - this._delay) : e || null == this.timeline || this._timeline._remove(this, !0)), !1
    }, r._kill = function () {
        return this._enabled(!1, !1)
    }, r.kill = function (e, t) {
        return this._kill(e, t), this
    }, r._uncache = function (e) {
        for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
        return this
    }, r.eventCallback = function (e, t, n, r) {
        if (null == e) return null;
        if ("on" === e.substr(0, 2)) {
            if (1 === arguments.length) return this.vars[e];
            if (null == t) delete this.vars[e];
            else if (this.vars[e] = t, this.vars[e + "Params"] = n, this.vars[e + "Scope"] = r, n) for (var i = n.length; --i > -1;) "{self}" === n[i] && (n = this.vars[e + "Params"] = n.concat(), n[i] = this);
            "onUpdate" === e && (this._onUpdate = t)
        }
        return this
    }, r.delay = function (e) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
    }, r.duration = function (e) {
        return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, r.totalDuration = function (e) {
        return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
    }, r.time = function (e, t) {
        return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this.totalTime(e, t)) : this._time
    }, r.totalTime = function (e, t) {
        if (!arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > e && (e += this.totalDuration()), this._timeline.smoothChildTiming && (this._dirty && this.totalDuration(), e > this._totalDuration && (e = this._totalDuration), this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (this._reversed ? this._totalDuration - e : e) / this._timeScale, this._timeline._dirty || this._uncache(!1), !this._timeline._active)) for (var n = this._timeline; n._timeline;) n.totalTime(n._totalTime, !0), n = n._timeline;
            this._gc && this._enabled(!0, !1), this._totalTime !== e && this.render(e, t, !1)
        }
        return this
    }, r.startTime = function (e) {
        return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
    }, r.timeScale = function (e) {
        if (!arguments.length) return this._timeScale;
        if (e = e || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime || 0 === this._pauseTime ? this._pauseTime : this._timeline._totalTime;
            this._startTime = t - (t - this._startTime) * this._timeScale / e
        }
        return this._timeScale = e, this._uncache(!1)
    }, r.reversed = function (e) {
        return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, r.paused = function (e) {
        return arguments.length ? (e != this._paused && this._timeline && (!e && this._timeline.smoothChildTiming && (this._startTime += this._timeline.rawTime() - this._pauseTime, this._uncache(!1)), this._pauseTime = e ? this._timeline.rawTime() : null, this._paused = e, this._active = !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration), this._gc && (e || this._enabled(!0, !1)), this) : this._paused
    };
    var x = c("core.SimpleTimeline", function (e) {
        E.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    r = x.prototype = new E, r.constructor = x, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = function (e, t) {
        var n, r;
        if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren) for (r = e._startTime; n && n._startTime > r;) n = n._prev;
        return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._timeline && this._uncache(!0), this
    }, r.insert = r.add, r._remove = function (e, t) {
        return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
    }, r.render = function (e, t, n) {
        var r, i = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
    }, r.rawTime = function () {
        return this._totalTime
    };
    var T = c("TweenLite", function (e, t, n) {
        if (E.call(this, t, n), null == e) throw "Cannot tween an undefined reference.";
        this.target = e = "string" != typeof e ? e : T.selector(e) || e, this._overwrite = null == this.vars.overwrite ? _[T.defaultOverwrite] : "number" == typeof this.vars.overwrite ? this.vars.overwrite >> 0 : _[this.vars.overwrite];
        var r, i, s = e.jquery || "function" == typeof e.each && e[0] && e[0].nodeType && e[0].style;
        if ((s || e instanceof Array) && "number" != typeof e[0]) for (this._targets = s && !e.slice ? C(e) : e.slice(0), this._propLookup = [], this._siblings = [], r = 0; this._targets.length > r; r++) i = this._targets[r], i ? "string" != typeof i ? "function" == typeof i.each && i[0] && i[0].nodeType && i[0].style ? (this._targets.splice(r--, 1), this._targets = this._targets.concat(C(i))) : (this._siblings[r] = H(i, this, !1), 1 === this._overwrite && this._siblings[r].length > 1 && B(i, this, null, 1, this._siblings[r])) : (i = this._targets[r--] = T.selector(i), "string" == typeof i && this._targets.splice(r + 1, 1)) : this._targets.splice(r--, 1);
        else this._propLookup = {}, this._siblings = H(e, this, !1), 1 === this._overwrite && this._siblings.length > 1 && B(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === t && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
    }, !0),
        N = function (e) {
            return "function" == typeof e.each && e[0] && e[0].nodeType && e[0].style
        },
        C = function (e) {
            var t = [];
            return e.each(function () {
                t.push(this)
            }), t
        },
        k = function (e, t) {
            var n, r = {};
            for (n in e) M[n] || n in t && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n || !(!L[n] || L[n] && L[n]._autoCSS) || (r[n] = e[n], delete e[n]);
            e.css = r
        };
    r = T.prototype = new E, r.constructor = T, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = !1, T.version = "1.9.0", T.defaultEase = r._ease = new d(null, null, 1, 1), T.defaultOverwrite = "auto", T.ticker = S, T.selector = e.$ || e.jQuery ||
    function (t) {
        return e.$ ? (T.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
    };
    var L = T._plugins = {},
        A = T._tweenLookup = {},
        O = 0,
        M = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            orientToBezier: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        _ = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        D = E._rootFramesTimeline = new x,
        P = E._rootTimeline = new x;
    P._startTime = S.time, D._startTime = S.frame, P._active = D._active = !0, E._updateRoot = function () {
        if (P.render((S.time - P._startTime) * P._timeScale, !1, !1), D.render((S.frame - D._startTime) * D._timeScale, !1, !1), !(S.frame % 120)) {
            var e, t, n;
            for (n in A) {
                for (t = A[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                0 === t.length && delete A[n]
            }
        }
    }, S.addEventListener("tick", E._updateRoot);
    var H = function (e, t, n) {
        var r, i, s = e._gsTweenID;
        if (A[s || (e._gsTweenID = s = "t" + O++)] || (A[s] = {
            target: e,
            tweens: []
        }), t && (r = A[s].tweens, r[i = r.length] = t, n)) for (; --i > -1;) r[i] === t && r.splice(i, 1);
        return A[s].tweens
    },
        B = function (e, t, n, r, i) {
            var s, o, u, a;
            if (1 === r || r >= 4) {
                for (a = i.length, s = 0; a > s; s++) if ((u = i[s]) !== t) u._gc || u._enabled(!1, !1) && (o = !0);
                else if (5 === r) break;
                return o
            }
            var f, l = t._startTime + 1e-10,
                c = [],
                h = 0,
                p = 0 === t._duration;
            for (s = i.length; --s > -1;) (u = i[s]) === t || u._gc || u._paused || (u._timeline !== t._timeline ? (f = f || j(t, 0, p), 0 === j(u, f, p) && (c[h++] = u)) : l >= u._startTime && u._startTime + u.totalDuration() / u._timeScale + 1e-10 > l && ((p || !u._initted) && 2e-10 >= l - u._startTime || (c[h++] = u)));
            for (s = h; --s > -1;) u = c[s], 2 === r && u._kill(n, e) && (o = !0), (2 !== r || !u._firstPT && u._initted) && u._enabled(!1, !1) && (o = !0);
            return o
        },
        j = function (e, t, n) {
            for (var r = e._timeline, i = r._timeScale, s = e._startTime; r._timeline;) {
                if (s += r._startTime, i *= r._timeScale, r._paused) return -100;
                r = r._timeline
            }
            return s /= i, s > t ? s - t : n && s === t || !e._initted && 2e-10 > s - t ? 1e-10 : (s += e.totalDuration() / e._timeScale / i) > t ? 0 : s - t - 1e-10
        };
    r._init = function () {
        var e, t, n, r = this.vars,
            i = r.ease;
        if (r.startAt && (r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = new T(this.target, 0, r.startAt), r.immediateRender && (this._startAt = null)), this._ease = i ? i instanceof d ? r.easeParams instanceof Array ? i.config.apply(i, r.easeParams) : i : "function" == typeof i ? new d(i, r.easeParams) : v[i] || T.defaultEase : T.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], this._overwrittenProps ? this._overwrittenProps[e] : null) && (t = !0);
        else t = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps);
        if (t && T._onPluginEvent("_onInitAllProps", this), this._overwrittenProps && null == this._firstPT && "function" != typeof this.target && this._enabled(!1, !1), r.runBackwards) for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
        this._onUpdate = r.onUpdate, this._initted = !0
    }, r._initProps = function (e, t, n, r) {
        var i, s, o, u, a, f, l;
        if (null == e) return !1;
        this.vars.css || e.style && e.nodeType && L.css && this.vars.autoCSS !== !1 && k(this.vars, e);
        for (i in this.vars) {
            if (M[i]) {
                if (("onStartParams" === i || "onUpdateParams" === i || "onCompleteParams" === i || "onReverseCompleteParams" === i || "onRepeatParams" === i) && (a = this.vars[i])) for (s = a.length; --s > -1;) "{self}" === a[s] && (a = this.vars[i] = a.concat(), a[s] = this)
            } else if (L[i] && (u = new L[i])._onInitTween(e, this.vars[i], this)) {
                for (this._firstPT = f = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: i,
                    pg: !0,
                    pr: u._priority
                }, s = u._overwriteProps.length; --s > -1;) t[u._overwriteProps[s]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (o = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = t[i] = f = {
                _next: this._firstPT,
                t: e,
                p: i,
                f: "function" == typeof e[i],
                n: i,
                pg: !1,
                pr: 0
            }, f.s = f.f ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i]), l = this.vars[i], f.c = "string" == typeof l && "=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0;
            f && f._next && (f._next._prev = f)
        }
        return r && this._kill(r, e) ? this._initProps(e, t, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && B(e, this, t, this._overwrite, n) ? (this._kill(t, e), this._initProps(e, t, n, r)) : o
    }, r.render = function (e, t, n) {
        var r, i, s, o = this._time;
        if (e >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete"), 0 === this._duration && ((0 === e || 0 > this._rawPrevTime) && this._rawPrevTime !== e && (n = !0), this._rawPrevTime = e);
        else if (0 >= e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === this._duration && this._rawPrevTime > 0) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = e)) : this._initted || (n = !0);
        else if (this._totalTime = this._time = e, this._easeType) {
            var u = e / this._duration,
                a = this._easeType,
                f = this._easePower;
            (1 === a || 3 === a && u >= .5) && (u = 1 - u), 3 === a && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === a ? 1 - u : 2 === a ? u : .5 > e / this._duration ? u / 2 : 1 - u / 2
        } else this.ratio = this._ease.getRatio(e / this._duration);
        if (this._time !== o || n) {
            for (this._initted || (this._init(), !r && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration))), this._active || this._paused || (this._active = !0), 0 === o && (this._startAt && this._startAt.render(e, t, n), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || p))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
            this._onUpdate && (0 > e && this._startAt && this._startAt.render(e, t, n), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p)), i && (this._gc || (0 > e && this._startAt && (this._onUpdate || this._startAt.render(e, t, n)), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || p)))
        }
    }, r._kill = function (e, t) {
        if ("all" === e && (e = null), null != e || null != t && t !== this.target) {
            t = "string" != typeof t ? t || this._targets || this.target : T.selector(t) || t;
            var n, r, i, s, o, u, a, f;
            if ((t instanceof Array || N(t)) && "number" != typeof t[0]) for (n = t.length; --n > -1;) this._kill(e, t[n]) && (u = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;) if (t === this._targets[n]) {
                        o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (t !== this.target) return !1;
                    o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    a = e || o, f = e !== r && "all" !== r && e !== o && (null == e || e._tempKill !== !0);
                    for (i in a) (s = o[i]) && (s.pg && s.t._kill(a) && (u = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[i]), f && (r[i] = 1)
                }
            }
            return u
        }
        return this._enabled(!1, !1)
    }, r.invalidate = function () {
        return this._notifyPluginsOfEnabled && T._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, r._enabled = function (e, t) {
        if (e && this._gc) if (this._targets) for (var n = this._targets.length; --n > -1;) this._siblings[n] = H(this._targets[n], this, !0);
        else this._siblings = H(this.target, this, !0);
        return E.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? T._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
    }, T.to = function (e, t, n) {
        return new T(e, t, n)
    }, T.from = function (e, t, n) {
        return n.runBackwards = !0, 0 != n.immediateRender && (n.immediateRender = !0), new T(e, t, n)
    }, T.fromTo = function (e, t, n, r) {
        return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new T(e, t, r)
    }, T.delayedCall = function (e, t, n, r, i) {
        return new T(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: !1,
            useFrames: i,
            overwrite: 0
        })
    }, T.set = function (e, t) {
        return new T(e, 0, t)
    }, T.killTweensOf = T.killDelayedCallsTo = function (e, t) {
        for (var n = T.getTweensOf(e), r = n.length; --r > -1;) n[r]._kill(t, e)
    }, T.getTweensOf = function (e) {
        if (null != e) {
            e = "string" != typeof e ? e : T.selector(e) || e;
            var t, n, r, i;
            if ((e instanceof Array || N(e)) && "number" != typeof e[0]) {
                for (t = e.length, n = []; --t > -1;) n = n.concat(T.getTweensOf(e[t]));
                for (t = n.length; --t > -1;) for (i = n[t], r = t; --r > -1;) i === n[r] && n.splice(t, 1)
            } else for (n = H(e).concat(), t = n.length; --t > -1;) n[t]._gc && n.splice(t, 1);
            return n
        }
    };
    var F = c("plugins.TweenPlugin", function (e, t) {
        this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = F.prototype
    }, !0);
    if (r = F.prototype, F.version = 12, F.API = 2, r._firstPT = null, r._addTween = function (e, t, n, r, i, s) {
        var o, u;
        null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) && (this._firstPT = u = {
        _next: this._firstPT,
        t: e,
        p: t,
        s: n,
        c: o,
        f: "function" == typeof e[t],
        n: i || t,
        r: s
    }, u._next && (u._next._prev = u))
    }, r.setRatio = function (e) {
        for (var t, n = this._firstPT, r = 1e-6; n;) t = n.c * e + n.s, n.r ? t = t + (t > 0 ? .5 : -0.5) >> 0 : r > t && t > -r && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
    }, r._kill = function (e) {
        var t, n = this._overwriteProps,
            r = this._firstPT;
        if (null != e[this._propName]) this._overwriteProps = [];
    else for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
        for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
        return !1
    }, r._roundProps = function (e, t) {
        for (var n = this._firstPT; n;) (e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
    }, T._onPluginEvent = function (e, t) {
        var n, r, i, s, o, u = t._firstPT;
        if ("_onInitAllProps" === e) {
            for (; u;) {
                for (o = u._next, r = i; r && r.pr > u.pr;) r = r._next;
                (u._prev = r ? r._prev : s) ? u._prev._next = u : i = u, (u._next = r) ? r._prev = u : s = u, u = o
    }
            u = t._firstPT = i
    }
        for (; u;) u.pg && "function" == typeof u.t[e] && u.t[e]() && (n = !0), u = u._next;
        return n
    }, F.activate = function (e) {
        for (var t = e.length; --t > -1;) e[t].API === F.API && (T._plugins[(new e[t])._propName] = e[t]);
        return !0
    }, l.plugin = function (e) {
        if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
        var t, n = e.propName,
            r = e.priority || 0,
            i = e.overwriteProps,
            s = {
        init: "_onInitTween",
        set: "setRatio",
        kill: "_kill",
        round: "_roundProps",
        initAll: "_onInitAllProps"
    },
            o = c("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                F.call(this, n, r), this._overwriteProps = i || []
    }, e.global === !0),
            u = o.prototype = new F(n);
        u.constructor = o, o.API = e.API;
        for (t in s) "function" == typeof e[t] && (u[s[t]] = e[t]);
        return o.version = e.version, F.activate([o]), o
    }, t = e._gsQueue) {
        for (n = 0; t.length > n; n++) t[n]();
        for (r in a) a[r].func || e.console.log("GSAP encountered missing dependency: com.greensock." + r)
    }
    i = !1
}(window), define("TweenMax", function () { }), define("Views/Components/socialnetwork-view-controller", ["jquery", "underscore"], function (e, t) {
    var n = Backbone.View.extend({
        events: {
            "click .link": "getNetworkName"
        },
        initialize: function () { },
        getNetworkName: function (t) {
            t.preventDefault(), e(t.target).prop("tagName") != "A" ? element = e(t.target).parents("a") : element = e(t.target);
            var n = {
                networkName: element.attr("data-social"),
                networkShareUrl: window.location.href
            };
            n.networkName != undefined && this.createShareNetworkObject(n)
        },
        createShareNetworkObject: function (e) {
            title = document.title;
            var t = encodeURIComponent(e.networkShareUrl),
                n = encodeURIComponent(title);
            switch (e.networkName.toLowerCase()) {
                case "facebook":
                    return this.openPopupWindow("http://www.facebook.com/sharer.php?u=" + t, 657, 380), !1;
                case "twitter":
                    return this.openPopupWindow("http://www.twitter.com/home/?status=" + e.networkShareUrl, 815, 400), !1;
                case "google":
                    return this.openPopupWindow("https://plus.google.com/share?url=" + t + "&title=" + n + "&summary=" + n, 960, 570), !1;
                case "sina-weibo":
                    return this.openPopupWindow("http://v.t.sina.com.cn/share/share.php?url=" + t + "&title=" + n, 607, 523), !1;
                case "douban":
                    return this.openPopupWindow("http://www.douban.com/recommend/?url=" + t + "&title=" + n, 450, 350), !1;
                case "renren":
                    return this.openPopupWindow("http://share.renren.com/share/buttonshare.do?link=" + t + "&title=" + n, 540, 342), !1
            }
        },
        openPopupWindow: function (e, t, n) {
            var r = screen.width / 2,
                i = screen.height / 2;
            popupWindow = window.open(e, "sharer", "toolbar=0,status=0,width=" + t + " +,height=" + n + ",top=" + (i - n / 2) + ",left=" + (r - t / 2) + "")
        }
    });
    return n
}), define("Views/Modules/simplecontent", ["jquery", "underscore", "Backbone", "Modules/getContentViaAjax", "Modules/fadeovercontent", "Modules/notification-dispatcher", "TweenMax"], function (e, t, n, r, i, s, o) {
    var u = n.View.extend({
        events: {
            "click .modal-close": "onOverlayClose",
            "click .modal-next": "onOverlayNext",
            "click .modal-previous": "onOverlayPrevious",
            "click .modal-share": "onOverlayShareClick",
            "mouseenter .social-button-wrapper": "onShareHoverEnter",
            "mouseleave .social-button-wrapper": "onShareHoverLeave",
            "click .modal-print": "onOverlayPrint",
            "click .modal-back-to-top": "onOverlayBackToTop"
        },
        initialize: function (n) {
            var r = this;
            this.parentUrl = e(".modal-close").attr("href"), this.resizeEvent = t.bind(this.toggleBackToTop, this), this.options = e.extend({
                isModal: null
            }, n || {}), this.options.isModal ? this.isModal = this.options.isModal : (this.isModal = !1, this.nonModalSetup()), e(".feel-template").on("click", function (t) {
                t.stopPropagation(), e(".modal-close").trigger("click")
            }), e(".feel-content").on("click", function (e) {
                e.stopPropagation()
            }), require(["Views/Components/socialnetwork-view-controller"], t.bind(function (e) {
                var t = new e({
                    el: ".social-buttons"
                })
            }, this)), setTimeout(function () {
                r.toggleBackToTop()
            }, 300), e(window).on("resize", this.resizeEvent), this.updateLinks()
        },
        updateLinks: function () {
            var t = AppModel.get("body").find('a[href^="http"],a[href^="../"]');
            e.each(t, function (t, n) {
                if (!n.hash) {
                    var r = e(n);
                    r.attr("target") != "_blank" && r.attr("target", "_blank")
                }
            })
        },
        toggleBackToTop: function () {
            this.checkScrollRequired() === !0 ? e(".modal-back-to-top").show() : this.checkScrollRequired() === !1 && e(".modal-back-to-top").hide()
        },
        nonModalSetup: function () {
            this.loadParentInBackground(), this.overlay = new i, this.overlay.open(), e(".container").css({
                position: "relative",
                top: 0
            })
        },
        loadParentInBackground: function () {
            var t = this;
            e(this.el).parent().css({
                "z-index": 10001,
                position: "relative"
            });
            var n = new r({
                contentType: "text/html",
                dataType: "html",
                contentUrl: t.parentUrl,
                onBefore: function () { },
                onSuccess: function (t) {
                    var n = e(t).find(".body").html();
                    e(".parent-content").html(n)
                }
            })
        },
        onOverlayClose: function (t) {
            t.preventDefault(), e(window).off("resize", this.resizeEvent), this.isModal ? global.historyService.back() : window.location = this.parentUrl
        },
        onOverlayNext: function (e) {
            e.preventDefault()
        },
        onOverlayPrevious: function (e) {
            e.preventDefault()
        },
        onOverlayShareClick: function (e) {
            e.preventDefault()
        },
        onOverlayPrint: function (e) {
            e.preventDefault(), window.print();
            var t = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
                n = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            (t || n) && window.location.reload(!0)
        },
        onShareHoverEnter: function (t) {
            var n = e(".social-buttons"),
                r = n.width(),
                i = parseInt(n.css("margin-left")),
                s = {
                    val: i
                };
            o.to(s, .5, {
                val: -r,
                ease: Power4.easeInOut,
                onUpdate: function () {
                    n.css("margin-left", s.val + "px")
                }
            })
        },
        onShareHoverLeave: function (t) {
            var n = e(".social-buttons"),
                r = parseInt(n.css("margin-left")),
                i = {
                    val: r
                };
            o.to(i, .5, {
                val: 0,
                ease: Power4.easeInOut,
                onUpdate: function () {
                    n.css("margin-left", i.val + "px")
                }
            })
        },
        checkScrollRequired: function () {
            var t = e(".simple-content").height(),
                n = e(".feel-content").height(),
                r = e(window).height();
            return t > r || n > r ? !0 : !1
        },
        onOverlayBackToTop: function (t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, 750)
        }
    });
    return u
}), define("Modules/contentoverlay", ["Modules/fadeovercontent", "Modules/getContentViaAjax", "Modules/notification-dispatcher", "Modules/history-service", "Views/Modules/simplecontent", "underscore"], function (e, t, n, r, i, s) {
    var o, u = {
        overlay: new e,
        elementName: "modal-overlay-contentholder",
        element: {},
        parentUrl: "",
        open: !1,
        overlayView: "",
        openContentOverlay: function (e) {
            var r = this;
            this.settings = e ? e : {}, e.placeholderTheme === undefined ? r.theme = "light" : r.theme = e.placeholderTheme, r.overlay.open(null, !0), r.createContentHolder();
            var s = new t({
                contentType: "text/html",
                dataType: "html",
                contentUrl: e.url,
                onSuccess: function (e) {
                    var e = $.trim(e);
                    var t = $(e).find(".feel-template").html() || $(e).find(".simple-template").html(),
                        s;
                    if ($(e).find('#main').hasClass('wide'))
                        $(r.element).addClass('wide');
                    setTimeout(function () {
                        r.element.find(".js-modal-content").html(t).hide(), s = r.element.find(".js-modal-content").height(), r.parentUrl = r.element.find(".modal-close").attr("href"), r.element.find(".js-modal-content").fadeIn(250), r.overlayView = new i({
                            el: ".is-overlay",
                            isModal: !0
                        })
                    }, 250), n.sendNotification(n.CONTENT_LOADED)
                }
            })
        },
        createContentHolder: function () {
            var e = this;
            $("body").append("<div class='modal-parent'><div id='" + e.elementName + "' class='" + e.theme + "'><div class='js-modal-content' /></div></div>"), e.element = $("#" + e.elementName), e.element.css({
                "z-index": 6e3,
                opacity: 0
            }), e.fade(e.element), $(window).scrollTop(0), n.addListener(n.URL_STATECHANGE, o)
        },
        closeContentOverlay: function () {
            var e = this;
            e.element.animate({
                opacity: 0,
                "z-index": 0
            }, 500, function () {
                $(".modal-parent").remove(), n.removeListener(n.URL_STATECHANGE, o), n.sendNotification(n.OVERLAY_HIDE)
            })
        },
        fade: function (e) {
            e.delay(250).animate({
                opacity: 1
            }, 500)
        }
    };
    return o = s.bind(function () {
        this.closeContentOverlay()
    }, u), u
}), define("Base", ["jquery", "underscore", "Backbone", "AppModel", "Modules/contentoverlay", "Modules/notification-dispatcher"], function (e, t, n, r, i, s) {
    var o = n.View.extend({
        subviews: null,
        initialize: function (n) {
            this.subviews = {}, this.overlay = i, this.overlayEvent = t.bind(function (e) {
                e.preventDefault(), this.openOverlay(e)
            }, this), e(this.el).find(".show-overlay").off("click").on("click", this.overlayEvent)
        },
        openOverlay: function (t) {
            var curTitle = document.title;
            t.preventDefault(), e(t.target).prop("tagName") != "A" ? element = e(t.target).parents("a") : element = e(t.target), global.historyService.setUrl(e(element).attr("href"))
            document.title = curTitle.substr(0, Math.min(curTitle.length, 65));
        },
        updateLinks: function () {
            var t = r.get("body").find('a[href^="http"],a[href^="../"]');
            e.each(t, function (t, n) {
                if (!n.hash) {
                    var r = e(n);
                    r.attr("target") != "_blank" && r.attr("target", "_blank")
                }
            })
        },
        open: function (e) {
            this.overlay !== undefined && this.overlay.openContentOverlay({
                url: e,
                transitionType: "none",
                placeholderTheme: "none"
            })
        },
        destroy: function () {
            this.undelegateEvents(), this.subviews !== undefined && t.each(this.subviews, function (e) {
                typeof e.destroy != "undefined" && e.destroy()
            })
        }
    });
    return o
}), define("WacomGlobal", ["jquery", "AppModel", "Modules/notification-dispatcher"], function (e, t, n) {
    function r() {
        e('.primary li.about a[href="' + window.location.pathname + '"]').addClass("selected")
    }
    function i() {
        e("div[data-jumpnav-title]").length <= 0 && e(".jump-nav, .product-jump-nav").remove()
    }
    e("#navigation-main").data("folded") && e("#navigation-main").parents(".container").addClass("folded"), e("div[data-jumpnav-title]").length <= 0 && e(".jump-nav, .product-jump-nav").remove(), pageEditor && (e(".site-flip").removeClass("site-flip"), e("body").addClass("page-editor")), e(".container").removeClass("hidden");
    /* Conflict when using more than 1 hero-video layer on the same page */
    //if (e(".hero-video-description span").length > 0 && e(".hero-video-description span").html() != null) try {
    //    e(".hero-video-description span").html(e(".hero-video-description span").html().trim())
    //} catch (s) { }
    r(), n.addListener(t.FLIP_CONTENT_LOAD_COMPLETE, i), n.addListener(t.FLIP, r), e("form").each(function () {
        e(this).addClass(e(this).attr("action").toString().substring(e(this).attr("action").lastIndexOf("/") + 1))
    }), e("a.header").on({ 'touchstart': function (e) { window.location.href = e.currentTarget.href } });
    if (e(".buy-button").html() != null) {
        e(".buy-button").html((e(".buy-button").html()).toString().replace(/[\n\r]/g, '').replace(/ +(?= )/g, '').replace(' <div', '<div'));
    };
    e('html.lte8 .footer-pages.privacy-policy ol > li').each(function(index){
        e(this).find('h2').prepend((index+1) + '. ');
    });
    e('#navigation-main .primary .subtitle').parent().addClass('with-subtitle');
    e('#navigation-main .primary .subtitle').show();
}), define("Collector", ['jquery'], function ($) {
    if (useJiraCollector) {
        (function ($) { $ = jQuery.noConflict(true); if (typeof window.jQuery === "undefined") { window.jQuery = $ } if (typeof window.$ === "undefined") { window.$ = $ } var ATL_JQ = function () { return $.apply($, arguments) }; var css = ".atlwdg-blanket {background: black;height: 100%;left: 0;opacity: .5;position: fixed;top: 0;width: 100%;z-index: 1000000;}.atlwdg-popup {background: white;border: 1px solid #666;position: fixed;top: 50%;left: 50%;z-index: 10000011;}.atlwdg-popup.atlwdg-box-shadow {-moz-box-shadow: 10px 10px 20px rgba(0,0,0,0.5);-webkit-box-shadow: 10px 10px 20px rgba(0,0,0,0.5);box-shadow: 10px 10px 20px rgba(0,0,0,0.5);background-color: white;}.atlwdg-hidden {display: none;}.atlwdg-trigger {position: fixed;background: #013466;padding: 5px;border: 2px solid white;border-top: none;font-weight: bold;color: white !important;display: block;white-space: nowrap;text-decoration: none !important;font-family: arial, FreeSans, Helvetica, sans-serif;font-size: 12px;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);-webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);-moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);border-radius: 0 0 5px 5px;-moz-border-radius: 0 0 5px 5px;}.atlwdg-trigger.atlwdg-TOP {left: 45%;top: 0;}.atlwdg-trigger.atlwdg-RIGHT {left: 100%;top: 40%;-webkit-transform-origin: top left;-webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);-moz-transform-origin: top left;-ms-transform: rotate(90deg);-ms-transform-origin: top left;}.atlwdg-trigger.atlwdg-SUBTLE {right: 0;bottom: 0;border: 1px solid #ccc;border-bottom: none;border-right: none;background-color: #f5f5f5;color: #444 !important;font-size: 11px;padding: 6px;box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5);border-radius: 2px 0 0 0;}.atlwdg-loading {position: absolute;top: 220px;left: 295px;}@media print {.atlwdg-trigger { display: none; }}"; var cssIE = ".atlwdg-trigger {position: absolute;}.atlwdg-blanket {position: absolute;filter: alpha(opacity=50);width: 110%;}.atlwdg-popup {position: absolute;}.atlwdg-trigger.atlwdg-RIGHT {left: auto;right: 0;filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}"; ATL_JQ.isQuirksMode = function () { return document.compatMode != "CSS1Compat" }; ATL_JQ.IssueDialog = function (options) { var $body = $("body"), that = this, showDialog = function () { that.show(); return false }; if (!options.baseUrl) { options.baseUrl = "https://nttdata.atlassian.net" } this.options = options; this.frameUrl = options.baseUrl + "/rest/collectors/1.0/template/form/" + this.options.collectorId + "?os_authType=none"; $("head").append("<style type='text/css'>" + css + "</style>"); if (this.options.triggerPosition === "CUSTOM") { var oldTriggerFunction; if (this.options.triggerFunction) { try { oldTriggerFunction = eval("(" + this.options.triggerFunction + ")") } catch (ex) { } } $(function () { try { var newTriggerFunction; if (window.ATL_JQ_PAGE_PROPS && ((window.ATL_JQ_PAGE_PROPS.triggerFunction) || (window.ATL_JQ_PAGE_PROPS["df912a0a"] && window.ATL_JQ_PAGE_PROPS["df912a0a"].triggerFunction))) { newTriggerFunction = window.ATL_JQ_PAGE_PROPS.triggerFunction || window.ATL_JQ_PAGE_PROPS["df912a0a"].triggerFunction } else { newTriggerFunction = oldTriggerFunction } if ($.isFunction(newTriggerFunction)) { newTriggerFunction(showDialog) } } catch (ex) { } }) } else { if ($.isFunction(this.options.triggerPosition)) { try { this.options.triggerPosition(showDialog) } catch (ex) { } } else { if (this.options.triggerPosition && this.options.triggerText) { var triggerClass = "atlwdg-trigger atlwdg-" + this.options.triggerPosition; var $trigger = $("<a href='#' id='atlwdg-trigger'/>").addClass(triggerClass).text(this.options.triggerText); $body.append($trigger); $trigger.click(showDialog) } } } var $iframeContainer = $("<div id='atlwdg-container'/>").addClass("atlwdg-popup atlwdg-box-shadow atlwdg-hidden"); var $blanket = $("<div id='atlwdg-blanket' class='atlwdg-blanket'/>").hide(); $body.append($blanket).append($iframeContainer); if ($.browser && $.browser.msie && (ATL_JQ.isQuirksMode() || $.browser.version < 9)) { $("head").append("<style type='text/css'>" + cssIE + "</style>"); var triggerAdjuster = function (e) { }; if (this.options.triggerPosition === "TOP") { triggerAdjuster = function (e) { $("#atlwdg-trigger").css("top", $(window).scrollTop() + "px") } } else { if (this.options.triggerPosition === "RIGHT") { triggerAdjuster = function (e) { var $trigger = $("#atlwdg-trigger"); $trigger.css("top", ($(window).height() / 2 - $trigger.outerWidth() / 2 + $(window).scrollTop()) + "px"); if (!ATL_JQ.isQuirksMode() && $.browser.version === "8.0") { $trigger.css("right", -($trigger.outerHeight() - $trigger.outerWidth()) + "px") } } } else { if (this.options.triggerPosition === "SUBTLE") { var outerHeight = $trigger.outerHeight(); triggerAdjuster = function (e) { var $window = $(window); $trigger.css("top", ($window.scrollTop() + $window.height() - outerHeight) + "px") } } } } $(window).bind("scroll resize", triggerAdjuster); triggerAdjuster() } }; ATL_JQ.IssueDialog.prototype = { hideDialog: undefined, updateContainerPosition: function () { var width = 810, height = 542; $("#atlwdg-container").css({ height: height + "px", width: width + "px", "margin-top": -Math.round(height / 2) + "px", "margin-left": -Math.round(width / 2) + "px" }); $("#atlwdg-frame").height("100%").width("100%") }, show: function () { var that = this, $iframeContainerElem = $("#atlwdg-container"), $body = $("body"), $iframeElem = $('<iframe id="atlwdg-frame" scrolling="no" frameborder="0" src="' + this.frameUrl + '"></iframe>'), $loadingImage = $('<img class="atlwdg-loading" style="display:none;" src="' + this.options.baseUrl + '/images/throbber/loading_barber_pole_horz.gif">'); hideDialog = function (e) { if (e.keyCode === 27) { that.hide() } }; $iframeContainerElem.append($loadingImage); var throbberTimeout = setTimeout(function () { $loadingImage.show() }, 300); $body.css("overflow", "hidden").keydown(hideDialog); window.scroll(0, 0); var feedbackString = ""; if (this.options.collectFeedback) { var feedback = this.options.collectFeedback(); for (var prop in feedback) { if (feedback.hasOwnProperty(prop) && feedback[prop] !== undefined && feedback[prop] !== "" && typeof feedback[prop] === "string") { feedbackString += "*" + prop + "*: " + feedback[prop] + "\n" } } } var fieldValues = {}; if (this.options.fieldValues && !$.isEmptyObject(this.options.fieldValues)) { $.extend(fieldValues, this.options.fieldValues) } $iframeElem.load(function () { var message = { feedbackString: feedbackString, fieldValues: fieldValues }; $iframeElem[0].contentWindow.postMessage(JSON.stringify(message), that.options.baseUrl); $(window).bind("message", function (e) { if (e.originalEvent.data && e.originalEvent.data === "cancelFeedbackDialog") { that.hide() } }) }); $iframeElem.load(function (e) { clearTimeout(throbberTimeout); $loadingImage.hide(); $iframeElem.show() }); var currentMilis = new Date().getTime(); var dummyElement = document.createElement("a"); dummyElement.href = "https://nttdata.atlassian.net"; $iframeContainerElem.append($iframeElem); this.updateContainerPosition(); $iframeContainerElem.show(); $("#atlwdg-blanket").show() }, hide: function () { $("body").css("overflow", "auto").unbind("keydown", hideDialog); $("#atlwdg-container").hide().empty(); $("#atlwdg-blanket").hide() } }; var filterStrings = function (obj, recursingIn) { for (var key in obj) { if (!obj.hasOwnProperty(key)) { continue } var value = obj[key]; if (recursingIn === undefined && $.isArray(value)) { filterStrings(value, key); continue } if (typeof value !== "string") { var paramName = recursingIn === undefined ? key : recursingIn + ":" + key; console.log("bootstrap.js:filterStrings ignoring key for value '" + paramName + "'; typeof must be string"); delete obj[key] } } return obj }; ATL_JQ(function () { if ("df912a0a" == "" && typeof ATL_JQ_CONFIGS == "undefined") { return } var showTrigger = function (triggerConfig, collectorId) { if (!triggerConfig.enabled) { return } var collectFeedback = false; var defaultFieldValues = {}; if (triggerConfig.recordWebInfo) { var environmentProps = { Location: window.location.href, "User-Agent": navigator.userAgent, Referrer: document.referrer, "Screen Resolution": screen.width + " x " + screen.height }; if (window.ATL_JQ_PAGE_PROPS) { var feedbackProps = window.ATL_JQ_PAGE_PROPS.environment; defaultFieldValues = window.ATL_JQ_PAGE_PROPS.fieldValues; if (window.ATL_JQ_PAGE_PROPS.hasOwnProperty(collectorId)) { feedbackProps = window.ATL_JQ_PAGE_PROPS[collectorId].environment; defaultFieldValues = window.ATL_JQ_PAGE_PROPS[collectorId].fieldValues } if ($.isFunction(feedbackProps)) { $.extend(environmentProps, feedbackProps()) } else { $.extend(environmentProps, feedbackProps) } if ($.isFunction(defaultFieldValues)) { $.extend(defaultFieldValues, filterStrings(defaultFieldValues())) } else { if ($.isPlainObject(defaultFieldValues)) { $.extend(defaultFieldValues, filterStrings(defaultFieldValues)) } } } collectFeedback = function () { return environmentProps } } new ATL_JQ.IssueDialog({ collectorId: collectorId, fieldValues: defaultFieldValues, collectFeedback: collectFeedback, triggerText: triggerConfig.triggerText, triggerPosition: triggerConfig.triggerPosition, triggerFunction: triggerConfig.triggerFunction, baseUrl: triggerConfig.baseUrl }) }; if (typeof ATL_JQ_CONFIGS != "undefined") { for (var id in ATL_JQ_CONFIGS) { var config = ATL_JQ_CONFIGS[id]; delete ATL_JQ_CONFIGS[id]; showTrigger(config, id) } } else { var baseUrl = "https://nttdata.atlassian.net"; $.ajax({ url: baseUrl + "/rest/collectors/1.0/configuration/trigger/df912a0a?os_authType=none", dataType: "jsonp", crossDomain: true, jsonpCallback: "trigger_df912a0a", cache: true, success: function (result) { showTrigger(result, "df912a0a") } }) } }); if ("df912a0a" === "") { window.ATL_JQ = ATL_JQ } })(jQuery); var JSON; if (!JSON) { JSON = {} } (function () { function f(n) { return n < 10 ? "0" + n : n } if (typeof Date.prototype.toJSON !== "function") { Date.prototype.toJSON = function (key) { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }; String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) { return this.valueOf() } } var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, rep; function quote(string) { escapable.lastIndex = 0; return escapable.test(string) ? '"' + string.replace(escapable, function (a) { var c = meta[a]; return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + string + '"' } function str(key, holder) { var i, k, v, length, mind = gap, partial, value = holder[key]; if (value && typeof value === "object" && typeof value.toJSON === "function") { value = value.toJSON(key) } if (typeof rep === "function") { value = rep.call(holder, key, value) } switch (typeof value) { case "string": return quote(value); case "number": return isFinite(value) ? String(value) : "null"; case "boolean": case "null": return String(value); case "object": if (!value) { return "null" } gap += indent; partial = []; if (Object.prototype.toString.apply(value) === "[object Array]") { length = value.length; for (i = 0; i < length; i += 1) { partial[i] = str(i, value) || "null" } v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]"; gap = mind; return v } if (rep && typeof rep === "object") { length = rep.length; for (i = 0; i < length; i += 1) { if (typeof rep[i] === "string") { k = rep[i]; v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) } } } } else { for (k in value) { if (Object.prototype.hasOwnProperty.call(value, k)) { v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) } } } } v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}"; gap = mind; return v } } if (typeof JSON.stringify !== "function") { JSON.stringify = function (value, replacer, space) { var i; gap = ""; indent = ""; if (typeof space === "number") { for (i = 0; i < space; i += 1) { indent += " " } } else { if (typeof space === "string") { indent = space } } rep = replacer; if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) { throw new Error("JSON.stringify") } return str("", { "": value }) } } if (typeof JSON.parse !== "function") { JSON.parse = function (text, reviver) { var j; function walk(holder, key) { var k, v, value = holder[key]; if (value && typeof value === "object") { for (k in value) { if (Object.prototype.hasOwnProperty.call(value, k)) { v = walk(value, k); if (v !== undefined) { value[k] = v } else { delete value[k] } } } } return reviver.call(holder, key, value) } text = String(text); cx.lastIndex = 0; if (cx.test(text)) { text = text.replace(cx, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) } if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) { j = eval("(" + text + ")"); return typeof reviver === "function" ? walk({ "": j }, "") : j } throw new SyntaxError("JSON.parse") } } }());
    }
}), define("Views/Components/jump-nav", ["jquery", "underscore", "AppModel", "Base", "Modules/notification-dispatcher"], function (e, t, n, r, i) {
    var s = r.extend({
        OPEN_DELAY: 0,
        CLOSE_DELAY: 500,
        SCROLL_DURATION: 500,
        SCROLL_DEBOUNCE: 50,
        $html: null,
        $win: null,
        $body: null,
        $containerBody: null,
        $stores: null,
        $buyButton: null,
        $openButton: null,
        $sectionLinks: null,
        $slideOut: null,
        winHeight: null,
        winWidth: null,
        width: null,
        openTimeout: null,
        closeTimeout: null,
        currentSection: null,
        totalSections: null,
        sectionLinks: null,
        sections: null,
        containerHeight: null,
        transitionTimeout: null,
        className: "",
        events: {
            "click .open-button": "onOpenClicked",
            "mouseover .open-button": "onOpenMouseOver",
            "mouseout .open-button": "onOpenMouseOut",
            "click .up-button": "onUpClicked",
            "click .down-button": "onDownClicked",
            "click .buy-button.expand": "onBuyClicked",
            "click .section-link": "onSectionLinkClicked"
        },
        initialize: function (i) {
            t.bindAll(this, "open", "close", "onOpenClicked", "onOpenMouseOver", "onOpenMouseOut", "onUpClicked", "onDownClicked", "onMouseOut", "onMouseOver", "onBuyClicked", "onScroll", "onResize"), r.prototype.initialize.apply(this, arguments), this.$html = n.get("html"), this.$win = n.get("win"), this.$body = n.get("body"), this.$containerBody = n.get("containerBody"), this.$jumpNav = this.$el, this.$stores = this.$el.find(".stores"), this.$buyButton = this.$el.find(".buy-button"), this.$openButton = this.$el.find(".open-button"), this.$slideOut = this.$el.find(".slide-out"), this.navAdjustments = !1, this.lastElementsTooShort = !1, this.isScrolling = !1, this.width = parseInt(this.$el.find(".slide-out").outerWidth(), 10), this.currentSection = 0, this.containerHeight = this.$containerBody.outerHeight(), this.currentHeight = "big", this.$win.on("resize", this.onResize), this.debounced = t.debounce(this.onScroll, this.SCROLL_DEBOUNCE), this.$win.on("scroll", this.debounced), e(this.$jumpNav).show(), this.onResize(), this.setSections(), this.setSectionsYPositions(), this.checkLastHeights(), this.getSectionFromScroll(), this.populateOpenButton()
        },
        setSections: function () {
            var n = this.getAllElementsWithAttribute("data-jumpnav-title"),
                r = "",
                i = t.template('<li class="section-link"><%= title %></li>');
            this.sections = [];
            var s = 0,
                o = n.length,
                u;
            for (s; s < o; ++s) u = e(n[s]), r += i({
                title: u.data("jumpnav-title")
            }), this.sections[s] = {
                el: u,
                scrollY: 0
            };
            this.totalSections = o, this.$el.find(".section-links").html(r), this.$sectionLinks = this.$el.find(".section-link")
        },
        getAllElementsWithAttribute: function (e) {
            var t = [],
                n = document.getElementsByTagName("*"),
                r = 0,
                i = n.length;
            for (r; r < i; ++r) n[r].getAttribute(e) && t.push(n[r]);
            return t
        },
        setSectionsYPositions: function () {
            this.refresh();
            var e = n.getScrollPosition(),
                t = 0,
                r = this.totalSections,
                i;
            for (t; t < r; ++t) i = this.sections[t].el, this.sections[t].scrollY = i.position().top, !this.$containerBody.is(i.parent()) && i.parent().position() && (this.sections[t].scrollY = i.parent().position().top)
        },
        getIDFromURL: function (e) {
            return e = e.split("#"), e.length > 1 ? "#" + e[1] : undefined
        },
        checkLastHeights: function () {
            var e, t;
            for (var n = 0; n < this.totalSections; n++) n === this.totalSections - 2 && (e = this.containerHeight - this.sections[n + 1].scrollY, t = this.sections[n + 1].scrollY - this.sections[n].scrollY, this.winHeight > e + t && (this.lastElementsTooShort = !0))
        },
        getSectionFromScroll: function () {
            var e = n.getScrollPosition(),
                t = this;
            this.refresh();
            if (e + this.winHeight >= this.containerHeight) {
                this.setButtonStatus(this.totalSections - 1);
                return
            }
            if (e === 0) {
                this.setButtonStatus(0);
                return
            }
            var r;
            for (var i = 0; i < this.totalSections; i++) {
                var s = this.sections[i].scrollY | 0;
                if (!(e >= s)) break;
                r = i
            }
            this.setButtonStatus(r)
        },
        scrollTo: function (e) {
            console.log(e);
            this.refresh();
            var t = this,
                n = this.sections[e].scrollY;
            this.$body.stop(), this.$body.animate({
                scrollTop: n
            }, this.SCROLL_DURATION), this.$html.stop(), this.$html.animate({
                scrollTop: n
            }, this.SCROLL_DURATION, function () {
                t.isScrolling === !0 && t.$win.on("scroll", t.debounced), t.isScrolling = !1
            })
        },
        refresh: function () {
            this.containerHeight !== this.$containerBody.outerHeight() && (this.containerHeight = this.$containerBody.outerHeight(), this.setSectionsYPositions())
        },
        setButtonStatus: function (t) {
            isNaN(t) && (t = 0), this.currentSection = t, this.$sectionLinks.removeClass("on"), e(this.$sectionLinks[t]).addClass("on"), this.populateOpenButton()
        },
        open: function () {
            this.cancelDelayOpen(), this.cancelDelayClose(), this.$el.addClass("show"), this.$el.on("mouseout", this.onMouseOut)
        },
        delayOpen: function (e) {
            this.cancelDelayOpen(), this.openTimeout = setTimeout(this.open, e)
        },
        cancelDelayOpen: function () {
            this.openTimeout && clearTimeout(this.openTimeout)
        },
        close: function () {
            this.cancelDelayOpen(), this.cancelDelayClose(), this.$el.removeClass("show"), this.$el.off("mouseover", this.onMouseOver), this.$el.off("mouseout", this.onMouseOut)
        },
        delayClose: function (e) {
            this.cancelDelayClose(), this.closeTimeout = setTimeout(this.close, e), this.$el.on("mouseover", this.onMouseOver)
        },
        cancelDelayClose: function () {
            this.closeTimeout && clearTimeout(this.closeTimeout)
        },
        toggleBuyButtons: function () {
            this.$stores.toggleClass("show"), this.$buyButton.toggleClass("down")
        },
        populateOpenButton: function () {
            this.$openButton.html("<span>" + (this.currentSection + 1) + "</span>/" + this.totalSections)
        },
        isOpen: function () {
            return this.$el.hasClass("show")
        },
        onOpenClicked: function (e) {
            e.preventDefault(), this.open()
        },
        onOpenMouseOver: function (e) {
            this.delayOpen(this.OPEN_DELAY)
        },
        onOpenMouseOut: function (e) {
            this.cancelDelayOpen()
        },
        onUpClicked: function (e) {
            e.preventDefault();
            if (this.currentSection === 0) return;
            var t = this.currentSection - 1;
            this.scrollTo(t), this.lastElementsTooShort === !0 && this.currentSection === this.totalSections - 1 && this.setButtonStatus(t)
        },
        onDownClicked: function (e) {
            e.preventDefault();
            if (this.currentSection >= this.totalSections - 1) return;
            var t = this.currentSection + 1;
            this.scrollTo(t), this.lastElementsTooShort === !0 && this.currentSection === this.totalSections - 2 && this.setButtonStatus(t)
        },
        onMouseOut: function (e) {
            var t = e.clientX,
                r = e.pageY - n.getScrollPosition();
            (t <= this.left || t >= Math.min(this.winWidth, n.MAX_WIDTH) || r <= 0 || r >= this.winHeight) && this.delayClose(this.CLOSE_DELAY)
        },
        onMouseOver: function (e) {
            var t = e.clientX;
            t < n.MAX_WIDTH && this.cancelDelayClose()
        },
        onBuyClicked: function (e) {
            e.preventDefault(), this.toggleBuyButtons()
        },
        onSectionLinkClicked: function (t) {
            t.preventDefault(), this.isScrolling = !0;
            var n = e(t.target).index();
            this.$win.off("scroll", this.debounced), this.scrollTo(n), this.setButtonStatus(n)
        },
        onScroll: function (e) {
            this.getSectionFromScroll()
        },
        onResize: function (e) {
            this.close(), this.winWidth = this.$win.width(), this.winHeight = this.$win.height(), this.left = this.winWidth - this.width, this.setSectionsYPositions(), this.checkLastHeights(), this.winWidth >= n.MAX_WIDTH && !this.$slideOut.hasClass("left-transition") && this.transitionTimeout === null ? (this.transitionTimeout && clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(t.bind(function () {
                this.$slideOut.addClass("left-transition"), this.transitionTimeout = null
            }, this), 50)) : this.winWidth < n.MAX_WIDTH && this.$slideOut.hasClass("left-transition") && (this.transitionTimeout && clearTimeout(this.transitionTimeout), this.transitionTimeout = null, this.$slideOut.removeClass("left-transition"))
        },
        setHeight: function () {
            e(window).height() < 700 ? this.newHeight = "small" : this.newHeight = "big", this.adjustNav()
        },
        adjustNav: function () {
            this.currentHeight != this.newHeight && (this.newHeight === "small" ? e(".section-links").removeClass("large").addClass("small") : e(".section-links").removeClass("small").addClass("large"), this.currentHeight = this.newHeight)
        },
        destroy: function () {
            this.close(), this.$win.off("resize", this.onResize), this.$win.off("." + this.cid), r.prototype.destroy.apply(this, arguments)
        }
    });
    return s
}), define("Views/Components/purchase-link", ["jquery", "underscore", "AppModel", "Base"], function (e, t, n, r) {
    var i = r.extend({
        $buyButton: null,
        className: "",
        events: {
            "click .buy-now.expand": "onBuyClicked"
        },
        initialize: function (e) {
            t.bindAll(this, "onBuyClicked"), this.$buyButton = this.$el.find(".buy-button"), r.prototype.initialize.apply(this, arguments)
        },
        onBuyClicked: function (e) {
            e.preventDefault(), this.$el.toggleClass("open"), this.$buyButton.toggleClass("down"), this.$el.hasClass("open") ? this.$el.find(".purchase-link-list, .price").css("margin-top", "-" + (this.$el.find(".purchase-link-list li").length - 1) * this.$el.find(".purchase-link-list li").height() + "px") : this.$el.find(".purchase-link-list, .price").css("margin-top", "0")
        }
    });
    return i
}), define("Views/Components/digitalriver", ["jquery", "underscore", "Backbone"], function (e, t, n) {
    var r = n.View.extend({
        initialize: function () {
            e(function () {
                var t = e(".pswtb"),
                    n;
                for (var r = 0; r < t.length; r++) e(".pswtb").eq(r).attr("data-accessory-sku") ? n = e(".pswtb").eq(r).attr("data-accessory-sku") : n = mainProductSKU, ps_Show({
                    widgetConfigurationId: "d2e796cb-9181-45a4-bb22-61eb33a6ec9b",
                    container: e(".pswtb")[r],
                    sku: n
                })
            })
        }
    });
    return r
}), define("Views/Components/regionselector", ["jquery", "underscore", "AppModel", "Base", "Modules/notification-dispatcher", "Modules/fadeovercontent"], function (e, t, n, r, i, s) {
    var o = r.extend({
        TRANSITION_DURATION: .5,
        $win: null,
        $container: null,
        $navUtilityWrap: null,
        $mapCloseButton: null,
        $mapOpenButton: null,
        markup: '<div class="lang-menu clearfix"><div class="lang-menu-header"><h1>Choose your language</h1></div><div class="lang-menu-body"></div></div>',
        closeLangBtnMarkup: '<a href="#" class="lang-close"><span class="hidden">Close button</span></a>',
        isOpen: null,
        className: "",
        events: {
            "click .region-nav-item": "setLanguageAndRegion"
        },
        initialize: function (o) {
            t.bindAll(this, "open", "close", "onClose", "onFlip", "onResize"), r.prototype.initialize.apply(this, arguments), this.$win = n.get("win"), this.$container = n.get("container"), this.$navUtilityWrap = e(".navigation-utility-wrap"), this.$mapCloseButton = this.$el.find(".map-close"), this.$mapOpenButton = e(".link-utility.utility-region").parent(), this.isOpen = this.$container.hasClass("show-region-selector");
            var u = this;
            this.overlay = new s, i.addListener(n.FLIP, this.onFlip), this.$win.on("resize", this.onResize)
        },
        open: function () {
            if (this.isOpen) {
                this.close();
                return
            }
            this.$container.removeClass("no-region-transition"), this.isOpen = !0, this.$container.addClass("show-region-selector"), this.$mapOpenButton.addClass("on"), this.$mapCloseButton.on("click", this.onClose), setTimeout(t.bind(function () {
                this.$win.trigger("resize")
            }, this), 500)
        },
        close: function (e) {
            this.isOpen = !1, e && (this.$container.addClass("no-region-transition"), setTimeout(t.bind(function () {
                this.$container.removeClass("no-region-transition")
            }, this), 5)), this.$container.removeClass("show-region-selector"), this.$mapOpenButton.removeClass("on"), this.$mapCloseButton.off("click", this.onClose)
        },
        setLanguageAndRegion: function (t) {
            t.preventDefault();
            var n = e(t.target).parent().find(".sub-region-nav");
            if (n.length) {
                var r = this;
                this.overlay.open(), e("body").append(this.markup).append(this.closeLangBtnMarkup), e(".lang-menu").append(n.clone()).css({
                    display: "block"
                }), e(".lang-close").on("click", function (e) {
                    e.preventDefault(), r.closeMenu()
                })
            } else window.location = t.target.href
        },
        closeMenu: function () {
            this.overlay.close(), e(".lang-menu").fadeOut(500, function () {
                e(this).remove(), e(".lang-close").remove()
            })
        },
        getHeight: function () {
            return this.$el.outerHeight()
        },
        onClose: function (e) {
            e.preventDefault(), this.close()
        },
        onFlip: function (e) {
            this.close()
        },
        onResize: function (e) {
            if (this.isOpen) return;
            this.$el.addClass("hide"), this.$win.off("resize", this.onResize);
            var n = t.debounce(t.bind(function () {
                this.$el.removeClass("hide"), this.$win.on("resize", this.onResize)
            }, this), 1e3);
            this.$win.resize(n)
        },
        destroy: function () {
            this.$win.off("resize", this.onResize), this.$mapCloseButton.off("click", this.close), r.prototype.destroy.apply(this, arguments)
        }
    });
    return o
}), define("Views/Components/text-box-component", ["jquery", "underscore", "AppModel", "Base"], function (e, t, n, r) {
    var i = r.extend({
        videoOverlay: null,
        className: "",
        events: {
            "click .big-play": "onBigPlayClick",
            "click .small-play": "onBigPlayClick"
        },
        initialize: function (e) {
            t.bindAll(this, "onBigPlayClick"), r.prototype.initialize.apply(this, arguments)
        },
        onBigPlayClick: function (t) {
            t.preventDefault();
            var r = e(t.currentTarget),
                i = r.attr("href");
            n.get("videoPlayerNew").loadVideo(i)
        }
    });
    return i
}), define("Views/Components/accordion", ["jquery", "underscore", "AppModel", "Base", "TweenMax"], function (e, t, n, r, i) {
    var s = r.extend({
        PADDING_BOTTOM: 40,
        TRANITION_DURATION: .3,
        $win: null,
        $tabs: null,
        isTransitioning: null,
        className: "",
        events: {
            "click .tab": "onClicked"
        },
        initialize: function (e) {
            t.bindAll(this, "onClicked", "onTransitionComplete", "onResize"), this.$win = n.get("win"), this.$tabs = this.$el.find(".tab"), this.isTransitioning = !1, this.$win.on("resize", this.onResize), this.update(), r.prototype.initialize.apply(this, arguments)
        },
        update: function () {
            this.$tabs.each(function (t, n) {
                var r = e(n);
                r.removeClass("show").removeClass("selected"), r.css("height", "auto");
                var i = r.outerHeight();
                r.data("initial-height", i), r.css("height", i + "px")
            })
        },
        onClicked: function (t) {
            if (this.isTransitioning) return;
            this.isTransitioning = !0;
            var n = e(t.currentTarget),
                r;
            if (n.hasClass("selected")) {
                n.removeClass("selected"), r = n.data("initial-height"), i.to(n, this.TRANITION_DURATION, {
                    css: {
                        height: r
                    },
                    onComplete: this.onTransitionComplete
                });
                return
            }
            n.addClass("show");
            var s = this.$el.find(".tab.selected");
            s.removeClass("selected"), r = s.data("initial-height"), n.addClass("selected");
            var o = n.find(".content");
            i.to(n, this.TRANITION_DURATION, {
                css: {
                    height: o.outerHeight() + this.PADDING_BOTTOM
                }
            }), i.to(s, this.TRANITION_DURATION, {
                css: {
                    height: r
                },
                onComplete: this.onTransitionComplete
            })
        },
        onTransitionComplete: function () {
            setTimeout(t.bind(function () {
                this.isTransitioning = !1
            }, this), 50)
        },
        onResize: function (e) {
            this.isTransitioning || this.update()
        },
        destroy: function () {
            this.$win.off("resize", this.onResize), r.prototype.destroy.apply(this, arguments)
        }
    });
    return s
}), define("Views/Components/homepage-background-wiggle", ["jquery", "underscore", "Backbone"], function (e, t, n) {
    var r = n.View.extend({
        context: null,
        className: "",
        initialize: function (e) {
            this.context = this.el.getContext("2d")
        },
        draw: function (e, t, n, r, i, s) {
            i += 120, this.el.width = r, this.el.height = i;
            var o, u, a, f = [];
            while (--n > -1) {
                o = t, u = [];
                while (--o > -1) e[n][o] === s && (u[u.length] = {
                    x: n === 0 ? 120 + o * 240 : Math.random() * 240 + o * 240,
                    y: n === 0 ? 360 + n * 240 : 240 + n * 240
                });
                a = Math.floor(Math.random() * u.length), u[a] && (f[f.length] = u[a])
            }
            var l = f.length,
                c, h;
            this.context.strokeStyle = "#ffffff", this.context.lineWidth = 2, this.context.beginPath(), this.context.moveTo(r * .5, 0);
            while (--l > 0) c = this.getControlPoint(f[l - 1].x, f[l].x), h = this.getControlPoint(f[l - 1].y, f[l].y), this.context.quadraticCurveTo(f[l].x, f[l].y, c, h);
            this.context.quadraticCurveTo(1, 2, r * .5, i), this.context.stroke()
        },
        clear: function () {
            this.context.clearRect(0, 0, this.el.width, this.el.height)
        },
        getControlPoint: function (e, t) {
            return (t + e) * .5
        }
    });
    return r
}), define("Views/Components/homepage-tile-carousel", ["jquery", "underscore", "Base", "TweenMax"], function (e, t, n, r) {
    var i = n.extend({
        DELAY: 3500,
        $items: null,
        $pips: null,
        index: null,
        interval: null,
        markup: null,
        className: "",
        events: {
            "click .pip": "onClickHandler",
            "mouseenter .homepage-carousel-item": "onMouseEnterHandler",
            "mouseout .homepage-carousel-item": "onMouseOutHandler",
            "mouseenter .pip": "onMouseEnterHandler",
            "mouseout .pip": "onMouseOutHandler"
        },
        initialize: function (e) {
            t.bindAll(this, "rotate", "onClickHandler", "onMouseEnterHandler", "onMouseOutHandler"), this.$items = this.$el.find(".homepage-carousel-item"), this.$pips = this.$el.find(".pip"), this.index = 0, this.markup = this.$el.html(), this.$items.hide(), this.$items.eq(0).show().addClass("show"), pageEditor || this.startRotate()
        },
        startRotate: function () {
            var e = this;
            clearInterval(e.interval), this.$items.length > 1 && (this.interval = setInterval(this.rotate, this.DELAY))
        },
        stopRotate: function () {
            var e = this;
            clearInterval(e.interval)
        },
        rotate: function () {
            this.$items.hide().removeClass("show"), e(this.$items[this.index]).show().addClass("hide"), r.to(e(this.$items[this.index]), .3, {
                css: {
                    opacity: 0
                },
                ease: Quad.easeInOut,
                onComplete: function () {
                    e(this).hide().removeClass("hide")
                }
            }), ++this.index, this.index >= this.$items.length && (this.index = 0), e(this.$items[this.index]).show().css("opacity", 0).removeClass("hide").addClass("show"), r.to(e(this.$items[this.index]), .3, {
                css: {
                    opacity: 1
                },
                ease: Quad.easeInOut,
                onComplete: function () { }
            }), this.$pips.removeClass("selected"), e(this.$pips[this.index]).addClass("selected")
        },
        onMouseEnterHandler: function (e) {
            this.stopRotate()
        },
        onMouseOutHandler: function () {
            this.startRotate()
        },
        onClickHandler: function (t) {
            clearInterval(this.interval);
            var n = e(t.target),
                i = e(n.context.parentElement).find(".pip").index(n);
            if (i === this.index) return;
            this.$items.hide().removeClass("show"), e(this.$items[this.index]).show().addClass("hide"), r.to(e(this.$items[this.index]), .3, {
                css: {
                    opacity: 0
                },
                ease: Quad.easeInOut,
                onComplete: function () {
                    e(this).hide().removeClass("hide")
                }
            }), this.index = i, e(this.$items[this.index]).show().css("opacity", 0).removeClass("hide").addClass("show"), r.to(e(this.$items[this.index]), .3, {
                css: {
                    opacity: 1
                },
                ease: Quad.easeInOut,
                onComplete: function () { }
            }), this.$pips.removeClass("selected"), e(this.$pips[this.index]).addClass("selected");
            var s = this;
            setTimeout(function () {
                e(s.$items[s.index]).show()
            }, 50)
        },
        destroy: function () {
            clearInterval(this.interval), this.$el.html(this.markup), n.prototype.destroy.apply(this, arguments)
        }
    });
    return i
}), define("Views/Components/homepage-hero-carousel", ["jquery", "underscore", "Base"], function (e, t, n) {
    var r = n.extend({
        DELAY: null,
        $items: null,
        $pips: null,
        index: null,
        interval: null,
        markup: null,
        className: "",
        events: {
            "click .pip": "onClickHandler"
        },
        initialize: function (e) {
            this.DELAY = e.delay, t.bindAll(this, "rotate", "onClickHandler"), this.$items = this.$el.find(".carousel-item"), this.$pips = this.$el.find(".pips"), this.index = 0, this.markup = this.$el.html(), pageEditor || (this.interval = setInterval(this.rotate, this.DELAY))
        },
        rotate: function () {
            this.$items.removeClass("hide"), e(this.$items[this.index]).removeClass("show").addClass("hide"), ++this.index, this.index >= this.$items.length && (this.index = 0), e(this.$items[this.index]).addClass("show")
        },
        onClickHandler: function (n) {
            clearInterval(this.interval);
            var r = e(n.target),
                i = e(r.context.parentElement).find(".pip").index(r);
            if (i === this.index) return;
            this.index = i, this.$items.addClass("hide").removeClass("show"), e(this.$items[i]).removeClass("hide"), setTimeout(t.bind(function () {
                e(this.$items[i]).addClass("show")
            }, this), 1)
        },
        destroy: function () {
            clearInterval(this.interval), this.$el.html(this.markup), n.prototype.destroy.apply(this, arguments)
        }
    });
    return r
}), define("Views/Modules/homepage", ["jquery", "underscore", "AppModel", "Base", "Views/Components/homepage-background-wiggle", "Views/Components/homepage-tile-carousel", "Views/Components/homepage-hero-carousel", "Modules/getContentViaAjax"], function (e, t, n, r, i, s, o, u) {
    var a = r.extend({
        $doc: null,
        $body: null,
        $win: null,
        $container: null,
        $tiles: null,
        $loadMore: null,
        $tileContainer: null,
        $tileAmount: null,
        currentColumns: null,
        bgColors: null,
        subviews: null,
        startIndex: null,
        tileRequest: null,
        currentTileAmount: null,
        className: "",
        initialize: function (i) {
            t.bindAll(this, "onScroll"), r.prototype.initialize.apply(this, arguments), this.$doc = document.documentElement, this.$body = n.get("body"), this.$win = n.get("win"), this.$container = this.$el.find(".tile-container"), this.$tiles = this.$el.find(".tile"), this.$loadMore = this.$el.find(".load-more"), this.$tileContainer = e(".tile-container"), this.$tileAmount = this.$tileContainer.data("tiles-count"), this.startIndex = this.$tileContainer.find(".tile").not(".spacer").length, this.subviews = {}, this.subviews.heroCarousel = new o({
                el: "#homepage-hero-marquee",
                delay: 4500
            });
            var u = e(".tile.carousel");
            if (u.length) {
                var a = u.length;
                while (--a > -1) this.subviews[u[a].id] = new s({
                    el: "#" + u[a].id,
                    delay: 3500
                })
            }
            this.bgColors = ["blue", "yellow", "green", "pink", "yellow"];
            var f = t.throttle(this.onScroll, 170);
            this.$win.scroll(f), this.getMoreTiles(), this.onScroll(), this.setBackgroundColor(0)
        },
        setViewState: function () {
            var t = n.getScrollPosition(),
                r = this.$win.height(),
                i = e(document).height(),
                s = this;
            if (s.$loadMore.hasClass("loading")) return;
            s.currentTileAmount < s.$tileAmount ? s.$loadMore.removeClass("hide") : s.currentTileAmount >= s.$tileAmount ? s.$loadMore.addClass("hide") : s.$loadMore.addClass("hide");
            if (s.$doc.clientWidth > 1280) {
                var o = s.$tileContainer.find('.tile:not(".spacer")').slice(-1);
                o.hasClass("cube") || o.hasClass("user-generated-content") ? s.$tileContainer.css({
                    "padding-bottom": "480px"
                }) : s.$tileContainer.css({
                    "padding-bottom": "240px"
                })
            }
        },
        setBackgroundColor: function (e) {
            var t = this.bgColors[e];
            if (t === undefined || t === null) t = this.bgColors[this.bgColors.length - 1];
            if (this.$el.hasClass(t)) return;
            var n = this.bgColors.length;
            while (--n > -1) this.bgColors[n] !== t && this.$el.removeClass(this.bgColors[n]);
            this.$el.addClass(t)
        },
        onScroll: function (e) {
            if (this.$body.hasClass("flip")) return;
            var t = this.$container.height() / this.bgColors.length,
                r = Math.floor(n.getScrollPosition() / t);
            isNaN(r) && (r = 0), r = Math.max(0, r), this.setBackgroundColor(r), this.setViewState()
        },
        getMoreTiles: function () {
            var t = this,
                n = t.$doc.clientWidth;
            t.tileRequest = 10, t.currentTileAmount = t.startIndex, t.$loadMore.on("click", function (n) {
                n.preventDefault ? n.preventDefault() : n.returnValue = !1;
                if (e(this).hasClass("loading")) return;
                t.$loadMore.addClass("loading"), t.currentTileAmount + t.tileRequest >= t.$tileAmount && (t.tileRequest = t.$tileAmount - t.startIndex), t.getTiles(t.currentTileAmount, t.tileRequest)
            })
        },
        getTiles: function (e, t) {
            var n = this,
                r = n.$tileContainer.data("tiles-url"),
                i = new u({
                    contentType: "text/html",
                    dataType: "html",
                    contentUrl: n.getTilesUrl(r, e, t),
                    onSuccess: function (e) {
                        n.loadTiles(e)
                    }
                })
        },
        getTilesUrl: function (e, t, n) {
            var r = e + "&startIndex=" + t + "&numberOfTiles=" + n;
            return r
        },
        loadTiles: function (t) {
            var n = this,
                r = [],
                i = [],
                s = e(t);
            for (var o = 0; o < s.length; ++o) e(s[o]).hasClass("spacer") && i.push(e(this));
            while (r.length - i.length < n.tileRequest) for (var o = 0; o < s.length; ++o) if (e(s[o]).hasClass("tile")) {
                var u = e(s[o]);
                u.appendTo(n.$tileContainer).addClass("in-active"), r.push(u[0])
            }
            n.loadImages(r)
        },
        loadImages: function (t) {
            function u() {
                i++, i === r.length && n.showTiles(t)
            }
            var n = this,
                r = [],
                i = 0;
            for (var s = 0; s < t.length; ++s) {
                var o = t[s];
                e(o).find("img").length === 1 && r.push(e(t[s]).find("img")[0])
            }
            e.each(r, function () {
                e(this).load(function () {
                    u()
                })
            })
        },
        showTiles: function (t) {
            var n = this,
                r = n.$body.scrollTop();
            n.updateLinks(), n.setViewState(), e.each(t, function (t, i) {
                var s = e(this);
                if (s.hasClass("spacer")) s.removeClass("in-active");
                else var o = setTimeout(function () {
                    s.removeClass("in-active")
                }, (t + 1) * 50);
                n.$body.scrollTop(r)
            }), t.length = 0, n.startIndex += n.tileRequest, n.currentTileAmount = n.startIndex, n.$loadMore.removeClass("loading"), n.setViewState()
        },
        destroy: function () {
            r.prototype.destroy.apply(this, arguments), this.$win.off("." + this.cid)
        }
    });
    return a
}), define("Views/Modules/gallery", ["jquery", "underscore", "AppModel", "Backbone", "Base"], function (e, t, n, r, i) {
    var s = i.extend({
        $win: null,
        $gallery: null,
        $galleryItem: null,
        $navButton: null,
        $items: null,
        index: null,
        className: "",
        events: {
            "click .nav-button": "onClickHandler"
        },
        initialize: function (t) {
            i.prototype.initialize.apply(this, arguments), this.$win = n.get("win"), this.$gallery = e(".gallery"), this.$galleryItem = e(".gallery .gallery-item"), this.$navButton = e(".nav-button"), this.$items = e(".gallery-items"), this.index = 0, this.$galleryItem.each(function (t, n) {
                e(n).css("left", t * 104 + "%")
            }), this.disableEventHandler("previous")
        },
        slideTo: function (e) {
            this.$win.trigger("WacomPauseAllPlayingVideos");
            var t = !1;
            e = Math.min(e, this.$galleryItem.length - 1), e = Math.max(e, 0);
            if (this.index !== e) {
                this.index = e, t = !0;
                var n = this.index * 104;
                this.$items.css({
                    left: "-" + n + "%"
                })
            }
            return t
        },
        next: function () {
            var e = this.slideTo(this.index + 1);
            return this.checkNavStatus(), e
        },
        previous: function () {
            var e = this.slideTo(this.index - 1);
            return this.checkNavStatus(), e
        },
        onClickHandler: function (t) {
            e(t.target).hasClass("next") ? this.next() : e(t.target).hasClass("previous") && this.previous()
        },
        checkNavStatus: function () {
            this.index === 0 ? this.disableEventHandler("previous") : this.enableEventHandler("previous"), this.index + 1 === this.$galleryItem.length ? this.disableEventHandler("next") : this.enableEventHandler("next")
        },
        disableEventHandler: function (t) {
            e(".nav-button." + t).css({
                visibility: "hidden"
            })
        },
        enableEventHandler: function (t) {
            e(".nav-button." + t).css({
                visibility: "visible"
            })
        }
    });
    return s
}), define("Views/Modules/spectablet", ["jquery", "underscore", "Backbone", "Base"], function (e, t, n, r) {
    var i = r.extend({
        events: {
            "click .more": "open",
            "click .less": "close"
        },
        initialize: function (t) {
            this.options = e.extend({
                list: null,
                openHeight: 380
            }, t || {}), this.$list = e(this.options.list);
            var n = this;
            setTimeout(function () {
                n.close()
            }), e(".more").fadeOut(0).removeClass("hidden").fadeIn(200)
        },
        open: function () {
            var t = this;
            t.$list.find("li").fadeIn(500), e(".more").addClass("hidden"), e(".less").removeClass("hidden")
        },
        close: function () {
            var t = this,
                n = this.options.openHeight,
                r = 0;
            this.$list.find("li").each(function (i, s) {
                r += e(s).height();
                if (r > n) return t.hide(i - 1), !1
            }), e(".less").addClass("hidden"), e(".more").removeClass("hidden")
        },
        hide: function (e) {
            this.$list.find("li:gt(" + e + ")").hide()
        }
    });
    return i
}), define("Views/Modules/productfeaturegallery", ['jquery','underscore','Backbone','Base','TweenMax'], function ($,_,Backbone,Base,TweenMax) {
    var ProductFeatureGallery = Base.extend({

        className: '',

        navigationWrapperTemplate: '<nav class="pagination"><ul></ul></nav>',
        navigationItemTemplate: '<li class=""><span></span></li>',

        carousels: [],

        events: {
            "click .feature": "onImageClick"
        },

        initialize: function (options) {

            this.options = $.extend({
                items: null
            }, options || {});

            var self = this;

            this.$el.each(function (index, el) {
                var $el = $(el);
                var newCarousel = {};
                newCarousel.$el = $el.parent(".product-spec-feature-carousel");
                newCarousel.$images = $el.find(self.options.items);
                newCarousel.$images.eq(0).addClass('active');
                newCarousel.numberOfItems = (newCarousel.$images.length - 1);
                newCarousel.index = 0;
                newCarousel.isAnimating = false;
                self.createNavigation(self.numberOfItems, newCarousel, $el);

                newCarousel.$buttons.eq(newCarousel.index).addClass('active');

                self.carousels[index] = newCarousel;
            });
        },

        createNavigation: function (total, carousel, $el) {
            var self = this;

            $el.after($(self.navigationWrapperTemplate).clone());
            carousel.$nav = carousel.$el.find('.pagination ul');

            carousel.$images.each(function () {
                carousel.$nav.append($(self.navigationItemTemplate).clone());
            });

            this.attachEvents();
            carousel.$buttons = carousel.$nav.find('li');
        },

        attachEvents: function () {
            var self = this;
            // TODO: Avoid using anonymous functions for events
            $('.pagination li').on('click', function (event) {
                self.onButtonClick(event);
            });
        },

        getCarousel: function($el){
            var carousel;
            for (var i = 0; i < this.carousels.length; i++) {
                if (this.carousels[i].$el[0] === $el[0])
                    carousel = this.carousels[i];
            }
            return carousel;
        },

        onButtonClick: function (event) {
            event.stopPropagation();
            event.preventDefault();
            var target = $(event.currentTarget);
            var $el = target.closest('.product-spec-feature-carousel');

            var carousel = this.getCarousel($el);

            this.setIndex($(event.currentTarget).index(), carousel);
        },

        onImageClick: function (event) {
            event.preventDefault();
            var target = $(event.currentTarget);
            var $el = target.closest('.product-spec-feature-carousel');

            var carousel = this.getCarousel($el);

            this.next(carousel);
        },

        next: function (carousel) {
            this.setIndex(carousel.index + 1, carousel);
        },

        setIndex: function (index, carousel) {
            var $currentImage;
            var $nextImage;
            var self = this;

            if (index > carousel.numberOfItems) {
                index = 0;
            }

            if (carousel.index !== index && !carousel.isAnimating) {

                carousel.isAnimating = true;

                $current = carousel.$images.eq(carousel.index);
                $next = carousel.$images.eq(index);

                TweenMax.to($current, 0.3, {
                    css: {
                        opacity: 0
                    },
                    ease: Quad.easeInOut,
                    onComplete: function () {
                        $current.css('display', 'none');
                        $next.css('display', 'block');
                    }
                });
                TweenMax.to($next, 0.3, {
                    css: {
                        opacity: 1
                    },
                    ease: Quad.easeInOut,
                    onComplete: function () {
                        carousel.isAnimating = false;
                    }
                });
                carousel.index = index;
                carousel.$buttons.removeClass('active');
                carousel.$buttons.eq(carousel.index).addClass('active');
            }
        },

        destroy: function () {
            // TODO: Unbind events
            Base.prototype.destroy.apply(this, arguments);
        }

    });

    return ProductFeatureGallery;
}),define("Views/Modules/productspecgallery", ["jquery", "underscore", "Backbone", "Base", "TweenMax"], function (e, t, n, r, i) {
    var s = r.extend({
        className: "",
        navigationWrapperTemplate: '<nav class="pagination"><ul></ul></nav>',
        navigationItemTemplate: '<li class=""><span></span></li>',
        events: {
            "click .product-sequence-feature .product-sequence-figure": "onImageClick",
            "click .feature": "onImageClick"
        },
        initialize: function (t) {
            this.options = e.extend({
                items: null
            }, t || {}), this.$el = e(this.el), this.$images = this.$el.find(this.options.items), this.$images.eq(0).addClass("active"), this.numberOfItems = this.$images.length - 1, this.index = 0, this.isAnimating = !1, this.createNavigation(this.numberOfItems), this.$buttons.eq(this.index).addClass("active")
        },
        createNavigation: function (t) {
            var n = this;
            this.$el.after(n.navigationWrapperTemplate), this.$nav = e(".pagination ul"), this.$images.each(function () {
                n.$nav.append(n.navigationItemTemplate)
            }), this.attachEvents(), this.$buttons = this.$nav.find("li")
        },
        attachEvents: function () {
            var t = this;
            e(".pagination li").on("click", function (e) {
                t.onButtonClick(e)
            })
        },
        onButtonClick: function (t) {
            t.stopPropagation(), t.preventDefault(), this.setIndex(e(t.currentTarget).index())
        },
        onImageClick: function (e) {
            e.preventDefault(), this.next()
        },
        next: function () {
            this.setIndex(this.index + 1)
        },
        setIndex: function (e) {
            var t, n, r, s = this;
            e > this.numberOfItems && (e = 0), this.index !== e && !this.isAnimating && (this.isAnimating = !0, $current = this.$images.eq(this.index), $next = this.$images.eq(e), r = $next.find("figcaption"), i.to($current, .3, {
                css: {
                    opacity: 0
                },
                ease: Quad.easeInOut,
                onComplete: function () {
                    $current.css("display", "none"), $next.css("display", "block")
                }
            }), i.to($next, .3, {
                css: {
                    opacity: 1
                },
                ease: Quad.easeInOut,
                onComplete: function () {
                    var e, t, n;
                    n = $next.data("dir") === "right" ? ["+=100px", "-=100px"] : ["-=100px", "+=100px"], t = n[0], e = n[1], r.css({
                        opacity: 0,
                        marginRight: t
                    }), i.to(r, .4, {
                        css: {
                            opacity: 1,
                            marginRight: e
                        },
                        ease: Expo.easeOut,
                        onComplete: function () {
                            s.isAnimating = !1
                        }
                    })
                }
            }), this.index = e, this.$buttons.removeClass("active"), this.$buttons.eq(this.index).addClass("active"))
        },
        destroy: function () {
            r.prototype.destroy.apply(this, arguments)
        }
    });
    return s
}), define("Views/Components/figureimagepaginationapps", ["jquery", "underscore", "Base"], function (e, t, n) {
    var r = n.extend({
        paginationWrapperMarkup: "<div class='pagination-controls'><ul class='pagination'></ul></div>",
        paginationItemsMarkup: "<li></li>",
        initialize: function (n) {
            this.options = e.extend({
                pageItemClass: null
            }, n || {}), this.$layers = e(this.el).find(this.options.pageItemClass), this.currentLayerIndex = 0, this.isAnimating = !1, this.$buttons = e(this.el).find(".pagination .button");
            var r = this;
            t.delay(function () {
                r.positionLayers(), r.$buttons.length === 0 ? r.createNavigation() : r.$navigation = e(r.el).find(".pagination-controls"), r.addEvents()
            }, AppModel.get("html").hasClass(".ie8") ? 1 : 0)
        },
        positionLayers: function () {
            var t = this,
                n = this.$layers.eq(this.currentLayerIndex).height();
            e(this.el).css({
                position: "relative",
                height: n
            }), this.$layers.css({
                position: "absolute",
                top: 0,
                width: "100%"
            }).fadeOut(0).eq(0).fadeIn(0)
        },
        createNavigation: function () {
            var n = this,
                r = e(this.el).find(".textbox");
            r.append(this.paginationWrapperMarkup), this.$navigation = e(this.el).find(".pagination-controls"), n.$layers.each(function (e) {
                n.$navigation.find("ul").append("<li class='button'><span class='label pagination-nav-item' data-index='" + e + "'>" + (e + 1) + "</span><span class='label pagination-nav-item' data-index='" + e + "'>" + (e + 1) + "</span><span class='label selected'></span></li>")
            }), this.$buttons = e(this.el).find(".pagination .button");
            var i = r.length,
                s = 0;
            r.each(t.bind(function (e) {
                this.$buttons.eq(e * i + s).addClass("selected"), ++s
            }, this))
        },
        addEvents: function () {
            var t, n = this;
            this.$navigation.find(".button span").on("click", function (r) {
                r.preventDefault(), t = e(this).attr("data-index"), n.goToIndex(t)
            })
        },
        goToIndex: function (e) {
            var t = this;
            parseInt(this.currentLayerIndex, 10) !== parseInt(e, 10) && !this.isAnimating && (t.isAnimating = !0, this.$layers.eq(this.currentLayerIndex).fadeOut(500), t.$layers.eq(e).fadeIn(500, function () {
                t.currentLayerIndex = e, t.updateLayout(), t.isAnimating = !1
            }))
        },
        updateLayout: function () {
            var t = this.$layers.eq(this.currentLayerIndex),
                n = t.height();
            e(this.el).css({
                position: "relative",
                height: n
            })
        },
        destroy: function () {
            n.prototype.destroy.apply(this, arguments)
        }
    });
    return r
}), define("Views/Components/figureimagepagination", ["jquery", "underscore", "Base"], function (e, t, n) {
    var r = n.extend({
        paginationWrapperMarkup: "<div class='pagination-controls'><ul class='pagination'></ul></div>",
        paginationItemsMarkup: "<li></li>",
        initialize: function (n) {
            this.options = e.extend({
                pageItemClass: null
            }, n || {}), this.$layers = e(this.el).find(this.options.pageItemClass), this.currentLayerIndex = 0, this.isAnimating = !1, this.$buttons = e(this.el).find(".pagination .button");
            var r = this;
            t.delay(function () {
                r.positionLayers(), r.$buttons.length === 0 ? r.createNavigation() : (r.$buttons.removeClass("selected"), r.$buttons.eq(0).addClass("selected"), r.$navigation = e(r.el).find(".pagination-controls")), r.addEvents()
            }, AppModel.get("html").hasClass(".ie8") ? 1 : 0)
        },
        positionLayers: function () {
            var t = this,
                n = this.$layers.eq(this.currentLayerIndex).height();
            e(this.el).css({
                position: "relative",
                height: n
            }), this.$layers.css({
                position: "absolute",
                top: 0,
                width: "100%"
            }).fadeOut(0).eq(0).fadeIn(0)
        },
        createNavigation: function () {
            var t = this;
            e(this.el).append(this.paginationWrapperMarkup), this.$navigation = e(this.el).find(".pagination-controls"), t.$layers.each(function (e) {
                t.$navigation.find("ul").append("<li class='button' data-gtm='{\"event\": \"click\",\"widget\": \"Business Solutions\",\"state\": \"" + (e + 1) + "\",\"action\": \"hero-navigation\"}'><span class='label pagination-nav-item' data-index='" + e + "'>" + (e + 1) + "</span><span class='label pagination-nav-item' data-index='" + e + "'>" + (e + 1) + "</span><span class='label selected'></span></li>")
            }), this.$buttons = e(this.el).find(".pagination .button"), this.$buttons.eq(0).addClass("selected"), this.positionNav()
        },
        positionNav: function () {
            this.$navigation.css({
                position: "absolute",
                bottom: 40,
                right: "5%"
            })
        },
        addEvents: function () {
            var t, n = this;
            this.$navigation.find(".button span").on("click", function (r) {
                r.preventDefault(), t = e(this).attr("data-index"), n.goToIndex(t)
            })
        },
        goToIndex: function (e) {
            var t = this;
            parseInt(this.currentLayerIndex, 10) !== parseInt(e, 10) && !this.isAnimating && (this.$buttons.removeClass("selected"), this.$buttons.eq(e).addClass("selected"), t.isAnimating = !0, this.$layers.eq(this.currentLayerIndex).fadeOut(500), t.$layers.eq(e).fadeIn(500, function () {
                t.currentLayerIndex = e, t.updateLayout(), t.isAnimating = !1
            }))
        },
        updateLayout: function () {
            var t = this.$layers.eq(this.currentLayerIndex),
                n = t.height();
            e(this.el).css({
                position: "relative",
                height: n
            })
        },
        destroy: function () {
            n.prototype.destroy.apply(this, arguments)
        }
    });
    return r
}), define("Views/Modules/figureimagepaginationcontroller", ["jquery", "underscore", "AppModel", "Base", "Views/Components/figureimagepaginationapps", "Views/Components/figureimagepagination"], function (e, t, n, r, i, s) {
    var o = r.extend({
        imagePagination: null,
        initialize: function (t) {
            this.options = e.extend({
                pageItemClass: null
            }, t || {});
            var n = this,
                r = [],
                i;
            e(this.options.pageItemClass).each(function () {
                i = e(this).attr("data-group");
                if (e.inArray(i, r) === -1) {
                    var t = e(this).hasClass("lowerPager");
                    n.createGroup(i, t), r.push(i)
                }
            })
        },
        createGroup: function (n, r) {
            var i = this;
            e('*[data-group="' + n + '"]').wrapAll("<div class='pagination-wrapper' data-pagination-group='" + n + "' />");
            var s = r ? "Views/Components/figureimagepagination" : "Views/Components/figureimagepaginationapps";
            require([s], t.bind(function (e) {
                this.imagePagination = new e({
                    el: 'div[data-pagination-group="' + n + '"]',
                    pageItemClass: i.options.pageItemClass
                })
            }, this))
        },
        destroy: function () {
            r.prototype.destroy.apply(this, arguments), this.imagePagination && this.imagePagination.destroy()
        }
    });
    return o
}), function () {
    var e;
    e = function () {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function (e) {
            return e.nodeName.toUpperCase() === "OPTGROUP" ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function (e) {
            var t, n, r, i, s, o;
            t = this.parsed.length, this.parsed.push({
                array_index: t,
                group: !0,
                label: e.label,
                children: 0,
                disabled: e.disabled
            }), s = e.childNodes, o = [];
            for (r = 0, i = s.length; r < i; r++) n = s[r], o.push(this.add_option(n, t, e.disabled));
            return o
        }, e.prototype.add_option = function (e, t, n) {
            if (e.nodeName.toUpperCase() === "OPTION") return e.text !== "" ? (t != null && (this.parsed[t].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                html: e.innerHTML,
                selected: e.selected,
                disabled: n === !0 ? n : e.disabled,
                group_array_index: t,
                classes: e.className,
                style: e.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, e
    }(), e.select_to_array = function (t) {
        var n, r, i, s, o;
        r = new e, o = t.childNodes;
        for (i = 0, s = o.length; i < s; i++) n = o[i], r.add_node(n);
        return r.parsed
    }, this.SelectParser = e
}.call(this), function () {
    var e, t;
    t = this, e = function () {
        function e(e, t) {
            this.form_field = e, this.options = t != null ? t : {}, this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(t.size === "large", t.zIndex), this.register_observers(), this.finish_setup()
        }
        return e.prototype.set_default_values = function () {
            var e = this;
            return this.click_test_action = function (t) {
                return e.test_active_click(t)
            }, this.activate_action = function (t) {
                return e.activate_field(t)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : !0, this.search_contains = this.options.search_contains || !1, this.choices = 0, this.single_backstroke_delete = this.options.single_backstroke_delete || !1, this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1
        }, e.prototype.set_default_text = function () {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options" : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option", this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match"
        }, e.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function (e) {
            var t = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function () {
                    return t.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function (e) {
            var t = this;
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () {
                return t.blur_test()
            }, 100)
        }, e.prototype.result_add_option = function (e) {
            var t, n;
            return e.disabled ? "" : (e.dom_id = this.container_id + "_o_" + e.array_index, t = e.selected && this.is_multiple ? [] : ["active-result"], e.selected && t.push("result-selected"), e.group_array_index != null && t.push("group-option"), e.classes !== "" && t.push(e.classes), n = e.style.cssText !== "" ? ' style="' + e.style + '"' : "", '<li id="' + e.dom_id + '" class="' + t.join(" ") + '"' + n + ">" + e.html + "</li>")
        }, e.prototype.results_update_field = function () {
            return this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build()
        }, e.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function (e) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.keyup_checker = function (e) {
            var t, n;
            t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale();
            switch (t) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    e.preventDefault();
                    if (this.results_showing) return this.result_select(e);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, e.prototype.generate_field_id = function () {
            var e;
            return e = this.generate_random_id(), this.form_field.id = e, e
        }, e.prototype.generate_random_char = function () {
            var e, t, n;
            return e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = Math.floor(Math.random() * e.length), t = e.substring(n, n + 1)
        }, e
    }(), t.AbstractChosen = e
}.call(this), function () {
    var e, t, n, r, i = {}.hasOwnProperty,
        s = function (e, t) {
            function r() {
                this.constructor = e
            }
            for (var n in t) i.call(t, n) && (e[n] = t[n]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        };
    r = this, e = jQuery, e.fn.extend({
        chosen: function (n) {
            return this.each(function (r) {
                var i;
                i = e(this);
                if (!i.hasClass("chzn-done")) return i.data("chosen", new t(this, n))
            })
        }
    }), t = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return s(i, t), i.prototype.setup = function () {
            return this.form_field_jq = e(this.form_field), this.current_value = this.form_field_jq.val(), this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
        }, i.prototype.finish_setup = function () {
            return this.form_field_jq.addClass("chzn-done")
        }, i.prototype.set_up_html = function (t, r) {
            var i, s, o, u, a, f;
            return this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id(), this.container_id += "_chzn", i = ["chzn-container"], i.push("chzn-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && i.push(this.form_field.className), this.is_rtl && i.push("chzn-rtl"), t && i.push("large"), r === undefined && (r = 0), this.f_width = this.form_field_jq.outerWidth(), o = {
                id: this.container_id,
                "class": i.join(" "),
                style: "width: " + this.f_width + "px;",
                title: this.form_field.title
            }, s = e("<div />", o), this.is_multiple ? s.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>') : s.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'), this.form_field_jq.hide().after(s), this.container = e("#" + this.container_id), this.dropdown = this.container.find("div.chzn-drop").first(), u = this.container.height(), a = this.f_width - n(this.dropdown), this.dropdown.css({
                width: a + "px",
                top: 0,
                opacity: 0
            }), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chzn-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(), this.selected_item = this.container.find(".chzn-single").first(), f = a - n(this.search_container) - n(this.search_field), this.search_field.css({
                width: f + "px"
            })), this.results_build(), this.set_tab_index(), this.form_field_jq.trigger("liszt:ready", {
                chosen: this
            })
        }, i.prototype.register_observers = function () {
            var e = this;
            return this.container.mousedown(function (t) {
                return e.container_mousedown(t)
            }), this.container.mouseup(function (t) {
                return e.container_mouseup(t)
            }), this.container.mouseenter(function (t) {
                return e.mouse_enter(t)
            }), this.container.mouseleave(function (t) {
                return e.mouse_leave(t)
            }), this.search_results.mouseup(function (t) {
                return e.search_results_mouseup(t)
            }), this.search_results.mouseover(function (t) {
                return e.search_results_mouseover(t)
            }), this.search_results.mouseout(function (t) {
                return e.search_results_mouseout(t)
            }), this.form_field_jq.bind("liszt:updated", function (t) {
                return e.results_update_field(t)
            }), this.form_field_jq.bind("liszt:activate", function (t) {
                return e.activate_field(t)
            }), this.form_field_jq.bind("liszt:open", function (t) {
                return e.container_mousedown(t)
            }), this.search_field.blur(function (t) {
                return e.input_blur(t)
            }), this.search_field.keyup(function (t) {
                return e.keyup_checker(t)
            }), this.search_field.keydown(function (t) {
                return e.keydown_checker(t)
            }), this.search_field.focus(function (t) {
                return e.input_focus(t)
            }), this.is_multiple ? this.search_choices.click(function (t) {
                return e.choices_click(t)
            }) : this.container.click(function (e) {
                return e.preventDefault()
            })
        }, i.prototype.search_field_disabled = function () {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) return this.container.addClass("chzn-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus", this.activate_action), this.close_field();
            this.container.removeClass("chzn-disabled"), this.search_field[0].disabled = !1;
            if (!this.is_multiple) return this.selected_item.bind("focus", this.activate_action)
        }, i.prototype.container_mousedown = function (t) {
            var n;
            if (!this.is_disabled) return n = t != null ? e(t.target).hasClass("search-choice-close") : !1, t && t.type === "mousedown" && !this.results_showing && t.preventDefault(), !this.pending_destroy_click && !n ? (this.active_field ? !this.is_multiple && t && (e(t.target)[0] === this.selected_item[0] || e(t.target).parents("a.chzn-single").length) && (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).click(this.click_test_action), this.results_show()), this.activate_field()) : this.pending_destroy_click = !1
        }, i.prototype.container_mouseup = function (e) {
            if (e.target.nodeName === "ABBR" && !this.is_disabled) return this.results_reset(e)
        }, i.prototype.blur_test = function (e) {
            if (!this.active_field && this.container.hasClass("chzn-container-active")) return this.close_field()
        }, i.prototype.close_field = function () {
            return e(document).unbind("click", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chzn-container-active"), this.winnow_results_clear(), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, i.prototype.activate_field = function () {
            return this.container.addClass("chzn-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, i.prototype.test_active_click = function (t) {
            return e(t.target).parents("#" + this.container_id).length ? this.active_field = !0 : this.close_field()
        }, i.prototype.results_build = function () {
            var e, t, n, i, s;
            this.parsing = !0, this.results_data = r.SelectParser.select_to_array(this.form_field), this.is_multiple && this.choices > 0 ? (this.search_choices.find("li.search-choice").remove(), this.choices = 0) : this.is_multiple || (this.selected_item.addClass("chzn-default").find("span").text(this.default_text), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? this.container.addClass("chzn-container-single-nosearch") : this.container.removeClass("chzn-container-single-nosearch")), e = "", s = this.results_data;
            for (n = 0, i = s.length; n < i; n++) t = s[n], t.group ? e += this.result_add_group(t) : t.empty || (e += this.result_add_option(t), t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && (this.selected_item.removeClass("chzn-default").find("span").text(t.text), this.allow_single_deselect && this.single_deselect_control_build()));
            return this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.search_results.html(e), this.parsing = !1
        }, i.prototype.result_add_group = function (t) {
            return t.disabled ? "" : (t.dom_id = this.container_id + "_g_" + t.array_index, '<li id="' + t.dom_id + '" class="group-result">' + e("<div />").text(t.label).html() + "</li>")
        }, i.prototype.result_do_highlight = function (e, t) {
            var n, r, i, s, o;
            if (e.length) {
                this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted");
                if (!t) return;
                i = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), s = i + o, r = this.result_highlight.position().top + this.search_results.scrollTop(), n = r + this.result_highlight.outerHeight();
                if (n >= s) return this.search_results.scrollTop(n - i > 0 ? n - i : 0);
                if (r < o) return this.search_results.scrollTop(r)
            }
        }, i.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, i.prototype.results_show = function () {
            var e;
            if (!this.is_multiple) this.selected_item.addClass("chzn-single-with-drop"), this.result_single_selected && this.result_do_highlight(this.result_single_selected, !0);
            else if (this.max_selected_options <= this.choices) return this.form_field_jq.trigger("liszt:maxselected", {
                chosen: this
            }), !1;
            return e = this.is_multiple ? this.container.height() : this.container.height() - 1, this.form_field_jq.trigger("liszt:showing_dropdown", {
                chosen: this
            }), this.dropdown.addClass("show"), this.dropdown.css({
                top: e + "px",
                left: 0,
                opacity: 1
            }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results()
        }, i.prototype.results_hide = function () {
            return this.is_multiple || this.selected_item.removeClass("chzn-single-with-drop"), this.result_clear_highlight(), this.form_field_jq.trigger("liszt:hiding_dropdown", {
                chosen: this
            }), this.dropdown.removeClass("show"), this.dropdown.css({
                top: 0,
                left: "-9000px",
                opacity: 0
            }), this.results_showing = !1
        }, i.prototype.set_tab_index = function (e) {
            var t;
            if (this.form_field_jq.attr("tabindex")) return t = this.form_field_jq.attr("tabindex"), this.form_field_jq.attr("tabindex", -1), this.search_field.attr("tabindex", t)
        }, i.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, i.prototype.search_results_mouseup = function (t) {
            var n;
            n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
            if (n.length) return this.result_highlight = n, this.result_select(t), this.search_field.focus()
        }, i.prototype.search_results_mouseover = function (t) {
            var n;
            n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
            if (n) return this.result_do_highlight(n)
        }, i.prototype.search_results_mouseout = function (t) {
            if (e(t.target).hasClass("active-result")) return this.result_clear_highlight()
        }, i.prototype.choices_click = function (t) {
            t.preventDefault();
            if (this.active_field && !e(t.target).hasClass("search-choice") && !this.results_showing) return this.results_show()
        }, i.prototype.choice_build = function (t) {
            var n, r, i, s = this;
            return this.is_multiple && this.max_selected_options <= this.choices ? (this.form_field_jq.trigger("liszt:maxselected", {
                chosen: this
            }), !1) : (n = this.container_id + "_c_" + t.array_index, this.choices += 1, t.disabled ? r = '<li class="search-choice search-choice-disabled" id="' + n + '"><span>' + t.html + "</span></li>" : r = '<li class="search-choice" id="' + n + '"><span>' + t.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + t.array_index + '"></a></li>', this.search_container.before(r), i = e("#" + n).find("a").first(), i.click(function (e) {
                return s.choice_destroy_link_click(e)
            }))
        }, i.prototype.choice_destroy_link_click = function (t) {
            return t.preventDefault(), this.is_disabled ? t.stopPropagation : (this.pending_destroy_click = !0, this.choice_destroy(e(t.target)))
        }, i.prototype.choice_destroy = function (e) {
            if (this.result_deselect(e.attr("rel"))) return this.choices -= 1, this.show_search_field_default(), this.is_multiple && this.choices > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
        }, i.prototype.results_reset = function () {
            this.form_field.options[0].selected = !0, this.selected_item.find("span").text(this.default_text), this.is_multiple || this.selected_item.addClass("chzn-default"), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change");
            if (this.active_field) return this.results_hide()
        }, i.prototype.results_reset_cleanup = function () {
            return this.current_value = this.form_field_jq.val(), this.selected_item.find("abbr").remove()
        }, i.prototype.result_select = function (e) {
            var t, n, r, i;
            if (this.result_highlight) return t = this.result_highlight, n = t.attr("id"), this.result_clear_highlight(), this.is_multiple ? this.result_deactivate(t) : (this.search_results.find(".result-selected").removeClass("result-selected"), this.result_single_selected = t, this.selected_item.removeClass("chzn-default")), t.addClass("result-selected"), i = n.substr(n.lastIndexOf("_") + 1), r = this.results_data[i], r.selected = !0, this.form_field.options[r.options_index].selected = !0, this.is_multiple ? this.choice_build(r) : (this.selected_item.find("span").first().text(r.text), this.allow_single_deselect && this.single_deselect_control_build()), (!e.metaKey && !e.ctrlKey || !this.is_multiple) && this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field_jq.val() !== this.current_value) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[r.options_index].value
            }), this.current_value = this.form_field_jq.val(), this.search_field_scale()
        }, i.prototype.result_activate = function (e) {
            return e.addClass("active-result")
        }, i.prototype.result_deactivate = function (e) {
            return e.removeClass("active-result")
        }, i.prototype.result_deselect = function (t) {
            var n, r;
            return r = this.results_data[t], this.form_field.options[r.options_index].disabled ? !1 : (r.selected = !1, this.form_field.options[r.options_index].selected = !1, n = e("#" + this.container_id + "_o_" + t), n.removeClass("result-selected").addClass("active-result").show(), this.result_clear_highlight(), this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[r.options_index].value
            }), this.search_field_scale(), !0)
        }, i.prototype.single_deselect_control_build = function () {
            if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
        }, i.prototype.winnow_results = function () {
            if (this.search_container.css("display") === "none") return;
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y;
            this.no_results_clear(), f = 0, l = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html(), o = this.search_contains ? "" : "^", s = new RegExp(o + l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), p = new RegExp(l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), y = this.results_data;
            for (d = 0, m = y.length; d < m; d++) {
                n = y[d];
                if (!n.disabled && !n.empty) if (n.group) e("#" + n.dom_id).css("display", "none");
                else if (!this.is_multiple || !n.selected) {
                    t = !1, a = n.dom_id, u = e("#" + a);
                    if (s.test(n.html)) t = !0, f += 1;
                    else if (this.enable_split_word_search && (n.html.indexOf(" ") >= 0 || n.html.indexOf("[") === 0)) {
                        i = n.html.replace(/\[|\]/g, "").split(" ");
                        if (i.length) for (v = 0, g = i.length; v < g; v++) r = i[v], s.test(r) && (t = !0, f += 1)
                    }
                    t ? (l.length ? (c = n.html.search(p), h = n.html.substr(0, c + l.length) + "</em>" + n.html.substr(c + l.length), h = h.substr(0, c) + "<em>" + h.substr(c)) : h = n.html, u.html(h), this.result_activate(u), n.group_array_index != null && e("#" + this.results_data[n.group_array_index].dom_id).css("display", "list-item")) : (this.result_highlight && a === this.result_highlight.attr("id") && this.result_clear_highlight(), this.result_deactivate(u))
                }
            }
            return f < 1 && l.length ? this.no_results(l) : this.winnow_results_set_highlight()
        }, i.prototype.winnow_results_clear = function () {
            var t, n, r, i, s;
            this.search_field.val(""), n = this.search_results.find("li"), s = [];
            for (r = 0, i = n.length; r < i; r++) t = n[r], t = e(t), t.hasClass("group-result") ? s.push(t.css("display", "auto")) : !this.is_multiple || !t.hasClass("result-selected") ? s.push(this.result_activate(t)) : s.push(void 0);
            return s
        }, i.prototype.winnow_results_set_highlight = function () {
            var e, t;
            if (!this.result_highlight) {
                t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first();
                if (e != null) return this.result_do_highlight(e)
            }
        }, i.prototype.no_results = function (t) {
            var n;
            return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n)
        }, i.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, i.prototype.keydown_arrow = function () {
            var t, n;
            this.result_highlight ? this.results_showing && (n = this.result_highlight.nextAll("li.active-result").first(), n && this.result_do_highlight(n)) : (t = this.search_results.find("li.active-result").first(), t && this.result_do_highlight(e(t)));
            if (!this.results_showing) return this.results_show()
        }, i.prototype.keyup_arrow = function () {
            var e;
            if (!this.results_showing && !this.is_multiple) return this.results_show();
            if (this.result_highlight) return e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices > 0 && this.results_hide(), this.result_clear_highlight())
        }, i.prototype.keydown_backstroke = function () {
            var e;
            if (this.pending_backstroke) return this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke();
            e = this.search_container.siblings("li.search-choice").last();
            if (e.length && !e.hasClass("search-choice-disabled")) return this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")
        }, i.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, i.prototype.keydown_checker = function (e) {
            var t, n;
            t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale(), t !== 8 && this.pending_backstroke && this.clear_backstroke();
            switch (t) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                    break;
                case 13:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    this.keydown_arrow()
            }
        }, i.prototype.search_field_scale = function () {
            var t, n, r, i, s, o, u, a, f;
            if (this.is_multiple) {
                r = 0, u = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (a = 0, f = o.length; a < f; a++) i = o[a], s += i + ":" + this.search_field.css(i) + ";";
                return n = e("<div />", {
                    style: s
                }), n.text(this.search_field.val()), e("body").append(n), u = n.width() + 25, n.remove(), u > this.f_width - 10 && (u = this.f_width - 10), this.search_field.css({
                    width: u + "px"
                }), t = this.container.height(), this.dropdown.css({
                    top: t + "px"
                })
            }
        }, i.prototype.generate_random_id = function () {
            var t;
            t = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
            while (e("#" + t).length > 0) t += this.generate_random_char();
            return t
        }, i
    }(AbstractChosen), r.Chosen = t, n = function (e) {
        var t;
        return t = e.outerWidth() - e.width()
    }, r.get_side_border_padding = n
}.call(this), define("Views/../../Vendor/chosen/chosen.jquery", function () { }), define("Modules/feature-tests", [], function () {
    var e = {
        init: function () {
            return this.getSupport(), this.support
        },
        getSupport: function () {
            this.support.navFullySupported = this.isNavSupported(), this.support.utilityNavFullySupported = this.isUtilityNavSupported(), this.support.historyStateSupported = this.isHistoryStateSupported(), this.support.fixedPositionSupported = this.isFixedPositionSupported(), this.support.fullAnimationSupport = this.areFullAnimationsSupported(), this.support.enableViewport = this.isViewPortSupported()
        },
        support: {
            navFullySupported: null,
            utilityNavFullySupported: null,
            historyStateSupported: null
        },
        isNavSupported: function () {
            return navigator.userAgent.match(/iPad/i) === null
        },
        isUtilityNavSupported: function () {
            return navigator.userAgent.match(/iPad/i) === null
        },
        isHistoryStateSupported: function () {
            return History.enabled
        },
        isFixedPositionSupported: function () {
            return navigator.userAgent.match(/iPad/i) === null
        },
        areFullAnimationsSupported: function () {
            return !$("html").hasClass("ie8")
        },
        isViewPortSupported: function () {
            return $(window).width() < 480 ? !1 : !0
        }
    };
    return e
}), define("Views/Components/filterlistnavigation", ["jquery", "underscore", "AppModel", "Base", "TweenMax", "../../../Vendor/chosen/chosen.jquery", "Modules/feature-tests"], function (e, t, n, r, i, s, o) {
    var u = r.extend({
        $win: null,
        $navFilterList: null,
        $navFilterItem: null,
        $navItems: null,
        $navFilterNavigation: null,
        $nextButton: null,
        $prevButton: null,
        $jsNavFilter: null,
        $filterCategories: null,
        filterItemsWidth: null,
        isMaxNext: null,
        windowWidth: null,
        categoryMarkup: '<select class="chzn-select device" style="width: 380px;" tabindex="2"><option value=""></select>',
        categoryItemMarkup: '<option value="{0}">{0}</option>',
        initialize: function (r) {
            t.bindAll(this, "onNextClicked", "onPrevClicked", "onResize"), this.options = e.extend({
                element: null,
                filterItem: null,
                showSingular: null,
                navClass: null
            }, r || {});
            var i = this;
            this.$win = n.get("win"), this.$parent = this.options.element, this.$filterCategories = this.$parent.find("#filtercategories"), this.$jsNavFilter = this.$parent.find(".js-nav-filter"), this.$jsNavFilter.html(""), this.currentFilter = 1, this.currentCategory = "all", this.features = o.init(), this.index = 0, this.totalItems = 0, setTimeout(function () {
                i.createNav(), i.createCategoryDropDown()
            }, 100)
        },
        createNav: function () {
            var t = [],
                n, r, i, s, o, u = this,
                a = this.$parent.find(this.options.filterItem);
            if (a.length != 1) {
                this.$jsNavFilter.append('<div class="nav-filter-navigation ' + this.options.navClass + ' clearfix"><ul class="nav-filter-list"></ul><span class="feature"></span></div>'), i = this.$parent.find(".nav-filter-list");
                var f = this.$parent.attr("data-show-all-button"),
                    l = this.$filterCategories.attr("data-translation-all");
                f == "true" && (this.options.showSingular === null || this.options.showSingular === !1) && i.append('<li class="nav-filter-item"><a href="#" data-filter-type="all">' + l + "</a></li>"), this.$parent.find(this.options.filterItem).each(function () {
                    n = e(this).attr("data-filter"), r = e(this).attr("data-title"), e.inArray(r, t) === -1 && (i.append('<li class="nav-filter-item"><a href="#" data-filter-type="' + n + '">' + r + "</a></li>"), t.push(r))
                }), this.$navItems = this.$parent.find(".nav-filter-item a"), t.length === 1 ? this.$jsNavFilter.remove() : (this.$currentActiveElement = this.$navItems.eq(0).addClass("active"), o = 100 / this.$navItems.length, this.$parent.hasClass("news-container") || this.$navItems.parent().css({
                    width: o + "%"
                }), this.$navItems.length && this.positionNavArrow(this.$navItems.eq(0)), this.bindEvents());
                var c = this.$navItems.eq(0).attr("data-filter-type");
                c = c ? c : 1, this.filterList(c, this.currentCategory), this.currentFilter = c, this.$parent.hasClass("news-container") && this.setUpArrows()
            }
        },
        setUpArrows: function () {
            this.$jsNavFilter.prepend('<div class="prev-button deactivated"><a href="#"></a></div>'), this.$jsNavFilter.append('<div class="next-button"><a href="#"></a></div>'), this.$navFilterList = this.$parent.find(".nav-filter-list"), this.$navFilterItem = this.$parent.find(".nav-filter-item"), this.$navFilterNavigation = this.$parent.find(".nav-filter-navigation"), this.$nextButton = this.$parent.find(".next-button"), this.$prevButton = this.$parent.find(".prev-button"), this.totalItems = this.$navFilterItem.length;
            if (this.totalItems === 0) return;
            var e = this.$filterCategories.attr("data-tab-width");
            e !== undefined && this.$navItems.parent().css("min-width", e), this.$nextButton.on("click", this.onNextClicked), this.$prevButton.on("click", this.onPrevClicked);
            var n = t.debounce(this.onResize, 100);
            this.$win.resize(n), this.onResize()
        },
        createCategoryDropDown: function () {
            var t, n = [],
                r = this,
                i = this.$filterCategories.attr("data-translation-nocategory"),
                s = this.$filterCategories.attr("data-translation-all");
            this.$filterCategories.html(this.categoryMarkup), this.$parent.find(".chzn-select.device").attr("data-placeholder", s).append('</option><option value="all">' + s + "</option>"), this.$parent.find(".news-item-category").each(function () {
                t = e(this).text(), e.inArray(t, n) === -1 && (r.$parent.find(".chzn-select.device").append("<option value=" + t.replace(/ /g, "") + ">" + t + "</option>"), n.push(t))
            }), n.length === 1 && this.$filterCategories.remove(), this.$parent.find(".chzn-select.device").append('<option value="no-category">' + i + "</option>"), this.setupChosen()
        },
        setupChosen: function () {
            var t = this;
            this.$parent.find(".chzn-select").change(function () {
                t.filterList(t.currentFilter, e(this).val())
            });

            this.$parent.find(".chzn-select").chosen({
                search_contains: !0,
                disable_search_threshold: Infinity,
                size: "large",
                zIndex: 101
            });
        },
        onNavigationClick: function (t) {
            if (!(this.isAnimating === !1 || e("html.ie").length > 0)) return !1;
            filter = e(t).attr("data-filter-type"), this.$currentActiveElement.removeClass("active"), e(t).addClass("active"), this.filterList(filter, this.currentCategory), this.positionNavArrow(t), this.$currentActiveElement = e(t)
        },
        filterList: function (e, t) {
            this.isAnimating = !0;
            var n = this,
                r = "",
                s = this.options.filterItem,
                o = this.$parent.find(this.options.filterItem),
                u = this.$parent;
            t == "all" && e == "all" ? r = o : t == "all" && e != "all" ? r = u.find(s + "[data-filter=" + e + "]") : t != "all" && e == "all" ? r = u.find(s + "[data-category=" + t + "]") : t != "all" && e != "all" && (r = u.find(s + "[data-filter=" + e + '][data-category="' + t + '"]')), this.features.fullAnimationSupport ? (i.to(o, n.TRANSITION_LENGTH, {
                css: {
                    opacity: 0
                },
                ease: Power4.easeInOut,
                onComplete: function () {
                    o.hide(), r.show()
                }
            }), i.to(r, n.TRANSITION_LENGTH, {
                css: {
                    opacity: 1
                },
                delay: n.TRANSITION_LENGTH,
                ease: Power4.easeInOut,
                onComplete: function () {
                    n.isAnimating = !1
                }
            })) : (this.$parent.css({
                height: n.$parent.height() + "px"
            }), o.fadeOut(0), r.delay(0).fadeIn(0, function () {
                n.isAnimating = !1, n.$parent.css({
                    height: "auto"
                })
            })), this.currentFilter = e, this.currentCategory = t
        },
        bindEvents: function () {
            var e, t = this,
                n = this.$parent.find(".nav-filter-item a");
            n.on("click", function (e) {
                e.preventDefault(), t.onNavigationClick(this)
            })
        },
        slideToItem: function (t) {
            if (this.isMaxNext || t < 0 || t >= this.totalItems) return;
            this.index = t;
            var n = parseInt(this.$navFilterList.css("margin-left"), 10),
                r = e(this.$navFilterItem[t]).position().left + n * -1,
                s = this.filterItemsWidth - this.$navFilterNavigation.width();
            i.to(this.$navFilterList, .3, {
                css: {
                    marginLeft: -Math.min(s, r)
                },
                ease: Power4.easeOut
            }), this.isMaxNext = s < r, t === 0 ? this.$prevButton.addClass("deactivated") : this.$prevButton.removeClass("deactivated"), this.isMaxNext ? this.$nextButton.addClass("deactivated") : this.$nextButton.removeClass("deactivated")
        },
        positionNavArrow: function (t) {
            var n = this.$parent.find(".feature"),
                r = e(t).outerWidth() / 2 - e(n).outerWidth() / 2,
                s = this.$parent.find(".nav-filter-list").position().left;
            r = r - s + e(t).position().left, this.features.fullAnimationSupport ? i.to(this.$parent.find(".feature"), .7, {
                css: {
                    left: r
                },
                ease: Power4.easeOut
            }) : this.$parent.find(".feature").css({
                left: r
            })
        },
        onNextClicked: function (e) {
            e.preventDefault(), this.slideToItem(this.index + 1)
        },
        onPrevClicked: function (e) {
            e.preventDefault(), this.isMaxNext = !1, this.slideToItem(this.index - 1)
        },
        onResize: function (t) {
            if (this.windowWidth === this.$win.width()) return;
            this.windowWidth = this.$win.width(), this.index = 0, this.isMaxNext = !1, this.$prevButton.addClass("deactivated"), this.$nextButton.removeClass("deactivated"), this.$parent.removeClass("show-arrows"), this.$navItems.parent().css("width", "auto"), this.$navFilterList.css("width", "5000px"), this.$navFilterList.css("margin-left", 0);
            var n = e(this.$navFilterItem[this.totalItems - 1]);
            this.filterItemsWidth = n.position().left + n.outerWidth() - this.$parent.position().left;
            if (this.filterItemsWidth > this.$navFilterNavigation.width()) this.$parent.addClass("show-arrows");
            else {
                this.$navFilterList.css("width", this.$navFilterNavigation.width().toString() + "px");
                var r = 100 / this.$navItems.length;
                this.$navItems.parent().css("width", r + "%")
            }
        },
        destroy: function () {
            r.prototype.destroy.apply(this, arguments), this.$nextButton && this.$nextButton.off("click", this.onNextClicked), this.$prevButton && this.$prevButton.off("click", this.onPrevClicked), this.$win.off("." + this.cid)
        }
    });
    return u
}), define("Views/Modules/filterlistnavigationcontroller", ["jquery", "underscore", "Backbone", "Base", "Views/Components/filterlistnavigation"], function (e, t, n, r, i) {
    var s = r.extend({
        initialize: function (t) {
            this.options = e.extend({
                filterGroup: null,
                filterItem: null,
                showSingular: null
            }, t || {});
            var n = this,
                r = 0;
            e(this.options.filterGroup).each(function () {
                e(this).addClass("filter-group-" + r), n.createGroup(r), r++
            })
        },
        createGroup: function (t) {
            var n = this,
                r = e(this.options.filterGroup + ".filter-group-" + t),
                s = new i({
                    element: r,
                    filterItem: n.options.filterItem,
                    showSingular: n.options.showSingular,
                    navClass: n.options.navClass
                })
        }
    });
    return s
}), define("Views/Modules/document-filter", ["jquery", "underscore", "Backbone", "Base", "TweenMax", "Views/Components/filterlistnavigation"], function (e, t, n, r, i, s) {
    var o = s.extend({
        createNav: function () {
            var t = [],
                n, r, i, s, o = this;
            this.$parent.find(".nav-filter-list").html(""), i = this.$parent.find(".nav-filter-list"), this.$parent.find(this.options.filterItem).each(function () {
                n = e(this).attr("data-filter"), r = e(this).attr("data-title"), e.inArray(r, t) === -1 && (i.append('<li class="nav-filter-item"><a href="#" data-filter-type="' + n + '">' + r + "</a></li>"), t.push(r))
            }), s = this.$parent.find(".nav-filter-item a"), this.$currentActiveElement = s.eq(0).addClass("active"), this.bindEvents(), this.filterList(i.find("a").attr("data-filter-type"), "no-category")
        }
    });
    return o
}), define("Views/Modules/filterdocumentnavigationcontroller", ["jquery", "underscore", "Backbone", "Base", "Views/Modules/filterlistnavigationcontroller", "Views/Modules/document-filter"], function (e, t, n, r, i, s) {
    var o = i.extend({
        initialize: function (e) {
            this.constructor.__super__.initialize.apply(this, [e])
        },
        createGroup: function (t) {
            var n = this,
                r = e(this.options.filterGroup + ".filter-group-" + t),
                i = new s({
                    element: r,
                    filterItem: n.options.filterItem,
                    showSingular: n.options.showSingular,
                    navClass: n.options.navClass
                })
        }
    });
    return o
}), define("Views/Modules/careersdropdown", ["jquery", "underscore", "Backbone"], function (e, t, n) {
    var r = n.View.extend({
        events: {
            "click a.circle-wrapper": "onCareerLinkClick"
        },
        initialize: function () { },
        onCareerLinkClick: function (t) {
            var n = e(t.target),
                r = n.parents("li");
            if (!r.hasClass("no-jobs")) return;
            t.preventDefault(), r.siblings().removeClass("show"), r.addClass("show")
        }
    });
    return r
}), define("Views/Modules/mapoffices", ["jquery", "underscore", "AppModel", "Base"], function (e, t, n, r) {
    var i = r.extend({
        MIN_MAP_WIDTH: 800,
        WIDTH: 240,
        HALF_WIDTH: 120,
        NAV_WIDTH: 240,
        PADDING: 15,
        MAP_URL: "/Assets/Graphics/map/map.png",
        MAP_URL_1600: "/Assets/Graphics/map/map_1600.jpg",
        MAP_URL_JAPAN: "/Assets/Graphics/map/map_japan.jpg",
        MAP_URL_JAPAN_1600: "/Assets/Graphics/map/map-japan_1600.jpg",
        $win: null,
        $offices: null,
        $mapOffice: e(".map-offices-module"),
        className: "",
        initialize: function (e) {
            t.bindAll(this, "onResize"), r.prototype.initialize.apply(this, arguments), this.$win = n.get("win"), this.$offices = this.$el.find(".office"), this.$win.on("resize", this.onResize), this.onResize()
        },
        onResize: function (t) {
            this.$offices.attr("style", "");
            var n = this.$win.width();
            if (n > this.MIN_MAP_WIDTH) {
                var r, i, s, o = this.WIDTH,
                    u = this.HALF_WIDTH,
                    a = this.NAV_WIDTH,
                    f = this.PADDING;
                this.$offices.each(function (t) {
                    r = e(this), i = r.offset().left, i < 0 && (i += 99999 - u), i + o > n ? (s = i + o - n, r.css("left", -(s + f))) : i < a && (s = a - i, r.css("left", s))
                })
            }
        },
        checkSize: function () {
            var t = e(window).width();
            return t > 960 ? !0 : !1
        },
        destroy: function () {
            r.prototype.destroy.apply(this, arguments), this.$win.off("resize", this.onResize)
        }
    });
    return i
}), define("Views/Modules/herovideo", ["jquery", "underscore", "Backbone", "AppModel"], function (e, t, n, r) {
    var i = n.View.extend({
        events: {
            "click .hero-video-play-button": "onVideoPlay"
        },
        initialize: function () { },
        onVideoPlay: function (t) {
            t.preventDefault();
            var n = e(t.currentTarget),
                i = n.attr("href");
            r.get("videoPlayerNew").loadVideo(i)
        }
    });
    return i
}), define("Views/Modules/compatibilitypopup", ["jquery", "underscore", "Base", "TweenMax"], function (e, t, n, r) {
    var i = n.extend({
        show: !1,
        initialize: function () {
            this.compList = e(this.el).find(".spec-callout-compatibility-list"), this.compList.css({
                opacity: 0,
                display: "none",
                position: "absolute"
            }), this.bindEvents()
        },
        onCompatibilityMenuClick: function () {
            if (this.checkScreenWidth > 900) var t = "-10px",
                n = "-10px";
            else var t = "-80px",
                n = "-120px";
            e(this.compList).css({
                display: "block"
            }), r.to(this.compList, .5, {
                css: {
                    opacity: 1,
                    bottom: t,
                    left: n
                },
                ease: Power4.easeInOut
            })
        },
        checkScreenWidth: function () {
            var e = window.width();
            return e
        },
        fadeOut: function (t) {
            r.to(t, .3, {
                css: {
                    opacity: 0,
                    bottom: 0,
                    left: 0
                },
                ease: Power4.easeInOut,
                onComplete: function () {
                    e(t).css({
                        display: "none"
                    })
                }
            })
        },
        showList: function (t) {
            var n = this;
            t.preventDefault(), this.onCompatibilityMenuClick(), setTimeout(e.proxy(function () {
                this.show = !0
            }, this), 100)
        },
        hideList: function (e) {
            if (this.show === !0) {
                e.stopPropagation();
                var t = this.compList;
                this.fadeOut(t), this.show = !1
            }
        },
        bindEvents: function () {
            var t = this,
                n = e(this.el).find(".spec-compatibility-link");
            n.on("click", e.proxy(t.showList, this)), this.compList.on("mouseleave", e.proxy(t.hideList, this)), e(document).on("click", e.proxy(t.hideList, this)), this.compList.on("click", function (e) {
                e.stopPropagation()
            })
        },
        destroy: function () {
            n.prototype.destroy.apply(this, arguments)
        }
    });
    return i
}), define("Views/Modules/fontresizer", ["jquery", "underscore", "AppModel", "Base"], function (e, t, n, r) {
    var i = r.extend({
        $win: null,
        $containerBody: null,
        $footer: null,
        $fontResizeNav: null,
        $upButton: null,
        $downButton: null,
        winHeight: null,
        events: {
            "click .up": "fontSizeUp",
            "click .down": "fontSizeDown"
        },
        initialize: function (r) {
            t.bindAll(this, "fontSizeUp", "fontSizeDown", "onScroll", "onResize"), this.options = e.extend({
                selector: null
            }, r || {}), this.$win = n.get("win"), this.$containerBody = n.get("containerBody"), this.$footer = e(".footer"), this.$upButton = this.$el.find(".up"), this.$downButton = this.$el.find(".down"), this.availableSizes = ["font-medium", "font-large", "font-extra-large"], this.totalNumberOfFontSizes = this.availableSizes.length, this.elementsToChange = this.options.selector || this.el, this.getCookie("fontPref") === undefined && this.setCookie("fontPref", 0), this.currentSizeIndex = this.getCookie("fontPref"), this.previousSizeIndex = this.currentSizeIndex, this.addFontSizeClass(this.availableSizes[this.currentSizeIndex]), this.$el.css("bottom", 0), this.$win.on("scroll", this.onScroll), this.$win.on("resize", this.onResize), this.onResize()
        },
        setCookie: function (e, t) {
            var n = new Date,
                r = 30;
            n.setDate(n.getDate() + r);
            var i = escape(t) + (r === null ? "" : "; expires=" + n.toUTCString());
            document.cookie = e + "=" + i
        },
        getCookie: function (e) {
            var t, n, r, i = document.cookie.split(";");
            for (t = 0; t < i.length; t++) {
                n = i[t].substr(0, i[t].indexOf("=")), r = i[t].substr(i[t].indexOf("=") + 1), n = n.replace(/^\s+|\s+$/g, "");
                if (n == e) return unescape(r)
            }
        },
        fontSizeUp: function (e) {
            e.preventDefault(), this.currentSizeIndex < this.totalNumberOfFontSizes - 1 && this.currentSizeIndex++, this.addFontSizeClass(this.currentSizeIndex), this.onScroll()
        },
        fontSizeDown: function (e) {
            e.preventDefault(), this.currentSizeIndex > 0 && this.currentSizeIndex--, this.addFontSizeClass(this.currentSizeIndex), this.onScroll()
        },
        addFontSizeClass: function (t) {
            var n = this.availableSizes[this.currentSizeIndex],
                r = this.availableSizes[this.previousSizeIndex];
            e(this.elementsToChange).removeClass(r).addClass(n), this.previousSizeIndex = this.currentSizeIndex, this.setCookie("fontPref", this.currentSizeIndex), this.$upButton.removeClass("active"), this.$downButton.removeClass("active"), this.totalNumberOfFontSizes - 1 === this.currentSizeIndex ? this.$upButton.addClass("active") : this.currentSizeIndex === 0 && this.$downButton.addClass("active")
        },
        onScroll: function (e) {
            var t = this.$footer.outerHeight(),
                r = this.winHeight + n.getScrollPosition(),
                i = this.$containerBody.outerHeight() - t;
            if (r >= i) {
                this.isAtBottom = !0;
                var s = t - Math.max(0, this.$containerBody.outerHeight() - r);
                this.$el.css("bottom", s)
            } else this.isAtBottom && (this.isAtBottom = !1, this.$el.css("bottom", 0))
        },
        onResize: function (e) {
            this.winHeight = this.$win.height()
        },
        destroy: function () {
            r.prototype.destroy.apply(this, arguments), this.$win.off("scroll", this.onScroll), this.$win.off("resize", this.onResize)
        }
    });
    return i
}), function () {
    var e = 0,
        t = ["ms", "moz", "webkit", "o"];
    for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
        var r = (new Date).getTime(),
            i = Math.max(0, 16 - (r - e)),
            s = window.setTimeout(function () {
                t(r + i)
            }, i);
        return e = r + i, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
}(), define("raf", function () { }), define("Views/Components/videoplayer", ["jquery", "underscore", "AppModel", "Backbone", "Base", "raf"], function (e, t, n, r, i) {
    var s = i.extend({
        className: "",
        events: {},
        ORIGIN: "http://127.0.0.1:8888",
        PLAY: "play",
        PAUSE: "pause",
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5,
        $win: null,
        $body: null,
        $player: null,
        $controls: null,
        $playback: null,
        $timeline: null,
        $progress: null,
        $buffer: null,
        $share: null,
        $volume: null,
        $volumeBars: null,
        $poster: null,
        $social: null,
        $cover: null,
        id: null,
        player: null,
        updating: null,
        changed: null,
        updated: null,
        raf: null,
        ready: null,
        autoPlay: null,
        initialize: function (r) {
            i.prototype.initialize.apply(this, arguments), this.options = e.extend({
                name: "VideoPlayer",
                videoId: null,
                autoPlay: !1
            }, r || {}), t.bindAll(this, "onPlaybackClick", "onTimelineMouseDown", "onTimelineMouseUp", "onTimelineMouseMove", "onVolumeMouseDown", "onVolumeMouseUp", "onVolumeMouseMove", "onAPIReady", "onPauseAll"), this.updating = !1, this.$win = n.get("win"), this.$body = n.get("body"), this.$player = this.$el.find(".player"), this.$controls = this.$el.find(".controls"), this.$playback = this.$el.find(".playback"), this.$timeline = this.$el.find(".timeline"), this.$progress = this.$timeline.find(".progress"), this.$buffer = this.$timeline.find(".buffer"), this.$share = this.$el.find(".share"), this.$volume = this.$el.find(".volume"), this.$volumeBars = this.$volume.find(".bars"), this.$poster = this.$el.find(".poster"), this.$social = this.$el.find(".social"), this.$cover = this.$el.find(".cover"), this.id = "player-" + this.$el.attr("id"), this.$player.attr("id", this.id), this.autoPlay = this.options.autoPlay;
            var s = "ontouchstart" in document.documentElement;
            s && this.$el.addClass("show-controls"), n.get("youTubeAPILoaded") ? this.onAPIReady() : (this.$win.on("WacomYouTubeIframeAPIReady", this.onAPIReady), n.loadYouTubeAPI()), this.$win.on("WacomPauseAllPlayingVideos", this.onPauseAll)
        },
        addEventListeners: function () {
            this.$playback.on("click", this.onPlaybackClick), this.$cover.on("click", this.onPlaybackClick), this.$timeline.on("mousedown", this.onTimelineMouseDown), this.$volume.on("mousedown", this.onVolumeMouseDown), this.$share.on("click", this.onShareClick)
        },
        removeEventListeners: function () {
            this.$playback.off("click", this.onPlaybackClick), this.$cover.off("click", this.onPlaybackClick), this.$timeline.off("mousedown", this.onTimelineMouseDown), this.$volume.off("mousedown", this.onVolumeMouseDown), this.$share.off("click", this.onShareClick)
        },
        setVideoID: function (e, t) {
            t === null && (t = !1), this.player[t ? "loadVideoById" : "cueVideoById"](e)
        },
        clearVideo: function () {
            this.player.clearVideo()
        },
        play: function () {
            return this.player.playVideo(), this.isPlaying()
        },
        pause: function () {
            return this.player.pauseVideo(), this.isPlaying()
        },
        stop: function () {
            return this.player.stopVideo(), this.isPlaying()
        },
        isPlaying: function () {
            var e = this.getState() === this.PLAYING;
            return e
        },
        togglePlayback: function () {
            var e = this.isPlaying() ? this.pause() : this.play();
            return e
        },
        setPosition: function (e) {
            var t = this.getDuration() * e;
            return this.setTime(t), t
        },
        setTime: function (e) {
            return this.player.seekTo(e), e
        },
        getPosition: function () {
            var e = this.getTime() / this.getDuration();
            return e
        },
        getTime: function () {
            var e = this.player.getCurrentTime();
            return e
        },
        getDuration: function () {
            var e = this.player.getDuration();
            return e
        },
        setVolume: function (e) {
            var t = this.player.setVolume(e * 100);
            return t
        },
        getVolume: function () {
            var e = this.player.getVolume() / 100;
            return e
        },
        mute: function () {
            return this.player.mute(), this.player.isMuted()
        },
        unmute: function () {
            return this.player.unMute(), this.player.isMuted()
        },
        isMuted: function () {
            var e = this.player.isMuted();
            return e
        },
        toggleSound: function () {
            return this.isMuted() ? this.unmute() : this.mute(), this.player.isMuted()
        },
        getState: function () {
            var e = this.player.getPlayerState();
            return e
        },
        getLoadedRatio: function () {
            var e = Math.min(1, this.player.getVideoLoadedFraction());
            return e
        },
        isLoaded: function () {
            var e = this.getLoadedRatio() === 1;
            return e
        },
        enableUpdate: function () {
            this.updating || (this.updating = !0, this.update())
        },
        disableUpdate: function () {
            this.updating && (this.updating = !1, window.cancelAnimationFrame(this.raf))
        },
        update: function () {
            this.raf = window.requestAnimationFrame(t.bind(this.update, this)), !this.isPlaying() && this.isLoaded() && this.disableUpdate(), this.isLoaded() ? this.setBufferRatio(1) : this.setBufferRatio(this.getLoadedRatio()), this.setProgressRatio(this.getPosition())
        },
        showControls: function () {
            this.$controls.removeClass("hide")
        },
        hideControls: function () {
            this.$controls.addClass("hide")
        },
        toggleControls: function () {
            this.$controls.toggleClass("hide")
        },
        setPlaybackState: function (e) {
            this.$el.addClass("started"), this.$cover.removeClass("show-info");
            if (e === this.PLAY || e === this.PAUSE) this.$playback.removeClass("play pause"), this.$playback.addClass(e), this.$cover.removeClass("play pause"), this.$cover.addClass(e)
        },
        setProgressRatio: function (e) {
            this.$progress.css("width", "" + e * 100 + "%")
        },
        setBufferRatio: function (e) {
            this.$buffer.css("width", "" + e * 100 + "%")
        },
        setVolumeRatio: function (e) {
            this.$volumeBars.css("width", "" + e * 100 + "%")
        },
        showPoster: function () {
            this.$poster.removeClass("hide")
        },
        hidePoster: function () {
            this.$poster.addClass("hide")
        },
        togglePoster: function () {
            this.$poster.toggleClass("hide")
        },
        showSocial: function () {
            this.$social.removeClass("hide")
        },
        hideSocial: function () {
            this.$social.addClass("hide")
        },
        toggleSocial: function () {
            this.$social.toggleClass("hide")
        },
        onAPIReady: function () {
            this.$win.off("YouTubeIframeAPIReady", this.onAPIReady), this.player = new YT.Player(this.id, {
                playerVars: {
                    origin: this.ORIGIN,
                    modestbranding: 1,
                    enablejsapi: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0
                },
                events: {
                    onReady: t.bind(this.onPlayerReady, this),
                    onStateChange: t.bind(this.onPlayerStateChange, this)
                },
                videoId: this.options.videoId
            })
        },
        onPlayerReady: function (e) {
            this.$player = this.$el.find(".player"), this.$el.addClass("ready"), this.addEventListeners(), this.autoPlay && this.play()
        },
        onPlayerStateChange: function (e) {
            switch (e.data) {
                case this.BUFFERING:
                    break;
                case this.PLAYING:
                    this.setPlaybackState(this.PAUSE), this.enableUpdate();
                    break;
                case this.PAUSED:
                    this.setPlaybackState(this.PLAY), this.isLoaded() && this.disableUpdate();
                    break;
                case this.ENDED:
                    this.setPlaybackState(this.PLAY), this.$cover.addClass("show-info"), this.disableUpdate();
                    break;
                case this.CUED:
            }
        },
        onPlaybackClick: function (e) {
            this.togglePlayback()
        },
        onTimelineMouseDown: function (e) {
            var t = e.offsetX / this.$timeline.width();
            t = Math.min(1, Math.max(0, t)), this.setPosition(t), this.$timeline.off("mousedown", this.onTimelineMouseDown), this.$body.on("mouseup", this.onTimelineMouseUp), this.$body.on("mousemove", this.onTimelineMouseMove)
        },
        onTimelineMouseUp: function (e) {
            var t = this.$timeline.offset(),
                n = e.clientX - t.left,
                r = n / this.$timeline.width();
            r = Math.min(1, Math.max(0, r)), this.setPosition(r), this.$timeline.on("mousedown", this.onTimelineMouseDown), this.$body.off("mouseup", this.onTimelineMouseUp), this.$body.off("mousemove", this.onTimelineMouseMove)
        },
        onTimelineMouseMove: function (e) {
            var t = this.$timeline.offset(),
                n = e.clientX - t.left,
                r = n / this.$timeline.width();
            r = Math.min(1, Math.max(0, r)), this.setPosition(r)
        },
        onVolumeMouseDown: function (e) {
            var t = e.offsetX / this.$volume.width();
            t = Math.min(1, Math.max(0, t)), this.setVolume(t), this.setVolumeRatio(t), this.$volume.off("mousedown", this.onVolumeMouseDown), this.$body.on("mouseup", this.onVolumeMouseUp), this.$body.on("mousemove", this.onVolumeMouseMove)
        },
        onVolumeMouseUp: function (e) {
            var t = this.$volume.offset(),
                n = e.clientX - t.left,
                r = n / this.$volume.width();
            r = Math.min(1, Math.max(0, r)), this.setVolume(r), this.setVolumeRatio(r), this.$volume.on("mousedown", this.onVolumeMouseDown), this.$body.off("mouseup", this.onVolumeMouseUp), this.$body.off("mousemove", this.onVolumeMouseMove)
        },
        onVolumeMouseMove: function (e) {
            var t = this.$volume.offset(),
                n = e.clientX - t.left,
                r = n / this.$volume.width();
            r = Math.min(1, Math.max(0, r)), this.setVolume(r), this.setVolumeRatio(r)
        },
        onPauseAll: function (e) {
            this.player && this.isPlaying() && this.pause()
        },
        onShareClick: function (e) { },
        destroy: function () {
            this.disableUpdate(), this.removeEventListeners(), i.prototype.destroy.apply(this, arguments)
        }
    });
    return s
}), define("Views/Modules/productfinder", ["jquery", "underscore", "AppModel", "Base"], function ($,
	_,
	AppModel,
	Base) {

    /**
    * View class.
    */
    var ProductFinderView = Base.extend({

        TILE_WIDTH: 240,
        MENU_WIDTH: 240,

        $win: null,
        $html: null,
        $body: null,
        $progress: null,
        $statements: null,
        $productList: null,
        $products: null,
        $restartBtn: null,

        products: null,
        template: null,
        filter: [],
        step: 0,

        className: '',

        initialize: function (options) {
            var self = this;

            _.bindAll(self, 'onResize');

            Base.prototype.initialize.apply(self, arguments);

            // Cache objects
            self.$win = AppModel.get('win');
            self.$html = AppModel.get('html');
            self.$body = AppModel.get('body');
            self.$progress = self.$el.find('.progress li');
            self.$statements = self.$el.find('.statement');
            self.$productList = self.$el.find('.product-list');
            self.$restartBtn = self.$el.find('.restart-btn');

            // Setup template
            self.template = _.template('<li data-id="<%= id %>"><a href="<%= productUrl %>"><img src="<%= imageUrl %>" target="<%= target %>"><span class="product-name"><%= name %></span></a></li>');

            // Setup click handlers
            self.$statements.each(function () {
                $(this).find('.answer-button').on('click', function (event) {
                    event.preventDefault()

                    var $menu = $(this).parent().find('.popup-menu');

                    self.showMenu($menu);
                });
            });

            // Hide menu on roll out
            self.$el.find('.popup-menu').on('mouseleave', function () {
                self.hideMenus();
            });

            // Selecting an answer
            self.$el.find('.popup-menu li').on('click', function () {
                var $li = $(this);
                var $statement = $li.closest('.statement');

                self.step = parseInt($statement.attr('id').replace('step', ''), 10);
                self.filter[self.step - 1] = $li.data('id');

                $(self.$progress[self.step - 1]).removeClass('active').addClass('completed');

                $statement.find('.answer-button').text($li.text());
                $statement.addClass('completed');

                self.hideMenus();
                self.nextStep();
                self.filterProducts(self.filter);
            });

            // Restart button
            self.$restartBtn.click(function () {
                self.resetSteps();
                self.hideTooltips();
                self.$productList.removeAttr('style'); // Remove width if set
                self.$el.find('.product-list, .product-list li').trigger('blur');


                var pos = 0;
                var dur = 500;

                self.$body.stop().animate({
                    'scrollTop': pos
                }, dur);

                self.$html.stop().animate({
                    'scrollTop': pos
                }, dur);
            });

            // Resize handler
            self.$win.on('resize', self.onResize);

            // Load
            self.loadProducts();

            window.showTooltip = this.showTooltip;
        },

        // Loads product data from JSON end point
        loadProducts: function () {
            var self = this;
            self.products = new Array();

            $(".product-list li:not(.restart-btn)").each(function (index, p) {
                var $product = $(p);

                var productUrl = '';
                var imageUrl = '';
                var target = '';
                var id = ''; $product.attr('data-id');
                var name = ''; $product.find('.product-name').text().trim();
                var filters = '';

                if ($product) {

                    id = $product.attr('data-id');

                    if ($product.attr('data-filter'))
                        filters = $product.attr('data-filter').split('|');

                    if ($product.find('.product-name'))
                        name = $product.find('.product-name').text().trim();

                    var $anchor = $product.find('a');
                    if ($anchor) {
                        productUrl = $anchor.attr('href');

                        var $image = $anchor.find('img');

                        if ($image) {
                            imageUrl = $image.attr('src');
                            target = $image.attr('target');
                        }
                    }
                }

                var prod = {
                    id : id,
                    productUrl : productUrl,
                    imageUrl : imageUrl,
                    target : target,
                    name : name,
                    filters : filters
                };

                self.products.push(prod);
            });

            self.loadedSteps();

            //$.getJSON(productTagUrl, function (data) {
            //    self.products = data;
            //});
        },

        // Called when product data is loaded
        loadedSteps: function () {
            var self = this;

            this.createProducts();
            this.resetSteps();
            this.options.ajaxCallback();

            _.delay(function () {
                self.showTooltip(1);
            }, 200);
        },

        // Setup and position the tooltips
        showTooltip: function (number) {
            var self = this;

            // Tooltip 1
            if (number == 1) {
                var $obj1 = $('#step1').find('.answer-button');
                var $tooltip1 = $('#tooltip1');
                var postion1 = $obj1.offset();

                postion1.top += $obj1.outerHeight() + 20;
                postion1.left += (($obj1.outerWidth() * 0.5) - self.MENU_WIDTH);
                postion1.left -= ($tooltip1.outerWidth() * 0.5);

                $obj1.on('mouseenter', function () {
                    $tooltip1.removeClass('visible');
                });

                $tooltip1.css({
                    top: postion1.top,
                    left: postion1.left
                }).addClass('visible');
            }

                // Tooltip 2
            else if (number == 2) {
                var $obj2 = self.$productList;
                var $tooltip2 = $('#tooltip2');

                var postion2 = $obj2.offset();
                postion2.top -= ($tooltip2.outerHeight() * 0.5);
                postion2.left = ((($('.body').outerWidth() - self.MENU_WIDTH) * 0.5) - ($tooltip2.outerWidth() * 0.5));

                if ($('.product-list li:visible').length < 3) {
                    postion2.left += 4; // FIXME: Don't know why this hack is necessary...
                }

                $tooltip2.css({
                    top: postion2.top,
                    left: postion2.left
                }).addClass('visible');
            }

        },

        // Hides all tooltips
        hideTooltips: function () {
            $('.tooltip.visible').removeClass('visible');
        },

        // Show menu
        showMenu: function ($menu) {
            var self = this;

            self.hideTooltips();
            self.hideMenus();

            // Add negative margin left if menu is offscreen
            var marginLeft = parseInt($menu.css('margin-left'), 10);
            var offsetRight = (self.$win.width() - ($menu.offset().left + $menu.width())) + marginLeft;

            marginLeft = (offsetRight < 10) ? offsetRight - 10 : 0;

            $menu.css({
                marginLeft: marginLeft
            }).addClass('visible');
        },

        // Hides all popup menus
        hideMenus: function () {
            $('.popup-menu').removeClass('visible');
        },

        // Reset steps
        resetSteps: function () {
            var self = this;

            self.step = 0;

            // Restart button
            this.$restartBtn.hide();

            // Progress indicator
            $(this.$progress).removeClass('active completed');
            $(this.$progress[0]).addClass('active');

            // Statements
            self.$statements.each(function (index) {
                var $statement = $(this);
                var $answerButton = $statement.find('.answer-button');

                $statement.removeClass('completed');
                $answerButton.text($answerButton.data('default'));

                if (index > 0) {
                    $statement.addClass('not-visible');
                }
            });

            // Filter
            self.filter = [];
            self.filterProducts(self.filter);
        },

        // Next step
        nextStep: function () {
            var self = this;

            self.step++;

            if (self.step <= this.$statements.length) {
                $('#step' + self.step).show().removeClass('not-visible');

                var $progress = $(this.$progress[self.step - 1]);

                if (!$progress.hasClass('completed')) {
                    $(this.$progress[self.step - 1]).addClass('active');
                }
            }
        },

        // Create products, called on init
        createProducts: function () {
            var self = this;

            //_.each(self.products, function (product) {
            //    self.$productList.prepend(self.template(product));
            //});

            self.$products = self.$productList.find('li:not(.restart-btn)');
        },

        // Filters visible products
        filterProducts: function (filter) {
            var self = this;

            // If product filter is empty return all products otherwise filter to only get matching using underscore.js black magic!
            var filteredProducts = _.isEmpty(self.filter) ? self.products : _.filter(self.products, function (product) {
                return _.every(self.filter, _.partial(_.contains, product.filters));
            });

            // Get id:s of the filtered products
            var ids = _.pluck(filteredProducts, 'id');

            // Hide or show products
            _.each(self.$products, function (element) {
                var $product = $(element);

                if (_.contains(ids, $product.data('id'))) {
                    $product.show();
                } else {
                    $product.hide();
                }
            });

            // Remove any fixed set width
            self.$productList.removeAttr('style');

            // Resize the product list if the products does not fill the current width
            if (((ids.length + 1) * self.TILE_WIDTH) < self.$productList.width()) {
                self.$productList.css({
                    width: ((ids.length + 1) * self.TILE_WIDTH) + 'px'
                });
            }

            // Toggle stuff depending on step and number of results
            if (ids.length === 0) {
                $('.no-results').addClass('visible');

                this.$restartBtn.hide();

                self.$productList.hide();
            }
            else {
                if (self.step > 3) {
                    self.showTooltip(2);
                }

                if (self.step === 0) {
                    this.$restartBtn.hide();
                } else {
                    this.$restartBtn.show();
                }

                $('.no-results').removeClass('visible');

                self.$productList.show();
            }
        },

        onResize: function (event) {
            this.hideTooltips();
        },

        destroy: function () {
            Base.prototype.destroy.apply(this, arguments);

            this.$win.off('resize', this.onResize);
        }

    });

    return ProductFinderView;
}), define("Views/view-manager", ["jquery", "underscore", "AppModel", "Base", "Modules/notification-dispatcher", "Views/Components/jump-nav", "Views/Components/purchase-link", "Views/Components/digitalriver", "Views/Components/regionselector", "Views/Components/text-box-component", "Views/Components/accordion", "Views/Modules/homepage", "Views/Modules/gallery", "Views/Modules/spectablet", "Views/Modules/productspecgallery", "Views/Modules/figureimagepaginationcontroller", "Views/Modules/filterlistnavigationcontroller", "Views/Modules/filterdocumentnavigationcontroller", "Views/Modules/careersdropdown", "Views/Modules/mapoffices", "Views/Modules/herovideo", "Views/Modules/simplecontent", "Views/Modules/compatibilitypopup", "Views/Modules/fontresizer"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x) {
    var T = r.extend({
        views: null,
        totalScripts: null,
        loadedScripts: null,
        className: "",
        initialize: function (e) {
            r.prototype.initialize.apply(this, arguments)
        },
        initViews: function () {
            this.views = [], this.loadView(".static-product-filter", "Views/Modules/filterdocumentnavigationcontroller", {
                filterGroup: ".static-product-filter",
                filterItem: ".static-product"
            }), this.loadView(".accessories", "Views/Modules/filterdocumentnavigationcontroller", {
                filterGroup: ".accessories",
                filterItem: ".accessories-item"
            }), this.loadView(".font-resize-nav", "Views/Modules/fontresizer", {
                el: ".font-resize-nav",
                selector: ".resize-me"
            }), this.loadView(".homepage-wrapper", "Views/Modules/homepage", {
                el: ".homepage-wrapper"
            }), this.loadView(".gallery-module", "Views/Modules/gallery", {
                el: ".gallery-module"
            }), this.loadView(".accordion-component", "Views/Components/accordion", {
                el: ".accordion-component"
            }), this.loadView("#pswtb", "Views/Components/digitalriver", {
                el: "#pswtb"
            });
            var n = e(".textbox, .gallery-item-video");
            n.length && (++this.totalScripts, require(["Views/Components/text-box-component"], t.bind(function (e) {
                var t = n.length;
                while (--t > -1) n[t].id = "textbox" + t, this.views.push(new e({
                    el: "#textbox" + t
                }));
                this.onScriptLoaded()
            }, this)));
            var r = e(".videoplayer-component"),
                i;
            r.length && (++this.totalScripts, require(["Views/Components/videoplayer"], t.bind(function (e) {
                var t = r.length;
                while (--t > -1) i = r[t].id, r[t].id = i + t, this.views.push(new e({
                    el: "#" + i + t,
                    videoId: i
                }));
                this.onScriptLoaded()
            }, this)));
            if (e(".product-finder").length && !pageEditor) {
                ++this.totalScripts;
                var s = this;
                require(["Views/Modules/productfinder"], t.bind(function (e) {
                    this.views.push(new e({
                        el: ".product-finder",
                        ajaxCallback: function () {
                            s.onScriptLoaded()
                        }
                    }))
                }, this))
            }
            this.loadView(".spec-tablet", "Views/Modules/spectablet", {
                el: ".spec-tablet",
                list: ".spec-list",
                openHeight: 250
            }), pageEditor || this.loadView(".product-spec-gallery ", "Views/Modules/productspecgallery", {
                el: ".product-sequence",
                items: ".product-sequence-feature"
            }), pageEditor || this.loadView(".product-spec-feature-carousel ", "Views/Modules/productfeaturegallery", {
                el: ".product-spec-feature-gallery",
                items: ".feature"
            }), pageEditor || this.loadView(".js-pagination", "Views/Modules/figureimagepaginationcontroller", {
                el: ".body",
                pageItemClass: ".js-pagination"
            }), this.loadView(".news-container", "Views/Modules/filterlistnavigationcontroller", {
                el: ".body",
                filterGroup: ".news-container",
                filterItem: ".news-item"
            }), this.loadView(".image-layer", "Views/Modules/filterlistnavigationcontroller", {
                el: ".body",
                filterGroup: ".image-layer",
                filterItem: ".filter-image",
                showSingular: !0,
                navClass: "nav-alt-class"
            }), this.loadView(".faq-body", "Views/Modules/filterlistnavigationcontroller", {
                el: ".body",
                filterGroup: ".faq-body",
                filterItem: ".accordion-component",
                showSingular: !0,
                navClass: "nav-alt-class"
            }), this.loadView(".document-filter-module", "Views/Modules/filterdocumentnavigationcontroller", {
                el: ".body",
                filterGroup: ".document-filter-module",
                filterItem: ".documents li"
            }), this.loadView(".careers-listing", "Views/Modules/careersdropdown", {
                el: ".careers-listing"
            }), this.loadView(".spec-callout-compatibility", "Views/Modules/compatibilitypopup", {
                el: ".spec-callout-compatibility"
            }), this.loadView(".map-offices-module", "Views/Modules/mapoffices", {
                el: ".map-offices-module"
            }), this.loadView(".text-column-features-module", "Views/Modules/textcolumnfeatures", {
                el: ".text-column-features-module"
            }), this.loadView(".region-selector", "Views/Components/regionselector", {
                el: ".region-selector"
            }), this.loadView(".open-modal", "Views/Modules/herovideo", {
                el: ".hero-video"
            }), this.loadView(".open-modal", "Views/Components/text-box-component", {
                el: ".textbox"
            }), this.loadView(".hero-product", "Views/Components/hero-product", {
                el: ".hero-product"
            }), this.loadView(".is-overlay", "Views/Modules/simplecontent", {
                el: ".is-overlay"
            }), this.loadView(".jump-nav", "Views/Components/jump-nav", {
                el: ".jump-nav"
            }), pageEditor || this.loadView(".purchase-link", "Views/Components/purchase-link", {
                el: ".purchase-link"
            }), this.loadView(".gigya-comments", "Views/Components/gigya-comments-config", {
                el: ".gigya-comment"
            }), e("body").attr("data-preview") === "True" && e("a").click(function () {
                return !1
            }), this.checkAllDone()
        },
        destroyViews: function () {
            t.each(this.views, function (e) {
                typeof e.destroy != "undefined" && e.destroy()
            })
        },
        loadView: function (n, r, i) {
            if (n === !0 || e(n).length)++this.totalScripts, require([r], t.bind(function (e) {
                this.views.push(new e(i)), this.onScriptLoaded()
            }, this))
        },
        onScriptLoaded: function () {
            ++this.loadedScripts, this.checkAllDone()
        },
        checkAllDone: function () {
            this.loadedScripts === this.totalScripts && (n.get("body").removeClass("site-loading"), this.updateLinks()), this.checkShortViewport();
            var t = this;
            e(window).resize(function () {
                t.checkShortViewport()
            })
        },
        checkShortViewport: function () {
            var e = document.documentElement.clientHeight,
                t = 700,
                r = 950;
            e < t ? n.get("body").addClass("short-viewport") : e < r ? n.get("body").addClass("medium-viewport") : n.get("body").removeClass("short-viewport medium-viewport")
        }
    });
    return T
}), define("Models/template-types", [], function () {
    return {
        NEWS: "News",
        FEEL_EVERYDAY: "FeelOverlayEveryday",
        FEEL_BUSINESS: "FeelOverlayBusiness",
        STORY: "Story",
        DISCLOSURE: "DisclosurePolicy",
        ENVIRONMENT: "EnvironmentalOverlay"
    }
}), define("Modules/template-factory", ["require", "Models/template-types"], function (e) {
    function n(e) {
        switch (e) {
            case t.NEWS.toLowerCase():
                break;
            case t.NEWS.toLowerCase():
                break;
            default:
        }
    }
    var t = e("Models/template-types");
    return {
        templateAction: function (e) {
            return n(e.toLowerCase())
        }
    }
}), define("Views/site-container", ["jquery", "underscore", "AppModel", "Base", "Views/view-manager", "Modules/notification-dispatcher", "Modules/history-service", "Modules/getContentViaAjax", "Modules/template-factory"], function (e, t, n, r, i, s, o, u, a) {
    var f = r.extend({
        FLIP_DURATION: 400,
        LOADING_DIV: '<div class="loading-content"><div class="loading-icon"></div></div>',
        LOADING_DIV_SHOW: '<div class="loading-content"><div class="loading-icon show"></div></div>',
        $body: null,
        $win: null,
        $container: null,
        $containerBody: null,
        $nav: null,
        $flipLinks: null,
        viewManager: null,
        storedContent: null,
        folded: null,
        navigationLeft: null,
        flipUrl: null,
        lastUrl: null,
        xhr: null,
        isFlipping: null,
        isLoading: null,
        historyService: null,
        className: "",
        initialize: function (u) {
            t.bindAll(this, "flipSwitch", "onFlipComplete", "onFlip", "onContentLoaded", "onHistoryUpdate", "onFlipClicked"), r.prototype.initialize.apply(this, arguments), this.$body = n.get("body"), this.$win = n.get("win"), this.$container = n.get("container"), this.$containerBody = n.get("containerBody"), this.$nav = n.get("nav"), this.$flipLinks = e(".site-flip"), this.$aboutLinks = e(".about a"), this.$passionLink = e("#js-passion-label"), this.$investorsLabel = e("#js-investors-label"), this.$ecoLabel = e("#js-eco-label"), this.$newsLabel = e("#js-news-label"), this.$careersLabel = e("#js-careers-label"), this.viewManager = new i, this.storedContent = {}, this.folded = {}, this.isFlipping = !1, global.historyService = new o(window), s.addListener(n.FLIP, this.onFlip), s.addListener(s.URL_STATECHANGE, this.onHistoryUpdate), this.resetFlipLinks(), this.viewManager.initViews(), this.redirectDeepLinkForIE()
        },
        redirectDeepLinkForIE: function () {
            var t = e("html");
            if (window.location.href.indexOf("#/") > 0 && t.hasClass("lte9")) {
                var n = (window.location.href).replace(window.location.pathname + '#', '');
                window.location.href = n;
            } else {
                if (window.location.href.indexOf("#") > 0 && t.hasClass("lte9")) {
                    var n = window.location.href,
                        r = n.substr(n.indexOf("#") + 1, n.length),
                        i = r.replace("/", "-");
                    if (e("[id=" + i + "]").length === 0) {
                        var s = History.getState(),
                            o = "",
                            u = "",
                            a = window.location.pathname;
                        u = a.lastIndexOf("/"), o = a.substr(0, u) + "/" + s.hash, window.location.href = window.location.protocol + "//" + window.location.host + "/" + o
                    } else setTimeout(function () {
                        var t = e("[id=" + i + "]").position().top;
                        e("html").animate({
                            scrollTop: t
                        }, 0)
                    }, 500)
                }
            }
        },
        addContent: function () {
            var t = global.historyService.currentURL();
            if (this.storedContent[t] && this.storedContent[t].content !== this.LOADING_DIV_SHOW) this.navFoldUpdate(this.storedContent[t].folded), this.$containerBody.html(this.storedContent[t].content), e("body").addClass(this.storedContent[t].template), this.viewManager.initViews();
            else {
                this.navFoldUpdate(!1), this.$containerBody.html(this.LOADING_DIV), this.isLoading = !0, this.xhr = e.ajax(this.flipUrl), this.xhr.done(this.onContentLoaded);
                var r = n.get("section") === n.ABOUT ? "about" : "discover";
                e("#navigation-main ." + r + " .flip").attr("href", this.lastUrl)
            }
            this.resetFlipLinks()
        },
        removeContent: function () {
            var t = e("#navigation-main"),
                r = t.hasClass(n.ABOUT) ? n.ABOUT : n.DISCOVER;
            this.storedContent[this.lastUrl] === undefined ? this.storedContent[this.lastUrl] = {
                content: this.$containerBody.html(),
                section: r,
                folded: this.$container.hasClass("folded")
            } : e("body").removeClass(this.storedContent[this.lastUrl].template);
            var i = t.find(".home");
            r === n.DISCOVER && i.hasClass("site-flip") ? i.removeClass("site-flip") : r === n.ABOUT && !i.hasClass("site-flip") && i.addClass("site-flip"), this.resetFlipLinks(), this.viewManager.destroyViews()
        },
        navFoldUpdate: function (e) {
            var t = this.$container.hasClass("folded");
            e && !t ? this.$container.addClass("folded") : !e && t && this.$container.removeClass("folded"), s.sendNotification(n.NAV_FOLD_UPDATE, {
                isFolded: e
            })
        },
        flipSwitch: function () {
            this.$nav.toggleClass(n.DISCOVER).toggleClass(n.ABOUT), this.removeContent(), n.setSection(), this.addContent(), this.$containerBody.css("top", ""), this.$container.addClass("switch").addClass("no-transition"), t.delay(t.bind(function () {
                this.$container.addClass("flip").removeClass("no-transition"), t.delay(this.onFlipComplete, this.FLIP_DURATION)
            }, this), 10)
        },
        setFlipHeight: function (e) {
            this.$body.css("height", e), this.$container.css("height", e), this.$nav.css("height", e)
        },
        onFlip: function (r) {
            if (this.isFlipping) return;
            var i = r.url.match(/our-passion/),
                s = r.url.match(/investors/),
                o = r.url.match(/eco-initiatives/),
                news = r.url.match(/news-and-events/),
                careers = r.url.match(/careers/),
                u = this.$nav.hasClass(n.ABOUT);
            this.isFooterVisible = e(window).height() + e(window).scrollTop() < e(document).height() - e(".footer").height();
            if (s && u || o && u) {
                location.href = r.url;
                return
            }
            i && (this.$aboutLinks.removeClass("selected"), this.$passionLink.addClass("selected")), s && (this.$aboutLinks.removeClass("selected"), this.$investorsLabel.addClass("selected")), o && (this.$aboutLinks.removeClass("selected"), this.$ecoLabel.addClass("selected")), news && (this.$aboutLinks.removeClass("selected"), this.$newsLabel.addClass("selected")), careers && (this.$aboutLinks.removeClass("selected"), this.$careersLabel.addClass("selected")), this.isFlipping = !0, this.isLoading && (this.xhr.abort(), this.isLoading = !1), this.lastUrl = this.flipUrl ? this.flipUrl : global.historyService.currentURL(), this.flipUrl = r.url, global.historyService.setUrl(this.flipUrl), this.setFlipHeight(this.$win.height()), this.navigationLeft = this.$nav.css("left"), this.$nav.css("left", 0);
            var a = n.getScrollPosition();
            this.$containerBody.css("top", -a), this.$body.addClass("flip"), t.delay(this.flipSwitch, this.FLIP_DURATION), this.isFooterVisible ? e(".footer").css({
                position: "absolute",
                bottom: "-150px"
            }) : e(".footer").css({
                position: "absolute",
                bottom: "0px"
            })
        },
        onFlipComplete: function () {
            e(".footer").css({
                position: "relative",
                bottom: "0"
            }), this.setFlipHeight(""), this.$nav.css("left", this.navigationLeft), this.$body.removeClass("flip"), this.$container.removeClass("flip").removeClass("switch"), this.isFlipping = !1, s.sendNotification(n.FLIP_COMPLETE, {}), this.isLoading && e(".loading-content .loading-icon").addClass("show")
        },
        onContentLoaded: function (t) {
            this.isLoading = !1;
            var r = global.historyService.currentURL(),
                i = e(t),
                o = i.find("#navigation-main"),
                u = i.find(".body").html();
            this.storedContent[r] = {
                content: u,
                section: o.hasClass(n.ABOUT) ? n.ABOUT : n.DISCOVER,
                folded: o.hasClass("minimised"),
                template: i.find(".body-cover").attr("data-template")
            }, this.$containerBody.html(u + this.LOADING_DIV_SHOW), e("body").addClass(this.storedContent[r].template), this.viewManager.initViews(), e(".loading-content").addClass("fade-out"), this.resetFlipLinks(), s.sendNotification(n.FLIP_CONTENT_LOAD_COMPLETE, {})
        },
        resetFlipLinks: function () {
            this.$flipLinks.off("click", this.onFlipClicked), this.$flipLinks = e(".site-flip"), this.$flipLinks.on("click", this.onFlipClicked)
        },
        onHistoryUpdate: function (t) {
            var r = this;
            if (t.url === this.lastUrl) {
                s.sendNotification(n.FLIP, {
                    url: this.lastUrl
                });
            } else {
                var i = new u({
                    contentType: "text/html",
                    dataType: "html",
                    contentUrl: t.url,
                    onSuccess: function (n) {
                        var n = e.trim(n);
                        e(n).find(".is-overlay").length && r.open(t.url)
                    }
                });
            }
        },
        onFlipClicked: function (e) {
            n.isTransformSupported() && (e.preventDefault(), s.sendNotification(n.FLIP, {
                url: e.currentTarget.href
            }))
        },
        destroy: function () {
            undelegateEvents(), s.removeListener(n.FLIP, this.onFlip), this.viewManager.destroyViews()
        }
    });
    return f
}), function (e) {
    function t(t) {
        var n = t || window.event,
            r = [].slice.call(arguments, 1),
            i = 0,
            s = !0,
            o = 0,
            u = 0;
        return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r)
    }
    var n = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks) for (var r = n.length; r;) e.event.fixHooks[n[--r]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function () {
            if (this.removeEventListener) for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery), define("mousewheel", function () { }), define("Views/Components/scroll/base-scroll", ["jquery", "underscore", "AppModel", "Backbone", "mousewheel"], function (e, t, n, r, i) {
    var s = r.View.extend({
        events: {
            mousewheel: "onMouseWheel"
        },
        removeActiveDelay: 300,
        currentPosition: 0,
        initialize: function () {
            t.bindAll(this, "onBarClicked", "onMouseDown", "onMouseOver", "onMouseOut", "onMouseMove", "onMouseUp", "removeActiveClass", "onMouseEnter", "onMouseLeave"), this.content = this.$(this.options.contentClass), this.bar = e(this.options.template), this.dragger = this.bar.find(".scrolldragger"), this.body = n.get("body"), this.isMouseDown = !1, this.isMouseOver = !1, this.draggerOffset = 0, this.refresh()
        },
        bindEvents: function () {
            this.delegateEvents(), this.bar.on("mousedown." + this.cid, this.onBarClicked), this.dragger.on("mousedown." + this.cid, this.onMouseDown), this.dragger.on("mouseover." + this.cid, this.onMouseOver), this.dragger.on("mouseout." + this.cid, this.onMouseOut), this.$el.on("mouseenter." + this.cid, t.bind(function (e) {
                clearTimeout(this.leaveDelay), this.enterDelay = setTimeout(this.onMouseEnter, 300)
            }, this)), this.$el.on("mouseleave." + this.cid, t.bind(function (e) {
                clearTimeout(this.enterDelay), this.leaveDelay = setTimeout(this.onMouseLeave, 300)
            }, this))
        },
        unbindEvents: function () {
            this.undelegateEvents(), this.bar.off("." + this.cid), this.dragger.off("." + this.cid), this.body.off("." + this.cid), this.$el.off("." + this.cid), this.enterDelay && clearTimeout(this.enterDelay), this.leaveDelay && clearTimeout(this.leaveDelay)
        },
        onMouseDown: function (e) {
            e.stopPropagation(), e.preventDefault(), this.isMouseDown = !0, this.body.on("mousemove." + this.cid, this.onMouseMove), this.body.on("mouseup." + this.cid, this.onMouseUp)
        },
        onMouseUp: function (e) {
            this.isMouseDown = !1, this.body.off("." + this.cid), this.isMouseOver || (this.dragger.removeClass("hover"), this.bar.removeClass("active"))
        },
        onMouseOver: function (e) {
            this.isMouseOver = !0, this.dragger.addClass("hover"), this.bar.addClass("active")
        },
        onMouseOut: function (e) {
            this.isMouseOver = !1, this.isMouseDown || (this.dragger.removeClass("hover"), this.startTimeout(this.removeActiveDelay))
        },
        onMouseEnter: function (e) {
            this.isMouseInTheHouse = !0
        },
        onMouseLeave: function (e) {
            this.isMouseInTheHouse = !1
        },
        onMouseWheel: function (e, t) { },
        addActiveClass: function (e) {
            this.bar.addClass("active"), this.startTimeout(e || this.removeActiveDelay)
        },
        removeActiveClass: function () {
            if (this.isMouseDown || this.isMouseOver) return;
            this.bar.removeClass("active"), clearTimeout(this.removeActiveClassDelay)
        },
        startTimeout: function (e) {
            clearTimeout(this.removeActiveClassDelay), this.removeActiveClassDelay = setTimeout(this.removeActiveClass, e)
        },
        getCurrentPosition: function () {
            return isNaN(this.currentPosition) ? 0 : this.currentPosition
        },
        destroy: function () {
            this.unbindEvents(), this.bar.remove()
        }
    });
    return s
}), define("Views/Components/scroll/vertical-scroll", ["jquery", "underscore", "AppModel", "Views/Components/scroll/base-scroll"], function (e, t, n, r) {
    var i = r.extend({
        initialize: function (i) {
            this.options = e.extend({
                color: "light",
                fadeout: !1,
                contentClass: ".scrollable-content",
                padding: 5,
                lockPageScroll: !0,
                delayScroll: !1
            }, i || {});
            var s = this.options.fadeout ? "fadeout" : "",
                o = t.template('<div class="vertical-scroll ui-<%= color %> <%= fade %>"><div class="scrolldragger"></div></div>');
            this.options.template = o({
                color: this.options.color,
                fade: s
            }), this.win = n.get("win"), this.$(".vertical-scroll").remove(), r.prototype.initialize.apply(this, arguments)
        },
        refresh: function () {
            if (this.content.length === 0) return;
            var e = this.$el.height(),
                t = e - this.options.padding * 2;
            this.bar.css({
                height: t,
                top: this.options.padding
            });
            var n = this.content.outerHeight(),
                r = e / n,
                i = r * t;
            this.dragger.css({
                height: i
            }), this.overflow = n - e, this.draggerSpace = t - i, r < 1 ? (this.$el.append(this.bar), this.bindEvents(), this.active = !0) : (this.bar.remove(), this.unbindEvents(), this.active = !1, this.currentPosition = 0), this.position(this.currentPosition, !0)
        },
        position: function (e, t) {
            var n = -(this.overflow * e);
            this.content.css({
                marginTop: n + "px"
            }), this.currentPosition = e;
            if (t) {
                var r = this.draggerSpace * e;
                this.dragger.css({
                    marginTop: r + "px"
                })
            }
            this.$el.trigger("scrollBarUpdate")
        },
        onBarClicked: function (e) {
            var t = e.pageY - this.bar.offset().top,
                n = t / this.bar.height();
            this.position(n);
            var r = this.draggerSpace * n;
            this.dragger.css({
                marginTop: r + "px"
            }), this.addActiveClass()
        },
        onMouseMove: function (e) {
            if (!this.isMouseDown) return;
            var t = e.pageY - this.bar.offset().top,
                n = t - this.draggerOffset;
            n = Math.max(0, Math.min(n, this.draggerSpace)), this.dragger.css({
                marginTop: n + "px"
            });
            var r = n / this.draggerSpace;
            this.position(r)
        },
        onMouseDown: function (e) {
            r.prototype.onMouseDown.apply(this, arguments);
            var t = e.pageY - this.bar.offset().top,
                n = parseInt(this.dragger.css("marginTop"), 10);
            this.draggerOffset = t - n, this.bar.addClass("active")
        },
        onMouseWheel: function (e, t) {
            if (this.isMouseDown || this.options.delayScroll && !this.isMouseInTheHouse) return;
            var n = e.originalEvent.wheelDeltaY * .1;
            isNaN(n) && (n = e.originalEvent.detail * -1);
            if (isNaN(n) || n === 0) n = e.originalEvent.wheelDelta * .1;
            n = n < 0 ? Math.floor(n) : Math.ceil(n);
            var r = parseInt(this.dragger.css("marginTop"), 10);
            r -= n, r = Math.max(0, Math.min(r, this.draggerSpace)), this.dragger.css({
                marginTop: r + "px"
            });
            var i = r / this.draggerSpace;
            this.position(i), this.options.lockPageScroll && (i <= 0 && t > 0 || i >= 1 && t < 0) && e.preventDefault(), i > 0 && i < 1 && n !== 0 && (e.preventDefault(), this.addActiveClass())
        }
    });
    return i
}), define("Views/Components/scroll/sidebar-scroll", ["jquery", "underscore", "TweenMax", "Views/Components/scroll/vertical-scroll"], function (e, t, n, r) {
    var i = r.extend({
        removeActiveDelay: 1e3,
        onScrollListen: null,
        targetPercent: null,
        $scrollButtons: null,
        initialize: function (e) {
            t.bindAll(this, "onScrollUpdated", "addActiveScroll"), e.scrollButtons.length > 0 && (this.$scrollButtons = e.scrollButtons), r.prototype.initialize.apply(this, arguments)
        },
        bindEvents: function () {
            this.$el.on("scrollBarUpdate." + this.cid, this.onScrollUpdated), this.$el.on("mouseenter." + this.cid, this.addActiveScroll), r.prototype.bindEvents.apply(this, arguments)
        },
        destroy: function (e) {
            this.$el.off("." + this.cid), r.prototype.destroy.apply(this, arguments)
        },
        onMouseOver: function (e) {
            this.isMouseOver = !0
        },
        onMouseOut: function (e) {
            this.isMouseOver = !1
        },
        addTopShadow: function () {
            this.topShadow || (this.topShadow = e('<div class="shadow top-shadow"></div>')), this.$(".top-shadow").length === 0 && this.$el.append(this.topShadow)
        },
        removeTopShadow: function () {
            this.topShadow && this.topShadow.remove()
        },
        addBottomShadow: function () {
            this.bottomShadow || (this.bottomShadow = e('<div class="shadow bottom-shadow"></div>')), this.$(".bottom-shadow").length === 0 && this.$el.append(this.bottomShadow)
        },
        removeBottomShadow: function () {
            this.bottomShadow && this.bottomShadow.remove()
        },
        removeActiveClass: function () {
            r.prototype.removeActiveClass.apply(this, arguments), setTimeout(t.bind(function () {
                this.bar.hasClass("active") || this.bar.addClass("hide")
            }, this), 1e3)
        },
        addActiveClass: function (e) {
            this.bar.removeClass("hide"), this.bar.addClass("active"), this.startTimeout(e || this.removeActiveDelay)
        },
        addHideClass: function () {
            this.bar.addClass("hide")
        },
        addActiveScroll: function () {
            this.addActiveClass(this.removeActiveDelay)
        },
        onScrollUpdated: function () {
            this.targetPercent = null, this.overflow <= 0 && (this.removeTopShadow(), this.removeBottomShadow(), e(this.$scrollButtons).find(".up, .down").addClass("deactivated")), this.getCurrentPosition() === 0 ? (this.removeTopShadow(), e(this.$scrollButtons).find(".up").addClass("deactivated")) : (this.addTopShadow(), e(this.$scrollButtons).find(".up").removeClass("deactivated")), this.getCurrentPosition() === 1 ? (this.removeBottomShadow(), e(this.$scrollButtons).find(".down").addClass("deactivated")) : this.active && (this.addBottomShadow(), e(this.$scrollButtons).find(".down").removeClass("deactivated")), this.onScrollListen !== null && this.onScrollListen()
        },
        scrollTo: function (e) {
            var r = Math.max(0, Math.min(1, e / this.overflow));
            if (r === this.targetPercent) return;
            this.targetPercent = r, n.to(this, .2, {
                currentPosition: r,
                onUpdate: t.bind(function () {
                    this.position(this.currentPosition, !0)
                }, this)
            })
        }
    });
    return i
}), define("Views/Components/main-menu", ["jquery", "underscore", "AppModel", "Base", "Modules/notification-dispatcher", "Views/Components/scroll/sidebar-scroll", "Modules/feature-tests"], function (e, t, n, r, i, s, o) {
    var u = r.extend({
        MIN_HEIGHT: 550,
        MAX_WIDTH: 1600,
        WIDTH: 240,
        $win: null,
        $body: null,
        $container: null,
        $primary: null,
        $navlist: null,
        $subSection: null,
        $bodyCover: null,
        $scrollableContent: null,
        $productFinder: null,
        width: null,
        height: null,
        heightDiff: null,
        timeout: null,
        mustFold: null,
        scrollers: null,
        hasScrollers: null,
        currentSub: null,
        left: null,
        className: "",
        events: {
            "click .scroll-buttons .up, .scroll-buttons .down": "onScrollClicked",
            "touchstart .scroll-buttons .up, .scroll-buttons .down": "onScrollClicked",
            "touchstart .primary .hassub": "onSectionTouched"
        },
        initialize: function (u) {
            t.bindAll(this, "removeCollapsedClasses", "onScrollClicked", "onMouseOut", "onMouseOver", "onResize", "onPageScroll", "onFlipComplete", "onFoldUpdated", "onSectionTouched", "onBodyCoverTouched", "onProductScroll"), r.prototype.initialize.apply(this, arguments), this.$win = n.get("win"), this.$body = n.get("body"), this.$container = n.get("container"), this.$primary = e(".primary .high, .primary .low, .home, .flip"), this.$navlist = e(".primary > li"), this.$subSection = e(".sub"), this.$bodyCover = e(".body-cover"), this.mustFold = this.$el.hasClass("folded"), this.width = this.WIDTH, this.scrollers = {}, this.$el.on("mouseout", this.onMouseOut), this.$primary.on("mouseover", this.onMouseOver), this.$win.on("resize", this.onResize);
            var a = o.init();
            this.attachScroll = a.navFullySupported;
            var f = this.$subSection.length,
                l, c, h, p, d = this, totalOuterHeight = 0;
            t.delay(function () {
                while (--f > -1) c = e(d.$subSection[f]), l = c.find(".scroll-buttons"), h = c.find(".products"), h.attr("id", "products" + f.toString()), h.css("top", c.find(".header").outerHeight()), c.find(".header").each(function () { totalOuterHeight += e(this).outerHeight() }), h.css("top", totalOuterHeight - 30), totalOuterHeight = 0, d.attachScroll ? (d.scrollers["vscrollbar" + f] = new s({
                    el: "#products" + f.toString(),
                    scrollButtons: l,
                    lockPageScroll: !1
                }), d.hasScrollers = !0) : (p = d.$el.find("#products" + f.toString()), d.$scrollableContent = p.find(".scrollable-content"), d.$scrollableContent.css({
                    height: "100%",
                    "overflow-y": "scroll"
                }), d.$scrollableContent.on("scroll", d.onProductScroll), p.on("touchstart", d.stopTouchEvent));
                d.onResize()
            }, 1e3), i.addListener(n.FLIP_COMPLETE, this.onFlipComplete), i.addListener(n.NAV_FOLD_UPDATE, this.onFoldUpdated)
        },
        stopTouchEvent: function (e) {
            e.stopPropagation()
        },
        openSubNav: function () {
            clearTimeout(this.timeout), this.$container.addClass("show-sub"), this.$container.removeClass("no-sub")
        },
        closeSubNav: function (e) {
            e === null && (e = 0), clearTimeout(this.timeout), this.timeout = setTimeout(this.removeCollapsedClasses, e)
        },
        removeCollapsedClasses: function () {
            this.$container.hasClass("show-sub") && (this.$container.removeClass("show-sub"), this.$container.addClass("no-sub")), this.$navlist.removeClass("hover"), this.$el.removeClass("hover")
        },
        onScrollClicked: function (t) {
            var n = e(t.currentTarget),
                r = n.closest(".sub"),
                i = r.find(".header"),
                s = r.find(".scrollable-content"),
                o = r.find(".scroll-buttons"),
                u = n.hasClass("up"),
                a = this.$subSection.index(r),
                f = this.height - (i.outerHeight() + o.outerHeight()),
                l = s.children(),
                c = parseInt(s.css("margin-top"), 10),
                h = 0,
                p = l.length,
                d, v, m, g;
            if (u) for (h; h < p; ++h) e(l[h]).position().top > 0 && (v = e(l[h - 1]), d = v.position().top + v.outerHeight() + c * -1 - f, this.hasScrollers ? this.scrollers["vscrollbar" + a].scrollTo(d) : (v = e(l[l.length - 1]), m = v.position().top + v.outerHeight() - f, g = Math.max(0, Math.min(1, d / m)), s.stop(), s.animate({
                scrollTop: m * g
            }, 200)), h = p);
            else for (h; h < p; ++h) v = e(l[h]), v.position().top + v.outerHeight() > f && (d = v.position().top + c * -1, this.hasScrollers ? this.scrollers["vscrollbar" + a].scrollTo(d) : (v = e(l[l.length - 1]), m = v.position().top + v.outerHeight() - f, g = Math.max(0, Math.min(1, d / m)), s.stop(), s.animate({
                scrollTop: m * g
            }, 200)), h = p)
        },
        onMouseOver: function (t) {
            clearTimeout(this.timeout);
            var n;
            n = e(t.currentTarget), this.$navlist.removeClass("hover");
            if (!n.hasClass("hassub")) {
                this.closeSubNav(200), this.mustFold && this.$el.addClass("minimised");
                return
            }
            this.openSubNav(), n.parent().addClass("hover"), this.$el.addClass("hover")
        },
        onMouseOut: function (e) {
            clearTimeout(this.timeout);
            var t = e.clientX,
                r = e.pageY - n.getScrollPosition();
            if (t <= this.left || t >= this.left + this.width || r <= 0 || r >= this.height) {
                var _this = this;
                this.timeout = setTimeout(function () {
                    _this.closeSubNav(200);
                    _this.$el.removeClass("hover");
                }, 2000);
            }
        },
        onFlipComplete: function (n) {
            var r = this.$subSection.length,
                i, s;
            while (--r > -1) i = e(this.$subSection[r]), s = i.find(".products"), s.css("top", i.find(".header").outerHeight());
            t.each(this.scrollers, function (e) {
                e.refresh()
            }), this.onResize()
        },
        onFoldUpdated: function (e) {
            var t = e.isFolded,
                n = this.$el.hasClass("minimised");
            t && !n ? this.$el.addClass("minimised") : !t && n && this.$el.removeClass("minimised")
        },
        onResize: function (t) {
            var n = this.height = this.$win.height(),
                r = this.$win.width();
            this.attachScroll && (this.height < this.MIN_HEIGHT ? (this.heightDiff = this.MIN_HEIGHT - this.height, this.onPageScroll(), this.$win.on("scroll", this.onPageScroll)) : (this.$win.off("scroll", this.onPageScroll), this.$el.css("top", 0))), r > this.MAX_WIDTH && !this.$el.hasClass("no-transition") && this.$el.addClass("no-transition");
            var i, s, o, u, a, f, l = this;
            this.$subSection.each(function (t) {
                i = e(this), s = i.find(".header"), o = i.find(".scroll-buttons"), u = i.find(".scrollable-content"), $shadows = i.find(".shadow.top-shadow, .shadow.bottom-shadow"), l.attachScroll ? (a = n - (s.outerHeight() + o.outerHeight()), f = a > u.outerHeight() ? "none" : "block") : f = u.get(0).scrollHeight == u.height() ? "none" : "block", o.css("display", f), $shadows.css("visibility", f ? "visible" : "hidden")
            });
            for (var c in this.scrollers) this.scrollers[c].refresh(), this.scrollers[c].position(0, this), this.scrollers[c].onScrollUpdated()
        },
        onPageScroll: function (e) {
            var t = Math.max(0, Math.min(this.heightDiff, n.getScrollPosition()));
            this.$el.css("top", -t)
        },
        onSectionTouched: function (t) {
            t.preventDefault(), t.stopPropagation();
            var n = e(t.currentTarget);
            if (this.currentSub === t.currentTarget.href) {
                this.currentSub = null, this.$bodyCover.off("touchstart", this.onBodyCoverTouched), this.$el.removeClass("hover"), this.closeSubNav();
                return
            }
            this.currentSub = t.currentTarget.href, this.$navlist.removeClass("hover"), this.openSubNav(), n.parent().addClass("hover"), this.$el.addClass("hover"), this.$bodyCover.on("touchstart", this.onBodyCoverTouched)
        },
        onBodyCoverTouched: function (e) {
            this.currentSub = null, this.$bodyCover.off("touchstart", this.onBodyCoverTouched), this.$el.removeClass("hover"), this.closeSubNav()
        },
        onProductScroll: function (t) {
            var n = e(t.currentTarget),
                r = n.closest(".sub"),
                i = r.find(".scroll-buttons"),
                s = n.scrollTop(),
                o = n.get(0).scrollHeight,
                u = n.height() + n.scrollTop();
            if (s === 0) {
                var a = i.find(".up");
                a.hasClass("deactivated") || a.addClass("deactivated")
            } else i.find(".up").removeClass("deactivated");
            if (u === o) {
                var f = i.find(".down");
                f.hasClass("deactivated") || f.addClass("deactivated")
            } else i.find(".down").removeClass("deactivated")
        },
        destroy: function () {
            this.$el.off("mouseout", this.onMouseOut), this.$primary.off("mouseover", this.onMouseOver), this.$win.off("resize", this.onResize), this.$bodyCover.off("touchstart", this.onBodyCoverTouched), i.removeListener(n.FLIP_COMPLETE, this.onFlipComplete), i.removeListener(n.NAV_FOLD_UPDATE, this.onFoldUpdated), r.prototype.destroy.apply(this, arguments)
        }
    });
    return u
}), define("Views/Components/videoplayernew", ["jquery", "underscore"], function (e, t) {
    var n = {
        currentVideo: null,
        $overlay: null,
        $videoWrapper: null,
        youtube_template: t.template('<iframe src="http://www.youtube.com/embed/<%= id %>?modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'),
        youku_template: t.template('<iframe src="http://player.youku.com/embed/<%= id %>" frameborder="0" allowfullscreen></iframe>'),
        generic_template: _.template('<iframe src="<%= url %>" frameborder="0" allowfullscreen="true"></iframe>'),
        loadVideo: function (e) {
            //var t = null,
            //    n = e.indexOf("youku.com") != -1;
            //if (n) {
            //    var r = e.match(/id_([a-zA-Z0-9]+)\.html/);
            //    r != null && (t = r[1])
            //} else {
            //    var r = e.split("/");
            //    t = r[r.length - 1]
            //}
            this.$overlay == null && this.createOverlay();
            var i = this.generic_template; // n ? this.youku_template : this.youtube_template;
            this.$videoWrapper.html(i({ url: e })); //{ id: t })),
            this.$overlay.css({
                display: "table",
                opacity: 0
            }), this.$overlay.animate({
                opacity: 1
            }, 500), currentVideo = t
        },
        createOverlay: function () {
            var t = this;
            this.$overlay = e('<div class="video-player-new"><div class="video-container"><div class="overlay-close"><span class="hidden">Close</span></div><div class="video-wrapper"></div></div></div>'), this.$videoWrapper = this.$overlay.find(".video-wrapper"), this.$overlay.click(function () {
                t.$overlay.fadeOut(function () {
                    t.$videoWrapper.empty()
                })
            }), e("body").append(this.$overlay)
        }
    };
    return n
}), define("Views/Components/search", ["jquery", "underscore", "AppModel", "Base", "Backbone"], function (e, t, n, r, i) {
    var s = r.extend({
        searchForm: e(".search-form"),
        searchInput: e(".search-input"),
        searchBox: e(".search-box"),
        events: {
            "click .search-close": "close"
        },
        initialize: function () {
            var t = this;
            e("body").hasClass("search-page") && (this.addSearchTerm(), this.open()), this.searchForm.submit(function (e) {
                if (t.validateSearch() === !1) return !1
            })
        },
        open: function (e) {
            this.searchBox.addClass("open"), e && this.searchInput.focus()
        },
        close: function (e) {
            e.preventDefault(), this.searchBox.removeClass("open")
        },
        addSearchTerm: function () {
            var t = e(".search-term").attr("data-search-term");
            this.searchInput.attr("value", t)
        },
        validateSearch: function () {
            var e = this.searchInput.val();
            return e.length > 0 ? !0 : !1
        }
    });
    return s
}), define("Views/Modules/utilitynav", ["jquery", "underscore", "AppModel", "Base", "Views/Components/regionselector", "Modules/notification-dispatcher", "Views/Components/search"], function (e, t, n, r, i, s, o) {
    var u = r.extend({
        HIDE_THRESHOLD: 10,
        MAP_HIDE_THRESHOLD: 3,
        $win: null,
        $body: null,
        regionMap: null,
        isHidden: null,
        search: null,
        className: "",
        events: {
            "click .utility-store": "onStoreClick",
            "click .utility-region": "onMapClick",
            "click .utility-community": "onCommunityClick",
            "click .utility-search": "onSearchClick"
        },
        isAnimating: !0,
        initialize: function (e) {
            r.prototype.initialize.apply(this, arguments), t.bindAll(this, "resetUtilityNav", "onPageScroll"), this.$win = n.get("win"), this.$body = n.get("body"), this.isHidden = this.$el.hasClass("hide"), this.regionMap = new i({
                el: ".map-region-module"
            }), this.$win.on("scroll", this.onPageScroll), s.addListener(s.REGION_MAP_CLOSE, this.resetUtilityNav), this.search = new o({
                el: "body"
            })
        },
        resetUtilityNav: function () {
            this.regionMap && this.regionMap.isOpen && this.regionMap.close()
        },
        setViewState: function () {
            var e = n.getScrollPosition();
            if (this.regionMap && this.regionMap.isOpen) return;
            !this.isHidden && e > this.HIDE_THRESHOLD ? (this.isHidden = !0, this.$el.addClass("hide")) : this.isHidden && e <= this.HIDE_THRESHOLD && (this.isHidden = !1, this.$el.removeClass("hide"))
        },
        onStoreClick: function (e) {
            this.resetUtilityNav()
        },
        onMapClick: function (e) {
            e.preventDefault(), this.regionMap.open()
        },
        onCommunityClick: function (e) {
            this.resetUtilityNav()
        },
        onSearchClick: function (e) {
            e.preventDefault(), this.resetUtilityNav(), this.search.open(!0)
        },
        onPageScroll: function (e) {
            this.setViewState()
        },
        destroy: function () {
            this.$win.off("scroll", this.onScroll), s.removeListener(s.REGION_MAP_CLOSE, this.resetUtilityNav), r.prototype.destroy.apply(this, arguments)
        }
    });
    return u
});
var wacom = wacom || {};
require.config({
    paths: {
        jquery: "../Vendor/jquery/jquery.1.9.1.min",
        mousewheel: "../Vendor/jquery/plugins/jquery.mousewheel.min",
        WacomGlobal: "global",
        Collector: "jira-collector",
        underscore: "../Vendor/underscore/underscore.1.4.4.min",
        Backbone: "../Vendor/backbone/backbone.0.9.10.min",
        AppModel: "Models/app",
        json2: "../Vendor/json/json2",
        youtubeapi: "../Vendor/youtube/iframe_api",
        raf: "../Vendor/paulirish/rAF",
        Base: "Views/base",
        TweenMax: "../Vendor/greensock/TweenMax.min",
        History: "../Vendor/historyjs/jquery.history",
        SignalR: "../Vendor/signalr/jquery.signalR-1.0.1.min",
        SignalRHubs: "/signalr/hubs?noext",
        //importNotifier: "import-notifier",
        Alertify: "../Vendor/alertify/alertify",
        Chosen: "../Vendor/chosen/chosen.jquery"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        Backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        SignalR: {
            deps: ["jquery", "json2"]
        },
        SignalRHubs: {
            deps: ["jquery", "json2", "SignalR"]
        },
        Alertify: {
            exports: "alertify"
        },
        Chosen: {
            deps: ["jquery"],
            exports: "chosen"
        },
        WacomGlobal: {
            deps: ["jquery"]
        },
        Collector: {
            deps: ["jquery"]
        }
    }
}), require(["jquery", "underscore", "AppModel", "Backbone", "Base", "WacomGlobal", "Collector", "Views/site-container", "Views/Components/main-menu", "Views/Components/videoplayernew", "Views/Modules/simplecontent", "Modules/feature-tests"], function (e, t, n, r, i, s, col, o, u, a, f, l) {
    window.AppModel = n, n.setSection(), global = {};
    var c = l.init(),
        h = new o;
    n.set("videoPlayerNew", a);
    var p = new u({
        el: "#navigation-main"
    });
    this.$(".navigation-utility-list").length && require(["Views/Modules/utilitynav"], t.bind(function (e) {
        var t = new e({
            el: ".navigation-utility"
        })
    }, this));
    var d;
    d = new i({
        el: ".body"
    }), require(["Views/Components/socialnetwork-view-controller"], t.bind(function (e) {
        var t = new e({
            el: ".links-social"
        })
    }, this))
}), define("app", function () { });