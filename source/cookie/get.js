// 쿠키를 로드해요!
clean.cookie.get = function(name) {
	//REQUIRED: name

	var arg = name + '=';
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while (i < clen) {

		var j = i + alen;

		if (document.cookie.substring(i, j) == arg) {
			return get_cookie_val(j);
		}

		i = document.cookie.indexOf(' ', i) + 1;

		if (i === 0) {
			break;
		}
	}

	// 없으면 undefined!
	return undefined;
};
