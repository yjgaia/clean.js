// 랜덤한 정수 반환~!
clean.integer.random = function(min, max) {
	//OPTIONAL: min: 최소값
	//REQUIRED: max: 최대값

	// max 부분에 값이 없으면 max가 아니라 min이 입력되지 않은것.
	if (max === undefined) {

		// max 값을 되찾고,
		max = min;

		// 기본값인 0을 넣어줍니다!
		min = 0;
	}

	// Math 함수들을 이용해서 랜덤한 정수를 반환!!!
	return Math.floor(Math.random() * (max - min + 1) + min);
};
