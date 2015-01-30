// 문자열에서 HTML 태그를 삭제합니다.
clean.string.stripTag = (function(){
	var regExTag;
	regExTag = /(<([^>]+)>)/ig;
	return function( target ){
		//REQUIRED: target: 바꿀 대상의 문자열입니다!
		// target에 문제가 있으면 빈문자열 아니면 문자열에서 태그를 제거한후 반환합니다.
		return !target ? "" : target.replace( regExTag, "" );
	};
})();
