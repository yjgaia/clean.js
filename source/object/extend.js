// 객체 확!장!
clean.object.extend = function(object, extend) {
	//REQUIRED: object: 본래 객체
	//REQUIRED: extend: 확장 객체

	// 확장 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(extend, function(value, key) {

		// 본래 객체에 없는거면,
		if (clean.object.has(extend, key) === false) {

			// 과감하게 삽입!!!
			object[key] = value;
		}
	});
};
