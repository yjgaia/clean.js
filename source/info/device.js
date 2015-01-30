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