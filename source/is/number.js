// 숫잔가?
clean.is.number = function(target) {
	//REQUIRED: target: 숫잔지 확인할 대상

	// float으로 바꾸었을때, 숫자가 아닌것이 아니고,
	// isFinite(유한 수)가 통과되면 이것은 숫자다.
	return isNaN(parseFloat(target)) === false && isFinite(target) === true;
};
