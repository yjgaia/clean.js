// 만 나이를 구하는 함수에요. 미쿡나이죠.
// 
clean.helper.age = function(yyyymmdd) {
	//REQUIRED: yyyymmdd 태어난 생년월일이에요. 예) 19800205

	var 
	//리턴할 만 나이
	age;

	var yyyy = clean.to.integer(clean.to.string(yyyymmdd).substring(0,4));
	var mmdd = clean.to.string(yyyymmdd).substring(4,6) + clean.to.string(yyyymmdd).substring(6,8);

	var d = new Date();
	var tmonth = d.getMonth() + 1; //getMonth는 0(1월)~11(12월)을 반환합니다.
	var tdate = d.getDate();

	//자리수를 맞춰주기 위한 처리. 한 자리일 떄 앞에 0을 붙여줍니다.
	var today = ((tmonth < 10)? '0' + tmonth : tmonth) + ((tdate < 10)? '0' + tdate : tdate);
	var age = d.getFullYear() - yyyy + 1;

	//생일이 지났는지 체크하여 계산
	if (today < mmdd) {
		age = age - 2;
	} else {
		age = age - 1;
	}

	return age;
};
