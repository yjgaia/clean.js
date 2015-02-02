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