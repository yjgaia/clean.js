// put 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.put = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'PUT', callback);
};
