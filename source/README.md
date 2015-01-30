#Cleanjs function list?

Cleanjs 에서 사용되는 함수들 입니당! 

[TOC]

##String's

### contains
문자열에 해당문자가 포함되어 있는지 확인합니다.

**Paramaters**

1. targetString - String
2. searchString - String

**Return**

`boolean`

**Uasge**

```
	var targetString = "암~ 쏘핫 난 너무 멋져~";
	var searchString = "너무";

	var result = clean.string.contains(targetString, searchString);
	console.log(result);
```


**Result**

`true` or `false`

---

### escapeHtml
문자열에서 HTML 태그를 escape 합니다

`escape` => 영어사전적의미는 달아나다, 탈풀하다 또는 나쁜상황에서 벗어나다, 불쾌하거나 위험한것을 피하다 인데 프로그래밍적으로 뭐라해야하나요;;;

**Paramaters**

1. tag - String

**Return**

`String`

**Uasge**

```
	var tag = "<a href='http://naver.com'>링크 태그예유~</a>";
	var result = clean.string.escapeHtml(tag);
	console.log('바꾸기 전 =>' + tag);
```


**Result**

Before

	<a href='http://naver.com'>링크 태그예유~</a>
    
After

	&lt;a href=&apos;http://naver.com&apos;&gt;링크 태그예유~&lt;/a&gt;

---

### removeAll
문자열에서 특정 문자열을 모두 제거한다.


**Paramaters**

1. targetString - String
2. removeString - String

**Return**

`String`

**Uasge**

```
	var targetString = '아싸라비야 콜롬비야 뿌악뿌악';
	var removeString = '뿌악뿌악';
	var result = clean.string.removeAll(targetString, removeString);
	console.log('삭제후 결과 => ' + result);
```


**Result**

Before

	아싸라비야 콜롬비야 뿌악뿌악
    
After

	아싸라비야 콜롬비야

---

### replaceAll

문자열에서 특정 문자열을 모두 변경한다!

**Paramaters**

1. targetString - String
2. searchString - String
3. replaceString - String

**Return**

`String`

**Uasge**

```
	var targetString = "가나 초콜릿 가나다 가가가나나나";
	var searchString = "나";
	var replaceString = "바";
	var result = clean.string.replaceAll(targetString, searchString, replaceString);
    console.log('결과 => ' + result);
```

**Result**

Before

	가나 초콜릿 가나다 가가가나나나

After

	가바 초콜릿 가바다 가가가바바바

---


### stripTag

문자열에서 HTML 태그를 삭제합니다.

**Paramaters**

1. tag - String

**Return**

`String`

**Uasge**

```
	var tag = "<a href='http://naver.com'>링크 태그예유~</a>";
	var result = clean.string.stripTag(tag);
	console.log('삭제 후 =>' + result);
```

**Result**

Before

	<a href='http://naver.com'>링크 태그예유~</a>

After
	
    링크 태그예유~
    
---


### trim

문자열의 앞뒤 공백을 제거합니다

**Paramaters**

1. targetString - String

**Return**

`String`

**Uasge**

```
	var targetString = "    아싸라비야 콜롬비야 삐약삐약     ";
	var result = clean.string.trim(targetString);
	console.log('변경후 문자열 => ' + result);
```

**Result**

Before

	    아싸라비야 콜롬비야 삐약삐약      

After

	아싸라비야 콜롬비야 삐약삐약
    
Comment

	결과화면엔 별다른 차이점이없지만 문자열의 앞뒤 공백이 제거되었음을 알립니다.
---


### hyphenOnPhoneNum

숫자로만 이루어진 전화번호에 하이픈( - ) 을 넣어서 반환한다.

**Paramaters**

1. targetNumber - String or Interger

**Return**

`String`

**Uasge**

```
	var targetNumber = "01012341234";
	var result = clean.string.hyphenOnPhoneNum(targetNumber);
	console.log('하이픈 넣은후 => ' + result)
```

**Result**

Before

	01012341234

After

	010-1234-1234

---


### random

알파벳을 지정한 수 만큼 무작위로 반환 합니다.

**Paramaters**

1. Number - Interger

**Return**

`String`

**Uasge**

```
	var randomLength = 15;
    var randomString = clean.string.random(randomLength);
    console.log('랜덤 문자열 =>' + randomString);
```

**Result**

	tGASq7LwUj6I591

Comment
	
    랜덤문자열은 항상 다른값으로 출력됩니다.
---


### between

문자열 사이의 값을 출력합니다.

**Paramaters**

1. target - String
2. start - Interger
3. end - Interger

**Return**

`String`

**Uasge**

```
	var targetString = "안녕하세요 저는 Cleanjs에  도움말 입니다."
	var start = 14;
    var end = 21;
    var betweenString = clean.string.between(targetString, start, end);
    console.log('문자열 뽑기 =>' + randomString);
```

**Result**

	Cleanjs
---


### Function


**Paramaters**



**Return**



**Uasge**




**Result**

---