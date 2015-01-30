// 배열에서 해당 값이 몇개 존재하는지 찾기
clean.array.count = function(array, search) {
	//REQUIRED: array
	//REQUIRED: value

	var
	// 카운트
	count = 0;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (search === value) {
			count += 1;
		}
	});

	// 최종적으로 찾은 값 반환
	return count;
};
