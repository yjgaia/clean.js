// 객체의 프로퍼티를 각각 처리한다!
clean.object.each = function(object, callback) {
	//REQUIRED: object
	//REQUIRED: callback

	var
	// 프로퍼티의 이름에요.
	name;

	// 모든 프로퍼티를 둘러봅니다.
	for (name in object) {

		// 안전하게 객체에 잘 있나 확인하고,
		if (object.hasOwnProperty(name) === true) {

			// 프로퍼티를 callback으로 쏴줘요!
			callback(object[name]);
		}
	}
};
