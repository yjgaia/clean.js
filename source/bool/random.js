// true, false 중 랜덤하게 반환~!
clean.bool.random = function() {

	// 0 이나 1 중에 랜덤하게 받아와서 0이면 false, 1이면 true!!
	return clean.integer.random(1) === 1;
};
