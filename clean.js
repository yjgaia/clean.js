// 요기는 namespace 정보를 담고있어요.
// 헤헤

var
// root
clean;

// 패키지 정보에요!
( typeof global === 'undefined' ? window : global).clean = clean = {

	info : {},

	// 데이터 처리
	object : {},
	func : {},
	array : {},
	date : {},
	string : {},
	integer : {},
	bool : {},

	// helpers
	is : {},
	to : {},
	valid : {},
	helper : {},

	// 브라우저 전용 패키지들
	dom : {
		effect : {}
	},
	cookie : {},
	ajax : {},
	websocket : {},

	// 모듈
	module : {},

	// 다국어 지원 (i18n)
	korean : {}
};

// node.js에서 실행하면 node.js 모듈로 넘겨요!
if ( typeof exports !== 'undefined') {
	module.exports = clean;
}

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
			httpRequest.onreadystatechange = function() {};
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

// delete 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.del = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'DELETE', callback);
};

// get 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.get = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'GET', callback);
};

// post 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.post = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'POST', callback);
};

// put 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.put = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	clean.ajax.call(url, 'PUT', callback);
};

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

// 배열 요소가 포함되어있는지 확인
clean.array.contains = function(array, search) {
	//REQUIRED: array
	//REQUIRED: search

	// 배열이 아니거나 값이없으면 false
	if (clean.is.array(array) === false || array.length == 0) {
		return false;
	}

	// 인덱스 검사
	if (array.indexOf === Array.prototype.indexOf) {
		return array.indexOf(search) != -1;
	}

	// indexOf가 없다면 값을 찾는다
	var check = false;

	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index += 1) {
		// 요소를 callback으로 쏴줘요!
		// callback 에서 elem 혹은 this로 개별 변수에 접근합니다.
		if (array[index] === search) {
			check = true;
		}

		break;
	}

	return check;
};

// 배열에서 해당 값이 몇개 존재하는지 찾기
clean.array.count = function(array, search) {
	//REQUIRED: array
	//REQUIRED: value

	var
	// 카운트
	count = 0;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (search === value) {
			count += 1;
		}
	});

	// 최종적으로 찾은 값 반환
	return count;
};

clean.array.difference = function() {
	//OPTIONAL array, array, array...

	var result = [];

	// 모든 배열을 합친다!
	clean.object.each(arguments, function(array) {
		result = result.concat(array);
	});

	return clean.array.filter(result, function(value) {
		// 하나씩만 있는 것들을 찾아낸다.
		return clean.array.count(result, value) === 1;
	});
};

// 배열의 요소를 각각 처리한다!
clean.array.each = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback(elem, index of elem){...}

	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index += 1) {
		// 요소를 callback으로 쏴줘요!
		// callback 에서 elem 혹은 this로 개별 변수에 접근합니다.
		callback.apply(array[index], [array[index], index]);
	}
};

// 배열의 모든 멤버가 지정된 조건에 충족하는지 여부를 확인합니다.
clean.array.every = function(array, callback, args) {
	//REQUIRED: array
	//REQUIRED: callback(elem, index of elem, args){...}
	//OPTIONAL: args

	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index += 1) {
		// 모두 조건에 부합해야 true, 그 외에는 false
		if (callback.apply(array[index], [array[index], index], [array[index], index, args]) === false) {
			return false;
		}
	}

	return true;
};

// 배열에서 값들 찾아갖고 배열로 반환!
clean.array.filter = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var
	// 찾은 값들
	finds = [];

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (check(value) === true) {

			// 값을 삽입!
			finds.push(value);
		}
	});

	// 최종적으로 찾은 값들 반환
	return finds;
};

// 배열에서 값 찾기
clean.array.find = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var
	// 찾은 값
	find;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (check(value) === true) {

			// 값을 삽입!
			find = value;

			// each 종료!
			return;
		}
	});

	// 최종적으로 찾은 값 반환
	return find;
};

// 배열의 첫번째 요소를 n만큼 반환한다.
clean.array.first = function(array, n) {
	//REQUIRED: array
	//OPTIONAL: n

	// 결과
	var result = [];
	// 배열길이
	var length = array.length;

	n = arguments[1] || 1;

	// 배열이고 사이즈가 0보다 크며 n이 양수인 경우
	if (clean.is.array(array) && length > 0 && n > 0) {
		result = array.slice(0, n);
	}

	return result;
};

// 배열들의 교집합을 구한다.
clean.array.intersection = function(array) {
	//REQUIRED: array
	//OPTIONAL: array arguments

	// 인자로 들어온 배열들을 하나의 배열로!
	var rest = Array.prototype.slice.call(arguments, 1);

	// 필터링
	return clean.array.filter(clean.array.unique(array), function(value) {
		// 나머지 배열들에 대해서 각 배열들의 배열요소가 값과 일치하는지
		// 일치 한다면 필터에 걸린다!
		return clean.array.every(rest, function(other) {
			return clean.array.contains(other, value);
		});
	});
};

// 배열 요소에 대해 method 함수를 invoke 한다.
clean.array.invoke = function(array, method) {
	//REQUIRED: array
	//REQUIRED: method
	//OPTIONAL: args, args, args...

	// argument가 있으면..
	var args = Array.prototype.slice.call(arguments, 2);

	// 배열을 돌면서
	return clean.array.map(array, function(value) {
		// 함수 실행
		return (clean.is.func(method) ? method : value[method]).apply(value, args);
	});
};

// 배열의 마지막 요소를 n만큼 반환한다.
clean.array.last = function(array, n) {
	//REQUIRED: array
	//OPTIONAL: n

	// 결과
	var result = [];
	// 배열길이
	var length = array.length;

	n = arguments[1] || 1;

	// 배열이고 사이즈가 0보다 크며 n이 양수인 경우
	if (clean.is.array(array) && length > 0 && n > 0) {
		result = array.slice(-n);
	}

	return result;
};

// 배열 요소에 callback 처리한 배열을 구한다
clean.array.map = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback

	var result = [];

	// callback 처리한 값의 배열을 반환
	clean.object.each(array, function(value) {
		result.push(callback(value));
	});

	return result;
};

// 배열에서 최대 값 찾기
clean.array.max = function(array) {
	//REQUIRED: array

	var
	// 찾은 최대값
	max;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// max가 아직 지정되지 않았거나 현재 값보다 작으면
		if (max === undefined || max < value) {
			// max를 현재 값으로 뙇!
			max = value;
		}
	});

	// 최종적으로 찾은 max값 반환
	return max;
};

// 배열에서 최소 값 찾기
clean.array.min = function(array) {
	//REQUIRED: array

	var
	// 찾은 최소값
	min;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// min이 아직 지정되지 않았거나 현재 값보다 작으면
		if (min === undefined || min < value) {
			// min을 현재 값으로 뙇!
			min = value;
		}
	});

	// 최종적으로 찾은 min값 반환
	return min;
};

// 키배열과 값배열을 가지고 객체 생성
clean.array.object = function(array, values) {
	//REQUIRED: array
	//REQUIRED: values

	var result = {};

	clean.array.each(array, function(value, index) {
		// 키값에 값을 집어넣는다!
		result[value] = values[index];
	});

	return result;
};

