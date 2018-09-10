/*
* K·Pay Integration Library - v1.2.5 - Copyright Kiezel 2018
* Last Modified: 2018-06-07
*
* BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO 
* WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE 
* LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT 
* HOLDERS AND/OR OTHER PARTIES PROVIDE THE LIBRARY "AS IS" 
* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, 
* INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE
* RISK AS TO THE QUALITY AND PERFORMANCE OF THE LIBRARY IS WITH YOU.
* SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL 
* NECESSARY SERVICING, REPAIR OR CORRECTION.
* 
* IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN 
* WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY 
* MODIFY AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE 
* LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, 
* INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR 
* INABILITY TO USE THE LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS
* OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY 
* YOU OR THIRD PARTIES OR A FAILURE OF THE LIBRARY TO OPERATE WITH
* ANY OTHER SOFTWARE), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN 
* ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
*/

/*****************************************************************************************/
/*                 GENERATED CODE BELOW THIS LINE - DO NOT MODIFY!                       */
/*****************************************************************************************/

//import { localStorage } from "local-storage"
var localStorageModule = require('local-storage').localStorage;    //because normal import currently doesn't work on Android
import { device } from "peer";
import * as messaging from 'messaging';
import { outbox } from "file-transfer";
import * as cbor from 'cbor';
import * as kcm from '../../../common/kpay/kpay_common.js';
var e = "fb1.2.1", n = 3e3, o = 5e3, t = 25e3, s = 1e4, a = 864e5, u = null, f = null, y = null, m = null, g = null, k = null, K = "kpay_nextRecheckTimeLocalstorageKey", P = "kpay__lastStatusResultLocalstorageKey", h = "kpay_flagsLocalstorageKey", p = "kpay_appIdLocalstorageKey", v = "kpay_randLocalstorageKey", S = "kpay_accountTokenLocalstorageKey", w = null, x = null, T = null, b = null, C = !1, R = !1, N = 0, _ = 0, U = 0, I = !1, D = !1, O = 0, W = null, L = null, M = function() {}, E = ye;

export function initialize() {
    console.log("KPay - initialize()"), messaging.peerSocket.addEventListener("open", F), 
    messaging.peerSocket.addEventListener("message", G), messaging.peerSocket.addEventListener("error", B), 
    messaging.peerSocket.addEventListener("closed", Q), setTimeout(ee, 6e4);
}

export function setEventHandler(e) {
    M = e;
}

export function setAccountTokenGenerator(e) {
    E = e;
}

export function startPurchase() {
    J(kcm.purchaseMessageFilename, {
        purchase: "start"
    });
}

export function cancelPurchase() {
    J(kcm.purchaseMessageFilename, {
        purchase: "cancel"
    });
}

function J(e, n, o, t) {
    var s = function() {
        o ? o() : console.log('KPay - Successfully sent kpay settings "' + e + '": ' + JSON.stringify(n));
    }, a = function(n) {
        t ? t() : console.log('KPay - Error sending kpay settings "' + e + '": ' + n);
    };
    if ((null == T || A()) && (console.log("KPay - sending message to watch using file transfer..."), 
    outbox.enqueue(e, cbor.encode(n)).then(s).catch(a)), null == T || q()) {
        console.log("KPay - sending message to watch using peersocket...");
        try {
            0 === messaging.peerSocket.readyState ? (messaging.peerSocket.send(n), s()) : a("PeerSocket closed");
        } catch (e) {
            a(e);
        }
    }
}

function A() {
    return !q();
}

function q() {
    return 0 == (64 & T);
}

function F() {
    console.log("KPay - Connection with watch opened..."), null !== ge() && "licensed" !== ge().status && de();
}

function G(e) {
    var n = e.data;
    if (kcm.isKPayMessage(n)) if (console.log("KPay - Received msg from watch: " + JSON.stringify(n)), 
    j(n)) {
        if (console.log("KPay - Received GETSTATUS msg from watch..."), C && w === n.appId && x === n.random && T === n.flags) {
            var s = new Date().getTime();
            if (I && !D && s - U < t) return void console.log("KPay - Websocket connected and alive, no need to start new status request...");
            if (s - _ < o) return void console.log("KPay - Status checks already running, no need to start new status request...");
        }
        w = n.appId, x = n.random, T = n.flags, null !== ge() && "unlicensed" !== ge().status && de(), 
        V(), f && (clearTimeout(f), f = null), f = setTimeout(Z, 15e3);
    } else z(n) && (console.log("KPay - Received CANCELPURCHASE msg from watch..."), 
    C = !1, de(), u && (clearTimeout(u), u = null), f && (clearTimeout(f), f = null), 
    I && re());
}

function j(e) {
    return kcm.isKPayMessage(e) && 0 === e.type;
}

function z(e) {
    return kcm.isKPayMessage(e) && 3 === e.type;
}

function H(e) {
    return {
        isKpayMsg: !0,
        type: 1,
        serverResponse: e
    };
}

