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
})({"1cf3L":[function(require,module,exports) {
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
    "serverPort": 49994
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
var _dna = require("../whats-element/src/dna/dna");
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

},{"../whats-element/src/index":"6KkMj","../whats-element/src/dna/dna":"5W5XN","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6KkMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _whatsElement = require("./WhatsElement");
var _whatsElementDefault = parcelHelpers.interopDefault(_whatsElement);
// @ts-ignore
window.WhatsElementV2 = (0, _whatsElementDefault.default);
exports.default = (0, _whatsElementDefault.default);

},{"./WhatsElement":"ebqNP","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"ebqNP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _target = require("./target");
var _targetDefault = parcelHelpers.interopDefault(_target);
var _uniqueId = require("./uniqueId");
var _compute = require("./compute");
var _const = require("./const");
var _dna = require("./dna/dna");
var _data = require("./const/data");
class WhatsElement {
    constructor(option = (0, _data.getDefaultOption)()){
        this.option = option;
    }
    static getTarget(queryString, type, root) {
        return (0, _targetDefault.default)(queryString, type, root);
    }
    getTarget(queryString, type, root) {
        return (0, _targetDefault.default)(queryString, type, root);
    }
    /**
     * \u6307\u5b9a\u4e00\u4e2a\u5143\u7d20\uff0c\u8ba1\u7b97\u51fa\u53ef\u4ee5\u5b9a\u4f4d\u5230\u8be5\u5143\u7d20\u7684\u552f\u4e00\u7279\u5f81\u63cf\u8ff0
     * */ getUniqueId(element) {
        if (!element) return {
            wid: null,
            type: null
        };
        /**
         * \u8be5\u5143\u7d20\u7684\u7279\u5f81\u63cf\u8ff0
         * */ try {
            return (0, _uniqueId.getUniqueId)(element, this.option.ignoreClassRule);
        } catch (e) {
            console.error(e, "\u8ba1\u7b97\u5143\u7d20\u4fe1\u606f\u5f02\u5e38", element);
            return {
                wid: null,
                type: null
            };
        }
    }
    static getUniqueId(element) {
        return (0, _uniqueId.getUniqueId)(element);
    }
    compute(element) {
        if (!element) return {};
        const uniqueId = this.getUniqueId(element);
        return {
            ...(0, _compute.compute)(element),
            ...uniqueId
        };
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
     * */ getDNA(element) {
        return {
            ranges: (0, _dna.makeRangesForElement)(element),
            styles: (0, _dna.getKeyStyles)(element),
            fragments: []
        };
    }
}
exports.default = WhatsElement;

},{"./target":"6uPbm","./uniqueId":"9oNHO","./compute":"7DSdl","./const":"gWV3s","./dna/dna":"5W5XN","./const/data":"4JLoB","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6uPbm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getTarget);
var _const = require("../const");
function getTarget(queryString = "", type, root) {
    const query = queryString ? queryString.trim() : "";
    // @ts-ignore
    const findRoot = root || document || document.documentElement;
    if (!query) {
        console.error("wid \u4e0d\u53ef\u4e3a\u7a7a", query);
        return null;
    }
    if (!findRoot) {
        console.trace("\u6839\u8282\u70b9\u4e0d\u53ef\u4e3a\u7a7a", findRoot, queryString);
        return null;
    }
    // const regex = new RegExp(`${SPLIT_MODE_CODE}`);
    const targetQueryArray = query.split((0, _const.SPLIT_MODE_CODE));
    if (!type) {
        if (targetQueryArray.length > 1) type = (0, _const.QueryTypes).bySelector;
    }
    let target = null;
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
                // const matchedList = findRoot.querySelectorAll ? findRoot.querySelectorAll(queryString) : [];
                // if(matchedList && matchedList.length === 1){
                //     target = matchedList[0] as HTMLElement;
                // }
                target = findRoot.querySelector(queryString);
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
                const tempNode = getTarget(selectors[i], undefined, root1);
                if (tempNode) {
                    target = tempNode;
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

},{"../const":"gWV3s","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gWV3s":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
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

},{}],"9oNHO":[function(require,module,exports) {
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
    if (checkResult === element) return result;
    else console.warn("\u68c0\u6d4b\u4e0d\u901a\u8fc7", element, checkResult, result.wid);
    // \u65e0\u6cd5\u5b9a\u4f4d\u7684\u60c5\u51b5\uff0c\u589e\u52a0
    console.error(element, "\u65e0\u6cd5\u88ab\u552f\u4e00\u5b9a\u4f4d");
    return {
        wid: null,
        type: null
    };
}

},{"./computeId":"fqRRQ","../target":"6uPbm","../const":"gWV3s","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"fqRRQ":[function(require,module,exports) {
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
        if (query && (0, _targetDefault.default)(query, (0, _const.QueryTypes).byTagName, root) === element) return {
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
        if ((0, _targetDefault.default)(queryString, (0, _const.QueryTypes).bySelector, root) === element) return {
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
            if ((0, _targetDefault.default)(queryString, (0, _const.QueryTypes).bySelector, root) === element) return {
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
            const checkResult = (0, _targetDefault.default)(queryStringWithIndex, (0, _const.QueryTypes).bySelector, element.parentElement?.parentElement);
            if (checkResult === element) return {
                wid: queryStringWithIndex,
                type: (0, _const.QueryTypes).bySelector
            };
            else {
                console.log("queryString", queryStringWithIndex);
                console.log("checkResult", checkResult);
                console.log(element, "\u6821\u9a8c\u5931\u8d25", checkResult, document.querySelector(queryStringWithIndex));
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

},{"../const":"gWV3s","../target":"6uPbm","../utils/element":"Q5jkC","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"Q5jkC":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7DSdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compute", ()=>compute);
var _helper = require("../utils/helper");
function compute(element) {
    const viewPosition = element.getBoundingClientRect();
    const inView = viewPosition.left > 0 && viewPosition.left < window.innerWidth && viewPosition.top > 0 && viewPosition.top < window.innerHeight;
    const offset = (0, _helper.computeOffset)(element);
    return {
        top: (0, _helper.getCoords)(element).top,
        left: (0, _helper.getCoords)(element).left,
        viewLeft: viewPosition.left,
        viewTop: viewPosition.top,
        text: element.innerText,
        visible: inView,
        offsetBodyTop: offset.offsetTop,
        offsetBodyLeft: offset.offsetLeft
    };
}

},{"../utils/helper":"65TUy","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"65TUy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCoords", ()=>getCoords);
parcelHelpers.export(exports, "computeOffset", ()=>computeOffset);
parcelHelpers.export(exports, "simpleFyId", ()=>simpleFyId);
parcelHelpers.export(exports, "findFirstLevelChildren", ()=>findFirstLevelChildren);
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return {
        top: Math.round(top),
        left: Math.round(left)
    };
}
function computeOffset(element) {
    let offsetLeft = element.offsetLeft;
    let offsetTop = element.offsetTop;
    if (element.offsetParent) {
        const parentOffset = computeOffset(element.offsetParent);
        offsetLeft += parentOffset.offsetLeft;
        offsetTop += parentOffset.offsetTop;
    }
    return {
        offsetLeft: offsetLeft,
        offsetTop: offsetTop
    };
}
function simpleFyId(wid) {
    if (!wid) return wid;
    let result = wid;
    // todo \u9012\u5f52\u4e8c\u5206\u6cd5 \u8870\u51cf
    try {
        const classList = wid.split(".");
        const newQuery = classList.slice(0, Math.fround(classList.length / 2)).join(".");
        if (!newQuery) return wid;
        if (document.querySelector(newQuery) === document.querySelector(wid)) result = newQuery;
    } catch (e) {}
    return result;
}
function findFirstLevelChildren(findRoot, firstSelector) {
    const globalFindElements = findRoot.querySelectorAll(firstSelector);
    const matchedElement = [];
    for(let i = 0; i < globalFindElements.length; i++){
        const tempElement = globalFindElements[i];
        if (tempElement.parentNode === findRoot) matchedElement.push(tempElement);
    }
    return matchedElement;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"5W5XN":[function(require,module,exports) {
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
var _computeId = require("../uniqueId/computeId");
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

},{"../uniqueId/computeId":"fqRRQ","../utils/element":"Q5jkC","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4JLoB":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["1cf3L","hmiDA"], "hmiDA", "parcelRequire8cd9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxPQUFPLFdBQVcsVUFBUSxNQUFJLFdBQVcsUUFBUSxPQUFLLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxPQUFPLFdBQVcsVUFBUSxNQUFJLFdBQVcsUUFBUSxNQUFJLENBQUM7QUFBRSxJQUFJLElBQUUsSUFBSSxJQUFJLElBQUcsSUFBRSxDQUFBLElBQUcsRUFBRSxJQUFJLElBQUcsSUFBRSxFQUFFLE9BQU8sQ0FBQSxJQUFHLEVBQUUsV0FBVyxTQUFPLEVBQUUsU0FBUyxNQUFNLElBQUksQ0FBQSxJQUFHLEVBQUUsTUFBTSxNQUFNLE9BQU8sQ0FBQyxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUUsQ0FBQSxHQUFHLENBQUM7QUFBRyxJQUFJLElBQUUsRUFBRSxjQUFhLElBQUUsSUFBSSxFQUFFLGdCQUFjLElBQUksWUFBVSxRQUFPLElBQUU7QUFBSSxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBQyxHQUFHLElBQUksUUFBUSxJQUFJLEVBQUUsT0FBTyxJQUFHLFFBQU87QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFHLElBQUksUUFBUSxNQUFNLHFCQUFrQixPQUFPLElBQUcsUUFBTyxJQUFHLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSx3QkFBb0IsSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFHLElBQUksT0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFJO0FBQUcsSUFBSSxJQUFFO0lBQUMsbUJBQWtCO0lBQUssZ0JBQWU7SUFBTSxXQUFVO0lBQU0sWUFBVztRQUFDO0tBQWlCO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBbUUsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFLO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBMkIsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxPQUFPLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxFQUFFLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFLLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUN6akUsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsSUFBRyxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLHNCQUFxQixJQUFFLE9BQU8sZUFBYSxNQUFJLGFBQWEsYUFBYSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBQztJQUFDLFlBQVcsQ0FBQSxJQUFHO0FBQUMsS0FBRyxLQUFLO0FBQUUsU0FBUztJQUFJLE9BQU8sU0FBUyxlQUFlO0FBQUU7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDO0FBQUc7QUFBQyxTQUFTO0lBQUksSUFBSSxJQUFFLFNBQVMsY0FBYztJQUFPLEVBQUUsS0FBRztJQUFFLElBQUksSUFBRSxDQUFDOztLQUVqaEIsRUFBRSxFQUFFOzs7Ozs7O0tBT0osRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7S0FlSixFQUFFLEVBQUU7Ozs7S0FJSixFQUFFLEVBQUU7Ozs7S0FJSixFQUFFLEVBQUU7Ozs7S0FJSixFQUFFLEVBQUU7Ozs7Ozs7Ozs7OztFQVlQLENBQUM7SUFBQyxPQUFPLEVBQUUsWUFBVSxJQUFFLEVBQUUsV0FBVyxLQUFHLEdBQUUsRUFBRSxNQUFNLGdCQUFjLFFBQU8sRUFBRSxNQUFNLFdBQVMsU0FBUSxFQUFFLE1BQU0sU0FBTyxVQUFTLEVBQUUsTUFBTSxRQUFNLFVBQVMsRUFBRSxNQUFNLGFBQVcsY0FBYSxFQUFFLE1BQU0sVUFBUSxRQUFPLEVBQUUsTUFBTSxpQkFBZSxVQUFTLEVBQUUsTUFBTSxhQUFXLFVBQVMsRUFBRSxNQUFNLFVBQVEsVUFBUyxFQUFFLE1BQU0sTUFBSSxVQUFTLEVBQUUsTUFBTSxlQUFhLFNBQVEsRUFBRSxNQUFNLFNBQU8sY0FBYSxFQUFFLE1BQU0sVUFBUSxLQUFJLEVBQUUsTUFBTSxhQUFXLHlCQUF3QjtBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUM7SUFBRSxPQUFPLElBQUksUUFBUSxDQUFBO1FBQUksU0FBUyxrQkFBaUIsQ0FBQSxPQUFNLENBQUEsU0FBUyxnQkFBZ0IsWUFBWSxJQUFHLEdBQUUsR0FBRyxHQUFFLElBQUcsV0FBVyxpQkFBaUIsb0JBQW1CO1lBQUssT0FBSyxTQUFTLGdCQUFnQixZQUFZLElBQUc7UUFBRztJQUFFO0FBQUU7QUFBQyxJQUFJLElBQUU7SUFBSyxJQUFJO0lBQUUsSUFBRyxLQUFJO1FBQUMsSUFBSSxJQUFFO1FBQUksSUFBRSxFQUFFO0lBQUU7SUFBQyxPQUFNO1FBQUMsTUFBSyxPQUFNLEVBQUMsY0FBYSxJQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQUksTUFBTTtZQUFFLElBQUksSUFBRTtZQUFJLEVBQUUsTUFBTSxVQUFRLEtBQUksS0FBSSxDQUFBLEVBQUUsVUFBUSxDQUFBO2dCQUFJLEVBQUUsbUJBQWtCLFdBQVcsU0FBUztZQUFRLEdBQUUsRUFBRSxjQUFjLFFBQVEsVUFBVSxPQUFPLFdBQVUsRUFBRSxNQUFNLFNBQU8sV0FBVSxFQUFFLE1BQU0sZ0JBQWMsS0FBSTtRQUFFO1FBQUUsTUFBSztZQUFVLE1BQU07WUFBRSxJQUFJLElBQUU7WUFBSSxFQUFFLE1BQU0sVUFBUTtRQUFHO0lBQUM7QUFBQztBQUFFLElBQUksSUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUU7QUFBSSxlQUFlO0lBQUksRUFBRSwrQkFBOEIsSUFBRSxXQUFXLFVBQVUsYUFBVyxFQUFFLEtBQUs7UUFBQyxjQUFhLENBQUM7SUFBQztBQUFFO0FBQUMsU0FBUztJQUFJLEdBQUcsY0FBYSxJQUFFLEdBQUcsUUFBUSxRQUFRO1FBQUMsTUFBSztJQUFDLElBQUcsRUFBRSxhQUFhLFlBQVk7UUFBSztJQUFHLElBQUcsRUFBRSxVQUFVLFlBQVksQ0FBQTtRQUFJLEVBQUUsd0JBQXNCLEtBQUksRUFBRSw0QkFBMkIsQ0FBQSxJQUFFLENBQUMsQ0FBQTtJQUFFO0FBQUU7QUFBQyxTQUFTO0lBQUksSUFBRyxHQUFHLFNBQVEsSUFBRztRQUFDLEtBQUksWUFBWSxHQUFFO0lBQUssRUFBQyxPQUFLO1FBQUM7SUFBTTtBQUFDO0FBQUM7QUFBSSxFQUFFLE9BQU07SUFBSSxFQUFFLHVDQUFzQyxFQUFFLE9BQU8sQ0FBQSxJQUFHLEVBQUUsWUFBVSxFQUFFLFNBQVMsS0FBSyxDQUFBLElBQUcsRUFBRSxPQUFPLFFBQU8sRUFBRSxRQUFPLENBQUEsRUFBRSxRQUFPLEdBQUcsVUFBUSxFQUFFLFlBQVk7UUFBQyx1QkFBc0IsQ0FBQztJQUFDLEtBQUcsV0FBVztRQUFLO0lBQUcsR0FBRSxLQUFJO0FBQUU7Ozs7QUNwRDdsRDs7QUFDQSw2REFBNkQ7QUFDN0Q7QUFJQSxRQUFRLElBQ0o7QUFLSixNQUFNLFFBQVEsSUFBSSxDQUFBLEdBQUEscUJBQVcsRUFBRSxDQUMvQjtBQUdBLGFBQWE7QUFDYixPQUFPLFFBQVE7QUFHZixJQUFJLE1BQU07QUFDVixJQUFJLFFBQVE7QUFDWixTQUFTLGdCQUFnQixJQUFpQjtJQUN0QyxJQUFHLE9BQ0M7SUFFSixJQUFHLE1BQUs7UUFDTixNQUFNLFNBQVUsTUFBTSxZQUFZO1FBQ2hDLDRDQUE0QztRQUM1QyxJQUFHLENBQUMsT0FBTyxLQUFJO1lBQ1gsUUFBUSxNQUFNLFFBQU87WUFDckIsUUFBUTtZQUNSO1FBQ0osT0FBSztZQUNEO1lBQ0EsSUFBRyxLQUFLLFNBQVMsUUFDYixJQUFJLElBQUksSUFBRSxHQUFHLElBQUUsS0FBSyxTQUFTLFFBQVEsSUFBSTtnQkFDckMsSUFBRyxDQUFDLE9BQU8sS0FDUDtnQkFFSixnQkFBZ0IsS0FBSyxRQUFRLENBQUMsRUFBRTtZQUNwQztpQkFDQztnQkFDRSxPQUFPO2dCQUdWLE1BQU0sWUFBWSxDQUFBLEdBQUEsZ0NBQTBCLEVBQUU7Z0JBQzlDLFFBQVEsS0FBSyxPQUFPLEtBQUk7b0JBQUM7aUJBQUssRUFBQyxhQUFZO1lBQy9DO1FBQ0o7SUFFSjtBQUNKO0FBRUEsTUFBTSxPQUFPLFNBQVM7QUFFdEIsZ0JBQWdCO0FBRWhCLE1BQU0sZUFBZTtJQUNyQjtVQUFLLE9BQU87SUFBUCxRQUNELGFBQVE7SUFEUCxRQUVELFlBQU87SUFGTixRQUdELG1CQUFjO0lBSGIsUUFJRCxlQUFVO0lBSlQsUUFLRCxnQkFBVztHQUxWLFlBQUE7QUFPTCxNQUFNLFFBQVE7SUFDVjtRQUNJLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVyxPQUFPLGNBQWM7UUFDaEMsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVLFFBQVE7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixVQUFVLE9BQU8sYUFBYTtRQUM5QixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVLFFBQVE7SUFDdEI7SUFDQTtRQUNJLE9BQU87UUFDUCxVQUFVO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVSxRQUFRO0lBQ3RCO0lBQ0E7UUFDSSxPQUFPO1FBQ1AsVUFBVTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVUsUUFBUTtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVLFFBQVE7SUFDdEI7Q0FDSCxDQUNELGdDQUFnQztDQUNoQyxxREFBcUQ7Q0FDckQsd0JBQXdCO0NBQ3hCLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLFVBQVU7Q0FDVixFQUFFO0NBQ0YseUNBQXlDO0NBQ3pDLElBQUk7Q0FFSixzQkFBc0I7Ozs7OztBQ3ZIdEI7O0FBR0EsYUFBYTtBQUNiLE9BQU8saUJBQWlCLENBQUEsR0FBQSw0QkFBVztrQkFDcEIsQ0FBQSxHQUFBLDRCQUFXOzs7OztBQ0wxQjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT2UsTUFBTTtJQUVqQixZQUFZLFNBQWlCLENBQUEsR0FBQSxzQkFBZSxHQUFHLENBQUU7UUFDN0MsSUFBSSxDQUFDLFNBQVM7SUFDbEI7SUFFQSxPQUFPLFVBQVUsV0FBbUIsRUFBRSxJQUFpQixFQUFFLElBQTZCLEVBQUM7UUFDbkYsT0FBTyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxhQUFZLE1BQUs7SUFDdEM7SUFFQSxVQUFVLFdBQW1CLEVBQUUsSUFBaUIsRUFBRSxJQUE2QixFQUFDO1FBQzVFLE9BQU8sQ0FBQSxHQUFBLHNCQUFRLEVBQUUsYUFBWSxNQUFLO0lBQ3RDO0lBRUE7O09BRUcsR0FDSCxZQUFZLE9BQW9CLEVBQW9CO1FBQ2hELElBQUcsQ0FBQyxTQUNBLE9BQU87WUFDSCxLQUFLO1lBQ0wsTUFBTTtRQUNWO1FBRUo7O1dBRUcsR0FDSCxJQUFHO1lBQ0MsT0FBTyxDQUFBLEdBQUEscUJBQVUsRUFBRSxTQUFRLElBQUksQ0FBQyxPQUFPO1FBQzNDLEVBQUMsT0FBTyxHQUFHO1lBQ1AsUUFBUSxNQUFNLEdBQUUsWUFBVztZQUMzQixPQUFPO2dCQUNILEtBQUs7Z0JBQ0wsTUFBTTtZQUNWO1FBQ0o7SUFDSjtJQUVBLE9BQU8sWUFBWSxPQUFvQixFQUFDO1FBQ3BDLE9BQU8sQ0FBQSxHQUFBLHFCQUFVLEVBQUU7SUFDdkI7SUFFQSxRQUFRLE9BQW9CLEVBQUM7UUFDekIsSUFBRyxDQUFDLFNBQ0EsT0FBTyxDQUFDO1FBRVosTUFBTSxXQUFXLElBQUksQ0FBQyxZQUFZO1FBQ2xDLE9BQU87WUFDSCxHQUFHLENBQUEsR0FBQSxnQkFBTSxFQUFFLFFBQVE7WUFDbkIsR0FBRyxRQUFRO1FBQ2Y7SUFDSjtJQUVBOzs7T0FHRyxHQUNILGlCQUFpQixXQUFtQixFQUFnQjtRQUNoRCxJQUFHLENBQUMsYUFDQSxPQUFPLEVBQUU7UUFFYixNQUFNLG1CQUFtQixZQUFZLE9BQU8sTUFBTSxDQUFBLEdBQUEsc0JBQWM7UUFDaEUsTUFBTSxTQUFTLEVBQUU7UUFDakIsSUFBSSxJQUFJLElBQUUsR0FBRyxJQUFFLGlCQUFpQixRQUFRLElBQUk7WUFDeEMsTUFBTSxZQUFZLEFBQUMsaUJBQWlCLE1BQU0sR0FBRSxJQUFFLEdBQUcsS0FBSyxDQUFBLEdBQUEsc0JBQWMsR0FBSTtZQUN4RSxJQUFHLENBQUMsV0FDQTtZQUVKLE1BQU0sYUFBYSxJQUFJLENBQUMsVUFBVSxXQUFVLE1BQUksSUFBRyxZQUFZLENBQUEsR0FBQSxpQkFBUyxFQUFFO1lBQzFFLElBQUcsWUFDQyxPQUFPLEtBQUs7UUFFcEI7UUFDQSxPQUFPO0lBQ1g7SUFFQTs7OztPQUlHLEdBQ0gsT0FBTyxPQUFvQixFQUFDO1FBQ3hCLE9BQU87WUFDSCxRQUFRLENBQUEsR0FBQSx5QkFBbUIsRUFBRTtZQUM3QixRQUFRLENBQUEsR0FBQSxpQkFBVyxFQUFFO1lBQ3JCLFdBQVcsRUFBRTtRQUNqQjtJQUNKO0FBQ0o7a0JBeEZxQjs7Ozs7NkNDTkc7QUFOeEI7QUFNZSxTQUFTLFVBQVUsY0FBa0MsRUFBRSxFQUFFLElBQWlCLEVBQUUsSUFBb0M7SUFDM0gsTUFBTSxRQUFRLGNBQWMsWUFBWSxTQUFTO0lBQ2pELGFBQWE7SUFDYixNQUFNLFdBQW1DLFFBQVEsWUFBWSxTQUFTO0lBRXRFLElBQUcsQ0FBQyxPQUFNO1FBQ04sUUFBUSxNQUFNLFlBQVc7UUFDekIsT0FBTztJQUNYO0lBQ0EsSUFBRyxDQUFDLFVBQVM7UUFDVCxRQUFRLE1BQU0sV0FBVSxVQUFVO1FBQ2xDLE9BQU87SUFDWDtJQUVBLGtEQUFrRDtJQUNsRCxNQUFNLG1CQUFtQixNQUFNLE1BQU0sQ0FBQSxHQUFBLHNCQUFjO0lBQ25ELElBQUcsQ0FBQyxNQUNBO1FBQUEsSUFBRyxpQkFBaUIsU0FBTyxHQUN2QixPQUFPLENBQUEsR0FBQSxpQkFBUyxFQUFFO0lBQ3RCO0lBR0osSUFBSSxTQUE2QjtJQUNqQyxPQUFRO1FBQ0osS0FBSyxDQUFBLEdBQUEsaUJBQVMsRUFBRTtZQUNaLFNBQVMsb0JBQW9CLFdBQVcsU0FBUyxTQUFTLGVBQWUsZUFBZTtZQUN4RjtRQUNKLEtBQUssQ0FBQSxHQUFBLGlCQUFTLEVBQUU7WUFDWixTQUFTLHVCQUF1QixXQUFXLFNBQVMsa0JBQWtCLFlBQVksQ0FBQyxFQUFFLEdBQUc7WUFDeEY7UUFDSixLQUFLLENBQUEsR0FBQSxpQkFBUyxFQUFFO1lBQ1osb0NBQW9DO1lBQ3BDLElBQUc7Z0JBQ0MsK0ZBQStGO2dCQUMvRiwrQ0FBK0M7Z0JBQy9DLDhDQUE4QztnQkFDOUMsSUFBSTtnQkFDSixTQUFTLFNBQVMsY0FBYztZQUNoQyw0QkFBNEI7WUFDNUIsMENBQTBDO1lBQzFDLElBQUk7WUFDUixFQUFDLE9BQU8sR0FBRztnQkFDUCxRQUFRLEtBQUssR0FBRTtZQUNuQjtZQUNBO1FBQ0oseUJBQXlCLEdBQ3pCLEtBQUssQ0FBQSxHQUFBLGlCQUFTLEVBQUU7WUFDWixNQUFNLFlBQVksaUJBQWlCLE9BQU8sQ0FBQztnQkFDdkMsT0FBTyxPQUFPLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFDbEM7WUFDQSxJQUFJLFFBQStCO1lBQ25DLE9BQU8sR0FDUCxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsVUFBVSxRQUFRLElBQUk7Z0JBQ2hDLE1BQU0sV0FBVyxVQUFVLFNBQVMsQ0FBQyxFQUFFLEVBQUMsV0FBVTtnQkFDbEQsSUFBRyxVQUFTO29CQUNSLFNBQVM7b0JBQ1QsUUFBTztnQkFDWCxPQUNJO1lBRVI7WUF3QkE7UUFDSjtZQUNJLHFCQUFxQixHQUNyQixNQUFNLFNBQVMsVUFBVSxhQUFhLENBQUEsR0FBQSxpQkFBUyxFQUFFLE1BQUssYUFDL0MsVUFBVSxhQUFhLENBQUEsR0FBQSxpQkFBUyxFQUFFLFFBQU8sYUFDekMsVUFBVSxhQUFZLENBQUEsR0FBQSxpQkFBUyxFQUFFLFlBQVc7WUFFbkQsSUFBRyxRQUNDLE9BQU87aUJBRVAsT0FBTyxVQUFVLGFBQWEsQ0FBQSxHQUFBLGlCQUFTLEVBQUUsTUFBTTtJQUUzRDtJQUVBLDBFQUEwRTtJQUMxRSxPQUFPO0FBQ1g7Ozs7O3FEQzFHYTt1REFHQTs7QUFITixNQUFNLGtCQUFrQjtBQUd4QixNQUFNLG9CQUFvQjtJQUUxQjtVQUFLLFVBQVU7SUFBVixXQUNSLFNBQVM7SUFDVCxVQUFPO0lBRkMsV0FHUixvQkFBb0I7SUFDcEIsZ0JBQWE7SUFKTCxXQUtSLHdCQUF3QjtJQUN4QixZQUFTO0lBTkQsV0FPUixlQUFZO0lBUEosV0FRUix3QkFBd0I7SUFDeEIsYUFBVTtJQVRGLFdBVVIsY0FBVztHQVZILGVBQUE7OztBQ0xaLFFBQVEsaUJBQWlCLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxhQUFhLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLG9CQUFvQixTQUFVLENBQUM7SUFDckMsT0FBTyxlQUFlLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsWUFBWSxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO1FBQ3ZDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssZUFBZSxNQUNuRTtRQUdGLE9BQU8sZUFBZSxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0Y7Ozs7O0FDUUE7O0dBRUcsR0FDSCxpREFBZ0I7QUF6Q2hCO0FBRUE7O0FBQ0E7QUFHQSxTQUFTLG1CQUFtQixPQUF1QyxFQUFFLGNBQTJCO0lBQUMsZ0JBQWUsRUFBRTtJQUFDLFdBQVc7QUFBRSxDQUFDLEVBQUUsV0FBeUI7SUFDeEosT0FBTyxDQUFBLEdBQUEsb0JBQVEsRUFBRSxZQUNWLENBQUEsR0FBQSxrQkFBTSxFQUFFLFNBQVEsZ0JBQ2hCLENBQUEsR0FBQSxvQkFBUSxFQUFFLFNBQVEsZ0JBQ2xCLENBQUEsR0FBQSxxQkFBUyxFQUFFLFNBQVMsYUFBWSxnQkFDaEMsQ0FBQSxHQUFBLG9CQUFRLEVBQUUsU0FBUSxnQkFDbEIsQ0FBQSxHQUFBLG9CQUFRLEVBQUUsU0FBUTtBQUM3QjtBQUVBOztHQUVHLEdBQ0gsU0FBUyxrQkFBa0IsT0FBdUMsRUFBRSxjQUEyQjtJQUFDLGdCQUFlLEVBQUU7SUFBQyxXQUFXO0FBQUUsQ0FBQztJQUk1SCxNQUFNLGFBQWEsUUFBUTtJQUMzQixJQUFHLFlBQVc7UUFDVixNQUFNLFNBQVMsbUJBQW1CLFlBQVc7UUFDN0MsSUFBRyxVQUFVLE9BQU8sS0FDaEIsT0FBTztZQUNILFNBQVM7WUFDVCxLQUFLLE9BQU87UUFDaEI7YUFFQSxPQUFPLGtCQUFrQixZQUFXO0lBRTVDO0lBRUEsT0FBTztBQUNYO0FBS08sU0FBUyxZQUFZLE9BQXVDLEVBQUUsY0FBMkI7SUFBQyxnQkFBZSxFQUFFO0lBQUMsV0FBVztBQUFFLENBQUMsRUFBRSxXQUF5QjtJQUN4SixTQUFTLEdBQ1QsSUFBRyxDQUFDLFFBQVEsU0FBUTtRQUNoQixRQUFRLE1BQU0sK0JBQThCO1FBQzVDLE9BQU87WUFDSCxLQUFLO1lBQ0wsTUFBTTtRQUNWO0lBQ0o7SUFFQTs7OztRQUlJLEdBQ0osSUFBSSxTQUFTLG1CQUFtQixTQUFRLGFBQVk7SUFFcEQ7OztPQUdHLEdBQ0gsSUFBRyxDQUFDLFFBQU87UUFDUCxNQUFNLGVBQWUsa0JBQWtCLFNBQVE7UUFDL0MsaUNBQWlDO1FBQ2pDLElBQUcsY0FBYTtZQUNaLGVBQWUsR0FDZixNQUFNLGlCQUFpQixtQkFBbUIsU0FBUSxhQUFZLGFBQWEsWUFDcEUsQ0FBQSxHQUFBLHVCQUFXLEVBQUUsU0FBUSxhQUFhO1lBQ3pDLE1BQU0sY0FBYyxpQkFBaUIsZUFBZSxNQUFNO1lBQzFELGtCQUFrQixHQUNsQixJQUFHLGFBQ0MsU0FBUztnQkFDTCxNQUFNLENBQUEsR0FBQSxpQkFBUyxFQUFFO2dCQUNqQixLQUFLLGFBQWEsTUFBTyxDQUFBLEdBQUEsc0JBQWMsSUFBSTtZQUMvQztRQUVSO0lBQ0o7SUFFQSx5Q0FBeUMsR0FDekMsSUFBRyxDQUFDLFFBQU87UUFDUCxNQUFNLGFBQWEsUUFBUTtRQUMzQixNQUFNLGlCQUFpQixhQUFhLFlBQVksWUFBVyxlQUFlO1FBRTFFLElBQUcsa0JBQWtCLGVBQWUsS0FBSTtZQUNwQyxNQUFNLHFCQUFxQixDQUFBLEdBQUEscUJBQVMsRUFBRSxTQUFRLGFBQVksZUFBZTtZQUN6RSxJQUFHLHNCQUFzQixtQkFBbUIsS0FDeEMsU0FBUztnQkFDTCxLQUFLLG1CQUFtQjtnQkFDeEIsTUFBTSxDQUFBLEdBQUEsaUJBQVMsRUFBRTtZQUNyQjtRQUVSO0lBQ0o7SUFFQSxJQUFHLENBQUMsUUFBTztRQUNQLFFBQVEsTUFBTSwrQkFBK0I7UUFDN0MsT0FBTztZQUNILEtBQUs7WUFDTCxNQUFNO1FBQ1Y7SUFDSjtJQUVBLE1BQU0sY0FBYyxPQUFPLE1BQU0sQ0FBQSxHQUFBLHNCQUFRLEVBQUUsT0FBTyxPQUFPO1FBQUMsUUFBUTtRQUFLLE1BQU07SUFBSTtJQUVqRixJQUFHLGdCQUFnQixTQUNmLE9BQU87U0FFUCxRQUFRLEtBQUssU0FBUyxTQUFRLGFBQVksT0FBTztJQUlyRCxhQUFhO0lBQ2IsUUFBUSxNQUFNLFNBQVE7SUFDdEIsT0FBTztRQUNILEtBQUs7UUFDTCxNQUFNO0lBQ1Y7QUFDSjs7Ozs7QUN6RkEscURBQWdCO0FBd0NoQiwrQ0FBZ0I7QUFZaEIsNkNBQWdCO0FBcUJoQjs7R0FFRyxHQUNILCtDQUFnQjtBQWNoQjs7R0FFRyxHQUNILGtEQUFnQjtBQWlCaEI7O0dBRUcsR0FDSCxnREFBZ0I7QUFhaEIsK0NBQWdCO0FBb0JoQiwrQ0FBZ0I7QUFnQ2hCOztHQUVHLEdBQ0gsZ0RBQWdCLFlBOERoQjs7OztHQUlHLElBQ0gscUlBQXFJO0NBQ3JJLGdEQUFnRDtDQUNoRCw2Q0FBNkM7Q0FDN0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLFFBQVE7Q0FDUiw4Q0FBOEM7Q0FDOUMsZ0dBQWdHO0NBQ2hHLGtGQUFrRjtDQUNsRiwrQkFBK0I7Q0FDL0Isd0VBQXdFO0NBQ3hFLG1CQUFtQjtDQUNuQixnQ0FBZ0M7Q0FDaEMsd0NBQXdDO0NBQ3hDLFlBQVk7Q0FDWixRQUFRO0NBQ1IsRUFBRTtDQUNGLHdFQUF3RTtDQUN4RSxxRkFBcUY7Q0FDckYsNEJBQTRCO0NBQzVCLDBDQUEwQztDQUMxQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osUUFBUTtDQUNSLEVBQUU7Q0FDRixzREFBc0Q7Q0FDdEQsc0JBQXNCO0NBQ3RCLHVDQUF1QztDQUN2Qyx1REFBdUQ7Q0FDdkQsc0JBQXNCO0NBQ3RCLGdEQUFnRDtDQUNoRCwyQkFBMkI7Q0FDM0IscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixRQUFRO0NBQ1IsRUFBRTtDQUNGLHFCQUFxQjtDQUNyQixtRUFBbUU7Q0FDbkUseUVBQXlFO0NBQ3pFLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsd0NBQXdDO0NBQ3hDLFlBQVk7Q0FDWixRQUFRO0NBQ1IsRUFBRTtDQUNGLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsbUNBQW1DO0NBQ25DLFFBQVE7Q0FDUixJQUFJOztBQTNVSjtBQUNBOztBQUdBO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU0sMEJBQTBCO0lBQzVCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxpQkFBaUIsR0FDakI7SUFDQTtJQUNBLG1CQUFtQixHQUNuQjtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBR0EscUJBQXFCLEdBQ3JCO0lBQ0E7SUFDQTtDQUNIO0FBQ00sU0FBUyxnQkFBZ0IsT0FBb0IsRUFBRSxjQUEwQjtJQUFDLGdCQUFlLEVBQUU7SUFBQyxXQUFVO0FBQUUsQ0FBQztJQUM1RyxNQUFNLFlBQVk7V0FBSTtXQUE0QixhQUFhLGtCQUFnQixFQUFFO0tBQUU7SUFFbkYsTUFBTSxhQUFhLEVBQUU7SUFDckIsSUFBSSxJQUFJLElBQUUsR0FBRyxJQUFFLFFBQVEsVUFBVSxRQUFRLElBQUk7UUFDekMsTUFBTSxPQUFPLFFBQVEsU0FBUyxDQUFDLEVBQUU7UUFDakMsSUFBRyxDQUFDLFlBQVksS0FBSyxPQUNqQjtRQUdKLGFBQWEsR0FDYixJQUFJLFVBQVU7UUFDZCxJQUFJLElBQUksSUFBRSxHQUFHLElBQUUsVUFBVSxRQUFPLElBQUk7WUFDaEMsTUFBTSxpQkFBaUIsU0FBUyxDQUFDLEVBQUU7WUFDbkMsSUFBRyxPQUFPLG1CQUFtQixVQUN6QjtnQkFBQSxJQUFHLG1CQUFtQixNQUFLO29CQUN2QixVQUFVO29CQUNWO2dCQUNKO1lBQUEsT0FFQSxJQUFHLGVBQWUsS0FBSyxPQUFNO2dCQUN6QixVQUFVO2dCQUNWO1lBQ0o7UUFFUjtRQUVBLElBQUcsQ0FBQyxTQUNBLFdBQVcsS0FBSztJQUV4QjtJQUVBLE9BQU8sV0FBVyxTQUFTLE1BQUksV0FBVyxNQUFNLEdBQUUsWUFBWSxhQUFhLElBQUksS0FBSyxPQUFPO0FBQy9GO0FBRUEsU0FBUyxjQUFjLE9BQW9CO0lBQ3ZDLE1BQU0sTUFBTSxRQUFRLFFBQVE7SUFDNUIsT0FBTztBQUNYO0FBRU8sU0FBUyxVQUFVLE9BQW9CO0lBQzFDLE1BQU0sTUFBTSxRQUFRLFFBQVE7SUFDNUIsSUFBRyxRQUFNLFVBQVUsUUFBTyxRQUN0QixPQUFPO1FBQ0gsTUFBTSxDQUFBLEdBQUEsaUJBQVMsRUFBRTtRQUNqQixLQUFLO0lBQ1Q7U0FFQSxPQUFPO0FBRWY7QUFFTyxTQUFTLFFBQVEsT0FBb0IsRUFBQyxJQUFrQjtJQUUzRCxNQUFNLEtBQUssQ0FBQSxHQUFBLDZCQUFtQixFQUFFO0lBQ2hDLElBQUcsQ0FBQyxJQUNBLE9BQU87SUFHWCxNQUFNLE1BQU0sUUFBUSxRQUFRO0lBQzVCLE1BQU0sTUFBTSxNQUFJLE1BQUk7SUFHcEIsT0FBTyxHQUNQLElBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsS0FBSSxDQUFBLEdBQUEsaUJBQVMsRUFBRSxZQUFXLFVBQVUsU0FDN0MsT0FBTztRQUNILEtBQUs7UUFDTCxNQUFNLENBQUEsR0FBQSxpQkFBUyxFQUFFO0lBQ3JCO0lBRUosT0FBTztBQUNYO0FBS08sU0FBUyxVQUFVLE9BQXVDLEVBQUUsSUFBa0I7SUFDakYsTUFBTSxNQUFNLGNBQWM7SUFDMUIsTUFBTSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU87SUFDaEQsTUFBTSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUc7SUFDaEQsSUFBRyxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLE9BQU0sQ0FBQSxHQUFBLGlCQUFTLEVBQUUsUUFBUSxVQUFVLFNBQ3JELE9BQU07UUFDRixLQUFLO1FBQ0wsTUFBTSxDQUFBLEdBQUEsaUJBQVMsRUFBRTtJQUNyQjtJQUVKLE9BQU87QUFDWDtBQU1PLFNBQVMsYUFBYSxPQUF1QyxFQUFFLElBQWtCO0lBQ3BGLE1BQU0sTUFBTSxjQUFjLFlBQVk7SUFDdEMsTUFBTSxpQkFBaUI7UUFBQztRQUFNO1FBQU87UUFBUztRQUFRO1FBQU07UUFBSTtLQUFTLENBQUMsU0FBUyxJQUFJO0lBQ3ZGLE1BQU0sY0FBYyxJQUFJLFFBQVEsT0FBTztJQUN2QyxJQUFHLGtCQUFrQixhQUFZO1FBQzdCLE1BQU0sUUFBUSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRztRQUMvQixJQUFHLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsT0FBTSxDQUFBLEdBQUEsaUJBQVMsRUFBRSxXQUFXLFVBQVUsU0FDeEQsT0FBTTtZQUNGLEtBQUs7WUFDTCxNQUFNLENBQUEsR0FBQSxpQkFBUyxFQUFFO1FBQ3JCO0lBRVI7SUFFQSxPQUFPO0FBQ1g7QUFLTyxTQUFTLFdBQVcsT0FBb0IsRUFBRSxXQUF3QixFQUFFLElBQWtCO0lBQ3pGLE1BQU0sWUFBWSxnQkFBZ0IsU0FBUTtJQUMxQyxNQUFNLE1BQU0sUUFBUSxRQUFRO0lBQzVCLE1BQU0sTUFBTSxNQUFJO0lBQ2hCLElBQUcsYUFBYSxDQUFBLEdBQUEsc0JBQVEsRUFBRSxLQUFJLENBQUEsR0FBQSxpQkFBUyxFQUFFLFlBQVksVUFBUSxTQUN6RCxPQUFPO1FBQ0gsS0FBSztRQUNMLE1BQU0sQ0FBQSxHQUFBLGlCQUFTLEVBQUU7SUFDckI7SUFFSixPQUFPO0FBQ1g7QUFFTyxTQUFTLFVBQVUsT0FBdUMsRUFBRSxJQUFrQjtJQUNqRixNQUFNLE9BQU8sVUFBVSxVQUFVLEFBQUMsQ0FBQSxRQUFRLFFBQVEsRUFBQyxHQUFJLFlBQVksZ0JBQWdCO0lBQ25GLElBQUcsU0FBUyxTQUFRO1FBQ2hCLE1BQU0sUUFBUSxXQUFXLFVBQVUsUUFBUSxRQUFRO1FBQ25ELE1BQU0sTUFBTSxRQUFRLFFBQVE7UUFDNUIsTUFBTSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU87UUFDaEQsSUFBSSxjQUFjLE1BQUksYUFBVyxRQUFNO1FBQ3ZDLElBQUcsTUFDQyxlQUFlLFlBQVUsT0FBSztRQUVsQyxJQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLGFBQVksQ0FBQSxHQUFBLGlCQUFTLEVBQUUsWUFBVyxVQUFRLFNBQ25ELE9BQU87WUFDSCxLQUFLO1lBQ0wsTUFBTSxDQUFBLEdBQUEsaUJBQVMsRUFBRTtRQUNyQjtJQUVSO0lBQ0EsT0FBTztBQUNYO0FBRU8sU0FBUyxVQUFVLE9BQXVDLEVBQUMsSUFBa0I7SUFDaEYsTUFBTSxNQUFNLFFBQVEsUUFBUTtJQUM1QixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixvREFBb0Q7SUFDcEQsa0ZBQWtGO0lBQ2xGLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osUUFBUTtJQUNSLElBQUk7SUFFSixNQUFNLFFBQVE7UUFBQztRQUFPO1FBQU07UUFBVztLQUFPO0lBQzlDLElBQUssSUFBSSxJQUFJLEdBQUksSUFBRSxNQUFNLFFBQVEsSUFBSTtRQUNqQyxNQUFNLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxRQUFRLFFBQVEsYUFBYTtRQUNuQyxJQUFHLFVBQVUsV0FBVTtZQUNuQixNQUFNLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3JELElBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsYUFBWSxDQUFBLEdBQUEsaUJBQVMsRUFBRSxZQUFXLFVBQVUsU0FDckQsT0FBTztnQkFDSCxLQUFLO2dCQUNMLE1BQU0sQ0FBQSxHQUFBLGlCQUFTLEVBQUU7WUFDckI7UUFFUjtJQUNKO0lBQ0EsT0FBTztBQUNYO0FBS08sU0FBUyxXQUFXLE9BQW9CLEVBQUUsV0FBd0IsRUFBRSxTQUFpQjtJQUN4RixzRUFBc0U7SUFDdEUseUlBQXlJO0lBQ3pJLE1BQU0sWUFBWSxnQkFBZ0IsU0FBUTtJQUMxQyxNQUFNLGNBQWMsWUFBWSxZQUFZLFFBQVEsUUFBUTtJQUM1RCxpRUFBaUU7SUFDakUsMERBQTBEO0lBQzFELHVFQUF1RTtJQUN2RSxNQUFNLFdBQVcsUUFBUSxlQUFlO0lBQ3hDLElBQUcsWUFBWSxTQUFTLFNBQU8sR0FBRTtRQUM3QixJQUFJLFFBQVE7UUFDWixJQUFJLElBQUksSUFBRSxHQUFHLElBQUUsU0FBUyxRQUFRLElBQUk7WUFDaEMsV0FBVztZQUNYLElBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsUUFBUSxlQUNyQztZQUVKLElBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFVLFFBQVEsU0FDN0I7WUFFSixJQUFHLFlBQVUsUUFBUSxDQUFDLEVBQUUsRUFDcEI7UUFFUjtRQUNBLElBQUcsT0FBTTtZQUNMLE1BQU0sdUJBQXVCLFlBQVksQ0FBQSxHQUFBLHdCQUFnQixJQUFJLGNBQWMsa0JBQWdCLFFBQU07WUFDakcscURBQXFEO1lBQ3JELGlDQUFpQztZQUNqQyxNQUFNLGNBQWMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsc0JBQXFCLENBQUEsR0FBQSxpQkFBUyxFQUFFLFlBQVcsUUFBUSxlQUFlO1lBQ2hHLElBQUcsZ0JBQWdCLFNBQ2YsT0FBTztnQkFDSCxLQUFLO2dCQUNMLE1BQU0sQ0FBQSxHQUFBLGlCQUFTLEVBQUU7WUFDckI7aUJBQ0M7Z0JBQ0QsUUFBUSxJQUFJLGVBQWM7Z0JBQzFCLFFBQVEsSUFBSSxlQUFjO2dCQUMxQixRQUFRLElBQUksU0FBUSxRQUFPLGFBQVksU0FBUyxjQUFjO2dCQUM5RCxRQUFRLElBQUksVUFBUztnQkFDckIsUUFBUSxJQUFJLFFBQVEsZUFBYztnQkFDbEMsb0VBQW9FO2dCQUNwRSx5Q0FBeUM7Z0JBQ3pDLElBQUksSUFBSSxJQUFFLEdBQUcsSUFBRSxRQUFRLGNBQWMsU0FBUyxRQUFPLElBQUk7b0JBQ3RELE1BQU0sb0JBQW9CLFFBQVEsY0FBYyxjQUFjLGNBQWEsa0JBQWdCLElBQUU7b0JBQzdGLFFBQVEsSUFBSSxTQUFRO29CQUNwQixJQUFHLHNCQUFvQixTQUFRO3dCQUMzQixRQUFRLElBQUksdUJBQXVCO3dCQUNuQztvQkFDSjtnQkFDSDtnQkFDQSxPQUFPO1lBQ1AsMkVBQTJFO1lBQy9FO1FBQ0osT0FBSztZQUNELFFBQVEsS0FBSztZQUNiLFFBQVE7UUFDWjtJQUNKO0lBQ0EsUUFBUSxNQUFNLHFCQUFvQjtJQUNsQyxPQUFPO0FBQ1g7Ozs7O0FDNVFBLDBEQUFnQjtBQUFULFNBQVMscUJBQXFCLE9BQW9CO0lBQ3JELE1BQU0sS0FBSyxRQUFRO0lBQ25CLElBQUcsQ0FBQyxJQUNBLE9BQU87SUFFWCwyQkFBMkI7SUFDM0IsSUFBRyxTQUFTLEtBQUssS0FBSTtRQUNqQixRQUFRLElBQUksWUFBVztRQUN2QixPQUFPO0lBQ1g7SUFDQSw0Q0FBNEM7SUFDNUMsSUFBRyxRQUFRLEtBQUssS0FBSTtRQUNoQixRQUFRLElBQUksU0FBUTtRQUNwQixPQUFPO0lBQ1g7SUFDQSxPQUFPO0FBQ1g7Ozs7O0FDaEJBLDZDQUFnQjtBQUZoQjtBQUVPLFNBQVMsUUFBUSxPQUFvQjtJQUN4QyxNQUFNLGVBQWUsUUFBUTtJQUM3QixNQUFNLFNBQVMsYUFBYSxPQUFLLEtBQUssYUFBYSxPQUFPLE9BQU8sY0FBYyxhQUFhLE1BQUksS0FBSyxhQUFhLE1BQUksT0FBTztJQUU3SCxNQUFNLFNBQVMsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7SUFDN0IsT0FBTztRQUNILEtBQUssQ0FBQSxHQUFBLGlCQUFRLEVBQUUsU0FBUztRQUN4QixNQUFNLENBQUEsR0FBQSxpQkFBUSxFQUFFLFNBQVM7UUFDekIsVUFBVSxhQUFhO1FBQ3ZCLFNBQVMsYUFBYTtRQUN0QixNQUFNLFFBQVE7UUFDZCxTQUFTO1FBQ1QsZUFBZSxPQUFPO1FBQ3RCLGdCQUFnQixPQUFPO0lBQzNCO0FBQ0o7Ozs7O0FDakJBLCtDQUFnQjtBQWFoQixtREFBZ0I7QUFnQmhCLGdEQUFnQjtBQXFCaEIsNERBQWdCO0FBbERULFNBQVMsVUFBVSxJQUFpQjtJQUN2QyxJQUFJLE1BQU0sS0FBSztJQUNmLElBQUksT0FBTyxTQUFTO0lBQ3BCLElBQUksUUFBUSxTQUFTO0lBQ3JCLElBQUksWUFBWSxPQUFPLGVBQWUsTUFBTSxhQUFhLEtBQUs7SUFDOUQsSUFBSSxhQUFhLE9BQU8sZUFBZSxNQUFNLGNBQWMsS0FBSztJQUNoRSxJQUFJLFlBQVksTUFBTSxhQUFhLEtBQUssYUFBYTtJQUNyRCxJQUFJLGFBQWEsTUFBTSxjQUFjLEtBQUssY0FBYztJQUN4RCxJQUFJLE1BQU8sSUFBSSxNQUFPLFlBQVk7SUFDbEMsSUFBSSxPQUFPLElBQUksT0FBTyxhQUFhO0lBQ25DLE9BQU87UUFBRSxLQUFLLEtBQUssTUFBTTtRQUFNLE1BQU0sS0FBSyxNQUFNO0lBQU07QUFDMUQ7QUFFTyxTQUFTLGNBQWMsT0FBb0I7SUFDOUMsSUFBSSxhQUFhLFFBQVE7SUFDekIsSUFBSSxZQUFZLFFBQVE7SUFFeEIsSUFBRyxRQUFRLGNBQWE7UUFDcEIsTUFBTSxlQUFlLGNBQTJCLFFBQVE7UUFDeEQsY0FBYyxhQUFhO1FBQzNCLGFBQWEsYUFBYTtJQUM5QjtJQUVBLE9BQU07UUFDRixZQUFZO1FBQ1osV0FBVztJQUNmO0FBQ0o7QUFFTyxTQUFTLFdBQVcsR0FBVztJQUNsQyxJQUFHLENBQUMsS0FDQSxPQUFPO0lBRVgsSUFBSSxTQUFTO0lBQ2IsZ0JBQWdCO0lBQ2hCLElBQUc7UUFDQyxNQUFNLFlBQVksSUFBSSxNQUFNO1FBQzVCLE1BQU0sV0FBVyxVQUFVLE1BQU0sR0FBRSxLQUFLLE9BQU8sVUFBVSxTQUFPLElBQUksS0FBSztRQUN6RSxJQUFHLENBQUMsVUFDQSxPQUFPO1FBRVgsSUFBRyxTQUFTLGNBQWMsY0FBWSxTQUFTLGNBQWMsTUFDekQsU0FBUztJQUVqQixFQUFDLE9BQU8sR0FBRyxDQUVYO0lBQ0EsT0FBTztBQUNYO0FBRU8sU0FBUyx1QkFBdUIsUUFBZ0MsRUFBRSxhQUFxQjtJQUMxRixNQUFNLHFCQUFxQixTQUFTLGlCQUFpQjtJQUNyRCxNQUFNLGlCQUFnQyxFQUFFO0lBQ3hDLElBQUksSUFBSSxJQUFFLEdBQUcsSUFBRSxtQkFBbUIsUUFBUSxJQUFJO1FBQzFDLE1BQU0sY0FBYyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ3pDLElBQUcsWUFBWSxlQUFlLFVBQzFCLGVBQWUsS0FBSztJQUU1QjtJQUNBLE9BQU87QUFDWDs7Ozs7QUN6REE7Ozs7R0FJRyxHQUNILDBEQUFnQjtBQXVCaEIsa0RBQWdCO0FBV2hCOztHQUVHLEdBQ0gsaUVBQWdCO0FBNUNoQjtBQU9PLFNBQVMscUJBQXFCLE9BQW9CLEVBQUMsWUFBb0IsQ0FBQztJQUMzRSxNQUFNLE9BQU8sUUFBUSxlQUFlO0lBQ3BDLElBQUcsQ0FBQyxNQUNBLE9BQU8sRUFBRTtJQUdiLE1BQU0sU0FBa0IsRUFBRTtJQUMxQixJQUFJLElBQUksSUFBRSxHQUFHLElBQUksV0FBVyxJQUFJO1FBQzVCLE1BQU0sU0FBUyxJQUFJLEtBQUssTUFBTSxLQUFLLFNBQVM7UUFDNUMsT0FBTyxLQUFLO1lBQ1IsUUFBUTtZQUNSLE1BQU0sS0FBSyxVQUFVLFFBQU8sU0FBTztRQUN2QztJQUNKO0lBQ0EsT0FBTztBQUNYO0FBR0E7OztHQUdHLEdBQ0gsTUFBTSxhQUFhO0lBQUM7SUFBUTtJQUFTO0lBQVc7Q0FBVTtBQUNuRCxTQUFTLGFBQWEsT0FBb0I7SUFDN0MsTUFBTSxXQUFXLGlCQUFpQjtJQUNsQyxNQUFNLFNBQWlDLENBQUM7SUFDeEMsV0FBVyxRQUFRLFNBQVUsR0FBRztRQUM1QixZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtJQUMvQjtJQUNBLE9BQU87QUFDWDtBQU1PLFNBQVMsNEJBQTRCLFdBQXdCO0lBQ2hFLE1BQU0sWUFBMkIsRUFBRTtJQUVuQyxNQUFNLFNBQVMsWUFBWTtJQUUzQixJQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sZUFBYztRQUNoQyxVQUFVLFFBQVE7UUFDbEIsT0FBTztJQUNYO0lBRUEsTUFBTSxnQkFBZ0IsQ0FBQSxHQUFBLDZCQUFxQixFQUFFO0lBRzdDLElBQUcsZUFBYztRQUNiLE1BQU0sRUFBQyxRQUFRLFlBQVksRUFBRSxPQUFPLFdBQVcsRUFBQyxHQUFHLE9BQU87UUFDMUQsTUFBTSxhQUFhLGVBQWU7UUFFbEMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxPQUFPLGNBQWM7UUFDNUMsTUFBTSxXQUFXLFNBQVM7UUFFMUIsb0JBQW9CO1FBQ3BCLE1BQU0sY0FBYyxhQUFhLFdBQVc7UUFFNUMsd0JBQXdCLEdBQ3hCLElBQUcsYUFDQyxVQUFVLFFBQVE7YUFDaEI7WUFDRix5QkFBeUIsR0FDekIsTUFBTSxRQUFRLGlCQUFpQjtZQUMvQixJQUFHLE1BQU0sWUFBVSxVQUFVLE1BQU0sYUFBVyxXQUFXLE1BQU0sYUFBYSxZQUN4RSxVQUFVLFFBQVE7UUFFMUI7SUFDSjtJQUVBLFNBQVMsR0FDVCxVQUFVLFdBQVcsNEJBQTRCO0lBR2pELE9BQU87QUFDWDs7Ozs7QUNsRkEsNERBQWdCO0FBSGhCO0FBQ0E7QUFFTyxTQUFTLHVCQUF1QixPQUFvQjtJQUN2RCxNQUFNLGVBQWU7UUFBQztRQUFPO1FBQU87UUFBVTtRQUFNO1FBQVM7S0FBUTtJQUNyRSxNQUFNLE1BQU0sUUFBUSxRQUFRO0lBQzVCLElBQUcsYUFBYSxTQUFTLE1BQ3JCLE9BQU87SUFHWCxNQUFNLGdCQUFnQixRQUFRO0lBQzlCLGtDQUFrQyxHQUNsQyxJQUFHLGlCQUFpQixjQUFjLFlBQVksY0FBYyxTQUFTLFVBQVEsR0FDekUsT0FBTztJQUdYLHFDQUFxQyxHQUNyQyxNQUFNLGdCQUFnQixDQUFBLEdBQUEsMEJBQWMsRUFBRSxZQUFZLENBQUEsR0FBQSw2QkFBbUIsRUFBRTtJQUN2RSxJQUFHLENBQUMsZUFDQSxPQUFPO0lBRVgsT0FBTztBQUNYOzs7OztBQ3RCQSxzREFBZ0I7QUFBVCxTQUFTO0lBQ1osT0FBTztRQUNILFNBQVM7UUFDVCxpQkFBaUI7WUFDYixnQkFBZ0IsRUFBRTtZQUNsQixXQUFXO1FBQ2Y7SUFDSjtBQUNKIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS00ZmMwNmI4N2U2NDdkNDE4LmpzIiwicGFja2FnZXMvd2hhdHMtZXh0L2NvbnRlbnQudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy9pbmRleC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL1doYXRzRWxlbWVudC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL3RhcmdldC9pbmRleC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2NvbnN0L2luZGV4LnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy91bmlxdWVJZC9pbmRleC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL3VuaXF1ZUlkL2NvbXB1dGVJZC50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL3V0aWxzL2VsZW1lbnQudHMiLCJwYWNrYWdlcy93aGF0cy1lbGVtZW50L3NyYy9jb21wdXRlL2luZGV4LnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvdXRpbHMvaGVscGVyLnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvZG5hL2RuYS50cyIsInBhY2thZ2VzL3doYXRzLWVsZW1lbnQvc3JjL2ZyYWdtZW50L2NoZWNrLnRzIiwicGFja2FnZXMvd2hhdHMtZWxlbWVudC9zcmMvY29uc3QvZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcD10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciB5PSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEg9bmV3IFNldChwKSxfPWU9PkguaGFzKGUpLFg9cC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBHPV8oXCItLWRyeS1ydW5cIiksZD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixaPWQoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxEPTAsYz0oLi4uZSk9PmQoKSYmdShgXFx1ezFGN0UxfSAke0QrK31gLC4uLmUpO3ZhciBzPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL1VzZXJzL2tlcmVuL0Rlc2t0b3Avd2hhdHMtZWxlbWVudC9wYWNrYWdlcy93aGF0cy1leHQvY29udGVudC50c1wiLFwiYnVuZGxlSWRcIjpcIjgxZTgwMWZkOTU3M2E0ZTdcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo0OTk5NH07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPXMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpzLnZlcmJvc2V9fTt2YXIgUz1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe1MuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIXMuaG9zdHx8cy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpzLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBzLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke3Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgaSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWkuY29kZWZyYW1lfHxpLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIraS5tZXNzYWdlK2BcbmArdytgXG5cbmAraS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtzLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke3MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIG49XCJfX3BsYXNtby1sb2FkaW5nX19cIixUPXR5cGVvZiB0cnVzdGVkVHlwZXM8XCJ1XCI/dHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShgdHJ1c3RlZC1odG1sLSR7bn1gLHtjcmVhdGVIVE1MOmU9PmV9KTp2b2lkIDA7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiAkKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPW47bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7bn0ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7bn06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtufSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtufSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtufSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIEYoZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9JCgpO2U9Rih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgTj1gJHtFfSR7bW9kdWxlLmlkfV9fYCxhLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7YT8uZGlzY29ubmVjdCgpLGE9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOk59KSxhLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGEub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIFcoKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fVcoKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1zLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/YS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgV2hhdHNFbGVtZW50IGZyb20gXCIuLi93aGF0cy1lbGVtZW50L3NyYy9pbmRleFwiO1xuLy8gaW1wb3J0IHNrZWxldG9uRWxlbWVudCBmcm9tIFwifnBhY2thZ2VzL3NrZWxldG9uL3NrZWxldG9uXCI7XG5pbXBvcnQge2dldEZyYWdtZW50c0Zyb21MZWFmRWxlbWVudH0gZnJvbSBcIi4uL3doYXRzLWVsZW1lbnQvc3JjL2RuYS9kbmFcIjtcblxuZXhwb3J0IHt9XG5cbmNvbnNvbGUubG9nKFxuICAgIFwiWW91IG1heSBmaW5kIHRoYXQgaGF2aW5nIGlzIG5vdCBzbyBwbGVhc2luZyBhIHRoaW5nIGFzIHdhbnRpbmcuIFRoaXMgaXMgbm90IGxvZ2ljYWwsIGJ1dCBpdCBpcyBvZnRlbiB0cnVlLlwiXG4pXG5cblxuXG5jb25zdCB3aGF0cyA9IG5ldyBXaGF0c0VsZW1lbnQoe1xufSlcblxuXG4vLyBAdHMtaWdub3JlXG53aW5kb3cud2hhdHMgPSB3aGF0cztcblxuXG5sZXQgY250ID0gMDtcbmxldCBlcnJvciA9IGZhbHNlO1xuZnVuY3Rpb24gcnVuV2hhdHNFbGVtZW50KHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYoZXJyb3Ipe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHJvb3Qpe1xuICAgICAgY29uc3QgcmVzdWx0ID0gIHdoYXRzLmdldFVuaXF1ZUlkKHJvb3QpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC50eXBlLHJlc3VsdC53aWQsIHJvb3QpXG4gICAgICAgIGlmKCFyZXN1bHQud2lkKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aXoOazleWumuS9jScscm9vdClcbiAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNudCsrXG4gICAgICAgICAgICBpZihyb290LmNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8cm9vdC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFyZXN1bHQud2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcnVuV2hhdHNFbGVtZW50KHJvb3QuY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LndpZCA9PT0gJ2JvZHkgPiBkaXY6bnRoLW9mLXR5cGUoMTUpID4gZGl2Om50aC1vZi10eXBlKDEpID4gZGl2Om50aC1vZi10eXBlKDEpJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IGdldEZyYWdtZW50c0Zyb21MZWFmRWxlbWVudChyb290KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZXN1bHQud2lkLFtyb290XSwnbGVhZiBub2RlJyxmcmFnbWVudHMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmJvZHk7XG5cbnJ1bldoYXRzRWxlbWVudChyb290KTtcblxuY29uc3Qgbm9MaW1pdGVkTWF4ID0gOTk5OTk5OTk7XG5lbnVtIEJveFR5cGUge1xuICAgIHNpZGVCYXI9XCIxXCIsXG4gICAgbmF2QmFyPVwiMlwiLFxuICAgIG1haW5Db250YWluZXI9XCIzXCIsXG4gICAgbWFpbkJsb2NrPVwiNFwiLFxuICAgIG5vcm1hbFNpemU9XCI1XCJcbn1cbmNvbnN0IHNpemVzID0gW1xuICAgIHtcbiAgICAgICAgLy8g57q15ZCR5L6n6L655a+86Iiq5qCPXG4gICAgICAgIG1pbldpZHRoOiAzMCxcbiAgICAgICAgbWluSGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAsXG4gICAgICAgIG1heEhlaWdodDogbm9MaW1pdGVkTWF4LFxuICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICB0eXBlTmFtZTogQm94VHlwZS5zaWRlQmFyLFxuICAgIH0sXG4gICAge1xuICAgICAgICAvLyDmqKrlkJHlr7zoiKrmoI/lsLrlr7hcbiAgICAgICAgbWluV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gNDAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDMwLFxuICAgICAgICBtYXhIZWlnaHQ6IDEwMCxcbiAgICAgICAgbWF4V2lkdGg6IG5vTGltaXRlZE1heCxcbiAgICAgICAgdHlwZU5hbWU6IEJveFR5cGUubmF2QmFyLFxuICAgIH0sXG4gICAge1xuICAgICAgICAvLyDotoXlpKflrrnlmahcbiAgICAgICAgbWluV2lkdGg6IDYwMCxcbiAgICAgICAgbWluSGVpZ2h0OiA2MDAsXG4gICAgICAgIG1heEhlaWdodDogbm9MaW1pdGVkTWF4LFxuICAgICAgICBtYXhXaWR0aDogbm9MaW1pdGVkTWF4LFxuICAgICAgICB0eXBlTmFtZTogQm94VHlwZS5tYWluQ29udGFpbmVyLFxuICAgIH0sXG4gICAge1xuICAgICAgICAvLyDmqKrlkJHlpKflnZdcbiAgICAgICAgbWluV2lkdGg6IDYwMCxcbiAgICAgICAgbWluSGVpZ2h0OiAzMDAsXG4gICAgICAgIG1heEhlaWdodDogbm9MaW1pdGVkTWF4LFxuICAgICAgICBtYXhXaWR0aDogbm9MaW1pdGVkTWF4LFxuICAgICAgICB0eXBlTmFtZTogQm94VHlwZS5tYWluQmxvY2ssXG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIOWwj+aooeWdl+WfuuehgOWwuuWvuFxuICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDEwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIG1heFdpZHRoOiBub0xpbWl0ZWRNYXgsXG4gICAgICAgIHR5cGVOYW1lOiBCb3hUeXBlLm5vcm1hbFNpemUsXG4gICAgfVxuXVxuLy8gZnVuY3Rpb24gZ2VuZXJhdGVTa2VsZXRvbigpIHtcbi8vICAgICBjb25zdCByZXN1bHQgPSBza2VsZXRvbkVsZW1lbnQoZG9jdW1lbnQuYm9keSx7XG4vLyAgICAgICAgIHNpemVzOiBzaXplcyxcbi8vICAgICAgICAgLy8gbWluVGV4dDogMSxcbi8vICAgICAgICAgcG9zaXRpb246IG51bGwsXG4vLyAgICAgICAgIGlnbm9yZVNlbGVjdG9yOiBcIlwiXG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKCdza2VsZXRvbiDnu5PmnpzvvJonLHJlc3VsdClcbi8vIH1cblxuLy8gZ2VuZXJhdGVTa2VsZXRvbigpO1xuXG5cbiIsImltcG9ydCBXaGF0c0VsZW1lbnQgZnJvbSBcIi4vV2hhdHNFbGVtZW50XCI7XG5cblxuLy8gQHRzLWlnbm9yZVxud2luZG93LldoYXRzRWxlbWVudFYyID0gV2hhdHNFbGVtZW50XG5leHBvcnQgZGVmYXVsdCBXaGF0c0VsZW1lbnRcbiIsImltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIi4vdGFyZ2V0XCI7XG5pbXBvcnQge2dldFVuaXF1ZUlkfSBmcm9tIFwiLi91bmlxdWVJZFwiO1xuaW1wb3J0IHtjb21wdXRlfSBmcm9tIFwiLi9jb21wdXRlXCI7XG5pbXBvcnQge1F1ZXJ5VHlwZXMsIFNQTElUX01PREVfQ09ERX0gZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCB7Z2V0S2V5U3R5bGVzLCBtYWtlUmFuZ2VzRm9yRWxlbWVudH0gZnJvbSBcIi4vZG5hL2RuYVwiO1xuaW1wb3J0IHtnZXREZWZhdWx0T3B0aW9ufSBmcm9tIFwiLi9jb25zdC9kYXRhXCI7XG5pbXBvcnQgdHlwZSB7Q2xhc3NGaWx0ZXIsIFdoYXRzVW5pcXVlUmVzdWx0fSBmcm9tIFwiLi90eXBpbmdcIjtcblxuaW50ZXJmYWNlIE9wdGlvbiB7XG4gICAgaWdub3JlQ2xhc3NSdWxlPzogQ2xhc3NGaWx0ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hhdHNFbGVtZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbjogT3B0aW9uO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbjogT3B0aW9uID0gZ2V0RGVmYXVsdE9wdGlvbigpKSB7XG4gICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRhcmdldChxdWVyeVN0cmluZzogc3RyaW5nLCB0eXBlPzogUXVlcnlUeXBlcywgcm9vdD86IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQpe1xuICAgICAgICByZXR1cm4gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLHR5cGUscm9vdClcbiAgICB9XG5cbiAgICBnZXRUYXJnZXQocXVlcnlTdHJpbmc6IHN0cmluZywgdHlwZT86IFF1ZXJ5VHlwZXMsIHJvb3Q/OiBIVE1MRWxlbWVudCB8IERvY3VtZW50KXtcbiAgICAgICAgcmV0dXJuIGdldFRhcmdldChxdWVyeVN0cmluZyx0eXBlLHJvb3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oyH5a6a5LiA5Liq5YWD57Sg77yM6K6h566X5Ye65Y+v5Lul5a6a5L2N5Yiw6K+l5YWD57Sg55qE5ZSv5LiA54m55b6B5o+P6L+wXG4gICAgICogKi9cbiAgICBnZXRVbmlxdWVJZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFdoYXRzVW5pcXVlUmVzdWx0e1xuICAgICAgICBpZighZWxlbWVudCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDor6XlhYPntKDnmoTnibnlvoHmj4/ov7BcbiAgICAgICAgICogKi9cbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgcmV0dXJuIGdldFVuaXF1ZUlkKGVsZW1lbnQsdGhpcy5vcHRpb24uaWdub3JlQ2xhc3NSdWxlKTtcbiAgICAgICAgfWNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsJ+iuoeeul+WFg+e0oOS/oeaBr+W8guW4uCcsZWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VW5pcXVlSWQoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgICAgICByZXR1cm4gZ2V0VW5pcXVlSWQoZWxlbWVudClcbiAgICB9XG5cbiAgICBjb21wdXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICAgICAgaWYoIWVsZW1lbnQpe1xuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5pcXVlSWQgPSB0aGlzLmdldFVuaXF1ZUlkKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY29tcHV0ZShlbGVtZW50KSxcbiAgICAgICAgICAgIC4uLnVuaXF1ZUlkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2ud2lkLOafpeivokRPTemTvlxuICAgICAqIOi/lOWbnuWPr+i/vea6r+ebrueahOWFg+e0oCDov4fnqIvkuK3nmoQg5omA5pyJIERPTSDoioLngrnjgILmnIDlpKfnqIvluqbnmoTmib7liLAg55uu55qE5YWD57Sg55qE5pyA5bCP6IyD5Zu044CC57yp5bCP55uu5qCH6IyD5Zu044CCXG4gICAgICogKi9cbiAgICBnZXRFbGVtZW50c0xpbmVzKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtde1xuICAgICAgICBpZighcXVlcnlTdHJpbmcpe1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmdBcnJheSA9IHF1ZXJ5U3RyaW5nLnRyaW0oKS5zcGxpdChTUExJVF9NT0RFX0NPREUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cXVlcnlTdHJpbmdBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wUXVlcnkgPSAocXVlcnlTdHJpbmdBcnJheS5zbGljZSgwLGkrMSkuam9pbihTUExJVF9NT0RFX0NPREUpKS50cmltKCk7XG4gICAgICAgICAgICBpZighdGVtcFF1ZXJ5KXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGVtcFRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KHRlbXBRdWVyeSxpPT09MD8gdW5kZWZpbmVkIDogUXVlcnlUeXBlcy5ieVNwbGl0KVxuICAgICAgICAgICAgaWYodGVtcFRhcmdldCl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGVtcFRhcmdldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5LiA5Liq5Y+v5Lul5L2c5Li6IGVsZW1lbnQg5q+U5a+55Z+65Zug55qE5qCH6K+GXG4gICAgICog5YyF5ZCr6Ieq6Lqr6IqC54K555qE6YeH5qC377yadGV4dOWGheWuue+8jOagt+W8j+WuvemrmOW4g+WxgOOAgeS9jeS6juaVtOS4qmRvY3VtZW5055qE5biD5bGA5L2N572u44CCXG4gICAgICog6L+Z5Lqb5L+h5oGv5pyJ5Yip5LqO5LqM5qyh5q+U5a+577yM5b2TIHVuaXF1ZUlkIOWPmOWMluWQjueahOWFs+mUruS/oeaBr1xuICAgICAqICovXG4gICAgZ2V0RE5BKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJhbmdlczogbWFrZVJhbmdlc0ZvckVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgICAgICBzdHlsZXM6IGdldEtleVN0eWxlcyhlbGVtZW50KSxcbiAgICAgICAgICAgIGZyYWdtZW50czogW11cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtRdWVyeVR5cGVzLCBTUExJVF9NT0RFX0NPREV9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5cbi8qKlxuICog5Z+65LqOIHdpZCDmn6Xmib4gZG9tIOiKgueCuVxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRhcmdldChxdWVyeVN0cmluZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJycsIHR5cGU/OiBRdWVyeVR5cGVzLCByb290PzogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGx7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeVN0cmluZyA/IHF1ZXJ5U3RyaW5nLnRyaW0oKSA6ICcnO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBmaW5kUm9vdDogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCA9IHJvb3QgfHwgZG9jdW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYoIXF1ZXJ5KXtcbiAgICAgICAgY29uc29sZS5lcnJvcignd2lkIOS4jeWPr+S4uuepuicscXVlcnkpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZighZmluZFJvb3Qpe1xuICAgICAgICBjb25zb2xlLnRyYWNlKCfmoLnoioLngrnkuI3lj6/kuLrnqbonLGZpbmRSb290LCBxdWVyeVN0cmluZylcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAke1NQTElUX01PREVfQ09ERX1gKTtcbiAgICBjb25zdCB0YXJnZXRRdWVyeUFycmF5ID0gcXVlcnkuc3BsaXQoU1BMSVRfTU9ERV9DT0RFKTtcbiAgICBpZighdHlwZSl7XG4gICAgICAgIGlmKHRhcmdldFF1ZXJ5QXJyYXkubGVuZ3RoPjEpe1xuICAgICAgICAgICAgdHlwZSA9IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgc3dpdGNoICh0eXBlKXtcbiAgICAgICAgY2FzZSBRdWVyeVR5cGVzLmJ5SWQ6XG4gICAgICAgICAgICB0YXJnZXQgPSBcImdldEVsZW1lbnRCeUlkXCIgaW4gZmluZFJvb3QgPyB0YXJnZXQgPSBmaW5kUm9vdC5nZXRFbGVtZW50QnlJZChxdWVyeVN0cmluZykgOiBudWxsXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBRdWVyeVR5cGVzLmJ5TmFtZTpcbiAgICAgICAgICAgIHRhcmdldCA9IFwiZ2V0RWxlbWVudHNCeU5hbWVcIiBpbiBmaW5kUm9vdCA/IGZpbmRSb290LmdldEVsZW1lbnRzQnlOYW1lKHF1ZXJ5U3RyaW5nKVswXSA6IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBRdWVyeVR5cGVzLmJ5U2VsZWN0b3I6XG4gICAgICAgICAgICAvLyDov5nph4zlupTor6XnlKggcXVlcnlTZWxlY3RvckFsbCDmnaXliKTmlq3mmK/lkKblhbflpIfllK/kuIDmgKdcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYXRjaGVkTGlzdCA9IGZpbmRSb290LnF1ZXJ5U2VsZWN0b3JBbGwgPyBmaW5kUm9vdC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5U3RyaW5nKSA6IFtdO1xuICAgICAgICAgICAgICAgIC8vIGlmKG1hdGNoZWRMaXN0ICYmIG1hdGNoZWRMaXN0Lmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldCA9IG1hdGNoZWRMaXN0WzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBmaW5kUm9vdC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U3RyaW5nKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAvLyBpZihtYXRjaGVkTGlzdC5sZW5ndGg+MSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUud2Fybign5a2Y5Zyo5aSa5Liq5ruh6LazJywgbWF0Y2hlZExpc3QpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfWNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUscXVlcnlTdHJpbmcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqd2hhdHMtZWxlbWVudCDmianlsZXnmoTmn6Xmib7mlrnms5UqKi9cbiAgICAgICAgY2FzZSBRdWVyeVR5cGVzLmJ5U3BsaXQ6XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0YXJnZXRRdWVyeUFycmF5LmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA/ICEhaXRlbS50cmltKCkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgcm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCA9IGRvY3VtZW50O1xuICAgICAgICAgICAgLyoq6YCQ57qn5p+l5om+Ki9cbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8c2VsZWN0b3JzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTm9kZSA9IGdldFRhcmdldChzZWxlY3RvcnNbaV0sdW5kZWZpbmVkLHJvb3QpO1xuICAgICAgICAgICAgICAgIGlmKHRlbXBOb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGVtcE5vZGVcbiAgICAgICAgICAgICAgICAgICAgcm9vdCA9IHRlbXBOb2RlXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAxLiDlnKjmjIflrprmoLnoioLngrnnmoTmg4XlhrXkuIvvvIzku4Xmn6Xmib7nm7TmjqXlrZDoioLngrk7XG4gICAgICAgICAgICAgKiAyLiDmnKrmjIflrprmoLnoioLngrnnmoTmg4XlhrXkuIvvvIzlrZDjgIHlrZnoioLngrnnrKzkuIDkuKrljbPkuLrlr7nosaHjgIJcbiAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICAvLyBpZihyb290KXtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBtYXRjaGVkRWxlbWVudHMgPSBmaW5kRmlyc3RMZXZlbENoaWxkcmVuKGZpbmRSb290LGZpcnN0U2VsZWN0b3IpO1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldCA9IG1hdGNoZWRFbGVtZW50c1swXSB8fCBudWxsO1xuICAgICAgICAgICAgLy8gICAgIGlmKG1hdGNoZWRFbGVtZW50cy5sZW5ndGggIT09IDEpe1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyBUT0RPIO+8nyDnu5nkuIDlrprnmoTmj5DnpLpcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS53YXJuKGZpcnN0U2VsZWN0b3IsJ+mdnuWUr+S4gOWtkOiKgueCue+8jOWPluesrDDkuKrvvIzlj6/og73lvILluLgnLG1hdGNoZWRFbGVtZW50cylcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQgPSBnZXRUYXJnZXQoZmlyc3RTZWxlY3RvcixRdWVyeVR5cGVzLmJ5U2VsZWN0b3IsZmluZFJvb3QpLnRhcmdldFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLy8g57un57ut5p+l5om+5LiL5LiA5bGC57qn6IqC54K5XG4gICAgICAgICAgICAvLyBpZih0YXJnZXQgJiYgc2VsZWN0b3JzLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgLy8gICAgIHNlbGVjdG9ycy5zcGxpY2UoMCwxKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXh0U3RyaW5nID0gKHNlbGVjdG9ycy5qb2luKFNQTElUX01PREVfQ09ERSkpLnRyaW0oKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXh0UmVzdWx0ID0gZ2V0VGFyZ2V0KG5leHRTdHJpbmcsUXVlcnlUeXBlcy5ieVNwbGl0LHRhcmdldCk7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0ID0gbmV4dFJlc3VsdC50YXJnZXQ7XG4gICAgICAgICAgICAvLyAgICAgbmVhcmVzdCA9IG5leHRSZXN1bHQubmVhcmVzdDtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLyoq5pyq5oyH5a6adHlwZeeahOaDheWGteS4i++8jOaMieS8mOWFiOe6p+afpeaJviovXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBnZXRUYXJnZXQocXVlcnlTdHJpbmcsIFF1ZXJ5VHlwZXMuYnlJZCxmaW5kUm9vdClcbiAgICAgICAgICAgICAgICB8fCBnZXRUYXJnZXQocXVlcnlTdHJpbmcsIFF1ZXJ5VHlwZXMuYnlOYW1lLGZpbmRSb290KVxuICAgICAgICAgICAgICAgIHx8IGdldFRhcmdldChxdWVyeVN0cmluZyxRdWVyeVR5cGVzLmJ5U2VsZWN0b3IsZmluZFJvb3QpO1xuXG4gICAgICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRUYXJnZXQocXVlcnlTdHJpbmcsIFF1ZXJ5VHlwZXMuYnlJZCwgZmluZFJvb3QpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETyDmraPlkJHmn6Xmib7kuI3liLDnmoTmg4XlhrXkuIvvvIzov5vooYzlj43lkJHmn6Xmib7vvIzpgb/lhY3lm6DkuLrniLboioLngrnnmoRET00g5Y+Y5Yqo5a+86Ie05a2Q6IqC54K55peg5rOV6KKr5a6a5L2N77yM5a2Y5Zyo5aSa5Liq6IqC54K555qE5pe25YCZ77yM5oyJ54Wn5rex5bqm5LyY5YWI6L+U5Zue5pyA57uI57uT5p6c44CCXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGNvbnN0IFNQTElUX01PREVfQ09ERSA9ICcgICdcblxuLyoq55u057O754i26IqC54K56YCJ5oup5ZmoKi9cbmV4cG9ydCBjb25zdCBQQVJFTlRfU1BMSVRfQ09ERSA9ICcgPiAnXG5cbmV4cG9ydCBlbnVtIFF1ZXJ5VHlwZXMge1xuICAgIC8vIOmAmui/h0lE5p+l5om+XG4gICAgYnlJZCA9ICdpZCcsXG4gICAgLy8g6YCa6L+HY3NzIHNlbGVjdG9yIOafpeaJvlxuICAgIGJ5U2VsZWN0b3IgPSAnY3NzX3NlbGVjdG9yJyxcbiAgICAvLyDpgJrov4cgbmFtZSDmn6Xmib7vvIzkuIDoiKznlKjkuo4gaW5wdXRcbiAgICBieU5hbWUgPSAnbmFtZScsXG4gICAgYnlUYWdOYW1lID0gJ3RhZ05hbWUnLFxuICAgIC8vIOWIhuauteafpeaJvu+8jOaMieWxgue6p+mAkOWxgumAkui/m+afpeaJvu+8jOacgOaZrumBjeeahOW9ouW8j1xuICAgIGJ5U3BsaXQgPSAnc3RlcHMnLFxuICAgIGJ5UGFyZW50ID0gJ3BhcmVudCcsXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUV4dHJhIHtcbiAgICB0ZXh0Pzogc3RyaW5nXG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQge2dldEJ5QXR0ciwgZ2V0QnlDbGFzcywgZ2V0QnlJZCwgZ2V0QnlJbmRleCwgZ2V0QnlOYW1lLCBnZXRCeVJvb3QsIGdldEJ5VGFnTmFtZSwgZ2V0QnlUeXBlfSBmcm9tIFwiLi9jb21wdXRlSWRcIjtcbmltcG9ydCB0eXBlIHtDbGFzc0ZpbHRlciwgV2hhdHNVbmlxdWVSZXN1bHR9IGZyb20gXCIuLi90eXBpbmdcIjtcbmltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIi4uL3RhcmdldFwiO1xuaW1wb3J0IHtRdWVyeVR5cGVzLCBTUExJVF9NT0RFX0NPREV9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5cbmZ1bmN0aW9uIGdldFVuaXF1ZUlkSW5TY29wZShlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQsIGNsYXNzRmlsdGVyOiBDbGFzc0ZpbHRlciA9IHtibG9ja0NsYXNzTGlzdDpbXSxtYXhMZW5ndGg6IDEwfSwgcm9vdEVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBnZXRCeVJvb3QoZWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlJZChlbGVtZW50LHJvb3RFbGVtZW50KVxuICAgICAgICB8fCBnZXRCeU5hbWUoZWxlbWVudCxyb290RWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlDbGFzcyhlbGVtZW50LCBjbGFzc0ZpbHRlcixyb290RWxlbWVudClcbiAgICAgICAgfHwgZ2V0QnlUeXBlKGVsZW1lbnQscm9vdEVsZW1lbnQpXG4gICAgICAgIHx8IGdldEJ5QXR0cihlbGVtZW50LHJvb3RFbGVtZW50KVxufVxuXG4vKipcbiAqIOWfuuS6juW9k+WJjeiKgueCueaJvuWIsOS4gOS4quWPr+S7peiiq+WFqOWxgOWUr+S4gOWumuS9jeeahOWFg+e0oFxuICogKi9cbmZ1bmN0aW9uIGdldFVuaXF1ZUlkRm9yUHJlKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgY2xhc3NGaWx0ZXI6IENsYXNzRmlsdGVyID0ge2Jsb2NrQ2xhc3NMaXN0OltdLG1heExlbmd0aDogMTB9LCk6IHtcbiAgICB3aWQ6IHN0cmluZyxcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudFxufSB8IG51bGwge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYocGFyZW50Tm9kZSl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdldFVuaXF1ZUlkSW5TY29wZShwYXJlbnROb2RlLGNsYXNzRmlsdGVyKTtcbiAgICAgICAgaWYocmVzdWx0ICYmIHJlc3VsdC53aWQpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHdpZDogcmVzdWx0LndpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlxdWVJZEZvclByZShwYXJlbnROb2RlLGNsYXNzRmlsdGVyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiDorqHnrpcgSFRNTEVsZW1lbnQg55qE5ZSv5LiA5a6a5L2NIHdpZCDlrZfnrKbkuLJcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlSWQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCBjbGFzc0ZpbHRlcjogQ2xhc3NGaWx0ZXIgPSB7YmxvY2tDbGFzc0xpc3Q6W10sbWF4TGVuZ3RoOiAxMH0sIHJvb3RFbGVtZW50PzogSFRNTEVsZW1lbnQgKTogV2hhdHNVbmlxdWVSZXN1bHQge1xuICAgIC8qKuWFpeWPguexu+Wei+WuiOaKpCovXG4gICAgaWYoIWVsZW1lbnQudGFnTmFtZSl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnB1dCBpcyBub3QgYSBIVE1MIGVsZW1lbnRcIixlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC56IqC54K5ID4gbG9jYXRlIGJ5IGlkID4gYnkgbmFtZSA+IGJ5IGNsYXNzID4gdHlwZSA+IGxpbmsgPiBpbmRleCA+IHBhcmVudFxuICAgICAqIFRPRE8g6K+G5Yir5Yqo5oCB55Sf5oiQ55qESUTvvIzop4TliJkg6ZW/5bqm6L+H6ZW/77yfIOWQq+acieaVsOWtl+OAgeeJueauiuWtl+espuetiVxuICAgICAqIFRPRE8g5aKe5Yqg5LiA56eN5a6a5L2N5pa55byP77yM5oyJaW5uZXLmlofmnKzlhoXlrrkgbWQ1IOWkhOeQhuWQjueUn+aIkElEXG4gICAgICogKiovXG4gICAgbGV0IHJlc3VsdCA9IGdldFVuaXF1ZUlkSW5TY29wZShlbGVtZW50LGNsYXNzRmlsdGVyLHJvb3RFbGVtZW50KVxuXG4gICAgLyoqXG4gICAgICog5peg5rOV5Zyo5YWo5bGA6IyD5Zu05YaF5b6X5Yiw5ZSv5LiASUTvvIxcbiAgICAgKiDpnIDopoHov5vkuIDmraXpgJrov4fnpZYv54i26IqC54K55a6a5L2N44CC5Zyo56WWL+eItuiKgueCueeahOiMg+WbtOWGheW+l+WIsOWUr+S4gElE44CCXG4gICAgICogKi9cbiAgICBpZighcmVzdWx0KXtcbiAgICAgICAgY29uc3QgcGFyZW50VW5pcXVlID0gZ2V0VW5pcXVlSWRGb3JQcmUoZWxlbWVudCxjbGFzc0ZpbHRlcik7XG4gICAgICAgIC8vIHRvZG8g6YCJ5oup5Y+v5Lul5L2c5Li6IGZyYWdtZW50IOeahOWumuS9jeS9nOS4uuelluWFiOiKgueCuVxuICAgICAgICBpZihwYXJlbnRVbmlxdWUpe1xuICAgICAgICAgICAgLyoq6YCS5b2S5a6a5L2N5LiK5LiA57qn6IqC54K555qESUQqL1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVSZXN1bHQgPSBnZXRVbmlxdWVJZEluU2NvcGUoZWxlbWVudCxjbGFzc0ZpbHRlcixwYXJlbnRVbmlxdWUuZWxlbWVudClcbiAgICAgICAgICAgICAgICB8fCBnZXRCeVRhZ05hbWUoZWxlbWVudCxwYXJlbnRVbmlxdWUuZWxlbWVudClcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlV2lkID0gcmVsYXRpdmVSZXN1bHQgPyByZWxhdGl2ZVJlc3VsdC53aWQgOiAnJztcbiAgICAgICAgICAgIC8qKueItuWFg+e0oOiDveWkn+WcqOWFqOWxgOW+l+WIsOWUr+S4gElE5pe2Ki9cbiAgICAgICAgICAgIGlmKHJlbGF0aXZlV2lkKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTcGxpdCxcbiAgICAgICAgICAgICAgICAgICAgd2lkOiBwYXJlbnRVbmlxdWUud2lkICsgIFNQTElUX01PREVfQ09ERSArIHJlbGF0aXZlV2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5peg5rOV6YCa6L+H56WW54i26IqC54K557yp5bCP6IyD5Zu05ZCO77yM5b6X5Yiw5ZSv5LiASUTvvIzliJnlv4Xpobvkvp3pnaDnm7Tns7vniLbkurLoioLngrnpgJrov4fntKLlvJXlvpfliLAqL1xuICAgIGlmKCFyZXN1bHQpe1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IHBhcmVudFVuaXF1ZUlkID0gcGFyZW50Tm9kZSA/IGdldFVuaXF1ZUlkKHBhcmVudE5vZGUsY2xhc3NGaWx0ZXIpIDogJyc7XG5cbiAgICAgICAgaWYocGFyZW50VW5pcXVlSWQgJiYgcGFyZW50VW5pcXVlSWQud2lkKXtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlbGF0ZWRRdWVyeSA9IGdldEJ5SW5kZXgoZWxlbWVudCxjbGFzc0ZpbHRlcixwYXJlbnRVbmlxdWVJZC53aWQpXG4gICAgICAgICAgICBpZihwYXJlbnRSZWxhdGVkUXVlcnkgJiYgcGFyZW50UmVsYXRlZFF1ZXJ5LndpZCl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWQ6IHBhcmVudFJlbGF0ZWRRdWVyeS53aWQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlQYXJlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighcmVzdWx0KXtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FudCB1bmlxdWUgaWQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gcmVzdWx0LndpZCA/IGdldFRhcmdldChyZXN1bHQud2lkKSA6IHt0YXJnZXQ6IG51bGwsdHlwZTogbnVsbH07XG5cbiAgICBpZihjaGVja1Jlc3VsdCA9PT0gZWxlbWVudCl7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS53YXJuKCfmo4DmtYvkuI3pgJrov4cnLCBlbGVtZW50LGNoZWNrUmVzdWx0LHJlc3VsdC53aWQpXG4gICAgfVxuXG5cbiAgICAvLyDml6Dms5XlrprkvY3nmoTmg4XlhrXvvIzlop7liqBcbiAgICBjb25zb2xlLmVycm9yKGVsZW1lbnQsJ+aXoOazleiiq+WUr+S4gOWumuS9jScpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkOiBudWxsLFxuICAgICAgICB0eXBlOiBudWxsLFxuICAgIH1cbn1cbiIsImltcG9ydCB7UEFSRU5UX1NQTElUX0NPREUsIFF1ZXJ5VHlwZXN9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiLi4vdGFyZ2V0XCI7XG4vLyBpbXBvcnQge2ZpbmRGaXJzdExldmVsQ2hpbGRyZW59IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB0eXBlIHtDbGFzc0ZpbHRlciwgV2hhdHNVbmlxdWVSZXN1bHR9IGZyb20gXCIuLi90eXBpbmdcIjtcbmltcG9ydCB7Z2V0VmFsaWRJZEZvckVsZW1lbnR9IGZyb20gXCIuLi91dGlscy9lbGVtZW50XCI7XG5cbi8vIOS4gOS6m+mdnuazleeahGNsYXNz5ZCN77yM5LiN5Y+v5L2c5Li65a6a5L2N56ymXG5jb25zdCBCQVNJQ19CTE9DS19DTEFTU19SVUxFUyA9IFtcbiAgICAvWzpcXFtcXF1cXC5dLyxcbiAgICAvXFwvLyxcbiAgICAvXlxcZCsvLFxuICAgIC8tcHgvLFxuICAgIC9cXGQrcmVtLyxcbiAgICAvKip0YWlsd2luZCDor63ms5XvvIzovrnnlYwqL1xuICAgIC9tW3RscmJ4eV0tXFxkKy8sXG4gICAgL3BbbHRicnh5XS1cXGQrLyxcbiAgICAvKip0YWlsd2luZCDor63ms5XvvIzkvY3nva7kv6Hmga8qL1xuICAgIC90b3AtXFxkKyQvLFxuICAgIC9sZWZ0LVxcZCskLyxcbiAgICAvcmlnaHQtXFxkKyQvLFxuICAgIC9ib3R0b20tXFxkKyQvLFxuXG4gICAgL15baHddLVxcZCskLyxcblxuXG4gICAgLyoqdGFpbHdpbmQg6K+t5rOV77yMemluZGV4Ki9cbiAgICAvei1cXGQrJC8sXG4gICAgL2luc2V0LVxcZCskLyxcbiAgICAnYWN0aXZlJyxcbl1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50Q2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzRmlsdGVyOkNsYXNzRmlsdGVyID0ge2Jsb2NrQ2xhc3NMaXN0OltdLG1heExlbmd0aDoxMH0pIHtcbiAgICBjb25zdCBibG9ja0xpc3QgPSBbLi4uQkFTSUNfQkxPQ0tfQ0xBU1NfUlVMRVMsLi4uKGNsYXNzRmlsdGVyPy5ibG9ja0NsYXNzTGlzdHx8W10pXVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZighL15bYS16QS1aXS8udGVzdChpdGVtKSl7IC8vIOi/h+a7pOmdnuazlSBjbGFzcyDlkI3np7BcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoq5qOA5rWLY2xhc3PlkIjms5XmgKcqL1xuICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBmb3IobGV0IGo9MDsgajxibG9ja0xpc3QubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTmFtZU9yUnVsZSA9IGJsb2NrTGlzdFtqXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ZW1wTmFtZU9yUnVsZSA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgICAgIGlmKHRlbXBOYW1lT3JSdWxlID09PSBpdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHRlbXBOYW1lT3JSdWxlLnRlc3QoaXRlbSkpe1xuICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJsb2NrZWQpe1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMubGVuZ3RoID8gJy4nK2NsYXNzTmFtZXMuc2xpY2UoMCxjbGFzc0ZpbHRlci5tYXhMZW5ndGggfHwgOTkpLmpvaW4oJy4nKSA6ICcnXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRUYWcoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGFnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlSb290KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZih0YWc9PT1cImJvZHlcIiB8fCB0YWc9PT0gXCJodG1sXCIpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNlbGVjdG9yLFxuICAgICAgICAgICAgd2lkOiB0YWdcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5SWQoZWxlbWVudDogSFRNTEVsZW1lbnQscm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcblxuICAgIGNvbnN0IGlkID0gZ2V0VmFsaWRJZEZvckVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYoIWlkKXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB3aWQgPSB0YWcrXCIjXCIraWQ7XG5cblxuICAgIC8qKuS6jOasoeagoemqjCovXG4gICAgaWYoZ2V0VGFyZ2V0KHdpZCxRdWVyeVR5cGVzLmJ5U2VsZWN0b3Iscm9vdCkgPT09IGVsZW1lbnQpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkOiB3aWQsXG4gICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3JcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiDlr7nkuo7kuIDkupsgZm9ybSDlhYPntKDvvIxuYW1lIOWxnuaAp+acieWUr+S4gOaAp1xuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeU5hbWUoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCByb290PzogSFRNTEVsZW1lbnQpOldoYXRzVW5pcXVlUmVzdWx0fG51bGwge1xuICAgIGNvbnN0IHRhZyA9IGdldEVsZW1lbnRUYWcoZWxlbWVudClcbiAgICBjb25zdCBuYW1lID0gXCJuYW1lXCIgaW4gZWxlbWVudCA/IGVsZW1lbnQubmFtZSA6ICcnO1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmFtZSA/IGAke3RhZ31bbmFtZT1cIiR7bmFtZX1cIl1gIDogJydcbiAgICBpZihxdWVyeSAmJiBnZXRUYXJnZXQocXVlcnksUXVlcnlUeXBlcy5ieU5hbWUsIHJvb3QpID09PSBlbGVtZW50KXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgd2lkOiBxdWVyeSxcbiAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlOYW1lXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbn1cblxuXG4vKipcbiAqIOWvueS6juS4gOS6m+avlOi+g+e9leingeeahCB0YWcg5Y+v5Lul5L2c5Li65qCH6K+G56ym5p2l5L2/55SoXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5VGFnTmFtZShlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQsIHJvb3Q/OiBIVE1MRWxlbWVudCk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgY29uc3QgdGFnID0gZ2V0RWxlbWVudFRhZyhlbGVtZW50KSB8fCAnJ1xuICAgIGNvbnN0IGFsbG93QnlUYWdOYW1lID0gWydzdmcnLCdwYXRoJywnaWZyYW1lJywndmlkZW8nLCdpbWcnLCdiJywnc3Ryb25nJ10uaW5jbHVkZXModGFnLnRvTG93ZXJDYXNlKCkpXG4gICAgY29uc3QgaXNDdXN0b21UYWcgPSB0YWcuaW5kZXhPZignLScpID4gLTE7XG4gICAgaWYoYWxsb3dCeVRhZ05hbWUgfHwgaXNDdXN0b21UYWcpe1xuICAgICAgICBjb25zdCBxdWVyeSA9IHRhZyA/IGAke3RhZ31gIDogJydcbiAgICAgICAgaWYocXVlcnkgJiYgZ2V0VGFyZ2V0KHF1ZXJ5LFF1ZXJ5VHlwZXMuYnlUYWdOYW1lLCByb290KSA9PT0gZWxlbWVudCl7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgd2lkOiBxdWVyeSxcbiAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiDln7rkuo4gdGFnK2NsYXNzIOWumuS9jVxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc0ZpbHRlcjogQ2xhc3NGaWx0ZXIsIHJvb3Q/OiBIVE1MRWxlbWVudCk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQsY2xhc3NGaWx0ZXIpXG4gICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgd2lkID0gdGFnK2NsYXNzTmFtZVxuICAgIGlmKGNsYXNzTmFtZSAmJiBnZXRUYXJnZXQod2lkLFF1ZXJ5VHlwZXMuYnlTZWxlY3Rvciwgcm9vdCk9PT1lbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZDogd2lkLFxuICAgICAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5ieVNlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeVR5cGUoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCByb290PzogSFRNTEVsZW1lbnQpOldoYXRzVW5pcXVlUmVzdWx0fG51bGwge1xuICAgIGNvbnN0IHR5cGUgPSBcInR5cGVcIiBpbiBlbGVtZW50ID8gKGVsZW1lbnQudHlwZSB8fCAnJyk/LnRvU3RyaW5nKCk/LnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xuICAgIGlmKHR5cGUgPT09IFwicmFkaW9cIil7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gJ3ZhbHVlJyBpbiBlbGVtZW50ID8gZWxlbWVudC52YWx1ZSA6ICcnO1xuICAgICAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IFwibmFtZVwiIGluIGVsZW1lbnQgPyBlbGVtZW50Lm5hbWUgOiAnJztcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gdGFnK1wiW3ZhbHVlPSdcIit2YWx1ZStcIiddXCJcbiAgICAgICAgaWYobmFtZSl7XG4gICAgICAgICAgICBxdWVyeVN0cmluZyArPSBcIltuYW1lPSdcIituYW1lK1wiJ11cIlxuICAgICAgICB9XG4gICAgICAgIGlmKGdldFRhcmdldChxdWVyeVN0cmluZyxRdWVyeVR5cGVzLmJ5U2VsZWN0b3Iscm9vdCk9PT1lbGVtZW50KXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkOiBxdWVyeVN0cmluZyxcbiAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5QXR0cihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQscm9vdD86IEhUTUxFbGVtZW50KTpXaGF0c1VuaXF1ZVJlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBpZih0YWcgPT09ICdhJyl7XG4gICAgLy8gICAgIGNvbnN0IGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIC8vICAgICBpZihocmVmKXtcbiAgICAvLyAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gXCJhW2hyZWY9J1wiK2hyZWYrXCInXVwiO1xuICAgIC8vICAgICAgICAgaWYoZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTZWxlY3Rvcixyb290KS50YXJnZXQ9PT1lbGVtZW50KXtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgICAgICAgICB3aWQ6IHF1ZXJ5U3RyaW5nLFxuICAgIC8vICAgICAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U2VsZWN0b3IsXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdHlwZXMgPSBbJ2hyZWYnLCdzcmMnLCd0YWJJbmRleCcsJ3JvbGUnXVxuICAgIGZvciAobGV0IGkgPSAwIDsgaTx0eXBlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHR5cGVzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHt0YWd9WyR7YXR0cmlidXRlfT1cIiR7dmFsdWV9XCJdYDtcbiAgICAgICAgICAgIGlmKGdldFRhcmdldChxdWVyeVN0cmluZyxRdWVyeVR5cGVzLmJ5U2VsZWN0b3Iscm9vdCkgPT09IGVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZDogcXVlcnlTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKuWPquiDveeUqOS6jueItuiKgueCueeahOWcuuaZr++8jOS4jeaUr+aMgei3qOe6p+WIq+eahOafpeivou+8iGNzcyBudGgtb2YtdHlwZSBzZWxlY3RvciDnmoTpmZDliLYg77yJXG4gKiDln7rkuo7niLboioLngrnvvIznmoTntKLlvJXluo/lj7flrprkvY1cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlJbmRleChlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NGaWx0ZXI6IENsYXNzRmlsdGVyLCBwYXJlbnRXaWQ6IHN0cmluZyk6V2hhdHNVbmlxdWVSZXN1bHR8bnVsbCB7XG4gICAgLy8gVE9ETyDov5nph4zlr7kgdGFnTmFtZSDlgZrov4fmu6TvvIzkuIDoiKzmgKfnmoTmoIfnrb7lpoIgZGl2XFxzcGFuIOS4jeW6lOivpeS9nOS4uuagh+ivhuespu+8jOS4jeWFt+Wkh+agh+ivhuiDveWKm++8jOWOn+e9keermeW+iOWPr+iDveWvueWFtuS7u+aEj+iwg+aVtFxuICAgIC8vIFRPRE8g6Z2e5bGC57qn5qih5byP5LiL55qEIOmAmui/hyBpbmRleCDojrflj5bvvIzkuI3lpJ/nqLPlgaXjgILpgb/lhY3lh7rnjrDljZXlsYLnuqfnmoTln7rkuo5pbmRleOeahOWumuS9je+8jOWmgiBwOm50aC1vZi10eXBlKDIpIO+8jOW6lOWwveWPr+iDveeahOS/neivgei2s+Wkn+WkmueahOS4iuWxgue6p++8jOWmgiAjdXNlcm5hbWUgIHA6bnRoLW9mLXR5cGUoMik7IOe9kemhteWPmOWKqOeahOaDheWGteS4iyDvvIwg5o+Q5Y2H5a6a5L2N55qE56iz5a6a5oCnXG4gICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0RWxlbWVudENsYXNzKGVsZW1lbnQsY2xhc3NGaWx0ZXIpO1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAvLyBxdWVyeVN0cmluZyA9IGNsYXNzTmFtZSA/IHF1ZXJ5U3RyaW5nICsgY2xhc3NOYW1lOiBxdWVyeVN0cmluZ1xuICAgIC8vIFRPRE8g5o6S5p+l6L+Z6YeM5pivIGRvY3VtZW50IOi/mOaYryBlbGVtZW50IHBhcmVudCDkvZzkuLrlj4LmlbDkvKDlhaUg6L+Z6YeM55qE6Ieq5YWD57Sg5ouJ5Y+W6YC76L6RXG4gICAgLy8gY29uc3QgZWxlbWVudHMgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeVN0cmluZylcbiAgICBjb25zdCBlbGVtZW50cyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2hpbGRyZW47XG4gICAgaWYoZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoPjApe1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyDlj6rmr5Tlr7nkuIDnuqfoh6roioLngrlcbiAgICAgICAgICAgIGlmKGVsZW1lbnRzW2ldLnBhcmVudEVsZW1lbnQgIT09IGVsZW1lbnQucGFyZW50RWxlbWVudCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50c1tpXS50YWdOYW1lPT09ZWxlbWVudC50YWdOYW1lKXtcbiAgICAgICAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50PT09ZWxlbWVudHNbaV0pe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4KXtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nV2l0aEluZGV4ID0gcGFyZW50V2lkICsgUEFSRU5UX1NQTElUX0NPREUgKyBxdWVyeVN0cmluZyArIFwiOm50aC1vZi10eXBlKFwiK2luZGV4K1wiKVwiXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3Nfc2VsZWN0b3JzLnBocFxuICAgICAgICAgICAgLy8g6YeN54K577yM5Z+65LqO54i26IqC54K55L2c5Li66IyD5Zu0SUTvvIzmiYDku6Xmn6Xmib7ml7bvvIzpnIDopoHmj5DljYfoh7PnpZbniLboioLngrlcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nV2l0aEluZGV4LFF1ZXJ5VHlwZXMuYnlTZWxlY3RvcixlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgaWYoY2hlY2tSZXN1bHQgPT09IGVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZDogcXVlcnlTdHJpbmdXaXRoSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTZWxlY3RvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWVyeVN0cmluZycscXVlcnlTdHJpbmdXaXRoSW5kZXgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrUmVzdWx0JyxjaGVja1Jlc3VsdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LCfmoKHpqozlpLHotKUnLGNoZWNrUmVzdWx0LGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTdHJpbmdXaXRoSW5kZXgpKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRzLCdlbGVtZW50cycpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5wYXJlbnRFbGVtZW50LCdyb290JylcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBmaW5kID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnlTdHJpbmcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbmQsJ3Jlc3VsdCcsZmluZC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8ZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrSW5kZXhFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTdHJpbmcrICc6bnRoLW9mLXR5cGUoJytqKycpJyk7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJyxqKVxuICAgICAgICAgICAgICAgICAgIGlmKGNoZWNrSW5kZXhFbGVtZW50PT09ZWxlbWVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgaW5kZXggc2hvdWxkIGJlJywgailcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjaGVja1RhcmdldCA9IGdldFRhcmdldChxdWVyeVN0cmluZyxRdWVyeVR5cGVzLmJ5U2VsZWN0b3IpLnRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2RpZCBub3QgZm91bmQgaW5kZXgnKVxuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdjaGlsZHJlbiBpcyBlbXB0eScsZWxlbWVudClcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuXG4vKipcbiAqIOWcqOeItuiKgueCueeahOWfuuehgOS4i++8jOiuoeeul+WHuuWug+eahOWUr+S4gOagh+ivhu+8m1xuICog57y654K577ya5aaC5p6c54i26IqC54K55Lii5aSx77yM5YiZ5Lmf5peg5rOV5a+75om+5YiwXG4gKiB0b2RvIGRlbGV0ZVxuICogKi9cbi8vIGZ1bmN0aW9uIGdldEJ5UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwYXJlbnRRdWVyeVN0cmluZz86IFN0cmluZyB8IG51bGwsIGNsYXNzRmlsdGVyPzogQ2xhc3NGaWx0ZXIpOldoYXRzVW5pcXVlUmVzdWx0fG51bGwgIHtcbi8vICAgICBjb25zdCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuLy8gICAgIGlmKCFwYXJlbnROb2RlIHx8ICFwYXJlbnRRdWVyeVN0cmluZyl7XG4vLyAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICB3aWQ6IG51bGwsXG4vLyAgICAgICAgICAgICB0eXBlOiBudWxsLFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC8vIOWfuuS6juS4iuS4gOe6p+iKgueCueeahOS9jee9rklE77yM6YCa6L+HIG5hbWUuY2xhc3Mg5p2h5Lu2IOadpeWvu+aJvuWtkOiKgueCuVxuLy8gICAgIGNvbnN0IHRhcmdldFF1ZXJ5ID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyBnZXRFbGVtZW50Q2xhc3MoZWxlbWVudCxjbGFzc0ZpbHRlcik7XG4vLyAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSAocGFyZW50UXVlcnlTdHJpbmcrU1BMSVRfTU9ERV9DT0RFK3RhcmdldFF1ZXJ5KS50cmltKCk7XG4vLyAgICAgLy8g6YCa6L+H5aKe5Yqg5p2h5Lu25ZCO77yM5aaC5p6c6IO955u05o6l5o+S5Yiw77yM5YiZ55u05o6l6L+U5ZueXG4vLyAgICAgaWYoZ2V0VGFyZ2V0KHF1ZXJ5U3RyaW5nLFF1ZXJ5VHlwZXMuYnlTcGxpdCkudGFyZ2V0ID09PSBlbGVtZW50KXtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHdpZDogcXVlcnlTdHJpbmcsXG4vLyAgICAgICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U3BsaXQsXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIC8vIOaXoOazlemAmui/h+WinuWKoCBuYW1lLmNsYXNzIOWumuS9je+8jOWImemAmui/hyArIG50aDpjaGlsZCDmnaXmjInpobrluo/mn6Xmib47IOi/memHjOWPquafpeaJvuS4gOe6p+WtkOiKgueCue+8jOS5i+WQjuWPr+S7peaUvuW8gFxuLy8gICAgIGNvbnN0IG1hdGNoZWRGaXJzdENoaWxkTm9kZXMgPSBmaW5kRmlyc3RMZXZlbENoaWxkcmVuKHBhcmVudE5vZGUscXVlcnlTdHJpbmcpO1xuLy8gICAgIC8qKuWmguaenOS4gOe6p+WtkOiKgueCueaJvuS4jeWIsO+8jOWImeaXoOazleWumuS9jSovXG4vLyAgICAgaWYoIW1hdGNoZWRGaXJzdENoaWxkTm9kZXMubGVuZ3RoKXtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHdpZDogbnVsbCxcbi8vICAgICAgICAgICAgIHR5cGU6IG51bGxcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgLyoq56Gu5a6a5Y+v5Lul6YCa6L+HIHF1ZXJ5U2VsZWN0b3Ig5om+5Yiw5a2Q6IqC54K555qE5YmN5o+Q5LiL77yM6K6h566X5L2c5Li66IqC54K555qEIOW6j+WIl+WPtyovXG4vLyAgICAgbGV0IGluZGV4ID0gLTE7XG4vLyAgICAgLy8g6L+Z6YeM55qEIGNoaWxkcmVuIOWMheWQq+aJgOacieWtkOOAgeWtmeiKgueCueOAguiOt+WPluWIsOe0ouW8leWAvFxuLy8gICAgIGZvcihsZXQgaj0wOyBqPHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspe1xuLy8gICAgICAgICAvLyDlj6rmr5TovoPkuIDnuqflrZDoioLngrlcbi8vICAgICAgICAgaWYocGFyZW50Tm9kZS5jaGlsZHJlbltqXT09PWVsZW1lbnQpe1xuLy8gICAgICAgICAgICAgaW5kZXggPSBqKzE7XG4vLyAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgLyoq5p6E6YCg5bqP5YiX5Y+355qE6YCJ5oup5ZmoKi9cbi8vICAgICBjb25zdCBxdWVyeUJ5SW5kZXggPSBxdWVyeVN0cmluZyArICBcIjpudGgtY2hpbGQoXCIraW5kZXgrXCIpXCI7XG4vLyAgICAgaWYoZ2V0VGFyZ2V0KHF1ZXJ5QnlJbmRleCxRdWVyeVR5cGVzLmJ5U3BsaXQpLnRhcmdldCA9PT0gZWxlbWVudCl7XG4vLyAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICB3aWQ6IHF1ZXJ5QnlJbmRleCxcbi8vICAgICAgICAgICAgIHR5cGU6IFF1ZXJ5VHlwZXMuYnlTcGxpdCxcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgd2lkOiBudWxsLFxuLy8gICAgICAgICB0eXBlOiBRdWVyeVR5cGVzLmJ5U3BsaXRcbi8vICAgICB9XG4vLyB9XG4iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkSWRGb3JFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xuICAgIGlmKCFpZCl7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIC8vIGlkIOWQq+acieeJueauiuWtl+espiAuIDog562J54m55q6K5a2X56ym5LiyIOS4jeWPr+eUqFxuICAgIGlmKC9bXFwuOiFdLy50ZXN0KGlkKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCflv73nlaXlkKvmnInnibnmrorlrZfnrKYnLGlkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8g57qv5pWw5a2X55qEIElEIO+8jOS4jeWPr+S/oe+8jOWPr+iDveaYr+ezu+e7n+WfuuS6jiBsaXN0IOeUn+aIkO+8jOWPmOWKqOaAp+Wkp++8jOWPr+iDveivr+WIpOafpeaJvuOAglxuICAgIGlmKC9eXFxkKyQvLnRlc3QoaWQpKXtcbiAgICAgICAgY29uc29sZS5sb2coJ+W/veeVpee6r+aVsOWtlycsaWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG59XG4iLCJpbXBvcnQge2NvbXB1dGVPZmZzZXQsIGdldENvb3Jkc30gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHZpZXdQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaW5WaWV3ID0gdmlld1Bvc2l0aW9uLmxlZnQ+MCAmJiB2aWV3UG9zaXRpb24ubGVmdCA8IHdpbmRvdy5pbm5lcldpZHRoICYmIHZpZXdQb3NpdGlvbi50b3A+MCAmJiB2aWV3UG9zaXRpb24udG9wPHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVPZmZzZXQoZWxlbWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBnZXRDb29yZHMoZWxlbWVudCkudG9wLFxuICAgICAgICBsZWZ0OiBnZXRDb29yZHMoZWxlbWVudCkubGVmdCxcbiAgICAgICAgdmlld0xlZnQ6IHZpZXdQb3NpdGlvbi5sZWZ0LFxuICAgICAgICB2aWV3VG9wOiB2aWV3UG9zaXRpb24udG9wLFxuICAgICAgICB0ZXh0OiBlbGVtZW50LmlubmVyVGV4dCxcbiAgICAgICAgdmlzaWJsZTogaW5WaWV3LFxuICAgICAgICBvZmZzZXRCb2R5VG9wOiBvZmZzZXQub2Zmc2V0VG9wLFxuICAgICAgICBvZmZzZXRCb2R5TGVmdDogb2Zmc2V0Lm9mZnNldExlZnQsXG4gICAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb29yZHMoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICB2YXIgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuICAgIHZhciBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICB2YXIgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgdmFyIHRvcCAgPSBib3gudG9wICsgIHNjcm9sbFRvcCAtIGNsaWVudFRvcDtcbiAgICB2YXIgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XG4gICAgcmV0dXJuIHsgdG9wOiBNYXRoLnJvdW5kKHRvcCksIGxlZnQ6IE1hdGgucm91bmQobGVmdCkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgb2Zmc2V0TGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICBsZXQgb2Zmc2V0VG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG5cbiAgICBpZihlbGVtZW50Lm9mZnNldFBhcmVudCl7XG4gICAgICAgIGNvbnN0IHBhcmVudE9mZnNldCA9IGNvbXB1dGVPZmZzZXQoPEhUTUxFbGVtZW50PmVsZW1lbnQub2Zmc2V0UGFyZW50KTtcbiAgICAgICAgb2Zmc2V0TGVmdCArPSBwYXJlbnRPZmZzZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgb2Zmc2V0VG9wICs9IHBhcmVudE9mZnNldC5vZmZzZXRUb3A7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBvZmZzZXRMZWZ0OiBvZmZzZXRMZWZ0LFxuICAgICAgICBvZmZzZXRUb3A6IG9mZnNldFRvcCxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVGeUlkKHdpZDogc3RyaW5nKSB7XG4gICAgaWYoIXdpZCl7XG4gICAgICAgIHJldHVybiB3aWQ7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB3aWQ7XG4gICAgLy8gdG9kbyDpgJLlvZLkuozliIbms5Ug6KGw5YePXG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB3aWQuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgbmV3UXVlcnkgPSBjbGFzc0xpc3Quc2xpY2UoMCxNYXRoLmZyb3VuZChjbGFzc0xpc3QubGVuZ3RoLzIpKS5qb2luKCcuJyk7XG4gICAgICAgIGlmKCFuZXdRdWVyeSl7XG4gICAgICAgICAgICByZXR1cm4gd2lkO1xuICAgICAgICB9XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3UXVlcnkpPT09ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aWQpKXtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ld1F1ZXJ5O1xuICAgICAgICB9XG4gICAgfWNhdGNoIChlKSB7XG5cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdExldmVsQ2hpbGRyZW4oZmluZFJvb3Q6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQsIGZpcnN0U2VsZWN0b3I6IHN0cmluZyk6SFRNTEVsZW1lbnRbXSB7XG4gICAgY29uc3QgZ2xvYmFsRmluZEVsZW1lbnRzID0gZmluZFJvb3QucXVlcnlTZWxlY3RvckFsbChmaXJzdFNlbGVjdG9yKTtcbiAgICBjb25zdCBtYXRjaGVkRWxlbWVudDogSFRNTEVsZW1lbnRbXSA9IFtdXG4gICAgZm9yKGxldCBpPTA7IGk8Z2xvYmFsRmluZEVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBnbG9iYWxGaW5kRWxlbWVudHNbaV07XG4gICAgICAgIGlmKHRlbXBFbGVtZW50LnBhcmVudE5vZGUgPT09IGZpbmRSb290KXtcbiAgICAgICAgICAgIG1hdGNoZWRFbGVtZW50LnB1c2godGVtcEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZWRFbGVtZW50O1xufVxuIiwiaW1wb3J0IHR5cGUge1JhbmdlfSBmcm9tIFwiLi4vdHlwaW5nXCI7XG5pbXBvcnQge2NoZWNrQ2FuQmVGcmFnbWVudE5vZGV9IGZyb20gXCIuLi9mcmFnbWVudC9jaGVja1wiO1xuXG4vKipcbiAqIOWvueWFg+e0oOWGheaWh+acrOeahOmHh+agt1xuICogb2Zmc2V0IOWBj+enu+mHjyjlgY/np7vph4/nmoTmlbDph4/kuZ/moIfor4bkuobor6XoioLngrnnmoTlhoXlrrnkuLDlr4znqIvluqYpXG4gKiB0ZXh0OiDlgY/np7vph4/nmoTmlofmnKzkv6Hmga9cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmdlc0ZvckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsZnJhZ21lbnRzOiBudW1iZXIgPSA0KSB7XG4gICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgaWYoIXRleHQpe1xuICAgICAgICByZXR1cm4gW107XG4gICAgfWVsc2V7XG4gICAgfVxuICAgIGNvbnN0IHJhbmdlczogUmFuZ2VbXSA9IFtdXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmFnbWVudHM7IGkrKyl7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGkgKiBNYXRoLmZsb29yKHRleHQubGVuZ3RoIC8gZnJhZ21lbnRzKTtcbiAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LnN1YnN0cmluZyhvZmZzZXQsb2Zmc2V0KzQpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByYW5nZXM7XG59XG5cblxuLyoqXG4gKiDmj5Dlj5bkuIDkuKroioLngrnnmoTlhbPplK7moLflvI/nibnlvoFcbiAqXG4gKiAqL1xuY29uc3QgS0VZX1NUWUxFUyA9IFsnd2lkdGgnLCdoZWlnaHQnLCdwb3NpdGlvbicsJ2Rpc3BsYXknXVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleVN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHN0eWxlTWFwID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgIEtFWV9TVFlMRVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXN1bHRba2V5XSA9IHN0eWxlTWFwW2tleV1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyoqXG4gKiDku47lj7blrZDoioLngrnlvIDlp4vvvIznu5jliLYgZnJhZ21lbnQg5Zu+6LCxXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50c0Zyb21MZWFmRWxlbWVudChsZWFmRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBmcmFnbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAgIGNvbnN0IHBhcmVudCA9IGxlYWZFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZighcGFyZW50IHx8ICFwYXJlbnQucGFyZW50RWxlbWVudCl7XG4gICAgICAgIGZyYWdtZW50cy51bnNoaWZ0KGxlYWZFbGVtZW50KVxuICAgICAgICByZXR1cm4gZnJhZ21lbnRzXG4gICAgfVxuXG4gICAgY29uc3QgY2FuQmVGcmFnbWVudCA9IGNoZWNrQ2FuQmVGcmFnbWVudE5vZGUocGFyZW50KTtcblxuXG4gICAgaWYoY2FuQmVGcmFnbWVudCl7XG4gICAgICAgIGNvbnN0IHtoZWlnaHQ6IHBhcmVudEhlaWdodCwgd2lkdGg6IHBhcmVudFdpZHRofSA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50QXJlYSA9IHBhcmVudEhlaWdodCAqIHBhcmVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHtoZWlnaHQsd2lkdGh9ID0gcGFyZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGdyYWRBcmVhID0gaGVpZ2h0ICogd2lkdGg7XG5cbiAgICAgICAgLy8g5pyJ5b+F6KaB5L2c5Li6IGZyYWdtZW50IOiKgueCuVxuICAgICAgICBjb25zdCBhcmVhQ2hhbmdlZCA9IHBhcmVudEFyZWEgLyBncmFkQXJlYSA8IDAuOFxuXG4gICAgICAgIC8qKumdouenr+eqgeWPmOWPr+S7peS9nOS4uueLrOeri+eahCBmcmFnbWVudCAqL1xuICAgICAgICBpZihhcmVhQ2hhbmdlZCl7XG4gICAgICAgICAgICBmcmFnbWVudHMudW5zaGlmdChwYXJlbnQpXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIC8qKueJueauiuagt+W8j++8jOWPr+S7peS9nOS4uueLrOeri+eahCBmcmFnbWVudCAqL1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICBpZihzdHlsZS5kaXNwbGF5PT09J25vbmUnIHx8IHN0eWxlLnBvc2l0aW9uPT09J2ZpeGVkJyB8fCBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyl7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRzLnVuc2hpZnQocGFyZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq57un57ut5ZCR5LiK5a+75om+Ki9cbiAgICBmcmFnbWVudHMudW5zaGlmdCguLi5nZXRGcmFnbWVudHNGcm9tTGVhZkVsZW1lbnQocGFyZW50KSlcblxuXG4gICAgcmV0dXJuIGZyYWdtZW50cztcbn1cblxuIiwiaW1wb3J0IHtnZXRFbGVtZW50Q2xhc3N9IGZyb20gXCIuLi91bmlxdWVJZC9jb21wdXRlSWRcIjtcbmltcG9ydCB7Z2V0VmFsaWRJZEZvckVsZW1lbnR9IGZyb20gXCIuLi91dGlscy9lbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NhbkJlRnJhZ21lbnROb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgd2hpdGVMaXN0VGFnID0gWydodG1sJywnYm9keScsJ3NlY3Rpb24nLCduYXYnLCdmb290ZXInLCd0YWJsZSddXG4gICAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYod2hpdGVMaXN0VGFnLmluY2x1ZGVzKHRhZykpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIC8qKuWmguaenOeItuiKgueCueWPquacieS4gOS4quWtkOiKgueCue+8jOWImeeItuiKgueCueabtOmAguWQiOS9nOS4uiBmcmFnbWVudCovXG4gICAgaWYocGFyZW50RWxlbWVudCAmJiBwYXJlbnRFbGVtZW50LmNoaWxkcmVuICYmIHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoPD0xKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuWFg+e0oOe8uuS5j+agh+ivhiBjbGFzcyBvciBpZO+8jOS4jemAguWQiOS9nOS4uiBmcmFnbWVudCAqL1xuICAgIGNvbnN0IGNsYXNzTmFtZU9ySWQgPSBnZXRFbGVtZW50Q2xhc3MoZWxlbWVudCkgfHwgZ2V0VmFsaWRJZEZvckVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYoIWNsYXNzTmFtZU9ySWQpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1pbkRlZXA6IDQsXG4gICAgICAgIGlnbm9yZUNsYXNzUnVsZToge1xuICAgICAgICAgICAgYmxvY2tDbGFzc0xpc3Q6IFtdLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAxMCxcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50Ljk1NzNhNGU3LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);