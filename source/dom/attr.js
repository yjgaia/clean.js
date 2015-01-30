// 1. 두번째 파라미터가 object면, element의 attribute를 지정한다!!
// 예) clean.dom.attr(el, { type : 'text' });
// 2. 두번째 파라미터가 string이면, element의 attribute를 가져온다!!
// 예) clean.dom.attr(el, 'type'); -> 'text'
clean.dom.attr = function(el, data) {
	//REQUIRED: el
	//REQUIRED: data

	// data가 object면!!
	if (clean.is.object(data) === true) {

		// object의 프로퍼티를 하나씩 돌면서,
		clean.object.each(data, function(value, key) {

			// el의 attribute로 삽입!!
			el.setAttribute(key, value);
		});
	}

	// data가 string이면!!
	else if (clean.is.string(data) === true) {

		// el의 attribute를 반환!!!
		return el.getAttribute(data);
	}
};
