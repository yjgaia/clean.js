// 문자열 사이 값을 출력합니다!
clean.string.between = function(target, start, end) {
	//REQUIRED target
	//REQUIRED start
	//OPTIONAL end

	// 시작점
	var startPos = target.indexOf(start);
	// 끝점
	var endPos = clean.string.reverse(target).indexOf(end);

	startPos = startPos !== -1 ? startPos : 0; 
	endPos = endPos !== -1 ? target.length - endPos : target.length; 

	// 자릅니다!
	return target.substring(startPos, endPos);
}