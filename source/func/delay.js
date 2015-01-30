/**
 * 함수를 nDelayTime 만큼 지연 호출한다.
 *
 * @param {Function} fnArg - 호출할 함수
 * @param {Number} nDelayTime - 지연호출 시간
 */
clean.func.delay = function(fnArg, nDelayTime) {
    var aPartial = Array.prototype.splice.apply( arguments, [2] );
    var fnWrapped = function(){
        fnArg.apply(null, aPartial);
    };

    setTimeout(fnWrapped, nDelayTime);
};
