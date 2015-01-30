// 간단한 서버에요. 테스트할때 요긴하게 쓰시라고!
// node simple-server.js
// 로 실행하시면 됩니다!

var
// 빨리빨리 실행되라고 포트번호는 8282입니다.
port = 8282,

// node.js의 기본 파일 시스템 모듈이에요.
fs = require('fs'),

// node.js의 기본 경로 처리 모듈이에요.
path = require('path'),

// server를 만듭니다.
server = require('http').createServer(function(req, res) {

	var
	// 주소
	url = req.url;

	// 파라미터는 제거할게영~
	if (url.indexOf('?') != -1) {
		url = url.substring(0, url.indexOf('?'));
	}

	// 루트 경로에 접근하면 index.html을 반환합니다!
	if (url == '/') {
		url = '/index.html';
	}

	var
	// 실제 파일 경로!
	filepath = './' + url,

	// 파일의 확장자!
	extname = path.extname(filepath),

	// 타입!
	contentType;

	switch (extname) {

		// 자바스크립트!
		case '.js':
			contentType = 'text/javascript';
			break;

		// 스타일시트!!
		case '.css':
			contentType = 'text/css';
			break;

		// jpg 이미지!
		case '.jpg':
		case '.jpeg':
			contentType = 'image/jpeg';
			break;

		// png 이미지!
		case '.png':
			contentType = 'image/png';
			break;

		// 플래시 파일!
		case '.swf':
			contentType = 'application/x-shockwave-flash';
			break;

		// 이도저도아니면... html이겠지?
		default :
			contentType = 'text/html';
			break;
	}

	// 파일이 존재하나요?
	fs.exists(filepath, function(exists) {

		// 오 존재하네요.
		if (exists === true) {

			// 파일을 읽습니다. 파일이니깐 바이너리로 읽어야겠죠?
			fs.readFile(filepath, 'binary', function(error, data) {

				// 에러가 없당ㅋ
				if (error === null) {

					res.writeHead(200, {
						'Content-Type' : contentType
					});
					res.write(data, 'binary');
					res.end();

				}

				// 에러가 있당 ㅜㅜ
				else {
					res.writeHead(500, {
						'Content-Type' : 'text/plain'
					});
					res.write(error);
					res.end();
				}
			});
		}

		// 존재하지 않는 자원에 접근했군요!
		else {
			res.writeHead(404, {
				'Content-Type' : 'text/plain'
			});
			res.write('404 Not Found.');
			res.end();
		}
	});
});

// 파워 서버 실행!!
server.listen(port);

// 잘 실행됬당ㅋ
console.log('clean.js simple server running! - http://localhost:' + port);
