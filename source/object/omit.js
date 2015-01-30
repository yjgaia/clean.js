// object의 특정 값들을 제외하고 뽑아내는 기능!!!
clean.object.omit = function(object) {
	//REQUIRED: object
	//OPTIONAL: arguments[1], arguments[2]...: 제외할 값들의 key!!!

	var
	// 뽑아낸 값들을 갖고있을 객체!~!
	omit = {};

	// 객체의 프로퍼티를 일단 넣는다!
	clean.object.each(object, function(value, key) {

		// 쑤우우우욱~~
		omit[key] = value;
	});

	// omit 함수를 실행할 때 넘어온 arguments 들을 돌아보면서...
	clean.object.each(arguments, function(value) {

		// 대상이 되는 object는 넘기고~~ 넘기고~~
		if (value !== object) {

			// 파워제거!
			// arguments의 value가 제거할 값들의 key니까 이렇게...
			delete omit[value];
		}
	});

	// 뽑아낸 객체를 반환!~!
	return omit;
};
