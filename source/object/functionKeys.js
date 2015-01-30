// object 내의 function들의 key을 반환해주는 기능!!!
clean.object.functionKeys = function(object) {
	//REQUIRED: object

	var
	// 쓕쓕 뽑아냅시다.
	functionKeys = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// 값이 function 이면!
		if (clean.is.func(value)) {
			
			// function key들을 솹윕!
			functionKeys.push(key);
		}
	});

	// 뽑아낸 funcion key들을 반환!
	return functionKeys;
};
