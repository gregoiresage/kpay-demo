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

var N=null,S=null,U=null,C=null,F=null,K=null,O=null,q=null;function R(){me.permissions.granted("access_internet")||G('This app requires the "Internet" permission to be granted'),kc.kp8(J,B,Q)}function J(n){n&&kcfg.KPAY_SHOW_PAID_APP_POPUP&&z()}function W(n){return document.getElementById(n)}function Y(n){n.style.display="inline"}function j(n){n.style.display="none"}function z(){var n=W("paidAppPopup");W("paidAppPopupText").getElementById("#copy/text").text=kcfg.KPAY_PAID_APP_POPUP_TEXT,W("btnPaidAppOk").onclick=function(t){j(n)},W("btnPaidAppAlreadyPaid").onclick=function(t){var u=W("alreadyPaidPopup");W("btnAlreadyPaidOk").onclick=function(n){j(u)},Y(u),j(n)},Y(n)}function B(n,t){switch(n){case 2:G(kcfg.KPAY_UNKNOWN_ERROR_MSG);break;case 0:G(kcfg.KPAY_BLUETOOTH_UNAVAILABLE_MSG);break;case 1:G(kcfg.KPAY_INTERNET_UNAVAILABLE_MSG);break;case 5:H(kcfg.KPAY_CODE_AVAILABLE_MSG,t);break;case 6:H(kcfg.KPAY_PURCHASE_STARTED_MSG,t);break;case 7:L()}}function G(n){N||(N=W("kpay_errorDialog"),S=W("kpay_errorMessage")),S.text=n,V(),Y(N),Z()}function H(n,t){U||(U=W("kpay_trialEndedDialog"),C=W("kpay_trialEndedMessage"),F=W("kpay_trialEndedCode")),F.text=nn(t),C.text=n,V(),Y(U),Z()}function L(){q||(q=W("kpay_purchaseSuccessDialog")),V(),Y(q),U&&j(U),Z("celebration-long"),setTimeout(Q,5e3)}function Q(){X(),N&&j(N),U&&j(U),q&&j(q)}function V(){K||(K=W("kpay_timeInDialog"),O=function(){var n=new Date,t=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2);K.text=t},clock.addEventListener("tick",function(){K&&"inline"==K.style.display&&O()})),K&&(O(),Y(K))}function X(){K&&j(K)}function Z(n){display.poke(),vibration.start(n||"nudge-max")}function $(){return N&&"inline"==N.style.display}function nn(n){for(var t="",u=n.toString(),e=0;e<u.length;e++){var s=u.charAt(e);t=t.concat(tn("0x1"+s))}return t}function tn(n){for(var t="",u=0;u<n.length;u+=2){var e=parseInt(n.substr(u,2),16);e&&(t+=String.fromCharCode(e))}return t.toString()}R();