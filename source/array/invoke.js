// 배열 요소에 대해 method 함수를 invoke 한다.
clean.array.invoke = function(array, method) {
	//REQUIRED: array
	//REQUIRED: method
	//OPTIONAL: args, args, args...

	// argument가 있으면..
	var args = Array.prototype.slice.call(arguments, 2);

	// 배열을 돌면서
	return clean.array.map(array, function(value) {
		// 함수 실행
		return (clean.is.func(method) ? method : value[method]).apply(value, args);
	});
};
