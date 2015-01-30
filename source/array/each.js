// 배열의 요소를 각각 처리한다!
clean.array.each = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback(elem, index of elem){...}

	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index += 1) {
		// 요소를 callback으로 쏴줘요!
		// callback 에서 elem 혹은 this로 개별 변수에 접근합니다.
		callback.apply(array[index], [array[index], index]);
	}
};
