// 문자열에서 HTML 태그를 escape 합니다.
clean.string.escapeHtml = (function(){
	var regExAmp = /&/g, regExGt = />/g, regExLt = /</g,
		regExQuot = /"/g, //"
		regExApos = /'/g; //'
	return function( target ){
		//REQUIRED: target: 바꿀 대상의 문자열입니다!
		// target에 문제가 있으면 빈문자열 아니면 문자열에서 HTML 태그를 escape한후 반환합니다.
		return !target ? '' : target.replace( regExAmp, '&amp;' )
			.replace( regExGt, '&gt;' )
			.replace( regExLt, '&lt;' )
			.replace( regExQuot, '&quot;' )
			.replace( regExApos, '&apos;' );
	};
})();
