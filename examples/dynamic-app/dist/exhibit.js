/* single-spa@5.9.1 - ESM - prod */
var t = Object.freeze({
  __proto__: null,

  get start() {
    return xt;
  },

  get ensureJQuerySupport() {
    return ft;
  },

  get setBootstrapMaxTime() {
    return F;
  },

  get setMountMaxTime() {
    return J;
  },

  get setUnmountMaxTime() {
    return H;
  },

  get setUnloadMaxTime() {
    return Q;
  },

  get registerApplication() {
    return Pt;
  },

  get unregisterApplication() {
    return Tt;
  },

  get getMountedApps() {
    return Et;
  },

  get getAppStatus() {
    return Ot;
  },

  get unloadApplication() {
    return At;
  },

  get checkActivityFunctions() {
    return bt;
  },

  get getAppNames() {
    return yt;
  },

  get pathToActiveWhen() {
    return _t;
  },

  get navigateToUrl() {
    return nt;
  },

  get triggerAppChange() {
    return Mt;
  },

  get addErrorHandler() {
    return a;
  },

  get removeErrorHandler() {
    return c;
  },

  get mountRootParcel() {
    return C;
  },

  get NOT_LOADED() {
    return l;
  },

  get LOADING_SOURCE_CODE() {
    return p;
  },

  get NOT_BOOTSTRAPPED() {
    return h;
  },

  get BOOTSTRAPPING() {
    return m;
  },

  get NOT_MOUNTED() {
    return d;
  },

  get MOUNTING() {
    return v;
  },

  get UPDATING() {
    return g;
  },

  get LOAD_ERROR() {
    return y;
  },

  get MOUNTED() {
    return w;
  },

  get UNMOUNTING() {
    return E;
  },

  get SKIP_BECAUSE_BROKEN() {
    return O;
  }

});

function n(t) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}

function e(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}

var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).CustomEvent,
    o = function () {
  try {
    var t = new r("cat", {
      detail: {
        foo: "bar"
      }
    });
    return "cat" === t.type && "bar" === t.detail.foo;
  } catch (t) {}

  return !1;
}() ? r : "undefined" != typeof document && "function" == typeof document.createEvent ? function (t, n) {
  var e = document.createEvent("CustomEvent");
  return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e;
} : function (t, n) {
  var e = document.createEventObject();
  return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e;
},
    i = [];

function u(t, n, e) {
  var r = f(t, n, e);
  i.length ? i.forEach(function (t) {
    return t(r);
  }) : setTimeout(function () {
    throw r;
  });
}

function a(t) {
  if ("function" != typeof t) throw Error(s(28, !1));
  i.push(t);
}

function c(t) {
  if ("function" != typeof t) throw Error(s(29, !1));
  var n = !1;
  return i = i.filter(function (e) {
    var r = e === t;
    return n = n || r, !r;
  }), n;
}

function s(t, n) {
  for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];

  return "single-spa minified message #".concat(t, ": ").concat(n ? n + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(r.length ? "&arg=".concat(r.join("&arg=")) : "");
}

function f(t, n, e) {
  var r,
      o = "".concat(N(n), " '").concat(T(n), "' died in status ").concat(n.status, ": ");

  if (t instanceof Error) {
    try {
      t.message = o + t.message;
    } catch (t) {}

    r = t;
  } else {
    console.warn(s(30, !1, n.status, T(n)));

    try {
      r = Error(o + JSON.stringify(t));
    } catch (n) {
      r = t;
    }
  }

  return r.appOrParcelName = T(n), n.status = e, r;
}

var l = "NOT_LOADED",
    p = "LOADING_SOURCE_CODE",
    h = "NOT_BOOTSTRAPPED",
    m = "BOOTSTRAPPING",
    d = "NOT_MOUNTED",
    v = "MOUNTING",
    w = "MOUNTED",
    g = "UPDATING",
    E = "UNMOUNTING",
    y = "LOAD_ERROR",
    O = "SKIP_BECAUSE_BROKEN";

function P(t) {
  return t.status === w;
}

function b(t) {
  try {
    return t.activeWhen(window.location);
  } catch (n) {
    return u(n, t, O), !1;
  }
}

function T(t) {
  return t.name;
}

function A(t) {
  return Boolean(t.unmountThisParcel);
}

function N(t) {
  return A(t) ? "parcel" : "application";
}

function S() {
  for (var t = arguments.length - 1; t > 0; t--) for (var n in arguments[t]) "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);

  return arguments[0];
}

function _(t, n) {
  for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];

  return null;
}

function D(t) {
  return t && ("function" == typeof t || (n = t, Array.isArray(n) && !_(n, function (t) {
    return "function" != typeof t;
  })));
  var n;
}

function U(t, n) {
  var e = t[n] || [];
  0 === (e = Array.isArray(e) ? e : [e]).length && (e = [function () {
    return Promise.resolve();
  }]);
  var r = N(t),
      o = T(t);
  return function (t) {
    return e.reduce(function (e, i, u) {
      return e.then(function () {
        var e = i(t);
        return j(e) ? e : Promise.reject(s(15, !1, r, o, n, u));
      });
    }, Promise.resolve());
  };
}

function j(t) {
  return t && "function" == typeof t.then && "function" == typeof t.catch;
}

function M(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== h ? t : (t.status = m, t.bootstrap ? V(t, "bootstrap").then(e).catch(function (e) {
      if (n) throw f(e, t, O);
      return u(e, t, O), t;
    }) : Promise.resolve().then(e));
  });

  function e() {
    return t.status = d, t;
  }
}

function L(t, n) {
  return Promise.resolve().then(function () {
    if (t.status !== w) return t;
    t.status = E;
    var e = Object.keys(t.parcels).map(function (n) {
      return t.parcels[n].unmountThisParcel();
    });
    return Promise.all(e).then(r, function (e) {
      return r().then(function () {
        var r = Error(e.message);
        if (n) throw f(r, t, O);
        u(r, t, O);
      });
    }).then(function () {
      return t;
    });

    function r() {
      return V(t, "unmount").then(function () {
        t.status = d;
      }).catch(function (e) {
        if (n) throw f(e, t, O);
        u(e, t, O);
      });
    }
  });
}

var R = !1,
    I = !1;

function x(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== d ? t : (R || (window.dispatchEvent(new o("single-spa:before-first-mount")), R = !0), V(t, "mount").then(function () {
      return t.status = w, I || (window.dispatchEvent(new o("single-spa:first-mount")), I = !0), t;
    }).catch(function (e) {
      return t.status = w, L(t, !0).then(r, r);

      function r() {
        if (n) throw f(e, t, O);
        return u(e, t, O), t;
      }
    }));
  });
}

var B = 0,
    G = {
  parcels: {}
};

function C() {
  return W.apply(G, arguments);
}

function W(t, e) {
  var r = this;
  if (!t || "object" !== n(t) && "function" != typeof t) throw Error(s(2, !1));
  if (t.name && "string" != typeof t.name) throw Error(s(3, !1, n(t.name)));
  if ("object" !== n(e)) throw Error(s(4, !1, name, n(e)));
  if (!e.domElement) throw Error(s(5, !1, name));
  var o,
      i = B++,
      u = "function" == typeof t,
      a = u ? t : function () {
    return Promise.resolve(t);
  },
      c = {
    id: i,
    parcels: {},
    status: u ? p : h,
    customProps: e,
    parentName: T(r),
    unmountThisParcel: function () {
      return y.then(function () {
        if (c.status !== w) throw Error(s(6, !1, name, c.status));
        return L(c, !0);
      }).then(function (t) {
        return c.parentName && delete r.parcels[c.id], t;
      }).then(function (t) {
        return m(t), t;
      }).catch(function (t) {
        throw c.status = O, v(t), t;
      });
    }
  };
  r.parcels[i] = c;
  var l = a();
  if (!l || "function" != typeof l.then) throw Error(s(7, !1));
  var m,
      v,
      E = (l = l.then(function (t) {
    if (!t) throw Error(s(8, !1));
    var n = t.name || "parcel-".concat(i);
    if (Object.prototype.hasOwnProperty.call(t, "bootstrap") && !D(t.bootstrap)) throw Error(s(9, !1, n));
    if (!D(t.mount)) throw Error(s(10, !1, n));
    if (!D(t.unmount)) throw Error(s(11, !1, n));
    if (t.update && !D(t.update)) throw Error(s(12, !1, n));
    var e = U(t, "bootstrap"),
        r = U(t, "mount"),
        u = U(t, "unmount");
    c.status = h, c.name = n, c.bootstrap = e, c.mount = r, c.unmount = u, c.timeouts = q(t.timeouts), t.update && (c.update = U(t, "update"), o.update = function (t) {
      return c.customProps = t, $(function (t) {
        return Promise.resolve().then(function () {
          if (t.status !== w) throw Error(s(32, !1, T(t)));
          return t.status = g, V(t, "update").then(function () {
            return t.status = w, t;
          }).catch(function (n) {
            throw f(n, t, O);
          });
        });
      }(c));
    });
  })).then(function () {
    return M(c, !0);
  }),
      y = E.then(function () {
    return x(c, !0);
  }),
      P = new Promise(function (t, n) {
    m = t, v = n;
  });
  return o = {
    mount: function () {
      return $(Promise.resolve().then(function () {
        if (c.status !== d) throw Error(s(13, !1, name, c.status));
        return r.parcels[i] = c, x(c);
      }));
    },
    unmount: function () {
      return $(c.unmountThisParcel());
    },
    getStatus: function () {
      return c.status;
    },
    loadPromise: $(l),
    bootstrapPromise: $(E),
    mountPromise: $(y),
    unmountPromise: $(P)
  };
}

function $(t) {
  return t.then(function () {
    return null;
  });
}

function k(e) {
  var r = T(e),
      o = "function" == typeof e.customProps ? e.customProps(r, window.location) : e.customProps;
  ("object" !== n(o) || null === o || Array.isArray(o)) && (o = {}, console.warn(s(40, !1), r, o));
  var i = S({}, o, {
    name: r,
    mountParcel: W.bind(e),
    singleSpa: t
  });
  return A(e) && (i.unmountSelf = e.unmountThisParcel), i;
}

var K = {
  bootstrap: {
    millis: 4e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  mount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unmount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unload: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  update: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  }
};

function F(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(16, !1));
  K.bootstrap = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function J(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(17, !1));
  K.mount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function H(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(18, !1));
  K.unmount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function Q(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(s(19, !1));
  K.unload = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function V(t, n) {
  var e = t.timeouts[n],
      r = e.warningMillis,
      o = N(t);
  return new Promise(function (i, u) {
    var a = !1,
        c = !1;
    t[n](k(t)).then(function (t) {
      a = !0, i(t);
    }).catch(function (t) {
      a = !0, u(t);
    }), setTimeout(function () {
      return l(1);
    }, r), setTimeout(function () {
      return l(!0);
    }, e.millis);
    var f = s(31, !1, n, o, T(t), e.millis);

    function l(t) {
      if (!a) if (!0 === t) c = !0, e.dieOnTimeout ? u(Error(f)) : console.error(f);else if (!c) {
        var n = t,
            o = n * r;
        console.warn(f), o + r < e.millis && setTimeout(function () {
          return l(n + 1);
        }, r);
      }
    }
  });
}

function q(t) {
  var n = {};

  for (var e in K) n[e] = S({}, K[e], t && t[e] || {});

  return n;
}

function z(t) {
  return Promise.resolve().then(function () {
    return t.loadPromise ? t.loadPromise : t.status !== l && t.status !== y ? t : (t.status = p, t.loadPromise = Promise.resolve().then(function () {
      var o = t.loadApp(k(t));
      if (!j(o)) throw r = !0, Error(s(33, !1, T(t)));
      return o.then(function (r) {
        var o;
        t.loadErrorTime = null, "object" !== n(e = r) && (o = 34), Object.prototype.hasOwnProperty.call(e, "bootstrap") && !D(e.bootstrap) && (o = 35), D(e.mount) || (o = 36), D(e.unmount) || (o = 37);
        var i = N(e);

        if (o) {
          var a;

          try {
            a = JSON.stringify(e);
          } catch (t) {}

          return console.error(s(o, !1, i, T(t), a), e), u(void 0, t, O), t;
        }

        return e.devtools && e.devtools.overlays && (t.devtools.overlays = S({}, t.devtools.overlays, e.devtools.overlays)), t.status = h, t.bootstrap = U(e, "bootstrap"), t.mount = U(e, "mount"), t.unmount = U(e, "unmount"), t.unload = U(e, "unload"), t.timeouts = q(e.timeouts), delete t.loadPromise, t;
      });
    }).catch(function (n) {
      var e;
      return delete t.loadPromise, r ? e = O : (e = y, t.loadErrorTime = new Date().getTime()), u(n, t, e), t;
    }));
    var e, r;
  });
}

var X,
    Y = "undefined" != typeof window,
    Z = {
  hashchange: [],
  popstate: []
},
    tt = ["hashchange", "popstate"];

function nt(t) {
  var n;
  if ("string" == typeof t) n = t;else if (this && this.href) n = this.href;else {
    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(s(14, !1));
    n = t.currentTarget.href, t.preventDefault();
  }
  var e = ct(window.location.href),
      r = ct(n);
  0 === n.indexOf("#") ? window.location.hash = r.hash : e.host !== r.host && r.host ? window.location.href = n : r.pathname === e.pathname && r.search === e.search ? window.location.hash = r.hash : window.history.pushState(null, null, n);
}

function et(t) {
  var n = this;

  if (t) {
    var e = t[0].type;
    tt.indexOf(e) >= 0 && Z[e].forEach(function (e) {
      try {
        e.apply(n, t);
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    });
  }
}

function rt() {
  Lt([], arguments);
}

function ot(t, n) {
  return function () {
    var e = window.location.href,
        r = t.apply(this, arguments),
        o = window.location.href;
    return X && e === o || (Bt() ? window.dispatchEvent(it(window.history.state, n)) : Lt([])), r;
  };
}

function it(t, n) {
  var e;

  try {
    e = new PopStateEvent("popstate", {
      state: t
    });
  } catch (n) {
    (e = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, t);
  }

  return e.singleSpa = !0, e.singleSpaTrigger = n, e;
}

if (Y) {
  window.addEventListener("hashchange", rt), window.addEventListener("popstate", rt);
  var ut = window.addEventListener,
      at = window.removeEventListener;
  window.addEventListener = function (t, n) {
    if (!("function" == typeof n && tt.indexOf(t) >= 0) || _(Z[t], function (t) {
      return t === n;
    })) return ut.apply(this, arguments);
    Z[t].push(n);
  }, window.removeEventListener = function (t, n) {
    if (!("function" == typeof n && tt.indexOf(t) >= 0)) return at.apply(this, arguments);
    Z[t] = Z[t].filter(function (t) {
      return t !== n;
    });
  }, window.history.pushState = ot(window.history.pushState, "pushState"), window.history.replaceState = ot(window.history.replaceState, "replaceState"), window.singleSpaNavigate ? console.warn(s(41, !1)) : window.singleSpaNavigate = nt;
}

function ct(t) {
  var n = document.createElement("a");
  return n.href = t, n;
}

var st = !1;

function ft() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;

  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !st) {
    var n = t.fn.on,
        e = t.fn.off;
    t.fn.on = function (t, e) {
      return lt.call(this, n, window.addEventListener, t, e, arguments);
    }, t.fn.off = function (t, n) {
      return lt.call(this, e, window.removeEventListener, t, n, arguments);
    }, st = !0;
  }
}

