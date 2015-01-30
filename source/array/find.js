// 배열에서 값 찾기
clean.array.find = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var
	// 찾은 값
	find;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (check(value) === true) {

			// 값을 삽입!
			find = value;

			// each 종료!
			return;
		}
	});

	// 최종적으로 찾은 값 반환
	return find;
};
