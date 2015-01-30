// 요기는 패키지 정보를 담고있어요.
// 헤헤

// 패키지 정보에요!
( typeof global === 'undefined' ? window : global).clean = {
	array : {},
	object : {},
	date : {},
	string : {},
	is : {},
	to : {}
};

// 배열의 요소를 각각 처리한다!
clean.array.each = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback

	var
	// 인덱스에요.
	index;

	// 모든 요소를 둘러봅니다.
	for ( index = 0; index < array.length; index += 1) {
		// 요소를 callback으로 쏴줘요!
		callback(array[index]);
	}
};

// 지금이 언제냐?
clean.date.now = function() {
	// 지금은 지금이다!
	return new Date();
};

// 숫잔가?
clean.is.integer = function() {
	//TODO: 해야행 ㅜㅜ
};

// 문자열인가?
clean.is.string = function() {
	//TODO: 해야행 ㅜㅜ
};

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

// 문자열에서 해당문자가 포함되었는지 확인합니다
clean.string.contains = function(target, search) {
	//REQUIRED: target: 대상문자열입니다!
	//REQUIRED: search: 확인할 문자열입니다!

	// search를 찾아가지고 인덱스를 확인합니다!
	return target.indexOf(search) >= 0;
};


// 문자열에서 특정 문자열을 모두 제거한다!
clean.string.removeAll = function(target, search) {
	//REQUIRED: target: 대상 문자열입니다!
	//REQUIRED: search: 제거할 문자열입니다!

	// search를 찾아가지고 빈 문자열로 교체합니다.
	// 이러면 모두 제거가 되겠죵?
	return clean.string.replaceAll(target, search, '');
};

// 문자열에서 특정 문자열을 모두 변경한다!
clean.string.replaceAll = function(target, search, replace) {
	//REQUIRED: target: 바꿀 대상의 문자열입니다!
	//REQUIRED: search: 바꿀 문자열입니다!
	//REQUIRED: replace: 바뀔 문자열입니다!

	// search를 찾아가지고 쪼갠뒤에 replace로 바꿔서 붙힙니다.
	return target.split(search).join(replace);
};

// 숫자로 바꾼다!
clean.to.integer = function() {
	//TODO: 해야행 ㅜㅜ
};

// 문자열로 바꾼다!
clean.to.string = function(thing) {
	//REQUIRED: thing

	return String(thing);
};

