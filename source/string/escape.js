// 문자열을 escape합니다!!
// 특히나 한국어는 escpae가 많이많이 상당히 필요하죵ㅇㅇㅇ!
clean.string.escape = function(string) {
	//REQUIRED: string: escape 할 문자열

	// encodeURIComponent를 이용합니다!
	// 알파벳과 숫자 외 문자를 모두 escape!!
	// http://도 http%3A%2F%2F로 바껴요!
	return encodeURIComponent(string);
};
