// 배열에서 값을 제거 한다.
clean.array.remove = function(array) {
	//REQUIRED: array
	//OPTIONAL element, element, element...

	// 결과 배열
	var result = array.slice(0);

	clean.object.each(arguments, function(arg, key) {
		// 해당 배열 외 인자값이 있다면
		if (key > 0) {
			var index = result.indexOf(arg);
			if (index > -1) {
				// 존재하는 값을 제거한다.
				result.splice(index, 1);
			}
		}
	});

	return result;
};
