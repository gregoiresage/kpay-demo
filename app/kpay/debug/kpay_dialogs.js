/*
* K·Pay Integration Library - v1.2.5 - Copyright Kiezel 2018
* Last Modified: 2018-07-25
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

import document from "document";
import { vibration } from "haptics";
import { display } from "display";
import clock from "clock";
import { me } from "appbit";
import * as kc from './kpay_core.js';
import * as kcfg from '../kpay_config.js';
import * as kp from './kpay.js';
import * as kcm from '../../../common/kpay/kpay_common.js';

var A = null, E = null, x = null, z = null, I = null, O = null, N = null, R = null;

function U() {
    console.log("KPay_dialogs - kpay_dialogs initialize called!"), me.permissions.granted("access_internet") || (console.log("KPay - ERROR: internet permission not enabled!"), 
    j('This app requires the "Internet" permission to be granted')), kc.kp8(J, Y, Q);
}

function J(n) {
    console.log("KPay_dialogs - _mainLibInitialized()"), n && kcfg.KPAY_SHOW_PAID_APP_POPUP && (console.log("KPay_dialogs - Fresh install detected; showing paid app popup..."), 
    H());
}

function L(n) {
    return document.getElementById(n);
}

function q(n) {
    n.style.display = "inline";
}

function W(n) {
    n.style.display = "none";
}

function H() {
    var n = L("paidAppPopup");
    L("paidAppPopupText").getElementById("#copy/text").text = kcfg.KPAY_PAID_APP_POPUP_TEXT, 
    L("btnPaidAppOk").onclick = function(e) {
        W(n);
    }, L("btnPaidAppAlreadyPaid").onclick = function(e) {
        var t = L("alreadyPaidPopup");
        L("btnAlreadyPaidOk").onclick = function(n) {
            W(t);
        }, q(t), W(n);
    }, q(n);
}

function Y(n, e) {
    switch (console.log("KPay_dialogs - _handleEvent(e == " + n + ", extraData == " + e + ")"), 
    n) {
      case 2:
        j(kcfg.KPAY_UNKNOWN_ERROR_MSG);
        break;

      case 0:
        j(kcfg.KPAY_BLUETOOTH_UNAVAILABLE_MSG);
        break;

      case 1:
        j(kcfg.KPAY_INTERNET_UNAVAILABLE_MSG);
        break;

      case 5:
        B(kcfg.KPAY_CODE_AVAILABLE_MSG, e);
        break;

      case 6:
        B(kcfg.KPAY_PURCHASE_STARTED_MSG, e);
        break;

      case 7:
        G();
    }
}

function j(n) {
    console.log("KPay_dialogs - _showError() - message == " + n), A || (A = L("kpay_errorDialog"), 
    E = L("kpay_errorMessage")), E.text = n, V(), q(A), Z();
}

function B(n, e) {
    console.log("KPay_dialogs - _showTrialEnded() - message == " + n + "; code == " + e), 
    x || (x = L("kpay_trialEndedDialog"), z = L("kpay_trialEndedMessage"), I = L("kpay_trialEndedCode")), 
    I.text = nn(e), z.text = n, V(), q(x), Z();
}

function G() {
    console.log("KPay_dialogs - _showPurchaseSuccess()"), R || (R = L("kpay_purchaseSuccessDialog")), 
    V(), q(R), x && W(x), Z("celebration-long"), setTimeout(Q, 5e3);
}

function Q() {
    console.log("KPay_dialogs - _hideAlert()"), X(), A && W(A), x && W(x), R && W(R);
}

function V() {
    O || (O = L("kpay_timeInDialog"), N = function() {
        var n = new Date(), e = ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2);
        O.text = e;
    }, clock.addEventListener("tick", function() {
        O && "inline" == O.style.display && N();
    })), O && (N(), q(O));
}

function X() {
    O && W(O);
}

function Z(n) {
    display.poke(), vibration.start(n || "nudge-max");
}

function $() {
    return A && "inline" == A.style.display;
}

function nn(n) {
    for (var e = "", t = n.toString(), a = 0; a < t.length; a++) {
        var s = t.charAt(a);
        e = e.concat(en("0x1" + s));
    }
    return e;
}

function en(n) {
    for (var e = "", t = 0; t < n.length; t += 2) {
        var a = parseInt(n.substr(t, 2), 16);
        a && (e += String.fromCharCode(a));
    }
    return e.toString();
}

U();

