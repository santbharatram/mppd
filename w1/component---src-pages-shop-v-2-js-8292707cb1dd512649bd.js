"use strict";
(self.webpackChunkgatsby_ecommerce_theme = self.webpackChunkgatsby_ecommerce_theme || []).push([
    [435], {
        3466: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var a = n(6540),
                r = n(2954);
            var o = e => {
                const {
                    maxWidth: t,
                    name: n,
                    subtitle: o,
                    color: l,
                    bgImage: c,
                    height: m,
                    bgColor: s = "var(--standard-light-grey)",
                    hideSubtitleOnMobile: i = !0
                } = e, u = {
                    backgroundColor: s,
                    backgroundImage: void 0 !== c ? "url(" + (0, r.S7)(c) + ")" : "none",
                    height: m,
                    color: l
                };
                return a.createElement("div", {
                    className: "Banner-module--root--d0b7f",
                    style: u
                }, a.createElement("div", {
                    className: "Banner-module--content--07f4d",
                    style: {
                        maxWidth: t
                    }
                }, a.createElement("h2", null, n), o && a.createElement("span", {
                    className: "Banner-module--subtitle--48de9 " + (!0 === i ? "Banner-module--hideSubtitleOnMobile--be27b" : "")
                }, o)))
            }
        },
        5182: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return l
                }
            });
            var a = n(6540),
                r = "BreadCrumbs-module--crumb--3257d",
                o = n(5863);
            var l = e => {
                let {
                    crumbs: t
                } = e, n = t;
                return n && "object" != typeof n && (n = n.indexOf(">") > -1 ? n.split(">") : [n]), a.createElement("div", {
                    "data-breadcrumbs": !0,
                    className: "BreadCrumbs-module--breadcrumbs--f7ddc"
                }, n && n.map(((e, t) => a.createElement("span", {
                    key: t
                }, t > 0 && a.createElement("span", {
                    className: "BreadCrumbs-module--spacer--95034"
                }, a.createElement(o.A, {
                    symbol: "caret"
                })), "object" == typeof e && "link" in e && a.createElement("a", {
                    className: r,
                    href: e.link
                }, e.label.trim()), "object" == typeof e && !("link" in e) && a.createElement("span", {
                    className: r
                }, e.label.trim()), "object" != typeof e && a.createElement("span", {
                    className: r
                }, e.trim())))))
            }
        },
        6775: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return b
                }
            });
            var a = {};
            n.r(a), n.d(a, {
                box: function() {
                    return o
                },
                checkboxWrapper: function() {
                    return l
                },
                innerBox: function() {
                    return c
                },
                input: function() {
                    return m
                },
                inputWrapper: function() {
                    return s
                },
                label: function() {
                    return i
                },
                md: function() {
                    return u
                },
                sm: function() {
                    return d
                }
            });
            var r = n(6540),
                o = "Checkbox-module--box--73232",
                l = "Checkbox-module--checkboxWrapper--8c5e4",
                c = "Checkbox-module--innerBox--6b143",
                m = "Checkbox-module--input--5ec8a",
                s = "Checkbox-module--inputWrapper--62cbd",
                i = "Checkbox-module--label--d405b",
                u = "Checkbox-module--md--a6247",
                d = "Checkbox-module--sm--519e9";
            var b = e => {
                const {
                    value: t,
                    label: n,
                    id: u,
                    name: d,
                    action: b,
                    isChecked: p,
                    size: f = "md"
                } = e;
                return r.createElement("div", {
                    className: l
                }, r.createElement("div", {
                    className: s
                }, r.createElement("input", {
                    type: "checkbox",
                    className: m,
                    id: u,
                    value: t,
                    name: d,
                    "data-label": n,
                    onChange: e => b(e),
                    checked: p
                }), r.createElement("span", {
                    className: o + " " + a[f],
                    role: "presentation",
                    style: {
                        width: f + "px",
                        height: f + "px"
                    }
                }, r.createElement("span", {
                    className: c
                }))), r.createElement("label", {
                    className: i,
                    forhtml: u
                }, n))
            }
        },
        6569: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return c
                }
            });
            var a = n(6540),
                r = n(4810),
                o = n(5863),
                l = "LayoutOption-module--layoutIconContainer--a412d";
            var c = e => a.createElement("div", {
                className: "LayoutOption-module--root--9316a"
            }, a.createElement("div", {
                className: l,
                onClick: () => (0, r.oo)("/shopV2"),
                role: "presentation"
            }, a.createElement(o.A, {
                symbol: "list"
            })), a.createElement("div", {
                className: l,
                onClick: () => (0, r.oo)("/shop"),
                role: "presentation",
                style: {
                    transform: "rotate(-90deg)"
                }
            }, a.createElement(o.A, {
                symbol: "list"
            })))
        },
        133: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = {};
            n.r(a), n.d(a, {
                accordionTitle: function() {
                    return l
                },
                categoryContainer: function() {
                    return c
                },
                content: function() {
                    return m
                },
                filterContainer: function() {
                    return s
                },
                filters: function() {
                    return i
                },
                loadMoreContainer: function() {
                    return u
                },
                metaContainer: function() {
                    return d
                },
                root: function() {
                    return b
                }
            });
            var r = n(4506),
                o = n(6540),
                l = "shopV2-module--accordionTitle--7b2f9",
                c = "shopV2-module--categoryContainer--cb187",
                m = "shopV2-module--content--7ef29",
                s = "shopV2-module--filterContainer--2ec99",
                i = "shopV2-module--filters--7a275",
                u = "shopV2-module--loadMoreContainer--cd6e8",
                d = "shopV2-module--metaContainer--56e0b",
                b = "shopV2-module--root--4f53a",
                p = n(1646),
                f = n(3466),
                h = n(5182),
                E = n(6775),
                v = n(3517),
                k = n(4310),
                y = n(6569),
                C = n(8019),
                g = n(8127),
                N = n(1219),
                x = n(6145);
            var A = e => {
                const t = (0, x.v)(9, "woman"),
                    n = N.uW,
                    {
                        0: l,
                        1: c
                    } = (0, o.useState)(n);
                return o.createElement(k.A, null, o.createElement("div", {
                    className: b
                }, o.createElement(v.A, {
                    size: "large",
                    spacing: "min"
                }, o.createElement(h.A, {
                    crumbs: [{
                        link: "/",
                        label: "Home"
                    }, {
                        label: "Woman"
                    }]
                })), o.createElement(f.A, {
                    maxWidth: "650px",
                    name: "Woman",
                    subtitle: "Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood."
                }), o.createElement(v.A, {
                    size: "large",
                    spacing: "min"
                }, o.createElement("div", {
                    className: m
                }, o.createElement("div", {
                    className: s
                }, l.map(((e, t) => o.createElement("div", {
                    key: t
                }, o.createElement(p.A, {
                    customStyle: a,
                    title: e.category
                }, e.items.map(((e, n) => o.createElement("div", {
                    key: n,
                    className: i
                }, o.createElement(E.A, {
                    size: "sm",
                    action: e => ((e, t, n) => {
                        const a = (0, r.A)(l);
                        a[t].items[n].value = !e.target.value, c(a)
                    })(e, t, n),
                    label: e.name,
                    value: e.value,
                    id: e.name,
                    name: e.name
                }))))))))), o.createElement("div", null, o.createElement("div", {
                    className: d
                }, o.createElement("span", {
                    className: "standardSpan"
                }, "476 items")), o.createElement(C.A, {
                    height: "440px",
                    data: t
                }))), o.createElement("div", {
                    className: u
                }, o.createElement("span", null, "6 of 456"), o.createElement(g.A, {
                    fullWidth: !0,
                    level: "secondary"
                }, "LOAD MORE")))), o.createElement(y.A, null))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-shop-v-2-js-8292707cb1dd512649bd.js.map