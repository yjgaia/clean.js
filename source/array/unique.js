// 배열에서 유니크한 값만 뽑아낸다
clean.array.unique = function(array) {
	//REQUIRED: array

	// 결과
	var result = [];

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// value 를 포함하고 있지 않으면 푸시!
		if (clean.array.contains(result, value) === false) {
			result.push(value);
		}
	});

	// 결과 반환!!!
	return result;
};