function lt(t, n, e, r, o) {
  return "string" != typeof e ? t.apply(this, o) : (e.split(/\s+/).forEach(function (t) {
    tt.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, ""));
  }), "" === e.trim() ? this : t.apply(this, o));
}

var pt = {};

function ht(t) {
  return Promise.resolve().then(function () {
    var n = pt[T(t)];
    return n ? t.status === l ? (mt(t, n), t) : "UNLOADING" === t.status ? n.promise.then(function () {
      return t;
    }) : t.status !== d ? t : (t.status = "UNLOADING", V(t, "unload").then(function () {
      return mt(t, n), t;
    }).catch(function (e) {
      return function (t, n, e) {
        delete pt[T(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, u(e, t, O), n.reject(e);
      }(t, n, e), t;
    })) : t;
  });
}

function mt(t, n) {
  delete pt[T(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = l, n.resolve();
}

function dt(t, n, e, r) {
  pt[T(t)] = {
    app: t,
    resolve: e,
    reject: r
  }, Object.defineProperty(pt[T(t)], "promise", {
    get: n
  });
}

function vt(t) {
  return pt[t];
}

var wt = [];

function gt() {
  var t = [],
      n = [],
      e = [],
      r = [],
      o = new Date().getTime();
  return wt.forEach(function (i) {
    var u = i.status !== O && b(i);

    switch (i.status) {
      case y:
        u && o - i.loadErrorTime >= 200 && e.push(i);
        break;

      case l:
      case p:
        u && e.push(i);
        break;

      case h:
      case d:
        !u && vt(T(i)) ? t.push(i) : u && r.push(i);
        break;

      case w:
        u || n.push(i);
    }
  }), {
    appsToUnload: t,
    appsToUnmount: n,
    appsToLoad: e,
    appsToMount: r
  };
}

function Et() {
  return wt.filter(P).map(T);
}

function yt() {
  return wt.map(T);
}

function Ot(t) {
  var n = _(wt, function (n) {
    return T(n) === t;
  });

  return n ? n.status : null;
}

function Pt(t, e, r, o) {
  var i = function (t, e, r, o) {
    var i,
        u = {
      name: null,
      loadApp: null,
      activeWhen: null,
      customProps: null
    };
    return "object" === n(t) ? (function (t) {
      if (Array.isArray(t) || null === t) throw Error(s(39, !1));
      var e = ["name", "app", "activeWhen", "customProps"],
          r = Object.keys(t).reduce(function (t, n) {
        return e.indexOf(n) >= 0 ? t : t.concat(n);
      }, []);
      if (0 !== r.length) throw Error(s(38, !1, e.join(", "), r.join(", ")));
      if ("string" != typeof t.name || 0 === t.name.length) throw Error(s(20, !1));
      if ("object" !== n(t.app) && "function" != typeof t.app) throw Error(s(20, !1));

      var o = function (t) {
        return "string" == typeof t || "function" == typeof t;
      };

      if (!(o(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(o))) throw Error(s(24, !1));
      if (!St(t.customProps)) throw Error(s(22, !1));
    }(t), u.name = t.name, u.loadApp = t.app, u.activeWhen = t.activeWhen, u.customProps = t.customProps) : (function (t, n, e, r) {
      if ("string" != typeof t || 0 === t.length) throw Error(s(20, !1));
      if (!n) throw Error(s(23, !1));
      if ("function" != typeof e) throw Error(s(24, !1));
      if (!St(r)) throw Error(s(22, !1));
    }(t, e, r, o), u.name = t, u.loadApp = e, u.activeWhen = r, u.customProps = o), u.loadApp = "function" != typeof (i = u.loadApp) ? function () {
      return Promise.resolve(i);
    } : i, u.customProps = function (t) {
      return t || {};
    }(u.customProps), u.activeWhen = function (t) {
      var n = Array.isArray(t) ? t : [t];
      return n = n.map(function (t) {
        return "function" == typeof t ? t : _t(t);
      }), function (t) {
        return n.some(function (n) {
          return n(t);
        });
      };
    }(u.activeWhen), u;
  }(t, e, r, o);

  if (-1 !== yt().indexOf(i.name)) throw Error(s(21, !1, i.name));
  wt.push(S({
    loadErrorTime: null,
    status: l,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: []
      }
    }
  }, i)), Y && (ft(), Lt());
}

function bt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location;
  return wt.filter(function (n) {
    return n.activeWhen(t);
  }).map(T);
}

function Tt(t) {
  if (0 === wt.filter(function (n) {
    return T(n) === t;
  }).length) throw Error(s(25, !1, t));
  return At(t).then(function () {
    var n = wt.map(T).indexOf(t);
    wt.splice(n, 1);
  });
}

function At(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    waitForUnmount: !1
  };
  if ("string" != typeof t) throw Error(s(26, !1));

  var e = _(wt, function (n) {
    return T(n) === t;
  });

  if (!e) throw Error(s(27, !1, t));
  var r,
      o = vt(T(e));

  if (n && n.waitForUnmount) {
    if (o) return o.promise;
    var i = new Promise(function (t, n) {
      dt(e, function () {
        return i;
      }, t, n);
    });
    return i;
  }

  return o ? (r = o.promise, Nt(e, o.resolve, o.reject)) : r = new Promise(function (t, n) {
    dt(e, function () {
      return r;
    }, t, n), Nt(e, t, n);
  }), r;
}

function Nt(t, n, e) {
  L(t).then(ht).then(function () {
    n(), setTimeout(function () {
      Lt();
    });
  }).catch(e);
}

function St(t) {
  return !t || "function" == typeof t || "object" === n(t) && null !== t && !Array.isArray(t);
}

function _t(t, n) {
  var e = function (t, n) {
    var e = 0,
        r = !1,
        o = "^";
    "/" !== t[0] && (t = "/" + t);

    for (var i = 0; i < t.length; i++) {
      var u = t[i];
      (!r && ":" === u || r && "/" === u) && a(i);
    }

    return a(t.length), new RegExp(o, "i");

    function a(i) {
      var u = t.slice(e, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
      if (o += r ? "[^/]+/?" : u, i === t.length) if (r) n && (o += "$");else {
        var a = n ? "" : ".*";
        o = "/" === o.charAt(o.length - 1) ? "".concat(o).concat(a, "$") : "".concat(o, "(/").concat(a, ")?(#.*)?$");
      }
      r = !r, e = i;
    }
  }(t, n);

  return function (t) {
    var n = t.href.replace(t.origin, "").replace(t.search, "").split("?")[0];
    return e.test(n);
  };
}

var Dt = !1,
    Ut = [],
    jt = Y && window.location.href;

function Mt() {
  return Lt();
}

function Lt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 ? arguments[1] : void 0;
  if (Dt) return new Promise(function (t, e) {
    Ut.push({
      resolve: t,
      reject: e,
      eventArguments: n
    });
  });
  var r,
      i = gt(),
      u = i.appsToUnload,
      a = i.appsToUnmount,
      c = i.appsToLoad,
      s = i.appsToMount,
      f = !1,
      p = jt,
      h = jt = window.location.href;
  return Bt() ? (Dt = !0, r = u.concat(c, a, s), g()) : (r = c, v());

  function m() {
    f = !0;
  }

  function v() {
    return Promise.resolve().then(function () {
      var t = c.map(z);
      return Promise.all(t).then(y).then(function () {
        return [];
      }).catch(function (t) {
        throw y(), t;
      });
    });
  }

  function g() {
    return Promise.resolve().then(function () {
      if (window.dispatchEvent(new o(0 === r.length ? "single-spa:before-no-app-change" : "single-spa:before-app-change", P(!0))), window.dispatchEvent(new o("single-spa:before-routing-event", P(!0, {
        cancelNavigation: m
      }))), f) return window.dispatchEvent(new o("single-spa:before-mount-routing-event", P(!0))), E(), void nt(p);
      var n = u.map(ht),
          e = a.map(L).map(function (t) {
        return t.then(ht);
      }).concat(n),
          i = Promise.all(e);
      i.then(function () {
        window.dispatchEvent(new o("single-spa:before-mount-routing-event", P(!0)));
      });
      var l = c.map(function (t) {
        return z(t).then(function (t) {
          return Rt(t, i);
        });
      }),
          h = s.filter(function (t) {
        return c.indexOf(t) < 0;
      }).map(function (t) {
        return Rt(t, i);
      });
      return i.catch(function (t) {
        throw y(), t;
      }).then(function () {
        return y(), Promise.all(l.concat(h)).catch(function (n) {
          throw t.forEach(function (t) {
            return t.reject(n);
          }), n;
        }).then(E);
      });
    });
  }

  function E() {
    var n = Et();
    t.forEach(function (t) {
      return t.resolve(n);
    });

    try {
      var e = 0 === r.length ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new o(e, P())), window.dispatchEvent(new o("single-spa:routing-event", P()));
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }

    if (Dt = !1, Ut.length > 0) {
      var i = Ut;
      Ut = [], Lt(i);
    }

    return n;
  }

  function y() {
    t.forEach(function (t) {
      et(t.eventArguments);
    }), et(n);
  }

  function P() {
    var t,
        o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = arguments.length > 1 ? arguments[1] : void 0,
        m = {},
        v = (e(t = {}, w, []), e(t, d, []), e(t, l, []), e(t, O, []), t);
    o ? (c.concat(s).forEach(function (t, n) {
      E(t, w);
    }), u.forEach(function (t) {
      E(t, l);
    }), a.forEach(function (t) {
      E(t, d);
    })) : r.forEach(function (t) {
      E(t);
    });
    var g = {
      detail: {
        newAppStatuses: m,
        appsByNewStatus: v,
        totalAppChanges: r.length,
        originalEvent: null == n ? void 0 : n[0],
        oldUrl: p,
        newUrl: h,
        navigationIsCanceled: f
      }
    };
    return i && S(g.detail, i), g;

    function E(t, n) {
      var e = T(t);
      n = n || Ot(e), m[e] = n, (v[n] = v[n] || []).push(e);
    }
  }
}

function Rt(t, n) {
  return b(t) ? M(t).then(function (t) {
    return n.then(function () {
      return b(t) ? x(t) : t;
    });
  }) : n.then(function () {
    return t;
  });
}

var It = !1;

function xt(t) {
  var n;
  It = !0, t && t.urlRerouteOnly && (n = t.urlRerouteOnly, X = n), Y && Lt();
}

function Bt() {
  return It;
}

