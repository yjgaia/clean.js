// 숫잔가?
clean.is.number = function(target) {
	//REQUIRED: target: 숫잔지 확인할 대상

	// float으로 바꾸었을때, 숫자가 아닌것이 아니고,
	// isFinite(유한 수)가 통과되면 이것은 숫자다.
	//return isNaN(parseFloat(target)) === false && isFinite(target) === true;
	
	// 제길.. 위 코드보다 우리껄 쓰는게 좋자나???
	return (clean.to.number(target) === target);
};
/*
혹시나 몰라서; 또다른 방법으로;;
clean.is.number = function(target) {

	for(i=0; i<target.length; i++) {
		if(!(target.charCodeAt(i) > 47 && target.charCodeAt(i) < 58)) {
			return false;
		}
	}

	return true;
}
*/