// 배열을 해당 범위만큼 만든다!!
clean.array.range = function(start, stop, step) {
	//OPTIONAL: start
	//REQUIRED: stop
	//OPTIONAL: step

	var array = [];
	var index;
	var argLength = arguments.length;

	// 인자가 정수가 아니면 빈 배열을 리턴
	for ( index = 0; index < argLength; index += 1) {
		if (clean.is.integer(arguments[index]) === false) {
			return array;
		}
	}

	// 인자가 하나인 경우 stop으로 간주
	if (arguments.length <= 1) {
		stop = start;
		start = 0;
	}

	step = arguments[2] || 1;
	for ( index = start; index < stop; index = index + step) {
		array.push(index);
	}

	return array;
};

// 조건에 해당하지 않는 객체만 배열로 반환
clean.array.reject = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var result = [];

	clean.array.each(array, function(value) {
		// 조건에 안맞으면!
		if (check(value) === false) {
			result.push(value);
		}
	});

	return result;
};

// 배열에서 값을 제거 한다.
clean.array.remove = function(array) {
	//REQUIRED: array
	//OPTIONAL element, element, element...

	// 결과 배열
	var result = array.slice(0);

	clean.object.each(arguments, function(arg, key) {
		// 해당 배열 외 인자값이 있다면
		if (key > 0) {
			var index = result.indexOf(arg);
			if (index > -1) {
				// 존재하는 값을 제거한다.
				result.splice(index, 1);
			}
		}
	});

	return result;
};

// 배열들의 합집합을 구한다.
clean.array.union = function() {
	//OPTIONAL array, array, array...

	var result = [];

	// 모든 배열을 합친다!
	clean.object.each(arguments, function(array) {
		result = result.concat(array);
	});

	// 유니크한 값만 고르기!
	return clean.array.unique(result);
};

// 배열에서 유니크한 값만 뽑아낸다
clean.array.unique = function(array) {
	//REQUIRED: array

	// 결과
	var result = [];

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// value 를 포함하고 있지 않으면 푸시!
		if (clean.array.contains(result, value) === false) {
			result.push(value);
		}
	});

	// 결과 반환!!!
	return result;
};

// true, false 중 랜덤하게 반환~!
clean.bool.random = function() {

	// 0 이나 1 중에 랜덤하게 받아와서 0이면 false, 1이면 true!!
	return clean.integer.random(1) === 1;
};

// 쿠키를 로드해요!
clean.cookie.get = function(name) {
	//REQUIRED: name

	var arg = name + '=';
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while (i < clen) {

		var j = i + alen;

		if (document.cookie.substring(i, j) == arg) {
			return get_cookie_val(j);
		}

		i = document.cookie.indexOf(' ', i) + 1;

		if (i === 0) {
			break;
		}
	}

	// 없으면 undefined!
	return undefined;
};

// 쿠키를 셋팅해 보아요~
clean.cookie.set = function(name, value, expireDays) {
	//REQUIRED: name
	//REQUIRED: value
	//REQUIRED: expireDays

	var today = new Date();

	today.setDate(today.getDate() + expireDays);

	document.cookie = name + "=" + escape(value) + ";path=/; expires=" + today.toGMTString() + ";";
};

// 해당 쿠키의 value를 가져와요~
clean.cookie.value = function(offset) {
	//REQUIRED: offset

	var endstr = document.cookie.indexOf(';', offset);

	if (endstr === -1) {
		endstr = document.cookie.length;
	}

	return unescape(document.cookie.substring(offset, endstr));
};

// 지금이 언제냐?
clean.date.now = function() {

	// 지금은 지금이다!
	// 롸잇! 나우!
	return new Date();
};

// 날자를 읽기 편하게 보여줘용(YYYY-mm-dd HH:ii:ss)
//COMMENT: 형식도 바꿀 수 있게 하면 어떨까요?!
clean.date.timestamp = function() {
	
	var
	//요 내부꺼는 좀더 간단하게 할수있음 알려주세용.. 무식하게 돌리는거라.... 따로 함수로 빼긴 그렇고...
	leadingZeros = function(n, digits) {
		//REQUIRED: n: 숫자에요~!
		//REQUIRED: search: 0을 표시해줄 자릿수예요!!
		
		var zero = ''; //0을 표시해줄 변수하나 대입해줘요.
		n = n.toString(); //n값이 숫자일지 몰르니 문자열로 바꿔줍시다.

		
		if (n.length < digits) { //n 값의 길이가 digits 보다 작으면!
			for (i = 0; i < digits - n.length; i++) //씐나게 ditgits보다 적은만큼 아래 씐나게 for 돌면서 0을 추가해줘요~ 
				zero += '0';
		}

		//싄나게 000 같이 만들어준거와 n값을 붙여서 값을 전달해줘요~ 당연히 문자열로요~
		return zero + n;
	};

	var d = new Date();
	var result =
	leadingZeros(d.getFullYear(), 4) + '-' +
	leadingZeros(d.getMonth() + 1, 2) + '-' +
	leadingZeros(d.getDate(), 2) + ' ' +

	leadingZeros(d.getHours(), 2) + ':' +
	leadingZeros(d.getMinutes(), 2) + ':' +
	leadingZeros(d.getSeconds(), 2);

	return result;
};

//TODO:
// 1. 두번째 파라미터가 object면, element의 attribute를 지정한다!!
// 예) clean.dom.attr(el, { type : 'text' });
// 2. 두번째 파라미터가 string이면, element의 attribute를 가져온다!!
// 예) clean.dom.attr(el, 'type'); -> 'text'
clean.dom.attr = function(el, data) {
	//REQUIRED: el
	//REQUIRED: data

	// data가 object면!!
	if (clean.is.object(data) === true) {

		// object의 프로퍼티를 하나씩 돌면서,
		clean.object.each(data, function(value, key) {

			// el의 attribute로 삽입!!
			el.setAttribute(key, value);
		});
	}

	// data가 string이면!!
	else if (clean.is.string(data) === true) {

		// el의 attribute를 반환!!!
		return el.getAttribute(data);
	}
};

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

/**
 * 지정된 태그의 요소를 생성.
 * @param tag       필수, 태그 이름.
 * @param options   옵션, 태그 생성 후 지정할 속성들. 예제 참조.
 * @return {HTMLElement} 생성된 DOM 리턴.
 *
 * attr  은 사용자 지정 요소나 DOM 지정불가한 요소를 정의하기 위한 속성. (예: data-custom)
 * style 은 스타일을 JSON 으로 정의 (JS 표준 스타일이름과 동일함. 예:borderRightColor)
 * init  은 DOM 생성 후 이벤트 처리 등 각종 유연한 작업이 필요할 때 콜백으로 정의 가능.
 * 예제)
 * clean.dom.create('button',{
        attr:{type:'button'},
        name:'mybutton',value:'myvalue',
        style:{border:'1px solid red'},
        init:function(){
            this.onclick=function(){
                alert('my button clicked.');
            };
        }
    })
 * @see https://gist.github.com/composite/4507324
 */