Y && setTimeout(function () {
  It || console.warn(s(1, !1));
}, 5e3);
var Gt = {
  getRawAppData: function () {
    return [].concat(wt);
  },
  reroute: Lt,
  NOT_LOADED: l,
  toLoadPromise: z,
  toBootstrapPromise: M,
  unregisterApplication: Tt
};
Y && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Gt);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index_exhibit-pane__dsKds{width:100%;height:100%;position:relative;display:block}.index_exhibit-pane__dsKds .index_loading-status__1Vkw5{position:absolute;width:100%;height:100%;background:rgba(80,80,80,.12);box-sizing:border-box;opacity:1;transition-property:opacity;transition-delay:.05s;transition-duration:.26s;display:flex;align-items:center;justify-content:center}.index_exhibit-pane__dsKds .index_loading-status__1Vkw5 .index_loading-error__2YA_o{overflow:auto;color:#cd0000}.index_exhibit-pane__dsKds .index_loading-status__1Vkw5 .index_loading-icon__sNwOW{max-height:80%;max-width:80%}.index_exhibit-pane__dsKds .index_loading-status__1Vkw5 .index_loading-icon__sNwOW.index_spin__uB5Zv{animation-name:index_spin-with-pause__31d-M;animation-duration:6s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}.index_exhibit-pane__dsKds .index_loading-status__1Vkw5 .index_loading-icon__sNwOW.index_spin-pause-90__3MW8B{animation-name:index_spin-with-pause__31d-M;animation-duration:12s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}.index_exhibit-pane__dsKds .index_component__1mH11{position:absolute;width:100%;height:100%;box-sizing:border-box;opacity:1;display:flex;flex-direction:column;align-items:stretch}.index_exhibit-pane__dsKds .index_loading-status__1Vkw5.index_hidden__3t7W-{opacity:0}.index_rythan-credits__1OEao{user-select:none}@keyframes index_spin__uB5Zv{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes index_spin-with-pause__31d-M{0%{transform:rotate(0deg)}8.33%,25%{transform:rotate(90deg)}33.33%,50%{transform:rotate(180deg)}58.33%,75%{transform:rotate(270deg)}83.33%,to{transform:rotate(1turn)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFDSSxVQUFXLENBQ1gsV0FBWSxDQUNaLGlCQUFrQixDQUNsQixhQUNGLENBRUEsd0RBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxXQUFZLENBQ1osNkJBQWlDLENBQ2pDLHFCQUFzQixDQUN0QixTQUFVLENBQ1YsMkJBQTRCLENBQzVCLHFCQUF1QixDQUN2Qix3QkFBMEIsQ0FFMUIsWUFBYSxDQUNiLGtCQUFtQixDQUNuQixzQkFDRixDQUVBLG9GQUNFLGFBQWMsQ0FDZCxhQUNGLENBRUEsbUZBQ0UsY0FBZSxDQUNmLGFBQ0YsQ0FFQSxxR0FDRSwyQ0FBK0IsQ0FDL0IscUJBQXNCLENBQ3RCLGtDQUFtQyxDQUNuQyxxQ0FDRixDQUVBLDhHQUNFLDJDQUErQixDQUMvQixzQkFBdUIsQ0FDdkIsa0NBQW1DLENBQ25DLHFDQUNGLENBRUEsbURBR0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxXQUFZLENBQ1oscUJBQXNCLENBRXRCLFNBQVUsQ0FFVixZQUFhLENBQ2IscUJBQXNCLENBQ3RCLG1CQUNGLENBRUEsNEVBQ0UsU0FDRixDQUVBLDZCQUNFLGdCQUNGLENBRUEsNkJBQ0UsR0FDSSxzQkFDSixDQUNBLEdBQ0ksdUJBQ0osQ0FDRixDQUVBLHdDQUNJLEdBQ0Usc0JBQ0YsQ0FDQSxVQUNFLHVCQUNGLENBQ0EsV0FDRSx3QkFDRixDQUNBLFdBQ0Usd0JBQ0YsQ0FDQSxVQUNFLHVCQUNGLENBQ0YiLCJmaWxlIjoiaW5kZXguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4aGliaXQtcGFuZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmV4aGliaXQtcGFuZSAubG9hZGluZy1zdGF0dXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCA4MCwgODAsIC4xMik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4yNjBzO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXhoaWJpdC1wYW5lIC5sb2FkaW5nLXN0YXR1cyAubG9hZGluZy1lcnJvciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGNvbG9yOiByZ2JhKDIwNSwgMCwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuZXhoaWJpdC1wYW5lIC5sb2FkaW5nLXN0YXR1cyAubG9hZGluZy1pY29uIHtcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICAuZXhoaWJpdC1wYW5lIC5sb2FkaW5nLXN0YXR1cyAubG9hZGluZy1pY29uLnNwaW4ge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNwaW4td2l0aC1wYXVzZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyBcclxuICB9XHJcbiAgXHJcbiAgLmV4aGliaXQtcGFuZSAubG9hZGluZy1zdGF0dXMgLmxvYWRpbmctaWNvbi5zcGluLXBhdXNlLTkwIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluLXdpdGgtcGF1c2U7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxyXG4gIH1cclxuXHJcbiAgLmV4aGliaXQtcGFuZSAuY29tcG9uZW50IHtcclxuICAgIC8qIG9wYWNpdHk6IDA7ICovXHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogei1pbmRleDogMTAwOyAqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuZXhoaWJpdC1wYW5lIC5sb2FkaW5nLXN0YXR1cy5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC5yeXRoYW4tY3JlZGl0cyB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3Bpbi13aXRoLXBhdXNlIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXHJcbiAgICAgIH1cclxuICAgICAgOC4zMyUsIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgICAgIH1cclxuICAgICAgMzMuMzMlLCA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuICAgICAgfVxyXG4gICAgICA1OC4zMyUsIDc1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKVxyXG4gICAgICB9XHJcbiAgICAgIDgzLjMzJSwgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiJdfQ== */";
var exhibitPaneStyle = {"exhibit-pane":"index_exhibit-pane__dsKds","loading-status":"index_loading-status__1Vkw5","loading-error":"index_loading-error__2YA_o","loading-icon":"index_loading-icon__sNwOW","spin":"index_spin__uB5Zv","spin-with-pause":"index_spin-with-pause__31d-M","spin-pause-90":"index_spin-pause-90__3MW8B","component":"index_component__1mH11","hidden":"index_hidden__3t7W-","rythan-credits":"index_rythan-credits__1OEao"};
styleInject(css_248z);

xt();
const mapComponents = new WeakMap();

class AttachedComponent {
  constructor(domElementContainer, _promiseImport) {
    this._domElementContainer = domElementContainer;
    this._promiseImport = _promiseImport;
  }

  get container() {
    return this._domElementContainer;
  }

  get status() {}

  get importPromise() {
    return this._promiseImport;
  }

  onAttach() {// return a promise
    // if loading return this one.
    // if parcel mounting load that one
    // if unloading error.
  }

  unattach() {
    if (this.unattached) return this.unattached;

    let removeComponent = function () {
      if (this._attachedPane) {
        this._attachedPane.elementContainer.remove();

        delete this._attachedPane;
      }

      mapComponents.delete(this.container);
    }.bind(this);

    this.unattached = new Promise(function (resolve, reject) {
      if (this._parcel) {
        // Ensure it's mounted
        this._parcel.mountPromise.then(function () {
          this._parcel.unmount().then(function (result) {
            removeComponent();
            resolve(result);
          }, function (error) {
            removeComponent();
            reject(error);
          });
        }.bind(this));
      }
    }.bind(this));
    return this.unattached;
  }

}

class Namespace {
  attachLoadingPane(domElementContainer, options) {
    const _options = options || {};

    const _loadingIcon = _options.loadingIcon || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPDSURBVGiB7ZpfaFtVHMc/5+amSdPuTxtrR8TB6nSyB+fYEEHBl4qCCOKcY1MRxFKGoHus04fhi/hQKo750Kl0D3OD0BYUpwx8EdymXf/SbW7OKdqp3Z/UdEtvanLPz4fSQVmWe12TnJHez+O53xM+fDm/c0MbldrysFCluFrWNfWPniuWsSolc6cSFGBawDRBAaYFTLPkC7ABrLtWEd74mGmXkpE/O4b7+8++sjZAaPVaYu3vllWqkjg9nb4LWPIjEBRgWsA0QQGmBUwTFGBawDS2aYFy0rVh1+Obnnl6Q7FMVRdwdsW6DpD7i2WW/AgEBZgWKCfLa+24V6aq74DW++ob19bGCj77/o9ZJjNudRewbX2MUGJFwWdvHU0xmXGrewT8EBRgWsA0QQGmBUwTFGBawDRBAaYFTBMUYFrANEEBpgVMExRgWsA0S74AG0Bms+jJCc+w1ZQAq0BnotGX/iy53O0iM9d9Z22A/KmTpN941jO88sB3qLplN61n+3twPt/7PxTvHGyg20euFWhRNZGbHuRPD+Ec3iegJkC+BriwbM2auvUPPbl6udm/uKlYvWfGbuwdafcKpbZs/AJLtRCuWbAu6RSZrg6NFi0W2+LJkeMAmz45crKx1uLojubbda8Yvi5BQcdUTXThT2pFk/noHdFTly2QXfHk8PGyGJYZX2dUiYqpSHTBmpPsJjd6QilINvSO7CuLXQXwN6SKGHMnQAHkxwfIJrsF+EWsUFuhLU5O2DtwrWSiXjzVEuWBeBiAc1dzHByf+SmnJXur/OnLuRbA3y0lcOME6H+ukunqcJVIHuTFhuRgutAeJy8cGPP/Olos3/7mcPC5JurCiolrLl+dn3nQzz5/IzBfgGgyH76tdToVEtgZ7x0dLpQX4RWg8L9kyoAFz09Mu7s/OJbmvSdWErXVvHinaA4V2+v3PRWjJqqcQx+THx+wEDkc7xvdf6vwUFvijG/7UrBHhjff+9cjR847rY/eE2FVfWhuXXNlqC0xWGyrz6/CUute/FVl+z4T4Ew+lC8498bYo3RIh162FJfeP5aWv6+7c+tKar22ehYgW7eGQEVlegrQs0qr7XcnT1VuuH3yQ1vzpCu86uSErh+n51/ZnmPoWcCV2bEbH6JE7WzoHx5dhGdZGXo98Q1I55SjFYBSLP4EaMIxAIV82tA30rNoy3LjJnaDnADQYi2+gEjEigHjzr/2myXQKzuD7SpnWfZLQJpSjIC4Ie1a+oXEl4MzpRCsBAOvNV8A1abwvgSrms37L273yvwHhfIycd/yJ5kAAAAASUVORK5CYII=";

    const _loadingIconClass = exhibitPaneStyle[_options.loadingIconClass] || ""; // We create a status pane here and show. This is used for loading and errors.


    let templateChartPane = `
        <div class="${exhibitPaneStyle['exhibit-pane']}">
            <div class="${exhibitPaneStyle['loading-status']}">
                <img class="${exhibitPaneStyle['loading-icon']}` + (_loadingIconClass ? ' ' + _loadingIconClass : '') + `" src="` + _loadingIcon + `">
            </div>
            <div class="${exhibitPaneStyle['component']}"></div>
        </div>
        `;
    let div = document.createElement('div');
    div.innerHTML = templateChartPane.trim();
    let domElement = div.firstChild;
    const elementComponent = div.getElementsByClassName(exhibitPaneStyle['component'])[0];
    const elementLoadingStatus = div.getElementsByClassName(exhibitPaneStyle['loading-status'])[0];
    const elementLoadingIcon = div.getElementsByClassName(exhibitPaneStyle['loading-icon'])[0];
    domElementContainer.append(domElement);
    return {
      elementContainer: domElement,
      elementComponent: elementComponent,
      elementLoadingStatus: elementLoadingStatus,
      elementLoadingIcon: elementLoadingIcon
    };
  }

  attachComponent(handlerResolve, optionsProps, optionsLoadingPane) {
    return new Promise((resolve, reject) => {
      if (!handlerResolve || !handlerResolve.container) {
        reject('domElement can not be empty');
        return;
      }

      let existing = mapComponents.get(handlerResolve.container);

      if (existing !== undefined) {
        resolve(existing);
        return;
      }

      mapComponents.set(handlerResolve.container, handlerResolve);
      handlerResolve._attachedPane = this.attachLoadingPane(handlerResolve.container, optionsLoadingPane);

      let onRendered = function () {
        if (handlerResolve.unattached) return;

        handlerResolve._attachedPane.elementLoadingStatus.addEventListener('transitionend', () => {
          handlerResolve._attachedPane.elementLoadingStatus.remove();
        });

        handlerResolve._attachedPane.elementLoadingStatus.classList.add(exhibitPaneStyle['hidden']);
      }.bind(this);

      let optionsConfig = {
        domElement: handlerResolve._attachedPane.elementComponent
      };
      optionsConfig.properties = { ...optionsProps
      };
      optionsConfig.properties = Object.assign(optionsConfig.properties, optionsLoadingPane.properties || {});
      if (optionsLoadingPane.customRendered) optionsConfig.properties[optionsLoadingPane.customRendered] = onRendered;
      handlerResolve.importPromise.then(parcelConfig => {
        handlerResolve._parcel = C(parcelConfig, optionsConfig);

        if (handlerResolve.unattached) {
          resolve(handlerResolve);
        }

        handlerResolve._parcel.mountPromise.then(function () {
          if (!handlerResolve.unattached) {
            if (!optionsLoadingPane.customRendered) onRendered();
          }

          resolve(handlerResolve);
        });
      }).catch(error => {
        let templateErrorPane = `
            <div class="${exhibitPaneStyle['loading-error']}">
                <p style="text-align: center">Loading Error</p>
                <br>
                <p>` + error + `</p>
            </div>
            `;
        let divError = document.createElement('div');
        divError.innerHTML = templateErrorPane.trim();
        let elementErrorPane = divError.firstChild;

        handlerResolve._attachedPane.elementLoadingIcon.remove();

        handlerResolve._attachedPane.elementLoadingStatus.append(elementErrorPane);

        reject(error);
      });
    });
  }

  attachDynamicComponent(domElementContainer, options) {
    const {
      properties,
      ...optionsLoadingPane
    } = options;
    const optionsProps = { ...properties
    };
    return this.attachComponent(new AttachedComponent(domElementContainer, import('./dynamic-component-838599c2.js')), optionsProps, optionsLoadingPane);
  }

}

const namespace = new Namespace();

export { namespace };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhoaWJpdC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3NpbmdsZS1zcGEvbGliL2VzbS9zaW5nbGUtc3BhLm1pbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogc2luZ2xlLXNwYUA1LjkuMSAtIEVTTSAtIHByb2QgKi9cbnZhciB0PU9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLGdldCBzdGFydCgpe3JldHVybiB4dH0sZ2V0IGVuc3VyZUpRdWVyeVN1cHBvcnQoKXtyZXR1cm4gZnR9LGdldCBzZXRCb290c3RyYXBNYXhUaW1lKCl7cmV0dXJuIEZ9LGdldCBzZXRNb3VudE1heFRpbWUoKXtyZXR1cm4gSn0sZ2V0IHNldFVubW91bnRNYXhUaW1lKCl7cmV0dXJuIEh9LGdldCBzZXRVbmxvYWRNYXhUaW1lKCl7cmV0dXJuIFF9LGdldCByZWdpc3RlckFwcGxpY2F0aW9uKCl7cmV0dXJuIFB0fSxnZXQgdW5yZWdpc3RlckFwcGxpY2F0aW9uKCl7cmV0dXJuIFR0fSxnZXQgZ2V0TW91bnRlZEFwcHMoKXtyZXR1cm4gRXR9LGdldCBnZXRBcHBTdGF0dXMoKXtyZXR1cm4gT3R9LGdldCB1bmxvYWRBcHBsaWNhdGlvbigpe3JldHVybiBBdH0sZ2V0IGNoZWNrQWN0aXZpdHlGdW5jdGlvbnMoKXtyZXR1cm4gYnR9LGdldCBnZXRBcHBOYW1lcygpe3JldHVybiB5dH0sZ2V0IHBhdGhUb0FjdGl2ZVdoZW4oKXtyZXR1cm4gX3R9LGdldCBuYXZpZ2F0ZVRvVXJsKCl7cmV0dXJuIG50fSxnZXQgdHJpZ2dlckFwcENoYW5nZSgpe3JldHVybiBNdH0sZ2V0IGFkZEVycm9ySGFuZGxlcigpe3JldHVybiBhfSxnZXQgcmVtb3ZlRXJyb3JIYW5kbGVyKCl7cmV0dXJuIGN9LGdldCBtb3VudFJvb3RQYXJjZWwoKXtyZXR1cm4gQ30sZ2V0IE5PVF9MT0FERUQoKXtyZXR1cm4gbH0sZ2V0IExPQURJTkdfU09VUkNFX0NPREUoKXtyZXR1cm4gcH0sZ2V0IE5PVF9CT09UU1RSQVBQRUQoKXtyZXR1cm4gaH0sZ2V0IEJPT1RTVFJBUFBJTkcoKXtyZXR1cm4gbX0sZ2V0IE5PVF9NT1VOVEVEKCl7cmV0dXJuIGR9LGdldCBNT1VOVElORygpe3JldHVybiB2fSxnZXQgVVBEQVRJTkcoKXtyZXR1cm4gZ30sZ2V0IExPQURfRVJST1IoKXtyZXR1cm4geX0sZ2V0IE1PVU5URUQoKXtyZXR1cm4gd30sZ2V0IFVOTU9VTlRJTkcoKXtyZXR1cm4gRX0sZ2V0IFNLSVBfQkVDQVVTRV9CUk9LRU4oKXtyZXR1cm4gT319KTtmdW5jdGlvbiBuKHQpe3JldHVybihuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBlKHQsbixlKXtyZXR1cm4gbiBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W25dPWUsdH12YXIgcj0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9KS5DdXN0b21FdmVudCxvPWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PW5ldyByKFwiY2F0XCIse2RldGFpbDp7Zm9vOlwiYmFyXCJ9fSk7cmV0dXJuXCJjYXRcIj09PXQudHlwZSYmXCJiYXJcIj09PXQuZGV0YWlsLmZvb31jYXRjaCh0KXt9cmV0dXJuITF9KCk/cjpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmNyZWF0ZUV2ZW50P2Z1bmN0aW9uKHQsbil7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtyZXR1cm4gbj9lLmluaXRDdXN0b21FdmVudCh0LG4uYnViYmxlcyxuLmNhbmNlbGFibGUsbi5kZXRhaWwpOmUuaW5pdEN1c3RvbUV2ZW50KHQsITEsITEsdm9pZCAwKSxlfTpmdW5jdGlvbih0LG4pe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7cmV0dXJuIGUudHlwZT10LG4/KGUuYnViYmxlcz1Cb29sZWFuKG4uYnViYmxlcyksZS5jYW5jZWxhYmxlPUJvb2xlYW4obi5jYW5jZWxhYmxlKSxlLmRldGFpbD1uLmRldGFpbCk6KGUuYnViYmxlcz0hMSxlLmNhbmNlbGFibGU9ITEsZS5kZXRhaWw9dm9pZCAwKSxlfSxpPVtdO2Z1bmN0aW9uIHUodCxuLGUpe3ZhciByPWYodCxuLGUpO2kubGVuZ3RoP2kuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQocil9KSk6c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0aHJvdyByfSkpfWZ1bmN0aW9uIGEodCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBFcnJvcihzKDI4LCExKSk7aS5wdXNoKHQpfWZ1bmN0aW9uIGModCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBFcnJvcihzKDI5LCExKSk7dmFyIG49ITE7cmV0dXJuIGk9aS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3ZhciByPWU9PT10O3JldHVybiBuPW58fHIsIXJ9KSksbn1mdW5jdGlvbiBzKHQsbil7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkoZT4yP2UtMjowKSxvPTI7bzxlO28rKylyW28tMl09YXJndW1lbnRzW29dO3JldHVyblwic2luZ2xlLXNwYSBtaW5pZmllZCBtZXNzYWdlICNcIi5jb25jYXQodCxcIjogXCIpLmNvbmNhdChuP24rXCIgXCI6XCJcIixcIlNlZSBodHRwczovL3NpbmdsZS1zcGEuanMub3JnL2Vycm9yLz9jb2RlPVwiKS5jb25jYXQodCkuY29uY2F0KHIubGVuZ3RoP1wiJmFyZz1cIi5jb25jYXQoci5qb2luKFwiJmFyZz1cIikpOlwiXCIpfWZ1bmN0aW9uIGYodCxuLGUpe3ZhciByLG89XCJcIi5jb25jYXQoTihuKSxcIiAnXCIpLmNvbmNhdChUKG4pLFwiJyBkaWVkIGluIHN0YXR1cyBcIikuY29uY2F0KG4uc3RhdHVzLFwiOiBcIik7aWYodCBpbnN0YW5jZW9mIEVycm9yKXt0cnl7dC5tZXNzYWdlPW8rdC5tZXNzYWdlfWNhdGNoKHQpe31yPXR9ZWxzZXtjb25zb2xlLndhcm4ocygzMCwhMSxuLnN0YXR1cyxUKG4pKSk7dHJ5e3I9RXJyb3IobytKU09OLnN0cmluZ2lmeSh0KSl9Y2F0Y2gobil7cj10fX1yZXR1cm4gci5hcHBPclBhcmNlbE5hbWU9VChuKSxuLnN0YXR1cz1lLHJ9dmFyIGw9XCJOT1RfTE9BREVEXCIscD1cIkxPQURJTkdfU09VUkNFX0NPREVcIixoPVwiTk9UX0JPT1RTVFJBUFBFRFwiLG09XCJCT09UU1RSQVBQSU5HXCIsZD1cIk5PVF9NT1VOVEVEXCIsdj1cIk1PVU5USU5HXCIsdz1cIk1PVU5URURcIixnPVwiVVBEQVRJTkdcIixFPVwiVU5NT1VOVElOR1wiLHk9XCJMT0FEX0VSUk9SXCIsTz1cIlNLSVBfQkVDQVVTRV9CUk9LRU5cIjtmdW5jdGlvbiBQKHQpe3JldHVybiB0LnN0YXR1cz09PXd9ZnVuY3Rpb24gYih0KXt0cnl7cmV0dXJuIHQuYWN0aXZlV2hlbih3aW5kb3cubG9jYXRpb24pfWNhdGNoKG4pe3JldHVybiB1KG4sdCxPKSwhMX19ZnVuY3Rpb24gVCh0KXtyZXR1cm4gdC5uYW1lfWZ1bmN0aW9uIEEodCl7cmV0dXJuIEJvb2xlYW4odC51bm1vdW50VGhpc1BhcmNlbCl9ZnVuY3Rpb24gTih0KXtyZXR1cm4gQSh0KT9cInBhcmNlbFwiOlwiYXBwbGljYXRpb25cIn1mdW5jdGlvbiBTKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgtMTt0PjA7dC0tKWZvcih2YXIgbiBpbiBhcmd1bWVudHNbdF0pXCJfX3Byb3RvX19cIiE9PW4mJihhcmd1bWVudHNbdC0xXVtuXT1hcmd1bWVudHNbdF1bbl0pO3JldHVybiBhcmd1bWVudHNbMF19ZnVuY3Rpb24gXyh0LG4pe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKG4odFtlXSkpcmV0dXJuIHRbZV07cmV0dXJuIG51bGx9ZnVuY3Rpb24gRCh0KXtyZXR1cm4gdCYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fChuPXQsQXJyYXkuaXNBcnJheShuKSYmIV8obiwoZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2YgdH0pKSkpO3ZhciBufWZ1bmN0aW9uIFUodCxuKXt2YXIgZT10W25dfHxbXTswPT09KGU9QXJyYXkuaXNBcnJheShlKT9lOltlXSkubGVuZ3RoJiYoZT1bZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9XSk7dmFyIHI9Tih0KSxvPVQodCk7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlLnJlZHVjZSgoZnVuY3Rpb24oZSxpLHUpe3JldHVybiBlLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIGU9aSh0KTtyZXR1cm4gaihlKT9lOlByb21pc2UucmVqZWN0KHMoMTUsITEscixvLG4sdSkpfSkpfSksUHJvbWlzZS5yZXNvbHZlKCkpfX1mdW5jdGlvbiBqKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRoZW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY2F0Y2h9ZnVuY3Rpb24gTSh0LG4pe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LnN0YXR1cyE9PWg/dDoodC5zdGF0dXM9bSx0LmJvb3RzdHJhcD9WKHQsXCJib290c3RyYXBcIikudGhlbihlKS5jYXRjaCgoZnVuY3Rpb24oZSl7aWYobil0aHJvdyBmKGUsdCxPKTtyZXR1cm4gdShlLHQsTyksdH0pKTpQcm9taXNlLnJlc29sdmUoKS50aGVuKGUpKX0pKTtmdW5jdGlvbiBlKCl7cmV0dXJuIHQuc3RhdHVzPWQsdH19ZnVuY3Rpb24gTCh0LG4pe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe2lmKHQuc3RhdHVzIT09dylyZXR1cm4gdDt0LnN0YXR1cz1FO3ZhciBlPU9iamVjdC5rZXlzKHQucGFyY2VscykubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gdC5wYXJjZWxzW25dLnVubW91bnRUaGlzUGFyY2VsKCl9KSk7cmV0dXJuIFByb21pc2UuYWxsKGUpLnRoZW4ociwoZnVuY3Rpb24oZSl7cmV0dXJuIHIoKS50aGVuKChmdW5jdGlvbigpe3ZhciByPUVycm9yKGUubWVzc2FnZSk7aWYobil0aHJvdyBmKHIsdCxPKTt1KHIsdCxPKX0pKX0pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0fSkpO2Z1bmN0aW9uIHIoKXtyZXR1cm4gVih0LFwidW5tb3VudFwiKS50aGVuKChmdW5jdGlvbigpe3Quc3RhdHVzPWR9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe2lmKG4pdGhyb3cgZihlLHQsTyk7dShlLHQsTyl9KSl9fSkpfXZhciBSPSExLEk9ITE7ZnVuY3Rpb24geCh0LG4pe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LnN0YXR1cyE9PWQ/dDooUnx8KHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwic2luZ2xlLXNwYTpiZWZvcmUtZmlyc3QtbW91bnRcIikpLFI9ITApLFYodCxcIm1vdW50XCIpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIHQuc3RhdHVzPXcsSXx8KHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwic2luZ2xlLXNwYTpmaXJzdC1tb3VudFwiKSksST0hMCksdH0pKS5jYXRjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuc3RhdHVzPXcsTCh0LCEwKS50aGVuKHIscik7ZnVuY3Rpb24gcigpe2lmKG4pdGhyb3cgZihlLHQsTyk7cmV0dXJuIHUoZSx0LE8pLHR9fSkpKX0pKX12YXIgQj0wLEc9e3BhcmNlbHM6e319O2Z1bmN0aW9uIEMoKXtyZXR1cm4gVy5hcHBseShHLGFyZ3VtZW50cyl9ZnVuY3Rpb24gVyh0LGUpe3ZhciByPXRoaXM7aWYoIXR8fFwib2JqZWN0XCIhPT1uKHQpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IEVycm9yKHMoMiwhMSkpO2lmKHQubmFtZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQubmFtZSl0aHJvdyBFcnJvcihzKDMsITEsbih0Lm5hbWUpKSk7aWYoXCJvYmplY3RcIiE9PW4oZSkpdGhyb3cgRXJyb3Iocyg0LCExLG5hbWUsbihlKSkpO2lmKCFlLmRvbUVsZW1lbnQpdGhyb3cgRXJyb3Iocyg1LCExLG5hbWUpKTt2YXIgbyxpPUIrKyx1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQsYT11P3Q6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHQpfSxjPXtpZDppLHBhcmNlbHM6e30sc3RhdHVzOnU/cDpoLGN1c3RvbVByb3BzOmUscGFyZW50TmFtZTpUKHIpLHVubW91bnRUaGlzUGFyY2VsOmZ1bmN0aW9uKCl7cmV0dXJuIHkudGhlbigoZnVuY3Rpb24oKXtpZihjLnN0YXR1cyE9PXcpdGhyb3cgRXJyb3Iocyg2LCExLG5hbWUsYy5zdGF0dXMpKTtyZXR1cm4gTChjLCEwKX0pKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gYy5wYXJlbnROYW1lJiZkZWxldGUgci5wYXJjZWxzW2MuaWRdLHR9KSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIG0odCksdH0pKS5jYXRjaCgoZnVuY3Rpb24odCl7dGhyb3cgYy5zdGF0dXM9Tyx2KHQpLHR9KSl9fTtyLnBhcmNlbHNbaV09Yzt2YXIgbD1hKCk7aWYoIWx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGwudGhlbil0aHJvdyBFcnJvcihzKDcsITEpKTt2YXIgbSx2LEU9KGw9bC50aGVuKChmdW5jdGlvbih0KXtpZighdCl0aHJvdyBFcnJvcihzKDgsITEpKTt2YXIgbj10Lm5hbWV8fFwicGFyY2VsLVwiLmNvbmNhdChpKTtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxcImJvb3RzdHJhcFwiKSYmIUQodC5ib290c3RyYXApKXRocm93IEVycm9yKHMoOSwhMSxuKSk7aWYoIUQodC5tb3VudCkpdGhyb3cgRXJyb3IocygxMCwhMSxuKSk7aWYoIUQodC51bm1vdW50KSl0aHJvdyBFcnJvcihzKDExLCExLG4pKTtpZih0LnVwZGF0ZSYmIUQodC51cGRhdGUpKXRocm93IEVycm9yKHMoMTIsITEsbikpO3ZhciBlPVUodCxcImJvb3RzdHJhcFwiKSxyPVUodCxcIm1vdW50XCIpLHU9VSh0LFwidW5tb3VudFwiKTtjLnN0YXR1cz1oLGMubmFtZT1uLGMuYm9vdHN0cmFwPWUsYy5tb3VudD1yLGMudW5tb3VudD11LGMudGltZW91dHM9cSh0LnRpbWVvdXRzKSx0LnVwZGF0ZSYmKGMudXBkYXRlPVUodCxcInVwZGF0ZVwiKSxvLnVwZGF0ZT1mdW5jdGlvbih0KXtyZXR1cm4gYy5jdXN0b21Qcm9wcz10LCQoZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7aWYodC5zdGF0dXMhPT13KXRocm93IEVycm9yKHMoMzIsITEsVCh0KSkpO3JldHVybiB0LnN0YXR1cz1nLFYodCxcInVwZGF0ZVwiKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LnN0YXR1cz13LHR9KSkuY2F0Y2goKGZ1bmN0aW9uKG4pe3Rocm93IGYobix0LE8pfSkpfSkpfShjKSl9KX0pKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gTShjLCEwKX0pKSx5PUUudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4geChjLCEwKX0pKSxQPW5ldyBQcm9taXNlKChmdW5jdGlvbih0LG4pe209dCx2PW59KSk7cmV0dXJuIG89e21vdW50OmZ1bmN0aW9uKCl7cmV0dXJuICQoUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXtpZihjLnN0YXR1cyE9PWQpdGhyb3cgRXJyb3IocygxMywhMSxuYW1lLGMuc3RhdHVzKSk7cmV0dXJuIHIucGFyY2Vsc1tpXT1jLHgoYyl9KSkpfSx1bm1vdW50OmZ1bmN0aW9uKCl7cmV0dXJuICQoYy51bm1vdW50VGhpc1BhcmNlbCgpKX0sZ2V0U3RhdHVzOmZ1bmN0aW9uKCl7cmV0dXJuIGMuc3RhdHVzfSxsb2FkUHJvbWlzZTokKGwpLGJvb3RzdHJhcFByb21pc2U6JChFKSxtb3VudFByb21pc2U6JCh5KSx1bm1vdW50UHJvbWlzZTokKFApfX1mdW5jdGlvbiAkKHQpe3JldHVybiB0LnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9KSl9ZnVuY3Rpb24gayhlKXt2YXIgcj1UKGUpLG89XCJmdW5jdGlvblwiPT10eXBlb2YgZS5jdXN0b21Qcm9wcz9lLmN1c3RvbVByb3BzKHIsd2luZG93LmxvY2F0aW9uKTplLmN1c3RvbVByb3BzOyhcIm9iamVjdFwiIT09bihvKXx8bnVsbD09PW98fEFycmF5LmlzQXJyYXkobykpJiYobz17fSxjb25zb2xlLndhcm4ocyg0MCwhMSkscixvKSk7dmFyIGk9Uyh7fSxvLHtuYW1lOnIsbW91bnRQYXJjZWw6Vy5iaW5kKGUpLHNpbmdsZVNwYTp0fSk7cmV0dXJuIEEoZSkmJihpLnVubW91bnRTZWxmPWUudW5tb3VudFRoaXNQYXJjZWwpLGl9dmFyIEs9e2Jvb3RzdHJhcDp7bWlsbGlzOjRlMyxkaWVPblRpbWVvdXQ6ITEsd2FybmluZ01pbGxpczoxZTN9LG1vdW50OnttaWxsaXM6M2UzLGRpZU9uVGltZW91dDohMSx3YXJuaW5nTWlsbGlzOjFlM30sdW5tb3VudDp7bWlsbGlzOjNlMyxkaWVPblRpbWVvdXQ6ITEsd2FybmluZ01pbGxpczoxZTN9LHVubG9hZDp7bWlsbGlzOjNlMyxkaWVPblRpbWVvdXQ6ITEsd2FybmluZ01pbGxpczoxZTN9LHVwZGF0ZTp7bWlsbGlzOjNlMyxkaWVPblRpbWVvdXQ6ITEsd2FybmluZ01pbGxpczoxZTN9fTtmdW5jdGlvbiBGKHQsbixlKXtpZihcIm51bWJlclwiIT10eXBlb2YgdHx8dDw9MCl0aHJvdyBFcnJvcihzKDE2LCExKSk7Sy5ib290c3RyYXA9e21pbGxpczp0LGRpZU9uVGltZW91dDpuLHdhcm5pbmdNaWxsaXM6ZXx8MWUzfX1mdW5jdGlvbiBKKHQsbixlKXtpZihcIm51bWJlclwiIT10eXBlb2YgdHx8dDw9MCl0aHJvdyBFcnJvcihzKDE3LCExKSk7Sy5tb3VudD17bWlsbGlzOnQsZGllT25UaW1lb3V0Om4sd2FybmluZ01pbGxpczplfHwxZTN9fWZ1bmN0aW9uIEgodCxuLGUpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiB0fHx0PD0wKXRocm93IEVycm9yKHMoMTgsITEpKTtLLnVubW91bnQ9e21pbGxpczp0LGRpZU9uVGltZW91dDpuLHdhcm5pbmdNaWxsaXM6ZXx8MWUzfX1mdW5jdGlvbiBRKHQsbixlKXtpZihcIm51bWJlclwiIT10eXBlb2YgdHx8dDw9MCl0aHJvdyBFcnJvcihzKDE5LCExKSk7Sy51bmxvYWQ9e21pbGxpczp0LGRpZU9uVGltZW91dDpuLHdhcm5pbmdNaWxsaXM6ZXx8MWUzfX1mdW5jdGlvbiBWKHQsbil7dmFyIGU9dC50aW1lb3V0c1tuXSxyPWUud2FybmluZ01pbGxpcyxvPU4odCk7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihpLHUpe3ZhciBhPSExLGM9ITE7dFtuXShrKHQpKS50aGVuKChmdW5jdGlvbih0KXthPSEwLGkodCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2E9ITAsdSh0KX0pKSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiBsKDEpfSksciksc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gbCghMCl9KSxlLm1pbGxpcyk7dmFyIGY9cygzMSwhMSxuLG8sVCh0KSxlLm1pbGxpcyk7ZnVuY3Rpb24gbCh0KXtpZighYSlpZighMD09PXQpYz0hMCxlLmRpZU9uVGltZW91dD91KEVycm9yKGYpKTpjb25zb2xlLmVycm9yKGYpO2Vsc2UgaWYoIWMpe3ZhciBuPXQsbz1uKnI7Y29uc29sZS53YXJuKGYpLG8rcjxlLm1pbGxpcyYmc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gbChuKzEpfSkscil9fX0pKX1mdW5jdGlvbiBxKHQpe3ZhciBuPXt9O2Zvcih2YXIgZSBpbiBLKW5bZV09Uyh7fSxLW2VdLHQmJnRbZV18fHt9KTtyZXR1cm4gbn1mdW5jdGlvbiB6KHQpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LmxvYWRQcm9taXNlP3QubG9hZFByb21pc2U6dC5zdGF0dXMhPT1sJiZ0LnN0YXR1cyE9PXk/dDoodC5zdGF0dXM9cCx0LmxvYWRQcm9taXNlPVByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIG89dC5sb2FkQXBwKGsodCkpO2lmKCFqKG8pKXRocm93IHI9ITAsRXJyb3IocygzMywhMSxUKHQpKSk7cmV0dXJuIG8udGhlbigoZnVuY3Rpb24ocil7dmFyIG87dC5sb2FkRXJyb3JUaW1lPW51bGwsXCJvYmplY3RcIiE9PW4oZT1yKSYmKG89MzQpLE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLFwiYm9vdHN0cmFwXCIpJiYhRChlLmJvb3RzdHJhcCkmJihvPTM1KSxEKGUubW91bnQpfHwobz0zNiksRChlLnVubW91bnQpfHwobz0zNyk7dmFyIGk9TihlKTtpZihvKXt2YXIgYTt0cnl7YT1KU09OLnN0cmluZ2lmeShlKX1jYXRjaCh0KXt9cmV0dXJuIGNvbnNvbGUuZXJyb3IocyhvLCExLGksVCh0KSxhKSxlKSx1KHZvaWQgMCx0LE8pLHR9cmV0dXJuIGUuZGV2dG9vbHMmJmUuZGV2dG9vbHMub3ZlcmxheXMmJih0LmRldnRvb2xzLm92ZXJsYXlzPVMoe30sdC5kZXZ0b29scy5vdmVybGF5cyxlLmRldnRvb2xzLm92ZXJsYXlzKSksdC5zdGF0dXM9aCx0LmJvb3RzdHJhcD1VKGUsXCJib290c3RyYXBcIiksdC5tb3VudD1VKGUsXCJtb3VudFwiKSx0LnVubW91bnQ9VShlLFwidW5tb3VudFwiKSx0LnVubG9hZD1VKGUsXCJ1bmxvYWRcIiksdC50aW1lb3V0cz1xKGUudGltZW91dHMpLGRlbGV0ZSB0LmxvYWRQcm9taXNlLHR9KSl9KSkuY2F0Y2goKGZ1bmN0aW9uKG4pe3ZhciBlO3JldHVybiBkZWxldGUgdC5sb2FkUHJvbWlzZSxyP2U9TzooZT15LHQubG9hZEVycm9yVGltZT0obmV3IERhdGUpLmdldFRpbWUoKSksdShuLHQsZSksdH0pKSk7dmFyIGUscn0pKX12YXIgWCxZPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3csWj17aGFzaGNoYW5nZTpbXSxwb3BzdGF0ZTpbXX0sdHQ9W1wiaGFzaGNoYW5nZVwiLFwicG9wc3RhdGVcIl07ZnVuY3Rpb24gbnQodCl7dmFyIG47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpbj10O2Vsc2UgaWYodGhpcyYmdGhpcy5ocmVmKW49dGhpcy5ocmVmO2Vsc2V7aWYoISh0JiZ0LmN1cnJlbnRUYXJnZXQmJnQuY3VycmVudFRhcmdldC5ocmVmJiZ0LnByZXZlbnREZWZhdWx0KSl0aHJvdyBFcnJvcihzKDE0LCExKSk7bj10LmN1cnJlbnRUYXJnZXQuaHJlZix0LnByZXZlbnREZWZhdWx0KCl9dmFyIGU9Y3Qod2luZG93LmxvY2F0aW9uLmhyZWYpLHI9Y3Qobik7MD09PW4uaW5kZXhPZihcIiNcIik/d2luZG93LmxvY2F0aW9uLmhhc2g9ci5oYXNoOmUuaG9zdCE9PXIuaG9zdCYmci5ob3N0P3dpbmRvdy5sb2NhdGlvbi5ocmVmPW46ci5wYXRobmFtZT09PWUucGF0aG5hbWUmJnIuc2VhcmNoPT09ZS5zZWFyY2g/d2luZG93LmxvY2F0aW9uLmhhc2g9ci5oYXNoOndpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLG51bGwsbil9ZnVuY3Rpb24gZXQodCl7dmFyIG49dGhpcztpZih0KXt2YXIgZT10WzBdLnR5cGU7dHQuaW5kZXhPZihlKT49MCYmWltlXS5mb3JFYWNoKChmdW5jdGlvbihlKXt0cnl7ZS5hcHBseShuLHQpfWNhdGNoKHQpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dGhyb3cgdH0pKX19KSl9fWZ1bmN0aW9uIHJ0KCl7THQoW10sYXJndW1lbnRzKX1mdW5jdGlvbiBvdCh0LG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5sb2NhdGlvbi5ocmVmLHI9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyksbz13aW5kb3cubG9jYXRpb24uaHJlZjtyZXR1cm4gWCYmZT09PW98fChCdCgpP3dpbmRvdy5kaXNwYXRjaEV2ZW50KGl0KHdpbmRvdy5oaXN0b3J5LnN0YXRlLG4pKTpMdChbXSkpLHJ9fWZ1bmN0aW9uIGl0KHQsbil7dmFyIGU7dHJ5e2U9bmV3IFBvcFN0YXRlRXZlbnQoXCJwb3BzdGF0ZVwiLHtzdGF0ZTp0fSl9Y2F0Y2gobil7KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJQb3BTdGF0ZUV2ZW50XCIpKS5pbml0UG9wU3RhdGVFdmVudChcInBvcHN0YXRlXCIsITEsITEsdCl9cmV0dXJuIGUuc2luZ2xlU3BhPSEwLGUuc2luZ2xlU3BhVHJpZ2dlcj1uLGV9aWYoWSl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIscnQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixydCk7dmFyIHV0PXdpbmRvdy5hZGRFdmVudExpc3RlbmVyLGF0PXdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHQsbil7aWYoIShcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZ0dC5pbmRleE9mKHQpPj0wKXx8XyhaW3RdLChmdW5jdGlvbih0KXtyZXR1cm4gdD09PW59KSkpcmV0dXJuIHV0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtaW3RdLnB1c2gobil9LHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHQsbil7aWYoIShcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZ0dC5pbmRleE9mKHQpPj0wKSlyZXR1cm4gYXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO1pbdF09Wlt0XS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0IT09bn0pKX0sd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlPW90KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSxcInB1c2hTdGF0ZVwiKSx3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU9b3Qod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlLFwicmVwbGFjZVN0YXRlXCIpLHdpbmRvdy5zaW5nbGVTcGFOYXZpZ2F0ZT9jb25zb2xlLndhcm4ocyg0MSwhMSkpOndpbmRvdy5zaW5nbGVTcGFOYXZpZ2F0ZT1udH1mdW5jdGlvbiBjdCh0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gbi5ocmVmPXQsbn12YXIgc3Q9ITE7ZnVuY3Rpb24gZnQoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06d2luZG93LmpRdWVyeTtpZih0fHx3aW5kb3cuJCYmd2luZG93LiQuZm4mJndpbmRvdy4kLmZuLmpxdWVyeSYmKHQ9d2luZG93LiQpLHQmJiFzdCl7dmFyIG49dC5mbi5vbixlPXQuZm4ub2ZmO3QuZm4ub249ZnVuY3Rpb24odCxlKXtyZXR1cm4gbHQuY2FsbCh0aGlzLG4sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIsdCxlLGFyZ3VtZW50cyl9LHQuZm4ub2ZmPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGx0LmNhbGwodGhpcyxlLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyLHQsbixhcmd1bWVudHMpfSxzdD0hMH19ZnVuY3Rpb24gbHQodCxuLGUscixvKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT90LmFwcGx5KHRoaXMsbyk6KGUuc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0dC5pbmRleE9mKHQpPj0wJiYobih0LHIpLGU9ZS5yZXBsYWNlKHQsXCJcIikpfSkpLFwiXCI9PT1lLnRyaW0oKT90aGlzOnQuYXBwbHkodGhpcyxvKSl9dmFyIHB0PXt9O2Z1bmN0aW9uIGh0KHQpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3ZhciBuPXB0W1QodCldO3JldHVybiBuP3Quc3RhdHVzPT09bD8obXQodCxuKSx0KTpcIlVOTE9BRElOR1wiPT09dC5zdGF0dXM/bi5wcm9taXNlLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KSk6dC5zdGF0dXMhPT1kP3Q6KHQuc3RhdHVzPVwiVU5MT0FESU5HXCIsVih0LFwidW5sb2FkXCIpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG10KHQsbiksdH0pKS5jYXRjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbixlKXtkZWxldGUgcHRbVCh0KV0sZGVsZXRlIHQuYm9vdHN0cmFwLGRlbGV0ZSB0Lm1vdW50LGRlbGV0ZSB0LnVubW91bnQsZGVsZXRlIHQudW5sb2FkLHUoZSx0LE8pLG4ucmVqZWN0KGUpfSh0LG4sZSksdH0pKSk6dH0pKX1mdW5jdGlvbiBtdCh0LG4pe2RlbGV0ZSBwdFtUKHQpXSxkZWxldGUgdC5ib290c3RyYXAsZGVsZXRlIHQubW91bnQsZGVsZXRlIHQudW5tb3VudCxkZWxldGUgdC51bmxvYWQsdC5zdGF0dXM9bCxuLnJlc29sdmUoKX1mdW5jdGlvbiBkdCh0LG4sZSxyKXtwdFtUKHQpXT17YXBwOnQscmVzb2x2ZTplLHJlamVjdDpyfSxPYmplY3QuZGVmaW5lUHJvcGVydHkocHRbVCh0KV0sXCJwcm9taXNlXCIse2dldDpufSl9ZnVuY3Rpb24gdnQodCl7cmV0dXJuIHB0W3RdfXZhciB3dD1bXTtmdW5jdGlvbiBndCgpe3ZhciB0PVtdLG49W10sZT1bXSxyPVtdLG89KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIHd0LmZvckVhY2goKGZ1bmN0aW9uKGkpe3ZhciB1PWkuc3RhdHVzIT09TyYmYihpKTtzd2l0Y2goaS5zdGF0dXMpe2Nhc2UgeTp1JiZvLWkubG9hZEVycm9yVGltZT49MjAwJiZlLnB1c2goaSk7YnJlYWs7Y2FzZSBsOmNhc2UgcDp1JiZlLnB1c2goaSk7YnJlYWs7Y2FzZSBoOmNhc2UgZDohdSYmdnQoVChpKSk/dC5wdXNoKGkpOnUmJnIucHVzaChpKTticmVhaztjYXNlIHc6dXx8bi5wdXNoKGkpfX0pKSx7YXBwc1RvVW5sb2FkOnQsYXBwc1RvVW5tb3VudDpuLGFwcHNUb0xvYWQ6ZSxhcHBzVG9Nb3VudDpyfX1mdW5jdGlvbiBFdCgpe3JldHVybiB3dC5maWx0ZXIoUCkubWFwKFQpfWZ1bmN0aW9uIHl0KCl7cmV0dXJuIHd0Lm1hcChUKX1mdW5jdGlvbiBPdCh0KXt2YXIgbj1fKHd0LChmdW5jdGlvbihuKXtyZXR1cm4gVChuKT09PXR9KSk7cmV0dXJuIG4/bi5zdGF0dXM6bnVsbH1mdW5jdGlvbiBQdCh0LGUscixvKXt2YXIgaT1mdW5jdGlvbih0LGUscixvKXt2YXIgaSx1PXtuYW1lOm51bGwsbG9hZEFwcDpudWxsLGFjdGl2ZVdoZW46bnVsbCxjdXN0b21Qcm9wczpudWxsfTtyZXR1cm5cIm9iamVjdFwiPT09bih0KT8oZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KXx8bnVsbD09PXQpdGhyb3cgRXJyb3IocygzOSwhMSkpO3ZhciBlPVtcIm5hbWVcIixcImFwcFwiLFwiYWN0aXZlV2hlblwiLFwiY3VzdG9tUHJvcHNcIl0scj1PYmplY3Qua2V5cyh0KS5yZWR1Y2UoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuaW5kZXhPZihuKT49MD90OnQuY29uY2F0KG4pfSksW10pO2lmKDAhPT1yLmxlbmd0aCl0aHJvdyBFcnJvcihzKDM4LCExLGUuam9pbihcIiwgXCIpLHIuam9pbihcIiwgXCIpKSk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQubmFtZXx8MD09PXQubmFtZS5sZW5ndGgpdGhyb3cgRXJyb3IocygyMCwhMSkpO2lmKFwib2JqZWN0XCIhPT1uKHQuYXBwKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgdC5hcHApdGhyb3cgRXJyb3IocygyMCwhMSkpO3ZhciBvPWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fTtpZighKG8odC5hY3RpdmVXaGVuKXx8QXJyYXkuaXNBcnJheSh0LmFjdGl2ZVdoZW4pJiZ0LmFjdGl2ZVdoZW4uZXZlcnkobykpKXRocm93IEVycm9yKHMoMjQsITEpKTtpZighU3QodC5jdXN0b21Qcm9wcykpdGhyb3cgRXJyb3IocygyMiwhMSkpfSh0KSx1Lm5hbWU9dC5uYW1lLHUubG9hZEFwcD10LmFwcCx1LmFjdGl2ZVdoZW49dC5hY3RpdmVXaGVuLHUuY3VzdG9tUHJvcHM9dC5jdXN0b21Qcm9wcyk6KGZ1bmN0aW9uKHQsbixlLHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0fHwwPT09dC5sZW5ndGgpdGhyb3cgRXJyb3IocygyMCwhMSkpO2lmKCFuKXRocm93IEVycm9yKHMoMjMsITEpKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IEVycm9yKHMoMjQsITEpKTtpZighU3QocikpdGhyb3cgRXJyb3IocygyMiwhMSkpfSh0LGUscixvKSx1Lm5hbWU9dCx1LmxvYWRBcHA9ZSx1LmFjdGl2ZVdoZW49cix1LmN1c3RvbVByb3BzPW8pLHUubG9hZEFwcD1cImZ1bmN0aW9uXCIhPXR5cGVvZihpPXUubG9hZEFwcCk/ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGkpfTppLHUuY3VzdG9tUHJvcHM9ZnVuY3Rpb24odCl7cmV0dXJuIHR8fHt9fSh1LmN1c3RvbVByb3BzKSx1LmFjdGl2ZVdoZW49ZnVuY3Rpb24odCl7dmFyIG49QXJyYXkuaXNBcnJheSh0KT90Olt0XTtyZXR1cm4gbj1uLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90Ol90KHQpfSkpLGZ1bmN0aW9uKHQpe3JldHVybiBuLnNvbWUoKGZ1bmN0aW9uKG4pe3JldHVybiBuKHQpfSkpfX0odS5hY3RpdmVXaGVuKSx1fSh0LGUscixvKTtpZigtMSE9PXl0KCkuaW5kZXhPZihpLm5hbWUpKXRocm93IEVycm9yKHMoMjEsITEsaS5uYW1lKSk7d3QucHVzaChTKHtsb2FkRXJyb3JUaW1lOm51bGwsc3RhdHVzOmwscGFyY2Vsczp7fSxkZXZ0b29sczp7b3ZlcmxheXM6e29wdGlvbnM6e30sc2VsZWN0b3JzOltdfX19LGkpKSxZJiYoZnQoKSxMdCgpKX1mdW5jdGlvbiBidCgpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp3aW5kb3cubG9jYXRpb247cmV0dXJuIHd0LmZpbHRlcigoZnVuY3Rpb24obil7cmV0dXJuIG4uYWN0aXZlV2hlbih0KX0pKS5tYXAoVCl9ZnVuY3Rpb24gVHQodCl7aWYoMD09PXd0LmZpbHRlcigoZnVuY3Rpb24obil7cmV0dXJuIFQobik9PT10fSkpLmxlbmd0aCl0aHJvdyBFcnJvcihzKDI1LCExLHQpKTtyZXR1cm4gQXQodCkudGhlbigoZnVuY3Rpb24oKXt2YXIgbj13dC5tYXAoVCkuaW5kZXhPZih0KTt3dC5zcGxpY2UobiwxKX0pKX1mdW5jdGlvbiBBdCh0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e3dhaXRGb3JVbm1vdW50OiExfTtpZihcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBFcnJvcihzKDI2LCExKSk7dmFyIGU9Xyh3dCwoZnVuY3Rpb24obil7cmV0dXJuIFQobik9PT10fSkpO2lmKCFlKXRocm93IEVycm9yKHMoMjcsITEsdCkpO3ZhciByLG89dnQoVChlKSk7aWYobiYmbi53YWl0Rm9yVW5tb3VudCl7aWYobylyZXR1cm4gby5wcm9taXNlO3ZhciBpPW5ldyBQcm9taXNlKChmdW5jdGlvbih0LG4pe2R0KGUsKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSx0LG4pfSkpO3JldHVybiBpfXJldHVybiBvPyhyPW8ucHJvbWlzZSxOdChlLG8ucmVzb2x2ZSxvLnJlamVjdCkpOnI9bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsbil7ZHQoZSwoZnVuY3Rpb24oKXtyZXR1cm4gcn0pLHQsbiksTnQoZSx0LG4pfSkpLHJ9ZnVuY3Rpb24gTnQodCxuLGUpe0wodCkudGhlbihodCkudGhlbigoZnVuY3Rpb24oKXtuKCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXtMdCgpfSkpfSkpLmNhdGNoKGUpfWZ1bmN0aW9uIFN0KHQpe3JldHVybiF0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcIm9iamVjdFwiPT09bih0KSYmbnVsbCE9PXQmJiFBcnJheS5pc0FycmF5KHQpfWZ1bmN0aW9uIF90KHQsbil7dmFyIGU9ZnVuY3Rpb24odCxuKXt2YXIgZT0wLHI9ITEsbz1cIl5cIjtcIi9cIiE9PXRbMF0mJih0PVwiL1wiK3QpO2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgdT10W2ldOyghciYmXCI6XCI9PT11fHxyJiZcIi9cIj09PXUpJiZhKGkpfXJldHVybiBhKHQubGVuZ3RoKSxuZXcgUmVnRXhwKG8sXCJpXCIpO2Z1bmN0aW9uIGEoaSl7dmFyIHU9dC5zbGljZShlLGkpLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLFwiXFxcXCQmXCIpO2lmKG8rPXI/XCJbXi9dKy8/XCI6dSxpPT09dC5sZW5ndGgpaWYociluJiYobys9XCIkXCIpO2Vsc2V7dmFyIGE9bj9cIlwiOlwiLipcIjtvPVwiL1wiPT09by5jaGFyQXQoby5sZW5ndGgtMSk/XCJcIi5jb25jYXQobykuY29uY2F0KGEsXCIkXCIpOlwiXCIuY29uY2F0KG8sXCIoL1wiKS5jb25jYXQoYSxcIik/KCMuKik/JFwiKX1yPSFyLGU9aX19KHQsbik7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQuaHJlZi5yZXBsYWNlKHQub3JpZ2luLFwiXCIpLnJlcGxhY2UodC5zZWFyY2gsXCJcIikuc3BsaXQoXCI/XCIpWzBdO3JldHVybiBlLnRlc3Qobil9fXZhciBEdD0hMSxVdD1bXSxqdD1ZJiZ3aW5kb3cubG9jYXRpb24uaHJlZjtmdW5jdGlvbiBNdCgpe3JldHVybiBMdCgpfWZ1bmN0aW9uIEx0KCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdLG49YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDA7aWYoRHQpcmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih0LGUpe1V0LnB1c2goe3Jlc29sdmU6dCxyZWplY3Q6ZSxldmVudEFyZ3VtZW50czpufSl9KSk7dmFyIHIsaT1ndCgpLHU9aS5hcHBzVG9VbmxvYWQsYT1pLmFwcHNUb1VubW91bnQsYz1pLmFwcHNUb0xvYWQscz1pLmFwcHNUb01vdW50LGY9ITEscD1qdCxoPWp0PXdpbmRvdy5sb2NhdGlvbi5ocmVmO3JldHVybiBCdCgpPyhEdD0hMCxyPXUuY29uY2F0KGMsYSxzKSxnKCkpOihyPWMsdigpKTtmdW5jdGlvbiBtKCl7Zj0hMH1mdW5jdGlvbiB2KCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIHQ9Yy5tYXAoeik7cmV0dXJuIFByb21pc2UuYWxsKHQpLnRoZW4oeSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm5bXX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7dGhyb3cgeSgpLHR9KSl9KSl9ZnVuY3Rpb24gZygpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe2lmKHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBvKDA9PT1yLmxlbmd0aD9cInNpbmdsZS1zcGE6YmVmb3JlLW5vLWFwcC1jaGFuZ2VcIjpcInNpbmdsZS1zcGE6YmVmb3JlLWFwcC1jaGFuZ2VcIixQKCEwKSkpLHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwic2luZ2xlLXNwYTpiZWZvcmUtcm91dGluZy1ldmVudFwiLFAoITAse2NhbmNlbE5hdmlnYXRpb246bX0pKSksZilyZXR1cm4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IG8oXCJzaW5nbGUtc3BhOmJlZm9yZS1tb3VudC1yb3V0aW5nLWV2ZW50XCIsUCghMCkpKSxFKCksdm9pZCBudChwKTt2YXIgbj11Lm1hcChodCksZT1hLm1hcChMKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRoZW4oaHQpfSkpLmNvbmNhdChuKSxpPVByb21pc2UuYWxsKGUpO2kudGhlbigoZnVuY3Rpb24oKXt3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgbyhcInNpbmdsZS1zcGE6YmVmb3JlLW1vdW50LXJvdXRpbmctZXZlbnRcIixQKCEwKSkpfSkpO3ZhciBsPWMubWFwKChmdW5jdGlvbih0KXtyZXR1cm4geih0KS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gUnQodCxpKX0pKX0pKSxoPXMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gYy5pbmRleE9mKHQpPDB9KSkubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gUnQodCxpKX0pKTtyZXR1cm4gaS5jYXRjaCgoZnVuY3Rpb24odCl7dGhyb3cgeSgpLHR9KSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4geSgpLFByb21pc2UuYWxsKGwuY29uY2F0KGgpKS5jYXRjaCgoZnVuY3Rpb24obil7dGhyb3cgdC5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWplY3Qobil9KSksbn0pKS50aGVuKEUpfSkpfSkpfWZ1bmN0aW9uIEUoKXt2YXIgbj1FdCgpO3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVzb2x2ZShuKX0pKTt0cnl7dmFyIGU9MD09PXIubGVuZ3RoP1wic2luZ2xlLXNwYTpuby1hcHAtY2hhbmdlXCI6XCJzaW5nbGUtc3BhOmFwcC1jaGFuZ2VcIjt3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgbyhlLFAoKSkpLHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwic2luZ2xlLXNwYTpyb3V0aW5nLWV2ZW50XCIsUCgpKSl9Y2F0Y2godCl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0aHJvdyB0fSkpfWlmKER0PSExLFV0Lmxlbmd0aD4wKXt2YXIgaT1VdDtVdD1bXSxMdChpKX1yZXR1cm4gbn1mdW5jdGlvbiB5KCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtldCh0LmV2ZW50QXJndW1lbnRzKX0pKSxldChuKX1mdW5jdGlvbiBQKCl7dmFyIHQsbz1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLGk9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsbT17fSx2PShlKHQ9e30sdyxbXSksZSh0LGQsW10pLGUodCxsLFtdKSxlKHQsTyxbXSksdCk7bz8oYy5jb25jYXQocykuZm9yRWFjaCgoZnVuY3Rpb24odCxuKXtFKHQsdyl9KSksdS5mb3JFYWNoKChmdW5jdGlvbih0KXtFKHQsbCl9KSksYS5mb3JFYWNoKChmdW5jdGlvbih0KXtFKHQsZCl9KSkpOnIuZm9yRWFjaCgoZnVuY3Rpb24odCl7RSh0KX0pKTt2YXIgZz17ZGV0YWlsOntuZXdBcHBTdGF0dXNlczptLGFwcHNCeU5ld1N0YXR1czp2LHRvdGFsQXBwQ2hhbmdlczpyLmxlbmd0aCxvcmlnaW5hbEV2ZW50Om51bGw9PW4/dm9pZCAwOm5bMF0sb2xkVXJsOnAsbmV3VXJsOmgsbmF2aWdhdGlvbklzQ2FuY2VsZWQ6Zn19O3JldHVybiBpJiZTKGcuZGV0YWlsLGkpLGc7ZnVuY3Rpb24gRSh0LG4pe3ZhciBlPVQodCk7bj1ufHxPdChlKSxtW2VdPW4sKHZbbl09dltuXXx8W10pLnB1c2goZSl9fX1mdW5jdGlvbiBSdCh0LG4pe3JldHVybiBiKHQpP00odCkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIG4udGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gYih0KT94KHQpOnR9KSl9KSk6bi50aGVuKChmdW5jdGlvbigpe3JldHVybiB0fSkpfXZhciBJdD0hMTtmdW5jdGlvbiB4dCh0KXt2YXIgbjtJdD0hMCx0JiZ0LnVybFJlcm91dGVPbmx5JiYobj10LnVybFJlcm91dGVPbmx5LFg9biksWSYmTHQoKX1mdW5jdGlvbiBCdCgpe3JldHVybiBJdH1ZJiZzZXRUaW1lb3V0KChmdW5jdGlvbigpe0l0fHxjb25zb2xlLndhcm4ocygxLCExKSl9KSw1ZTMpO3ZhciBHdD17Z2V0UmF3QXBwRGF0YTpmdW5jdGlvbigpe3JldHVybltdLmNvbmNhdCh3dCl9LHJlcm91dGU6THQsTk9UX0xPQURFRDpsLHRvTG9hZFByb21pc2U6eix0b0Jvb3RzdHJhcFByb21pc2U6TSx1bnJlZ2lzdGVyQXBwbGljYXRpb246VHR9O1kmJndpbmRvdy5fX1NJTkdMRV9TUEFfREVWVE9PTFNfXyYmKHdpbmRvdy5fX1NJTkdMRV9TUEFfREVWVE9PTFNfXy5leHBvc2VkTWV0aG9kcz1HdCk7ZXhwb3J0e20gYXMgQk9PVFNUUkFQUElORyxwIGFzIExPQURJTkdfU09VUkNFX0NPREUseSBhcyBMT0FEX0VSUk9SLHcgYXMgTU9VTlRFRCx2IGFzIE1PVU5USU5HLGggYXMgTk9UX0JPT1RTVFJBUFBFRCxsIGFzIE5PVF9MT0FERUQsZCBhcyBOT1RfTU9VTlRFRCxPIGFzIFNLSVBfQkVDQVVTRV9CUk9LRU4sRSBhcyBVTk1PVU5USU5HLGcgYXMgVVBEQVRJTkcsYSBhcyBhZGRFcnJvckhhbmRsZXIsYnQgYXMgY2hlY2tBY3Rpdml0eUZ1bmN0aW9ucyxmdCBhcyBlbnN1cmVKUXVlcnlTdXBwb3J0LHl0IGFzIGdldEFwcE5hbWVzLE90IGFzIGdldEFwcFN0YXR1cyxFdCBhcyBnZXRNb3VudGVkQXBwcyxDIGFzIG1vdW50Um9vdFBhcmNlbCxudCBhcyBuYXZpZ2F0ZVRvVXJsLF90IGFzIHBhdGhUb0FjdGl2ZVdoZW4sUHQgYXMgcmVnaXN0ZXJBcHBsaWNhdGlvbixjIGFzIHJlbW92ZUVycm9ySGFuZGxlcixGIGFzIHNldEJvb3RzdHJhcE1heFRpbWUsSiBhcyBzZXRNb3VudE1heFRpbWUsUSBhcyBzZXRVbmxvYWRNYXhUaW1lLEggYXMgc2V0VW5tb3VudE1heFRpbWUseHQgYXMgc3RhcnQsTXQgYXMgdHJpZ2dlckFwcENoYW5nZSxBdCBhcyB1bmxvYWRBcHBsaWNhdGlvbixUdCBhcyB1bnJlZ2lzdGVyQXBwbGljYXRpb259O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2luZ2xlLXNwYS5taW4uanMubWFwXG4iLCJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiaW1wb3J0ICogYXMgc2luZ2xlU3BhIGZyb20gXCJzaW5nbGUtc3BhXCI7XHJcblxyXG5pbXBvcnQgZXhoaWJpdFBhbmVTdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XHJcblxyXG4vLyBUaGlzIGlzIG9ubHkgaW5jbHVkZWQgdG8gcHJldmVudCBzaW5nbGUgc3BhIGZyb20gZ2l2aW5nIGEgd2FybmluZy5cclxuc2luZ2xlU3BhLnN0YXJ0KCk7XHJcblxyXG5jb25zdCBtYXBDb21wb25lbnRzID0gbmV3IFdlYWtNYXAoKTsgXHJcblxyXG5jbGFzcyBBdHRhY2hlZENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50Q29udGFpbmVyLCBfcHJvbWlzZUltcG9ydCkge1xyXG4gICAgICAgIHRoaXMuX2RvbUVsZW1lbnRDb250YWluZXIgPSBkb21FbGVtZW50Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2VJbXBvcnQgPSBfcHJvbWlzZUltcG9ydDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGF0dXMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbXBvcnRQcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlSW1wb3J0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXR0YWNoKCkge1xyXG4gICAgICAgIC8vIHJldHVybiBhIHByb21pc2VcclxuICAgICAgICAvLyBpZiBsb2FkaW5nIHJldHVybiB0aGlzIG9uZS5cclxuICAgICAgICAvLyBpZiBwYXJjZWwgbW91bnRpbmcgbG9hZCB0aGF0IG9uZVxyXG4gICAgICAgIC8vIGlmIHVubG9hZGluZyBlcnJvci5cclxuICAgIH1cclxuXHJcbiAgICB1bmF0dGFjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy51bmF0dGFjaGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmF0dGFjaGVkO1xyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdHRhY2hlZFBhbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2F0dGFjaGVkUGFuZS5lbGVtZW50Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2F0dGFjaGVkUGFuZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXBDb21wb25lbnRzLmRlbGV0ZSh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVuYXR0YWNoZWQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmNlbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIGl0J3MgbW91bnRlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyY2VsLm1vdW50UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmNlbC51bm1vdW50KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5hdHRhY2hlZDtcclxuICAgIH1cclxufVxyXG5jbGFzcyBOYW1lc3BhY2Uge1xyXG4gICAgYXR0YWNoTG9hZGluZ1BhbmUoZG9tRWxlbWVudENvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IF9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBjb25zdCBfbG9hZGluZ0ljb24gPSBfb3B0aW9ucy5sb2FkaW5nSWNvbiB8fCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFBNENBWUFBQUJOR1A1eUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQVBEU1VSQlZHaUI3WnBmYUZ0VkhNYy81K2FtU2RQdVR4dHJSOFRCNm5TeUIrZllFRUhCbDRxQ0NPS2NZMU1SeEZLR29IdXMwNGZoaS9oUUtvNzUwS2wwRDNPRDBCWVVwd3g4RWR5bVhmL1NiVzdPS2RxcDNaL1VkRXR2YW5MUHo0ZlNRVm1XZTEyVG5KSGV6K081M3hNK2ZEbS9jME1ibGRyeXNGQ2x1RnJXTmZXUG5pdVdzU29sYzZjU0ZHQmF3RFJCQWFZRlRMUGtDN0FCckx0V0VkNzRtR21Ya3BFL080YjcrOCsrc2paQWFQVmFZdTN2bGxXcWtqZzluYjRMV1BJakVCUmdXc0EwUVFHbUJVd1RGR0Jhd0RTMmFZRnkwclZoMStPYm5ubDZRN0ZNVlJkd2RzVzZEcEQ3aTJXVy9BZ0VCWmdXS0NmTGErMjRWNmFxNzREVysrb2IxOWJHQ2o3Ny9vOVpKak51ZFJld2JYMk1VR0pGd1dkdkhVMHhtWEdyZXdUOEVCUmdXc0EwUVFHbUJVd1RGR0Jhd0RSQkFhWUZUQk1VWUZyQU5FRUJwZ1ZNRXhSZ1dzQTBTNzRBRzBCbXMrakpDYyt3MVpRQXEwQm5vdEdYL2l5NTNPMGlNOWQ5WjIyQS9LbVRwTjk0MWpPODhzQjNxTHBsTjYxbiszdHdQdC83UHhUdkhHeWcyMGV1RldoUk5aR2JIdVJQRCtFYzNpZWdKa0MrQnJpd2JNMmF1dlVQUGJsNnVkbS91S2xZdldmR2J1d2RhZmNLcGJacy9BSkx0UkN1V2JBdTZSU1pyZzZORmkwVzIrTEprZU1BbXo0NWNyS3gxdUxvanViYmRhOFl2aTVCUWNkVVRYVGhUMnBGay9ub0hkRlRseTJRWGZIazhQR3lHSllaWDJkVWlZcXBTSFRCbXBQc0pqZDZRaWxJTnZTTzdDdUxYUVh3TjZTS0dITW5RQUhreHdmSUpyc0YrRVdzVUZ1aExVNU8yRHR3cldTaVhqelZFdVdCZUJpQWMxZHpIQnlmK1NtbkpYdXIvT25MdVJiQTN5MGxjT01FNkgrdWt1bnFjSlZJSHVURmh1Umd1dEFlSnk4Y0dQUC9PbG9zMy83bWNQQzVKdXJDaW9sckxsK2RuM25Reno1L0l6QmZnR2d5SDc2dGRUb1ZFdGdaN3gwZExwUVg0UldnOEw5a3lvQUZ6MDlNdTdzL09KYm12U2RXRXJYVnZIaW5hQTRWMit2M1BSV2pKcXFjUXgrVEh4K3dFRGtjN3h2ZGY2dndVRnZpakcvN1VyQkhoamZmKzljalI4NDdyWS9lRTJGVmZXaHVYWE5scUMweFdHeXJ6Ni9DVXV0ZS9GVmwrejRUNEV3K2xDODQ5OGJZbzNSSWgxNjJGSmZlUDVhV3Y2KzdjK3RLYXIyMmVoWWdXN2VHUUVWbGVnclFzMHFyN1hjblQxVnV1SDN5UTF2enBDdTg2dVNFcmgrbjUxL1pubVBvV2NDVjJiRWJINkpFN1d6b0h4NWRoR2RaR1hvOThRMUk1NVNqRllCU0xQNEVhTUl4QUlWODJ0QTMwck5veTNMakpuYURuQURRWWkyK2dFakVpZ0hqenIvMm15WFFLenVEN1NwbldmWkxRSnBTaklDNEllMWErb1hFbDRNenBSQ3NCQU92TlY4QTFhYnd2Z1NybXMzN0wyNzN5dndIaGZJeWNkL3lKNWtBQUFBQVNVVk9SSzVDWUlJPVwiO1xyXG4gICAgICAgIGNvbnN0IF9sb2FkaW5nSWNvbkNsYXNzID0gZXhoaWJpdFBhbmVTdHlsZVtfb3B0aW9ucy5sb2FkaW5nSWNvbkNsYXNzXSB8fCBcIlwiO1xyXG4gICAgICAgIC8vIFdlIGNyZWF0ZSBhIHN0YXR1cyBwYW5lIGhlcmUgYW5kIHNob3cuIFRoaXMgaXMgdXNlZCBmb3IgbG9hZGluZyBhbmQgZXJyb3JzLlxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZUNoYXJ0UGFuZSA9XHJcbiAgICAgICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCIke2V4aGliaXRQYW5lU3R5bGVbJ2V4aGliaXQtcGFuZSddfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtleGhpYml0UGFuZVN0eWxlWydsb2FkaW5nLXN0YXR1cyddfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIiR7ZXhoaWJpdFBhbmVTdHlsZVsnbG9hZGluZy1pY29uJ119YCArIChfbG9hZGluZ0ljb25DbGFzcyA/ICcgJyArIF9sb2FkaW5nSWNvbkNsYXNzIDogJycpICsgYFwiIHNyYz1cImAgKyBfbG9hZGluZ0ljb24gKyBgXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtleGhpYml0UGFuZVN0eWxlWydjb21wb25lbnQnXX1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlQ2hhcnRQYW5lLnRyaW0oKTtcclxuICAgICAgICBsZXQgZG9tRWxlbWVudCA9IGRpdi5maXJzdENoaWxkO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50Q29tcG9uZW50ID0gZGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZXhoaWJpdFBhbmVTdHlsZVsnY29tcG9uZW50J10pWzBdO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRMb2FkaW5nU3RhdHVzID0gZGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZXhoaWJpdFBhbmVTdHlsZVsnbG9hZGluZy1zdGF0dXMnXSlbMF07XHJcbiAgICAgICAgY29uc3QgZWxlbWVudExvYWRpbmdJY29uID0gZGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZXhoaWJpdFBhbmVTdHlsZVsnbG9hZGluZy1pY29uJ10pWzBdO1xyXG5cclxuICAgICAgICBkb21FbGVtZW50Q29udGFpbmVyLmFwcGVuZChkb21FbGVtZW50KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyIDogZG9tRWxlbWVudCxcclxuICAgICAgICAgICAgZWxlbWVudENvbXBvbmVudCA6IGVsZW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGVsZW1lbnRMb2FkaW5nU3RhdHVzIDogZWxlbWVudExvYWRpbmdTdGF0dXMsXHJcbiAgICAgICAgICAgIGVsZW1lbnRMb2FkaW5nSWNvbiA6IGVsZW1lbnRMb2FkaW5nSWNvblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoQ29tcG9uZW50KGhhbmRsZXJSZXNvbHZlLCBvcHRpb25zUHJvcHMsIG9wdGlvbnNMb2FkaW5nUGFuZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVyUmVzb2x2ZSB8fCAhaGFuZGxlclJlc29sdmUuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgcmVqZWN0KCdkb21FbGVtZW50IGNhbiBub3QgYmUgZW1wdHknKTtcclxuICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZXhpc3RpbmcgPSBtYXBDb21wb25lbnRzLmdldChoYW5kbGVyUmVzb2x2ZS5jb250YWluZXIpO1xyXG4gICAgICAgIGlmIChleGlzdGluZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGV4aXN0aW5nKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwQ29tcG9uZW50cy5zZXQoaGFuZGxlclJlc29sdmUuY29udGFpbmVyLCBoYW5kbGVyUmVzb2x2ZSk7XHJcblxyXG4gICAgICAgIGhhbmRsZXJSZXNvbHZlLl9hdHRhY2hlZFBhbmUgPSB0aGlzLmF0dGFjaExvYWRpbmdQYW5lKGhhbmRsZXJSZXNvbHZlLmNvbnRhaW5lciwgb3B0aW9uc0xvYWRpbmdQYW5lKTtcclxuXHJcbiAgICAgICAgbGV0IG9uUmVuZGVyZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJSZXNvbHZlLnVuYXR0YWNoZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGhhbmRsZXJSZXNvbHZlLl9hdHRhY2hlZFBhbmUuZWxlbWVudExvYWRpbmdTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXJSZXNvbHZlLl9hdHRhY2hlZFBhbmUuZWxlbWVudExvYWRpbmdTdGF0dXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgaGFuZGxlclJlc29sdmUuX2F0dGFjaGVkUGFuZS5lbGVtZW50TG9hZGluZ1N0YXR1cy5jbGFzc0xpc3QuYWRkKGV4aGliaXRQYW5lU3R5bGVbJ2hpZGRlbiddKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBkb21FbGVtZW50IDogaGFuZGxlclJlc29sdmUuX2F0dGFjaGVkUGFuZS5lbGVtZW50Q29tcG9uZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbnNDb25maWcucHJvcGVydGllcyA9IHsuLi5vcHRpb25zUHJvcHN9O1xyXG4gICAgICAgIG9wdGlvbnNDb25maWcucHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24ob3B0aW9uc0NvbmZpZy5wcm9wZXJ0aWVzLCBvcHRpb25zTG9hZGluZ1BhbmUucHJvcGVydGllcyB8fCB7fSk7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zTG9hZGluZ1BhbmUuY3VzdG9tUmVuZGVyZWQpXHJcbiAgICAgICAgICAgIG9wdGlvbnNDb25maWcucHJvcGVydGllc1tvcHRpb25zTG9hZGluZ1BhbmUuY3VzdG9tUmVuZGVyZWRdID0gb25SZW5kZXJlZDtcclxuXHJcbiAgICAgICAgaGFuZGxlclJlc29sdmUuaW1wb3J0UHJvbWlzZS50aGVuKChwYXJjZWxDb25maWcpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlclJlc29sdmUuX3BhcmNlbCA9IHNpbmdsZVNwYS5tb3VudFJvb3RQYXJjZWwocGFyY2VsQ29uZmlnLCBvcHRpb25zQ29uZmlnKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJSZXNvbHZlLnVuYXR0YWNoZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaGFuZGxlclJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZXJSZXNvbHZlLl9wYXJjZWwubW91bnRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXJSZXNvbHZlLnVuYXR0YWNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnNMb2FkaW5nUGFuZS5jdXN0b21SZW5kZXJlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZW5kZXJlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShoYW5kbGVyUmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUVycm9yUGFuZSA9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7ZXhoaWJpdFBhbmVTdHlsZVsnbG9hZGluZy1lcnJvciddfVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5Mb2FkaW5nIEVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPHA+YCArIGVycm9yICsgYDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGl2RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2RXJyb3IuaW5uZXJIVE1MID0gdGVtcGxhdGVFcnJvclBhbmUudHJpbSgpO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudEVycm9yUGFuZSA9IGRpdkVycm9yLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVyUmVzb2x2ZS5fYXR0YWNoZWRQYW5lLmVsZW1lbnRMb2FkaW5nSWNvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaGFuZGxlclJlc29sdmUuX2F0dGFjaGVkUGFuZS5lbGVtZW50TG9hZGluZ1N0YXR1cy5hcHBlbmQoZWxlbWVudEVycm9yUGFuZSk7XHJcblxyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRHluYW1pY0NvbXBvbmVudChkb21FbGVtZW50Q29udGFpbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zTG9hZGluZ1BhbmVcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc1Byb3BzID0gey4uLnByb3BlcnRpZXN9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnQoXHJcbiAgICAgICAgICAgIG5ldyBBdHRhY2hlZENvbXBvbmVudChcclxuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZHluYW1pYy9keW5hbWljLWNvbXBvbmVudCcpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG9wdGlvbnNQcm9wcyxcclxuICAgICAgICAgICAgb3B0aW9uc0xvYWRpbmdQYW5lKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lc3BhY2UgPSBuZXcgTmFtZXNwYWNlKCk7XHJcbiJdLCJuYW1lcyI6WyJOYXRpdmVDdXN0b21FdmVudCIsIkN1c3RvbUV2ZW50IiwicCIsImRldGFpbCIsImZvbyIsInR5cGUiLCJlIiwidXNlTmF0aXZlIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsInBhcmFtcyIsImluaXRDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY3JlYXRlRXZlbnRPYmplY3QiLCJCb29sZWFuIiwic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJzaW5nbGVTcGEiLCJtYXBDb21wb25lbnRzIiwiV2Vha01hcCIsIkF0dGFjaGVkQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJkb21FbGVtZW50Q29udGFpbmVyIiwiX3Byb21pc2VJbXBvcnQiLCJfZG9tRWxlbWVudENvbnRhaW5lciIsImNvbnRhaW5lciIsInN0YXR1cyIsImltcG9ydFByb21pc2UiLCJvbkF0dGFjaCIsInVuYXR0YWNoIiwidW5hdHRhY2hlZCIsInJlbW92ZUNvbXBvbmVudCIsIl9hdHRhY2hlZFBhbmUiLCJlbGVtZW50Q29udGFpbmVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiYmluZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiX3BhcmNlbCIsIm1vdW50UHJvbWlzZSIsInRoZW4iLCJ1bm1vdW50IiwicmVzdWx0IiwiZXJyb3IiLCJOYW1lc3BhY2UiLCJhdHRhY2hMb2FkaW5nUGFuZSIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsIl9sb2FkaW5nSWNvbiIsImxvYWRpbmdJY29uIiwiX2xvYWRpbmdJY29uQ2xhc3MiLCJleGhpYml0UGFuZVN0eWxlIiwibG9hZGluZ0ljb25DbGFzcyIsInRlbXBsYXRlQ2hhcnRQYW5lIiwiZGl2IiwiaW5uZXJIVE1MIiwidHJpbSIsImRvbUVsZW1lbnQiLCJlbGVtZW50Q29tcG9uZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImVsZW1lbnRMb2FkaW5nU3RhdHVzIiwiZWxlbWVudExvYWRpbmdJY29uIiwiYXBwZW5kIiwiYXR0YWNoQ29tcG9uZW50IiwiaGFuZGxlclJlc29sdmUiLCJvcHRpb25zUHJvcHMiLCJvcHRpb25zTG9hZGluZ1BhbmUiLCJleGlzdGluZyIsImdldCIsInVuZGVmaW5lZCIsInNldCIsIm9uUmVuZGVyZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwib3B0aW9uc0NvbmZpZyIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXN0b21SZW5kZXJlZCIsInBhcmNlbENvbmZpZyIsImNhdGNoIiwidGVtcGxhdGVFcnJvclBhbmUiLCJkaXZFcnJvciIsImVsZW1lbnRFcnJvclBhbmUiLCJhdHRhY2hEeW5hbWljQ29tcG9uZW50IiwibmFtZXNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
