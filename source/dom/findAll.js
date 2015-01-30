// clean.js의 셀렉터입니다!
clean.dom.findAll = function(selectors) {
	//REQUIRED: selectors: css스타일의 쿼리 값

	// 일단은... IE8이상에서 지원하는 querySelectorAll으로 작성해 두었습니다!
	return document.querySelectorAll(selectors);
};
