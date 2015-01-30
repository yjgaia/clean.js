#String에 찾아온걸 환영하네.

`String` 구역은 아주 유용하게 쓰일 것들이 많다네. 왜 이를테면 글자의 공백을 없엔다거나 아니면 글자의 일부를 변경한다거나 어렵지 않게 바꿀 수 있는 부분들이 많다네. 자네 벌써부터 호기심이 가득찬 눈빛이로군 알겠네 바로 같이 알아 봅세.

---

##contains
문자열에 해당 문자가 포함 되어잇는지 확인합니다.

```
//예제 코드
var targetString = "암~ 쏘핫 난 너무 멋져~";
var searchString = "너무";

var result = clean.string.contains(targetString, searchString);
console.log(result);

//결과
true 혹은 false
```

##escapeHtml
문자열에서 HTMl 태그를 escape 합니다.
```
//코드
var tag = "<a href='http://naver.com'>링크 태그예유~</a>";
var result = clean.string.escapeHtml(tag);
console.log('바꾸기 전 =>' + tag);
console.log('바꾼 후 =>' + result);

//결과
바꾸기 전 =><a href='http://naver.com'>링크 태그예유~</a>
바꾼 후 =>&lt;a href=&apos;http://naver.com&apos;&gt;링크 태그예유~&lt;/a&gt;
```

##removeAll
문자열에서 특정 문자열을 모두 제거한다!
```
//코드
var targetString = '아싸라비야 콜롬비야 뿌악뿌악';
var removeString = '뿌악뿌악';
var result = clean.string.removeAll(targetString, removeString);
console.log('원래 문자 => ' + targetString);
console.log('삭제할 문자 => ' + removeString);
console.log('삭제후 결과 => ' + result);

//결과
원래 문자 => 아싸라비야 콜롬비야 뿌악뿌악
삭제할 문자 => 뿌악뿌악
삭제후 결과 => 아싸라비야 콜롬비야
```

##replaceAll
문자열에서 특정 문자열을 모두 변경한다!
```
//코드
var targetString = "가나 초콜릿 가나다 가가가나나나";
var searchString = "나";
var replaceString = "바";
var result = clean.string.replaceAll(targetString, searchString, replaceString);
console.log('변경할 문자열 => ' + targetString);
console.log('대상 문자 => ' + searchString);
console.log('바꿀 문자 => ' + replaceString);
console.log('결과 => ' + result);
//결과
변경할 문자열 => 가나 초콜릿 가나다 가가가나나나
대상 문자 => 나
바꿀 문자 => 바
결과 => 가바 초콜릿 가바다 가가가바바바
```

##stripTag
문자열에서 HTML 태그를 삭제합니다.

```
//코드
var tag = "<a href='http://naver.com'>링크 태그예유~</a>";
var result = clean.string.stripTag(tag);
console.log('삭제 전 =>' + tag);
console.log('삭제 후 =>' + result);
//결과
삭제 전 =><a href='http://naver.com'>링크 태그예유~</a>
삭제 후 =>링크 태그예유~
```

##trim
문자열을 trim 합니다.
```
//코드
var targetString = "    아싸라비야 콜롬비야 삐약삐약     ";
var result = clean.string.trim(targetString);
console.log('변경할 문자열 => ' + targetString);
console.log('변경후 문자열 => ' + result);

//결과
변경할 문자열 =>     아싸라비야 콜롬비야 삐약삐약      
변경후 문자열 => 아싸라비야 콜롬비야 삐약삐약

//부연설명 
//결과화면엔 티도안나지만 앞뒤 공백이 제거 됬음을 알립니다
```

##hyphenOnPhoneNum
전화번호에 하이픈( - ) 을 넣어서 반환한다.

```
//코드
var targetNumber = "01012341234";
var result = clean.string.hyphenOnPhoneNum(targetNumber);
console.log('하이픈 넣기전 => ' + targetNumber)
console.log('하이픈 넣은후 => ' + result)
//결과
하이픈 넣기전 => 01012341234
하이픈 넣은후 => 010-1234-1234
```

##random
랜덤 문자열을 반환하는 함수입니다.
```
//코드
var randomString = clean.string.random(15);
console.log('랜덤 문자열 =>' + randomString);

//결과
랜덤 문자열 => tGASq7LwUj6I591
```

계속 추가중입니다! 이상한 부분있음 수정해주세요!
