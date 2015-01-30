// 브라우저 정보를 가져옵니다.
clean.info.browser = function() {
	//TODO: 현재 사용하는 브라우저를 깃점으로 해서 target은 없엠.
	//간단하게 체크하는거기에 좀더 세부적인 코드가 필요합니다.
	var browser = {a:navigator.userAgent.toLowerCase()}
	if (browser.chrome === true) {
		return "chrome";
	} else if (browser.ie6 === true) {
		return "ie6";
	} else if (browser.ie7 === true) {
		return "ie7";
	} else if (browser.ie8 === true) {
		return "ie8";
	} else if (browser.ie9 === true) {
		return "ie9";
	} else if (browser.ie10 === true) {
		return "ie10";
	} else if (browser.opera === true) {
		return "opera";
	} else if (browser.safari === true) {
		return "safari";
	} else if (browser.safari3 === true) {
		return "safari3";
	} else if (browser.mac === true) {
		return "mac";
	} else if (browser.firefox === true) {
		return "firefox";
	} else {
		return "none";
	}
};
