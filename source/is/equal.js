// target1, 2가 같냐?
clean.is.equal = function(target1, target2) {
	//REQUIRED: target1
	//REQUIRED: target2

	var
	// isEqual!
	// 일단은 같다고 가정하고 틀리면 false로 바꿔줍시다.
	isEqual = true;

	// target들이 둘다 객체면!!
	if (clean.is.object(target1) === true && clean.is.object(target2) === true) {

		// target1의 값들을 돌아보면서,
		clean.object.each(target1, function(value, key) {

			// target1과 target2의 값이 다르면!
			if (target2[key] !== value) {

				// 이런. 다르군.
				isEqual = false;

				// each 중단!
				return false;
			}
		});

		// 이번엔 target2의 값들을 돌아보면서,
		clean.object.each(target2, function(value, key) {

			// target1과 target2의 값이 다르면!
			if (target1[key] !== value) {

				// 이런. 다르군.
				isEqual = false;

				// each 중단!
				return false;
			}
		});
	}

	//TODO: 다른 type들에 대해서도 필요합니다!!

	return isEqual;
};
