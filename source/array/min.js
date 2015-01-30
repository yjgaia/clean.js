// 배열에서 최소 값 찾기
clean.array.min = function(array) {
	//REQUIRED: array

	var
	// 찾은 최소값
	min;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// min이 아직 지정되지 않았거나 현재 값보다 작으면
		if (min === undefined || min < value) {
			// min을 현재 값으로 뙇!
			min = value;
		}
	});

	// 최종적으로 찾은 min값 반환
	return min;
};
