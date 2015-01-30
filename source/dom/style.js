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
