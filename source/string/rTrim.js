// 문자열의 오른쪽을 trim 합니다.역쉬 트림 수정하신분 세세함이 돋보입니다!
clean.string.rTrim = (function(){
	var regExTrim;
	// rTrim 을 지원하면
	if( !!String.prototype.rTrim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.rTrim();
		};
	// rTrim 을 지원하지 않으면
	}else{
		regExTrim = /\s+$/;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();