clean.dom.create = function(tag, options){
    //REQUIRED: tag
    //OPTIONAL: options

    options = options || {};
    return (function(dom){
        //없으면 null 그대로
        if(!dom) return dom;
        //속성명 정의
        var STYLE='style',ATTR='attr',TYPE='type',INIT='init',FUNC;
        for(var n in options){
            //스타일 적용
            if(n==STYLE){
                for(var m in options[STYLE]) dom[STYLE][m]=options[s][m];
            //비공식속성 적용
            }else if(n==ATTR){
                for(var m in options[ATTR]) dom.setAttribute(m,options[ATTR][m]);
            //init 콜백. 속성 모두 정의 후 발생
            }else if(n==INIT&&typeof(options[n])==='function'){
                FUNC = options[n];
            //type 속성은 브라우저간 적용 문제로 비공식 적용
            }else if(n==TYPE){
                dom.setAttribute(n,options[n]);
            //기타 속성은 DOM 다이렉트 적용
            }else dom[n]=options[n];
        }
        //콜백 실행
        if(FUNC) FUNC.call(dom,options);
        //이후 생성된 DOM 리턴
        return dom;
    })(document.createElement(tag));
};
// 문서 높이 구하기인데... 마땅히 어디다가 둘때가;;;
//COMMENT: 여기 두심 됩니당!! ㅋㅋ 이름은 좀 변경 했어용!!
clean.dom.docHeight = function() {

	var d = document;
	
	// 현재 문서의 높히를 구해요!
	return Math.max(
		Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
		Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
		Math.max(d.body.clientHeight, d.documentElement.clientHeight)
	);
};

// clean.js의 셀렉터입니다!
clean.dom.find = function(selectors) {
	//REQUIRED: selectors: css스타일의 쿼리 값

	// 일단은... IE8이상에서 지원하는 querySelector으로 작성해 두었습니다!
	return document.querySelector(selectors);
};

// clean.js의 셀렉터입니다!
clean.dom.findAll = function(selectors) {
	//REQUIRED: selectors: css스타일의 쿼리 값

	// 일단은... IE8이상에서 지원하는 querySelectorAll으로 작성해 두었습니다!
	return document.querySelectorAll(selectors);
};

//TODO:
//TODO:
// element의 attribute를 지운다!!!
// TODO: 
//TODO:
// element의 style을 지운다!!!
// TODO: 
// 1. 두번째 파라미터가 object면, element의 style을 지정한다!!
// 예) clean.dom.style(el, { fontSize : 16 });
// 2. 두번째 파라미터가 string이면, element의 style을 가져온다!!
// 예) clean.dom.style(el, 'fontSize'); -> 16
// TODO: 

clean.dom.style = function(el,data){
	
	//datd가 object면 	
	if(clean.is.object(data) === true) {
		
		//styleSet인 data에서 한개씩 뽑아내서 stlyeOne에 대입하여
		for( var styleOne in data){
			
			///el의 styleOne에 매칭되는 styleProperty에 넘어온 data의 styleOne에 해당하는 value를 대입힌다.
			el.style[styleOne]=data[styleOne];
		}
	}
	//datd가 string이면
	else if(clean.is.string(data) === true) {
		
		//el의 style이름이 data와 매칭 되는것을 반환 
		//ex. el의 style 중  display = 'inline'이 있을때 
		//data가 'display'면 inline반환
		return getComputedStyle(el,null).getPropertyValue(data);
	}

};

// element의 style들을 객체로 가져온다!!
// 예) clean.dom.styles(el); -> { fontSize : 16 }
// TODO: 


clean.dom.styles = function(el,param){
	var jsonObj;
	var stringifyObj;
	
	//해당 element에 적용되어있는  css에 더하여 기본적으로 적용되어있는 모든 css를 가져온다.
	if(param == 'all'){
		jsonObj = getComputedStyle(el,'');
	}
	
	//기본적으로 적용되어있는 css 외에 사용자가 property를 지정한 css 만 가져온다.
	/*
	 * 구현중..
	 * document.styleSheets 에는 현제 페이지에 로딩되어있는 stylesheet의 카운트가 저장되고 이는 lengh로 호출 가능하다.
	 * ex 1 start
	 *      <style>
	 * 		 #test{
	 * 		 	 display:inline;
	 * 		 }
	 * 		</style>
	 * 		<link rel="stylesheet" href="./css/test.css">
	 * 		
	 * 		##주의 ##
	 *      cleanjs가 stylesheet의 수를 count해야해서 모든 css 아래에 배치해야 적용이 된다.
	 * 		<script src="../clean.js"></script>
	 * 		alert(document.styleSheets.length); // 2
	 * ex 1 end 
	 * 
	 * document.styleSheets[0]에는 저음 style태그의 내용들이, document.styleSheets[1]에는 link된 stylesheet의 내용이 들어있다.
	 * 
	 * 그리고 var cssContents= document.styleSheets[0].cssRules를 호출하면 
	 * 
	 * 첫번재 로딩된 (직접삽입된 <style>태그의 내용들) 스타일이 저장되어있다.
	 * alert(cssContents.legnth);//3 (#test, #test1, #test2)
	 * 
	 * style 의 각 각 이름과, style은
	 * alert(cssContents[0].selectorText);//#test
	 * alert(cssContents[0].style.cssText);//display:inline;
	 * 
	 * 이렇게 호출한다. 
	 * 여기서부터 해결해야함.
	 *  
	 * 
	 */
	else if(param == 'applied'){
		jsonObj = {flag:'adding..'};
	}
	
	else{
		//잘못된 명령어라면 아무것도 undefined를 입력한다.
		return jsonObj;
	}
	
	return jsonObj;

};


//TODO:
//TODO:


/**
 * 특정 콘텍스트에 바인딩한 함수를 만들어서 돌려줍니다.
 * @param {Function} funArg
 * @param {Object} context
 * @returns {Function} {bound}
 */
clean.func.bind = function(funArg, context) {
	var partial = Array.prototype.splice.apply(arguments, [2]);

	// 바운드 함수를 만듭니다.
	var Bound = function() {
		// apply에 전달할 매개변수 배열이 필요합니다.
		var args = partial.concat(Array.prototype.splice.apply(arguments, [0]));
		if (false === ( funArg instanceof Bound )) {
			return funArg.apply(context, args);
		}

		funArg.apply(funArg, args);
	};

	// 프로토타입
	Bound.prototype = funArg.prototype;
	return Bound;
};

/**
 * 함수를 nDelayTime 만큼 지연 호출한다.
 *
 * @param {Function} fnArg - 호출할 함수
 * @param {Number} nDelayTime - 지연호출 시간
 */
clean.func.delay = function(fnArg, nDelayTime) {
    var aPartial = Array.prototype.splice.apply( arguments, [2] );
    var fnWrapped = function(){
        fnArg.apply(null, aPartial);
    };

    setTimeout(fnWrapped, nDelayTime);
};

