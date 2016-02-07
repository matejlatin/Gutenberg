/*! highlight.js v9.0.0 | BSD3 License | git.io/hljslicense */
!function(e){"undefined"!=typeof exports?e(exports):(self.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return self.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return E(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(E(i[n])||a(i[n]))return i[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\b\w+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function h(e,n,t,r){var a=r?"":x.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function p(){if(!L.k)return n(M);var e="",t=0;L.lR.lastIndex=0;for(var r=L.lR.exec(M);r;){e+=n(M.substr(t,r.index-t));var a=g(L,r);a?(B+=a[1],e+=h(a[0],n(r[0]))):e+=n(r[0]),t=L.lR.lastIndex,r=L.lR.exec(M)}return e+n(M.substr(t))}function d(){var e="string"==typeof L.sL;if(e&&!R[L.sL])return n(M);var t=e?l(L.sL,M,!0,y[L.sL]):f(M,L.sL.length?L.sL:void 0);return L.r>0&&(B+=t.r),e&&(y[L.sL]=t.top),h(t.language,t.value,!1,!0)}function b(){return void 0!==L.sL?d():p()}function v(e,t){var r=e.cN?h(e.cN,"",!0):"";e.rB?(k+=r,M=""):e.eB?(k+=n(t)+r,M=""):(k+=r,M=t),L=Object.create(e,{parent:{value:L}})}function m(e,t){if(M+=e,void 0===t)return k+=b(),0;var r=o(t,L);if(r)return k+=b(),v(r,t),r.rB?0:t.length;var a=u(L,t);if(a){var i=L;i.rE||i.eE||(M+=t),k+=b();do L.cN&&(k+="</span>"),B+=L.r,L=L.parent;while(L!=a.parent);return i.eE&&(k+=n(t)),M="",a.starts&&v(a.starts,""),i.rE?0:t.length}if(c(t,L))throw new Error('Illegal lexeme "'+t+'" for mode "'+(L.cN||"<unnamed>")+'"');return M+=t,t.length||1}var N=E(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var w,L=i||N,y={},k="";for(w=L;w!=N;w=w.parent)w.cN&&(k=h(w.cN,"",!0)+k);var M="",B=0;try{for(var C,j,I=0;;){if(L.t.lastIndex=I,C=L.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),w=L;w.parent;w=w.parent)w.cN&&(k+="</span>");return{r:B,value:k,language:e,top:L}}catch(O){if(-1!=O.message.indexOf("Illegal"))return{r:0,value:n(t)};throw O}}function f(e,t){t=t||x.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(E(n)){var t=l(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function g(e){return x.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,x.tabReplace)})),x.useBR&&(e=e.replace(/\n/g,"<br>")),e}function h(e,n,t){var r=n?w[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=i(e);if(!a(n)){var t;x.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?l(n,r,!0):f(r),s=u(t);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(s,u(p),r)}o.value=g(o.value),e.innerHTML=o.value,e.className=h(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){x=o(x,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){w[e]=n})}function N(){return Object.keys(R)}function E(e){return e=(e||"").toLowerCase(),R[e]||R[w[e]]}var x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},R={},w={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=p,e.configure=d,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=E,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",i={cN:"variable",b:"(\\$"+t+")\\b"},r={cN:"number",b:"#[0-9A-Fa-f]+"};({cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{eW:!0,eE:!0,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"meta",b:"!important"}]}});return{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,{cN:"selector-id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"selector-class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"selector-attr",b:"\\[",e:"\\]",i:"$"},{cN:"selector-tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},i,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{b:":",e:";",c:[i,r,e.CSSNM,e.QSM,e.ASM,{cN:"meta",b:"!important"}]},{b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[i,e.QSM,e.ASM,r,e.CSSNM,{b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}});
/* Toggle grid button
   ========================================================================== */

/*
// 1. THE JQUERY WAY
var flip = 0;
$('#btnToggleGrid').on('click', function(){
	// Get line-height
	var vcLineHeight = parseInt($('p').css("line-height"));
	console.log(vcLineHeight);
	if(flip == 0){
		$('body').addClass("grid");
		// $('.verticalGrid').css("background", vcImg);
		flip = 1;
	} else if (flip == 1) {
		$('body').addClass("grid-double");
		flip = 2;
	} else if (flip == 2) {
		$('body').removeClass("grid-double");
		$('body').removeClass("grid");
		// $('.verticalGrid').css("background", "none");
		flip = 0;
	};
});
*/


// 2. THE JAVASCRIPT WAY
var flip = 0;

function toggleGrid(){
	var body = document.getElementsByTagName("body")[0];
	var hero = document.getElementsByClassName("grid-overlay")[0];
	var footer = document.getElementsByClassName("grid-overlay")[1];
	var button = document.getElementById("btnToggleGrid");

	if(flip == 0){
		body.classList.add("grid");
		hero.classList.remove("grid-light");
		hero.classList.add("grid");
		button.textContent = "Turn Double Grid On";
		button.classList.add("double-grid");
		flip = 1;
	} else if (flip == 1) {
		body.classList.add("grid-double");
		hero.classList.add("grid-double");
		button.textContent = "Turn Grid Off";
		button.classList.remove("double-grid");
		button.classList.add("grid-off");
		flip = 2;
	} else if (flip == 2) {
		body.classList.remove("grid");
		hero.classList.remove("grid");
		// hero.classList.add("grid-light");
		body.classList.remove("grid-double");
		hero.classList.remove("grid-double");
		button.classList.remove("grid-off");
		button.textContent = "Turn Grid On";
		flip = 0;
	}
}

/* Fix image height to fit into the baseline grid
   ========================================================================== */

/*
// 1. THE JQUERY WAY
Construct the function
$.fn.imgFixHeight = function(){

	// get image original height
	var imgOriginalHeight = this.height();

	// Get Line-height
	var lineHeight = parseInt($('p').css("line-height"));

	// Calculate the new image height
	var div = Math.floor(imgOriginalHeight/lineHeight);
	var imgNewHeight = lineHeight * div;

	// Apply the new image height
	this.css("height", imgNewHeight);
};
*/


// 2. THE JAVASCRIPT WAY
// Construct the function
function fixImgHeight(){

	// Get all images
	var images = document.querySelectorAll('img');

	// Get line-height
	var element = document.getElementsByTagName("body")[0],
    style = window.getComputedStyle(element),
    lineHeight = parseInt(style.getPropertyValue('line-height'));

	// For each image in images get original height, calculate height rounded to baseline grid, set new height
	for (i = 0; i < images.length; ++i) {

		// Get original height
		var imgOriginalHeight = images[i].offsetHeight;

	    // Calculate new height
	    var div = Math.floor(imgOriginalHeight/lineHeight);
	    var imgNewHeight = lineHeight * div;

	    // Set new height
	    images[i].style.height = imgNewHeight + 'px';
	}
}