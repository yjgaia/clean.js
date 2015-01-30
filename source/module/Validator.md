#설명
Validator는 여러가지 검증해야하는 부분에서 method chain 형태로 검증을 편하게 할 수 있는 객체이다.

#사용법
```js
var validator = new Validator();  // 생성

// 생성 후 chain 형식으로 검증할 내용을 연결하고, 마지막에 run을 호출하면
// 설정된 notifier 함수가 실행되며 검증결과를 알려준다.
validator
  .is(window, "전역객체가 존재하지 않습니다.")
  .equals("A", "A", "두 객체가 같지 않습니다.")
  .notEquals("A", "B", "두 객체가 같으면 안 됩니다.")
  .run(); // true return

var failValidator = new Validator();
failValidator
  .is(false, "검증에 실패했습니다.")
  .run(); // "검증에 실패했습니다" 라는 alert 뜨고 false return
```

#빌드
```
npm install
grunt
```

#테스트 실행
```
npm install
grunt karma
```


#문서 생성
```
npm install -g yuidoc
yuidoc -o yuidoc src
```