// 만 나이를 구하는 함수에요. 미쿡나이죠.
// 
clean.helper.age = function(yyyymmdd) {
	//REQUIRED: yyyymmdd 태어난 생년월일이에요. 예) 19800205

	var 
	//리턴할 만 나이
	age;

	var yyyy = clean.to.integer(clean.to.string(yyyymmdd).substring(0,4));
	var mmdd = clean.to.string(yyyymmdd).substring(4,6) + clean.to.string(yyyymmdd).substring(6,8);

	var d = new Date();
	var tmonth = d.getMonth() + 1; //getMonth는 0(1월)~11(12월)을 반환합니다.
	var tdate = d.getDate();

	//자리수를 맞춰주기 위한 처리. 한 자리일 떄 앞에 0을 붙여줍니다.
	var today = ((tmonth < 10)? '0' + tmonth : tmonth) + ((tdate < 10)? '0' + tdate : tdate);
	var age = d.getFullYear() - yyyy + 1;

	//생일이 지났는지 체크하여 계산
	if (today < mmdd) {
		age = age - 2;
	} else {
		age = age - 1;
	}

	return age;
};

clean.helper.base64Encode = function(input) {
	//REQUIRED: input
	
	 input = escape(input);
     var output = "";
     var chr1, chr2, chr3 = "";
     var enc1, enc2, enc3, enc4 = "";
     var i = 0;

     do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
           enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
           enc4 = 64;
        }

        output = output +
           keyStr.charAt(enc1) +
           keyStr.charAt(enc2) +
           keyStr.charAt(enc3) +
           keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
     } while (i < input.length);

     return output;
};

// 몇초를 기다릴까나?
clean.helper.delay = function(seconds, func) {

	// seconds 초 기달려!
	// 기달리고 func 실행해!
	setTimeout(func, seconds * 1000);
};

// 랜덤 색상문자열 생성!
clean.helper.randomColor = function() {

	// #09ab77 같은 색상문자열 반환
	return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
};

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

// 브라우저 정보를 가져옵니다.
clean.info.browser = function() {
	//TODO: 현재 사용하는 브라우저를 깃점으로 해서 target은 없엠.
	//간단하게 체크하는거기에 좀더 세부적인 코드가 필요합니다.
	var browser = {a:navigator.userAgent.toLowerCase()}
	if (browser.chrome === true) {
		return "chrome";
	} else if (browser.ie6 === true) {
		return "ie6";
	} else if (browser.ie7 === true) {
		return "ie7";
	} else if (browser.ie8 === true) {
		return "ie8";
	} else if (browser.ie9 === true) {
		return "ie9";
	} else if (browser.ie10 === true) {
		return "ie10";
	} else if (browser.opera === true) {
		return "opera";
	} else if (browser.safari === true) {
		return "safari";
	} else if (browser.safari3 === true) {
		return "safari3";
	} else if (browser.mac === true) {
		return "mac";
	} else if (browser.firefox === true) {
		return "firefox";
	} else {
		return "none";
	}
};

// 디바이스 정보를 가져옵니다.
clean.info.device = (function(){
	var agent = navigator.userAgent;
	var isIOS = agent.match(/(iPad|iPhone|iPod)/g) ? true : false;
	var ios = (function(){
		if(isIOS){
			var startPoint = agent.indexOf('OS ');
			if((agent.indexOf('iPhone') > -1 || agent.indexOf('iPad') > -1) && startPoint > -1){
				return 1 * (agent.substr(startPoint + 3, 3).replace('_', '.'));
			}
		}else{
			return false;
		}
	})();

	// device.isIOS : IOS면 true 아니면 false
	// device.ios : ios7일 경우 7, ios6.1일 경우 6.1을 리턴, 아니면 false
	// 개인적으로는 html에 ios ios-7 클래스 등을 덧붙이도록 만들어서 사용하고 있습니다.
	return {
		isIOS : isIOS,
		ios : ios
	}
})();
/**
 * 숫자를 읽기쉼게 3자리마다 쉼표 표시.
 * @param number 쉼표 추가할 숫자
 * @returns {string} 쉼표 추가된 숫자 문자열 리턴.
 *
 * 예제) clean.integer.format(35782340534); // 35,782,340,534
 * @see https://gist.github.com/composite/4343031
 */
clean.integer.format = function(number) {
    //REQUIRED number
    
    //숫자 아니거나 1000 이하는 변환 필요없음.
    if(isNaN(+number)||+number<1e3) return number;
    //파라미터 준비
    number=String(number);var result='';
    //숫자 반전시켜 저장
    for(var i=number.length-1;i>=0;i--) result+=number.charAt(i);number='';
    //3자리마다 쉼표 적용
    for(var i=result.length-1;i>=0;i--) number+=result.charAt(i)+(!(i%3)?',':'');
    //끝 쉼표 정리 후 리턴
    return number.replace(/,$/,'');
};
// 랜덤한 정수 반환~!
clean.integer.random = function(min, max) {
	//OPTIONAL: min: 최소값
	//REQUIRED: max: 최대값

	// max 부분에 값이 없으면 max가 아니라 min이 입력되지 않은것.
	if (max === undefined) {

		// max 값을 되찾고,
		max = min;

		// 기본값인 0을 넣어줍니다!
		min = 0;
	}

	// Math 함수들을 이용해서 랜덤한 정수를 반환!!!
	return Math.floor(Math.random() * (max - min + 1) + min);
};

//TODO: arguments 객체인지 확인하는 기능이 필요합니다!!
// 배열인가?
clean.is.array = function(target) {
	//REQUIRED: target

	return target instanceof Array;
};

/**
 * 입력된 값이 정해진 문자열로만 이루어졌는지 확인
 * @param target   확인할 문자열
 * @param search   제한할 문자열들
 * @param allowEmptyString true 일 경우 빈 문자열도 맞는걸로
 * @returns {Boolean}
 */
clean.is.containsCharsOnly = function(target, search, allowEmptyString) {
	//REQUIRED: target
	//REQUIRED: search
	//OPTIONAL: allowEmptyString

	var
	// 정규표현식을 사용합시다!
	r = new RegExp("^[" + search + "]"+(allowEmptyString?"*":"+")+"$");
	return r.test(target);
};

// target이 비었나??
clean.is.empty = function(target) {
	//REQUIRED: target

	var
	// isEmpty?
	// 일단은 비었다는 가정을 하고!!
	isEmpty = true;

	// target이 객체면!
	if (clean.is.object(target) === true) {

		// target의 값들을 돌아보는데,
		clean.object.each(target, function(value, key) {

			// 어? 비지 않았어?!?!
			// 비지 않았네?!?!?
			// 그럼 false!!!!
			isEmpty = false;

			// 더이상 돌아볼 필요도 없다.
			return false;
		});
	}

	// target이 문자열이면!!
	else if (clean.is.string(target) === true) {

		// 빈 문자열이면 얄짤없지!
		if (target === '') {
			isEmpty = false;
		}
	}

	//TODO: 다른 type들에 대해서도 필요합니다!!

	return isEmpty;
};

