/*
* K·Pay Integration Library - v1.2.5 - Copyright Kiezel 2018
* Last Modified: 2017-10-19
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

import * as kc from './kpay_core.js';

var KPAY_SECRET = [179, 190, 51, 14, 33, 165, 50, 63, 239, 144, 149, 147, 89, 3, 34, 250];
function fn() {
    console.log("KPay_msg_validation - kpay_msg_validation initialize called!"), kc.kp10(dn);
}

function hn(n) {
    return new Uint8Array([ 255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24 ]);
}

function dn(n, e, t) {
    console.log("KPay - _validateMessage()");
    var a = n.serverResponse, r = 0, i = "trial" === a.status, l = "licensed" === a.status;
    i ? r = 1 : l && (r = 2);
    var d = new Uint8Array(i ? 29 : 25), rb = hn(e), fb = hn(t), tb = null;
    i && (tb = hn(Number(a.trialDurationInSeconds)));
    var c = 0, s = new _n();
    
	d[c++] = fb[2];
	d[c++] = KPAY_SECRET[10];
	d[c++] = KPAY_SECRET[4];
	d[c++] = KPAY_SECRET[7];
	d[c++] = KPAY_SECRET[3];
	d[c++] = rb[2];
	if (i) {
		d[c++] = tb[2];
	}
	d[c++] = KPAY_SECRET[13];
	d[c++] = KPAY_SECRET[12];
	d[c++] = KPAY_SECRET[0];
	d[c++] = KPAY_SECRET[14];
	if (i) {
		d[c++] = tb[0];
	}
	d[c++] = KPAY_SECRET[8];
	d[c++] = KPAY_SECRET[1];
	d[c++] = KPAY_SECRET[9];
	d[c++] = KPAY_SECRET[5];
	if (i) {
		d[c++] = tb[1];
	}
	d[c++] = KPAY_SECRET[11];
	d[c++] = KPAY_SECRET[15];
	d[c++] = rb[3];
	d[c++] = rb[1];
	d[c++] = KPAY_SECRET[2];
	d[c++] = fb[3];
	d[c++] = KPAY_SECRET[6];
	d[c++] = fb[1];
	d[c++] = rb[0];
	d[c++] = fb[0];
	if (i) {
		d[c++] = tb[3];
	}
	d[c++] = r;
    s.update(d);
    var o = s.h();
    return console.log("KPay - _validateMessage(); generated: " + o + "; received: " + a.checksum), 
    o === a.checksum;
}

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var gn = "0123456789abcdef".split(""), yn = [ -2147483648, 8388608, 32768, 128 ], Pn = [ 24, 16, 8, 0 ], mn = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], pn = [];

function _n() {
    pn[0] = pn[16] = pn[1] = pn[2] = pn[3] = pn[4] = pn[5] = pn[6] = pn[7] = pn[8] = pn[9] = pn[10] = pn[11] = pn[12] = pn[13] = pn[14] = pn[15] = 0, 
    this.g = pn, this.P = 1779033703, this.m = 3144134277, this.p = 1013904242, this._ = 2773480762, 
    this.K = 1359893119, this.k = 2600822924, this.v = 528734635, this.S = 1541459225, 
    this.C = this.start = this.M = 0, this.D = this.F = !1, this.T = !0;
}

_n.prototype.update = function(n) {
    if (!this.D) {
        for (var e = (n = new Uint8Array(n)).length, t, a = 0, i, s = this.g; a < e; ) {
            for (this.F && (this.F = !1, s[0] = this.C, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), 
            i = this.start; a < e && i < 64; ++a) s[i >> 2] |= n[a] << Pn[3 & i++];
            this.A = i, this.M += i - this.start, i >= 64 ? (this.C = s[16], this.start = i - 64, 
            this.hash(), this.F = !0) : this.start = i;
        }
        return this;
    }
}, _n.prototype.I = function() {
    if (!this.D) {
        this.D = !0;
        var n = this.g, i = this.A;
        n[16] = this.C, n[i >> 2] |= yn[3 & i], this.C = n[16], i >= 56 && (this.F || this.hash(), 
        n[0] = this.C, n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), 
        n[15] = this.M << 3, this.hash();
    }
}, _n.prototype.hash = function() {
    var n = this.P, e = this.m, c = this.p, d = this._, t = this.K, a = this.k, s = this.v, o = this.S, u = this.g, f, h, g, y, P, m, p, _, K, k, v;
    for (f = 16; f < 64; ++f) h = ((P = u[f - 15]) >>> 7 | P << 25) ^ (P >>> 18 | P << 14) ^ P >>> 3, 
    g = ((P = u[f - 2]) >>> 17 | P << 15) ^ (P >>> 19 | P << 13) ^ P >>> 10, u[f] = u[f - 16] + h + u[f - 7] + g << 0;
    for (v = e & c, f = 0; f < 64; f += 4) this.T ? (_ = 704751109, o = (P = u[0] - 210244248) - 1521486534 << 0, 
    d = P + 143694565 << 0, this.T = !1) : (h = (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10), 
    y = (_ = n & e) ^ n & c ^ v, o = d + (P = o + (g = (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)) + (p = t & a ^ ~t & s) + mn[f] + u[f]) << 0, 
    d = P + (m = h + y) << 0), h = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), 
    y = (K = d & n) ^ d & e ^ _, s = c + (P = s + (g = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + (p = o & t ^ ~o & a) + mn[f + 1] + u[f + 1]) << 0, 
    h = ((c = P + (m = h + y) << 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), 
    y = (k = c & d) ^ c & n ^ K, a = e + (P = a + (g = (s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7)) + (p = s & o ^ ~s & t) + mn[f + 2] + u[f + 2]) << 0, 
    h = ((e = P + (m = h + y) << 0) >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), 
    y = (v = e & c) ^ e & d ^ k, t = n + (P = t + (g = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (p = a & s ^ ~a & o) + mn[f + 3] + u[f + 3]) << 0, 
    n = P + (m = h + y) << 0;
    this.P = this.P + n << 0, this.m = this.m + e << 0, this.p = this.p + c << 0, this._ = this._ + d << 0, 
    this.K = this.K + t << 0, this.k = this.k + a << 0, this.v = this.v + s << 0, this.S = this.S + o << 0;
}, _n.prototype.h = function() {
    this.I();
    var n = this.P, e = this.m, t = this.p, a = this._, s = this.K, o = this.k, u = this.v, f = this.S;
    return gn[n >> 28 & 15] + gn[n >> 24 & 15] + gn[n >> 20 & 15] + gn[n >> 16 & 15] + gn[n >> 12 & 15] + gn[n >> 8 & 15] + gn[n >> 4 & 15] + gn[15 & n] + gn[e >> 28 & 15] + gn[e >> 24 & 15] + gn[e >> 20 & 15] + gn[e >> 16 & 15] + gn[e >> 12 & 15] + gn[e >> 8 & 15] + gn[e >> 4 & 15] + gn[15 & e] + gn[t >> 28 & 15] + gn[t >> 24 & 15] + gn[t >> 20 & 15] + gn[t >> 16 & 15] + gn[t >> 12 & 15] + gn[t >> 8 & 15] + gn[t >> 4 & 15] + gn[15 & t] + gn[a >> 28 & 15] + gn[a >> 24 & 15] + gn[a >> 20 & 15] + gn[a >> 16 & 15] + gn[a >> 12 & 15] + gn[a >> 8 & 15] + gn[a >> 4 & 15] + gn[15 & a] + gn[s >> 28 & 15] + gn[s >> 24 & 15] + gn[s >> 20 & 15] + gn[s >> 16 & 15] + gn[s >> 12 & 15] + gn[s >> 8 & 15] + gn[s >> 4 & 15] + gn[15 & s] + gn[o >> 28 & 15] + gn[o >> 24 & 15] + gn[o >> 20 & 15] + gn[o >> 16 & 15] + gn[o >> 12 & 15] + gn[o >> 8 & 15] + gn[o >> 4 & 15] + gn[15 & o] + gn[u >> 28 & 15] + gn[u >> 24 & 15] + gn[u >> 20 & 15] + gn[u >> 16 & 15] + gn[u >> 12 & 15] + gn[u >> 8 & 15] + gn[u >> 4 & 15] + gn[15 & u] + gn[f >> 28 & 15] + gn[f >> 24 & 15] + gn[f >> 20 & 15] + gn[f >> 16 & 15] + gn[f >> 12 & 15] + gn[f >> 8 & 15] + gn[f >> 4 & 15] + gn[15 & f];
}, fn();

