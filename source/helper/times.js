// func를 몇번 수행할까나??
clean.helper.times = function(times, func) {

	var
	// index!!!
	i;

	// 0에서 times 만큼,
	for ( i = 0; i < tiems; i += 1) {

		// func를 실행한다!!
		// index를 넘겨주는건 덤!!
		func(i);
	}
};
