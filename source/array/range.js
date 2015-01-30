// 배열을 해당 범위만큼 만든다!!
clean.array.range = function(start, stop, step) {
	//OPTIONAL: start
	//REQUIRED: stop
	//OPTIONAL: step

	var array = [];
	var index;
	var argLength = arguments.length;

	// 인자가 정수가 아니면 빈 배열을 리턴
	for ( index = 0; index < argLength; index += 1) {
		if (clean.is.integer(arguments[index]) === false) {
			return array;
		}
	}

	// 인자가 하나인 경우 stop으로 간주
	if (arguments.length <= 1) {
		stop = start;
		start = 0;
	}

	step = arguments[2] || 1;
	for ( index = start; index < stop; index = index + step) {
		array.push(index);
	}

	return array;
};
