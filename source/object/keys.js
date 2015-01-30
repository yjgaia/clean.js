// object의 키들을 배열로 반환하는 함수
clean.object.keys = function(object) {
	//REQUIRED: object

	var
	// 키들의 배열
	keys = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// 키들을 배열에 넣습니다.
		keys.push(key);
	});

	// 최종적으로 키들의 배열 반환!
	return keys;
};
