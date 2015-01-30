// 배열 요소가 포함되어있는지 확인
clean.array.contains = function(array, search) {
	//REQUIRED: array
	//REQUIRED: search

	// 배열이 아니거나 값이없으면 false
	if (clean.is.array(array) === false || array.length == 0) {
		return false;
	}

	// 인덱스 검사
	if (array.indexOf === Array.prototype.indexOf) {
		return array.indexOf(search) != -1;
	}

	// indexOf가 없다면 값을 찾는다
	var check = false;

	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index += 1) {
		// 요소를 callback으로 쏴줘요!
		// callback 에서 elem 혹은 this로 개별 변수에 접근합니다.
		if (array[index] === search) {
			check = true;
		}

		break;
	}

	return check;
};
