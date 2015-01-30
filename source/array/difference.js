clean.array.difference = function() {
	//OPTIONAL array, array, array...

	var result = [];

	// 모든 배열을 합친다!
	clean.object.each(arguments, function(array) {
		result = result.concat(array);
	});

	return clean.array.filter(result, function(value) {
		// 하나씩만 있는 것들을 찾아낸다.
		return clean.array.count(result, value) === 1;
	});
};
