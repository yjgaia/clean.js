// 쿠키를 셋팅해 보아요~
clean.cookie.set = function(name, value, expireDays) {
	//REQUIRED: name
	//REQUIRED: value
	//REQUIRED: expireDays

	var today = new Date();

	today.setDate(today.getDate() + expireDays);

	document.cookie = name + "=" + escape(value) + ";path=/; expires=" + today.toGMTString() + ";";
};
