// object의 특정 값들을 뽑아내는 기능!!!
clean.object.pick = function(object) {
	//REQUIRED: object
	//OPTIONAL: arguments[1], arguments[2]...

	var
	// 뽑아낸 값들을 갖고있을 객체!~!
	pick = {};

	// pick 함수를 실행할 때 넘어온 arguments 들을 돌아보면서...
	clean.object.each(arguments, function(value) {

		// 대상이 되는 object는 넘기고~~ 넘기고~~
		if (value !== object) {

			// 파워삽입!
			// arguments의 value가 뽑아낼 값들의 key니까 이렇게...
			pick[value] = object[value];
		}
	});

	// 뽑아낸 객체를 반환!~!
	return pick;
};
