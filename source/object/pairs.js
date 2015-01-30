// object를 [key, value] 배열로 바꾸어주는 기능!!
clean.object.pairs = function(object) {
	//REQUIRED: object

	var
	// [key, value] 배열!
	pairs = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// [key, value]를 배열에 넣습니다!
		pairs.push([key, value]);
	});

	// 최종적으로 [key, value] 배열 반환!
	return pairs;
};
