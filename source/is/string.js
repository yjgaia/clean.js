// 문자열인가?
clean.is.string = function(target) {
	//REQUIRED: target

	// 일단 퍼왔는데... 더 좋은코드 있음 써주세요.
	return toString.call(target) == '[object String]';
};
