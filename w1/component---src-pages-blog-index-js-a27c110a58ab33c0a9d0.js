"use strict";
(self.webpackChunkgatsby_ecommerce_theme = self.webpackChunkgatsby_ecommerce_theme || []).push([
    [334], {
        7512: function(e, a, t) {
            t.d(a, {
                A: function() {
                    return l
                }
            });
            var s = t(6540),
                o = t(4810),
                r = t(2954);
            var i = e => {
                const {
                    image: a,
                    altImage: t,
                    title: i,
                    link: l,
                    category: n,
                    showExcerpt: c,
                    excerpt: d
                } = e;
                return s.createElement("div", {
                    className: "BlogPreview-module--root--e7023",
                    onClick: () => {
                        (0, o.oo)(l)
                    }
                }, s.createElement("img", {
                    className: "BlogPreview-module--blogPreviewImage--3dd51",
                    alt: t,
                    src: (0, r.S7)(a),
                    role: "figure"
                }), s.createElement("span", {
                    className: "BlogPreview-module--category--ad951"
                }, n), s.createElement("h4", {
                    className: "BlogPreview-module--title--67522"
                }, s.createElement(o.N_, {
                    to: l
                }, i)), c && s.createElement("p", {
                    className: "BlogPreview-module--excerpt--be3c5"
                }, d))
            };
            var l = e => {
                const {
                    data: a,
                    hideReadMoreOnWeb: t,
                    showExcerpt: o
                } = e;
                return s.createElement("div", {
                    className: "BlogPreviewGrid-module--root--84743"
                }, a && a.map(((e, a) => s.createElement(i, {
                    key: a,
                    image: e.image,
                    altImage: e.alt,
                    title: e.title,
                    link: e.link,
                    category: e.category,
                    excerpt: e.excerpt,
                    hideReadMoreOnWeb: t,
                    showExcerpt: o
                }))))
            }
        },
        1019: function(e, a, t) {
            t.d(a, {
                A: function() {
                    return l
                }
            });
            var s = t(6540),
                o = t(8127),
                r = t(4810),
                i = t(2954);
            var l = e => {
                const {
                    title: a,
                    subtitle: t,
                    ctaText: l,
                    ctaAction: n,
                    image: c,
                    maxWidth: d,
                    ctaStyle: m,
                    ctaLink: g,
                    ctaTo: p,
                    header: h
                } = e;
                return s.createElement("div", {
                    className: "Hero-module--root--39580",
                    style: {
                        backgroundImage: "url(" + (0, i.S7)(c) + ")"
                    }
                }, s.createElement("div", {
                    className: "Hero-module--content--96d22",
                    style: {
                        maxWidth: d
                    }
                }, h && s.createElement("span", {
                    className: "Hero-module--header--70b1a"
                }, h), a && s.createElement("h2", {
                    className: "Hero-module--title--b7d95"
                }, a), t && s.createElement("span", {
                    className: "Hero-module--subtitle--b24ab"
                }, t), l && s.createElement(o.A, {
                    className: "Hero-module--ctaButton--06285 " + m,
                    level: "primary",
                    onClick: n
                }, l), g && s.createElement(r.N_, {
                    className: "Hero-module--ctaLink--76de6",
                    to: p
                }, g)))
            }
        },
        9071: function(e, a, t) {
            t.d(a, {
                A: function() {
                    return r
                }
            });
            var s = t(6540),
                o = t(4810);
            var r = e => {
                let {
                    children: a,
                    to: t,
                    onClick: r,
                    isActive: i,
                    themeRef: l
                } = e;
                return s.createElement("div", {
                    onClick: r,
                    role: "presentation",
                    className: "ThemeLink-module--root--8f6ae " + (!0 === i ? "ThemeLink-module--active--52970" : ""),
                    ref: l
                }, s.createElement(o.N_, {
                    className: "ThemeLink-module--link--f3867",
                    to: t
                }, a))
            }
        },
        6145: function(e, a, t) {
            t.d(a, {
                C: function() {
                    return i
                },
                v: function() {
                    return r
                }
            });
            var s = JSON.parse('[{"productCode":"MJUM8066-GYDZ","name":"Lambswool Crew Neck Jumper","vendor":"Sunspel","price":75,"alt":"lambswool crew neck jumper","image":"/products/pdp1.jpeg","colorOptions":[{"color":"#000000","title":"Anthracite Melange"},{"color":"#4D34AE","title":"Pale Purple"},{"color":"#488266","title":"Green Moss"}],"sizeOptions":["xs","s","m","l","xl"],"wishlist":true,"tags":["sample"],"gallery":[{"image":"/products/pdp1.jpeg","alt":"pdp description 1"},{"image":"/products/pdp2.jpeg","alt":"pdp description 2"},{"image":"/products/pdp3.jpeg","alt":"pdp description 3"},{"image":"/products/pdp4.jpeg","alt":"pdp description 4"}],"description":"This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft."},{"name":"Classic T-Shirt","price":75,"alt":"classic t-shirt 1","image":"/products/shirt1.jpg","tags":["shirt","men"]},{"name":"Classic T-Shirt","price":75,"alt":"classic t-shirt 2","image":"/products/shirt2.jpg","tags":["shirt","men"]},{"name":"Classic T-Shirt","price":75,"alt":"classic t-shirt 3","image":"/products/shirt3.jpg","tags":["shirt","men"]},{"name":"Relaxed-fit graphic T-shirt","price":13.9,"alt":"relaxed t shirt woman","image":"/products/woman1.jpeg","tags":["woman"],"meta":"+ 2 colors"},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman2.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":13.9,"alt":"relaxed t shirt woman","image":"/products/woman3.jpeg","tags":["woman"],"meta":"+ 2 colors"},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman4.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman5.jpeg","tags":["woman"],"originalPrice":31.5},{"name":"Relaxed-fit graphic T-shirt","price":21,"alt":"relaxed t shirt woman","image":"/products/woman6.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman3.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman2.jpeg","tags":["woman"],"originalPrice":31.5},{"name":"Relaxed-fit graphic T-shirt","price":21,"alt":"relaxed t shirt woman","image":"/products/woman1.jpeg","tags":["woman"]}]'),
                o = JSON.parse('[{"title":"The new standard of Opening and Closing","category":"design","alt":"blog new standard of closing","image":"/blogs/blog1.png","link":"/blog/sample","excerpt":"London-based seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"London-based seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long established fact that a reader by the readable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog3.png","link":"/blog/sample","excerpt":"London-basedsonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long establishable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog3.png","link":"/blog/sample","excerpt":"London-based floral designer Flora Fricker champions seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long estab the readable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"Loproducers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"The new standard of Opening and Closing","category":"design","alt":"blog new standard of closing","image":"/blogs/blog1.png","link":"/blog/sample","excerpt":"London-based floral tish flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long established fact that a reader by the readable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"London-based floral designer Flora Fricker champions seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long et a reader by the readable t is a long et a reader by the rea","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"London-bs and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."}]');

            function r(e, a) {
                return s.filter((e => e.tags.includes(a))).slice(0, e)
            }

            function i(e) {
                return o.slice(0, e)
            }
        },
        3410: function(e, a, t) {
            t.r(a), t.d(a, {
                default: function() {
                    return g
                }
            });
            var s = t(6540),
                o = t(4810),
                r = t(7512),
                i = t(3517),
                l = t(1019),
                n = t(4310),
                c = t(9071),
                d = t(6145),
                m = t(2954);
            var g = e => {
                const a = (0, d.C)(6);
                return s.createElement(n.A, {
                    disablePaddingBottom: !0
                }, s.createElement("div", {
                    className: "index-module--root--84a4d"
                }, s.createElement(l.A, {
                    maxWidth: "400px",
                    image: (0, m.S7)("/blogCover.png"),
                    title: "The new standard of Closing",
                    ctaLink: "read story",
                    ctaTo: "/blog/sample",
                    header: "design"
                }), s.createElement("div", {
                    className: "index-module--navContainer--b967e"
                }, s.createElement(c.A, {
                    onClick: () => (0, o.oo)("/blog/sample"),
                    to: "/blog/sample"
                }, "All Posts"), s.createElement(c.A, {
                    onClick: () => (0, o.oo)("/blog/sample"),
                    to: "/blog/sample"
                }, "Design"), s.createElement(c.A, {
                    onClick: () => (0, o.oo)("/blog/sample"),
                    to: "/blog/sample"
                }, "Collaboration"), s.createElement(c.A, {
                    onClick: () => (0, o.oo)("/blog/sample"),
                    to: "/blog/sample"
                }, "Interview"), s.createElement(c.A, {
                    onClick: () => (0, o.oo)("/blog/sample"),
                    to: "/blog/sample"
                }, "News")), s.createElement("div", {
                    className: "index-module--blogsContainer--dd2f8"
                }, s.createElement(i.A, {
                    size: "large"
                }, s.createElement(r.A, {
                    data: a,
                    hideReadMoreOnWeb: !0,
                    showExcerpt: !0
                })))))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-blog-index-js-a27c110a58ab33c0a9d0.js.map