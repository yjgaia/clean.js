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