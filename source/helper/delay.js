// 몇초를 기다릴까나?
clean.helper.delay = function(seconds, func) {

	// seconds 초 기달려!
	// 기달리고 func 실행해!
	setTimeout(func, seconds * 1000);
};
