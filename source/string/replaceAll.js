// 문자열에서 특정 문자열을 모두 변경한다!
clean.string.replaceAll = function(target, search, replace) {
	//REQUIRED: target: 바꿀 대상의 문자열입니다!
	//REQUIRED: search: 바꿀 문자열입니다!
	//REQUIRED: replace: 바뀔 문자열입니다!

	// search를 찾아가지고 쪼갠뒤에 replace로 바꿔서 붙힙니다.
	return target.split(search).join(replace);
};
