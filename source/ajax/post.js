// post 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.post = (url, callback) => {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'POST', callback);
};
