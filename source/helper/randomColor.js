// 랜덤 색상문자열 생성!
clean.helper.randomColor = function() {

	// #09ab77 같은 색상문자열 반환
	return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
};
