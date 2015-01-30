// 정수인가?
clean.is.integer = function(target) {
	//REQUIRED: target: 정수인지 확인할 대상

	// target을 숫자로 바꾸고 원래 대상이랑 완줘니 똑같은지 보면 되겠습니당.
	return (clean.to.integer(target) === target);
};
