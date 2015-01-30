// object를 key와 value의 순서를 바꾸어주는 기능!
clean.object.invert = function(object) {
	//REQUIRED: object

	var
	// 바꿔 바꿔~! 모든걸 다바꿔~!
	invert = {};

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// invert 객체의 value에 key를 값으로다가 삽입!!!
		invert[value] = key;
	});

	// 만들어진 invert 반환!
	return invert;
};
