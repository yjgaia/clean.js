// 배열의 마지막 요소를 n만큼 반환한다.
clean.array.last = function(array, n) {
	//REQUIRED: array
	//OPTIONAL: n

	// 결과
	var result = [];
	// 배열길이
	var length = array.length;

	n = arguments[1] || 1;

	// 배열이고 사이즈가 0보다 크며 n이 양수인 경우
	if (clean.is.array(array) && length > 0 && n > 0) {
		result = array.slice(-n);
	}

	return result;
};
