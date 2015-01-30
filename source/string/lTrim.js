// 문자열의 왼쪽을 trim 합니다.
clean.string.lTrim = (function(){
	var regExTrim;
	// lTrim 을 지원하면
	if( !!String.prototype.lTrim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.lTrim();
		};
	// lTrim 을 지원하지 않으면
	}else{
		regExTrim = /^\s+/;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();
