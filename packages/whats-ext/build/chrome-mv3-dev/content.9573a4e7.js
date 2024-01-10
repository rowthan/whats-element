(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1SOAj":[function(require,module,exports) {
var p = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var H = new Set(p), _ = (e)=>H.has(e), X = p.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var G = _("--dry-run"), d = ()=>_("--verbose") || y().VERBOSE === "true", Z = d();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), D = 0, c = (...e)=>d() && u(`\u{1F7E1} ${D++}`, ...e);
var s = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/keren/Desktop/whats-element/packages/whats-ext/content.ts",
    "bundleId": "81e801fd9573a4e7",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 56843
};
module.bundle.HMR_BUNDLE_ID = s.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: s.verbose
    }
};
var S = module.bundle.Module;
function I(e) {
    S.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !s.host || s.host === "0.0.0.0" ? "localhost" : s.host;
}
function C() {
    return s.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${s.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let i of r.diagnostics.ansi){
            let w = i.codeframe || i.stack;
            m("[plasmo/parcel-runtime]: " + i.message + `
` + w + `

` + i.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${s.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${s.entryFilePath}`);
    }), t;
}
var n = "__plasmo-loading__", T = typeof trustedTypes < "u" ? trustedTypes.createPolicy(`trusted-html-${n}`, {
    createHTML: (e)=>e
}) : void 0;
function g() {
    return document.getElementById(n);
}
function f() {
    return !g();
}
function $() {
    let e = document.createElement("div");
    e.id = n;
    let t = `
  <style>
    #${n} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${n}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${n} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${n} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${n} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${n} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function F(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = $();
        e = F(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var N = `${E}${module.id}__`, a, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    a?.disconnect(), a = l?.runtime.connect({
        name: N
    }), a.onDisconnect.addListener(()=>{
        h();
    }), a.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function W() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
W();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === s.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? a.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"hmiDA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("../whats-element/src/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
// import skeletonElement from "~packages/skeleton/skeleton";
var _dna = require("../whats-element/src/compute/dna");
console.log("You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true.");
const whats = new (0, _indexDefault.default)({});
// @ts-ignore
window.whats = whats;
let cnt = 0;
let error = false;
function runWhatsElement(root) {
    if (error) return;
    if (root) {
        const result = whats.getUniqueId(root);
        // console.log(result.type,result.wid, root)
        if (!result.wid) {
            console.error("\u65e0\u6cd5\u5b9a\u4f4d", root);
            error = true;
            return;
        } else {
            cnt++;
            if (root.children.length) for(let i = 0; i < root.children.length; i++){
                if (!result.wid) break;
                runWhatsElement(root.children[i]);
            }
            else {
                result.wid;
                const fragments = (0, _dna.getFragmentsFromLeafElement)(root);
                console.warn(result.wid, [
                    root
                ], "leaf node", fragments);
            }
        }
    }
}
const root = document.body;
runWhatsElement(root);
const noLimitedMax = 99999999;
var BoxType;
(function(BoxType) {
    BoxType["sideBar"] = "1";
    BoxType["navBar"] = "2";
    BoxType["mainContainer"] = "3";
    BoxType["mainBlock"] = "4";
    BoxType["normalSize"] = "5";
})(BoxType || (BoxType = {}));
const sizes = [
    {
        // \u7eb5\u5411\u4fa7\u8fb9\u5bfc\u822a\u680f
        minWidth: 30,
        minHeight: window.innerHeight - 100,
        maxHeight: noLimitedMax,
        maxWidth: 400,
        typeName: BoxType.sideBar
    },
    {
        // \u6a2a\u5411\u5bfc\u822a\u680f\u5c3a\u5bf8
        minWidth: window.innerWidth - 400,
        minHeight: 30,
        maxHeight: 100,
        maxWidth: noLimitedMax,
        typeName: BoxType.navBar
    },
    {
        // \u8d85\u5927\u5bb9\u5668
        minWidth: 600,
        minHeight: 600,
        maxHeight: noLimitedMax,
        maxWidth: noLimitedMax,
        typeName: BoxType.mainContainer
    },
    {
        // \u6a2a\u5411\u5927\u5757
        minWidth: 600,
        minHeight: 300,
        maxHeight: noLimitedMax,
        maxWidth: noLimitedMax,
        typeName: BoxType.mainBlock
    },
    {
        // \u5c0f\u6a21\u5757\u57fa\u7840\u5c3a\u5bf8
        minWidth: 100,
        minHeight: 100,
        maxHeight: noLimitedMax,
        maxWidth: noLimitedMax,
        typeName: BoxType.normalSize
    }
] // function generateSkeleton() {
 //     const result = skeletonElement(document.body,{
 //         sizes: sizes,
 //         // minText: 1,
 //         position: null,
 //         ignoreSelector: ""
 //     });
 //
 //     console.log('skeleton \u7ed3\u679c\uff1a',result)
 // }
 // generateSkeleton();
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo","../whats-element/src/compute/dna":"bGLcr","../whats-element/src/index":"6KkMj"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bGLcr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * \u5bf9\u5143\u7d20\u5185\u6587\u672c\u7684\u91c7\u6837
 * offset \u504f\u79fb\u91cf(\u504f\u79fb\u91cf\u7684\u6570\u91cf\u4e5f\u6807\u8bc6\u4e86\u8be5\u8282\u70b9\u7684\u5185\u5bb9\u4e30\u5bcc\u7a0b\u5ea6)
 * text: \u504f\u79fb\u91cf\u7684\u6587\u672c\u4fe1\u606f
 * */ parcelHelpers.export(exports, "makeRangesForElement", ()=>makeRangesForElement);
parcelHelpers.export(exports, "getKeyStyles", ()=>getKeyStyles);
/**
 * \u4ece\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\uff0c\u7ed8\u5236 fragment \u56fe\u8c31
 * */ parcelHelpers.export(exports, "getFragmentsFromLeafElement", ()=>getFragmentsFromLeafElement);
var _check = require("../fragment/check");
function makeRangesForElement(element, fragments = 4) {
    const text = element.textContent || "";
    if (!text) return [];
    const ranges = [];
    for(let i = 0; i < fragments; i++){
        const offset = i * Math.floor(text.length / fragments);
        ranges.push({
            offset: offset,
            text: text.substring(offset, offset + 4)
        });
    }
    return ranges;
}
/**
 * \u63d0\u53d6\u4e00\u4e2a\u8282\u70b9\u7684\u5173\u952e\u6837\u5f0f\u7279\u5f81
 *
 * */ const KEY_STYLES = [
    "width",
    "height",
    "position",
    "display"
];
function getKeyStyles(element) {
    const styleMap = getComputedStyle(element);
    const result = {};
    KEY_STYLES.forEach(function(key) {
        //@ts-ignore
        result[key] = styleMap[key];
    });
    return result;
}
function getFragmentsFromLeafElement(leafElement) {
    const fragments = [];
    const parent = leafElement.parentElement;
    if (!parent || !parent.parentElement) {
        fragments.unshift(leafElement);
        return fragments;
    }
    const canBeFragment = (0, _check.checkCanBeFragmentNode)(parent);
    if (canBeFragment) {
        const { height: parentHeight, width: parentWidth } = parent.getBoundingClientRect();
        const parentArea = parentHeight * parentWidth;
        const { height, width } = parent.parentElement.getBoundingClientRect();
        const gradArea = height * width;
        // \u6709\u5fc5\u8981\u4f5c\u4e3a fragment \u8282\u70b9
        const areaChanged = parentArea / gradArea < 0.8;
        /**\u9762\u79ef\u7a81\u53d8\u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u7684 fragment */ if (areaChanged) fragments.unshift(parent);
        else {
            /**\u7279\u6b8a\u6837\u5f0f\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u7684 fragment */ const style = getComputedStyle(parent);
            if (style.display === "none" || style.position === "fixed" || style.position === "absolute") fragments.unshift(parent);
        }
    }
    /**\u7ee7\u7eed\u5411\u4e0a\u5bfb\u627e*/ fragments.unshift(...getFragmentsFromLeafElement(parent));
    return fragments;
}

},{"../fragment/check":"a7eJG","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"a7eJG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkCanBeFragmentNode", ()=>checkCanBeFragmentNode);
var _computeId = require("../compute/computeId");
var _element = require("../utils/element");
function checkCanBeFragmentNode(element) {
    const whiteListTag = [
        "html",
        "body",
        "section",
        "nav",
        "footer",
        "table"
    ];
    const tag = element.tagName.toLowerCase();
    if (whiteListTag.includes(tag)) return true;
    const parentElement = element.parentElement;
    /**\u5982\u679c\u7236\u8282\u70b9\u53ea\u6709\u4e00\u4e2a\u5b50\u8282\u70b9\uff0c\u5219\u7236\u8282\u70b9\u66f4\u9002\u5408\u4f5c\u4e3a fragment*/ if (parentElement && parentElement.children && parentElement.children.length <= 1) return false;
    /**\u5143\u7d20\u7f3a\u4e4f\u6807\u8bc6 class or id\uff0c\u4e0d\u9002\u5408\u4f5c\u4e3a fragment */ const classNameOrId = (0, _computeId.getElementClass)(element) || (0, _element.getValidIdForElement)(element);
    if (!classNameOrId) return false;
    return true;
}

},{"../compute/computeId":"gmkYt","../utils/element":"Q5jkC","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gmkYt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElementClass", ()=>getElementClass);
parcelHelpers.export(exports, "getByRoot", ()=>getByRoot);
parcelHelpers.export(exports, "getById", ()=>getById);
/**
 * \u5bf9\u4e8e\u4e00\u4e9b form \u5143\u7d20\uff0cname \u5c5e\u6027\u6709\u552f\u4e00\u6027
 * */ parcelHelpers.export(exports, "getByName", ()=>getByName);
/**
 * \u5bf9\u4e8e\u4e00\u4e9b\u6bd4\u8f83\u7f55\u89c1\u7684 tag \u53ef\u4ee5\u4f5c\u4e3a\u6807\u8bc6\u7b26\u6765\u4f7f\u7528
 * */ parcelHelpers.export(exports, "getByTagName", ()=>getByTagName);
/**
 * \u57fa\u4e8e tag+class \u5b9a\u4f4d
 * */ parcelHelpers.export(exports, "getByClass", ()=>getByClass);
parcelHelpers.export(exports, "getByType", ()=>getByType);
parcelHelpers.export(exports, "getByAttr", ()=>getByAttr);
/**\u53ea\u80fd\u7528\u4e8e\u7236\u8282\u70b9\u7684\u573a\u666f\uff0c\u4e0d\u652f\u6301\u8de8\u7ea7\u522b\u7684\u67e5\u8be2\uff08css nth-of-type selector \u7684\u9650\u5236 \uff09
 * \u57fa\u4e8e\u7236\u8282\u70b9\uff0c\u7684\u7d22\u5f15\u5e8f\u53f7\u5b9a\u4f4d
 * */ parcelHelpers.export(exports, "getByIndex", ()=>getByIndex) /**
 * \u5728\u7236\u8282\u70b9\u7684\u57fa\u7840\u4e0b\uff0c\u8ba1\u7b97\u51fa\u5b83\u7684\u552f\u4e00\u6807\u8bc6\uff1b
 * \u7f3a\u70b9\uff1a\u5982\u679c\u7236\u8282\u70b9\u4e22\u5931\uff0c\u5219\u4e5f\u65e0\u6cd5\u5bfb\u627e\u5230
 * todo delete
 * */  // function getByParent(element: HTMLElement, parentQueryString?: String | null, classFilter?: ClassFilter):WhatsUniqueResult|null  {
 //     const parentNode = element.parentElement;
 //     if(!parentNode || !parentQueryString){
 //         return {
 //             wid: null,
 //             type: null,
 //         }
 //     }
 //     // \u57fa\u4e8e\u4e0a\u4e00\u7ea7\u8282\u70b9\u7684\u4f4d\u7f6eID\uff0c\u901a\u8fc7 name.class \u6761\u4ef6 \u6765\u5bfb\u627e\u5b50\u8282\u70b9
 //     const targetQuery = element.tagName.toLowerCase() + getElementClass(element,classFilter);
 //     const queryString = (parentQueryString+SPLIT_MODE_CODE+targetQuery).trim();
 //     // \u901a\u8fc7\u589e\u52a0\u6761\u4ef6\u540e\uff0c\u5982\u679c\u80fd\u76f4\u63a5\u63d2\u5230\uff0c\u5219\u76f4\u63a5\u8fd4\u56de
 //     if(getTarget(queryString,QueryTypes.bySplit).target === element){
 //         return {
 //             wid: queryString,
 //             type: QueryTypes.bySplit,
 //         }
 //     }
 //
 //     // \u65e0\u6cd5\u901a\u8fc7\u589e\u52a0 name.class \u5b9a\u4f4d\uff0c\u5219\u901a\u8fc7 + nth:child \u6765\u6309\u987a\u5e8f\u67e5\u627e; \u8fd9\u91cc\u53ea\u67e5\u627e\u4e00\u7ea7\u5b50\u8282\u70b9\uff0c\u4e4b\u540e\u53ef\u4ee5\u653e\u5f00
 //     const matchedFirstChildNodes = findFirstLevelChildren(parentNode,queryString);
 //     /**\u5982\u679c\u4e00\u7ea7\u5b50\u8282\u70b9\u627e\u4e0d\u5230\uff0c\u5219\u65e0\u6cd5\u5b9a\u4f4d*/
 //     if(!matchedFirstChildNodes.length){
 //         return {
 //             wid: null,
 //             type: null
 //         }
 //     }
 //
 //     /**\u786e\u5b9a\u53ef\u4ee5\u901a\u8fc7 querySelector \u627e\u5230\u5b50\u8282\u70b9\u7684\u524d\u63d0\u4e0b\uff0c\u8ba1\u7b97\u4f5c\u4e3a\u8282\u70b9\u7684 \u5e8f\u5217\u53f7*/
 //     let index = -1;
 //     // \u8fd9\u91cc\u7684 children \u5305\u542b\u6240\u6709\u5b50\u3001\u5b59\u8282\u70b9\u3002\u83b7\u53d6\u5230\u7d22\u5f15\u503c
 //     for(let j=0; j<parentNode.children.length; j++){
 //         // \u53ea\u6bd4\u8f83\u4e00\u7ea7\u5b50\u8282\u70b9
 //         if(parentNode.children[j]===element){
 //             index = j+1;
 //             break;
 //         }
 //     }
 //
 //     /**\u6784\u9020\u5e8f\u5217\u53f7\u7684\u9009\u62e9\u5668*/
 //     const queryByIndex = queryString +  ":nth-child("+index+")";
 //     if(getTarget(queryByIndex,QueryTypes.bySplit).target === element){
 //         return {
 //             wid: queryByIndex,
 //             type: QueryTypes.bySplit,
 //         }
 //     }
 //
 //     return {
 //         wid: null,
 //         type: QueryTypes.bySplit
 //     }
 // }
;
var _const = require("../const");
var _target = require("../target");
var _targetDefault = parcelHelpers.interopDefault(_target);
var _element = require("../utils/element");
// \u4e00\u4e9b\u975e\u6cd5\u7684class\u540d\uff0c\u4e0d\u53ef\u4f5c\u4e3a\u5b9a\u4f4d\u7b26
const BASIC_BLOCK_CLASS_RULES = [
    /[:\[\]\.]/,
    /\//,
    /^\d+/,
    /-px/,
    /\d+rem/,
    /**tailwind \u8bed\u6cd5\uff0c\u8fb9\u754c*/ /m[tlrbxy]-\d+/,
    /p[ltbrxy]-\d+/,
    /**tailwind \u8bed\u6cd5\uff0c\u4f4d\u7f6e\u4fe1\u606f*/ /top-\d+$/,
    /left-\d+$/,
    /right-\d+$/,
    /bottom-\d+$/,
    /^[hw]-\d+$/,
    /**tailwind \u8bed\u6cd5\uff0czindex*/ /z-\d+$/,
    /inset-\d+$/,
    "active"
];
function getElementClass(element, classFilter = {
    blockClassList: [],
    maxLength: 10
}) {
    const blockList = [
        ...BASIC_BLOCK_CLASS_RULES,
        ...classFilter?.blockClassList || []
    ];
    const classNames = [];
    for(let i = 0; i < element.classList.length; i++){
        const item = element.classList[i];
        if (!/^[a-zA-Z]/.test(item)) continue;
        /**\u68c0\u6d4bclass\u5408\u6cd5\u6027*/ let blocked = false;
        for(let j = 0; j < blockList.length; j++){
            const tempNameOrRule = blockList[j];
            if (typeof tempNameOrRule === "string") {
                if (tempNameOrRule === item) {
                    blocked = true;
                    break;
                }
            } else if (tempNameOrRule.test(item)) {
                blocked = true;
                break;
            }
        }
        if (!blocked) classNames.push(item);
    }
    return classNames.length ? "." + classNames.slice(0, classFilter.maxLength || 99).join(".") : "";
}
function getElementTag(element) {
    const tag = element.tagName.toLowerCase();
    return tag;
}
function getByRoot(element) {
    const tag = element.tagName.toLowerCase();
    if (tag === "body" || tag === "html") return {
        type: (0, _const.QueryTypes).bySelector,
        wid: tag
    };
    else return null;
}
function getById(element, root) {
    const id = (0, _element.getValidIdForElement)(element);
    if (!id) return null;
    const tag = element.tagName.toLowerCase();
    const wid = tag + "#" + id;
    /**\u4e8c\u6b21\u6821\u9a8c*/ if ((0, _targetDefault.default)(wid, (0, _const.QueryTypes).bySelector, root).target === element) return {
        wid: wid,
        type: (0, _const.QueryTypes).bySelector
    };
    return null;
}
function getByName(element, root) {
    const tag = getElementTag(element);
    const name = "name" in element ? element.name : "";
    const query = name ? `${tag}[name="${name}"]` : "";
    if (query && (0, _targetDefault.default)(query, (0, _const.QueryTypes).byName, root).target === element) return {
        wid: query,
        type: (0, _const.QueryTypes).byName
    };
    return null;
}
function getByTagName(element, root) {
    const tag = getElementTag(element) || "";
    const allowByTagName = [
        "svg",
        "path",
        "iframe",
        "video",
        "img",
        "b",
        "strong"
    ].includes(tag.toLowerCase());
    const isCustomTag = tag.indexOf("-") > -1;
    if (allowByTagName || isCustomTag) {
        const query = tag ? `${tag}` : "";
        if (query && (0, _targetDefault.default)(query, (0, _const.QueryTypes).byTagName, root).target === element) return {
            wid: query,
            type: (0, _const.QueryTypes).byName
        };
    }
    return null;
}
function getByClass(element, classFilter, root) {
    const className = getElementClass(element, classFilter);
    const tag = element.tagName.toLowerCase();
    const wid = tag + className;
    if (className && (0, _targetDefault.default)(wid, (0, _const.QueryTypes).bySelector, root).target === element) return {
        wid: wid,
        type: (0, _const.QueryTypes).bySelector
    };
    return null;
}
function getByType(element, root) {
    const type = "type" in element ? (element.type || "")?.toString()?.toLowerCase() : "";
    if (type === "radio") {
        const value = "value" in element ? element.value : "";
        const tag = element.tagName.toLowerCase();
        const name = "name" in element ? element.name : "";
        let queryString = tag + "[value='" + value + "']";
        if (name) queryString += "[name='" + name + "']";
        if ((0, _targetDefault.default)(queryString, (0, _const.QueryTypes).bySelector, root).target === element) return {
            wid: queryString,
            type: (0, _const.QueryTypes).bySelector
        };
    }
    return null;
}
function getByAttr(element, root) {
    const tag = element.tagName.toLowerCase();
    // if(tag === 'a'){
    //     const href = element.getAttribute('href');
    //     if(href){
    //         const queryString = "a[href='"+href+"']";
    //         if(getTarget(queryString,QueryTypes.bySelector,root).target===element){
    //             return {
    //                 wid: queryString,
    //                 type: QueryTypes.bySelector,
    //             }
    //         }
    //     }
    // }
    const types = [
        "href",
        "src",
        "tabIndex",
        "role"
    ];
    for(let i = 0; i < types.length; i++){
        const attribute = types[i];
        const value = element.getAttribute(attribute);
        if (value !== undefined) {
            const queryString = `${tag}[${attribute}="${value}"]`;
            if ((0, _targetDefault.default)(queryString, (0, _const.QueryTypes).bySelector, root).target === element) return {
                wid: queryString,
                type: (0, _const.QueryTypes).bySelector
            };
        }
    }
    return null;
}
function getByIndex(element, classFilter, parentWid) {
    // TODO \u8fd9\u91cc\u5bf9 tagName \u505a\u8fc7\u6ee4\uff0c\u4e00\u822c\u6027\u7684\u6807\u7b7e\u5982 div\span \u4e0d\u5e94\u8be5\u4f5c\u4e3a\u6807\u8bc6\u7b26\uff0c\u4e0d\u5177\u5907\u6807\u8bc6\u80fd\u529b\uff0c\u539f\u7f51\u7ad9\u5f88\u53ef\u80fd\u5bf9\u5176\u4efb\u610f\u8c03\u6574
    // TODO \u975e\u5c42\u7ea7\u6a21\u5f0f\u4e0b\u7684 \u901a\u8fc7 index \u83b7\u53d6\uff0c\u4e0d\u591f\u7a33\u5065\u3002\u907f\u514d\u51fa\u73b0\u5355\u5c42\u7ea7\u7684\u57fa\u4e8eindex\u7684\u5b9a\u4f4d\uff0c\u5982 p:nth-of-type(2) \uff0c\u5e94\u5c3d\u53ef\u80fd\u7684\u4fdd\u8bc1\u8db3\u591f\u591a\u7684\u4e0a\u5c42\u7ea7\uff0c\u5982 #username  p:nth-of-type(2); \u7f51\u9875\u53d8\u52a8\u7684\u60c5\u51b5\u4e0b \uff0c \u63d0\u5347\u5b9a\u4f4d\u7684\u7a33\u5b9a\u6027
    const className = getElementClass(element, classFilter);
    const queryString = className ? className : element.tagName.toLowerCase();
    // queryString = className ? queryString + className: queryString
    // TODO \u6392\u67e5\u8fd9\u91cc\u662f document \u8fd8\u662f element parent \u4f5c\u4e3a\u53c2\u6570\u4f20\u5165 \u8fd9\u91cc\u7684\u81ea\u5143\u7d20\u62c9\u53d6\u903b\u8f91
    // const elements = element.parentElement.querySelectorAll(queryString)
    const elements = element.parentElement?.children;
    if (elements && elements.length > 0) {
        let index = 0;
        for(let i = 0; i < elements.length; i++){
            // \u53ea\u6bd4\u5bf9\u4e00\u7ea7\u81ea\u8282\u70b9
            if (elements[i].parentElement !== element.parentElement) continue;
            if (elements[i].tagName === element.tagName) index++;
            if (element === elements[i]) break;
        }
        if (index) {
            const queryStringWithIndex = parentWid + (0, _const.PARENT_SPLIT_CODE) + queryString + ":nth-of-type(" + index + ")";
            // https://www.w3schools.com/cssref/css_selectors.php
            // \u91cd\u70b9\uff0c\u57fa\u4e8e\u7236\u8282\u70b9\u4f5c\u4e3a\u8303\u56f4ID\uff0c\u6240\u4ee5\u67e5\u627e\u65f6\uff0c\u9700\u8981\u63d0\u5347\u81f3\u7956\u7236\u8282\u70b9
            const checkResult = (0, _targetDefault.default)(queryStringWithIndex, (0, _const.QueryTypes).bySelector, element.parentElement?.parentElement).target;
            if (checkResult === element) return {
                wid: queryStringWithIndex,
                type: (0, _const.QueryTypes).bySelector
            };
            else {
                console.log("queryString", queryStringWithIndex);
                console.log("checkResult", checkResult);
                console.log(element, "\u6821\u9a8c\u5931\u8d25");
                console.log(elements, "elements");
                console.log(element.parentElement, "root");
                // const find = element.parentElement.querySelectorAll(queryString);
                // console.log(find,'result',find.length)
                for(let j = 0; j < element.parentElement.children.length; j++){
                    const checkIndexElement = element.parentElement.querySelector(queryString + ":nth-of-type(" + j + ")");
                    console.log("check", j);
                    if (checkIndexElement === element) {
                        console.log("the index should be", j);
                        break;
                    }
                }
                return null;
            // const checkTarget = getTarget(queryString,QueryTypes.bySelector).target;
            }
        } else {
            console.warn("did not found index");
            debugger;
        }
    }
    console.error("children is empty", element);
    return null;
}

},{"../const":"gWV3s","../target":"6uPbm","../utils/element":"Q5jkC","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gWV3s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SPLIT_MODE_CODE", ()=>SPLIT_MODE_CODE);
parcelHelpers.export(exports, "PARENT_SPLIT_CODE", ()=>PARENT_SPLIT_CODE);
parcelHelpers.export(exports, "QueryTypes", ()=>QueryTypes);
const SPLIT_MODE_CODE = "  ";
const PARENT_SPLIT_CODE = " > ";
var QueryTypes;
(function(QueryTypes) {
    QueryTypes[// \u901a\u8fc7ID\u67e5\u627e
    "byId"] = "id";
    QueryTypes[// \u901a\u8fc7css selector \u67e5\u627e
    "bySelector"] = "css_selector";
    QueryTypes[// \u901a\u8fc7 name \u67e5\u627e\uff0c\u4e00\u822c\u7528\u4e8e input
    "byName"] = "name";
    QueryTypes["byTagName"] = "tagName";
    QueryTypes[// \u5206\u6bb5\u67e5\u627e\uff0c\u6309\u5c42\u7ea7\u9010\u5c42\u9012\u8fdb\u67e5\u627e\uff0c\u6700\u666e\u904d\u7684\u5f62\u5f0f
    "bySplit"] = "steps";
    QueryTypes["byParent"] = "parent";
})(QueryTypes || (QueryTypes = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6uPbm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getTarget);
var _const = require("../const");
function getTarget(queryString = "", type, root) {
    const query = queryString ? queryString.trim() : "";
    const findRoot = root || document;
    if (!query || !findRoot) {
        console.trace("wid \u6216 \u6839\u8282\u70b9\u4e0d\u5b58\u5728", query, findRoot);
        return {
            target: null,
            nearest: findRoot,
            error: "wid \u6216 \u6839\u8282\u70b9\u4e0d\u5b58\u5728"
        };
    }
    // const regex = new RegExp(`${SPLIT_MODE_CODE}`);
    const targetQueryArray = query.split((0, _const.SPLIT_MODE_CODE));
    if (!type) {
        if (targetQueryArray.length > 1) type = (0, _const.QueryTypes).bySelector;
    }
    // if(queryString==='a#navbtn_exercises > i.fa.fa-caret-down'){
    //     debugger
    // }
    let target = null;
    let nearest = findRoot;
    switch(type){
        case (0, _const.QueryTypes).byId:
            target = "getElementById" in findRoot ? target = findRoot.getElementById(queryString) : null;
            break;
        case (0, _const.QueryTypes).byName:
            target = "getElementsByName" in findRoot ? findRoot.getElementsByName(queryString)[0] : null;
            break;
        case (0, _const.QueryTypes).bySelector:
            // \u8fd9\u91cc\u5e94\u8be5\u7528 querySelectorAll \u6765\u5224\u65ad\u662f\u5426\u5177\u5907\u552f\u4e00\u6027
            try {
                const matchedList = findRoot.querySelectorAll ? findRoot.querySelectorAll(queryString) : [];
                if (matchedList && matchedList.length === 1) target = matchedList[0];
            // if(matchedList.length>1){
            //     console.warn('\u5b58\u5728\u591a\u4e2a\u6ee1\u8db3', matchedList)
            // }
            } catch (e) {
                console.warn(e, queryString);
            }
            break;
        /**whats-element \u6269\u5c55\u7684\u67e5\u627e\u65b9\u6cd5**/ case (0, _const.QueryTypes).bySplit:
            const selectors = targetQueryArray.filter((item)=>{
                return item ? !!item.trim() : false;
            });
            let root1 = document;
            /**\u9010\u7ea7\u67e5\u627e*/ for(let i = 0; i < selectors.length; i++){
                let tempNode = getTarget(selectors[i], undefined, root1);
                if (tempNode.target) {
                    target = tempNode.target;
                    nearest = tempNode.target;
                    root1 = tempNode.target;
                } else break;
            }
            break;
        default:
            /**\u672a\u6307\u5b9atype\u7684\u60c5\u51b5\u4e0b\uff0c\u6309\u4f18\u5148\u7ea7\u67e5\u627e*/ const result = getTarget(queryString, (0, _const.QueryTypes).byId, findRoot).target || getTarget(queryString, (0, _const.QueryTypes).byName, findRoot).target || getTarget(queryString, (0, _const.QueryTypes).bySelector, findRoot).target;
            if (result) return {
                target: result,
                nearest: nearest,
                error: ""
            };
            else return getTarget(queryString, (0, _const.QueryTypes).byId, findRoot);
    }
    // TODO \u6b63\u5411\u67e5\u627e\u4e0d\u5230\u7684\u60c5\u51b5\u4e0b\uff0c\u8fdb\u884c\u53cd\u5411\u67e5\u627e\uff0c\u907f\u514d\u56e0\u4e3a\u7236\u8282\u70b9\u7684DOM \u53d8\u52a8\u5bfc\u81f4\u5b50\u8282\u70b9\u65e0\u6cd5\u88ab\u5b9a\u4f4d\uff0c\u5b58\u5728\u591a\u4e2a\u8282\u70b9\u7684\u65f6\u5019\uff0c\u6309\u7167\u6df1\u5ea6\u4f18\u5148\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\u3002
    return {
        nearest: nearest,
        target: target,
        error: ""
    };
}

},{"../const":"gWV3s","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"Q5jkC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValidIdForElement", ()=>getValidIdForElement);
function getValidIdForElement(element) {
    const id = element.id;
    if (!id) return null;
    // id \u542b\u6709\u7279\u6b8a\u5b57\u7b26 . : \u7b49\u7279\u6b8a\u5b57\u7b26\u4e32 \u4e0d\u53ef\u7528
    if (/[\.:!]/.test(id)) {
        console.log("\u5ffd\u7565\u542b\u6709\u7279\u6b8a\u5b57\u7b26", id);
        return null;
    }
    // \u7eaf\u6570\u5b57\u7684 ID \uff0c\u4e0d\u53ef\u4fe1\uff0c\u53ef\u80fd\u662f\u7cfb\u7edf\u57fa\u4e8e list \u751f\u6210\uff0c\u53d8\u52a8\u6027\u5927\uff0c\u53ef\u80fd\u8bef\u5224\u67e5\u627e\u3002
    if (/^\d+$/.test(id)) {
        console.log("\u5ffd\u7565\u7eaf\u6570\u5b57", id);
        return null;
    }
    return id;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6KkMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _whatsElement = require("./WhatsElement");
var _whatsElementDefault = parcelHelpers.interopDefault(_whatsElement);
exports.default = (0, _whatsElementDefault.default);

},{"./WhatsElement":"ebqNP","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"ebqNP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _target = require("./target");
var _targetDefault = parcelHelpers.interopDefault(_target);
var _compute = require("./compute");
var _const = require("./const");
var _dna = require("./compute/dna");
var _data = require("./const/data");
class WhatsElement {
    constructor(option = (0, _data.getDefaultOption)()){
        this.option = option;
    }
    getTarget(queryString, type, root) {
        return (0, _targetDefault.default)(queryString, type, root);
    }
    /**
     * \u83b7\u53d6\u4e00\u4e2a\u53ef\u4ee5\u4f5c\u4e3a element \u6bd4\u5bf9\u57fa\u56e0\u7684\u6807\u8bc6
     * \u5305\u542b\u81ea\u8eab\u8282\u70b9\u7684\u91c7\u6837\uff1atext\u5185\u5bb9\uff0c\u6837\u5f0f\u5bbd\u9ad8\u5e03\u5c40\u3001\u4f4d\u4e8e\u6574\u4e2adocument\u7684\u5e03\u5c40\u4f4d\u7f6e\u3002
     * \u8fd9\u4e9b\u4fe1\u606f\u6709\u5229\u4e8e\u4e8c\u6b21\u6bd4\u5bf9\uff0c\u5f53 uniqueId \u53d8\u5316\u540e\u7684\u5173\u952e\u4fe1\u606f
     * */ getElementDNA(element) {
        return {
            ranges: (0, _dna.makeRangesForElement)(element),
            styles: (0, _dna.getKeyStyles)(element),
            fragments: []
        };
    }
    /**
     * \u6307\u5b9a\u4e00\u4e2a\u5143\u7d20\uff0c\u8ba1\u7b97\u51fa\u53ef\u4ee5\u5b9a\u4f4d\u5230\u8be5\u5143\u7d20\u7684\u552f\u4e00\u7279\u5f81\u63cf\u8ff0
     * */ getUniqueId(element) {
        /**
         * \u8be5\u5143\u7d20\u7684\u7279\u5f81\u63cf\u8ff0
         * */ try {
            return (0, _compute.getUniqueId)(element, this.option.ignoreClassRule);
        } catch (e) {
            console.error(e, "\u8ba1\u7b97\u5143\u7d20\u4fe1\u606f\u5f02\u5e38", element);
            return {
                wid: null,
                type: null
            };
        }
    }
    /**
     * \u6839\u636ewid,\u67e5\u8be2DOM\u94fe
     * \u8fd4\u56de\u53ef\u8ffd\u6eaf\u76ee\u7684\u5143\u7d20 \u8fc7\u7a0b\u4e2d\u7684 \u6240\u6709 DOM \u8282\u70b9\u3002\u6700\u5927\u7a0b\u5ea6\u7684\u627e\u5230 \u76ee\u7684\u5143\u7d20\u7684\u6700\u5c0f\u8303\u56f4\u3002\u7f29\u5c0f\u76ee\u6807\u8303\u56f4\u3002
     * */ getElementsLines(queryString) {
        if (!queryString) return [];
        const queryStringArray = queryString.trim().split((0, _const.SPLIT_MODE_CODE));
        const result = [];
        for(let i = 0; i < queryStringArray.length; i++){
            const tempQuery = queryStringArray.slice(0, i + 1).join((0, _const.SPLIT_MODE_CODE)).trim();
            if (!tempQuery) continue;
            const tempTarget = this.getTarget(tempQuery, i === 0 ? undefined : (0, _const.QueryTypes).bySplit);
            if (tempTarget.target) result.push(tempTarget.target);
        }
        return result;
    }
}
exports.default = WhatsElement;

},{"./target":"6uPbm","./compute":"7DSdl","./const":"gWV3s","./compute/dna":"bGLcr","./const/data":"4JLoB","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7DSdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * \u8ba1\u7b97 HTMLElement \u7684\u552f\u4e00\u5b9a\u4f4d wid \u5b57\u7b26\u4e32
 * */ parcelHelpers.export(exports, "getUniqueId", ()=>getUniqueId);
var _computeId = require("./computeId");
var _target = require("../target");
var _targetDefault = parcelHelpers.interopDefault(_target);
var _const = require("../const");
function getUniqueIdInScope(element, classFilter = {
    blockClassList: [],
    maxLength: 10
}, rootElement) {
    return (0, _computeId.getByRoot)(element) || (0, _computeId.getById)(element, rootElement) || (0, _computeId.getByName)(element, rootElement) || (0, _computeId.getByClass)(element, classFilter, rootElement) || (0, _computeId.getByType)(element, rootElement) || (0, _computeId.getByAttr)(element, rootElement);
}
/**
 * \u57fa\u4e8e\u5f53\u524d\u8282\u70b9\u627e\u5230\u4e00\u4e2a\u53ef\u4ee5\u88ab\u5168\u5c40\u552f\u4e00\u5b9a\u4f4d\u7684\u5143\u7d20
 * */ function getUniqueIdForPre(element, classFilter = {
    blockClassList: [],
    maxLength: 10
}) {
    const parentNode = element.parentElement;
    if (parentNode) {
        const result = getUniqueIdInScope(parentNode, classFilter);
        if (result && result.wid) return {
            element: parentNode,
            wid: result.wid
        };
        else return getUniqueIdForPre(parentNode, classFilter);
    }
    return null;
}
function getUniqueId(element, classFilter = {
    blockClassList: [],
    maxLength: 10
}, rootElement) {
    /**\u5165\u53c2\u7c7b\u578b\u5b88\u62a4*/ if (!element.tagName) {
        console.error("input is not a HTML element", element);
        return {
            wid: null,
            type: null
        };
    }
    /**
     * \u6839\u8282\u70b9 > locate by id > by name > by class > type > link > index > parent
     * TODO \u8bc6\u522b\u52a8\u6001\u751f\u6210\u7684ID\uff0c\u89c4\u5219 \u957f\u5ea6\u8fc7\u957f\uff1f \u542b\u6709\u6570\u5b57\u3001\u7279\u6b8a\u5b57\u7b26\u7b49
     * TODO \u589e\u52a0\u4e00\u79cd\u5b9a\u4f4d\u65b9\u5f0f\uff0c\u6309inner\u6587\u672c\u5185\u5bb9 md5 \u5904\u7406\u540e\u751f\u6210ID
     * **/ let result = getUniqueIdInScope(element, classFilter, rootElement);
    /**
     * \u65e0\u6cd5\u5728\u5168\u5c40\u8303\u56f4\u5185\u5f97\u5230\u552f\u4e00ID\uff0c
     * \u9700\u8981\u8fdb\u4e00\u6b65\u901a\u8fc7\u7956/\u7236\u8282\u70b9\u5b9a\u4f4d\u3002\u5728\u7956/\u7236\u8282\u70b9\u7684\u8303\u56f4\u5185\u5f97\u5230\u552f\u4e00ID\u3002
     * */ if (!result) {
        const parentUnique = getUniqueIdForPre(element, classFilter);
        // todo \u9009\u62e9\u53ef\u4ee5\u4f5c\u4e3a fragment \u7684\u5b9a\u4f4d\u4f5c\u4e3a\u7956\u5148\u8282\u70b9
        if (parentUnique) {
            /**\u9012\u5f52\u5b9a\u4f4d\u4e0a\u4e00\u7ea7\u8282\u70b9\u7684ID*/ const relativeResult = getUniqueIdInScope(element, classFilter, parentUnique.element) || (0, _computeId.getByTagName)(element, parentUnique.element);
            const relativeWid = relativeResult ? relativeResult.wid : "";
            /**\u7236\u5143\u7d20\u80fd\u591f\u5728\u5168\u5c40\u5f97\u5230\u552f\u4e00ID\u65f6*/ if (relativeWid) result = {
                type: (0, _const.QueryTypes).bySplit,
                wid: parentUnique.wid + (0, _const.SPLIT_MODE_CODE) + relativeWid
            };
        }
    }
    /**\u65e0\u6cd5\u901a\u8fc7\u7956\u7236\u8282\u70b9\u7f29\u5c0f\u8303\u56f4\u540e\uff0c\u5f97\u5230\u552f\u4e00ID\uff0c\u5219\u5fc5\u987b\u4f9d\u9760\u76f4\u7cfb\u7236\u4eb2\u8282\u70b9\u901a\u8fc7\u7d22\u5f15\u5f97\u5230*/ if (!result) {
        const parentNode = element.parentElement;
        const parentUniqueId = parentNode ? getUniqueId(parentNode, classFilter) : "";
        if (parentUniqueId && parentUniqueId.wid) {
            const parentRelatedQuery = (0, _computeId.getByIndex)(element, classFilter, parentUniqueId.wid);
            if (parentRelatedQuery && parentRelatedQuery.wid) result = {
                wid: parentRelatedQuery.wid,
                type: (0, _const.QueryTypes).byParent
            };
        }
    }
    if (!result) {
        console.error("cant unique id for element ", element);
        return {
            wid: null,
            type: null
        };
    }
    const checkResult = result.wid ? (0, _targetDefault.default)(result.wid) : {
        target: null,
        type: null
    };
    if (checkResult.target === element) return result;
    else console.warn("\u68c0\u6d4b\u4e0d\u901a\u8fc7", element, checkResult.target, result.wid);
    // \u65e0\u6cd5\u5b9a\u4f4d\u7684\u60c5\u51b5\uff0c\u589e\u52a0
    console.error(element, "\u65e0\u6cd5\u88ab\u552f\u4e00\u5b9a\u4f4d");
    return {
        wid: null,
        type: null
    };
}

},{"./computeId":"gmkYt","../target":"6uPbm","../const":"gWV3s","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4JLoB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOption", ()=>getDefaultOption);
function getDefaultOption() {
    return {
        minDeep: 4,
        ignoreClassRule: {
            blockClassList: [],
            maxLength: 10
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["1SOAj","hmiDA"], "hmiDA", "parcelRequire8cd9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsaUJBQVMsRUFBRTtnQkFDakIsS0FBSyxhQUFhLE1BQU8sQ0FBQSxHQUFBLHNCQUFjLElBQUk7WUFDL0M7UUFFUjtJQUNKO0lBRUEseUNBQXlDLEdBQ3pDLElBQUcsQ0FBQyxRQUFPO1FBQ1AsTUFBTSxhQUFhLFFBQVE7UUFDM0IsTUFBTSxpQkFBaUIsYUFBYSxZQUFZLFlBQVcsZUFBZTtRQUUxRSxJQUFHLGtCQUFrQixlQUFlLEtBQUk7WUFDcEMsTUFBTSxxQkFBcUIsQ0FBQSxHQUFBLHFCQUFTLEVBQUUsU0FBUSxhQUFZLGVBQWU7WUFDekUsSUFBRyxzQkFBc0IsbUJBQW1CLEtBQ3hDLFNBQVM7Z0JBQ0wsS0FBSyxtQkFBbUI7Z0JBQ3hCLE1BQU0sQ0FBQSxHQUFBLGlCQUFTLEVBQUU7WUFDckI7UUFFUjtJQUNKO0lBRUEsSUFBRyxDQUFDLFFBQU87UUFDUCxRQUFRLE1BQU0sK0JBQStCO1FBQzdDLE9BQU87WUFDSCxLQUFLO1lBQ0wsTUFBTTtRQUNWO0lBQ0o7SUFFQSxNQUFNLGNBQWMsT0FBTyxNQUFNLENBQUEsR0FBQSxzQkFBUSxFQUFFLE9BQU8sT0FBTztRQUFDLFFBQVE7UUFBSyxNQUFNO0lBQUk7SUFFakYsSUFBRyxZQUFZLFdBQVcsU0FDdEIsT0FBTztTQUVQLFFBQVEsS0FBSyxTQUFTLFNBQVEsWUFBWSxRQUFPLE9BQU87SUFJNUQsYUFBYTtJQUNiLFFBQVEsTUFBTSxTQUFRO0lBQ3RCLE9BQU87UUFDSCxLQUFLO1FBQ0wsTUFBTTtJQUNWO0FBQ0o7Ozs7O0FDdkhBLHNEQUFnQjtBQUFULFNBQVM7SUFDWixPQUFPO1FBQ0gsU0FBUztRQUNULGlCQUFpQjtZQUNiLGdCQUFnQixFQUFFO1lBQ2xCLFdBQVc7UUFDZjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTgyNTExZTUyNjY5ZTJmMmMuanMiLCJwYWNrYWdlcy93aGF0cy1leHQvY29udGVudC50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvY29tcHV0ZS9kbmEudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy9mcmFnbWVudC9jaGVjay50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2NvbXB1dGUvY29tcHV0ZUlkLnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvY29uc3QvaW5kZXgudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy90YXJnZXQvaW5kZXgudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy91dGlscy9lbGVtZW50LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvaW5kZXgudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy9XaGF0c0VsZW1lbnQudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy9jb21wdXRlL2luZGV4LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvY29uc3QvZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcD10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciB5PSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEg9bmV3IFNldChwKSxfPWU9PkguaGFzKGUpLFg9cC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBHPV8oXCItLWRyeS1ydW5cIiksZD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixaPWQoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxEPTAsYz0oLi4uZSk9PmQoKSYmdShgXFx1ezFGN0UxfSAke0QrK31gLC4uLmUpO3ZhciBzPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL1VzZXJzL2tlcmVuL0Rlc2t0b3Avd2hhdHMtZWxlbWVudC9wYWNrYWdlcy93aGF0cy1leHQvY29udGVudC50c1wiLFwiYnVuZGxlSWRcIjpcIjgxZTgwMWZkOTU3M2E0ZTdcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1Njg0M307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPXMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpzLnZlcmJvc2V9fTt2YXIgUz1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe1MuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIXMuaG9zdHx8cy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpzLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBzLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke3Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgaSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWkuY29kZWZyYW1lfHxpLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIraS5tZXNzYWdlK2BcbmArdytgXG5cbmAraS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtzLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke3MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIG49XCJfX3BsYXNtby1sb2FkaW5nX19cIixUPXR5cGVvZiB0cnVzdGVkVHlwZXM8XCJ1XCI/dHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShgdHJ1c3RlZC1odG1sLSR7bn1gLHtjcmVhdGVIVE1MOmU9PmV9KTp2b2lkIDA7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiAkKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPW47bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7bn0ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7bn06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtufSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtufSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtufSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIEYoZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9JCgpO2U9Rih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgTj1gJHtFfSR7bW9kdWxlLmlkfV9fYCxhLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7YT8uZGlzY29ubmVjdCgpLGE9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOk59KSxhLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGEub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIFcoKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fVcoKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1zLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/YS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgV2hhdHNFbGVtZW50IGZyb20gXCIuLi93aGF0cy1lbGVtZW50L3NyYy9pbmRleFwiO1xuLy8gaW1wb3J0IHNrZWxldG9uRWxlbWVudCBmcm9tIFwifnBhY2thZ2VzL3NrZWxldG9uL3NrZWxldG9uXCI7XG5pbXBvcnQge2dldEZyYWdtZW50c0Zyb21MZWFmRWxlbWVudH0gZnJvbSBcIi4uL3doYXRzLWVsZW1lbnQvc3JjL2NvbXB1dGUvZG5hXCI7XG5cbmV4cG9ydCB7fVxuXG5jb25zb2xlLmxvZyhcbiAgICBcIllvdSBtYXkgZmluZCB0aGF0IGhhdmluZyBpcyBub3Qgc28gcGxlYXNpbmcgYSB0aGluZyBhcyB3YW50aW5nLiBUaGlzIGlzIG5vdCBsb2dpY2FsLCBidXQgaXQgaXMgb2Z0ZW4gdHJ1ZS5cIlxuKVxuXG5cblxuY29uc3Qgd2hhdHMgPSBuZXcgV2hhdHNFbGVtZW50KHtcbn0pXG5cblxuLy8gQHRzLWlnbm9yZVxud2luZG93LndoYXRzID0gd2hhdHM7XG5cblxubGV0IGNudCA9IDA7XG5sZXQgZXJyb3IgPSBmYWxzZTtcbmZ1bmN0aW9uIHJ1bldoYXRzRWxlbWVudChyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGlmKGVycm9yKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZihyb290KXtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICB3aGF0cy5nZXRVbmlxdWVJZChyb290KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQudHlwZSxyZXN1bHQud2lkLCByb290KVxuICAgICAgICBpZighcmVzdWx0LndpZCl7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfml6Dms5XlrprkvY0nLHJvb3QpXG4gICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbnQrK1xuICAgICAgICAgICAgaWYocm9vdC5jaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZighcmVzdWx0LndpZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bldoYXRzRWxlbWVudChyb290LmNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC53aWQgPT09ICdib2R5ID4gZGl2Om50aC1vZi10eXBlKDE1KSA+IGRpdjpudGgtb2YtdHlwZSgxKSA+IGRpdjpudGgtb2YtdHlwZSgxKScpe1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudHMgPSBnZXRGcmFnbWVudHNGcm9tTGVhZkVsZW1lbnQocm9vdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVzdWx0LndpZCxbcm9vdF0sJ2xlYWYgbm9kZScsZnJhZ21lbnRzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5ib2R5O1xuXG5ydW5XaGF0c0VsZW1lbnQocm9vdCk7XG5cbmNvbnN0IG5vTGltaXRlZE1heCA9IDk5OTk5OTk5O1xuZW51bSBCb3hUeXBlIHtcbiAgICBzaWRlQmFyPVwiMVwiLFxuICAgIG5hdkJhcj1cIjJcIixcbiAgICBtYWluQ29udGFpbmVyPVwiM1wiLFxuICAgIG1haW5CbG9jaz1cIjRcIixcbiAgICBub3JtYWxTaXplPVwiNVwiXG59XG5jb25zdCBzaXplcyA9IFtcbiAgICB7XG4gICAgICAgIC8vIOe6teWQkeS+p+i+ueWvvOiIquagj1xuICAgICAgICBtaW5XaWR0aDogMzAsXG4gICAgICAgIG1pbkhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTAwLFxuICAgICAgICBtYXhIZWlnaHQ6IG5vTGltaXRlZE1heCxcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgdHlwZU5hbWU6IEJveFR5cGUuc2lkZUJhcixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8g5qiq5ZCR5a+86Iiq5qCP5bC65a+4XG4gICAgICAgIG1pbldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDQwMCxcbiAgICAgICAgbWluSGVpZ2h0OiAzMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAxMDAsXG4gICAgICAgIG1heFdpZHRoOiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIHR5cGVOYW1lOiBCb3hUeXBlLm5hdkJhcixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8g6LaF5aSn5a655ZmoXG4gICAgICAgIG1pbldpZHRoOiA2MDAsXG4gICAgICAgIG1pbkhlaWdodDogNjAwLFxuICAgICAgICBtYXhIZWlnaHQ6IG5vTGltaXRlZE1heCxcbiAgICAgICAgbWF4V2lkdGg6IG5vTGltaXRlZE1heCxcbiAgICAgICAgdHlwZU5hbWU6IEJveFR5cGUubWFpbkNvbnRhaW5lcixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8g5qiq5ZCR5aSn5Z2XXG4gICAgICAgIG1pbldpZHRoOiA2MDAsXG4gICAgICAgIG1pbkhlaWdodDogMzAwLFxuICAgICAgICBtYXhIZWlnaHQ6IG5vTGltaXRlZE1heCxcbiAgICAgICAgbWF4V2lkdGg6IG5vTGltaXRlZE1heCxcbiAgICAgICAgdHlwZU5hbWU6IEJveFR5cGUubWFpbkJsb2NrLFxuICAgIH0sXG4gICAge1xuICAgICAgICAvLyDlsI/mqKHlnZfln7rnoYDlsLrlr7hcbiAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgbWluSGVpZ2h0OiAxMDAsXG4gICAgICAgIG1heEhlaWdodDogbm9MaW1pdGVkTWF4LFxuICAgICAgICBtYXhXaWR0aDogbm9MaW1pdGVkTWF4LFxuICAgICAgICB0eXBlTmFtZTogQm94VHlwZS5ub3JtYWxTaXplLFxuICAgIH1cbl1cbi8vIGZ1bmN0aW9uIGdlbmVyYXRlU2tlbGV0b24oKSB7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gc2tlbGV0b25FbGVtZW50KGRvY3VtZW50LmJvZHkse1xuLy8gICAgICAgICBzaXplczogc2l6ZXMsXG4vLyAgICAgICAgIC8vIG1pblRleHQ6IDEsXG4vLyAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuLy8gICAgICAgICBpZ25vcmVTZWxlY3RvcjogXCJcIlxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZygnc2tlbGV0b24g57uT5p6c77yaJyxyZXN1bHQpXG4vLyB9XG5cbi8vIGdlbmVyYXRlU2tlbGV0b24oKTtcblxuXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7UmFuZ2V9IGZyb20gXCIuLi90eXBpbmdcIjtcbmltcG9ydCB7Y2hlY2tDYW5CZUZyYWdtZW50Tm9kZX0gZnJvbSBcIi4uL2ZyYWdtZW50L2NoZWNrXCI7XG5cbi8qKlxuICog5a+55YWD57Sg5YaF5paH5pys55qE6YeH5qC3XG4gKiBvZmZzZXQg5YGP56e76YePKOWBj+enu+mHj+eahOaVsOmHj+S5n+agh+ivhuS6huivpeiKgueCueeahOWGheWuueS4sOWvjOeoi+W6pilcbiAqIHRleHQ6IOWBj+enu+mHj+eahOaWh+acrOS/oeaBr1xuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmFuZ2VzRm9yRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCxmcmFnbWVudHM6IG51bWJlciA9IDQpIHtcbiAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJztcbiAgICBpZighdGV4dCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9ZWxzZXtcbiAgICB9XG4gICAgY29uc3QgcmFuZ2VzOiBSYW5nZVtdID0gW11cbiAgICBmb3IobGV0IGk9MDsgaSA8IGZyYWdtZW50czsgaSsrKXtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaSAqIE1hdGguZmxvb3IodGV4dC5sZW5ndGggLyBmcmFnbWVudHMpO1xuICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgIHRleHQ6IHRleHQuc3Vic3RyaW5nKG9mZnNldCxvZmZzZXQrNClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlcztcbn1cblxuXG4vKipcbiAqIOaPkOWPluS4gOS4quiKgueCueeahOWFs+mUruagt+W8j+eJueW+gVxuICpcbiAqICovXG5jb25zdCBLRVlfU1RZTEVTID0gWyd3aWR0aCcsJ2hlaWdodCcsJ3Bvc2l0aW9uJywnZGlzcGxheSddXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5U3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgS0VZX1NUWUxFUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHJlc3VsdFtrZXldID0gc3R5bGVNYXBba2V5XVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKipcbiAqIOS7juWPtuWtkOiKgueCueW8gOWni++8jOe7mOWItiBmcmFnbWVudCDlm77osLFcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJhZ21lbnRzRnJvbUxlYWZFbGVtZW50KGxlYWZFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGZyYWdtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50ID0gbGVhZkVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmKCFwYXJlbnQgfHwgIXBhcmVudC5wYXJlbnRFbGVtZW50KXtcbiAgICAgICAgZnJhZ21lbnRzLnVuc2hpZnQobGVhZkVsZW1lbnQpXG4gICAgICAgIHJldHVybiBmcmFnbWVudHNcbiAgICB9XG5cbiAgICBjb25zdCBjYW5CZUZyYWdtZW50ID0gY2hlY2tDYW5CZUZyYWdtZW50Tm9kZShwYXJlbnQpO1xuXG5cbiAgICBpZihjYW5CZUZyYWdtZW50KXtcbiAgICAgICAgY29uc3Qge2hlaWdodDogcGFyZW50SGVpZ2h0LCB3aWR0aDogcGFyZW50V2lkdGh9ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwYXJlbnRBcmVhID0gcGFyZW50SGVpZ2h0ICogcGFyZW50V2lkdGg7XG5cbiAgICAgICAgY29uc3Qge2hlaWdodCx3aWR0aH0gPSBwYXJlbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZ3JhZEFyZWEgPSBoZWlnaHQgKiB3aWR0aDtcblxuICAgICAgICAvLyDmnInlv4XopoHkvZzkuLogZnJhZ21lbnQg6IqC54K5XG4gICAgICAgIGNvbnN0IGFyZWFDaGFuZ2VkID0gcGFyZW50QXJlYSAvIGdyYWRBcmVhIDwgMC44XG5cbiAgICAgICAgLyoq6Z2i56ev56qB5Y+Y5Y+v5Lul5L2c5Li654us56uL55qEIGZyYWdtZW50ICovXG4gICAgICAgIGlmKGFyZWFDaGFuZ2VkKXtcbiAgICAgICAgICAgIGZyYWdtZW50cy51bnNoaWZ0KHBhcmVudClcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLyoq54m55q6K5qC35byP77yM5Y+v5Lul5L2c5Li654us56uL55qEIGZyYWdtZW50ICovXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgIGlmKHN0eWxlLmRpc3BsYXk9PT0nbm9uZScgfHwgc3R5bGUucG9zaXRpb249PT0nZml4ZWQnIHx8IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnKXtcbiAgICAgICAgICAgICAgICBmcmFnbWVudHMudW5zaGlmdChwYXJlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirnu6fnu63lkJHkuIrlr7vmib4qL1xuICAgIGZyYWdtZW50cy51bnNoaWZ0KC4uLmdldEZyYWdtZW50c0Zyb21MZWFmRWxlbWVudChwYXJlbnQpKVxuXG5cbiAgICByZXR1cm4gZnJhZ21lbnRzO1xufVxuXG4iLCJpbXBvcnQge2dldEVsZW1lbnRDbGFzc30gZnJvbSBcIi4uL2NvbXB1dGUvY29tcHV0ZUlkXCI7XG5pbXBvcnQge2dldFZhbGlkSWRGb3JFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDYW5CZUZyYWdtZW50Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHdoaXRlTGlzdFRhZyA9IFsnaHRtbCcsJ2JvZHknLCdzZWN0aW9uJywnbmF2JywnZm9vdGVyJywndGFibGUnXVxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmKHdoaXRlTGlzdFRhZy5pbmNsdWRlcyh0YWcpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAvKirlpoLmnpzniLboioLngrnlj6rmnInkuIDkuKrlrZDoioLngrnvvIzliJnniLboioLngrnmm7TpgILlkIjkvZzkuLogZnJhZ21lbnQqL1xuICAgIGlmKHBhcmVudEVsZW1lbnQgJiYgcGFyZW50RWxlbWVudC5jaGlsZHJlbiAmJiBwYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDw9MSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKirlhYPntKDnvLrkuY/moIfor4YgY2xhc3Mgb3IgaWTvvIzkuI3pgILlkIjkvZzkuLogZnJhZ21lbnQgKi9cbiAgICBjb25zdCBjbGFzc05hbWVPcklkID0gZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQpIHx8IGdldFZhbGlkSWRGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmKCFjbGFzc05hbWVPcklkKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7UEFSRU5UX1NQTElUX0NPREUsIFF1ZXJ5VHlwZXN9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiLi4vdGFyZ2V0XCI7XG4vLyBpbXBvcnQge2ZpbmRGaXJzdExldmVsQ2hpbGRyZW59IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB0eXBlIHtDbGFzc0ZpbHRlciwgV2hhdHNVbmlxdWVSZXN1bHR9IGZyb20gXCIuLi90eXBpbmdcIjtcbmltcG9ydCB7Z2V0VmFsaWRJZEZvckVsZW1lbnR9IGZyb20gXCIuLi91dGlscy9lbGVtZW50XCI7XG5cbi8vIOS4gOS6m+mdnuazleeahGNsYXNz5ZCN77yM5LiN5Y+v5L2c5Li65a6a5L2N56ymXG5jb25zdCBCQVNJQ19CTE9DS19DTEFTU19SVUxFUyA9IFtcbiAgICAvWzpcXFtcXF1cXC5dLyxcbiAgICAvXFwvLyxcbiAgICAvXlxcZCsvLFxuICAgIC8tcHgvLFxuICAgIC9cXGQrcmVtLyxcbiAgICAvKip0YWlsd2luZCDor63ms5XvvIzovrnnlYwqL1xuICAgIC9tW3RscmJ4eV0tXFxkKy8sXG4gICAgL3BbbHRicnh5XS1cXGQrLyxcbiAgICAvKip0YWlsd2luZCDor63ms5XvvIzkvY3nva7kv6Hmga8qL1xuICAgIC90b3AtXFxkKyQvLFxuICAgIC9sZWZ0LVxcZCskLyxcbiAgICAvcmlnaHQtXFxkKyQvLFxuICAgIC9ib3R0b20tXFxkKyQvLFxuXG4gICAgL15baHddLVxcZCskLyxcblxuXG4gICAgLyoqdGFpbHdpbmQg6K+t5rOV77yMemluZGV4Ki9cbiAgICAvei1cXGQrJC8sXG4gICAgL2luc2V0LVxcZCskLyxcbiAgICAnYWN0aXZlJyxcbl1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50Q2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzRmlsdGVyOkNsYXNzRmlsdGVyID0ge2Jsb2NrQ2xhc3NMaXN0OltdLG1heExlbmd0aDoxMH0pIHtcbiAgICBjb25zdCBibG9ja0xpc3QgPSBbLi4uQkFTSUNfQkxPQ0tfQ0xBU1NfUlVMRVMsLi4uKGNsYXNzRmlsdGVyPy5ibG9ja0NsYXNzTGlzdHx8W10pXVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZighL15bYS16QS1aXS8udGVzdChpdGVtKSl7IC8vIOi/h+a7pOmdnuazlSBjbGFzcyDlkI3np7BcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoq5qOA5rWLY2xhc3PlkIjms5XmgKcqL1xuICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBmb3IobGV0IGo9MDsgajxibG9ja0xpc3QubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTmFtZU9yUnVsZSA9IGJsb2NrTGlzdFtqXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ZW1wTmFtZU9yUnVsZSA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgICAgIGlmKHRlbXBOYW1lT3JSdWxlID09PSBpdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHRlbXBOYW1lT3JSdWxlLnRlc3QoaXRlbSkpe1xuICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJsb2NrZWQpe1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMubGVuZ3RoID8gJy4nK2NsYXNzTmFtZXMuc2xpY2UoMCxjbGFzc0ZpbHRlci5tYXhMZW5ndGggfHwgOTkpLmpvaW4oJy4nKSA6ICcnXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRUYWcoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGFnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlSb290KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZih0YWc9PT1cImJvZHlcIiB8fCB0YWc9PT0gXCJodG1sXCIpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNlbGVjdG9yLFxuICAgICAgICAgICAgd2lkOiB0YWdcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5SWQoZWxlbWVudDogSFRNTEVsZW1lbnQscm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcblxuICAgIGNvbnN0IGlkID0gZ2V0VmFsaWRJZEZvckVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYoIWlkKXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB3aWQgPSB0YWcrXCIjXCIraWQ7XG5cblxuICAgIC8qKuS6jOasoeagoemqjCovXG4gICAgaWYoZ2V0VGFyZ2V0KHdpZCxRdWVyeVR5cGVzLmJ5U2VsZWN0b3Iscm9vdCkudGFyZ2V0ID09PSBlbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogd2lkLFxuICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICog5a+55LqO5LiA5LqbIGZvcm0g5YWD57Sg77yMbmFtZSDlsZ7mgKfmnInllK/kuIDmgKdcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlOYW1lKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgcm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBnZXRFbGVtZW50VGFnKGVsZW1lbnQpXG4gICAgY29uc3QgbmFtZSA9IFwibmFtZVwiIGluIGVsZW1lbnQgPyBlbGVtZW50Lm5hbWUgOiAnJztcbiAgICBjb25zdCBxdWVyeSA9IG5hbWUgPyBgJHt0YWd9W25hbWU9XCIke25hbWV9XCJdYCA6ICcnXG4gICAgaWYocXVlcnkgJiYgZ2V0VGFyZ2V0KHF1ZXJ5LFF1ZXJ5VHlwZXMuYnlOYW1lLCByb290KS50YXJnZXQgPT09IGVsZW1lbnQpe1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICB3aWQ6IHF1ZXJ5LFxuICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieU5hbWVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufVxuXG5cbi8qKlxuICog5a+55LqO5LiA5Lqb5q+U6L6D572V6KeB55qEIHRhZyDlj6/ku6XkvZzkuLrmoIfor4bnrKbmnaXkvb/nlKhcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlUYWdOYW1lKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgcm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBnZXRFbGVtZW50VGFnKGVsZW1lbnQpIHx8ICcnXG4gICAgY29uc3QgYWxsb3dCeVRhZ05hbWUgPSBbJ3N2ZycsJ3BhdGgnLCdpZnJhbWUnLCd2aWRlbycsJ2ltZycsJ2InLCdzdHJvbmcnXS5pbmNsdWRlcyh0YWcudG9Mb3dlckNhc2UoKSlcbiAgICBjb25zdCBpc0N1c3RvbVRhZyA9IHRhZy5pbmRleE9mKCctJykgPiAtMTtcbiAgICBpZihhbGxvd0J5VGFnTmFtZSB8fCBpc0N1c3RvbVRhZyl7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGFnID8gYCR7dGFnfWAgOiAnJ1xuICAgICAgICBpZihxdWVyeSAmJiBnZXRUYXJnZXQocXVlcnksUXVlcnlUeXBlcy5ieVRhZ05hbWUsIHJvb3QpLnRhcmdldCA9PT0gZWxlbWVudCl7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgd2lkOiBxdWVyeSxcbiAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiDln7rkuo4gdGFnK2NsYXNzIOWumuS9jVxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc0ZpbHRlcjogQ2xhc3NGaWx0ZXIsIHJvb3Q/OiBIVE1MRWxlbWVudCk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQsY2xhc3NGaWx0ZXIpXG4gICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgd2lkID0gdGFnK2NsYXNzTmFtZVxuICAgIGlmKGNsYXNzTmFtZSAmJiBnZXRUYXJnZXQod2lkLFF1ZXJ5VHlwZXMuYnlTZWxlY3Rvciwgcm9vdCkudGFyZ2V0PT09ZWxlbWVudCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWQ6IHdpZCxcbiAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvclxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlUeXBlKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgcm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0eXBlID0gXCJ0eXBlXCIgaW4gZWxlbWVudCA/IChlbGVtZW50LnR5cGUgfHwgJycpPy50b1N0cmluZygpPy50b0xvd2VyQ2FzZSgpIDogXCJcIjtcbiAgICBpZih0eXBlID09PSBcInJhZGlvXCIpe1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICd2YWx1ZScgaW4gZWxlbWVudCA/IGVsZW1lbnQudmFsdWUgOiAnJztcbiAgICAgICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBcIm5hbWVcIiBpbiBlbGVtZW50ID8gZWxlbWVudC5uYW1lIDogJyc7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IHRhZytcIlt2YWx1ZT0nXCIrdmFsdWUrXCInXVwiXG4gICAgICAgIGlmKG5hbWUpe1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gXCJbbmFtZT0nXCIrbmFtZStcIiddXCJcbiAgICAgICAgfVxuICAgICAgICBpZihnZXRUYXJnZXQocXVlcnlTdHJpbmcsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLHJvb3QpLnRhcmdldD09PWVsZW1lbnQpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWQ6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlBdHRyKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCxyb290PzogSFRNTEVsZW1lbnQpOldoYXRzVW5pcXVlUmVzdWx0fG51bGwge1xuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGlmKHRhZyA9PT0gJ2EnKXtcbiAgICAvLyAgICAgY29uc3QgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgLy8gICAgIGlmKGhyZWYpe1xuICAgIC8vICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBcImFbaHJlZj0nXCIraHJlZitcIiddXCI7XG4gICAgLy8gICAgICAgICBpZihnZXRUYXJnZXQocXVlcnlTdHJpbmcsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLHJvb3QpLnRhcmdldD09PWVsZW1lbnQpe1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZDogcXVlcnlTdHJpbmcsXG4gICAgLy8gICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCB0eXBlcyA9IFsnaHJlZicsJ3NyYycsJ3RhYkluZGV4Jywncm9sZSddXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHR5cGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdHlwZXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGAke3RhZ31bJHthdHRyaWJ1dGV9PVwiJHt2YWx1ZX1cIl1gO1xuICAgICAgICAgICAgaWYoZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTZWxlY3Rvcixyb290KS50YXJnZXQgPT09IGVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZDogcXVlcnlTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKuWPquiDveeUqOS6jueItuiKgueCueeahOWcuuaZr++8jOS4jeaUr+aMgei3qOe6p+WIq+eahOafpeivou+8iGNzcyBudGgtb2YtdHlwZSBzZWxlY3RvciDnmoTpmZDliLYg77yJXG4gKiDln7rkuo7niLboioLngrnvvIznmoTntKLlvJXluo/lj7flrprkvY1cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlJbmRleChlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NGaWx0ZXI6IENsYXNzRmlsdGVyLCBwYXJlbnRXaWQ6IHN0cmluZyk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgLy8gVE9ETyDov5nph4zlr7kgdGFnTmFtZSDlgZrov4fmu6TvvIzkuIDoiKzmgKfnmoTmoIfnrb7lpoIgZGl2XFxzcGFuIOS4jeW6lOivpeS9nOS4uuagh+ivhuespu+8jOS4jeWFt+Wkh+agh+ivhuiDveWKm++8jOWOn+e9keermeW+iOWPr+iDveWvueWFtuS7u+aEj+iwg+aVtFxuICAgIC8vIFRPRE8g6Z2e5bGC57qn5qih5byP5LiL55qEIOmAmui/hyBpbmRleCDojrflj5bvvIzkuI3lpJ/nqLPlgaXjgILpgb/lhY3lh7rnjrDljZXlsYLnuqfnmoTln7rkuo5pbmRleOeahOWumuS9je+8jOWmgiBwOm50aC1vZi10eXBlKDIpIO+8jOW6lOWwveWPr+iDveeahOS/neivgei2s+Wkn+WkmueahOS4iuWxgue6p++8jOWmgiAjdXNlcm5hbWUgIHA6bnRoLW9mLXR5cGUoMik7IOe9kemhteWPmOWKqOeahOaDheWGteS4iyDvvIwg5o+Q5Y2H5a6a5L2N55qE56iz5a6a5oCnXG4gICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQsY2xhc3NGaWx0ZXIpO1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAvLyBxdWVyeVN0cmluZyA9IGNsYXNzTmFtZSA/IHF1ZXJ5U3RyaW5nICsgY2xhc3NOYW1lOiBxdWVyeVN0cmluZ1xuICAgIC8vIFRPRE8g5o6S5p+l6L+Z6YeM5pivIGRvY3VtZW50IOi/mOaYryBlbGVtZW50IHBhcmVudCDkvZzkuLrlj4LmlbDkvKDlhaUg6L+Z6YeM55qE6Ieq5YWD57Sg5ouJ5Y+W6YC76L6RXG4gICAgLy8gY29uc3QgZWxlbWVudHMgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeVN0cmluZylcbiAgICBjb25zdCBlbGVtZW50cyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2hpbGRyZW47XG4gICAgaWYoZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoPjApe1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyDlj6rmr5Tlr7nkuIDnuqfoh6roioLngrlcbiAgICAgICAgICAgIGlmKGVsZW1lbnRzW2ldLnBhcmVudEVsZW1lbnQgIT09IGVsZW1lbnQucGFyZW50RWxlbWVudCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50c1tpXS50YWdOYW1lPT09ZWxlbWVudC50YWdOYW1lKXtcbiAgICAgICAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50PT09ZWxlbWVudHNbaV0pe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4KXtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nV2l0aEluZGV4ID0gcGFyZW50V2lkICsgUEFSRU5UX1NQTElUX0NPREUgKyBxdWVyeVN0cmluZyArIFwiOm50aC1vZi10eXBlKFwiK2luZGV4K1wiKVwiXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3Nfc2VsZWN0b3JzLnBocFxuICAgICAgICAgICAgLy8g6YeN54K577yM5Z+65LqO54i26IqC54K55L2c5Li66IyD5Zu0SUTvvIzmiYDku6Xmn6Xmib7ml7bvvIzpnIDopoHmj5DljYfoh7PnpZbniLboioLngrlcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nV2l0aEluZGV4LFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQpLnRhcmdldDtcbiAgICAgICAgICAgIGlmKGNoZWNrUmVzdWx0ID09PSBlbGVtZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWQ6IHF1ZXJ5U3RyaW5nV2l0aEluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncXVlcnlTdHJpbmcnLHF1ZXJ5U3RyaW5nV2l0aEluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja1Jlc3VsdCcsY2hlY2tSZXN1bHQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCwn5qCh6aqM5aSx6LSlJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50cywnZWxlbWVudHMnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQucGFyZW50RWxlbWVudCwncm9vdCcpXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZmluZCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaW5kLCdyZXN1bHQnLGZpbmQubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja0luZGV4RWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U3RyaW5nKyAnOm50aC1vZi10eXBlKCcraisnKScpO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycsailcbiAgICAgICAgICAgICAgICAgICBpZihjaGVja0luZGV4RWxlbWVudD09PWVsZW1lbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGluZGV4IHNob3VsZCBiZScsIGopXG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2hlY2tUYXJnZXQgPSBnZXRUYXJnZXQocXVlcnlTdHJpbmcsUXVlcnlUeXBlcy5ieVNlbGVjdG9yKS50YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdkaWQgbm90IGZvdW5kIGluZGV4JylcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignY2hpbGRyZW4gaXMgZW1wdHknLGVsZW1lbnQpXG4gICAgcmV0dXJuIG51bGw7XG59XG5cblxuLyoqXG4gKiDlnKjniLboioLngrnnmoTln7rnoYDkuIvvvIzorqHnrpflh7rlroPnmoTllK/kuIDmoIfor4bvvJtcbiAqIOe8uueCue+8muWmguaenOeItuiKgueCueS4ouWkse+8jOWImeS5n+aXoOazleWvu+aJvuWIsFxuICogdG9kbyBkZWxldGVcbiAqICovXG4vLyBmdW5jdGlvbiBnZXRCeVBhcmVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgcGFyZW50UXVlcnlTdHJpbmc/OiBTdHJpbmcgfCBudWxsLCBjbGFzc0ZpbHRlcj86IENsYXNzRmlsdGVyKTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsICB7XG4vLyAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbi8vICAgICBpZighcGFyZW50Tm9kZSB8fCAhcGFyZW50UXVlcnlTdHJpbmcpe1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgd2lkOiBudWxsLFxuLy8gICAgICAgICAgICAgdHlwZTogbnVsbCxcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAvLyDln7rkuo7kuIrkuIDnuqfoioLngrnnmoTkvY3nva5JRO+8jOmAmui/hyBuYW1lLmNsYXNzIOadoeS7tiDmnaXlr7vmib7lrZDoioLngrlcbi8vICAgICBjb25zdCB0YXJnZXRRdWVyeSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQsY2xhc3NGaWx0ZXIpO1xuLy8gICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gKHBhcmVudFF1ZXJ5U3RyaW5nK1NQTElUX01PREVfQ09ERSt0YXJnZXRRdWVyeSkudHJpbSgpO1xuLy8gICAgIC8vIOmAmui/h+WinuWKoOadoeS7tuWQju+8jOWmguaenOiDveebtOaOpeaPkuWIsO+8jOWImeebtOaOpei/lOWbnlxuLy8gICAgIGlmKGdldFRhcmdldChxdWVyeVN0cmluZyxRdWVyeVR5cGVzLmJ5U3BsaXQpLnRhcmdldCA9PT0gZWxlbWVudCl7XG4vLyAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICB3aWQ6IHF1ZXJ5U3RyaW5nLFxuLy8gICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNwbGl0LFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICAvLyDml6Dms5XpgJrov4flop7liqAgbmFtZS5jbGFzcyDlrprkvY3vvIzliJnpgJrov4cgKyBudGg6Y2hpbGQg5p2l5oyJ6aG65bqP5p+l5om+OyDov5nph4zlj6rmn6Xmib7kuIDnuqflrZDoioLngrnvvIzkuYvlkI7lj6/ku6XmlL7lvIBcbi8vICAgICBjb25zdCBtYXRjaGVkRmlyc3RDaGlsZE5vZGVzID0gZmluZEZpcnN0TGV2ZWxDaGlsZHJlbihwYXJlbnROb2RlLHF1ZXJ5U3RyaW5nKTtcbi8vICAgICAvKirlpoLmnpzkuIDnuqflrZDoioLngrnmib7kuI3liLDvvIzliJnml6Dms5XlrprkvY0qL1xuLy8gICAgIGlmKCFtYXRjaGVkRmlyc3RDaGlsZE5vZGVzLmxlbmd0aCl7XG4vLyAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICB3aWQ6IG51bGwsXG4vLyAgICAgICAgICAgICB0eXBlOiBudWxsXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIC8qKuehruWumuWPr+S7pemAmui/hyBxdWVyeVNlbGVjdG9yIOaJvuWIsOWtkOiKgueCueeahOWJjeaPkOS4i++8jOiuoeeul+S9nOS4uuiKgueCueeahCDluo/liJflj7cqL1xuLy8gICAgIGxldCBpbmRleCA9IC0xO1xuLy8gICAgIC8vIOi/memHjOeahCBjaGlsZHJlbiDljIXlkKvmiYDmnInlrZDjgIHlrZnoioLngrnjgILojrflj5bliLDntKLlvJXlgLxcbi8vICAgICBmb3IobGV0IGo9MDsgajxwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaisrKXtcbi8vICAgICAgICAgLy8g5Y+q5q+U6L6D5LiA57qn5a2Q6IqC54K5XG4vLyAgICAgICAgIGlmKHBhcmVudE5vZGUuY2hpbGRyZW5bal09PT1lbGVtZW50KXtcbi8vICAgICAgICAgICAgIGluZGV4ID0gaisxO1xuLy8gICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIC8qKuaehOmAoOW6j+WIl+WPt+eahOmAieaLqeWZqCovXG4vLyAgICAgY29uc3QgcXVlcnlCeUluZGV4ID0gcXVlcnlTdHJpbmcgKyAgXCI6bnRoLWNoaWxkKFwiK2luZGV4K1wiKVwiO1xuLy8gICAgIGlmKGdldFRhcmdldChxdWVyeUJ5SW5kZXgsUXVlcnlUeXBlcy5ieVNwbGl0KS50YXJnZXQgPT09IGVsZW1lbnQpe1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgd2lkOiBxdWVyeUJ5SW5kZXgsXG4vLyAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U3BsaXQsXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHdpZDogbnVsbCxcbi8vICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNwbGl0XG4vLyAgICAgfVxuLy8gfVxuIiwiZXhwb3J0IGNvbnN0IFNQTElUX01PREVfQ09ERSA9ICcgICdcblxuLyoq55u057O754i26IqC54K56YCJ5oup5ZmoKi9cbmV4cG9ydCBjb25zdCBQQVJFTlRfU1BMSVRfQ09ERSA9ICcgPiAnXG5cbmV4cG9ydCBlbnVtIFF1ZXJ5VHlwZXMge1xuICAgIC8vIOmAmui/h0lE5p+l5om+XG4gICAgYnlJZCA9ICdpZCcsXG4gICAgLy8g6YCa6L+HY3NzIHNlbGVjdG9yIOafpeaJvlxuICAgIGJ5U2VsZWN0b3IgPSAnY3NzX3NlbGVjdG9yJyxcbiAgICAvLyDpgJrov4cgbmFtZSDmn6Xmib7vvIzkuIDoiKznlKjkuo4gaW5wdXRcbiAgICBieU5hbWUgPSAnbmFtZScsXG4gICAgYnlUYWdOYW1lID0gJ3RhZ05hbWUnLFxuICAgIC8vIOWIhuauteafpeaJvu+8jOaMieWxgue6p+mAkOWxgumAkui/m+afpeaJvu+8jOacgOaZrumBjeeahOW9ouW8j1xuICAgIGJ5U3BsaXQgPSAnc3RlcHMnLFxuICAgIGJ5UGFyZW50ID0gJ3BhcmVudCcsXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUV4dHJhIHtcbiAgICB0ZXh0Pzogc3RyaW5nXG59XG4iLCJpbXBvcnQge1F1ZXJ5VHlwZXMsIFNQTElUX01PREVfQ09ERX0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgdHlwZSB7VGFyZ2V0RWxlbWVudH0gZnJvbSBcIi4uL3R5cGluZ1wiO1xuXG5cbi8qKlxuICog5Z+65LqOIHdpZCDmn6Xmib4gZG9tIOiKgueCuVxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRhcmdldChxdWVyeVN0cmluZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJycsIHR5cGU/OiBRdWVyeVR5cGVzLCByb290PzogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCB8IG51bGwpOiBUYXJnZXRFbGVtZW50e1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcgPyBxdWVyeVN0cmluZy50cmltKCkgOiAnJztcbiAgICBjb25zdCBmaW5kUm9vdDogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCA9IHJvb3QgfHwgZG9jdW1lbnQ7XG5cbiAgICBpZighcXVlcnkgfHwgIWZpbmRSb290KXtcbiAgICAgICAgY29uc29sZS50cmFjZSgnd2lkIOaIliDmoLnoioLngrnkuI3lrZjlnKgnLHF1ZXJ5LGZpbmRSb290KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0Om51bGwsXG4gICAgICAgICAgICBuZWFyZXN0OiBmaW5kUm9vdCxcbiAgICAgICAgICAgIGVycm9yOiAnd2lkIOaIliDmoLnoioLngrnkuI3lrZjlnKgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7U1BMSVRfTU9ERV9DT0RFfWApO1xuICAgIGNvbnN0IHRhcmdldFF1ZXJ5QXJyYXkgPSBxdWVyeS5zcGxpdChTUExJVF9NT0RFX0NPREUpO1xuICAgIGlmKCF0eXBlKXtcbiAgICAgICAgaWYodGFyZ2V0UXVlcnlBcnJheS5sZW5ndGg+MSl7XG4gICAgICAgICAgICB0eXBlID0gUXVlcnlUeXBlcy5ieVNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYocXVlcnlTdHJpbmc9PT0nYSNuYXZidG5fZXhlcmNpc2VzID4gaS5mYS5mYS1jYXJldC1kb3duJyl7XG4gICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgLy8gfVxuICAgIGxldCB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IG5lYXJlc3QgPSBmaW5kUm9vdFxuICAgIHN3aXRjaCAodHlwZSl7XG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieUlkOlxuICAgICAgICAgICAgdGFyZ2V0ID0gXCJnZXRFbGVtZW50QnlJZFwiIGluIGZpbmRSb290ID8gdGFyZ2V0ID0gZmluZFJvb3QuZ2V0RWxlbWVudEJ5SWQocXVlcnlTdHJpbmcpIDogbnVsbFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieU5hbWU6XG4gICAgICAgICAgICB0YXJnZXQgPSBcImdldEVsZW1lbnRzQnlOYW1lXCIgaW4gZmluZFJvb3QgPyBmaW5kUm9vdC5nZXRFbGVtZW50c0J5TmFtZShxdWVyeVN0cmluZylbMF0gOiBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieVNlbGVjdG9yOlxuICAgICAgICAgICAgLy8g6L+Z6YeM5bqU6K+l55SoIHF1ZXJ5U2VsZWN0b3JBbGwg5p2l5Yik5pat5piv5ZCm5YW35aSH5ZSv5LiA5oCnXG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZExpc3QgPSBmaW5kUm9vdC5xdWVyeVNlbGVjdG9yQWxsID8gZmluZFJvb3QucXVlcnlTZWxlY3RvckFsbChxdWVyeVN0cmluZykgOiBbXTtcbiAgICAgICAgICAgICAgICBpZihtYXRjaGVkTGlzdCAmJiBtYXRjaGVkTGlzdC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVkTGlzdFswXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYobWF0Y2hlZExpc3QubGVuZ3RoPjEpe1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ+WtmOWcqOWkmuS4qua7oei2sycsIG1hdGNoZWRMaXN0KVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1jYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlLHF1ZXJ5U3RyaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKndoYXRzLWVsZW1lbnQg5omp5bGV55qE5p+l5om+5pa55rOVKiovXG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieVNwbGl0OlxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGFyZ2V0UXVlcnlBcnJheS5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyAhIWl0ZW0udHJpbSgpIDogZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IHJvb3Q6IERvY3VtZW50IHwgSFRNTEVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIC8qKumAkOe6p+afpeaJviovXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHNlbGVjdG9ycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gZ2V0VGFyZ2V0KHNlbGVjdG9yc1tpXSx1bmRlZmluZWQscm9vdCk7XG4gICAgICAgICAgICAgICAgaWYodGVtcE5vZGUudGFyZ2V0KXtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGVtcE5vZGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIG5lYXJlc3QgPSB0ZW1wTm9kZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QgPSB0ZW1wTm9kZS50YXJnZXRcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIDEuIOWcqOaMh+WumuagueiKgueCueeahOaDheWGteS4i++8jOS7heafpeaJvuebtOaOpeWtkOiKgueCuTtcbiAgICAgICAgICAgICAqIDIuIOacquaMh+WumuagueiKgueCueeahOaDheWGteS4i++8jOWtkOOAgeWtmeiKgueCueesrOS4gOS4quWNs+S4uuWvueixoeOAglxuICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgIC8vIGlmKHJvb3Qpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IG1hdGNoZWRFbGVtZW50cyA9IGZpbmRGaXJzdExldmVsQ2hpbGRyZW4oZmluZFJvb3QsZmlyc3RTZWxlY3Rvcik7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0ID0gbWF0Y2hlZEVsZW1lbnRzWzBdIHx8IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgaWYobWF0Y2hlZEVsZW1lbnRzLmxlbmd0aCAhPT0gMSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIFRPRE8g77yfIOe7meS4gOWumueahOaPkOekulxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLndhcm4oZmlyc3RTZWxlY3Rvciwn6Z2e5ZSv5LiA5a2Q6IqC54K577yM5Y+W56ysMOS4qu+8jOWPr+iDveW8guW4uCcsbWF0Y2hlZEVsZW1lbnRzKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldCA9IGdldFRhcmdldChmaXJzdFNlbGVjdG9yLFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixmaW5kUm9vdCkudGFyZ2V0XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAvLyDnu6fnu63mn6Xmib7kuIvkuIDlsYLnuqfoioLngrlcbiAgICAgICAgICAgIC8vIGlmKHRhcmdldCAmJiBzZWxlY3RvcnMubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAvLyAgICAgc2VsZWN0b3JzLnNwbGljZSgwLDEpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IG5leHRTdHJpbmcgPSAoc2VsZWN0b3JzLmpvaW4oU1BMSVRfTU9ERV9DT0RFKSkudHJpbSgpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IG5leHRSZXN1bHQgPSBnZXRUYXJnZXQobmV4dFN0cmluZyxRdWVyeVR5cGVzLmJ5U3BsaXQsdGFyZ2V0KTtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQgPSBuZXh0UmVzdWx0LnRhcmdldDtcbiAgICAgICAgICAgIC8vICAgICBuZWFyZXN0ID0gbmV4dFJlc3VsdC5uZWFyZXN0O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvKirmnKrmjIflrpp0eXBl55qE5oOF5Ya15LiL77yM5oyJ5LyY5YWI57qn5p+l5om+Ki9cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGdldFRhcmdldChxdWVyeVN0cmluZywgUXVlcnlUeXBlcy5ieUlkLGZpbmRSb290KS50YXJnZXRcbiAgICAgICAgICAgICAgICB8fCBnZXRUYXJnZXQocXVlcnlTdHJpbmcsIFF1ZXJ5VHlwZXMuYnlOYW1lLGZpbmRSb290KS50YXJnZXRcbiAgICAgICAgICAgICAgICB8fCBnZXRUYXJnZXQocXVlcnlTdHJpbmcsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLGZpbmRSb290KS50YXJnZXQ7XG5cbiAgICAgICAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJlc3Q6IG5lYXJlc3QsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRUYXJnZXQocXVlcnlTdHJpbmcsIFF1ZXJ5VHlwZXMuYnlJZCwgZmluZFJvb3QpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETyDmraPlkJHmn6Xmib7kuI3liLDnmoTmg4XlhrXkuIvvvIzov5vooYzlj43lkJHmn6Xmib7vvIzpgb/lhY3lm6DkuLrniLboioLngrnnmoRET00g5Y+Y5Yqo5a+86Ie05a2Q6IqC54K55peg5rOV6KKr5a6a5L2N77yM5a2Y5Zyo5aSa5Liq6IqC54K555qE5pe25YCZ77yM5oyJ54Wn5rex5bqm5LyY5YWI6L+U5Zue5pyA57uI57uT5p6c44CCXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmVhcmVzdDogbmVhcmVzdCxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGVycm9yOiAnJ1xuICAgIH07XG59XG4iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkSWRGb3JFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xuICAgIGlmKCFpZCl7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIC8vIGlkIOWQq+acieeJueauiuWtl+espiAuIDog562J54m55q6K5a2X56ym5LiyIOS4jeWPr+eUqFxuICAgIGlmKC9bXFwuOiFdLy50ZXN0KGlkKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCflv73nlaXlkKvmnInnibnmrorlrZfnrKYnLGlkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8g57qv5pWw5a2X55qEIElEIO+8jOS4jeWPr+S/oe+8jOWPr+iDveaYr+ezu+e7n+WfuuS6jiBsaXN0IOeUn+aIkO+8jOWPmOWKqOaAp+Wkp++8jOWPr+iDveivr+WIpOafpeaJvuOAglxuICAgIGlmKC9eXFxkKyQvLnRlc3QoaWQpKXtcbiAgICAgICAgY29uc29sZS5sb2coJ+W/veeVpee6r+aVsOWtlycsaWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG59XG4iLCJpbXBvcnQgV2hhdHNFbGVtZW50IGZyb20gXCIuL1doYXRzRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0VsZW1lbnRcbiIsImltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIi4vdGFyZ2V0XCI7XG5pbXBvcnQge2dldFVuaXF1ZUlkfSBmcm9tIFwiLi9jb21wdXRlXCI7XG5pbXBvcnQge1F1ZXJ5VHlwZXMsIFNQTElUX01PREVfQ09ERX0gZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCB0eXBlIHtDbGFzc0ZpbHRlciwgVGFyZ2V0RWxlbWVudCwgV2hhdHNVbmlxdWVSZXN1bHR9IGZyb20gXCIuL3R5cGluZ1wiO1xuaW1wb3J0IHtnZXRLZXlTdHlsZXMsIG1ha2VSYW5nZXNGb3JFbGVtZW50fSBmcm9tIFwiLi9jb21wdXRlL2RuYVwiO1xuaW1wb3J0IHtnZXREZWZhdWx0T3B0aW9ufSBmcm9tIFwiLi9jb25zdC9kYXRhXCI7XG5cbmludGVyZmFjZSBPcHRpb24ge1xuICAgIGlnbm9yZUNsYXNzUnVsZT86IENsYXNzRmlsdGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoYXRzRWxlbWVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb246IE9wdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb246IE9wdGlvbiA9IGdldERlZmF1bHRPcHRpb24oKSkge1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvblxuICAgIH1cblxuICAgIGdldFRhcmdldChxdWVyeVN0cmluZzogc3RyaW5nLCB0eXBlPzogUXVlcnlUeXBlcywgcm9vdD86IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQpOiBUYXJnZXRFbGVtZW50e1xuICAgICAgICByZXR1cm4gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLHR5cGUscm9vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkuIDkuKrlj6/ku6XkvZzkuLogZWxlbWVudCDmr5Tlr7nln7rlm6DnmoTmoIfor4ZcbiAgICAgKiDljIXlkKvoh6rouqvoioLngrnnmoTph4fmoLfvvJp0ZXh05YaF5a6577yM5qC35byP5a696auY5biD5bGA44CB5L2N5LqO5pW05LiqZG9jdW1lbnTnmoTluIPlsYDkvY3nva7jgIJcbiAgICAgKiDov5nkupvkv6Hmga/mnInliKnkuo7kuozmrKHmr5Tlr7nvvIzlvZMgdW5pcXVlSWQg5Y+Y5YyW5ZCO55qE5YWz6ZSu5L+h5oGvXG4gICAgICogKi9cbiAgICBnZXRFbGVtZW50RE5BKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFuZ2VzOiBtYWtlUmFuZ2VzRm9yRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgICAgIHN0eWxlczogZ2V0S2V5U3R5bGVzKGVsZW1lbnQpLFxuICAgICAgICAgICAgZnJhZ21lbnRzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oyH5a6a5LiA5Liq5YWD57Sg77yM6K6h566X5Ye65Y+v5Lul5a6a5L2N5Yiw6K+l5YWD57Sg55qE5ZSv5LiA54m55b6B5o+P6L+wXG4gICAgICogKi9cbiAgICBnZXRVbmlxdWVJZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFdoYXRzVW5pcXVlUmVzdWx0e1xuICAgICAgICAvKipcbiAgICAgICAgICog6K+l5YWD57Sg55qE54m55b6B5o+P6L+wXG4gICAgICAgICAqICovXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlxdWVJZChlbGVtZW50LHRoaXMub3B0aW9uLmlnbm9yZUNsYXNzUnVsZSk7XG4gICAgICAgIH1jYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCforqHnrpflhYPntKDkv6Hmga/lvILluLgnLGVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2ud2lkLOafpeivokRPTemTvlxuICAgICAqIOi/lOWbnuWPr+i/vea6r+ebrueahOWFg+e0oCDov4fnqIvkuK3nmoQg5omA5pyJIERPTSDoioLngrnjgILmnIDlpKfnqIvluqbnmoTmib7liLAg55uu55qE5YWD57Sg55qE5pyA5bCP6IyD5Zu044CC57yp5bCP55uu5qCH6IyD5Zu044CCXG4gICAgICogKi9cbiAgICBnZXRFbGVtZW50c0xpbmVzKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtde1xuICAgICAgICBpZighcXVlcnlTdHJpbmcpe1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmdBcnJheSA9IHF1ZXJ5U3RyaW5nLnRyaW0oKS5zcGxpdChTUExJVF9NT0RFX0NPREUpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cXVlcnlTdHJpbmdBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wUXVlcnkgPSAocXVlcnlTdHJpbmdBcnJheS5zbGljZSgwLGkrMSkuam9pbihTUExJVF9NT0RFX0NPREUpKS50cmltKCk7XG4gICAgICAgICAgICBpZighdGVtcFF1ZXJ5KXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGVtcFRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KHRlbXBRdWVyeSxpPT09MD8gdW5kZWZpbmVkIDogUXVlcnlUeXBlcy5ieVNwbGl0KVxuICAgICAgICAgICAgaWYodGVtcFRhcmdldC50YXJnZXQpe1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRlbXBUYXJnZXQudGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbiIsImltcG9ydCB7Z2V0QnlBdHRyLCBnZXRCeUNsYXNzLCBnZXRCeUlkLCBnZXRCeUluZGV4LCBnZXRCeU5hbWUsIGdldEJ5Um9vdCwgZ2V0QnlUYWdOYW1lLCBnZXRCeVR5cGV9IGZyb20gXCIuL2NvbXB1dGVJZFwiO1xuaW1wb3J0IHR5cGUge0NsYXNzRmlsdGVyLCBXaGF0c1VuaXF1ZVJlc3VsdH0gZnJvbSBcIi4uL3R5cGluZ1wiO1xuaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiLi4vdGFyZ2V0XCI7XG5pbXBvcnQge1F1ZXJ5VHlwZXMsIFNQTElUX01PREVfQ09ERX0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cblxuZnVuY3Rpb24gZ2V0VW5pcXVlSWRJblNjb3BlKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgY2xhc3NGaWx0ZXI6IENsYXNzRmlsdGVyID0ge2Jsb2NrQ2xhc3NMaXN0OltdLG1heExlbmd0aDogMTB9LCByb290RWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEJ5Um9vdChlbGVtZW50KVxuICAgICAgICB8fCBnZXRCeUlkKGVsZW1lbnQscm9vdEVsZW1lbnQpXG4gICAgICAgIHx8IGdldEJ5TmFtZShlbGVtZW50LHJvb3RFbGVtZW50KVxuICAgICAgICB8fCBnZXRCeUNsYXNzKGVsZW1lbnQsIGNsYXNzRmlsdGVyLHJvb3RFbGVtZW50KVxuICAgICAgICB8fCBnZXRCeVR5cGUoZWxlbWVudCxyb290RWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlBdHRyKGVsZW1lbnQscm9vdEVsZW1lbnQpXG59XG5cbi8qKlxuICog5Z+65LqO5b2T5YmN6IqC54K55om+5Yiw5LiA5Liq5Y+v5Lul6KKr5YWo5bGA5ZSv5LiA5a6a5L2N55qE5YWD57SgXG4gKiAqL1xuZnVuY3Rpb24gZ2V0VW5pcXVlSWRGb3JQcmUoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCBjbGFzc0ZpbHRlcjogQ2xhc3NGaWx0ZXIgPSB7YmxvY2tDbGFzc0xpc3Q6W10sbWF4TGVuZ3RoOiAxMH0sKToge1xuICAgIHdpZDogc3RyaW5nLFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50XG59IHwgbnVsbCB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZihwYXJlbnROb2RlKXtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0VW5pcXVlSWRJblNjb3BlKHBhcmVudE5vZGUsY2xhc3NGaWx0ZXIpO1xuICAgICAgICBpZihyZXN1bHQgJiYgcmVzdWx0LndpZCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgd2lkOiByZXN1bHQud2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGdldFVuaXF1ZUlkRm9yUHJlKHBhcmVudE5vZGUsY2xhc3NGaWx0ZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIOiuoeeulyBIVE1MRWxlbWVudCDnmoTllK/kuIDlrprkvY0gd2lkIOWtl+espuS4slxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVJZChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQsIGNsYXNzRmlsdGVyOiBDbGFzc0ZpbHRlciA9IHtibG9ja0NsYXNzTGlzdDpbXSxtYXhMZW5ndGg6IDEwfSwgcm9vdEVsZW1lbnQ/OiBIVE1MRWxlbWVudCApOiBXaGF0c1VuaXF1ZVJlc3VsdCB7XG4gICAgLyoq5YWl5Y+C57G75Z6L5a6I5oqkKi9cbiAgICBpZighZWxlbWVudC50YWdOYW1lKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlucHV0IGlzIG5vdCBhIEhUTUwgZWxlbWVudFwiLGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnoioLngrkgPiBsb2NhdGUgYnkgaWQgPiBieSBuYW1lID4gYnkgY2xhc3MgPiB0eXBlID4gbGluayA+IGluZGV4ID4gcGFyZW50XG4gICAgICogVE9ETyDor4bliKvliqjmgIHnlJ/miJDnmoRJRO+8jOinhOWImSDplb/luqbov4fplb/vvJ8g5ZCr5pyJ5pWw5a2X44CB54m55q6K5a2X56ym562JXG4gICAgICogVE9ETyDlop7liqDkuIDnp43lrprkvY3mlrnlvI/vvIzmjIlpbm5lcuaWh+acrOWGheWuuSBtZDUg5aSE55CG5ZCO55Sf5oiQSURcbiAgICAgKiAqKi9cbiAgICBsZXQgcmVzdWx0ID0gZ2V0VW5pcXVlSWRJblNjb3BlKGVsZW1lbnQsY2xhc3NGaWx0ZXIscm9vdEVsZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiDml6Dms5XlnKjlhajlsYDojIPlm7TlhoXlvpfliLDllK/kuIBJRO+8jFxuICAgICAqIOmcgOimgei/m+S4gOatpemAmui/h+elli/niLboioLngrnlrprkvY3jgILlnKjnpZYv54i26IqC54K555qE6IyD5Zu05YaF5b6X5Yiw5ZSv5LiASUTjgIJcbiAgICAgKiAqL1xuICAgIGlmKCFyZXN1bHQpe1xuICAgICAgICBjb25zdCBwYXJlbnRVbmlxdWUgPSBnZXRVbmlxdWVJZEZvclByZShlbGVtZW50LGNsYXNzRmlsdGVyKTtcbiAgICAgICAgLy8gdG9kbyDpgInmi6nlj6/ku6XkvZzkuLogZnJhZ21lbnQg55qE5a6a5L2N5L2c5Li656WW5YWI6IqC54K5XG4gICAgICAgIGlmKHBhcmVudFVuaXF1ZSl7XG4gICAgICAgICAgICAvKirpgJLlvZLlrprkvY3kuIrkuIDnuqfoioLngrnnmoRJRCovXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVJlc3VsdCA9IGdldFVuaXF1ZUlkSW5TY29wZShlbGVtZW50LGNsYXNzRmlsdGVyLHBhcmVudFVuaXF1ZS5lbGVtZW50KVxuICAgICAgICAgICAgICAgIHx8IGdldEJ5VGFnTmFtZShlbGVtZW50LHBhcmVudFVuaXF1ZS5lbGVtZW50KVxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVXaWQgPSByZWxhdGl2ZVJlc3VsdCA/IHJlbGF0aXZlUmVzdWx0LndpZCA6ICcnO1xuICAgICAgICAgICAgLyoq54i25YWD57Sg6IO95aSf5Zyo5YWo5bGA5b6X5Yiw5ZSv5LiASUTml7YqL1xuICAgICAgICAgICAgaWYocmVsYXRpdmVXaWQpe1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNwbGl0LFxuICAgICAgICAgICAgICAgICAgICB3aWQ6IHBhcmVudFVuaXF1ZS53aWQgKyAgU1BMSVRfTU9ERV9DT0RFICsgcmVsYXRpdmVXaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirml6Dms5XpgJrov4fnpZbniLboioLngrnnvKnlsI/ojIPlm7TlkI7vvIzlvpfliLDllK/kuIBJRO+8jOWImeW/hemhu+S+nemdoOebtOezu+eItuS6suiKgueCuemAmui/h+e0ouW8leW+l+WIsCovXG4gICAgaWYoIXJlc3VsdCl7XG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgY29uc3QgcGFyZW50VW5pcXVlSWQgPSBwYXJlbnROb2RlID8gZ2V0VW5pcXVlSWQocGFyZW50Tm9kZSxjbGFzc0ZpbHRlcikgOiAnJztcblxuICAgICAgICBpZihwYXJlbnRVbmlxdWVJZCAmJiBwYXJlbnRVbmlxdWVJZC53aWQpe1xuICAgICAgICAgICAgY29uc3QgcGFyZW50UmVsYXRlZFF1ZXJ5ID0gZ2V0QnlJbmRleChlbGVtZW50LGNsYXNzRmlsdGVyLHBhcmVudFVuaXF1ZUlkLndpZClcbiAgICAgICAgICAgIGlmKHBhcmVudFJlbGF0ZWRRdWVyeSAmJiBwYXJlbnRSZWxhdGVkUXVlcnkud2lkKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZDogcGFyZW50UmVsYXRlZFF1ZXJ5LndpZCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVBhcmVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFyZXN1bHQpe1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IHVuaXF1ZSBpZCBmb3IgZWxlbWVudCAnLCBlbGVtZW50KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tSZXN1bHQgPSByZXN1bHQud2lkID8gZ2V0VGFyZ2V0KHJlc3VsdC53aWQpIDoge3RhcmdldDogbnVsbCx0eXBlOiBudWxsfTtcblxuICAgIGlmKGNoZWNrUmVzdWx0LnRhcmdldCA9PT0gZWxlbWVudCl7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS53YXJuKCfmo4DmtYvkuI3pgJrov4cnLCBlbGVtZW50LGNoZWNrUmVzdWx0LnRhcmdldCxyZXN1bHQud2lkKVxuICAgIH1cblxuXG4gICAgLy8g5peg5rOV5a6a5L2N55qE5oOF5Ya177yM5aKe5YqgXG4gICAgY29uc29sZS5lcnJvcihlbGVtZW50LCfml6Dms5XooqvllK/kuIDlrprkvY0nKVxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgdHlwZTogbnVsbCxcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWluRGVlcDogNCxcbiAgICAgICAgaWdub3JlQ2xhc3NSdWxlOiB7XG4gICAgICAgICAgICBibG9ja0NsYXNzTGlzdDogW10sXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDEwLFxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuOTU3M2E0ZTcuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);