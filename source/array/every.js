// 배열의 모든 멤버가 지정된 조건에 충족하는지 여부를 확인합니다.
clean.array.every = function(array, callback, args) {
	//REQUIRED: array
	//REQUIRED: callback(elem, index of elem, args){...}
	//OPTIONAL: args

	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index += 1) {
		// 모두 조건에 부합해야 true, 그 외에는 false
		if (callback.apply(array[index], [array[index], index], [array[index], index, args]) === false) {
			return false;
		}
	}

	return true;
};
