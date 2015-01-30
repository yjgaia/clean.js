// 숫자로 바꾼다!
clean.to.number = function(thing) {
	//REQUIRED: thing: 변경할 대상

	// 이거 말고 더 조은 수단이 있나요? 궁금...
	// 10진수 실수로 파싱합니다.
	return parseFloat(thing, 10);
};
