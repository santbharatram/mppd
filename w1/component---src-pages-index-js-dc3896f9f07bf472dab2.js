"use strict";
(self.webpackChunkgatsby_ecommerce_theme = self.webpackChunkgatsby_ecommerce_theme || []).push([
    [293], {
        8520: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return o
                }
            });
            var a = l(6540),
                n = l(5863);
            var i = e => {
                const {
                    icon: t,
                    title: l,
                    subtitle: i
                } = e;
                return a.createElement("div", {
                    className: "Attribute-module--root--d11a4"
                }, a.createElement("div", {
                    className: "Attribute-module--iconContainer--81ef8"
                }, a.createElement(n.A, {
                    symbol: t
                })), a.createElement("span", {
                    className: "Attribute-module--title--afe18"
                }, l), a.createElement("span", {
                    className: "Attribute-module--subtitle--6e815"
                }, i))
            };
            var o = e => a.createElement("div", {
                className: "AttributeGrid-module--root--3d4b0"
            }, a.createElement(i, {
                icon: "delivery",
                title: "free delivery worldwide",
                subtitle: "Click to learn more"
            }), a.createElement(i, {
                icon: "cycle",
                title: "returns",
                subtitle: "Return goods in 30 days"
            }), a.createElement(i, {
                icon: "creditcard",
                title: "secured payment",
                subtitle: "Shop safely"
            }))
        },
        4110: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return a.A
                }
            });
            var a = l(8520)
        },
        7512: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return r
                }
            });
            var a = l(6540),
                n = l(4810),
                i = l(2954);
            var o = e => {
                const {
                    image: t,
                    altImage: l,
                    title: o,
                    link: r,
                    category: c,
                    showExcerpt: m,
                    excerpt: s
                } = e;
                return a.createElement("div", {
                    className: "BlogPreview-module--root--e7023",
                    onClick: () => {
                        (0, n.oo)(r)
                    }
                }, a.createElement("img", {
                    className: "BlogPreview-module--blogPreviewImage--3dd51",
                    alt: l,
                    src: (0, i.S7)(t),
                    role: "figure"
                }), a.createElement("span", {
                    className: "BlogPreview-module--category--ad951"
                }, c), a.createElement("h4", {
                    className: "BlogPreview-module--title--67522"
                }, a.createElement(n.N_, {
                    to: r
                }, o)), m && a.createElement("p", {
                    className: "BlogPreview-module--excerpt--be3c5"
                }, s))
            };
            var r = e => {
                const {
                    data: t,
                    hideReadMoreOnWeb: l,
                    showExcerpt: n
                } = e;
                return a.createElement("div", {
                    className: "BlogPreviewGrid-module--root--84743"
                }, t && t.map(((e, t) => a.createElement(o, {
                    key: t,
                    image: e.image,
                    altImage: e.alt,
                    title: e.title,
                    link: e.link,
                    category: e.category,
                    excerpt: e.excerpt,
                    hideReadMoreOnWeb: l,
                    showExcerpt: n
                }))))
            }
        },
        1019: function(e, t, l) {
            l.d(t, {
                A: function() {
                    return r
                }
            });
            var a = l(6540),
                n = l(8127),
                i = l(4810),
                o = l(2954);
            var r = e => {
                const {
                    title: t,
                    subtitle: l,
                    ctaText: r,
                    ctaAction: c,
                    image: m,
                    maxWidth: s,
                    ctaStyle: d,
                    ctaLink: u,
                    ctaTo: g,
                    header: E
                } = e;
                return a.createElement("div", {
                    className: "Hero-module--root--39580",
                    style: {
                        backgroundImage: "url(" + (0, o.S7)(m) + ")"
                    }
                }, a.createElement("div", {
                    className: "Hero-module--content--96d22",
                    style: {
                        maxWidth: s
                    }
                }, E && a.createElement("span", {
                    className: "Hero-module--header--70b1a"
                }, E), t && a.createElement("h2", {
                    className: "Hero-module--title--b7d95"
                }, t), l && a.createElement("span", {
                    className: "Hero-module--subtitle--b24ab"
                }, l), r && a.createElement(n.A, {
                    className: "Hero-module--ctaButton--06285 " + d,
                    level: "primary",
                    onClick: c
                }, r), u && a.createElement(i.N_, {
                    className: "Hero-module--ctaLink--76de6",
                    to: g
                }, u)))
            }
        },
        4843: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var a = l(6540),
                n = l(4110),
                i = l(3517),
                o = l(1019),
                r = l(7512),
                c = l(4810),
                m = l(2954);
            var s = e => {
                    const {
                        image: t,
                        altImage: l,
                        miniImage: n,
                        miniImageAlt: i,
                        title: o,
                        description: r,
                        textLink: s,
                        link: d
                    } = e;
                    return a.createElement("div", {
                        className: "Highlight-module--root--8ebd8"
                    }, a.createElement("img", {
                        alt: l,
                        src: (0, m.S7)(t),
                        className: "Highlight-module--highlightImage--cb62e"
                    }), a.createElement("div", {
                        className: "Highlight-module--contentContainer--bc0f6"
                    }, a.createElement("h3", null, o), a.createElement("p", null, r), a.createElement(c.N_, {
                        to: d
                    }, s), a.createElement("img", {
                        className: "Highlight-module--miniImage--831d4",
                        alt: i,
                        src: (0, m.S7)(n)
                    })))
                },
                d = l(4310);
            var u = e => {
                const {
                    image: t,
                    title: l,
                    text: n,
                    link: i
                } = e;
                return a.createElement("div", {
                    role: "presentation",
                    onClick: () => (0, c.oo)(i),
                    className: "ProductCollection-module--root--b594c",
                    style: {
                        backgroundImage: "url(" + (0, m.S7)(t) + ")"
                    }
                }, a.createElement("div", {
                    className: "ProductCollection-module--content--0998d"
                }, a.createElement("span", {
                    className: "ProductCollection-module--title--b48e6"
                }, l), a.createElement("span", {
                    className: "ProductCollection-module--text--79158"
                }, n)), a.createElement("div", {
                    className: "ProductCollection-module--overlay--b5013"
                }))
            };
            var g = e => a.createElement("div", {
                    className: "ProductCollectionGrid-module--root--b222e"
                }, a.createElement(u, {
                    image: "/collections/collection1.png",
                    title: "Men",
                    text: "SHOP NOW",
                    link: "/shop"
                }), a.createElement(u, {
                    image: "/collections/collection2.png",
                    title: "Women",
                    text: "SHOP NOW",
                    link: "/shop"
                }), a.createElement(u, {
                    image: "/collections/collection3.png",
                    title: "Accessories",
                    text: "SHOP NOW",
                    link: "/shop"
                }), a.createElement(u, {
                    image: "/collections/collection4.png",
                    title: "Simple Cotton",
                    text: "SHOP NOW",
                    link: "/shop"
                })),
                E = l(8019);
            var h = e => {
                const {
                    bgColor: t,
                    title: l,
                    quote: n
                } = e;
                return a.createElement("div", {
                    className: "Quote-module--root--a9a64",
                    style: {
                        backgroundColor: t
                    }
                }, a.createElement("span", null, l), a.createElement("p", null, n))
            };
            var p = e => {
                    const {
                        name: t,
                        subtitle: l,
                        link: n,
                        textLink: i,
                        maxWidth: o,
                        color: r = "var(--standard-black)",
                        hideSubtitleOnMobile: m = !1,
                        marginBottom: s = "32px"
                    } = e;
                    return a.createElement("div", {
                        className: "Title-module--root--edd91 " + (!0 === m ? "Title-module--hideSubtitleOnMobile--116f9" : ""),
                        style: {
                            maxWidth: o,
                            marginBottom: s
                        }
                    }, a.createElement("h2", {
                        className: "Title-module--title--3d8a8",
                        style: {
                            color: r
                        }
                    }, t), l && a.createElement("span", {
                        className: "Title-module--subtitle--b973b"
                    }, l), n && i && a.createElement(c.N_, {
                        className: "Title-module--link--e710d",
                        to: n
                    }, i))
                },
                b = l(6145),
                v = "index-module--gold--2e68a";
            var N = () => {
                const e = (0, b.v)(3, "shirt"),
                    t = (0, b.C)(3);
                return a.createElement(d.A, {
                    disablePaddingBottom: !0
                }, a.createElement(o.A, {
                    maxWidth: "500px",
                    image: "/banner1.png",
                    title: "Essentials for a cold winter",
                    subtitle: "Discover Autumn Winter 2021",
                    ctaText: "shop now",
                    ctaAction: () => {
                        (0, c.oo)("/shop")
                    }
                }), a.createElement("div", {
                    className: "index-module--messageContainer--aea24"
                }, a.createElement("p", null, "Parents Worship Day", " ", a.createElement("span", {
                    className: v
                }, "matter design.")), a.createElement("p", null, "wear by ", a.createElement("span", {
                    className: v
                }, "sunspel"), " and", " ", a.createElement("span", {
                    className: v
                }, "scotch&soda"))), a.createElement("div", {
                    className: "index-module--collectionContainer--bb011"
                }, a.createElement(i.A, {
                    size: "large"
                }, a.createElement(p, {
                    name: "New Collection"
                }), a.createElement(g, null))), a.createElement("div", {
                    className: "index-module--newArrivalsContainer--ff722"
                }, a.createElement(i.A, null, a.createElement(p, {
                    name: "New Arrivals",
                    link: "/shop",
                    textLink: "view all"
                }), a.createElement(E.A, {
                    spacing: !0,
                    showSlider: !0,
                    height: 480,
                    columns: 3,
                    data: e
                }))), a.createElement("div", {
                    className: "index-module--highlightContainer--bc607"
                }, a.createElement(i.A, {
                    size: "large",
                    fullMobile: !0
                }, a.createElement(s, {
                    image: "/highlight.png",
                    altImage: "highlight image",
                    miniImage: "/highlightmin.png",
                    miniImageAlt: "mini highlight image",
                    title: "Luxury Knitwear",
                    description: "This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife",
                    textLink: "shop now",
                    link: "/shop"
                }))), a.createElement("div", {
                    className: "index-module--promotionContainer--66925"
                }, a.createElement(o.A, {
                    image: (0, m.S7)("/banner2.png"),
                    title: "-50% off \n All Essentials"
                }), a.createElement("div", {
                    className: "index-module--linkContainers--e82e1"
                }, a.createElement(c.N_, {
                    to: "/shop"
                }, "WOMAN"), a.createElement(c.N_, {
                    to: "/shop"
                }, "MAN"))), a.createElement(h, {
                    bgColor: "var(--standard-light-grey)",
                    title: "about Parents Worship Day",
                    quote: "“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”"
                }), a.createElement("div", {
                    className: "index-module--blogsContainer--39485"
                }, a.createElement(i.A, {
                    size: "large"
                }, a.createElement(p, {
                    name: "Journal",
                    subtitle: "Notes on life and style"
                }), a.createElement(r.A, {
                    data: t
                }))), a.createElement("div", {
                    className: "index-module--sustainableContainer--cc538"
                }, a.createElement(o.A, {
                    image: (0, m.S7)("/banner3.png"),
                    title: "We are Sustainable",
                    subtitle: "From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.",
                    ctaText: "read more",
                    maxWidth: "660px",
                    ctaStyle: "index-module--ctaCustomButton--12636"
                })), a.createElement("div", {
                    className: "index-module--socialContainer--cf687"
                }, a.createElement(p, {
                    name: "Styled by You",
                    subtitle: "Tag @Parents Worship Day to be featured."
                }), a.createElement("div", {
                    className: "index-module--socialContentGrid--397c3"
                }, a.createElement("img", {
                    src: (0, m.S7)("/social/socialMedia1.png"),
                    alt: "social media 1"
                }), a.createElement("img", {
                    src: (0, m.S7)("/social/socialMedia2.png"),
                    alt: "social media 2"
                }), a.createElement("img", {
                    src: (0, m.S7)("/social/socialMedia3.png"),
                    alt: "social media 3"
                }), a.createElement("img", {
                    src: (0, m.S7)("/social/socialMedia4.png"),
                    alt: "social media 4"
                }))), a.createElement(n.A, null))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-dc3896f9f07bf472dab2.js.map