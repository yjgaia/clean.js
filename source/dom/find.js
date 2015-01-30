// clean.js의 셀렉터입니다!
clean.dom.find = function(selectors) {
	//REQUIRED: selectors: css스타일의 쿼리 값

	// 일단은... IE8이상에서 지원하는 querySelector으로 작성해 두었습니다!
	return document.querySelector(selectors);
};
