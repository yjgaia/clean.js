// NaN, false, undefined, empty value를 제외한 값을 반환한다
clean.array.compact = function(array) {
	//REDUIRED: array

	return clean.array.filter(array, function(value) {
		// 한방에 할 수 있는거 없나요 ㅠㅠ
		if (value !== 'undefined' && isNaN(value) === false && value !== false && value !== 0 && value !== '') {
			return true;
		} else {
			return false;
		}
	});
};
