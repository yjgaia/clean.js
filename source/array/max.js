// 배열에서 최대 값 찾기
clean.array.max = function(array) {
	//REQUIRED: array

	var
	// 찾은 최대값
	max;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// max가 아직 지정되지 않았거나 현재 값보다 작으면
		if (max === undefined || max < value) {
			// max를 현재 값으로 뙇!
			max = value;
		}
	});

	// 최종적으로 찾은 max값 반환
	return max;
};