function B(e) {
    console.log("KPay - Connection with watch error: " + e);
}

function Q(e) {
    console.log("KPay - Connection with watch was closed: " + e);
}

function V() {
    console.log("KPay - _statusCheck()"), C = !0;
    var o = new Date().getTime(), t = E(), s = Ke(), a = "https://api.k-pay.io/api/v1/status?";
    a += "appid=" + encodeURIComponent(w), a += "&rand=" + encodeURIComponent(x), a += "&accounttoken=" + encodeURIComponent(t), 
    a += "&platform=" + encodeURIComponent(s), a += "&flags=" + encodeURIComponent(T), 
    a += "&nocache=" + encodeURIComponent(o), a += "&libv=" + encodeURIComponent(e), 
    console.log("KPay - Getting status from server at " + a), N = o, fetch(a).then(function(e) {
        return e.json();
    }).then(function(e) {
        console.log("KPay - Got response from server: " + JSON.stringify(e)), R = !1, _ = new Date().getTime(), 
        e && e.hasOwnProperty("status") ? X(e) : console.log("KPay - Invalid KPay response received.");
    }).catch(function(e) {
        console.log("KPay - Status request failed: " + e), _ = new Date().getTime(), R || !C || null !== ge() && "licensed" === ge().status || (u && (clearTimeout(u), 
        u = null), u = setTimeout(V, n)), R = !1;
    });
}

function X(e) {
    "unlicensed" === e.status && (O = Number(e.paymentCode)), null === ge() || ge().status !== e.status || "unlicensed" === ge().status && (ge().purchaseStatus !== e.purchaseStatus || ge().paymentCode !== e.paymentCode) ? J(kcm.statusMessageFilename, H(e), function() {
        if (console.log("KPay - Status msg successfully sent to watch"), "licensed" === e.status) Y(7, null, !1); else if ("trial" === e.status) {
            var n = Math.round(new Date().getTime() / 1e3) + Number(e.trialDurationInSeconds), o = new Date();
            o.setTime(1e3 * n), Y(3, o, !1);
        } else if ("unlicensed" === e.status) {
            var t = Number(e.paymentCode), s = null == ge() || t !== ge().paymentCode;
            "waitForUser" == e.purchaseStatus ? Y(5, t, s) : "inProgress" == e.purchaseStatus && Y(6, t, s);
        }
        me(e);
    }, function() {
        console.log("KPay - Status msg failed sending to watch");
    }) : console.log("KPay - No status change detected"), "licensed" === e.status || "trial" === e.status ? ("licensed" === e.status ? $(e) : te(), 
    C = !1, f && (clearTimeout(f), f = null), re(), console.log("KPay - Licensed/trial status reached, no more action necesarry.")) : (te(), 
    D || I ? D && (u && (clearTimeout(u), u = null), u = setTimeout(V, n)) : le());
}

function Y(e, n, o) {
    if (L !== e || o) {
        L = e, console.log("KPay - firing event callback for event " + e);
        try {
            M(e, n);
        } catch (e) {}
    }
}

function Z() {
    console.log("KPay - _failSafeStatusCheck()");
    var e = new Date().getTime();
    C && (I && !D && e - U >= t || (!I || D) && e - _ >= 15e3) && (null === ge() || "licensed" !== ge().status && "trial" !== ge().status) && (console.log("KPay - status checks have stopped for some reason, restarting..."), 
    u && (clearTimeout(u), u = null), u = setTimeout(V, 0)), f && (clearTimeout(f), 
    f = null), f = setTimeout(Z, 15e3);
}

function $(e) {
    console.log("KPay - _setPeriodicRechecksForResponse()"), e && "licensed" === e.status && ne(86400 * e.validityPeriodInDays * 1e3, !1);
}

function ee() {
    var e = Pe(K, null);
    console.log("KPay - _checkForStoredRecheck(); nextRecheckTime from ls = " + e), 
    null !== e && ne(e - new Date().getTime(), !0);
}

function ne(e, n) {
    console.log("KPay - _scheduleRecheckWithTimeout(recheckTimeout = " + e + ", isStartupScheduling = " + n + ")"), 
    n || (he(h, T), he(p, w), he(v, x)), e < 0 ? ce() : oe(e);
}

function oe(e) {
    console.log("KPay - _storeScheduledRecheck(recheckTimeout = " + e + ")"), te();
    var n = new Date(), o = e / 1e3;
    n.setSeconds(n.getSeconds() + o), he(K, n.getTime()), console.log("KPay - Scheduling js status recheck for " + o + " seconds from now."), 
    y && (clearTimeout(y), y = null), y = setTimeout(ce, e);
}

function te() {
    console.log("KPay - _removeScheduledRecheck()"), y && (clearTimeout(y), y = null), 
    pe(K);
}

function ce() {
    console.log("KPay - _performRecheck()"), T = Pe(h, T), w = Pe(p, w), x = Pe(v, x), 
    oe(a), C || (console.log("KPay - Performing js fallback status recheck..."), R = !0, 
    V());
}