// target1, 2가 같냐?
clean.is.equal = function(target1, target2) {
	//REQUIRED: target1
	//REQUIRED: target2

	var
	// isEqual!
	// 일단은 같다고 가정하고 틀리면 false로 바꿔줍시다.
	isEqual = true;

	// target들이 둘다 객체면!!
	if (clean.is.object(target1) === true && clean.is.object(target2) === true) {

		// target1의 값들을 돌아보면서,
		clean.object.each(target1, function(value, key) {

			// target1과 target2의 값이 다르면!
			if (target2[key] !== value) {

				// 이런. 다르군.
				isEqual = false;

				// each 중단!
				return false;
			}
		});

		// 이번엔 target2의 값들을 돌아보면서,
		clean.object.each(target2, function(value, key) {

			// target1과 target2의 값이 다르면!
			if (target1[key] !== value) {

				// 이런. 다르군.
				isEqual = false;

				// each 중단!
				return false;
			}
		});
	}

	//TODO: 다른 type들에 대해서도 필요합니다!!

	return isEqual;
};

// 니 함수냐?
clean.is.func = function(target) {
	//REQUIRED: target: 함순지 확인할 대상

	// 그냥 타입을 체크하면 되는듯ㅋ 찡긋ㅋ
	return typeof target === 'function';
};

// 정수인가?
clean.is.integer = function(target) {
	//REQUIRED: target: 정수인지 확인할 대상

	// target을 숫자로 바꾸고 원래 대상이랑 완줘니 똑같은지 보면 되겠습니당.
	return (clean.to.integer(target) === target);
};

// 숫잔가?
clean.is.number = function(target) {
	//REQUIRED: target: 숫잔지 확인할 대상

	// float으로 바꾸었을때, 숫자가 아닌것이 아니고,
	// isFinite(유한 수)가 통과되면 이것은 숫자다.
	//return isNaN(parseFloat(target)) === false && isFinite(target) === true;
	
	// 제길.. 위 코드보다 우리껄 쓰는게 좋자나???
	return (clean.to.number(target) === target);
};
/*
혹시나 몰라서; 또다른 방법으로;;
clean.is.number = function(target) {

	for(i=0; i<target.length; i++) {
		if(!(target.charCodeAt(i) > 47 && target.charCodeAt(i) < 58)) {
			return false;
		}
	}

	return true;
}
*/
// 객체인가?
clean.is.object = function(target) {
	//REQUIRED: target: 객체인지 확인할 대상

	// typeof로 후려쳤습니다.
	return typeof target === 'object';
};

// 문자열인가?
clean.is.string = function(target) {
	//REQUIRED: target

	// 일단 퍼왔는데... 더 좋은코드 있음 써주세요.
	// return toString.call(target) == '[object String]';

	// IE에서 toString에 접근하기 위해서는 Object.prototype.toString으로 접근해야합니다.
	// 브라우져에 상관없이 쓸 수 있는 typeof을 쓰는 건 어떨가요?
	// typeof (new String('abc')) === "object"라는 tipjs님의 말씀에 따라 instanceof 검사로직을 추가합니다.
	return typeof target === 'string' || target instanceof String;

	//COMMENT: 매우 만족합니당!
};

// 달을 구한다. 혹시나 ...아주 나중에....
// 진짜 나중에.... clean에서 다국어 지원한다면 요긴하게 쓰이겠지만...
// 아마 안쓰일꺼예요.... 아 그냥 그렇다구
//COMMENT: ㅋㅋ 한국어 지원인 만큼 korean 패키지로 이동했습니다.
clean.korean.month = function (month){
	//REQUIRED: month: 숫자값이예유~
	
	var monthArray = new Array("1월", "2월", "3월",
						   "4월", "5월", "6월",
						   "7월", "8월", "9월",
						   "10월", "11월", "12월");

	return monthArray[month];
};

// 문자열의 특정 값들을 치환하는 템플릿을 생성합니다!!
clean.string.Template = function() {

	//TODO: 작성 필요
};

/**
 * 공통으로 사용되는 인터랙션에 관련된 스크립트를 모아둔 모듈.
 * @module valid
 * @submodule ui
 */
clean.module.Validator = (function(){
    "use strict";

    /**
     * 값 검증을 위한 객체.<br/>
     * method chain 형식으로 구현되어있다.</br>
     * TODO fail 시 기본 동작 지정에 대한 기능 구현을 붙이자. 가령 검증에 실패한 input에 대해 focus가 자동으로 할당된다던가...
     * ex) var valid = new Validator();
     *     valid.isNotEmpty($("#target"), "대상이 비었습니다")
     *          .isNotEmpty($("#target2"), "대상이 비었습니다2")
     *          .result();
     * @author TaeHee Kim
     * @class Validator
     * @param options.onlyFirstMessageNotify true인 경우, 에러 메시지가 여러개여도 최초의 메시지만 notify 된다. 기본값 true
     * @param options.notifier 에러 메시지를 notify할 함수. 기본동작은 alert함수.
     * @constructor
     */
    var Validator = function(options){
        var that = this;
        var addErrorMessageAndValidFalse = function(failMessage, failCallback){
            var failIndex = that.failMessageList.length;
            if(failMessage){
                that.failMessageList.push(failMessage);
            }
            if(failCallback){
                that.failCallbackMap[failIndex] = failCallback;
            }
            that.isValid = false;
        };

        var defaultNotifier = function(failMessage, failCallback){
            alert(failMessage);
            if(failCallback){
                failCallback();
            }
        };

        if(!options){
            options = {};
        }

        /**
         * @property isValid 검증 성공 여부.<br/>
         * 검증이 1개라도 실패했다면 해당 값은 false로 바뀐다.
         * @type {Boolean}
         */
        this.isValid = true;
        this.validCount = 0;

        this.failMessageList = [];
        this.failCallbackMap = {};
        this.onlyFirstMessageNofify = options.onlyFirstMessageNofify || true;
        this.notifier = options.notifier || defaultNotifier;

        /**
         * condition이 false인지 체크한다.<br/>
         * condition에 함수를 넘길경우 해당 함수를 실행하며,
         * 해당 함수는 실행결과값으로 true 혹은 false를 리턴해야 한다.<br/>
         * condition의 값이 false거나 실행결과가 false인 경우 검증 실패처리한다.
         * @param conditionOrFunction 검증 조건 혹은 검증을 실행할 function
         * @param failMessage 검증 실패 시 추가될 메시지
         * @chainable
         */
        this.is = function(conditionOrFunction, failMessage, failCallback){
            that.validCount++;
            var condition;
            var validResult;
            // condition에 function이 넘어온 경우 해당 function을 실행하고 결과값을 얻음
            if(typeof conditionOrFunction === "function"){
                validResult = conditionOrFunction();
                if(typeof validResult === "object"){
                    if(validResult.hasOwnProperty("condition") &&
                        validResult.hasOwnProperty("failMessage")){

                        failMessage = validResult.failMessage;
                        condition = validResult.condition;
                    }else{
                        throw new Error("함수 실행 결과는 boolean 형이거나 condition, " +
                            "failMessage를 담은 object여야 합니다. " + JSON.stringify(validResult));
                    }
                }else if(typeof validResult === "boolean"){
                    condition = validResult;
                }
            }else{
                condition = conditionOrFunction;
            }


            if(!condition){
                addErrorMessageAndValidFalse(failMessage, failCallback);
            }
            return that;
        };

        /**
         * value의 값이 비어있지 않은지 체크한다.
         * @method isNotEmpty
         * @param value 비어있는지 여부를 체크할 값
         * @param failMessage 검증 실패 시 추가될 메시지
         * @chainable
         */
        this.isNotEmpty = function(value, failMessage, failCallback){
            return that.is(value && value !== "", failMessage, failCallback);
        };

        /**
         * a와 b가 같은지 체크한다.<br/>
         * === 를 이용해 비교하므로, true와 'true'는 같지 않다고 판단한다.
         * @method equals
         * @param a
         * @param b
         * @param failMessage
         * @chainable
         */
        this.equals = function(a, b, failMessage, failCallback){
            return that.is(a === b, failMessage, failCallback);
        };

        /**
         * a와 b가 같지 않은지 체크한다.
         * @param a
         * @param b
         * @param failMessage
         * @chainable
         */
        this.notEquals = function(a, b, failMessage, failCallback){
            return that.is(a !== b, failMessage, failCallback);
        };

        this.isOnlyNumber = function(value, failMessage, failCallback){
            return that.is(/^\d+$/.test(value), failMessage, failCallback);
        };

        /**
         * 검증결과를 강제로 실패처리한다.
         * @method fail
         * @param failMessage
         * @chainable
         */
        this.fail = function(failMessage, failCallback){
            that.is(false, failMessage, failCallback);
        };

        /**
         * 검증 결과를 실행한다.<br/>
         * 만일 검증 결과가 false인 경우
         * 설정된 notifier를 실행한다.
         * run 호출 이후 method chaining은 종료되며, 검증결과를 반환한다.
         * @chainable
         */
        this.run = function(){
            var notifyCount;
            var i;
            if(!that.isValid && that.failMessageList.length > 0){
                if(that.onlyFirstMessageNofify){
                    notifyCount = 1;

                }else{
                    notifyCount = that.failMessageList.length;
                }
                for( i = 0 ; i < notifyCount; i++){
                    var failCallback = that.failCallbackMap[i];
                    that.notifier(that.failMessageList[i], failCallback);
                }
            }

            return that.isValid;
        };

        this.isPass = function(){
            return that.isValid;
        };

        this.isFail = function(){
            return !that.isValid;
        };
    };

    return Validator;
})();


