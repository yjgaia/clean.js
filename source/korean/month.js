// 달을 구한다. 혹시나 ...아주 나중에....
// 진짜 나중에.... clean에서 다국어 지원한다면 요긴하게 쓰이겠지만...
// 아마 안쓰일꺼예요.... 아 그냥 그렇다구
//COMMENT: ㅋㅋ 한국어 지원인 만큼 korean 패키지로 이동했습니다.
clean.korean.month = function (month){
	//REQUIRED: month: 숫자값이예유~
	
	var monthArray = new Array("1월", "2월", "3월",
						   "4월", "5월", "6월",
						   "7월", "8월", "9월",
						   "10월", "11월", "12월");

	return monthArray[month];
};
