// target이 비었나??
clean.is.empty = function(target) {
	//REQUIRED: target

	var
	// isEmpty?
	// 일단은 비었다는 가정을 하고!!
	isEmpty = true;

	// target이 객체면!
	if (clean.is.object(target) === true) {

		// target의 값들을 돌아보는데,
		clean.object.each(target, function(value, key) {

			// 어? 비지 않았어?!?!
			// 비지 않았네?!?!?
			// 그럼 false!!!!
			isEmpty = false;

			// 더이상 돌아볼 필요도 없다.
			return false;
		});
	}

	// target이 문자열이면!!
	else if (clean.is.string(target) === true) {

		// 빈 문자열이면 얄짤없지!
		if (target === '') {
			isEmpty = false;
		}
	}

	//TODO: 다른 type들에 대해서도 필요합니다!!

	return isEmpty;
};
