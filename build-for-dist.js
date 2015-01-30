// 아래와 같이 입력하면 전체 소스를 빌드할거에요.
// node build
// 빌드하면 clean.js가 생성되게 해놨어요.
// 이것도 얼마든 수정 가능해요. 팍팍!
// source폴더의 모든 js를 빌드한다!!!

var
// node.js의 기본 파일 시스템 모듈이에요.
fs = require('fs'),

// node.js의 기본 경로 처리 모듈이에요.
path = require('path'),

// 스크립트를 불러오자!
script = '',

// 폴더를 쓕쓕 스캔합니다.
scanFolder = function(p) {
	//REQUIRED: p: 파일 혹은 폴더 경로에요.

	var
	// 폴더 경로들을 갖고있는 배열이에요.
	folderPaths = [],

	// 인덱스!
	i;

	// 폴더 내 파일들을 읽어와요!
	fs.readdirSync(p).forEach(function(name) {

		var fullPath = p + '/' + name;

		// 엇 폴더네?
		if (fs.statSync(fullPath).isDirectory() === true) {
			// 그럼 다시 스캔해라.
			folderPaths.push(fullPath);
		}

		// 엇 js 파일이네?
		else if (path.extname(name) === '.js') {
			// 그럼 clean.js에 반영해라.
			script += fs.readFileSync(fullPath).toString() + '\n';
		}
	});

	// 폴더들은 다시 스캔을!!
	for ( i = 0; i < folderPaths.length; i += 1) {
		scanFolder(folderPaths[i]);
	}
};

// 드뎌 스캔한다!
scanFolder('source');

// 이제 clean.js를 생성해요!
fs.writeFileSync('clean.js', script);
