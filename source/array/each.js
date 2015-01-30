// 배열의 요소를 각각 처리한다!
clean.array.each = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback

	var
	// 인덱스에요.
	index;

	// 모든 요소를 둘러봅니다.
	for ( index = 0; index < array.length; index += 1) {
		// 요소를 callback으로 쏴줘요!
		callback(array[index]);
	}
};
