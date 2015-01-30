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

