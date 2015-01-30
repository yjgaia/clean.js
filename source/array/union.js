// 배열들의 합집합을 구한다.
clean.array.union = function() {
	//OPTIONAL array, array, array...

	var result = [];

	// 모든 배열을 합친다!
	clean.object.each(arguments, function(array) {
		result = result.concat(array);
	});

	// 유니크한 값만 고르기!
	return clean.array.unique(result);
};
