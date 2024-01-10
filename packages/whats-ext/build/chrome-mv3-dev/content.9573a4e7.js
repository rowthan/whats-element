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
    /**\u4e8c\u6b21\u6821\u9a8c*/ if ((0, _targetDefault.default)(wid, (0, _const.QueryTypes).bySelector, root) === element) return {
        wid: wid,
        type: (0, _const.QueryTypes).bySelector
    };
    return null;
}
function getByName(element, root) {
    const tag = getElementTag(element);
    const name = "name" in element ? element.name : "";
    const query = name ? `${tag}[name="${name}"]` : "";
    if (query && (0, _targetDefault.default)(query, (0, _const.QueryTypes).byName, root) === element) return {
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
    if (className && (0, _targetDefault.default)(wid, (0, _const.QueryTypes).bySelector, root) === element) return {
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
        return null;
    }
    // const regex = new RegExp(`${SPLIT_MODE_CODE}`);
    const targetQueryArray = query.split((0, _const.SPLIT_MODE_CODE));
    if (!type) {
        if (targetQueryArray.length > 1) type = (0, _const.QueryTypes).bySelector;
    }
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
                if (tempNode) {
                    target = tempNode;
                    nearest = tempNode;
                    root1 = tempNode;
                } else break;
            }
            break;
        default:
            /**\u672a\u6307\u5b9atype\u7684\u60c5\u51b5\u4e0b\uff0c\u6309\u4f18\u5148\u7ea7\u67e5\u627e*/ const result = getTarget(queryString, (0, _const.QueryTypes).byId, findRoot) || getTarget(queryString, (0, _const.QueryTypes).byName, findRoot) || getTarget(queryString, (0, _const.QueryTypes).bySelector, findRoot);
            if (result) return result;
            else return getTarget(queryString, (0, _const.QueryTypes).byId, findRoot);
    }
    // TODO \u6b63\u5411\u67e5\u627e\u4e0d\u5230\u7684\u60c5\u51b5\u4e0b\uff0c\u8fdb\u884c\u53cd\u5411\u67e5\u627e\uff0c\u907f\u514d\u56e0\u4e3a\u7236\u8282\u70b9\u7684DOM \u53d8\u52a8\u5bfc\u81f4\u5b50\u8282\u70b9\u65e0\u6cd5\u88ab\u5b9a\u4f4d\uff0c\u5b58\u5728\u591a\u4e2a\u8282\u70b9\u7684\u65f6\u5019\uff0c\u6309\u7167\u6df1\u5ea6\u4f18\u5148\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\u3002
    return target;
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
            if (tempTarget) result.push(tempTarget);
        }
        return result;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCLENBQUEsR0FBQSxxQkFBUyxFQUFFLFNBQVEsYUFBWSxlQUFlO1lBQ3pFLElBQUcsc0JBQXNCLG1CQUFtQixLQUN4QyxTQUFTO2dCQUNMLEtBQUssbUJBQW1CO2dCQUN4QixNQUFNLENBQUEsR0FBQSxpQkFBUyxFQUFFO1lBQ3JCO1FBRVI7SUFDSjtJQUVBLElBQUcsQ0FBQyxRQUFPO1FBQ1AsUUFBUSxNQUFNLCtCQUErQjtRQUM3QyxPQUFPO1lBQ0gsS0FBSztZQUNMLE1BQU07UUFDVjtJQUNKO0lBRUEsTUFBTSxjQUFjLE9BQU8sTUFBTSxDQUFBLEdBQUEsc0JBQVEsRUFBRSxPQUFPLE9BQU87UUFBQyxRQUFRO1FBQUssTUFBTTtJQUFJO0lBRWpGLElBQUcsWUFBWSxXQUFXLFNBQ3RCLE9BQU87U0FFUCxRQUFRLEtBQUssU0FBUyxTQUFRLFlBQVksUUFBTyxPQUFPO0lBSTVELGFBQWE7SUFDYixRQUFRLE1BQU0sU0FBUTtJQUN0QixPQUFPO1FBQ0gsS0FBSztRQUNMLE1BQU07SUFDVjtBQUNKOzs7OztBQ3ZIQSxzREFBZ0I7QUFBVCxTQUFTO0lBQ1osT0FBTztRQUNILFNBQVM7UUFDVCxpQkFBaUI7WUFDYixnQkFBZ0IsRUFBRTtZQUNsQixXQUFXO1FBQ2Y7SUFDSjtBQUNKIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS04MjUxMWU1MjY2OWUyZjJjLmpzIiwicGFja2FnZXMvd2hhdHMtZXh0L2NvbnRlbnQudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2NvbXB1dGUvZG5hLnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvZnJhZ21lbnQvY2hlY2sudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy9jb21wdXRlL2NvbXB1dGVJZC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2NvbnN0L2luZGV4LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvdGFyZ2V0L2luZGV4LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvdXRpbHMvZWxlbWVudC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2luZGV4LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvV2hhdHNFbGVtZW50LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvY29tcHV0ZS9pbmRleC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2NvbnN0L2RhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHA9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgeT0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBIPW5ldyBTZXQocCksXz1lPT5ILmhhcyhlKSxYPXAuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgRz1fKFwiLS1kcnktcnVuXCIpLGQ9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIsWj1kKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksRD0wLGM9KC4uLmUpPT5kKCkmJnUoYFxcdXsxRjdFMX0gJHtEKyt9YCwuLi5lKTt2YXIgcz17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9rZXJlbi9EZXNrdG9wL3doYXRzLWVsZW1lbnQvcGFja2FnZXMvd2hhdHMtZXh0L2NvbnRlbnQudHNcIixcImJ1bmRsZUlkXCI6XCI4MWU4MDFmZDk1NzNhNGU3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NTY4NDN9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1zLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6cy52ZXJib3NlfX07dmFyIFM9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtTLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFzLmhvc3R8fHMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6cy5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gcy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIE8oZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtzLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBCKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJngoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChPKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGkgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1pLmNvZGVmcmFtZXx8aS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2kubWVzc2FnZStgXG5gK3crYFxuXG5gK2kuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixCKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7cy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtzLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBuPVwiX19wbGFzbW8tbG9hZGluZ19fXCIsVD10eXBlb2YgdHJ1c3RlZFR5cGVzPFwidVwiP3RydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koYHRydXN0ZWQtaHRtbC0ke259YCx7Y3JlYXRlSFRNTDplPT5lfSk6dm9pZCAwO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobil9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gJCgpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1uO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke259IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke259OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke259IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7bn0gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBGKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PSQoKTtlPUYodCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIE49YCR7RX0ke21vZHVsZS5pZH1fX2AsYSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2E/LmRpc2Nvbm5lY3QoKSxhPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpOfSksYS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxhLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBXKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1XKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09cy5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2EucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IFdoYXRzRWxlbWVudCBmcm9tIFwiLi4vd2hhdHMtZWxlbWVudC9zcmMvaW5kZXhcIjtcbi8vIGltcG9ydCBza2VsZXRvbkVsZW1lbnQgZnJvbSBcIn5wYWNrYWdlcy9za2VsZXRvbi9za2VsZXRvblwiO1xuaW1wb3J0IHtnZXRGcmFnbWVudHNGcm9tTGVhZkVsZW1lbnR9IGZyb20gXCIuLi93aGF0cy1lbGVtZW50L3NyYy9jb21wdXRlL2RuYVwiO1xuXG5leHBvcnQge31cblxuY29uc29sZS5sb2coXG4gICAgXCJZb3UgbWF5IGZpbmQgdGhhdCBoYXZpbmcgaXMgbm90IHNvIHBsZWFzaW5nIGEgdGhpbmcgYXMgd2FudGluZy4gVGhpcyBpcyBub3QgbG9naWNhbCwgYnV0IGl0IGlzIG9mdGVuIHRydWUuXCJcbilcblxuXG5cbmNvbnN0IHdoYXRzID0gbmV3IFdoYXRzRWxlbWVudCh7XG59KVxuXG5cbi8vIEB0cy1pZ25vcmVcbndpbmRvdy53aGF0cyA9IHdoYXRzO1xuXG5cbmxldCBjbnQgPSAwO1xubGV0IGVycm9yID0gZmFsc2U7XG5mdW5jdGlvbiBydW5XaGF0c0VsZW1lbnQocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZihlcnJvcil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYocm9vdCl7XG4gICAgICBjb25zdCByZXN1bHQgPSAgd2hhdHMuZ2V0VW5pcXVlSWQocm9vdClcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnR5cGUscmVzdWx0LndpZCwgcm9vdClcbiAgICAgICAgaWYoIXJlc3VsdC53aWQpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5peg5rOV5a6a5L2NJyxyb290KVxuICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY250KytcbiAgICAgICAgICAgIGlmKHJvb3QuY2hpbGRyZW4ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxyb290LmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXJlc3VsdC53aWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5XaGF0c0VsZW1lbnQocm9vdC5jaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQud2lkID09PSAnYm9keSA+IGRpdjpudGgtb2YtdHlwZSgxNSkgPiBkaXY6bnRoLW9mLXR5cGUoMSkgPiBkaXY6bnRoLW9mLXR5cGUoMSknKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnRzID0gZ2V0RnJhZ21lbnRzRnJvbUxlYWZFbGVtZW50KHJvb3QpXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlc3VsdC53aWQsW3Jvb3RdLCdsZWFmIG5vZGUnLGZyYWdtZW50cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5jb25zdCByb290ID0gZG9jdW1lbnQuYm9keTtcblxucnVuV2hhdHNFbGVtZW50KHJvb3QpO1xuXG5jb25zdCBub0xpbWl0ZWRNYXggPSA5OTk5OTk5OTtcbmVudW0gQm94VHlwZSB7XG4gICAgc2lkZUJhcj1cIjFcIixcbiAgICBuYXZCYXI9XCIyXCIsXG4gICAgbWFpbkNvbnRhaW5lcj1cIjNcIixcbiAgICBtYWluQmxvY2s9XCI0XCIsXG4gICAgbm9ybWFsU2l6ZT1cIjVcIlxufVxuY29uc3Qgc2l6ZXMgPSBbXG4gICAge1xuICAgICAgICAvLyDnurXlkJHkvqfovrnlr7zoiKrmoI9cbiAgICAgICAgbWluV2lkdGg6IDMwLFxuICAgICAgICBtaW5IZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIHR5cGVOYW1lOiBCb3hUeXBlLnNpZGVCYXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIOaoquWQkeWvvOiIquagj+WwuuWvuFxuICAgICAgICBtaW5XaWR0aDogd2luZG93LmlubmVyV2lkdGggLSA0MDAsXG4gICAgICAgIG1pbkhlaWdodDogMzAsXG4gICAgICAgIG1heEhlaWdodDogMTAwLFxuICAgICAgICBtYXhXaWR0aDogbm9MaW1pdGVkTWF4LFxuICAgICAgICB0eXBlTmFtZTogQm94VHlwZS5uYXZCYXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIOi2heWkp+WuueWZqFxuICAgICAgICBtaW5XaWR0aDogNjAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDYwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIG1heFdpZHRoOiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIHR5cGVOYW1lOiBCb3hUeXBlLm1haW5Db250YWluZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIOaoquWQkeWkp+Wdl1xuICAgICAgICBtaW5XaWR0aDogNjAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIG1heFdpZHRoOiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIHR5cGVOYW1lOiBCb3hUeXBlLm1haW5CbG9jayxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8g5bCP5qih5Z2X5Z+656GA5bC65a+4XG4gICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgIG1pbkhlaWdodDogMTAwLFxuICAgICAgICBtYXhIZWlnaHQ6IG5vTGltaXRlZE1heCxcbiAgICAgICAgbWF4V2lkdGg6IG5vTGltaXRlZE1heCxcbiAgICAgICAgdHlwZU5hbWU6IEJveFR5cGUubm9ybWFsU2l6ZSxcbiAgICB9XG5dXG4vLyBmdW5jdGlvbiBnZW5lcmF0ZVNrZWxldG9uKCkge1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IHNrZWxldG9uRWxlbWVudChkb2N1bWVudC5ib2R5LHtcbi8vICAgICAgICAgc2l6ZXM6IHNpemVzLFxuLy8gICAgICAgICAvLyBtaW5UZXh0OiAxLFxuLy8gICAgICAgICBwb3NpdGlvbjogbnVsbCxcbi8vICAgICAgICAgaWdub3JlU2VsZWN0b3I6IFwiXCJcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2coJ3NrZWxldG9uIOe7k+aenO+8micscmVzdWx0KVxuLy8gfVxuXG4vLyBnZW5lcmF0ZVNrZWxldG9uKCk7XG5cblxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUge1JhbmdlfSBmcm9tIFwiLi4vdHlwaW5nXCI7XG5pbXBvcnQge2NoZWNrQ2FuQmVGcmFnbWVudE5vZGV9IGZyb20gXCIuLi9mcmFnbWVudC9jaGVja1wiO1xuXG4vKipcbiAqIOWvueWFg+e0oOWGheaWh+acrOeahOmHh+agt1xuICogb2Zmc2V0IOWBj+enu+mHjyjlgY/np7vph4/nmoTmlbDph4/kuZ/moIfor4bkuobor6XoioLngrnnmoTlhoXlrrnkuLDlr4znqIvluqYpXG4gKiB0ZXh0OiDlgY/np7vph4/nmoTmlofmnKzkv6Hmga9cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmdlc0ZvckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsZnJhZ21lbnRzOiBudW1iZXIgPSA0KSB7XG4gICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgaWYoIXRleHQpe1xuICAgICAgICByZXR1cm4gW107XG4gICAgfWVsc2V7XG4gICAgfVxuICAgIGNvbnN0IHJhbmdlczogUmFuZ2VbXSA9IFtdXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmFnbWVudHM7IGkrKyl7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGkgKiBNYXRoLmZsb29yKHRleHQubGVuZ3RoIC8gZnJhZ21lbnRzKTtcbiAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LnN1YnN0cmluZyhvZmZzZXQsb2Zmc2V0KzQpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByYW5nZXM7XG59XG5cblxuLyoqXG4gKiDmj5Dlj5bkuIDkuKroioLngrnnmoTlhbPplK7moLflvI/nibnlvoFcbiAqXG4gKiAqL1xuY29uc3QgS0VZX1NUWUxFUyA9IFsnd2lkdGgnLCdoZWlnaHQnLCdwb3NpdGlvbicsJ2Rpc3BsYXknXVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleVN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHN0eWxlTWFwID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgIEtFWV9TVFlMRVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXN1bHRba2V5XSA9IHN0eWxlTWFwW2tleV1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyoqXG4gKiDku47lj7blrZDoioLngrnlvIDlp4vvvIznu5jliLYgZnJhZ21lbnQg5Zu+6LCxXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50c0Zyb21MZWFmRWxlbWVudChsZWFmRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBmcmFnbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAgIGNvbnN0IHBhcmVudCA9IGxlYWZFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZighcGFyZW50IHx8ICFwYXJlbnQucGFyZW50RWxlbWVudCl7XG4gICAgICAgIGZyYWdtZW50cy51bnNoaWZ0KGxlYWZFbGVtZW50KVxuICAgICAgICByZXR1cm4gZnJhZ21lbnRzXG4gICAgfVxuXG4gICAgY29uc3QgY2FuQmVGcmFnbWVudCA9IGNoZWNrQ2FuQmVGcmFnbWVudE5vZGUocGFyZW50KTtcblxuXG4gICAgaWYoY2FuQmVGcmFnbWVudCl7XG4gICAgICAgIGNvbnN0IHtoZWlnaHQ6IHBhcmVudEhlaWdodCwgd2lkdGg6IHBhcmVudFdpZHRofSA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50QXJlYSA9IHBhcmVudEhlaWdodCAqIHBhcmVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHtoZWlnaHQsd2lkdGh9ID0gcGFyZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGdyYWRBcmVhID0gaGVpZ2h0ICogd2lkdGg7XG5cbiAgICAgICAgLy8g5pyJ5b+F6KaB5L2c5Li6IGZyYWdtZW50IOiKgueCuVxuICAgICAgICBjb25zdCBhcmVhQ2hhbmdlZCA9IHBhcmVudEFyZWEgLyBncmFkQXJlYSA8IDAuOFxuXG4gICAgICAgIC8qKumdouenr+eqgeWPmOWPr+S7peS9nOS4uueLrOeri+eahCBmcmFnbWVudCAqL1xuICAgICAgICBpZihhcmVhQ2hhbmdlZCl7XG4gICAgICAgICAgICBmcmFnbWVudHMudW5zaGlmdChwYXJlbnQpXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIC8qKueJueauiuagt+W8j++8jOWPr+S7peS9nOS4uueLrOeri+eahCBmcmFnbWVudCAqL1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICBpZihzdHlsZS5kaXNwbGF5PT09J25vbmUnIHx8IHN0eWxlLnBvc2l0aW9uPT09J2ZpeGVkJyB8fCBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyl7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRzLnVuc2hpZnQocGFyZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq57un57ut5ZCR5LiK5a+75om+Ki9cbiAgICBmcmFnbWVudHMudW5zaGlmdCguLi5nZXRGcmFnbWVudHNGcm9tTGVhZkVsZW1lbnQocGFyZW50KSlcblxuXG4gICAgcmV0dXJuIGZyYWdtZW50cztcbn1cblxuIiwiaW1wb3J0IHtnZXRFbGVtZW50Q2xhc3N9IGZyb20gXCIuLi9jb21wdXRlL2NvbXB1dGVJZFwiO1xuaW1wb3J0IHtnZXRWYWxpZElkRm9yRWxlbWVudH0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2FuQmVGcmFnbWVudE5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB3aGl0ZUxpc3RUYWcgPSBbJ2h0bWwnLCdib2R5Jywnc2VjdGlvbicsJ25hdicsJ2Zvb3RlcicsJ3RhYmxlJ11cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZih3aGl0ZUxpc3RUYWcuaW5jbHVkZXModGFnKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgLyoq5aaC5p6c54i26IqC54K55Y+q5pyJ5LiA5Liq5a2Q6IqC54K577yM5YiZ54i26IqC54K55pu06YCC5ZCI5L2c5Li6IGZyYWdtZW50Ki9cbiAgICBpZihwYXJlbnRFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQuY2hpbGRyZW4gJiYgcGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGg8PTEpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoq5YWD57Sg57y65LmP5qCH6K+GIGNsYXNzIG9yIGlk77yM5LiN6YCC5ZCI5L2c5Li6IGZyYWdtZW50ICovXG4gICAgY29uc3QgY2xhc3NOYW1lT3JJZCA9IGdldEVsZW1lbnRDbGFzcyhlbGVtZW50KSB8fCBnZXRWYWxpZElkRm9yRWxlbWVudChlbGVtZW50KTtcbiAgICBpZighY2xhc3NOYW1lT3JJZCl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQge1BBUkVOVF9TUExJVF9DT0RFLCBRdWVyeVR5cGVzfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIi4uL3RhcmdldFwiO1xuLy8gaW1wb3J0IHtmaW5kRmlyc3RMZXZlbENoaWxkcmVufSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgdHlwZSB7Q2xhc3NGaWx0ZXIsIFdoYXRzVW5pcXVlUmVzdWx0fSBmcm9tIFwiLi4vdHlwaW5nXCI7XG5pbXBvcnQge2dldFZhbGlkSWRGb3JFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudFwiO1xuXG4vLyDkuIDkupvpnZ7ms5XnmoRjbGFzc+WQje+8jOS4jeWPr+S9nOS4uuWumuS9jeesplxuY29uc3QgQkFTSUNfQkxPQ0tfQ0xBU1NfUlVMRVMgPSBbXG4gICAgL1s6XFxbXFxdXFwuXS8sXG4gICAgL1xcLy8sXG4gICAgL15cXGQrLyxcbiAgICAvLXB4LyxcbiAgICAvXFxkK3JlbS8sXG4gICAgLyoqdGFpbHdpbmQg6K+t5rOV77yM6L6555WMKi9cbiAgICAvbVt0bHJieHldLVxcZCsvLFxuICAgIC9wW2x0YnJ4eV0tXFxkKy8sXG4gICAgLyoqdGFpbHdpbmQg6K+t5rOV77yM5L2N572u5L+h5oGvKi9cbiAgICAvdG9wLVxcZCskLyxcbiAgICAvbGVmdC1cXGQrJC8sXG4gICAgL3JpZ2h0LVxcZCskLyxcbiAgICAvYm90dG9tLVxcZCskLyxcblxuICAgIC9eW2h3XS1cXGQrJC8sXG5cblxuICAgIC8qKnRhaWx3aW5kIOivreazle+8jHppbmRleCovXG4gICAgL3otXFxkKyQvLFxuICAgIC9pbnNldC1cXGQrJC8sXG4gICAgJ2FjdGl2ZScsXG5dXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc0ZpbHRlcjpDbGFzc0ZpbHRlciA9IHtibG9ja0NsYXNzTGlzdDpbXSxtYXhMZW5ndGg6MTB9KSB7XG4gICAgY29uc3QgYmxvY2tMaXN0ID0gWy4uLkJBU0lDX0JMT0NLX0NMQVNTX1JVTEVTLC4uLihjbGFzc0ZpbHRlcj8uYmxvY2tDbGFzc0xpc3R8fFtdKV1cblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LmNsYXNzTGlzdFtpXTtcbiAgICAgICAgaWYoIS9eW2EtekEtWl0vLnRlc3QoaXRlbSkpeyAvLyDov4fmu6TpnZ7ms5UgY2xhc3Mg5ZCN56ewXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKuajgOa1i2NsYXNz5ZCI5rOV5oCnKi9cbiAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8YmxvY2tMaXN0Lmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgY29uc3QgdGVtcE5hbWVPclJ1bGUgPSBibG9ja0xpc3Rbal07XG4gICAgICAgICAgICBpZih0eXBlb2YgdGVtcE5hbWVPclJ1bGUgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgICAgICBpZih0ZW1wTmFtZU9yUnVsZSA9PT0gaXRlbSl7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZih0ZW1wTmFtZU9yUnVsZS50ZXN0KGl0ZW0pKXtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFibG9ja2VkKXtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmxlbmd0aCA/ICcuJytjbGFzc05hbWVzLnNsaWNlKDAsY2xhc3NGaWx0ZXIubWF4TGVuZ3RoIHx8IDk5KS5qb2luKCcuJykgOiAnJ1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VGFnKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRhZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5Um9vdChlbGVtZW50OiBIVE1MRWxlbWVudCk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYodGFnPT09XCJib2R5XCIgfHwgdGFnPT09IFwiaHRtbFwiKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixcbiAgICAgICAgICAgIHdpZDogdGFnXG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeUlkKGVsZW1lbnQ6IEhUTUxFbGVtZW50LHJvb3Q/OiBIVE1MRWxlbWVudCk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG5cbiAgICBjb25zdCBpZCA9IGdldFZhbGlkSWRGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmKCFpZCl7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgd2lkID0gdGFnK1wiI1wiK2lkO1xuXG5cbiAgICAvKirkuozmrKHmoKHpqowqL1xuICAgIGlmKGdldFRhcmdldCh3aWQsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLHJvb3QpID09PSBlbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogd2lkLFxuICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICog5a+55LqO5LiA5LqbIGZvcm0g5YWD57Sg77yMbmFtZSDlsZ7mgKfmnInllK/kuIDmgKdcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlOYW1lKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgcm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBnZXRFbGVtZW50VGFnKGVsZW1lbnQpXG4gICAgY29uc3QgbmFtZSA9IFwibmFtZVwiIGluIGVsZW1lbnQgPyBlbGVtZW50Lm5hbWUgOiAnJztcbiAgICBjb25zdCBxdWVyeSA9IG5hbWUgPyBgJHt0YWd9W25hbWU9XCIke25hbWV9XCJdYCA6ICcnXG4gICAgaWYocXVlcnkgJiYgZ2V0VGFyZ2V0KHF1ZXJ5LFF1ZXJ5VHlwZXMuYnlOYW1lLCByb290KSA9PT0gZWxlbWVudCl7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHdpZDogcXVlcnksXG4gICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5TmFtZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG59XG5cblxuLyoqXG4gKiDlr7nkuo7kuIDkupvmr5TovoPnvZXop4HnmoQgdGFnIOWPr+S7peS9nOS4uuagh+ivhuespuadpeS9v+eUqFxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeVRhZ05hbWUoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCByb290PzogSFRNTEVsZW1lbnQpOldoYXRzVW5pcXVlUmVzdWx0fG51bGwge1xuICAgIGNvbnN0IHRhZyA9IGdldEVsZW1lbnRUYWcoZWxlbWVudCkgfHwgJydcbiAgICBjb25zdCBhbGxvd0J5VGFnTmFtZSA9IFsnc3ZnJywncGF0aCcsJ2lmcmFtZScsJ3ZpZGVvJywnaW1nJywnYicsJ3N0cm9uZyddLmluY2x1ZGVzKHRhZy50b0xvd2VyQ2FzZSgpKVxuICAgIGNvbnN0IGlzQ3VzdG9tVGFnID0gdGFnLmluZGV4T2YoJy0nKSA+IC0xO1xuICAgIGlmKGFsbG93QnlUYWdOYW1lIHx8IGlzQ3VzdG9tVGFnKXtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0YWcgPyBgJHt0YWd9YCA6ICcnXG4gICAgICAgIGlmKHF1ZXJ5ICYmIGdldFRhcmdldChxdWVyeSxRdWVyeVR5cGVzLmJ5VGFnTmFtZSwgcm9vdCkudGFyZ2V0ID09PSBlbGVtZW50KXtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICB3aWQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIOWfuuS6jiB0YWcrY2xhc3Mg5a6a5L2NXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5Q2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzRmlsdGVyOiBDbGFzc0ZpbHRlciwgcm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRFbGVtZW50Q2xhc3MoZWxlbWVudCxjbGFzc0ZpbHRlcilcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB3aWQgPSB0YWcrY2xhc3NOYW1lXG4gICAgaWYoY2xhc3NOYW1lICYmIGdldFRhcmdldCh3aWQsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLCByb290KT09PWVsZW1lbnQpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkOiB3aWQsXG4gICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3JcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5VHlwZShlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQsIHJvb3Q/OiBIVE1MRWxlbWVudCk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgY29uc3QgdHlwZSA9IFwidHlwZVwiIGluIGVsZW1lbnQgPyAoZWxlbWVudC50eXBlIHx8ICcnKT8udG9TdHJpbmcoKT8udG9Mb3dlckNhc2UoKSA6IFwiXCI7XG4gICAgaWYodHlwZSA9PT0gXCJyYWRpb1wiKXtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAndmFsdWUnIGluIGVsZW1lbnQgPyBlbGVtZW50LnZhbHVlIDogJyc7XG4gICAgICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBuYW1lID0gXCJuYW1lXCIgaW4gZWxlbWVudCA/IGVsZW1lbnQubmFtZSA6ICcnO1xuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSB0YWcrXCJbdmFsdWU9J1wiK3ZhbHVlK1wiJ11cIlxuICAgICAgICBpZihuYW1lKXtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IFwiW25hbWU9J1wiK25hbWUrXCInXVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYoZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTZWxlY3Rvcixyb290KS50YXJnZXQ9PT1lbGVtZW50KXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkOiBxdWVyeVN0cmluZyxcbiAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5QXR0cihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQscm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBpZih0YWcgPT09ICdhJyl7XG4gICAgLy8gICAgIGNvbnN0IGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIC8vICAgICBpZihocmVmKXtcbiAgICAvLyAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gXCJhW2hyZWY9J1wiK2hyZWYrXCInXVwiO1xuICAgIC8vICAgICAgICAgaWYoZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTZWxlY3Rvcixyb290KS50YXJnZXQ9PT1lbGVtZW50KXtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgICAgICAgICB3aWQ6IHF1ZXJ5U3RyaW5nLFxuICAgIC8vICAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3IsXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdHlwZXMgPSBbJ2hyZWYnLCdzcmMnLCd0YWJJbmRleCcsJ3JvbGUnXVxuICAgIGZvciAobGV0IGkgPSAwIDsgaTx0eXBlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHR5cGVzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHt0YWd9WyR7YXR0cmlidXRlfT1cIiR7dmFsdWV9XCJdYDtcbiAgICAgICAgICAgIGlmKGdldFRhcmdldChxdWVyeVN0cmluZyxRdWVyeVR5cGVzLmJ5U2VsZWN0b3Iscm9vdCkudGFyZ2V0ID09PSBlbGVtZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWQ6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKirlj6rog73nlKjkuo7niLboioLngrnnmoTlnLrmma/vvIzkuI3mlK/mjIHot6jnuqfliKvnmoTmn6Xor6LvvIhjc3MgbnRoLW9mLXR5cGUgc2VsZWN0b3Ig55qE6ZmQ5Yi2IO+8iVxuICog5Z+65LqO54i26IqC54K577yM55qE57Si5byV5bqP5Y+35a6a5L2NXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5SW5kZXgoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzRmlsdGVyOiBDbGFzc0ZpbHRlciwgcGFyZW50V2lkOiBzdHJpbmcpOldoYXRzVW5pcXVlUmVzdWx0fG51bGwge1xuICAgIC8vIFRPRE8g6L+Z6YeM5a+5IHRhZ05hbWUg5YGa6L+H5ruk77yM5LiA6Iis5oCn55qE5qCH562+5aaCIGRpdlxcc3BhbiDkuI3lupTor6XkvZzkuLrmoIfor4bnrKbvvIzkuI3lhbflpIfmoIfor4bog73lipvvvIzljp/nvZHnq5nlvojlj6/og73lr7nlhbbku7vmhI/osIPmlbRcbiAgICAvLyBUT0RPIOmdnuWxgue6p+aooeW8j+S4i+eahCDpgJrov4cgaW5kZXgg6I635Y+W77yM5LiN5aSf56iz5YGl44CC6YG/5YWN5Ye6546w5Y2V5bGC57qn55qE5Z+65LqOaW5kZXjnmoTlrprkvY3vvIzlpoIgcDpudGgtb2YtdHlwZSgyKSDvvIzlupTlsL3lj6/og73nmoTkv53or4HotrPlpJ/lpJrnmoTkuIrlsYLnuqfvvIzlpoIgI3VzZXJuYW1lICBwOm50aC1vZi10eXBlKDIpOyDnvZHpobXlj5jliqjnmoTmg4XlhrXkuIsg77yMIOaPkOWNh+WumuS9jeeahOeos+WumuaAp1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldEVsZW1lbnRDbGFzcyhlbGVtZW50LGNsYXNzRmlsdGVyKTtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgLy8gcXVlcnlTdHJpbmcgPSBjbGFzc05hbWUgPyBxdWVyeVN0cmluZyArIGNsYXNzTmFtZTogcXVlcnlTdHJpbmdcbiAgICAvLyBUT0RPIOaOkuafpei/memHjOaYryBkb2N1bWVudCDov5jmmK8gZWxlbWVudCBwYXJlbnQg5L2c5Li65Y+C5pWw5Lyg5YWlIOi/memHjOeahOiHquWFg+e0oOaLieWPlumAu+i+kVxuICAgIC8vIGNvbnN0IGVsZW1lbnRzID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnlTdHJpbmcpXG4gICAgY29uc3QgZWxlbWVudHMgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmNoaWxkcmVuO1xuICAgIGlmKGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aD4wKXtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8g5Y+q5q+U5a+55LiA57qn6Ieq6IqC54K5XG4gICAgICAgICAgICBpZihlbGVtZW50c1tpXS5wYXJlbnRFbGVtZW50ICE9PSBlbGVtZW50LnBhcmVudEVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWxlbWVudHNbaV0udGFnTmFtZT09PWVsZW1lbnQudGFnTmFtZSl7XG4gICAgICAgICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWxlbWVudD09PWVsZW1lbnRzW2ldKXtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleCl7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVN0cmluZ1dpdGhJbmRleCA9IHBhcmVudFdpZCArIFBBUkVOVF9TUExJVF9DT0RFICsgcXVlcnlTdHJpbmcgKyBcIjpudGgtb2YtdHlwZShcIitpbmRleCtcIilcIlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzX3NlbGVjdG9ycy5waHBcbiAgICAgICAgICAgIC8vIOmHjeeCue+8jOWfuuS6jueItuiKgueCueS9nOS4uuiMg+WbtElE77yM5omA5Lul5p+l5om+5pe277yM6ZyA6KaB5o+Q5Y2H6Iez56WW54i26IqC54K5XG4gICAgICAgICAgICBjb25zdCBjaGVja1Jlc3VsdCA9IGdldFRhcmdldChxdWVyeVN0cmluZ1dpdGhJbmRleCxRdWVyeVR5cGVzLmJ5U2VsZWN0b3IsZWxlbWVudC5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50KS50YXJnZXQ7XG4gICAgICAgICAgICBpZihjaGVja1Jlc3VsdCA9PT0gZWxlbWVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkOiBxdWVyeVN0cmluZ1dpdGhJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5U3RyaW5nJyxxdWVyeVN0cmluZ1dpdGhJbmRleClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tSZXN1bHQnLGNoZWNrUmVzdWx0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsJ+agoemqjOWksei0pScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudHMsJ2VsZW1lbnRzJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LnBhcmVudEVsZW1lbnQsJ3Jvb3QnKVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGZpbmQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeVN0cmluZyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmluZCwncmVzdWx0JyxmaW5kLmxlbmd0aClcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajxlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tJbmRleEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVN0cmluZysgJzpudGgtb2YtdHlwZSgnK2orJyknKTtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2snLGopXG4gICAgICAgICAgICAgICAgICAgaWYoY2hlY2tJbmRleEVsZW1lbnQ9PT1lbGVtZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBpbmRleCBzaG91bGQgYmUnLCBqKVxuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNoZWNrVGFyZ2V0ID0gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcikudGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignZGlkIG5vdCBmb3VuZCBpbmRleCcpXG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ2NoaWxkcmVuIGlzIGVtcHR5JyxlbGVtZW50KVxuICAgIHJldHVybiBudWxsO1xufVxuXG5cbi8qKlxuICog5Zyo54i26IqC54K555qE5Z+656GA5LiL77yM6K6h566X5Ye65a6D55qE5ZSv5LiA5qCH6K+G77ybXG4gKiDnvLrngrnvvJrlpoLmnpzniLboioLngrnkuKLlpLHvvIzliJnkuZ/ml6Dms5Xlr7vmib7liLBcbiAqIHRvZG8gZGVsZXRlXG4gKiAqL1xuLy8gZnVuY3Rpb24gZ2V0QnlQYXJlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHBhcmVudFF1ZXJ5U3RyaW5nPzogU3RyaW5nIHwgbnVsbCwgY2xhc3NGaWx0ZXI/OiBDbGFzc0ZpbHRlcik6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCAge1xuLy8gICAgIGNvbnN0IHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4vLyAgICAgaWYoIXBhcmVudE5vZGUgfHwgIXBhcmVudFF1ZXJ5U3RyaW5nKXtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHdpZDogbnVsbCxcbi8vICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy8g5Z+65LqO5LiK5LiA57qn6IqC54K555qE5L2N572uSUTvvIzpgJrov4cgbmFtZS5jbGFzcyDmnaHku7Yg5p2l5a+75om+5a2Q6IqC54K5XG4vLyAgICAgY29uc3QgdGFyZ2V0UXVlcnkgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSArIGdldEVsZW1lbnRDbGFzcyhlbGVtZW50LGNsYXNzRmlsdGVyKTtcbi8vICAgICBjb25zdCBxdWVyeVN0cmluZyA9IChwYXJlbnRRdWVyeVN0cmluZytTUExJVF9NT0RFX0NPREUrdGFyZ2V0UXVlcnkpLnRyaW0oKTtcbi8vICAgICAvLyDpgJrov4flop7liqDmnaHku7blkI7vvIzlpoLmnpzog73nm7TmjqXmj5LliLDvvIzliJnnm7TmjqXov5Tlm55cbi8vICAgICBpZihnZXRUYXJnZXQocXVlcnlTdHJpbmcsUXVlcnlUeXBlcy5ieVNwbGl0KS50YXJnZXQgPT09IGVsZW1lbnQpe1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgd2lkOiBxdWVyeVN0cmluZyxcbi8vICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTcGxpdCxcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgLy8g5peg5rOV6YCa6L+H5aKe5YqgIG5hbWUuY2xhc3Mg5a6a5L2N77yM5YiZ6YCa6L+HICsgbnRoOmNoaWxkIOadpeaMiemhuuW6j+afpeaJvjsg6L+Z6YeM5Y+q5p+l5om+5LiA57qn5a2Q6IqC54K577yM5LmL5ZCO5Y+v5Lul5pS+5byAXG4vLyAgICAgY29uc3QgbWF0Y2hlZEZpcnN0Q2hpbGROb2RlcyA9IGZpbmRGaXJzdExldmVsQ2hpbGRyZW4ocGFyZW50Tm9kZSxxdWVyeVN0cmluZyk7XG4vLyAgICAgLyoq5aaC5p6c5LiA57qn5a2Q6IqC54K55om+5LiN5Yiw77yM5YiZ5peg5rOV5a6a5L2NKi9cbi8vICAgICBpZighbWF0Y2hlZEZpcnN0Q2hpbGROb2Rlcy5sZW5ndGgpe1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgd2lkOiBudWxsLFxuLy8gICAgICAgICAgICAgdHlwZTogbnVsbFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICAvKirnoa7lrprlj6/ku6XpgJrov4cgcXVlcnlTZWxlY3RvciDmib7liLDlrZDoioLngrnnmoTliY3mj5DkuIvvvIzorqHnrpfkvZzkuLroioLngrnnmoQg5bqP5YiX5Y+3Ki9cbi8vICAgICBsZXQgaW5kZXggPSAtMTtcbi8vICAgICAvLyDov5nph4znmoQgY2hpbGRyZW4g5YyF5ZCr5omA5pyJ5a2Q44CB5a2Z6IqC54K544CC6I635Y+W5Yiw57Si5byV5YC8XG4vLyAgICAgZm9yKGxldCBqPTA7IGo8cGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGorKyl7XG4vLyAgICAgICAgIC8vIOWPquavlOi+g+S4gOe6p+WtkOiKgueCuVxuLy8gICAgICAgICBpZihwYXJlbnROb2RlLmNoaWxkcmVuW2pdPT09ZWxlbWVudCl7XG4vLyAgICAgICAgICAgICBpbmRleCA9IGorMTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICAvKirmnoTpgKDluo/liJflj7fnmoTpgInmi6nlmagqL1xuLy8gICAgIGNvbnN0IHF1ZXJ5QnlJbmRleCA9IHF1ZXJ5U3RyaW5nICsgIFwiOm50aC1jaGlsZChcIitpbmRleCtcIilcIjtcbi8vICAgICBpZihnZXRUYXJnZXQocXVlcnlCeUluZGV4LFF1ZXJ5VHlwZXMuYnlTcGxpdCkudGFyZ2V0ID09PSBlbGVtZW50KXtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHdpZDogcXVlcnlCeUluZGV4LFxuLy8gICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNwbGl0LFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICB3aWQ6IG51bGwsXG4vLyAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTcGxpdFxuLy8gICAgIH1cbi8vIH1cbiIsImV4cG9ydCBjb25zdCBTUExJVF9NT0RFX0NPREUgPSAnICAnXG5cbi8qKuebtOezu+eItuiKgueCuemAieaLqeWZqCovXG5leHBvcnQgY29uc3QgUEFSRU5UX1NQTElUX0NPREUgPSAnID4gJ1xuXG5leHBvcnQgZW51bSBRdWVyeVR5cGVzIHtcbiAgICAvLyDpgJrov4dJROafpeaJvlxuICAgIGJ5SWQgPSAnaWQnLFxuICAgIC8vIOmAmui/h2NzcyBzZWxlY3RvciDmn6Xmib5cbiAgICBieVNlbGVjdG9yID0gJ2Nzc19zZWxlY3RvcicsXG4gICAgLy8g6YCa6L+HIG5hbWUg5p+l5om+77yM5LiA6Iis55So5LqOIGlucHV0XG4gICAgYnlOYW1lID0gJ25hbWUnLFxuICAgIGJ5VGFnTmFtZSA9ICd0YWdOYW1lJyxcbiAgICAvLyDliIbmrrXmn6Xmib7vvIzmjInlsYLnuqfpgJDlsYLpgJLov5vmn6Xmib7vvIzmnIDmma7pgY3nmoTlvaLlvI9cbiAgICBieVNwbGl0ID0gJ3N0ZXBzJyxcbiAgICBieVBhcmVudCA9ICdwYXJlbnQnLFxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlFeHRyYSB7XG4gICAgdGV4dD86IHN0cmluZ1xufVxuIiwiaW1wb3J0IHtRdWVyeVR5cGVzLCBTUExJVF9NT0RFX0NPREV9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5cbi8qKlxuICog5Z+65LqOIHdpZCDmn6Xmib4gZG9tIOiKgueCuVxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRhcmdldChxdWVyeVN0cmluZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJycsIHR5cGU/OiBRdWVyeVR5cGVzLCByb290PzogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGx7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeVN0cmluZyA/IHF1ZXJ5U3RyaW5nLnRyaW0oKSA6ICcnO1xuICAgIGNvbnN0IGZpbmRSb290OiBIVE1MRWxlbWVudCB8IERvY3VtZW50ID0gcm9vdCB8fCBkb2N1bWVudDtcblxuICAgIGlmKCFxdWVyeSB8fCAhZmluZFJvb3Qpe1xuICAgICAgICBjb25zb2xlLnRyYWNlKCd3aWQg5oiWIOagueiKgueCueS4jeWtmOWcqCcscXVlcnksZmluZFJvb3QpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAke1NQTElUX01PREVfQ09ERX1gKTtcbiAgICBjb25zdCB0YXJnZXRRdWVyeUFycmF5ID0gcXVlcnkuc3BsaXQoU1BMSVRfTU9ERV9DT0RFKTtcbiAgICBpZighdHlwZSl7XG4gICAgICAgIGlmKHRhcmdldFF1ZXJ5QXJyYXkubGVuZ3RoPjEpe1xuICAgICAgICAgICAgdHlwZSA9IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IG5lYXJlc3QgPSBmaW5kUm9vdFxuICAgIHN3aXRjaCAodHlwZSl7XG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieUlkOlxuICAgICAgICAgICAgdGFyZ2V0ID0gXCJnZXRFbGVtZW50QnlJZFwiIGluIGZpbmRSb290ID8gdGFyZ2V0ID0gZmluZFJvb3QuZ2V0RWxlbWVudEJ5SWQocXVlcnlTdHJpbmcpIDogbnVsbFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieU5hbWU6XG4gICAgICAgICAgICB0YXJnZXQgPSBcImdldEVsZW1lbnRzQnlOYW1lXCIgaW4gZmluZFJvb3QgPyBmaW5kUm9vdC5nZXRFbGVtZW50c0J5TmFtZShxdWVyeVN0cmluZylbMF0gOiBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieVNlbGVjdG9yOlxuICAgICAgICAgICAgLy8g6L+Z6YeM5bqU6K+l55SoIHF1ZXJ5U2VsZWN0b3JBbGwg5p2l5Yik5pat5piv5ZCm5YW35aSH5ZSv5LiA5oCnXG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZExpc3QgPSBmaW5kUm9vdC5xdWVyeVNlbGVjdG9yQWxsID8gZmluZFJvb3QucXVlcnlTZWxlY3RvckFsbChxdWVyeVN0cmluZykgOiBbXTtcbiAgICAgICAgICAgICAgICBpZihtYXRjaGVkTGlzdCAmJiBtYXRjaGVkTGlzdC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVkTGlzdFswXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYobWF0Y2hlZExpc3QubGVuZ3RoPjEpe1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ+WtmOWcqOWkmuS4qua7oei2sycsIG1hdGNoZWRMaXN0KVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1jYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlLHF1ZXJ5U3RyaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKndoYXRzLWVsZW1lbnQg5omp5bGV55qE5p+l5om+5pa55rOVKiovXG4gICAgICAgIGNhc2UgUXVlcnlUeXBlcy5ieVNwbGl0OlxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGFyZ2V0UXVlcnlBcnJheS5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyAhIWl0ZW0udHJpbSgpIDogZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IHJvb3Q6IERvY3VtZW50IHwgSFRNTEVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIC8qKumAkOe6p+afpeaJviovXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHNlbGVjdG9ycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gZ2V0VGFyZ2V0KHNlbGVjdG9yc1tpXSx1bmRlZmluZWQscm9vdCk7XG4gICAgICAgICAgICAgICAgaWYodGVtcE5vZGUpe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0ZW1wTm9kZVxuICAgICAgICAgICAgICAgICAgICBuZWFyZXN0ID0gdGVtcE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QgPSB0ZW1wTm9kZVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogMS4g5Zyo5oyH5a6a5qC56IqC54K555qE5oOF5Ya15LiL77yM5LuF5p+l5om+55u05o6l5a2Q6IqC54K5O1xuICAgICAgICAgICAgICogMi4g5pyq5oyH5a6a5qC56IqC54K555qE5oOF5Ya15LiL77yM5a2Q44CB5a2Z6IqC54K556ys5LiA5Liq5Y2z5Li65a+56LGh44CCXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgLy8gaWYocm9vdCl7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbWF0Y2hlZEVsZW1lbnRzID0gZmluZEZpcnN0TGV2ZWxDaGlsZHJlbihmaW5kUm9vdCxmaXJzdFNlbGVjdG9yKTtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQgPSBtYXRjaGVkRWxlbWVudHNbMF0gfHwgbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBpZihtYXRjaGVkRWxlbWVudHMubGVuZ3RoICE9PSAxKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gVE9ETyDvvJ8g57uZ5LiA5a6a55qE5o+Q56S6XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUud2FybihmaXJzdFNlbGVjdG9yLCfpnZ7llK/kuIDlrZDoioLngrnvvIzlj5bnrKww5Liq77yM5Y+v6IO95byC5bi4JyxtYXRjaGVkRWxlbWVudHMpXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGZpcnN0U2VsZWN0b3IsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLGZpbmRSb290KS50YXJnZXRcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC8vIOe7p+e7reafpeaJvuS4i+S4gOWxgue6p+iKgueCuVxuICAgICAgICAgICAgLy8gaWYodGFyZ2V0ICYmIHNlbGVjdG9ycy5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIC8vICAgICBzZWxlY3RvcnMuc3BsaWNlKDAsMSk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbmV4dFN0cmluZyA9IChzZWxlY3RvcnMuam9pbihTUExJVF9NT0RFX0NPREUpKS50cmltKCk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbmV4dFJlc3VsdCA9IGdldFRhcmdldChuZXh0U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTcGxpdCx0YXJnZXQpO1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldCA9IG5leHRSZXN1bHQudGFyZ2V0O1xuICAgICAgICAgICAgLy8gICAgIG5lYXJlc3QgPSBuZXh0UmVzdWx0Lm5lYXJlc3Q7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8qKuacquaMh+WumnR5cGXnmoTmg4XlhrXkuIvvvIzmjInkvJjlhYjnuqfmn6Xmib4qL1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLCBRdWVyeVR5cGVzLmJ5SWQsZmluZFJvb3QpXG4gICAgICAgICAgICAgICAgfHwgZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLCBRdWVyeVR5cGVzLmJ5TmFtZSxmaW5kUm9vdClcbiAgICAgICAgICAgICAgICB8fCBnZXRUYXJnZXQocXVlcnlTdHJpbmcsUXVlcnlUeXBlcy5ieVNlbGVjdG9yLGZpbmRSb290KTtcblxuICAgICAgICAgICAgaWYocmVzdWx0KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLCBRdWVyeVR5cGVzLmJ5SWQsIGZpbmRSb290KVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE8g5q2j5ZCR5p+l5om+5LiN5Yiw55qE5oOF5Ya15LiL77yM6L+b6KGM5Y+N5ZCR5p+l5om+77yM6YG/5YWN5Zug5Li654i26IqC54K555qERE9NIOWPmOWKqOWvvOiHtOWtkOiKgueCueaXoOazleiiq+WumuS9je+8jOWtmOWcqOWkmuS4quiKgueCueeahOaXtuWAme+8jOaMieeFp+a3seW6puS8mOWFiOi/lOWbnuacgOe7iOe7k+aenOOAglxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRJZEZvckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgaWYoIWlkKXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgLy8gaWQg5ZCr5pyJ54m55q6K5a2X56ymIC4gOiDnrYnnibnmrorlrZfnrKbkuLIg5LiN5Y+v55SoXG4gICAgaWYoL1tcXC46IV0vLnRlc3QoaWQpKXtcbiAgICAgICAgY29uc29sZS5sb2coJ+W/veeVpeWQq+acieeJueauiuWtl+espicsaWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyDnuq/mlbDlrZfnmoQgSUQg77yM5LiN5Y+v5L+h77yM5Y+v6IO95piv57O757uf5Z+65LqOIGxpc3Qg55Sf5oiQ77yM5Y+Y5Yqo5oCn5aSn77yM5Y+v6IO96K+v5Yik5p+l5om+44CCXG4gICAgaWYoL15cXGQrJC8udGVzdChpZCkpe1xuICAgICAgICBjb25zb2xlLmxvZygn5b+955Wl57qv5pWw5a2XJyxpZClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbn1cbiIsImltcG9ydCBXaGF0c0VsZW1lbnQgZnJvbSBcIi4vV2hhdHNFbGVtZW50XCI7XG5leHBvcnQgZGVmYXVsdCBXaGF0c0VsZW1lbnRcbiIsImltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIi4vdGFyZ2V0XCI7XG5pbXBvcnQge2dldFVuaXF1ZUlkfSBmcm9tIFwiLi9jb21wdXRlXCI7XG5pbXBvcnQge1F1ZXJ5VHlwZXMsIFNQTElUX01PREVfQ09ERX0gZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCB0eXBlIHtDbGFzc0ZpbHRlciwgV2hhdHNVbmlxdWVSZXN1bHR9IGZyb20gXCIuL3R5cGluZ1wiO1xuaW1wb3J0IHtnZXRLZXlTdHlsZXMsIG1ha2VSYW5nZXNGb3JFbGVtZW50fSBmcm9tIFwiLi9jb21wdXRlL2RuYVwiO1xuaW1wb3J0IHtnZXREZWZhdWx0T3B0aW9ufSBmcm9tIFwiLi9jb25zdC9kYXRhXCI7XG5cbmludGVyZmFjZSBPcHRpb24ge1xuICAgIGlnbm9yZUNsYXNzUnVsZT86IENsYXNzRmlsdGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoYXRzRWxlbWVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb246IE9wdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb246IE9wdGlvbiA9IGdldERlZmF1bHRPcHRpb24oKSkge1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvblxuICAgIH1cblxuICAgIGdldFRhcmdldChxdWVyeVN0cmluZzogc3RyaW5nLCB0eXBlPzogUXVlcnlUeXBlcywgcm9vdD86IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQpe1xuICAgICAgICByZXR1cm4gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLHR5cGUscm9vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmjIflrprkuIDkuKrlhYPntKDvvIzorqHnrpflh7rlj6/ku6XlrprkvY3liLDor6XlhYPntKDnmoTllK/kuIDnibnlvoHmj4/ov7BcbiAgICAgKiAqL1xuICAgIGdldFVuaXF1ZUlkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogV2hhdHNVbmlxdWVSZXN1bHR7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDor6XlhYPntKDnmoTnibnlvoHmj4/ov7BcbiAgICAgICAgICogKi9cbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgcmV0dXJuIGdldFVuaXF1ZUlkKGVsZW1lbnQsdGhpcy5vcHRpb24uaWdub3JlQ2xhc3NSdWxlKTtcbiAgICAgICAgfWNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsJ+iuoeeul+WFg+e0oOS/oeaBr+W8guW4uCcsZWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja53aWQs5p+l6K+iRE9N6ZO+XG4gICAgICog6L+U5Zue5Y+v6L+95rqv55uu55qE5YWD57SgIOi/h+eoi+S4reeahCDmiYDmnIkgRE9NIOiKgueCueOAguacgOWkp+eoi+W6pueahOaJvuWIsCDnm67nmoTlhYPntKDnmoTmnIDlsI/ojIPlm7TjgILnvKnlsI/nm67moIfojIPlm7TjgIJcbiAgICAgKiAqL1xuICAgIGdldEVsZW1lbnRzTGluZXMocXVlcnlTdHJpbmc6IHN0cmluZyk6IEhUTUxFbGVtZW50W117XG4gICAgICAgIGlmKCFxdWVyeVN0cmluZyl7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZ0FycmF5ID0gcXVlcnlTdHJpbmcudHJpbSgpLnNwbGl0KFNQTElUX01PREVfQ09ERSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxxdWVyeVN0cmluZ0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBRdWVyeSA9IChxdWVyeVN0cmluZ0FycmF5LnNsaWNlKDAsaSsxKS5qb2luKFNQTElUX01PREVfQ09ERSkpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmKCF0ZW1wUXVlcnkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ZW1wVGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQodGVtcFF1ZXJ5LGk9PT0wPyB1bmRlZmluZWQgOiBRdWVyeVR5cGVzLmJ5U3BsaXQpXG4gICAgICAgICAgICBpZih0ZW1wVGFyZ2V0KXtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0ZW1wVGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkuIDkuKrlj6/ku6XkvZzkuLogZWxlbWVudCDmr5Tlr7nln7rlm6DnmoTmoIfor4ZcbiAgICAgKiDljIXlkKvoh6rouqvoioLngrnnmoTph4fmoLfvvJp0ZXh05YaF5a6577yM5qC35byP5a696auY5biD5bGA44CB5L2N5LqO5pW05LiqZG9jdW1lbnTnmoTluIPlsYDkvY3nva7jgIJcbiAgICAgKiDov5nkupvkv6Hmga/mnInliKnkuo7kuozmrKHmr5Tlr7nvvIzlvZMgdW5pcXVlSWQg5Y+Y5YyW5ZCO55qE5YWz6ZSu5L+h5oGvXG4gICAgICogKi9cbiAgICBnZXRFbGVtZW50RE5BKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFuZ2VzOiBtYWtlUmFuZ2VzRm9yRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgICAgIHN0eWxlczogZ2V0S2V5U3R5bGVzKGVsZW1lbnQpLFxuICAgICAgICAgICAgZnJhZ21lbnRzOiBbXVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge2dldEJ5QXR0ciwgZ2V0QnlDbGFzcywgZ2V0QnlJZCwgZ2V0QnlJbmRleCwgZ2V0QnlOYW1lLCBnZXRCeVJvb3QsIGdldEJ5VGFnTmFtZSwgZ2V0QnlUeXBlfSBmcm9tIFwiLi9jb21wdXRlSWRcIjtcbmltcG9ydCB0eXBlIHtDbGFzc0ZpbHRlciwgV2hhdHNVbmlxdWVSZXN1bHR9IGZyb20gXCIuLi90eXBpbmdcIjtcbmltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIi4uL3RhcmdldFwiO1xuaW1wb3J0IHtRdWVyeVR5cGVzLCBTUExJVF9NT0RFX0NPREV9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5cbmZ1bmN0aW9uIGdldFVuaXF1ZUlkSW5TY29wZShlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQsIGNsYXNzRmlsdGVyOiBDbGFzc0ZpbHRlciA9IHtibG9ja0NsYXNzTGlzdDpbXSxtYXhMZW5ndGg6IDEwfSwgcm9vdEVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBnZXRCeVJvb3QoZWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlJZChlbGVtZW50LHJvb3RFbGVtZW50KVxuICAgICAgICB8fCBnZXRCeU5hbWUoZWxlbWVudCxyb290RWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlDbGFzcyhlbGVtZW50LCBjbGFzc0ZpbHRlcixyb290RWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlUeXBlKGVsZW1lbnQscm9vdEVsZW1lbnQpXG4gICAgICAgIHx8IGdldEJ5QXR0cihlbGVtZW50LHJvb3RFbGVtZW50KVxufVxuXG4vKipcbiAqIOWfuuS6juW9k+WJjeiKgueCueaJvuWIsOS4gOS4quWPr+S7peiiq+WFqOWxgOWUr+S4gOWumuS9jeeahOWFg+e0oFxuICogKi9cbmZ1bmN0aW9uIGdldFVuaXF1ZUlkRm9yUHJlKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgY2xhc3NGaWx0ZXI6IENsYXNzRmlsdGVyID0ge2Jsb2NrQ2xhc3NMaXN0OltdLG1heExlbmd0aDogMTB9LCk6IHtcbiAgICB3aWQ6IHN0cmluZyxcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudFxufSB8IG51bGwge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYocGFyZW50Tm9kZSl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdldFVuaXF1ZUlkSW5TY29wZShwYXJlbnROb2RlLGNsYXNzRmlsdGVyKTtcbiAgICAgICAgaWYocmVzdWx0ICYmIHJlc3VsdC53aWQpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHdpZDogcmVzdWx0LndpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlxdWVJZEZvclByZShwYXJlbnROb2RlLGNsYXNzRmlsdGVyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiDorqHnrpcgSFRNTEVsZW1lbnQg55qE5ZSv5LiA5a6a5L2NIHdpZCDlrZfnrKbkuLJcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlSWQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCBjbGFzc0ZpbHRlcjogQ2xhc3NGaWx0ZXIgPSB7YmxvY2tDbGFzc0xpc3Q6W10sbWF4TGVuZ3RoOiAxMH0sIHJvb3RFbGVtZW50PzogSFRNTEVsZW1lbnQgKTogV2hhdHNVbmlxdWVSZXN1bHQge1xuICAgIC8qKuWFpeWPguexu+Wei+WuiOaKpCovXG4gICAgaWYoIWVsZW1lbnQudGFnTmFtZSl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnB1dCBpcyBub3QgYSBIVE1MIGVsZW1lbnRcIixlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC56IqC54K5ID4gbG9jYXRlIGJ5IGlkID4gYnkgbmFtZSA+IGJ5IGNsYXNzID4gdHlwZSA+IGxpbmsgPiBpbmRleCA+IHBhcmVudFxuICAgICAqIFRPRE8g6K+G5Yir5Yqo5oCB55Sf5oiQ55qESUTvvIzop4TliJkg6ZW/5bqm6L+H6ZW/77yfIOWQq+acieaVsOWtl+OAgeeJueauiuWtl+espuetiVxuICAgICAqIFRPRE8g5aKe5Yqg5LiA56eN5a6a5L2N5pa55byP77yM5oyJaW5uZXLmlofmnKzlhoXlrrkgbWQ1IOWkhOeQhuWQjueUn+aIkElEXG4gICAgICogKiovXG4gICAgbGV0IHJlc3VsdCA9IGdldFVuaXF1ZUlkSW5TY29wZShlbGVtZW50LGNsYXNzRmlsdGVyLHJvb3RFbGVtZW50KVxuXG4gICAgLyoqXG4gICAgICog5peg5rOV5Zyo5YWo5bGA6IyD5Zu05YaF5b6X5Yiw5ZSv5LiASUTvvIxcbiAgICAgKiDpnIDopoHov5vkuIDmraXpgJrov4fnpZYv54i26IqC54K55a6a5L2N44CC5Zyo56WWL+eItuiKgueCueeahOiMg+WbtOWGheW+l+WIsOWUr+S4gElE44CCXG4gICAgICogKi9cbiAgICBpZighcmVzdWx0KXtcbiAgICAgICAgY29uc3QgcGFyZW50VW5pcXVlID0gZ2V0VW5pcXVlSWRGb3JQcmUoZWxlbWVudCxjbGFzc0ZpbHRlcik7XG4gICAgICAgIC8vIHRvZG8g6YCJ5oup5Y+v5Lul5L2c5Li6IGZyYWdtZW50IOeahOWumuS9jeS9nOS4uuelluWFiOiKgueCuVxuICAgICAgICBpZihwYXJlbnRVbmlxdWUpe1xuICAgICAgICAgICAgLyoq6YCS5b2S5a6a5L2N5LiK5LiA57qn6IqC54K555qESUQqL1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVSZXN1bHQgPSBnZXRVbmlxdWVJZEluU2NvcGUoZWxlbWVudCxjbGFzc0ZpbHRlcixwYXJlbnRVbmlxdWUuZWxlbWVudClcbiAgICAgICAgICAgICAgICB8fCBnZXRCeVRhZ05hbWUoZWxlbWVudCxwYXJlbnRVbmlxdWUuZWxlbWVudClcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlV2lkID0gcmVsYXRpdmVSZXN1bHQgPyByZWxhdGl2ZVJlc3VsdC53aWQgOiAnJztcbiAgICAgICAgICAgIC8qKueItuWFg+e0oOiDveWkn+WcqOWFqOWxgOW+l+WIsOWUr+S4gElE5pe2Ki9cbiAgICAgICAgICAgIGlmKHJlbGF0aXZlV2lkKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTcGxpdCxcbiAgICAgICAgICAgICAgICAgICAgd2lkOiBwYXJlbnRVbmlxdWUud2lkICsgIFNQTElUX01PREVfQ09ERSArIHJlbGF0aXZlV2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5peg5rOV6YCa6L+H56WW54i26IqC54K557yp5bCP6IyD5Zu05ZCO77yM5b6X5Yiw5ZSv5LiASUTvvIzliJnlv4Xpobvkvp3pnaDnm7Tns7vniLbkurLoioLngrnpgJrov4fntKLlvJXlvpfliLAqL1xuICAgIGlmKCFyZXN1bHQpe1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IHBhcmVudFVuaXF1ZUlkID0gcGFyZW50Tm9kZSA/IGdldFVuaXF1ZUlkKHBhcmVudE5vZGUsY2xhc3NGaWx0ZXIpIDogJyc7XG5cbiAgICAgICAgaWYocGFyZW50VW5pcXVlSWQgJiYgcGFyZW50VW5pcXVlSWQud2lkKXtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlbGF0ZWRRdWVyeSA9IGdldEJ5SW5kZXgoZWxlbWVudCxjbGFzc0ZpbHRlcixwYXJlbnRVbmlxdWVJZC53aWQpXG4gICAgICAgICAgICBpZihwYXJlbnRSZWxhdGVkUXVlcnkgJiYgcGFyZW50UmVsYXRlZFF1ZXJ5LndpZCl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWQ6IHBhcmVudFJlbGF0ZWRRdWVyeS53aWQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlQYXJlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighcmVzdWx0KXtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FudCB1bmlxdWUgaWQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gcmVzdWx0LndpZCA/IGdldFRhcmdldChyZXN1bHQud2lkKSA6IHt0YXJnZXQ6IG51bGwsdHlwZTogbnVsbH07XG5cbiAgICBpZihjaGVja1Jlc3VsdC50YXJnZXQgPT09IGVsZW1lbnQpe1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUud2Fybign5qOA5rWL5LiN6YCa6L+HJywgZWxlbWVudCxjaGVja1Jlc3VsdC50YXJnZXQscmVzdWx0LndpZClcbiAgICB9XG5cblxuICAgIC8vIOaXoOazleWumuS9jeeahOaDheWGte+8jOWinuWKoFxuICAgIGNvbnNvbGUuZXJyb3IoZWxlbWVudCwn5peg5rOV6KKr5ZSv5LiA5a6a5L2NJylcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWQ6IG51bGwsXG4gICAgICAgIHR5cGU6IG51bGwsXG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1pbkRlZXA6IDQsXG4gICAgICAgIGlnbm9yZUNsYXNzUnVsZToge1xuICAgICAgICAgICAgYmxvY2tDbGFzc0xpc3Q6IFtdLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAxMCxcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50Ljk1NzNhNGU3LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);