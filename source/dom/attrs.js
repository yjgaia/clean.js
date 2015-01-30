// element의 attribute들을 객체로 가져온다!!
// 예) clean.dom.attrs(el); -> { type : 'text' }
clean.dom.attrs = function(el) {

	var
	// attribute들!!
	attrs = {},

	// attribute 데이타!!!!
	attrData,

	// index!!
	i;

	for ( i = 0; i < el.attributes.length; i += 1) {

		// attribute 데이타를 뽑아낸다.
		attrData = el.attributes[i];

		// 삽입!
		attrs[attrData.nodeName] = attrData.nodeValue;
	}

	// 모은 attribute들을 반환한다!
	return attrs;
};
