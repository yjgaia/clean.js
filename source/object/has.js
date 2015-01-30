// object에 특정 값이 있는지 확인합니다!!
clean.object.has = function(object, key) {
	//REQUIRED: object
	//REQUIRED: key

	// 너 그 값 안갖고있냐?
	return object[key] !== undefined;
};
