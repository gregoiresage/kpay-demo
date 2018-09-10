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

import * as fs from "fs";
import * as messaging from 'messaging';
import * as kcm from '../../../common/kpay/kpay_common.js';
import * as kcfg from '../kpay_config.js';
import * as kp from './kpay.js';
var KPAY_APP_ID = 1380357204;
export var kp0=null,n=!1,t={t:!1,i:!1,u:!1,s:0,o:0,h:0},u=null,e=null,s=null,o=null,f=!1,a=function(){return!1},h=function(){},g=function(){},p=function(){},k=function(){},v=function(){},m=function(){return!1},y=function(n,t,u){return!0};export function init(){T()?(kp0={sl:!1,it:(new Date).getTime()},k(!0),h(!0),kp11()):(E(),k(!1),h(!1)),messaging.peerSocket.addEventListener("open",v),0===messaging.peerSocket.readyState&&v()}export function useFileTransfer(){n=!0}export function processMessageFromCompanion(n){x(n)?(t.s>kcfg.StatusRequestsWithoutResponseThreshold&&p(),t.s=0,I(n)):n&&"start"===n.purchase?startPurchase():n&&"cancel"===n.purchase&&cancelPurchase()}function b(){null!==e&&(clearTimeout(e),e=null)}export function kp1(n){t.u=!1,kp2(n)}export function kp2(n){b(),t.u||(n&&w(),null===e&&(e=setTimeout(function(){kp2(!0)},15e3)))}export function kp3(){b(),t.u=!0}function w(){t.u=!1,kcfg.SuppressAllErrors||5===u||6===u||0!=t.o||kp0.it&&!((new Date).getTime()-kp0.it>kcfg.SupressConnectionErrorsTimeout)||t.s++,t.s>kcfg.StatusRequestsWithoutResponseThreshold&&kp5(1,null,!1),s||(s=Math.round(4294967295*Math.random())),D(_(KPAY_APP_ID,s,P(kcfg.KPAY_TEST_MODE,!f)))}function P(u,e){var s=1;return u&&(s|=2),(e||t.i)&&(s|=4),s|=32,n&&(s|=64),s}function D(n){try{if(0===messaging.peerSocket.readyState)return messaging.peerSocket.send(n),t.o>kcfg.CompanionConnectionFailuresThreshold&&p(),void(t.o=0)}catch(n){console.error(JSON.stringify(n))}A(n)}function A(n){t.o>kcfg.CompanionConnectionFailuresThreshold?kp5(0,null,!1):kcfg.SuppressAllErrors||kp0.it&&!((new Date).getTime()-kp0.it>kcfg.SupressConnectionErrorsTimeout)||t.o++,kp1(!1)}export function startPurchase(){kp0.sl||(kp0.te=!0,t.i=!0,t.u=!1,kp11(),kp1(!0))}export function cancelPurchase(){D(M()),kp0.sl||(kp0.te=!1,t.i=!1,kp11(),kp3(),p(),u=null)}function _(n,t,u){return{isKpayMsg:!0,type:0,appId:n,random:t,flags:u}}function M(){return{isKpayMsg:!0,type:3}}function x(n){return kcm.isKPayMessage(n)&&1===n.type}export function getStatus(){return kp0.sl?"licensed":kp0.ts&&!kp0.te?"trial":"unlicensed"}export function kp4(){t.h>5?kp5(2,null,!1):kcfg.SuppressAllErrors||t.h++}function I(n){if(!y(n,s,P(kcfg.KPAY_TEST_MODE,!f)))return kp4(),void kp1(!0);t.h>5&&p(),t.h=0;var e=n.serverResponse;if("licensed"==e.status)kp0.sl=!0,kp11(),kp5(7,null,!1),t.t=!1,kp3();else if("unlicensed"==e.status){kp0.sl=!1,kp11(),7===u&&(u=null),t.t=!0;var a=Number(e.paymentCode),h=a!=o;o=a,"waitForUser"==e.purchaseStatus?kp5(5,a,h):"inProgress"==e.purchaseStatus&&kp5(6,a,h),kp1(!0)}else m(e)||(kp4(),kp1(!0))}export function kp5(n,e,s){if((u!==n||s)&&(u=n,7!==n||t.t))try{a(n,e)||g(n,e)}catch(n){}}export function kp6(){return u}export function kp7(){u=null}export function setEventHandler(n){a=n}export function kp8(n,t,u){h=n,g=t,p=u}export function kp9(n,t,u){f=!0,k=n,v=t,m=u}export function kp10(n){y=n}function T(){try{var n=fs.statSync("kps");return!(n&&n.size)}catch(n){return!0}}function E(){T()||(kp0=fs.readFileSync("kps","cbor"))}export function kp11(){fs.writeFileSync("kps",kp0,"cbor")}