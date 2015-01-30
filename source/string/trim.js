// 문자열을 trim 합니다.
clean.string.trim = (function(){
	var regExTrim;
	// trim 을 지원하면
	if( !!String.prototype.trim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.trim();
		};
	// trim 을 지원하지 않으면
	}else{
		regExTrim = /^\s*|\s*$/g;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();
