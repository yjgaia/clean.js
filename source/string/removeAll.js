// 문자열에서 특정 문자열을 모두 제거한다!
clean.string.removeAll = function(target, search) {
	//REQUIRED: target: 대상 문자열입니다!
	//REQUIRED: search: 제거할 문자열입니다!

	// search를 찾아가지고 빈 문자열로 교체합니다.
	// 이러면 모두 제거가 되겠죵?
	return clean.string.replaceAll(target, search, '');
};
