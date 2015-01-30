// 배열들의 교집합을 구한다.
clean.array.intersection = function(array) {
	//REQUIRED: array
	//OPTIONAL: array arguments

	// 인자로 들어온 배열들을 하나의 배열로!
	var rest = Array.prototype.slice.call(arguments, 1);

	// 필터링
	return clean.array.filter(clean.array.unique(array), function(value) {
		// 나머지 배열들에 대해서 각 배열들의 배열요소가 값과 일치하는지
		// 일치 한다면 필터에 걸린다!
		return clean.array.every(rest, function(other) {
			return clean.array.contains(other, value);
		});
	});
};
