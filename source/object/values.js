// object의 값들을 배열로 반환하는 함수
clean.object.values = function(object) {
	//REQUIRED: object

	var
	// 값들의 배열
	values = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value) {

		// 키들을 배열에 넣습니다.
		values.push(value);
	});

	// 최종적으로 값들의 배열 반환!
	return values;
};
