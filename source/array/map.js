// 배열 요소에 callback 처리한 배열을 구한다
clean.array.map = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback

	var result = [];

	// callback 처리한 값의 배열을 반환
	clean.object.each(array, function(value) {
		result.push(callback(value));
	});

	return result;
};
