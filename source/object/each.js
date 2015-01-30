// 객체의 프로퍼티를 각각 처리한다!
clean.object.each = function(object, callback) {
	//REQUIRED: object
	//REQUIRED: callback

	var
	// 프로퍼티의 키에요.
	key;

	// 모든 프로퍼티를 둘러봅니다.
	for (key in object) {

		// 안전하게 객체에 잘 있나 확인하고,
		if (object.hasOwnProperty(key) === true) {

			// 프로퍼티의 값과 키를 callback으로 쏴줘요!
			// 만약 callback의 결과값이 false면 더이상 살펴보지 않고 중단!
			if (callback(object[key], key) === false) {
				break;
			}
		}
	}
};
