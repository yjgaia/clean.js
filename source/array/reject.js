// 조건에 해당하지 않는 객체만 배열로 반환
clean.array.reject = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var result = [];

	clean.array.each(array, function(value) {
		// 조건에 안맞으면!
		if (check(value) === false) {
			result.push(value);
		}
	});

	return result;
};
