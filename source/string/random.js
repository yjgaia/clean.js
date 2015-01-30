// 랜덤 문자열을 반환하는 함수입니다.
clean.string.random = function(size) {
	//REQUIRED: size: 올매나 긴 문자열을 만들건지 ㅋ

	var
	// 너, 문자열.
	str = '',

	// 랜덤하게 생성 가능한 character 셋
	possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

	// index!
	i;

	// size까지 돌면서
	for ( i = 0; i < size; i += 1) {
		// 문자열에서 랜덤하게 하나의 char을 끄집어 와 추가합니다!
		str += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}

	// 마지막으로 반! 환!
	return str;
};
