// 해당 쿠키의 value를 가져와요~
clean.cookie.value = function(offset) {
	//REQUIRED: offset

	var endstr = document.cookie.indexOf(';', offset);

	if (endstr === -1) {
		endstr = document.cookie.length;
	}

	return unescape(document.cookie.substring(offset, endstr));
};
