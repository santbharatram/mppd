"use strict";
(self.webpackChunkgatsby_ecommerce_theme = self.webpackChunkgatsby_ecommerce_theme || []).push([
    [432], {
        1019: function(e, t, a) {
            a.d(t, {
                A: function() {
                    return o
                }
            });
            var n = a(6540),
                l = a(8127),
                r = a(4810),
                s = a(2954);
            var o = e => {
                const {
                    title: t,
                    subtitle: a,
                    ctaText: o,
                    ctaAction: i,
                    image: c,
                    maxWidth: u,
                    ctaStyle: d,
                    ctaLink: m,
                    ctaTo: h,
                    header: f
                } = e;
                return n.createElement("div", {
                    className: "Hero-module--root--39580",
                    style: {
                        backgroundImage: "url(" + (0, s.S7)(c) + ")"
                    }
                }, n.createElement("div", {
                    className: "Hero-module--content--96d22",
                    style: {
                        maxWidth: u
                    }
                }, f && n.createElement("span", {
                    className: "Hero-module--header--70b1a"
                }, f), t && n.createElement("h2", {
                    className: "Hero-module--title--b7d95"
                }, t), a && n.createElement("span", {
                    className: "Hero-module--subtitle--b24ab"
                }, a), o && n.createElement(l.A, {
                    className: "Hero-module--ctaButton--06285 " + d,
                    level: "primary",
                    onClick: i
                }, o), m && n.createElement(r.N_, {
                    className: "Hero-module--ctaLink--76de6",
                    to: h
                }, m)))
            }
        },
        9071: function(e, t, a) {
            a.d(t, {
                A: function() {
                    return r
                }
            });
            var n = a(6540),
                l = a(4810);
            var r = e => {
                let {
                    children: t,
                    to: a,
                    onClick: r,
                    isActive: s,
                    themeRef: o
                } = e;
                return n.createElement("div", {
                    onClick: r,
                    role: "presentation",
                    className: "ThemeLink-module--root--8f6ae " + (!0 === s ? "ThemeLink-module--active--52970" : ""),
                    ref: o
                }, n.createElement(l.N_, {
                    className: "ThemeLink-module--link--f3867",
                    to: a
                }, t))
            }
        },
        9434: function(e, t, a) {
            a.r(t);
            var n = a(6540),
                l = a(3517),
                r = a(1019),
                s = a(9071),
                o = a(4310),
                i = a(8737),
                c = a(2954);
            t.default = e => {
                let t = (0, n.useRef)(),
                    a = (0, n.useRef)(),
                    u = (0, n.useRef)();
                const d = e => {
                    e && window.scrollTo({
                        behavior: "smooth",
                        top: e.current.offsetTop - 280
                    })
                };
                return n.createElement(o.A, {
                    disablePaddingBottom: !0
                }, n.createElement("div", {
                    className: i.zr
                }, n.createElement(r.A, {
                    maxWidth: "900px",
                    image: "/about.png",
                    title: "Parents Worship day \n India Culture"
                }), n.createElement("div", {
                    className: i.xk
                }, n.createElement(s.A, {
                    onClick: () => d(t),
                    to: "#history"
                }, "History"), n.createElement(s.A, {
                    onClick: () => d(a),
                    to: "#values"
                }, "Values"), n.createElement(s.A, {
                    onClick: () => d(u),
                    to: "#sustainability"
                }, "Sustainability")), n.createElement(l.A, {
                    size: "large",
                    spacing: "min"
                }, n.createElement("div", {
                    className: i.nM,
                    ref: t
                }, n.createElement("p", null, "Founded in 1860, Sydney is an innovative British brand with a contemporary edge. We make timeless everyday luxury clothing."), n.createElement("br", null), n.createElement("br", null), n.createElement("p", null, "We created some of the world's first T-shirts and spent decades perfecting the feel of the cotton. Today we are the only brand that makes T-shirts in its own factory in the UK. And we do this in the same factory we have occupied since 1937."))), n.createElement("div", {
                    className: i.ZS
                }, n.createElement("img", {
                    alt: "shirt brand",
                    src: (0, c.S7)("/about1.png")
                })), n.createElement(l.A, {
                    size: "large",
                    spacing: "min"
                }, n.createElement("div", {
                    className: i.Qs
                }, n.createElement("h3", null, "Our Values"), n.createElement("div", {
                    ref: a
                }, n.createElement("p", null, "Sunspel produced some of the world's earliest T-shirts. In the late 1800s the business made luxury tunics and undershirts from lightweight Sea Island cotton for export to the Far East and other warm climates. While these garments initially had silk buttoned plackets, these were removed in the early 1900s and replaced with simple bound necks to reduce manufacturing costs - creating the T-shirt. We've supplied the world as the T-shirt has evolved from underwear to outerwear, from symbol of youthful rebellion to everyday wardrobe staple, and we've spent decades refining its every last aspect."), n.createElement("ol", null, n.createElement("li", null, "Be an ecowear"), n.createElement("li", null, "Sophisticated and not mass-produced"), n.createElement("li", null, "Only natural materials")), n.createElement("img", {
                    alt: "founder",
                    src: (0, c.S7)("/about2.png")
                })), n.createElement("h3", null, "Sustainability"), n.createElement("div", {
                    id: "#sustainability",
                    ref: u
                }, n.createElement("p", null, "Our founder, Thomas Hill, had both an eye for quality and a desire to innovate. As well as using the finest fibres such as Sea Island cotton, cashmere and silk, he invented his own fabrics. Sunspel continues this commitment to innovation today and our unique fabrics include: Q100 Sea Island cotton, Q82 Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit cellular cotton. The technology behind these fabrics remains unchanged today and all Sunspel products use the finest cottons, wools and fibres."), n.createElement("p", null, "Made in Long Eaton, England and crafted from our luxurious long staple Supima cotton for unparalleled softness, comfort and durability, the Sunspel T-shirt has a classic fit and only the most essential details.", " "), n.createElement("p", null, "With over 100 years spent perfecting fabric, fit and style, the Sunspel Classic T-shirt is recognised as the finest in the world.")))), n.createElement("div", {
                    className: i.ZS
                }, n.createElement("img", {
                    alt: "shirt backwards",
                    src: (0, c.S7)("/about3.png")
                }))))
            }
        },
        8737: function(e, t, a) {
            a.d(t, {
                Qs: function() {
                    return n
                },
                ZS: function() {
                    return r
                },
                nM: function() {
                    return l
                },
                xk: function() {
                    return s
                },
                zr: function() {
                    return o
                }
            });
            var n = "about-module--content--a26cb",
                l = "about-module--detailContainer--9fd3e",
                r = "about-module--imageContainer--42d10",
                s = "about-module--navContainer--d8791",
                o = "about-module--root--6061d"
        }
    }
]);
//# sourceMappingURL=component---src-pages-about-js-31b3146a998f416f46b0.js.map