// 객체 파워 복사!!!
clean.object.copy = function(object) {
	//REQUIRED: object

	//TODO: deep copy를 구현해야함!!
	//TODO: 이것을 하기 위해선 array copy와 date형 copy등이 필요함!!
};

// object를 살펴보면서, 이미 있는건 무시하고 없는건 defaults에서 넣어줍니당당
clean.object.defaults = function(object, defaults) {
	//REQUIRED: object
	//REQUIRED: defaults

	// defaults의 프로퍼티들을 살펴보면서,
	clean.object.each(defaults, function(value, key) {

		// 읎네???
		if (clean.object.has(object, key) === false) {

			// 자! 가져라!
			object[key] = value;
		}
	});
};

// 객체의 프로퍼티를 각각 처리한다!
clean.object.each = function(object, callback) {
	//REQUIRED: object
	//REQUIRED: callback

	var
	// 프로퍼티의 키에요.
	key;

	// 모든 프로퍼티를 둘러봅니다.
	for (key in object) {

		// 안전하게 객체에 잘 있나 확인하고,
		if (object.hasOwnProperty(key) === true) {

			// 프로퍼티의 값과 키를 callback으로 쏴줘요!
			// 만약 callback의 결과값이 false면 더이상 살펴보지 않고 중단!
			if (callback(object[key], key) === false) {
				break;
			}
		}
	}
};

// 객체 확!장!
clean.object.extend = function(object, extend) {
	//REQUIRED: object: 본래 객체
	//REQUIRED: extend: 확장 객체

	// 확장 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(extend, function(value, key) {

		// 본래 객체에 없는거면,
		if (clean.object.has(extend, key) === false) {

			// 과감하게 삽입!!!
			object[key] = value;
		}
	});
};

// object 내의 function들의 key을 반환해주는 기능!!!
clean.object.functionKeys = function(object) {
	//REQUIRED: object

	var
	// 쓕쓕 뽑아냅시다.
	functionKeys = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// 값이 function 이면!
		if (clean.is.func(value)) {
			
			// function key들을 솹윕!
			functionKeys.push(key);
		}
	});

	// 뽑아낸 funcion key들을 반환!
	return functionKeys;
};

// object에 특정 값이 있는지 확인합니다!!
clean.object.has = function(object, key) {
	//REQUIRED: object
	//REQUIRED: key

	// 너 그 값 안갖고있냐?
	return object[key] !== undefined;
};

// object를 key와 value의 순서를 바꾸어주는 기능!
clean.object.invert = function(object) {
	//REQUIRED: object

	var
	// 바꿔 바꿔~! 모든걸 다바꿔~!
	invert = {};

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// invert 객체의 value에 key를 값으로다가 삽입!!!
		invert[value] = key;
	});

	// 만들어진 invert 반환!
	return invert;
};

// object의 키들을 배열로 반환하는 함수
clean.object.keys = function(object) {
	//REQUIRED: object

	var
	// 키들의 배열
	keys = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// 키들을 배열에 넣습니다.
		keys.push(key);
	});

	// 최종적으로 키들의 배열 반환!
	return keys;
};

// object의 특정 값들을 제외하고 뽑아내는 기능!!!
clean.object.omit = function(object) {
	//REQUIRED: object
	//OPTIONAL: arguments[1], arguments[2]...: 제외할 값들의 key!!!

	var
	// 뽑아낸 값들을 갖고있을 객체!~!
	omit = {};

	// 객체의 프로퍼티를 일단 넣는다!
	clean.object.each(object, function(value, key) {

		// 쑤우우우욱~~
		omit[key] = value;
	});

	// omit 함수를 실행할 때 넘어온 arguments 들을 돌아보면서...
	clean.object.each(arguments, function(value) {

		// 대상이 되는 object는 넘기고~~ 넘기고~~
		if (value !== object) {

			// 파워제거!
			// arguments의 value가 제거할 값들의 key니까 이렇게...
			delete omit[value];
		}
	});

	// 뽑아낸 객체를 반환!~!
	return omit;
};

// object를 [key, value] 배열로 바꾸어주는 기능!!
clean.object.pairs = function(object) {
	//REQUIRED: object

	var
	// [key, value] 배열!
	pairs = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// [key, value]를 배열에 넣습니다!
		pairs.push([key, value]);
	});

	// 최종적으로 [key, value] 배열 반환!
	return pairs;
};

// object의 특정 값들을 뽑아내는 기능!!!
clean.object.pick = function(object) {
	//REQUIRED: object
	//OPTIONAL: arguments[1], arguments[2]...

	var
	// 뽑아낸 값들을 갖고있을 객체!~!
	pick = {};

	// pick 함수를 실행할 때 넘어온 arguments 들을 돌아보면서...
	clean.object.each(arguments, function(value) {

		// 대상이 되는 object는 넘기고~~ 넘기고~~
		if (value !== object) {

			// 파워삽입!
			// arguments의 value가 뽑아낼 값들의 key니까 이렇게...
			pick[value] = object[value];
		}
	});

	// 뽑아낸 객체를 반환!~!
	return pick;
};

