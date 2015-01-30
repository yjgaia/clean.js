// ajax 요청을 쏴쏴~~
clean.ajax.get = function(url, method, callback) {
	//REQUIRED: url
	//REQUIRED: method
	//REQUIRED: callback

	var
	// http request
	httpRequest;

	if (window.XMLHttpRequest) {// Mozilla, Safari, ...
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) {// IE
		try {
			httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
			}
		}
	}

	if (!httpRequest) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				callback(httpRequest.responseText);
			} else {
				alert('There was a problem with the request.');
			}
		}
	};

	method = method.toUpperCase();

	switch(method){
	case 'GET':
		httpRequest.open(method, url);
		httpRequest.send();
		break;
	case 'POST':
	case 'PUT':
	case 'DELETE':
		httpRequest.open(method, url.substring(0, url.indexOf('?')));
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		httpRequest.send(url.substring(url.indexOf('?') + 1));
		break;
	}
};
