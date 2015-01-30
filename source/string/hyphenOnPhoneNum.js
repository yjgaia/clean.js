//전화번호에 하이픈을 넣어서 반환한다
//target->str로 변경했습니당~
clean.string.hyphenOnPhoneNum = function(str, glue) {
	//REQUIRE : str
	//OPTIONAL : glue 하이픈이 아니라 다른 걸 쓰고 싶으면 여기에 설정합니다.
/* 대한민국의 전화번호 체계는 아래와 같습니다.


    XXXX-YYYY ? 같은 지역 안으로 전화를 걸 경우. 국번호 XXXX는 최대 4자리까지, 가입자 개별 번호 YYYY는 4자리로 구성되며, 국번호는 2부터 9까지의 숫자로 시작한다.
    0ZZ-XXXX-YYYY ? 다른 지역으로 전화를 걸 경우. 지역번호 ZZ는 최대 두 자리로, 2부터 6까지의 숫자로 시작한다.
    0NN-(0ZZ)-XXXX-YYYY ? 일반 전화가 아닌 다른 통신망으로 전화를 걸 경우. 통신망 식별번호 NN은 최대 4자리까지이다. 지역번호는 시외전화에서 다른 지역으로 전화를 걸 때만 사용한다.
    00N-PPP-QQQQQQQ ? 대한민국 바깥으로 전화를 걸 경우. 국제전화 통신망 식별번호 N은 최대 3자리까지이며, 국가 번호 PPP는 국제 표준을 따른다.
    (0ZZ)-1RRR ? 1로 시작하는 번호는 특수번호로 별도의 서비스를 제공하는 데 사용된다. 경우에 따라 지역번호가 필요한 경우도 있다.
- 출처 위키백과

따라서 순서대로 파싱하는 편이 편리합니다.

*/
	var RegNotNum = /[^0-9]/g;
	var res = [], cur = 0, len;
	
	if (str == "" || str == null)
		return "";

	str = clean.to.string(str);
	str = str.replace(RegNotNum, '');

	if (str.length < 4)
		return str;
		
	glue = glue || '-';
	len = str.length;
	
	
	while(cur < len){
		switch(str[cur]){
			case "0":
				// 앞에 뭔가 붙어있는 번호입니다.
				// 지역번호일수도 있고 휴대폰일 수도 있습니다.
				if( /[2-6]/.test(str[cur+1]) ){
					// 지역번호입니다.
					// 이게 2면 02 (서울) 그 외에는 세 자리가 지역번호가 됩니다.
					if( str[cur+1] == '2' ){
						res.push(str.substr(cur,2));
						cur += 2;
					}else{
						res.push(str.substr(cur,3));
						cur += 3;
					}
				}else{
					// 기타 특수 번호입니다.
					// 01X = 무선통신망
					// 08X = 시외전화
					// 07Y, 09Y = 예비
					// 070 = 인터넷전화
					// 00X = 국제전화
					// 085XX, 014XX, 003XX, 007XX 는 다섯자리, 013X는 네 자리, 그 외에는 세 자리를 끊습니다.
					if( /(85|14|03|07)/.test(str.substr(cur+1,2)) ){
						res.push(str.substr(cur,5));
						cur+=5;
					}else if( str.substr(cur+1,2) == '13'){
						res.push(str.substr(cur,4));
						cur += 4;
					}else {
						res.push(str.substr(cur,3));
						cur+=3;
					}
				}

				break;
			default:
				// 일반 전화번호입니다.
				// 사실 1로 시작하는 건 특수 번호지만 어차피 취급은 똑같습니다.
				
				if( len-cur == 8 ){
					res.push(str.substr(cur, 4));
					res.push(str.substr(cur+4));
					cur = len;
				}else if( len-cur == 7){
					res.push(str.substr(cur, 3));
					res.push(str.substr(cur+3));
					cur = len;
				}else{
					// 국제전화의 뒤쪽일 경우 길이가 위와 다를 수 있는데 
					// 경우의 수가 너무 많습니다.
					// 전문적인 전화번호 판독기가 아니므로 이 부분은 그냥 포기합니다.
					res.push(str.substr(cur));
					cur = len;
				}
				break;
			
			
		}
	}

	return res.join(glue);
};
