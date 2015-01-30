// object를 살펴보면서, 이미 있는건 무시하고 없는건 defaults에서 넣어줍니당당
clean.object.defaults = function(object, defaults) {
	//REQUIRED: object
	//REQUIRED: defaults

	// defaults의 프로퍼티들을 살펴보면서,
	clean.object.each(defaults, function(value, key) {

		// 읎네???
		if (clean.object.has(object, key) === false) {

			// 자! 가져라!
			object[key] = value;
		}
	});
};
