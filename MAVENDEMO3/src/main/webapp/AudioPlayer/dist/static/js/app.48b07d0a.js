var current="1";
var nextM="zero";
var microflag=false;
var microCount=0;
var Queue=[];
//const url='http://r7uno10m.shenzhuo.vip:30329/servlet/music'
var url="http://127.0.0.1:12222/servlet/music"

var httpRequest =new XMLHttpRequest();//第一步：建立所需的对象


var timeOutCount;
var timeOutCount2;
//周期(以毫秒/ms为单位)，平均每5秒刷新一次
var timeCycle = 5000;
var timecycle2=1000;
/*
        $(function () {
        getData();
        });
        */
//向服务器发送请求，并获取返回结果

//停止

// function stop() {
//         if (timeOutCount > 0) {
//                 removeTimeOut(timeOutCount);
//         }
// }
// //清空TimeOut
// function removeTimeOut(id) {
//         window.clearTimeout(id);
// }

//myt add
(function(e) {
        function t(t) {
                for (var i, a, s = t[0], l = t[1], c = t[2], u = 0, h = []; u < s.length; u++) {
                        a = s[u], Object.prototype
                            .hasOwnProperty.call(o, a) && o[a] && h.push(o[a][0]), o[a] = 0
                        //	console.log(s),				console.log("u:"), console.log(u),console.log("h:"),console.log(h);

                }
                for (i in l){//计算对象长度
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);

                }
                d && d(t);
                while (h.length) h.shift()();
                return r.push.apply(r, c || []), n()
        }

        function n() {
                for (var e, t = 0; t < r.length; t++) {
                        for (var n = r[t], i = !0, s = 1; s < n.length; s++) {
                                var l = n[s];
                                0 !== o[l] && (i = !1)

                        }
                        i && (r.splice(t--, 1), e = a(a.s = n[0]))
                }

                return e
        }
        var i = {},
            o = {
                    app: 0
            },
            r = [];

        function a(t) {
                if (i[t]) return i[t].exports;

                var n = i[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                };

                return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
        }
        a.m = e, a.c = i, a.d = function(e, t, n) {
                a.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                })
        }, a.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                        value: !0
                })
        }, a.t = function(e, t) {
                if (1 & t && (e = a(e)), 8 & t) return e;
                if (4 & t && "object" === typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (a.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                }), 2 & t && "string" != typeof e)
                        for (var i in e) a.d(n, i, function(t) {
                                return e[t]
                        }.bind(null, i));
                return n
        }, a.n = function(e) {
                var t = e && e.__esModule ? function() {
                        return e["default"]
                } : function() {
                        return e
                };
                return a.d(t, "a", t), t
        }, a.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "";
        var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
            l = s.push.bind(s);
        s.push = t, s = s.slice();
        for (var c = 0; c < s.length; c++) t(s[c]);
        var d = l;
        r.push([0, "chunk-vendors"]), n()
})



