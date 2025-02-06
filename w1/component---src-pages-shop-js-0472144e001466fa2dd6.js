"use strict";
(self.webpackChunkgatsby_ecommerce_theme = self.webpackChunkgatsby_ecommerce_theme || []).push([
    [883], {
        3466: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return r
                }
            });
            var a = l(6540),
                n = l(2954);
            var r = e => {
                const {
                    maxWidth: t,
                    name: l,
                    subtitle: r,
                    color: o,
                    bgImage: m,
                    height: c,
                    bgColor: s = "var(--standard-light-grey)",
                    hideSubtitleOnMobile: i = !0
                } = e, d = {
                    backgroundColor: s,
                    backgroundImage: void 0 !== m ? "url(" + (0, n.S7)(m) + ")" : "none",
                    height: c,
                    color: o
                };
                return a.createElement("div", {
                    className: "Banner-module--root--d0b7f",
                    style: d
                }, a.createElement("div", {
                    className: "Banner-module--content--07f4d",
                    style: {
                        maxWidth: t
                    }
                }, a.createElement("h2", null, l), r && a.createElement("span", {
                    className: "Banner-module--subtitle--48de9 " + (!0 === i ? "Banner-module--hideSubtitleOnMobile--be27b" : "")
                }, r)))
            }
        },
        5182: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return o
                }
            });
            var a = l(6540),
                n = "BreadCrumbs-module--crumb--3257d",
                r = l(5863);
            var o = e => {
                let {
                    crumbs: t
                } = e, l = t;
                return l && "object" != typeof l && (l = l.indexOf(">") > -1 ? l.split(">") : [l]), a.createElement("div", {
                    "data-breadcrumbs": !0,
                    className: "BreadCrumbs-module--breadcrumbs--f7ddc"
                }, l && l.map(((e, t) => a.createElement("span", {
                    key: t
                }, t > 0 && a.createElement("span", {
                    className: "BreadCrumbs-module--spacer--95034"
                }, a.createElement(r.A, {
                    symbol: "caret"
                })), "object" == typeof e && "link" in e && a.createElement("a", {
                    className: n,
                    href: e.link
                }, e.label.trim()), "object" == typeof e && !("link" in e) && a.createElement("span", {
                    className: n
                }, e.label.trim()), "object" != typeof e && a.createElement("span", {
                    className: n
                }, e.trim())))))
            }
        },
        6775: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return b
                }
            });
            var a = {};
            l.r(a), l.d(a, {
                box: function() {
                    return r
                },
                checkboxWrapper: function() {
                    return o
                },
                innerBox: function() {
                    return m
                },
                input: function() {
                    return c
                },
                inputWrapper: function() {
                    return s
                },
                label: function() {
                    return i
                },
                md: function() {
                    return d
                },
                sm: function() {
                    return u
                }
            });
            var n = l(6540),
                r = "Checkbox-module--box--73232",
                o = "Checkbox-module--checkboxWrapper--8c5e4",
                m = "Checkbox-module--innerBox--6b143",
                c = "Checkbox-module--input--5ec8a",
                s = "Checkbox-module--inputWrapper--62cbd",
                i = "Checkbox-module--label--d405b",
                d = "Checkbox-module--md--a6247",
                u = "Checkbox-module--sm--519e9";
            var b = e => {
                const {
                    value: t,
                    label: l,
                    id: d,
                    name: u,
                    action: b,
                    isChecked: C,
                    size: E = "md"
                } = e;
                return n.createElement("div", {
                    className: o
                }, n.createElement("div", {
                    className: s
                }, n.createElement("input", {
                    type: "checkbox",
                    className: c,
                    id: d,
                    value: t,
                    name: u,
                    "data-label": l,
                    onChange: e => b(e),
                    checked: C
                }), n.createElement("span", {
                    className: r + " " + a[E],
                    role: "presentation",
                    style: {
                        width: E + "px",
                        height: E + "px"
                    }
                }, n.createElement("span", {
                    className: m
                }))), n.createElement("label", {
                    className: i,
                    forhtml: d
                }, l))
            }
        },
        8272: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return a.A
                }
            });
            var a = l(4310)
        },
        6569: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return m
                }
            });
            var a = l(6540),
                n = l(4810),
                r = l(5863),
                o = "LayoutOption-module--layoutIconContainer--a412d";
            var m = e => a.createElement("div", {
                className: "LayoutOption-module--root--9316a"
            }, a.createElement("div", {
                className: o,
                onClick: () => (0, n.oo)("/shopV2"),
                role: "presentation"
            }, a.createElement(r.A, {
                symbol: "list"
            })), a.createElement("div", {
                className: o,
                onClick: () => (0, n.oo)("/shop"),
                role: "presentation",
                style: {
                    transform: "rotate(-90deg)"
                }
            }, a.createElement(r.A, {
                symbol: "list"
            })))
        },
        1994: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var a = l(6540),
                n = "shop-module--iconContainer--4dc3e",
                r = l(3466),
                o = l(5182),
                m = l(4506),
                c = l(3517),
                s = l(6775),
                i = "CardController-module--customButtonStyling--20952",
                d = l(8127),
                u = l(1017),
                b = l(5863);
            var C = e => {
                const {
                    filters: t,
                    visible: l,
                    closeFilter: n
                } = e, {
                    0: r,
                    1: o
                } = (0, a.useState)(), {
                    0: C,
                    1: E
                } = (0, a.useState)(t), p = (e, t, l) => {
                    const a = (0, m.A)(C);
                    a[t].items[l].value = e.target.checked, E(a)
                };
                return a.createElement("div", null, a.createElement("div", {
                    className: "CardController-module--webRoot--90e3e " + (!0 === l ? "CardController-module--show--6e24d" : "CardController-module--hide--6dff4")
                }, a.createElement(c.A, null, a.createElement("div", {
                    className: "CardController-module--filterContainer--601b9"
                }, C && C.map(((e, t) => {
                    const l = e.items.length >= 4 ? 2 : 1;
                    return a.createElement("div", {
                        key: "category-" + t
                    }, a.createElement("span", {
                        className: "CardController-module--category--8b4cf"
                    }, e.category), a.createElement("div", {
                        className: "CardController-module--nameContainers--b41f5",
                        style: {
                            gridTemplateColumns: "repeat(" + l + ", 1fr)"
                        }
                    }, e.items && e.items.map(((e, l) => a.createElement(s.A, {
                        key: l,
                        action: e => p(e, t, l),
                        label: e.name,
                        value: e.value,
                        id: e.name,
                        name: e.name,
                        isChecked: e.value
                    })))))
                })))), a.createElement("div", {
                    className: "CardController-module--actionContainer--a6cca"
                }, a.createElement(d.A, {
                    onClick: n,
                    className: i,
                    level: "primary"
                }, "view items"), a.createElement(d.A, {
                    onClick: n,
                    className: i,
                    level: "secondary"
                }, "close"))), a.createElement("div", {
                    className: "CardController-module--mobileRoot--e4621"
                }, a.createElement(u.A, {
                    visible: l,
                    close: n
                }, a.createElement("div", {
                    className: "CardController-module--mobileFilterContainer--57fbd"
                }, a.createElement("h2", {
                    className: "CardController-module--mobileFilterTitle--8309e"
                }, "Filters"), void 0 === r && a.createElement("div", {
                    className: "CardController-module--mobileFilters--14be6"
                }, null == C ? void 0 : C.map(((e, t) => a.createElement("div", {
                    key: t,
                    className: "CardController-module--filterItemContainer--c4662",
                    role: "presentation",
                    onClick: () => o({ ...e,
                        categoryIndex: t
                    })
                }, a.createElement("span", {
                    className: "CardController-module--filterName--2c59b"
                }, e.category), a.createElement(b.A, {
                    symbol: "arrow"
                }))))), void 0 !== r && a.createElement("div", {
                    className: "CardController-module--mobileCategoryContainer--272d8"
                }, a.createElement("div", {
                    className: "CardController-module--mobileHeader--51b9b",
                    role: "presentation",
                    onClick: () => o(void 0)
                }, a.createElement(b.A, {
                    symbol: "arrow"
                }), a.createElement("span", {
                    className: "CardController-module--mobileCategory--81e72"
                }, r.category)), r.items.map(((e, t) => a.createElement(s.A, {
                    key: t,
                    action: e => p(e, r.categoryIndex, t),
                    label: e.name,
                    value: e.value,
                    id: e.name,
                    name: e.name,
                    isChecked: e.value
                })))), a.createElement("div", {
                    className: "CardController-module--mobileButtonContainer--e10b9"
                }, void 0 === r && a.createElement(d.A, {
                    fullWidth: !0,
                    level: "primary"
                }, "show results: 1234"), void 0 !== r && a.createElement("div", null, a.createElement(d.A, {
                    onClick: n,
                    fullWidth: !0,
                    level: "primary"
                }, "Apply"), a.createElement("div", {
                    className: "CardController-module--clearFilterContainer--7c5ec",
                    role: "presentation",
                    onClick: () => (() => {
                        const e = (0, m.A)(C);
                        for (let t = 0; t < e.length; t++)
                            for (let l = 0; l < e[t].items.length; l++) e[t].items[l].value = !1;
                        E(e)
                    })()
                }, a.createElement("span", {
                    className: "CardController-module--clearFilter--26d9b"
                }, "clear filters"))))))))
            };
            var E = e => {
                    const {
                        name: t,
                        close: l
                    } = e;
                    return a.createElement("div", {
                        className: "Chip-module--root--b4116",
                        role: "presentation",
                        onClick: l
                    }, a.createElement("span", null, t), a.createElement(b.A, {
                        symbol: "cross"
                    }))
                },
                p = l(8272),
                v = l(6569),
                h = l(8019),
                f = l(6145),
                y = l(1219);
            var N = e => {
                const {
                    0: t,
                    1: l
                } = (0, a.useState)(!1), m = (0, f.v)(6, "woman");
                (0, a.useEffect)((() => (window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s))), []);
                const s = e => {
                    void 0 !== (null == e ? void 0 : e.keyCode) && 27 === e.keyCode && l(!1)
                };
                return a.createElement(p.A, null, a.createElement("div", {
                    className: "shop-module--root--ce402"
                }, a.createElement(c.A, {
                    size: "large",
                    spacing: "min"
                }, a.createElement("div", {
                    className: "shop-module--breadcrumbContainer--ff770"
                }, a.createElement(o.A, {
                    crumbs: [{
                        link: "/",
                        label: "Home"
                    }, {
                        link: "/",
                        label: "Woman"
                    }, {
                        label: "Sweaters"
                    }]
                }))), a.createElement(r.A, {
                    maxWidth: "650px",
                    name: "Woman's Sweaters",
                    subtitle: "Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood."
                }), a.createElement(c.A, {
                    size: "large",
                    spacing: "min"
                }, a.createElement("div", {
                    className: "shop-module--metaContainer--f96c1"
                }, a.createElement("span", {
                    className: "shop-module--itemCount--b09b3"
                }, "476 items"), a.createElement("div", {
                    className: "shop-module--controllerContainer--a756d"
                }, a.createElement("div", {
                    className: n,
                    role: "presentation",
                    onClick: () => l(!t)
                }, a.createElement(b.A, {
                    symbol: "filter"
                }), a.createElement("span", null, "Filters")), a.createElement("div", {
                    className: n + " shop-module--sortContainer--b6d9e"
                }, a.createElement("span", null, "Sort by"), a.createElement(b.A, {
                    symbol: "caret"
                })))), a.createElement(C, {
                    closeFilter: () => l(!1),
                    visible: t,
                    filters: y.uW
                }), a.createElement("div", {
                    className: "shop-module--chipsContainer--51b79"
                }, a.createElement(E, {
                    name: "XS"
                }), a.createElement(E, {
                    name: "S"
                })), a.createElement("div", {
                    className: "shop-module--productContainer--f112a"
                }, a.createElement("span", {
                    className: "shop-module--mobileItemCount--61b75"
                }, "476 items"), a.createElement(h.A, {
                    data: m
                })), a.createElement("div", {
                    className: "shop-module--loadMoreContainer--d3ad8"
                }, a.createElement("span", null, "6 of 456"), a.createElement(d.A, {
                    fullWidth: !0,
                    level: "secondary"
                }, "LOAD MORE")))), a.createElement(v.A, null))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-shop-js-0472144e001466fa2dd6.js.map