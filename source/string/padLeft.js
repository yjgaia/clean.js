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