({
        0: function(e, t, n) {
                e.exports = n("56d7")
        },
        "1dc2": function(e, t, n) {
                e.exports = n.p + "static/img/left.ce4064e2.jpg"
        },
        "56d7": function(e, t, n) {
                "use strict";
                n.r(t);
                n("e260"), n("e6cf"), n("cca6"), n("a79d");
                var i = n("2b0e"),
                    o = function() {
                            var e = this,
                                t = e.$createElement,
                                n = e._self._c || t;
                            return n("div", {
                                    attrs: {
                                            id: "app"
                                    }
                            }, [n("div", {
                                        staticClass: "file-select-btn",
                                        on: {
                                                click: function(t) {
                                                        e.nextMusic()
                                                }
                                        }
                                }, [e._v("下一首"), n("text")]
                            )])
                    },
                    r = [],
                    a = (n("99af"), n("4de4"), n("4160"), n("d81d"), n("d3b7"), n("cfc3"), n("9a8c"), n("a975"), n(
                        "735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n(
                        "5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n(
                        "649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), n("159b"), n("5a89")),
                    s = (n("4c53"), n("ddb0"), function(e, t) {
                            void 0 === t && console.warn(
                                'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t ===
                            document && console.error(
                                'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
                            ), this.object = e, this.domElement = t, this.enabled = !0, this.target = new a[
                                "J"], this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom =
                                1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 /
                                0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this
                                .enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this
                                .enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7,
                                this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
                                    LEFT: 37,
                                    UP: 38,
                                    RIGHT: 39,
                                    BOTTOM: 40
                            }, this.mouseButtons = {
                                    LEFT: a["t"].ROTATE,
                                    MIDDLE: a["t"].DOLLY,
                                    RIGHT: a["t"].PAN
                            }, this.touches = {
                                    ONE: a["G"].ROTATE,
                                    TWO: a["G"].DOLLY_PAN
                            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(),
                                this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
                                    return d.phi
                            }, this.getAzimuthalAngle = function() {
                                    return d.theta
                            }, this.saveState = function() {
                                    n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object
                                        .zoom
                            }, this.reset = function() {
                                    n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n
                                        .zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(i), n.update(), l = s
                                        .NONE
                            }, this.update = function() {
                                    var t = new a["J"],
                                        o = (new a["B"]).setFromUnitVectors(e.up, new a["J"](0, 1, 0)),
                                        r = o.clone().inverse(),
                                        m = new a["J"],
                                        _ = new a["B"];
                                    return function() {
                                            var e = n.object.position;
                                            return t.copy(e).sub(n.target), t.applyQuaternion(o), d.setFromVector3(t), n
                                                .autoRotate && l === s.NONE && T(C()), n.enableDamping ? (d.theta += u
                                                .theta * n.dampingFactor, d.phi += u.phi * n.dampingFactor) : (d
                                                .theta += u.theta, d.phi += u.phi), d.theta = Math.max(n
                                                .minAzimuthAngle, Math.min(n.maxAzimuthAngle, d.theta)), d.phi =
                                                Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, d.phi)), d
                                                .makeSafe(), d.radius *= h, d.radius = Math.max(n.minDistance, Math.min(
                                                n.maxDistance, d.radius)), !0 === n.enableDamping ? n.target
                                                .addScaledVector(f, n.dampingFactor) : n.target.add(f), t
                                                .setFromSpherical(d), t.applyQuaternion(r), e.copy(n.target).add(t), n
                                                .object.lookAt(n.target), !0 === n.enableDamping ? (u.theta *= 1 - n
                                                .dampingFactor, u.phi *= 1 - n.dampingFactor, f.multiplyScalar(1 - n
                                                .dampingFactor)) : (u.set(0, 0, 0), f.set(0, 0, 0)), h = 1, !!(
                                                p || m.distanceToSquared(n.object.position) > c || 8 * (1 - _.dot(n
                                                    .object.quaternion)) > c) && (n.dispatchEvent(i), m.copy(n
                                                .object.position), _.copy(n.object.quaternion), p = !1, !0)
                                    }
                            }(), this.dispose = function() {
                                    n.domElement.removeEventListener("contextmenu", se, !1), n.domElement
                                        .removeEventListener("mousedown", $, !1), n.domElement.removeEventListener(
                                        "wheel", ne, !1), n.domElement.removeEventListener("touchstart", oe, !1), n
                                        .domElement.removeEventListener("touchend", ae, !1), n.domElement
                                        .removeEventListener("touchmove", re, !1), document.removeEventListener(
                                        "mousemove", ee, !1), document.removeEventListener("mouseup", te, !1), n
                                        .domElement.removeEventListener("keydown", ie, !1)
                            };
                            var n = this,
                                i = {
                                        type: "change"
                                },
                                o = {
                                        type: "start"
                                },
                                r = {
                                        type: "end"
                                },
                                s = {
                                        NONE: -1,
                                        ROTATE: 0,
                                        DOLLY: 1,
                                        PAN: 2,
                                        TOUCH_ROTATE: 3,
                                        TOUCH_PAN: 4,
                                        TOUCH_DOLLY_PAN: 5,
                                        TOUCH_DOLLY_ROTATE: 6
                                },
                                l = s.NONE,
                                c = 1e-6,
                                d = new a["F"],
                                u = new a["F"],
                                h = 1,
                                f = new a["J"],
                                p = !1,
                                m = new a["I"],
                                _ = new a["I"],
                                g = new a["I"],
                                b = new a["I"],
                                v = new a["I"],
                                y = new a["I"],
                                w = new a["I"],
                                x = new a["I"],
                                E = new a["I"];

                            function C() {
                                    return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed
                            }

                            function S() {
                                    return Math.pow(.95, n.zoomSpeed)
                            }

                            function T(e) {
                                    u.theta -= e
                            }

                            function A(e) {
                                    u.phi -= e
                            }
                            var O = function() {
                                        var e = new a["J"];
                                        return function(t, n) {
                                                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), f.add(e)
                                        }
                                }(),
                                k = function() {
                                        var e = new a["J"];
                                        return function(t, i) {
                                                !0 === n.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e
                                                    .setFromMatrixColumn(i, 0), e.crossVectors(n.object.up, e)), e
                                                    .multiplyScalar(t), f.add(e)
                                        }
                                }(),
                                R = function() {
                                        var e = new a["J"];
                                        return function(t, i) {
                                                var o = n.domElement;
                                                if (n.object.isPerspectiveCamera) {
                                                        var r = n.object.position;
                                                        e.copy(r).sub(n.target);
                                                        var a = e.length();
                                                        a *= Math.tan(n.object.fov / 2 * Math.PI / 180), O(2 * t * a / o
                                                            .clientHeight, n.object.matrix), k(2 * i * a / o.clientHeight, n
                                                            .object.matrix)
                                                } else n.object.isOrthographicCamera ? (O(t * (n.object.right - n.object
                                                    .left) / n.object.zoom / o.clientWidth, n.object.matrix), k(i *
                                                    (n.object.top - n.object.bottom) / n.object.zoom / o
                                                        .clientHeight, n.object.matrix)) : (console.warn(
                                                    "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                                                ), n.enablePan = !1)
                                        }
                                }();

                            function P(e) {
                                    n.object.isPerspectiveCamera ? h /= e : n.object.isOrthographicCamera ? (n.object.zoom =
                                        Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * e)), n.object
                                        .updateProjectionMatrix(), p = !0) : (console.warn(
                                        "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                                    ), n.enableZoom = !1)
                            }

                            function M(e) {
                                    n.object.isPerspectiveCamera ? h *= e : n.object.isOrthographicCamera ? (n.object.zoom =
                                        Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / e)), n.object
                                        .updateProjectionMatrix(), p = !0) : (console.warn(
                                        "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                                    ), n.enableZoom = !1)
                            }

                            function L(e) {
                                    m.set(e.clientX, e.clientY)
                            }

                            function j(e) {
                                    w.set(e.clientX, e.clientY)
                            }

                            function B(e) {
                                    b.set(e.clientX, e.clientY)
                            }

                            function D(e) {
                                    _.set(e.clientX, e.clientY), g.subVectors(_, m).multiplyScalar(n.rotateSpeed);
                                    var t = n.domElement;
                                    T(2 * Math.PI * g.x / t.clientHeight), A(2 * Math.PI * g.y / t.clientHeight), m.copy(_),
                                        n.update()
                            }

                            function N(e) {
                                    x.set(e.clientX, e.clientY), E.subVectors(x, w), E.y > 0 ? P(S()) : E.y < 0 && M(S()), w
                                        .copy(x), n.update()
                            }

                            function H(e) {
                                    v.set(e.clientX, e.clientY), y.subVectors(v, b).multiplyScalar(n.panSpeed), R(y.x, y.y),
                                        b.copy(v), n.update()
                            }

                            function F() {}

                            function I(e) {
                                    e.deltaY < 0 ? M(S()) : e.deltaY > 0 && P(S()), n.update()
                            }

                            function z(e) {
                                    var t = !1;
                                    switch (e.keyCode) {
                                            case n.keys.UP:
                                                    R(0, n.keyPanSpeed), t = !0;
                                                    break;
                                            case n.keys.BOTTOM:
                                                    R(0, -n.keyPanSpeed), t = !0;
                                                    break;
                                            case n.keys.LEFT:
                                                    R(n.keyPanSpeed, 0), t = !0;
                                                    break;
                                            case n.keys.RIGHT:
                                                    R(-n.keyPanSpeed, 0), t = !0;
                                                    break
                                    }
                                    t && (e.preventDefault(), n.update())
                            }

                            function U(e) {
                                    if (1 == e.touches.length) m.set(e.touches[0].pageX, e.touches[0].pageY);
                                    else {
                                            var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                                n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                            m.set(t, n)
                                    }
                            }

                            function V(e) {
                                    if (1 == e.touches.length) b.set(e.touches[0].pageX, e.touches[0].pageY);
                                    else {
                                            var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                                n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                            b.set(t, n)
                                    }
                            }

                            function G(e) {
                                    var t = e.touches[0].pageX - e.touches[1].pageX,
                                        n = e.touches[0].pageY - e.touches[1].pageY,
                                        i = Math.sqrt(t * t + n * n);
                                    w.set(0, i)
                            }

                            function Y(e) {
                                    n.enableZoom && G(e), n.enablePan && V(e)
                            }

                            function X(e) {
                                    n.enableZoom && G(e), n.enableRotate && U(e)
                            }

                            function Q(e) {
                                    if (1 == e.touches.length) _.set(e.touches[0].pageX, e.touches[0].pageY);
                                    else {
                                            var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                                i = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                            _.set(t, i)
                                    }
                                    g.subVectors(_, m).multiplyScalar(n.rotateSpeed);
                                    var o = n.domElement;
                                    T(2 * Math.PI * g.x / o.clientHeight), A(2 * Math.PI * g.y / o.clientHeight), m.copy(_)
                            }

                            function J(e) {
                                    if (1 == e.touches.length) v.set(e.touches[0].pageX, e.touches[0].pageY);
                                    else {
                                            var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                                i = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                            v.set(t, i)
                                    }
                                    y.subVectors(v, b).multiplyScalar(n.panSpeed), R(y.x, y.y), b.copy(v)
                            }

                            function W(e) {
                                    var t = e.touches[0].pageX - e.touches[1].pageX,
                                        i = e.touches[0].pageY - e.touches[1].pageY,
                                        o = Math.sqrt(t * t + i * i);
                                    x.set(0, o), E.set(0, Math.pow(x.y / w.y, n.zoomSpeed)), P(E.y), w.copy(x)
                            }

                            function K(e) {
                                    n.enableZoom && W(e), n.enablePan && J(e)
                            }

                            function Z(e) {
                                    n.enableZoom && W(e), n.enableRotate && Q(e)
                            }

                            function q() {}

                            function $(e) {
                                    if (!1 !== n.enabled) {
                                            var t;
                                            switch (e.preventDefault(), n.domElement.focus ? n.domElement.focus() : window
                                                .focus(), e.button) {
                                                    case 0:
                                                            t = n.mouseButtons.LEFT;
                                                            break;
                                                    case 1:
                                                            t = n.mouseButtons.MIDDLE;
                                                            break;
                                                    case 2:
                                                            t = n.mouseButtons.RIGHT;
                                                            break;
                                                    default:
                                                            t = -1
                                            }
                                            switch (t) {
                                                    case a["t"].DOLLY:
                                                            if (!1 === n.enableZoom) return;
                                                            j(e), l = s.DOLLY;
                                                            break;
                                                    case a["t"].ROTATE:
                                                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                                                    if (!1 === n.enablePan) return;
                                                                    B(e), l = s.PAN
                                                            } else {
                                                                    if (!1 === n.enableRotate) return;
                                                                    L(e), l = s.ROTATE
                                                            }
                                                            break;
                                                    case a["t"].PAN:
                                                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                                                    if (!1 === n.enableRotate) return;
                                                                    L(e), l = s.ROTATE
                                                            } else {
                                                                    if (!1 === n.enablePan) return;
                                                                    B(e), l = s.PAN
                                                            }
                                                            break;
                                                    default:
                                                            l = s.NONE
                                            }
                                            l !== s.NONE && (document.addEventListener("mousemove", ee, !1), document
                                                .addEventListener("mouseup", te, !1), n.dispatchEvent(o))
                                    }
                            }

                            function ee(e) {
                                    if (!1 !== n.enabled) switch (e.preventDefault(), l) {
                                            case s.ROTATE:
                                                    if (!1 === n.enableRotate) return;
                                                    D(e);
                                                    break;
                                            case s.DOLLY:
                                                    if (!1 === n.enableZoom) return;
                                                    N(e);
                                                    break;
                                            case s.PAN:
                                                    if (!1 === n.enablePan) return;
                                                    H(e);
                                                    break
                                    }
                            }

                            function te(e) {
                                    !1 !== n.enabled && (F(e), document.removeEventListener("mousemove", ee, !1), document
                                        .removeEventListener("mouseup", te, !1), n.dispatchEvent(r), l = s.NONE)
                            }

                            function ne(e) {
                                    !1 === n.enabled || !1 === n.enableZoom || l !== s.NONE && l !== s.ROTATE || (e
                                        .preventDefault(), e.stopPropagation(), n.dispatchEvent(o), I(e), n
                                        .dispatchEvent(r))
                            }

                            function ie(e) {
                                    !1 !== n.enabled && !1 !== n.enableKeys && !1 !== n.enablePan && z(e)
                            }

                            function oe(e) {
                                    if (!1 !== n.enabled) {
                                            switch (e.preventDefault(), e.touches.length) {
                                                    case 1:
                                                            switch (n.touches.ONE) {
                                                                    case a["G"].ROTATE:
                                                                            if (!1 === n.enableRotate) return;
                                                                            U(e), l = s.TOUCH_ROTATE;
                                                                            break;
                                                                    case a["G"].PAN:
                                                                            if (!1 === n.enablePan) return;
                                                                            V(e), l = s.TOUCH_PAN;
                                                                            break;
                                                                    default:
                                                                            l = s.NONE
                                                            }
                                                            break;
                                                    case 2:
                                                            switch (n.touches.TWO) {
                                                                    case a["G"].DOLLY_PAN:
                                                                            if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                                                            Y(e), l = s.TOUCH_DOLLY_PAN;
                                                                            break;
                                                                    case a["G"].DOLLY_ROTATE:
                                                                            if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                                                            X(e), l = s.TOUCH_DOLLY_ROTATE;
                                                                            break;
                                                                    default:
                                                                            l = s.NONE
                                                            }
                                                            break;
                                                    default:
                                                            l = s.NONE
                                            }
                                            l !== s.NONE && n.dispatchEvent(o)
                                    }
                            }

                            function re(e) {
                                    if (!1 !== n.enabled) switch (e.preventDefault(), e.stopPropagation(), l) {
                                            case s.TOUCH_ROTATE:
                                                    if (!1 === n.enableRotate) return;
                                                    Q(e), n.update();
                                                    break;
                                            case s.TOUCH_PAN:
                                                    if (!1 === n.enablePan) return;
                                                    J(e), n.update();
                                                    break;
                                            case s.TOUCH_DOLLY_PAN:
                                                    if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                                    K(e), n.update();
                                                    break;
                                            case s.TOUCH_DOLLY_ROTATE:
                                                    if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                                    Z(e), n.update();
                                                    break;
                                            default:
                                                    l = s.NONE
                                    }
                            }

                            function ae(e) {
                                    !1 !== n.enabled && (q(e), n.dispatchEvent(r), l = s.NONE)
                            }

                            function se(e) {
                                    !1 !== n.enabled && e.preventDefault()
                            }
                            n.domElement.addEventListener("contextmenu", se, !1), n.domElement.addEventListener(
                                "mousedown", $, !1), n.domElement.addEventListener("wheel", ne, !1), n.domElement
                                .addEventListener("touchstart", oe, !1), n.domElement.addEventListener("touchend", ae, !
                                1), n.domElement.addEventListener("touchmove", re, !1), n.domElement
                                .addEventListener("keydown", ie, !1), -1 === n.domElement.tabIndex && (n.domElement
                                .tabIndex = 0), this.update()
                    });
                s.prototype = Object.create(a["m"].prototype), s.prototype.constructor = s;
                var l = function(e, t) {
                        s.call(this, e, t), this.mouseButtons.LEFT = a["t"].PAN, this.mouseButtons.RIGHT = a["t"]
                            .ROTATE, this.touches.ONE = a["G"].PAN, this.touches.TWO = a["G"].DOLLY_ROTATE
                };
                l.prototype = Object.create(a["m"].prototype), l.prototype.constructor = l;
                n("a4d3"), n("e01a"), n("d28b"), n("c975"), n("a15b"), n("fb6a"), n("a434"), n("b0c0"), n("b680"), n(
                    "e439"), n("3410"), n("b64b"), n("4d63"), n("ac1f"), n("25f0"), n("3ca3"), n("466d"), n("5319"),
                    n("1276");
                var c = n("53ca");

                function d(e) {
                        if (e && "undefined" !== typeof window) {
                                var t = document.createElement("style");
                                return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e
                        }
                }

                function u(e, t) {
                        var n = e.__state.conversionName.toString(),
                            i = Math.round(e.r),
                            o = Math.round(e.g),
                            r = Math.round(e.b),
                            a = e.a,
                            s = Math.round(e.h),
                            l = e.s.toFixed(1),
                            c = e.v.toFixed(1);
                        if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                                var d = e.hex.toString(16);
                                while (d.length < 6) d = "0" + d;
                                return "#" + d
                        }
                        return "CSS_RGB" === n ? "rgb(" + i + "," + o + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + i +
                            "," + o + "," + r + "," + a + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" ===
                        n ? "[" + i + "," + o + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + o + "," + r + "," +
                            a + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" +
                            i + ",g:" + o + ",b:" + r + ",a:" + a + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" +
                            c + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + c + ",a:" + a + "}" :
                            "unknown format"
                }
                var h = Array.prototype.forEach,
                    f = Array.prototype.slice,
                    p = {
                            BREAK: {},
                            extend: function(e) {
                                    return this.each(f.call(arguments, 1), (function(t) {
                                            var n = this.isObject(t) ? Object.keys(t) : [];
                                            n.forEach(function(n) {
                                                    this.isUndefined(t[n]) || (e[n] = t[n])
                                            }.bind(this))
                                    }), this), e
                            },
                            defaults: function(e) {
                                    return this.each(f.call(arguments, 1), (function(t) {
                                            var n = this.isObject(t) ? Object.keys(t) : [];
                                            n.forEach(function(n) {
                                                    this.isUndefined(e[n]) && (e[n] = t[n])
                                            }.bind(this))
                                    }), this), e
                            },
                            compose: function() {
                                    var e = f.call(arguments);
                                    return function() {
                                            for (var t = f.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(
                                                this, t)];
                                            return t[0]
                                    }
                            },
                            each: function(e, t, n) {
                                    if (e)
                                            if (h && e.forEach && e.forEach === h) e.forEach(t, n);
                                            else if (e.length === e.length + 0) {
                                                    var i = void 0,
                                                        o = void 0;
                                                    for (i = 0, o = e.length; i < o; i++)
                                                            if (i in e && t.call(n, e[i], i) === this.BREAK) return
                                            } else
                                                    for (var r in e)
                                                            if (t.call(n, e[r], r) === this.BREAK) return
                            },
                            defer: function(e) {
                                    setTimeout(e, 0)
                            },
                            debounce: function(e, t, n) {
                                    var i = void 0;
                                    return function() {
                                            var o = this,
                                                r = arguments;

                                            function a() {
                                                    i = null, n || e.apply(o, r)
                                            }
                                            var s = n || !i;
                                            clearTimeout(i), i = setTimeout(a, t), s && e.apply(o, r)
                                    }
                            },
                            toArray: function(e) {
                                    return e.toArray ? e.toArray() : f.call(e)
                            },
                            isUndefined: function(e) {
                                    return void 0 === e
                            },
                            isNull: function(e) {
                                    return null === e
                            },
                            isNaN: function(e) {
                                    function t() {
                                            return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                            return e.toString()
                                    }, t
                            }((function(e) {
                                    return isNaN(e)
                            })),
                            isArray: Array.isArray || function(e) {
                                    return e.constructor === Array
                            },
                            isObject: function(e) {
                                    return e === Object(e)
                            },
                            isNumber: function(e) {
                                    return e === e + 0
                            },
                            isString: function(e) {
                                    return e === e + ""
                            },
                            isBoolean: function(e) {
                                    return !1 === e || !0 === e
                            },
                            isFunction: function(e) {
                                    return e instanceof Function
                            }
                    },
                    m = [{
                            litmus: p.isString,
                            conversions: {
                                    THREE_CHAR_HEX: {
                                            read: function(e) {
                                                    var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                                    return null !== t && {
                                                            space: "HEX",
                                                            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2]
                                                                .toString() + t[2].toString() + t[3].toString() + t[3]
                                                                .toString(), 0)
                                                    }
                                            },
                                            write: u
                                    },
                                    SIX_CHAR_HEX: {
                                            read: function(e) {
                                                    var t = e.match(/^#([A-F0-9]{6})$/i);
                                                    return null !== t && {
                                                            space: "HEX",
                                                            hex: parseInt("0x" + t[1].toString(), 0)
                                                    }
                                            },
                                            write: u
                                    },
                                    CSS_RGB: {
                                            read: function(e) {
                                                    var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                                    return null !== t && {
                                                            space: "RGB",
                                                            r: parseFloat(t[1]),
                                                            g: parseFloat(t[2]),
                                                            b: parseFloat(t[3])
                                                    }
                                            },
                                            write: u
                                    },
                                    CSS_RGBA: {
                                            read: function(e) {
                                                    var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                                    return null !== t && {
                                                            space: "RGB",
                                                            r: parseFloat(t[1]),
                                                            g: parseFloat(t[2]),
                                                            b: parseFloat(t[3]),
                                                            a: parseFloat(t[4])
                                                    }
                                            },
                                            write: u
                                    }
                            }
                    }, {
                            litmus: p.isNumber,
                            conversions: {
                                    HEX: {
                                            read: function(e) {
                                                    return {
                                                            space: "HEX",
                                                            hex: e,
                                                            conversionName: "HEX"
                                                    }
                                            },
                                            write: function(e) {
                                                    return e.hex
                                            }
                                    }
                            }
                    }, {
                            litmus: p.isArray,
                            conversions: {
                                    RGB_ARRAY: {
                                            read: function(e) {
                                                    return 3 === e.length && {
                                                            space: "RGB",
                                                            r: e[0],
                                                            g: e[1],
                                                            b: e[2]
                                                    }
                                            },
                                            write: function(e) {
                                                    return [e.r, e.g, e.b]
                                            }
                                    },
                                    RGBA_ARRAY: {
                                            read: function(e) {
                                                    return 4 === e.length && {
                                                            space: "RGB",
                                                            r: e[0],
                                                            g: e[1],
                                                            b: e[2],
                                                            a: e[3]
                                                    }
                                            },
                                            write: function(e) {
                                                    return [e.r, e.g, e.b, e.a]
                                            }
                                    }
                            }
                    }, {
                            litmus: p.isObject,
                            conversions: {
                                    RGBA_OBJ: {
                                            read: function(e) {
                                                    return !!(p.isNumber(e.r) && p.isNumber(e.g) && p.isNumber(e.b) && p
                                                        .isNumber(e.a)) && {
                                                            space: "RGB",
                                                            r: e.r,
                                                            g: e.g,
                                                            b: e.b,
                                                            a: e.a
                                                    }
                                            },
                                            write: function(e) {
                                                    return {
                                                            r: e.r,
                                                            g: e.g,
                                                            b: e.b,
                                                            a: e.a
                                                    }
                                            }
                                    },
                                    RGB_OBJ: {
                                            read: function(e) {
                                                    return !!(p.isNumber(e.r) && p.isNumber(e.g) && p.isNumber(e.b)) && {
                                                            space: "RGB",
                                                            r: e.r,
                                                            g: e.g,
                                                            b: e.b
                                                    }
                                            },
                                            write: function(e) {
                                                    return {
                                                            r: e.r,
                                                            g: e.g,
                                                            b: e.b
                                                    }
                                            }
                                    },
                                    HSVA_OBJ: {
                                            read: function(e) {
                                                    return !!(p.isNumber(e.h) && p.isNumber(e.s) && p.isNumber(e.v) && p
                                                        .isNumber(e.a)) && {
                                                            space: "HSV",
                                                            h: e.h,
                                                            s: e.s,
                                                            v: e.v,
                                                            a: e.a
                                                    }
                                            },
                                            write: function(e) {
                                                    return {
                                                            h: e.h,
                                                            s: e.s,
                                                            v: e.v,
                                                            a: e.a
                                                    }
                                            }
                                    },
                                    HSV_OBJ: {
                                            read: function(e) {
                                                    return !!(p.isNumber(e.h) && p.isNumber(e.s) && p.isNumber(e.v)) && {
                                                            space: "HSV",
                                                            h: e.h,
                                                            s: e.s,
                                                            v: e.v
                                                    }
                                            },
                                            write: function(e) {
                                                    return {
                                                            h: e.h,
                                                            s: e.s,
                                                            v: e.v
                                                    }
                                            }
                                    }
                            }
                    }],
                    _ = void 0,
                    g = void 0,
                    b = function() {
                            g = !1;
                            var e = arguments.length > 1 ? p.toArray(arguments) : arguments[0];
                            return p.each(m, (function(t) {
                                    if (t.litmus(e)) return p.each(t.conversions, (function(t, n) {
                                            if (_ = t.read(e), !1 === g && !1 !== _) return g = _, _
                                                .conversionName = n, _.conversion = t, p.BREAK
                                    })), p.BREAK
                            })), g
                    },
                    v = void 0,
                    y = {
                            hsv_to_rgb: function(e, t, n) {
                                    var i = Math.floor(e / 60) % 6,
                                        o = e / 60 - Math.floor(e / 60),
                                        r = n * (1 - t),
                                        a = n * (1 - o * t),
                                        s = n * (1 - (1 - o) * t),
                                        l = [
                                                [n, s, r],
                                                [a, n, r],
                                                [r, n, s],
                                                [r, a, n],
                                                [s, r, n],
                                                [n, r, a]
                                        ][i];
                                    return {
                                            r: 255 * l[0],
                                            g: 255 * l[1],
                                            b: 255 * l[2]
                                    }
                            },
                            rgb_to_hsv: function(e, t, n) {
                                    var i = Math.min(e, t, n),
                                        o = Math.max(e, t, n),
                                        r = o - i,
                                        a = void 0,
                                        s = void 0;
                                    return 0 === o ? {
                                            h: NaN,
                                            s: 0,
                                            v: 0
                                    } : (s = r / o, a = e === o ? (t - n) / r : t === o ? 2 + (n - e) / r : 4 + (e -
                                        t) / r, a /= 6, a < 0 && (a += 1), {
                                            h: 360 * a,
                                            s: s,
                                            v: o / 255
                                    })
                            },
                            rgb_to_hex: function(e, t, n) {
                                    var i = this.hex_with_component(0, 2, e);
                                    return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n), i
                            },
                            component_from_hex: function(e, t) {
                                    return e >> 8 * t & 255
                            },
                            hex_with_component: function(e, t, n) {
                                    return n << (v = 8 * t) | e & ~(255 << v)
                            }
                    },
                    w = "function" === typeof Symbol && "symbol" === Object(c["a"])(Symbol.iterator) ? function(e) {
                            return Object(c["a"])(e)
                    } : function(e) {
                            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                                "symbol" : Object(c["a"])(e)
                    },
                    x = function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    },
                    E = function() {
                            function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                            var i = t[n];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !
                                                0), Object.defineProperty(e, i.key, i)
                                    }
                            }
                            return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                            }
                    }(),
                    C = function e(t, n, i) {
                            null === t && (t = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === o) {
                                    var r = Object.getPrototypeOf(t);
                                    return null === r ? void 0 : e(r, n, i)
                            }
                            if ("value" in o) return o.value;
                            var a = o.get;
                            return void 0 !== a ? a.call(i) : void 0
                    },
                    S = function(e, t) {
                            if ("function" !== typeof t && null !== t) throw new TypeError(
                                "Super expression must either be null or a function, not " + Object(c["a"])(t));
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                    }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    },
                    T = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== Object(c["a"])(t) && "function" !== typeof t ? e : t
                    },
                    A = function() {
                            function e() {
                                    if (x(this, e), this.__state = b.apply(this, arguments), !1 === this.__state)
                                            throw new Error("Failed to interpret color arguments");
                                    this.__state.a = this.__state.a || 1
                            }
                            return E(e, [{
                                    key: "toString",
                                    value: function() {
                                            return u(this)
                                    }
                            }, {
                                    key: "toHexString",
                                    value: function() {
                                            return u(this, !0)
                                    }
                            }, {
                                    key: "toOriginal",
                                    value: function() {
                                            return this.__state.conversion.write(this)
                                    }
                            }]), e
                    }();

                function O(e, t, n) {
                        Object.defineProperty(e, t, {
                                get: function() {
                                        return "RGB" === this.__state.space || A.recalculateRGB(this, t, n), this
                                            .__state[t]
                                },
                                set: function(e) {
                                        "RGB" !== this.__state.space && (A.recalculateRGB(this, t, n), this.__state
                                            .space = "RGB"), this.__state[t] = e
                                }
                        })
                }

                function k(e, t) {
                        Object.defineProperty(e, t, {
                                get: function() {
                                        return "HSV" === this.__state.space || A.recalculateHSV(this), this.__state[t]
                                },
                                set: function(e) {
                                        "HSV" !== this.__state.space && (A.recalculateHSV(this), this.__state.space =
                                            "HSV"), this.__state[t] = e
                                }
                        })
                }
                A.recalculateRGB = function(e, t, n) {
                        if ("HEX" === e.__state.space) e.__state[t] = y.component_from_hex(e.__state.hex, n);
                        else {
                                if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
                                p.extend(e.__state, y.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
                        }
                }, A.recalculateHSV = function(e) {
                        var t = y.rgb_to_hsv(e.r, e.g, e.b);
                        p.extend(e.__state, {
                                s: t.s,
                                v: t.v
                        }), p.isNaN(t.h) ? p.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
                }, A.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], O(A.prototype, "r", 2), O(A.prototype,
                    "g", 1), O(A.prototype, "b", 0), k(A.prototype, "h"), k(A.prototype, "s"), k(A.prototype, "v"),
                    Object.defineProperty(A.prototype, "a", {
                            get: function() {
                                    return this.__state.a
                            },
                            set: function(e) {
                                    this.__state.a = e
                            }
                    }), Object.defineProperty(A.prototype, "hex", {
                        get: function() {
                                return "HEX" !== this.__state.space && (this.__state.hex = y.rgb_to_hex(this.r, this
                                    .g, this.b), this.__state.space = "HEX"), this.__state.hex
                        },
                        set: function(e) {
                                this.__state.space = "HEX", this.__state.hex = e
                        }
                });
                var R = function() {
                            function e(t, n) {
                                    x(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this
                                        .object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0
                            }
                            return E(e, [{
                                    key: "onChange",
                                    value: function(e) {
                                            return this.__onChange = e, this
                                    }
                            }, {
                                    key: "onFinishChange",
                                    value: function(e) {
                                            return this.__onFinishChange = e, this
                                    }
                            }, {
                                    key: "setValue",
                                    value: function(e) {
                                            return this.object[this.property] = e, this.__onChange && this
                                                .__onChange.call(this, e), this.updateDisplay(), this
                                    }
                            }, {
                                    key: "getValue",
                                    value: function() {
                                            return this.object[this.property]
                                    }
                            }, {
                                    key: "updateDisplay",
                                    value: function() {
                                            return this
                                    }
                            }, {
                                    key: "isModified",
                                    value: function() {
                                            return this.initialValue !== this.getValue()
                                    }
                            }]), e
                    }(),
                    P = {
                            HTMLEvents: ["change"],
                            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                            KeyboardEvents: ["keydown"]
                    },
                    M = {};
                p.each(P, (function(e, t) {
                        p.each(e, (function(e) {
                                M[e] = t
                        }))
                }));
                var L = /(\d+(\.\d+)?)px/;

                function j(e) {
                        if ("0" === e || p.isUndefined(e)) return 0;
                        var t = e.match(L);
                        return p.isNull(t) ? 0 : parseFloat(t[1])
                }
                var B = {
                            makeSelectable: function(e, t) {
                                    void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                                            return !1
                                    } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style
                                        .KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
                            },
                            makeFullscreen: function(e, t, n) {
                                    var i = n,
                                        o = t;
                                    p.isUndefined(o) && (o = !0), p.isUndefined(i) && (i = !0), e.style.position =
                                        "absolute", o && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e
                                        .style.bottom = 0)
                            },
                            fakeEvent: function(e, t, n, i) {
                                    var o = n || {},
                                        r = M[t];
                                    if (!r) throw new Error("Event type " + t + " not supported.");
                                    var a = document.createEvent(r);
                                    switch (r) {
                                            case "MouseEvents":
                                                    var s = o.x || o.clientX || 0,
                                                        l = o.y || o.clientY || 0;
                                                    a.initMouseEvent(t, o.bubbles || !1, o.cancelable || !0, window, o.clickCount ||
                                                        1, 0, 0, s, l, !1, !1, !1, !1, 0, null);
                                                    break;
                                            case "KeyboardEvents":
                                                    var c = a.initKeyboardEvent || a.initKeyEvent;
                                                    p.defaults(o, {
                                                            cancelable: !0,
                                                            ctrlKey: !1,
                                                            altKey: !1,
                                                            shiftKey: !1,
                                                            metaKey: !1,
                                                            keyCode: void 0,
                                                            charCode: void 0
                                                    }), c(t, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o
                                                        .shiftKey, o.metaKey, o.keyCode, o.charCode);
                                                    break;
                                            default:
                                                    a.initEvent(t, o.bubbles || !1, o.cancelable || !0);
                                                    break
                                    }
                                    p.defaults(a, i), e.dispatchEvent(a)
                            },
                            bind: function(e, t, n, i) {
                                    var o = i || !1;
                                    return e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e
                                        .attachEvent("on" + t, n), B
                            },
                            unbind: function(e, t, n, i) {
                                    var o = i || !1;
                                    return e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent && e
                                        .detachEvent("on" + t, n), B
                            },
                            addClass: function(e, t) {
                                    if (void 0 === e.className) e.className = t;
                                    else if (e.className !== t) {
                                            var n = e.className.split(/ +/); - 1 === n.indexOf(t) && (n.push(t), e.className = n
                                                .join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                                    }
                                    return B
                            },
                            removeClass: function(e, t) {
                                    if (t)
                                            if (e.className === t) e.removeAttribute("class");
                                            else {
                                                    var n = e.className.split(/ +/),
                                                        i = n.indexOf(t); - 1 !== i && (n.splice(i, 1), e.className = n.join(" "))
                                            }
                                    else e.className = void 0;
                                    return B
                            },
                            hasClass: function(e, t) {
                                    return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
                            },
                            getWidth: function(e) {
                                    var t = getComputedStyle(e);
                                    return j(t["border-left-width"]) + j(t["border-right-width"]) + j(t["padding-left"]) +
                                        j(t["padding-right"]) + j(t.width)
                            },
                            getHeight: function(e) {
                                    var t = getComputedStyle(e);
                                    return j(t["border-top-width"]) + j(t["border-bottom-width"]) + j(t["padding-top"]) + j(
                                        t["padding-bottom"]) + j(t.height)
                            },
                            getOffset: function(e) {
                                    var t = e,
                                        n = {
                                                left: 0,
                                                top: 0
                                        };
                                    if (t.offsetParent)
                                            do {
                                                    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent
                                            } while (t);
                                    return n
                            },
                            isActive: function(e) {
                                    return e === document.activeElement && (e.type || e.href)
                            }
                    },
                    D = function(e) {
                            function t(e, n) {
                                    x(this, t);
                                    var i = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                                        o = i;

                                    function r() {
                                            o.setValue(!o.__prev)
                                    }
                                    return i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox
                                        .setAttribute("type", "checkbox"), B.bind(i.__checkbox, "change", r, !1), i.domElement
                                        .appendChild(i.__checkbox), i.updateDisplay(), i
                            }
                            return S(t, e), E(t, [{
                                    key: "setValue",
                                    value: function(e) {
                                            var n = C(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "setValue", this).call(this, e);
                                            return this.__onFinishChange && this.__onFinishChange.call(this, this
                                                .getValue()), this.__prev = this.getValue(), n
                                    }
                            }, {
                                    key: "updateDisplay",
                                    value: function() {
                                            return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked",
                                                "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (
                                                this.__checkbox.checked = !1, this.__prev = !1), C(t.prototype
                                                .__proto__ || Object.getPrototypeOf(t.prototype),
                                                "updateDisplay", this).call(this)
                                    }
                            }]), t
                    }(R),
                    N = function(e) {
                            function t(e, n, i) {
                                    x(this, t);
                                    var o = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                                        r = i,
                                        a = o;
                                    if (o.__select = document.createElement("select"), p.isArray(r)) {
                                            var s = {};
                                            p.each(r, (function(e) {
                                                    s[e] = e
                                            })), r = s
                                    }
                                    return p.each(r, (function(e, t) {
                                            var n = document.createElement("option");
                                            n.innerHTML = t, n.setAttribute("value", e), a.__select.appendChild(n)
                                    })), o.updateDisplay(), B.bind(o.__select, "change", (function() {
                                            var e = this.options[this.selectedIndex].value;
                                            a.setValue(e)
                                    })), o.domElement.appendChild(o.__select), o
                            }
                            return S(t, e), E(t, [{
                                    key: "setValue",
                                    value: function(e) {
                                            var n = C(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "setValue", this).call(this, e);
                                            return this.__onFinishChange && this.__onFinishChange.call(this, this
                                                .getValue()), n
                                    }
                            }, {
                                    key: "updateDisplay",
                                    value: function() {
                                            return B.isActive(this.__select) ? this : (this.__select.value = this
                                                .getValue(), C(t.prototype.__proto__ || Object.getPrototypeOf(t
                                                .prototype), "updateDisplay", this).call(this))
                                    }
                            }]), t
                    }(R),
                    H = function(e) {
                            function t(e, n) {
                                    x(this, t);
                                    var i = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                                        o = i;

                                    function r() {
                                            o.setValue(o.__input.value)
                                    }

                                    function a() {
                                            o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
                                    }
                                    return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"),
                                        B.bind(i.__input, "keyup", r), B.bind(i.__input, "change", r), B.bind(i.__input, "blur",
                                        a), B.bind(i.__input, "keydown", (function(e) {
                                            13 === e.keyCode && this.blur()
                                    })), i.updateDisplay(), i.domElement.appendChild(i.__input), i
                            }
                            return S(t, e), E(t, [{
                                    key: "updateDisplay",
                                    value: function() {
                                            return B.isActive(this.__input) || (this.__input.value = this
                                                .getValue()), C(t.prototype.__proto__ || Object.getPrototypeOf(t
                                                .prototype), "updateDisplay", this).call(this)
                                    }
                            }]), t
                    }(R);

                function F(e) {
                        var t = e.toString();
                        return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
                }
                var I = function(e) {
                        function t(e, n, i) {
                                x(this, t);
                                var o = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                                    r = i || {};
                                return o.__min = r.min, o.__max = r.max, o.__step = r.step, p.isUndefined(o.__step) ? 0 ===
                                o.initialValue ? o.__impliedStep = 1 : o.__impliedStep = Math.pow(10, Math.floor(Math
                                    .log(Math.abs(o.initialValue)) / Math.LN10)) / 10 : o.__impliedStep = o.__step, o
                                    .__precision = F(o.__impliedStep), o
                        }
                        return S(t, e), E(t, [{
                                key: "setValue",
                                value: function(e) {
                                        var n = e;
                                        return void 0 !== this.__min && n < this.__min ? n = this.__min :
                                            void 0 !== this.__max && n > this.__max && (n = this.__max),
                                        void 0 !== this.__step && n % this.__step !== 0 && (n = Math.round(
                                            n / this.__step) * this.__step), C(t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype), "setValue", this).call(this,
                                            n)
                                }
                        }, {
                                key: "min",
                                value: function(e) {
                                        return this.__min = e, this
                                }
                        }, {
                                key: "max",
                                value: function(e) {
                                        return this.__max = e, this
                                }
                        }, {
                                key: "step",
                                value: function(e) {
                                        return this.__step = e, this.__impliedStep = e, this.__precision = F(e),
                                            this
                                }
                        }]), t
                }(R);

                function z(e, t) {
                        var n = Math.pow(10, t);
                        return Math.round(e * n) / n
                }
                var U = function(e) {
                        function t(e, n, i) {
                                x(this, t);
                                var o = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));
                                o.__truncationSuspended = !1;
                                var r = o,
                                    a = void 0;

                                function s() {
                                        var e = parseFloat(r.__input.value);
                                        p.isNaN(e) || r.setValue(e)
                                }

                                function l() {
                                        r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
                                }

                                function c() {
                                        l()
                                }

                                function d(e) {
                                        var t = a - e.clientY;
                                        r.setValue(r.getValue() + t * r.__impliedStep), a = e.clientY
                                }

                                function u() {
                                        B.unbind(window, "mousemove", d), B.unbind(window, "mouseup", u), l()
                                }

                                function h(e) {
                                        B.bind(window, "mousemove", d), B.bind(window, "mouseup", u), a = e.clientY
                                }
                                return o.__input = document.createElement("input"), o.__input.setAttribute("type", "text"),
                                    B.bind(o.__input, "change", s), B.bind(o.__input, "blur", c), B.bind(o.__input,
                                    "mousedown", h), B.bind(o.__input, "keydown", (function(e) {
                                        13 === e.keyCode && (r.__truncationSuspended = !0, this.blur(), r
                                            .__truncationSuspended = !1, l())
                                })), o.updateDisplay(), o.domElement.appendChild(o.__input), o
                        }
                        return S(t, e), E(t, [{
                                key: "updateDisplay",
                                value: function() {
                                        return this.__input.value = this.__truncationSuspended ? this
                                            .getValue() : z(this.getValue(), this.__precision), C(t.prototype
                                            .__proto__ || Object.getPrototypeOf(t.prototype),
                                            "updateDisplay", this).call(this)
                                }
                        }]), t
                }(I);

                function V(e, t, n, i, o) {
                        return i + (e - t) / (n - t) * (o - i)
                }
                var G = function(e) {
                            function t(e, n, i, o, r) {
                                    x(this, t);
                                    var a = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, {
                                                min: i,
                                                max: o,
                                                step: r
                                        })),
                                        s = a;

                                    function l(e) {
                                            document.activeElement.blur(), B.bind(window, "mousemove", c), B.bind(window, "mouseup",
                                                d), c(e)
                                    }

                                    function c(e) {
                                            e.preventDefault();
                                            var t = s.__background.getBoundingClientRect();
                                            return s.setValue(V(e.clientX, t.left, t.right, s.__min, s.__max)), !1
                                    }

                                    function d() {
                                            B.unbind(window, "mousemove", c), B.unbind(window, "mouseup", d), s.__onFinishChange &&
                                            s.__onFinishChange.call(s, s.getValue())
                                    }

                                    function u(e) {
                                            1 === e.touches.length && (B.bind(window, "touchmove", h), B.bind(window, "touchend",
                                                f), h(e))
                                    }

                                    function h(e) {
                                            var t = e.touches[0].clientX,
                                                n = s.__background.getBoundingClientRect();
                                            s.setValue(V(t, n.left, n.right, s.__min, s.__max))
                                    }

                                    function f() {
                                            B.unbind(window, "touchmove", h), B.unbind(window, "touchend", f), s.__onFinishChange &&
                                            s.__onFinishChange.call(s, s.getValue())
                                    }
                                    return a.__background = document.createElement("div"), a.__foreground = document
                                        .createElement("div"), B.bind(a.__background, "mousedown", l), B.bind(a.__background,
                                        "touchstart", u), B.addClass(a.__background, "slider"), B.addClass(a.__foreground,
                                        "slider-fg"), a.updateDisplay(), a.__background.appendChild(a.__foreground), a
                                        .domElement.appendChild(a.__background), a
                            }
                            return S(t, e), E(t, [{
                                    key: "updateDisplay",
                                    value: function() {
                                            var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                                            return this.__foreground.style.width = 100 * e + "%", C(t.prototype
                                                .__proto__ || Object.getPrototypeOf(t.prototype),
                                                "updateDisplay", this).call(this)
                                    }
                            }]), t
                    }(I),
                    Y = function(e) {
                            function t(e, n, i) {
                                    x(this, t);
                                    var o = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                                        r = o;
                                    return o.__button = document.createElement("div"), o.__button.innerHTML = void 0 === i ?
                                        "Fire" : i, B.bind(o.__button, "click", (function(e) {
                                            return e.preventDefault(), r.fire(), !1
                                    })), B.addClass(o.__button, "button"), o.domElement.appendChild(o.__button), o
                            }
                            return S(t, e), E(t, [{
                                    key: "fire",
                                    value: function() {
                                            this.__onChange && this.__onChange.call(this), this.getValue().call(this
                                                .object), this.__onFinishChange && this.__onFinishChange.call(
                                                this, this.getValue())
                                    }
                            }]), t
                    }(R),
                    X = function(e) {
                            function t(e, n) {
                                    x(this, t);
                                    var i = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                                    i.__color = new A(i.getValue()), i.__temp = new A(0);
                                    var o = i;
                                    i.domElement = document.createElement("div"), B.makeSelectable(i.domElement, !1), i
                                        .__selector = document.createElement("div"), i.__selector.className = "selector", i
                                        .__saturation_field = document.createElement("div"), i.__saturation_field.className =
                                        "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob
                                        .className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document
                                        .createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document
                                        .createElement("div"), i.__hue_field.className = "hue-field", i.__input = document
                                        .createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", B
                                        .bind(i.__input, "keydown", (function(e) {
                                                13 === e.keyCode && d.call(this)
                                        })), B.bind(i.__input, "blur", d), B.bind(i.__selector, "mousedown", (function() {
                                            B.addClass(this, "drag").bind(window, "mouseup", (function() {
                                                    B.removeClass(o.__selector, "drag")
                                            }))
                                    })), B.bind(i.__selector, "touchstart", (function() {
                                            B.addClass(this, "drag").bind(window, "touchend", (function() {
                                                    B.removeClass(o.__selector, "drag")
                                            }))
                                    }));
                                    var r = document.createElement("div");

                                    function a(e) {
                                            h(e), B.bind(window, "mousemove", h), B.bind(window, "touchmove", h), B.bind(window,
                                                "mouseup", l), B.bind(window, "touchend", l)
                                    }

                                    function s(e) {
                                            f(e), B.bind(window, "mousemove", f), B.bind(window, "touchmove", f), B.bind(window,
                                                "mouseup", c), B.bind(window, "touchend", c)
                                    }

                                    function l() {
                                            B.unbind(window, "mousemove", h), B.unbind(window, "touchmove", h), B.unbind(window,
                                                "mouseup", l), B.unbind(window, "touchend", l), u()
                                    }

                                    function c() {
                                            B.unbind(window, "mousemove", f), B.unbind(window, "touchmove", f), B.unbind(window,
                                                "mouseup", c), B.unbind(window, "touchend", c), u()
                                    }

                                    function d() {
                                            var e = b(this.value);
                                            !1 !== e ? (o.__color.__state = e, o.setValue(o.__color.toOriginal())) : this.value = o
                                                .__color.toString()
                                    }

                                    function u() {
                                            o.__onFinishChange && o.__onFinishChange.call(o, o.__color.toOriginal())
                                    }

                                    function h(e) {
                                            -1 === e.type.indexOf("touch") && e.preventDefault();
                                            var t = o.__saturation_field.getBoundingClientRect(),
                                                n = e.touches && e.touches[0] || e,
                                                i = n.clientX,
                                                r = n.clientY,
                                                a = (i - t.left) / (t.right - t.left),
                                                s = 1 - (r - t.top) / (t.bottom - t.top);
                                            return s > 1 ? s = 1 : s < 0 && (s = 0), a > 1 ? a = 1 : a < 0 && (a = 0), o.__color.v =
                                                s, o.__color.s = a, o.setValue(o.__color.toOriginal()), !1
                                    }

                                    function f(e) {
                                            -1 === e.type.indexOf("touch") && e.preventDefault();
                                            var t = o.__hue_field.getBoundingClientRect(),
                                                n = e.touches && e.touches[0] || e,
                                                i = n.clientY,
                                                r = 1 - (i - t.top) / (t.bottom - t.top);
                                            return r > 1 ? r = 1 : r < 0 && (r = 0), o.__color.h = 360 * r, o.setValue(o.__color
                                                .toOriginal()), !1
                                    }
                                    return p.extend(i.__selector.style, {
                                            width: "122px",
                                            height: "102px",
                                            padding: "3px",
                                            backgroundColor: "#222",
                                            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                                    }), p.extend(i.__field_knob.style, {
                                            position: "absolute",
                                            width: "12px",
                                            height: "12px",
                                            border: i.__field_knob_border + (i.__color.v < .5 ? "#fff" : "#000"),
                                            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                                            borderRadius: "12px",
                                            zIndex: 1
                                    }), p.extend(i.__hue_knob.style, {
                                            position: "absolute",
                                            width: "15px",
                                            height: "2px",
                                            borderRight: "4px solid #fff",
                                            zIndex: 1
                                    }), p.extend(i.__saturation_field.style, {
                                            width: "100px",
                                            height: "100px",
                                            border: "1px solid #555",
                                            marginRight: "3px",
                                            display: "inline-block",
                                            cursor: "pointer"
                                    }), p.extend(r.style, {
                                            width: "100%",
                                            height: "100%",
                                            background: "none"
                                    }), J(r, "top", "rgba(0,0,0,0)", "#000"), p.extend(i.__hue_field.style, {
                                            width: "15px",
                                            height: "100px",
                                            border: "1px solid #555",
                                            cursor: "ns-resize",
                                            position: "absolute",
                                            top: "3px",
                                            right: "3px"
                                    }), W(i.__hue_field), p.extend(i.__input.style, {
                                            outline: "none",
                                            textAlign: "center",
                                            color: "#fff",
                                            border: 0,
                                            fontWeight: "bold",
                                            textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)"
                                    }), B.bind(i.__saturation_field, "mousedown", a), B.bind(i.__saturation_field,
                                        "touchstart", a), B.bind(i.__field_knob, "mousedown", a), B.bind(i.__field_knob,
                                        "touchstart", a), B.bind(i.__hue_field, "mousedown", s), B.bind(i.__hue_field,
                                        "touchstart", s), i.__saturation_field.appendChild(r), i.__selector.appendChild(i
                                        .__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector
                                        .appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement
                                        .appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay(), i
                            }
                            return S(t, e), E(t, [{
                                    key: "updateDisplay",
                                    value: function() {
                                            var e = b(this.getValue());
                                            if (!1 !== e) {
                                                    var t = !1;
                                                    p.each(A.COMPONENTS, (function(n) {
                                                            if (!p.isUndefined(e[n]) && !p.isUndefined(this
                                                                .__color.__state[n]) && e[n] !== this
                                                                .__color.__state[n]) return t = !0, {}
                                                    }), this), t && p.extend(this.__color.__state, e)
                                            }
                                            p.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                                            var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                                                i = 255 - n;
                                            p.extend(this.__field_knob.style, {
                                                    marginLeft: 100 * this.__color.s - 7 + "px",
                                                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                                                    backgroundColor: this.__temp.toHexString(),
                                                    border: this.__field_knob_border + "rgb(" + n + "," + n +
                                                        "," + n + ")"
                                            }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h /
                                                360) + "px", this.__temp.s = 1, this.__temp.v = 1, J(this
                                                .__saturation_field, "left", "#fff", this.__temp.toHexString()),
                                                this.__input.value = this.__color.toString(), p.extend(this.__input
                                                .style, {
                                                    backgroundColor: this.__color.toHexString(),
                                                    color: "rgb(" + n + "," + n + "," + n + ")",
                                                    textShadow: this.__input_textShadow + "rgba(" + i + "," +
                                                        i + "," + i + ",.7)"
                                            })
                                    }
                            }]), t
                    }(R),
                    Q = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

                function J(e, t, n, i) {
                        e.style.background = "", p.each(Q, (function(o) {
                                e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n +
                                    " 0%, " + i + " 100%); "
                        }))
                }

                function W(e) {
                        e.style.background = "", e.style.cssText +=
                            "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",
                            e.style.cssText +=
                                "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                            e.style.cssText +=
                                "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                            e.style.cssText +=
                                "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                            e.style.cssText +=
                                "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
                }
                var K = {
                            load: function(e, t) {
                                    var n = t || document,
                                        i = n.createElement("link");
                                    i.type = "text/css", i.rel = "stylesheet", i.href = e, n.getElementsByTagName("head")[0]
                                        .appendChild(i)
                            },
                            inject: function(e, t) {
                                    var n = t || document,
                                        i = document.createElement("style");
                                    i.type = "text/css", i.innerHTML = e;
                                    var o = n.getElementsByTagName("head")[0];
                                    try {
                                            o.appendChild(i)
                                    } catch (r) {}
                            }
                    },
                    Z =
                        '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>',
                    q = function(e, t) {
                            var n = e[t];
                            return p.isArray(arguments[2]) || p.isObject(arguments[2]) ? new N(e, t, arguments[2]) : p
                                .isNumber(n) ? p.isNumber(arguments[2]) && p.isNumber(arguments[3]) ? p.isNumber(arguments[
                                4]) ? new G(e, t, arguments[2], arguments[3], arguments[4]) : new G(e, t, arguments[2],
                                arguments[3]) : p.isNumber(arguments[4]) ? new U(e, t, {
                                    min: arguments[2],
                                    max: arguments[3],
                                    step: arguments[4]
                            }) : new U(e, t, {
                                    min: arguments[2],
                                    max: arguments[3]
                            }) : p.isString(n) ? new H(e, t) : p.isFunction(n) ? new Y(e, t, "") : p.isBoolean(n) ?
                                new D(e, t) : null
                    };

                function $(e) {
                        setTimeout(e, 1e3 / 60)
                }
                var ee = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
                        .mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || $,
                    te = function() {
                            function e() {
                                    x(this, e), this.backgroundElement = document.createElement("div"), p.extend(this
                                        .backgroundElement.style, {
                                            backgroundColor: "rgba(0,0,0,0.8)",
                                            top: 0,
                                            left: 0,
                                            display: "none",
                                            zIndex: "1000",
                                            opacity: 0,
                                            WebkitTransition: "opacity 0.2s linear",
                                            transition: "opacity 0.2s linear"
                                    }), B.makeFullscreen(this.backgroundElement), this.backgroundElement.style
                                        .position = "fixed", this.domElement = document.createElement("div"), p.extend(this
                                        .domElement.style, {
                                            position: "fixed",
                                            display: "none",
                                            zIndex: "1001",
                                            opacity: 0,
                                            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                                            transition: "transform 0.2s ease-out, opacity 0.2s linear"
                                    }), document.body.appendChild(this.backgroundElement), document.body.appendChild(
                                        this.domElement);
                                    var t = this;
                                    B.bind(this.backgroundElement, "click", (function() {
                                            t.hide()
                                    }))
                            }
                            return E(e, [{
                                    key: "show",
                                    value: function() {
                                            var e = this;
                                            this.backgroundElement.style.display = "block", this.domElement.style
                                                .display = "block", this.domElement.style.opacity = 0, this
                                                .domElement.style.webkitTransform = "scale(1.1)", this.layout(), p
                                                .defer((function() {
                                                        e.backgroundElement.style.opacity = 1, e.domElement
                                                            .style.opacity = 1, e.domElement.style
                                                            .webkitTransform = "scale(1)"
                                                }))
                                    }
                            }, {
                                    key: "hide",
                                    value: function() {
                                            var e = this,
                                                t = function t() {
                                                        e.domElement.style.display = "none", e.backgroundElement.style
                                                            .display = "none", B.unbind(e.domElement,
                                                            "webkitTransitionEnd", t), B.unbind(e.domElement,
                                                            "transitionend", t), B.unbind(e.domElement,
                                                            "oTransitionEnd", t)
                                                };
                                            B.bind(this.domElement, "webkitTransitionEnd", t), B.bind(this
                                                .domElement, "transitionend", t), B.bind(this.domElement,
                                                "oTransitionEnd", t), this.backgroundElement.style.opacity = 0,
                                                this.domElement.style.opacity = 0, this.domElement.style
                                                .webkitTransform = "scale(1.1)"
                                    }
                            }, {
                                    key: "layout",
                                    value: function() {
                                            this.domElement.style.left = window.innerWidth / 2 - B.getWidth(this
                                                .domElement) / 2 + "px", this.domElement.style.top = window
                                                .innerHeight / 2 - B.getHeight(this.domElement) / 2 + "px"
                                    }
                            }]), e
                    }(),
                    ne = d(
                        ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"
                    );
                K.inject(ne);
                var ie = "dg",
                    oe = 72,
                    re = 20,
                    ae = "Default",
                    se = function() {
                            try {
                                    return !!window.localStorage
                            } catch (e) {
                                    return !1
                            }
                    }(),
                    le = void 0,
                    ce = !0,
                    de = void 0,
                    ue = !1,
                    he = [],
                    fe = function e(t) {
                            var n = this,
                                i = t || {};
                            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this
                                .domElement.appendChild(this.__ul), B.addClass(this.domElement, ie), this.__folders = {},
                                this.__controllers = [], this.__rememberedObjects = [], this
                                .__rememberedObjectIndecesToControllers = [], this.__listening = [], i = p.defaults(i, {
                                    closeOnTop: !1,
                                    autoPlace: !0,
                                    width: e.DEFAULT_WIDTH
                            }), i = p.defaults(i, {
                                    resizable: i.autoPlace,
                                    hideable: i.autoPlace
                            }), p.isUndefined(i.load) ? i.load = {
                                    preset: ae
                            } : i.preset && (i.load.preset = i.preset), p.isUndefined(i.parent) && i.hideable && he
                                .push(this), i.resizable = p.isUndefined(i.parent) && i.resizable, i.autoPlace && p
                                .isUndefined(i.scrollable) && (i.scrollable = !0);
                            var o = se && "true" === localStorage.getItem(ye(this, "isLocal")),
                                r = void 0,
                                a = void 0;
                            if (Object.defineProperties(this, {
                                    parent: {
                                            get: function() {
                                                    return i.parent
                                            }
                                    },
                                    scrollable: {
                                            get: function() {
                                                    return i.scrollable
                                            }
                                    },
                                    autoPlace: {
                                            get: function() {
                                                    return i.autoPlace
                                            }
                                    },
                                    closeOnTop: {
                                            get: function() {
                                                    return i.closeOnTop
                                            }
                                    },
                                    preset: {
                                            get: function() {
                                                    return n.parent ? n.getRoot().preset : i.load.preset
                                            },
                                            set: function(e) {
                                                    n.parent ? n.getRoot().preset = e : i.load.preset = e, Ae(this), n
                                                        .revert()
                                            }
                                    },
                                    width: {
                                            get: function() {
                                                    return i.width
                                            },
                                            set: function(e) {
                                                    i.width = e, Se(n, e)
                                            }
                                    },
                                    name: {
                                            get: function() {
                                                    return i.name
                                            },
                                            set: function(e) {
                                                    i.name = e, a && (a.innerHTML = i.name)
                                            }
                                    },
                                    closed: {
                                            get: function() {
                                                    return i.closed
                                            },
                                            set: function(t) {
                                                    i.closed = t, i.closed ? B.addClass(n.__ul, e.CLASS_CLOSED) : B
                                                        .removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n
                                                        .__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e
                                                        .TEXT_CLOSED)
                                            }
                                    },
                                    load: {
                                            get: function() {
                                                    return i.load
                                            }
                                    },
                                    useLocalStorage: {
                                            get: function() {
                                                    return o
                                            },
                                            set: function(e) {
                                                    se && (o = e, e ? B.bind(window, "unload", r) : B.unbind(window,
                                                        "unload", r), localStorage.setItem(ye(n, "isLocal"), e))
                                            }
                                    }
                            }), p.isUndefined(i.parent)) {
                                    if (this.closed = i.closed || !1, B.addClass(this.domElement, e.CLASS_MAIN), B
                                        .makeSelectable(this.domElement, !1), se && o) {
                                            n.useLocalStorage = !0;
                                            var s = localStorage.getItem(ye(this, "gui"));
                                            s && (i.load = JSON.parse(s))
                                    }
                                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e
                                        .TEXT_CLOSED, B.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), i.closeOnTop ? (B
                                        .addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this
                                        .__closeButton, this.domElement.childNodes[0])) : (B.addClass(this
                                        .__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this
                                        .__closeButton)), B.bind(this.__closeButton, "click", (function() {
                                            n.closed = !n.closed
                                    }))
                            } else {
                                    void 0 === i.closed && (i.closed = !0);
                                    var l = document.createTextNode(i.name);
                                    B.addClass(l, "controller-name"), a = pe(n, l);
                                    var c = function(e) {
                                            return e.preventDefault(), n.closed = !n.closed, !1
                                    };
                                    B.addClass(this.__ul, e.CLASS_CLOSED), B.addClass(a, "title"), B.bind(a, "click", c), i
                                        .closed || (this.closed = !1)
                            }

                            function d() {
                                    var e = n.getRoot();
                                    e.width += 1, p.defer((function() {
                                            e.width -= 1
                                    }))
                            }
                            i.autoPlace && (p.isUndefined(i.parent) && (ce && (de = document.createElement("div"), B
                                .addClass(de, ie), B.addClass(de, e.CLASS_AUTO_PLACE_CONTAINER), document.body
                                .appendChild(de), ce = !1), de.appendChild(this.domElement), B.addClass(this
                                .domElement, e.CLASS_AUTO_PLACE)), this.parent || Se(n, i.width)), this
                                .__resizeHandler = function() {
                                    n.onResizeDebounced()
                            }, B.bind(window, "resize", this.__resizeHandler), B.bind(this.__ul, "webkitTransitionEnd",
                                this.__resizeHandler), B.bind(this.__ul, "transitionend", this.__resizeHandler), B.bind(
                                this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && Ce(
                                this), r = function() {
                                    se && "true" === localStorage.getItem(ye(n, "isLocal")) && localStorage.setItem(ye(n,
                                        "gui"), JSON.stringify(n.getSaveObject()))
                            }, this.saveToLocalStorageIfPossible = r, i.parent || d()
                    };

                function pe(e, t, n) {
                        var i = document.createElement("li");
                        return t && i.appendChild(t), n ? e.__ul.insertBefore(i, n) : e.__ul.appendChild(i), e.onResize(), i
                }

                function me(e) {
                        B.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && B.unbind(window,
                            "unload", e.saveToLocalStorageIfPossible)
                }

                function _e(e, t) {
                        var n = e.__preset_select[e.__preset_select.selectedIndex];
                        n.innerHTML = t ? n.value + "*" : n.value
                }

                function ge(e, t, n) {
                        if (n.__li = t, n.__gui = e, p.extend(n, {
                                options: function(t) {
                                        if (arguments.length > 1) {
                                                var i = n.__li.nextElementSibling;
                                                return n.remove(), ve(e, n.object, n.property, {
                                                        before: i,
                                                        factoryArgs: [p.toArray(arguments)]
                                                })
                                        }
                                        if (p.isArray(t) || p.isObject(t)) {
                                                var o = n.__li.nextElementSibling;
                                                return n.remove(), ve(e, n.object, n.property, {
                                                        before: o,
                                                        factoryArgs: [t]
                                                })
                                        }
                                },
                                name: function(e) {
                                        return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                                },
                                listen: function() {
                                        return n.__gui.listen(n), n
                                },
                                remove: function() {
                                        return n.__gui.remove(n), n
                                }
                        }), n instanceof G) {
                                var i = new U(n.object, n.property, {
                                        min: n.__min,
                                        max: n.__max,
                                        step: n.__step
                                });
                                p.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function(e) {
                                        var t = n[e],
                                            o = i[e];
                                        n[e] = i[e] = function() {
                                                var e = Array.prototype.slice.call(arguments);
                                                return o.apply(i, e), t.apply(n, e)
                                        }
                                })), B.addClass(t, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement
                                    .firstElementChild)
                        } else if (n instanceof U) {
                                var o = function(t) {
                                        if (p.isNumber(n.__min) && p.isNumber(n.__max)) {
                                                var i = n.__li.firstElementChild.firstElementChild.innerHTML,
                                                    o = n.__gui.__listening.indexOf(n) > -1;
                                                n.remove();
                                                var r = ve(e, n.object, n.property, {
                                                        before: n.__li.nextElementSibling,
                                                        factoryArgs: [n.__min, n.__max, n.__step]
                                                });
                                                return r.name(i), o && r.listen(), r
                                        }
                                        return t
                                };
                                n.min = p.compose(o, n.min), n.max = p.compose(o, n.max)
                        } else n instanceof D ? (B.bind(t, "click", (function() {
                                B.fakeEvent(n.__checkbox, "click")
                        })), B.bind(n.__checkbox, "click", (function(e) {
                                e.stopPropagation()
                        }))) : n instanceof Y ? (B.bind(t, "click", (function() {
                                B.fakeEvent(n.__button, "click")
                        })), B.bind(t, "mouseover", (function() {
                                B.addClass(n.__button, "hover")
                        })), B.bind(t, "mouseout", (function() {
                                B.removeClass(n.__button, "hover")
                        }))) : n instanceof X && (B.addClass(t, "color"), n.updateDisplay = p.compose((function(e) {
                                return t.style.borderLeftColor = n.__color.toString(), e
                        }), n.updateDisplay), n.updateDisplay());
                        n.setValue = p.compose((function(t) {
                                return e.getRoot().__preset_select && n.isModified() && _e(e.getRoot(), !0), t
                        }), n.setValue)
                }

                function be(e, t) {
                        var n = e.getRoot(),
                            i = n.__rememberedObjects.indexOf(t.object);
                        if (-1 !== i) {
                                var o = n.__rememberedObjectIndecesToControllers[i];
                                if (void 0 === o && (o = {}, n.__rememberedObjectIndecesToControllers[i] = o), o[t.property] =
                                    t, n.load && n.load.remembered) {
                                        var r = n.load.remembered,
                                            a = void 0;
                                        if (r[e.preset]) a = r[e.preset];
                                        else {
                                                if (!r[ae]) return;
                                                a = r[ae]
                                        }
                                        if (a[i] && void 0 !== a[i][t.property]) {
                                                var s = a[i][t.property];
                                                t.initialValue = s, t.setValue(s)
                                        }
                                }
                        }
                }

                function ve(e, t, n, i) {
                        if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
                        var o = void 0;
                        if (i.color) o = new X(t, n);
                        else {
                                var r = [t, n].concat(i.factoryArgs);
                                o = q.apply(e, r)
                        }
                        i.before instanceof R && (i.before = i.before.__li), be(e, o), B.addClass(o.domElement, "c");
                        var a = document.createElement("span");
                        B.addClass(a, "property-name"), a.innerHTML = o.property;
                        var s = document.createElement("div");
                        s.appendChild(a), s.appendChild(o.domElement);
                        var l = pe(e, s, i.before);
                        return B.addClass(l, fe.CLASS_CONTROLLER_ROW), o instanceof X ? B.addClass(l, "color") : B.addClass(
                            l, w(o.getValue())), ge(e, l, o), e.__controllers.push(o), o
                }

                function ye(e, t) {
                        return document.location.href + "." + t
                }

                function we(e, t, n) {
                        var i = document.createElement("option");
                        i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select
                            .selectedIndex = e.__preset_select.length - 1)
                }

                function xe(e, t) {
                        t.style.display = e.useLocalStorage ? "block" : "none"
                }

                function Ee(e) {
                        var t = e.__save_row = document.createElement("li");
                        B.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), B.addClass(t,
                            "save-row");
                        var n = document.createElement("span");
                        n.innerHTML = "&nbsp;", B.addClass(n, "button gears");
                        var i = document.createElement("span");
                        i.innerHTML = "Save", B.addClass(i, "button"), B.addClass(i, "save");
                        var o = document.createElement("span");
                        o.innerHTML = "New", B.addClass(o, "button"), B.addClass(o, "save-as");
                        var r = document.createElement("span");
                        r.innerHTML = "Revert", B.addClass(r, "button"), B.addClass(r, "revert");
                        var a = e.__preset_select = document.createElement("select");
                        if (e.load && e.load.remembered ? p.each(e.load.remembered, (function(t, n) {
                                we(e, n, n === e.preset)
                        })) : we(e, ae, !1), B.bind(a, "change", (function() {
                                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML =
                                    e.__preset_select[t].value;
                                e.preset = this.value
                        })), t.appendChild(a), t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(r),
                            se) {
                                var s = document.getElementById("dg-local-explain"),
                                    l = document.getElementById("dg-local-storage"),
                                    c = document.getElementById("dg-save-locally");
                                c.style.display = "block", "true" === localStorage.getItem(ye(e, "isLocal")) && l.setAttribute(
                                    "checked", "checked"), xe(e, s), B.bind(l, "change", (function() {
                                        e.useLocalStorage = !e.useLocalStorage, xe(e, s)
                                }))
                        }
                        var d = document.getElementById("dg-new-constructor");
                        B.bind(d, "keydown", (function(e) {
                                !e.metaKey || 67 !== e.which && 67 !== e.keyCode || le.hide()
                        })), B.bind(n, "click", (function() {
                                d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), le.show(), d.focus(), d
                                    .select()
                        })), B.bind(i, "click", (function() {
                                e.save()
                        })), B.bind(o, "click", (function() {
                                var t = prompt("Enter a new preset name.");
                                t && e.saveAs(t)
                        })), B.bind(r, "click", (function() {
                                e.revert()
                        }))
                }

                function Ce(e) {
                        var t = void 0;

                        function n(n) {
                                return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1
                        }

                        function i() {
                                B.removeClass(e.__closeButton, fe.CLASS_DRAG), B.unbind(window, "mousemove", n), B.unbind(
                                    window, "mouseup", i)
                        }

                        function o(o) {
                                return o.preventDefault(), t = o.clientX, B.addClass(e.__closeButton, fe.CLASS_DRAG), B.bind(
                                    window, "mousemove", n), B.bind(window, "mouseup", i), !1
                        }
                        e.__resize_handle = document.createElement("div"), p.extend(e.__resize_handle.style, {
                                width: "6px",
                                marginLeft: "-3px",
                                height: "200px",
                                cursor: "ew-resize",
                                position: "absolute"
                        }), B.bind(e.__resize_handle, "mousedown", o), B.bind(e.__closeButton, "mousedown", o), e
                            .domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
                }

                function Se(e, t) {
                        e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t +
                            "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
                }

                function Te(e, t) {
                        var n = {};
                        return p.each(e.__rememberedObjects, (function(i, o) {
                                var r = {},
                                    a = e.__rememberedObjectIndecesToControllers[o];
                                p.each(a, (function(e, n) {
                                        r[n] = t ? e.initialValue : e.getValue()
                                })), n[o] = r
                        })), n
                }

                function Ae(e) {
                        for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e
                            .__preset_select.selectedIndex = t)
                }

                function Oe(e) {
                        0 !== e.length && ee.call(window, (function() {
                                Oe(e)
                        })), p.each(e, (function(e) {
                                e.updateDisplay()
                        }))
                }
                fe.toggleHide = function() {
                        ue = !ue, p.each(he, (function(e) {
                                e.domElement.style.display = ue ? "none" : ""
                        }))
                }, fe.CLASS_AUTO_PLACE = "a", fe.CLASS_AUTO_PLACE_CONTAINER = "ac", fe.CLASS_MAIN = "main", fe
                    .CLASS_CONTROLLER_ROW = "cr", fe.CLASS_TOO_TALL = "taller-than-window", fe.CLASS_CLOSED = "closed",
                    fe.CLASS_CLOSE_BUTTON = "close-button", fe.CLASS_CLOSE_TOP = "close-top", fe.CLASS_CLOSE_BOTTOM =
                    "close-bottom", fe.CLASS_DRAG = "drag", fe.DEFAULT_WIDTH = 245, fe.TEXT_CLOSED = "Close Controls",
                    fe.TEXT_OPEN = "Open Controls", fe._keydownHandler = function(e) {
                        "text" === document.activeElement.type || e.which !== oe && e.keyCode !== oe || fe.toggleHide()
                }, B.bind(window, "keydown", fe._keydownHandler, !1), p.extend(fe.prototype, {
                        add: function(e, t) {
                                return ve(this, e, t, {
                                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                                })
                        },
                        addColor: function(e, t) {
                                return ve(this, e, t, {
                                        color: !0
                                })
                        },
                        remove: function(e) {
                                this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(
                                    e), 1);
                                var t = this;
                                p.defer((function() {
                                        t.onResize()
                                }))
                        },
                        destroy: function() {
                                if (this.parent) throw new Error(
                                    "Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."
                                );
                                this.autoPlace && de.removeChild(this.domElement);
                                var e = this;
                                p.each(this.__folders, (function(t) {
                                        e.removeFolder(t)
                                })), B.unbind(window, "keydown", fe._keydownHandler, !1), me(this)
                        },
                        addFolder: function(e) {
                                if (void 0 !== this.__folders[e]) throw new Error(
                                    'You already have a folder in this GUI by the name "' + e + '"');
                                var t = {
                                        name: e,
                                        parent: this
                                };
                                t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[
                                    e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                                var n = new fe(t);
                                this.__folders[e] = n;
                                var i = pe(this, n.domElement);
                                return B.addClass(i, "folder"), n
                        },
                        removeFolder: function(e) {
                                this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name],
                                this.load && this.load.folders && this.load.folders[e.name] && delete this.load
                                    .folders[e.name], me(e);
                                var t = this;
                                p.each(e.__folders, (function(t) {
                                        e.removeFolder(t)
                                })), p.defer((function() {
                                        t.onResize()
                                }))
                        },
                        open: function() {
                                this.closed = !1
                        },
                        close: function() {
                                this.closed = !0
                        },
                        hide: function() {
                                this.domElement.style.display = "none"
                        },
                        show: function() {
                                this.domElement.style.display = ""
                        },
                        onResize: function() {
                                var e = this.getRoot();
                                if (e.scrollable) {
                                        var t = B.getOffset(e.__ul).top,
                                            n = 0;
                                        p.each(e.__ul.childNodes, (function(t) {
                                                e.autoPlace && t === e.__save_row || (n += B.getHeight(t))
                                        })), window.innerHeight - t - re < n ? (B.addClass(e.domElement, fe
                                            .CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t -
                                            re + "px") : (B.removeClass(e.domElement, fe.CLASS_TOO_TALL), e.__ul
                                            .style.height = "auto")
                                }
                                e.__resize_handle && p.defer((function() {
                                        e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                                })), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
                        },
                        onResizeDebounced: p.debounce((function() {
                                this.onResize()
                        }), 50),
                        remember: function() {
                                if (p.isUndefined(le) && (le = new te, le.domElement.innerHTML = Z), this.parent)
                                        throw new Error("You can only call remember on a top level GUI.");
                                var e = this;
                                p.each(Array.prototype.slice.call(arguments), (function(t) {
                                        0 === e.__rememberedObjects.length && Ee(e), -1 === e
                                            .__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
                                })), this.autoPlace && Se(this, this.width)
                        },
                        getRoot: function() {
                                var e = this;
                                while (e.parent) e = e.parent;
                                return e
                        },
                        getSaveObject: function() {
                                var e = this.load;
                                return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset =
                                    this.preset, e.remembered || (e.remembered = {}), e.remembered[this
                                    .preset] = Te(this)), e.folders = {}, p.each(this.__folders, (function(t,
                                                                                                           n) {
                                        e.folders[n] = t.getSaveObject()
                                })), e
                        },
                        save: function() {
                                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this
                                    .preset] = Te(this), _e(this, !1), this.saveToLocalStorageIfPossible()
                        },
                        saveAs: function(e) {
                                this.load.remembered || (this.load.remembered = {}, this.load.remembered[ae] = Te(
                                    this, !0)), this.load.remembered[e] = Te(this), this.preset = e, we(this, e,
                                    !0), this.saveToLocalStorageIfPossible()
                        },
                        revert: function(e) {
                                p.each(this.__controllers, (function(t) {
                                        this.getRoot().load.remembered ? be(e || this.getRoot(), t) : t
                                            .setValue(t.initialValue), t.__onFinishChange && t
                                            .__onFinishChange.call(t, t.getValue())
                                }), this), p.each(this.__folders, (function(e) {
                                        e.revert(e)
                                })), e || _e(this.getRoot(), !1)
                        },
                        listen: function(e) {
                                var t = 0 === this.__listening.length;
                                this.__listening.push(e), t && Oe(this.__listening)
                        },
                        updateDisplay: function() {
                                p.each(this.__controllers, (function(e) {
                                        e.updateDisplay()
                                })), p.each(this.__folders, (function(e) {
                                        e.updateDisplay()
                                }))
                        }
                });
                var ke = fe,
                    Re = {
                            uniforms: {
                                    tDiffuse: {
                                            value: null
                                    },
                                    opacity: {
                                            value: 1
                                    }
                            },
                            vertexShader: ["varying vec2 vUv;", "void main() {", "\tvUv = uv;",
                                    "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"
                            ].join("\n"),
                            fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;",
                                    "void main() {", "\tvec4 texel = texture2D( tDiffuse, vUv );",
                                    "\tgl_FragColor = opacity * texel;", "}"
                            ].join("\n")
                    };

                function Pe() {
                        this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
                }
                Object.assign(Pe.prototype, {
                        setSize: function() {},
                        render: function() {
                                console.error("THREE.Pass: .render() must be implemented in derived pass.")
                        }
                }), Pe.FullScreenQuad = function() {
                        var e = new a["x"](-1, 1, 1, -1, 0, 1),
                            t = new a["z"](2, 2),
                            n = function(e) {
                                    this._mesh = new a["u"](t, e)
                            };
                        return Object.defineProperty(n.prototype, "material", {
                                get: function() {
                                        return this._mesh.material
                                },
                                set: function(e) {
                                        this._mesh.material = e
                                }
                        }), Object.assign(n.prototype, {
                                render: function(t) {
                                        t.render(this._mesh, e)
                                }
                        }), n
                }();
                var Me = function(e, t) {
                        Pe.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof a["E"] ? (this
                            .uniforms = e.uniforms, this.material = e) : e && (this.uniforms = a["H"].clone(e
                            .uniforms), this.material = new a["E"]({
                                defines: Object.assign({}, e.defines),
                                uniforms: this.uniforms,
                                vertexShader: e.vertexShader,
                                fragmentShader: e.fragmentShader
                        })), this.fsQuad = new Pe.FullScreenQuad(this.material)
                };
                Me.prototype = Object.assign(Object.create(Pe.prototype), {
                        constructor: Me,
                        render: function(e, t, n) {
                                this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture),
                                    this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(
                                    null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e
                                    .clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad
                                    .render(e))
                        }
                });
                var Le = function(e, t) {
                        Pe.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this
                            .inverse = !1
                };
                Le.prototype = Object.assign(Object.create(Pe.prototype), {
                        constructor: Le,
                        render: function(e, t, n) {
                                var i, o, r = e.getContext(),
                                    a = e.state;
                                a.buffers.color.setMask(!1), a.buffers.depth.setMask(!1), a.buffers.color.setLocked(
                                    !0), a.buffers.depth.setLocked(!0), this.inverse ? (i = 0, o = 1) : (i = 1,
                                    o = 0), a.buffers.stencil.setTest(!0), a.buffers.stencil.setOp(r.REPLACE, r
                                    .REPLACE, r.REPLACE), a.buffers.stencil.setFunc(r.ALWAYS, i, 4294967295), a
                                    .buffers.stencil.setClear(o), a.buffers.stencil.setLocked(!0), e
                                    .setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera),
                                    e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this
                                    .camera), a.buffers.color.setLocked(!1), a.buffers.depth.setLocked(!1), a
                                    .buffers.stencil.setLocked(!1), a.buffers.stencil.setFunc(r.EQUAL, 1,
                                    4294967295), a.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), a.buffers
                                    .stencil.setLocked(!0)
                        }
                });
                var je = function() {
                        Pe.call(this), this.needsSwap = !1
                };
                je.prototype = Object.create(Pe.prototype), Object.assign(je.prototype, {
                        render: function(e) {
                                e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1)
                        }
                });
                var Be = function(e, t) {
                        if (this.renderer = e, void 0 === t) {
                                var n = {
                                            minFilter: a["s"],
                                            magFilter: a["s"],
                                            format: a["C"],
                                            stencilBuffer: !1
                                    },
                                    i = e.getSize(new a["I"]);
                                this._pixelRatio = e.getPixelRatio(), this._width = i.width, this._height = i.height, t =
                                    new a["K"](this._width * this._pixelRatio, this._height * this._pixelRatio, n), t
                                    .texture.name = "EffectComposer.rt1"
                        } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
                        this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name =
                            "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this
                            .renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === Re && console.error(
                            "THREE.EffectComposer relies on CopyShader"), void 0 === Me && console.error(
                            "THREE.EffectComposer relies on ShaderPass"), this.copyPass = new Me(Re), this.clock =
                            new a["j"]
                };
                Object.assign(Be.prototype, {
                        swapBuffers: function() {
                                var e = this.readBuffer;
                                this.readBuffer = this.writeBuffer, this.writeBuffer = e
                        },
                        addPass: function(e) {
                                this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this
                                    ._pixelRatio)
                        },
                        insertPass: function(e, t) {
                                this.passes.splice(t, 0, e)
                        },
                        isLastEnabledPass: function(e) {
                                for (var t = e + 1; t < this.passes.length; t++)
                                        if (this.passes[t].enabled) return !1;
                                return !0
                        },
                        render: function(e) {
                                void 0 === e && (e = this.clock.getDelta());
                                var t, n, i = this.renderer.getRenderTarget(),
                                    o = !1,
                                    r = this.passes.length;
                                for (n = 0; n < r; n++)
                                        if (t = this.passes[n], !1 !== t.enabled) {
                                                if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(n), t
                                                    .render(this.renderer, this.writeBuffer, this.readBuffer, e, o), t
                                                    .needsSwap) {
                                                        if (o) {
                                                                var a = this.renderer.getContext(),
                                                                    s = this.renderer.state.buffers.stencil;
                                                                s.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this
                                                                    .renderer, this.writeBuffer, this.readBuffer, e), s.setFunc(
                                                                    a.EQUAL, 1, 4294967295)
                                                        }
                                                        this.swapBuffers()
                                                }
                                                void 0 !== Le && (t instanceof Le ? o = !0 : t instanceof je && (o = !1))
                                        } this.renderer.setRenderTarget(i)
                        },
                        reset: function(e) {
                                if (void 0 === e) {
                                        var t = this.renderer.getSize(new a["I"]);
                                        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this
                                            ._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width *
                                            this._pixelRatio, this._height * this._pixelRatio)
                                }
                                this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e,
                                    this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this
                                    .readBuffer = this.renderTarget2
                        },
                        setSize: function(e, t) {
                                this._width = e, this._height = t;
                                var n = this._width * this._pixelRatio,
                                    i = this._height * this._pixelRatio;
                                this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
                                for (var o = 0; o < this.passes.length; o++) this.passes[o].setSize(n, i)
                        },
                        setPixelRatio: function(e) {
                                this._pixelRatio = e, this.setSize(this._width, this._height)
                        }
                });
                var De = function() {
                        this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
                };
                Object.assign(De.prototype, {
                        setSize: function() {},
                        render: function() {
                                console.error("THREE.Pass: .render() must be implemented in derived pass.")
                        }
                }), De.FullScreenQuad = function() {
                        var e = new a["x"](-1, 1, 1, -1, 0, 1),
                            t = new a["z"](2, 2),
                            n = function(e) {
                                    this._mesh = new a["u"](t, e)
                            };
                        return Object.defineProperty(n.prototype, "material", {
                                get: function() {
                                        return this._mesh.material
                                },
                                set: function(e) {
                                        this._mesh.material = e
                                }
                        }), Object.assign(n.prototype, {
                                render: function(t) {
                                        t.render(this._mesh, e)
                                }
                        }), n
                }();
                var Ne = function(e, t, n, i, o) {
                        Pe.call(this), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i,
                            this.clearAlpha = void 0 !== o ? o : 0, this.clear = !0, this.clearDepth = !1, this
                            .needsSwap = !1
                };
                Ne.prototype = Object.assign(Object.create(Pe.prototype), {
                        constructor: Ne,
                        render: function(e, t, n) {
                                var i, o, r = e.autoClear;
                                e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial, this
                                    .clearColor && (i = e.getClearColor().getHex(), o = e.getClearAlpha(), e
                                    .setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e
                                    .clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear &&
                                e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this
                                    .scene, this.camera), this.clearColor && e.setClearColor(i, o), this.scene
                                    .overrideMaterial = null, e.autoClear = r
                        }
                });
                var He = {
                            shaderID: "luminosityHighPass",
                            uniforms: {
                                    tDiffuse: {
                                            value: null
                                    },
                                    luminosityThreshold: {
                                            value: 1
                                    },
                                    smoothWidth: {
                                            value: 1
                                    },
                                    defaultColor: {
                                            value: new a["k"](0)
                                    },
                                    defaultOpacity: {
                                            value: 0
                                    }
                            },
                            vertexShader: ["varying vec2 vUv;", "void main() {", "\tvUv = uv;",
                                    "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"
                            ].join("\n"),
                            fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;",
                                    "uniform float defaultOpacity;", "uniform float luminosityThreshold;",
                                    "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {",
                                    "\tvec4 texel = texture2D( tDiffuse, vUv );",
                                    "\tvec3 luma = vec3( 0.299, 0.587, 0.114 );", "\tfloat v = dot( texel.xyz, luma );",
                                    "\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );",
                                    "\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );",
                                    "\tgl_FragColor = mix( outputColor, texel, alpha );", "}"
                            ].join("\n")
                    },
                    Fe = function(e, t, n, i) {
                            Pe.call(this), this.strength = void 0 !== t ? t : 1, this.radius = n, this.threshold = i, this
                                .resolution = void 0 !== e ? new a["I"](e.x, e.y) : new a["I"](256, 256), this.clearColor =
                                new a["k"](0, 0, 0);
                            var o = {
                                    minFilter: a["s"],
                                    magFilter: a["s"],
                                    format: a["C"]
                            };
                            this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
                            var r = Math.round(this.resolution.x / 2),
                                s = Math.round(this.resolution.y / 2);
                            this.renderTargetBright = new a["K"](r, s, o), this.renderTargetBright.texture.name =
                                "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
                            for (var l = 0; l < this.nMips; l++) {
                                    var c = new a["K"](r, s, o);
                                    c.texture.name = "UnrealBloomPass.h" + l, c.texture.generateMipmaps = !1, this
                                        .renderTargetsHorizontal.push(c);
                                    var d = new a["K"](r, s, o);
                                    d.texture.name = "UnrealBloomPass.v" + l, d.texture.generateMipmaps = !1, this
                                        .renderTargetsVertical.push(d), r = Math.round(r / 2), s = Math.round(s / 2)
                            }
                            void 0 === He && console.error("UnrealBloomPass relies on LuminosityHighPassShader");
                            var u = He;
                            this.highPassUniforms = a["H"].clone(u.uniforms), this.highPassUniforms["luminosityThreshold"]
                                .value = i, this.highPassUniforms["smoothWidth"].value = .01, this.materialHighPassFilter =
                                new a["E"]({
                                        uniforms: this.highPassUniforms,
                                        vertexShader: u.vertexShader,
                                        fragmentShader: u.fragmentShader,
                                        defines: {}
                                }), this.separableBlurMaterials = [];
                            var h = [3, 5, 7, 9, 11];
                            for (r = Math.round(this.resolution.x / 2), s = Math.round(this.resolution.y / 2), l = 0; l <
                            this.nMips; l++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[l])), this
                                .separableBlurMaterials[l].uniforms["texSize"].value = new a["I"](r, s), r = Math.round(r /
                                2), s = Math.round(s / 2);
                            this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms[
                                "blurTexture1"].value = this.renderTargetsVertical[0].texture, this.compositeMaterial
                                .uniforms["blurTexture2"].value = this.renderTargetsVertical[1].texture, this
                                .compositeMaterial.uniforms["blurTexture3"].value = this.renderTargetsVertical[2].texture,
                                this.compositeMaterial.uniforms["blurTexture4"].value = this.renderTargetsVertical[3]
                                    .texture, this.compositeMaterial.uniforms["blurTexture5"].value = this
                                .renderTargetsVertical[4].texture, this.compositeMaterial.uniforms["bloomStrength"].value =
                                t, this.compositeMaterial.uniforms["bloomRadius"].value = .1, this.compositeMaterial
                                .needsUpdate = !0;
                            var f = [1, .8, .6, .4, .2];
                            this.compositeMaterial.uniforms["bloomFactors"].value = f, this.bloomTintColors = [new a["J"](1,
                                1, 1), new a["J"](1, 1, 1), new a["J"](1, 1, 1), new a["J"](1, 1, 1), new a["J"](1,
                                1, 1)], this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors,
                            void 0 === Re && console.error("UnrealBloomPass relies on CopyShader");
                            var p = Re;
                            this.copyUniforms = a["H"].clone(p.uniforms), this.copyUniforms["opacity"].value = 1, this
                                .materialCopy = new a["E"]({
                                    uniforms: this.copyUniforms,
                                    vertexShader: p.vertexShader,
                                    fragmentShader: p.fragmentShader,
                                    blending: a["a"],
                                    depthTest: !1,
                                    depthWrite: !1,
                                    transparent: !0
                            }), this.enabled = !0, this.needsSwap = !1, this.oldClearColor = new a["k"], this
                                .oldClearAlpha = 1, this.basic = new a["v"], this.fsQuad = new Pe.FullScreenQuad(null)
                    };
                Fe.prototype = Object.assign(Object.create(Pe.prototype), {
                        constructor: Fe,
                        dispose: function() {
                                for (var e = 0; e < this.renderTargetsHorizontal.length; e++) this
                                    .renderTargetsHorizontal[e].dispose();
                                for (e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[
                                    e].dispose();
                                this.renderTargetBright.dispose()
                        },
                        setSize: function(e, t) {
                                var n = Math.round(e / 2),
                                    i = Math.round(t / 2);
                                this.renderTargetBright.setSize(n, i);
                                for (var o = 0; o < this.nMips; o++) this.renderTargetsHorizontal[o].setSize(n, i),
                                    this.renderTargetsVertical[o].setSize(n, i), this.separableBlurMaterials[o]
                                    .uniforms["texSize"].value = new a["I"](n, i), n = Math.round(n / 2), i = Math
                                    .round(i / 2)
                        },
                        render: function(e, t, n, i, o) {
                                this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha();
                                var r = e.autoClear;
                                e.autoClear = !1, e.setClearColor(this.clearColor, 0), o && e.state.buffers.stencil
                                    .setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this
                                    .basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad
                                    .render(e)), this.highPassUniforms["tDiffuse"].value = n.texture, this
                                    .highPassUniforms["luminosityThreshold"].value = this.threshold, this.fsQuad
                                    .material = this.materialHighPassFilter, e.setRenderTarget(this
                                    .renderTargetBright), e.clear(), this.fsQuad.render(e);
                                for (var a = this.renderTargetBright, s = 0; s < this.nMips; s++) this.fsQuad
                                    .material = this.separableBlurMaterials[s], this.separableBlurMaterials[s]
                                    .uniforms["colorTexture"].value = a.texture, this.separableBlurMaterials[s]
                                    .uniforms["direction"].value = Fe.BlurDirectionX, e.setRenderTarget(this
                                    .renderTargetsHorizontal[s]), e.clear(), this.fsQuad.render(e), this
                                    .separableBlurMaterials[s].uniforms["colorTexture"].value = this
                                    .renderTargetsHorizontal[s].texture, this.separableBlurMaterials[s].uniforms[
                                    "direction"].value = Fe.BlurDirectionY, e.setRenderTarget(this
                                    .renderTargetsVertical[s]), e.clear(), this.fsQuad.render(e), a = this
                                    .renderTargetsVertical[s];
                                this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms[
                                    "bloomStrength"].value = this.strength, this.compositeMaterial.uniforms[
                                    "bloomRadius"].value = this.radius, this.compositeMaterial.uniforms[
                                    "bloomTintColors"].value = this.bloomTintColors, e.setRenderTarget(this
                                    .renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad
                                    .material = this.materialCopy, this.copyUniforms["tDiffuse"].value = this
                                    .renderTargetsHorizontal[0].texture, o && e.state.buffers.stencil.setTest(!0),
                                    this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e
                                        .setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this
                                    .oldClearColor, this.oldClearAlpha), e.autoClear = r
                        },
                        getSeperableBlurMaterial: function(e) {
                                return new a["E"]({
                                        defines: {
                                                KERNEL_RADIUS: e,
                                                SIGMA: e
                                        },
                                        uniforms: {
                                                colorTexture: {
                                                        value: null
                                                },
                                                texSize: {
                                                        value: new a["I"](.5, .5)
                                                },
                                                direction: {
                                                        value: new a["I"](.5, .5)
                                                }
                                        },
                                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                                        fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"
                                })
                        },
                        getCompositeMaterial: function(e) {
                                return new a["E"]({
                                        defines: {
                                                NUM_MIPS: e
                                        },
                                        uniforms: {
                                                blurTexture1: {
                                                        value: null
                                                },
                                                blurTexture2: {
                                                        value: null
                                                },
                                                blurTexture3: {
                                                        value: null
                                                },
                                                blurTexture4: {
                                                        value: null
                                                },
                                                blurTexture5: {
                                                        value: null
                                                },
                                                dirtTexture: {
                                                        value: null
                                                },
                                                bloomStrength: {
                                                        value: 1
                                                },
                                                bloomFactors: {
                                                        value: null
                                                },
                                                bloomTintColors: {
                                                        value: null
                                                },
                                                bloomRadius: {
                                                        value: 0
                                                }
                                        },
                                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                                        fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"
                                })
                        }
                }), Fe.BlurDirectionX = new a["I"](1, 0), Fe.BlurDirectionY = new a["I"](0, 1);
                var Ie = function e() {
                        var t = 0,
                            n = document.createElement("div");

                        function i(e) {
                                return n.appendChild(e.dom), e
                        }

                        function o(e) {
                                for (var i = 0; i < n.children.length; i++) n.children[i].style.display = i === e ?
                                    "block" : "none";
                                t = e
                        }
                        n.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", n
                            .addEventListener("click", (function(e) {
                                    e.preventDefault(), o(++t % n.children.length)
                            }), !1);
                        var r = (performance || Date).now(),
                            a = r,
                            s = 0,
                            l = i(new e.Panel("FPS", "#0ff", "#002")),
                            c = i(new e.Panel("MS", "#0f0", "#020"));
                        if (self.performance && self.performance.memory) var d = i(new e.Panel("MB", "#f08", "#201"));
                        return o(0), {
                                REVISION: 16,
                                dom: n,
                                addPanel: i,
                                showPanel: o,
                                begin: function() {
                                        r = (performance || Date).now()
                                },
                                end: function() {
                                        s++;
                                        var e = (performance || Date).now();
                                        if (c.update(e - r, 200), e >= a + 1e3 && (l.update(1e3 * s / (e - a), 100), a =
                                            e, s = 0, d)) {
                                                var t = performance.memory;
                                                d.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576)
                                        }
                                        return e
                                },
                                update: function() {
                                        r = this.end()
                                },
                                domElement: n,
                                setMode: o
                        }
                };
                Ie.Panel = function(e, t, n) {
                        var i = 1 / 0,
                            o = 0,
                            r = Math.round,
                            a = r(window.devicePixelRatio || 1),
                            s = 80 * a,
                            l = 48 * a,
                            c = 3 * a,
                            d = 2 * a,
                            u = 3 * a,
                            h = 15 * a,
                            f = 74 * a,
                            p = 30 * a,
                            m = document.createElement("canvas");
                        m.width = s, m.height = l, m.style.cssText = "width:80px;height:48px";
                        var _ = m.getContext("2d");
                        return _.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", _.textBaseline = "top", _
                            .fillStyle = n, _.fillRect(0, 0, s, l), _.fillStyle = t, _.fillText(e, c, d), _.fillRect(u,
                            h, f, p), _.fillStyle = n, _.globalAlpha = .9, _.fillRect(u, h, f, p), {
                                dom: m,
                                update: function(l, g) {
                                        i = Math.min(i, l), o = Math.max(o, l), _.fillStyle = n, _.globalAlpha = 1, _
                                            .fillRect(0, 0, s, h), _.fillStyle = t, _.fillText(r(l) + " " + e + " (" +
                                            r(i) + "-" + r(o) + ")", c, d), _.drawImage(m, u + a, h, f - a, p, u, h,
                                            f - a, p), _.fillRect(u + f - a, h, a, p), _.fillStyle = n, _
                                            .globalAlpha = .9, _.fillRect(u + f - a, h, a, r((1 - l / g) * p))
                                }
                        }
                };
                var ze = Ie;

                function Ue(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = -1,
                            r = Math.max(Math.ceil((t - e) / n), 0),
                            a = Array(r);
                        while (r--) a[i ? r : ++o] = e, e += n;
                        return a
                }
                var Ve = n("d4ec"),
                    Ge = n("bee2"),
                    Ye = n("ade3"),
                    Xe = function() {
                            function e(t, n, i) {
                                    Object(Ve["a"])(this, e), Object(Ye["a"])(this, "lastStrength", 0), Object(Ye["a"])(this,
                                        "theStrength", 0), Object(Ye["a"])(this, "targetRange", 0), Object(Ye["a"])(this,
                                        "_range", 0), this.baseRange = t, this.angle = n, this.center = i
                            }
                            return Object(Ge["a"])(e, [{
                                    key: "positionA",
                                    value: function() {
                                            var e = this._range + this.baseRange,
                                                t = Math.cos(this.angle * Math.PI / 180) * e,
                                                n = Math.sin(this.angle * Math.PI / 180) * e;
                                            return new a["I"](this.center.x + t, this.center.y + n)
                                    }
                            }, {
                                    key: "positionB",
                                    value: function() {
                                            var e = -1 * this._range + this.baseRange,
                                                t = Math.cos(this.angle * Math.PI / 180) * e,
                                                n = Math.sin(this.angle * Math.PI / 180) * e;
                                            return new a["I"](this.center.x + t, this.center.y + n)
                                    }
                            }, {
                                    key: "strength",
                                    value: function(e) {
                                            this.lastStrength = this.theStrength, this.theStrength = e, this
                                                .targetRange = Math.max(this.theStrength - this.lastStrength, 0),
                                            this.targetRange > this._range && (this._range = this.targetRange)
                                    }
                            }, {
                                    key: "transition",
                                    value: function(e) {
                                            this._range = Math.max(this._range - e * this._range * 5, 0)
                                    }
                            }]), e
                    }();

                function Qe(e, t) {
                        return e + (Math.random() - .5) * t
                }
                var Je, We, Ke, Ze, qe, $e, et, tt, nt, it, ot, rt, at, st, lt = function() {
                            function e(t, n, i, o, r, s, l, c, d) {
                                    var u, h;
                                    Object(Ve["a"])(this, e), Object(Ye["a"])(this, "rotate", 360 * Math.random()), Object(Ye[
                                        "a"])(this, "id", Math.random()), Object(Ye["a"])(this, "distance", void 0), Object(
                                        Ye["a"])(this, "rotateSpeed", void 0), Object(Ye["a"])(this, "angle", void 0),
                                        Object(Ye["a"])(this, "speed", void 0), Object(Ye["a"])(this, "center", void 0), Object(
                                        Ye["a"])(this, "mesh", void 0), Object(Ye["a"])(this, "showDistance", void 0),
                                        Object(Ye["a"])(this, "panelMaterial", void 0), Object(Ye["a"])(this, "lineMaterial",
                                        void 0), Object(Ye["a"])(this, "panelOpacity", .1), Object(Ye["a"])(this, "line",
                                        void 0), Object(Ye["a"])(this, "group", void 0), Object(Ye["a"])(this, "onDelete",
                                        void 0), this.rotateSpeed = r, this.angle = i, this.speed = o, this.center = n, this
                                        .onDelete = d, this.distance = c.startShow, this.showDistance = c, this.panelMaterial =
                                        (new a["v"]).copy(s), this.panelMaterial.transparent = !0, this.lineMaterial = (new a[
                                        "r"]).copy(l), this.lineMaterial.transparent = !0;
                                    var f = new a["o"],
                                        p = new a["o"],
                                        m = [new a["J"](Qe(t, t / 2), Qe(t, t / 2), Qe(t, t / 2)), new a["J"](-1 * Qe(t, t / 2),
                                            Qe(t, t / 2), Qe(t, t / 2) - 1), new a["J"](-1 * Qe(t, t / 2), -1 * Qe(t, t /
                                            2), Qe(t, t / 2) - 1)];
                                    (u = f.vertices).push.apply(u, m), (h = p.vertices).push.apply(h, [].concat(m, [m[0]])), f
                                        .faces.push(new a["n"](0, 1, 2)), f.computeFaceNormals(), f.computeVertexNormals(), this
                                        .line = new a["q"](p, this.lineMaterial), this.mesh = new a["u"](f, this.panelMaterial),
                                        this.group = new a["p"], this.translateOnAxis(this.translate(this.distance), 1), this
                                        .group.add(this.line), this.group.add(this.mesh), this.rotateZ(this.rotate), this
                                        .updatePosition(0)
                            }
                            return Object(Ge["a"])(e, [{
                                    key: "rotateZ",
                                    value: function(e) {
                                            this.mesh.geometry.rotateZ(e), this.line.geometry.rotateZ(e)
                                    }
                            }, {
                                    key: "translate",
                                    value: function(e) {
                                            var t = Math.cos(this.angle * Math.PI / 180) * e,
                                                n = Math.sin(this.angle * Math.PI / 180) * e,
                                                i = Math.cos(this.angle * Math.PI / 360) * e * this.angle / 180;
                                            return new a["J"](t, n, i)
                                    }
                            }, {
                                    key: "translateOnAxis",
                                    value: function(e, t) {
                                            this.group.translateOnAxis(e, t)
                                    }
                            }, {
                                    key: "updatePosition",
                                    value: function(e) {
                                            this.translateOnAxis(this.translate(e * this.speed), 1), this
                                                .distance += e * this.speed, this.rotateZ(this.rotateSpeed * e),
                                                this.panelMaterial.opacity = this.opacity(this.distance, this
                                                    .showDistance) * this.panelOpacity, this.lineMaterial.opacity =
                                                this.opacity(this.distance, this.showDistance), this.distance > this
                                                .showDistance.endHide && this.delete()
                                    }
                            }, {
                                    key: "delete",
                                    value: function() {
                                            this.onDelete(this), this.mesh.geometry.dispose(), this.line.geometry
                                                .dispose()
                                    }
                            }, {
                                    key: "opacity",
                                    value: function(e, t) {
                                            return this.distance < t.endShow ? (this.distance - t.startShow) / (t
                                                .endShow - t.startShow) : this.distance > t.startHide ? (t
                                                .endHide - this.distance) / (t.endHide - t.startHide) : 1
                                    }
                            }, {
                                    key: "transition",
                                    value: function(e) {
                                            this.updatePosition(e)
                                    }
                            }]), e
                    }(),
                    ct = {
                            R: 20,
                            G: 90,
                            B: 225,
                            TrianglesBgColor: 240116,
                            TrianglesLineColor: 240116,
                            lineColor: 65535,
                            rotate: !1
                    },
                    dt = [],
                    ut = [],
                    ht = {
                            name: "App",
                            data: function() {
                                    return {
                                            positionZ: 80,
                                            N: 256,
                                            clock: new a["j"],
                                            scale: 1
                                    }
                            },
                            methods: {

                                    init: function() {
                                            Je = new a["L"]({
                                                    antialias: !0,
                                                    alpha: !0
                                            }), Je.setClearAlpha(0), Je.setSize(window.innerWidth, window.innerHeight),
                                                document.body.appendChild(Je.domElement), We = new a["D"], We.background = (
                                                new a["l"]).load([n("9ac2"), n("1dc2"), n("6f4f"), n("f254"), n("a7f3"), n(
                                                "dbe6")]), Ke = new a["y"](75, window.innerWidth / window.innerHeight, 1,
                                                1e4), Ke.position.z = this.positionZ, window.addEventListener("resize", this
                                                .onWindowResize, !1), this.audioLines(20, this.N), this.audioBars(25, this
                                                .N / 2), st = new a["p"], setInterval(this.addTriangle.bind(this), 500), We
                                                .add(st);
                                            var e = new a["e"];
                                            et = new a["c"](e);
                                            var t = n("5e76");
                                            this.audioLoad("/musicplay/file1628235748504.m4a"),
                                                this.initLight(), this.initControls(), this.initGui(), this
                                                .initBloomPass(), this.initStats(), this.animate(),this.getData()
                                            //,this.getMicro()
                                    },
                                    renderGeometries: function(e) {
                                            var t = [];
                                            return e = e.concat(e[0]), e.forEach((function(e) {
                                                    t.push(e.x, e.y, 0)
                                            })), new a["h"](new Float32Array(t), 3)
                                    },
                                    updateCircle: function() {
                                            if (rt) {
                                                    nt.scale.set(this.scale, this.scale, this.scale);
                                                    var e = it.geometry,
                                                        t = e.getAttribute("position"),
                                                        n = ot.geometry,
                                                        i = n.getAttribute("position"),
                                                        o = rt.map((function(e) {
                                                                return [e.positionA(), e.positionB()]
                                                        }));
                                                    o.forEach((function(e, n) {
                                                            t.set([e[0].x, e[0].y], 3 * n), i.set([e[1].x, e[1].y], 3 * n);
                                                            var o = dt[n].geometry,
                                                                r = o.getAttribute("position");
                                                            r.set([e[0].x, e[0].y, 0, e[1].x, e[1].y, 0], 0), r
                                                                .needsUpdate = !0
                                                    })), t.set([t.array[0], t.array[1]], 3 * o.length), i.set([i.array[0], i
                                                        .array[1]
                                                    ], 3 * o.length), t.needsUpdate = !0, i.needsUpdate = !0
                                            }
                                    },
                                    audioLines: function(e, t) {
                                            var n = this;
                                            rt = Ue(0, t).map((function(n) {
                                                    return new Xe(e, (n / t * 360 + 45) % 360, new a["I"](0, 0))
                                            }));
                                            var i = new a["r"]({
                                                    color: ct.lineColor
                                            });
                                            dt = Ue(0, t).map((function(e) {
                                                    return new a["q"]((new a["i"]).setAttribute("position", n
                                                        .renderGeometries([rt[e].positionA(), rt[e]
                                                            .positionB()])), i)
                                            })), it = new a["q"]((new a["i"]).setAttribute("position", this
                                                .renderGeometries(rt.map((function(e) {
                                                        return e.positionA()
                                                })))), i), ot = new a["q"]((new a["i"]).setAttribute("position", this
                                                .renderGeometries(rt.map((function(e) {
                                                        return e.positionB()
                                                })))), i), nt = new a["p"], nt.add(it), nt.add(ot), dt.forEach((function(
                                                e) {
                                                    return nt.add(e)
                                            })), We.add(nt)
                                    },
                                    addTriangle: function() {
                                            var e = new a["v"]({
                                                        color: ct.TrianglesBgColor
                                                }),
                                                t = new a["r"]({
                                                        color: ct.TrianglesLineColor
                                                }),
                                                n = this.makeTriangle(e, t, (function(e) {
                                                        ut = ut.filter((function(t) {
                                                                return t !== e
                                                        })), st.remove(e.group)
                                                }));
                                            st.add(n.group), ut.push(n)
                                    },
                                    makeTriangle: function(e, t, n) {
                                            var i = new lt(2, new a["J"](0, 0, 0), 360 * Math.random(), Qe(5, 1), Qe(.1, .05),
                                                e, t, {
                                                        startShow: 15,
                                                        endShow: 30,
                                                        startHide: 60,
                                                        endHide: 70
                                                }, n);
                                            return i
                                    },
                                    audioBars: function(e, t) {
                                            at = new a["p"];
                                            for (var n = e, i = t, o = 0; o < i; o++) {
                                                    var r = new a["p"],
                                                        s = new a["g"](1, 1, 1),
                                                        l = new a["w"]({
                                                                color: 65535
                                                        }),
                                                        c = o,
                                                        d = new a["u"](s, l);
                                                    d.position.y = .5, r.add(d), r.position.set(Math.sin(c * Math.PI / i * 2) * n,
                                                        Math.cos(c * Math.PI / i * 2) * n, 0), r.rotation.z = -c * Math.PI / i *
                                                        2, at.add(r)
                                            }
                                            We.add(at)
                                    },
                                    initBloomPass: function() {
                                            var e = {
                                                        exposure: .5,
                                                        bloomStrength: 1,
                                                        bloomThreshold: 0,
                                                        bloomRadius: .8
                                                },
                                                t = new Ne(We, Ke),
                                                n = new Fe(new a["I"](window.innerWidth, window.innerHeight), 1.5, .2, 0);
                                            n.threshold = e.bloomThreshold, n.strength = e.bloomStrength, n.radius = e
                                                .bloomRadius, $e = new Be(Je);
                                            var i = new Me(Re);
                                            i.renderToScreen = !0, $e.addPass(t), $e.addPass(n), $e.addPass(i)
                                    },
                                    animate: function() {
                                            if (qe.update(), Ze.update(), tt) {
                                                    var e = tt.getFrequencyData();
                                                    at && (at.rotation.z += .002, at.scale.set(this.scale, this.scale, this.scale),
                                                        at.children.forEach((function(t, n) {
                                                                if (ct.R && (t.children[0].material.color.r = e[n] / (3 * ct
                                                                    .R)), ct.G && (t.children[0].material.color.g = e[
                                                                    n] / (3 * ct.G)), ct.B && (t.children[0].material
                                                                    .color.b = e[n] / (3 * ct.B)), 0 === e[n]) t.scale
                                                                    .set(0, 0, 0);
                                                                else {
                                                                        var i = e[n] / 20,
                                                                            o = Math.max(e[n] / 20 - e[n - 1] / 20, 0);
                                                                        i < o && (i = o), t.scale.set(1, i, 1)
                                                                }
                                                        })));
                                                    var t = this.clock.getDelta();
                                                    rt.forEach((function(n, i, o) {
                                                            n.strength(.1 * e[i % o.length]), n.transition(t)
                                                    })), this.scale = 1 + e[Math.ceil(.05 * e.length)] / 500, this.updateCircle(
                                                        e), ut.forEach((function(e) {
                                                            return e.transition(t)
                                                    }))
                                            }
                                            $e.render(), requestAnimationFrame(this.animate)
                                    },
                                    onWindowResize: function() {
                                            Ke.aspect = window.innerWidth / window.innerHeight, Ke.updateProjectionMatrix(), Je
                                                .setSize(window.innerWidth, window.innerHeight), $e.setSize(window.innerWidth,
                                                window.innerHeight)
                                    },
                                    initControls: function() {
                                            Ze = new s(Ke, Je.domElement), Ze.enableDamping = !0, Ze.enableZoom = !0, Ze
                                                .autoRotate = ct.rotate, Ze.minDistance = 1, Ze.maxDistance = 200, Ze
                                                .enablePan = !1
                                    },
                                    initStats: function() {
                                            qe = new ze, document.body.appendChild(qe.dom)
                                    },
                                    initGui: function() {
                                            var e = new ke;
                                            e.add(ct, "R", 0, 255), e.add(ct, "G", 0, 255), e.add(ct, "B", 0, 255), e.add(ct,
                                                "rotate").onChange((function(e) {
                                                    Ze.autoRotate = e
                                            })), e.addColor(ct, "TrianglesBgColor").onChange((function() {
                                                    st.traverse((function(e) {
                                                            e.isMesh && (e.material = new a["w"]({
                                                                    color: ct.TrianglesBgColor
                                                            }))
                                                    }))
                                            })), e.addColor(ct, "TrianglesLineColor").onChange((function() {
                                                    st.traverse((function(e) {
                                                            e.isLine && (e.material = new a["r"]({
                                                                    color: ct.TrianglesLineColor
                                                            }))
                                                    }))
                                            })), e.addColor(ct, "lineColor").onChange((function() {
                                                    nt.traverse((function(e) {
                                                            e.isLine && (e.material = new a["r"]({
                                                                    color: ct.lineColor
                                                            }))
                                                    }))
                                            }))
                                    },
                                    initLight: function() {
                                            We.add(new a["b"](4473924));
                                            let e = new a["A"](16777215);
                                            e.position.set(80, 100, 50), e.castShadow = !0, We.add(e)
                                    },
                                    audioLoad: function(e) {
                                            // console.log("3:")
                                            let t = this;
                                            n = new a["f"];
                                            console.log(typeof(et))
                                            // if(e[2]=='i')//micro的i
                                            //         microflag=true;
                                            //     console.log(et.isPlaying)
                                            n.load(e, ( function(e) {
                                                //console.log(et);console.log(et.isPlaying)
                                                    et.isPlaying && ( et.stop(),et.setBuffer()),
                                                        et.setBuffer(e), et.setLoop(0),
                                                        et.setVolume(1), et.play(), tt = new a["d"](et,
                                                        2 * t.N)
                                            }))
                                    },

                                    nextMusic:function()
                                    {

                                           if(microflag==false)
                                           {
                                                   let e = this;
                                                   httpRequest.open('GET',url,true);
                                                   httpRequest.send();
                                                   httpRequest.onreadystatechange =function () {
                                                           if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                                                                   //console.log(et)

                                                                   console.log("向服务器所获取的播放歌曲为：")
                                                                   var json = httpRequest.responseText;//获取到json字符串，还需解析
                                                                   console.log(json);

                                                                   console.log(et.isPlaying)
                                                                   e.audioLoad(json);
                                                           }

                                                   }
                                           }
                                    },



                                        /*
                                    getAudio: function() {
                                            let e = this,
                                                t = this.$refs.fileId;

                                            if ("" === t.value) return !1;
                                            if (window.FileReader) {
                                                    var n = new FileReader;
                                                    n.readAsDataURL(t.files[0]), n.onloadend = function(t) {

                                                            e.audioLoad(t.target.result)

                                                    }
                                            }
                                    },

                                         */
                                        /*
                                    getMicro:function(){
                                      let e=this;
                                      httpRequest.open('Get',"http://127.0.0.1:12222/servlet/getmicro",true);
                                      httpRequest.send();
                                      httpRequest.onreadystatechange=function(){
                                              if(httpRequest.readyState==4&&httpRequest.status==200)
                                              {
                                                      let json=httpRequest.responseText;
                                                     //当接收到第一条麦克风信息时，将microflag置true
                                                      // ，后面所接收的microflag就都放到队列中（缓冲）
                                                      if(json!=""&&microflag===false)
                                                      {
                                                              microflag=true
                                                              console.log("正在使用麦克风")
                                                              e.audioLoad(json)
                                                              et.isPlaying=true
                                                      }else if(json!=="")
                                                      {
                                                              Queue.push(json)
                                                      }
                                                      else{
                                                              microCount++;
                                                              if(microCount==5) {
                                                                      microflag=false;//超过5秒未讲话
                                                                      microCount=0;//重新计数

                                                              }
                                                              //console.log("未讲话")
                                                      }
                                              }
                                      }
                                      if(Queue.length!=0&&et.isPlaying===false)
                                      {
                                              console.log("pop")
                                              console.log("1:")
                                              conosole.log(et.isPlaying)
                                              et.isPlaying=true
                                              e.audioLoad(Queue.shift());
                                      }
                                      timeOutCount2 = setTimeout(this.getMicro, 500);
                                    },*/
                                    getData: function() {

                                            let e = this;

                                            if(et.isPlaying==false&&microflag==false)//同步方式
                                            {
                                                    //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
                                                    httpRequest.open('GET',url,true);
                                                    //第三步：发送请求  将请求参数写在URL中
                                                    /**
                                                     * 获取数据后的处理程序
                                                     */
                                                    httpRequest.send();
                                                    httpRequest.onreadystatechange =function () {
                                                            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                                                                    //console.log(et)
                                                                    //console.log("向服务器所获取的播放歌曲为：")
                                                                    let json = httpRequest.responseText;
                                                                   if(json!=="")
                                                                   {
                                                                           console.log("当前播放")
                                                                           console.log(json);
                                                                           et.isPlaying=true
                                                                           console.log(et.isPlaying)
                                                                           e.audioLoad(json)
                                                                   }
                                                            }
                                                            else{
                                                                    //处理服务器端问题（未写）

                                                            }
                                                    }
                                            }else{

                                                    console.log("当前歌曲未播放完毕或正在使用麦克风")
                                            }timeOutCount = setTimeout(this.getData, timeCycle);


                                            }/*
                                            getData: function() {

                                                    let e = this;
                                                    httpRequest.open('GET',url,true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
                                                    if(nextM==="zero"&&et.isPlaying==true)
                                                    {
                                                            console.log(1)
                                                            httpRequest.send();
                                                            httpRequest.onreadystatechange =function () {
                                                                    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                                                                            //console.log(et)
                                                                            //console.log("向服务器所获取的播放歌曲为：")
                                                                            let json = httpRequest.responseText;
                                                                            if(json!=="")
                                                                            {
                                                                                    nextM=json;
                                                                                    console.log("下一首为:");
                                                                                    console.log(json);

                                                                            }
                                                                    }
                                                                    else{
                                                                            //处理服务器端问题（未写）

                                                                    }
                                                        }
                                                    } else if(et.isPlaying==false&&nextM!=="zero")
                                                    {
                                                            console.log(2)
                                                            console.log("nextM为：")
                                                            et.isPlaying=true
                                                            e.audioLoad(nextM)
                                                            nextM="zero"
                                                            console.log(et.isPlaying)
                                                            console.log("清空nextM")
                                                    }
                                                    else if(et.isPlaying==false)
                                                    {
                                                            et.isPlaying=true
                                                            console.log(3)
                                                            httpRequest.send();
                                                            httpRequest.onreadystatechange =function () {
                                                                    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                                                                            //console.log(et)
                                                                            //console.log("向服务器所获取的播放歌曲为：")
                                                                    let json = httpRequest.responseText;
                                                                    console.log("当前播放")
                                                                    //console.log(json);
                                                                    if(json!=="")
                                                                    e.audioLoad(json)
                                                                    else et.isPlaying=false
                                                            }
                                                            else{
                                                                    //处理服务器端问题（未写）
                                                                console.log("else")
                                                            }
                                                    }
                                            }else{

                                                    console.log("当前歌曲未播放完毕")
                                            }timeOutCount = setTimeout(this.getData, timeCycle);


                                    }*/
                            },
                            mounted: function() {
                                    this.init()
                            }
                    },
                    ft = ht,
                    pt = (n("5c0b"), n("2877")),
                    mt = Object(pt["a"])(ft, o, r, !1, null, null, null),
                    _t = mt.exports,

                    gt = n("8c4f");
                i["a"].use(gt["a"]);
                var bt = [],
                    vt = new gt["a"]({
                            mode: "history",
                            base: "",
                            routes: bt
                    }),

                    yt = vt;
                i["a"].config.productionTip = !1, new i["a"]({
                        router: yt,
                        render: function(e) {
                                return e(_t)
                        }
                }).$mount("#app")
        },
        "5c0b": function(e, t, n) {
                "use strict";
                var i = n("9c0c"),
                    o = n.n(i);
                o.a
        },
        "5e76": function(e, t, n) {
                e.exports = n.p + "static/media/audio.2040dda6.mp3"

        },

        "6f4f": function(e, t, n) {
                e.exports = n.p + "static/img/top.4b15e8e9.jpg"

        },
        "9ac2": function(e, t, n) {
                e.exports = n.p + "static/img/right.8ff40888.jpg"
        },
        "9c0c": function(e, t, n) {},
        a7f3: function(e, t, n) {
                e.exports = n.p + "static/img/front.71cb831c.jpg"
        },
        dbe6: function(e, t, n) {
                e.exports = n.p + "static/img/back.1c4c0640.jpg"
        },
        f254: function(e, t, n) {
                e.exports = n.p + "static/img/bottom.f3c15dcc.jpg"

        }
});
