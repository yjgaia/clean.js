// 문자열에서 해당문자가 포함되었는지 확인합니다
clean.string.contains = function(target, search) {
	//REQUIRED: target: 대상문자열입니다!
	//REQUIRED: search: 확인할 문자열입니다!

	// search를 찾아가지고 인덱스를 확인합니다!
	return target.indexOf(search) != -1;
};
