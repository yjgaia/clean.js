// get 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.get = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'GET', callback);
};
