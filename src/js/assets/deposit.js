var Qf = Object.defineProperty;
var Zf = (e, t, n) =>
  t in e
    ? Qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Le = (e, t, n) => (Zf(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fr = {},
  Yf = {
    get exports() {
      return Fr;
    },
    set exports(e) {
      Fr = e;
    },
  },
  io = {},
  M = {},
  Kf = {
    get exports() {
      return M;
    },
    set exports(e) {
      M = e;
    },
  },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for("react.element"),
  Xf = Symbol.for("react.portal"),
  Gf = Symbol.for("react.fragment"),
  Jf = Symbol.for("react.strict_mode"),
  qf = Symbol.for("react.profiler"),
  bf = Symbol.for("react.provider"),
  ed = Symbol.for("react.context"),
  td = Symbol.for("react.forward_ref"),
  nd = Symbol.for("react.suspense"),
  rd = Symbol.for("react.memo"),
  ld = Symbol.for("react.lazy"),
  Xu = Symbol.iterator;
function od(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xu && e[Xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var va = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ga = Object.assign,
  xa = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xa),
    (this.updater = n || va);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wa() {}
wa.prototype = rr.prototype;
function Ji(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xa),
    (this.updater = n || va);
}
var qi = (Ji.prototype = new wa());
qi.constructor = Ji;
ga(qi, rr.prototype);
qi.isPureReactComponent = !0;
var Gu = Array.isArray,
  Ca = Object.prototype.hasOwnProperty,
  bi = { current: null },
  ka = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ca.call(t, r) && !ka.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bi.current,
  };
}
function id(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function ud(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ju = /\/+/g;
function Lo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ud("" + e.key)
    : t.toString(36);
}
function kl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gr:
          case Xf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Lo(i, 0) : r),
      Gu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ju, "$&/") + "/"),
          kl(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (eu(l) &&
            (l = id(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ju, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Gu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Lo(o, u);
      i += kl(o, t, n, s, l);
    }
  else if (((s = od(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Lo(o, u++)), (i += kl(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function ll(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function sd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Sl = { transition: null },
  ad = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Sl,
    ReactCurrentOwner: bi,
  };
J.Children = {
  map: ll,
  forEach: function (e, t, n) {
    ll(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ll(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ll(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = rr;
J.Fragment = Gf;
J.Profiler = qf;
J.PureComponent = Ji;
J.StrictMode = Jf;
J.Suspense = nd;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ad;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ga({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = bi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ca.call(t, s) &&
        !ka.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Gr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: ed,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bf, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Sa;
J.createFactory = function (e) {
  var t = Sa.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: td, render: e };
};
J.isValidElement = eu;
J.lazy = function (e) {
  return { $$typeof: ld, _payload: { _status: -1, _result: e }, _init: sd };
};
J.memo = function (e, t) {
  return { $$typeof: rd, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = Sl.transition;
  Sl.transition = {};
  try {
    e();
  } finally {
    Sl.transition = t;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ae.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
J.useId = function () {
  return Ae.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ae.current.useRef(e);
};
J.useState = function (e) {
  return Ae.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ae.current.useTransition();
};
J.version = "18.2.0";
(function (e) {
  e.exports = J;
})(Kf);
const Vt = ya(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd = M,
  fd = Symbol.for("react.element"),
  dd = Symbol.for("react.fragment"),
  pd = Object.prototype.hasOwnProperty,
  md = cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function _a(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) pd.call(t, r) && !hd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: fd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: md.current,
  };
}
io.Fragment = dd;
io.jsx = _a;
io.jsxs = _a;
(function (e) {
  e.exports = io;
})(Yf);
const gt = Fr.Fragment,
  x = Fr.jsx,
  T = Fr.jsxs,
  Ea = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.901939 0L12.0002 11.0983L11.0985 12L0.000244141 0.901694L0.901939 0Z" fill="#818181"/>
<path d="M11.0983 0L12 0.901694L0.901695 12L0 11.0983L11.0983 0Z" fill="#818181"/>
</svg>
`;
var ti = {},
  yd = {
    get exports() {
      return ti;
    },
    set exports(e) {
      ti = e;
    },
  },
  be = {},
  ni = {},
  vd = {
    get exports() {
      return ni;
    },
    set exports(e) {
      ni = e;
    },
  },
  Na = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, j) {
    var $ = E.length;
    E.push(j);
    e: for (; 0 < $; ) {
      var K = ($ - 1) >>> 1,
        oe = E[K];
      if (0 < l(oe, j)) (E[K] = j), (E[$] = oe), ($ = K);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      $ = E.pop();
    if ($ !== j) {
      E[0] = $;
      e: for (var K = 0, oe = E.length, ke = oe >>> 1; K < ke; ) {
        var Se = 2 * (K + 1) - 1,
          Ze = E[Se],
          A = Se + 1,
          _e = E[A];
        if (0 > l(Ze, $))
          A < oe && 0 > l(_e, Ze)
            ? ((E[K] = _e), (E[A] = $), (K = A))
            : ((E[K] = Ze), (E[Se] = $), (K = Se));
        else if (A < oe && 0 > l(_e, $)) (E[K] = _e), (E[A] = $), (K = A);
        else break e;
      }
    }
    return j;
  }
  function l(E, j) {
    var $ = E.sortIndex - j.sortIndex;
    return $ !== 0 ? $ : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    f = [],
    v = 1,
    h = null,
    m = 3,
    p = !1,
    w = !1,
    y = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    a = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var j = n(f); j !== null; ) {
      if (j.callback === null) r(f);
      else if (j.startTime <= E)
        r(f), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(f);
    }
  }
  function g(E) {
    if (((y = !1), d(E), !w))
      if (n(s) !== null) (w = !0), q(_);
      else {
        var j = n(f);
        j !== null && de(g, j.startTime - E);
      }
  }
  function _(E, j) {
    (w = !1), y && ((y = !1), a(L), (L = -1)), (p = !0);
    var $ = m;
    try {
      for (
        d(j), h = n(s);
        h !== null && (!(h.expirationTime > j) || (E && !B()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var oe = K(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof oe == "function" ? (h.callback = oe) : h === n(s) && r(s),
            d(j);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ke = !0;
      else {
        var Se = n(f);
        Se !== null && de(g, Se.startTime - j), (ke = !1);
      }
      return ke;
    } finally {
      (h = null), (m = $), (p = !1);
    }
  }
  var N = !1,
    S = null,
    L = -1,
    H = 5,
    R = -1;
  function B() {
    return !(e.unstable_now() - R < H);
  }
  function X() {
    if (S !== null) {
      var E = e.unstable_now();
      R = E;
      var j = !0;
      try {
        j = S(!0, E);
      } finally {
        j ? Y() : ((N = !1), (S = null));
      }
    } else N = !1;
  }
  var Y;
  if (typeof c == "function")
    Y = function () {
      c(X);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      W = z.port2;
    (z.port1.onmessage = X),
      (Y = function () {
        W.postMessage(null);
      });
  } else
    Y = function () {
      P(X, 0);
    };
  function q(E) {
    (S = E), N || ((N = !0), Y());
  }
  function de(E, j) {
    L = P(function () {
      E(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || p || ((w = !0), q(_));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var $ = m;
      m = j;
      try {
        return E();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var $ = m;
      m = E;
      try {
        return j();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, $) {
      var K = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? K + $ : K))
          : ($ = K),
        E)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = $ + oe),
        (E = {
          id: v++,
          callback: j,
          priorityLevel: E,
          startTime: $,
          expirationTime: oe,
          sortIndex: -1,
        }),
        $ > K
          ? ((E.sortIndex = $),
            t(f, E),
            n(s) === null &&
              E === n(f) &&
              (y ? (a(L), (L = -1)) : (y = !0), de(g, $ - K)))
          : ((E.sortIndex = oe), t(s, E), w || p || ((w = !0), q(_))),
        E
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (E) {
      var j = m;
      return function () {
        var $ = m;
        m = j;
        try {
          return E.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(Na);
(function (e) {
  e.exports = Na;
})(vd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La = M,
  qe = ni;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pa = new Set(),
  Or = {};
function En(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) Pa.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ri = Object.prototype.hasOwnProperty,
  gd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qu = {},
  bu = {};
function xd(e) {
  return ri.call(bu, e)
    ? !0
    : ri.call(qu, e)
    ? !1
    : gd.test(e)
    ? (bu[e] = !0)
    : ((qu[e] = !0), !1);
}
function wd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cd(e, t, n, r) {
  if (t === null || typeof t > "u" || wd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tu = /[\-:]([a-z])/g;
function nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    Fe[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    Fe[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(tu, nu);
  Fe[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ru(e, t, n, r) {
  var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cd(t, n, l, r) && (n = null),
    r || l === null
      ? xd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = La.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ol = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  lu = Symbol.for("react.strict_mode"),
  li = Symbol.for("react.profiler"),
  Ta = Symbol.for("react.provider"),
  Fa = Symbol.for("react.context"),
  ou = Symbol.for("react.forward_ref"),
  oi = Symbol.for("react.suspense"),
  ii = Symbol.for("react.suspense_list"),
  iu = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  Oa = Symbol.for("react.offscreen"),
  es = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (es && e[es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  Po;
function hr(e) {
  if (Po === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Po = (t && t[1]) || "";
    }
  return (
    `
` +
    Po +
    e
  );
}
var To = !1;
function Fo(e, t) {
  if (!e || To) return "";
  To = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (To = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function kd(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Fo(e.type, !1)), e;
    case 11:
      return (e = Fo(e.type.render, !1)), e;
    case 1:
      return (e = Fo(e.type, !0)), e;
    default:
      return "";
  }
}
function ui(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Pn:
      return "Portal";
    case li:
      return "Profiler";
    case lu:
      return "StrictMode";
    case oi:
      return "Suspense";
    case ii:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fa:
        return (e.displayName || "Context") + ".Consumer";
      case Ta:
        return (e._context.displayName || "Context") + ".Provider";
      case ou:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case iu:
        return (
          (t = e.displayName || null), t !== null ? t : ui(e.type) || "Memo"
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return ui(e(t));
        } catch {}
    }
  return null;
}
function Sd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ui(t);
    case 8:
      return t === lu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ra(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _d(e) {
  var t = Ra(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function il(e) {
  e._valueTracker || (e._valueTracker = _d(e));
}
function za(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ra(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function si(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ts(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ja(e, t) {
  (t = t.checked), t != null && ru(e, "checked", t, !1);
}
function ai(e, t) {
  ja(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ci(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ci(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ns(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ci(e, t, n) {
  (t !== "number" || jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yr = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function fi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function rs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Ia(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ls(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ma(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ma(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ul,
  $a = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ul = ul || document.createElement("div"),
          ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ul.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ed = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  Ed.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function Aa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Da(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Aa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Nd = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function pi(e, t) {
  if (t) {
    if (Nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function mi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var hi = null;
function uu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yi = null,
  Vn = null,
  Qn = null;
function os(e) {
  if ((e = br(e))) {
    if (typeof yi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = fo(t)), yi(e.stateNode, e.type, t));
  }
}
function Ba(e) {
  Vn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Vn = e);
}
function Ua() {
  if (Vn) {
    var e = Vn,
      t = Qn;
    if (((Qn = Vn = null), os(e), t)) for (e = 0; e < t.length; e++) os(t[e]);
  }
}
function Wa(e, t) {
  return e(t);
}
function Ha() {}
var Oo = !1;
function Va(e, t, n) {
  if (Oo) return e(t, n);
  Oo = !0;
  try {
    return Wa(e, t, n);
  } finally {
    (Oo = !1), (Vn !== null || Qn !== null) && (Ha(), Ua());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var vi = !1;
if (Ft)
  try {
    var sr = {};
    Object.defineProperty(sr, "passive", {
      get: function () {
        vi = !0;
      },
    }),
      window.addEventListener("test", sr, sr),
      window.removeEventListener("test", sr, sr);
  } catch {
    vi = !1;
  }
function Ld(e, t, n, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var wr = !1,
  Il = null,
  Ml = !1,
  gi = null,
  Pd = {
    onError: function (e) {
      (wr = !0), (Il = e);
    },
  };
function Td(e, t, n, r, l, o, i, u, s) {
  (wr = !1), (Il = null), Ld.apply(Pd, arguments);
}
function Fd(e, t, n, r, l, o, i, u, s) {
  if ((Td.apply(this, arguments), wr)) {
    if (wr) {
      var f = Il;
      (wr = !1), (Il = null);
    } else throw Error(k(198));
    Ml || ((Ml = !0), (gi = f));
  }
}
function Nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function is(e) {
  if (Nn(e) !== e) throw Error(k(188));
}
function Od(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return is(l), e;
        if (o === r) return is(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Za(e) {
  return (e = Od(e)), e !== null ? Ya(e) : null;
}
function Ya(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ya(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ka = qe.unstable_scheduleCallback,
  us = qe.unstable_cancelCallback,
  Rd = qe.unstable_shouldYield,
  zd = qe.unstable_requestPaint,
  ge = qe.unstable_now,
  jd = qe.unstable_getCurrentPriorityLevel,
  su = qe.unstable_ImmediatePriority,
  Xa = qe.unstable_UserBlockingPriority,
  $l = qe.unstable_NormalPriority,
  Id = qe.unstable_LowPriority,
  Ga = qe.unstable_IdlePriority,
  uo = null,
  wt = null;
function Md(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(uo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Dd,
  $d = Math.log,
  Ad = Math.LN2;
function Dd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($d(e) / Ad) | 0)) | 0;
}
var sl = 64,
  al = 4194304;
function vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = vr(u)) : ((o &= i), o !== 0 && (r = vr(o)));
  } else (i = n & ~l), i !== 0 ? (r = vr(i)) : o !== 0 && (r = vr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Bd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ud(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - pt(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Bd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ja() {
  var e = sl;
  return (sl <<= 1), !(sl & 4194240) && (sl = 64), e;
}
function Ro(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function Wd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function au(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ie = 0;
function qa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ba,
  cu,
  ec,
  tc,
  nc,
  wi = !1,
  cl = [],
  Qt = null,
  Zt = null,
  Yt = null,
  jr = new Map(),
  Ir = new Map(),
  Bt = [],
  Hd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ss(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Yt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function ar(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = br(t)), t !== null && cu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Vd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Qt = ar(Qt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Zt = ar(Zt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Yt = ar(Yt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return jr.set(o, ar(jr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Ir.set(o, ar(Ir.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function rc(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qa(n)), t !== null)) {
          (e.blockedOn = t),
            nc(e.priority, function () {
              ec(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (hi = r), n.target.dispatchEvent(r), (hi = null);
    } else return (t = br(n)), t !== null && cu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function as(e, t, n) {
  _l(e) && n.delete(t);
}
function Qd() {
  (wi = !1),
    Qt !== null && _l(Qt) && (Qt = null),
    Zt !== null && _l(Zt) && (Zt = null),
    Yt !== null && _l(Yt) && (Yt = null),
    jr.forEach(as),
    Ir.forEach(as);
}
function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wi ||
      ((wi = !0),
      qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Qd)));
}
function Mr(e) {
  function t(l) {
    return cr(l, e);
  }
  if (0 < cl.length) {
    cr(cl[0], e);
    for (var n = 1; n < cl.length; n++) {
      var r = cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qt !== null && cr(Qt, e),
      Zt !== null && cr(Zt, e),
      Yt !== null && cr(Yt, e),
      jr.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    rc(n), n.blockedOn === null && Bt.shift();
}
var Zn = jt.ReactCurrentBatchConfig,
  Dl = !0;
function Zd(e, t, n, r) {
  var l = ie,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (ie = 1), fu(e, t, n, r);
  } finally {
    (ie = l), (Zn.transition = o);
  }
}
function Yd(e, t, n, r) {
  var l = ie,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (ie = 4), fu(e, t, n, r);
  } finally {
    (ie = l), (Zn.transition = o);
  }
}
function fu(e, t, n, r) {
  if (Dl) {
    var l = Ci(e, t, n, r);
    if (l === null) Wo(e, t, r, Bl, n), ss(e, r);
    else if (Vd(l, e, t, n, r)) r.stopPropagation();
    else if ((ss(e, r), t & 4 && -1 < Hd.indexOf(e))) {
      for (; l !== null; ) {
        var o = br(l);
        if (
          (o !== null && ba(o),
          (o = Ci(e, t, n, r)),
          o === null && Wo(e, t, r, Bl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wo(e, t, r, null, n);
  }
}
var Bl = null;
function Ci(e, t, n, r) {
  if (((Bl = null), (e = uu(r)), (e = pn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bl = e), null;
}
function lc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (jd()) {
        case su:
          return 1;
        case Xa:
          return 4;
        case $l:
        case Id:
          return 16;
        case Ga:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null,
  du = null,
  El = null;
function oc() {
  if (El) return El;
  var e,
    t = du,
    n = t.length,
    r,
    l = "value" in Wt ? Wt.value : Wt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (El = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fl() {
  return !0;
}
function cs() {
  return !1;
}
function et(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fl
        : cs),
      (this.isPropagationStopped = cs),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fl));
      },
      persist: function () {},
      isPersistent: fl,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pu = et(lr),
  qr = he({}, lr, { view: 0, detail: 0 }),
  Kd = et(qr),
  zo,
  jo,
  fr,
  so = he({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== fr &&
            (fr && e.type === "mousemove"
              ? ((zo = e.screenX - fr.screenX), (jo = e.screenY - fr.screenY))
              : (jo = zo = 0),
            (fr = e)),
          zo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jo;
    },
  }),
  fs = et(so),
  Xd = he({}, so, { dataTransfer: 0 }),
  Gd = et(Xd),
  Jd = he({}, qr, { relatedTarget: 0 }),
  Io = et(Jd),
  qd = he({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bd = et(qd),
  ep = he({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tp = et(ep),
  np = he({}, lr, { data: 0 }),
  ds = et(np),
  rp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  op = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ip(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = op[e]) ? !!t[e] : !1;
}
function mu() {
  return ip;
}
var up = he({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = rp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mu,
    charCode: function (e) {
      return e.type === "keypress" ? Nl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sp = et(up),
  ap = he({}, so, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ps = et(ap),
  cp = he({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mu,
  }),
  fp = et(cp),
  dp = he({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pp = et(dp),
  mp = he({}, so, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hp = et(mp),
  yp = [9, 13, 27, 32],
  hu = Ft && "CompositionEvent" in window,
  Cr = null;
Ft && "documentMode" in document && (Cr = document.documentMode);
var vp = Ft && "TextEvent" in window && !Cr,
  ic = Ft && (!hu || (Cr && 8 < Cr && 11 >= Cr)),
  ms = String.fromCharCode(32),
  hs = !1;
function uc(e, t) {
  switch (e) {
    case "keyup":
      return yp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function sc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function gp(e, t) {
  switch (e) {
    case "compositionend":
      return sc(t);
    case "keypress":
      return t.which !== 32 ? null : ((hs = !0), ms);
    case "textInput":
      return (e = t.data), e === ms && hs ? null : e;
    default:
      return null;
  }
}
function xp(e, t) {
  if (Fn)
    return e === "compositionend" || (!hu && uc(e, t))
      ? ((e = oc()), (El = du = Wt = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ic && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ys(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wp[e.type] : t === "textarea";
}
function ac(e, t, n, r) {
  Ba(r),
    (t = Ul(t, "onChange")),
    0 < t.length &&
      ((n = new pu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var kr = null,
  $r = null;
function Cp(e) {
  wc(e, 0);
}
function ao(e) {
  var t = zn(e);
  if (za(t)) return e;
}
function kp(e, t) {
  if (e === "change") return t;
}
var cc = !1;
if (Ft) {
  var Mo;
  if (Ft) {
    var $o = "oninput" in document;
    if (!$o) {
      var vs = document.createElement("div");
      vs.setAttribute("oninput", "return;"),
        ($o = typeof vs.oninput == "function");
    }
    Mo = $o;
  } else Mo = !1;
  cc = Mo && (!document.documentMode || 9 < document.documentMode);
}
function gs() {
  kr && (kr.detachEvent("onpropertychange", fc), ($r = kr = null));
}
function fc(e) {
  if (e.propertyName === "value" && ao($r)) {
    var t = [];
    ac(t, $r, e, uu(e)), Va(Cp, t);
  }
}
function Sp(e, t, n) {
  e === "focusin"
    ? (gs(), (kr = t), ($r = n), kr.attachEvent("onpropertychange", fc))
    : e === "focusout" && gs();
}
function _p(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ao($r);
}
function Ep(e, t) {
  if (e === "click") return ao(t);
}
function Np(e, t) {
  if (e === "input" || e === "change") return ao(t);
}
function Lp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Lp;
function Ar(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ri.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ws(e, t) {
  var n = xs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xs(n);
  }
}
function dc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? dc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pc() {
  for (var e = window, t = jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jl(e.document);
  }
  return t;
}
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Pp(e) {
  var t = pc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ws(n, o));
        var i = ws(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Tp = Ft && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  ki = null,
  Sr = null,
  Si = !1;
function Cs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Si ||
    On == null ||
    On !== jl(r) ||
    ((r = On),
    "selectionStart" in r && yu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sr && Ar(Sr, r)) ||
      ((Sr = r),
      (r = Ul(ki, "onSelect")),
      0 < r.length &&
        ((t = new pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function dl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rn = {
    animationend: dl("Animation", "AnimationEnd"),
    animationiteration: dl("Animation", "AnimationIteration"),
    animationstart: dl("Animation", "AnimationStart"),
    transitionend: dl("Transition", "TransitionEnd"),
  },
  Ao = {},
  mc = {};
Ft &&
  ((mc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rn.animationend.animation,
    delete Rn.animationiteration.animation,
    delete Rn.animationstart.animation),
  "TransitionEvent" in window || delete Rn.transitionend.transition);
function co(e) {
  if (Ao[e]) return Ao[e];
  if (!Rn[e]) return e;
  var t = Rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mc) return (Ao[e] = t[n]);
  return e;
}
var hc = co("animationend"),
  yc = co("animationiteration"),
  vc = co("animationstart"),
  gc = co("transitionend"),
  xc = new Map(),
  ks =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function on(e, t) {
  xc.set(e, t), En(t, [e]);
}
for (var Do = 0; Do < ks.length; Do++) {
  var Bo = ks[Do],
    Fp = Bo.toLowerCase(),
    Op = Bo[0].toUpperCase() + Bo.slice(1);
  on(Fp, "on" + Op);
}
on(hc, "onAnimationEnd");
on(yc, "onAnimationIteration");
on(vc, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(gc, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function Ss(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Fd(r, t, void 0, e), (e.currentTarget = null);
}
function wc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Ss(l, u, f), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Ss(l, u, f), (o = s);
        }
    }
  }
  if (Ml) throw ((e = gi), (Ml = !1), (gi = null), e);
}
function ae(e, t) {
  var n = t[Pi];
  n === void 0 && (n = t[Pi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cc(t, e, 2, !1), n.add(r));
}
function Uo(e, t, n) {
  var r = 0;
  t && (r |= 4), Cc(n, e, r, t);
}
var pl = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[pl]) {
    (e[pl] = !0),
      Pa.forEach(function (n) {
        n !== "selectionchange" && (Rp.has(n) || Uo(n, !1, e), Uo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pl] || ((t[pl] = !0), Uo("selectionchange", !1, t));
  }
}
function Cc(e, t, n, r) {
  switch (lc(t)) {
    case 1:
      var l = Zd;
      break;
    case 4:
      l = Yd;
      break;
    default:
      l = fu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !vi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Wo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = pn(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Va(function () {
    var f = o,
      v = uu(n),
      h = [];
    e: {
      var m = xc.get(e);
      if (m !== void 0) {
        var p = pu,
          w = e;
        switch (e) {
          case "keypress":
            if (Nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = sp;
            break;
          case "focusin":
            (w = "focus"), (p = Io);
            break;
          case "focusout":
            (w = "blur"), (p = Io);
            break;
          case "beforeblur":
          case "afterblur":
            p = Io;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Gd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = fp;
            break;
          case hc:
          case yc:
          case vc:
            p = bd;
            break;
          case gc:
            p = pp;
            break;
          case "scroll":
            p = Kd;
            break;
          case "wheel":
            p = hp;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = tp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = ps;
        }
        var y = (t & 4) !== 0,
          P = !y && e === "scroll",
          a = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              a !== null && ((g = zr(c, a)), g != null && y.push(Br(c, g, d)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((m = new p(m, w, null, n, v)), h.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          m &&
            n !== hi &&
            (w = n.relatedTarget || n.fromElement) &&
            (pn(w) || w[Ot]))
        )
          break e;
        if (
          (p || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          p
            ? ((w = n.relatedTarget || n.toElement),
              (p = f),
              (w = w ? pn(w) : null),
              w !== null &&
                ((P = Nn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((p = null), (w = f)),
          p !== w)
        ) {
          if (
            ((y = fs),
            (g = "onMouseLeave"),
            (a = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ps),
              (g = "onPointerLeave"),
              (a = "onPointerEnter"),
              (c = "pointer")),
            (P = p == null ? m : zn(p)),
            (d = w == null ? m : zn(w)),
            (m = new y(g, c + "leave", p, n, v)),
            (m.target = P),
            (m.relatedTarget = d),
            (g = null),
            pn(v) === f &&
              ((y = new y(a, c + "enter", w, n, v)),
              (y.target = d),
              (y.relatedTarget = P),
              (g = y)),
            (P = g),
            p && w)
          )
            t: {
              for (y = p, a = w, c = 0, d = y; d; d = Ln(d)) c++;
              for (d = 0, g = a; g; g = Ln(g)) d++;
              for (; 0 < c - d; ) (y = Ln(y)), c--;
              for (; 0 < d - c; ) (a = Ln(a)), d--;
              for (; c--; ) {
                if (y === a || (a !== null && y === a.alternate)) break t;
                (y = Ln(y)), (a = Ln(a));
              }
              y = null;
            }
          else y = null;
          p !== null && _s(h, m, p, y, !1),
            w !== null && P !== null && _s(h, P, w, y, !0);
        }
      }
      e: {
        if (
          ((m = f ? zn(f) : window),
          (p = m.nodeName && m.nodeName.toLowerCase()),
          p === "select" || (p === "input" && m.type === "file"))
        )
          var _ = kp;
        else if (ys(m))
          if (cc) _ = Np;
          else {
            _ = _p;
            var N = Sp;
          }
        else
          (p = m.nodeName) &&
            p.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (_ = Ep);
        if (_ && (_ = _(e, f))) {
          ac(h, _, n, v);
          break e;
        }
        N && N(e, m, f),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            ci(m, "number", m.value);
      }
      switch (((N = f ? zn(f) : window), e)) {
        case "focusin":
          (ys(N) || N.contentEditable === "true") &&
            ((On = N), (ki = f), (Sr = null));
          break;
        case "focusout":
          Sr = ki = On = null;
          break;
        case "mousedown":
          Si = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Si = !1), Cs(h, n, v);
          break;
        case "selectionchange":
          if (Tp) break;
        case "keydown":
        case "keyup":
          Cs(h, n, v);
      }
      var S;
      if (hu)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Fn
          ? uc(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ic &&
          n.locale !== "ko" &&
          (Fn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Fn && (S = oc())
            : ((Wt = v),
              (du = "value" in Wt ? Wt.value : Wt.textContent),
              (Fn = !0))),
        (N = Ul(f, L)),
        0 < N.length &&
          ((L = new ds(L, e, null, n, v)),
          h.push({ event: L, listeners: N }),
          S ? (L.data = S) : ((S = sc(n)), S !== null && (L.data = S)))),
        (S = vp ? gp(e, n) : xp(e, n)) &&
          ((f = Ul(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new ds("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: f }),
            (v.data = S)));
    }
    wc(h, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = zr(e, n)),
      o != null && r.unshift(Br(e, o, l)),
      (o = zr(e, t)),
      o != null && r.push(Br(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _s(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = zr(n, o)), s != null && i.unshift(Br(n, s, u)))
        : l || ((s = zr(n, o)), s != null && i.push(Br(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var zp = /\r\n?/g,
  jp = /\u0000|\uFFFD/g;
function Es(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zp,
      `
`
    )
    .replace(jp, "");
}
function ml(e, t, n) {
  if (((t = Es(t)), Es(e) !== t && n)) throw Error(k(425));
}
function Wl() {}
var _i = null,
  Ei = null;
function Ni(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Li = typeof setTimeout == "function" ? setTimeout : void 0,
  Ip = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ns = typeof Promise == "function" ? Promise : void 0,
  Mp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ns < "u"
      ? function (e) {
          return Ns.resolve(null).then(e).catch($p);
        }
      : Li;
function $p(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ho(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Mr(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ls(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var or = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + or,
  Ur = "__reactProps$" + or,
  Ot = "__reactContainer$" + or,
  Pi = "__reactEvents$" + or,
  Ap = "__reactListeners$" + or,
  Dp = "__reactHandles$" + or;
function pn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ls(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = Ls(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function br(e) {
  return (
    (e = e[xt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function fo(e) {
  return e[Ur] || null;
}
var Ti = [],
  jn = -1;
function un(e) {
  return { current: e };
}
function ce(e) {
  0 > jn || ((e.current = Ti[jn]), (Ti[jn] = null), jn--);
}
function se(e, t) {
  jn++, (Ti[jn] = e.current), (e.current = t);
}
var rn = {},
  Ie = un(rn),
  He = un(!1),
  wn = rn;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Hl() {
  ce(He), ce(Ie);
}
function Ps(e, t, n) {
  if (Ie.current !== rn) throw Error(k(168));
  se(Ie, t), se(He, n);
}
function kc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Sd(e) || "Unknown", l));
  return he({}, n, r);
}
function Vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (wn = Ie.current),
    se(Ie, e),
    se(He, He.current),
    !0
  );
}
function Ts(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = kc(e, t, wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(He),
      ce(Ie),
      se(Ie, e))
    : ce(He),
    se(He, n);
}
var Nt = null,
  po = !1,
  Vo = !1;
function Sc(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function Bp(e) {
  (po = !0), Sc(e);
}
function sn() {
  if (!Vo && Nt !== null) {
    Vo = !0;
    var e = 0,
      t = ie;
    try {
      var n = Nt;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (po = !1);
    } catch (l) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), Ka(su, sn), l);
    } finally {
      (ie = t), (Vo = !1);
    }
  }
  return null;
}
var In = [],
  Mn = 0,
  Ql = null,
  Zl = 0,
  nt = [],
  rt = 0,
  Cn = null,
  Lt = 1,
  Pt = "";
function fn(e, t) {
  (In[Mn++] = Zl), (In[Mn++] = Ql), (Ql = e), (Zl = t);
}
function _c(e, t, n) {
  (nt[rt++] = Lt), (nt[rt++] = Pt), (nt[rt++] = Cn), (Cn = e);
  var r = Lt;
  e = Pt;
  var l = 32 - pt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - pt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Lt = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (Pt = o + e);
  } else (Lt = (1 << o) | (n << l) | r), (Pt = e);
}
function vu(e) {
  e.return !== null && (fn(e, 1), _c(e, 1, 0));
}
function gu(e) {
  for (; e === Ql; )
    (Ql = In[--Mn]), (In[Mn] = null), (Zl = In[--Mn]), (In[Mn] = null);
  for (; e === Cn; )
    (Cn = nt[--rt]),
      (nt[rt] = null),
      (Pt = nt[--rt]),
      (nt[rt] = null),
      (Lt = nt[--rt]),
      (nt[rt] = null);
}
var Je = null,
  Ge = null,
  fe = !1,
  dt = null;
function Ec(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ge = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: Lt, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oi(e) {
  if (fe) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!Fs(e, t)) {
        if (Fi(e)) throw Error(k(418));
        t = Kt(n.nextSibling);
        var r = Je;
        t && Fs(e, t)
          ? Ec(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (Je = e));
      }
    } else {
      if (Fi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (Je = e);
    }
  }
}
function Os(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function hl(e) {
  if (e !== Je) return !1;
  if (!fe) return Os(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ni(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Fi(e)) throw (Nc(), Error(k(418)));
    for (; t; ) Ec(e, t), (t = Kt(t.nextSibling));
  }
  if ((Os(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Je ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Nc() {
  for (var e = Ge; e; ) e = Kt(e.nextSibling);
}
function qn() {
  (Ge = Je = null), (fe = !1);
}
function xu(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var Up = jt.ReactCurrentBatchConfig;
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Yl = un(null),
  Kl = null,
  $n = null,
  wu = null;
function Cu() {
  wu = $n = Kl = null;
}
function ku(e) {
  var t = Yl.current;
  ce(Yl), (e._currentValue = t);
}
function Ri(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  (Kl = e),
    (wu = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (Kl === null) throw Error(k(308));
      ($n = e), (Kl.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var mn = null;
function Su(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function Lc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Su(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Dt = !1;
function _u(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Pc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Su(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
function Rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xl(e, t, n, r) {
  var l = e.updateQueue;
  Dt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), i === null ? (o = f) : (i.next = f), (i = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== i &&
        (u === null ? (v.firstBaseUpdate = f) : (u.next = f),
        (v.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (v = f = s = null), (u = o);
    do {
      var m = u.lane,
        p = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: p,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((m = t), (p = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                h = w.call(p, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (m = typeof w == "function" ? w.call(p, h, m) : w),
                m == null)
              )
                break e;
              h = he({}, h, m);
              break e;
            case 2:
              Dt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (p = {
          eventTime: p,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((f = v = p), (s = h)) : (v = v.next = p),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Sn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function zs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Tc = new La.Component().refs;
function zi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var mo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      l = Jt(e),
      o = Tt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, l)),
      t !== null && (mt(t, e, l, r), Ll(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      l = Jt(e),
      o = Tt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, l)),
      t !== null && (mt(t, e, l, r), Ll(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = Jt(e),
      l = Tt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Xt(e, l, r)),
      t !== null && (mt(t, e, r, n), Ll(t, e, r));
  },
};
function js(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ar(n, r) || !Ar(l, o)
      : !0
  );
}
function Fc(e, t, n) {
  var r = !1,
    l = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ut(o))
      : ((l = Ve(t) ? wn : Ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jn(e, l) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = mo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Is(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && mo.enqueueReplaceState(t, t.state, null);
}
function ji(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Tc), _u(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ut(o))
    : ((o = Ve(t) ? wn : Ie.current), (l.context = Jn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (zi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && mo.enqueueReplaceState(l, l.state, null),
      Xl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Tc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function yl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ms(e) {
  var t = e._init;
  return t(e._payload);
}
function Oc(e) {
  function t(a, c) {
    if (e) {
      var d = a.deletions;
      d === null ? ((a.deletions = [c]), (a.flags |= 16)) : d.push(c);
    }
  }
  function n(a, c) {
    if (!e) return null;
    for (; c !== null; ) t(a, c), (c = c.sibling);
    return null;
  }
  function r(a, c) {
    for (a = new Map(); c !== null; )
      c.key !== null ? a.set(c.key, c) : a.set(c.index, c), (c = c.sibling);
    return a;
  }
  function l(a, c) {
    return (a = qt(a, c)), (a.index = 0), (a.sibling = null), a;
  }
  function o(a, c, d) {
    return (
      (a.index = d),
      e
        ? ((d = a.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((a.flags |= 2), c) : d)
            : ((a.flags |= 2), c))
        : ((a.flags |= 1048576), c)
    );
  }
  function i(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function u(a, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = Jo(d, a.mode, g)), (c.return = a), c)
      : ((c = l(c, d)), (c.return = a), c);
  }
  function s(a, c, d, g) {
    var _ = d.type;
    return _ === Tn
      ? v(a, c, d.props.children, g, d.key)
      : c !== null &&
        (c.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === At &&
            Ms(_) === c.type))
      ? ((g = l(c, d.props)), (g.ref = dr(a, c, d)), (g.return = a), g)
      : ((g = zl(d.type, d.key, d.props, null, a.mode, g)),
        (g.ref = dr(a, c, d)),
        (g.return = a),
        g);
  }
  function f(a, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = qo(d, a.mode, g)), (c.return = a), c)
      : ((c = l(c, d.children || [])), (c.return = a), c);
  }
  function v(a, c, d, g, _) {
    return c === null || c.tag !== 7
      ? ((c = vn(d, a.mode, g, _)), (c.return = a), c)
      : ((c = l(c, d)), (c.return = a), c);
  }
  function h(a, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Jo("" + c, a.mode, d)), (c.return = a), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ol:
          return (
            (d = zl(c.type, c.key, c.props, null, a.mode, d)),
            (d.ref = dr(a, null, c)),
            (d.return = a),
            d
          );
        case Pn:
          return (c = qo(c, a.mode, d)), (c.return = a), c;
        case At:
          var g = c._init;
          return h(a, g(c._payload), d);
      }
      if (yr(c) || ur(c))
        return (c = vn(c, a.mode, d, null)), (c.return = a), c;
      yl(a, c);
    }
    return null;
  }
  function m(a, c, d, g) {
    var _ = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return _ !== null ? null : u(a, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ol:
          return d.key === _ ? s(a, c, d, g) : null;
        case Pn:
          return d.key === _ ? f(a, c, d, g) : null;
        case At:
          return (_ = d._init), m(a, c, _(d._payload), g);
      }
      if (yr(d) || ur(d)) return _ !== null ? null : v(a, c, d, g, null);
      yl(a, d);
    }
    return null;
  }
  function p(a, c, d, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (a = a.get(d) || null), u(c, a, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ol:
          return (a = a.get(g.key === null ? d : g.key) || null), s(c, a, g, _);
        case Pn:
          return (a = a.get(g.key === null ? d : g.key) || null), f(c, a, g, _);
        case At:
          var N = g._init;
          return p(a, c, d, N(g._payload), _);
      }
      if (yr(g) || ur(g)) return (a = a.get(d) || null), v(c, a, g, _, null);
      yl(c, g);
    }
    return null;
  }
  function w(a, c, d, g) {
    for (
      var _ = null, N = null, S = c, L = (c = 0), H = null;
      S !== null && L < d.length;
      L++
    ) {
      S.index > L ? ((H = S), (S = null)) : (H = S.sibling);
      var R = m(a, S, d[L], g);
      if (R === null) {
        S === null && (S = H);
        break;
      }
      e && S && R.alternate === null && t(a, S),
        (c = o(R, c, L)),
        N === null ? (_ = R) : (N.sibling = R),
        (N = R),
        (S = H);
    }
    if (L === d.length) return n(a, S), fe && fn(a, L), _;
    if (S === null) {
      for (; L < d.length; L++)
        (S = h(a, d[L], g)),
          S !== null &&
            ((c = o(S, c, L)), N === null ? (_ = S) : (N.sibling = S), (N = S));
      return fe && fn(a, L), _;
    }
    for (S = r(a, S); L < d.length; L++)
      (H = p(S, a, L, d[L], g)),
        H !== null &&
          (e && H.alternate !== null && S.delete(H.key === null ? L : H.key),
          (c = o(H, c, L)),
          N === null ? (_ = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        S.forEach(function (B) {
          return t(a, B);
        }),
      fe && fn(a, L),
      _
    );
  }
  function y(a, c, d, g) {
    var _ = ur(d);
    if (typeof _ != "function") throw Error(k(150));
    if (((d = _.call(d)), d == null)) throw Error(k(151));
    for (
      var N = (_ = null), S = c, L = (c = 0), H = null, R = d.next();
      S !== null && !R.done;
      L++, R = d.next()
    ) {
      S.index > L ? ((H = S), (S = null)) : (H = S.sibling);
      var B = m(a, S, R.value, g);
      if (B === null) {
        S === null && (S = H);
        break;
      }
      e && S && B.alternate === null && t(a, S),
        (c = o(B, c, L)),
        N === null ? (_ = B) : (N.sibling = B),
        (N = B),
        (S = H);
    }
    if (R.done) return n(a, S), fe && fn(a, L), _;
    if (S === null) {
      for (; !R.done; L++, R = d.next())
        (R = h(a, R.value, g)),
          R !== null &&
            ((c = o(R, c, L)), N === null ? (_ = R) : (N.sibling = R), (N = R));
      return fe && fn(a, L), _;
    }
    for (S = r(a, S); !R.done; L++, R = d.next())
      (R = p(S, a, L, R.value, g)),
        R !== null &&
          (e && R.alternate !== null && S.delete(R.key === null ? L : R.key),
          (c = o(R, c, L)),
          N === null ? (_ = R) : (N.sibling = R),
          (N = R));
    return (
      e &&
        S.forEach(function (X) {
          return t(a, X);
        }),
      fe && fn(a, L),
      _
    );
  }
  function P(a, c, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Tn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ol:
          e: {
            for (var _ = d.key, N = c; N !== null; ) {
              if (N.key === _) {
                if (((_ = d.type), _ === Tn)) {
                  if (N.tag === 7) {
                    n(a, N.sibling),
                      (c = l(N, d.props.children)),
                      (c.return = a),
                      (a = c);
                    break e;
                  }
                } else if (
                  N.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === At &&
                    Ms(_) === N.type)
                ) {
                  n(a, N.sibling),
                    (c = l(N, d.props)),
                    (c.ref = dr(a, N, d)),
                    (c.return = a),
                    (a = c);
                  break e;
                }
                n(a, N);
                break;
              } else t(a, N);
              N = N.sibling;
            }
            d.type === Tn
              ? ((c = vn(d.props.children, a.mode, g, d.key)),
                (c.return = a),
                (a = c))
              : ((g = zl(d.type, d.key, d.props, null, a.mode, g)),
                (g.ref = dr(a, c, d)),
                (g.return = a),
                (a = g));
          }
          return i(a);
        case Pn:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(a, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = a),
                    (a = c);
                  break e;
                } else {
                  n(a, c);
                  break;
                }
              else t(a, c);
              c = c.sibling;
            }
            (c = qo(d, a.mode, g)), (c.return = a), (a = c);
          }
          return i(a);
        case At:
          return (N = d._init), P(a, c, N(d._payload), g);
      }
      if (yr(d)) return w(a, c, d, g);
      if (ur(d)) return y(a, c, d, g);
      yl(a, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(a, c.sibling), (c = l(c, d)), (c.return = a), (a = c))
          : (n(a, c), (c = Jo(d, a.mode, g)), (c.return = a), (a = c)),
        i(a))
      : n(a, c);
  }
  return P;
}
var bn = Oc(!0),
  Rc = Oc(!1),
  el = {},
  Ct = un(el),
  Wr = un(el),
  Hr = un(el);
function hn(e) {
  if (e === el) throw Error(k(174));
  return e;
}
function Eu(e, t) {
  switch ((se(Hr, t), se(Wr, e), se(Ct, el), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : di(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = di(t, e));
  }
  ce(Ct), se(Ct, t);
}
function er() {
  ce(Ct), ce(Wr), ce(Hr);
}
function zc(e) {
  hn(Hr.current);
  var t = hn(Ct.current),
    n = di(t, e.type);
  t !== n && (se(Wr, e), se(Ct, n));
}
function Nu(e) {
  Wr.current === e && (ce(Ct), ce(Wr));
}
var pe = un(0);
function Gl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Qo = [];
function Lu() {
  for (var e = 0; e < Qo.length; e++)
    Qo[e]._workInProgressVersionPrimary = null;
  Qo.length = 0;
}
var Pl = jt.ReactCurrentDispatcher,
  Zo = jt.ReactCurrentBatchConfig,
  kn = 0,
  me = null,
  we = null,
  Ee = null,
  Jl = !1,
  _r = !1,
  Vr = 0,
  Wp = 0;
function Oe() {
  throw Error(k(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, l, o) {
  if (
    ((kn = o),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pl.current = e === null || e.memoizedState === null ? Zp : Yp),
    (e = n(r, l)),
    _r)
  ) {
    o = 0;
    do {
      if (((_r = !1), (Vr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (Ee = we = null),
        (t.updateQueue = null),
        (Pl.current = Kp),
        (e = n(r, l));
    } while (_r);
  }
  if (
    ((Pl.current = ql),
    (t = we !== null && we.next !== null),
    (kn = 0),
    (Ee = we = me = null),
    (Jl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Fu() {
  var e = Vr !== 0;
  return (Vr = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (me.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function st() {
  if (we === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Ee === null ? me.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (we = e);
  else {
    if (e === null) throw Error(k(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Ee === null ? (me.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yo(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = we,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      f = o;
    do {
      var v = f.lane;
      if ((kn & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var h = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (me.lanes |= v),
          (Sn |= v);
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? (i = r) : (s.next = u),
      ht(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (me.lanes |= o), (Sn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ko(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ht(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function jc() {}
function Ic(e, t) {
  var n = me,
    r = st(),
    l = t(),
    o = !ht(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (We = !0)),
    (r = r.queue),
    Ou(Ac.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, $c.bind(null, n, r, l, t), void 0, null),
      Ne === null)
    )
      throw Error(k(349));
    kn & 30 || Mc(n, t, l);
  }
  return l;
}
function Mc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $c(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dc(t) && Bc(e);
}
function Ac(e, t, n) {
  return n(function () {
    Dc(t) && Bc(e);
  });
}
function Dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Bc(e) {
  var t = Rt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function $s(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qp.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Uc() {
  return st().memoizedState;
}
function Tl(e, t, n, r) {
  var l = vt();
  (me.flags |= e),
    (l.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ho(e, t, n, r) {
  var l = st();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var i = we.memoizedState;
    if (((o = i.destroy), r !== null && Pu(r, i.deps))) {
      l.memoizedState = Zr(t, n, o, r);
      return;
    }
  }
  (me.flags |= e), (l.memoizedState = Zr(1 | t, n, o, r));
}
function As(e, t) {
  return Tl(8390656, 8, e, t);
}
function Ou(e, t) {
  return ho(2048, 8, e, t);
}
function Wc(e, t) {
  return ho(4, 2, e, t);
}
function Hc(e, t) {
  return ho(4, 4, e, t);
}
function Vc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ho(4, 4, Vc.bind(null, t, e), n)
  );
}
function Ru() {}
function Zc(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yc(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Kc(e, t, n) {
  return kn & 21
    ? (ht(n, t) || ((n = Ja()), (me.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function Hp(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (Zo.transition = r);
  }
}
function Xc() {
  return st().memoizedState;
}
function Vp(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gc(e))
  )
    Jc(t, n);
  else if (((n = Lc(e, t, n, r)), n !== null)) {
    var l = $e();
    mt(n, e, r, l), qc(n, t, r);
  }
}
function Qp(e, t, n) {
  var r = Jt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gc(e)) Jc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), ht(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Su(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Lc(e, t, l, r)),
      n !== null && ((l = $e()), mt(n, e, r, l), qc(n, t, r));
  }
}
function Gc(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function Jc(e, t) {
  _r = Jl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function qc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
var ql = {
    readContext: ut,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  Zp = {
    readContext: ut,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: As,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Tl(4194308, 4, Vc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vp.bind(null, me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $s,
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = $s(!1),
        t = e[0];
      return (e = Hp.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        l = vt();
      if (fe) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(k(349));
        kn & 30 || Mc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        As(Ac.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Zr(9, $c.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = Ne.identifierPrefix;
      if (fe) {
        var n = Pt,
          r = Lt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Wp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: ut,
    useCallback: Zc,
    useContext: ut,
    useEffect: Ou,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Hc,
    useMemo: Yc,
    useReducer: Yo,
    useRef: Uc,
    useState: function () {
      return Yo(Qr);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      var t = st();
      return Kc(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Yo(Qr)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: jc,
    useSyncExternalStore: Ic,
    useId: Xc,
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: ut,
    useCallback: Zc,
    useContext: ut,
    useEffect: Ou,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Hc,
    useMemo: Yc,
    useReducer: Ko,
    useRef: Uc,
    useState: function () {
      return Ko(Qr);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      var t = st();
      return we === null ? (t.memoizedState = e) : Kc(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Ko(Qr)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: jc,
    useSyncExternalStore: Ic,
    useId: Xc,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += kd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ii(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xp = typeof WeakMap == "function" ? WeakMap : Map;
function bc(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      eo || ((eo = !0), (Qi = r)), Ii(e, t);
    }),
    n
  );
}
function ef(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ii(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ii(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ds(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = a1.bind(null, e, t, n)), t.then(e, e));
}
function Bs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Us(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gp = jt.ReactCurrentOwner,
  We = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Rc(t, null, n, r) : bn(t, e.child, n, r);
}
function Ws(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Yn(t, l),
    (r = Tu(e, t, n, r, o, l)),
    (n = Fu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (fe && n && vu(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  );
}
function Hs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Bu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), tf(e, t, o, r, l))
      : ((e = zl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ar), n(i, r) && e.ref === t.ref)
    )
      return zt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = qt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ar(o, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), zt(e, t, l);
  }
  return Mi(e, t, n, r, l);
}
function nf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(Dn, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(Dn, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        se(Dn, Xe),
        (Xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(Dn, Xe),
      (Xe |= r);
  return Me(e, t, l, n), t.child;
}
function rf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mi(e, t, n, r, l) {
  var o = Ve(n) ? wn : Ie.current;
  return (
    (o = Jn(t, o)),
    Yn(t, l),
    (n = Tu(e, t, n, r, o, l)),
    (r = Fu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (fe && r && vu(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  );
}
function Vs(e, t, n, r, l) {
  if (Ve(n)) {
    var o = !0;
    Vl(t);
  } else o = !1;
  if ((Yn(t, l), t.stateNode === null))
    Fl(e, t), Fc(t, n, r), ji(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = ut(f))
      : ((f = Ve(n) ? wn : Ie.current), (f = Jn(t, f)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && Is(t, i, r, f)),
      (Dt = !1);
    var m = t.memoizedState;
    (i.state = m),
      Xl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || He.current || Dt
        ? (typeof v == "function" && (zi(t, n, v, r), (s = t.memoizedState)),
          (u = Dt || js(t, n, u, r, m, s, f))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = f),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Pc(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : ct(t.type, u)),
      (i.props = f),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ut(s))
        : ((s = Ve(n) ? wn : Ie.current), (s = Jn(t, s)));
    var p = n.getDerivedStateFromProps;
    (v =
      typeof p == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && Is(t, i, r, s)),
      (Dt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Xl(t, r, i, l);
    var w = t.memoizedState;
    u !== h || m !== w || He.current || Dt
      ? (typeof p == "function" && (zi(t, n, p, r), (w = t.memoizedState)),
        (f = Dt || js(t, n, f, r, m, w, s) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $i(e, t, n, r, o, l);
}
function $i(e, t, n, r, l, o) {
  rf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ts(t, n, !1), zt(e, t, o);
  (r = t.stateNode), (Gp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = bn(t, e.child, null, o)), (t.child = bn(t, null, u, o)))
      : Me(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ts(t, n, !0),
    t.child
  );
}
function lf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ps(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ps(e, t.context, !1),
    Eu(e, t.containerInfo);
}
function Qs(e, t, n, r, l) {
  return qn(), xu(l), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var Ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function of(e, t, n) {
  var r = t.pendingProps,
    l = pe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    se(pe, l & 1),
    e === null)
  )
    return (
      Oi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = go(i, r, 0, null)),
              (e = vn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Di(n)),
              (t.memoizedState = Ai),
              e)
            : zu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Jp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = qt(u, o)) : ((o = vn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Di(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ai),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = qt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zu(e, t) {
  return (
    (t = go({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vl(e, t, n, r) {
  return (
    r !== null && xu(r),
    bn(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xo(Error(k(422)))), vl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = go({ mode: "visible", children: r.children }, l, 0, null)),
        (o = vn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && bn(t, e.child, null, i),
        (t.child.memoizedState = Di(i)),
        (t.memoizedState = Ai),
        o);
  if (!(t.mode & 1)) return vl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = Xo(o, r, void 0)), vl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), We || u)) {
    if (((r = Ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Rt(e, l), mt(r, e, l, -1));
    }
    return Du(), (r = Xo(Error(k(421)))), vl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = c1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ge = Kt(l.nextSibling)),
      (Je = t),
      (fe = !0),
      (dt = null),
      e !== null &&
        ((nt[rt++] = Lt),
        (nt[rt++] = Pt),
        (nt[rt++] = Cn),
        (Lt = e.id),
        (Pt = e.overflow),
        (Cn = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ri(e.return, t, n);
}
function Go(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function uf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Me(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
        else if (e.tag === 19) Zs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Go(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Go(t, !0, n, null, o);
        break;
      case "together":
        Go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qp(e, t, n) {
  switch (t.tag) {
    case 3:
      lf(t), qn();
      break;
    case 5:
      zc(t);
      break;
    case 1:
      Ve(t.type) && Vl(t);
      break;
    case 4:
      Eu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      se(Yl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? of(e, t, n)
          : (se(pe, pe.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      se(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        se(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nf(e, t, n);
  }
  return zt(e, t, n);
}
var sf, Bi, af, cf;
sf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bi = function () {};
af = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), hn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        (l = si(e, l)), (r = si(e, r)), (o = []);
        break;
      case "select":
        (l = he({}, l, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = fi(e, l)), (r = fi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wl);
    }
    pi(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Or.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Or.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && ae("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
cf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bp(e, t, n) {
  var r = t.pendingProps;
  switch ((gu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return Ve(t.type) && Hl(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        ce(He),
        ce(Ie),
        Lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dt !== null && (Ki(dt), (dt = null)))),
        Bi(e, t),
        Re(t),
        null
      );
    case 5:
      Nu(t);
      var l = hn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        af(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Re(t), null;
        }
        if (((e = hn(Ct.current)), hl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[xt] = t), (r[Ur] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < gr.length; l++) ae(gr[l], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              ts(r, o), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              rs(r, o), ae("invalid", r);
          }
          pi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      ml(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      ml(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Or.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              il(r), ns(r, o, !0);
              break;
            case "textarea":
              il(r), ls(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ma(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[xt] = t),
            (e[Ur] = r),
            sf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = mi(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < gr.length; l++) ae(gr[l], e);
                l = r;
                break;
              case "source":
                ae("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (l = r);
                break;
              case "details":
                ae("toggle", e), (l = r);
                break;
              case "input":
                ts(e, r), (l = si(e, r)), ae("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = he({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                rs(e, r), (l = fi(e, r)), ae("invalid", e);
                break;
              default:
                l = r;
            }
            pi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Da(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && $a(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rr(e, s)
                    : typeof s == "number" && Rr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Or.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && ae("scroll", e)
                      : s != null && ru(e, o, s, i));
              }
            switch (n) {
              case "input":
                il(e), ns(e, r, !1);
                break;
              case "textarea":
                il(e), ls(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Hn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) cf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = hn(Hr.current)), hn(Ct.current), hl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (o = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                ml(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ml(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (ce(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && Ge !== null && t.mode & 1 && !(t.flags & 128))
          Nc(), qn(), (t.flags |= 98560), (o = !1);
        else if (((o = hl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[xt] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (o = !1);
        } else dt !== null && (Ki(dt), (dt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Ce === 0 && (Ce = 3) : Du())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        er(), Bi(e, t), e === null && Dr(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return ku(t.type._context), Re(t), null;
    case 17:
      return Ve(t.type) && Hl(), Re(t), null;
    case 19:
      if ((ce(pe), (o = t.memoizedState), o === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) pr(o, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Gl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    pr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(pe, (pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ge() > nr &&
            ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !fe)
            )
              return Re(t), null;
          } else
            2 * ge() - o.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ge()),
          (t.sibling = null),
          (n = pe.current),
          se(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        Au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function e1(e, t) {
  switch ((gu(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && Hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        ce(He),
        ce(Ie),
        Lu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nu(t), null;
    case 13:
      if (
        (ce(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(k(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(pe), null;
    case 4:
      return er(), null;
    case 10:
      return ku(t.type._context), null;
    case 22:
    case 23:
      return Au(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gl = !1,
  je = !1,
  t1 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Ui(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var Ys = !1;
function n1(e, t) {
  if (((_i = Dl), (e = pc()), yu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            f = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var p;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (p = h.firstChild) !== null;

            )
              (m = h), (h = p);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++f === l && (u = i),
                m === o && ++v === r && (s = i),
                (p = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = p;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ei = { focusedElem: e, selectionRange: n }, Dl = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    P = w.memoizedState,
                    a = t.stateNode,
                    c = a.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ct(t.type, y),
                      P
                    );
                  a.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (g) {
          ve(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (w = Ys), (Ys = !1), w;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ui(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Wi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ff(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ff(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[Ur], delete t[Pi], delete t[Ap], delete t[Dp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function df(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ks(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || df(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hi(e, t, n), e = e.sibling; e !== null; ) Hi(e, t, n), (e = e.sibling);
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), (e = e.sibling);
}
var Pe = null,
  ft = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) pf(e, t, n), (n = n.sibling);
}
function pf(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(uo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || An(n, t);
    case 6:
      var r = Pe,
        l = ft;
      (Pe = null),
        Mt(e, t, n),
        (Pe = r),
        (ft = l),
        Pe !== null &&
          (ft
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (ft
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ho(e.parentNode, n)
              : e.nodeType === 1 && Ho(e, n),
            Mr(e))
          : Ho(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (l = ft),
        (Pe = n.stateNode.containerInfo),
        (ft = !0),
        Mt(e, t, n),
        (Pe = r),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ui(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ve(n, t, u);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Mt(e, t, n), (je = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function Xs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new t1()),
      t.forEach(function (r) {
        var l = f1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Pe = u.stateNode), (ft = !1);
              break e;
            case 3:
              (Pe = u.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Pe = u.stateNode.containerInfo), (ft = !0);
              break e;
          }
          u = u.return;
        }
        if (Pe === null) throw Error(k(160));
        pf(o, i, l), (Pe = null), (ft = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        ve(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mf(t, e), (t = t.sibling);
}
function mf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), yt(e), r & 4)) {
        try {
          Er(3, e, e.return), yo(3, e);
        } catch (y) {
          ve(e, e.return, y);
        }
        try {
          Er(5, e, e.return);
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 1:
      at(t, e), yt(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (at(t, e),
        yt(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rr(l, "");
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ja(l, o),
              mi(u, i);
            var f = mi(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i],
                h = s[i + 1];
              v === "style"
                ? Da(l, h)
                : v === "dangerouslySetInnerHTML"
                ? $a(l, h)
                : v === "children"
                ? Rr(l, h)
                : ru(l, v, h, f);
            }
            switch (u) {
              case "input":
                ai(l, o);
                break;
              case "textarea":
                Ia(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Hn(l, !!o.multiple, p, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Hn(l, !!o.multiple, o.defaultValue, !0)
                      : Hn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ur] = o;
          } catch (y) {
            ve(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((at(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mr(t.containerInfo);
        } catch (y) {
          ve(e, e.return, y);
        }
      break;
    case 4:
      at(t, e), yt(e);
      break;
    case 13:
      at(t, e),
        yt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Mu = ge())),
        r & 4 && Xs(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (f = je) || v), at(t, e), (je = f)) : at(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !v && e.mode & 1)
        )
          for (O = e, v = e.child; v !== null; ) {
            for (h = O = v; O !== null; ) {
              switch (((m = O), (p = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, m, m.return);
                  break;
                case 1:
                  An(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      ve(r, n, y);
                    }
                  }
                  break;
                case 5:
                  An(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Js(h);
                    continue;
                  }
              }
              p !== null ? ((p.return = m), (O = p)) : Js(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Aa("display", i)));
              } catch (y) {
                ve(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = f ? "" : h.memoizedProps;
              } catch (y) {
                ve(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      at(t, e), yt(e), r & 4 && Xs(e);
      break;
    case 21:
      break;
    default:
      at(t, e), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (df(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rr(l, ""), (r.flags &= -33));
          var o = Ks(e);
          Vi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ks(e);
          Hi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      ve(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function r1(e, t, n) {
  (O = e), hf(e);
}
function hf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || gl;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || je;
        u = gl;
        var f = je;
        if (((gl = i), (je = s) && !f))
          for (O = l; O !== null; )
            (i = O),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? qs(l)
                : s !== null
                ? ((s.return = i), (O = s))
                : qs(l);
        for (; o !== null; ) (O = o), hf(o), (o = o.sibling);
        (O = l), (gl = u), (je = f);
      }
      Gs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (O = o)) : Gs(e);
  }
}
function Gs(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && zs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Mr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        je || (t.flags & 512 && Wi(t));
      } catch (m) {
        ve(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Js(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function qs(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yo(4, t);
          } catch (s) {
            ve(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ve(t, l, s);
            }
          }
          var o = t.return;
          try {
            Wi(t);
          } catch (s) {
            ve(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Wi(t);
          } catch (s) {
            ve(t, i, s);
          }
      }
    } catch (s) {
      ve(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (O = u);
      break;
    }
    O = t.return;
  }
}
var l1 = Math.ceil,
  bl = jt.ReactCurrentDispatcher,
  ju = jt.ReactCurrentOwner,
  it = jt.ReactCurrentBatchConfig,
  te = 0,
  Ne = null,
  xe = null,
  Te = 0,
  Xe = 0,
  Dn = un(0),
  Ce = 0,
  Yr = null,
  Sn = 0,
  vo = 0,
  Iu = 0,
  Nr = null,
  Ue = null,
  Mu = 0,
  nr = 1 / 0,
  Et = null,
  eo = !1,
  Qi = null,
  Gt = null,
  xl = !1,
  Ht = null,
  to = 0,
  Lr = 0,
  Zi = null,
  Ol = -1,
  Rl = 0;
function $e() {
  return te & 6 ? ge() : Ol !== -1 ? Ol : (Ol = ge());
}
function Jt(e) {
  return e.mode & 1
    ? te & 2 && Te !== 0
      ? Te & -Te
      : Up.transition !== null
      ? (Rl === 0 && (Rl = Ja()), Rl)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lc(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Zi = null), Error(k(185)));
  Jr(e, n, r),
    (!(te & 2) || e !== Ne) &&
      (e === Ne && (!(te & 2) && (vo |= n), Ce === 4 && Ut(e, Te)),
      Qe(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((nr = ge() + 500), po && sn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  Ud(e, t);
  var r = Al(e, e === Ne ? Te : 0);
  if (r === 0)
    n !== null && us(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && us(n), t === 1))
      e.tag === 0 ? Bp(bs.bind(null, e)) : Sc(bs.bind(null, e)),
        Mp(function () {
          !(te & 6) && sn();
        }),
        (n = null);
    else {
      switch (qa(r)) {
        case 1:
          n = su;
          break;
        case 4:
          n = Xa;
          break;
        case 16:
          n = $l;
          break;
        case 536870912:
          n = Ga;
          break;
        default:
          n = $l;
      }
      n = Sf(n, yf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yf(e, t) {
  if (((Ol = -1), (Rl = 0), te & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Al(e, e === Ne ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
  else {
    t = r;
    var l = te;
    te |= 2;
    var o = gf();
    (Ne !== e || Te !== t) && ((Et = null), (nr = ge() + 500), yn(e, t));
    do
      try {
        u1();
        break;
      } catch (u) {
        vf(e, u);
      }
    while (1);
    Cu(),
      (bl.current = o),
      (te = l),
      xe !== null ? (t = 0) : ((Ne = null), (Te = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = xi(e)), l !== 0 && ((r = l), (t = Yi(e, l)))), t === 1)
    )
      throw ((n = Yr), yn(e, 0), Ut(e, r), Qe(e, ge()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !o1(l) &&
          ((t = no(e, r)),
          t === 2 && ((o = xi(e)), o !== 0 && ((r = o), (t = Yi(e, o)))),
          t === 1))
      )
        throw ((n = Yr), yn(e, 0), Ut(e, r), Qe(e, ge()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          dn(e, Ue, Et);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = Mu + 500 - ge()), 10 < t))
          ) {
            if (Al(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Li(dn.bind(null, e, Ue, Et), t);
            break;
          }
          dn(e, Ue, Et);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * l1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Li(dn.bind(null, e, Ue, Et), r);
            break;
          }
          dn(e, Ue, Et);
          break;
        case 5:
          dn(e, Ue, Et);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Qe(e, ge()), e.callbackNode === n ? yf.bind(null, e) : null;
}
function Yi(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = no(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Ki(t)),
    e
  );
}
function Ki(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function o1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~Iu,
      t &= ~vo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bs(e) {
  if (te & 6) throw Error(k(327));
  Kn();
  var t = Al(e, 0);
  if (!(t & 1)) return Qe(e, ge()), null;
  var n = no(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xi(e);
    r !== 0 && ((t = r), (n = Yi(e, r)));
  }
  if (n === 1) throw ((n = Yr), yn(e, 0), Ut(e, t), Qe(e, ge()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Ue, Et),
    Qe(e, ge()),
    null
  );
}
function $u(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((nr = ge() + 500), po && sn());
  }
}
function _n(e) {
  Ht !== null && Ht.tag === 0 && !(te & 6) && Kn();
  var t = te;
  te |= 1;
  var n = it.transition,
    r = ie;
  try {
    if (((it.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (it.transition = n), (te = t), !(te & 6) && sn();
  }
}
function Au() {
  (Xe = Dn.current), ce(Dn);
}
function yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ip(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((gu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hl();
          break;
        case 3:
          er(), ce(He), ce(Ie), Lu();
          break;
        case 5:
          Nu(r);
          break;
        case 4:
          er();
          break;
        case 13:
          ce(pe);
          break;
        case 19:
          ce(pe);
          break;
        case 10:
          ku(r.type._context);
          break;
        case 22:
        case 23:
          Au();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (xe = e = qt(e.current, null)),
    (Te = Xe = t),
    (Ce = 0),
    (Yr = null),
    (Iu = vo = Sn = 0),
    (Ue = Nr = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function vf(e, t) {
  do {
    var n = xe;
    try {
      if ((Cu(), (Pl.current = ql), Jl)) {
        for (var r = me.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jl = !1;
      }
      if (
        ((kn = 0),
        (Ee = we = me = null),
        (_r = !1),
        (Vr = 0),
        (ju.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (Yr = t), (xe = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = Te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var p = Bs(i);
          if (p !== null) {
            (p.flags &= -257),
              Us(p, i, u, o, t),
              p.mode & 1 && Ds(o, f, t),
              (t = p),
              (s = f);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ds(o, f, t), Du();
              break e;
            }
            s = Error(k(426));
          }
        } else if (fe && u.mode & 1) {
          var P = Bs(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Us(P, i, u, o, t),
              xu(tr(s, u));
            break e;
          }
        }
        (o = s = tr(s, u)),
          Ce !== 4 && (Ce = 2),
          Nr === null ? (Nr = [o]) : Nr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var a = bc(o, s, t);
              Rs(o, a);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = ef(o, u, t);
                Rs(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wf(n);
    } catch (_) {
      (t = _), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function gf() {
  var e = bl.current;
  return (bl.current = ql), e === null ? ql : e;
}
function Du() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Ne === null || (!(Sn & 268435455) && !(vo & 268435455)) || Ut(Ne, Te);
}
function no(e, t) {
  var n = te;
  te |= 2;
  var r = gf();
  (Ne !== e || Te !== t) && ((Et = null), yn(e, t));
  do
    try {
      i1();
      break;
    } catch (l) {
      vf(e, l);
    }
  while (1);
  if ((Cu(), (te = n), (bl.current = r), xe !== null)) throw Error(k(261));
  return (Ne = null), (Te = 0), Ce;
}
function i1() {
  for (; xe !== null; ) xf(xe);
}
function u1() {
  for (; xe !== null && !Rd(); ) xf(xe);
}
function xf(e) {
  var t = kf(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? wf(e) : (xe = t),
    (ju.current = null);
}
function wf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = e1(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (xe = null);
        return;
      }
    } else if (((n = bp(n, t, Xe)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function dn(e, t, n) {
  var r = ie,
    l = it.transition;
  try {
    (it.transition = null), (ie = 1), s1(e, t, n, r);
  } finally {
    (it.transition = l), (ie = r);
  }
  return null;
}
function s1(e, t, n, r) {
  do Kn();
  while (Ht !== null);
  if (te & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Wd(e, o),
    e === Ne && ((xe = Ne = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xl ||
      ((xl = !0),
      Sf($l, function () {
        return Kn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = it.transition), (it.transition = null);
    var i = ie;
    ie = 1;
    var u = te;
    (te |= 4),
      (ju.current = null),
      n1(e, n),
      mf(n, e),
      Pp(Ei),
      (Dl = !!_i),
      (Ei = _i = null),
      (e.current = n),
      r1(n),
      zd(),
      (te = u),
      (ie = i),
      (it.transition = o);
  } else e.current = n;
  if (
    (xl && ((xl = !1), (Ht = e), (to = l)),
    (o = e.pendingLanes),
    o === 0 && (Gt = null),
    Md(n.stateNode),
    Qe(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (eo) throw ((eo = !1), (e = Qi), (Qi = null), e);
  return (
    to & 1 && e.tag !== 0 && Kn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Zi ? Lr++ : ((Lr = 0), (Zi = e))) : (Lr = 0),
    sn(),
    null
  );
}
function Kn() {
  if (Ht !== null) {
    var e = qa(to),
      t = it.transition,
      n = ie;
    try {
      if (((it.transition = null), (ie = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (to = 0), te & 6)) throw Error(k(331));
        var l = te;
        for (te |= 4, O = e.current; O !== null; ) {
          var o = O,
            i = o.child;
          if (O.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (O = f; O !== null; ) {
                  var v = O;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (O = h);
                  else
                    for (; O !== null; ) {
                      v = O;
                      var m = v.sibling,
                        p = v.return;
                      if ((ff(v), v === f)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = p), (O = m);
                        break;
                      }
                      O = p;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var P = y.sibling;
                    (y.sibling = null), (y = P);
                  } while (y !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (O = i);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var a = o.sibling;
              if (a !== null) {
                (a.return = o.return), (O = a);
                break e;
              }
              O = o.return;
            }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          i = O;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (O = d);
          else
            e: for (i = c; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(9, u);
                  }
                } catch (_) {
                  ve(u, u.return, _);
                }
              if (u === i) {
                O = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (O = g);
                break e;
              }
              O = u.return;
            }
        }
        if (
          ((te = l), sn(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(uo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (it.transition = t);
    }
  }
  return !1;
}
function ea(e, t, n) {
  (t = tr(n, t)),
    (t = bc(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = $e()),
    e !== null && (Jr(e, 1, t), Qe(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) ea(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ea(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = ef(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = $e()),
            t !== null && (Jr(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function a1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (Te & n) === n &&
      (Ce === 4 || (Ce === 3 && (Te & 130023424) === Te && 500 > ge() - Mu)
        ? yn(e, 0)
        : (Iu |= n)),
    Qe(e, t);
}
function Cf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = al), (al <<= 1), !(al & 130023424) && (al = 4194304))
      : (t = 1));
  var n = $e();
  (e = Rt(e, t)), e !== null && (Jr(e, t, n), Qe(e, n));
}
function c1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cf(e, n);
}
function f1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Cf(e, n);
}
var kf;
kf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), qp(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), fe && t.flags & 1048576 && _c(t, Zl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fl(e, t), (e = t.pendingProps);
      var l = Jn(t, Ie.current);
      Yn(t, n), (l = Tu(null, t, r, e, l, n));
      var o = Fu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), Vl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _u(t),
            (l.updater = mo),
            (t.stateNode = l),
            (l._reactInternals = t),
            ji(t, r, e, n),
            (t = $i(null, t, r, !0, o, n)))
          : ((t.tag = 0), fe && o && vu(t), Me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = p1(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = Mi(null, t, r, e, n);
            break e;
          case 1:
            t = Vs(null, t, r, e, n);
            break e;
          case 11:
            t = Ws(null, t, r, e, n);
            break e;
          case 14:
            t = Hs(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Mi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Vs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((lf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Pc(e, t),
          Xl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = tr(Error(k(423)), t)), (t = Qs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tr(Error(k(424)), t)), (t = Qs(e, t, r, n, l));
            break e;
          } else
            for (
              Ge = Kt(t.stateNode.containerInfo.firstChild),
                Je = t,
                fe = !0,
                dt = null,
                n = Rc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === l)) {
            t = zt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zc(t),
        e === null && Oi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ni(r, l) ? (i = null) : o !== null && Ni(r, o) && (t.flags |= 32),
        rf(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Oi(t), null;
    case 13:
      return of(e, t, n);
    case 4:
      return (
        Eu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Ws(e, t, r, l, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          se(Yl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ht(o.value, i)) {
            if (o.children === l.children && !He.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Tt(-1, n & -n)), (s.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (f.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ri(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ri(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (l = ut(l)),
        (r = r(l)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Hs(e, t, r, l, n)
      );
    case 15:
      return tf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Fl(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), Vl(t)) : (e = !1),
        Yn(t, n),
        Fc(t, r, l),
        ji(t, r, l, n),
        $i(null, t, r, !0, e, n)
      );
    case 19:
      return uf(e, t, n);
    case 22:
      return nf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Sf(e, t) {
  return Ka(e, t);
}
function d1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new d1(e, t, n, r);
}
function Bu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function p1(e) {
  if (typeof e == "function") return Bu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ou)) return 11;
    if (e === iu) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Bu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Tn:
        return vn(n.children, l, o, t);
      case lu:
        (i = 8), (l |= 8);
        break;
      case li:
        return (
          (e = lt(12, n, t, l | 2)), (e.elementType = li), (e.lanes = o), e
        );
      case oi:
        return (e = lt(13, n, t, l)), (e.elementType = oi), (e.lanes = o), e;
      case ii:
        return (e = lt(19, n, t, l)), (e.elementType = ii), (e.lanes = o), e;
      case Oa:
        return go(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ta:
              i = 10;
              break e;
            case Fa:
              i = 9;
              break e;
            case ou:
              i = 11;
              break e;
            case iu:
              i = 14;
              break e;
            case At:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function vn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function go(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Oa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jo(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function qo(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function m1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ro(0)),
    (this.expirationTimes = Ro(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ro(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Uu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new m1(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = lt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _u(o),
    e
  );
}
function h1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _f(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return kc(e, n, t);
  }
  return t;
}
function Ef(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Uu(n, r, !0, e, l, o, i, u, s)),
    (e.context = _f(null)),
    (n = e.current),
    (r = $e()),
    (l = Jt(n)),
    (o = Tt(r, l)),
    (o.callback = t ?? null),
    Xt(n, o, l),
    (e.current.lanes = l),
    Jr(e, l, r),
    Qe(e, r),
    e
  );
}
function xo(e, t, n, r) {
  var l = t.current,
    o = $e(),
    i = Jt(l);
  return (
    (n = _f(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(l, t, i)),
    e !== null && (mt(e, l, i, o), Ll(e, l, i)),
    i
  );
}
function ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ta(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wu(e, t) {
  ta(e, t), (e = e.alternate) && ta(e, t);
}
function y1() {
  return null;
}
var Nf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hu(e) {
  this._internalRoot = e;
}
wo.prototype.render = Hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  xo(e, t, null, null);
};
wo.prototype.unmount = Hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function () {
      xo(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function wo(e) {
  this._internalRoot = e;
}
wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && rc(e);
  }
};
function Vu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Co(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function na() {}
function v1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = ro(i);
        o.call(f);
      };
    }
    var i = Ef(t, r, e, 0, null, !1, !1, "", na);
    return (
      (e._reactRootContainer = i),
      (e[Ot] = i.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = ro(s);
      u.call(f);
    };
  }
  var s = Uu(e, 0, !1, null, null, !1, !1, "", na);
  return (
    (e._reactRootContainer = s),
    (e[Ot] = s.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      xo(t, s, n, r);
    }),
    s
  );
}
function ko(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ro(i);
        u.call(s);
      };
    }
    xo(t, i, e, l);
  } else i = v1(n, t, e, l, r);
  return ro(i);
}
ba = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 &&
          (au(t, n | 1), Qe(t, ge()), !(te & 6) && ((nr = ge() + 500), sn()));
      }
      break;
    case 13:
      _n(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = $e();
          mt(r, e, 1, l);
        }
      }),
        Wu(e, 1);
  }
};
cu = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = $e();
      mt(t, e, 134217728, n);
    }
    Wu(e, 134217728);
  }
};
ec = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = $e();
      mt(n, e, t, r);
    }
    Wu(e, t);
  }
};
tc = function () {
  return ie;
};
nc = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
yi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ai(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fo(r);
            if (!l) throw Error(k(90));
            za(r), ai(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ia(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
  }
};
Wa = $u;
Ha = _n;
var g1 = { usingClientEntryPoint: !1, Events: [br, zn, fo, Ba, Ua, $u] },
  mr = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  x1 = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Za(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || y1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      (uo = wl.inject(x1)), (wt = wl);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g1;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vu(t)) throw Error(k(200));
  return h1(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!Vu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Nf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Uu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ot] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new Hu(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Za(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return _n(e);
};
be.hydrate = function (e, t, n) {
  if (!Co(t)) throw Error(k(200));
  return ko(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!Vu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Nf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ef(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ot] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new wo(t);
};
be.render = function (e, t, n) {
  if (!Co(t)) throw Error(k(200));
  return ko(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!Co(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (_n(function () {
        ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = $u;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Co(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ko(e, t, n, !1, r);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = be);
})(yd);
const Lf = ya(ti),
  Pf = () =>
    x("div", {
      children: T("svg", {
        width: "114",
        height: "100",
        viewBox: "0 0 114 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          T("g", {
            "clip-path": "url(#clip0_578_3518)",
            children: [
              x("path", {
                d: "M15.7643 38.9147C23.8331 38.9147 30.3743 32.3926 30.3743 24.347C30.3743 16.3015 23.8331 9.77936 15.7643 9.77936C7.69541 9.77936 1.1543 16.3015 1.1543 24.347C1.1543 32.3926 7.69541 38.9147 15.7643 38.9147Z",
                fill: "#F4F4F4",
              }),
              x("g", {
                opacity: "0.05",
                children: x("path", {
                  d: "M15.7637 35.8956C22.1604 35.8956 27.3458 30.7251 27.3458 24.347C27.3458 17.9689 22.1604 12.7985 15.7637 12.7985C9.36712 12.7985 4.18164 17.9689 4.18164 24.347C4.18164 30.7251 9.36712 35.8956 15.7637 35.8956Z",
                  fill: "#292A2E",
                }),
              }),
              x("path", {
                d: "M11.9727 28.4721L13.0531 26.8015C13.9092 27.4558 14.6585 27.7899 15.455 27.7899C16.4099 27.7899 16.83 27.395 16.83 26.6305C16.83 24.9023 12.383 24.9335 12.383 21.9022C12.383 19.9536 13.7367 18.7124 15.8714 18.7124C17.3125 18.7124 18.2916 19.3054 19.0784 20.1375L17.8393 21.5528C17.227 20.9975 16.7078 20.7051 16.0043 20.7051C15.1932 20.7051 14.7542 21.0309 14.7542 21.7856C14.7542 23.388 19.2011 23.2476 19.2011 26.458C19.2011 28.387 17.921 29.7826 15.455 29.7826C14.3911 29.7822 12.9241 29.3317 11.9727 28.4721ZM14.9358 17.0658H16.5792V19.485H14.9358V17.0658ZM14.9358 28.774H16.5792V31.4283H14.9358V28.774Z",
                fill: "#F5FFF9",
              }),
              x("path", {
                d: "M132.095 7.4975H30.7616C28.2732 7.4975 26.2559 9.50896 26.2559 11.9902V85.9668C26.2559 88.4481 28.2732 90.4595 30.7616 90.4595H132.095C134.583 90.4595 136.6 88.4481 136.6 85.9668V11.9902C136.6 9.50896 134.583 7.4975 132.095 7.4975Z",
                fill: "#F5FFF9",
              }),
              x("path", {
                d: "M132.094 90.6091H30.7614C29.527 90.6077 28.3436 90.1181 27.4708 89.2478C26.5979 88.3775 26.1069 87.1975 26.1055 85.9667V11.9902C26.1069 10.7594 26.5978 9.57934 27.4707 8.709C28.3436 7.83867 29.527 7.3491 30.7614 7.34772H132.094C133.329 7.34907 134.512 7.83862 135.385 8.70896C136.258 9.5793 136.749 10.7594 136.75 11.9902V85.9667C136.749 87.1975 136.258 88.3775 135.385 89.2478C134.512 90.1182 133.329 90.6078 132.094 90.6091ZM30.7614 7.64723C29.6067 7.6485 28.4995 8.10647 27.683 8.92066C26.8664 9.73485 26.4071 10.8388 26.4059 11.9902V85.9667C26.4071 87.1181 26.8664 88.222 27.683 89.0362C28.4995 89.8504 29.6067 90.3084 30.7614 90.3096H132.094C133.249 90.3084 134.356 89.8504 135.173 89.0362C135.989 88.222 136.449 87.1181 136.45 85.9667V11.9902C136.449 10.8388 135.989 9.73485 135.173 8.92066C134.356 8.10647 133.249 7.6485 132.094 7.64723H30.7614Z",
                fill: "#292A2E",
              }),
              x("path", {
                d: "M45.952 48.0454C45.8929 48.0455 45.8342 48.0339 45.7796 48.0113C45.7249 47.9887 45.6753 47.9556 45.6335 47.9138L43.5308 45.8172C43.4487 45.7324 43.4033 45.619 43.4043 45.5012C43.4053 45.3834 43.4527 45.2707 43.5363 45.1874C43.6198 45.1041 43.7328 45.0568 43.851 45.0558C43.9691 45.0548 44.0829 45.1001 44.1679 45.1819L46.2706 47.2785C46.3336 47.3413 46.3765 47.4214 46.3939 47.5085C46.4112 47.5957 46.4023 47.686 46.3682 47.7681C46.3341 47.8501 46.2764 47.9203 46.2023 47.9697C46.1282 48.019 46.0411 48.0454 45.952 48.0454Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M43.8489 48.0454C43.7598 48.0454 43.6727 48.019 43.5986 47.9697C43.5246 47.9203 43.4668 47.8501 43.4327 47.7681C43.3986 47.686 43.3897 47.5957 43.4071 47.5085C43.4245 47.4214 43.4674 47.3413 43.5304 47.2785L45.6331 45.1819C45.718 45.1001 45.8319 45.0548 45.95 45.0558C46.0681 45.0568 46.1811 45.1041 46.2647 45.1874C46.3482 45.2707 46.3956 45.3834 46.3966 45.5012C46.3977 45.619 46.3522 45.7324 46.2702 45.8172L44.1675 47.9138C44.1257 47.9556 44.0761 47.9887 44.0214 48.0113C43.9667 48.0339 43.9081 48.0455 43.8489 48.0454Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M106.157 68.0846L105.557 69.4574L109.25 71.063L109.851 69.6903L106.157 68.0846Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M107.322 31.2801L103.848 33.3157L104.609 34.6068L108.083 32.5713L107.322 31.2801Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M49.4301 34.766L48.9648 36.1899L52.7963 37.4347L53.2615 36.0108L49.4301 34.766Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M53.9154 58.6481L50.6152 60.9503L51.4758 62.1768L54.776 59.8746L53.9154 58.6481Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                opacity: "0.4",
                d: "M81.4288 75.042C94.6616 75.042 105.389 64.3457 105.389 51.1513C105.389 37.9568 94.6616 27.2606 81.4288 27.2606C68.196 27.2606 57.4688 37.9568 57.4688 51.1513C57.4688 64.3457 68.196 75.042 81.4288 75.042Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M81.4284 67.8593C90.6828 67.8593 98.1849 60.3788 98.1849 51.1513C98.1849 41.9237 90.6828 34.4432 81.4284 34.4432C72.174 34.4432 64.6719 41.9237 64.6719 51.1513C64.6719 60.3788 72.174 67.8593 81.4284 67.8593Z",
                fill: "#0D2A3B",
              }),
              x("path", {
                d: "M78.0011 58.3191C77.8695 58.3192 77.7393 58.2927 77.6183 58.2413C77.4972 58.1898 77.3879 58.1144 77.297 58.0196L71.9635 52.485C71.873 52.3932 71.8017 52.2844 71.7536 52.1649C71.7056 52.0454 71.6818 51.9175 71.6837 51.7888C71.6855 51.6601 71.713 51.533 71.7644 51.4149C71.8159 51.2968 71.8903 51.1901 71.9834 51.1009C72.0765 51.0117 72.1864 50.9418 72.3068 50.8952C72.4272 50.8487 72.5556 50.8264 72.6847 50.8297C72.8138 50.833 72.9409 50.8617 73.0588 50.9143C73.1766 50.9669 73.2828 51.0423 73.3712 51.1362L78.0512 55.9925L90.2865 45.0484C90.3817 44.9616 90.4932 44.8944 90.6145 44.8509C90.7359 44.8073 90.8647 44.7881 90.9935 44.7945C91.1224 44.8008 91.2486 44.8326 91.3651 44.8879C91.4815 44.9432 91.5859 45.0209 91.672 45.1166C91.7581 45.2124 91.8244 45.3242 91.8669 45.4456C91.9095 45.567 91.9275 45.6956 91.9199 45.824C91.9123 45.9524 91.8793 46.078 91.8227 46.1936C91.7661 46.3092 91.6872 46.4124 91.5903 46.4974L78.6529 58.0698C78.474 58.2304 78.2418 58.3193 78.0011 58.3191Z",
                fill: "#F5FFF9",
              }),
              x("path", {
                d: "M136.6 11.9896V16.5104H26.2559V11.9896C26.2559 10.7981 26.7306 9.65533 27.5756 8.81278C28.4206 7.97023 29.5666 7.49689 30.7616 7.49689H132.094C133.289 7.49689 134.435 7.97023 135.28 8.81278C136.125 9.65533 136.6 10.7981 136.6 11.9896Z",
                fill: "#292A2E",
              }),
              x("path", {
                d: "M5.63133 91.0014C4.72399 91.0012 3.83011 90.7825 3.02578 90.3638C2.22144 89.9451 1.53045 89.3389 1.01162 88.5967C0.492797 87.8545 0.161488 86.9982 0.0458944 86.1009C-0.0696994 85.2036 0.0338437 84.2916 0.347712 83.4428C0.66627 82.5809 8.83734 61.5492 10.2604 57.8941L20.0937 63.5999C19.2939 65.6553 16.3961 73.4457 14.0681 79.7215L17.9357 79.3021L19.153 89.5697L6.24157 90.9693C6.03888 90.991 5.83518 91.0016 5.63133 91.0014Z",
                fill: "#D6D6D6",
              }),
              x("path", {
                d: "M12.3815 91.3263L10.6641 99.8503H44.0217L42.1003 91.1643L12.3815 91.3263Z",
                fill: "#262626",
              }),
              x("path", {
                d: "M37.7951 53.5205C37.7606 53.516 36.8144 57.0667 29.4294 56.5141C24.3169 56.1322 23.0703 52.6623 22.9531 52.6623C23.5043 52.5455 24.3995 52.4242 24.6443 52.2939C25.4493 51.8626 26.0357 51.3376 26.331 50.2108C26.5618 49.3296 26.6794 45.9375 26.6794 44.2355L34.5465 45.9981C34.4368 47.918 33.6694 52.3688 36.3593 53.1565C36.8069 53.2868 37.289 53.4066 37.7951 53.5205Z",
                fill: "#E98862",
              }),
              x("path", {
                d: "M34.2747 49.7726C31.1734 50.0167 27.1894 48.7109 26.4326 44.5851L25.7498 40.8624C24.993 36.7366 26.5529 32.9957 30.4489 32.2852C34.3447 31.5748 37.8703 34.3883 38.627 38.5141L38.9293 40.1623C39.2192 41.7453 39.8078 49.3374 34.2747 49.7726Z",
                fill: "#E98862",
              }),
              x("path", {
                d: "M19.5939 53.2335C16.8069 53.4397 13.9651 53.7406 11.9144 55.6337C9.44464 57.9136 8.99707 60.7169 10.5727 68.4315C11.9284 75.0695 11.3907 77.9702 12.2975 90.2192C12.3243 90.5801 12.3815 91.3263 12.3815 91.3263L42.1947 91.2771C42.1947 91.2771 44.9883 75.0258 46.5306 67.5303C47.7035 61.8318 50.7842 54.9141 37.7948 53.52C37.7606 53.5162 27.3428 52.6602 19.5939 53.2335Z",
                fill: "#D6D6D6",
              }),
              x("path", {
                d: "M12.3806 91.4014C12.3612 91.4014 12.3425 91.3939 12.3285 91.3805C12.3145 91.367 12.3062 91.3487 12.3055 91.3293L11.3711 67.1472C11.3704 67.1274 11.3776 67.1081 11.3912 67.0935C11.4047 67.079 11.4235 67.0704 11.4434 67.0696C11.4533 67.0688 11.4633 67.0701 11.4728 67.0733C11.4822 67.0766 11.4909 67.0817 11.4982 67.0885C11.5055 67.0953 11.5114 67.1035 11.5153 67.1126C11.5193 67.1217 11.5214 67.1316 11.5213 67.1415L12.4557 91.3237C12.4564 91.3435 12.4492 91.3628 12.4357 91.3774C12.4221 91.3919 12.4033 91.4005 12.3834 91.4012L12.3806 91.4014Z",
                fill: "#0C0C0C",
              }),
              x("path", {
                d: "M60.2194 61.8676L62.314 57.1828C62.36 57.0798 62.4271 56.9876 62.5108 56.9119C62.5946 56.8362 62.6932 56.7787 62.8005 56.7431C62.9077 56.7076 63.0212 56.6946 63.1338 56.7052C63.2463 56.7158 63.3554 56.7496 63.4541 56.8045C63.6333 56.9115 63.7663 57.0811 63.8272 57.2803C63.8881 57.4796 63.8726 57.6943 63.7836 57.8827L63.3346 58.8872L66.2011 56.3745C66.5149 56.09 67.0828 55.9402 67.3802 56.3122C67.5039 56.448 67.578 56.6215 67.5901 56.8046C67.6022 56.9877 67.5518 57.1694 67.447 57.3202C67.4505 57.3224 67.4536 57.325 67.4564 57.328C67.4582 57.3306 67.4599 57.3333 67.4613 57.3361L67.9452 56.8969C68.0348 56.8156 68.1416 56.7552 68.2576 56.7202C68.3736 56.6853 68.496 56.6765 68.6159 56.6947C68.7357 56.7129 68.8499 56.7575 68.9503 56.8252C69.0507 56.893 69.1346 56.9823 69.196 57.0865C69.2894 57.2526 69.3227 57.4456 69.2904 57.6332C69.2582 57.8209 69.1623 57.9918 69.0188 58.1174L68.8128 58.3043C68.8154 58.3127 68.8165 58.3215 68.8161 58.3304C68.9847 58.2363 69.1813 58.205 69.3708 58.2422C69.5603 58.2794 69.7304 58.3826 69.8507 58.5333C69.9773 58.7021 70.0355 58.9123 70.0136 59.122C69.9917 59.3317 69.8913 59.5254 69.7325 59.6646L69.2218 60.1288C69.2337 60.1273 69.2457 60.1287 69.257 60.1328C69.2682 60.1368 69.2783 60.1436 69.2864 60.1523C69.2955 60.1632 69.3013 60.1764 69.3031 60.1905C69.4765 60.1483 69.659 60.164 69.8225 60.2353C69.9861 60.3066 70.1217 60.4294 70.2084 60.585C70.2962 60.7503 70.3255 60.9403 70.2914 61.1243C70.2574 61.3082 70.162 61.4753 70.0208 61.5985L65.7051 65.5163C65.1013 66.0644 64.3471 66.4202 63.5392 66.5382C62.7313 66.6561 61.9065 66.5308 61.1704 66.1783C60.5358 65.8743 60.045 65.3356 59.8024 64.6766C59.5598 64.0176 59.5844 63.2902 59.8711 62.6491L60.2194 61.8676Z",
                fill: "#E98862",
              }),
              x("g", {
                opacity: "0.2",
                children: x("path", {
                  d: "M64.621 59.8207C64.6343 59.8352 64.6528 59.8439 64.6724 59.8449C64.6921 59.8459 64.7114 59.8391 64.7261 59.8261L67.4493 57.4331C67.4566 57.4266 67.4627 57.4187 67.467 57.4099C67.4714 57.401 67.4739 57.3914 67.4745 57.3816C67.4751 57.3718 67.4738 57.362 67.4706 57.3527C67.4674 57.3434 67.4624 57.3348 67.4559 57.3274C67.4493 57.32 67.4414 57.314 67.4325 57.3097C67.4237 57.3054 67.4141 57.3028 67.4042 57.3022C67.3944 57.3016 67.3845 57.3029 67.3752 57.3061C67.3658 57.3093 67.3572 57.3143 67.3498 57.3208L64.627 59.7136C64.6196 59.7201 64.6135 59.728 64.6092 59.7369C64.6049 59.7457 64.6023 59.7553 64.6017 59.7651C64.6011 59.775 64.6024 59.7848 64.6056 59.7941C64.6088 59.8034 64.6138 59.812 64.6204 59.8194L64.621 59.8207Z",
                  fill: "#0C0C0C",
                }),
              }),
              x("g", {
                opacity: "0.2",
                children: x("path", {
                  d: "M65.6467 61.0474C65.66 61.0618 65.6785 61.0705 65.6982 61.0715C65.7178 61.0724 65.7371 61.0657 65.7518 61.0526L68.7908 58.3822C68.7982 58.3757 68.8042 58.3678 68.8086 58.3589C68.8129 58.3501 68.8155 58.3405 68.8161 58.3307C68.8167 58.3208 68.8154 58.311 68.8122 58.3017C68.8089 58.2924 68.8039 58.2838 68.7974 58.2764C68.7839 58.2621 68.7654 58.2534 68.7457 58.2522C68.726 58.251 68.7066 58.2573 68.6914 58.2698L65.6524 60.9403C65.645 60.9468 65.6389 60.9547 65.6346 60.9636C65.6303 60.9724 65.6277 60.982 65.6271 60.9918C65.6265 61.0016 65.6278 61.0115 65.631 61.0208C65.6342 61.0301 65.6392 61.0387 65.6458 61.0461L65.6467 61.0474Z",
                  fill: "#0C0C0C",
                }),
              }),
              x("g", {
                opacity: "0.2",
                children: x("path", {
                  d: "M66.7502 62.3822C66.7635 62.3966 66.782 62.4053 66.8016 62.4063C66.8213 62.4073 66.8406 62.4006 66.8553 62.3876L69.2794 60.2574C69.2944 60.2443 69.3035 60.2257 69.3047 60.2059C69.306 60.1861 69.2993 60.1665 69.2861 60.1516C69.2729 60.1367 69.2543 60.1276 69.2344 60.1264C69.2145 60.1251 69.195 60.1318 69.18 60.1449L66.7559 62.2753C66.7485 62.2818 66.7425 62.2897 66.7381 62.2985C66.7338 62.3073 66.7312 62.3169 66.7306 62.3267C66.73 62.3366 66.7313 62.3464 66.7345 62.3557C66.7377 62.365 66.7428 62.3736 66.7493 62.381L66.7502 62.3822Z",
                  fill: "#0C0C0C",
                }),
              }),
              x("path", {
                d: "M37.1484 45.9846C36.5918 43.1955 36.3364 41.3348 36.366 39.3716C37.1502 38.0002 36.944 36.4262 36.7657 35.746C37.5342 36.1641 37.8556 36.2102 38.579 36.2102C38.579 36.2102 37.2822 31.021 32.8746 29.6247C32.0636 29.3102 29.9949 28.9129 27.2472 29.2886C24.9102 29.6082 19.1495 31.3505 18.3258 37.8173V37.821C18.2985 38.0355 17.7455 43.9936 16.6427 46.8523C15.1602 50.6954 13.0791 51.8894 13.1318 56.3233C13.1997 62.0267 23.7153 62.786 30.0585 62.3586C36.4018 61.9311 39.9412 59.8525 39.9875 55.7423C40.0385 51.1371 38.2622 51.5648 37.1484 45.9846Z",
                fill: "#0A0A0A",
              }),
              x("path", {
                d: "M37.1513 43.6468C35.9674 43.8626 34.7759 42.7746 34.5594 41.5942C34.343 40.4138 35.1832 39.5874 36.3672 39.3716L37.1513 43.6468Z",
                fill: "#E98862",
              }),
              x("path", {
                d: "M49.8846 90.1512C48.6937 90.151 47.5335 89.7746 46.5704 89.0761C45.6074 88.3775 44.891 87.3927 44.5242 86.2629L36.6992 62.1318L47.4173 58.6763L51.5325 71.3689L58.6446 60.0914L68.1805 66.0702L54.6513 87.5245C54.1443 88.3284 53.4411 88.991 52.6075 89.4504C51.7739 89.9098 50.8371 90.1509 49.8846 90.1512Z",
                fill: "#D6D6D6",
              }),
              x("path", {
                d: "M43.5713 83.4887C43.5666 83.4887 43.562 83.4883 43.5574 83.4874C43.5379 83.4838 43.5205 83.4726 43.5093 83.4562C43.498 83.4398 43.4937 83.4197 43.4974 83.4001L46.1574 69.0023C46.161 68.9827 46.1723 68.9654 46.1887 68.9542C46.2051 68.9429 46.2253 68.9386 46.2449 68.9422C46.2645 68.9457 46.2819 68.957 46.2932 68.9733C46.3045 68.9897 46.3088 69.0098 46.3052 69.0294L43.6452 83.4274C43.642 83.4446 43.6328 83.4602 43.6193 83.4713C43.6058 83.4825 43.5888 83.4887 43.5713 83.4887Z",
                fill: "#0C0C0C",
              }),
              x("path", {
                d: "M52.4907 74.7675C52.474 74.7675 52.4578 74.7621 52.4447 74.7519C52.4315 74.7418 52.422 74.7276 52.4178 74.7115L51.5317 71.3081C51.5292 71.2986 51.5287 71.2887 51.53 71.2789C51.5314 71.2692 51.5347 71.2598 51.5397 71.2513C51.5447 71.2429 51.5513 71.2354 51.5592 71.2295C51.567 71.2236 51.576 71.2193 51.5855 71.2168C51.5951 71.2143 51.605 71.2138 51.6148 71.2151C51.6246 71.2165 51.634 71.2198 51.6425 71.2248C51.651 71.2297 51.6584 71.2363 51.6643 71.2442C51.6703 71.252 51.6746 71.261 51.6771 71.2705L52.5632 74.6739C52.5682 74.6931 52.5653 74.7135 52.5552 74.7306C52.5451 74.7477 52.5286 74.7601 52.5093 74.7651C52.5032 74.7668 52.497 74.7676 52.4907 74.7675Z",
                fill: "#0C0C0C",
              }),
              x("path", {
                d: "M3.41972 100H153.558C153.598 100 153.636 99.9842 153.665 99.9562C153.693 99.9281 153.709 99.89 153.709 99.8503C153.709 99.8105 153.693 99.7725 153.665 99.7444C153.636 99.7163 153.598 99.7005 153.558 99.7005H3.41972C3.37989 99.7005 3.34169 99.7163 3.31352 99.7444C3.28536 99.7725 3.26953 99.8105 3.26953 99.8503C3.26953 99.89 3.28536 99.9281 3.31352 99.9562C3.34169 99.9842 3.37989 100 3.41972 100Z",
                fill: "#D4D4D4",
              }),
            ],
          }),
          x("defs", {
            children: x("clipPath", {
              id: "clip0_578_3518",
              children: x("rect", {
                width: "114",
                height: "100",
                rx: "12",
                fill: "white",
              }),
            }),
          }),
        ],
      }),
    }),
  So = "https://cowry-backend.herokuapp.com",
  w1 = async (e, t) => {
    let n = {
      amount: parseFloat(e.amount),
      blockchainAddress: e.address,
      bankType: e.bank,
      narration: e.description,
      transaction_source: "sep",
      transaction_Id: t,
    };
    console.log(JSON.stringify(n));
    try {
      return (
        await fetch(`${So}/deposit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
    } catch (r) {
      throw r;
    }
  },
  C1 = async (e) => {
    console.log(JSON.stringify(e));
    try {
      return (
        await fetch(`${So}/deposit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        })
      ).json();
    } catch (t) {
      throw t;
    }
  },
  k1 = async (e, t) => {
    let n = {
      amount: parseFloat(e.amount),
      blockchain_address: e.address,
      bank_name: e.bank,
      account_number: e.account_number,
      name_on_acct: e.account_name,
      phone_number: e.phone,
      transaction_narration: e.description,
      transaction_source: "sep",
      transaction_Id: t,
    };
    try {
      return (
        await fetch(`${So}/withdrawal`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
    } catch (r) {
      throw r;
    }
  },
  S1 = async (e) => {
    let t = { transactionId: e };
    try {
      return (
        await fetch(`${So}/transactionStatus`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(t),
        })
      ).json();
    } catch (n) {
      throw (console.log(n), n);
    }
  };
function tl(e) {
  return e.split("-")[1];
}
function Qu(e) {
  return e === "y" ? "height" : "width";
}
function gn(e) {
  return e.split("-")[0];
}
function nl(e) {
  return ["top", "bottom"].includes(gn(e)) ? "x" : "y";
}
function ra(e, t, n) {
  let { reference: r, floating: l } = e;
  const o = r.x + r.width / 2 - l.width / 2,
    i = r.y + r.height / 2 - l.height / 2,
    u = nl(t),
    s = Qu(u),
    f = r[s] / 2 - l[s] / 2,
    v = u === "x";
  let h;
  switch (gn(t)) {
    case "top":
      h = { x: o, y: r.y - l.height };
      break;
    case "bottom":
      h = { x: o, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: i };
      break;
    case "left":
      h = { x: r.x - l.width, y: i };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (tl(t)) {
    case "start":
      h[u] -= f * (n && v ? -1 : 1);
      break;
    case "end":
      h[u] += f * (n && v ? -1 : 1);
  }
  return h;
}
function Tf(e) {
  return typeof e != "number"
    ? (function (t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Pr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
async function Ff(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: l, platform: o, rects: i, elements: u, strategy: s } = e,
    {
      boundary: f = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: h = "floating",
      altBoundary: m = !1,
      padding: p = 0,
    } = t,
    w = Tf(p),
    y = u[m ? (h === "floating" ? "reference" : "floating") : h],
    P = Pr(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(u.floating))),
        boundary: f,
        rootBoundary: v,
        strategy: s,
      })
    ),
    a = h === "floating" ? { ...i.floating, x: r, y: l } : i.reference,
    c = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(u.floating)),
    d = ((await (o.isElement == null ? void 0 : o.isElement(c))) &&
      (await (o.getScale == null ? void 0 : o.getScale(c)))) || { x: 1, y: 1 },
    g = Pr(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: a,
            offsetParent: c,
            strategy: s,
          })
        : a
    );
  return {
    top: (P.top - g.top + w.top) / d.y,
    bottom: (g.bottom - P.bottom + w.bottom) / d.y,
    left: (P.left - g.left + w.left) / d.x,
    right: (g.right - P.right + w.right) / d.x,
  };
}
const _1 = Math.min,
  E1 = Math.max;
function Xi(e, t, n) {
  return E1(e, _1(t, n));
}
["top", "right", "bottom", "left"].reduce(
  (e, t) => e.concat(t, t + "-start", t + "-end"),
  []
);
const N1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function lo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => N1[t]);
}
function L1(e, t, n) {
  n === void 0 && (n = !1);
  const r = tl(e),
    l = nl(e),
    o = Qu(l);
  let i =
    l === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return (
    t.reference[o] > t.floating[o] && (i = lo(i)), { main: i, cross: lo(i) }
  );
}
const P1 = { start: "end", end: "start" };
function bo(e) {
  return e.replace(/start|end/g, (t) => P1[t]);
}
const T1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n;
          const {
              placement: r,
              middlewareData: l,
              rects: o,
              initialPlacement: i,
              platform: u,
              elements: s,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: v = !0,
              fallbackPlacements: h,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: p = "none",
              flipAlignment: w = !0,
              ...y
            } = e,
            P = gn(r),
            a = gn(i) === i,
            c = await (u.isRTL == null ? void 0 : u.isRTL(s.floating)),
            d =
              h ||
              (a || !w
                ? [lo(i)]
                : (function (B) {
                    const X = lo(B);
                    return [bo(B), X, bo(X)];
                  })(i));
          h ||
            p === "none" ||
            d.push(
              ...(function (B, X, Y, z) {
                const W = tl(B);
                let q = (function (de, E, j) {
                  const $ = ["left", "right"],
                    K = ["right", "left"],
                    oe = ["top", "bottom"],
                    ke = ["bottom", "top"];
                  switch (de) {
                    case "top":
                    case "bottom":
                      return j ? (E ? K : $) : E ? $ : K;
                    case "left":
                    case "right":
                      return E ? oe : ke;
                    default:
                      return [];
                  }
                })(gn(B), Y === "start", z);
                return (
                  W &&
                    ((q = q.map((de) => de + "-" + W)),
                    X && (q = q.concat(q.map(bo)))),
                  q
                );
              })(i, w, p, c)
            );
          const g = [i, ...d],
            _ = await Ff(t, y),
            N = [];
          let S = ((n = l.flip) == null ? void 0 : n.overflows) || [];
          if ((f && N.push(_[P]), v)) {
            const { main: B, cross: X } = L1(r, o, c);
            N.push(_[B], _[X]);
          }
          if (
            ((S = [...S, { placement: r, overflows: N }]),
            !N.every((B) => B <= 0))
          ) {
            var L, H;
            const B = (((L = l.flip) == null ? void 0 : L.index) || 0) + 1,
              X = g[B];
            if (X)
              return {
                data: { index: B, overflows: S },
                reset: { placement: X },
              };
            let Y =
              (H = S.find((z) => z.overflows[0] <= 0)) == null
                ? void 0
                : H.placement;
            if (!Y)
              switch (m) {
                case "bestFit": {
                  var R;
                  const z =
                    (R = S.map((W) => [
                      W.placement,
                      W.overflows
                        .filter((q) => q > 0)
                        .reduce((q, de) => q + de, 0),
                    ]).sort((W, q) => W[1] - q[1])[0]) == null
                      ? void 0
                      : R[0];
                  z && (Y = z);
                  break;
                }
                case "initialPlacement":
                  Y = i;
              }
            if (r !== Y) return { reset: { placement: Y } };
          }
          return {};
        },
      }
    );
  },
  F1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            l = await (async function (o, i) {
              const { placement: u, platform: s, elements: f } = o,
                v = await (s.isRTL == null ? void 0 : s.isRTL(f.floating)),
                h = gn(u),
                m = tl(u),
                p = nl(u) === "x",
                w = ["left", "top"].includes(h) ? -1 : 1,
                y = v && p ? -1 : 1,
                P = typeof i == "function" ? i(o) : i;
              let {
                mainAxis: a,
                crossAxis: c,
                alignmentAxis: d,
              } = typeof P == "number"
                ? { mainAxis: P, crossAxis: 0, alignmentAxis: null }
                : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...P };
              return (
                m && typeof d == "number" && (c = m === "end" ? -1 * d : d),
                p ? { x: c * y, y: a * w } : { x: a * w, y: c * y }
              );
            })(t, e);
          return { x: n + l.x, y: r + l.y, data: l };
        },
      }
    );
  },
  O1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: l } = t,
            {
              mainAxis: o = !0,
              crossAxis: i = !1,
              limiter: u = {
                fn: (P) => {
                  let { x: a, y: c } = P;
                  return { x: a, y: c };
                },
              },
              ...s
            } = e,
            f = { x: n, y: r },
            v = await Ff(t, s),
            h = nl(gn(l)),
            m = h === "x" ? "y" : "x";
          let p = f[h],
            w = f[m];
          if (o) {
            const P = h === "y" ? "bottom" : "right";
            p = Xi(p + v[h === "y" ? "top" : "left"], p, p - v[P]);
          }
          if (i) {
            const P = m === "y" ? "bottom" : "right";
            w = Xi(w + v[m === "y" ? "top" : "left"], w, w - v[P]);
          }
          const y = u.fn({ ...t, [h]: p, [m]: w });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  };
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kt(e) {
  return ot(e).getComputedStyle(e);
}
const la = Math.min,
  Tr = Math.max,
  oo = Math.round;
function Of(e) {
  const t = kt(e);
  let n = parseFloat(t.width),
    r = parseFloat(t.height);
  const l = e.offsetWidth,
    o = e.offsetHeight,
    i = oo(n) !== l || oo(r) !== o;
  return i && ((n = l), (r = o)), { width: n, height: r, fallback: i };
}
function ln(e) {
  return zf(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Cl;
function Rf() {
  if (Cl) return Cl;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((Cl = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), Cl)
    : navigator.userAgent;
}
function St(e) {
  return e instanceof ot(e).HTMLElement;
}
function bt(e) {
  return e instanceof ot(e).Element;
}
function zf(e) {
  return e instanceof ot(e).Node;
}
function oa(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function _o(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: l } = kt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(l)
  );
}
function R1(e) {
  return ["table", "td", "th"].includes(ln(e));
}
function Gi(e) {
  const t = /firefox/i.test(Rf()),
    n = kt(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (!!r && r !== "none") ||
    (t && n.willChange === "filter") ||
    (t && !!n.filter && n.filter !== "none") ||
    ["transform", "perspective"].some((l) => n.willChange.includes(l)) ||
    ["paint", "layout", "strict", "content"].some((l) => {
      const o = n.contain;
      return o != null && o.includes(l);
    })
  );
}
function jf() {
  return !/^((?!chrome|android).)*safari/i.test(Rf());
}
function Zu(e) {
  return ["html", "body", "#document"].includes(ln(e));
}
function If(e) {
  return bt(e) ? e : e.contextElement;
}
const Mf = { x: 1, y: 1 };
function Xn(e) {
  const t = If(e);
  if (!St(t)) return Mf;
  const n = t.getBoundingClientRect(),
    { width: r, height: l, fallback: o } = Of(t);
  let i = (o ? oo(n.width) : n.width) / r,
    u = (o ? oo(n.height) : n.height) / l;
  return (
    (i && Number.isFinite(i)) || (i = 1),
    (u && Number.isFinite(u)) || (u = 1),
    { x: i, y: u }
  );
}
function Kr(e, t, n, r) {
  var l, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    u = If(e);
  let s = Mf;
  t && (r ? bt(r) && (s = Xn(r)) : (s = Xn(e)));
  const f = u ? ot(u) : window,
    v = !jf() && n;
  let h =
      (i.left +
        ((v && ((l = f.visualViewport) == null ? void 0 : l.offsetLeft)) ||
          0)) /
      s.x,
    m =
      (i.top +
        ((v && ((o = f.visualViewport) == null ? void 0 : o.offsetTop)) || 0)) /
      s.y,
    p = i.width / s.x,
    w = i.height / s.y;
  if (u) {
    const y = ot(u),
      P = r && bt(r) ? ot(r) : r;
    let a = y.frameElement;
    for (; a && r && P !== y; ) {
      const c = Xn(a),
        d = a.getBoundingClientRect(),
        g = getComputedStyle(a);
      (d.x += (a.clientLeft + parseFloat(g.paddingLeft)) * c.x),
        (d.y += (a.clientTop + parseFloat(g.paddingTop)) * c.y),
        (h *= c.x),
        (m *= c.y),
        (p *= c.x),
        (w *= c.y),
        (h += d.x),
        (m += d.y),
        (a = ot(a).frameElement);
    }
  }
  return {
    width: p,
    height: w,
    top: m,
    right: h + p,
    bottom: m + w,
    left: h,
    x: h,
    y: m,
  };
}
function en(e) {
  return ((zf(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Eo(e) {
  return bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function $f(e) {
  return Kr(en(e)).left + Eo(e).scrollLeft;
}
function Xr(e) {
  if (ln(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (oa(e) && e.host) || en(e);
  return oa(t) ? t.host : t;
}
function Af(e) {
  const t = Xr(e);
  return Zu(t) ? t.ownerDocument.body : St(t) && _o(t) ? t : Af(t);
}
function Df(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Af(e),
    l = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = ot(r);
  return l
    ? t.concat(o, o.visualViewport || [], _o(r) ? r : [])
    : t.concat(r, Df(r));
}
function ia(e, t, n) {
  return t === "viewport"
    ? Pr(
        (function (r, l) {
          const o = ot(r),
            i = en(r),
            u = o.visualViewport;
          let s = i.clientWidth,
            f = i.clientHeight,
            v = 0,
            h = 0;
          if (u) {
            (s = u.width), (f = u.height);
            const m = jf();
            (m || (!m && l === "fixed")) &&
              ((v = u.offsetLeft), (h = u.offsetTop));
          }
          return { width: s, height: f, x: v, y: h };
        })(e, n)
      )
    : bt(t)
    ? Pr(
        (function (r, l) {
          const o = Kr(r, !0, l === "fixed"),
            i = o.top + r.clientTop,
            u = o.left + r.clientLeft,
            s = St(r) ? Xn(r) : { x: 1, y: 1 };
          return {
            width: r.clientWidth * s.x,
            height: r.clientHeight * s.y,
            x: u * s.x,
            y: i * s.y,
          };
        })(t, n)
      )
    : Pr(
        (function (r) {
          const l = en(r),
            o = Eo(r),
            i = r.ownerDocument.body,
            u = Tr(l.scrollWidth, l.clientWidth, i.scrollWidth, i.clientWidth),
            s = Tr(
              l.scrollHeight,
              l.clientHeight,
              i.scrollHeight,
              i.clientHeight
            );
          let f = -o.scrollLeft + $f(r);
          const v = -o.scrollTop;
          return (
            kt(i).direction === "rtl" &&
              (f += Tr(l.clientWidth, i.clientWidth) - u),
            { width: u, height: s, x: f, y: v }
          );
        })(en(e))
      );
}
function ua(e) {
  return St(e) && kt(e).position !== "fixed" ? e.offsetParent : null;
}
function sa(e) {
  const t = ot(e);
  let n = ua(e);
  for (; n && R1(n) && kt(n).position === "static"; ) n = ua(n);
  return n &&
    (ln(n) === "html" ||
      (ln(n) === "body" && kt(n).position === "static" && !Gi(n)))
    ? t
    : n ||
        (function (r) {
          let l = Xr(r);
          for (; St(l) && !Zu(l); ) {
            if (Gi(l)) return l;
            l = Xr(l);
          }
          return null;
        })(e) ||
        t;
}
function z1(e, t, n) {
  const r = St(t),
    l = en(t),
    o = Kr(e, !0, n === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (r || (!r && n !== "fixed"))
    if (((ln(t) !== "body" || _o(l)) && (i = Eo(t)), St(t))) {
      const s = Kr(t, !0);
      (u.x = s.x + t.clientLeft), (u.y = s.y + t.clientTop);
    } else l && (u.x = $f(l));
  return {
    x: o.left + i.scrollLeft - u.x,
    y: o.top + i.scrollTop - u.y,
    width: o.width,
    height: o.height,
  };
}
const j1 = {
    getClippingRect: function (e) {
      let { element: t, boundary: n, rootBoundary: r, strategy: l } = e;
      const o =
          n === "clippingAncestors"
            ? (function (f, v) {
                const h = v.get(f);
                if (h) return h;
                let m = Df(f).filter((P) => bt(P) && ln(P) !== "body"),
                  p = null;
                const w = kt(f).position === "fixed";
                let y = w ? Xr(f) : f;
                for (; bt(y) && !Zu(y); ) {
                  const P = kt(y),
                    a = Gi(y);
                  (
                    w
                      ? a || p
                      : a ||
                        P.position !== "static" ||
                        !p ||
                        !["absolute", "fixed"].includes(p.position)
                  )
                    ? (p = P)
                    : (m = m.filter((c) => c !== y)),
                    (y = Xr(y));
                }
                return v.set(f, m), m;
              })(t, this._c)
            : [].concat(n),
        i = [...o, r],
        u = i[0],
        s = i.reduce((f, v) => {
          const h = ia(t, v, l);
          return (
            (f.top = Tr(h.top, f.top)),
            (f.right = la(h.right, f.right)),
            (f.bottom = la(h.bottom, f.bottom)),
            (f.left = Tr(h.left, f.left)),
            f
          );
        }, ia(t, u, l));
      return {
        width: s.right - s.left,
        height: s.bottom - s.top,
        x: s.left,
        y: s.top,
      };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { rect: t, offsetParent: n, strategy: r } = e;
      const l = St(n),
        o = en(n);
      if (n === o) return t;
      let i = { scrollLeft: 0, scrollTop: 0 },
        u = { x: 1, y: 1 };
      const s = { x: 0, y: 0 };
      if (
        (l || (!l && r !== "fixed")) &&
        ((ln(n) !== "body" || _o(o)) && (i = Eo(n)), St(n))
      ) {
        const f = Kr(n);
        (u = Xn(n)), (s.x = f.x + n.clientLeft), (s.y = f.y + n.clientTop);
      }
      return {
        width: t.width * u.x,
        height: t.height * u.y,
        x: t.x * u.x - i.scrollLeft * u.x + s.x,
        y: t.y * u.y - i.scrollTop * u.y + s.y,
      };
    },
    isElement: bt,
    getDimensions: function (e) {
      return St(e) ? Of(e) : e.getBoundingClientRect();
    },
    getOffsetParent: sa,
    getDocumentElement: en,
    getScale: Xn,
    async getElementRects(e) {
      let { reference: t, floating: n, strategy: r } = e;
      const l = this.getOffsetParent || sa,
        o = this.getDimensions;
      return {
        reference: z1(t, await l(n), r),
        floating: { x: 0, y: 0, ...(await o(n)) },
      };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => kt(e).direction === "rtl",
  },
  aa = (e, t, n) => {
    const r = new Map(),
      l = { platform: j1, ...n },
      o = { ...l.platform, _c: r };
    return (async (i, u, s) => {
      const {
          placement: f = "bottom",
          strategy: v = "absolute",
          middleware: h = [],
          platform: m,
        } = s,
        p = h.filter(Boolean),
        w = await (m.isRTL == null ? void 0 : m.isRTL(u));
      if (
        (m == null &&
          console.error(
            [
              "Floating UI: `platform` property was not passed to config. If you",
              "want to use Floating UI on the web, install @floating-ui/dom",
              "instead of the /core package. Otherwise, you can create your own",
              "`platform`: https://floating-ui.com/docs/platform",
            ].join(" ")
          ),
        p.filter((_) => {
          let { name: N } = _;
          return N === "autoPlacement" || N === "flip";
        }).length > 1)
      )
        throw new Error(
          [
            "Floating UI: duplicate `flip` and/or `autoPlacement` middleware",
            "detected. This will lead to an infinite loop. Ensure only one of",
            "either has been passed to the `middleware` array.",
          ].join(" ")
        );
      (i && u) ||
        console.error(
          [
            "Floating UI: The reference and/or floating element was not defined",
            "when `computePosition()` was called. Ensure that both elements have",
            "been created and can be measured.",
          ].join(" ")
        );
      let y = await m.getElementRects({
          reference: i,
          floating: u,
          strategy: v,
        }),
        { x: P, y: a } = ra(y, f, w),
        c = f,
        d = {},
        g = 0;
      for (let _ = 0; _ < p.length; _++) {
        const { name: N, fn: S } = p[_],
          {
            x: L,
            y: H,
            data: R,
            reset: B,
          } = await S({
            x: P,
            y: a,
            initialPlacement: f,
            placement: c,
            strategy: v,
            middlewareData: d,
            rects: y,
            platform: m,
            elements: { reference: i, floating: u },
          });
        (P = L ?? P),
          (a = H ?? a),
          (d = { ...d, [N]: { ...d[N], ...R } }),
          g > 50 &&
            console.warn(
              [
                "Floating UI: The middleware lifecycle appears to be running in an",
                "infinite loop. This is usually caused by a `reset` continually",
                "being returned without a break condition.",
              ].join(" ")
            ),
          B &&
            g <= 50 &&
            (g++,
            typeof B == "object" &&
              (B.placement && (c = B.placement),
              B.rects &&
                (y =
                  B.rects === !0
                    ? await m.getElementRects({
                        reference: i,
                        floating: u,
                        strategy: v,
                      })
                    : B.rects),
              ({ x: P, y: a } = ra(y, c, w))),
            (_ = -1));
      }
      return { x: P, y: a, placement: c, strategy: v, middlewareData: d };
    })(e, t, { ...l, platform: o });
  };
var $t,
  xn = { exports: {} },
  ca = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ($t = ca),
  (function () {
    var e = Vt,
      t = 60103,
      n = 60106;
    $t.Fragment = 60107;
    var r = 60108,
      l = 60114,
      o = 60109,
      i = 60110,
      u = 60112,
      s = 60113,
      f = 60120,
      v = 60115,
      h = 60116,
      m = 60121,
      p = 60122,
      w = 60117,
      y = 60129,
      P = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var a = Symbol.for;
      (t = a("react.element")),
        (n = a("react.portal")),
        ($t.Fragment = a("react.fragment")),
        (r = a("react.strict_mode")),
        (l = a("react.profiler")),
        (o = a("react.provider")),
        (i = a("react.context")),
        (u = a("react.forward_ref")),
        (s = a("react.suspense")),
        (f = a("react.suspense_list")),
        (v = a("react.memo")),
        (h = a("react.lazy")),
        (m = a("react.block")),
        (p = a("react.server.block")),
        (w = a("react.fundamental")),
        a("react.scope"),
        a("react.opaque.id"),
        (y = a("react.debug_trace_mode")),
        a("react.offscreen"),
        (P = a("react.legacy_hidden"));
    }
    var c = typeof Symbol == "function" && Symbol.iterator,
      d = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(C) {
      for (
        var Z = arguments.length, V = new Array(Z > 1 ? Z - 1 : 0), ue = 1;
        ue < Z;
        ue++
      )
        V[ue - 1] = arguments[ue];
      _("error", C, V);
    }
    function _(C, Z, V) {
      var ue = d.ReactDebugCurrentFrame,
        b = "";
      if (H) {
        var ne = S(H.type),
          re = H._owner;
        b += (function (ee, D, U) {
          var Q = "";
          if (D) {
            var I = D.fileName,
              F = I.replace(N, "");
            if (/^index\./.test(F)) {
              var le = I.match(N);
              if (le) {
                var ye = le[1];
                ye && (F = ye.replace(N, "") + "/" + F);
              }
            }
            Q = " (at " + F + ":" + D.lineNumber + ")";
          } else U && (Q = " (created by " + U + ")");
          return (
            `
    in ` +
            (ee || "Unknown") +
            Q
          );
        })(ne, H._source, re && S(re.type));
      }
      (b += ue.getStackAddendum()) !== "" && ((Z += "%s"), (V = V.concat([b])));
      var G = V.map(function (ee) {
        return "" + ee;
      });
      G.unshift("Warning: " + Z),
        Function.prototype.apply.call(console[C], console, G);
    }
    var N = /^(.*)[\\\/]/;
    function S(C) {
      if (C == null) return null;
      if (
        (typeof C.tag == "number" &&
          g(
            "Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."
          ),
        typeof C == "function")
      )
        return C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case $t.Fragment:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case r:
          return "StrictMode";
        case s:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case i:
            return "Context.Consumer";
          case o:
            return "Context.Provider";
          case u:
            return (
              (ue = C),
              (b = C.render),
              (ne = "ForwardRef"),
              (re = b.displayName || b.name || ""),
              ue.displayName || (re !== "" ? ne + "(" + re + ")" : ne)
            );
          case v:
            return S(C.type);
          case m:
            return S(C.render);
          case h:
            var Z = (V = C)._status === 1 ? V._result : null;
            if (Z) return S(Z);
        }
      var V, ue, b, ne, re;
      return null;
    }
    var L = {};
    d.ReactDebugCurrentFrame;
    var H = null;
    function R(C) {
      H = C;
    }
    var B,
      X,
      Y,
      z = d.ReactCurrentOwner,
      W = Object.prototype.hasOwnProperty,
      q = { key: !0, ref: !0, __self: !0, __source: !0 };
    function de(C, Z, V, ue, b) {
      var ne,
        re = {},
        G = null,
        ee = null;
      for (ne in (V !== void 0 && (G = "" + V),
      (function (Q) {
        if (W.call(Q, "key")) {
          var I = Object.getOwnPropertyDescriptor(Q, "key").get;
          if (I && I.isReactWarning) return !1;
        }
        return Q.key !== void 0;
      })(Z) && (G = "" + Z.key),
      (function (Q) {
        if (W.call(Q, "ref")) {
          var I = Object.getOwnPropertyDescriptor(Q, "ref").get;
          if (I && I.isReactWarning) return !1;
        }
        return Q.ref !== void 0;
      })(Z) &&
        ((ee = Z.ref),
        (function (Q, I) {
          if (
            typeof Q.ref == "string" &&
            z.current &&
            I &&
            z.current.stateNode !== I
          ) {
            var F = S(z.current.type);
            Y[F] ||
              (g(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                S(z.current.type),
                Q.ref
              ),
              (Y[F] = !0));
          }
        })(Z, b)),
      Z))
        W.call(Z, ne) && !q.hasOwnProperty(ne) && (re[ne] = Z[ne]);
      if (C && C.defaultProps) {
        var D = C.defaultProps;
        for (ne in D) re[ne] === void 0 && (re[ne] = D[ne]);
      }
      if (G || ee) {
        var U =
          typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
        G &&
          (function (Q, I) {
            var F = function () {
              B ||
                ((B = !0),
                g(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  I
                ));
            };
            (F.isReactWarning = !0),
              Object.defineProperty(Q, "key", { get: F, configurable: !0 });
          })(re, U),
          ee &&
            (function (Q, I) {
              var F = function () {
                X ||
                  ((X = !0),
                  g(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    I
                  ));
              };
              (F.isReactWarning = !0),
                Object.defineProperty(Q, "ref", { get: F, configurable: !0 });
            })(re, U);
      }
      return (function (Q, I, F, le, ye, Ke, rl) {
        var _t = {
          $$typeof: t,
          type: Q,
          key: I,
          ref: F,
          props: rl,
          _owner: Ke,
          _store: {},
        };
        return (
          Object.defineProperty(_t._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(_t, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: le,
          }),
          Object.defineProperty(_t, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: ye,
          }),
          Object.freeze && (Object.freeze(_t.props), Object.freeze(_t)),
          _t
        );
      })(C, G, ee, b, ue, z.current, re);
    }
    Y = {};
    var E,
      j = d.ReactCurrentOwner;
    function $(C) {
      H = C;
    }
    function K(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function oe() {
      if (j.current) {
        var C = S(j.current.type);
        if (C)
          return (
            `

Check the render method of \`` +
            C +
            "`."
          );
      }
      return "";
    }
    d.ReactDebugCurrentFrame, (E = !1);
    var ke = {};
    function Se(C, Z) {
      if (C._store && !C._store.validated && C.key == null) {
        C._store.validated = !0;
        var V = (function (b) {
          var ne = oe();
          if (!ne) {
            var re = typeof b == "string" ? b : b.displayName || b.name;
            re &&
              (ne =
                `

Check the top-level render call using <` +
                re +
                ">.");
          }
          return ne;
        })(Z);
        if (!ke[V]) {
          ke[V] = !0;
          var ue = "";
          C &&
            C._owner &&
            C._owner !== j.current &&
            (ue = " It was passed a child from " + S(C._owner.type) + "."),
            $(C),
            g(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              V,
              ue
            ),
            $(null);
        }
      }
    }
    function Ze(C, Z) {
      if (typeof C == "object") {
        if (Array.isArray(C))
          for (var V = 0; V < C.length; V++) {
            var ue = C[V];
            K(ue) && Se(ue, Z);
          }
        else if (K(C)) C._store && (C._store.validated = !0);
        else if (C) {
          var b = (function (G) {
            if (G === null || typeof G != "object") return null;
            var ee = (c && G[c]) || G["@@iterator"];
            return typeof ee == "function" ? ee : null;
          })(C);
          if (typeof b == "function" && b !== C.entries)
            for (var ne, re = b.call(C); !(ne = re.next()).done; )
              K(ne.value) && Se(ne.value, Z);
        }
      }
    }
    function A(C) {
      var Z,
        V = C.type;
      if (V != null && typeof V != "string") {
        if (typeof V == "function") Z = V.propTypes;
        else {
          if (typeof V != "object" || (V.$$typeof !== u && V.$$typeof !== v))
            return;
          Z = V.propTypes;
        }
        if (Z) {
          var ue = S(V);
          (function (b, ne, re, G, ee) {
            var D = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var U in b)
              if (D(b, U)) {
                var Q = void 0;
                try {
                  if (typeof b[U] != "function") {
                    var I = Error(
                      (G || "React class") +
                        ": " +
                        re +
                        " type `" +
                        U +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof b[U] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    throw ((I.name = "Invariant Violation"), I);
                  }
                  Q = b[U](
                    ne,
                    U,
                    G,
                    re,
                    null,
                    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                  );
                } catch (F) {
                  Q = F;
                }
                !Q ||
                  Q instanceof Error ||
                  (R(ee),
                  g(
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    G || "React class",
                    re,
                    U,
                    typeof Q
                  ),
                  R(null)),
                  Q instanceof Error &&
                    !(Q.message in L) &&
                    ((L[Q.message] = !0),
                    R(ee),
                    g("Failed %s type: %s", re, Q.message),
                    R(null));
              }
          })(Z, C.props, "prop", ue, C);
        } else
          V.PropTypes === void 0 ||
            E ||
            ((E = !0),
            g(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              S(V) || "Unknown"
            ));
        typeof V.getDefaultProps != "function" ||
          V.getDefaultProps.isReactClassApproved ||
          g(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
          );
      }
    }
    function _e(C, Z, V, ue, b, ne) {
      var re = (function (F) {
        return (
          typeof F == "string" ||
          typeof F == "function" ||
          F === $t.Fragment ||
          F === l ||
          F === y ||
          F === r ||
          F === s ||
          F === f ||
          F === P ||
          (typeof F == "object" &&
            F !== null &&
            (F.$$typeof === h ||
              F.$$typeof === v ||
              F.$$typeof === o ||
              F.$$typeof === i ||
              F.$$typeof === u ||
              F.$$typeof === w ||
              F.$$typeof === m ||
              F[0] === p))
        );
      })(C);
      if (!re) {
        var G = "";
        (C === void 0 ||
          (typeof C == "object" &&
            C !== null &&
            Object.keys(C).length === 0)) &&
          (G +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var ee,
          D = (function (F) {
            return F !== void 0
              ? `

Check your code at ` +
                  F.fileName.replace(/^.*[\\\/]/, "") +
                  ":" +
                  F.lineNumber +
                  "."
              : "";
          })(b);
        (G += D || oe()),
          C === null
            ? (ee = "null")
            : Array.isArray(C)
            ? (ee = "array")
            : C !== void 0 && C.$$typeof === t
            ? ((ee = "<" + (S(C.type) || "Unknown") + " />"),
              (G =
                " Did you accidentally export a JSX literal instead of a component?"))
            : (ee = typeof C),
          g(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            ee,
            G
          );
      }
      var U = de(C, Z, V, b, ne);
      if (U == null) return U;
      if (re) {
        var Q = Z.children;
        if (Q !== void 0)
          if (ue)
            if (Array.isArray(Q)) {
              for (var I = 0; I < Q.length; I++) Ze(Q[I], C);
              Object.freeze && Object.freeze(Q);
            } else
              g(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else Ze(Q, C);
      }
      return (
        C === $t.Fragment
          ? (function (F) {
              for (
                var le = Object.keys(F.props), ye = 0;
                ye < le.length;
                ye++
              ) {
                var Ke = le[ye];
                if (Ke !== "children" && Ke !== "key") {
                  $(F),
                    g(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      Ke
                    ),
                    $(null);
                  break;
                }
              }
              F.ref !== null &&
                ($(F),
                g("Invalid attribute `ref` supplied to `React.Fragment`."),
                $(null));
            })(U)
          : A(U),
        U
      );
    }
    var tt = function (C, Z, V) {
        return _e(C, Z, V, !1);
      },
      Ye = function (C, Z, V) {
        return _e(C, Z, V, !0);
      };
    ($t.jsx = tt), ($t.jsxs = Ye);
  })(),
  (xn.exports = ca);
var ei,
  Bf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (ei = Bf),
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var l = arguments[r];
        if (l) {
          var o = typeof l;
          if (o === "string" || o === "number") n.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var i = t.apply(null, l);
              i && n.push(i);
            }
          } else if (o === "object") {
            if (
              l.toString !== Object.prototype.toString &&
              !l.toString.toString().includes("[native code]")
            ) {
              n.push(l.toString());
              continue;
            }
            for (var u in l) e.call(l, u) && l[u] && n.push(u);
          }
        }
      }
      return n.join(" ");
    }
    ei.exports ? ((t.default = t), (ei.exports = t)) : (window.classNames = t);
  })();
var fa = Bf.exports;
const da = (e, t, n) => {
    let r = null;
    return function (...l) {
      r && clearTimeout(r),
        (r = setTimeout(() => {
          (r = null), n || e.apply(this, l);
        }, t));
    };
  },
  I1 = ({ content: e }) =>
    xn.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }),
  M1 = {
    anchorRefs: new Set(),
    activeAnchor: { current: null },
    attach: () => {},
    detach: () => {},
    setActiveAnchor: () => {},
  },
  $1 = M.createContext({ getTooltipData: () => M1 });
function Uf(e = "DEFAULT_TOOLTIP_ID") {
  return M.useContext($1).getTooltipData(e);
}
const pa = async ({
  elementReference: e = null,
  tooltipReference: t = null,
  tooltipArrowReference: n = null,
  place: r = "top",
  offset: l = 10,
  strategy: o = "absolute",
  middlewares: i = [F1(Number(l)), T1(), O1({ padding: 5 })],
}) => {
  if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null) return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const u = i;
  return n
    ? (u.push({
        name: "arrow",
        options: (s = { element: n, padding: 5 }),
        async fn(f) {
          const { element: v, padding: h = 0 } = s || {},
            { x: m, y: p, placement: w, rects: y, platform: P } = f;
          if (v == null)
            return (
              console.warn(
                "Floating UI: No `element` was passed to the `arrow` middleware."
              ),
              {}
            );
          const a = Tf(h),
            c = { x: m, y: p },
            d = nl(w),
            g = Qu(d),
            _ = await P.getDimensions(v),
            N = d === "y" ? "top" : "left",
            S = d === "y" ? "bottom" : "right",
            L = y.reference[g] + y.reference[d] - c[d] - y.floating[g],
            H = c[d] - y.reference[d],
            R = await (P.getOffsetParent == null
              ? void 0
              : P.getOffsetParent(v));
          let B = R
            ? d === "y"
              ? R.clientHeight || 0
              : R.clientWidth || 0
            : 0;
          B === 0 && (B = y.floating[g]);
          const X = L / 2 - H / 2,
            Y = a[N],
            z = B - _[g] - a[S],
            W = B / 2 - _[g] / 2 + X,
            q = Xi(Y, W, z),
            de =
              tl(w) != null &&
              W != q &&
              y.reference[g] / 2 - (W < Y ? a[N] : a[S]) - _[g] / 2 < 0;
          return {
            [d]: c[d] - (de ? (W < Y ? Y - W : z - W) : 0),
            data: { [d]: q, centerOffset: W - q },
          };
        },
      }),
      aa(e, t, { placement: r, strategy: o, middleware: u }).then(
        ({ x: f, y: v, placement: h, middlewareData: m }) => {
          var p, w;
          const y = { left: `${f}px`, top: `${v}px` },
            { x: P, y: a } =
              (p = m.arrow) !== null && p !== void 0 ? p : { x: 0, y: 0 };
          return {
            tooltipStyles: y,
            tooltipArrowStyles: {
              left: P != null ? `${P}px` : "",
              top: a != null ? `${a}px` : "",
              right: "",
              bottom: "",
              [(w = {
                top: "bottom",
                right: "left",
                bottom: "top",
                left: "right",
              }[h.split("-")[0]]) !== null && w !== void 0
                ? w
                : "bottom"]: "-4px",
            },
          };
        }
      ))
    : aa(e, t, { placement: "bottom", strategy: o, middleware: u }).then(
        ({ x: f, y: v }) => ({
          tooltipStyles: { left: `${f}px`, top: `${v}px` },
          tooltipArrowStyles: {},
        })
      );
  var s;
};
var cn = {
  tooltip: "styles-module_tooltip__mnnfp",
  fixed: "styles-module_fixed__7ciUi",
  arrow: "styles-module_arrow__K0L3T",
  "no-arrow": "styles-module_no-arrow__KcFZN",
  clickable: "styles-module_clickable__Bv9o7",
  show: "styles-module_show__2NboJ",
  dark: "styles-module_dark__xNqje",
  light: "styles-module_light__Z6W-X",
  success: "styles-module_success__A2AKt",
  warning: "styles-module_warning__SCK0X",
  error: "styles-module_error__JvumD",
  info: "styles-module_info__BWdHW",
};
const ma = ({
    id: e,
    className: t,
    classNameArrow: n,
    variant: r = "dark",
    anchorId: l,
    place: o = "top",
    offset: i = 10,
    events: u = ["hover"],
    positionStrategy: s = "absolute",
    middlewares: f,
    wrapper: v,
    children: h = null,
    delayShow: m = 0,
    delayHide: p = 0,
    float: w = !1,
    noArrow: y = !1,
    clickable: P = !1,
    closeOnEsc: a = !1,
    style: c,
    position: d,
    afterShow: g,
    afterHide: _,
    content: N,
    html: S,
    isOpen: L,
    setIsOpen: H,
  }) => {
    const R = M.useRef(null),
      B = M.useRef(null),
      X = M.useRef(null),
      Y = M.useRef(null),
      [z, W] = M.useState({}),
      [q, de] = M.useState({}),
      [E, j] = M.useState(!1),
      [$, K] = M.useState(!1),
      oe = M.useRef(!1),
      ke = M.useRef(null),
      { anchorRefs: Se, setActiveAnchor: Ze } = Uf(e),
      [A, _e] = M.useState({ current: null }),
      tt = M.useRef(!1);
    M.useEffect(() => {
      E || K(!1);
    }, [E]);
    const Ye = (I) => {
      K(!0),
        setTimeout(() => {
          H == null || H(I), L === void 0 && j(I);
        }, 10);
    };
    M.useEffect(() => {
      if (L === void 0) return () => null;
      L && K(!0);
      const I = setTimeout(() => {
        j(L);
      }, 10);
      return () => {
        clearTimeout(I);
      };
    }, [L]),
      M.useEffect(() => {
        E !== oe.current &&
          ((oe.current = E), E ? g == null || g() : _ == null || _());
      }, [E]);
    const C = (I = p) => {
        Y.current && clearTimeout(Y.current),
          (Y.current = setTimeout(() => {
            tt.current || Ye(!1);
          }, I));
      },
      Z = (I) => {
        var F;
        if (!I) return;
        m
          ? (X.current && clearTimeout(X.current),
            (X.current = setTimeout(() => {
              Ye(!0);
            }, m)))
          : Ye(!0);
        const le =
          (F = I.currentTarget) !== null && F !== void 0 ? F : I.target;
        _e((ye) => (ye.current === le ? ye : { current: le })),
          Ze({ current: le }),
          Y.current && clearTimeout(Y.current);
      },
      V = () => {
        P ? C(p || 100) : p ? C() : Ye(!1),
          X.current && clearTimeout(X.current);
      },
      ue = ({ x: I, y: F }) => {
        pa({
          place: o,
          offset: i,
          elementReference: {
            getBoundingClientRect: () => ({
              x: I,
              y: F,
              width: 0,
              height: 0,
              top: F,
              left: I,
              right: I,
              bottom: F,
            }),
          },
          tooltipReference: R.current,
          tooltipArrowReference: B.current,
          strategy: s,
          middlewares: f,
        }).then((le) => {
          Object.keys(le.tooltipStyles).length && W(le.tooltipStyles),
            Object.keys(le.tooltipArrowStyles).length &&
              de(le.tooltipArrowStyles);
        });
      },
      b = (I) => {
        if (!I) return;
        const F = I,
          le = { x: F.clientX, y: F.clientY };
        ue(le), (ke.current = le);
      },
      ne = (I) => {
        Z(I), p && C();
      },
      re = (I) => {
        var F;
        (!((F = A.current) === null || F === void 0) && F.contains(I.target)) ||
          Ye(!1);
      },
      G = (I) => {
        I.key === "Escape" && Ye(!1);
      },
      ee = da(Z, 50),
      D = da(V, 50);
    M.useEffect(() => {
      var I, F;
      const le = new Set(Se),
        ye = document.querySelector(`[id='${l}']`);
      if (
        (ye &&
          (_e((Be) => (Be.current === ye ? Be : { current: ye })),
          le.add({ current: ye })),
        !le.size)
      )
        return () => null;
      a && window.addEventListener("keydown", G);
      const Ke = [];
      u.find((Be) => Be === "click") &&
        (window.addEventListener("click", re),
        Ke.push({ event: "click", listener: ne })),
        u.find((Be) => Be === "hover") &&
          (Ke.push(
            { event: "mouseenter", listener: ee },
            { event: "mouseleave", listener: D },
            { event: "focus", listener: ee },
            { event: "blur", listener: D }
          ),
          w && Ke.push({ event: "mousemove", listener: b }));
      const rl = () => {
          tt.current = !0;
        },
        _t = () => {
          (tt.current = !1), V();
        };
      P &&
        ((I = R.current) === null ||
          I === void 0 ||
          I.addEventListener("mouseenter", rl),
        (F = R.current) === null ||
          F === void 0 ||
          F.addEventListener("mouseleave", _t)),
        Ke.forEach(({ event: Be, listener: It }) => {
          le.forEach((an) => {
            var ir;
            (ir = an.current) === null ||
              ir === void 0 ||
              ir.addEventListener(Be, It);
          });
        });
      const Yu = ye ?? A.current,
        Ku = new MutationObserver((Be) => {
          Yu &&
            Be.some(
              (It) =>
                It.type === "childList" &&
                [...It.removedNodes].some(
                  (an) => !!an.contains(Yu) && (Ye(!1), !0)
                )
            );
        });
      return (
        Ku.observe(document.body, {
          attributes: !1,
          childList: !0,
          subtree: !0,
        }),
        () => {
          var Be, It;
          u.find((an) => an === "click") &&
            window.removeEventListener("click", re),
            a && window.removeEventListener("keydown", G),
            P &&
              ((Be = R.current) === null ||
                Be === void 0 ||
                Be.removeEventListener("mouseenter", rl),
              (It = R.current) === null ||
                It === void 0 ||
                It.removeEventListener("mouseleave", _t)),
            Ke.forEach(({ event: an, listener: ir }) => {
              le.forEach((Vf) => {
                var No;
                (No = Vf.current) === null ||
                  No === void 0 ||
                  No.removeEventListener(an, ir);
              });
            }),
            Ku.disconnect();
        }
      );
    }, [$, Se, A, a, l, u, p, m]),
      M.useEffect(() => {
        if (d) return ue(d), () => null;
        if (w) return ke.current && ue(ke.current), () => null;
        let I = A.current;
        l && (I = document.querySelector(`[id='${l}']`));
        let F = !0;
        return (
          pa({
            place: o,
            offset: i,
            elementReference: I,
            tooltipReference: R.current,
            tooltipArrowReference: B.current,
            strategy: s,
            middlewares: f,
          }).then((le) => {
            F &&
              (Object.keys(le.tooltipStyles).length && W(le.tooltipStyles),
              Object.keys(le.tooltipArrowStyles).length &&
                de(le.tooltipArrowStyles));
          }),
          () => {
            F = !1;
          }
        );
      }, [E, l, A, N, S, o, i, s, d]),
      M.useEffect(
        () => () => {
          X.current && clearTimeout(X.current),
            Y.current && clearTimeout(Y.current);
        },
        []
      );
    const U = Boolean(S || N || h),
      Q = Boolean(U && E && Object.keys(z).length > 0);
    return $
      ? xn.exports.jsxs(v, {
          id: e,
          role: "tooltip",
          className: fa("react-tooltip", cn.tooltip, cn[r], t, {
            [cn.show]: Q,
            [cn.fixed]: s === "fixed",
            [cn.clickable]: P,
          }),
          style: { ...c, ...z },
          ref: R,
          children: [
            h || (S && xn.exports.jsx(I1, { content: S })) || N,
            xn.exports.jsx(v, {
              className: fa("react-tooltip-arrow", cn.arrow, n, {
                [cn["no-arrow"]]: y,
              }),
              style: q,
              ref: B,
            }),
          ],
        })
      : null;
  },
  Bn = ({
    id: e,
    anchorId: t,
    content: n,
    html: r,
    className: l,
    classNameArrow: o,
    variant: i = "dark",
    place: u = "top",
    offset: s = 10,
    wrapper: f = "div",
    children: v = null,
    events: h = ["hover"],
    positionStrategy: m = "absolute",
    middlewares: p,
    delayShow: w = 0,
    delayHide: y = 0,
    float: P = !1,
    noArrow: a = !1,
    clickable: c = !1,
    closeOnEsc: d = !1,
    style: g,
    position: _,
    isOpen: N,
    setIsOpen: S,
    afterShow: L,
    afterHide: H,
  }) => {
    const [R, B] = M.useState(n),
      [X, Y] = M.useState(r),
      [z, W] = M.useState(u),
      [q, de] = M.useState(i),
      [E, j] = M.useState(s),
      [$, K] = M.useState(w),
      [oe, ke] = M.useState(y),
      [Se, Ze] = M.useState(P),
      [A, _e] = M.useState(f),
      [tt, Ye] = M.useState(h),
      [C, Z] = M.useState(m),
      { anchorRefs: V, activeAnchor: ue } = Uf(e),
      b = (G) =>
        G == null
          ? void 0
          : G.getAttributeNames().reduce((ee, D) => {
              var U;
              return (
                D.startsWith("data-tooltip-") &&
                  (ee[D.replace(/^data-tooltip-/, "")] =
                    (U = G == null ? void 0 : G.getAttribute(D)) !== null &&
                    U !== void 0
                      ? U
                      : null),
                ee
              );
            }, {}),
      ne = (G) => {
        const ee = {
          place: (D) => {
            var U;
            W((U = D) !== null && U !== void 0 ? U : u);
          },
          content: (D) => {
            B(D ?? n);
          },
          html: (D) => {
            Y(D ?? r);
          },
          variant: (D) => {
            var U;
            de((U = D) !== null && U !== void 0 ? U : i);
          },
          offset: (D) => {
            j(D === null ? s : Number(D));
          },
          wrapper: (D) => {
            var U;
            _e((U = D) !== null && U !== void 0 ? U : f);
          },
          events: (D) => {
            const U = D == null ? void 0 : D.split(" ");
            Ye(U ?? h);
          },
          "position-strategy": (D) => {
            var U;
            Z((U = D) !== null && U !== void 0 ? U : m);
          },
          "delay-show": (D) => {
            K(D === null ? w : Number(D));
          },
          "delay-hide": (D) => {
            ke(D === null ? y : Number(D));
          },
          float: (D) => {
            Ze(D === null ? P : Boolean(D));
          },
        };
        Object.values(ee).forEach((D) => D(null)),
          Object.entries(G).forEach(([D, U]) => {
            var Q;
            (Q = ee[D]) === null || Q === void 0 || Q.call(ee, U);
          });
      };
    M.useEffect(() => {
      B(n);
    }, [n]),
      M.useEffect(() => {
        Y(r);
      }, [r]),
      M.useEffect(() => {
        var G;
        const ee = new Set(V),
          D = document.querySelector(`[id='${t}']`);
        if ((D && ee.add({ current: D }), !ee.size)) return () => null;
        const U = (G = ue.current) !== null && G !== void 0 ? G : D,
          Q = new MutationObserver((F) => {
            F.forEach((le) => {
              var ye;
              if (
                !U ||
                le.type !== "attributes" ||
                !(
                  !((ye = le.attributeName) === null || ye === void 0) &&
                  ye.startsWith("data-tooltip-")
                )
              )
                return;
              const Ke = b(U);
              ne(Ke);
            });
          }),
          I = { attributes: !0, childList: !1, subtree: !1 };
        if (U) {
          const F = b(U);
          ne(F), Q.observe(U, I);
        }
        return () => {
          Q.disconnect();
        };
      }, [V, ue, t]);
    const re = {
      id: e,
      anchorId: t,
      className: l,
      classNameArrow: o,
      content: R,
      html: X,
      place: z,
      variant: q,
      offset: E,
      wrapper: A,
      events: tt,
      positionStrategy: C,
      middlewares: p,
      delayShow: $,
      delayHide: oe,
      float: Se,
      noArrow: a,
      clickable: c,
      closeOnEsc: d,
      style: g,
      position: _,
      isOpen: N,
      setIsOpen: S,
      afterShow: L,
      afterHide: H,
    };
    return v
      ? xn.exports.jsx(ma, { ...re, children: v })
      : xn.exports.jsx(ma, { ...re });
  };
var Wf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ha = Vt.createContext && Vt.createContext(Wf),
  tn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (tn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        tn.apply(this, arguments)
      );
    },
  A1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function Hf(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Vt.createElement(t.tag, tn({ key: n }, t.attr), Hf(t.child));
    })
  );
}
function D1(e) {
  return function (t) {
    return Vt.createElement(B1, tn({ attr: tn({}, e.attr) }, t), Hf(e.child));
  };
}
function B1(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      o = e.title,
      i = A1(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      Vt.createElement(
        "svg",
        tn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: s,
            style: tn(tn({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Vt.createElement("title", null, o),
        e.children
      )
    );
  };
  return ha !== void 0
    ? Vt.createElement(ha.Consumer, null, function (n) {
        return t(n);
      })
    : t(Wf);
}
function Un(e) {
  return D1({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" },
      },
      {
        tag: "path",
        attr: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" },
      },
    ],
  })(e);
}
const Wn = (e) => {
    navigator.clipboard.writeText(e);
  },
  U1 = ({ minDeposit: e }) => {
    var B, X, Y;
    const n = new URL(window.location.href).searchParams.get("transaction_id"),
      [r, l] = M.useState(!1),
      [o, i] = M.useState(1),
      [u, s] = M.useState({
        address: "",
        amount: "",
        bank: "",
        description: "",
      }),
      [f, v] = M.useState(!1),
      [h, m] = M.useState(""),
      [p, w] = M.useState([]),
      [y, P] = M.useState(),
      [a, c] = M.useState(""),
      [d, g] = M.useState({
        account_number: "Copy",
        NGNALLOW: "Copy",
        NGNLICENSE: "Copy",
        NGN: "Copy",
      }),
      _ = [
        {
          id: 1,
          type: "text",
          name: "address",
          placeholder: "Wallet Address",
          value: u.address,
          test_id: "form",
        },
        {
          id: 2,
          type: "text",
          name: "amount",
          placeholder: "Deposit Amount",
          value: u.amount,
          test_id: "form",
        },
        {
          id: 3,
          type: "text",
          name: "bank",
          placeholder: "Deposit Bank Name",
          value: u.bank,
          test_id: "form",
        },
        {
          id: 4,
          type: "text",
          name: "description",
          placeholder: "Transaction Description",
          value: u.description,
          test_id: "form",
        },
      ],
      N = (z) => {
        s({ ...u, [z.target.name]: z.target.value });
      },
      S = () => {
        m(""), w([]), i((z) => z - 1);
      },
      L = () => {
        const z = {
          bank_name: y == null ? void 0 : y.bank_name,
          amount: y == null ? void 0 : y.amount_to_pay.toString(),
          account_number: y == null ? void 0 : y.account_number,
          phone_number: y == null ? void 0 : y.phoneNumber,
          blockchain_address: u == null ? void 0 : u.address,
          transaction_narration: y == null ? void 0 : y.narration,
          memo: y == null ? void 0 : y.memo,
        };
        C1(z).then((W) => {
          console.log(W, "payment confirmation"),
            W != null && W.error
              ? typeof (W == null ? void 0 : W.error) == "string" &&
                (m(W == null ? void 0 : W.error), console.log(W))
              : c(W == null ? void 0 : W.message);
        });
      },
      H = (z) => {
        g({ ...d, [z]: "Copied!" }),
          setTimeout(() => {
            g({ ...d, [z]: "Copy!" });
          }, 2e3);
      },
      R = () => {
        m(""),
          w([]),
          l(!0),
          w1(u, n).then((z) => {
            l(!1),
              z != null && z.error
                ? (typeof (z == null ? void 0 : z.error) == "string" &&
                    (m(z == null ? void 0 : z.error), console.log(z)),
                  z != null && z.assets && w(z == null ? void 0 : z.assets))
                : (P(z), i(3));
          });
      };
    return T(gt, {
      children: [
        T("div", {
          className: "bg-white w-[100%]  md:w-[35%] py-4 px-[2.5%] rounded",
          children: [
            T("div", {
              className: "w-full p-3 flex flex-row bg-[#062638] rounded-lg",
              children: [
                T("div", {
                  className: "flex text-sm flex-col justify-start",
                  children: [
                    x("p", {
                      className: "text-white font-thin mb-2 text-left",
                      children: "Make Deposit",
                    }),
                    T("p", {
                      className:
                        "text-white font-thin text-left md:text-xs text-[0.7rem]",
                      children: [
                        o === 1 &&
                          "Please kindly fill in the necessary details for your deposit below.",
                        o === 2 &&
                          "Please confirm the details inputted for your deposit below.",
                        o === 3 &&
                          "You can buy your cowry token by depositing into the IFP account below.",
                      ],
                    }),
                  ],
                }),
                x(Pf, {}),
              ],
            }),
            h !== "" &&
              x("p", {
                className:
                  "text-xs  rounded  my-2 p-2 text-center bg-[#FCF4EA] text-[#818181]",
                children: h,
              }),
            (p == null ? void 0 : p.length) > 0 &&
              (p == null
                ? void 0
                : p.map(({ code: z, issuer: W }) =>
                    T(
                      "div",
                      {
                        className:
                          "flex flex-row justify-between items-center px-2 rounded bg-[#FCF4EA] w-full",
                        children: [
                          T("p", {
                            className: " text-xs font-thin text-[#818181]",
                            children: [z, ":"],
                          }),
                          x("input", {
                            type: "text",
                            value: W,
                            disabled: !0,
                            className:
                              "bg-transparent border-1 h-[45px]  border-[#FCF4EA] text-[#818181] w-full md:w-[85%] text-[0.65rem]  font-thin rounded",
                          }),
                          x(Un, {
                            id: z,
                            "data-tooltip-content": d == null ? void 0 : d[z],
                            onClick: () => {
                              Wn(W), H(z);
                            },
                            className: "mr-1 text-[#818181]",
                          }),
                          x(Bn, { anchorId: z }),
                        ],
                      },
                      z
                    )
                  )),
            T("div", {
              className: "flex flex-col items-center gap-6 mt-8  w-[100%]",
              children: [
                o === 1 &&
                  _.map(
                    ({
                      type: z,
                      placeholder: W,
                      name: q,
                      value: de,
                      id: E,
                      test_id: j,
                    }) =>
                      T(
                        "div",
                        {
                          className: "w-[100%] relative mb-2",
                          children: [
                            x(
                              "input",
                              {
                                type: z,
                                name: q,
                                placeholder: W,
                                value: de || "",
                                "data-testid": j,
                                maxLength: q === "account_number" ? 10 : 100,
                                onChange: N,
                                className: `px-4 border-1 h-[45px] ${
                                  q === "amount" &&
                                  e !== null &&
                                  parseFloat(e) > parseFloat(u.amount)
                                    ? "bg-[#FBE1E1]"
                                    : "bg-[#EDEDED]"
                                } text-black w-full md:w-[100%] text-xs  font-thin rounded`,
                              },
                              E
                            ),
                            q === "amount" && parseInt(u.amount) < 1e3,
                            x("p", {
                              className:
                                "text-[9px] text-[#414141] absolute top-[-0.9rem] px-1 left-0 md:left-0 bg-transparent",
                              children: W,
                            }),
                            q === "amount" &&
                              e !== null &&
                              parseFloat(e) > parseFloat(u.amount) &&
                              T("p", {
                                className:
                                  "text-[9px] px-1 text-right mr-8 mb-[-1rem] bg-white text-[#E50808]",
                                children: [
                                  "Sorry! you have to enter amount no less than ",
                                  ze.format(1e3),
                                ],
                              }),
                          ],
                        },
                        E
                      )
                  ),
                o == 2 &&
                  x(gt, {
                    children: T("div", {
                      className:
                        "border-[1px] border-[#F2F2F2] rounded-xl w-full p-4",
                      children: [
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Transaction Amount",
                            }),
                            x("p", {
                              className: " text-xs font-thin",
                              children: ze.format(
                                parseFloat(u == null ? void 0 : u.amount) || 0
                              ),
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Transaction fees",
                            }),
                            x("p", {
                              className: " text-xs font-thin",
                              children: ze.format(200),
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Total Payable",
                            }),
                            x("p", {
                              className: " text-xs font-medium",
                              children: ze.format(
                                parseFloat(u == null ? void 0 : u.amount) + 200
                              ),
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Wallet Address to Credit",
                            }),
                            T("p", {
                              className: " text-xs font-medium text-[#21C460]",
                              children: [
                                (B = u == null ? void 0 : u.address) == null
                                  ? void 0
                                  : B.substring(0, 5),
                                "...",
                                (Y = u == null ? void 0 : u.address) == null
                                  ? void 0
                                  : Y.substring(
                                      ((X = u == null ? void 0 : u.address) ==
                                      null
                                        ? void 0
                                        : X.length) - 4
                                    ),
                              ],
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Paying Bank",
                            }),
                            x("p", {
                              className: " text-xs font-medium ",
                              children: u == null ? void 0 : u.bank,
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Description",
                            }),
                            x("p", {
                              className: " text-xs font-medium ",
                              children: u == null ? void 0 : u.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                o !== 3 &&
                  T(gt, {
                    children: [
                      T("button", {
                        "data-testid": "submit_btn",
                        className: `${
                          (e !== null &&
                            parseFloat(e) > parseFloat(u.amount)) ||
                          u.bank === "" ||
                          u.description === ""
                            ? "bg-gray-300 text-black"
                            : "bg-[#062638] mt-2 text-white"
                        } rounded px-4 py-2 text-xs`,
                        disabled:
                          (e !== null &&
                            parseFloat(e) > parseFloat(u.amount)) ||
                          u.bank === "" ||
                          u.description === "",
                        onClick: () => {
                          o === 1 ? i(2) : o === 2 && R();
                        },
                        children: [
                          o === 1 && "Proceed",
                          o === 2 && !r && "Confirm Deposit",
                          o === 2 && r && "Confirming...",
                        ],
                      }),
                      e !== null &&
                        parseFloat(e) <= parseFloat(u.amount) &&
                        T("p", {
                          className: "font-thin text-xs text-[#818181]",
                          children: [
                            "You will receive ",
                            x("span", {
                              className: "text-[#062638] font-medium",
                              children: ze.format(parseFloat(u.amount)),
                            }),
                            " into your Wallet ",
                          ],
                        }),
                    ],
                  }),
                o == 3 &&
                  T(gt, {
                    children: [
                      x("p", {
                        className:
                          "text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded",
                        children: a !== "" && a,
                      }),
                      T("div", {
                        className:
                          "border-[1px] border-[#F2F2F2] rounded-xl w-full p-4",
                        children: [
                          a === "" &&
                            x("p", {
                              className:
                                "text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded",
                              children: y == null ? void 0 : y.message,
                            }),
                          T("div", {
                            className:
                              "flex flex-col justify-center items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Total Payable Amount",
                              }),
                              x("p", {
                                className: " text-lg font-medium",
                                children: ze.format(
                                  (y == null ? void 0 : y.amount_to_pay) || 0
                                ),
                              }),
                              T("div", {
                                className:
                                  "flex flex-row justify-center items-center",
                                children: [
                                  T("p", {
                                    className:
                                      " mr-2 font-thin text-[9px] text-[#818181]",
                                    children: [
                                      "Amount: ",
                                      x("span", {
                                        className: "text-[#21C460]",
                                        children: ze.format(
                                          (y == null ? void 0 : y.amount) || 0
                                        ),
                                      }),
                                    ],
                                  }),
                                  x("span", {
                                    className: "text-[#818181] text-xs",
                                    children: "|",
                                  }),
                                  T("p", {
                                    className:
                                      " ml-2 font-thin text-[9px] text-[#818181]",
                                    children: [
                                      "Transaction fee: ",
                                      x("span", {
                                        className: "text-[#21C460]",
                                        children: ze.format(
                                          parseFloat(
                                            y == null ? void 0 : y.fee
                                          ) || 0
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "IFP Account No",
                              }),
                              T("p", {
                                className:
                                  " text-xs font-medium flex flex-row items-center",
                                children: [
                                  x(Un, {
                                    id: "account_number",
                                    "data-tooltip-content": d.account_number,
                                    className: "mr-1",
                                    onClick: () => {
                                      Wn(y == null ? void 0 : y.account_number),
                                        H("account_number");
                                    },
                                  }),
                                  y == null ? void 0 : y.account_number,
                                ],
                              }),
                              x(Bn, { anchorId: "account_number" }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Memo",
                              }),
                              x("p", {
                                className: " text-xs font-medium",
                                children: y == null ? void 0 : y.memo,
                              }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Description/Narration",
                              }),
                              x("p", {
                                className: " text-xs font-medium ",
                                children: y == null ? void 0 : y.narration,
                              }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Bank Name",
                              }),
                              x("p", {
                                className: " text-xs font-medium ",
                                children: y == null ? void 0 : y.bank_name,
                              }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Provider Number",
                              }),
                              x("p", {
                                className: " text-xs font-medium ",
                                children: y == null ? void 0 : y.phoneNumber,
                              }),
                            ],
                          }),
                        ],
                      }),
                      x("div", {
                        className:
                          "flex flex-row justify-between items-center my-1",
                        children: f
                          ? x("p", {
                              className: "font-thin text-xs text-red-400",
                              children: "Oops! You have to try again",
                            })
                          : a === "" &&
                            T(gt, {
                              children: [
                                x("button", {
                                  className:
                                    "border-[#21C460] border mt-2 mr-2 rounded px-4 py-2 text-xs text-[#21C460]",
                                  onClick: () => null,
                                  children: "Report Problem",
                                }),
                                x("button", {
                                  "data-testid": "final_submit_btn",
                                  className:
                                    "bg-[#21C460] mt-2 ml-2 rounded px-4 py-2 text-xs text-white",
                                  onClick: L,
                                  children: "Payment Made",
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                o !== 1 &&
                  x("p", {
                    className:
                      "cursor-pointer text-[#818181] font-thin text-sm",
                    onClick: S,
                    children: "Back",
                  }),
              ],
            }),
          ],
        }),
        T("footer", {
          className: " text-[#062638] text-xs mt-4",
          children: [
            "Powered by  ",
            " ",
            " © ",
            " ",
            T("a", {
              href: "https://cowryprotocol.io/",
              children: ["Cowry Protocol  ", new Date().getFullYear()],
            }),
          ],
        }),
      ],
    });
  },
  ze = new Intl.NumberFormat("en-US", { style: "currency", currency: "NGN" }),
  W1 = ({ UserWalletBalance: e }) => {
    var B, X, Y, z, W, q, de, E, j, $, K, oe, ke, Se, Ze;
    const n = new URL(window.location.href).searchParams.get("transaction_id"),
      [r, l] = M.useState(!1),
      [o, i] = M.useState(1),
      [u, s] = M.useState({
        address: "",
        amount: "",
        bank: "",
        description: "",
        account_number: "",
        account_name: "",
        phone: "",
      }),
      [f, v] = M.useState(!1),
      [h, m] = M.useState(""),
      [p, w] = M.useState(),
      [y, P] = M.useState(""),
      [a, c] = M.useState([]),
      [d, g] = M.useState({
        blockchain_address: "Copy",
        deposit_asset_issuer: "Copy",
        memo: "Copy",
        NGNALLOW: "Copy",
        NGNLICENSE: "Copy",
        NGN: "Copy",
      }),
      _ = [
        {
          id: 1,
          type: "text",
          name: "amount",
          placeholder: "Withdraw Amount",
          value: u.amount,
          test_id: "form",
        },
        {
          id: 2,
          type: "text",
          name: "bank",
          placeholder: "Bank Name",
          value: u.bank,
          test_id: "form",
        },
        {
          id: 3,
          type: "text",
          name: "description",
          placeholder: "Transaction Description",
          value: u.description,
          test_id: "form",
        },
        {
          id: 4,
          type: "text",
          name: "account_number",
          placeholder: "Account Number",
          value: u.account_number,
          test_id: "form",
        },
        {
          id: 5,
          type: "text",
          name: "account_name",
          placeholder: "Account Name",
          value: u.account_name,
          test_id: "form",
        },
        {
          id: 6,
          type: "text",
          name: "phone",
          placeholder: "Phone Number",
          value: u.phone,
          test_id: "form",
        },
        {
          id: 7,
          type: "text",
          name: "address",
          placeholder: "Wallet Address to withdraw from",
          value: u.address,
          test_id: "form",
        },
      ],
      N = (A) => {
        s({ ...u, [A.target.name]: A.target.value });
      },
      S = () => {
        i((A) => A - 1);
      },
      L = (A) => {
        g({ ...d, [A]: "Copied!" }),
          setTimeout(() => {
            g({ ...d, [A]: "Copy!" });
          }, 2e3);
      },
      H = () => {
        S1(p == null ? void 0 : p.memo).then((A) => {
          P(A.msg);
        });
      },
      R = () => {
        m(""),
          c([]),
          l(!0),
          k1(u, n).then((A) => {
            l(!1),
              A != null && A.error
                ? (typeof (A == null ? void 0 : A.error) == "string" &&
                    m(A == null ? void 0 : A.error),
                  A != null && A.assets && c(A == null ? void 0 : A.assets))
                : (w(A), i(3), P(A == null ? void 0 : A.message));
          });
      };
    return T(gt, {
      children: [
        T("div", {
          className:
            "bg-white  xs:w-[100%]  md:w-[35%] py-4 px-[2.5%] rounded mt-12",
          children: [
            T("div", {
              className: "w-full p-3 flex flex-row bg-[#062638] rounded-lg",
              children: [
                T("div", {
                  className: "flex text-sm flex-col justify-start",
                  children: [
                    x("p", {
                      className: "text-white font-thin mb-2 text-left",
                      children: "Request Withdraw",
                    }),
                    T("p", {
                      className:
                        "text-white font-thin text-left md:text-xs text-[0.7rem]",
                      children: [
                        o === 1 &&
                          "You can withdraw from your cowry account by paying into the wallet details given below.",
                        o === 2 && "Please confirm withdrawal details below.",
                        o === 3 && "Please confirm withdrawal details below.",
                      ],
                    }),
                  ],
                }),
                x(Pf, {}),
              ],
            }),
            h !== "" &&
              x("p", {
                className:
                  "text-xs rounded  my-2 p-2 text-center bg-[#FCF4EA] text-[#818181]",
                children: h,
              }),
            (a == null ? void 0 : a.length) > 0 &&
              (a == null
                ? void 0
                : a.map(({ code: A, issuer: _e }) =>
                    T(
                      "div",
                      {
                        className:
                          "flex flex-row justify-between items-center px-2 rounded bg-[#FCF4EA] w-full",
                        children: [
                          T("p", {
                            className:
                              " text-[0.65rem] font-thin text-[#818181]",
                            children: [A, ":"],
                          }),
                          x("input", {
                            type: "text",
                            value: _e,
                            disabled: !0,
                            className:
                              "bg-transparent border-1 h-[45px]  border-[#FCF4EA] text-[#818181] w-full md:w-[85%] text-[0.65rem]  font-thin rounded",
                          }),
                          x(Un, {
                            id: A,
                            "data-tooltip-content": d == null ? void 0 : d[A],
                            onClick: () => {
                              Wn(_e), L(A);
                            },
                            className: "mr-1 text-[#818181]",
                          }),
                          x(Bn, { anchorId: A }),
                        ],
                      },
                      A
                    )
                  )),
            T("div", {
              className: "flex flex-col items-center gap-6 mt-8  w-[100%]",
              children: [
                o === 1 &&
                  _.map(
                    ({
                      type: A,
                      placeholder: _e,
                      name: tt,
                      value: Ye,
                      id: C,
                      test_id: Z,
                    }) =>
                      T(
                        "div",
                        {
                          className: "w-[100%] relative mb-2",
                          children: [
                            x(
                              "input",
                              {
                                type: A,
                                name: tt,
                                placeholder: _e,
                                value: Ye || "",
                                "data-testid": Z,
                                maxLength: tt === "account_number" ? 10 : 100,
                                onChange: N,
                                className: `px-4 border-1 h-[45px] ${
                                  tt === "amount" &&
                                  e !== null &&
                                  parseFloat(e) < parseFloat(u.amount)
                                    ? "bg-[#FBE1E1]"
                                    : "bg-[#EDEDED]"
                                } text-black w-full md:w-[100%] text-xs  font-thin rounded`,
                              },
                              C
                            ),
                            x("p", {
                              className:
                                "text-[9px] text-[#414141] absolute top-[-0.9rem] px-1 left-0 md:left-0 bg-transparent",
                              children: _e,
                            }),
                            tt === "amount" &&
                              T("p", {
                                className:
                                  "text-[9px] text-[#414141]  px-1 text-right mb-[-1rem] bg-white",
                                children: [
                                  "Wallet balance:",
                                  e !== null
                                    ? x("span", {
                                        className: "text-[#21C460]",
                                        children: ze.format(e),
                                      })
                                    : " ₦0.00",
                                ],
                              }),
                          ],
                        },
                        C
                      )
                  ),
                o == 2 &&
                  x(gt, {
                    children: T("div", {
                      className:
                        "border-[1px] border-[#F2F2F2] rounded-xl w-full p-4",
                      children: [
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Transaction Amount",
                            }),
                            x("p", {
                              className: " text-xs font-thin",
                              children: ze.format(
                                parseFloat(u == null ? void 0 : u.amount) || 0
                              ),
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Transaction fees",
                            }),
                            x("p", {
                              className: " text-xs font-thin",
                              children: ze.format(200),
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Total Withrawable",
                            }),
                            x("p", {
                              className: " text-xs font-medium",
                              children: ze.format(
                                parseFloat(u == null ? void 0 : u.amount) + 200
                              ),
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Account Number",
                            }),
                            x("p", {
                              className: " text-xs font-medium text-[#21C460]",
                              children: u == null ? void 0 : u.account_number,
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Account Name",
                            }),
                            x("p", {
                              className: " text-xs font-medium ",
                              children: u == null ? void 0 : u.account_name,
                            }),
                          ],
                        }),
                        T("div", {
                          className:
                            "flex flex-row justify-between items-center my-2",
                          children: [
                            x("p", {
                              className: " text-xs font-thin text-[#414141]",
                              children: "Description",
                            }),
                            x("p", {
                              className: " text-xs font-medium ",
                              children: u == null ? void 0 : u.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                o !== 3 &&
                  T(gt, {
                    children: [
                      T("button", {
                        "data-testid": "submit_btn",
                        className: `${
                          (e !== null &&
                            parseFloat(e) < parseFloat(u.amount)) ||
                          u.bank === "" ||
                          u.account_name === "" ||
                          u.account_number === "" ||
                          u.account_number.length < 10 ||
                          u.phone === "" ||
                          u.description === "" ||
                          u.amount === "" ||
                          u.address === ""
                            ? "bg-gray-300 text-black"
                            : "bg-[#062638] mt-2 text-white"
                        } rounded px-4 py-2 text-xs`,
                        disabled:
                          (e !== null &&
                            parseFloat(e) < parseFloat(u.amount)) ||
                          u.bank === "" ||
                          u.account_name === "" ||
                          u.account_number === "" ||
                          u.account_number.length < 10 ||
                          u.phone === "" ||
                          u.description === "" ||
                          u.amount === "" ||
                          u.address === "",
                        onClick: () => {
                          o === 1 ? i(2) : o === 2 && R();
                        },
                        children: [
                          o === 1 && "Withdraw",
                          o === 2 && !r && "Confirm Withdrawal",
                          o === 2 && r && "Confirming...",
                        ],
                      }),
                      e !== null &&
                        parseFloat(e) >= parseFloat(u.amount) &&
                        T("p", {
                          className: "font-thin text-xs text-[#818181]",
                          children: [
                            "You will receive ",
                            x("span", {
                              className: "text-[#062638] font-medium",
                              children: ze.format(parseFloat(u.amount)),
                            }),
                            " into your fiat account ",
                          ],
                        }),
                    ],
                  }),
                o == 3 &&
                  T(gt, {
                    children: [
                      x("p", {
                        className:
                          "text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded",
                        children: y !== "" && y,
                      }),
                      T("div", {
                        className:
                          "border-[1px] border-[#F2F2F2] rounded-xl w-full p-4",
                        children: [
                          y === "" &&
                            x("p", {
                              className:
                                "text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded",
                              children: p == null ? void 0 : p.message,
                            }),
                          T("div", {
                            className:
                              "flex flex-col justify-center items-center my-1",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Total Withdrawable Amount",
                              }),
                              x("p", {
                                className: " text-lg font-medium",
                                children: ze.format(
                                  ((B = p == null ? void 0 : p.user_details) ==
                                  null
                                    ? void 0
                                    : B.expected_amount_with_fee) || 0
                                ),
                              }),
                              T("div", {
                                className:
                                  "flex flex-row justify-center items-center",
                                children: [
                                  T("p", {
                                    className:
                                      " mr-2 font-thin text-[9px] text-[#818181]",
                                    children: [
                                      "Amount: ",
                                      x("span", {
                                        className: "text-[#21C460]",
                                        children: ze.format(
                                          ((X =
                                            p == null
                                              ? void 0
                                              : p.user_details) == null
                                            ? void 0
                                            : X.amount) || 0
                                        ),
                                      }),
                                    ],
                                  }),
                                  x("span", {
                                    className: "text-[#818181] text-xs",
                                    children: "|",
                                  }),
                                  T("p", {
                                    className:
                                      " ml-2 font-thin text-[9px] text-[#818181]",
                                    children: [
                                      "Transaction fee: ",
                                      x("span", {
                                        className: "text-[#21C460]",
                                        children: ze.format(
                                          ((Y =
                                            p == null
                                              ? void 0
                                              : p.user_details) == null
                                            ? void 0
                                            : Y.expected_amount_with_fee) -
                                            ((z =
                                              p == null
                                                ? void 0
                                                : p.user_details) == null
                                              ? void 0
                                              : z.amount) || 0
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-2",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Withdrawal Address",
                              }),
                              T("p", {
                                className:
                                  " text-xs font-medium flex flex-row items-center",
                                children: [
                                  x(Un, {
                                    id: "blockchain_address",
                                    "data-tooltip-content":
                                      d == null ? void 0 : d.blockchain_address,
                                    onClick: () => {
                                      Wn(
                                        p == null
                                          ? void 0
                                          : p.blockchain_address
                                      ),
                                        L("blockchain_address");
                                    },
                                    className: "mr-1",
                                  }),
                                  (W =
                                    p == null
                                      ? void 0
                                      : p.blockchain_address) == null
                                    ? void 0
                                    : W.substring(0, 5),
                                  "...",
                                  (de =
                                    p == null
                                      ? void 0
                                      : p.blockchain_address) == null
                                    ? void 0
                                    : de.substring(
                                        ((q =
                                          p == null
                                            ? void 0
                                            : p.blockchain_address) == null
                                          ? void 0
                                          : q.length) - 4
                                      ),
                                ],
                              }),
                              x(Bn, { anchorId: "blockchain_address" }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-2",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Asset Details (Issuer)",
                              }),
                              T("p", {
                                className:
                                  " text-xs font-medium flex flex-row items-center",
                                children: [
                                  x(Un, {
                                    id: "deposit_asset_issuer",
                                    "data-tooltip-content":
                                      d == null
                                        ? void 0
                                        : d.deposit_asset_issuer,
                                    className: "mr-1",
                                    onClick: () => {
                                      Wn(
                                        p == null
                                          ? void 0
                                          : p.deposit_asset_issuer
                                      ),
                                        L("deposit_asset_issuer");
                                    },
                                  }),
                                  (E =
                                    p == null
                                      ? void 0
                                      : p.deposit_asset_issuer) == null
                                    ? void 0
                                    : E.substring(0, 5),
                                  "...",
                                  ($ =
                                    p == null
                                      ? void 0
                                      : p.deposit_asset_issuer) == null
                                    ? void 0
                                    : $.substring(
                                        ((j =
                                          p == null
                                            ? void 0
                                            : p.deposit_asset_issuer) == null
                                          ? void 0
                                          : j.length) - 4
                                      ),
                                ],
                              }),
                              x(Bn, { anchorId: "deposit_asset_issuer" }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-2",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Asset Code",
                              }),
                              x("p", {
                                className:
                                  " text-xs font-medium flex flex-row items-center",
                                children:
                                  p == null ? void 0 : p.deposit_asset_code,
                              }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-2",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Memo",
                              }),
                              T("p", {
                                className:
                                  " text-xs font-medium flex flex-row items-center",
                                children: [
                                  x(Un, {
                                    id: "memo",
                                    "data-tooltip-content":
                                      d == null ? void 0 : d.memo,
                                    className: "mr-1",
                                    onClick: () => {
                                      Wn(p == null ? void 0 : p.memo),
                                        L("memo");
                                    },
                                  }),
                                  p == null ? void 0 : p.memo,
                                ],
                              }),
                              x(Bn, { anchorId: "memo" }),
                            ],
                          }),
                          T("div", {
                            className:
                              "flex flex-row justify-between items-center my-2",
                            children: [
                              x("p", {
                                className: " text-xs font-thin text-[#414141]",
                                children: "Depositing Address",
                              }),
                              T("p", {
                                className: " text-xs font-medium ",
                                children: [
                                  (oe =
                                    (K = p == null ? void 0 : p.user_details) ==
                                    null
                                      ? void 0
                                      : K.blockchain_address) == null
                                    ? void 0
                                    : oe.substring(0, 5),
                                  "...",
                                  (Ze = p == null ? void 0 : p.user_details) ==
                                  null
                                    ? void 0
                                    : Ze.blockchain_address.substring(
                                        ((Se =
                                          (ke =
                                            p == null
                                              ? void 0
                                              : p.user_details) == null
                                            ? void 0
                                            : ke.blockchain_address) == null
                                          ? void 0
                                          : Se.length) - 4
                                      ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      x("div", {
                        className:
                          "flex flex-row justify-between items-center my-1",
                        children: f
                          ? x("p", {
                              className: "font-thin text-xs text-red-400",
                              children: "Oops! You have to try again",
                            })
                          : y !== "we are updating your balance right away" &&
                            T(gt, {
                              children: [
                                x("button", {
                                  className:
                                    "border-[#21C460] border mt-2 mr-2 rounded px-4 py-2 text-xs text-[#21C460]",
                                  onClick: () => null,
                                  children: "Report Problem",
                                }),
                                x("button", {
                                  className:
                                    "bg-[#21C460] mt-2 ml-2 rounded px-4 py-2 text-xs text-white",
                                  onClick: H,
                                  children: "Payment Made",
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                o !== 1 &&
                  x("p", {
                    className:
                      "cursor-pointer text-[#818181] font-thin text-sm",
                    onClick: S,
                    children: "Back",
                  }),
              ],
            }),
          ],
        }),
        T("footer", {
          className: "text-[#062638] text-xs mt-4",
          children: [
            "Powered by  ",
            " ",
            " © ",
            " ",
            T("a", {
              href: "https://cowryprotocol.io/",
              children: ["Cowry Protocol  ", new Date().getFullYear()],
            }),
          ],
        }),
      ],
    });
  };
class H1 {
  constructor() {
    Le(this, "open");
    Le(this, "widgetIcon");
    Le(this, "initialButton");
    Le(this, "modalContainer");
    Le(this, "closeIcon");
    Le(this, "widgetContainer");
    Le(this, "modalInner");
    Le(this, "showButton");
    (this.open = !1), (this.showButton = !1), this.initialize();
  }
  async initialize() {
    const t = document.createElement("button");
    t.classList.add(
      "bg-[#2EC363]",
      "hidden",
      "mt-4",
      "text-white",
      "rounded",
      "px-4",
      "py-2",
      "text-xs",
      "openModal"
    ),
      (t.innerHTML = "Withdraw"),
      t.setAttribute("id", "withdraw_button"),
      (this.initialButton = t);
    const n = document.createElement("div");
    (n.style.position = "fixed"),
      (n.style.zIndex = "100"),
      n.classList.add(
        "w-full",
        "h-[100vh]",
        "bg-[#f1f1f1]",
        "p-8",
        "overflow-x-auto"
      ),
      n.setAttribute("id", "modalRoot"),
      (this.modalContainer = n);
    const r = document.createElement("div");
    r.classList.add(
      "md:w-[90%]",
      "w-100%",
      "h-[auto]",
      "md:h-[90vh]",
      "bg-transparent",
      "flex",
      "flex-col",
      "justify-center",
      "items-center"
    ),
      (this.modalInner = r);
    const l = document.createElement("span");
    (l.innerHTML = Ea),
      l.classList.add(
        "cursor-pointer",
        "flex",
        "p-4",
        "rounded-full",
        "flex-col",
        "items-center",
        "justify-center",
        "bg-black",
        "absolute",
        "right-4",
        "top-4"
      ),
      (this.closeIcon = l),
      n.appendChild(this.closeIcon),
      n.append(r),
      document.body.appendChild(t),
      t.addEventListener("click", this.toggleOpen.bind(this)),
      l.addEventListener("click", this.toggleOpen.bind(this));
  }
  show() {
    (this.showButton = !this.showButton),
      this.showButton
        ? (this.initialButton.classList.add("block"),
          this.initialButton.classList.remove("hidden"))
        : (this.initialButton.classList.add("hidden"),
          this.initialButton.classList.remove("block"));
  }
  toggleOpen() {
    (this.open = !this.open),
      this.open
        ? (this.modalContainer.classList.add("absolute", "top-0"),
          Lf.render(x(W1, { UserWalletBalance: "2000" }), this.modalInner),
          document.body.appendChild(this.modalContainer))
        : document.body.removeChild(this.modalContainer);
  }
}
function V1() {
  return new H1();
}
class Q1 {
  constructor() {
    Le(this, "open");
    Le(this, "widgetIcon");
    Le(this, "initialButton");
    Le(this, "modalContainer");
    Le(this, "closeIcon");
    Le(this, "widgetContainer");
    Le(this, "modalInner");
    Le(this, "showButton");
    (this.open = !1), this.initialize(), (this.showButton = !1);
  }
  async initialize() {
    const t = document.createElement("button");
    t.classList.add(
      "bg-[#2EC363]",
      "hidden",
      "mt-4",
      "text-white",
      "rounded",
      "px-4",
      "py-2",
      "text-xs",
      "openModal"
    ),
      (t.innerHTML = "Deposit"),
      t.setAttribute("id", "deposit_button"),
      (this.initialButton = t);
    const n = document.createElement("div");
    (n.style.position = "fixed"),
      (n.style.zIndex = "100"),
      n.classList.add(
        "w-full",
        "h-[auto]",
        "md:h-[100vh]",
        "bg-[#f1f1f1]",
        "p-8"
      ),
      n.setAttribute("id", "modalRoot"),
      (this.modalContainer = n);
    const r = document.createElement("div");
    r.classList.add(
      "md:w-[90%]",
      "w-100%",
      "h-[90vh]",
      "bg-transparent",
      "flex",
      "flex-col",
      "justify-center",
      "items-center"
    ),
      (this.modalInner = r);
    const l = document.createElement("span");
    (l.innerHTML = Ea),
      l.classList.add(
        "cursor-pointer",
        "flex",
        "p-4",
        "rounded-full",
        "flex-col",
        "items-center",
        "justify-center",
        "bg-black",
        "absolute",
        "right-4",
        "top-4"
      ),
      (this.closeIcon = l),
      n.appendChild(this.closeIcon),
      n.append(r),
      document.body.appendChild(t),
      t.addEventListener("click", this.toggleOpen.bind(this)),
      l.addEventListener("click", this.toggleOpen.bind(this));
  }
  show() {
    (this.showButton = !this.showButton),
      this.showButton
        ? (this.initialButton.classList.add("block"),
          this.initialButton.classList.remove("hidden"))
        : (this.initialButton.classList.add("hidden"),
          this.initialButton.classList.remove("block"));
  }
  toggleOpen() {
    (this.open = !this.open),
      this.open
        ? (this.modalContainer.classList.add("absolute", "top-0"),
          Lf.render(x(U1, { minDeposit: "1000" }), this.modalInner),
          document.body.appendChild(this.modalContainer))
        : document.body.removeChild(this.modalContainer);
  }
}
function Z1() {
  return new Q1();
}
const Y1 = V1(),
  K1 = Z1();
console.log(
  "Cowry Protocol Widget script running on your application! Thanks****"
);
Y1.show();
K1.show();
