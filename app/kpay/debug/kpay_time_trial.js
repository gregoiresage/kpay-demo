/*
* K·Pay Integration Library - v1.2.5 - Copyright Kiezel 2018
* Last Modified: 2017-10-26
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

import * as messaging from 'messaging';
import * as kp from './kpay.js';
import * as kc from './kpay_core.js';
import * as kcm from '../../../common/kpay/kpay_common.js';

var Kn = null;

function kn() {
    kc.kp9(J, vn, bn);
}

function J(n) {
    console.log("KPay_time_trial - _mainLibInitialized()"), n && (console.log("KPay_time_trial - Fresh install detected; appending State with trial info..."), 
    kc.kp0.te = !1, kc.kp0.ts = !1, kc.kp0.te2 = null), kc.kp0.sl || (kc.kp0.ts && null !== kc.kp0.te2 ? wn() : kc.kp2(!1));
}

function vn() {
    console.log("KPay_time_trial - Connection with companion opened..."), kc.kp0.ts && !kc.kp0.te || kc.kp0.sl ? console.log("KPay_time_trial - initialized; no action necesarry") : (console.log("KPay_time_trial - initialized; starting status checks"), 
    kc.kp1(!0));
}

function bn(n) {
    if ("trial" == n.status) {
        var e = Math.round(new Date().getTime() / 1e3) + Number(n.trialDurationInSeconds);
        if (!kc.kp0.ts || !kc.kp0.te2 || kc.kp0.te2 > e) {
            kc.kp0.sl = !1, 7 === kc.kp6() && kc.kp7(), kc.kp0.ts = !0, kc.kp0.te2 = e, kc.kp11();
            var t = new Date();
            t.setTime(1e3 * kc.kp0.te2), kc.kp5(3, t, !1);
        }
        return kc.kp3(), wn(), !0;
    }
    return !1;
}

function Sn() {
    console.log("KPay_time_trial - _endTrialCallback()"), Kn = null, Cn();
}

function wn() {
    console.log("KPay_time_trial - _scheduleTrialEndTimer()");
    var n = Math.round(new Date().getTime() / 1e3);
    kc.kp0.te || kc.kp0.ts && n >= kc.kp0.te2 ? (console.log("KPay_time_trial - trial already ended!"), 
    Cn()) : kc.kp0.ts && n < kc.kp0.te2 && (console.log("KPay_time_trial - Scheduling trial to end in " + (kc.kp0.te2 - n) + " seconds."), 
    Kn = setTimeout(Cn, 1e3 * (kc.kp0.te2 - n)));
}

function Cn() {
    console.log("KPay_time_trial - _endTrial()"), kc.kp0.sl || (kc.kp5(4, null, !1), kc.startPurchase());
}

kn();