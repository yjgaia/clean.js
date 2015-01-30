/**
 * 입력된 값이 정해진 문자열로만 이루어졌는지 확인
 * @param target   확인할 문자열
 * @param search   제한할 문자열들
 * @param allowEmptyString true 일 경우 빈 문자열도 맞는걸로
 * @returns {Boolean}
 */
clean.is.containsCharsOnly = function(target, search, allowEmptyString) {
	//REQUIRED: target
	//REQUIRED: search
	//OPTIONAL: allowEmptyString

	var
	// 정규표현식을 사용합시다!
	r = new RegExp("^[" + search + "]"+(allowEmptyString?"*":"+")+"$");
	return r.test(target);
};
