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
function hn(){kc.kp10(gn)}function ln(n){return new Uint8Array([255&n,(65280&n)>>8,(16711680&n)>>16,(4278190080&n)>>24])}function gn(n,t,u){var e=n.serverResponse,r=0,i="trial"===e.status,l="licensed"===e.status;i?r=1:l&&(r=2);var d=new Uint8Array(i?29:25),rb=ln(t),fb=ln(u),tb=null;i&&(tb=ln(Number(e.trialDurationInSeconds)));var c=0,s=new yn;
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
return s.update(d),s.l()===e.checksum}/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var pn="0123456789abcdef".split(""),kn=[-2147483648,8388608,32768,128],dn=[24,16,8,0],vn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],mn=[];function yn(){mn[0]=mn[16]=mn[1]=mn[2]=mn[3]=mn[4]=mn[5]=mn[6]=mn[7]=mn[8]=mn[9]=mn[10]=mn[11]=mn[12]=mn[13]=mn[14]=mn[15]=0,this.g=mn,this.p=1779033703,this.k=3144134277,this.v=1013904242,this.m=2773480762,this.P=1359893119,this.D=2600822924,this.A=528734635,this._=1541459225,this.M=this.start=this.I=0,this.T=this.N=!1,this.S=!0}yn.prototype.update=function(n){if(!this.T){for(var t=(n=new Uint8Array(n)).length,u,e=0,i,s=this.g;e<t;){for(this.N&&(this.N=!1,s[0]=this.M,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),i=this.start;e<t&&i<64;++e)s[i>>2]|=n[e]<<dn[3&i++];this.U=i,this.I+=i-this.start,i>=64?(this.M=s[16],this.start=i-64,this.hash(),this.N=!0):this.start=i}return this}},yn.prototype.C=function(){if(!this.T){this.T=!0;var n=this.g,i=this.U;n[16]=this.M,n[i>>2]|=kn[3&i],this.M=n[16],i>=56&&(this.N||this.hash(),n[0]=this.M,n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),n[15]=this.I<<3,this.hash()}},yn.prototype.hash=function(){var n=this.p,t=this.k,c=this.v,d=this.m,u=this.P,e=this.D,s=this.A,o=this._,f=this.g,a,h,g,p,k,v,m,y,b,w,P;for(a=16;a<64;++a)h=((k=f[a-15])>>>7|k<<25)^(k>>>18|k<<14)^k>>>3,g=((k=f[a-2])>>>17|k<<15)^(k>>>19|k<<13)^k>>>10,f[a]=f[a-16]+h+f[a-7]+g<<0;for(P=t&c,a=0;a<64;a+=4)this.S?(y=704751109,o=(k=f[0]-210244248)-1521486534<<0,d=k+143694565<<0,this.S=!1):(h=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),p=(y=n&t)^n&c^P,o=d+(k=o+(g=(u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(m=u&e^~u&s)+vn[a]+f[a])<<0,d=k+(v=h+p)<<0),h=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),p=(b=d&n)^d&t^y,s=c+(k=s+(g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(m=o&u^~o&e)+vn[a+1]+f[a+1])<<0,h=((c=k+(v=h+p)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),p=(w=c&d)^c&n^b,e=t+(k=e+(g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(m=s&o^~s&u)+vn[a+2]+f[a+2])<<0,h=((t=k+(v=h+p)<<0)>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),p=(P=t&c)^t&d^w,u=n+(k=u+(g=(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7))+(m=e&s^~e&o)+vn[a+3]+f[a+3])<<0,n=k+(v=h+p)<<0;this.p=this.p+n<<0,this.k=this.k+t<<0,this.v=this.v+c<<0,this.m=this.m+d<<0,this.P=this.P+u<<0,this.D=this.D+e<<0,this.A=this.A+s<<0,this._=this._+o<<0},yn.prototype.l=function(){this.C();var n=this.p,t=this.k,u=this.v,e=this.m,s=this.P,o=this.D,f=this.A,a=this._;return pn[n>>28&15]+pn[n>>24&15]+pn[n>>20&15]+pn[n>>16&15]+pn[n>>12&15]+pn[n>>8&15]+pn[n>>4&15]+pn[15&n]+pn[t>>28&15]+pn[t>>24&15]+pn[t>>20&15]+pn[t>>16&15]+pn[t>>12&15]+pn[t>>8&15]+pn[t>>4&15]+pn[15&t]+pn[u>>28&15]+pn[u>>24&15]+pn[u>>20&15]+pn[u>>16&15]+pn[u>>12&15]+pn[u>>8&15]+pn[u>>4&15]+pn[15&u]+pn[e>>28&15]+pn[e>>24&15]+pn[e>>20&15]+pn[e>>16&15]+pn[e>>12&15]+pn[e>>8&15]+pn[e>>4&15]+pn[15&e]+pn[s>>28&15]+pn[s>>24&15]+pn[s>>20&15]+pn[s>>16&15]+pn[s>>12&15]+pn[s>>8&15]+pn[s>>4&15]+pn[15&s]+pn[o>>28&15]+pn[o>>24&15]+pn[o>>20&15]+pn[o>>16&15]+pn[o>>12&15]+pn[o>>8&15]+pn[o>>4&15]+pn[15&o]+pn[f>>28&15]+pn[f>>24&15]+pn[f>>20&15]+pn[f>>16&15]+pn[f>>12&15]+pn[f>>8&15]+pn[f>>4&15]+pn[15&f]+pn[a>>28&15]+pn[a>>24&15]+pn[a>>20&15]+pn[a>>16&15]+pn[a>>12&15]+pn[a>>8&15]+pn[a>>4&15]+pn[15&a]},hn();