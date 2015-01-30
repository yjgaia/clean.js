// 배열에서 값들 찾아갖고 배열로 반환!
clean.array.filter = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var
	// 찾은 값들
	finds = [];

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (check(value) === true) {

			// 값을 삽입!
			finds.push(value);
		}
	});

	// 최종적으로 찾은 값들 반환
	return finds;
};
