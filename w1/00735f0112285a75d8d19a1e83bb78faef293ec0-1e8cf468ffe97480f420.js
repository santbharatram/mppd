(self.webpackChunkgatsby_ecommerce_theme = self.webpackChunkgatsby_ecommerce_theme || []).push([
    [951], {
        8828: function(e) {
            "use strict";
            e.exports = Object.assign
        },
        4310: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return Ke
                }
            });
            var r, a, o, i, l = n(6540),
                c = n(5556),
                s = n.n(c),
                u = n(2098),
                m = n.n(u),
                d = n(115),
                f = n.n(d),
                p = n(8828),
                b = n.n(p),
                v = "bodyAttributes",
                E = "htmlAttributes",
                y = "titleAttributes",
                h = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                g = (Object.keys(h).map((function(e) {
                    return h[e]
                })), "charset"),
                C = "cssText",
                N = "href",
                A = "http-equiv",
                T = "innerHTML",
                w = "itemprop",
                k = "name",
                S = "property",
                O = "rel",
                M = "src",
                L = "target",
                j = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                I = "defaultTitle",
                x = "defer",
                P = "encodeSpecialCharacters",
                H = "onChangeClientState",
                _ = "titleTemplate",
                R = Object.keys(j).reduce((function(e, t) {
                    return e[j[t]] = t, e
                }), {}),
                F = [h.NOSCRIPT, h.SCRIPT, h.STYLE],
                B = "data-react-helmet",
                D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                q = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                z = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                U = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                },
                Y = function(e) {
                    return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                K = function(e) {
                    var t = X(e, h.TITLE),
                        n = X(e, _);
                    if (n && t) return n.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var r = X(e, I);
                    return t || r || void 0
                },
                W = function(e) {
                    return X(e, H) || function() {}
                },
                J = function(e, t) {
                    return t.filter((function(t) {
                        return void 0 !== t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return z({}, e, t)
                    }), {})
                },
                V = function(e, t) {
                    return t.filter((function(e) {
                        return void 0 !== e[h.BASE]
                    })).map((function(e) {
                        return e[h.BASE]
                    })).reverse().reduce((function(t, n) {
                        if (!t.length)
                            for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                                var o = r[a].toLowerCase();
                                if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
                            }
                        return t
                    }), [])
                },
                $ = function(e, t, n) {
                    var r = {};
                    return n.filter((function(t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && te("Helmet: " + e + ' should be of type "Array". Instead found type "' + D(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, n) {
                        var a = {};
                        n.filter((function(e) {
                            for (var n = void 0, o = Object.keys(e), i = 0; i < o.length; i++) {
                                var l = o[i],
                                    c = l.toLowerCase(); - 1 === t.indexOf(c) || n === O && "canonical" === e[n].toLowerCase() || c === O && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(l) || l !== T && l !== C && l !== w || (n = l)
                            }
                            if (!n || !e[n]) return !1;
                            var s = e[n].toLowerCase();
                            return r[n] || (r[n] = {}), a[n] || (a[n] = {}), !r[n][s] && (a[n][s] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var o = Object.keys(a), i = 0; i < o.length; i++) {
                            var l = o[i],
                                c = b()({}, r[l], a[l]);
                            r[l] = c
                        }
                        return e
                    }), []).reverse()
                },
                X = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        if (r.hasOwnProperty(t)) return r[t]
                    }
                    return null
                },
                Z = (r = Date.now(), function(e) {
                    var t = Date.now();
                    t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
                        Z(e)
                    }), 0)
                }),
                G = function(e) {
                    return clearTimeout(e)
                },
                Q = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Z : n.g.requestAnimationFrame || Z,
                ee = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || G : n.g.cancelAnimationFrame || G,
                te = function(e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                ne = null,
                re = function(e, t) {
                    var n = e.baseTag,
                        r = e.bodyAttributes,
                        a = e.htmlAttributes,
                        o = e.linkTags,
                        i = e.metaTags,
                        l = e.noscriptTags,
                        c = e.onChangeClientState,
                        s = e.scriptTags,
                        u = e.styleTags,
                        m = e.title,
                        d = e.titleAttributes;
                    ie(h.BODY, r), ie(h.HTML, a), oe(m, d);
                    var f = {
                            baseTag: le(h.BASE, n),
                            linkTags: le(h.LINK, o),
                            metaTags: le(h.META, i),
                            noscriptTags: le(h.NOSCRIPT, l),
                            scriptTags: le(h.SCRIPT, s),
                            styleTags: le(h.STYLE, u)
                        },
                        p = {},
                        b = {};
                    Object.keys(f).forEach((function(e) {
                        var t = f[e],
                            n = t.newTags,
                            r = t.oldTags;
                        n.length && (p[e] = n), r.length && (b[e] = f[e].oldTags)
                    })), t && t(), c(e, p, b)
                },
                ae = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                oe = function(e, t) {
                    void 0 !== e && document.title !== e && (document.title = ae(e)), ie(h.TITLE, t)
                },
                ie = function(e, t) {
                    var n = document.getElementsByTagName(e)[0];
                    if (n) {
                        for (var r = n.getAttribute(B), a = r ? r.split(",") : [], o = [].concat(a), i = Object.keys(t), l = 0; l < i.length; l++) {
                            var c = i[l],
                                s = t[c] || "";
                            n.getAttribute(c) !== s && n.setAttribute(c, s), -1 === a.indexOf(c) && a.push(c);
                            var u = o.indexOf(c); - 1 !== u && o.splice(u, 1)
                        }
                        for (var m = o.length - 1; m >= 0; m--) n.removeAttribute(o[m]);
                        a.length === o.length ? n.removeAttribute(B) : n.getAttribute(B) !== i.join(",") && n.setAttribute(B, i.join(","))
                    }
                },
                le = function(e, t) {
                    var n = document.head || document.querySelector(h.HEAD),
                        r = n.querySelectorAll(e + "[" + B + "]"),
                        a = Array.prototype.slice.call(r),
                        o = [],
                        i = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var n = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === T) n.innerHTML = t.innerHTML;
                                else if (r === C) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var l = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, l)
                        }
                        n.setAttribute(B, "true"), a.some((function(e, t) {
                            return i = t, n.isEqualNode(e)
                        })) ? a.splice(i, 1) : o.push(n)
                    })), a.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), o.forEach((function(e) {
                        return n.appendChild(e)
                    })), {
                        oldTags: a,
                        newTags: o
                    }
                },
                ce = function(e) {
                    return Object.keys(e).reduce((function(t, n) {
                        var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                        return t ? t + " " + r : r
                    }), "")
                },
                se = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, n) {
                        return t[j[n] || n] = e[n], t
                    }), t)
                },
                ue = function(e, t, n) {
                    switch (e) {
                        case h.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, n = t.titleAttributes, (r = {
                                        key: e
                                    })[B] = !0, a = se(n, r), [l.createElement(h.TITLE, a, e)];
                                    var e, n, r, a
                                },
                                toString: function() {
                                    return function(e, t, n, r) {
                                        var a = ce(n),
                                            o = ae(t);
                                        return a ? "<" + e + " " + B + '="true" ' + a + ">" + Y(o, r) + "</" + e + ">" : "<" + e + " " + B + '="true">' + Y(o, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, n)
                                }
                            };
                        case v:
                        case E:
                            return {
                                toComponent: function() {
                                    return se(t)
                                },
                                toString: function() {
                                    return ce(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, n) {
                                            var r, a = ((r = {
                                                key: n
                                            })[B] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var n = j[e] || e;
                                                if (n === T || n === C) {
                                                    var r = t.innerHTML || t.cssText;
                                                    a.dangerouslySetInnerHTML = {
                                                        __html: r
                                                    }
                                                } else a[n] = t[e]
                                            })), l.createElement(e, a)
                                        }))
                                    }(e, t)
                                },
                                toString: function() {
                                    return function(e, t, n) {
                                        return t.reduce((function(t, r) {
                                            var a = Object.keys(r).filter((function(e) {
                                                    return !(e === T || e === C)
                                                })).reduce((function(e, t) {
                                                    var a = void 0 === r[t] ? t : t + '="' + Y(r[t], n) + '"';
                                                    return e ? e + " " + a : a
                                                }), ""),
                                                o = r.innerHTML || r.cssText || "",
                                                i = -1 === F.indexOf(e);
                                            return t + "<" + e + " " + B + '="true" ' + a + (i ? "/>" : ">" + o + "</" + e + ">")
                                        }), "")
                                    }(e, t, n)
                                }
                            }
                    }
                },
                me = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        a = e.htmlAttributes,
                        o = e.linkTags,
                        i = e.metaTags,
                        l = e.noscriptTags,
                        c = e.scriptTags,
                        s = e.styleTags,
                        u = e.title,
                        m = void 0 === u ? "" : u,
                        d = e.titleAttributes;
                    return {
                        base: ue(h.BASE, t, r),
                        bodyAttributes: ue(v, n, r),
                        htmlAttributes: ue(E, a, r),
                        link: ue(h.LINK, o, r),
                        meta: ue(h.META, i, r),
                        noscript: ue(h.NOSCRIPT, l, r),
                        script: ue(h.SCRIPT, c, r),
                        style: ue(h.STYLE, s, r),
                        title: ue(h.TITLE, {
                            title: m,
                            titleAttributes: d
                        }, r)
                    }
                },
                de = m()((function(e) {
                    return {
                        baseTag: V([N, L], e),
                        bodyAttributes: J(v, e),
                        defer: X(e, x),
                        encode: X(e, P),
                        htmlAttributes: J(E, e),
                        linkTags: $(h.LINK, [O, N], e),
                        metaTags: $(h.META, [k, g, A, S, w], e),
                        noscriptTags: $(h.NOSCRIPT, [T], e),
                        onChangeClientState: W(e),
                        scriptTags: $(h.SCRIPT, [M, T], e),
                        styleTags: $(h.STYLE, [C], e),
                        title: K(e),
                        titleAttributes: J(y, e)
                    }
                }), (function(e) {
                    ne && ee(ne), e.defer ? ne = Q((function() {
                        re(e, (function() {
                            ne = null
                        }))
                    })) : (re(e), ne = null)
                }), me)((function() {
                    return null
                })),
                fe = (a = de, i = o = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !f()(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case h.SCRIPT:
                            case h.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case h.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            r = e.arrayTypeChildren,
                            a = e.newChildProps,
                            o = e.nestedChildren;
                        return z({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [z({}, a, this.mapNestedChildrenToProps(n, o))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, r = e.child,
                            a = e.newProps,
                            o = e.newChildProps,
                            i = e.nestedChildren;
                        switch (r.type) {
                            case h.TITLE:
                                return z({}, a, ((t = {})[r.type] = i, t.titleAttributes = z({}, o), t));
                            case h.BODY:
                                return z({}, a, {
                                    bodyAttributes: z({}, o)
                                });
                            case h.HTML:
                                return z({}, a, {
                                    htmlAttributes: z({}, o)
                                })
                        }
                        return z({}, a, ((n = {})[r.type] = z({}, o), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = z({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            n = z({}, n, ((r = {})[t] = e[t], r))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return l.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var a = e.props,
                                    o = a.children,
                                    i = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, n) {
                                            return t[R[n] || n] = e[n], t
                                        }), t)
                                    }(U(a, ["children"]));
                                switch (n.warnOnInvalidChildren(e, o), e.type) {
                                    case h.LINK:
                                    case h.META:
                                    case h.NOSCRIPT:
                                    case h.SCRIPT:
                                    case h.STYLE:
                                        r = n.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: i,
                                            nestedChildren: o
                                        });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: i,
                                            nestedChildren: o
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = U(e, ["children"]),
                            r = z({}, n);
                        return t && (r = this.mapChildrenToProps(t, r)), l.createElement(a, r)
                    }, q(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            a.canUseDOM = e
                        }
                    }]), t
                }(l.Component), o.propTypes = {
                    base: s().object,
                    bodyAttributes: s().object,
                    children: s().oneOfType([s().arrayOf(s().node), s().node]),
                    defaultTitle: s().string,
                    defer: s().bool,
                    encodeSpecialCharacters: s().bool,
                    htmlAttributes: s().object,
                    link: s().arrayOf(s().object),
                    meta: s().arrayOf(s().object),
                    noscript: s().arrayOf(s().object),
                    onChangeClientState: s().func,
                    script: s().arrayOf(s().object),
                    style: s().arrayOf(s().object),
                    title: s().string,
                    titleAttributes: s().object,
                    titleTemplate: s().string
                }, o.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, o.peek = a.peek, o.rewind = function() {
                    var e = a.rewind();
                    return e || (e = me({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, i);
            fe.renderStatic = fe.rewind;
            var pe = fe,
                be = n(4810),
                ve = n(2954),
                Ee = n(7650),
                ye = n(8127),
                he = n(5863),
                ge = "AddNotification-module--meta--a70e5";
            var Ce = e => {
                    var t;
                    const n = "/products/pdp1.jpeg",
                        r = "",
                        a = "Lambswool Crew Neck Jumper",
                        o = "Anthracite Melange",
                        i = "XS",
                        c = null === (t = (0, l.useContext)(Ee.Ay).state) || void 0 === t ? void 0 : t.open;
                    return l.createElement("div", {
                        className: "AddNotification-module--root--6a02b " + (!0 === c ? "AddNotification-module--show--8df30" : "AddNotification-module--hide--8610c")
                    }, l.createElement("div", {
                        className: "AddNotification-module--header--9b327"
                    }, l.createElement("div", {
                        className: "AddNotification-module--iconContainer--507a4"
                    }, l.createElement(he.A, {
                        symbol: "check"
                    })), l.createElement("span", null, "Item added to bag")), l.createElement("div", {
                        className: "AddNotification-module--newItemContainer--8567a"
                    }, l.createElement("div", {
                        className: "AddNotification-module--imageContainer--ba37c"
                    }, l.createElement("img", {
                        alt: r,
                        src: (0, ve.S7)(n)
                    })), l.createElement("div", {
                        className: "AddNotification-module--detailContainer--f742b"
                    }, l.createElement("span", {
                        className: "AddNotification-module--name--2da36"
                    }, a), l.createElement("span", {
                        className: ge
                    }, "Color: ", o), l.createElement("span", {
                        className: ge
                    }, "Size: ", i))), l.createElement("div", {
                        className: "AddNotification-module--actionContainer--0526d"
                    }, l.createElement(ye.A, {
                        onClick: e.openCart,
                        level: "secondary"
                    }, "view my bag (1)"), l.createElement(ye.A, {
                        level: "primary",
                        href: "/cart"
                    }, "checkout"), l.createElement("div", {
                        className: "AddNotification-module--linkContainer--dfbed"
                    }, l.createElement(be.N_, {
                        to: "/shop"
                    }, "continue shopping"))))
                },
                Ne = n(6065),
                Ae = n(3517),
                Te = n(1219),
                we = n(1017);
            var ke = e => {
                    const {
                        menu: t
                    } = e;
                    return null == t ? l.createElement(l.Fragment, null) : l.createElement("div", {
                        className: "ExpandedMenu-module--root--206d8"
                    }, l.createElement("div", {
                        className: "ExpandedMenu-module--linkContainers--35282"
                    }, null == t ? void 0 : t.map(((e, t) => l.createElement("div", {
                        key: t,
                        className: "ExpandedMenu-module--categoryContainer--3dcf8"
                    }, l.createElement("span", {
                        className: "ExpandedMenu-module--categoryName--f5259"
                    }, e.categoryLabel), l.createElement("ul", null, e.submenu.map(((e, t) => l.createElement("li", {
                        key: t
                    }, l.createElement(be.N_, {
                        className: "ExpandedMenu-module--menuLink--2c0bd",
                        to: e.menuLink
                    }, e.menuLabel))))))))), l.createElement("div", {
                        className: "ExpandedMenu-module--imageContainer--d173c"
                    }, l.createElement("img", {
                        src: (0, ve.S7)("/headerPic1.png"),
                        alt: "header 1"
                    }), l.createElement("img", {
                        src: (0, ve.S7)("/headerPic2.png"),
                        alt: "header 2"
                    })))
                },
                Se = n(9405),
                Oe = n(5830),
                Me = n(6870),
                Le = n(3186),
                je = "MiniCartItem-module--meta--12c6d";
            var Ie = e => {
                const {
                    image: t,
                    alt: n,
                    name: r,
                    price: a,
                    color: o,
                    size: i
                } = e;
                return l.createElement("div", {
                    className: "MiniCartItem-module--root--9bda7"
                }, l.createElement("div", {
                    className: "MiniCartItem-module--imageContainer--3cdb5",
                    role: "presentation",
                    onClick: () => (0, be.oo)("/product/sample")
                }, l.createElement("img", {
                    src: (0, ve.S7)(t),
                    alt: n
                })), l.createElement("div", {
                    className: "MiniCartItem-module--detailsContainer--ad9e6"
                }, l.createElement("div", {
                    className: "MiniCartItem-module--metaContainer--e50c9"
                }, l.createElement("span", {
                    className: "MiniCartItem-module--name--e5c89"
                }, r), l.createElement("div", {
                    className: "MiniCartItem-module--priceContainer--64de1"
                }, l.createElement(Oe.A, {
                    amount: a
                })), l.createElement("span", {
                    className: je
                }, "Color: ", o), l.createElement("span", {
                    className: je
                }, "Size:", l.createElement("span", {
                    className: "MiniCartItem-module--size--7489d"
                }, i))), l.createElement("div", {
                    className: "MiniCartItem-module--adjustItemContainer--ff32a"
                }, l.createElement(Me.A, null))), l.createElement("div", {
                    className: "MiniCartItem-module--closeContainer--1dcaa"
                }, l.createElement(Le.A, null)))
            };
            var xe = e => {
                    const t = {
                        image: "/products/pdp1.jpeg",
                        alt: "",
                        name: "Lambswool Crew Neck Jumper",
                        price: 220,
                        color: "Anthracite Melange",
                        size: "xs"
                    };
                    return l.createElement("div", {
                        className: "MiniCart-module--root--1956d"
                    }, l.createElement("div", {
                        className: "MiniCart-module--titleContainer--15e70"
                    }, l.createElement("h4", null, "My Bag")), l.createElement("div", {
                        className: "MiniCart-module--cartItemsContainer--4bd4a"
                    }, l.createElement(Ie, t)), l.createElement("div", {
                        className: "MiniCart-module--summaryContainer--3619d"
                    }, l.createElement("div", {
                        className: "MiniCart-module--summaryContent--33b9f"
                    }, l.createElement("div", {
                        className: "MiniCart-module--totalContainer--23e34"
                    }, l.createElement("span", null, "Total (USD)"), l.createElement("span", null, l.createElement(Oe.A, {
                        amount: 220,
                        appendZero: !0
                    }))), l.createElement("span", {
                        className: "MiniCart-module--taxNotes--33a0c"
                    }, "Taxes and shipping will be calculated at checkout"), l.createElement(ye.A, {
                        onClick: () => (0, be.oo)("/cart"),
                        level: "primary",
                        fullWidth: !0
                    }, "checkout"), l.createElement("div", {
                        className: "MiniCart-module--linkContainer--86a55"
                    }, l.createElement(be.N_, {
                        to: "/shop"
                    }, "continue shopping")))))
                },
                Pe = "MobileNavigation-module--mobileLink--047c9",
                He = "MobileNavigation-module--navFooter--8a041",
                _e = "MobileNavigation-module--previousIcon--56a68",
                Re = "MobileNavigation-module--previousLinkContainer--fc84c";
            var Fe = e => {
                    const {
                        close: t
                    } = e, {
                        0: n,
                        1: r
                    } = (0, l.useState)(), {
                        0: a,
                        1: o
                    } = (0, l.useState)(), {
                        0: i,
                        1: c
                    } = (0, l.useState)(0);
                    return l.createElement("div", {
                        className: "MobileNavigation-module--root--bf693"
                    }, l.createElement("nav", null, l.createElement("div", {
                        className: "MobileNavigation-module--headerAuth--184b7"
                    }, 0 === i && !1 === (0, ve.NH)() && l.createElement("div", {
                        className: "MobileNavigation-module--authLinkContainer--6c373"
                    }, l.createElement(be.N_, {
                        to: "/signup"
                    }, "Sign Up"), l.createElement(be.N_, {
                        to: "/login"
                    }, "Login")), 0 === i && !0 === (0, ve.NH)() && l.createElement("div", {
                        className: "MobileNavigation-module--welcomeContainer--95471",
                        role: "presentation",
                        onClick: () => c(-1)
                    }, l.createElement("span", {
                        className: "MobileNavigation-module--welcomeMessage--2fc09"
                    }, "Welcome, John"), l.createElement(he.A, {
                        symbol: "caret"
                    })), -1 === i && !0 === (0, ve.NH)() && l.createElement("div", {
                        className: Re,
                        onClick: () => c(0),
                        role: "presentation"
                    }, l.createElement("div", {
                        className: _e
                    }, l.createElement(he.A, {
                        symbol: "caret"
                    })), l.createElement("span", null, "my account")), 1 === i && l.createElement("div", {
                        className: Re,
                        onClick: () => c(0),
                        role: "presentation"
                    }, l.createElement("div", {
                        className: _e
                    }, l.createElement(he.A, {
                        symbol: "caret"
                    })), l.createElement("span", null, a.menuLabel)), 2 === i && l.createElement("div", {
                        className: Re,
                        onClick: () => c(1),
                        role: "presentation"
                    }, l.createElement("div", {
                        className: _e
                    }, l.createElement(he.A, {
                        symbol: "caret"
                    })), l.createElement("span", null, n.categoryLabel))), l.createElement("div", {
                        className: "MobileNavigation-module--mobileNavContainer--19e83"
                    }, 0 === i && l.createElement("div", null, Te.Jm.map((e => {
                        var t;
                        const n = void 0 !== (null === (t = e.category) || void 0 === t ? void 0 : t.length);
                        return l.createElement(be.N_, {
                            key: e.menuLink,
                            className: "" + Pe,
                            to: !0 === n ? "" : e.menuLink,
                            onClick: () => {
                                n && (c(1), o(e))
                            }
                        }, e.menuLabel, n && l.createElement(he.A, {
                            symbol: "caret"
                        }))
                    })), l.createElement("div", {
                        className: He
                    }, l.createElement(be.N_, {
                        to: "/favorites"
                    }, l.createElement(he.A, {
                        symbol: "heart"
                    }), "Favorites (0)"))), 1 === i && a.category.map((e => l.createElement(be.N_, {
                        key: e.categoryLabel,
                        to: "",
                        onClick: () => {
                            c(2), r(e)
                        },
                        className: "" + Pe
                    }, e.categoryLabel, l.createElement(he.A, {
                        symbol: "caret"
                    })))), 2 === i && n.submenu.map((e => l.createElement(be.N_, {
                        key: e.menuLabel,
                        to: e.menuLink,
                        className: "MobileNavigation-module--edgeLink--838cc"
                    }, e.menuLabel))), -1 === i && l.createElement(l.Fragment, null, l.createElement("div", null, l.createElement(be.N_, {
                        to: "/account/orders/",
                        className: Pe
                    }, "Orders"), l.createElement(be.N_, {
                        to: "/account/address/",
                        className: Pe
                    }, "Addresses"), l.createElement(be.N_, {
                        to: "/account/settings/",
                        className: Pe
                    }, "Settings"), l.createElement(be.N_, {
                        to: "/account/viewed/",
                        className: Pe
                    }, "Recently Viewed")), l.createElement("div", {
                        className: He
                    }, l.createElement("div", {
                        className: "MobileNavigation-module--logoutContainer--999f0",
                        role: "presentation",
                        onClick: () => {
                            window.localStorage.removeItem("key"), (0, be.oo)("/"), t()
                        }
                    }, l.createElement(he.A, {
                        symbol: "logout"
                    }), l.createElement("span", null, "Sign out ")))))))
                },
                Be = "Header-module--hideOnMobile--911ac",
                De = "Header-module--iconButton--db197",
                qe = "Header-module--iconContainer--8ecbb",
                ze = "Header-module--show--1efa0";
            var Ue = e => {
                    const {
                        0: t,
                        1: n
                    } = (0, l.useState)(!1), {
                        0: r,
                        1: a
                    } = (0, l.useState)(!1), {
                        0: o,
                        1: i
                    } = (0, l.useState)(!0), {
                        0: c,
                        1: s
                    } = (0, l.useState)(), {
                        0: u,
                        1: m
                    } = (0, l.useState)(), {
                        0: d,
                        1: f
                    } = (0, l.useState)(!1), {
                        0: p,
                        1: b
                    } = (0, l.useState)(""), v = (0, l.createRef)();
                    return (0, l.useEffect)((() => {
                        !1 === o && m(!1)
                    }), [o]), (0, l.useEffect)((() => {
                        const e = () => {
                            i(!1), f(!1), m(void 0)
                        };
                        return window.removeEventListener("scroll", e), window.addEventListener("scroll", e, {
                            passive: !0
                        }), () => window.removeEventListener("scroll", e)
                    }), []), (0, l.useEffect)((() => {
                        !0 === d && setTimeout((() => {
                            v.current.focus()
                        }), 250)
                    }), [d]), l.createElement("div", {
                        className: "Header-module--root--e9546"
                    }, l.createElement("div", {
                        className: "Header-module--headerMessageContainer--679b6"
                    }, l.createElement("span", null, "Free shipping worldwide")), l.createElement(Ae.A, {
                        size: "large",
                        spacing: "min"
                    }, l.createElement("div", {
                        className: "Header-module--header--aa06a"
                    }, l.createElement("div", {
                        className: "Header-module--linkContainer--b6652"
                    }, l.createElement("nav", {
                        role: "presentation",
                        onMouseLeave: () => {
                            i(!1)
                        }
                    }, Te.Jm.map((e => l.createElement(be.N_, {
                        key: e.menuLink,
                        onMouseEnter: () => (e => {
                            e.category ? (i(!0), s(e.category), f(!1)) : s(void 0), m(e.menuLabel)
                        })(e),
                        className: "Header-module--navLink--2a5b8 " + (u === e.menuLabel ? "Header-module--activeLink--d0bc2" : ""),
                        to: e.menuLink
                    }, e.menuLabel))))), l.createElement("div", {
                        role: "presentation",
                        onClick: () => {
                            a(!r)
                        },
                        className: "Header-module--burgerIcon--813a8"
                    }, l.createElement(he.A, {
                        symbol: !0 === r ? "cross" : "burger"
                    })), l.createElement(Ne.A, null), l.createElement("div", {
                        className: "Header-module--actionContainers--fa486"
                    }, l.createElement("button", {
                        "aria-label": "Search",
                        className: De + " " + qe,
                        onClick: () => {
                            f(!d)
                        }
                    }, l.createElement(he.A, {
                        symbol: "search"
                    })), l.createElement(be.N_, {
                        "aria-label": "Favorites",
                        href: "/account/favorites",
                        className: qe + " " + Be
                    }, l.createElement(he.A, {
                        symbol: "heart"
                    })), l.createElement(be.N_, {
                        "aria-label": "Orders",
                        href: (0, ve.NH)() ? "/login" : "/account/orders/",
                        className: qe + " " + Be
                    }, l.createElement(he.A, {
                        symbol: "user"
                    })), l.createElement("button", {
                        "aria-label": "Cart",
                        className: De + " " + qe + " Header-module--bagIconContainer--c659b",
                        onClick: () => {
                            n(!0), a(!1)
                        }
                    }, l.createElement(he.A, {
                        symbol: "bag"
                    }), l.createElement("div", {
                        className: "Header-module--bagNotification--96980"
                    }, l.createElement("span", null, "1"))), l.createElement("div", {
                        className: "Header-module--notificationContainer--c33fc"
                    }, l.createElement(Ce, {
                        openCart: () => n(!0)
                    })))), l.createElement("div", {
                        className: "Header-module--searchContainer--7ae6e " + (!0 === d ? ze : "Header-module--hide--1456a")
                    }, l.createElement("h4", null, "What are you looking for?"), l.createElement("form", {
                        className: "Header-module--searchForm--49f29",
                        onSubmit: e => (e => {
                            e.preventDefault(), (0, be.oo)("/search?q=" + p), f(!1)
                        })(e)
                    }, l.createElement(Se.A, {
                        ref: v,
                        icon: "arrow",
                        id: "searchInput",
                        value: p,
                        placeholder: "",
                        type: "text",
                        handleChange: (e, t) => b(t)
                    })), l.createElement("div", {
                        className: "Header-module--suggestionContianer--82032"
                    }, ["Oversize sweaters", "Lama Pajamas", "Candles Cinnamon"].map(((e, t) => l.createElement("p", {
                        role: "presentation",
                        onClick: () => {
                            f(!1), (0, be.oo)("/search?q=" + e)
                        },
                        key: t,
                        className: "Header-module--suggestion--ebc9a"
                    }, e)))), l.createElement("div", {
                        role: "presentation",
                        onClick: e => {
                            e.stopPropagation(), f(!1)
                        },
                        className: "Header-module--backdrop--af31c"
                    }))), l.createElement("div", {
                        role: "presentation",
                        onMouseLeave: () => i(!1),
                        onMouseEnter: () => i(!0),
                        className: "Header-module--menuContainer--42be2 " + (!0 === o ? ze : "")
                    }, l.createElement(Ae.A, {
                        size: "large",
                        spacing: "min"
                    }, l.createElement(ke, {
                        menu: c
                    }))), l.createElement(we.A, {
                        visible: t,
                        close: () => n(!1)
                    }, l.createElement(xe, null)), l.createElement("div", {
                        className: "Header-module--mobileMenuContainer--d81d2"
                    }, l.createElement(we.A, {
                        hideCross: !0,
                        top: "98px",
                        isReverse: !0,
                        visible: r,
                        close: () => a(!1)
                    }, l.createElement(Fe, {
                        close: () => a(!1)
                    }))))
                },
                Ye = n(766);
            var Ke = e => {
                let {
                    props: t,
                    children: n,
                    disablePaddingBottom: r = !1
                } = e;
                return l.createElement(l.Fragment, null, l.createElement(pe, null, l.createElement("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                }), l.createElement("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    charset: "UTF-8",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                })), l.createElement(Ue, null), l.createElement("main", {
                    className: "Layout-module--main--9156d " + (!0 === r ? "Layout-module--disablePaddingBottom--fb846" : "")
                }, n), l.createElement(Ye.A, null))
            }
        },
        115: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function o(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var l, c, s, u;
                    if (Array.isArray(e)) {
                        if ((l = e.length) != i.length) return !1;
                        for (c = l; 0 != c--;)
                            if (!o(e[c], i[c])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!o(c.value[1], i.get(c.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        return !0
                    }
                    if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((l = e.length) != i.length) return !1;
                        for (c = l; 0 != c--;)
                            if (e[c] !== i[c]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((l = (s = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (c = l; 0 != c--;)
                        if (!Object.prototype.hasOwnProperty.call(i, s[c])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (c = l; 0 != c--;)
                        if (("_owner" !== s[c] && "__v" !== s[c] && "__o" !== s[c] || !e.$$typeof) && !o(e[s[c]], i[s[c]])) return !1;
                    return !0
                }
                return e != e && i != i
            }
            e.exports = function(e, t) {
                try {
                    return o(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        2098: function(e, t, n) {
            "use strict";
            var r, a = n(6540),
                o = (r = a) && "object" == typeof r && "default" in r ? r.default : r;

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var l = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var c, s = [];

                    function u() {
                        c = e(s.map((function(e) {
                            return e.props
                        }))), m.canUseDOM ? t(c) : n && (c = n(c))
                    }
                    var m = function(e) {
                        var t, n;

                        function a() {
                            return e.apply(this, arguments) || this
                        }
                        n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, a.peek = function() {
                            return c
                        }, a.rewind = function() {
                            if (a.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = c;
                            return c = void 0, s = [], e
                        };
                        var i = a.prototype;
                        return i.UNSAFE_componentWillMount = function() {
                            s.push(this), u()
                        }, i.componentDidUpdate = function() {
                            u()
                        }, i.componentWillUnmount = function() {
                            var e = s.indexOf(this);
                            s.splice(e, 1), u()
                        }, i.render = function() {
                            return o.createElement(r, this.props)
                        }, a
                    }(a.PureComponent);
                    return i(m, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(r) + ")"), i(m, "canUseDOM", l), m
                }
            }
        }
    }
]);
//# sourceMappingURL=00735f0112285a75d8d19a1e83bb78faef293ec0-1e8cf468ffe97480f420.js.map