function le() {
    if (console.log("KPay - _beginWebSocketChecks()"), !D && !I && null === W) {
        var n = E(), o = Ke(), s = {
            type: "register",
            purchaseCode: O,
            data: {
                appid: w,
                accounttoken: n,
                platform: o,
                flags: T,
                random: x,
                libv: e
            }
        }, a = "wss://socket.kiezelpay.com";
        console.log("KPay - Opening websocket connection to KPay..."), g && (clearTimeout(g), 
        g = null), g = setTimeout(function() {
            I || (console.log("KPay - Opening websocket failed, reverting to normal polling checks..."), 
            D = !0, V(), ae());
        }, 3e3);
        try {
            (W = new WebSocket(a)).onopen = function(e) {
                I = !0, D = !1, console.log("KPay - WebSocket connection opened..."), ie(W, s);
            }, W.onmessage = function(e) {
                if (I) {
                    U = new Date().getTime(), console.log("KPay - WebSocket message received: " + e.data);
                    var n = JSON.parse(e.data);
                    if (n && "registerReponse" == n.type && n.keepAliveTimeout) t = n.keepAliveTimeout, 
                    m && (clearTimeout(m), m = null), m = setTimeout(function() {
                        se(W);
                    }, t); else if (n && "statusUpdate" == n.type) {
                        if (!n.data || !n.data.hasOwnProperty("status")) return void console.log("KPay - Invalid KPay response received: " + e.data);
                        X(n.data);
                    } else console.log("KPay - Unknown KPay response received: " + e.data);
                } else try {
                    W.close(), console.log("KPay - Closing stray WebSocket...");
                } catch (e) {}
            }, W.onerror = function(e) {
                console.log("KPay - WebSocket error: " + e), I = !1, D = !0;
                try {
                    console.log("KPay - Closing websocket..."), W.close();
                } catch (e) {}
                W = null, ae(), console.log("KPay - Starting polling status checks..."), V();
            }, W.onclose = function(e) {
                if (I) {
                    if (I = !1, null !== W) {
                        console.log("KPay - Closing websocket...");
                        try {
                            console.log("KPay - Closing websocket..."), W.close();
                        } catch (e) {}
                    }
                    W = null, D = !0, ae(), console.log("KPay - WebSocket closed by server: " + e), 
                    console.log("KPay - Starting polling status checks..."), V();
                }
            };
        } catch (e) {
            console.log("KPay - Exception opening websocket: " + e);
        }
    }
}

function se(e) {
    D || (ie(e, {
        type: "keepAlive"
    }), null !== m && (clearTimeout(m), m = null), m = setTimeout(function() {
        se(e);
    }, t));
}

function ae() {
    k && (clearTimeout(k), k = null), console.log("KPay - Scheduling websocket retry..."), 
    k = setTimeout(function() {
        D = !1;
    }, s);
}

function ie(e, n) {
    try {
        if (1 === e.readyState) {
            var o = JSON.stringify(n);
            console.log("KPay - Sending webSocket message: " + o), e.send(o);
        } else console.log("KPay - Error sending webSocket message: readyState !== 1"), 
        ue();
    } catch (e) {
        console.log("KPay - Error sending webSocket message: " + e), ue();
    }
}

function ue() {
    I = !1, D = !0;
    try {
        console.log("KPay - Closing websocket..."), W.close();
    } catch (e) {}
    W = null, ae(), console.log("KPay - Starting polling status checks..."), V();
}

function re() {
    if (console.log("KPay - Cancelling websocket status checking..."), null !== m && (clearTimeout(m), 
    m = null), I = !1, null !== W) try {
        W.close();
    } catch (e) {}
    W = null, C = !1;
}

function fe(e) {
    for (var n = [], i = 0; i < e.length; i += 2) n.push(parseInt(e.substr(i, 2), 16));
    return n;
}

function ye() {
    var e = localStorageModule.getItem(S);
    return null !== e && void 0 !== e && "undefined" !== e || (e = ke(), he(S, e)), 
    e;
}

function de() {
    b = null, pe(P);
}

function me(e) {
    b = e, he(P, JSON.stringify(b));
}

function ge() {
    if (null === b) {
        var e = localStorageModule.getItem(P);
        null !== e && void 0 !== e && "undefined" !== e && (b = JSON.parse(e));
    }
    return b;
}

function ke() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = 16 * Math.random() | 0;
        return ("x" == c ? r : 3 & r | 8).toString(16);
    });
}

function Ke() {
    return device.modelName.toLowerCase();
}

function Pe(e, n) {
    var o = localStorageModule.getItem(e);
    if (null !== o && void 0 !== o && "undefined" !== o && !isNaN(o)) {
        var t = Number(o);
        if (!isNaN(t)) return t;
    }
    return n;
}

function he(e, n) {
    null !== n && void 0 !== n && localStorageModule.setItem(e, n.toString());
}

function pe(e) {
    localStorageModule.removeItem(e);
}