// object의 값들을 배열로 반환하는 함수
clean.object.values = function(object) {
	//REQUIRED: object

	var
	// 값들의 배열
	values = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value) {

		// 키들을 배열에 넣습니다.
		values.push(value);
	});

	// 최종적으로 값들의 배열 반환!
	return values;
};

// 문자열 사이 값을 출력합니다!
clean.string.between = function(target, start, end) {
	//REQUIRED target
	//REQUIRED start
	//OPTIONAL end

	// 시작점
	var startPos = target.indexOf(start);
	// 끝점
	var endPos = clean.string.reverse(target).indexOf(end);

	startPos = startPos !== -1 ? startPos : 0; 
	endPos = endPos !== -1 ? target.length - endPos : target.length; 

	// 자릅니다!
	return target.substring(startPos, endPos);
}
/** 
 * 바이트 사이즈를 구합니다요..
 * 맥에서 보니까 한글이 다 깨져 있네요 --;; 수정
 * @author Axsusia
 * @param str 문자열 반환입니다.
 */
clean.string.byteSize = function(str){
	/**
	 * size : 문자열의 현재 싸이즈
	 * c : char
	 * i : 변수
	 * for for문 돌면서 size 에 add  >> add >> 끝
	 */
	var size, c, i;
	for(size=i=0;c=str.charCodeAt(i++);size+=c>>11?2:c>>7?2:1);
	return size;
}
// 문자열에서 해당문자가 포함되었는지 확인합니다
clean.string.contains = function(target, search) {
	//REQUIRED: target: 대상문자열입니다!
	//REQUIRED: search: 확인할 문자열입니다!

	// search를 찾아가지고 인덱스를 확인합니다!
	return target.indexOf(search) != -1;
};

// 글자를 바이트 단위로 자릅니다
clean.string.cutByteString = function(message, maximum) {
	//REQUIRED: message : 자를 문자열
	//REQUIRED: maximum : 자를 바이트 크기.

	//안녕하세요, 3 이렇게 값을던지면
	//안.... 만 표시해줍니다~ 아시죠 한글은 2바이트씩!
	var nbytes = 0;
	var inc=0;
	var msg='';
	var msgMore = '...';
	var msglen = message.length;
	for (i=0; i<msglen; i++)
	{
		var ch = message.charAt(i);
		if ( escape(ch).length > 4 )
		{
			inc = 2;
		}else
		if ( ch == '\n' )
		{
			if ( message.charAt(i-1) != '\r' )
			{
				inc=1;
			}
		}else
		if ( ch=='<' || ch=='>')
		{
			inc=4;
		}else
		{
			inc =1;
		}
		if ( (nbytes + inc ) > maximum)
		{
			break;
		}
		nbytes += inc;
		msg += ch;
	}
    if (message != msg)
    	msg = msg + msgMore;
	return msg;
}
// 문자열을 escape합니다!!
// 특히나 한국어는 escpae가 많이많이 상당히 필요하죵ㅇㅇㅇ!
clean.string.escape = function(string) {
	//REQUIRED: string: escape 할 문자열

	// encodeURIComponent를 이용합니다!
	// 알파벳과 숫자 외 문자를 모두 escape!!
	// http://도 http%3A%2F%2F로 바껴요!
	return encodeURIComponent(string);
};

// 문자열에서 HTML 태그를 escape 합니다.
clean.string.escapeHtml = (function(){
	var regExAmp = /&/g, regExGt = />/g, regExLt = /</g,
		regExQuot = /"/g, //"
		regExApos = /'/g; //'
	return function( target ){
		//REQUIRED: target: 바꿀 대상의 문자열입니다!
		// target에 문제가 있으면 빈문자열 아니면 문자열에서 HTML 태그를 escape한후 반환합니다.
		return !target ? '' : target.replace( regExAmp, '&amp;' )
			.replace( regExGt, '&gt;' )
			.replace( regExLt, '&lt;' )
			.replace( regExQuot, '&quot;' )
			.replace( regExApos, '&apos;' );
	};
})();

//전화번호에 하이픈을 넣어서 반환한다
//target->str로 변경했습니당~
clean.string.hyphenOnPhoneNum = function(str, glue) {
	//REQUIRE : str
	//OPTIONAL : glue 하이픈이 아니라 다른 걸 쓰고 싶으면 여기에 설정합니다.
/* 대한민국의 전화번호 체계는 아래와 같습니다.


    XXXX-YYYY ? 같은 지역 안으로 전화를 걸 경우. 국번호 XXXX는 최대 4자리까지, 가입자 개별 번호 YYYY는 4자리로 구성되며, 국번호는 2부터 9까지의 숫자로 시작한다.
    0ZZ-XXXX-YYYY ? 다른 지역으로 전화를 걸 경우. 지역번호 ZZ는 최대 두 자리로, 2부터 6까지의 숫자로 시작한다.
    0NN-(0ZZ)-XXXX-YYYY ? 일반 전화가 아닌 다른 통신망으로 전화를 걸 경우. 통신망 식별번호 NN은 최대 4자리까지이다. 지역번호는 시외전화에서 다른 지역으로 전화를 걸 때만 사용한다.
    00N-PPP-QQQQQQQ ? 대한민국 바깥으로 전화를 걸 경우. 국제전화 통신망 식별번호 N은 최대 3자리까지이며, 국가 번호 PPP는 국제 표준을 따른다.
    (0ZZ)-1RRR ? 1로 시작하는 번호는 특수번호로 별도의 서비스를 제공하는 데 사용된다. 경우에 따라 지역번호가 필요한 경우도 있다.
- 출처 위키백과

따라서 순서대로 파싱하는 편이 편리합니다.

*/
	var RegNotNum = /[^0-9]/g;
	var res = [], cur = 0, len;
	
	if (str == "" || str == null)
		return "";

	str = clean.to.string(str);
	str = str.replace(RegNotNum, '');

	if (str.length < 4)
		return str;
		
	glue = glue || '-';
	len = str.length;
	
	
	while(cur < len){
		switch(str[cur]){
			case "0":
				// 앞에 뭔가 붙어있는 번호입니다.
				// 지역번호일수도 있고 휴대폰일 수도 있습니다.
				if( /[2-6]/.test(str[cur+1]) ){
					// 지역번호입니다.
					// 이게 2면 02 (서울) 그 외에는 세 자리가 지역번호가 됩니다.
					if( str[cur+1] == '2' ){
						res.push(str.substr(cur,2));
						cur += 2;
					}else{
						res.push(str.substr(cur,3));
						cur += 3;
					}
				}else{
					// 기타 특수 번호입니다.
					// 01X = 무선통신망
					// 08X = 시외전화
					// 07Y, 09Y = 예비
					// 070 = 인터넷전화
					// 00X = 국제전화
					// 085XX, 014XX, 003XX, 007XX 는 다섯자리, 013X는 네 자리, 그 외에는 세 자리를 끊습니다.
					if( /(85|14|03|07)/.test(str.substr(cur+1,2)) ){
						res.push(str.substr(cur,5));
						cur+=5;
					}else if( str.substr(cur+1,2) == '13'){
						res.push(str.substr(cur,4));
						cur += 4;
					}else {
						res.push(str.substr(cur,3));
						cur+=3;
					}
				}

				break;
			default:
				// 일반 전화번호입니다.
				// 사실 1로 시작하는 건 특수 번호지만 어차피 취급은 똑같습니다.
				
				if( len-cur == 8 ){
					res.push(str.substr(cur, 4));
					res.push(str.substr(cur+4));
					cur = len;
				}else if( len-cur == 7){
					res.push(str.substr(cur, 3));
					res.push(str.substr(cur+3));
					cur = len;
				}else{
					// 국제전화의 뒤쪽일 경우 길이가 위와 다를 수 있는데 
					// 경우의 수가 너무 많습니다.
					// 전문적인 전화번호 판독기가 아니므로 이 부분은 그냥 포기합니다.
					res.push(str.substr(cur));
					cur = len;
				}
				break;
			
			
		}
	}

	return res.join(glue);
};

