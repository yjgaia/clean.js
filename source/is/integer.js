// 정수인가?
clean.is.integer = function(target) {
	//REQUIRED: target: 정수인지 확인할 대상

	// 일단 퍼왔는데... 더 좋은코드 있음 써주세요.
	return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
};
