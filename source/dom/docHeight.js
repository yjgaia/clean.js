// 문서 높이 구하기인데... 마땅히 어디다가 둘때가;;;
//COMMENT: 여기 두심 됩니당!! ㅋㅋ 이름은 좀 변경 했어용!!
clean.dom.docHeight = function() {

	var d = document;
	
	// 현재 문서의 높히를 구해요!
	return Math.max(
		Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
		Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
		Math.max(d.body.clientHeight, d.documentElement.clientHeight)
	);
};