// 문자열의 왼쪽을 trim 합니다.
clean.string.lTrim = (function(){
	var regExTrim;
	// lTrim 을 지원하면
	if( !!String.prototype.lTrim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.lTrim();
		};
	// lTrim 을 지원하지 않으면
	}else{
		regExTrim = /^\s+/;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();

/**
 * 문자열의 왼쪽을 채워주는 함수
 * @param string 대상 문자열
 * @param char   채울 문자열
 * @param loop   원하는 문자열 길이
 * @return {string} 채워진 문자열 리턴.
 *
 * 예제) pad1('12','0',4); //0012
 * @see https://gist.github.com/composite/8396308
 */
clean.string.padLeft = function(string, char, loop) {
    //REQUIRED string
    //OPTIONAL char
    //OPTIONAL loop

    //옵션 파라미터의 기본값 적용
    string = String(string);char = char || ' ';loop = isNaN(+loop) ? string.length : +loop;
    //왼쪽에 끼워넣고
    for(var i=0,len=loop-string.length;i<len;i++)
        string = String(char) + string;
    //리턴.
    return string;
};
// 랜덤 문자열을 반환하는 함수입니다.
clean.string.random = function(size) {
	//REQUIRED: size: 올매나 긴 문자열을 만들건지 ㅋ

	var
	// 너, 문자열.
	str = '',

	// 랜덤하게 생성 가능한 character 셋
	possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

	// index!
	i;

	// size까지 돌면서
	for ( i = 0; i < size; i += 1) {
		// 문자열에서 랜덤하게 하나의 char을 끄집어 와 추가합니다!
		str += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}

	// 마지막으로 반! 환!
	return str;
};

// 문자열에서 특정 문자열을 모두 제거한다!
clean.string.removeAll = function(target, search) {
	//REQUIRED: target: 대상 문자열입니다!
	//REQUIRED: search: 제거할 문자열입니다!

	// search를 찾아가지고 빈 문자열로 교체합니다.
	// 이러면 모두 제거가 되겠죵?
	return clean.string.replaceAll(target, search, '');
};

// 문자열에서 특정 문자열을 모두 변경한다!
clean.string.replaceAll = function(target, search, replace) {
	//REQUIRED: target: 바꿀 대상의 문자열입니다!
	//REQUIRED: search: 바꿀 문자열입니다!
	//REQUIRED: replace: 바뀔 문자열입니다!

	// search를 찾아가지고 쪼갠뒤에 replace로 바꿔서 붙힙니다.
	return target.split(search).join(replace);
};

// 문자열을 거꾸로!
clean.string.reverse = function(target) {
	//REQUIRED target

	return target.split('').reverse().join('');
}

// 문자열의 오른쪽을 trim 합니다.역쉬 트림 수정하신분 세세함이 돋보입니다!
clean.string.rTrim = (function(){
	var regExTrim;
	// rTrim 을 지원하면
	if( !!String.prototype.rTrim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.rTrim();
		};
	// rTrim 을 지원하지 않으면
	}else{
		regExTrim = /\s+$/;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();
// 문자열에서 HTML 태그를 삭제합니다.
clean.string.stripTag = (function(){
	var regExTag;
	regExTag = /(<([^>]+)>)/ig;
	return function( target ){
		//REQUIRED: target: 바꿀 대상의 문자열입니다!
		// target에 문제가 있으면 빈문자열 아니면 문자열에서 태그를 제거한후 반환합니다.
		return !target ? "" : target.replace( regExTag, "" );
	};
})();

// 문자열을 trim 합니다.
clean.string.trim = (function(){
	var regExTrim;
	// trim 을 지원하면
	if( !!String.prototype.trim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.trim();
		};
	// trim 을 지원하지 않으면
	}else{
		regExTrim = /^\s*|\s*$/g;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();

// escape한 문자열 원래 문자열로 돌립니다!!
// 특히나 한국어는 escpae가 많이많이 상당히 필요하죵ㅇㅇㅇ!
clean.string.unescape = function(escape) {
	//REQUIRED: escape: escape 된 문자열

	// decodeURIComponent를 이용합니다!
	// escape가 encodeURIComponent를 이용하였기 때문!!
	return decodeURIComponent(escape);
};

// 어떤 대상을 배열로 변경
clean.to.array = function(thing) {
	//REQUIRED: thing: 변경할 대상

	//TODO: 어똫게 array로 바꾸지?
};

// 정수로 바꾼다! (32비트 이상도 처리)
clean.to.integer = function(thing) {
	//REQUIRED: thing: 변경할 대상

	// 음.. 더 좋은 방법이 없을까요?
	return parseInt(thing, 10);
};

// 정수로 바꾼다! (32 bit!)
clean.to.integer32 = function(thing) {
	//REQUIRED: thing: 변경할 대상

	/*
	 js의 비트연산자는 기본적으로 32비트 signed int를 대상으로 합니다.
	 피연산자가 다른 형식일 경우 자동으로 해당 형식으로 변환한 뒤 연산
	 을 시도하구요.  이 과정이 단순히 parseInt를 사용하는지는 모르겠는
	 데, "0xff"같은 문자열도 16진수로 변환해서 처리를 해주더라구요. 스
	 펙문서를 제가 못 찾은건지 그건 확인을 못 해봤지만,  어쨌든 그래서
	 비트연산의 대상이 되면 소수점같은거 없는 깔끔한 정수가 됩니다.

	 또한, 반환값도 당연히 32비트 정수로 정해져 있기 때문에  null  NaN
	 undefined infinity 그런거 없이 무조건 0을 반환합니다.  예외도 발생
	 시키지 않구요.   이는 어떠한 값을 "반드시 정수일 것을 보장" 하기에
	 좋은 방법이라 은근히 많이 사용되는 잔스킬입니다.

	 같은 맥락에서 아래 것들도 같은 작용을 합니다.

	 ~~v	// bitwise NOT
	 v<<0	// bitwise shift
	 */
	return thing | 0;
};

// 숫자로 바꾼다!
clean.to.number = function(thing) {
	//REQUIRED: thing: 변경할 대상

	// 이거 말고 더 조은 수단이 있나요? 궁금...
	// 10진수 실수로 파싱합니다.
	return parseFloat(thing, 10);
};

// 문자열로 바꾼다!
clean.to.string = function(thing) {
	//REQUIRED: thing

	return String(thing);
};

