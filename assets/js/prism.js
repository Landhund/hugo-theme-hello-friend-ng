/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+arduino+asciidoc+autohotkey+bash+c+cpp+css-extras+csv+dart+docker+git+http+hpkp+hsts+ini+java+javadoclike+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+latex+log+makefile+markdown+mermaid+powershell+regex+ruby+rust+sass+scss+shell-session+sql+toml+typescript+typoscript+wiki+yaml&plugins=line-numbers+autolinker+file-highlight+show-language+highlight-keywords+previewers+keep-markup+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+match-braces */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i ? new i(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (t = t || {}, a.util.type(n)) {
                            case "Object":
                                if (i = a.util.objId(n), t[i]) return t[i];
                                for (var l in r = {}, t[i] = r, n) n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case "Array":
                                return i = a.util.objId(n), t[i] ? t[i] : (r = [], t[i] = r, n.forEach((function(n, a) {
                                    r[a] = e(n, t)
                                })), r);
                            default:
                                return n
                        }
                    },
                    getLanguage: function(e) {
                        for (; e;) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function(e, t) {
                        e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t)
                    },
                    currentScript: function() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName("script");
                                for (var t in n)
                                    if (n[t].src == e) return n[t]
                            }
                            return null
                        }
                    },
                    isActive: function(e, n, t) {
                        for (var r = "no-" + n; e;) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!t
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function(e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t
                    },
                    insertBefore: function(e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o])
                            } var u = r[e];
                        return r[e] = l, a.languages.DFS(a.languages, (function(n, t) {
                            t === u && n != e && (this[n] = l)
                        })), l
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                "Object" !== u || i[l(s)] ? "Array" !== u || i[l(s)] || (i[l(s)] = !0, e(s, t, o, i)) : (i[l(s)] = !0, e(s, t, null, i))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, n) {
                    a.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function(e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
                    for (var i, l = 0; i = r.elements[l++];) a.highlightElement(i, !0 === n, r.callback)
                },
                highlightElement: function(n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent
                    };

                    function u(e) {
                        s.highlightedCode = e, a.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a.hooks.run("after-highlight", s), a.hooks.run("complete", s), r && r.call(s.element)
                    }
                    if (a.hooks.run("before-sanity-check", s), (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !s.code) return a.hooks.run("complete", s), void(r && r.call(s.element));
                    if (a.hooks.run("before-highlight", s), s.grammar)
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            c.onmessage = function(e) {
                                u(e.data)
                            }, c.postMessage(JSON.stringify({
                                language: s.language,
                                code: s.code,
                                immediateClose: !0
                            }))
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code))
                },
                highlight: function(e, n, t) {
                    var r = {
                        code: e,
                        grammar: n,
                        language: t
                    };
                    if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
                    return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), i.stringify(a.util.encode(r.tokens), r.language)
                },
                tokenize: function(e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest
                    }
                    var a = new s;
                    return u(a, a.head, e), o(e, a, n, a.head, 0),
                        function(e) {
                            for (var n = [], t = e.head.next; t !== e.tail;) n.push(t.value), t = t.next;
                            return n
                        }(a)
                },
                hooks: {
                    all: {},
                    add: function(e, n) {
                        var t = a.hooks.all;
                        t[e] = t[e] || [], t[e].push(n)
                    },
                    run: function(e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; r = t[i++];) r(n)
                    }
                },
                Token: i
            };

        function i(e, n, t, r) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
        }

        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                a.index += i, a[0] = a[0].slice(i)
            }
            return a
        }

        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + "," + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + "g")
                        }
                        for (var b = v.pattern || v, w = r.next, A = s; w !== n.tail && !(g && A >= g.reach); A += w.value.length, w = w.next) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P, L = 1;
                                if (y) {
                                    if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j;) j += (w = w.next).value.length;
                                    if (A = j -= w.value.length, w.value instanceof i) continue;
                                    for (var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next) L++, j += C.value.length;
                                    L--, E = e.slice(A, j), P.index -= A
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (_ && (z = u(n, z, _), A += _.length), c(n, z, L), w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N)), M && u(n, w, M), L > 1) {
                                    var I = {
                                        cause: f + "," + d,
                                        reach: W
                                    };
                                    o(e, n, t, w.prev, A, I), g && I.reach > g.reach && (g.reach = I.reach)
                                }
                            }
                        }
                    }
                }
        }

        function s() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                n = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function u(e, n, t) {
            var r = n.next,
                a = {
                    value: t,
                    prev: n,
                    next: r
                };
            return n.next = a, r.prev = a, e.length++, a
        }

        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            n.next = r, r.prev = n, e.length -= a
        }
        if (e.Prism = a, i.stringify = function e(n, t) {
                if ("string" == typeof n) return n;
                if (Array.isArray(n)) {
                    var r = "";
                    return n.forEach((function(n) {
                        r += e(n, t)
                    })), r
                }
                var i = {
                        type: n.type,
                        content: e(n.content, t),
                        tag: "span",
                        classes: ["token", n.type],
                        attributes: {},
                        language: t
                    },
                    l = n.alias;
                l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), a.hooks.run("wrap", i);
                var o = "";
                for (var s in i.attributes) o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
                return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
            }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", (function(n) {
            var t = JSON.parse(n.data),
                r = t.language,
                i = t.code,
                l = t.immediateClose;
            e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close()
        }), !1), a) : a;
        var g = a.util.currentScript();

        function f() {
            a.manual || a.highlightAll()
        }
        if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
            var h = document.readyState;
            "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16)
        }
        return a
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
})), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        t["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var n = {};
        n[a] = {
            pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, (function() {
                return a
            })), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, Prism.languages.insertBefore("markup", "cdata", n)
    }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function(a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [e, "language-" + e],
                            inside: Prism.languages[e]
                        },
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                }
            }
        })
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
! function(s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + e.source + ")*?(?:;|(?=\\s*\\{))"),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + e.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {
            pattern: e,
            greedy: !0
        },
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
    char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: !0
    }
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{
                pattern: /^(#\s*include\s*)<[^>]+>/,
                lookbehind: !0
            }, Prism.languages.c.string],
            char: Prism.languages.c.char,
            comment: Prism.languages.c.comment,
            "macro-name": [{
                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                lookbehind: !0
            }, {
                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                lookbehind: !0,
                alias: "function"
            }],
            directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    }
}), Prism.languages.insertBefore("c", "function", {
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
}), delete Prism.languages.c.boolean;
! function(e) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, (function() {
            return t.source
        }));
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, (function() {
                return t.source
            }))),
            lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    }), e.languages.insertBefore("cpp", "string", {
        module: {
            pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, (function() {
                return n
            })) + ")"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: /^[<"][\s\S]+/,
                operator: /:/,
                punctuation: /\./
            }
        },
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }), e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
                function: /^\w+/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp
                }
            }
        }
    }), e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    }), e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }), e.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"])
}(Prism);
Prism.languages.arduino = Prism.languages.extend("cpp", {
    keyword: /\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,
    constant: /\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,
    builtin: /\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/
}), Prism.languages.ino = Prism.languages.arduino;
! function(t) {
    var n = {
            pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,
            lookbehind: !0,
            inside: {
                quoted: {
                    pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
                    inside: {
                        punctuation: /^[$`]|[$`]$/
                    }
                },
                interpreted: {
                    pattern: /'(?:[^'\\]|\\.)*'/,
                    inside: {
                        punctuation: /^'|'$/
                    }
                },
                string: /"(?:[^"\\]|\\.)*"/,
                variable: /\w+(?==)/,
                punctuation: /^\[|\]$|,/,
                operator: /=/,
                "attr-value": /(?!^\s+$).+/
            }
        },
        i = t.languages.asciidoc = {
            "comment-block": {
                pattern: /^(\/{4,})$[\s\S]*?^\1/m,
                alias: "comment"
            },
            table: {
                pattern: /^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,
                inside: {
                    specifiers: {
                        pattern: /(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,
                        alias: "attr-value"
                    },
                    punctuation: {
                        pattern: /(^|[^\\])[|!]=*/,
                        lookbehind: !0
                    }
                }
            },
            "passthrough-block": {
                pattern: /^(\+{4,})$[\s\S]*?^\1$/m,
                inside: {
                    punctuation: /^\++|\++$/
                }
            },
            "literal-block": {
                pattern: /^(-{4,}|\.{4,})$[\s\S]*?^\1$/m,
                inside: {
                    punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
                }
            },
            "other-block": {
                pattern: /^(--|\*{4,}|_{4,}|={4,})$[\s\S]*?^\1$/m,
                inside: {
                    punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
                }
            },
            "list-punctuation": {
                pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
                lookbehind: !0,
                alias: "punctuation"
            },
            "list-label": {
                pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
                lookbehind: !0,
                alias: "symbol"
            },
            "indented-block": {
                pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
                lookbehind: !0
            },
            comment: /^\/\/.*/m,
            title: {
                pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,
                alias: "important",
                inside: {
                    punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
                }
            },
            "attribute-entry": {
                pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
                alias: "tag"
            },
            attributes: n,
            hr: {
                pattern: /^'{3,}$/m,
                alias: "punctuation"
            },
            "page-break": {
                pattern: /^<{3,}$/m,
                alias: "punctuation"
            },
            admonition: {
                pattern: /^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,
                alias: "keyword"
            },
            callout: [{
                pattern: /(^[ \t]*)<?\d*>/m,
                lookbehind: !0,
                alias: "symbol"
            }, {
                pattern: /<\d+>/,
                alias: "symbol"
            }],
            macro: {
                pattern: /\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                inside: {
                    function: /^[a-z\d-]+(?=:)/,
                    punctuation: /^::?/,
                    attributes: {
                        pattern: /(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                        inside: n.inside
                    }
                }
            },
            inline: {
                pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
                lookbehind: !0,
                inside: {
                    attributes: n,
                    url: {
                        pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                        inside: {
                            punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
                        }
                    },
                    "attribute-ref": {
                        pattern: /^\{.+\}$/,
                        inside: {
                            variable: {
                                pattern: /(^\{)[a-z\d,+_-]+/,
                                lookbehind: !0
                            },
                            operator: /^[=?!#%@$]|!(?=[:}])/,
                            punctuation: /^\{|\}$|::?/
                        }
                    },
                    italic: {
                        pattern: /^(['_])[\s\S]+\1$/,
                        inside: {
                            punctuation: /^(?:''?|__?)|(?:''?|__?)$/
                        }
                    },
                    bold: {
                        pattern: /^\*[\s\S]+\*$/,
                        inside: {
                            punctuation: /^\*\*?|\*\*?$/
                        }
                    },
                    punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
                }
            },
            replacement: {
                pattern: /\((?:C|R|TM)\)/,
                alias: "builtin"
            },
            entity: /&#?[\da-z]{1,8};/i,
            "line-continuation": {
                pattern: /(^| )\+$/m,
                lookbehind: !0,
                alias: "punctuation"
            }
        };

    function e(t) {
        for (var n = {}, e = 0, a = (t = t.split(" ")).length; e < a; e++) n[t[e]] = i[t[e]];
        return n
    }
    n.inside.interpreted.inside.rest = e("macro inline replacement entity"), i["passthrough-block"].inside.rest = e("macro"), i["literal-block"].inside.rest = e("callout"), i.table.inside.rest = e("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"), i["other-block"].inside.rest = e("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"), i.title.inside.rest = e("macro inline replacement entity"), t.hooks.add("wrap", (function(t) {
        "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
    })), t.languages.adoc = t.languages.asciidoc
}(Prism);
Prism.languages.autohotkey = {
    comment: [{
        pattern: /(^|\s);.*/,
        lookbehind: !0
    }, {
        pattern: /(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,
        lookbehind: !0,
        greedy: !0
    }],
    tag: {
        pattern: /^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,
        lookbehind: !0
    },
    string: /"(?:[^"\n\r]|"")*"/,
    variable: /%\w+%/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
    operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
    boolean: /\b(?:false|true)\b/,
    command: {
        pattern: /\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
        alias: "selector"
    },
    constant: /\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,
    builtin: /\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,
    symbol: /\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
    directive: {
        pattern: /#[a-z]+\b/i,
        alias: "important"
    },
    keyword: /\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,
    function: /[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,
    punctuation: /[{}[\]():,]/
};
! function(e) {
    var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
        a = {
            pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
            lookbehind: !0,
            alias: "punctuation",
            inside: null
        },
        n = {
            bash: a,
            environment: {
                pattern: RegExp("\\$" + t),
                alias: "constant"
            },
            variable: [{
                pattern: /\$?\(\([\s\S]+?\)\)/,
                greedy: !0,
                inside: {
                    variable: [{
                        pattern: /(^\$\(\([\s\S]+)\)\)/,
                        lookbehind: !0
                    }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/
                }
            }, {
                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                greedy: !0,
                inside: {
                    variable: /^\$\(|^`|\)$|`$/
                }
            }, {
                pattern: /\$\{[^}]+\}/,
                greedy: !0,
                inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                        pattern: RegExp("(\\{)" + t),
                        lookbehind: !0,
                        alias: "constant"
                    }
                }
            }, /\$(?:\w+|[#?*!@$])/],
            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
        };
    e.languages.bash = {
        shebang: {
            pattern: /^#!\s*\/.*/,
            alias: "important"
        },
        comment: {
            pattern: /(^|[^"{\\$])#.*/,
            lookbehind: !0
        },
        "function-name": [{
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: !0,
            alias: "function"
        }, {
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
        }],
        "for-or-select": {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: "variable",
            lookbehind: !0
        },
        "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
            inside: {
                environment: {
                    pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                    lookbehind: !0,
                    alias: "constant"
                }
            },
            alias: "variable",
            lookbehind: !0
        },
        parameter: {
            pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
            alias: "variable",
            lookbehind: !0
        },
        string: [{
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                bash: a
            }
        }, {
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, {
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: !0,
            inside: {
                entity: n.entity
            }
        }],
        environment: {
            pattern: RegExp("\\$?" + t),
            alias: "constant"
        },
        variable: n.variable,
        function: {
            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        builtin: {
            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: "class-name"
        },
        boolean: {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        "file-descriptor": {
            pattern: /\B&\d\b/,
            alias: "important"
        },
        operator: {
            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {
                "file-descriptor": {
                    pattern: /^\d/,
                    alias: "important"
                }
            }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: !0
        }
    }, a.inside = e.languages.bash;
    for (var s = ["comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], o = n.variable[1].inside, i = 0; i < s.length; i++) o[s[i]] = e.languages.bash[s[i]];
    e.languages.sh = e.languages.bash, e.languages.shell = e.languages.bash
}(Prism);
! function(e) {
    var a, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css.selector = {
        pattern: e.languages.css.selector.pattern,
        lookbehind: !0,
        inside: a = {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                    punctuation: /^\[|\]$/,
                    "case-sensitivity": {
                        pattern: /(\s)[si]$/i,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    namespace: {
                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\|$/
                        }
                    },
                    "attr-name": {
                        pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                        lookbehind: !0
                    },
                    "attr-value": [n, {
                        pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                        lookbehind: !0
                    }],
                    operator: /[|~*^$]?=/
                }
            },
            "n-th": [{
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: {
                    number: /[\dn]+/,
                    operator: /[+-]/
                }
            }, {
                pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                lookbehind: !0
            }],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/
        }
    }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
        variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
            lookbehind: !0
        }
    });
    var r = {
            pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
            lookbehind: !0
        },
        i = {
            pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
            lookbehind: !0
        };
    e.languages.insertBefore("css", "function", {
        operator: {
            pattern: /(\s)[+\-*\/](?=\s)/,
            lookbehind: !0
        },
        hexcode: {
            pattern: /\B#[\da-f]{3,8}\b/i,
            alias: "color"
        },
        color: [{
            pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
            lookbehind: !0
        }, {
            pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
            inside: {
                unit: r,
                number: i,
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
            }
        }],
        entity: /\\[\da-f]{1,8}/i,
        unit: r,
        number: i
    })
}(Prism);
Prism.languages.csv = {
    value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
    punctuation: /,/
};
! function(e) {
    var a = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],
        n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        s = {
            pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                }
            }
        };
    e.languages.dart = e.languages.extend("clike", {
        "class-name": [s, {
            pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
            lookbehind: !0,
            inside: s.inside
        }],
        keyword: a,
        operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
    }), e.languages.insertBefore("dart", "string", {
        "string-literal": {
            pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /^\$\{?|\}$/,
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: e.languages.dart
                        }
                    }
                },
                string: /[\s\S]+/
            }
        },
        string: void 0
    }), e.languages.insertBefore("dart", "class-name", {
        metadata: {
            pattern: /@\w+/,
            alias: "function"
        }
    }), e.languages.insertBefore("dart", "class-name", {
        generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
                "class-name": s,
                keyword: a,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        }
    })
}(Prism);
! function(e) {
    var n = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, (function() {
            return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"
        })),
        r = "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
        t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g, (function() {
            return r
        })),
        o = {
            pattern: RegExp(r),
            greedy: !0
        },
        i = {
            pattern: /(^[ \t]*)#.*/m,
            lookbehind: !0,
            greedy: !0
        };

    function a(e, r) {
        return e = e.replace(/<OPT>/g, (function() {
            return t
        })).replace(/<SP>/g, (function() {
            return n
        })), RegExp(e, r)
    }
    e.languages.docker = {
        instruction: {
            pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: !0,
            greedy: !0,
            inside: {
                options: {
                    pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: {
                            pattern: /(^|\s)--[\w-]+/,
                            lookbehind: !0
                        },
                        string: [o, {
                            pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                            lookbehind: !0
                        }],
                        operator: /\\$/m,
                        punctuation: /=/
                    }
                },
                keyword: [{
                    pattern: a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^ONBUILD<SP>)\\w+", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /^\w+/,
                    greedy: !0
                }],
                comment: i,
                string: o,
                variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                operator: /\\$/m
            }
        },
        comment: i
    }, e.languages.dockerfile = e.languages.docker
}(Prism);
Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s--?\w+/
        }
    },
    coord: /^@@.*@@$/m,
    "commit-sha1": /^commit \w{40}$/m
};
! function(t) {
    function a(t) {
        return RegExp("(^(?:" + t + "):[ \t]*(?![ \t]))[^]+", "i")
    }
    t.languages.http = {
        "request-line": {
            pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
            inside: {
                method: {
                    pattern: /^[A-Z]+\b/,
                    alias: "property"
                },
                "request-target": {
                    pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                    lookbehind: !0,
                    alias: "url",
                    inside: t.languages.uri
                },
                "http-version": {
                    pattern: /^(\s)HTTP\/[\d.]+/,
                    lookbehind: !0,
                    alias: "property"
                }
            }
        },
        "response-status": {
            pattern: /^HTTP\/[\d.]+ \d+ .+/m,
            inside: {
                "http-version": {
                    pattern: /^HTTP\/[\d.]+/,
                    alias: "property"
                },
                "status-code": {
                    pattern: /^(\s)\d+(?=\s)/,
                    lookbehind: !0,
                    alias: "number"
                },
                "reason-phrase": {
                    pattern: /^(\s).+/,
                    lookbehind: !0,
                    alias: "string"
                }
            }
        },
        header: {
            pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
            inside: {
                "header-value": [{
                    pattern: a("Content-Security-Policy"),
                    lookbehind: !0,
                    alias: ["csp", "languages-csp"],
                    inside: t.languages.csp
                }, {
                    pattern: a("Public-Key-Pins(?:-Report-Only)?"),
                    lookbehind: !0,
                    alias: ["hpkp", "languages-hpkp"],
                    inside: t.languages.hpkp
                }, {
                    pattern: a("Strict-Transport-Security"),
                    lookbehind: !0,
                    alias: ["hsts", "languages-hsts"],
                    inside: t.languages.hsts
                }, {
                    pattern: a("[^:]+"),
                    lookbehind: !0
                }],
                "header-name": {
                    pattern: /^[^:]+/,
                    alias: "keyword"
                },
                punctuation: /^:/
            }
        }
    };
    var e, n = t.languages,
        s = {
            "application/javascript": n.javascript,
            "application/json": n.json || n.javascript,
            "application/xml": n.xml,
            "text/xml": n.xml,
            "text/html": n.html,
            "text/css": n.css,
            "text/plain": n.plain
        },
        i = {
            "application/json": !0,
            "application/xml": !0
        };

    function r(t) {
        var a = t.replace(/^[a-z]+\//, "");
        return "(?:" + t + "|\\w+/(?:[\\w.-]+\\+)+" + a + "(?![+\\w.-]))"
    }
    for (var p in s)
        if (s[p]) {
            e = e || {};
            var l = i[p] ? r(p) : p;
            e[p.replace(/\//g, "-")] = {
                pattern: RegExp("(content-type:\\s*" + l + "(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*", "i"),
                lookbehind: !0,
                inside: s[p]
            }
        } e && t.languages.insertBefore("http", "header", e)
}(Prism);
Prism.languages.hpkp = {
    directive: {
        pattern: /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
        alias: "property"
    },
    operator: /=/,
    punctuation: /;/
};
Prism.languages.hsts = {
    directive: {
        pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
        alias: "property"
    },
    operator: /=/,
    punctuation: /;/
};
Prism.languages.ini = {
    comment: {
        pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
        lookbehind: !0
    },
    section: {
        pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
        lookbehind: !0,
        inside: {
            "section-name": {
                pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                lookbehind: !0,
                alias: "selector"
            },
            punctuation: /\[|\]/
        }
    },
    key: {
        pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
        lookbehind: !0,
        alias: "attr-name"
    },
    value: {
        pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
        lookbehind: !0,
        alias: "attr-value",
        inside: {
            "inner-value": {
                pattern: /^("|').+(?=\1$)/,
                lookbehind: !0
            }
        }
    },
    punctuation: /=/
};
! function(e) {
    var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
        t = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        s = {
            pattern: RegExp("(^|[^\\w.])" + t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /\./
            }
        };
    e.languages.java = e.languages.extend("clike", {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
            lookbehind: !0,
            greedy: !0
        },
        "class-name": [s, {
            pattern: RegExp("(^|[^\\w.])" + t + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),
            lookbehind: !0,
            inside: s.inside
        }, {
            pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + t + "[A-Z]\\w*\\b"),
            lookbehind: !0,
            inside: s.inside
        }],
        keyword: n,
        function: [e.languages.clike.function, {
            pattern: /(::\s*)[a-z_]\w*/,
            lookbehind: !0
        }],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
            pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: !0
        },
        constant: /\b[A-Z][A-Z_\d]+\b/
    }), e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: !0,
            alias: "string"
        },
        char: {
            pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
            greedy: !0
        }
    }), e.languages.insertBefore("java", "class-name", {
        annotation: {
            pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
            lookbehind: !0,
            alias: "punctuation"
        },
        generics: {
            pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
            inside: {
                "class-name": s,
                keyword: n,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        },
        import: [{
            pattern: RegExp("(\\bimport\\s+)" + t + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"),
            lookbehind: !0,
            inside: {
                namespace: s.inside.namespace,
                punctuation: /\./,
                operator: /\*/,
                "class-name": /\w+/
            }
        }, {
            pattern: RegExp("(\\bimport\\s+static\\s+)" + t + "(?:\\w+|\\*)(?=\\s*;)"),
            lookbehind: !0,
            alias: "static",
            inside: {
                namespace: s.inside.namespace,
                static: /\b\w+$/,
                punctuation: /\./,
                operator: /\*/,
                "class-name": /\w+/
            }
        }],
        namespace: {
            pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, (function() {
                return n.source
            }))),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    })
}(Prism);
! function(a) {
    var e = a.languages.javadoclike = {
        parameter: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: !0
        },
        punctuation: /[{}]/
    };
    Object.defineProperty(e, "addSupport", {
        value: function(e, n) {
            "string" == typeof e && (e = [e]), e.forEach((function(e) {
                ! function(e, n) {
                    var t = "doc-comment",
                        r = a.languages[e];
                    if (r) {
                        var o = r[t];
                        if (o || (o = (r = a.languages.insertBefore(e, "comment", {
                                "doc-comment": {
                                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                    lookbehind: !0,
                                    alias: "comment"
                                }
                            }))[t]), o instanceof RegExp && (o = r[t] = {
                                pattern: o
                            }), Array.isArray(o))
                            for (var i = 0, s = o.length; i < s; i++) o[i] instanceof RegExp && (o[i] = {
                                pattern: o[i]
                            }), n(o[i]);
                        else n(o)
                    }
                }(e, (function(a) {
                    a.inside || (a.inside = {}), a.inside.rest = n
                }))
            }))
        }
    }), e.addSupport(["java", "javascript", "php"], e)
}(Prism);
! function(e) {
    e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
        decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
                at: {
                    pattern: /^@/,
                    alias: "operator"
                },
                function: /^[\s\S]+/
            }
        },
        "generic-function": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
                function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: s
                }
            }
        }
    }), e.languages.ts = e.languages.typescript
}(Prism);
! function(e) {
    var a = e.languages.javascript,
        n = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}",
        t = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
    e.languages.jsdoc = e.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp(t + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    }), e.languages.insertBefore("jsdoc", "keyword", {
        "optional-parameter": {
            pattern: RegExp(t + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"),
            lookbehind: !0,
            inside: {
                parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                },
                code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: a,
                    alias: "language-javascript"
                },
                punctuation: /[=[\]]/
            }
        },
        "class-name": [{
            pattern: RegExp("(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, (function() {
                return n
            }))),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }, {
            pattern: RegExp("(@[a-z]+\\s+)" + n),
            lookbehind: !0,
            inside: {
                string: a.string,
                number: a.number,
                boolean: a.boolean,
                keyword: e.languages.typescript.keyword,
                operator: /=>|\.\.\.|[&|?:*]/,
                punctuation: /[.,;=<>{}()[\]]/
            }
        }],
        example: {
            pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
            lookbehind: !0,
            inside: {
                code: {
                    pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                    lookbehind: !0,
                    inside: a,
                    alias: "language-javascript"
                }
            }
        }
    }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
}(Prism);
! function(a) {
    function e(a, e) {
        return RegExp(a.replace(/<ID>/g, (function() {
            return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*"
        })), e)
    }
    a.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
            pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
            lookbehind: !0,
            alias: ["function-variable", "method", "function", "property-access"]
        }
    }), a.languages.insertBefore("javascript", "function", {
        method: {
            pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
            lookbehind: !0,
            alias: ["function", "property-access"]
        }
    }), a.languages.insertBefore("javascript", "constant", {
        "known-class-name": [{
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
        }, {
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
        }]
    }), a.languages.insertBefore("javascript", "keyword", {
        imports: {
            pattern: e("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"),
            lookbehind: !0,
            inside: a.languages.javascript
        },
        exports: {
            pattern: e("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"),
            lookbehind: !0,
            inside: a.languages.javascript
        }
    }), a.languages.javascript.keyword.unshift({
        pattern: /\b(?:as|default|export|from|import)\b/,
        alias: "module"
    }, {
        pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
        alias: "control-flow"
    }, {
        pattern: /\bnull\b/,
        alias: ["null", "nil"]
    }, {
        pattern: /\bundefined\b/,
        alias: "nil"
    }), a.languages.insertBefore("javascript", "operator", {
        spread: {
            pattern: /\.{3}/,
            alias: "operator"
        },
        arrow: {
            pattern: /=>/,
            alias: "operator"
        }
    }), a.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
            pattern: e("(\\.\\s*)#?<ID>"),
            lookbehind: !0
        },
        "maybe-class-name": {
            pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
            lookbehind: !0
        },
        dom: {
            pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
            alias: "variable"
        },
        console: {
            pattern: /\bconsole(?=\s*\.)/,
            alias: "class-name"
        }
    });
    for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
        var n = t[r],
            s = a.languages.javascript[n];
        "RegExp" === a.util.type(s) && (s = a.languages.javascript[n] = {
            pattern: s
        });
        var o = s.inside || {};
        s.inside = o, o["maybe-class-name"] = /^[A-Z][\s\S]*/
    }
}(Prism);
Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
}, Prism.languages.webmanifest = Prism.languages.json;
! function(n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [{
            pattern: RegExp(e.source + "(?=\\s*:)"),
            greedy: !0
        }, {
            pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
            alias: "unquoted"
        }],
        string: {
            pattern: e,
            greedy: !0
        },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    })
}(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", {
    punctuation: /[{}[\]();,.]/
}), Prism.languages.insertBefore("jsonp", "punctuation", {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
Prism.languages.jsstacktrace = {
    "error-message": {
        pattern: /^\S.*/m,
        alias: "string"
    },
    "stack-frame": {
        pattern: /(^[ \t]+)at[ \t].*/m,
        lookbehind: !0,
        inside: {
            "not-my-code": {
                pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
                alias: "comment"
            },
            filename: {
                pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
                lookbehind: !0,
                alias: "url"
            },
            function: {
                pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
                lookbehind: !0,
                inside: {
                    punctuation: /\./
                }
            },
            punctuation: /[()]/,
            keyword: /\b(?:at|new)\b/,
            alias: {
                pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
                alias: "variable"
            },
            "line-number": {
                pattern: /:\d+(?::\d+)?\b/,
                alias: "number",
                inside: {
                    punctuation: /:/
                }
            }
        }
    }
};
! function(e) {
    var t = e.languages.javascript["template-string"],
        n = t.pattern.source,
        r = t.inside.interpolation,
        a = r.inside["interpolation-punctuation"],
        i = r.pattern.source;

    function o(t, r) {
        if (e.languages[t]) return {
            pattern: RegExp("((?:" + r + ")\\s*)" + n),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                "embedded-code": {
                    pattern: /[\s\S]+/,
                    alias: t
                }
            }
        }
    }

    function s(e, t) {
        return "___" + t.toUpperCase() + "_" + e + "___"
    }

    function p(t, n, r) {
        var a = {
            code: t,
            grammar: n,
            language: r
        };
        return e.hooks.run("before-tokenize", a), a.tokens = e.tokenize(a.code, a.grammar), e.hooks.run("after-tokenize", a), a.tokens
    }

    function l(t) {
        var n = {};
        n["interpolation-punctuation"] = a;
        var i = e.tokenize(t, n);
        if (3 === i.length) {
            var o = [1, 1];
            o.push.apply(o, p(i[1], e.languages.javascript, "javascript")), i.splice.apply(i, o)
        }
        return new e.Token("interpolation", i, r.alias, t)
    }

    function g(t, n, r) {
        var a = e.tokenize(t, {
                interpolation: {
                    pattern: RegExp(i),
                    lookbehind: !0
                }
            }),
            o = 0,
            g = {},
            u = p(a.map((function(e) {
                if ("string" == typeof e) return e;
                for (var n, a = e.content; - 1 !== t.indexOf(n = s(o++, r)););
                return g[n] = a, n
            })).join(""), n, r),
            c = Object.keys(g);
        return o = 0,
            function e(t) {
                for (var n = 0; n < t.length; n++) {
                    if (o >= c.length) return;
                    var r = t[n];
                    if ("string" == typeof r || "string" == typeof r.content) {
                        var a = c[o],
                            i = "string" == typeof r ? r : r.content,
                            s = i.indexOf(a);
                        if (-1 !== s) {
                            ++o;
                            var p = i.substring(0, s),
                                u = l(g[a]),
                                f = i.substring(s + a.length),
                                y = [];
                            if (p && y.push(p), y.push(u), f) {
                                var v = [f];
                                e(v), y.push.apply(y, v)
                            }
                            "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(y)), n += y.length - 1) : r.content = y
                        }
                    } else {
                        var d = r.content;
                        Array.isArray(d) ? e(d) : e([d])
                    }
                }
            }(u), new e.Token(r, u, "language-" + r, t)
    }
    e.languages.javascript["template-string"] = [o("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), o("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), o("svg", "\\bsvg"), o("markdown", "\\b(?:markdown|md)"), o("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), o("sql", "\\bsql"), t].filter(Boolean);
    var u = {
        javascript: !0,
        js: !0,
        typescript: !0,
        ts: !0,
        jsx: !0,
        tsx: !0
    };

    function c(e) {
        return "string" == typeof e ? e : Array.isArray(e) ? e.map(c).join("") : c(e.content)
    }
    e.hooks.add("after-tokenize", (function(t) {
        t.language in u && function t(n) {
            for (var r = 0, a = n.length; r < a; r++) {
                var i = n[r];
                if ("string" != typeof i) {
                    var o = i.content;
                    if (Array.isArray(o))
                        if ("template-string" === i.type) {
                            var s = o[1];
                            if (3 === o.length && "string" != typeof s && "embedded-code" === s.type) {
                                var p = c(s),
                                    l = s.alias,
                                    u = Array.isArray(l) ? l[0] : l,
                                    f = e.languages[u];
                                if (!f) continue;
                                o[1] = g(p, f, u)
                            }
                        } else t(o);
                    else "string" != typeof o && t([o])
                }
            }
        }(t.tokens)
    }))
}(Prism);
! function(a) {
    var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
        n = {
            "equation-command": {
                pattern: e,
                alias: "regex"
            }
        };
    a.languages.latex = {
        comment: /%.*/,
        cdata: {
            pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0
        },
        equation: [{
            pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: n,
            alias: "string"
        }, {
            pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: "string"
        }],
        keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0,
            alias: "class-name"
        },
        function: {
            pattern: e,
            alias: "selector"
        },
        punctuation: /[[\]{}&]/
    }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex
}(Prism);
Prism.languages.log = {
    string: {
        pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,
        greedy: !0
    },
    exception: {
        pattern: /(^|[^\w.])[a-z][\w.]*(?:Error|Exception):.*(?:(?:\r\n?|\n)[ \t]*(?:at[ \t].+|\.{3}.*|Caused by:.*))+(?:(?:\r\n?|\n)[ \t]*\.\.\. .*)?/,
        lookbehind: !0,
        greedy: !0,
        alias: ["javastacktrace", "language-javastacktrace"],
        inside: Prism.languages.javastacktrace || {
            keyword: /\bat\b/,
            function: /[a-z_][\w$]*(?=\()/,
            punctuation: /[.:()]/
        }
    },
    level: [{
        pattern: /\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,
        alias: ["error", "important"]
    }, {
        pattern: /\b(?:WARN|WARNING|WRN)\b/,
        alias: ["warning", "important"]
    }, {
        pattern: /\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,
        alias: ["info", "keyword"]
    }, {
        pattern: /\b(?:DBG|DEBUG|FINE)\b/,
        alias: ["debug", "keyword"]
    }, {
        pattern: /\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,
        alias: ["trace", "comment"]
    }],
    property: {
        pattern: /((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,
        lookbehind: !0
    },
    separator: {
        pattern: /(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,
        lookbehind: !0,
        alias: "comment"
    },
    url: /\b(?:file|ftp|https?):\/\/[^\s|,;'"]*[^\s|,;'">.]/,
    email: {
        pattern: /(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,
        lookbehind: !0,
        alias: "url"
    },
    "ip-address": {
        pattern: /\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/,
        alias: "constant"
    },
    "mac-address": {
        pattern: /\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,
        alias: "constant"
    },
    domain: {
        pattern: /(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,
        lookbehind: !0,
        alias: "constant"
    },
    uuid: {
        pattern: /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,
        alias: "constant"
    },
    hash: {
        pattern: /\b(?:[a-f0-9]{32}){1,2}\b/i,
        alias: "constant"
    },
    "file-path": {
        pattern: /\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,
        lookbehind: !0,
        greedy: !0,
        alias: "string"
    },
    date: {
        pattern: RegExp("\\b\\d{4}[-/]\\d{2}[-/]\\d{2}(?:T(?=\\d{1,2}:)|(?=\\s\\d{1,2}:))|\\b\\d{1,4}[-/ ](?:\\d{1,2}|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)[-/ ]\\d{2,4}T?\\b|\\b(?:(?:Fri|Mon|Sat|Sun|Thu|Tue|Wed)(?:\\s{1,2}(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep))?|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)\\s{1,2}\\d{1,2}\\b", "i"),
        alias: "number"
    },
    time: {
        pattern: /\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,
        alias: "number"
    },
    boolean: /\b(?:false|null|true)\b/i,
    number: {
        pattern: /(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,
        lookbehind: !0
    },
    operator: /[;:?<=>~/@!$%&+\-|^(){}*#]/,
    punctuation: /[\[\].,]/
};
Prism.languages.makefile = {
    comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
        lookbehind: !0
    },
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "builtin-target": {
        pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
        alias: "builtin"
    },
    target: {
        pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
        alias: "symbol",
        inside: {
            variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
        }
    },
    variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    function: {
        pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
        lookbehind: !0
    },
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
};
! function(n) {
    function e(n) {
        return n = n.replace(/<inner>/g, (function() {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))"
        })), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    }
    var t = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
        a = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, (function() {
            return t
        })),
        i = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
    n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                punctuation: /^---|---$/,
                "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: n.languages.yaml
                }
            }
        },
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        table: {
            pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                        "table-data": {
                            pattern: RegExp(t),
                            inside: n.languages.markdown
                        },
                        punctuation: /\|/
                    }
                },
                "table-line": {
                    pattern: RegExp("^(" + a + ")" + i + "$"),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||:?-{3,}:?/
                    }
                },
                "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                        "table-header": {
                            pattern: RegExp(t),
                            alias: "important",
                            inside: n.languages.markdown
                        },
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [{
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword"
        }, {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
                "code-block": {
                    pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                    lookbehind: !0
                },
                "code-language": {
                    pattern: /^(```).+/,
                    lookbehind: !0
                },
                punctuation: /```/
            }
        }],
        title: [{
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
                punctuation: /==+$|--+$/
            }
        }, {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
                punctuation: /^#+|#+$/
            }
        }],
        hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: e("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /\*\*|__/
            }
        },
        italic: {
            pattern: e("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /[*_]/
            }
        },
        strike: {
            pattern: e("(~~?)(?:(?!~)<inner>)+\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /~~?/
            }
        },
        "code-snippet": {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ["code", "keyword"]
        },
        url: {
            pattern: e('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),
            lookbehind: !0,
            greedy: !0,
            inside: {
                operator: /^!/,
                content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                },
                variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                url: {
                    pattern: /(^\]\()[^\s)]+/,
                    lookbehind: !0
                },
                string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0
                }
            }
        }
    }), ["url", "bold", "italic", "strike"].forEach((function(e) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach((function(t) {
            e !== t && (n.languages.markdown[e].inside.content.inside[t] = n.languages.markdown[t])
        }))
    })), n.hooks.add("after-tokenize", (function(n) {
        "markdown" !== n.language && "md" !== n.language || function n(e) {
            if (e && "string" != typeof e)
                for (var t = 0, a = e.length; t < a; t++) {
                    var i = e[t];
                    if ("code" === i.type) {
                        var r = i.content[1],
                            o = i.content[3];
                        if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
                            var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
                        }
                    } else n(i.content)
                }
        }(n.tokens)
    })), n.hooks.add("wrap", (function(e) {
        if ("code-block" === e.type) {
            for (var t = "", a = 0, i = e.classes.length; a < i; a++) {
                var s = e.classes[a],
                    d = /language-(.+)/.exec(s);
                if (d) {
                    t = d[1];
                    break
                }
            }
            var p = n.languages[t];
            if (p) e.content = n.highlight(e.content.replace(r, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, (function(n, e) {
                var t;
                return "#" === (e = e.toLowerCase())[0] ? (t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), l(t)) : o[e] || n
            })), p, t);
            else if (t && "none" !== t && n.plugins.autoloader) {
                var u = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                e.attributes.id = u, n.plugins.autoloader.loadLanguages(t, (function() {
                    var e = document.getElementById(u);
                    e && (e.innerHTML = n.highlight(e.textContent, n.languages[t], t))
                }))
            }
        }
    }));
    var r = RegExp(n.languages.markup.tag.pattern.source, "gi"),
        o = {
            amp: "&",
            lt: "<",
            gt: ">",
            quot: '"'
        },
        l = String.fromCodePoint || String.fromCharCode;
    n.languages.md = n.languages.markdown
}(Prism);
Prism.languages.mermaid = {
    comment: {
        pattern: /%%.*/,
        greedy: !0
    },
    style: {
        pattern: /^([ \t]*(?:classDef|linkStyle|style)[ \t]+[\w$-]+[ \t]+)\w.*[^\s;]/m,
        lookbehind: !0,
        inside: {
            property: /\b\w[\w-]*(?=[ \t]*:)/,
            operator: /:/,
            punctuation: /,/
        }
    },
    "inter-arrow-label": {
        pattern: /([^<>ox.=-])(?:-[-.]|==)(?![<>ox.=-])[ \t]*(?:"[^"\r\n]*"|[^\s".=-](?:[^\r\n.=-]*[^\s.=-])?)[ \t]*(?:\.+->?|--+[->]|==+[=>])(?![<>ox.=-])/,
        lookbehind: !0,
        greedy: !0,
        inside: {
            arrow: {
                pattern: /(?:\.+->?|--+[->]|==+[=>])$/,
                alias: "operator"
            },
            label: {
                pattern: /^([\s\S]{2}[ \t]*)\S(?:[\s\S]*\S)?/,
                lookbehind: !0,
                alias: "property"
            },
            "arrow-head": {
                pattern: /^\S+/,
                alias: ["arrow", "operator"]
            }
        }
    },
    arrow: [{
        pattern: /(^|[^{}|o.-])[|}][|o](?:--|\.\.)[|o][|{](?![{}|o.-])/,
        lookbehind: !0,
        alias: "operator"
    }, {
        pattern: /(^|[^<>ox.=-])(?:[<ox](?:==+|--+|-\.*-)[>ox]?|(?:==+|--+|-\.*-)[>ox]|===+|---+|-\.+-)(?![<>ox.=-])/,
        lookbehind: !0,
        alias: "operator"
    }, {
        pattern: /(^|[^<>()x-])(?:--?(?:>>|[x>)])(?![<>()x])|(?:<<|[x<(])--?(?!-))/,
        lookbehind: !0,
        alias: "operator"
    }, {
        pattern: /(^|[^<>|*o.-])(?:[*o]--|--[*o]|<\|?(?:--|\.\.)|(?:--|\.\.)\|?>|--|\.\.)(?![<>|*o.-])/,
        lookbehind: !0,
        alias: "operator"
    }],
    label: {
        pattern: /(^|[^|<])\|(?:[^\r\n"|]|"[^"\r\n]*")+\|/,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    },
    text: {
        pattern: /(?:[(\[{]+|\b>)(?:[^\r\n"()\[\]{}]|"[^"\r\n]*")+(?:[)\]}]+|>)/,
        alias: "string"
    },
    string: {
        pattern: /"[^"\r\n]*"/,
        greedy: !0
    },
    annotation: {
        pattern: /<<(?:abstract|choice|enumeration|fork|interface|join|service)>>|\[\[(?:choice|fork|join)\]\]/i,
        alias: "important"
    },
    keyword: [{
        pattern: /(^[ \t]*)(?:action|callback|class|classDef|classDiagram|click|direction|erDiagram|flowchart|gantt|gitGraph|graph|journey|link|linkStyle|pie|requirementDiagram|sequenceDiagram|stateDiagram|stateDiagram-v2|style|subgraph)(?![\w$-])/m,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^[ \t]*)(?:activate|alt|and|as|autonumber|deactivate|else|end(?:[ \t]+note)?|loop|opt|par|participant|rect|state|note[ \t]+(?:over|(?:left|right)[ \t]+of))(?![\w$-])/im,
        lookbehind: !0,
        greedy: !0
    }],
    entity: /#[a-z0-9]+;/,
    operator: {
        pattern: /(\w[ \t]*)&(?=[ \t]*\w)|:::|:/,
        lookbehind: !0
    },
    punctuation: /[(){};]/
};
! function(e) {
    var i = e.languages.powershell = {
        comment: [{
            pattern: /(^|[^`])<#[\s\S]*?#>/,
            lookbehind: !0
        }, {
            pattern: /(^|[^`])#.*/,
            lookbehind: !0
        }],
        string: [{
            pattern: /"(?:`[\s\S]|[^`"])*"/,
            greedy: !0,
            inside: null
        }, {
            pattern: /'(?:[^']|'')*'/,
            greedy: !0
        }],
        namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
        boolean: /\$(?:false|true)\b/i,
        variable: /\$\w+\b/,
        function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
        keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
            pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
        },
        punctuation: /[|{}[\];(),.]/
    };
    i.string[0].inside = {
        function: {
            pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
            lookbehind: !0,
            inside: i
        },
        boolean: i.boolean,
        variable: i.variable
    }
}(Prism);
! function(a) {
    var e = {
            pattern: /\\[\\(){}[\]^$+*?|.]/,
            alias: "escape"
        },
        n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
        t = "(?:[^\\\\-]|" + n.source + ")",
        s = RegExp(t + "-" + t),
        i = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: "variable"
        };
    a.languages.regex = {
        "char-class": {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
                "char-class-negation": {
                    pattern: /(^\[)\^/,
                    lookbehind: !0,
                    alias: "operator"
                },
                "char-class-punctuation": {
                    pattern: /^\[|\]$/,
                    alias: "punctuation"
                },
                range: {
                    pattern: s,
                    inside: {
                        escape: n,
                        "range-punctuation": {
                            pattern: /-/,
                            alias: "operator"
                        }
                    }
                },
                "special-escape": e,
                "char-set": {
                    pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                    alias: "class-name"
                },
                escape: n
            }
        },
        "special-escape": e,
        "char-set": {
            pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
            alias: "class-name"
        },
        backreference: [{
            pattern: /\\(?![123][0-7]{2})[1-9]/,
            alias: "keyword"
        }, {
            pattern: /\\k<[^<>']+>/,
            alias: "keyword",
            inside: {
                "group-name": i
            }
        }],
        anchor: {
            pattern: /[$^]|\\[ABbGZz]/,
            alias: "function"
        },
        escape: n,
        group: [{
            pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
            alias: "punctuation",
            inside: {
                "group-name": i
            }
        }, {
            pattern: /\)/,
            alias: "punctuation"
        }],
        quantifier: {
            pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
            alias: "number"
        },
        alternation: {
            pattern: /\|/,
            alias: "keyword"
        }
    }
}(Prism);
! function(e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: {
            pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
        operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
        punctuation: /[(){}[\].,;]/
    }), e.languages.insertBefore("ruby", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    });
    var n = {
        pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
        lookbehind: !0,
        inside: {
            content: {
                pattern: /^(#\{)[\s\S]+(?=\}$)/,
                lookbehind: !0,
                inside: e.languages.ruby
            },
            delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
            }
        }
    };
    delete e.languages.ruby.function;
    var t = "(?:" + ["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)", "\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]", "<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|") + ")",
        i = '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';
    e.languages.insertBefore("ruby", "keyword", {
        "regex-literal": [{
            pattern: RegExp("%r" + t + "[egimnosux]{0,6}"),
            greedy: !0,
            inside: {
                interpolation: n,
                regex: /[\s\S]+/
            }
        }, {
            pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                interpolation: n,
                regex: /[\s\S]+/
            }
        }],
        variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
        symbol: [{
            pattern: RegExp("(^|[^:]):" + i),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: RegExp("([\r\n{(,][ \t]*)" + i + "(?=:(?!:))"),
            lookbehind: !0,
            greedy: !0
        }],
        "method-definition": {
            pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
            lookbehind: !0,
            inside: {
                function: /\b\w+$/,
                keyword: /^self\b/,
                "class-name": /^\w+/,
                punctuation: /\./
            }
        }
    }), e.languages.insertBefore("ruby", "string", {
        "string-literal": [{
            pattern: RegExp("%[qQiIwWs]?" + t),
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                    inside: {
                        symbol: /\b\w+/,
                        punctuation: /^<<[-~]?/
                    }
                },
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                    inside: {
                        symbol: /\b\w+/,
                        punctuation: /^<<[-~]?'|'$/
                    }
                },
                string: /[\s\S]+/
            }
        }],
        "command-literal": [{
            pattern: RegExp("%x" + t),
            greedy: !0,
            inside: {
                interpolation: n,
                command: {
                    pattern: /[\s\S]+/,
                    alias: "string"
                }
            }
        }, {
            pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
            greedy: !0,
            inside: {
                interpolation: n,
                command: {
                    pattern: /[\s\S]+/,
                    alias: "string"
                }
            }
        }]
    }), delete e.languages.ruby.string, e.languages.insertBefore("ruby", "number", {
        builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
        constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    }), e.languages.rb = e.languages.ruby
}(Prism);
! function(e) {
    for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++) a = a.replace(/<self>/g, (function() {
        return a
    }));
    a = a.replace(/<self>/g, (function() {
        return "[^\\s\\S]"
    })), e.languages.rust = {
        comment: [{
            pattern: RegExp("(^|[^\\\\])" + a),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
            greedy: !0
        },
        char: {
            pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
            greedy: !0
        },
        attribute: {
            pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
            greedy: !0,
            alias: "attr-name",
            inside: {
                string: null
            }
        },
        "closure-params": {
            pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                "closure-punctuation": {
                    pattern: /^\||\|$/,
                    alias: "punctuation"
                },
                rest: null
            }
        },
        "lifetime-annotation": {
            pattern: /'\w+/,
            alias: "symbol"
        },
        "fragment-specifier": {
            pattern: /(\$\w+:)[a-z]+/,
            lookbehind: !0,
            alias: "punctuation"
        },
        variable: /\$\w+/,
        "function-definition": {
            pattern: /(\bfn\s+)\w+/,
            lookbehind: !0,
            alias: "function"
        },
        "type-definition": {
            pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
            lookbehind: !0,
            alias: "class-name"
        },
        "module-declaration": [{
            pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
            lookbehind: !0,
            alias: "namespace"
        }, {
            pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
            lookbehind: !0,
            alias: "namespace",
            inside: {
                punctuation: /::/
            }
        }],
        keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: {
            pattern: /\b\w+!/,
            alias: "property"
        },
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        "class-name": /\b[A-Z]\w*\b/,
        namespace: {
            pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
            inside: {
                punctuation: /::/
            }
        },
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
}(Prism);
! function(e) {
    e.languages.sass = e.languages.extend("css", {
        comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: !0,
            greedy: !0
        }
    }), e.languages.insertBefore("sass", "atrule", {
        "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            greedy: !0,
            inside: {
                atrule: /(?:@[\w-]+|[+=])/
            }
        }
    }), delete e.languages.sass.atrule;
    var r = /\$[-\w]+|#\{\$[-\w]+\}/,
        t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
            pattern: /(\s)-(?=\s)/,
            lookbehind: !0
        }];
    e.languages.insertBefore("sass", "property", {
        "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: !0,
            inside: {
                punctuation: /:/,
                variable: r,
                operator: t
            }
        },
        "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: !0,
            inside: {
                property: [/[^:\s]+(?=\s*:)/, {
                    pattern: /(:)[^:\s]+/,
                    lookbehind: !0
                }],
                punctuation: /:/,
                variable: r,
                operator: t,
                important: e.languages.sass.important
            }
        }
    }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
        selector: {
            pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
            lookbehind: !0,
            greedy: !0
        }
    })
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {
        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
        inside: {
            parent: {
                pattern: /&/,
                alias: "important"
            },
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    },
    property: {
        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    }
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
        pattern: /( )(?:from|through)(?= )/,
        lookbehind: !0
    }]
}), Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
        pattern: /\b(?:as|hide|show|with)\b/i,
        alias: "keyword"
    },
    placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
    },
    statement: {
        pattern: /\B!(?:default|optional)\b/i,
        alias: "keyword"
    },
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    },
    operator: {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
        lookbehind: !0
    }
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
! function(s) {
    var n = ['"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"', "'[^']*'", "\\$'(?:[^'\\\\]|\\\\[^])*'", "<<-?\\s*([\"']?)(\\w+)\\1\\s[^]*?[\r\n]\\2"].join("|");
    s.languages["shell-session"] = {
        command: {
            pattern: RegExp('^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)' + "(?:[^\\\\\r\n \t'\"<$]|[ \t](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r\n?)|\\$(?!')|<(?!<)|<<str>>)+".replace(/<<str>>/g, (function() {
                return n
            })), "m"),
            greedy: !0,
            inside: {
                info: {
                    pattern: /^[^#$%]+/,
                    alias: "punctuation",
                    inside: {
                        user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
                        punctuation: /:/,
                        path: /[\s\S]+/
                    }
                },
                bash: {
                    pattern: /(^[$#%]\s*)\S[\s\S]*/,
                    lookbehind: !0,
                    alias: "language-bash",
                    inside: s.languages.bash
                },
                "shell-symbol": {
                    pattern: /^[$#%]/,
                    alias: "important"
                }
            }
        },
        output: /.(?:.*(?:[\r\n]|.$))*/
    }, s.languages["sh-session"] = s.languages.shellsession = s.languages["shell-session"]
}(Prism);
Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0
    },
    variable: [{
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: !0
    }, /@[\w.$]+/],
    string: {
        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
        greedy: !0,
        lookbehind: !0
    },
    identifier: {
        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
        greedy: !0,
        lookbehind: !0,
        inside: {
            punctuation: /^`|`$/
        }
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
};
! function(e) {
    function n(e) {
        return e.replace(/__/g, (function() {
            return "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\\\.|[^\\\\\"\r\n])*\")"
        }))
    }
    e.languages.toml = {
        comment: {
            pattern: /#.*/,
            greedy: !0
        },
        table: {
            pattern: RegExp(n("(^[\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"), "m"),
            lookbehind: !0,
            greedy: !0,
            alias: "class-name"
        },
        key: {
            pattern: RegExp(n("(^[\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"), "m"),
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        },
        string: {
            pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0
        },
        date: [{
            pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
            alias: "number"
        }, {
            pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
            alias: "number"
        }],
        number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /[.,=[\]{}]/
    }
}(Prism);
! function(E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^"'])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        function: [{
            pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
            inside: {
                string: {
                    pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                    inside: {
                        keyword: n
                    }
                },
                keyword: {
                    pattern: /INCLUDE_TYPOSCRIPT/
                }
            }
        }, {
            pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
            inside: {
                string: /"[^"\r\n]*"|'[^'\r\n]*'/
            }
        }],
        string: {
            pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
            lookbehind: !0,
            inside: {
                function: /\{\$.*\}/,
                keyword: n,
                number: /^\d+$/,
                punctuation: /[,|:]/
            }
        },
        keyword: n,
        number: {
            pattern: /\b\d+\s*[.{=]/,
            inside: {
                operator: /[.{=]/
            }
        },
        tag: {
            pattern: /\.?[-\w\\]+\.?/,
            inside: {
                punctuation: /\./
            }
        },
        punctuation: /[{}[\];(),.:|]/,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    }, E.languages.tsconfig = E.languages.typoscript
}(Prism);
Prism.languages.wiki = Prism.languages.extend("markup", {
    "block-comment": {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: !0,
        alias: "comment"
    },
    heading: {
        pattern: /^(=+)[^=\r\n].*?\1/m,
        inside: {
            punctuation: /^=+|=+$/,
            important: /.+/
        }
    },
    emphasis: {
        pattern: /('{2,5}).+?\1/,
        inside: {
            "bold-italic": {
                pattern: /(''''').+?(?=\1)/,
                lookbehind: !0,
                alias: ["bold", "italic"]
            },
            bold: {
                pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
                lookbehind: !0
            },
            italic: {
                pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
                lookbehind: !0
            },
            punctuation: /^''+|''+$/
        }
    },
    hr: {
        pattern: /^-{4,}/m,
        alias: "punctuation"
    },
    url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
    variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
    symbol: [/^#redirect/im, /~{3,5}/],
    "table-tag": {
        pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
        lookbehind: !0,
        inside: {
            "table-bar": {
                pattern: /\|$/,
                alias: "punctuation"
            },
            rest: Prism.languages.markup.tag.inside
        }
    },
    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
}), Prism.languages.insertBefore("wiki", "tag", {
    nowiki: {
        pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
        inside: {
            tag: {
                pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
                inside: Prism.languages.markup.tag.inside
            }
        }
    }
});
! function(e) {
    var n = /[*&][^\s[\]{},]+/,
        r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
        t = "(?:" + r.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + r.source + ")?)",
        a = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, (function() {
            return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"
        })),
        d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";

    function o(e, n) {
        n = (n || "").replace(/m/g, "") + "m";
        var r = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, (function() {
            return t
        })).replace(/<<value>>/g, (function() {
            return e
        }));
        return RegExp(r, n)
    }
    e.languages.yaml = {
        scalar: {
            pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, (function() {
                return t
            }))),
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, (function() {
                return t
            })).replace(/<<key>>/g, (function() {
                return "(?:" + a + "|" + d + ")"
            }))),
            lookbehind: !0,
            greedy: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
            lookbehind: !0,
            alias: "number"
        },
        boolean: {
            pattern: o("false|true", "i"),
            lookbehind: !0,
            alias: "important"
        },
        null: {
            pattern: o("null|~", "i"),
            lookbehind: !0,
            alias: "important"
        },
        string: {
            pattern: o(d),
            lookbehind: !0,
            greedy: !0
        },
        number: {
            pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
            lookbehind: !0
        },
        tag: r,
        important: n,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, e.languages.yml = e.languages.yaml
}(Prism);
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = "line-numbers",
            n = /\n(?!$)/g,
            t = Prism.plugins.lineNumbers = {
                getLine: function(n, t) {
                    if ("PRE" === n.tagName && n.classList.contains(e)) {
                        var i = n.querySelector(".line-numbers-rows");
                        if (i) {
                            var r = parseInt(n.getAttribute("data-start"), 10) || 1,
                                s = r + (i.children.length - 1);
                            t < r && (t = r), t > s && (t = s);
                            var l = t - r;
                            return i.children[l]
                        }
                    }
                },
                resize: function(e) {
                    r([e])
                },
                assumeViewportIndependence: !0
            },
            i = void 0;
        window.addEventListener("resize", (function() {
            t.assumeViewportIndependence && i === window.innerWidth || (i = window.innerWidth, r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))
        })), Prism.hooks.add("complete", (function(t) {
            if (t.code) {
                var i = t.element,
                    s = i.parentNode;
                if (s && /pre/i.test(s.nodeName) && !i.querySelector(".line-numbers-rows") && Prism.util.isActive(i, e)) {
                    i.classList.remove(e), s.classList.add(e);
                    var l, o = t.code.match(n),
                        a = o ? o.length + 1 : 1,
                        u = new Array(a + 1).join("<span></span>");
                    (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)), t.element.appendChild(l), r([s]), Prism.hooks.run("line-numbers", t)
                }
            }
        })), Prism.hooks.add("line-numbers", (function(e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        }))
    }

    function r(e) {
        if (0 != (e = e.filter((function(e) {
                var n, t = (n = e, n ? window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null : null)["white-space"];
                return "pre-wrap" === t || "pre-line" === t
            }))).length) {
            var t = e.map((function(e) {
                var t = e.querySelector("code"),
                    i = e.querySelector(".line-numbers-rows");
                if (t && i) {
                    var r = e.querySelector(".line-numbers-sizer"),
                        s = t.textContent.split(n);
                    r || ((r = document.createElement("span")).className = "line-numbers-sizer", t.appendChild(r)), r.innerHTML = "0", r.style.display = "block";
                    var l = r.getBoundingClientRect().height;
                    return r.innerHTML = "", {
                        element: e,
                        lines: s,
                        lineHeights: [],
                        oneLinerHeight: l,
                        sizer: r
                    }
                }
            })).filter(Boolean);
            t.forEach((function(e) {
                var n = e.sizer,
                    t = e.lines,
                    i = e.lineHeights,
                    r = e.oneLinerHeight;
                i[t.length - 1] = void 0, t.forEach((function(e, t) {
                    if (e && e.length > 1) {
                        var s = n.appendChild(document.createElement("span"));
                        s.style.display = "block", s.textContent = e
                    } else i[t] = r
                }))
            })), t.forEach((function(e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            })), t.forEach((function(e) {
                var n = e.sizer,
                    t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach((function(e, n) {
                    t.children[n].style.height = e + "px"
                }))
            }))
        }
    }
}();
! function() {
    if ("undefined" != typeof Prism) {
        var i = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,
            n = /\b\S+@[\w.]+[a-z]{2}/,
            t = /\[([^\]]+)\]\(([^)]+)\)/,
            e = ["comment", "url", "attr-value", "string"];
        Prism.plugins.autolinker = {
            processGrammar: function(r) {
                r && !r["url-link"] && (Prism.languages.DFS(r, (function(r, a, l) {
                    e.indexOf(l) > -1 && !Array.isArray(a) && (a.pattern || (a = this[r] = {
                        pattern: a
                    }), a.inside = a.inside || {}, "comment" == l && (a.inside["md-link"] = t), "attr-value" == l ? Prism.languages.insertBefore("inside", "punctuation", {
                        "url-link": i
                    }, a) : a.inside["url-link"] = i, a.inside["email-link"] = n)
                })), r["url-link"] = i, r["email-link"] = n)
            }
        }, Prism.hooks.add("before-highlight", (function(i) {
            Prism.plugins.autolinker.processGrammar(i.grammar)
        })), Prism.hooks.add("wrap", (function(i) {
            if (/-link$/.test(i.type)) {
                i.tag = "a";
                var n = i.content;
                if ("email-link" == i.type && 0 != n.indexOf("mailto:")) n = "mailto:" + n;
                else if ("md-link" == i.type) {
                    var e = i.content.match(t);
                    n = e[2], i.content = e[1]
                }
                i.attributes.href = n;
                try {
                    i.content = decodeURIComponent(i.content)
                } catch (i) {}
            }
        }))
    }
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
        var t = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex"
            },
            e = "data-src-status",
            i = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';
        Prism.hooks.add("before-highlightall", (function(t) {
            t.selector += ", " + i
        })), Prism.hooks.add("before-sanity-check", (function(a) {
            var n = a.element;
            if (n.matches(i)) {
                a.code = "", n.setAttribute(e, "loading");
                var s = n.appendChild(document.createElement("CODE"));
                s.textContent = "Loading…";
                var r = n.getAttribute("data-src"),
                    l = a.language;
                if ("none" === l) {
                    var o = (/\.(\w+)$/.exec(r) || [, "none"])[1];
                    l = t[o] || o
                }
                Prism.util.setLanguage(s, l), Prism.util.setLanguage(n, l);
                var h = Prism.plugins.autoloader;
                h && h.loadLanguages(l),
                    function(t, i, a) {
                        var r = new XMLHttpRequest;
                        r.open("GET", t, !0), r.onreadystatechange = function() {
                            4 == r.readyState && (r.status < 400 && r.responseText ? function(t) {
                                n.setAttribute(e, "loaded");
                                var i = function(t) {
                                    var e = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t || "");
                                    if (e) {
                                        var i = Number(e[1]),
                                            a = e[2],
                                            n = e[3];
                                        return a ? n ? [i, Number(n)] : [i, void 0] : [i, i]
                                    }
                                }(n.getAttribute("data-range"));
                                if (i) {
                                    var a = t.split(/\r\n?|\n/g),
                                        r = i[0],
                                        l = null == i[1] ? a.length : i[1];
                                    r < 0 && (r += a.length), r = Math.max(0, Math.min(r - 1, a.length)), l < 0 && (l += a.length), l = Math.max(0, Math.min(l, a.length)), t = a.slice(r, l).join("\n"), n.hasAttribute("data-start") || n.setAttribute("data-start", String(r + 1))
                                }
                                s.textContent = t, Prism.highlightElement(s)
                            }(r.responseText) : r.status >= 400 ? a("✖ Error " + r.status + " while fetching file: " + r.statusText) : a("✖ Error: File does not exist or is empty"))
                        }, r.send(null)
                    }(r, 0, (function(t) {
                        n.setAttribute(e, "failed"), s.textContent = t
                    }))
            }
        })), Prism.plugins.fileHighlight = {
            highlight: function(t) {
                for (var e, a = (t || document).querySelectorAll(i), n = 0; e = a[n++];) Prism.highlightElement(e)
            }
        };
        var a = !1;
        Prism.fileHighlight = function() {
            a || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), a = !0), Prism.plugins.fileHighlight.highlight.apply(this, arguments)
        }
    }
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = [],
            t = {},
            n = function() {};
        Prism.plugins.toolbar = {};
        var a = Prism.plugins.toolbar.registerButton = function(n, a) {
                var r;
                r = "function" == typeof a ? a : function(e) {
                    var t;
                    return "function" == typeof a.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", (function() {
                        a.onClick.call(this, e)
                    }))) : "string" == typeof a.url ? (t = document.createElement("a")).href = a.url : t = document.createElement("span"), a.className && t.classList.add(a.className), t.textContent = a.text, t
                }, n in t ? console.warn('There is a button with the key "' + n + '" registered already.') : e.push(t[n] = r)
            },
            r = Prism.plugins.toolbar.hook = function(a) {
                var r = a.element.parentNode;
                if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                    var o = document.createElement("div");
                    o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r);
                    var i = document.createElement("div");
                    i.classList.add("toolbar");
                    var l = e,
                        d = function(e) {
                            for (; e;) {
                                var t = e.getAttribute("data-toolbar-order");
                                if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                                e = e.parentElement
                            }
                        }(a.element);
                    d && (l = d.map((function(e) {
                        return t[e] || n
                    }))), l.forEach((function(e) {
                        var t = e(a);
                        if (t) {
                            var n = document.createElement("div");
                            n.classList.add("toolbar-item"), n.appendChild(t), i.appendChild(n)
                        }
                    })), o.appendChild(i)
                }
            };
        a("label", (function(e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, a, r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r)
                } catch (e) {}
                return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
            }
        })), Prism.hooks.add("complete", r)
    }
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document)
        if (Prism.plugins.toolbar) {
            var e = {
                none: "Plain text",
                plain: "Plain text",
                plaintext: "Plain text",
                text: "Plain text",
                txt: "Plain text",
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                ino: "Arduino",
                arff: "ARFF",
                armasm: "ARM Assembly",
                "arm-asm": "ARM Assembly",
                art: "Arturo",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                asmatmel: "Atmel AVR Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                avisynth: "AviSynth",
                avs: "AviSynth",
                "avro-idl": "Avro IDL",
                avdl: "Avro IDL",
                awk: "AWK",
                gawk: "GAWK",
                sh: "Shell",
                basic: "BASIC",
                bbcode: "BBcode",
                bbj: "BBj",
                bnf: "BNF",
                rbnf: "RBNF",
                bqn: "BQN",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cfscript: "CFScript",
                cfc: "CFScript",
                cil: "CIL",
                cilkc: "Cilk/C",
                "cilk-c": "Cilk/C",
                cilkcpp: "Cilk/C++",
                "cilk-cpp": "Cilk/C++",
                cilk: "Cilk/C++",
                cmake: "CMake",
                cobol: "COBOL",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                csv: "CSV",
                cue: "CUE",
                dataweave: "DataWeave",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                dot: "DOT (Graphviz)",
                gv: "DOT (Graphviz)",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gap: "GAP (CAS)",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                gettext: "gettext",
                po: "gettext",
                glsl: "GLSL",
                gn: "GN",
                gni: "GN",
                "linker-script": "GNU Linker Script",
                ld: "GNU Linker Script",
                "go-module": "Go module",
                "go-mod": "Go module",
                graphql: "GraphQL",
                hbs: "Handlebars",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                "icu-message-format": "ICU Message Format",
                idr: "Idris",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                keepalived: "Keepalived Configure",
                kts: "Kotlin Script",
                kt: "Kotlin",
                kumir: "KuMir (КуМир)",
                kum: "KuMir (КуМир)",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                log: "Log file",
                lolcode: "LOLCODE",
                magma: "Magma (CAS)",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                maxscript: "MAXScript",
                mel: "MEL",
                metafont: "METAFONT",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                openqasm: "OpenQasm",
                qasm: "OpenQasm",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                psl: "PATROL Scripting Language",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                "plant-uml": "PlantUML",
                plantuml: "PlantUML",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                promql: "PromQL",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                purs: "PureScript",
                py: "Python",
                qsharp: "Q#",
                qs: "Q#",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                cshtml: "Razor C#",
                razor: "Razor C#",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                res: "ReScript",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (SCSS)",
                "shell-session": "Shell session",
                "sh-session": "Shell session",
                shellsession: "Shell session",
                sml: "SML",
                smlnj: "SML/NJ",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                stata: "Stata Ado",
                iecst: "Structured Text (IEC 61131-3)",
                supercollider: "SuperCollider",
                sclang: "SuperCollider",
                systemd: "Systemd configuration file",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trickle: "trickle",
                troy: "troy",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                uorazor: "UO Razor Script",
                uri: "URI",
                url: "URL",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                "web-idl": "Web IDL",
                webidl: "Web IDL",
                wgsl: "WGSL",
                wiki: "Wiki markup",
                wolfram: "Wolfram language",
                nb: "Mathematica Notebook",
                wl: "Wolfram language",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG"
            };
            Prism.plugins.toolbar.registerButton("show-language", (function(a) {
                var t = a.element.parentNode;
                if (t && /pre/i.test(t.nodeName)) {
                    var o, i = t.getAttribute("data-language") || e[a.language] || ((o = a.language) ? (o.substring(0, 1).toUpperCase() + o.substring(1)).replace(/s(?=cript)/, "S") : o);
                    if (i) {
                        var s = document.createElement("span");
                        return s.textContent = i, s
                    }
                }
            }))
        } else console.warn("Show Languages plugin loaded before Toolbar plugin.")
}();
"undefined" != typeof Prism && Prism.hooks.add("wrap", (function(e) {
    "keyword" === e.type && e.classes.push("keyword-" + e.content)
}));
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document && Function.prototype.bind) {
        var e, s, t = {
                gradient: {
                    create: (e = {}, s = function(s) {
                        if (e[s]) return e[s];
                        var t = s.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
                            i = t && t[1],
                            a = t && t[2],
                            n = s.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                        return a.indexOf("linear") >= 0 ? e[s] = function(e, s, t) {
                            var i = "180deg";
                            return /^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(t[0]) && (i = t.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), s + "(" + i + "," + t.join(",") + ")"
                        }(i, a, n) : a.indexOf("radial") >= 0 ? e[s] = function(e, s, t) {
                            if (t[0].indexOf("at") < 0) {
                                var i = "center",
                                    a = "ellipse",
                                    n = "farthest-corner";
                                if (/\b(?:bottom|center|left|right|top)\b|^\d+/.test(t[0]) && (i = t.shift().replace(/\s*-?\d+(?:deg|rad)\s*/, "")), /\b(?:circle|closest|contain|cover|ellipse|farthest)\b/.test(t[0])) {
                                    var r = t.shift().split(/\s+/);
                                    !r[0] || "circle" !== r[0] && "ellipse" !== r[0] || (a = r.shift()), r[0] && (n = r.shift()), "cover" === n ? n = "farthest-corner" : "contain" === n && (n = "clothest-side")
                                }
                                return s + "(" + a + " " + n + " at " + i + "," + t.join(",") + ")"
                            }
                            return s + "(" + t.join(",") + ")"
                        }(0, a, n) : e[s] = a + "(" + n.join(",") + ")"
                    }, function() {
                        new Prism.plugins.Previewer("gradient", (function(e) {
                            return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = s(e), !!this.firstChild.style.backgroundImage
                        }), "*", (function() {
                            this._elt.innerHTML = "<div></div>"
                        }))
                    }),
                    tokens: {
                        gradient: {
                            pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:hsl|rgb)a?\(.+?\)|[^\)])+\)/gi,
                            inside: {
                                function: /[\w-]+(?=\()/,
                                punctuation: /[(),]/
                            }
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [{
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                },
                angle: {
                    create: function() {
                        new Prism.plugins.Previewer("angle", (function(e) {
                            var s, t, i = parseFloat(e),
                                a = e.match(/[a-z]+$/i);
                            if (!i || !a) return !1;
                            switch (a = a[0]) {
                                case "deg":
                                    s = 360;
                                    break;
                                case "grad":
                                    s = 400;
                                    break;
                                case "rad":
                                    s = 2 * Math.PI;
                                    break;
                                case "turn":
                                    s = 1
                            }
                            return t = 100 * i / s, t %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(t) + ",500", !0
                        }), "*", (function() {
                            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                        }))
                    },
                    tokens: {
                        angle: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }, {
                            lang: "sass",
                            before: "operator",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                },
                color: {
                    create: function() {
                        new Prism.plugins.Previewer("color", (function(e) {
                            return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                        }))
                    },
                    tokens: {
                        color: [Prism.languages.css.hexcode].concat(Prism.languages.css.color)
                    },
                    languages: {
                        css: !1,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !1,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                },
                easing: {
                    create: function() {
                        new Prism.plugins.Previewer("easing", (function(e) {
                            var s = (e = {
                                linear: "0,0,1,1",
                                ease: ".25,.1,.25,1",
                                "ease-in": ".42,0,1,1",
                                "ease-out": "0,0,.58,1",
                                "ease-in-out": ".42,0,.58,1"
                            } [e] || e).match(/-?(?:\d+(?:\.\d+)?|\.\d+)/g);
                            if (4 === s.length) {
                                s = s.map((function(e, s) {
                                    return 100 * (s % 2 ? 1 - e : e)
                                })), this.querySelector("path").setAttribute("d", "M0,100 C" + s[0] + "," + s[1] + ", " + s[2] + "," + s[3] + ", 100,0");
                                var t = this.querySelectorAll("line");
                                return t[0].setAttribute("x2", s[0]), t[0].setAttribute("y2", s[1]), t[1].setAttribute("x2", s[2]), t[1].setAttribute("y2", s[3]), !0
                            }
                            return !1
                        }), "*", (function() {
                            this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>'
                        }))
                    },
                    tokens: {
                        easing: {
                            pattern: /\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:ease(?:-in)?(?:-out)?|linear)(?=\s|[;}]|$)/i,
                            inside: {
                                function: /[\w-]+(?=\()/,
                                punctuation: /[(),]/
                            }
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            before: "punctuation",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                },
                time: {
                    create: function() {
                        new Prism.plugins.Previewer("time", (function(e) {
                            var s = parseFloat(e),
                                t = e.match(/[a-z]+$/i);
                            return !(!s || !t || (t = t[0], this.querySelector("circle").style.animationDuration = 2 * s + t, 0))
                        }), "*", (function() {
                            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                        }))
                    },
                    tokens: {
                        time: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }, {
                            lang: "sass",
                            before: "operator",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }
            },
            i = "token",
            a = "active",
            n = "flipped",
            r = function(e, s, t, i) {
                this._elt = null, this._type = e, this._token = null, this.updater = s, this._mouseout = this.mouseout.bind(this), this.initializer = i;
                var a = this;
                t || (t = ["*"]), Array.isArray(t) || (t = [t]), t.forEach((function(e) {
                    "string" != typeof e && (e = e.lang), r.byLanguages[e] || (r.byLanguages[e] = []), r.byLanguages[e].indexOf(a) < 0 && r.byLanguages[e].push(a)
                })), r.byType[e] = this
            };
        for (var o in r.prototype.init = function() {
                this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
            }, r.prototype.isDisabled = function(e) {
                do {
                    if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
                } while (e = e.parentNode);
                return !1
            }, r.prototype.check = function(e) {
                if (!e.classList.contains(i) || !this.isDisabled(e)) {
                    do {
                        if (e.classList && e.classList.contains(i) && e.classList.contains(this._type)) break
                    } while (e = e.parentNode);
                    e && e !== this._token && (this._token = e, this.show())
                }
            }, r.prototype.mouseout = function() {
                this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
            }, r.prototype.show = function() {
                var e, s, t, i;
                if (this._elt || this.init(), this._token)
                    if (this.updater.call(this._elt, this._token.textContent)) {
                        this._token.addEventListener("mouseout", this._mouseout, !1);
                        var r = (s = (e = this._token.getBoundingClientRect()).left, t = e.top, s -= (i = document.documentElement.getBoundingClientRect()).left, {
                            top: t -= i.top,
                            right: innerWidth - s - e.width,
                            bottom: innerHeight - t - e.height,
                            left: s,
                            width: e.width,
                            height: e.height
                        });
                        this._elt.classList.add(a), r.top - this._elt.offsetHeight > 0 ? (this._elt.classList.remove(n), this._elt.style.top = r.top + "px", this._elt.style.bottom = "") : (this._elt.classList.add(n), this._elt.style.bottom = r.bottom + "px", this._elt.style.top = ""), this._elt.style.left = r.left + Math.min(200, r.width / 2) + "px"
                    } else this.hide()
            }, r.prototype.hide = function() {
                this._elt.classList.remove(a)
            }, r.byLanguages = {}, r.byType = {}, r.initEvents = function(e, s) {
                var t = [];
                r.byLanguages[s] && (t = t.concat(r.byLanguages[s])), r.byLanguages["*"] && (t = t.concat(r.byLanguages["*"])), e.addEventListener("mouseover", (function(e) {
                    var s = e.target;
                    t.forEach((function(e) {
                        e.check(s)
                    }))
                }), !1)
            }, Prism.plugins.Previewer = r, Prism.hooks.add("before-highlight", (function(e) {
                for (var s in t) {
                    var i = t[s].languages;
                    if (e.language && i[e.language] && !i[e.language].initialized) {
                        var a = i[e.language];
                        Array.isArray(a) || (a = [a]), a.forEach((function(a) {
                            var n, r, o, l;
                            !0 === a ? (n = "important", r = e.language, a = e.language) : (n = a.before || "important", r = a.inside || a.lang, o = a.root || Prism.languages, l = a.skip, a = e.language), !l && Prism.languages[a] && (Prism.languages.insertBefore(r, n, t[s].tokens, o), e.grammar = Prism.languages[a], i[e.language] = {
                                initialized: !0
                            })
                        }))
                    }
                }
            })), Prism.hooks.add("after-highlight", (function(e) {
                (r.byLanguages["*"] || r.byLanguages[e.language]) && r.initEvents(e.element, e.language)
            })), t) t[o].create()
    }
}();
"undefined" != typeof Prism && "undefined" != typeof document && document.createRange && (Prism.plugins.KeepMarkup = !0, Prism.hooks.add("before-highlight", (function(e) {
    if (e.element.children.length && Prism.util.isActive(e.element, "keep-markup", !0)) {
        var n = Prism.util.isActive(e.element, "drop-tokens", !1),
            t = 0,
            o = [];
        r(e.element), o.length && (e.keepMarkup = o)
    }

    function d(e) {
        if (function(e) {
                return !n || "span" !== e.nodeName.toLowerCase() || !e.classList.contains("token")
            }(e)) {
            var d = {
                element: e,
                posOpen: t
            };
            o.push(d), r(e), d.posClose = t
        } else r(e)
    }

    function r(e) {
        for (var n = 0, o = e.childNodes.length; n < o; n++) {
            var r = e.childNodes[n];
            1 === r.nodeType ? d(r) : 3 === r.nodeType && (t += r.data.length)
        }
    }
})), Prism.hooks.add("after-highlight", (function(e) {
    if (e.keepMarkup && e.keepMarkup.length) {
        var n = function(e, t) {
            for (var o = 0, d = e.childNodes.length; o < d; o++) {
                var r = e.childNodes[o];
                if (1 === r.nodeType) {
                    if (!n(r, t)) return !1
                } else 3 === r.nodeType && (!t.nodeStart && t.pos + r.data.length > t.node.posOpen && (t.nodeStart = r, t.nodeStartPos = t.node.posOpen - t.pos), t.nodeStart && t.pos + r.data.length >= t.node.posClose && (t.nodeEnd = r, t.nodeEndPos = t.node.posClose - t.pos), t.pos += r.data.length);
                if (t.nodeStart && t.nodeEnd) {
                    var s = document.createRange();
                    return s.setStart(t.nodeStart, t.nodeStartPos), s.setEnd(t.nodeEnd, t.nodeEndPos), t.node.element.innerHTML = "", t.node.element.appendChild(s.extractContents()), s.insertNode(t.node.element), s.detach(), !1
                }
            }
            return !0
        };
        e.keepMarkup.forEach((function(t) {
            n(e.element, {
                node: t,
                pos: 0
            })
        })), e.highlightedCode = e.element.innerHTML
    }
})));
! function() {
    if ("undefined" != typeof Prism) {
        var e = Object.assign || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            t = {
                "remove-trailing": "boolean",
                "remove-indent": "boolean",
                "left-trim": "boolean",
                "right-trim": "boolean",
                "break-lines": "number",
                indent: "number",
                "remove-initial-line-feed": "boolean",
                "tabs-to-spaces": "number",
                "spaces-to-tabs": "number"
            };
        n.prototype = {
            setDefaults: function(t) {
                this.defaults = e(this.defaults, t)
            },
            normalize: function(t, n) {
                for (var r in n = e(this.defaults, n)) {
                    var i = r.replace(/-(\w)/g, (function(e, t) {
                        return t.toUpperCase()
                    }));
                    "normalize" !== r && "setDefaults" !== i && n[r] && this[i] && (t = this[i].call(this, t, n[r]))
                }
                return t
            },
            leftTrim: function(e) {
                return e.replace(/^\s+/, "")
            },
            rightTrim: function(e) {
                return e.replace(/\s+$/, "")
            },
            tabsToSpaces: function(e, t) {
                return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
            },
            spacesToTabs: function(e, t) {
                return t = 0 | t || 4, e.replace(RegExp(" {" + t + "}", "g"), "\t")
            },
            removeTrailing: function(e) {
                return e.replace(/\s*?$/gm, "")
            },
            removeInitialLineFeed: function(e) {
                return e.replace(/^(?:\r?\n|\r)/, "")
            },
            removeIndent: function(e) {
                var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                return t && t[0].length ? (t.sort((function(e, t) {
                    return e.length - t.length
                })), t[0].length ? e.replace(RegExp("^" + t[0], "gm"), "") : e) : e
            },
            indent: function(e, t) {
                return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
            },
            breakLines: function(e, t) {
                t = !0 === t ? 80 : 0 | t || 80;
                for (var n = e.split("\n"), i = 0; i < n.length; ++i)
                    if (!(r(n[i]) <= t)) {
                        for (var o = n[i].split(/(\s+)/g), a = 0, l = 0; l < o.length; ++l) {
                            var s = r(o[l]);
                            (a += s) > t && (o[l] = "\n" + o[l], a = s)
                        }
                        n[i] = o.join("")
                    } return n.join("\n")
            }
        }, "undefined" != typeof module && module.exports && (module.exports = n), Prism.plugins.NormalizeWhitespace = new n({
            "remove-trailing": !0,
            "remove-indent": !0,
            "left-trim": !0,
            "right-trim": !0
        }), Prism.hooks.add("before-sanity-check", (function(e) {
            var n = Prism.plugins.NormalizeWhitespace;
            if ((!e.settings || !1 !== e.settings["whitespace-normalization"]) && Prism.util.isActive(e.element, "whitespace-normalization", !0))
                if (e.element && e.element.parentNode || !e.code) {
                    var r = e.element.parentNode;
                    if (e.code && r && "pre" === r.nodeName.toLowerCase()) {
                        for (var i in null == e.settings && (e.settings = {}), t)
                            if (Object.hasOwnProperty.call(t, i)) {
                                var o = t[i];
                                if (r.hasAttribute("data-" + i)) try {
                                    var a = JSON.parse(r.getAttribute("data-" + i) || "true");
                                    typeof a === o && (e.settings[i] = a)
                                } catch (e) {}
                            } for (var l = r.childNodes, s = "", c = "", u = !1, m = 0; m < l.length; ++m) {
                            var f = l[m];
                            f == e.element ? u = !0 : "#text" === f.nodeName && (u ? c += f.nodeValue : s += f.nodeValue, r.removeChild(f), --m)
                        }
                        if (e.element.children.length && Prism.plugins.KeepMarkup) {
                            var d = s + e.element.innerHTML + c;
                            e.element.innerHTML = n.normalize(d, e.settings), e.code = e.element.textContent
                        } else e.code = s + e.code + c, e.code = n.normalize(e.code, e.settings)
                    }
                } else e.code = n.normalize(e.code, e.settings)
        }))
    }

    function n(t) {
        this.defaults = e({}, t)
    }

    function r(e) {
        for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
        return e.length + t
    }
}();
! function() {
    if ("undefined" != typeof Prism) {
        var i = {
                pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
                lookbehind: !0,
                inside: {
                    "language-css": {
                        pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
                        lookbehind: !0
                    },
                    "language-javascript": {
                        pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
                        lookbehind: !0
                    },
                    "language-json": {
                        pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
                        lookbehind: !0
                    },
                    "language-markup": {
                        pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
                        lookbehind: !0
                    }
                }
            },
            a = ["url", "attr-value", "string"];
        Prism.plugins.dataURIHighlight = {
            processGrammar: function(n) {
                n && !n["data-uri"] && (Prism.languages.DFS(n, (function(n, r, e) {
                    a.indexOf(e) > -1 && !Array.isArray(r) && (r.pattern || (r = this[n] = {
                        pattern: r
                    }), r.inside = r.inside || {}, "attr-value" == e ? Prism.languages.insertBefore("inside", r.inside["url-link"] ? "url-link" : "punctuation", {
                        "data-uri": i
                    }, r) : r.inside["url-link"] ? Prism.languages.insertBefore("inside", "url-link", {
                        "data-uri": i
                    }, r) : r.inside["data-uri"] = i)
                })), n["data-uri"] = i)
            }
        }, Prism.hooks.add("before-highlight", (function(a) {
            if (i.pattern.test(a.code))
                for (var n in i.inside)
                    if (i.inside.hasOwnProperty(n) && !i.inside[n].inside && i.inside[n].pattern.test(a.code)) {
                        var r = n.match(/^language-(.+)/)[1];
                        Prism.languages[r] && (i.inside[n].inside = {
                            rest: (e = Prism.languages[r], Prism.plugins.autolinker && Prism.plugins.autolinker.processGrammar(e), e)
                        })
                    } var e;
            Prism.plugins.dataURIHighlight.processGrammar(a.grammar)
        }))
    }
}();
! function() {
    function t(t) {
        var e = document.createElement("textarea");
        e.value = t.getText(), e.style.top = "0", e.style.left = "0", e.style.position = "fixed", document.body.appendChild(e), e.focus(), e.select();
        try {
            var o = document.execCommand("copy");
            setTimeout((function() {
                o ? t.success() : t.error()
            }), 1)
        } catch (e) {
            setTimeout((function() {
                t.error(e)
            }), 1)
        }
        document.body.removeChild(e)
    }
    "undefined" != typeof Prism && "undefined" != typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", (function(e) {
        var o = e.element,
            n = function(t) {
                var e = {
                    copy: "Copy",
                    "copy-error": "Press Ctrl+C to copy",
                    "copy-success": "Copied!",
                    "copy-timeout": 5e3
                };
                for (var o in e) {
                    for (var n = "data-prismjs-" + o, c = t; c && !c.hasAttribute(n);) c = c.parentElement;
                    c && (e[o] = c.getAttribute(n))
                }
                return e
            }(o),
            c = document.createElement("button");
        c.className = "copy-to-clipboard-button", c.setAttribute("type", "button");
        var r = document.createElement("span");
        return c.appendChild(r), u("copy"),
            function(e, o) {
                e.addEventListener("click", (function() {
                    ! function(e) {
                        navigator.clipboard ? navigator.clipboard.writeText(e.getText()).then(e.success, (function() {
                            t(e)
                        })) : t(e)
                    }(o)
                }))
            }(c, {
                getText: function() {
                    return o.textContent
                },
                success: function() {
                    u("copy-success"), i()
                },
                error: function() {
                    u("copy-error"), setTimeout((function() {
                        ! function(t) {
                            window.getSelection().selectAllChildren(t)
                        }(o)
                    }), 1), i()
                }
            }), c;

        function i() {
            setTimeout((function() {
                u("copy")
            }), n["copy-timeout"])
        }

        function u(t) {
            r.textContent = n[t], c.setAttribute("data-copy-state", t)
        }
    })) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = {
                "(": ")",
                "[": "]",
                "{": "}"
            },
            t = {
                "(": "brace-round",
                "[": "brace-square",
                "{": "brace-curly"
            },
            n = {
                "${": "{"
            },
            r = 0,
            c = /^(pair-\d+-)(close|open)$/;
        Prism.hooks.add("complete", (function(c) {
            var i = c.element,
                d = i.parentElement;
            if (d && "PRE" == d.tagName) {
                var u = [];
                if (Prism.util.isActive(i, "match-braces") && u.push("(", "[", "{"), 0 != u.length) {
                    d.__listenerAdded || (d.addEventListener("mousedown", (function() {
                        var e = d.querySelector("code"),
                            t = s("brace-selected");
                        Array.prototype.slice.call(e.querySelectorAll("." + t)).forEach((function(e) {
                            e.classList.remove(t)
                        }))
                    })), Object.defineProperty(d, "__listenerAdded", {
                        value: !0
                    }));
                    var f = Array.prototype.slice.call(i.querySelectorAll("span." + s("token") + "." + s("punctuation"))),
                        h = [];
                    u.forEach((function(c) {
                        for (var i = e[c], d = s(t[c]), u = [], p = [], v = 0; v < f.length; v++) {
                            var m = f[v];
                            if (0 == m.childElementCount) {
                                var b = m.textContent;
                                (b = n[b] || b) === c ? (h.push({
                                    index: v,
                                    open: !0,
                                    element: m
                                }), m.classList.add(d), m.classList.add(s("brace-open")), p.push(v)) : b === i && (h.push({
                                    index: v,
                                    open: !1,
                                    element: m
                                }), m.classList.add(d), m.classList.add(s("brace-close")), p.length && u.push([v, p.pop()]))
                            }
                        }
                        u.forEach((function(e) {
                            var t = "pair-" + r++ + "-",
                                n = f[e[0]],
                                c = f[e[1]];
                            n.id = t + "open", c.id = t + "close", [n, c].forEach((function(e) {
                                e.addEventListener("mouseenter", a), e.addEventListener("mouseleave", o), e.addEventListener("click", l)
                            }))
                        }))
                    }));
                    var p = 0;
                    h.sort((function(e, t) {
                        return e.index - t.index
                    })), h.forEach((function(e) {
                        e.open ? (e.element.classList.add(s("brace-level-" + (p % 12 + 1))), p++) : (p = Math.max(0, p - 1), e.element.classList.add(s("brace-level-" + (p % 12 + 1))))
                    }))
                }
            }
        }))
    }

    function s(e) {
        var t = Prism.plugins.customClass;
        return t ? t.apply(e, "none") : e
    }

    function i(e) {
        var t = c.exec(e.id);
        return document.querySelector("#" + t[1] + ("open" == t[2] ? "close" : "open"))
    }

    function a() {
        Prism.util.isActive(this, "brace-hover", !0) && [this, i(this)].forEach((function(e) {
            e.classList.add(s("brace-hover"))
        }))
    }

    function o() {
        [this, i(this)].forEach((function(e) {
            e.classList.remove(s("brace-hover"))
        }))
    }

    function l() {
        Prism.util.isActive(this, "brace-select", !0) && [this, i(this)].forEach((function(e) {
            e.classList.add(s("brace-selected"))
        }))
    }
}();
