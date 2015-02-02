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